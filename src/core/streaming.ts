// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { ProfoundError } from './error';
import { type ReadableStream } from '../internal/shim-types';
import { makeReadableStream } from '../internal/shims';
import { findDoubleNewlineIndex, LineDecoder } from '../internal/decoders/line';
import { ReadableStreamToAsyncIterable } from '../internal/shims';
import { isAbortError } from '../internal/errors';
import { safeJSON } from '../internal/utils/values';
import { encodeUTF8 } from '../internal/utils/bytes';
import { loggerFor } from '../internal/utils/log';
import { MAX_STREAM_PENDING_BYTES, sizeLimitError } from '../internal/utils/body';
import type { Profound } from '../client';

import { APIError } from './error';

type Bytes = string | ArrayBuffer | Uint8Array | null | undefined;
// Upper bound on how much a JSONL stream may buffer for one value spread over several lines before
// the stream is given up on. A pretty-printed value completes well within this; the cap only trips
// when a malformed value never closes and would otherwise accumulate the rest of the stream.
const MAX_JSONL_BUFFER_BYTES = 4 * 1024 * 1024;

/** How far one JSON text has nested after a line: open brackets and braces, and whether a string is open. */
type JsonDepth = { depth: number; inString: boolean; escaped: boolean };

/**
 * Carries the bracket/brace depth of a JSON text across one more line, ignoring brackets inside
 * strings. A value can only be complete where the depth is back to zero outside a string, so the
 * JSONL reader parses only there instead of re-parsing the growing buffer after every line.
 */
const jsonDepthAfter = (line: string, state: JsonDepth): JsonDepth => {
  let { depth, inString, escaped } = state;
  for (let i = 0; i < line.length; i++) {
    const char = line.charCodeAt(i);
    if (inString) {
      if (escaped) escaped = false;
      else if (char === 0x5c) escaped = true;
      else if (char === 0x22) inString = false;
    } else if (char === 0x22) inString = true;
    else if (char === 0x7b || char === 0x5b) depth++;
    else if (char === 0x7d || char === 0x5d) depth--;
  }
  return { depth, inString, escaped };
};

export type ServerSentEvent = {
  event: string | null;
  data: string;
  raw: string[];
};
export type StreamingEventHandler = {
  kind: 'event' | 'fallthrough' | 'data';
  handle: string;
  eventType?: string | readonly string[] | null;
  errorProperty?: string;
  dataStartsWith?: string;
};

export class Stream<Item> implements AsyncIterable<Item> {
  controller: AbortController;
  #client: Profound | undefined;

  constructor(
    private iterator: () => AsyncIterator<Item>,
    controller: AbortController,
    client?: Profound,
  ) {
    this.controller = controller;
    this.#client = client;
  }

  static fromSSEResponse<Item>(
    response: Response,
    controller: AbortController,
    client?: Profound,
    handlers?: readonly StreamingEventHandler[],
  ): Stream<Item> {
    let consumed = false;
    const logger = client ? loggerFor(client) : console;

    async function* iterator(): AsyncIterator<Item, any, undefined> {
      if (consumed) {
        throw new ProfoundError('Cannot iterate over a consumed stream, use `.tee()` to split the stream.');
      }
      consumed = true;
      let done = false;
      try {
        for await (const sse of _iterSSEMessages(response, controller)) {
          const handler = streamHandlerForSSE(sse, handlers);
          if (handler?.handle === 'continue' || handler?.handle === 'ignore') continue;
          if (handler?.handle === 'error') throw streamError(sse, handler, response.headers);
          if (handlers?.length && handler?.handle !== 'yield') continue;
          try {
            yield JSON.parse(sse.data) as Item;
          } catch (error) {
            client?.logger?.error('Could not parse message into JSON:', sse.data);
            client?.logger?.error('From chunk:', sse.raw);
            throw error;
          }
        }
        done = true;
      } catch (e) {
        // If the user calls `stream.controller.abort()`, we should exit without throwing.
        if (isAbortError(e)) return;
        throw e;
      } finally {
        // If the user `break`s, abort the ongoing request.
        if (!done) controller.abort();
      }
    }

    return new Stream(iterator, controller, client);
  }

  /**
   * Generates a Stream from a newline-separated ReadableStream
   * where each item is a JSON value.
   */
  static fromReadableStream<Item>(
    readableStream: ReadableStream,
    controller: AbortController,
    client?: Profound,
  ): Stream<Item> {
    let consumed = false;

    async function* iterLines(): AsyncGenerator<string, void, unknown> {
      const lineDecoder = new LineDecoder();

      const iter = ReadableStreamToAsyncIterable<Bytes>(readableStream);
      for await (const chunk of iter) {
        for (const line of lineDecoder.decode(chunk)) {
          yield line;
        }
      }

      for (const line of lineDecoder.flush()) {
        yield line;
      }
    }

    async function* iterator(): AsyncIterator<Item, any, undefined> {
      if (consumed) {
        throw new ProfoundError('Cannot iterate over a consumed stream, use `.tee()` to split the stream.');
      }
      consumed = true;
      let done = false;
      try {
        // NDJSON/JSONL sends one complete JSON value per line, so each line parses on its own and
        // nothing accumulates. Some servers (and mock servers) pretty-print a single value across
        // several lines; those lines accumulate until the brackets they opened are closed, and only
        // then is the value parsed — once, so a long value costs linear time rather than a re-parse
        // of the whole buffer after every line.
        let pending: string[] = [];
        let pendingLength = 0;
        let state: JsonDepth = { depth: 0, inString: false, escaped: false };
        for await (const line of iterLines()) {
          if (done) continue;
          // A blank or whitespace-only line (a keep-alive) carries no value: JSON.parse would throw on it.
          if (!line.trim()) continue;
          pending.push(line);
          pendingLength += line.length + 1;
          state = jsonDepthAfter(line, state);
          if (state.depth > 0 || state.inString) {
            if (pendingLength > MAX_JSONL_BUFFER_BYTES) {
              throw sizeLimitError('JSON Lines value', MAX_JSONL_BUFFER_BYTES);
            }
            continue;
          }
          const text = pending.join('\n');
          pending = [];
          pendingLength = 0;
          state = { depth: 0, inString: false, escaped: false };
          yield JSON.parse(text) as Item;
        }
        // A value still open when the stream ended never parsed: surface that error rather than dropping data.
        if (pending.length) yield JSON.parse(pending.join('\n')) as Item;
        done = true;
      } catch (e) {
        // If the user calls `stream.controller.abort()`, we should exit without throwing.
        if (isAbortError(e)) return;
        throw e;
      } finally {
        // If the user `break`s, abort the ongoing request.
        if (!done) controller.abort();
      }
    }

    return new Stream(iterator, controller, client);
  }

  [Symbol.asyncIterator](): AsyncIterator<Item> {
    return this.iterator();
  }

  /**
   * Splits the stream into two streams which can be
   * independently read from at different speeds.
   */
  tee(): [Stream<Item>, Stream<Item>] {
    const left: Array<Promise<IteratorResult<Item>>> = [];
    const right: Array<Promise<IteratorResult<Item>>> = [];
    const iterator = this.iterator();

    const teeIterator = (queue: Array<Promise<IteratorResult<Item>>>): AsyncIterator<Item> => {
      return {
        next: () => {
          if (queue.length === 0) {
            const result = iterator.next();
            left.push(result);
            right.push(result);
          }
          return queue.shift()!;
        },
      };
    };

    return [
      new Stream(() => teeIterator(left), this.controller, this.#client),
      new Stream(() => teeIterator(right), this.controller, this.#client),
    ];
  }

  /**
   * Converts this stream to a newline-separated ReadableStream of
   * JSON stringified values in the stream
   * which can be turned back into a Stream with `Stream.fromReadableStream()`.
   */
  toReadableStream(): ReadableStream {
    const self = this;
    let iter: AsyncIterator<Item>;

    return makeReadableStream({
      async start() {
        iter = self[Symbol.asyncIterator]();
      },
      async pull(ctrl: any) {
        try {
          const { value, done } = await iter.next();
          if (done) return ctrl.close();

          const bytes = encodeUTF8(JSON.stringify(value) + '\n');

          ctrl.enqueue(bytes);
        } catch (err) {
          ctrl.error(err);
        }
      },
      async cancel() {
        await iter.return?.();
      },
    });
  }
}

export async function* _iterSSEMessages(
  response: Response,
  controller: AbortController,
): AsyncGenerator<ServerSentEvent, void, unknown> {
  if (!response.body) {
    controller.abort();
    if (
      typeof (globalThis as any).navigator !== 'undefined' &&
      (globalThis as any).navigator.product === 'ReactNative'
    ) {
      throw new ProfoundError(
        `The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api`,
      );
    }
    throw new ProfoundError(`Attempted to iterate over a response with no body`);
  }

  const sseDecoder = new SSEDecoder();
  const lineDecoder = new LineDecoder();

  const iter = ReadableStreamToAsyncIterable<Bytes>(response.body);
  for await (const sseChunk of iterSSEChunks(iter)) {
    for (const line of lineDecoder.decode(sseChunk)) {
      const sse = sseDecoder.decode(line);
      if (sse) yield sse;
    }
  }

  for (const line of lineDecoder.flush()) {
    const sse = sseDecoder.decode(line);
    if (sse) yield sse;
  }
}

/**
 * Given an async iterable iterator, iterates over it and yields full
 * SSE chunks, i.e. yields when a double new-line is encountered.
 *
 * The pending bytes live in a buffer that grows by doubling, and each search resumes where the last
 * one stopped, so an event arriving in many small chunks costs linear time. One event may not grow
 * past `MAX_STREAM_PENDING_BYTES`: a server that never ends it would otherwise exhaust memory.
 */
async function* iterSSEChunks(iterator: AsyncIterableIterator<Bytes>): AsyncGenerator<Uint8Array> {
  let data = new Uint8Array();
  let length = 0;
  let scanFrom = 0;

  for await (const chunk of iterator) {
    if (chunk == null) {
      continue;
    }

    const binaryChunk =
      chunk instanceof ArrayBuffer
        ? new Uint8Array(chunk)
        : typeof chunk === 'string'
          ? encodeUTF8(chunk)
          : chunk;

    if (length + binaryChunk.length > data.length) {
      const grown = new Uint8Array(Math.max(length + binaryChunk.length, data.length * 2));
      grown.set(data.subarray(0, length));
      data = grown;
    }
    data.set(binaryChunk, length);
    length += binaryChunk.length;

    let start = 0;
    for (;;) {
      const pending = data.subarray(start, length);
      const patternIndex = findDoubleNewlineIndex(pending, scanFrom);
      if (patternIndex === -1) {
        // The longest terminator is four bytes, so the last three may begin one the next chunk ends.
        scanFrom = Math.max(0, pending.length - 3);
        break;
      }
      yield pending.slice(0, patternIndex);
      start += patternIndex;
      scanFrom = 0;
    }
    if (start > 0) {
      data.copyWithin(0, start, length);
      length -= start;
    }
    if (length > MAX_STREAM_PENDING_BYTES) {
      throw sizeLimitError('server-sent event', MAX_STREAM_PENDING_BYTES);
    }
  }

  if (length > 0) {
    yield data.slice(0, length);
  }
}

class SSEDecoder {
  private data: string[];
  private event: string | null;
  private chunks: string[];

  constructor() {
    this.event = null;
    this.data = [];
    this.chunks = [];
  }

  decode(line: string) {
    if (line.endsWith('\r')) {
      line = line.substring(0, line.length - 1);
    }

    if (!line) {
      // empty line and we didn't previously encounter any messages
      if (!this.event && !this.data.length) return null;

      const sse: ServerSentEvent = {
        event: this.event,
        data: this.data.join('\n'),
        raw: this.chunks,
      };

      this.event = null;
      this.data = [];
      this.chunks = [];

      return sse;
    }

    this.chunks.push(line);

    if (line.startsWith(':')) {
      return null;
    }

    let [fieldname, _, value] = partition(line, ':');

    if (value.startsWith(' ')) {
      value = value.substring(1);
    }

    if (fieldname === 'event') {
      this.event = value;
    } else if (fieldname === 'data') {
      this.data.push(value);
    }

    return null;
  }
}

function partition(str: string, delimiter: string): [string, string, string] {
  const index = str.indexOf(delimiter);
  if (index !== -1) {
    return [str.substring(0, index), delimiter, str.substring(index + delimiter.length)];
  }

  return [str, '', ''];
}
const streamHandlerForSSE = (
  sse: ServerSentEvent,
  handlers: readonly StreamingEventHandler[] | undefined,
): StreamingEventHandler | undefined => {
  if (!handlers?.length) return undefined;
  const dataHandler = handlers.find(
    (handler) =>
      handler.kind === 'data' &&
      handler.dataStartsWith !== undefined &&
      sse.data.startsWith(handler.dataStartsWith),
  );
  if (dataHandler) return dataHandler;
  for (const handler of handlers) {
    if (handler.kind === 'event' && eventTypeMatches(sse.event, handler.eventType)) return handler;
    if (handler.kind === 'fallthrough') return handler;
  }
  return undefined;
};

const eventTypeMatches = (event: string | null, expected: StreamingEventHandler['eventType']): boolean => {
  if (expected === null) return event === null;
  if (Array.isArray(expected)) return expected.includes(event ?? '');
  return expected !== undefined && event === expected;
};

const streamError = (sse: ServerSentEvent, handler: StreamingEventHandler, headers: Headers): APIError => {
  const parsed = safeJSON(sse.data);
  const error = handler.errorProperty && isObject(parsed) ? parsed[handler.errorProperty] : parsed;
  return new APIError(undefined, error ?? parsed ?? sse.data, undefined, headers);
};

const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

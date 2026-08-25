// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIPromise } from './api-promise';
import type { APIResponseProps } from './internal/parse';
import * as Errors from './error';
import { uuid4 } from './internal/utils/uuid';
import { validatePositiveInteger, isAbsoluteURL, safeJSON, isEmptyObj } from './internal/utils/values';
import { sleep } from './internal/utils/sleep';
import { castToError, isAbortError } from './internal/errors';
import { getPlatformHeaders } from './internal/detect-platform';
import * as Shims from './internal/shims';
import * as Opts from './internal/request-options';
import { readEnv } from './internal/utils/env';
import {
  formatRequestDetails,
  loggerFor,
  parseLogLevel,
  type LogLevel,
  type Logger,
} from './internal/utils/log';
export type { Logger, LogLevel } from './internal/utils/log';
import type { RequestInit, RequestInfo, BodyInit, Fetch } from './internal/builtin-types';
import { buildHeaders, type HeadersLike, type NullableHeaders } from './internal/headers';
import type { FinalRequestOptions, RequestOptions } from './internal/request-options';
import type { HTTPMethod, FinalizedRequestInit, MergedRequestInit, PromiseOrValue } from './internal/types';
import { stringifyQuery } from './internal/utils/query';
import { toFile } from './core/uploads';
import { VERSION } from './version';
import {
  Organizations,
  type NamedResource,
  type PersonaProfile,
  type PersonaProfileBehavior,
  type PersonaProfileDemographics,
  type PersonaProfileEmployment,
  type Organization,
  type Category,
  type OrganizationRegionsResponse,
  type OrganizationModelsResponse,
  type OrganizationDomainsResponse,
  type OrganizationListAssetsResponse,
  type OrganizationGetPersonasResponse,
  type OrganizationListResponse,
  type OrganizationRegionsParams,
  type OrganizationDomainsParams,
  type OrganizationListAssetsParams,
  type OrganizationGetPersonasParams,
} from './resources/organizations/organizations';
import {
  Prompts,
  type PromptAnswersResponse,
  type PromptAnswersV2Response,
  type PromptStreamAnswersV2Response,
  type PromptAnswersParams,
  type PromptAnswersV2Params,
  type PromptStreamAnswersV2Params,
} from './resources/prompts';
import {
  Reports,
  type ReportInfo,
  type ReportResponse,
  type ReportResult,
  type TopicNameFilter,
  type PromptIDFilter,
  type TagNameFilter,
  type RootDomainFilter,
  type HostnameFilter,
  type URLFilter,
  type ReportCitationsResponse,
  type ReportSentimentV2Response,
  type ReportStreamCitationsResponse,
  type ReportStreamVisibilityResponse,
  type ReportStreamSentimentResponse,
  type ReportStreamCitationsV2Response,
  type ReportStreamVisibilityV2Response,
  type ReportStreamSentimentV2Response,
  type ReportStreamQueryFanoutsResponse,
  type ReportQueryVisibilityResponse,
  type ReportQueryCitationsResponse,
  type ReportQuerySentimentResponse,
  type ReportQueryQueryFanoutsResponse,
  type ReportCitationsParams,
  type ReportVisibilityParams,
  type ReportSentimentParams,
  type ReportSentimentV2Params,
  type ReportGetReferralsReportParams,
  type ReportGetBotsReportParams,
  type ReportQueryFanoutsParams,
  type ReportStreamCitationsParams,
  type ReportStreamVisibilityParams,
  type ReportStreamSentimentParams,
  type ReportStreamCitationsV2Params,
  type ReportStreamVisibilityV2Params,
  type ReportStreamSentimentV2Params,
  type ReportStreamQueryFanoutsParams,
  type ReportGetReferralsReportV2Params,
  type ReportGetBotsReportV2Params,
  type ReportQueryVisibilityParams,
  type ReportQueryCitationsParams,
  type ReportQuerySentimentParams,
  type ReportQueryQueryFanoutsParams,
} from './resources/reports/reports';
import { Content } from './resources/content/content';
import {
  Agents,
  type AgentListResponse,
  type AgentRetrieveResponse,
  type AgentCreateResponse,
  type AgentPublishResponse,
  type AgentUpdateResponse,
  type AgentRetrieveGraphResponse,
  type AgentListParams,
  type AgentRetrieveParams,
  type AgentCreateParams,
  type AgentUpdateParams,
  type AgentRetrieveGraphParams,
} from './resources/agents/agents';
import {
  KnowledgeBases,
  type KnowledgeBaseListResponse,
  type KnowledgeBaseSearchResponse,
  type KnowledgeBaseListParams,
  type KnowledgeBaseSearchParams,
} from './resources/knowledge-bases/knowledge-bases';
import {
  Projects,
  type ProjectListResponse,
  type ProjectCreateResponse,
  type ProjectRetrieveResponse,
  type ProjectGetStatusResponse,
  type ProjectArchiveResponse,
  type ProjectUnarchiveResponse,
  type ProjectListParams,
  type ProjectCreateParams,
  type ProjectRetrieveParams,
  type ProjectDeleteParams,
  type ProjectGetStatusParams,
  type ProjectArchiveParams,
  type ProjectUnarchiveParams,
} from './resources/projects/projects';
import {
  Integrations,
  type IntegrationListResponse,
  type IntegrationListParams,
} from './resources/integrations';
import {
  Documents,
  type DocumentCreateResponse,
  type DocumentListResponse,
  type DocumentRetrieveResponse,
  type DocumentUpdateResponse,
  type DocumentReplaceContentResponse,
  type DocumentCreateParams,
  type DocumentListParams,
  type DocumentRetrieveParams,
  type DocumentUpdateParams,
  type DocumentDeleteParams,
  type DocumentReplaceContentParams,
} from './resources/documents';
import { Ads } from './resources/ads/ads';
import * as SharedAPI from './resources/shared';

export type AuthTokenProvider = () => string | Promise<string>;

const environments = {
  production: 'https://api.tryprofound.com',
  development: 'https://dev.api.tryprofound.com',
};
type Environment = keyof typeof environments;

export interface ClientOptions {
  /**
   * WorkOS access token
   */
  accessToken?: string | AuthTokenProvider | null | undefined;

  /**
   * API Key
   */
  apiKey?: string | AuthTokenProvider | null | undefined;

  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `production` corresponds to `https://api.tryprofound.com`
   * - `development` corresponds to `https://dev.api.tryprofound.com`
   */
  environment?: Environment | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env["PROFOUND_BASE_URL"].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   *
   * @unit milliseconds
   */
  timeout?: number | undefined;

  /**
   * Additional `RequestInit` options to be passed to `fetch` calls.
   * Properties will be overridden by per-request `fetchOptions`.
   */
  fetchOptions?: MergedRequestInit | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we expect that `fetch` is defined globally.
   */
  fetch?: Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `null` in request options.
   */
  defaultHeaders?: HeadersLike | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Record<string, string | undefined> | undefined;

  /**
   * Set the log level.
   *
   * Defaults to process.env["PROFOUND_LOG"] or 'warn' if it isn't set.
   */
  logLevel?: LogLevel | undefined;

  /**
   * Set the logger.
   *
   * Defaults to globalThis.console.
   */
  logger?: Logger | undefined;
}

export type ProfoundOptions = ClientOptions;

/**
 * API Client for interfacing with the Profound API.
 */
export class Profound {
  accessToken: string | AuthTokenProvider | null;
  apiKey: string | AuthTokenProvider | null;

  baseURL: string;
  maxRetries: number;
  timeout: number;
  logger: Logger;
  logLevel: LogLevel | undefined;
  fetchOptions: MergedRequestInit | undefined;
  private fetch: Fetch;
  #encoder: Opts.RequestEncoder;
  protected idempotencyHeader?: string;
  private _baseURLOverridden: boolean;
  private _defaultBaseURL: string;
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Profound API.
   *
   * @param {string | AuthTokenProvider | null | undefined} [opts.accessToken=process.env["PROFOUND_ACCESS_TOKEN"] ?? null]
   * @param {string | AuthTokenProvider | null | undefined} [opts.apiKey=process.env["PROFOUND_API_KEY"] ?? null]
   * @param {Environment} [opts.environment=production] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL=process.env["PROFOUND_BASE_URL"] ?? https://api.tryprofound.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {MergedRequestInit} [opts.fetchOptions] - Additional `RequestInit` options to be passed to `fetch` calls.
   * @param {Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {HeadersLike} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Record<string, string | undefined>} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = readEnv('PROFOUND_BASE_URL'),
    accessToken = readEnv('PROFOUND_ACCESS_TOKEN') ?? null,
    apiKey = readEnv('PROFOUND_API_KEY') ?? null,
    ...opts
  }: ClientOptions = {}) {
    const options: ClientOptions = {
      accessToken,
      apiKey,
      ...opts,
      baseURL: baseURL || null,
    };
    const environment = options.environment ?? 'production';
    const baseURLOverridden = baseURL !== null && baseURL !== undefined && baseURL !== '';
    if (baseURLOverridden && options.environment)
      throw new Errors.ProfoundError(
        'Ambiguous URL; The `baseURL` option (or PROFOUND_BASE_URL env var) and the `environment` option are given. If you want to use the environment you must pass baseURL: null',
      );
    const defaultBaseURL = environments[environment];
    this.baseURL = options.baseURL || defaultBaseURL;
    this.timeout = options.timeout ?? Profound.DEFAULT_TIMEOUT /* 1 minute */;
    this.logger = options.logger ?? console;
    const defaultLogLevel = 'warn';
    // Set default logLevel early so that we can log a warning in parseLogLevel.
    this.logLevel = defaultLogLevel;
    this.logLevel =
      parseLogLevel(options.logLevel, 'ClientOptions.logLevel', this) ??
      parseLogLevel(readEnv('PROFOUND_LOG'), 'process.env["PROFOUND_LOG"]', this) ??
      defaultLogLevel;
    this.fetchOptions = options.fetchOptions;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetch = options.fetch ?? Shims.getDefaultFetch();
    this.#encoder = Opts.FallbackEncoder;

    const customHeadersEnv = readEnv('PROFOUND_CUSTOM_HEADERS');
    if (customHeadersEnv) {
      const parsed: Record<string, string> = {};
      for (const line of customHeadersEnv.split('\n')) {
        const colon = line.indexOf(':');
        if (colon >= 0) {
          parsed[line.substring(0, colon).trim()] = line.substring(colon + 1).trim();
        }
      }
      options.defaultHeaders = { ...parsed, ...options.defaultHeaders };
    }

    this._options = { ...options, baseURL: baseURLOverridden ? this.baseURL : undefined };
    this._baseURLOverridden = baseURLOverridden;
    this._defaultBaseURL = defaultBaseURL;

    this.accessToken = accessToken;
    this.apiKey = apiKey;
  }

  withOptions(options: Partial<ClientOptions>): this {
    // `baseURL` and `environment` are mutually exclusive in the constructor, so resolve exactly one of
    // them; the inherited pair cannot itself conflict because a base URL wins over a stored environment.
    // A nullish override counts as "not overridden" and inherits, so that a caller forwarding an optional
    // value — `withOptions({ environment: config.env })` — cannot silently re-resolve a pinned client onto
    // the default environment. Passing both explicitly still reaches the constructor guard, which is
    // intentional. An environment override clears the base URL as `null`, because only `null` skips the
    // constructor default that would re-read the base-URL env var and be ambiguous all over again.
    const inheritedBaseURL = this.#baseURLOverridden() ? this.baseURL : undefined;
    const inheritedEnvironment = inheritedBaseURL ? undefined : this._options.environment;
    const nextBaseURL =
      options.baseURL !== undefined ? options.baseURL : options.environment ? null : inheritedBaseURL;
    const nextEnvironment = options.environment ?? (options.baseURL ? undefined : inheritedEnvironment);
    const client = new (this.constructor as new (props: ClientOptions) => this)({
      ...this._options,
      maxRetries: this.maxRetries,
      timeout: this.timeout,
      logger: this.logger,
      logLevel: this.logLevel,
      fetch: this.fetch,
      fetchOptions: this.fetchOptions,
      accessToken: this.accessToken,
      apiKey: this.apiKey,
      ...options,
      baseURL: nextBaseURL,
      environment: nextEnvironment,
    });
    return client;
  }

  #baseURLOverridden(): boolean {
    // A named environment selects a default URL; only explicit overrides should bypass per-request defaults.
    return this._baseURLOverridden || this.baseURL !== this._defaultBaseURL;
  }

  protected defaultQuery(): Record<string, string | undefined> | undefined {
    return this._options.defaultQuery;
  }

  protected stringifyQuery(query: object | Record<string, unknown>): string {
    return stringifyQuery(query);
  }

  private getUserAgent(): string {
    return `${this.constructor.name}/JS ${VERSION}`;
  }

  protected defaultIdempotencyKey(): string {
    return `scalar-node-retry-${uuid4()}`;
  }

  protected makeStatusError(
    status: number,
    error: object | undefined,
    message: string | undefined,
    headers: Headers,
  ): Errors.APIError {
    return Errors.APIError.generate(status, error, message, headers);
  }

  buildURL(
    path: string,
    query: Record<string, unknown> | null | undefined,
    defaultBaseURL?: string | undefined,
  ): string {
    const baseURL = (!this.#baseURLOverridden() && defaultBaseURL) || this.baseURL;
    // Guarantee exactly one "/" between baseURL and path so that bases without a trailing slash
    // and paths without a leading slash do not fuse into a malformed URL (e.g. ".../v1" + "widgets").
    const url = isAbsoluteURL(path)
      ? new URL(path)
      : new URL(
          (baseURL.endsWith('/') ? baseURL : baseURL + '/') + (path.startsWith('/') ? path.slice(1) : path),
        );

    const defaultQuery = this.defaultQuery();
    const pathQuery = Object.fromEntries(url.searchParams);
    if (!isEmptyObj(defaultQuery) || !isEmptyObj(pathQuery)) {
      query = { ...pathQuery, ...defaultQuery, ...query };
    }

    if (typeof query === 'object' && query && !Array.isArray(query)) {
      url.search = this.stringifyQuery(query);
    }

    return url.toString();
  }

  /**
   * Used as a callback for mutating the given `FinalRequestOptions` object.
   */
  protected async prepareOptions(options: FinalRequestOptions): Promise<void> {}

  /**
   * Used as a callback for mutating the given `RequestInit` object.
   *
   * This is useful for cases where you want to add certain headers based off of
   * the request properties, e.g. `method` or `url`.
   */
  protected async prepareRequest(
    request: RequestInit,
    { url, options }: { url: string; options: FinalRequestOptions },
  ): Promise<void> {}

  get<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('get', path, opts);
  }

  post<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('post', path, opts);
  }

  patch<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('patch', path, opts);
  }

  put<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('put', path, opts);
  }

  delete<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('delete', path, opts);
  }

  private methodRequest<Rsp>(
    method: HTTPMethod,
    path: string,
    opts?: PromiseOrValue<RequestOptions>,
  ): APIPromise<Rsp> {
    return this.request(
      Promise.resolve(opts).then((opts) => {
        return { method, path, ...opts } as FinalRequestOptions;
      }),
    );
  }

  request<Rsp>(
    options: PromiseOrValue<FinalRequestOptions>,
    remainingRetries: number | null = null,
  ): APIPromise<Rsp> {
    return new APIPromise(this, this.makeRequest(options, remainingRetries, undefined));
  }

  private async makeRequest(
    optionsInput: PromiseOrValue<FinalRequestOptions>,
    retriesRemaining: number | null,
    retryOfRequestLogID: string | undefined,
  ): Promise<APIResponseProps> {
    const options = await optionsInput;
    const maxRetries = options.maxRetries ?? this.maxRetries;
    if (retriesRemaining == null) {
      retriesRemaining = maxRetries;
    }

    await this.prepareOptions(options);

    const { req, url, timeout } = await this.buildRequest(options, {
      retryCount: maxRetries - retriesRemaining,
    });

    await this.prepareRequest(req, { url, options });

    /** Not an API request ID, just for correlating local log entries. */
    const requestLogID = 'log_' + ((Math.random() * (1 << 24)) | 0).toString(16).padStart(6, '0');
    const retryLogStr = retryOfRequestLogID === undefined ? '' : `, retryOf: ${retryOfRequestLogID}`;
    const startTime = Date.now();

    loggerFor(this).debug(
      `[${requestLogID}] sending request`,
      formatRequestDetails({
        retryOfRequestLogID,
        method: options.method,
        url,
        options,
        headers: req.headers,
      }),
    );

    if (options.signal?.aborted) {
      throw new Errors.APIUserAbortError();
    }

    const controller = new AbortController();
    const response = await this.fetchWithTimeout(url, req, timeout, controller).catch(castToError);
    const headersTime = Date.now();

    if (response instanceof globalThis.Error) {
      const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;
      if (options.signal?.aborted) {
        throw new Errors.APIUserAbortError();
      }
      // detect native connection timeout errors
      // deno throws "TypeError: error sending request for url (https://example/): client error (Connect): tcp connect error: Operation timed out (os error 60): Operation timed out (os error 60)"
      // undici throws "TypeError: fetch failed" with cause "ConnectTimeoutError: Connect Timeout Error (attempted address: example:443, timeout: 1ms)"
      // others do not provide enough information to distinguish timeouts from other connection errors
      const isTimeout =
        isAbortError(response) ||
        /timed? ?out/i.test(String(response) + ('cause' in response ? String(response.cause) : ''));
      if (retriesRemaining) {
        loggerFor(this).info(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - ${retryMessage}`,
        );
        loggerFor(this).debug(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url,
            durationMs: headersTime - startTime,
            message: response.message,
          }),
        );
        return this.retryRequest(options, retriesRemaining, retryOfRequestLogID ?? requestLogID);
      }
      loggerFor(this).info(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - error; no more retries left`,
      );
      loggerFor(this).debug(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (error; no more retries left)`,
        formatRequestDetails({
          retryOfRequestLogID,
          url,
          durationMs: headersTime - startTime,
          message: response.message,
        }),
      );
      if (isTimeout) {
        throw new Errors.APIConnectionTimeoutError();
      }
      throw new Errors.APIConnectionError({ cause: response });
    }

    const responseInfo = `[${requestLogID}${retryLogStr}] ${req.method} ${url} ${
      response.ok ? 'succeeded' : 'failed'
    } with status ${response.status} in ${headersTime - startTime}ms`;

    if (!response.ok) {
      const shouldRetry = await this.shouldRetry(response);
      if (retriesRemaining && shouldRetry) {
        const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;

        // We don't need the body of this response.
        await Shims.CancelReadableStream(response.body);
        loggerFor(this).info(`${responseInfo} - ${retryMessage}`);
        loggerFor(this).debug(
          `[${requestLogID}] response error (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url: response.url,
            status: response.status,
            headers: response.headers,
            durationMs: headersTime - startTime,
          }),
        );
        return this.retryRequest(
          options,
          retriesRemaining,
          retryOfRequestLogID ?? requestLogID,
          response.headers,
        );
      }

      const retryMessage = shouldRetry ? `error; no more retries left` : `error; not retryable`;

      loggerFor(this).info(`${responseInfo} - ${retryMessage}`);

      const errText = await response.text().catch((err: any) => castToError(err).message);
      const errJSON = safeJSON(errText) as any;
      const errMessage = errJSON ? undefined : errText;

      loggerFor(this).debug(
        `[${requestLogID}] response error (${retryMessage})`,
        formatRequestDetails({
          retryOfRequestLogID,
          url: response.url,
          status: response.status,
          headers: response.headers,
          message: errMessage,
          durationMs: Date.now() - startTime,
        }),
      );

      const err = this.makeStatusError(response.status, errJSON, errMessage, response.headers);
      throw err;
    }

    loggerFor(this).info(responseInfo);
    loggerFor(this).debug(
      `[${requestLogID}] response start`,
      formatRequestDetails({
        retryOfRequestLogID,
        url: response.url,
        status: response.status,
        headers: response.headers,
        durationMs: headersTime - startTime,
      }),
    );

    return { response, options, controller, requestLogID, retryOfRequestLogID, startTime };
  }

  async fetchWithTimeout(
    url: RequestInfo,
    init: RequestInit | undefined,
    ms: number,
    controller: AbortController,
  ): Promise<Response> {
    const { signal, method, ...options } = init || {};
    const abort = this._makeAbort(controller);
    if (signal) signal.addEventListener('abort', abort, { once: true });

    const timeout = setTimeout(abort, ms);

    const isReadableBody =
      ((globalThis as any).ReadableStream && options.body instanceof (globalThis as any).ReadableStream) ||
      (typeof options.body === 'object' && options.body !== null && Symbol.asyncIterator in options.body);

    const fetchOptions: RequestInit = {
      signal: controller.signal as any,
      ...(isReadableBody ? { duplex: 'half' } : {}),
      method: 'GET',
      ...options,
    };
    if (method) {
      // Custom methods like 'patch' need to be uppercased
      // See https://github.com/nodejs/undici/issues/2294
      fetchOptions.method = method.toUpperCase();
    }

    try {
      // use undefined this binding; fetch errors if bound to something else in browser/cloudflare
      return await this.fetch.call(undefined, url, fetchOptions);
    } finally {
      clearTimeout(timeout);
    }
  }

  private async shouldRetry(response: Response): Promise<boolean> {
    // Note this is not a standard header.
    const shouldRetryHeader = response.headers.get('x-should-retry');

    // If the server explicitly says whether or not to retry, obey.
    if (shouldRetryHeader === 'true') return true;
    if (shouldRetryHeader === 'false') return false;

    // Retry on request timeouts.
    if (response.status === 408) return true;

    // Retry on lock timeouts.
    if (response.status === 409) return true;

    // Retry on rate limits.
    if (response.status === 429) return true;

    // Retry internal errors.
    if (response.status >= 500) return true;

    return false;
  }

  private async retryRequest(
    options: FinalRequestOptions,
    retriesRemaining: number,
    requestLogID: string,
    responseHeaders?: Headers | undefined,
  ): Promise<APIResponseProps> {
    let timeoutMillis: number | undefined;

    // Note the `retry-after-ms` header may not be standard, but is a good idea and we'd like proactive support for it.
    const retryAfterMillisHeader = responseHeaders?.get('retry-after-ms');
    if (retryAfterMillisHeader) {
      const timeoutMs = parseFloat(retryAfterMillisHeader);
      if (!Number.isNaN(timeoutMs)) {
        timeoutMillis = timeoutMs;
      }
    }

    // About the Retry-After header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After
    const retryAfterHeader = responseHeaders?.get('retry-after');
    if (retryAfterHeader && !timeoutMillis) {
      const timeoutSeconds = parseFloat(retryAfterHeader);
      if (!Number.isNaN(timeoutSeconds)) {
        timeoutMillis = timeoutSeconds * 1000;
      } else {
        timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
      }
    }

    // If the API asks us to wait a certain amount of time, just do what it says,
    // but cap server-provided delays at 60s so an oversized or malformed Retry-After
    // (e.g. `retry-after-ms: 999999999`, a past HTTP-date, or a value that Date.parse
    // failed on) cannot block retries for an unbounded amount of time. Otherwise fall
    // back to the default exponential-backoff calculation.
    const maxRetryAfterMillis = 60 * 1000;
    if (
      timeoutMillis === undefined ||
      !Number.isFinite(timeoutMillis) ||
      timeoutMillis <= 0 ||
      timeoutMillis > maxRetryAfterMillis
    ) {
      const maxRetries = options.maxRetries ?? this.maxRetries;
      timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
    }
    await sleep(timeoutMillis);

    return this.makeRequest(options, retriesRemaining - 1, requestLogID);
  }

  private calculateDefaultRetryTimeoutMillis(retriesRemaining: number, maxRetries: number): number {
    const initialRetryDelay = 0.5;
    const maxRetryDelay = 8.0;

    const numRetries = maxRetries - retriesRemaining;

    // Apply exponential backoff, but not more than the max.
    const sleepSeconds = Math.min(initialRetryDelay * Math.pow(2, numRetries), maxRetryDelay);

    // Apply some jitter, take up to at most 25 percent of the retry time.
    const jitter = 1 - Math.random() * 0.25;

    return sleepSeconds * jitter * 1000;
  }

  async buildRequest(
    inputOptions: FinalRequestOptions,
    { retryCount = 0 }: { retryCount?: number } = {},
  ): Promise<{ req: FinalizedRequestInit; url: string; timeout: number }> {
    const options = { ...inputOptions };
    const { method, path, query, defaultBaseURL } = options;

    const url = this.buildURL(path!, query as Record<string, unknown>, defaultBaseURL);
    if ('timeout' in options) validatePositiveInteger('timeout', options.timeout);
    options.timeout = options.timeout ?? this.timeout;
    const { bodyHeaders, body } = this.buildBody({ options });
    // Headers read the caller's own options, not the copy defaulted above: `X-Scalar-Timeout`
    // reports an explicit per-request timeout, and the idempotency key written back here has to
    // land where the retry can see it.
    const reqHeaders = await this.buildHeaders({
      options: inputOptions,
      method,
      bodyHeaders,
      retryCount,
      url,
    });

    const req: FinalizedRequestInit = {
      method,
      headers: reqHeaders,
      ...(options.signal && { signal: options.signal }),
      ...((globalThis as any).ReadableStream &&
        body instanceof (globalThis as any).ReadableStream && { duplex: 'half' }),
      // `buildBody` already collapses no-body into `undefined`; here we only need to drop that
      // sentinel. A truthiness spread would also strip an intentional empty-string body.
      ...(body !== undefined && { body }),
      ...((this.fetchOptions as any) ?? {}),
      ...((options.fetchOptions as any) ?? {}),
    };
    return { req, url, timeout: options.timeout };
  }

  private async buildHeaders({
    options,
    method,
    bodyHeaders,
    retryCount,
    url,
  }: {
    options: FinalRequestOptions;
    method: HTTPMethod;
    bodyHeaders: HeadersLike;
    retryCount: number;
    url: string;
  }): Promise<Headers> {
    let idempotencyHeaders: HeadersLike = {};
    if (this.idempotencyHeader && method !== 'get') {
      if (!options.idempotencyKey) options.idempotencyKey = this.defaultIdempotencyKey();
      idempotencyHeaders[this.idempotencyHeader] = options.idempotencyKey;
    }

    const headers = buildHeaders([
      idempotencyHeaders,
      {
        Accept: 'application/json',
        'User-Agent': this.getUserAgent(),
        'X-Scalar-Retry-Count': String(retryCount),
        ...(options.timeout ? { 'X-Scalar-Timeout': String(Math.trunc(options.timeout / 1000)) } : {}),
        ...getPlatformHeaders(),
      },
      await this.authHeaders(options),
      this._options.defaultHeaders,
      bodyHeaders,
      options.headers,
    ]);
    appendAuthCookies(headers.values, await this.authCookiesAsync());

    this.validateAuth(url, headers.values, options);

    return headers.values;
  }

  private _makeAbort(controller: AbortController) {
    // note: we can't just inline this method inside `fetchWithTimeout()` because then the closure
    //       would capture all request options, and cause a memory leak.
    return () => controller.abort();
  }

  private buildBody({ options: { body, headers: rawHeaders } }: { options: FinalRequestOptions }): {
    bodyHeaders: HeadersLike;
    body: BodyInit | undefined;
  } {
    // Skip only `null`/`undefined` so an intentional empty-string (or 0/false) payload still
    // reaches the encoder. A plain `!body` check would silently drop those falsy-but-valid bodies,
    // and `null` must be excluded here too because the iterator check below uses `in`, which
    // throws on null.
    if (body == null) {
      return { bodyHeaders: undefined, body: undefined };
    }
    const headers = buildHeaders([rawHeaders]);
    if (
      // Pass raw type verbatim
      ArrayBuffer.isView(body) ||
      body instanceof ArrayBuffer ||
      body instanceof DataView ||
      // Always pass strings through verbatim. The previous guard required a caller-set
      // `content-type` and otherwise fell through to `FallbackEncoder`, which JSON.stringifies
      // the value and labels it `application/json` — silently quoting plain-text payloads and
      // mislabeling them as JSON. fetch defaults a string body to `text/plain;charset=UTF-8`
      // when no `content-type` is set, which is a safer default than misclaiming JSON.
      typeof body === 'string' ||
      // `Blob` is superset of `File`
      ((globalThis as any).Blob && body instanceof (globalThis as any).Blob) ||
      // `FormData` -> `multipart/form-data`
      body instanceof FormData ||
      // `URLSearchParams` -> `application/x-www-form-urlencoded`
      body instanceof URLSearchParams ||
      // Send chunked stream (each chunk has own `length`)
      ((globalThis as any).ReadableStream && body instanceof (globalThis as any).ReadableStream)
    ) {
      return { bodyHeaders: undefined, body: body as BodyInit };
    } else if (
      typeof body === 'object' &&
      (Symbol.asyncIterator in body ||
        (Symbol.iterator in body && 'next' in body && typeof body.next === 'function'))
    ) {
      return { bodyHeaders: undefined, body: Shims.ReadableStreamFrom(body as AsyncIterable<Uint8Array>) };
    } else if (
      typeof body === 'object' &&
      headers.values.get('content-type') === 'application/x-www-form-urlencoded'
    ) {
      return {
        bodyHeaders: { 'content-type': 'application/x-www-form-urlencoded' },
        body: this.stringifyQuery(body),
      };
    } else {
      return this.#encoder({ body, headers });
    }
  }

  protected validateAuth(url: string, headers: Headers, options: FinalRequestOptions): void {
    if (headers.has('Authorization')) return;
    if (headerExplicitlyOmitted(options.headers, 'Authorization')) return;
    if (headers.has('X-API-Key')) return;
    if (headerExplicitlyOmitted(options.headers, 'X-API-Key')) return;
    throw new Errors.AuthenticationError(
      401,
      undefined,
      'Could not resolve authentication method. Expected either accessToken or apiKey to be set. Or for one of the "Authorization" or "X-API-Key" headers to be explicitly omitted',
      headers,
    );
  }

  authHeadersSync(): Record<string, string> {
    const headers: Record<string, string> = {};
    const accessToken = this.resolveAuthOptionSync('accessToken', this.accessToken);
    if (accessToken) headers['Authorization'] = `Bearer ${accessToken}`;
    const apiKey = this.resolveAuthOptionSync('apiKey', this.apiKey);
    if (apiKey) headers['X-API-Key'] = apiKey;
    return headers;
  }

  webSocketAuthHeaders(): Record<string, string> {
    const accessToken = this.resolveAuthOptionSync('accessToken', this.accessToken);
    if (accessToken) return { Authorization: `Bearer ${accessToken}` };
    const apiKey = this.resolveAuthOptionSync('apiKey', this.apiKey);
    if (apiKey) return { 'X-API-Key': apiKey };
    return {};
  }

  protected async authHeaders(opts: FinalRequestOptions): Promise<NullableHeaders | undefined> {
    return buildHeaders([await this.bearerAuth(opts), await this.apiKeyHeaderAuth(opts)]);
  }

  protected async bearerAuth(opts: FinalRequestOptions): Promise<NullableHeaders | undefined> {
    const accessToken = await this.resolveAuthOption('accessToken', this.accessToken);
    if (accessToken == null) {
      return undefined;
    }
    return buildHeaders([{ Authorization: `Bearer ${accessToken}` }]);
  }

  protected async apiKeyHeaderAuth(opts: FinalRequestOptions): Promise<NullableHeaders | undefined> {
    const apiKey = await this.resolveAuthOption('apiKey', this.apiKey);
    if (apiKey == null) {
      return undefined;
    }
    return buildHeaders([{ 'X-API-Key': apiKey }]);
  }

  private async authQueryAsync(): Promise<Record<string, string>> {
    const query: Record<string, string> = {};
    return query;
  }

  private async authCookiesAsync(): Promise<Record<string, string>> {
    const cookies: Record<string, string> = {};
    return cookies;
  }

  private async resolveAuthOption(
    optionName: string,
    value: string | AuthTokenProvider | null | undefined,
  ): Promise<string | undefined> {
    if (value == null) return undefined;
    const token = typeof value === 'function' ? await value() : value;
    if (!token) throw new Errors.ProfoundError(`Expected '${optionName}' to resolve to a non-empty string.`);
    return token;
  }

  private resolveAuthOptionSync(
    optionName: string,
    value: string | AuthTokenProvider | null | undefined,
  ): string | undefined {
    if (value == null) return undefined;
    const token = typeof value === 'function' ? value() : value;
    if (typeof token !== 'string' || !token)
      throw new Errors.ProfoundError(`Expected '${optionName}' to resolve to a non-empty string.`);
    return token;
  }

  static Profound = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static ProfoundError = Errors.ProfoundError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = toFile;

  organizations: Organizations = new Organizations(this);
  prompts: Prompts = new Prompts(this);
  reports: Reports = new Reports(this);
  content: Content = new Content(this);
  agents: Agents = new Agents(this);
  knowledgeBases: KnowledgeBases = new KnowledgeBases(this);
  projects: Projects = new Projects(this);
  integrations: Integrations = new Integrations(this);
  documents: Documents = new Documents(this);
  ads: Ads = new Ads(this);
}

Profound.Organizations = Organizations;
Profound.Prompts = Prompts;
Profound.Reports = Reports;
Profound.Content = Content;
Profound.Agents = Agents;
Profound.KnowledgeBases = KnowledgeBases;
Profound.Projects = Projects;
Profound.Integrations = Integrations;
Profound.Documents = Documents;
Profound.Ads = Ads;

export declare namespace Profound {
  export type RequestOptions = Opts.RequestOptions;
  export {
    Organizations as Organizations,
    type NamedResource as NamedResource,
    type PersonaProfile as PersonaProfile,
    type PersonaProfileBehavior as PersonaProfileBehavior,
    type PersonaProfileDemographics as PersonaProfileDemographics,
    type PersonaProfileEmployment as PersonaProfileEmployment,
    type Organization as Organization,
    type Category as Category,
    type OrganizationRegionsResponse as OrganizationRegionsResponse,
    type OrganizationModelsResponse as OrganizationModelsResponse,
    type OrganizationDomainsResponse as OrganizationDomainsResponse,
    type OrganizationListAssetsResponse as OrganizationListAssetsResponse,
    type OrganizationGetPersonasResponse as OrganizationGetPersonasResponse,
    type OrganizationListResponse as OrganizationListResponse,
    type OrganizationRegionsParams as OrganizationRegionsParams,
    type OrganizationDomainsParams as OrganizationDomainsParams,
    type OrganizationListAssetsParams as OrganizationListAssetsParams,
    type OrganizationGetPersonasParams as OrganizationGetPersonasParams,
  };

  export {
    Prompts as Prompts,
    type PromptAnswersResponse as PromptAnswersResponse,
    type PromptAnswersV2Response as PromptAnswersV2Response,
    type PromptStreamAnswersV2Response as PromptStreamAnswersV2Response,
    type PromptAnswersParams as PromptAnswersParams,
    type PromptAnswersV2Params as PromptAnswersV2Params,
    type PromptStreamAnswersV2Params as PromptStreamAnswersV2Params,
  };

  export {
    Reports as Reports,
    type ReportInfo as ReportInfo,
    type ReportResponse as ReportResponse,
    type ReportResult as ReportResult,
    type TopicNameFilter as TopicNameFilter,
    type PromptIDFilter as PromptIDFilter,
    type TagNameFilter as TagNameFilter,
    type RootDomainFilter as RootDomainFilter,
    type HostnameFilter as HostnameFilter,
    type URLFilter as URLFilter,
    type ReportCitationsResponse as ReportCitationsResponse,
    type ReportSentimentV2Response as ReportSentimentV2Response,
    type ReportStreamCitationsResponse as ReportStreamCitationsResponse,
    type ReportStreamVisibilityResponse as ReportStreamVisibilityResponse,
    type ReportStreamSentimentResponse as ReportStreamSentimentResponse,
    type ReportStreamCitationsV2Response as ReportStreamCitationsV2Response,
    type ReportStreamVisibilityV2Response as ReportStreamVisibilityV2Response,
    type ReportStreamSentimentV2Response as ReportStreamSentimentV2Response,
    type ReportStreamQueryFanoutsResponse as ReportStreamQueryFanoutsResponse,
    type ReportQueryVisibilityResponse as ReportQueryVisibilityResponse,
    type ReportQueryCitationsResponse as ReportQueryCitationsResponse,
    type ReportQuerySentimentResponse as ReportQuerySentimentResponse,
    type ReportQueryQueryFanoutsResponse as ReportQueryQueryFanoutsResponse,
    type ReportCitationsParams as ReportCitationsParams,
    type ReportVisibilityParams as ReportVisibilityParams,
    type ReportSentimentParams as ReportSentimentParams,
    type ReportSentimentV2Params as ReportSentimentV2Params,
    type ReportGetReferralsReportParams as ReportGetReferralsReportParams,
    type ReportGetBotsReportParams as ReportGetBotsReportParams,
    type ReportQueryFanoutsParams as ReportQueryFanoutsParams,
    type ReportStreamCitationsParams as ReportStreamCitationsParams,
    type ReportStreamVisibilityParams as ReportStreamVisibilityParams,
    type ReportStreamSentimentParams as ReportStreamSentimentParams,
    type ReportStreamCitationsV2Params as ReportStreamCitationsV2Params,
    type ReportStreamVisibilityV2Params as ReportStreamVisibilityV2Params,
    type ReportStreamSentimentV2Params as ReportStreamSentimentV2Params,
    type ReportStreamQueryFanoutsParams as ReportStreamQueryFanoutsParams,
    type ReportGetReferralsReportV2Params as ReportGetReferralsReportV2Params,
    type ReportGetBotsReportV2Params as ReportGetBotsReportV2Params,
    type ReportQueryVisibilityParams as ReportQueryVisibilityParams,
    type ReportQueryCitationsParams as ReportQueryCitationsParams,
    type ReportQuerySentimentParams as ReportQuerySentimentParams,
    type ReportQueryQueryFanoutsParams as ReportQueryQueryFanoutsParams,
  };

  export { Content as Content };

  export {
    Agents as Agents,
    type AgentListResponse as AgentListResponse,
    type AgentRetrieveResponse as AgentRetrieveResponse,
    type AgentCreateResponse as AgentCreateResponse,
    type AgentPublishResponse as AgentPublishResponse,
    type AgentUpdateResponse as AgentUpdateResponse,
    type AgentRetrieveGraphResponse as AgentRetrieveGraphResponse,
    type AgentListParams as AgentListParams,
    type AgentRetrieveParams as AgentRetrieveParams,
    type AgentCreateParams as AgentCreateParams,
    type AgentUpdateParams as AgentUpdateParams,
    type AgentRetrieveGraphParams as AgentRetrieveGraphParams,
  };

  export {
    KnowledgeBases as KnowledgeBases,
    type KnowledgeBaseListResponse as KnowledgeBaseListResponse,
    type KnowledgeBaseSearchResponse as KnowledgeBaseSearchResponse,
    type KnowledgeBaseListParams as KnowledgeBaseListParams,
    type KnowledgeBaseSearchParams as KnowledgeBaseSearchParams,
  };

  export {
    Projects as Projects,
    type ProjectListResponse as ProjectListResponse,
    type ProjectCreateResponse as ProjectCreateResponse,
    type ProjectRetrieveResponse as ProjectRetrieveResponse,
    type ProjectGetStatusResponse as ProjectGetStatusResponse,
    type ProjectArchiveResponse as ProjectArchiveResponse,
    type ProjectUnarchiveResponse as ProjectUnarchiveResponse,
    type ProjectListParams as ProjectListParams,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectRetrieveParams as ProjectRetrieveParams,
    type ProjectDeleteParams as ProjectDeleteParams,
    type ProjectGetStatusParams as ProjectGetStatusParams,
    type ProjectArchiveParams as ProjectArchiveParams,
    type ProjectUnarchiveParams as ProjectUnarchiveParams,
  };

  export {
    Integrations as Integrations,
    type IntegrationListResponse as IntegrationListResponse,
    type IntegrationListParams as IntegrationListParams,
  };

  export {
    Documents as Documents,
    type DocumentCreateResponse as DocumentCreateResponse,
    type DocumentListResponse as DocumentListResponse,
    type DocumentRetrieveResponse as DocumentRetrieveResponse,
    type DocumentUpdateResponse as DocumentUpdateResponse,
    type DocumentReplaceContentResponse as DocumentReplaceContentResponse,
    type DocumentCreateParams as DocumentCreateParams,
    type DocumentListParams as DocumentListParams,
    type DocumentRetrieveParams as DocumentRetrieveParams,
    type DocumentUpdateParams as DocumentUpdateParams,
    type DocumentDeleteParams as DocumentDeleteParams,
    type DocumentReplaceContentParams as DocumentReplaceContentParams,
  };

  export { Ads as Ads };

  export type AnalysisTypeFilter = SharedAPI.AnalysisTypeFilter;
  export type AssetIDFilter = SharedAPI.AssetIDFilter;
  export type BotNameFilter = SharedAPI.BotNameFilter;
  export type BotProviderFilter = SharedAPI.BotProviderFilter;
  export type CursorPagination = SharedAPI.CursorPagination;
  export type ModelIDFilter = SharedAPI.ModelIDFilter;
  export type Pagination = SharedAPI.Pagination;
  export type PathFilter = SharedAPI.PathFilter;
  export type PersonaIDFilter = SharedAPI.PersonaIDFilter;
  export type PromptFilter = SharedAPI.PromptFilter;
  export type PromptTypeFilter = SharedAPI.PromptTypeFilter;
  export type RegionIDFilter = SharedAPI.RegionIDFilter;
  export type RegionNameFilter = SharedAPI.RegionNameFilter;
  export type TagIDFilter = SharedAPI.TagIDFilter;
  export type TopicIDFilter = SharedAPI.TopicIDFilter;
}

const headerExplicitlyOmitted = (source: HeadersLike | undefined, name: string): boolean => {
  if (!source || Array.isArray(source) || source instanceof Headers) return false;
  const target = name.toLowerCase();
  return Object.entries(source).some(([key, value]) => key.toLowerCase() === target && value === null);
};

const appendAuthCookies = (headers: Headers, cookies: Record<string, string>): void => {
  for (const [name, value] of Object.entries(cookies)) {
    if (cookieHeaderHas(headers.get('Cookie'), name)) continue;
    const cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    const existing = headers.get('Cookie');
    headers.set('Cookie', existing ? existing + '; ' + cookie : cookie);
  }
};

const cookieHeaderHas = (value: string | null, name: string): boolean => {
  if (!value) return false;
  const target = encodeURIComponent(name) + '=';
  return value.split(';').some((cookie) => cookie.trim().startsWith(target));
};

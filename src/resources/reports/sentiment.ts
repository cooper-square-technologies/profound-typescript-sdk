// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { Stream } from '../../core/streaming';
import type { RequestOptions } from '../../internal/request-options';
import { buildHeaders } from '../../internal/headers';
import type * as Shared from '../shared';

export class Sentiment extends APIResource {
  /**
   * Get citations for a given category.
   *
   * @param {SentimentQueryV1PostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Shared.Response>} Successful Response
   *
   * @example
   * ```ts
   * const response = await client.reports.sentiment.queryV1Post({
   *   date_interval: 'day',
   *   dimensions: [],
   *   metrics: [],
   *   order_by: {},
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '2024-01-01T00:00:00.000Z',
   *   end_date: '2024-01-01T00:00:00.000Z',
   * });
   * ```
   */
  queryV1Post(body: SentimentQueryV1PostParams, options?: RequestOptions): APIPromise<Shared.Response> {
    return this._client.post('/v1/reports/sentiment', { body, ...options });
  }

  /**
   * Stream Sentiment
   *
   * @param {SentimentStreamV1StreamPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Stream<SentimentStreamV1StreamPostResponse>>} Server-sent events stream. Emits a `summary` event first, then one `row` event per streamed row.
   *
   * @example
   * ```ts
   * const stream = await client.reports.sentiment.streamV1StreamPost({
   *   date_interval: 'day',
   *   dimensions: [],
   *   metrics: [],
   *   order_by: {},
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '2024-01-01T00:00:00.000Z',
   *   end_date: '2024-01-01T00:00:00.000Z',
   * });
   *
   * for await (const event of stream) {
   *   console.log(event);
   * }
   * ```
   */
  streamV1StreamPost(
    body: SentimentStreamV1StreamPostParams,
    options?: RequestOptions,
  ): APIPromise<Stream<SentimentStreamV1StreamPostResponse>> {
    return this._client.post('/v1/reports/sentiment/stream', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    });
  }

  /**
   * Query Sentiment V2
   *
   * @param {SentimentQueryV2V2PostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SentimentQueryV2V2PostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const queryV2V2Post = await client.reports.sentiment.queryV2V2Post({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   asset: '',
   *   start_date: '',
   *   end_date: '',
   *   interval: 'day',
   *   include_cited_websites: false,
   * });
   * ```
   */
  queryV2V2Post(
    body: SentimentQueryV2V2PostParams,
    options?: RequestOptions,
  ): APIPromise<SentimentQueryV2V2PostResponse> {
    return this._client.post('/v2/reports/sentiment', { body, ...options });
  }

  /**
   * Stream Sentiment V2
   *
   * @param {SentimentStreamV2V2StreamPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Stream<SentimentStreamV2V2StreamPostResponse>>} Server-sent events stream. Emits one `summary` event (the report `info` block) first, then one `result` event per row.
   *
   * @example
   * ```ts
   * const stream = await client.reports.sentiment.streamV2V2StreamPost({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   asset: '',
   *   start_date: '',
   *   end_date: '',
   *   interval: 'day',
   *   include_cited_websites: false,
   * });
   *
   * for await (const event of stream) {
   *   console.log(event);
   * }
   * ```
   */
  streamV2V2StreamPost(
    body: SentimentStreamV2V2StreamPostParams,
    options?: RequestOptions,
  ): APIPromise<Stream<SentimentStreamV2V2StreamPostResponse>> {
    return this._client.post('/v2/reports/sentiment/stream', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    });
  }
}

export interface SentimentQuery {
  metrics: Array<'positive' | 'negative' | 'occurrences'>;
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.
   * @format date-time
   */
  start_date: string;
  /**
   * End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.
   * @format date-time
   */
  end_date: string;
  /**
   * Date interval for the report. (only used with date dimension)
   * @default day
   */
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';
  /**
   * Dimensions to group the report by.
   * @default []
   */
  dimensions?: Array<
    | 'theme'
    | 'date'
    | 'region'
    | 'topic'
    | 'topic_id'
    | 'model'
    | 'asset_id'
    | 'asset_name'
    | 'tag'
    | 'prompt'
    | 'prompt_id'
    | 'sentiment_type'
    | 'persona'
  >;
  /**
   *
   * Custom ordering of the report results.
   *
   * The order is a record of key-value pairs where:
   * - key is the field to order by, which can be a metric or dimension
   * - value is the direction of the order, either 'asc' for ascending or 'desc' for descending.
   *
   * When not specified, the default order is the first metric in the query descending.
   *
   * @default {}
   */
  order_by?: Record<string, 'asc' | 'desc'>;
  /**
   * Pagination settings for the report results.
   */
  pagination?: Shared.Pagination;
  /**
   * List of filters to apply to the sentiment report.
   */
  filters?: Array<
    | Shared.AssetIDFilter
    | Shared.ProfoundAnswerEngineInsightsFiltersAssetNameFilter
    | SentimentQuery.ThemeFilter
    | Shared.RegionIDFilter
    | Shared.RegionNameFilter
    | Shared.TopicIDFilter
    | Shared.TopicNameFilter
    | Shared.ModelIDFilter
    | Shared.TagIDFilter
    | Shared.TagNameFilter
    | Shared.PromptFilter
    | Shared.PersonaIDFilter
  >;
}

export namespace SentimentQuery {
  export interface ThemeFilter {
    field: 'theme';
    operator:
      | 'is'
      | 'not_is'
      | 'in'
      | 'not_in'
      | 'contains'
      | 'not_contains'
      | 'matches'
      | 'contains_case_insensitive'
      | 'not_contains_case_insensitive';
    value: string | Array<string>;
  }
}

export interface StreamSentimentQuery {
  metrics: Array<'positive' | 'negative' | 'occurrences'>;
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.
   * @format date-time
   */
  start_date: string;
  /**
   * End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.
   * @format date-time
   */
  end_date: string;
  /**
   * Date interval for the report. (only used with date dimension)
   * @default day
   */
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';
  /**
   * Dimensions to group the report by.
   * @default []
   */
  dimensions?: Array<
    | 'theme'
    | 'date'
    | 'region'
    | 'topic'
    | 'topic_id'
    | 'model'
    | 'asset_id'
    | 'asset_name'
    | 'tag'
    | 'prompt'
    | 'prompt_id'
    | 'sentiment_type'
    | 'persona'
  >;
  /**
   *
   * Custom ordering of the report results.
   *
   * The order is a record of key-value pairs where:
   * - key is the field to order by, which can be a metric or dimension
   * - value is the direction of the order, either 'asc' for ascending or 'desc' for descending.
   *
   * When not specified, the default order is the first metric in the query descending.
   *
   * @default {}
   */
  order_by?: Record<string, 'asc' | 'desc'>;
  pagination?: Shared.Pagination | null;
  /**
   * List of filters to apply to the sentiment report.
   */
  filters?: Array<
    | Shared.AssetIDFilter
    | Shared.ProfoundAnswerEngineInsightsFiltersAssetNameFilter
    | StreamSentimentQuery.ThemeFilter
    | Shared.RegionIDFilter
    | Shared.RegionNameFilter
    | Shared.TopicIDFilter
    | Shared.TopicNameFilter
    | Shared.ModelIDFilter
    | Shared.TagIDFilter
    | Shared.TagNameFilter
    | Shared.PromptFilter
    | Shared.PersonaIDFilter
  >;
}

export namespace StreamSentimentQuery {
  export interface ThemeFilter {
    field: 'theme';
    operator:
      | 'is'
      | 'not_is'
      | 'in'
      | 'not_in'
      | 'contains'
      | 'not_contains'
      | 'matches'
      | 'contains_case_insensitive'
      | 'not_contains_case_insensitive';
    value: string | Array<string>;
  }
}

export interface SentimentV2Query {
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * The brand name to analyze (sentiment is extracted on name, not id).
   */
  asset: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;
  /**
   * YYYY-MM-DD, ET, inclusive (with end).
   */
  comparison_start_date?: string | null;
  /**
   * YYYY-MM-DD, ET, inclusive (with start).
   */
  comparison_end_date?: string | null;
  group_by?: Array<
    | 'date'
    | 'model'
    | 'topic'
    | 'region'
    | 'prompt'
    | 'persona'
    | 'tag'
    | 'theme'
    | 'claim'
    | 'run'
    | 'competitor'
  >;
  metrics?: Array<'positive_sentiment' | 'negative_sentiment' | 'occurrence'> | null;
  /**
   * @default day
   */
  interval?: 'day' | 'week' | 'month';
  filter?: Shared.FilterNode | null;
  sort?: SentimentV2Query.Sort;
  /**
   * Return cited websites per row (only when grouping by `theme`/`claim`).
   * @default false
   */
  include_cited_websites?: boolean;
  /**
   * Page size; default 10, max 50.
   * @maximum 50
   */
  limit?: number | null;
  /**
   * Stream endpoint only: cap the number of streamed rows (default: all).
   */
  max_results?: number | null;
  cursor?: string | null;
}

export namespace SentimentV2Query {
  export interface Sort {
    /**
     * @default positive_sentiment
     */
    field?: 'occurrence' | 'positive_sentiment' | 'negative_sentiment';
    /**
     * @default desc
     */
    dir?: 'asc' | 'desc';
  }
}

export interface SentimentQueryV1PostParams {
  metrics: Array<'positive' | 'negative' | 'occurrences'>;
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.
   * @format date-time
   */
  start_date: string;
  /**
   * End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.
   * @format date-time
   */
  end_date: string;
  /**
   * Date interval for the report. (only used with date dimension)
   * @default day
   */
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';
  /**
   * Dimensions to group the report by.
   * @default []
   */
  dimensions?: Array<
    | 'theme'
    | 'date'
    | 'region'
    | 'topic'
    | 'topic_id'
    | 'model'
    | 'asset_id'
    | 'asset_name'
    | 'tag'
    | 'prompt'
    | 'prompt_id'
    | 'sentiment_type'
    | 'persona'
  >;
  /**
   *
   * Custom ordering of the report results.
   *
   * The order is a record of key-value pairs where:
   * - key is the field to order by, which can be a metric or dimension
   * - value is the direction of the order, either 'asc' for ascending or 'desc' for descending.
   *
   * When not specified, the default order is the first metric in the query descending.
   *
   * @default {}
   */
  order_by?: Record<string, 'asc' | 'desc'>;
  /**
   * Pagination settings for the report results.
   */
  pagination?: Shared.Pagination;
  /**
   * List of filters to apply to the sentiment report.
   */
  filters?: Array<
    | Shared.AssetIDFilter
    | Shared.ProfoundAnswerEngineInsightsFiltersAssetNameFilter
    | SentimentQueryV1PostParams.ThemeFilter
    | Shared.RegionIDFilter
    | Shared.RegionNameFilter
    | Shared.TopicIDFilter
    | Shared.TopicNameFilter
    | Shared.ModelIDFilter
    | Shared.TagIDFilter
    | Shared.TagNameFilter
    | Shared.PromptFilter
    | Shared.PersonaIDFilter
  >;
}

export namespace SentimentQueryV1PostParams {
  export interface ThemeFilter {
    field: 'theme';
    operator:
      | 'is'
      | 'not_is'
      | 'in'
      | 'not_in'
      | 'contains'
      | 'not_contains'
      | 'matches'
      | 'contains_case_insensitive'
      | 'not_contains_case_insensitive';
    value: string | Array<string>;
  }
}

export interface SentimentStreamV1StreamPostParams {
  metrics: Array<'positive' | 'negative' | 'occurrences'>;
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.
   * @format date-time
   */
  start_date: string;
  /**
   * End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.
   * @format date-time
   */
  end_date: string;
  /**
   * Date interval for the report. (only used with date dimension)
   * @default day
   */
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';
  /**
   * Dimensions to group the report by.
   * @default []
   */
  dimensions?: Array<
    | 'theme'
    | 'date'
    | 'region'
    | 'topic'
    | 'topic_id'
    | 'model'
    | 'asset_id'
    | 'asset_name'
    | 'tag'
    | 'prompt'
    | 'prompt_id'
    | 'sentiment_type'
    | 'persona'
  >;
  /**
   *
   * Custom ordering of the report results.
   *
   * The order is a record of key-value pairs where:
   * - key is the field to order by, which can be a metric or dimension
   * - value is the direction of the order, either 'asc' for ascending or 'desc' for descending.
   *
   * When not specified, the default order is the first metric in the query descending.
   *
   * @default {}
   */
  order_by?: Record<string, 'asc' | 'desc'>;
  pagination?: Shared.Pagination | null;
  /**
   * List of filters to apply to the sentiment report.
   */
  filters?: Array<
    | Shared.AssetIDFilter
    | Shared.ProfoundAnswerEngineInsightsFiltersAssetNameFilter
    | SentimentStreamV1StreamPostParams.ThemeFilter
    | Shared.RegionIDFilter
    | Shared.RegionNameFilter
    | Shared.TopicIDFilter
    | Shared.TopicNameFilter
    | Shared.ModelIDFilter
    | Shared.TagIDFilter
    | Shared.TagNameFilter
    | Shared.PromptFilter
    | Shared.PersonaIDFilter
  >;
}

export namespace SentimentStreamV1StreamPostParams {
  export interface ThemeFilter {
    field: 'theme';
    operator:
      | 'is'
      | 'not_is'
      | 'in'
      | 'not_in'
      | 'contains'
      | 'not_contains'
      | 'matches'
      | 'contains_case_insensitive'
      | 'not_contains_case_insensitive';
    value: string | Array<string>;
  }
}

export type SentimentStreamV1StreamPostResponse =
  | SentimentStreamV1StreamPostResponse.SseSummaryEventData
  | Record<string, unknown>;

export namespace SentimentStreamV1StreamPostResponse {
  export interface SseSummaryEventData {
    /**
     * The normalized query used to build the stream.
     */
    query: Record<string, unknown>;
    /**
     * Total number of rows available before pagination is applied.
     */
    total_rows: number;
  }
}

export interface SentimentQueryV2V2PostParams {
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * The brand name to analyze (sentiment is extracted on name, not id).
   */
  asset: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;
  /**
   * YYYY-MM-DD, ET, inclusive (with end).
   */
  comparison_start_date?: string | null;
  /**
   * YYYY-MM-DD, ET, inclusive (with start).
   */
  comparison_end_date?: string | null;
  group_by?: Array<
    | 'date'
    | 'model'
    | 'topic'
    | 'region'
    | 'prompt'
    | 'persona'
    | 'tag'
    | 'theme'
    | 'claim'
    | 'run'
    | 'competitor'
  >;
  metrics?: Array<'positive_sentiment' | 'negative_sentiment' | 'occurrence'> | null;
  /**
   * @default day
   */
  interval?: 'day' | 'week' | 'month';
  filter?: Shared.FilterNode | null;
  sort?: SentimentQueryV2V2PostParams.Sort;
  /**
   * Return cited websites per row (only when grouping by `theme`/`claim`).
   * @default false
   */
  include_cited_websites?: boolean;
  /**
   * Page size; default 10, max 50.
   * @maximum 50
   */
  limit?: number | null;
  /**
   * Stream endpoint only: cap the number of streamed rows (default: all).
   */
  max_results?: number | null;
  cursor?: string | null;
}

export namespace SentimentQueryV2V2PostParams {
  export interface Sort {
    /**
     * @default positive_sentiment
     */
    field?: 'occurrence' | 'positive_sentiment' | 'negative_sentiment';
    /**
     * @default desc
     */
    dir?: 'asc' | 'desc';
  }
}

export interface SentimentQueryV2V2PostResponse {
  info: SentimentQueryV2V2PostResponse.Info;
  data: Array<SentimentQueryV2V2PostResponse.Data>;
}

export namespace SentimentQueryV2V2PostResponse {
  export interface Info {
    /**
     * Number of rows returned in `data` for this page.
     */
    count: number;
    /**
     * Display names of the models the report covers.
     */
    models: Array<string>;
    /**
     * Echoed request start date (YYYY-MM-DD, ET).
     */
    start_date: string;
    /**
     * Echoed request end date (YYYY-MM-DD, ET).
     */
    end_date: string;
    /**
     * The analyzed brand name.
     */
    asset: string;
    /**
     * Sentiment metrics returned per row.
     */
    metrics: Array<string>;
    /**
     * Total rows matching the query before pagination (null when not computed).
     */
    total_results?: number | null;
    /**
     * Opaque cursor for the next page; null on the last page.
     */
    next_cursor?: string | null;
    /**
     * Echoed normalized filter tree, or null when no filter was sent.
     */
    filter?: Record<string, unknown> | null;
    /**
     * Comparison-window start (when requested).
     */
    comparison_start_date?: string | null;
    /**
     * Comparison-window end (when requested).
     */
    comparison_end_date?: string | null;
    [k: string]: unknown;
  }

  export interface Data {
    date?: string | null;
    model?: Shared.DimensionRef | null;
    topic?: Shared.DimensionRef | null;
    region?: Shared.DimensionRef | null;
    prompt?: Shared.DimensionRef | null;
    persona?: Shared.DimensionRef | null;
    tag?: Shared.DimensionRef | null;
    theme?: Shared.DimensionRef | null;
    claim?: Shared.DimensionRef | null;
    run?: Shared.DimensionRef | null;
    competitor?: Shared.DimensionRef | null;
    positive_sentiment?: number | null;
    negative_sentiment?: number | null;
    occurrence?: number | null;
    /**
     * Comparison-window metrics (when requested).
     */
    previous?: Data.Previous | null;
    prev_date?: string | null;
    cited_websites?: Array<string> | null;
    rank?: number | null;
    [k: string]: unknown;
  }

  export namespace Data {
    export interface Previous {
      positive_sentiment?: number | null;
      negative_sentiment?: number | null;
      occurrence?: number | null;
      [k: string]: unknown;
    }
  }
}

export interface SentimentStreamV2V2StreamPostParams {
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * The brand name to analyze (sentiment is extracted on name, not id).
   */
  asset: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;
  /**
   * YYYY-MM-DD, ET, inclusive (with end).
   */
  comparison_start_date?: string | null;
  /**
   * YYYY-MM-DD, ET, inclusive (with start).
   */
  comparison_end_date?: string | null;
  group_by?: Array<
    | 'date'
    | 'model'
    | 'topic'
    | 'region'
    | 'prompt'
    | 'persona'
    | 'tag'
    | 'theme'
    | 'claim'
    | 'run'
    | 'competitor'
  >;
  metrics?: Array<'positive_sentiment' | 'negative_sentiment' | 'occurrence'> | null;
  /**
   * @default day
   */
  interval?: 'day' | 'week' | 'month';
  filter?: Shared.FilterNode | null;
  sort?: SentimentStreamV2V2StreamPostParams.Sort;
  /**
   * Return cited websites per row (only when grouping by `theme`/`claim`).
   * @default false
   */
  include_cited_websites?: boolean;
  /**
   * Page size; default 10, max 50.
   * @maximum 50
   */
  limit?: number | null;
  /**
   * Stream endpoint only: cap the number of streamed rows (default: all).
   */
  max_results?: number | null;
  cursor?: string | null;
}

export namespace SentimentStreamV2V2StreamPostParams {
  export interface Sort {
    /**
     * @default positive_sentiment
     */
    field?: 'occurrence' | 'positive_sentiment' | 'negative_sentiment';
    /**
     * @default desc
     */
    dir?: 'asc' | 'desc';
  }
}

export type SentimentStreamV2V2StreamPostResponse =
  | SentimentStreamV2V2StreamPostResponse.SentimentV2Info
  | SentimentStreamV2V2StreamPostResponse.SentimentRow;

export namespace SentimentStreamV2V2StreamPostResponse {
  export interface SentimentV2Info {
    /**
     * Number of rows returned in `data` for this page.
     */
    count: number;
    /**
     * Display names of the models the report covers.
     */
    models: Array<string>;
    /**
     * Echoed request start date (YYYY-MM-DD, ET).
     */
    start_date: string;
    /**
     * Echoed request end date (YYYY-MM-DD, ET).
     */
    end_date: string;
    /**
     * The analyzed brand name.
     */
    asset: string;
    /**
     * Sentiment metrics returned per row.
     */
    metrics: Array<string>;
    /**
     * Total rows matching the query before pagination (null when not computed).
     */
    total_results?: number | null;
    /**
     * Opaque cursor for the next page; null on the last page.
     */
    next_cursor?: string | null;
    /**
     * Echoed normalized filter tree, or null when no filter was sent.
     */
    filter?: Record<string, unknown> | null;
    /**
     * Comparison-window start (when requested).
     */
    comparison_start_date?: string | null;
    /**
     * Comparison-window end (when requested).
     */
    comparison_end_date?: string | null;
    [k: string]: unknown;
  }

  export interface SentimentRow {
    date?: string | null;
    model?: Shared.DimensionRef | null;
    topic?: Shared.DimensionRef | null;
    region?: Shared.DimensionRef | null;
    prompt?: Shared.DimensionRef | null;
    persona?: Shared.DimensionRef | null;
    tag?: Shared.DimensionRef | null;
    theme?: Shared.DimensionRef | null;
    claim?: Shared.DimensionRef | null;
    run?: Shared.DimensionRef | null;
    competitor?: Shared.DimensionRef | null;
    positive_sentiment?: number | null;
    negative_sentiment?: number | null;
    occurrence?: number | null;
    /**
     * Comparison-window metrics (when requested).
     */
    previous?: SentimentRow.Previous | null;
    prev_date?: string | null;
    cited_websites?: Array<string> | null;
    rank?: number | null;
    [k: string]: unknown;
  }

  export namespace SentimentRow {
    export interface Previous {
      positive_sentiment?: number | null;
      negative_sentiment?: number | null;
      occurrence?: number | null;
      [k: string]: unknown;
    }
  }
}
export declare namespace Sentiment {
  export {
    type SentimentQuery as SentimentQuery,
    type StreamSentimentQuery as StreamSentimentQuery,
    type SentimentV2Query as SentimentV2Query,
    type SentimentStreamV1StreamPostResponse as SentimentStreamV1StreamPostResponse,
    type SentimentQueryV2V2PostResponse as SentimentQueryV2V2PostResponse,
    type SentimentStreamV2V2StreamPostResponse as SentimentStreamV2V2StreamPostResponse,
    type SentimentQueryV1PostParams as SentimentQueryV1PostParams,
    type SentimentStreamV1StreamPostParams as SentimentStreamV1StreamPostParams,
    type SentimentQueryV2V2PostParams as SentimentQueryV2V2PostParams,
    type SentimentStreamV2V2StreamPostParams as SentimentStreamV2V2StreamPostParams,
  };
}

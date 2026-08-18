// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { Stream } from '../../core/streaming';
import type { RequestOptions } from '../../internal/request-options';
import { buildHeaders } from '../../internal/headers';
import type * as Shared from '../shared';

export class Visibility extends APIResource {
  /**
   * Query visibility report.
   *
   * @param {VisibilityQueryV1PostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Shared.Response>} Successful Response
   *
   * @example
   * ```ts
   * const response = await client.reports.visibility.queryV1Post({
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
  queryV1Post(body: VisibilityQueryV1PostParams, options?: RequestOptions): APIPromise<Shared.Response> {
    return this._client.post('/v1/reports/visibility', { body, ...options });
  }

  /**
   * Stream Visibility
   *
   * @param {VisibilityStreamV1StreamPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Stream<VisibilityStreamV1StreamPostResponse>>} Server-sent events stream. Emits a `summary` event first, then one `row` event per streamed row.
   *
   * @example
   * ```ts
   * const stream = await client.reports.visibility.streamV1StreamPost({
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
    body: VisibilityStreamV1StreamPostParams,
    options?: RequestOptions,
  ): APIPromise<Stream<VisibilityStreamV1StreamPostResponse>> {
    return this._client.post('/v1/reports/visibility/stream', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    });
  }

  /**
   * Query Visibility V2
   *
   * @param {VisibilityQueryV2V2PostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VisibilityQueryV2V2PostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const queryV2V2Post = await client.reports.visibility.queryV2V2Post({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '',
   *   end_date: '',
   *   interval: 'day',
   *   scope: 'owned',
   * });
   * ```
   */
  queryV2V2Post(
    body: VisibilityQueryV2V2PostParams,
    options?: RequestOptions,
  ): APIPromise<VisibilityQueryV2V2PostResponse> {
    return this._client.post('/v2/reports/visibility', { body, ...options });
  }

  /**
   * Stream Visibility V2
   *
   * @param {VisibilityStreamV2V2StreamPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Stream<VisibilityStreamV2V2StreamPostResponse>>} Server-sent events stream. Emits one `summary` event (the report `info` block) first, then one `result` event per row.
   *
   * @example
   * ```ts
   * const stream = await client.reports.visibility.streamV2V2StreamPost({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '',
   *   end_date: '',
   *   interval: 'day',
   *   scope: 'owned',
   * });
   *
   * for await (const event of stream) {
   *   console.log(event);
   * }
   * ```
   */
  streamV2V2StreamPost(
    body: VisibilityStreamV2V2StreamPostParams,
    options?: RequestOptions,
  ): APIPromise<Stream<VisibilityStreamV2V2StreamPostResponse>> {
    return this._client.post('/v2/reports/visibility/stream', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    });
  }
}

export interface VisibilityQuery {
  metrics: Array<
    'share_of_voice' | 'mentions_count' | 'visibility_score' | 'executions' | 'average_position'
  >;
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
    | 'date'
    | 'region'
    | 'topic'
    | 'topic_id'
    | 'model'
    | 'asset_id'
    | 'asset_name'
    | 'prompt'
    | 'prompt_id'
    | 'tag'
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
   * List of filters to apply to the visibility report.
   */
  filters?: Array<
    | Shared.RegionIDFilter
    | Shared.RegionNameFilter
    | Shared.ModelIDFilter
    | Shared.TopicIDFilter
    | Shared.TopicNameFilter
    | Shared.ProfoundAnswerEngineInsightsFiltersAssetNameFilter
    | Shared.TagIDFilter
    | Shared.TagNameFilter
    | Shared.PromptIDFilter
    | Shared.PromptFilter
    | Shared.PersonaIDFilter
  >;
}

export interface StreamVisibilityQuery {
  metrics: Array<
    'share_of_voice' | 'mentions_count' | 'visibility_score' | 'executions' | 'average_position'
  >;
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
    | 'date'
    | 'region'
    | 'topic'
    | 'topic_id'
    | 'model'
    | 'asset_id'
    | 'asset_name'
    | 'prompt'
    | 'prompt_id'
    | 'tag'
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
   * List of filters to apply to the visibility report.
   */
  filters?: Array<
    | Shared.RegionIDFilter
    | Shared.RegionNameFilter
    | Shared.ModelIDFilter
    | Shared.TopicIDFilter
    | Shared.TopicNameFilter
    | Shared.ProfoundAnswerEngineInsightsFiltersAssetNameFilter
    | Shared.TagIDFilter
    | Shared.TagNameFilter
    | Shared.PromptIDFilter
    | Shared.PromptFilter
    | Shared.PersonaIDFilter
  >;
}

export interface VisibilityV2Query {
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;
  group_by?: Array<'date' | 'model' | 'topic' | 'region' | 'prompt' | 'persona'>;
  metrics?: Array<'visibility_score' | 'share_of_voice' | 'average_position'> | null;
  /**
   * @default day
   */
  interval?: 'day' | 'week' | 'month';
  /**
   * @default owned
   */
  scope?: 'owned' | 'all';
  /**
   * A name (`is`), a list (`in`), or {op,value} with op `is`/`in`/`not_in`.
   */
  assets?: string | Array<string> | VisibilityV2Query.EntityFilterClause | null;
  filter?: Shared.FilterNode | null;
  sort?: VisibilityV2Query.Sort;
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

export namespace VisibilityV2Query {
  export interface EntityFilterClause {
    op:
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

  export interface Sort {
    /**
     * @default visibility_score
     */
    field?: 'visibility_score' | 'share_of_voice' | 'average_position';
  }
}

export interface VisibilityQueryV1PostParams {
  metrics: Array<
    'share_of_voice' | 'mentions_count' | 'visibility_score' | 'executions' | 'average_position'
  >;
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
    | 'date'
    | 'region'
    | 'topic'
    | 'topic_id'
    | 'model'
    | 'asset_id'
    | 'asset_name'
    | 'prompt'
    | 'prompt_id'
    | 'tag'
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
   * List of filters to apply to the visibility report.
   */
  filters?: Array<
    | Shared.RegionIDFilter
    | Shared.RegionNameFilter
    | Shared.ModelIDFilter
    | Shared.TopicIDFilter
    | Shared.TopicNameFilter
    | Shared.ProfoundAnswerEngineInsightsFiltersAssetNameFilter
    | Shared.TagIDFilter
    | Shared.TagNameFilter
    | Shared.PromptIDFilter
    | Shared.PromptFilter
    | Shared.PersonaIDFilter
  >;
}

export interface VisibilityStreamV1StreamPostParams {
  metrics: Array<
    'share_of_voice' | 'mentions_count' | 'visibility_score' | 'executions' | 'average_position'
  >;
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
    | 'date'
    | 'region'
    | 'topic'
    | 'topic_id'
    | 'model'
    | 'asset_id'
    | 'asset_name'
    | 'prompt'
    | 'prompt_id'
    | 'tag'
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
   * List of filters to apply to the visibility report.
   */
  filters?: Array<
    | Shared.RegionIDFilter
    | Shared.RegionNameFilter
    | Shared.ModelIDFilter
    | Shared.TopicIDFilter
    | Shared.TopicNameFilter
    | Shared.ProfoundAnswerEngineInsightsFiltersAssetNameFilter
    | Shared.TagIDFilter
    | Shared.TagNameFilter
    | Shared.PromptIDFilter
    | Shared.PromptFilter
    | Shared.PersonaIDFilter
  >;
}

export type VisibilityStreamV1StreamPostResponse =
  | VisibilityStreamV1StreamPostResponse.SseSummaryEventData
  | Record<string, unknown>;

export namespace VisibilityStreamV1StreamPostResponse {
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

export interface VisibilityQueryV2V2PostParams {
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;
  group_by?: Array<'date' | 'model' | 'topic' | 'region' | 'prompt' | 'persona'>;
  metrics?: Array<'visibility_score' | 'share_of_voice' | 'average_position'> | null;
  /**
   * @default day
   */
  interval?: 'day' | 'week' | 'month';
  /**
   * @default owned
   */
  scope?: 'owned' | 'all';
  /**
   * A name (`is`), a list (`in`), or {op,value} with op `is`/`in`/`not_in`.
   */
  assets?: string | Array<string> | VisibilityQueryV2V2PostParams.EntityFilterClause | null;
  filter?: Shared.FilterNode | null;
  sort?: VisibilityQueryV2V2PostParams.Sort;
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

export namespace VisibilityQueryV2V2PostParams {
  export interface EntityFilterClause {
    op:
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

  export interface Sort {
    /**
     * @default visibility_score
     */
    field?: 'visibility_score' | 'share_of_voice' | 'average_position';
  }
}

export interface VisibilityQueryV2V2PostResponse {
  info: VisibilityQueryV2V2PostResponse.Info;
  data: Array<VisibilityQueryV2V2PostResponse.Data>;
}

export namespace VisibilityQueryV2V2PostResponse {
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
     * Asset scope: `all` or `owned`.
     */
    scope: string;
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
     * Echoed `assets` selection (filter clause, name, or list), or null.
     */
    asset_filter?: Record<string, unknown> | Array<string> | string | null;
    [k: string]: unknown;
  }

  export interface Data {
    asset?: Data.Asset | null;
    /**
     * Asset rank (only when not grouped).
     */
    rank?: number | null;
    date?: string | null;
    model?: Shared.DimensionRef | null;
    topic?: Shared.DimensionRef | null;
    region?: Shared.DimensionRef | null;
    prompt?: Shared.DimensionRef | null;
    persona?: Shared.DimensionRef | null;
    visibility_score?: number | null;
    share_of_voice?: number | null;
    average_position?: number | null;
    [k: string]: unknown;
  }

  export namespace Data {
    export interface Asset {
      name?: string | null;
      /**
       * Whether the asset is owned by the category.
       */
      owned?: boolean | null;
    }
  }
}

export interface VisibilityStreamV2V2StreamPostParams {
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;
  group_by?: Array<'date' | 'model' | 'topic' | 'region' | 'prompt' | 'persona'>;
  metrics?: Array<'visibility_score' | 'share_of_voice' | 'average_position'> | null;
  /**
   * @default day
   */
  interval?: 'day' | 'week' | 'month';
  /**
   * @default owned
   */
  scope?: 'owned' | 'all';
  /**
   * A name (`is`), a list (`in`), or {op,value} with op `is`/`in`/`not_in`.
   */
  assets?: string | Array<string> | VisibilityStreamV2V2StreamPostParams.EntityFilterClause | null;
  filter?: Shared.FilterNode | null;
  sort?: VisibilityStreamV2V2StreamPostParams.Sort;
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

export namespace VisibilityStreamV2V2StreamPostParams {
  export interface EntityFilterClause {
    op:
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

  export interface Sort {
    /**
     * @default visibility_score
     */
    field?: 'visibility_score' | 'share_of_voice' | 'average_position';
  }
}

export type VisibilityStreamV2V2StreamPostResponse =
  | VisibilityStreamV2V2StreamPostResponse.VisibilityV2Info
  | VisibilityStreamV2V2StreamPostResponse.VisibilityRow;

export namespace VisibilityStreamV2V2StreamPostResponse {
  export interface VisibilityV2Info {
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
     * Asset scope: `all` or `owned`.
     */
    scope: string;
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
     * Echoed `assets` selection (filter clause, name, or list), or null.
     */
    asset_filter?: Record<string, unknown> | Array<string> | string | null;
    [k: string]: unknown;
  }

  export interface VisibilityRow {
    asset?: VisibilityRow.Asset | null;
    /**
     * Asset rank (only when not grouped).
     */
    rank?: number | null;
    date?: string | null;
    model?: Shared.DimensionRef | null;
    topic?: Shared.DimensionRef | null;
    region?: Shared.DimensionRef | null;
    prompt?: Shared.DimensionRef | null;
    persona?: Shared.DimensionRef | null;
    visibility_score?: number | null;
    share_of_voice?: number | null;
    average_position?: number | null;
    [k: string]: unknown;
  }

  export namespace VisibilityRow {
    export interface Asset {
      name?: string | null;
      /**
       * Whether the asset is owned by the category.
       */
      owned?: boolean | null;
    }
  }
}
export declare namespace Visibility {
  export {
    type VisibilityQuery as VisibilityQuery,
    type StreamVisibilityQuery as StreamVisibilityQuery,
    type VisibilityV2Query as VisibilityV2Query,
    type VisibilityStreamV1StreamPostResponse as VisibilityStreamV1StreamPostResponse,
    type VisibilityQueryV2V2PostResponse as VisibilityQueryV2V2PostResponse,
    type VisibilityStreamV2V2StreamPostResponse as VisibilityStreamV2V2StreamPostResponse,
    type VisibilityQueryV1PostParams as VisibilityQueryV1PostParams,
    type VisibilityStreamV1StreamPostParams as VisibilityStreamV1StreamPostParams,
    type VisibilityQueryV2V2PostParams as VisibilityQueryV2V2PostParams,
    type VisibilityStreamV2V2StreamPostParams as VisibilityStreamV2V2StreamPostParams,
  };
}

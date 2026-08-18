// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { Stream } from '../../core/streaming';
import type { RequestOptions } from '../../internal/request-options';
import { buildHeaders } from '../../internal/headers';
import type * as Shared from '../shared';

export class QueryFanouts extends APIResource {
  /**
   * Query Fanouts
   *
   * @param {QueryFanoutV1PostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Shared.Response>} Successful Response
   *
   * @example
   * ```ts
   * const response = await client.reports.queryFanouts.v1Post({
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
  v1Post(body: QueryFanoutV1PostParams, options?: RequestOptions): APIPromise<Shared.Response> {
    return this._client.post('/v1/reports/query-fanouts', { body, ...options });
  }

  /**
   * Query Fanouts V2
   *
   * @param {QueryFanoutV2V2PostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<QueryFanoutV2V2PostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const v2V2Post = await client.reports.queryFanouts.v2V2Post({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '',
   *   end_date: '',
   *   interval: 'day',
   * });
   * ```
   */
  v2V2Post(
    body: QueryFanoutV2V2PostParams,
    options?: RequestOptions,
  ): APIPromise<QueryFanoutV2V2PostResponse> {
    return this._client.post('/v2/reports/query-fanouts', { body, ...options });
  }

  /**
   * Stream Query Fanouts V2
   *
   * @param {QueryFanoutStreamV2V2StreamPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Stream<QueryFanoutStreamV2V2StreamPostResponse>>} Server-sent events stream. Emits one `summary` event (the report `info` block) first, then one `result` event per row.
   *
   * @example
   * ```ts
   * const stream = await client.reports.queryFanouts.streamV2V2StreamPost({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '',
   *   end_date: '',
   *   interval: 'day',
   * });
   *
   * for await (const event of stream) {
   *   console.log(event);
   * }
   * ```
   */
  streamV2V2StreamPost(
    body: QueryFanoutStreamV2V2StreamPostParams,
    options?: RequestOptions,
  ): APIPromise<Stream<QueryFanoutStreamV2V2StreamPostResponse>> {
    return this._client.post('/v2/reports/query-fanouts/stream', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    });
  }
}

export interface QueryFanoutsQuery {
  /**
   * Metrics to return for each row.
   * @minItems 1
   */
  metrics: Array<'fanouts_per_execution' | 'total_fanouts' | 'share' | 'query_variations'>;
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * Start date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   * @format date-time
   */
  start_date: string;
  /**
   * End date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
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
  dimensions?: Array<'prompt' | 'query' | 'model' | 'region' | 'date'>;
  /**
   * Custom ordering. Keys must be a requested metric or the ``date`` dimension. Values are ``asc`` or ``desc``. Defaults to first metric descending.
   * @default {}
   */
  order_by?: Record<string, 'asc' | 'desc'>;
  /**
   * Pagination settings for the report results.
   */
  pagination?: Shared.Pagination;
  /**
   * Filters to apply to the query fanout report.
   */
  filters?: Array<
    | Shared.RegionIDFilter
    | Shared.RegionNameFilter
    | Shared.ModelIDFilter
    | Shared.TopicIDFilter
    | Shared.TagIDFilter
    | Shared.PromptIDFilter
    | Shared.PersonaIDFilter
    | Shared.AnalysisTypeFilter
    | Shared.PromptTypeFilter
  >;
}

export interface QueryFanoutsV2Query {
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
  group_by?: Array<'date' | 'model' | 'region' | 'prompt' | 'query'>;
  metrics?: Array<'fanouts_per_execution' | 'total_fanouts' | 'share' | 'query_variations'> | null;
  /**
   * @default day
   */
  interval?: 'day' | 'week' | 'month';
  filter?: Shared.FilterNode | null;
  sort?: QueryFanoutsV2Query.Sort | null;
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

export namespace QueryFanoutsV2Query {
  export interface Sort {
    field: string;
    /**
     * @default desc
     */
    dir?: 'asc' | 'desc';
  }
}

export interface QueryFanoutV1PostParams {
  /**
   * Metrics to return for each row.
   * @minItems 1
   */
  metrics: Array<'fanouts_per_execution' | 'total_fanouts' | 'share' | 'query_variations'>;
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * Start date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   * @format date-time
   */
  start_date: string;
  /**
   * End date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
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
  dimensions?: Array<'prompt' | 'query' | 'model' | 'region' | 'date'>;
  /**
   * Custom ordering. Keys must be a requested metric or the ``date`` dimension. Values are ``asc`` or ``desc``. Defaults to first metric descending.
   * @default {}
   */
  order_by?: Record<string, 'asc' | 'desc'>;
  /**
   * Pagination settings for the report results.
   */
  pagination?: Shared.Pagination;
  /**
   * Filters to apply to the query fanout report.
   */
  filters?: Array<
    | Shared.RegionIDFilter
    | Shared.RegionNameFilter
    | Shared.ModelIDFilter
    | Shared.TopicIDFilter
    | Shared.TagIDFilter
    | Shared.PromptIDFilter
    | Shared.PersonaIDFilter
    | Shared.AnalysisTypeFilter
    | Shared.PromptTypeFilter
  >;
}

export interface QueryFanoutV2V2PostParams {
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
  group_by?: Array<'date' | 'model' | 'region' | 'prompt' | 'query'>;
  metrics?: Array<'fanouts_per_execution' | 'total_fanouts' | 'share' | 'query_variations'> | null;
  /**
   * @default day
   */
  interval?: 'day' | 'week' | 'month';
  filter?: Shared.FilterNode | null;
  sort?: QueryFanoutV2V2PostParams.Sort | null;
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

export namespace QueryFanoutV2V2PostParams {
  export interface Sort {
    field: string;
    /**
     * @default desc
     */
    dir?: 'asc' | 'desc';
  }
}

export interface QueryFanoutV2V2PostResponse {
  info: QueryFanoutV2V2PostResponse.Info;
  data: Array<QueryFanoutV2V2PostResponse.Data>;
}

export namespace QueryFanoutV2V2PostResponse {
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
     * Fanout metrics returned per row.
     */
    metrics: Array<string>;
    /**
     * Caveat about which runs the fanout metrics cover.
     */
    coverage_note: string;
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
    [k: string]: unknown;
  }

  export interface Data {
    date?: string | null;
    model?: string | null;
    region?: string | null;
    prompt?: string | null;
    query?: string | null;
    total_fanouts?: number | null;
    fanouts_per_execution?: number | null;
    share?: number | null;
    query_variations?: number | null;
    rank?: number | null;
    [k: string]: unknown;
  }
}

export interface QueryFanoutStreamV2V2StreamPostParams {
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
  group_by?: Array<'date' | 'model' | 'region' | 'prompt' | 'query'>;
  metrics?: Array<'fanouts_per_execution' | 'total_fanouts' | 'share' | 'query_variations'> | null;
  /**
   * @default day
   */
  interval?: 'day' | 'week' | 'month';
  filter?: Shared.FilterNode | null;
  sort?: QueryFanoutStreamV2V2StreamPostParams.Sort | null;
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

export namespace QueryFanoutStreamV2V2StreamPostParams {
  export interface Sort {
    field: string;
    /**
     * @default desc
     */
    dir?: 'asc' | 'desc';
  }
}

export type QueryFanoutStreamV2V2StreamPostResponse =
  | QueryFanoutStreamV2V2StreamPostResponse.QueryFanoutsV2Info
  | QueryFanoutStreamV2V2StreamPostResponse.QueryFanoutRow;

export namespace QueryFanoutStreamV2V2StreamPostResponse {
  export interface QueryFanoutsV2Info {
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
     * Fanout metrics returned per row.
     */
    metrics: Array<string>;
    /**
     * Caveat about which runs the fanout metrics cover.
     */
    coverage_note: string;
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
    [k: string]: unknown;
  }

  export interface QueryFanoutRow {
    date?: string | null;
    model?: string | null;
    region?: string | null;
    prompt?: string | null;
    query?: string | null;
    total_fanouts?: number | null;
    fanouts_per_execution?: number | null;
    share?: number | null;
    query_variations?: number | null;
    rank?: number | null;
    [k: string]: unknown;
  }
}
export declare namespace QueryFanouts {
  export {
    type QueryFanoutsQuery as QueryFanoutsQuery,
    type QueryFanoutsV2Query as QueryFanoutsV2Query,
    type QueryFanoutV2V2PostResponse as QueryFanoutV2V2PostResponse,
    type QueryFanoutStreamV2V2StreamPostResponse as QueryFanoutStreamV2V2StreamPostResponse,
    type QueryFanoutV1PostParams as QueryFanoutV1PostParams,
    type QueryFanoutV2V2PostParams as QueryFanoutV2V2PostParams,
    type QueryFanoutStreamV2V2StreamPostParams as QueryFanoutStreamV2V2StreamPostParams,
  };
}

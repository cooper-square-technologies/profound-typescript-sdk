// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { Stream } from '../../core/streaming';
import type { RequestOptions } from '../../internal/request-options';
import { buildHeaders } from '../../internal/headers';
import type * as Shared from '../shared';

export class WebSearchResults extends APIResource {
  /**
   * Get web search results for a given category.
   *
   * @param {WebSearchResultQueryV1PostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WebSearchResultQueryV1PostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const queryV1Post = await client.reports.webSearchResults.queryV1Post({
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
  queryV1Post(
    body: WebSearchResultQueryV1PostParams,
    options?: RequestOptions,
  ): APIPromise<WebSearchResultQueryV1PostResponse> {
    return this._client.post('/v1/reports/web-search-results', { body, ...options });
  }

  /**
   * Stream Web Search Results
   *
   * @param {WebSearchResultStreamV1StreamPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Stream<WebSearchResultStreamV1StreamPostResponse>>} Server-sent events stream. Emits a `summary` event first, then one `row` event per streamed row.
   *
   * @example
   * ```ts
   * const stream = await client.reports.webSearchResults.streamV1StreamPost({
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
    body: WebSearchResultStreamV1StreamPostParams,
    options?: RequestOptions,
  ): APIPromise<Stream<WebSearchResultStreamV1StreamPostResponse>> {
    return this._client.post('/v1/reports/web-search-results/stream', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    });
  }
}

export interface WebSearchResultsQuery {
  /**
   * Metrics to include. `search_share` is the per-prompt occurrence rate.
   * @minItems 1
   */
  metrics: Array<'count' | 'search_share'>;
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
    | 'hostname'
    | 'path'
    | 'url'
    | 'root_domain'
    | 'date'
    | 'region'
    | 'topic'
    | 'topic_id'
    | 'model'
    | 'tag'
    | 'prompt'
    | 'prompt_id'
    | 'persona'
    | 'search_query'
  >;
  /**
   *
   *     Custom ordering of the report results.
   *
   *     The order is a record of key-value pairs where:
   *     - `key` is the field to order by, which can be a metric or dimension
   *     - `value` is the direction of the order, either `asc` for ascending or `desc` for descending.
   *
   *     When not specified, the default order is the first metric in the query descending.
   *
   * @default {}
   */
  order_by?: Record<string, 'asc' | 'desc'>;
  /**
   * Pagination settings for the report results.
   */
  pagination?: Shared.Pagination;
  /**
   * List of filters to apply to the web search results report.
   */
  filters?: Array<
    | Shared.HostnameFilter
    | Shared.PathFilter
    | Shared.RegionIDFilter
    | Shared.TopicIDFilter
    | Shared.ModelIDFilter
    | Shared.TagIDFilter
    | Shared.URLFilter
    | Shared.RootDomainFilter
    | Shared.PersonaIDFilter
    | Shared.PromptFilter
    | Shared.PromptIDFilter
    | WebSearchResultsQuery.SearchQueryFilter
  >;
}

export namespace WebSearchResultsQuery {
  export interface SearchQueryFilter {
    field: 'search_query';
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

export interface StreamWebSearchResultsQuery {
  /**
   * Metrics to include. `search_share` is the per-prompt occurrence rate.
   * @minItems 1
   */
  metrics: Array<'count' | 'search_share'>;
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
    | 'hostname'
    | 'path'
    | 'url'
    | 'root_domain'
    | 'date'
    | 'region'
    | 'topic'
    | 'topic_id'
    | 'model'
    | 'tag'
    | 'prompt'
    | 'prompt_id'
    | 'persona'
    | 'search_query'
  >;
  /**
   *
   *     Custom ordering of the report results.
   *
   *     The order is a record of key-value pairs where:
   *     - `key` is the field to order by, which can be a metric or dimension
   *     - `value` is the direction of the order, either `asc` for ascending or `desc` for descending.
   *
   *     When not specified, the default order is the first metric in the query descending.
   *
   * @default {}
   */
  order_by?: Record<string, 'asc' | 'desc'>;
  pagination?: Shared.Pagination | null;
  /**
   * List of filters to apply to the web search results report.
   */
  filters?: Array<
    | Shared.HostnameFilter
    | Shared.PathFilter
    | Shared.RegionIDFilter
    | Shared.TopicIDFilter
    | Shared.ModelIDFilter
    | Shared.TagIDFilter
    | Shared.URLFilter
    | Shared.RootDomainFilter
    | Shared.PersonaIDFilter
    | Shared.PromptFilter
    | Shared.PromptIDFilter
    | StreamWebSearchResultsQuery.SearchQueryFilter
  >;
}

export namespace StreamWebSearchResultsQuery {
  export interface SearchQueryFilter {
    field: 'search_query';
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

export interface WebSearchResultQueryV1PostParams {
  /**
   * Metrics to include. `search_share` is the per-prompt occurrence rate.
   * @minItems 1
   */
  metrics: Array<'count' | 'search_share'>;
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
    | 'hostname'
    | 'path'
    | 'url'
    | 'root_domain'
    | 'date'
    | 'region'
    | 'topic'
    | 'topic_id'
    | 'model'
    | 'tag'
    | 'prompt'
    | 'prompt_id'
    | 'persona'
    | 'search_query'
  >;
  /**
   *
   *     Custom ordering of the report results.
   *
   *     The order is a record of key-value pairs where:
   *     - `key` is the field to order by, which can be a metric or dimension
   *     - `value` is the direction of the order, either `asc` for ascending or `desc` for descending.
   *
   *     When not specified, the default order is the first metric in the query descending.
   *
   * @default {}
   */
  order_by?: Record<string, 'asc' | 'desc'>;
  /**
   * Pagination settings for the report results.
   */
  pagination?: Shared.Pagination;
  /**
   * List of filters to apply to the web search results report.
   */
  filters?: Array<
    | Shared.HostnameFilter
    | Shared.PathFilter
    | Shared.RegionIDFilter
    | Shared.TopicIDFilter
    | Shared.ModelIDFilter
    | Shared.TagIDFilter
    | Shared.URLFilter
    | Shared.RootDomainFilter
    | Shared.PersonaIDFilter
    | Shared.PromptFilter
    | Shared.PromptIDFilter
    | WebSearchResultQueryV1PostParams.SearchQueryFilter
  >;
}

export namespace WebSearchResultQueryV1PostParams {
  export interface SearchQueryFilter {
    field: 'search_query';
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

export interface WebSearchResultQueryV1PostResponse {
  /**
   * Base model for report information.
   */
  info: Shared.Info;
  data: Array<WebSearchResultQueryV1PostResponse.Data>;
}

export namespace WebSearchResultQueryV1PostResponse {
  export interface Data {
    metrics: Array<number | string>;
    dimensions: Array<string | null>;
  }
}

export interface WebSearchResultStreamV1StreamPostParams {
  /**
   * Metrics to include. `search_share` is the per-prompt occurrence rate.
   * @minItems 1
   */
  metrics: Array<'count' | 'search_share'>;
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
    | 'hostname'
    | 'path'
    | 'url'
    | 'root_domain'
    | 'date'
    | 'region'
    | 'topic'
    | 'topic_id'
    | 'model'
    | 'tag'
    | 'prompt'
    | 'prompt_id'
    | 'persona'
    | 'search_query'
  >;
  /**
   *
   *     Custom ordering of the report results.
   *
   *     The order is a record of key-value pairs where:
   *     - `key` is the field to order by, which can be a metric or dimension
   *     - `value` is the direction of the order, either `asc` for ascending or `desc` for descending.
   *
   *     When not specified, the default order is the first metric in the query descending.
   *
   * @default {}
   */
  order_by?: Record<string, 'asc' | 'desc'>;
  pagination?: Shared.Pagination | null;
  /**
   * List of filters to apply to the web search results report.
   */
  filters?: Array<
    | Shared.HostnameFilter
    | Shared.PathFilter
    | Shared.RegionIDFilter
    | Shared.TopicIDFilter
    | Shared.ModelIDFilter
    | Shared.TagIDFilter
    | Shared.URLFilter
    | Shared.RootDomainFilter
    | Shared.PersonaIDFilter
    | Shared.PromptFilter
    | Shared.PromptIDFilter
    | WebSearchResultStreamV1StreamPostParams.SearchQueryFilter
  >;
}

export namespace WebSearchResultStreamV1StreamPostParams {
  export interface SearchQueryFilter {
    field: 'search_query';
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

export type WebSearchResultStreamV1StreamPostResponse =
  | WebSearchResultStreamV1StreamPostResponse.SseSummaryEventData
  | Record<string, unknown>;

export namespace WebSearchResultStreamV1StreamPostResponse {
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
export declare namespace WebSearchResults {
  export {
    type WebSearchResultsQuery as WebSearchResultsQuery,
    type StreamWebSearchResultsQuery as StreamWebSearchResultsQuery,
    type WebSearchResultQueryV1PostResponse as WebSearchResultQueryV1PostResponse,
    type WebSearchResultStreamV1StreamPostResponse as WebSearchResultStreamV1StreamPostResponse,
    type WebSearchResultQueryV1PostParams as WebSearchResultQueryV1PostParams,
    type WebSearchResultStreamV1StreamPostParams as WebSearchResultStreamV1StreamPostParams,
  };
}

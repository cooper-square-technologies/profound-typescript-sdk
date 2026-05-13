// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as ReportsAPI from './reports';
import { APIPromise } from '../../core/api-promise';
import { Stream } from '../../core/streaming';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class WebSearchResults extends APIResource {
  /**
   * Get web search results for a given category.
   *
   * @example
   * ```ts
   * const response =
   *   await client.reports.webSearchResults.query({
   *     category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     end_date: '2019-12-27T18:11:19.117Z',
   *     metrics: ['count'],
   *     start_date: '2019-12-27T18:11:19.117Z',
   *   });
   * ```
   */
  query(
    body: WebSearchResultQueryParams,
    options?: RequestOptions,
  ): APIPromise<WebSearchResultQueryResponse> {
    return this._client.post('/v1/reports/web-search-results', { body, ...options });
  }

  /**
   * Stream Web Search Results
   *
   * @example
   * ```ts
   * const response =
   *   await client.reports.webSearchResults.stream({
   *     category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     end_date: '2019-12-27T18:11:19.117Z',
   *     metrics: ['count'],
   *     start_date: '2019-12-27T18:11:19.117Z',
   *   });
   * ```
   */
  stream(
    body: WebSearchResultStreamParams,
    options?: RequestOptions,
  ): APIPromise<Stream<WebSearchResultStreamResponse>> {
    return this._client.post('/v1/reports/web-search-results/stream', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    }) as APIPromise<Stream<WebSearchResultStreamResponse>>;
  }
}

export interface WebSearchResultQueryResponse {
  data: Array<WebSearchResultQueryResponse.Data>;

  /**
   * Base model for report information.
   */
  info: ReportsAPI.ReportInfo;
}

export namespace WebSearchResultQueryResponse {
  export interface Data {
    dimensions: Array<string | null>;

    metrics: Array<number>;
  }
}

/**
 * A streamed web-search-results report row payload.
 */
export type WebSearchResultStreamResponse =
  | WebSearchResultStreamResponse.SseSummaryEventData
  | { [key: string]: unknown };

export namespace WebSearchResultStreamResponse {
  export interface SseSummaryEventData {
    /**
     * The normalized query used to build the stream.
     */
    query: { [key: string]: unknown };

    /**
     * Total number of rows available before pagination is applied.
     */
    total_rows: number;
  }
}

export interface WebSearchResultQueryParams {
  category_id: string;

  /**
   * End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full
   * ISO timestamp.
   */
  end_date: string;

  /**
   * Metrics to include. `search_share` is the per-prompt occurrence rate.
   */
  metrics: Array<'count' | 'search_share'>;

  /**
   * Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or
   * full ISO timestamp.
   */
  start_date: string;

  /**
   * Date interval for the report. (only used with date dimension)
   */
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';

  /**
   * Dimensions to group the report by.
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
   * List of filters to apply to the web search results report.
   */
  filters?: Array<
    | ReportsAPI.HostnameFilter
    | Shared.PathFilter
    | Shared.RegionIDFilter
    | Shared.TopicIDFilter
    | Shared.ModelIDFilter
    | Shared.TagIDFilter
    | ReportsAPI.URLFilter
    | ReportsAPI.RootDomainFilter
    | Shared.PersonaIDFilter
    | Shared.PromptFilter
    | ReportsAPI.PromptIDFilter
    | WebSearchResultQueryParams.SearchQueryFilter
  >;

  /**
   * Custom ordering of the report results.
   *
   *     The order is a record of key-value pairs where:
   *     - `key` is the field to order by, which can be a metric or dimension
   *     - `value` is the direction of the order, either `asc` for ascending or `desc` for descending.
   *
   *     When not specified, the default order is the first metric in the query descending.
   */
  order_by?: { [key: string]: 'asc' | 'desc' };

  /**
   * Pagination settings for the report results.
   */
  pagination?: Shared.Pagination;
}

export namespace WebSearchResultQueryParams {
  /**
   * Filter by web-search query string.
   */
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

export interface WebSearchResultStreamParams {
  category_id: string;

  /**
   * End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full
   * ISO timestamp.
   */
  end_date: string;

  /**
   * Metrics to include. `search_share` is the per-prompt occurrence rate.
   */
  metrics: Array<'count' | 'search_share'>;

  /**
   * Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or
   * full ISO timestamp.
   */
  start_date: string;

  /**
   * Date interval for the report. (only used with date dimension)
   */
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';

  /**
   * Dimensions to group the report by.
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
   * List of filters to apply to the web search results report.
   */
  filters?: Array<
    | ReportsAPI.HostnameFilter
    | Shared.PathFilter
    | Shared.RegionIDFilter
    | Shared.TopicIDFilter
    | Shared.ModelIDFilter
    | Shared.TagIDFilter
    | ReportsAPI.URLFilter
    | ReportsAPI.RootDomainFilter
    | Shared.PersonaIDFilter
    | Shared.PromptFilter
    | ReportsAPI.PromptIDFilter
    | WebSearchResultStreamParams.SearchQueryFilter
  >;

  /**
   * Custom ordering of the report results.
   *
   *     The order is a record of key-value pairs where:
   *     - `key` is the field to order by, which can be a metric or dimension
   *     - `value` is the direction of the order, either `asc` for ascending or `desc` for descending.
   *
   *     When not specified, the default order is the first metric in the query descending.
   */
  order_by?: { [key: string]: 'asc' | 'desc' };

  /**
   * Offset-based pagination parameters.
   */
  pagination?: Shared.Pagination | null;
}

export namespace WebSearchResultStreamParams {
  /**
   * Filter by web-search query string.
   */
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

export declare namespace WebSearchResults {
  export {
    type WebSearchResultQueryResponse as WebSearchResultQueryResponse,
    type WebSearchResultStreamResponse as WebSearchResultStreamResponse,
    type WebSearchResultQueryParams as WebSearchResultQueryParams,
    type WebSearchResultStreamParams as WebSearchResultStreamParams,
  };
}

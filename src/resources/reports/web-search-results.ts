// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import { Stream } from "../../core/streaming";
import type { RequestOptions } from "../../internal/request-options";
import { buildHeaders } from "../../internal/headers";

export class WebSearchResults extends APIResource {
  /**
   * Get web search results for a given category.
   *
   * @param {WebSearchResultQueryParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<WebSearchResultQueryResponse>} Successful Response
   *
   * @example
   * ```ts
   * const query = await client.reports.webSearchResults.query({
   *   date_interval: "day",
   *   dimensions: [],
   *   metrics: [],
   *   order_by: {},
   *   category_id: "",
   *   start_date: "",
   *   end_date: "",
   * });
   * ```
   */
  query(body: WebSearchResultQueryParams, options?: RequestOptions): APIPromise<WebSearchResultQueryResponse> {
    return this._client.post("/v1/reports/web-search-results", { body: body, ...options });
  }

  /**
   * Stream Web Search Results
   *
   * @param {WebSearchResultStreamParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Stream<WebSearchResultStreamResponse>>} Server-sent events stream. Emits a `summary` event first, then one `row` event per streamed row.
   *
   * @example
   * ```ts
   * const stream = await client.reports.webSearchResults.stream({
   *   date_interval: "day",
   *   dimensions: [],
   *   metrics: [],
   *   order_by: {},
   *   category_id: "",
   *   start_date: "",
   *   end_date: "",
   * });
   * for await (const event of stream) {
   *   console.log(event);
   * }
   * ```
   */
  stream(body: WebSearchResultStreamParams, options?: RequestOptions): APIPromise<Stream<WebSearchResultStreamResponse>> {
    return this._client.post("/v1/reports/web-search-results/stream", { body: body, ...options, headers: buildHeaders([{ Accept: "text/event-stream" }, options?.headers]), stream: true });
  }
}

export interface WebSearchResultsQuery {
  /**
   * Metrics to include. `search_share` is the per-prompt occurrence rate.
   * @minItems 1
   */
  metrics: Array<"count" | "search_share">;
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
  date_interval?: "hour" | "day" | "week" | "month" | "quarter" | "year" | "relative_week";
  /**
   * Dimensions to group the report by.
   * @default []
   */
  dimensions?: Array<"hostname" | "path" | "url" | "root_domain" | "date" | "region" | "topic" | "topic_id" | "model" | "tag" | "prompt" | "prompt_id" | "persona" | "search_query">;
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
  order_by?: Record<string, "asc" | "desc">;
  /**
   * Pagination settings for the report results.
   */
  pagination?: Pagination;
  /**
   * List of filters to apply to the web search results report.
   */
  filters?: Array<HostnameFilter | PathFilter | RegionIDFilter | TopicIDFilter | ModelIDFilter | TagIDFilter | URLFilter | RootDomainFilter | PersonaIDFilter | PromptFilter | PromptIDFilter | { field: "search_query"; operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive"; value: string | Array<string> }>;
}

export interface StreamWebSearchResultsQuery {
  /**
   * Metrics to include. `search_share` is the per-prompt occurrence rate.
   * @minItems 1
   */
  metrics: Array<"count" | "search_share">;
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
  date_interval?: "hour" | "day" | "week" | "month" | "quarter" | "year" | "relative_week";
  /**
   * Dimensions to group the report by.
   * @default []
   */
  dimensions?: Array<"hostname" | "path" | "url" | "root_domain" | "date" | "region" | "topic" | "topic_id" | "model" | "tag" | "prompt" | "prompt_id" | "persona" | "search_query">;
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
  order_by?: Record<string, "asc" | "desc">;
  pagination?: Pagination | null;
  /**
   * List of filters to apply to the web search results report.
   */
  filters?: Array<HostnameFilter | PathFilter | RegionIDFilter | TopicIDFilter | ModelIDFilter | TagIDFilter | URLFilter | RootDomainFilter | PersonaIDFilter | PromptFilter | PromptIDFilter | { field: "search_query"; operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive"; value: string | Array<string> }>;
}

/**
 * Base model for report information.
 */
export interface ReportInfo {
  total_rows: number;
  query?: Record<string, unknown> | null;
}

/**
 * Offset-based pagination parameters.
 */
export interface Pagination {
  /**
   * Maximum number of results to return. Default is 10,000, maximum is 50,000.
   * @default 10000
   * @maximum 50000
   */
  limit?: number;
  /**
   * Offset for the results. Used for pagination.
   * @default 0
   * @minimum 0
   */
  offset?: number;
}

/**
 * Filter by hostname
 */
export interface HostnameFilter {
  field: "hostname";
  operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
  value: string | Array<string>;
}

/**
 * Filter by request path
 */
export interface PathFilter {
  field: "path";
  operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
  value: string | Array<string>;
}

/**
 * Filter by region UUID.
 */
export interface RegionIDFilter {
  field: "region_id" | "region";
  operator: "is" | "not_is" | "in" | "not_in";
  value: string | Array<string>;
}

/**
 * Filter by topic UUID.
 */
export interface TopicIDFilter {
  field: "topic_id" | "topic";
  operator: "is" | "not_is" | "in" | "not_in";
  value: string | Array<string>;
}

/**
 * Filter by AI model/platform UUID.
 */
export interface ModelIDFilter {
  field: "model_id" | "model";
  operator: "is" | "not_is" | "in" | "not_in";
  value: string | Array<string>;
}

/**
 * Filter by tag (prompt group) UUID.
 */
export interface TagIDFilter {
  field: "tag_id" | "tag";
  operator: "is" | "not_is" | "in" | "not_in";
  value: string | Array<string>;
}

/**
 * Filter by URL
 */
export interface URLFilter {
  field: "url";
  operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
  value: string | Array<string>;
}

/**
 * Filter by root domain
 */
export interface RootDomainFilter {
  field: "root_domain";
  operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
  value: string | Array<string>;
}

/**
 * Filter by persona UUID.
 */
export interface PersonaIDFilter {
  field: "persona_id";
  operator: "is" | "not_is" | "in" | "not_in";
  value: string | Array<string>;
}

/**
 * Filter by prompt text
 */
export interface PromptFilter {
  field: "prompt";
  operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
  value: string | Array<string>;
}

/**
 * Filter by prompt UUID.
 */
export interface PromptIDFilter {
  field: "prompt_id";
  operator: "is" | "not_is" | "in" | "not_in";
  value: string | Array<string>;
}

export interface WebSearchResultQueryParams {
  /**
   * Metrics to include. `search_share` is the per-prompt occurrence rate.
   * @minItems 1
   */
  metrics: Array<"count" | "search_share">;
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
  date_interval?: "hour" | "day" | "week" | "month" | "quarter" | "year" | "relative_week";
  /**
   * Dimensions to group the report by.
   * @default []
   */
  dimensions?: Array<"hostname" | "path" | "url" | "root_domain" | "date" | "region" | "topic" | "topic_id" | "model" | "tag" | "prompt" | "prompt_id" | "persona" | "search_query">;
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
  order_by?: Record<string, "asc" | "desc">;
  /**
   * Pagination settings for the report results.
   */
  pagination?: Pagination;
  /**
   * List of filters to apply to the web search results report.
   */
  filters?: Array<HostnameFilter | PathFilter | RegionIDFilter | TopicIDFilter | ModelIDFilter | TagIDFilter | URLFilter | RootDomainFilter | PersonaIDFilter | PromptFilter | PromptIDFilter | WebSearchResultQueryParams.SearchQueryFilter>;
}

export namespace WebSearchResultQueryParams {
  export interface SearchQueryFilter {
    field: "search_query";
    operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
    value: string | Array<string>;
  }
}

export interface WebSearchResultQueryResponse {
  /**
   * Base model for report information.
   */
  info: ReportInfo;
  data: Array<WebSearchResultQueryResponse.Data>;
}

export namespace WebSearchResultQueryResponse {
  export interface Data {
    metrics: Array<number>;
    dimensions: Array<string | null>;
  }
}

export interface WebSearchResultStreamParams {
  /**
   * Metrics to include. `search_share` is the per-prompt occurrence rate.
   * @minItems 1
   */
  metrics: Array<"count" | "search_share">;
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
  date_interval?: "hour" | "day" | "week" | "month" | "quarter" | "year" | "relative_week";
  /**
   * Dimensions to group the report by.
   * @default []
   */
  dimensions?: Array<"hostname" | "path" | "url" | "root_domain" | "date" | "region" | "topic" | "topic_id" | "model" | "tag" | "prompt" | "prompt_id" | "persona" | "search_query">;
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
  order_by?: Record<string, "asc" | "desc">;
  pagination?: Pagination | null;
  /**
   * List of filters to apply to the web search results report.
   */
  filters?: Array<HostnameFilter | PathFilter | RegionIDFilter | TopicIDFilter | ModelIDFilter | TagIDFilter | URLFilter | RootDomainFilter | PersonaIDFilter | PromptFilter | PromptIDFilter | WebSearchResultStreamParams.SearchQueryFilter>;
}

export namespace WebSearchResultStreamParams {
  export interface SearchQueryFilter {
    field: "search_query";
    operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
    value: string | Array<string>;
  }
}

export type WebSearchResultStreamResponse = WebSearchResultStreamResponse.SseSummaryEventData | WebSearchResultStreamResponse.WebSearchResultStreamResponseItem;

export namespace WebSearchResultStreamResponse {
  export interface SseSummaryEventData {
    /**
     * The normalized query used to build the stream.
     */
    query: SseSummaryEventData.Query;
    /**
     * Total number of rows available before pagination is applied.
     */
    total_rows: number;
  }

  export namespace SseSummaryEventData {
    export interface Query {
    }
  }

  export interface WebSearchResultStreamResponseItem {
  }
}
export declare namespace WebSearchResults {
  export {
    type WebSearchResultsQuery as WebSearchResultsQuery,
    type StreamWebSearchResultsQuery as StreamWebSearchResultsQuery,
    type WebSearchResultQueryResponse as WebSearchResultQueryResponse,
    type WebSearchResultStreamResponse as WebSearchResultStreamResponse,
    type WebSearchResultQueryParams as WebSearchResultQueryParams,
    type WebSearchResultStreamParams as WebSearchResultStreamParams,
  };
}
export { WebSearchResults as WebSearchResultResource };

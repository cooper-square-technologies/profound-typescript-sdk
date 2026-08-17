// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import { Stream } from "../../core/streaming";
import type { RequestOptions } from "../../internal/request-options";
import { buildHeaders } from "../../internal/headers";

export class Citations extends APIResource {
  /**
   * Get citations for a given category.
   *
   * @param {CitationQueryV1ReportsPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CitationQueryV1ReportsPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const queryV1ReportsPost = await client.reports.citations.queryV1ReportsPost({
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
  queryV1ReportsPost(body: CitationQueryV1ReportsPostParams, options?: RequestOptions): APIPromise<CitationQueryV1ReportsPostResponse> {
    return this._client.post("/v1/reports/citations", { body: body, ...options });
  }

  /**
   * Stream Citations
   *
   * @param {CitationStreamV1ReportsStreamPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Stream<CitationStreamV1ReportsStreamPostResponse>>} Server-sent events stream. Emits a `summary` event first, then one `row` event per streamed row.
   *
   * @example
   * ```ts
   * const stream = await client.reports.citations.streamV1ReportsStreamPost({
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
  streamV1ReportsStreamPost(body: CitationStreamV1ReportsStreamPostParams, options?: RequestOptions): APIPromise<Stream<CitationStreamV1ReportsStreamPostResponse>> {
    return this._client.post("/v1/reports/citations/stream", { body: body, ...options, headers: buildHeaders([{ Accept: "text/event-stream" }, options?.headers]), stream: true });
  }

  /**
   * Query Citations V2
   *
   * @param {CitationQueryV2V2ReportsPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CitationQueryV2V2ReportsPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const queryV2V2ReportsPost = await client.reports.citations.queryV2V2ReportsPost({
   *   category_id: "",
   *   start_date: "",
   *   end_date: "",
   *   interval: "day",
   *   scope: "all",
   * });
   * ```
   */
  queryV2V2ReportsPost(body: CitationQueryV2V2ReportsPostParams, options?: RequestOptions): APIPromise<CitationQueryV2V2ReportsPostResponse> {
    return this._client.post("/v2/reports/citations", { body: body, ...options });
  }

  /**
   * Stream Citations V2
   *
   * @param {CitationStreamV2V2ReportsStreamPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Stream<string>>} Successful Response
   *
   * @example
   * ```ts
   * const stream = await client.reports.citations.streamV2V2ReportsStreamPost({
   *   category_id: "",
   *   start_date: "",
   *   end_date: "",
   *   interval: "day",
   *   scope: "all",
   * });
   * for await (const event of stream) {
   *   console.log(event);
   * }
   * ```
   */
  streamV2V2ReportsStreamPost(body: CitationStreamV2V2ReportsStreamPostParams, options?: RequestOptions): APIPromise<Stream<string>> {
    return this._client.post("/v2/reports/citations/stream", { body: body, ...options, headers: buildHeaders([{ Accept: "text/event-stream" }, options?.headers]), stream: true });
  }
}

export interface CitationsQuery {
  /**
   * Metrics to include. `share_of_voice` is deprecated, use `citation_share` instead.
   */
  metrics: Array<"count" | "citation_share" | "share_of_voice" | "first_cited_at">;
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
  dimensions?: Array<"hostname" | "path" | "date" | "region" | "topic" | "topic_id" | "model" | "tag" | "prompt" | "prompt_id" | "url" | "root_domain" | "persona" | "citation_category">;
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
   * List of filters to apply to the citations report.
   */
  filters?: Array<HostnameFilter | PathFilter | RegionIDFilter | RegionNameFilter | TopicIDFilter | TopicNameFilter | ModelIDFilter | TagIDFilter | TagNameFilter | URLFilter | RootDomainFilter | AnalysisTypeFilter | PromptTypeFilter | PersonaIDFilter | { field: "citation_category"; operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive"; value: string | Array<string> } | PromptFilter | PromptIDFilter>;
}

export interface StreamCitationsQuery {
  /**
   * Metrics to include. `share_of_voice` is deprecated, use `citation_share` instead.
   */
  metrics: Array<"count" | "citation_share" | "share_of_voice" | "first_cited_at">;
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
  dimensions?: Array<"hostname" | "path" | "date" | "region" | "topic" | "topic_id" | "model" | "tag" | "prompt" | "prompt_id" | "url" | "root_domain" | "persona" | "citation_category">;
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
   * List of filters to apply to the citations report.
   */
  filters?: Array<HostnameFilter | PathFilter | RegionIDFilter | RegionNameFilter | TopicIDFilter | TopicNameFilter | ModelIDFilter | TagIDFilter | TagNameFilter | URLFilter | RootDomainFilter | AnalysisTypeFilter | PromptTypeFilter | PersonaIDFilter | { field: "citation_category"; operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive"; value: string | Array<string> } | PromptFilter | PromptIDFilter>;
}

export interface CitationsV2Query {
  category_id: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;
  group_by?: Array<"page" | "date" | "model" | "topic" | "region" | "persona" | "prompt">;
  metrics?: Array<"count" | "citation_share" | "rank" | "first_cited_at"> | null;
  /**
   * @default day
   */
  interval?: "day" | "week" | "month";
  /**
   * `all` (every cited domain) or `owned` (only your owned domains, for easy client-side totals).
   * @default all
   */
  scope?: "all" | "owned";
  filter?: { and?: Array<unknown> | null; or?: Array<unknown> | null; not?: unknown; field?: string | null; op?: string | null; value?: string };
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
 * Filter by region name.
 */
export interface RegionNameFilter {
  field: "region_name";
  operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
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
 * Filter by topic name
 */
export interface TopicNameFilter {
  field: "topic_name";
  operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
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
 * Filter by tag name.
 */
export interface TagNameFilter {
  field: "tag_name";
  operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
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
 * Filter by analysis type (visibility, sentiment, or accuracy).
 */
export interface AnalysisTypeFilter {
  field: "analysis_type";
  operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
  value: "visibility" | "sentiment" | "sentiment_v2" | "accuracy" | Array<"visibility" | "sentiment" | "sentiment_v2" | "accuracy">;
}

/**
 * Filter by prompt type (visibility or sentiment).
 *
 * .. deprecated::
 *     Use :class:`AnalysisTypeFilter` instead. ``prompt_type`` is normalised
 *     to ``analysis_type`` at parse time.
 */
export interface PromptTypeFilter {
  field: "prompt_type";
  operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
  value: "visibility" | "sentiment" | Array<"visibility" | "sentiment">;
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

export interface CitationQueryV1ReportsPostParams {
  /**
   * Metrics to include. `share_of_voice` is deprecated, use `citation_share` instead.
   */
  metrics: Array<"count" | "citation_share" | "share_of_voice" | "first_cited_at">;
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
  dimensions?: Array<"hostname" | "path" | "date" | "region" | "topic" | "topic_id" | "model" | "tag" | "prompt" | "prompt_id" | "url" | "root_domain" | "persona" | "citation_category">;
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
   * List of filters to apply to the citations report.
   */
  filters?: Array<HostnameFilter | PathFilter | RegionIDFilter | RegionNameFilter | TopicIDFilter | TopicNameFilter | ModelIDFilter | TagIDFilter | TagNameFilter | URLFilter | RootDomainFilter | AnalysisTypeFilter | PromptTypeFilter | PersonaIDFilter | CitationQueryV1ReportsPostParams.CitationCategoryFilter | PromptFilter | PromptIDFilter>;
}

export namespace CitationQueryV1ReportsPostParams {
  export interface CitationCategoryFilter {
    field: "citation_category";
    operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
    value: string | Array<string>;
  }
}

export interface CitationQueryV1ReportsPostResponse {
  /**
   * Base model for report information.
   */
  info: ReportInfo;
  data: Array<CitationQueryV1ReportsPostResponse.Data>;
}

export namespace CitationQueryV1ReportsPostResponse {
  export interface Data {
    metrics: Array<number | string | null>;
    dimensions: Array<string>;
  }
}

export interface CitationStreamV1ReportsStreamPostParams {
  /**
   * Metrics to include. `share_of_voice` is deprecated, use `citation_share` instead.
   */
  metrics: Array<"count" | "citation_share" | "share_of_voice" | "first_cited_at">;
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
  dimensions?: Array<"hostname" | "path" | "date" | "region" | "topic" | "topic_id" | "model" | "tag" | "prompt" | "prompt_id" | "url" | "root_domain" | "persona" | "citation_category">;
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
   * List of filters to apply to the citations report.
   */
  filters?: Array<HostnameFilter | PathFilter | RegionIDFilter | RegionNameFilter | TopicIDFilter | TopicNameFilter | ModelIDFilter | TagIDFilter | TagNameFilter | URLFilter | RootDomainFilter | AnalysisTypeFilter | PromptTypeFilter | PersonaIDFilter | CitationStreamV1ReportsStreamPostParams.CitationCategoryFilter | PromptFilter | PromptIDFilter>;
}

export namespace CitationStreamV1ReportsStreamPostParams {
  export interface CitationCategoryFilter {
    field: "citation_category";
    operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
    value: string | Array<string>;
  }
}

export type CitationStreamV1ReportsStreamPostResponse = CitationStreamV1ReportsStreamPostResponse.SseSummaryEventData | CitationStreamV1ReportsStreamPostResponse.CitationStreamV1ReportsStreamPostResponseItem;

export namespace CitationStreamV1ReportsStreamPostResponse {
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

  export interface CitationStreamV1ReportsStreamPostResponseItem {
  }
}

export interface CitationQueryV2V2ReportsPostParams {
  category_id: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;
  group_by?: Array<"page" | "date" | "model" | "topic" | "region" | "persona" | "prompt">;
  metrics?: Array<"count" | "citation_share" | "rank" | "first_cited_at"> | null;
  /**
   * @default day
   */
  interval?: "day" | "week" | "month";
  /**
   * `all` (every cited domain) or `owned` (only your owned domains, for easy client-side totals).
   * @default all
   */
  scope?: "all" | "owned";
  filter?: CitationQueryV2V2ReportsPostParams.Filter | null;
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

export namespace CitationQueryV2V2ReportsPostParams {
  export interface Filter {
    and?: Array<unknown> | null;
    or?: Array<unknown> | null;
    not?: unknown;
    field?: string | null;
    op?: string | null;
    value?: string;
  }
}

export interface CitationQueryV2V2ReportsPostResponse {
}

export interface CitationStreamV2V2ReportsStreamPostParams {
  category_id: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;
  group_by?: Array<"page" | "date" | "model" | "topic" | "region" | "persona" | "prompt">;
  metrics?: Array<"count" | "citation_share" | "rank" | "first_cited_at"> | null;
  /**
   * @default day
   */
  interval?: "day" | "week" | "month";
  /**
   * `all` (every cited domain) or `owned` (only your owned domains, for easy client-side totals).
   * @default all
   */
  scope?: "all" | "owned";
  filter?: CitationStreamV2V2ReportsStreamPostParams.Filter | null;
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

export namespace CitationStreamV2V2ReportsStreamPostParams {
  export interface Filter {
    and?: Array<unknown> | null;
    or?: Array<unknown> | null;
    not?: unknown;
    field?: string | null;
    op?: string | null;
    value?: string;
  }
}
export declare namespace Citations {
  export {
    type CitationsQuery as CitationsQuery,
    type StreamCitationsQuery as StreamCitationsQuery,
    type CitationsV2Query as CitationsV2Query,
    type CitationQueryV1ReportsPostResponse as CitationQueryV1ReportsPostResponse,
    type CitationStreamV1ReportsStreamPostResponse as CitationStreamV1ReportsStreamPostResponse,
    type CitationQueryV2V2ReportsPostResponse as CitationQueryV2V2ReportsPostResponse,
    type CitationQueryV1ReportsPostParams as CitationQueryV1ReportsPostParams,
    type CitationStreamV1ReportsStreamPostParams as CitationStreamV1ReportsStreamPostParams,
    type CitationQueryV2V2ReportsPostParams as CitationQueryV2V2ReportsPostParams,
    type CitationStreamV2V2ReportsStreamPostParams as CitationStreamV2V2ReportsStreamPostParams,
  };
}
export { Citations as CitationResource };

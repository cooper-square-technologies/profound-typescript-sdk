// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import { Stream } from "../../core/streaming";
import type { RequestOptions } from "../../internal/request-options";
import { buildHeaders } from "../../internal/headers";

export class QueryFanouts extends APIResource {
  /**
   * Query Fanouts
   *
   * @param {QueryFanoutV1ReportsPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ReportResponse>} Successful Response
   *
   * @example
   * ```ts
   * const report = await client.reports.queryFanouts.v1ReportsPost({
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
  v1ReportsPost(body: QueryFanoutV1ReportsPostParams, options?: RequestOptions): APIPromise<ReportResponse> {
    return this._client.post("/v1/reports/query-fanouts", { body: body, ...options });
  }

  /**
   * Query Fanouts V2
   *
   * @param {QueryFanoutV2V2ReportsPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<QueryFanoutV2V2ReportsPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const v2V2ReportsPost = await client.reports.queryFanouts.v2V2ReportsPost({
   *   category_id: "",
   *   start_date: "",
   *   end_date: "",
   *   interval: "day",
   * });
   * ```
   */
  v2V2ReportsPost(body: QueryFanoutV2V2ReportsPostParams, options?: RequestOptions): APIPromise<QueryFanoutV2V2ReportsPostResponse> {
    return this._client.post("/v2/reports/query-fanouts", { body: body, ...options });
  }

  /**
   * Stream Query Fanouts V2
   *
   * @param {QueryFanoutStreamV2V2ReportsStreamPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Stream<string>>} Successful Response
   *
   * @example
   * ```ts
   * const stream = await client.reports.queryFanouts.streamV2V2ReportsStreamPost({
   *   category_id: "",
   *   start_date: "",
   *   end_date: "",
   *   interval: "day",
   * });
   * for await (const event of stream) {
   *   console.log(event);
   * }
   * ```
   */
  streamV2V2ReportsStreamPost(body: QueryFanoutStreamV2V2ReportsStreamPostParams, options?: RequestOptions): APIPromise<Stream<string>> {
    return this._client.post("/v2/reports/query-fanouts/stream", { body: body, ...options, headers: buildHeaders([{ Accept: "text/event-stream" }, options?.headers]), stream: true });
  }
}

export interface QueryFanoutsQuery {
  metrics: Array<"fanouts_per_execution" | "total_fanouts" | "share" | "query_variations">;
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
  date_interval?: "hour" | "day" | "week" | "month" | "quarter" | "year" | "relative_week";
  /**
   * Dimensions to group the report by.
   * @default []
   */
  dimensions?: Array<"prompt" | "query" | "model" | "region" | "date">;
  /**
   * Custom ordering. Keys must be a requested metric or the ``date`` dimension. Values are ``asc`` or ``desc``. Defaults to first metric descending.
   * @default {}
   */
  order_by?: Record<string, "asc" | "desc">;
  /**
   * Pagination settings for the report results.
   */
  pagination?: Pagination;
  /**
   * Filters to apply to the query fanout report.
   */
  filters?: Array<RegionIDFilter | RegionNameFilter | ModelIDFilter | TopicIDFilter | TagIDFilter | PromptIDFilter | PersonaIDFilter | AnalysisTypeFilter | PromptTypeFilter>;
}

export interface QueryFanoutsV2Query {
  category_id: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;
  group_by?: Array<"date" | "model" | "region" | "prompt" | "query">;
  metrics?: Array<"fanouts_per_execution" | "total_fanouts" | "share" | "query_variations"> | null;
  /**
   * @default day
   */
  interval?: "day" | "week" | "month";
  filter?: { and?: Array<unknown> | null; or?: Array<unknown> | null; not?: unknown; field?: string | null; op?: string | null; value?: string };
  sort?: { field: string; dir?: "asc" | "desc" } | null;
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
 * Base response model for reports.
 */
export interface ReportResponse {
  /**
   * Base model for report information.
   */
  info: ReportInfo;
  data: Array<ReportResult>;
}

/**
 * Base model for report information.
 */
export interface ReportInfo {
  total_rows: number;
  query?: Record<string, unknown> | null;
}

/**
 * Base model for report results.
 */
export interface ReportResult {
  metrics: Array<number>;
  dimensions: Array<string>;
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
 * Filter by AI model/platform UUID.
 */
export interface ModelIDFilter {
  field: "model_id" | "model";
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
 * Filter by tag (prompt group) UUID.
 */
export interface TagIDFilter {
  field: "tag_id" | "tag";
  operator: "is" | "not_is" | "in" | "not_in";
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

/**
 * Filter by persona UUID.
 */
export interface PersonaIDFilter {
  field: "persona_id";
  operator: "is" | "not_is" | "in" | "not_in";
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

export interface QueryFanoutV1ReportsPostParams {
  metrics: Array<"fanouts_per_execution" | "total_fanouts" | "share" | "query_variations">;
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
  date_interval?: "hour" | "day" | "week" | "month" | "quarter" | "year" | "relative_week";
  /**
   * Dimensions to group the report by.
   * @default []
   */
  dimensions?: Array<"prompt" | "query" | "model" | "region" | "date">;
  /**
   * Custom ordering. Keys must be a requested metric or the ``date`` dimension. Values are ``asc`` or ``desc``. Defaults to first metric descending.
   * @default {}
   */
  order_by?: Record<string, "asc" | "desc">;
  /**
   * Pagination settings for the report results.
   */
  pagination?: Pagination;
  /**
   * Filters to apply to the query fanout report.
   */
  filters?: Array<RegionIDFilter | RegionNameFilter | ModelIDFilter | TopicIDFilter | TagIDFilter | PromptIDFilter | PersonaIDFilter | AnalysisTypeFilter | PromptTypeFilter>;
}

export interface QueryFanoutV2V2ReportsPostParams {
  category_id: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;
  group_by?: Array<"date" | "model" | "region" | "prompt" | "query">;
  metrics?: Array<"fanouts_per_execution" | "total_fanouts" | "share" | "query_variations"> | null;
  /**
   * @default day
   */
  interval?: "day" | "week" | "month";
  filter?: QueryFanoutV2V2ReportsPostParams.Filter | null;
  sort?: QueryFanoutV2V2ReportsPostParams.Sort | null;
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

export namespace QueryFanoutV2V2ReportsPostParams {
  export interface Filter {
    and?: Array<unknown> | null;
    or?: Array<unknown> | null;
    not?: unknown;
    field?: string | null;
    op?: string | null;
    value?: string;
  }

  export interface Sort {
    field: string;
    /**
     * @default desc
     */
    dir?: "asc" | "desc";
  }
}

export interface QueryFanoutV2V2ReportsPostResponse {
}

export interface QueryFanoutStreamV2V2ReportsStreamPostParams {
  category_id: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;
  group_by?: Array<"date" | "model" | "region" | "prompt" | "query">;
  metrics?: Array<"fanouts_per_execution" | "total_fanouts" | "share" | "query_variations"> | null;
  /**
   * @default day
   */
  interval?: "day" | "week" | "month";
  filter?: QueryFanoutStreamV2V2ReportsStreamPostParams.Filter | null;
  sort?: QueryFanoutStreamV2V2ReportsStreamPostParams.Sort | null;
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

export namespace QueryFanoutStreamV2V2ReportsStreamPostParams {
  export interface Filter {
    and?: Array<unknown> | null;
    or?: Array<unknown> | null;
    not?: unknown;
    field?: string | null;
    op?: string | null;
    value?: string;
  }

  export interface Sort {
    field: string;
    /**
     * @default desc
     */
    dir?: "asc" | "desc";
  }
}
export declare namespace QueryFanouts {
  export {
    type QueryFanoutsQuery as QueryFanoutsQuery,
    type QueryFanoutsV2Query as QueryFanoutsV2Query,
    type ReportResponse as ReportResponse,
    type QueryFanoutV2V2ReportsPostResponse as QueryFanoutV2V2ReportsPostResponse,
    type QueryFanoutV1ReportsPostParams as QueryFanoutV1ReportsPostParams,
    type QueryFanoutV2V2ReportsPostParams as QueryFanoutV2V2ReportsPostParams,
    type QueryFanoutStreamV2V2ReportsStreamPostParams as QueryFanoutStreamV2V2ReportsStreamPostParams,
  };
}
export { QueryFanouts as QueryFanoutResource };

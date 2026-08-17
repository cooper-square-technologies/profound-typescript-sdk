// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import { Stream } from "../../core/streaming";
import type { RequestOptions } from "../../internal/request-options";
import { buildHeaders } from "../../internal/headers";

export class Visibility extends APIResource {
  /**
   * Query visibility report.
   *
   * @param {VisibilityQueryV1ReportsPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ReportResponse>} Successful Response
   *
   * @example
   * ```ts
   * const report = await client.reports.visibility.queryV1ReportsPost({
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
  queryV1ReportsPost(body: VisibilityQueryV1ReportsPostParams, options?: RequestOptions): APIPromise<ReportResponse> {
    return this._client.post("/v1/reports/visibility", { body: body, ...options });
  }

  /**
   * Stream Visibility
   *
   * @param {VisibilityStreamV1ReportsStreamPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Stream<VisibilityStreamV1ReportsStreamPostResponse>>} Server-sent events stream. Emits a `summary` event first, then one `row` event per streamed row.
   *
   * @example
   * ```ts
   * const stream = await client.reports.visibility.streamV1ReportsStreamPost({
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
  streamV1ReportsStreamPost(body: VisibilityStreamV1ReportsStreamPostParams, options?: RequestOptions): APIPromise<Stream<VisibilityStreamV1ReportsStreamPostResponse>> {
    return this._client.post("/v1/reports/visibility/stream", { body: body, ...options, headers: buildHeaders([{ Accept: "text/event-stream" }, options?.headers]), stream: true });
  }

  /**
   * Query Visibility V2
   *
   * @param {VisibilityQueryV2V2ReportsPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VisibilityQueryV2V2ReportsPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const queryV2V2ReportsPost = await client.reports.visibility.queryV2V2ReportsPost({
   *   category_id: "",
   *   start_date: "",
   *   end_date: "",
   *   interval: "day",
   *   scope: "owned",
   * });
   * ```
   */
  queryV2V2ReportsPost(body: VisibilityQueryV2V2ReportsPostParams, options?: RequestOptions): APIPromise<VisibilityQueryV2V2ReportsPostResponse> {
    return this._client.post("/v2/reports/visibility", { body: body, ...options });
  }

  /**
   * Stream Visibility V2
   *
   * @param {VisibilityStreamV2V2ReportsStreamPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Stream<string>>} Successful Response
   *
   * @example
   * ```ts
   * const stream = await client.reports.visibility.streamV2V2ReportsStreamPost({
   *   category_id: "",
   *   start_date: "",
   *   end_date: "",
   *   interval: "day",
   *   scope: "owned",
   * });
   * for await (const event of stream) {
   *   console.log(event);
   * }
   * ```
   */
  streamV2V2ReportsStreamPost(body: VisibilityStreamV2V2ReportsStreamPostParams, options?: RequestOptions): APIPromise<Stream<string>> {
    return this._client.post("/v2/reports/visibility/stream", { body: body, ...options, headers: buildHeaders([{ Accept: "text/event-stream" }, options?.headers]), stream: true });
  }
}

export interface VisibilityQuery {
  metrics: Array<"share_of_voice" | "mentions_count" | "visibility_score" | "executions" | "average_position">;
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
  dimensions?: Array<"date" | "region" | "topic" | "topic_id" | "model" | "asset_id" | "asset_name" | "prompt" | "prompt_id" | "tag" | "persona">;
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
  order_by?: Record<string, "asc" | "desc">;
  /**
   * Pagination settings for the report results.
   */
  pagination?: Pagination;
  /**
   * List of filters to apply to the visibility report.
   */
  filters?: Array<RegionIDFilter | RegionNameFilter | ModelIDFilter | TopicIDFilter | TopicNameFilter | { field: "asset_name"; operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive"; value: string | Array<string> } | TagIDFilter | TagNameFilter | PromptIDFilter | PromptFilter | PersonaIDFilter>;
}

export interface StreamVisibilityQuery {
  metrics: Array<"share_of_voice" | "mentions_count" | "visibility_score" | "executions" | "average_position">;
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
  dimensions?: Array<"date" | "region" | "topic" | "topic_id" | "model" | "asset_id" | "asset_name" | "prompt" | "prompt_id" | "tag" | "persona">;
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
  order_by?: Record<string, "asc" | "desc">;
  pagination?: Pagination | null;
  /**
   * List of filters to apply to the visibility report.
   */
  filters?: Array<RegionIDFilter | RegionNameFilter | ModelIDFilter | TopicIDFilter | TopicNameFilter | { field: "asset_name"; operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive"; value: string | Array<string> } | TagIDFilter | TagNameFilter | PromptIDFilter | PromptFilter | PersonaIDFilter>;
}

export interface VisibilityV2Query {
  category_id: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;
  group_by?: Array<"date" | "model" | "topic" | "region" | "prompt" | "persona">;
  metrics?: Array<"visibility_score" | "share_of_voice" | "average_position"> | null;
  /**
   * @default day
   */
  interval?: "day" | "week" | "month";
  /**
   * @default owned
   */
  scope?: "owned" | "all";
  /**
   * A name (`is`), a list (`in`), or {op,value} with op `is`/`in`/`not_in`.
   */
  assets?: string | Array<string> | { op: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive"; value: string | Array<string> } | null;
  filter?: { and?: Array<unknown> | null; or?: Array<unknown> | null; not?: unknown; field?: string | null; op?: string | null; value?: string };
  sort?: { field?: "visibility_score" | "share_of_voice" | "average_position" };
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
 * Filter by topic name
 */
export interface TopicNameFilter {
  field: "topic_name";
  operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
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
 * Filter by prompt UUID.
 */
export interface PromptIDFilter {
  field: "prompt_id";
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
 * Filter by persona UUID.
 */
export interface PersonaIDFilter {
  field: "persona_id";
  operator: "is" | "not_is" | "in" | "not_in";
  value: string | Array<string>;
}

export interface VisibilityQueryV1ReportsPostParams {
  metrics: Array<"share_of_voice" | "mentions_count" | "visibility_score" | "executions" | "average_position">;
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
  dimensions?: Array<"date" | "region" | "topic" | "topic_id" | "model" | "asset_id" | "asset_name" | "prompt" | "prompt_id" | "tag" | "persona">;
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
  order_by?: Record<string, "asc" | "desc">;
  /**
   * Pagination settings for the report results.
   */
  pagination?: Pagination;
  /**
   * List of filters to apply to the visibility report.
   */
  filters?: Array<RegionIDFilter | RegionNameFilter | ModelIDFilter | TopicIDFilter | TopicNameFilter | VisibilityQueryV1ReportsPostParams.AssetNameFilter | TagIDFilter | TagNameFilter | PromptIDFilter | PromptFilter | PersonaIDFilter>;
}

export namespace VisibilityQueryV1ReportsPostParams {
  export interface AssetNameFilter {
    field: "asset_name";
    operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
    value: string | Array<string>;
  }
}

export interface VisibilityStreamV1ReportsStreamPostParams {
  metrics: Array<"share_of_voice" | "mentions_count" | "visibility_score" | "executions" | "average_position">;
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
  dimensions?: Array<"date" | "region" | "topic" | "topic_id" | "model" | "asset_id" | "asset_name" | "prompt" | "prompt_id" | "tag" | "persona">;
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
  order_by?: Record<string, "asc" | "desc">;
  pagination?: Pagination | null;
  /**
   * List of filters to apply to the visibility report.
   */
  filters?: Array<RegionIDFilter | RegionNameFilter | ModelIDFilter | TopicIDFilter | TopicNameFilter | VisibilityStreamV1ReportsStreamPostParams.AssetNameFilter | TagIDFilter | TagNameFilter | PromptIDFilter | PromptFilter | PersonaIDFilter>;
}

export namespace VisibilityStreamV1ReportsStreamPostParams {
  export interface AssetNameFilter {
    field: "asset_name";
    operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
    value: string | Array<string>;
  }
}

export type VisibilityStreamV1ReportsStreamPostResponse = VisibilityStreamV1ReportsStreamPostResponse.SseSummaryEventData | VisibilityStreamV1ReportsStreamPostResponse.VisibilityStreamV1ReportsStreamPostResponseItem;

export namespace VisibilityStreamV1ReportsStreamPostResponse {
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

  export interface VisibilityStreamV1ReportsStreamPostResponseItem {
  }
}

export interface VisibilityQueryV2V2ReportsPostParams {
  category_id: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;
  group_by?: Array<"date" | "model" | "topic" | "region" | "prompt" | "persona">;
  metrics?: Array<"visibility_score" | "share_of_voice" | "average_position"> | null;
  /**
   * @default day
   */
  interval?: "day" | "week" | "month";
  /**
   * @default owned
   */
  scope?: "owned" | "all";
  /**
   * A name (`is`), a list (`in`), or {op,value} with op `is`/`in`/`not_in`.
   */
  assets?: string | Array<string> | VisibilityQueryV2V2ReportsPostParams.EntityFilterClause | null;
  filter?: VisibilityQueryV2V2ReportsPostParams.Filter | null;
  sort?: VisibilityQueryV2V2ReportsPostParams.Sort;
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

export namespace VisibilityQueryV2V2ReportsPostParams {
  export interface EntityFilterClause {
    op: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
    value: string | Array<string>;
  }

  export interface Filter {
    and?: Array<unknown> | null;
    or?: Array<unknown> | null;
    not?: unknown;
    field?: string | null;
    op?: string | null;
    value?: string;
  }

  export interface Sort {
    /**
     * @default visibility_score
     */
    field?: "visibility_score" | "share_of_voice" | "average_position";
  }
}

export interface VisibilityQueryV2V2ReportsPostResponse {
}

export interface VisibilityStreamV2V2ReportsStreamPostParams {
  category_id: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;
  group_by?: Array<"date" | "model" | "topic" | "region" | "prompt" | "persona">;
  metrics?: Array<"visibility_score" | "share_of_voice" | "average_position"> | null;
  /**
   * @default day
   */
  interval?: "day" | "week" | "month";
  /**
   * @default owned
   */
  scope?: "owned" | "all";
  /**
   * A name (`is`), a list (`in`), or {op,value} with op `is`/`in`/`not_in`.
   */
  assets?: string | Array<string> | VisibilityStreamV2V2ReportsStreamPostParams.EntityFilterClause | null;
  filter?: VisibilityStreamV2V2ReportsStreamPostParams.Filter | null;
  sort?: VisibilityStreamV2V2ReportsStreamPostParams.Sort;
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

export namespace VisibilityStreamV2V2ReportsStreamPostParams {
  export interface EntityFilterClause {
    op: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
    value: string | Array<string>;
  }

  export interface Filter {
    and?: Array<unknown> | null;
    or?: Array<unknown> | null;
    not?: unknown;
    field?: string | null;
    op?: string | null;
    value?: string;
  }

  export interface Sort {
    /**
     * @default visibility_score
     */
    field?: "visibility_score" | "share_of_voice" | "average_position";
  }
}
export declare namespace Visibility {
  export {
    type VisibilityQuery as VisibilityQuery,
    type StreamVisibilityQuery as StreamVisibilityQuery,
    type VisibilityV2Query as VisibilityV2Query,
    type ReportResponse as ReportResponse,
    type VisibilityStreamV1ReportsStreamPostResponse as VisibilityStreamV1ReportsStreamPostResponse,
    type VisibilityQueryV2V2ReportsPostResponse as VisibilityQueryV2V2ReportsPostResponse,
    type VisibilityQueryV1ReportsPostParams as VisibilityQueryV1ReportsPostParams,
    type VisibilityStreamV1ReportsStreamPostParams as VisibilityStreamV1ReportsStreamPostParams,
    type VisibilityQueryV2V2ReportsPostParams as VisibilityQueryV2V2ReportsPostParams,
    type VisibilityStreamV2V2ReportsStreamPostParams as VisibilityStreamV2V2ReportsStreamPostParams,
  };
}
export { Visibility as VisibilityResource };

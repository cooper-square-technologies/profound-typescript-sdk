// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import { Stream } from "../../core/streaming";
import type { RequestOptions } from "../../internal/request-options";
import { buildHeaders } from "../../internal/headers";

export class Sentiment extends APIResource {
  /**
   * Get citations for a given category.
   *
   * @param {SentimentQueryV1ReportsPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ReportResponse>} Successful Response
   *
   * @example
   * ```ts
   * const report = await client.reports.sentiment.queryV1ReportsPost({
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
  queryV1ReportsPost(body: SentimentQueryV1ReportsPostParams, options?: RequestOptions): APIPromise<ReportResponse> {
    return this._client.post("/v1/reports/sentiment", { body: body, ...options });
  }

  /**
   * Stream Sentiment
   *
   * @param {SentimentStreamV1ReportsStreamPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Stream<SentimentStreamV1ReportsStreamPostResponse>>} Server-sent events stream. Emits a `summary` event first, then one `row` event per streamed row.
   *
   * @example
   * ```ts
   * const stream = await client.reports.sentiment.streamV1ReportsStreamPost({
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
  streamV1ReportsStreamPost(body: SentimentStreamV1ReportsStreamPostParams, options?: RequestOptions): APIPromise<Stream<SentimentStreamV1ReportsStreamPostResponse>> {
    return this._client.post("/v1/reports/sentiment/stream", { body: body, ...options, headers: buildHeaders([{ Accept: "text/event-stream" }, options?.headers]), stream: true });
  }

  /**
   * Query Sentiment V2
   *
   * @param {SentimentQueryV2V2ReportsPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SentimentQueryV2V2ReportsPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const queryV2V2ReportsPost = await client.reports.sentiment.queryV2V2ReportsPost({
   *   category_id: "",
   *   asset: "",
   *   start_date: "",
   *   end_date: "",
   *   interval: "day",
   *   include_cited_websites: false,
   * });
   * ```
   */
  queryV2V2ReportsPost(body: SentimentQueryV2V2ReportsPostParams, options?: RequestOptions): APIPromise<SentimentQueryV2V2ReportsPostResponse> {
    return this._client.post("/v2/reports/sentiment", { body: body, ...options });
  }

  /**
   * Stream Sentiment V2
   *
   * @param {SentimentStreamV2V2ReportsStreamPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Stream<string>>} Successful Response
   *
   * @example
   * ```ts
   * const stream = await client.reports.sentiment.streamV2V2ReportsStreamPost({
   *   category_id: "",
   *   asset: "",
   *   start_date: "",
   *   end_date: "",
   *   interval: "day",
   *   include_cited_websites: false,
   * });
   * for await (const event of stream) {
   *   console.log(event);
   * }
   * ```
   */
  streamV2V2ReportsStreamPost(body: SentimentStreamV2V2ReportsStreamPostParams, options?: RequestOptions): APIPromise<Stream<string>> {
    return this._client.post("/v2/reports/sentiment/stream", { body: body, ...options, headers: buildHeaders([{ Accept: "text/event-stream" }, options?.headers]), stream: true });
  }
}

export interface SentimentQuery {
  metrics: Array<"positive" | "negative" | "occurrences">;
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
  dimensions?: Array<"theme" | "date" | "region" | "topic" | "topic_id" | "model" | "asset_id" | "asset_name" | "tag" | "prompt" | "prompt_id" | "sentiment_type" | "persona">;
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
   * List of filters to apply to the sentiment report.
   */
  filters?: Array<AssetIDFilter | { field: "asset_name"; operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive"; value: string | Array<string> } | { field: "theme"; operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive"; value: string | Array<string> } | RegionIDFilter | RegionNameFilter | TopicIDFilter | TopicNameFilter | ModelIDFilter | TagIDFilter | TagNameFilter | PromptFilter | PersonaIDFilter>;
}

export interface StreamSentimentQuery {
  metrics: Array<"positive" | "negative" | "occurrences">;
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
  dimensions?: Array<"theme" | "date" | "region" | "topic" | "topic_id" | "model" | "asset_id" | "asset_name" | "tag" | "prompt" | "prompt_id" | "sentiment_type" | "persona">;
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
   * List of filters to apply to the sentiment report.
   */
  filters?: Array<AssetIDFilter | { field: "asset_name"; operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive"; value: string | Array<string> } | { field: "theme"; operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive"; value: string | Array<string> } | RegionIDFilter | RegionNameFilter | TopicIDFilter | TopicNameFilter | ModelIDFilter | TagIDFilter | TagNameFilter | PromptFilter | PersonaIDFilter>;
}

export interface SentimentV2Query {
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
  group_by?: Array<"date" | "model" | "topic" | "region" | "prompt" | "persona" | "tag" | "theme" | "claim" | "run" | "competitor">;
  metrics?: Array<"positive_sentiment" | "negative_sentiment" | "occurrence"> | null;
  /**
   * @default day
   */
  interval?: "day" | "week" | "month";
  filter?: { and?: Array<unknown> | null; or?: Array<unknown> | null; not?: unknown; field?: string | null; op?: string | null; value?: string };
  sort?: { field?: "occurrence" | "positive_sentiment" | "negative_sentiment"; dir?: "asc" | "desc" };
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

export interface AssetIDFilter {
  field: "asset_id";
  operator: "is" | "not_is" | "in" | "not_in";
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

export interface SentimentQueryV1ReportsPostParams {
  metrics: Array<"positive" | "negative" | "occurrences">;
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
  dimensions?: Array<"theme" | "date" | "region" | "topic" | "topic_id" | "model" | "asset_id" | "asset_name" | "tag" | "prompt" | "prompt_id" | "sentiment_type" | "persona">;
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
   * List of filters to apply to the sentiment report.
   */
  filters?: Array<AssetIDFilter | SentimentQueryV1ReportsPostParams.AssetNameFilter | SentimentQueryV1ReportsPostParams.ThemeFilter | RegionIDFilter | RegionNameFilter | TopicIDFilter | TopicNameFilter | ModelIDFilter | TagIDFilter | TagNameFilter | PromptFilter | PersonaIDFilter>;
}

export namespace SentimentQueryV1ReportsPostParams {
  export interface AssetNameFilter {
    field: "asset_name";
    operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
    value: string | Array<string>;
  }

  export interface ThemeFilter {
    field: "theme";
    operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
    value: string | Array<string>;
  }
}

export interface SentimentStreamV1ReportsStreamPostParams {
  metrics: Array<"positive" | "negative" | "occurrences">;
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
  dimensions?: Array<"theme" | "date" | "region" | "topic" | "topic_id" | "model" | "asset_id" | "asset_name" | "tag" | "prompt" | "prompt_id" | "sentiment_type" | "persona">;
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
   * List of filters to apply to the sentiment report.
   */
  filters?: Array<AssetIDFilter | SentimentStreamV1ReportsStreamPostParams.AssetNameFilter | SentimentStreamV1ReportsStreamPostParams.ThemeFilter | RegionIDFilter | RegionNameFilter | TopicIDFilter | TopicNameFilter | ModelIDFilter | TagIDFilter | TagNameFilter | PromptFilter | PersonaIDFilter>;
}

export namespace SentimentStreamV1ReportsStreamPostParams {
  export interface AssetNameFilter {
    field: "asset_name";
    operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
    value: string | Array<string>;
  }

  export interface ThemeFilter {
    field: "theme";
    operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
    value: string | Array<string>;
  }
}

export type SentimentStreamV1ReportsStreamPostResponse = SentimentStreamV1ReportsStreamPostResponse.SseSummaryEventData | SentimentStreamV1ReportsStreamPostResponse.SentimentStreamV1ReportsStreamPostResponseItem;

export namespace SentimentStreamV1ReportsStreamPostResponse {
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

  export interface SentimentStreamV1ReportsStreamPostResponseItem {
  }
}

export interface SentimentQueryV2V2ReportsPostParams {
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
  group_by?: Array<"date" | "model" | "topic" | "region" | "prompt" | "persona" | "tag" | "theme" | "claim" | "run" | "competitor">;
  metrics?: Array<"positive_sentiment" | "negative_sentiment" | "occurrence"> | null;
  /**
   * @default day
   */
  interval?: "day" | "week" | "month";
  filter?: SentimentQueryV2V2ReportsPostParams.Filter | null;
  sort?: SentimentQueryV2V2ReportsPostParams.Sort;
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

export namespace SentimentQueryV2V2ReportsPostParams {
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
     * @default positive_sentiment
     */
    field?: "occurrence" | "positive_sentiment" | "negative_sentiment";
    /**
     * @default desc
     */
    dir?: "asc" | "desc";
  }
}

export interface SentimentQueryV2V2ReportsPostResponse {
}

export interface SentimentStreamV2V2ReportsStreamPostParams {
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
  group_by?: Array<"date" | "model" | "topic" | "region" | "prompt" | "persona" | "tag" | "theme" | "claim" | "run" | "competitor">;
  metrics?: Array<"positive_sentiment" | "negative_sentiment" | "occurrence"> | null;
  /**
   * @default day
   */
  interval?: "day" | "week" | "month";
  filter?: SentimentStreamV2V2ReportsStreamPostParams.Filter | null;
  sort?: SentimentStreamV2V2ReportsStreamPostParams.Sort;
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

export namespace SentimentStreamV2V2ReportsStreamPostParams {
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
     * @default positive_sentiment
     */
    field?: "occurrence" | "positive_sentiment" | "negative_sentiment";
    /**
     * @default desc
     */
    dir?: "asc" | "desc";
  }
}
export declare namespace Sentiment {
  export {
    type SentimentQuery as SentimentQuery,
    type StreamSentimentQuery as StreamSentimentQuery,
    type SentimentV2Query as SentimentV2Query,
    type ReportResponse as ReportResponse,
    type SentimentStreamV1ReportsStreamPostResponse as SentimentStreamV1ReportsStreamPostResponse,
    type SentimentQueryV2V2ReportsPostResponse as SentimentQueryV2V2ReportsPostResponse,
    type SentimentQueryV1ReportsPostParams as SentimentQueryV1ReportsPostParams,
    type SentimentStreamV1ReportsStreamPostParams as SentimentStreamV1ReportsStreamPostParams,
    type SentimentQueryV2V2ReportsPostParams as SentimentQueryV2V2ReportsPostParams,
    type SentimentStreamV2V2ReportsStreamPostParams as SentimentStreamV2V2ReportsStreamPostParams,
  };
}
export { Sentiment as SentimentResource };

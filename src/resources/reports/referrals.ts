// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";

export class Referrals extends APIResource {
  /**
   * Get referral traffic report from the daily aggregated materialized view.
   *
   * This endpoint queries pre-aggregated daily referral data, making it efficient
   * for large date ranges and high-traffic sites.
   *
   * @param {ReferralCreateReportV1V1ReportsPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ReportResponse>} Successful Response
   *
   * @example
   * ```ts
   * const report = await client.reports.referrals.createReportV1V1ReportsPost({
   *   date_interval: "day",
   *   dimensions: [],
   *   metrics: [],
   *   order_by: {},
   *   domain: "",
   *   start_date: "",
   * });
   * ```
   */
  createReportV1V1ReportsPost(body: ReferralCreateReportV1V1ReportsPostParams, options?: RequestOptions): APIPromise<ReportResponse> {
    return this._client.post("/v1/reports/referrals", { body: body, ...options });
  }

  /**
   * Get referral traffic report from the hourly aggregated materialized view (UTC-based).
   *
   * Supports date_interval="hour", calendar intervals through "year", "quarter", and "relative_week".
   *
   * @param {ReferralCreateReportV2V2ReportsPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ReportResponse>} Successful Response
   *
   * @example
   * ```ts
   * const report = await client.reports.referrals.createReportV2V2ReportsPost({
   *   date_interval: "day",
   *   dimensions: [],
   *   metrics: [],
   *   order_by: {},
   *   domain: "",
   *   start_date: "",
   * });
   * ```
   */
  createReportV2V2ReportsPost(body: ReferralCreateReportV2V2ReportsPostParams, options?: RequestOptions): APIPromise<ReportResponse> {
    return this._client.post("/v2/reports/referrals", { body: body, ...options });
  }
}

export interface ReferralsQuery {
  metrics: Array<"visits" | "last_visit">;
  /**
   * Domain to query logs for.
   */
  domain: string;
  /**
   * Start date for logs. Accepts: YYYY-MM-DD, YYYY-MM-DD HH:MM, YYYY-MM-DD HH:MM:SS, or full ISO timestamp.
   * @format date-time
   */
  start_date: string;
  /**
   * Date interval for the report. (only used with date dimension)
   * @default day
   */
  date_interval?: "hour" | "day" | "week" | "month" | "year" | "relative_week";
  /**
   * Dimensions to group the report by.
   * @default []
   */
  dimensions?: Array<"date" | "path" | "referral_source">;
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
   * End date for logs. Accepts same formats as start_date. Defaults to now if omitted.
   * @format date-time
   */
  end_date?: string;
  /**
   * @format uuid
   */
  organization_id?: string | null;
  /**
   * Numeric filters applied after report metrics are calculated.
   */
  metric_filters?: Array<{ field: string; operator: ">" | ">=" | "<" | "<=" | "=" | "==" | "!="; value: number }>;
  /**
   * Filters for referrals report.
   */
  filters?: Array<PathFilter | { field: "referral_source"; operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive"; value: "openai" | "none" | "anthropic" | "deepseek" | "perplexity" | "you" | "grok" | "microsoft" | "gemini" | "internal" | "other" | Array<"openai" | "none" | "anthropic" | "deepseek" | "perplexity" | "you" | "grok" | "microsoft" | "gemini" | "internal" | "other"> }>;
}

export interface ReferralsQueryV2 {
  metrics: Array<"visits" | "last_visit">;
  /**
   * Domain to query logs for.
   */
  domain: string;
  /**
   * Start date for logs. Accepts: YYYY-MM-DD, YYYY-MM-DD HH:MM, YYYY-MM-DD HH:MM:SS, or full ISO timestamp.
   * @format date-time
   */
  start_date: string;
  /**
   * Date interval for the report. (only used with date dimension)
   * @default day
   */
  date_interval?: "hour" | "day" | "week" | "month" | "quarter" | "year" | "relative_week";
  /**
   * Dimensions to group the report by.
   * @default []
   */
  dimensions?: Array<"date" | "hour" | "path" | "referral_source" | "referral_type">;
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
   * End date in UTC. Accepts same formats as start_date. Defaults to now UTC if omitted.
   * @format date-time
   */
  end_date?: string;
  /**
   * @format uuid
   */
  organization_id?: string | null;
  /**
   * Numeric filters applied after report metrics are calculated.
   */
  metric_filters?: Array<{ field: string; operator: ">" | ">=" | "<" | "<=" | "=" | "==" | "!="; value: number }>;
  /**
   * Filters for referrals report.
   */
  filters?: Array<PathFilter | { field: "referral_source"; operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive"; value: "openai" | "none" | "anthropic" | "deepseek" | "perplexity" | "you" | "grok" | "microsoft" | "gemini" | "internal" | "other" | Array<"openai" | "none" | "anthropic" | "deepseek" | "perplexity" | "you" | "grok" | "microsoft" | "gemini" | "internal" | "other"> } | { field: "referral_type"; operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive"; value: "internal" | "referer" | "utm" | "none" | Array<"internal" | "referer" | "utm" | "none"> }>;
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
 * Filter by request path
 */
export interface PathFilter {
  field: "path";
  operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
  value: string | Array<string>;
}

export interface ReferralCreateReportV1V1ReportsPostParams {
  metrics: Array<"visits" | "last_visit">;
  /**
   * Domain to query logs for.
   */
  domain: string;
  /**
   * Start date for logs. Accepts: YYYY-MM-DD, YYYY-MM-DD HH:MM, YYYY-MM-DD HH:MM:SS, or full ISO timestamp.
   * @format date-time
   */
  start_date: string;
  /**
   * Date interval for the report. (only used with date dimension)
   * @default day
   */
  date_interval?: "hour" | "day" | "week" | "month" | "year" | "relative_week";
  /**
   * Dimensions to group the report by.
   * @default []
   */
  dimensions?: Array<"date" | "path" | "referral_source">;
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
   * End date for logs. Accepts same formats as start_date. Defaults to now if omitted.
   * @format date-time
   */
  end_date?: string;
  /**
   * @format uuid
   */
  organization_id?: string | null;
  /**
   * Numeric filters applied after report metrics are calculated.
   */
  metric_filters?: Array<ReferralCreateReportV1V1ReportsPostParams.MetricFilter>;
  /**
   * Filters for referrals report.
   */
  filters?: Array<PathFilter | ReferralCreateReportV1V1ReportsPostParams.ReferralSourceFilter>;
}

export namespace ReferralCreateReportV1V1ReportsPostParams {
  export interface MetricFilter {
    field: string;
    operator: ">" | ">=" | "<" | "<=" | "=" | "==" | "!=";
    value: number;
  }

  export interface ReferralSourceFilter {
    field: "referral_source";
    operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
    value: "openai" | "none" | "anthropic" | "deepseek" | "perplexity" | "you" | "grok" | "microsoft" | "gemini" | "internal" | "other" | Array<"openai" | "none" | "anthropic" | "deepseek" | "perplexity" | "you" | "grok" | "microsoft" | "gemini" | "internal" | "other">;
  }
}

export interface ReferralCreateReportV2V2ReportsPostParams {
  metrics: Array<"visits" | "last_visit">;
  /**
   * Domain to query logs for.
   */
  domain: string;
  /**
   * Start date for logs. Accepts: YYYY-MM-DD, YYYY-MM-DD HH:MM, YYYY-MM-DD HH:MM:SS, or full ISO timestamp.
   * @format date-time
   */
  start_date: string;
  /**
   * Date interval for the report. (only used with date dimension)
   * @default day
   */
  date_interval?: "hour" | "day" | "week" | "month" | "quarter" | "year" | "relative_week";
  /**
   * Dimensions to group the report by.
   * @default []
   */
  dimensions?: Array<"date" | "hour" | "path" | "referral_source" | "referral_type">;
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
   * End date in UTC. Accepts same formats as start_date. Defaults to now UTC if omitted.
   * @format date-time
   */
  end_date?: string;
  /**
   * @format uuid
   */
  organization_id?: string | null;
  /**
   * Numeric filters applied after report metrics are calculated.
   */
  metric_filters?: Array<ReferralCreateReportV2V2ReportsPostParams.MetricFilter>;
  /**
   * Filters for referrals report.
   */
  filters?: Array<PathFilter | ReferralCreateReportV2V2ReportsPostParams.ReferralSourceFilter | ReferralCreateReportV2V2ReportsPostParams.ReferralTypeFilter>;
}

export namespace ReferralCreateReportV2V2ReportsPostParams {
  export interface MetricFilter {
    field: string;
    operator: ">" | ">=" | "<" | "<=" | "=" | "==" | "!=";
    value: number;
  }

  export interface ReferralSourceFilter {
    field: "referral_source";
    operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
    value: "openai" | "none" | "anthropic" | "deepseek" | "perplexity" | "you" | "grok" | "microsoft" | "gemini" | "internal" | "other" | Array<"openai" | "none" | "anthropic" | "deepseek" | "perplexity" | "you" | "grok" | "microsoft" | "gemini" | "internal" | "other">;
  }

  export interface ReferralTypeFilter {
    field: "referral_type";
    operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
    value: "internal" | "referer" | "utm" | "none" | Array<"internal" | "referer" | "utm" | "none">;
  }
}
export declare namespace Referrals {
  export {
    type ReferralsQuery as ReferralsQuery,
    type ReferralsQueryV2 as ReferralsQueryV2,
    type ReportResponse as ReportResponse,
    type ReferralCreateReportV1V1ReportsPostParams as ReferralCreateReportV1V1ReportsPostParams,
    type ReferralCreateReportV2V2ReportsPostParams as ReferralCreateReportV2V2ReportsPostParams,
  };
}
export { Referrals as ReferralResource };

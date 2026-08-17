// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";

export class Bots extends APIResource {
  /**
   * Get bot traffic report from the daily aggregated materialized view.
   *
   * This endpoint queries pre-aggregated daily bot data, making it efficient
   * for large date ranges and high-traffic sites.
   *
   * Metrics:
   * - count: unique bot visits
   * - citations: unique citation events
   * - indexing: unique indexing events
   * - training: unique training events
   * - last_visit: most recent visit timestamp
   *
   * @param {BotCreateReportV1V1ReportsPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ReportResponse>} Successful Response
   *
   * @example
   * ```ts
   * const report = await client.reports.bots.createReportV1V1ReportsPost({
   *   date_interval: "day",
   *   dimensions: [],
   *   metrics: [],
   *   order_by: {},
   *   domain: "",
   *   start_date: "",
   * });
   * ```
   */
  createReportV1V1ReportsPost(body: BotCreateReportV1V1ReportsPostParams, options?: RequestOptions): APIPromise<ReportResponse> {
    return this._client.post("/v1/reports/bots", { body: body, ...options });
  }

  /**
   * Get bot traffic report from the hourly aggregated materialized view (UTC-based).
   *
   * Supports date_interval="hour", calendar intervals through "year", "quarter", and "relative_week".
   *
   * Metrics:
   * - count: unique bot visits
   * - citations: unique citation events (ai_assistant bot type)
   * - indexing: unique indexing events (index bot type)
   * - training: unique training events (ai_training bot type)
   * - last_visit: most recent visit timestamp
   *
   * Dimensions:
   * - date, path, bot_name, bot_provider, bot_type
   *
   * @param {BotCreateReportV2V2ReportsPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ReportResponse>} Successful Response
   *
   * @example
   * ```ts
   * const report = await client.reports.bots.createReportV2V2ReportsPost({
   *   date_interval: "day",
   *   dimensions: [],
   *   metrics: [],
   *   order_by: {},
   *   domain: "",
   *   start_date: "",
   * });
   * ```
   */
  createReportV2V2ReportsPost(body: BotCreateReportV2V2ReportsPostParams, options?: RequestOptions): APIPromise<ReportResponse> {
    return this._client.post("/v2/reports/bots", { body: body, ...options });
  }
}

export interface BotsReportQuery {
  metrics: Array<"count" | "citations" | "indexing" | "training" | "last_visit">;
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
  dimensions?: Array<"date" | "path" | "bot_name" | "bot_provider">;
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
   * Filters for bots report.
   */
  filters?: Array<PathFilter | BotNameFilter | BotProviderFilter>;
}

export interface BotsReportQueryV2 {
  metrics: Array<"count" | "citations" | "indexing" | "training" | "last_visit">;
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
  dimensions?: Array<"date" | "hour" | "path" | "bot_name" | "bot_provider" | "bot_type">;
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
   * Filters for bots report.
   */
  filters?: Array<PathFilter | BotNameFilter | BotProviderFilter | { field: "bot_type"; operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive"; value: "ai_assistant" | "ai_training" | "index" | "ai_agent" | Array<"ai_assistant" | "ai_training" | "index" | "ai_agent"> }>;
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

/**
 * Filter by bot name (user agent)
 */
export interface BotNameFilter {
  field: "bot_name";
  operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
  value: "Amazonbot" | "ClaudeBot" | "Claude-User" | "Claude-SearchBot" | "Applebot" | "Applebot-Extended" | "Bytespider" | "DeepSeek" | "DuckAssistBot" | "DuckDuckBot" | "Googlebot" | "Googlebot-News" | "Googlebot-Video" | "Googlebot-Image" | "Google-Extended" | "Storebot-Google" | "Google-CloudVertexBot" | "meta-externalfetcher" | "meta-externalagent" | "bingbot" | "MicrosoftPreview" | "ChatGPT-User" | "GPTBot" | "OAI-SearchBot" | "OAI-Operator" | "PerplexityBot" | "Perplexity-User" | "Grok-PageBrowser" | "YouBot" | "OpenClaw" | "baiduspider" | "CCBot" | "ERNIEBot" | "Gemini-Fetch" | "YandexBot" | "PetalBot" | "MistralAI-User" | "Slurp" | "Gemini-Deep-Research" | Array<"Amazonbot" | "ClaudeBot" | "Claude-User" | "Claude-SearchBot" | "Applebot" | "Applebot-Extended" | "Bytespider" | "DeepSeek" | "DuckAssistBot" | "DuckDuckBot" | "Googlebot" | "Googlebot-News" | "Googlebot-Video" | "Googlebot-Image" | "Google-Extended" | "Storebot-Google" | "Google-CloudVertexBot" | "meta-externalfetcher" | "meta-externalagent" | "bingbot" | "MicrosoftPreview" | "ChatGPT-User" | "GPTBot" | "OAI-SearchBot" | "OAI-Operator" | "PerplexityBot" | "Perplexity-User" | "Grok-PageBrowser" | "YouBot" | "OpenClaw" | "baiduspider" | "CCBot" | "ERNIEBot" | "Gemini-Fetch" | "YandexBot" | "PetalBot" | "MistralAI-User" | "Slurp" | "Gemini-Deep-Research">;
}

/**
 * Filter by bot provider
 */
export interface BotProviderFilter {
  field: "bot_provider";
  operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
  value: "openai" | "anthropic" | "chatgpt" | "deepseek" | "google" | "microsoft" | "perplexity" | "apple" | "bytedance" | "amazon" | "meta" | "duckduckgo" | "you" | "xai" | "grok" | "gemini" | "mistral" | "huawei" | "yandex" | "baidu" | "yahoo" | "commoncrawl" | "openclaw" | Array<"openai" | "anthropic" | "chatgpt" | "deepseek" | "google" | "microsoft" | "perplexity" | "apple" | "bytedance" | "amazon" | "meta" | "duckduckgo" | "you" | "xai" | "grok" | "gemini" | "mistral" | "huawei" | "yandex" | "baidu" | "yahoo" | "commoncrawl" | "openclaw">;
}

export interface BotCreateReportV1V1ReportsPostParams {
  metrics: Array<"count" | "citations" | "indexing" | "training" | "last_visit">;
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
  dimensions?: Array<"date" | "path" | "bot_name" | "bot_provider">;
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
  metric_filters?: Array<BotCreateReportV1V1ReportsPostParams.MetricFilter>;
  /**
   * Filters for bots report.
   */
  filters?: Array<PathFilter | BotNameFilter | BotProviderFilter>;
}

export namespace BotCreateReportV1V1ReportsPostParams {
  export interface MetricFilter {
    field: string;
    operator: ">" | ">=" | "<" | "<=" | "=" | "==" | "!=";
    value: number;
  }
}

export interface BotCreateReportV2V2ReportsPostParams {
  metrics: Array<"count" | "citations" | "indexing" | "training" | "last_visit">;
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
  dimensions?: Array<"date" | "hour" | "path" | "bot_name" | "bot_provider" | "bot_type">;
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
  metric_filters?: Array<BotCreateReportV2V2ReportsPostParams.MetricFilter>;
  /**
   * Filters for bots report.
   */
  filters?: Array<PathFilter | BotNameFilter | BotProviderFilter | BotCreateReportV2V2ReportsPostParams.BotTypeFilter>;
}

export namespace BotCreateReportV2V2ReportsPostParams {
  export interface MetricFilter {
    field: string;
    operator: ">" | ">=" | "<" | "<=" | "=" | "==" | "!=";
    value: number;
  }

  export interface BotTypeFilter {
    field: "bot_type";
    operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
    value: "ai_assistant" | "ai_training" | "index" | "ai_agent" | Array<"ai_assistant" | "ai_training" | "index" | "ai_agent">;
  }
}
export declare namespace Bots {
  export {
    type BotsReportQuery as BotsReportQuery,
    type BotsReportQueryV2 as BotsReportQueryV2,
    type ReportResponse as ReportResponse,
    type BotCreateReportV1V1ReportsPostParams as BotCreateReportV1V1ReportsPostParams,
    type BotCreateReportV2V2ReportsPostParams as BotCreateReportV2V2ReportsPostParams,
  };
}
export { Bots as BotResource };

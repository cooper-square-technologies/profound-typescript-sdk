// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import type * as Shared from '../shared';

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
   * @param {BotCreateV1V1PostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Shared.Response>} Successful Response
   *
   * @example
   * ```ts
   * const response = await client.reports.bots.createV1V1Post({
   *   date_interval: 'day',
   *   dimensions: [],
   *   metrics: [],
   *   order_by: {},
   *   domain: '',
   *   start_date: '2024-01-01T00:00:00.000Z',
   * });
   * ```
   */
  createV1V1Post(body: BotCreateV1V1PostParams, options?: RequestOptions): APIPromise<Shared.Response> {
    return this._client.post('/v1/reports/bots', { body, ...options });
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
   * @param {BotCreateV2V2PostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Shared.Response>} Successful Response
   *
   * @example
   * ```ts
   * const response = await client.reports.bots.createV2V2Post({
   *   date_interval: 'day',
   *   dimensions: [],
   *   metrics: [],
   *   order_by: {},
   *   domain: '',
   *   start_date: '2024-01-01T00:00:00.000Z',
   *   timezone: 'UTC',
   * });
   * ```
   */
  createV2V2Post(body: BotCreateV2V2PostParams, options?: RequestOptions): APIPromise<Shared.Response> {
    return this._client.post('/v2/reports/bots', { body, ...options });
  }
}

export interface BotsReportQuery {
  metrics: Array<'count' | 'citations' | 'indexing' | 'training' | 'last_visit'>;
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
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week';
  /**
   * Dimensions to group the report by.
   * @default []
   */
  dimensions?: Array<'date' | 'host' | 'path' | 'bot_name' | 'bot_provider'>;
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
  order_by?: Record<string, 'asc' | 'desc'>;
  /**
   * Pagination settings for the report results.
   */
  pagination?: Shared.Pagination;
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
  metric_filters?: Array<Shared.NumericMetricFilter>;
  /**
   * Filters for bots report.
   */
  filters?: Array<Shared.PathFilter | BotsReportQuery.BotNameFilter | BotsReportQuery.BotProviderFilter>;
}

export namespace BotsReportQuery {
  export interface BotNameFilter {
    field: 'bot_name';
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

  export interface BotProviderFilter {
    field: 'bot_provider';
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
    value:
      | 'openai'
      | 'anthropic'
      | 'chatgpt'
      | 'deepseek'
      | 'google'
      | 'microsoft'
      | 'perplexity'
      | 'apple'
      | 'bytedance'
      | 'amazon'
      | 'meta'
      | 'duckduckgo'
      | 'you'
      | 'you.com'
      | 'xai'
      | 'grok'
      | 'gemini'
      | 'mistral'
      | 'huawei'
      | 'yandex'
      | 'baidu'
      | 'yahoo'
      | 'commoncrawl'
      | 'openclaw'
      | Array<
          | 'openai'
          | 'anthropic'
          | 'chatgpt'
          | 'deepseek'
          | 'google'
          | 'microsoft'
          | 'perplexity'
          | 'apple'
          | 'bytedance'
          | 'amazon'
          | 'meta'
          | 'duckduckgo'
          | 'you'
          | 'you.com'
          | 'xai'
          | 'grok'
          | 'gemini'
          | 'mistral'
          | 'huawei'
          | 'yandex'
          | 'baidu'
          | 'yahoo'
          | 'commoncrawl'
          | 'openclaw'
        >;
  }
}

export interface BotsReportQueryV2 {
  metrics: Array<'count' | 'citations' | 'indexing' | 'training' | 'last_visit' | 'agents'>;
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
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';
  /**
   * Dimensions to group the report by.
   * @default []
   */
  dimensions?: Array<'date' | 'hour' | 'host' | 'path' | 'bot_name' | 'bot_provider' | 'bot_type'>;
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
  order_by?: Record<string, 'asc' | 'desc'>;
  /**
   * Pagination settings for the report results.
   */
  pagination?: Shared.Pagination;
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
   * IANA timezone name for date bucketing and filter boundaries.
   * @default UTC
   */
  timezone?: string;
  /**
   * Numeric filters applied after report metrics are calculated.
   */
  metric_filters?: Array<Shared.NumericMetricFilter>;
  /**
   * Filters for bots report.
   */
  filters?: Array<
    | Shared.PathFilter
    | BotsReportQueryV2.BotNameFilter
    | BotsReportQueryV2.BotProviderFilter
    | BotsReportQueryV2.BotTypeFilter
  >;
  /**
   * Domain UUID used for tag lookups.
   * @format uuid
   */
  domain_id?: string | null;
  tags?: Array<string>;
}

export namespace BotsReportQueryV2 {
  export interface BotNameFilter {
    field: 'bot_name';
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

  export interface BotProviderFilter {
    field: 'bot_provider';
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
    value:
      | 'openai'
      | 'anthropic'
      | 'chatgpt'
      | 'deepseek'
      | 'google'
      | 'microsoft'
      | 'perplexity'
      | 'apple'
      | 'bytedance'
      | 'amazon'
      | 'meta'
      | 'duckduckgo'
      | 'you'
      | 'you.com'
      | 'xai'
      | 'grok'
      | 'gemini'
      | 'mistral'
      | 'huawei'
      | 'yandex'
      | 'baidu'
      | 'yahoo'
      | 'commoncrawl'
      | 'openclaw'
      | Array<
          | 'openai'
          | 'anthropic'
          | 'chatgpt'
          | 'deepseek'
          | 'google'
          | 'microsoft'
          | 'perplexity'
          | 'apple'
          | 'bytedance'
          | 'amazon'
          | 'meta'
          | 'duckduckgo'
          | 'you'
          | 'you.com'
          | 'xai'
          | 'grok'
          | 'gemini'
          | 'mistral'
          | 'huawei'
          | 'yandex'
          | 'baidu'
          | 'yahoo'
          | 'commoncrawl'
          | 'openclaw'
        >;
  }

  export interface BotTypeFilter {
    field: 'bot_type';
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
    value:
      | 'ai_assistant'
      | 'ai_training'
      | 'index'
      | 'ai_agent'
      | Array<'ai_assistant' | 'ai_training' | 'index' | 'ai_agent'>;
  }
}

export interface BotCreateV1V1PostParams {
  metrics: Array<'count' | 'citations' | 'indexing' | 'training' | 'last_visit'>;
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
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week';
  /**
   * Dimensions to group the report by.
   * @default []
   */
  dimensions?: Array<'date' | 'host' | 'path' | 'bot_name' | 'bot_provider'>;
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
  order_by?: Record<string, 'asc' | 'desc'>;
  /**
   * Pagination settings for the report results.
   */
  pagination?: Shared.Pagination;
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
  metric_filters?: Array<Shared.NumericMetricFilter>;
  /**
   * Filters for bots report.
   */
  filters?: Array<
    Shared.PathFilter | BotCreateV1V1PostParams.BotNameFilter | BotCreateV1V1PostParams.BotProviderFilter
  >;
}

export namespace BotCreateV1V1PostParams {
  export interface BotNameFilter {
    field: 'bot_name';
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

  export interface BotProviderFilter {
    field: 'bot_provider';
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
    value:
      | 'openai'
      | 'anthropic'
      | 'chatgpt'
      | 'deepseek'
      | 'google'
      | 'microsoft'
      | 'perplexity'
      | 'apple'
      | 'bytedance'
      | 'amazon'
      | 'meta'
      | 'duckduckgo'
      | 'you'
      | 'you.com'
      | 'xai'
      | 'grok'
      | 'gemini'
      | 'mistral'
      | 'huawei'
      | 'yandex'
      | 'baidu'
      | 'yahoo'
      | 'commoncrawl'
      | 'openclaw'
      | Array<
          | 'openai'
          | 'anthropic'
          | 'chatgpt'
          | 'deepseek'
          | 'google'
          | 'microsoft'
          | 'perplexity'
          | 'apple'
          | 'bytedance'
          | 'amazon'
          | 'meta'
          | 'duckduckgo'
          | 'you'
          | 'you.com'
          | 'xai'
          | 'grok'
          | 'gemini'
          | 'mistral'
          | 'huawei'
          | 'yandex'
          | 'baidu'
          | 'yahoo'
          | 'commoncrawl'
          | 'openclaw'
        >;
  }
}

export interface BotCreateV2V2PostParams {
  metrics: Array<'count' | 'citations' | 'indexing' | 'training' | 'last_visit' | 'agents'>;
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
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';
  /**
   * Dimensions to group the report by.
   * @default []
   */
  dimensions?: Array<'date' | 'hour' | 'host' | 'path' | 'bot_name' | 'bot_provider' | 'bot_type'>;
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
  order_by?: Record<string, 'asc' | 'desc'>;
  /**
   * Pagination settings for the report results.
   */
  pagination?: Shared.Pagination;
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
   * IANA timezone name for date bucketing and filter boundaries.
   * @default UTC
   */
  timezone?: string;
  /**
   * Numeric filters applied after report metrics are calculated.
   */
  metric_filters?: Array<Shared.NumericMetricFilter>;
  /**
   * Filters for bots report.
   */
  filters?: Array<
    | Shared.PathFilter
    | BotCreateV2V2PostParams.BotNameFilter
    | BotCreateV2V2PostParams.BotProviderFilter
    | BotCreateV2V2PostParams.BotTypeFilter
  >;
  /**
   * Domain UUID used for tag lookups.
   * @format uuid
   */
  domain_id?: string | null;
  tags?: Array<string>;
}

export namespace BotCreateV2V2PostParams {
  export interface BotNameFilter {
    field: 'bot_name';
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

  export interface BotProviderFilter {
    field: 'bot_provider';
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
    value:
      | 'openai'
      | 'anthropic'
      | 'chatgpt'
      | 'deepseek'
      | 'google'
      | 'microsoft'
      | 'perplexity'
      | 'apple'
      | 'bytedance'
      | 'amazon'
      | 'meta'
      | 'duckduckgo'
      | 'you'
      | 'you.com'
      | 'xai'
      | 'grok'
      | 'gemini'
      | 'mistral'
      | 'huawei'
      | 'yandex'
      | 'baidu'
      | 'yahoo'
      | 'commoncrawl'
      | 'openclaw'
      | Array<
          | 'openai'
          | 'anthropic'
          | 'chatgpt'
          | 'deepseek'
          | 'google'
          | 'microsoft'
          | 'perplexity'
          | 'apple'
          | 'bytedance'
          | 'amazon'
          | 'meta'
          | 'duckduckgo'
          | 'you'
          | 'you.com'
          | 'xai'
          | 'grok'
          | 'gemini'
          | 'mistral'
          | 'huawei'
          | 'yandex'
          | 'baidu'
          | 'yahoo'
          | 'commoncrawl'
          | 'openclaw'
        >;
  }

  export interface BotTypeFilter {
    field: 'bot_type';
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
    value:
      | 'ai_assistant'
      | 'ai_training'
      | 'index'
      | 'ai_agent'
      | Array<'ai_assistant' | 'ai_training' | 'index' | 'ai_agent'>;
  }
}
export declare namespace Bots {
  export {
    type BotsReportQuery as BotsReportQuery,
    type BotsReportQueryV2 as BotsReportQueryV2,
    type BotCreateV1V1PostParams as BotCreateV1V1PostParams,
    type BotCreateV2V2PostParams as BotCreateV2V2PostParams,
  };
}

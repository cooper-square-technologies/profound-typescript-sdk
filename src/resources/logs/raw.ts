// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ReportsAPI from '../reports';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Raw extends APIResource {
  /**
   * Get identified bot logs with filters
   */
  bots(body: RawBotsParams, options?: RequestOptions): APIPromise<RawBotsResponse> {
    return this._client.post('/v1/logs/raw/bots', { body, ...options });
  }

  /**
   * Get all logs with filters
   */
  logs(body: RawLogsParams, options?: RequestOptions): APIPromise<RawLogsResponse> {
    return this._client.post('/v1/logs/raw', { body, ...options });
  }
}

/**
 * Base response model for reports.
 */
export type RawBotsResponse = Array<RawBotsResponse.LogVisitBotList> | ReportsAPI.ReportResponse;

export namespace RawBotsResponse {
  /**
   * DB Model for a bot visit.
   */
  export interface LogVisitBotList {
    bot_name: string;

    bot_provider: string;

    bot_types: Array<'ai_assistant' | 'ai_training' | 'index' | 'ai_agent'>;

    host: string;

    ip: string;

    method: string;

    org_id: string;

    path: string;

    status_code: number;

    timestamp: string;

    user_agent: string;

    bytes_sent?: number;

    duration_ms?: number;

    query_params?: { [key: string]: string };

    referer?: string;
  }
}

/**
 * Base response model for reports.
 */
export type RawLogsResponse = Array<RawLogsResponse.LogVisitList> | ReportsAPI.ReportResponse;

export namespace RawLogsResponse {
  /**
   * DB Model for a log visit.
   */
  export interface LogVisitList {
    host: string;

    ip: string;

    method: string;

    org_id: string;

    path: string;

    status_code: number;

    timestamp: string;

    user_agent: string;

    bytes_sent?: number;

    duration_ms?: number;

    query_params?: { [key: string]: string };

    referer?: string;
  }
}

export interface RawBotsParams {
  /**
   * Domain to query logs for.
   */
  domain: string;

  metrics: Array<'count'>;

  /**
   * Start date for logs. Accepts: YYYY-MM-DD, YYYY-MM-DD HH:MM, YYYY-MM-DD HH:MM:SS,
   * or full ISO timestamp.
   */
  start_date: string;

  /**
   * Date interval for the report. (only used with date dimension)
   */
  date_interval?: 'day' | 'week' | 'month' | 'year';

  /**
   * Dimensions to group the report by.
   */
  dimensions?: Array<
    | 'timestamp'
    | 'method'
    | 'host'
    | 'path'
    | 'status_code'
    | 'ip'
    | 'user_agent'
    | 'referer'
    | 'bytes_sent'
    | 'duration_ms'
    | 'query_params'
    | 'bot_name'
    | 'bot_provider'
    | 'bot_types'
  >;

  /**
   * End date for logs. Accepts same formats as start_date. Defaults to now if
   * omitted.
   */
  end_date?: string;

  /**
   * List of filters to apply to the bots logs query.
   */
  filters?: Array<
    | RawBotsParams.BotNameFilter
    | RawBotsParams.BotProviderFilter
    | RawBotsParams.BotTypesFilter
    | RawBotsParams.MethodFilter
    | RawBotsParams.ProfoundAgentAnalyticsFiltersPathFilter
    | RawBotsParams.StatusCodeFilter
    | RawBotsParams.IPFilter
    | RawBotsParams.UserAgentFilter
    | RawBotsParams.RefererFilter
    | RawBotsParams.QueryParamsFilter
  >;

  /**
   * Custom ordering of the report results.
   *
   * The order is a record of key-value pairs where:
   *
   * - key is the field to order by, which can be a metric or dimension
   * - value is the direction of the order, either 'asc' for ascending or 'desc' for
   *   descending.
   *
   * When not specified, the default order is the first metric in the query
   * descending.
   */
  order_by?: { [key: string]: 'asc' | 'desc' };

  /**
   * Pagination settings for the report results.
   */
  pagination?: Shared.Pagination;
}

export namespace RawBotsParams {
  /**
   * Filter by bot name (user agent)
   */
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

    value:
      | 'Amazonbot'
      | 'ClaudeBot'
      | 'Claude-User'
      | 'Claude-SearchBot'
      | 'Applebot'
      | 'Applebot-Extended'
      | 'Bytespider'
      | 'DeepSeek'
      | 'DuckAssistBot'
      | 'DuckDuckBot'
      | 'Googlebot'
      | 'Googlebot-News'
      | 'Googlebot-Video'
      | 'Googlebot-Image'
      | 'Google-Extended'
      | 'Storebot-Google'
      | 'Google-CloudVertexBot'
      | 'meta-externalfetcher'
      | 'meta-externalagent'
      | 'bingbot'
      | 'MicrosoftPreview'
      | 'ChatGPT-User'
      | 'GPTBot'
      | 'OAI-SearchBot'
      | 'OAI-Operator'
      | 'PerplexityBot'
      | 'Perplexity-User'
      | 'Grok-PageBrowser'
      | 'YouBot'
      | Array<
          | 'Amazonbot'
          | 'ClaudeBot'
          | 'Claude-User'
          | 'Claude-SearchBot'
          | 'Applebot'
          | 'Applebot-Extended'
          | 'Bytespider'
          | 'DeepSeek'
          | 'DuckAssistBot'
          | 'DuckDuckBot'
          | 'Googlebot'
          | 'Googlebot-News'
          | 'Googlebot-Video'
          | 'Googlebot-Image'
          | 'Google-Extended'
          | 'Storebot-Google'
          | 'Google-CloudVertexBot'
          | 'meta-externalfetcher'
          | 'meta-externalagent'
          | 'bingbot'
          | 'MicrosoftPreview'
          | 'ChatGPT-User'
          | 'GPTBot'
          | 'OAI-SearchBot'
          | 'OAI-Operator'
          | 'PerplexityBot'
          | 'Perplexity-User'
          | 'Grok-PageBrowser'
          | 'YouBot'
        >;
  }

  /**
   * Filter by bot provider
   */
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
      | 'xai'
      | 'grok'
      | 'gemini'
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
          | 'xai'
          | 'grok'
          | 'gemini'
        >;
  }

  /**
   * Filter by bot types (ai_assistant, ai_training, or index)
   */
  export interface BotTypesFilter {
    field: 'bot_types';

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

    value: 'ai_assistant' | 'ai_training' | 'index' | Array<'ai_assistant' | 'ai_training' | 'index'>;
  }

  /**
   * Filter by HTTP method
   */
  export interface MethodFilter {
    field: 'method';

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

  /**
   * Filter by request path
   */
  export interface ProfoundAgentAnalyticsFiltersPathFilter {
    field: 'path';

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

  /**
   * Filter by HTTP status code
   */
  export interface StatusCodeFilter {
    field: 'status_code';

    operator: 'is' | 'not_is' | 'in' | 'not_in';

    value: number | Array<number>;
  }

  /**
   * Filter by IP address
   */
  export interface IPFilter {
    field: 'ip';

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

  /**
   * Filter by user agent
   */
  export interface UserAgentFilter {
    field: 'user_agent';

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

  /**
   * Filter by referer
   */
  export interface RefererFilter {
    field: 'referer';

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

  /**
   * Filter by query parameters
   */
  export interface QueryParamsFilter {
    field: 'query_params';

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

export interface RawLogsParams {
  /**
   * Domain to query logs for.
   */
  domain: string;

  metrics: Array<'count'>;

  /**
   * Start date for logs. Accepts: YYYY-MM-DD, YYYY-MM-DD HH:MM, YYYY-MM-DD HH:MM:SS,
   * or full ISO timestamp.
   */
  start_date: string;

  /**
   * Date interval for the report. (only used with date dimension)
   */
  date_interval?: 'day' | 'week' | 'month' | 'year';

  /**
   * Dimensions to group the report by.
   */
  dimensions?: Array<
    | 'timestamp'
    | 'method'
    | 'host'
    | 'path'
    | 'status_code'
    | 'ip'
    | 'user_agent'
    | 'referer'
    | 'bytes_sent'
    | 'duration_ms'
    | 'query_params'
  >;

  /**
   * End date for logs. Accepts same formats as start_date. Defaults to now if
   * omitted.
   */
  end_date?: string;

  /**
   * Filters to apply to the logs query.
   */
  filters?: Array<
    | RawLogsParams.MethodFilter
    | RawLogsParams.HostFilter
    | RawLogsParams.ProfoundAgentAnalyticsFiltersPathFilter
    | RawLogsParams.StatusCodeFilter
    | RawLogsParams.IPFilter
    | RawLogsParams.UserAgentFilter
    | RawLogsParams.RefererFilter
    | RawLogsParams.ProviderFilter
    | RawLogsParams.QueryParamsFilter
    | RawLogsParams.BytesSentFilter
    | RawLogsParams.DurationMsFilter
  >;

  /**
   * Custom ordering of the report results.
   *
   * The order is a record of key-value pairs where:
   *
   * - key is the field to order by, which can be a metric or dimension
   * - value is the direction of the order, either 'asc' for ascending or 'desc' for
   *   descending.
   *
   * When not specified, the default order is the first metric in the query
   * descending.
   */
  order_by?: { [key: string]: 'asc' | 'desc' };

  /**
   * Pagination settings for the report results.
   */
  pagination?: Shared.Pagination;
}

export namespace RawLogsParams {
  /**
   * Filter by HTTP method
   */
  export interface MethodFilter {
    field: 'method';

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

  /**
   * Filter by host
   */
  export interface HostFilter {
    field: 'host';

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

  /**
   * Filter by request path
   */
  export interface ProfoundAgentAnalyticsFiltersPathFilter {
    field: 'path';

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

  /**
   * Filter by HTTP status code
   */
  export interface StatusCodeFilter {
    field: 'status_code';

    operator: 'is' | 'not_is' | 'in' | 'not_in';

    value: number | Array<number>;
  }

  /**
   * Filter by IP address
   */
  export interface IPFilter {
    field: 'ip';

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

  /**
   * Filter by user agent
   */
  export interface UserAgentFilter {
    field: 'user_agent';

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

  /**
   * Filter by referer
   */
  export interface RefererFilter {
    field: 'referer';

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

  /**
   * Filter by provider
   */
  export interface ProviderFilter {
    field: 'provider';

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

  /**
   * Filter by query parameters
   */
  export interface QueryParamsFilter {
    field: 'query_params';

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

  /**
   * Filter by bytes sent
   */
  export interface BytesSentFilter {
    field: 'bytes_sent';

    operator: 'is' | 'not_is' | 'in' | 'not_in';

    value: number | Array<number>;
  }

  /**
   * Filter by duration in milliseconds
   */
  export interface DurationMsFilter {
    field: 'duration_ms';

    operator: 'is' | 'not_is' | 'in' | 'not_in';

    value: number | Array<number>;
  }
}

export declare namespace Raw {
  export {
    type RawBotsResponse as RawBotsResponse,
    type RawLogsResponse as RawLogsResponse,
    type RawBotsParams as RawBotsParams,
    type RawLogsParams as RawLogsParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PromptsAPI from '../prompts';
import * as ReportsAPI from '../reports';
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
export type RawBotsResponse = Array<RawBotsResponse.LogVisitBotList> | ReportsAPI.Response;

export namespace RawBotsResponse {
  /**
   * DB Model for a bot visit.
   */
  export interface LogVisitBotList {
    bot_name: string;

    bot_provider: string;

    bot_types: Array<'ai_assistant' | 'ai_training' | 'index'>;

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
export type RawLogsResponse = Array<RawLogsResponse.LogVisitList> | ReportsAPI.Response;

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
    | 'method'
    | 'path'
    | 'status_code'
    | 'ip'
    | 'user_agent'
    | 'referer'
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
   * List of filters to apply to the report. Each filter has an operator, field, and
   * value.
   */
  filters?: Array<RawBotsParams.Filter>;

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
  pagination?: PromptsAPI.Pagination;
}

export namespace RawBotsParams {
  export interface Filter {
    field:
      | 'method'
      | 'path'
      | 'status_code'
      | 'ip'
      | 'user_agent'
      | 'referer'
      | 'query_params'
      | 'bot_name'
      | 'bot_provider'
      | 'bot_types';

    operator:
      | 'is'
      | 'not_is'
      | 'in'
      | 'not_in'
      | 'contains'
      | 'not_contains'
      | 'contains_case_insensitive'
      | 'not_contains_case_insensitive'
      | 'matches';

    /**
     * Value for the filter. Can be a single value or a list of depending on the
     * operator.
     */
    value: string | Array<string> | number | Array<number>;
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
   * List of filters to apply to the report. Each filter has an operator, field, and
   * value.
   */
  filters?: Array<RawLogsParams.Filter>;

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
  pagination?: PromptsAPI.Pagination;
}

export namespace RawLogsParams {
  export interface Filter {
    field: 'method' | 'path' | 'status_code' | 'ip' | 'user_agent' | 'referer' | 'query_params';

    operator:
      | 'is'
      | 'not_is'
      | 'in'
      | 'not_in'
      | 'contains'
      | 'not_contains'
      | 'contains_case_insensitive'
      | 'not_contains_case_insensitive'
      | 'matches';

    /**
     * Value for the filter. Can be a single value or a list of depending on the
     * operator.
     */
    value: string | Array<string> | number | Array<number>;
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

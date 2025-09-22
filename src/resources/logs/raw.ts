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
  getBots(body: RawGetBotsParams, options?: RequestOptions): APIPromise<RawGetBotsResponse> {
    return this._client.post('/v1/logs/raw/bots', { body, ...options });
  }

  /**
   * Get all logs with filters
   */
  getLogs(body: RawGetLogsParams, options?: RequestOptions): APIPromise<RawGetLogsResponse> {
    return this._client.post('/v1/logs/raw', { body, ...options });
  }
}

/**
 * Base response model for reports.
 */
export type RawGetBotsResponse = Array<RawGetBotsResponse.LogVisitBotList> | ReportsAPI.Response;

export namespace RawGetBotsResponse {
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
export type RawGetLogsResponse = Array<RawGetLogsResponse.LogVisitList> | ReportsAPI.Response;

export namespace RawGetLogsResponse {
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

export interface RawGetBotsParams {
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
  filters?: Array<RawGetBotsParams.Filter>;

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

export namespace RawGetBotsParams {
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

export interface RawGetLogsParams {
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
  filters?: Array<RawGetLogsParams.Filter>;

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

export namespace RawGetLogsParams {
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
    type RawGetBotsResponse as RawGetBotsResponse,
    type RawGetLogsResponse as RawGetLogsResponse,
    type RawGetBotsParams as RawGetBotsParams,
    type RawGetLogsParams as RawGetLogsParams,
  };
}

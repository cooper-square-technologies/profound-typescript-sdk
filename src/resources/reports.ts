// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PromptsAPI from './prompts';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Reports extends APIResource {
  /**
   * Get citations for a given category.
   *
   * @example
   * ```ts
   * const response = await client.reports.queryCitations({
   *   category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   end_date: '2019-12-27T18:11:19.117Z',
   *   metrics: ['count'],
   *   start_date: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  queryCitations(
    body: ReportQueryCitationsParams,
    options?: RequestOptions,
  ): APIPromise<ReportQueryCitationsResponse> {
    return this._client.post('/v1/reports/citations', { body, ...options });
  }

  /**
   * Get citations for a given category.
   *
   * @example
   * ```ts
   * const response = await client.reports.querySentiment({
   *   category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   end_date: '2019-12-27T18:11:19.117Z',
   *   metrics: ['positive'],
   *   start_date: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  querySentiment(body: ReportQuerySentimentParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/v1/reports/sentiment', { body, ...options });
  }

  /**
   * Query visibility report.
   *
   * @example
   * ```ts
   * const response = await client.reports.queryVisibility({
   *   category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   end_date: '2019-12-27T18:11:19.117Z',
   *   metrics: ['share_of_voice'],
   *   start_date: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  queryVisibility(body: ReportQueryVisibilityParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/v1/reports/visibility', { body, ...options });
  }
}

/**
 * Base model for report information.
 */
export interface Info {
  total_rows: number;

  query?: { [key: string]: unknown } | null;
}

/**
 * Base response model for reports.
 */
export interface Response {
  data: Array<Result>;

  /**
   * Base model for report information.
   */
  info: Info;
}

/**
 * Base model for report results.
 */
export interface Result {
  dimensions: Array<string>;

  metrics: Array<number>;
}

export interface ReportQueryCitationsResponse {
  data: Array<Result>;

  /**
   * Base model for report information.
   */
  info: Info;
}

export interface ReportQueryCitationsParams {
  category_id: string;

  /**
   * End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full
   * ISO timestamp.
   */
  end_date: string;

  metrics: Array<'count' | 'share_of_voice'>;

  /**
   * Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or
   * full ISO timestamp.
   */
  start_date: string;

  /**
   * Date interval for the report. (only used with date dimension)
   */
  date_interval?: 'day' | 'week' | 'month' | 'year';

  /**
   * Dimensions to group the report by.
   */
  dimensions?: Array<'hostname' | 'path' | 'date' | 'region' | 'topic' | 'model' | 'tag'>;

  /**
   * List of filters to apply to the report. Each filter has an operator, field, and
   * value.
   */
  filters?: Array<ReportQueryCitationsParams.Filter>;

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

export namespace ReportQueryCitationsParams {
  export interface Filter {
    field: 'hostname' | 'path' | 'region' | 'topic' | 'model' | 'tag';

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

export interface ReportQuerySentimentParams {
  category_id: string;

  /**
   * End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full
   * ISO timestamp.
   */
  end_date: string;

  metrics: Array<'positive' | 'negative'>;

  /**
   * Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or
   * full ISO timestamp.
   */
  start_date: string;

  /**
   * Date interval for the report. (only used with date dimension)
   */
  date_interval?: 'day' | 'week' | 'month' | 'year';

  /**
   * Dimensions to group the report by.
   */
  dimensions?: Array<'theme' | 'date' | 'region' | 'topic' | 'model' | 'asset_name' | 'tag'>;

  /**
   * List of filters to apply to the report. Each filter has an operator, field, and
   * value.
   */
  filters?: Array<ReportQuerySentimentParams.Filter>;

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

export namespace ReportQuerySentimentParams {
  export interface Filter {
    field: 'asset_name' | 'theme' | 'region' | 'topic' | 'model' | 'tag';

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

export interface ReportQueryVisibilityParams {
  category_id: string;

  /**
   * End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full
   * ISO timestamp.
   */
  end_date: string;

  metrics: Array<'share_of_voice' | 'mentions_count' | 'visibility_score'>;

  /**
   * Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or
   * full ISO timestamp.
   */
  start_date: string;

  /**
   * Date interval for the report. (only used with date dimension)
   */
  date_interval?: 'day' | 'week' | 'month' | 'year';

  /**
   * Dimensions to group the report by.
   */
  dimensions?: Array<'date' | 'region' | 'topic' | 'model' | 'asset_name' | 'prompt' | 'tag'>;

  /**
   * List of filters to apply to the report. Each filter has an operator, field, and
   * value.
   */
  filters?: Array<ReportQueryVisibilityParams.Filter>;

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

export namespace ReportQueryVisibilityParams {
  export interface Filter {
    field: 'region' | 'topic' | 'model' | 'asset_name' | 'prompt' | 'tag';

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

export declare namespace Reports {
  export {
    type Info as Info,
    type Response as Response,
    type Result as Result,
    type ReportQueryCitationsResponse as ReportQueryCitationsResponse,
    type ReportQueryCitationsParams as ReportQueryCitationsParams,
    type ReportQuerySentimentParams as ReportQuerySentimentParams,
    type ReportQueryVisibilityParams as ReportQueryVisibilityParams,
  };
}

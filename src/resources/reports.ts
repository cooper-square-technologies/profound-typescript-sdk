// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Reports extends APIResource {
  /**
   * Get citations for a given category.
   *
   * @example
   * ```ts
   * const response = await client.reports.citations({
   *   category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   end_date: '2019-12-27T18:11:19.117Z',
   *   metrics: ['count'],
   *   start_date: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  citations(body: ReportCitationsParams, options?: RequestOptions): APIPromise<ReportCitationsResponse> {
    return this._client.post('/v1/reports/citations', { body, ...options });
  }

  /**
   * Get citations for a given category.
   *
   * @example
   * ```ts
   * const reportResponse = await client.reports.sentiment({
   *   category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   end_date: '2019-12-27T18:11:19.117Z',
   *   metrics: ['positive'],
   *   start_date: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  sentiment(body: ReportSentimentParams, options?: RequestOptions): APIPromise<ReportResponse> {
    return this._client.post('/v1/reports/sentiment', { body, ...options });
  }

  /**
   * Query visibility report.
   *
   * @example
   * ```ts
   * const reportResponse = await client.reports.visibility({
   *   category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   end_date: '2019-12-27T18:11:19.117Z',
   *   metrics: ['share_of_voice'],
   *   start_date: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  visibility(body: ReportVisibilityParams, options?: RequestOptions): APIPromise<ReportResponse> {
    return this._client.post('/v1/reports/visibility', { body, ...options });
  }
}

/**
 * Base model for report information.
 */
export interface ReportInfo {
  total_rows: number;

  query?: { [key: string]: unknown } | null;
}

/**
 * Base response model for reports.
 */
export interface ReportResponse {
  data: Array<ReportResult>;

  /**
   * Base model for report information.
   */
  info: ReportInfo;
}

/**
 * Base model for report results.
 */
export interface ReportResult {
  dimensions: Array<string>;

  metrics: Array<number>;
}

export interface ReportCitationsResponse {
  data: Array<ReportResult>;

  /**
   * Base model for report information.
   */
  info: ReportInfo;
}

export interface ReportCitationsParams {
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
  dimensions?: Array<
    'hostname' | 'path' | 'date' | 'region' | 'topic' | 'model' | 'tag' | 'prompt' | 'url' | 'root_domain'
  >;

  /**
   * List of filters to apply to the report. Each filter has an operator, field, and
   * value.
   */
  filters?: Array<ReportCitationsParams.Filter>;

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

export namespace ReportCitationsParams {
  export interface Filter {
    field: 'hostname' | 'path' | 'region' | 'topic' | 'model' | 'tag' | 'url' | 'root_domain' | 'prompt_type';

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

export interface ReportSentimentParams {
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
  dimensions?: Array<'theme' | 'date' | 'region' | 'topic' | 'model' | 'asset_name' | 'tag' | 'prompt'>;

  /**
   * List of filters to apply to the report. Each filter has an operator, field, and
   * value.
   */
  filters?: Array<ReportSentimentParams.Filter>;

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

export namespace ReportSentimentParams {
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

export interface ReportVisibilityParams {
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
  filters?: Array<ReportVisibilityParams.Filter>;

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

export namespace ReportVisibilityParams {
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
    type ReportInfo as ReportInfo,
    type ReportResponse as ReportResponse,
    type ReportResult as ReportResult,
    type ReportCitationsResponse as ReportCitationsResponse,
    type ReportCitationsParams as ReportCitationsParams,
    type ReportSentimentParams as ReportSentimentParams,
    type ReportVisibilityParams as ReportVisibilityParams,
  };
}

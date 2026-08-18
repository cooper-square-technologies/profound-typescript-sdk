// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import type * as Shared from '../shared';

export class Referrals extends APIResource {
  /**
   * Get referral traffic report from the daily aggregated materialized view.
   *
   * This endpoint queries pre-aggregated daily referral data, making it efficient
   * for large date ranges and high-traffic sites.
   *
   * @param {ReferralCreateV1V1PostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Shared.Response>} Successful Response
   *
   * @example
   * ```ts
   * const response = await client.reports.referrals.createV1V1Post({
   *   date_interval: 'day',
   *   dimensions: [],
   *   metrics: [],
   *   order_by: {},
   *   domain: '',
   *   start_date: '2024-01-01T00:00:00.000Z',
   * });
   * ```
   */
  createV1V1Post(body: ReferralCreateV1V1PostParams, options?: RequestOptions): APIPromise<Shared.Response> {
    return this._client.post('/v1/reports/referrals', { body, ...options });
  }

  /**
   * Get referral traffic report from the hourly aggregated materialized view (UTC-based).
   *
   * Supports date_interval="hour", calendar intervals through "year", "quarter", and "relative_week".
   *
   * @param {ReferralCreateV2V2PostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Shared.Response>} Successful Response
   *
   * @example
   * ```ts
   * const response = await client.reports.referrals.createV2V2Post({
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
  createV2V2Post(body: ReferralCreateV2V2PostParams, options?: RequestOptions): APIPromise<Shared.Response> {
    return this._client.post('/v2/reports/referrals', { body, ...options });
  }
}

export interface ReferralsQuery {
  metrics: Array<'visits' | 'last_visit'>;
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
  dimensions?: Array<'date' | 'host' | 'path' | 'referral_source'>;
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
   * Filters for referrals report.
   */
  filters?: Array<Shared.PathFilter | ReferralsQuery.ReferralSourceFilter>;
}

export namespace ReferralsQuery {
  export interface ReferralSourceFilter {
    field: 'referral_source';
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

export interface ReferralsQueryV2 {
  metrics: Array<'visits' | 'last_visit'>;
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
  dimensions?: Array<'date' | 'hour' | 'host' | 'path' | 'referral_source' | 'referral_type'>;
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
   * Filters for referrals report.
   */
  filters?: Array<
    Shared.PathFilter | ReferralsQueryV2.ReferralSourceFilter | ReferralsQueryV2.ReferralTypeFilter
  >;
}

export namespace ReferralsQueryV2 {
  export interface ReferralSourceFilter {
    field: 'referral_source';
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

  export interface ReferralTypeFilter {
    field: 'referral_type';
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
    value: 'internal' | 'referer' | 'utm' | 'none' | Array<'internal' | 'referer' | 'utm' | 'none'>;
  }
}

export interface ReferralCreateV1V1PostParams {
  metrics: Array<'visits' | 'last_visit'>;
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
  dimensions?: Array<'date' | 'host' | 'path' | 'referral_source'>;
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
   * Filters for referrals report.
   */
  filters?: Array<Shared.PathFilter | ReferralCreateV1V1PostParams.ReferralSourceFilter>;
}

export namespace ReferralCreateV1V1PostParams {
  export interface ReferralSourceFilter {
    field: 'referral_source';
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

export interface ReferralCreateV2V2PostParams {
  metrics: Array<'visits' | 'last_visit'>;
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
  dimensions?: Array<'date' | 'hour' | 'host' | 'path' | 'referral_source' | 'referral_type'>;
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
   * Filters for referrals report.
   */
  filters?: Array<
    | Shared.PathFilter
    | ReferralCreateV2V2PostParams.ReferralSourceFilter
    | ReferralCreateV2V2PostParams.ReferralTypeFilter
  >;
}

export namespace ReferralCreateV2V2PostParams {
  export interface ReferralSourceFilter {
    field: 'referral_source';
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

  export interface ReferralTypeFilter {
    field: 'referral_type';
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
    value: 'internal' | 'referer' | 'utm' | 'none' | Array<'internal' | 'referer' | 'utm' | 'none'>;
  }
}
export declare namespace Referrals {
  export {
    type ReferralsQuery as ReferralsQuery,
    type ReferralsQueryV2 as ReferralsQueryV2,
    type ReferralCreateV1V1PostParams as ReferralCreateV1V1PostParams,
    type ReferralCreateV2V2PostParams as ReferralCreateV2V2PostParams,
  };
}

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
   * Get bot traffic report from the daily aggregated materialized view.
   *
   * This endpoint queries pre-aggregated daily bot data, making it efficient for
   * large date ranges and high-traffic sites.
   *
   * Metrics:
   *
   * - count: unique bot visits
   * - citations: unique citation events
   * - indexing: unique indexing events
   * - training: unique training events
   * - last_visit: most recent visit timestamp
   *
   * @example
   * ```ts
   * const reportResponse = await client.reports.getBotsReport({
   *   domain: 'domain',
   *   metrics: ['count'],
   *   start_date: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  getBotsReport(body: ReportGetBotsReportParams, options?: RequestOptions): APIPromise<ReportResponse> {
    return this._client.post('/v1/reports/bots', { body, ...options });
  }

  /**
   * Get bot traffic report from the hourly aggregated materialized view (UTC-based).
   *
   * Supports date_interval="hour", calendar intervals through "year", "quarter", and
   * "relative_week".
   *
   * Metrics:
   *
   * - count: unique bot visits
   * - citations: unique citation events (ai_assistant bot type)
   * - indexing: unique indexing events (index bot type)
   * - training: unique training events (ai_training bot type)
   * - last_visit: most recent visit timestamp
   *
   * Dimensions:
   *
   * - date, path, bot_name, bot_provider, bot_type
   *
   * @example
   * ```ts
   * const reportResponse = await client.reports.getBotsReportV2(
   *   {
   *     domain: 'domain',
   *     metrics: ['count'],
   *     start_date: '2019-12-27T18:11:19.117Z',
   *   },
   * );
   * ```
   */
  getBotsReportV2(body: ReportGetBotsReportV2Params, options?: RequestOptions): APIPromise<ReportResponse> {
    return this._client.post('/v2/reports/bots', { body, ...options });
  }

  /**
   * Get referral traffic report from the daily aggregated materialized view.
   *
   * This endpoint queries pre-aggregated daily referral data, making it efficient
   * for large date ranges and high-traffic sites.
   *
   * @example
   * ```ts
   * const reportResponse =
   *   await client.reports.getReferralsReport({
   *     domain: 'domain',
   *     metrics: ['visits'],
   *     start_date: '2019-12-27T18:11:19.117Z',
   *   });
   * ```
   */
  getReferralsReport(
    body: ReportGetReferralsReportParams,
    options?: RequestOptions,
  ): APIPromise<ReportResponse> {
    return this._client.post('/v1/reports/referrals', { body, ...options });
  }

  /**
   * Get referral traffic report from the hourly aggregated materialized view
   * (UTC-based).
   *
   * Supports date_interval="hour", calendar intervals through "year", "quarter", and
   * "relative_week".
   *
   * @example
   * ```ts
   * const reportResponse =
   *   await client.reports.getReferralsReportV2({
   *     domain: 'domain',
   *     metrics: ['visits'],
   *     start_date: '2019-12-27T18:11:19.117Z',
   *   });
   * ```
   */
  getReferralsReportV2(
    body: ReportGetReferralsReportV2Params,
    options?: RequestOptions,
  ): APIPromise<ReportResponse> {
    return this._client.post('/v2/reports/referrals', { body, ...options });
  }

  /**
   * Query Fanouts
   *
   * @example
   * ```ts
   * const reportResponse = await client.reports.queryFanouts({
   *   category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   end_date: '2019-12-27T18:11:19.117Z',
   *   metrics: ['fanouts_per_execution'],
   *   start_date: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  queryFanouts(body: ReportQueryFanoutsParams, options?: RequestOptions): APIPromise<ReportResponse> {
    return this._client.post('/v1/reports/query-fanouts', { body, ...options });
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
 * Filter by prompt UUID.
 */
export interface PromptIDFilter {
  field: 'prompt_id';

  operator: 'is' | 'not_is' | 'in' | 'not_in';

  value: string | Array<string>;
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

/**
 * Filter by tag name.
 */
export interface TagNameFilter {
  field: 'tag_name';

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
 * Filter by topic name
 */
export interface TopicNameFilter {
  field: 'topic_name';

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

  /**
   * Metrics to include. `share_of_voice` is deprecated, use `citation_share`
   * instead.
   */
  metrics: Array<'count' | 'citation_share' | 'share_of_voice'>;

  /**
   * Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or
   * full ISO timestamp.
   */
  start_date: string;

  /**
   * Date interval for the report. (only used with date dimension)
   */
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';

  /**
   * Dimensions to group the report by.
   */
  dimensions?: Array<
    | 'hostname'
    | 'path'
    | 'date'
    | 'region'
    | 'topic'
    | 'topic_id'
    | 'model'
    | 'tag'
    | 'prompt'
    | 'prompt_id'
    | 'url'
    | 'root_domain'
    | 'persona'
    | 'citation_category'
  >;

  /**
   * List of filters to apply to the citations report.
   */
  filters?: Array<
    | ReportCitationsParams.HostnameFilter
    | Shared.PathFilter
    | Shared.RegionIDFilter
    | ReportCitationsParams.RegionNameFilter
    | Shared.TopicIDFilter
    | TopicNameFilter
    | Shared.ModelIDFilter
    | Shared.TagIDFilter
    | TagNameFilter
    | ReportCitationsParams.URLFilter
    | ReportCitationsParams.RootDomainFilter
    | Shared.PromptTypeFilter
    | Shared.PersonaIDFilter
    | ReportCitationsParams.CitationCategoryFilter
    | Shared.PromptFilter
    | PromptIDFilter
  >;

  /**
   * Custom ordering of the report results.
   *
   *     The order is a record of key-value pairs where:
   *     - `key` is the field to order by, which can be a metric and/or `date`, `hostname`, `path` dimensions
   *     - `value` is the direction of the order, either `asc` for ascending or `desc` for descending.
   *
   *     When not specified, the default order is the first metric in the query descending.
   */
  order_by?: { [key: string]: 'asc' | 'desc' };

  /**
   * Pagination settings for the report results.
   */
  pagination?: Shared.Pagination;
}

export namespace ReportCitationsParams {
  /**
   * Filter by hostname
   */
  export interface HostnameFilter {
    field: 'hostname';

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
   * Filter by region name.
   */
  export interface RegionNameFilter {
    field: 'region_name';

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
   * Filter by URL
   */
  export interface URLFilter {
    field: 'url';

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
   * Filter by root domain
   */
  export interface RootDomainFilter {
    field: 'root_domain';

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
   * Filter by citation category
   */
  export interface CitationCategoryFilter {
    field: 'citation_category';

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

export interface ReportGetBotsReportParams {
  /**
   * Domain to query logs for.
   */
  domain: string;

  metrics: Array<'count' | 'citations' | 'indexing' | 'training' | 'last_visit'>;

  /**
   * Start date for logs. Accepts: YYYY-MM-DD, YYYY-MM-DD HH:MM, YYYY-MM-DD HH:MM:SS,
   * or full ISO timestamp.
   */
  start_date: string;

  /**
   * Date interval for the report. (only used with date dimension)
   */
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week';

  /**
   * Dimensions to group the report by.
   */
  dimensions?: Array<'date' | 'path' | 'bot_name' | 'bot_provider'>;

  /**
   * End date for logs. Accepts same formats as start_date. Defaults to now if
   * omitted.
   */
  end_date?: string;

  /**
   * Filters for bots report.
   */
  filters?: Array<Shared.PathFilter | Shared.BotNameFilter | Shared.BotProviderFilter>;

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

  organization_id?: string | null;

  /**
   * Pagination settings for the report results.
   */
  pagination?: Shared.Pagination;
}

export interface ReportGetBotsReportV2Params {
  /**
   * Domain to query logs for.
   */
  domain: string;

  metrics: Array<'count' | 'citations' | 'indexing' | 'training' | 'last_visit'>;

  /**
   * Start date for logs. Accepts: YYYY-MM-DD, YYYY-MM-DD HH:MM, YYYY-MM-DD HH:MM:SS,
   * or full ISO timestamp.
   */
  start_date: string;

  /**
   * Date interval for the report. (only used with date dimension)
   */
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';

  /**
   * Dimensions to group the report by.
   */
  dimensions?: Array<'date' | 'hour' | 'path' | 'bot_name' | 'bot_provider' | 'bot_type'>;

  /**
   * End date in UTC. Accepts same formats as start_date. Defaults to now UTC if
   * omitted.
   */
  end_date?: string;

  /**
   * Filters for bots report.
   */
  filters?: Array<
    | Shared.PathFilter
    | Shared.BotNameFilter
    | Shared.BotProviderFilter
    | ReportGetBotsReportV2Params.BotTypeFilter
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

  organization_id?: string | null;

  /**
   * Pagination settings for the report results.
   */
  pagination?: Shared.Pagination;
}

export namespace ReportGetBotsReportV2Params {
  /**
   * Filter by bot_type column (v2 hourly table only)
   */
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

export interface ReportGetReferralsReportParams {
  /**
   * Domain to query logs for.
   */
  domain: string;

  metrics: Array<'visits' | 'last_visit'>;

  /**
   * Start date for logs. Accepts: YYYY-MM-DD, YYYY-MM-DD HH:MM, YYYY-MM-DD HH:MM:SS,
   * or full ISO timestamp.
   */
  start_date: string;

  /**
   * Date interval for the report. (only used with date dimension)
   */
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week';

  /**
   * Dimensions to group the report by.
   */
  dimensions?: Array<'date' | 'path' | 'referral_source'>;

  /**
   * End date for logs. Accepts same formats as start_date. Defaults to now if
   * omitted.
   */
  end_date?: string;

  /**
   * Filters for referrals report.
   */
  filters?: Array<Shared.PathFilter | ReportGetReferralsReportParams.ReferralSourceFilter>;

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

  organization_id?: string | null;

  /**
   * Pagination settings for the report results.
   */
  pagination?: Shared.Pagination;
}

export namespace ReportGetReferralsReportParams {
  /**
   * Filter by referral source
   */
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

    value:
      | 'openai'
      | 'none'
      | 'anthropic'
      | 'deepseek'
      | 'perplexity'
      | 'you'
      | 'grok'
      | 'microsoft'
      | 'gemini'
      | 'internal'
      | 'other'
      | Array<
          | 'openai'
          | 'none'
          | 'anthropic'
          | 'deepseek'
          | 'perplexity'
          | 'you'
          | 'grok'
          | 'microsoft'
          | 'gemini'
          | 'internal'
          | 'other'
        >;
  }
}

export interface ReportGetReferralsReportV2Params {
  /**
   * Domain to query logs for.
   */
  domain: string;

  metrics: Array<'visits' | 'last_visit'>;

  /**
   * Start date for logs. Accepts: YYYY-MM-DD, YYYY-MM-DD HH:MM, YYYY-MM-DD HH:MM:SS,
   * or full ISO timestamp.
   */
  start_date: string;

  /**
   * Date interval for the report. (only used with date dimension)
   */
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';

  /**
   * Dimensions to group the report by.
   */
  dimensions?: Array<'date' | 'hour' | 'path' | 'referral_source' | 'referral_type'>;

  /**
   * End date in UTC. Accepts same formats as start_date. Defaults to now UTC if
   * omitted.
   */
  end_date?: string;

  /**
   * Filters for referrals report.
   */
  filters?: Array<
    | Shared.PathFilter
    | ReportGetReferralsReportV2Params.ReferralSourceFilter
    | ReportGetReferralsReportV2Params.ReferralTypeFilter
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

  organization_id?: string | null;

  /**
   * Pagination settings for the report results.
   */
  pagination?: Shared.Pagination;
}

export namespace ReportGetReferralsReportV2Params {
  /**
   * Filter by referral source
   */
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

    value:
      | 'openai'
      | 'none'
      | 'anthropic'
      | 'deepseek'
      | 'perplexity'
      | 'you'
      | 'grok'
      | 'microsoft'
      | 'gemini'
      | 'internal'
      | 'other'
      | Array<
          | 'openai'
          | 'none'
          | 'anthropic'
          | 'deepseek'
          | 'perplexity'
          | 'you'
          | 'grok'
          | 'microsoft'
          | 'gemini'
          | 'internal'
          | 'other'
        >;
  }

  /**
   * Filter by referral type
   */
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

export interface ReportQueryFanoutsParams {
  category_id: string;

  /**
   * End date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   */
  end_date: string;

  metrics: Array<'fanouts_per_execution' | 'total_fanouts' | 'share'>;

  /**
   * Start date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   */
  start_date: string;

  /**
   * Date interval for the report. (only used with date dimension)
   */
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';

  /**
   * Dimensions to group the report by.
   */
  dimensions?: Array<'prompt' | 'query' | 'model' | 'region' | 'date'>;

  /**
   * Filters to apply to the query fanout report.
   */
  filters?: Array<
    | Shared.RegionIDFilter
    | ReportQueryFanoutsParams.RegionNameFilter
    | Shared.ModelIDFilter
    | Shared.TopicIDFilter
    | Shared.TagIDFilter
    | PromptIDFilter
    | Shared.PersonaIDFilter
    | Shared.PromptTypeFilter
  >;

  /**
   * Custom ordering. Keys must be a requested metric or the `date` dimension. Values
   * are `asc` or `desc`. Defaults to first metric descending.
   */
  order_by?: { [key: string]: 'asc' | 'desc' };

  /**
   * Pagination settings for the report results.
   */
  pagination?: Shared.Pagination;
}

export namespace ReportQueryFanoutsParams {
  /**
   * Filter by region name.
   */
  export interface RegionNameFilter {
    field: 'region_name';

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

export interface ReportSentimentParams {
  category_id: string;

  /**
   * End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full
   * ISO timestamp.
   */
  end_date: string;

  metrics: Array<'positive' | 'negative' | 'occurrences'>;

  /**
   * Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or
   * full ISO timestamp.
   */
  start_date: string;

  /**
   * Date interval for the report. (only used with date dimension)
   */
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';

  /**
   * Dimensions to group the report by.
   */
  dimensions?: Array<
    | 'theme'
    | 'date'
    | 'region'
    | 'topic'
    | 'topic_id'
    | 'model'
    | 'asset_id'
    | 'asset_name'
    | 'tag'
    | 'prompt'
    | 'prompt_id'
    | 'sentiment_type'
    | 'persona'
  >;

  /**
   * List of filters to apply to the sentiment report.
   */
  filters?: Array<
    | ReportSentimentParams.AssetIDFilter
    | Shared.AssetNameFilter
    | ReportSentimentParams.ThemeFilter
    | Shared.RegionIDFilter
    | ReportSentimentParams.RegionNameFilter
    | Shared.TopicIDFilter
    | TopicNameFilter
    | Shared.ModelIDFilter
    | Shared.TagIDFilter
    | TagNameFilter
    | Shared.PromptFilter
    | Shared.PersonaIDFilter
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

export namespace ReportSentimentParams {
  export interface AssetIDFilter {
    field: 'asset_id';

    operator: 'is' | 'not_is' | 'in' | 'not_in';

    value: string | Array<string>;
  }

  /**
   * Filter by theme
   */
  export interface ThemeFilter {
    field: 'theme';

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
   * Filter by region name.
   */
  export interface RegionNameFilter {
    field: 'region_name';

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

export interface ReportVisibilityParams {
  category_id: string;

  /**
   * End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full
   * ISO timestamp.
   */
  end_date: string;

  metrics: Array<
    'share_of_voice' | 'mentions_count' | 'visibility_score' | 'executions' | 'average_position'
  >;

  /**
   * Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or
   * full ISO timestamp.
   */
  start_date: string;

  /**
   * Date interval for the report. (only used with date dimension)
   */
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';

  /**
   * Dimensions to group the report by.
   */
  dimensions?: Array<
    | 'date'
    | 'region'
    | 'topic'
    | 'topic_id'
    | 'model'
    | 'asset_id'
    | 'asset_name'
    | 'prompt'
    | 'prompt_id'
    | 'tag'
    | 'persona'
  >;

  /**
   * List of filters to apply to the visibility report.
   */
  filters?: Array<
    | Shared.RegionIDFilter
    | ReportVisibilityParams.RegionNameFilter
    | Shared.ModelIDFilter
    | Shared.TopicIDFilter
    | TopicNameFilter
    | Shared.AssetNameFilter
    | Shared.TagIDFilter
    | TagNameFilter
    | PromptIDFilter
    | Shared.PromptFilter
    | Shared.PersonaIDFilter
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

export namespace ReportVisibilityParams {
  /**
   * Filter by region name.
   */
  export interface RegionNameFilter {
    field: 'region_name';

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

export declare namespace Reports {
  export {
    type PromptIDFilter as PromptIDFilter,
    type ReportInfo as ReportInfo,
    type ReportResponse as ReportResponse,
    type ReportResult as ReportResult,
    type TagNameFilter as TagNameFilter,
    type TopicNameFilter as TopicNameFilter,
    type ReportCitationsResponse as ReportCitationsResponse,
    type ReportCitationsParams as ReportCitationsParams,
    type ReportGetBotsReportParams as ReportGetBotsReportParams,
    type ReportGetBotsReportV2Params as ReportGetBotsReportV2Params,
    type ReportGetReferralsReportParams as ReportGetReferralsReportParams,
    type ReportGetReferralsReportV2Params as ReportGetReferralsReportV2Params,
    type ReportQueryFanoutsParams as ReportQueryFanoutsParams,
    type ReportSentimentParams as ReportSentimentParams,
    type ReportVisibilityParams as ReportVisibilityParams,
  };
}

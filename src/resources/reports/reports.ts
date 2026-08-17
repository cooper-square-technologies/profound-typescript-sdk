// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { Stream } from '../../core/streaming';
import type { RequestOptions } from '../../internal/request-options';
import { buildHeaders } from '../../internal/headers';
import type * as Shared from '../shared';
import * as WebSearchResultsAPI from './web-search-results';
import {
  WebSearchResults,
  type WebSearchResultQueryResponse,
  type WebSearchResultStreamResponse,
  type WebSearchResultQueryParams,
  type WebSearchResultStreamParams,
} from './web-search-results';
import * as ShoppingAPI from './shopping';
import {
  Shopping,
  type BrandNameFilter,
  type MerchantNameFilter,
  type ProductNameFilter,
  type ShoppingVisibilityResponse,
  type ShoppingItemVisibilityResponse,
  type ShoppingMerchantDistributionResponse,
  type ShoppingMerchantVisibilityByBrandResponse,
  type ShoppingMerchantByItemsResponse,
  type ShoppingAllItemsWithMerchantsResponse,
  type ShoppingTriggerRateResponse,
  type ShoppingMerchantShareResponse,
  type ShoppingProductMerchantURLsResponse,
  type ShoppingExecutionsResponse,
  type ShoppingVisibilityParams,
  type ShoppingItemVisibilityParams,
  type ShoppingMerchantDistributionParams,
  type ShoppingMerchantVisibilityByBrandParams,
  type ShoppingMerchantByItemsParams,
  type ShoppingAllItemsWithMerchantsParams,
  type ShoppingTriggerRateParams,
  type ShoppingMerchantShareParams,
  type ShoppingProductMerchantURLsParams,
  type ShoppingExecutionsParams,
} from './shopping';

export class Reports extends APIResource {
  webSearchResults: WebSearchResultsAPI.WebSearchResults = new WebSearchResultsAPI.WebSearchResults(
    this._client,
  );
  shopping: ShoppingAPI.Shopping = new ShoppingAPI.Shopping(this._client);

  /**
   * Get citations for a given category.
   *
   * The ``mentioned`` filter supports ``is true`` and ``is false``. It uses the
   * latest page analysis available at or before ``end_date``; pages without an
   * analysis by then are excluded from both values. ``citation_share`` keeps all
   * otherwise eligible citations in its denominator when this filter is used.
   *
   * @param {ReportCitationsParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ReportCitationsResponse>} Successful Response
   *
   * @example
   * ```ts
   * const citations = await client.reports.citations({
   *   date_interval: 'day',
   *   dimensions: [],
   *   metrics: [],
   *   order_by: {},
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '2024-01-01T00:00:00.000Z',
   *   end_date: '2024-01-01T00:00:00.000Z',
   * });
   * ```
   */
  citations(body: ReportCitationsParams, options?: RequestOptions): APIPromise<ReportCitationsResponse> {
    return this._client.post('/v1/reports/citations', { body, ...options });
  }

  /**
   * Query visibility report.
   *
   * @param {ReportVisibilityParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ReportResponse>} Successful Response
   *
   * @example
   * ```ts
   * const report = await client.reports.visibility({
   *   date_interval: 'day',
   *   dimensions: [],
   *   metrics: [],
   *   order_by: {},
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '2024-01-01T00:00:00.000Z',
   *   end_date: '2024-01-01T00:00:00.000Z',
   * });
   * ```
   */
  visibility(body: ReportVisibilityParams, options?: RequestOptions): APIPromise<ReportResponse> {
    return this._client.post('/v1/reports/visibility', { body, ...options });
  }

  /**
   * Get citations for a given category.
   *
   * @param {ReportSentimentParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ReportResponse>} Successful Response
   *
   * @example
   * ```ts
   * const report = await client.reports.sentiment({
   *   date_interval: 'day',
   *   dimensions: [],
   *   metrics: [],
   *   order_by: {},
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '2024-01-01T00:00:00.000Z',
   *   end_date: '2024-01-01T00:00:00.000Z',
   * });
   * ```
   */
  sentiment(body: ReportSentimentParams, options?: RequestOptions): APIPromise<ReportResponse> {
    return this._client.post('/v1/reports/sentiment', { body, ...options });
  }

  /**
   * Get referral traffic report from the daily aggregated materialized view.
   *
   * This endpoint queries pre-aggregated daily referral data, making it efficient
   * for large date ranges and high-traffic sites.
   *
   * @param {ReportGetReferralsReportParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ReportResponse>} Successful Response
   *
   * @example
   * ```ts
   * const report = await client.reports.getReferralsReport({
   *   date_interval: 'day',
   *   dimensions: [],
   *   metrics: [],
   *   order_by: {},
   *   domain: '',
   *   start_date: '2024-01-01T00:00:00.000Z',
   * });
   * ```
   */
  getReferralsReport(
    body: ReportGetReferralsReportParams,
    options?: RequestOptions,
  ): APIPromise<ReportResponse> {
    return this._client.post('/v1/reports/referrals', { body, ...options });
  }

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
   * @param {ReportGetBotsReportParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ReportResponse>} Successful Response
   *
   * @example
   * ```ts
   * const report = await client.reports.getBotsReport({
   *   date_interval: 'day',
   *   dimensions: [],
   *   metrics: [],
   *   order_by: {},
   *   domain: '',
   *   start_date: '2024-01-01T00:00:00.000Z',
   * });
   * ```
   */
  getBotsReport(body: ReportGetBotsReportParams, options?: RequestOptions): APIPromise<ReportResponse> {
    return this._client.post('/v1/reports/bots', { body, ...options });
  }

  /**
   * Get referral traffic report from the hourly aggregated materialized view (UTC-based).
   *
   * Supports date_interval="hour", calendar intervals through "year", "quarter", and "relative_week".
   *
   * @param {ReportGetReferralsReportV2Params} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ReportResponse>} Successful Response
   *
   * @example
   * ```ts
   * const report = await client.reports.getReferralsReportV2({
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
  getReferralsReportV2(
    body: ReportGetReferralsReportV2Params,
    options?: RequestOptions,
  ): APIPromise<ReportResponse> {
    return this._client.post('/v2/reports/referrals', { body, ...options });
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
   * @param {ReportGetBotsReportV2Params} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ReportResponse>} Successful Response
   *
   * @example
   * ```ts
   * const report = await client.reports.getBotsReportV2({
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
  getBotsReportV2(body: ReportGetBotsReportV2Params, options?: RequestOptions): APIPromise<ReportResponse> {
    return this._client.post('/v2/reports/bots', { body, ...options });
  }

  /**
   * Query Fanouts
   *
   * @param {ReportQueryFanoutsParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ReportResponse>} Successful Response
   *
   * @example
   * ```ts
   * const report = await client.reports.queryFanouts({
   *   date_interval: 'day',
   *   dimensions: [],
   *   metrics: [],
   *   order_by: {},
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '2024-01-01T00:00:00.000Z',
   *   end_date: '2024-01-01T00:00:00.000Z',
   * });
   * ```
   */
  queryFanouts(body: ReportQueryFanoutsParams, options?: RequestOptions): APIPromise<ReportResponse> {
    return this._client.post('/v1/reports/query-fanouts', { body, ...options });
  }

  /**
   * Stream citations with the same filter semantics as the non-streaming route.
   *
   * @param {ReportStreamCitationsParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Stream<ReportStreamCitationsResponse>>} Server-sent events stream. Emits a `summary` event first, then one `row` event per streamed row.
   *
   * @example
   * ```ts
   * const stream = await client.reports.streamCitations({
   *   date_interval: 'day',
   *   dimensions: [],
   *   metrics: [],
   *   order_by: {},
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '2024-01-01T00:00:00.000Z',
   *   end_date: '2024-01-01T00:00:00.000Z',
   * });
   *
   * for await (const event of stream) {
   *   console.log(event);
   * }
   * ```
   */
  streamCitations(
    body: ReportStreamCitationsParams,
    options?: RequestOptions,
  ): APIPromise<Stream<ReportStreamCitationsResponse>> {
    return this._client.post('/v1/reports/citations/stream', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    });
  }

  /**
   * Stream Visibility
   *
   * @param {ReportStreamVisibilityParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Stream<ReportStreamVisibilityResponse>>} Server-sent events stream. Emits a `summary` event first, then one `row` event per streamed row.
   *
   * @example
   * ```ts
   * const stream = await client.reports.streamVisibility({
   *   date_interval: 'day',
   *   dimensions: [],
   *   metrics: [],
   *   order_by: {},
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '2024-01-01T00:00:00.000Z',
   *   end_date: '2024-01-01T00:00:00.000Z',
   * });
   *
   * for await (const event of stream) {
   *   console.log(event);
   * }
   * ```
   */
  streamVisibility(
    body: ReportStreamVisibilityParams,
    options?: RequestOptions,
  ): APIPromise<Stream<ReportStreamVisibilityResponse>> {
    return this._client.post('/v1/reports/visibility/stream', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    });
  }

  /**
   * Stream Sentiment
   *
   * @param {ReportStreamSentimentParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Stream<ReportStreamSentimentResponse>>} Server-sent events stream. Emits a `summary` event first, then one `row` event per streamed row.
   *
   * @example
   * ```ts
   * const stream = await client.reports.streamSentiment({
   *   date_interval: 'day',
   *   dimensions: [],
   *   metrics: [],
   *   order_by: {},
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '2024-01-01T00:00:00.000Z',
   *   end_date: '2024-01-01T00:00:00.000Z',
   * });
   *
   * for await (const event of stream) {
   *   console.log(event);
   * }
   * ```
   */
  streamSentiment(
    body: ReportStreamSentimentParams,
    options?: RequestOptions,
  ): APIPromise<Stream<ReportStreamSentimentResponse>> {
    return this._client.post('/v1/reports/sentiment/stream', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    });
  }
}

/**
 * Base model for report information.
 */
export interface ReportInfo {
  total_rows: number;
  query?: Record<string, unknown> | null;
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
 * Base model for report results.
 */
export interface ReportResult {
  metrics: Array<number | string>;
  dimensions: Array<string>;
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

/**
 * Filter by prompt UUID.
 */
export interface PromptIDFilter {
  field: 'prompt_id';
  operator: 'is' | 'not_is' | 'in' | 'not_in';
  value: string | Array<string>;
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

export interface ReportCitationsParams {
  /**
   * Metrics to include. `share_of_voice` is deprecated, use `citation_share` instead.
   */
  metrics: Array<'count' | 'citation_share' | 'share_of_voice' | 'first_cited_at'>;
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.
   * @format date-time
   */
  start_date: string;
  /**
   * End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.
   * @format date-time
   */
  end_date: string;
  /**
   * Date interval for the report. (only used with date dimension)
   * @default day
   */
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';
  /**
   * Dimensions to group the report by.
   * @default []
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
   *
   *     Custom ordering of the report results.
   *
   *     The order is a record of key-value pairs where:
   *     - `key` is the field to order by, which can be a metric or dimension
   *     - `value` is the direction of the order, either `asc` for ascending or `desc` for descending.
   *
   *     When not specified, the default order is the first metric in the query descending.
   *
   * @default {}
   */
  order_by?: Record<string, 'asc' | 'desc'>;
  /**
   * Pagination settings for the report results.
   */
  pagination?: Shared.Pagination;
  /**
   * List of filters to apply to the citations report.
   */
  filters?: Array<
    | HostnameFilter
    | Shared.PathFilter
    | Shared.RegionIDFilter
    | Shared.RegionNameFilter
    | Shared.TopicIDFilter
    | TopicNameFilter
    | Shared.ModelIDFilter
    | Shared.TagIDFilter
    | TagNameFilter
    | URLFilter
    | RootDomainFilter
    | Shared.AnalysisTypeFilter
    | Shared.PromptTypeFilter
    | Shared.PersonaIDFilter
    | ReportCitationsParams.CitationCategoryFilter
    | Shared.PromptFilter
    | PromptIDFilter
    | ReportCitationsParams.MentionedFilter
  >;
}

export namespace ReportCitationsParams {
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

  export interface MentionedFilter {
    field: 'mentioned';
    operator: 'is';
    value: boolean | Array<boolean>;
  }
}

export interface ReportCitationsResponse {
  /**
   * Base model for report information.
   */
  info: ReportInfo;
  data: Array<ReportCitationsResponse.Data>;
}

export namespace ReportCitationsResponse {
  export interface Data {
    metrics: Array<number | string | null>;
    dimensions: Array<string>;
  }
}

export interface ReportVisibilityParams {
  metrics: Array<
    'share_of_voice' | 'mentions_count' | 'visibility_score' | 'executions' | 'average_position'
  >;
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.
   * @format date-time
   */
  start_date: string;
  /**
   * End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.
   * @format date-time
   */
  end_date: string;
  /**
   * Date interval for the report. (only used with date dimension)
   * @default day
   */
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';
  /**
   * Dimensions to group the report by.
   * @default []
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
   * List of filters to apply to the visibility report.
   */
  filters?: Array<
    | Shared.RegionIDFilter
    | Shared.RegionNameFilter
    | Shared.ModelIDFilter
    | Shared.TopicIDFilter
    | TopicNameFilter
    | ReportVisibilityParams.ProfoundAnswerEngineInsightsFiltersAssetNameFilter
    | Shared.TagIDFilter
    | TagNameFilter
    | PromptIDFilter
    | Shared.PromptFilter
    | Shared.PersonaIDFilter
  >;
}

export namespace ReportVisibilityParams {
  export interface ProfoundAnswerEngineInsightsFiltersAssetNameFilter {
    field: 'asset_name';
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
  metrics: Array<'positive' | 'negative' | 'occurrences'>;
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.
   * @format date-time
   */
  start_date: string;
  /**
   * End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.
   * @format date-time
   */
  end_date: string;
  /**
   * Date interval for the report. (only used with date dimension)
   * @default day
   */
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';
  /**
   * Dimensions to group the report by.
   * @default []
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
   * List of filters to apply to the sentiment report.
   */
  filters?: Array<
    | Shared.AssetIDFilter
    | ReportSentimentParams.ProfoundAnswerEngineInsightsFiltersAssetNameFilter
    | ReportSentimentParams.ThemeFilter
    | Shared.RegionIDFilter
    | Shared.RegionNameFilter
    | Shared.TopicIDFilter
    | TopicNameFilter
    | Shared.ModelIDFilter
    | Shared.TagIDFilter
    | TagNameFilter
    | Shared.PromptFilter
    | Shared.PersonaIDFilter
  >;
}

export namespace ReportSentimentParams {
  export interface ProfoundAnswerEngineInsightsFiltersAssetNameFilter {
    field: 'asset_name';
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
}

export interface ReportGetReferralsReportParams {
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
  metric_filters?: Array<ReportGetReferralsReportParams.MetricFilter>;
  /**
   * Filters for referrals report.
   */
  filters?: Array<Shared.PathFilter | ReportGetReferralsReportParams.ReferralSourceFilter>;
}

export namespace ReportGetReferralsReportParams {
  export interface MetricFilter {
    field: string;
    operator: '>' | '>=' | '<' | '<=' | '=' | '==' | '!=';
    value: number;
  }

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

export interface ReportGetBotsReportParams {
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
  metric_filters?: Array<ReportGetBotsReportParams.MetricFilter>;
  /**
   * Filters for bots report.
   */
  filters?: Array<Shared.PathFilter | Shared.BotNameFilter | Shared.BotProviderFilter>;
}

export namespace ReportGetBotsReportParams {
  export interface MetricFilter {
    field: string;
    operator: '>' | '>=' | '<' | '<=' | '=' | '==' | '!=';
    value: number;
  }
}

export interface ReportGetReferralsReportV2Params {
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
  metric_filters?: Array<ReportGetReferralsReportV2Params.MetricFilter>;
  /**
   * Filters for referrals report.
   */
  filters?: Array<
    | Shared.PathFilter
    | ReportGetReferralsReportV2Params.ReferralSourceFilter
    | ReportGetReferralsReportV2Params.ReferralTypeFilter
  >;
}

export namespace ReportGetReferralsReportV2Params {
  export interface MetricFilter {
    field: string;
    operator: '>' | '>=' | '<' | '<=' | '=' | '==' | '!=';
    value: number;
  }

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

export interface ReportGetBotsReportV2Params {
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
  metric_filters?: Array<ReportGetBotsReportV2Params.MetricFilter>;
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
   * Domain UUID used for tag lookups.
   * @format uuid
   */
  domain_id?: string | null;
  tags?: Array<string>;
}

export namespace ReportGetBotsReportV2Params {
  export interface MetricFilter {
    field: string;
    operator: '>' | '>=' | '<' | '<=' | '=' | '==' | '!=';
    value: number;
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

export interface ReportQueryFanoutsParams {
  /**
   * Metrics to return for each row.
   * @minItems 1
   */
  metrics: Array<'fanouts_per_execution' | 'total_fanouts' | 'share' | 'query_variations'>;
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * Start date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   * @format date-time
   */
  start_date: string;
  /**
   * End date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   * @format date-time
   */
  end_date: string;
  /**
   * Date interval for the report. (only used with date dimension)
   * @default day
   */
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';
  /**
   * Dimensions to group the report by.
   * @default []
   */
  dimensions?: Array<'prompt' | 'query' | 'model' | 'region' | 'date'>;
  /**
   * Custom ordering. Keys must be a requested metric or the ``date`` dimension. Values are ``asc`` or ``desc``. Defaults to first metric descending.
   * @default {}
   */
  order_by?: Record<string, 'asc' | 'desc'>;
  /**
   * Pagination settings for the report results.
   */
  pagination?: Shared.Pagination;
  /**
   * Filters to apply to the query fanout report.
   */
  filters?: Array<
    | Shared.RegionIDFilter
    | Shared.RegionNameFilter
    | Shared.ModelIDFilter
    | Shared.TopicIDFilter
    | Shared.TagIDFilter
    | PromptIDFilter
    | Shared.PersonaIDFilter
    | Shared.AnalysisTypeFilter
    | Shared.PromptTypeFilter
  >;
}

export interface ReportStreamCitationsParams {
  /**
   * Metrics to include. `share_of_voice` is deprecated, use `citation_share` instead.
   */
  metrics: Array<'count' | 'citation_share' | 'share_of_voice' | 'first_cited_at'>;
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.
   * @format date-time
   */
  start_date: string;
  /**
   * End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.
   * @format date-time
   */
  end_date: string;
  /**
   * Date interval for the report. (only used with date dimension)
   * @default day
   */
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';
  /**
   * Dimensions to group the report by.
   * @default []
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
   *
   *     Custom ordering of the report results.
   *
   *     The order is a record of key-value pairs where:
   *     - `key` is the field to order by, which can be a metric or dimension
   *     - `value` is the direction of the order, either `asc` for ascending or `desc` for descending.
   *
   *     When not specified, the default order is the first metric in the query descending.
   *
   * @default {}
   */
  order_by?: Record<string, 'asc' | 'desc'>;
  pagination?: Shared.Pagination | null;
  /**
   * List of filters to apply to the citations report.
   */
  filters?: Array<
    | HostnameFilter
    | Shared.PathFilter
    | Shared.RegionIDFilter
    | Shared.RegionNameFilter
    | Shared.TopicIDFilter
    | TopicNameFilter
    | Shared.ModelIDFilter
    | Shared.TagIDFilter
    | TagNameFilter
    | URLFilter
    | RootDomainFilter
    | Shared.AnalysisTypeFilter
    | Shared.PromptTypeFilter
    | Shared.PersonaIDFilter
    | ReportStreamCitationsParams.CitationCategoryFilter
    | Shared.PromptFilter
    | PromptIDFilter
    | ReportStreamCitationsParams.MentionedFilter
  >;
}

export namespace ReportStreamCitationsParams {
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

  export interface MentionedFilter {
    field: 'mentioned';
    operator: 'is';
    value: boolean | Array<boolean>;
  }
}

export type ReportStreamCitationsResponse =
  | ReportStreamCitationsResponse.SseSummaryEventData
  | Record<string, unknown>;

export namespace ReportStreamCitationsResponse {
  export interface SseSummaryEventData {
    /**
     * The normalized query used to build the stream.
     */
    query: Record<string, unknown>;
    /**
     * Total number of rows available before pagination is applied.
     */
    total_rows: number;
  }
}

export interface ReportStreamVisibilityParams {
  metrics: Array<
    'share_of_voice' | 'mentions_count' | 'visibility_score' | 'executions' | 'average_position'
  >;
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.
   * @format date-time
   */
  start_date: string;
  /**
   * End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.
   * @format date-time
   */
  end_date: string;
  /**
   * Date interval for the report. (only used with date dimension)
   * @default day
   */
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';
  /**
   * Dimensions to group the report by.
   * @default []
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
  pagination?: Shared.Pagination | null;
  /**
   * List of filters to apply to the visibility report.
   */
  filters?: Array<
    | Shared.RegionIDFilter
    | Shared.RegionNameFilter
    | Shared.ModelIDFilter
    | Shared.TopicIDFilter
    | TopicNameFilter
    | ReportStreamVisibilityParams.ProfoundAnswerEngineInsightsFiltersAssetNameFilter
    | Shared.TagIDFilter
    | TagNameFilter
    | PromptIDFilter
    | Shared.PromptFilter
    | Shared.PersonaIDFilter
  >;
}

export namespace ReportStreamVisibilityParams {
  export interface ProfoundAnswerEngineInsightsFiltersAssetNameFilter {
    field: 'asset_name';
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

export type ReportStreamVisibilityResponse =
  | ReportStreamVisibilityResponse.SseSummaryEventData
  | Record<string, unknown>;

export namespace ReportStreamVisibilityResponse {
  export interface SseSummaryEventData {
    /**
     * The normalized query used to build the stream.
     */
    query: Record<string, unknown>;
    /**
     * Total number of rows available before pagination is applied.
     */
    total_rows: number;
  }
}

export interface ReportStreamSentimentParams {
  metrics: Array<'positive' | 'negative' | 'occurrences'>;
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.
   * @format date-time
   */
  start_date: string;
  /**
   * End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.
   * @format date-time
   */
  end_date: string;
  /**
   * Date interval for the report. (only used with date dimension)
   * @default day
   */
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';
  /**
   * Dimensions to group the report by.
   * @default []
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
  pagination?: Shared.Pagination | null;
  /**
   * List of filters to apply to the sentiment report.
   */
  filters?: Array<
    | Shared.AssetIDFilter
    | ReportStreamSentimentParams.ProfoundAnswerEngineInsightsFiltersAssetNameFilter
    | ReportStreamSentimentParams.ThemeFilter
    | Shared.RegionIDFilter
    | Shared.RegionNameFilter
    | Shared.TopicIDFilter
    | TopicNameFilter
    | Shared.ModelIDFilter
    | Shared.TagIDFilter
    | TagNameFilter
    | Shared.PromptFilter
    | Shared.PersonaIDFilter
  >;
}

export namespace ReportStreamSentimentParams {
  export interface ProfoundAnswerEngineInsightsFiltersAssetNameFilter {
    field: 'asset_name';
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
}

export type ReportStreamSentimentResponse =
  | ReportStreamSentimentResponse.SseSummaryEventData
  | Record<string, unknown>;

export namespace ReportStreamSentimentResponse {
  export interface SseSummaryEventData {
    /**
     * The normalized query used to build the stream.
     */
    query: Record<string, unknown>;
    /**
     * Total number of rows available before pagination is applied.
     */
    total_rows: number;
  }
}
Reports.WebSearchResults = WebSearchResults;
Reports.Shopping = Shopping;

export declare namespace Reports {
  export {
    type ReportInfo as ReportInfo,
    type ReportResponse as ReportResponse,
    type ReportResult as ReportResult,
    type TopicNameFilter as TopicNameFilter,
    type PromptIDFilter as PromptIDFilter,
    type TagNameFilter as TagNameFilter,
    type RootDomainFilter as RootDomainFilter,
    type HostnameFilter as HostnameFilter,
    type URLFilter as URLFilter,
    type ReportCitationsResponse as ReportCitationsResponse,
    type ReportStreamCitationsResponse as ReportStreamCitationsResponse,
    type ReportStreamVisibilityResponse as ReportStreamVisibilityResponse,
    type ReportStreamSentimentResponse as ReportStreamSentimentResponse,
    type ReportCitationsParams as ReportCitationsParams,
    type ReportVisibilityParams as ReportVisibilityParams,
    type ReportSentimentParams as ReportSentimentParams,
    type ReportGetReferralsReportParams as ReportGetReferralsReportParams,
    type ReportGetBotsReportParams as ReportGetBotsReportParams,
    type ReportGetReferralsReportV2Params as ReportGetReferralsReportV2Params,
    type ReportGetBotsReportV2Params as ReportGetBotsReportV2Params,
    type ReportQueryFanoutsParams as ReportQueryFanoutsParams,
    type ReportStreamCitationsParams as ReportStreamCitationsParams,
    type ReportStreamVisibilityParams as ReportStreamVisibilityParams,
    type ReportStreamSentimentParams as ReportStreamSentimentParams,
  };

  export {
    WebSearchResults as WebSearchResults,
    type WebSearchResultQueryResponse as WebSearchResultQueryResponse,
    type WebSearchResultStreamResponse as WebSearchResultStreamResponse,
    type WebSearchResultQueryParams as WebSearchResultQueryParams,
    type WebSearchResultStreamParams as WebSearchResultStreamParams,
  };

  export {
    Shopping as Shopping,
    type BrandNameFilter as BrandNameFilter,
    type MerchantNameFilter as MerchantNameFilter,
    type ProductNameFilter as ProductNameFilter,
    type ShoppingVisibilityResponse as ShoppingVisibilityResponse,
    type ShoppingItemVisibilityResponse as ShoppingItemVisibilityResponse,
    type ShoppingMerchantDistributionResponse as ShoppingMerchantDistributionResponse,
    type ShoppingMerchantVisibilityByBrandResponse as ShoppingMerchantVisibilityByBrandResponse,
    type ShoppingMerchantByItemsResponse as ShoppingMerchantByItemsResponse,
    type ShoppingAllItemsWithMerchantsResponse as ShoppingAllItemsWithMerchantsResponse,
    type ShoppingTriggerRateResponse as ShoppingTriggerRateResponse,
    type ShoppingMerchantShareResponse as ShoppingMerchantShareResponse,
    type ShoppingProductMerchantURLsResponse as ShoppingProductMerchantURLsResponse,
    type ShoppingExecutionsResponse as ShoppingExecutionsResponse,
    type ShoppingVisibilityParams as ShoppingVisibilityParams,
    type ShoppingItemVisibilityParams as ShoppingItemVisibilityParams,
    type ShoppingMerchantDistributionParams as ShoppingMerchantDistributionParams,
    type ShoppingMerchantVisibilityByBrandParams as ShoppingMerchantVisibilityByBrandParams,
    type ShoppingMerchantByItemsParams as ShoppingMerchantByItemsParams,
    type ShoppingAllItemsWithMerchantsParams as ShoppingAllItemsWithMerchantsParams,
    type ShoppingTriggerRateParams as ShoppingTriggerRateParams,
    type ShoppingMerchantShareParams as ShoppingMerchantShareParams,
    type ShoppingProductMerchantURLsParams as ShoppingProductMerchantURLsParams,
    type ShoppingExecutionsParams as ShoppingExecutionsParams,
  };
}

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
  type ShoppingBrandsResponse,
  type ShoppingStreamBrandsResponse,
  type ShoppingProductsResponse,
  type ShoppingStreamProductsResponse,
  type ShoppingMerchantsResponse,
  type ShoppingStreamMerchantsResponse,
  type ShoppingTriggerRateResponse,
  type ShoppingStreamTriggerRateResponse,
  type ShoppingBrandsParams,
  type ShoppingStreamBrandsParams,
  type ShoppingProductsParams,
  type ShoppingStreamProductsParams,
  type ShoppingMerchantsParams,
  type ShoppingStreamMerchantsParams,
  type ShoppingTriggerRateParams,
  type ShoppingStreamTriggerRateParams,
} from './shopping';
import * as AccuracyAPI from './accuracy';
import {
  Accuracy,
  type AccuracyCreateOverviewResponse,
  type AccuracyCreateBreakdownResponse,
  type AccuracyCreateCitationAnalysisResponse,
  type AccuracyCreateTopicIDsResponse,
  type AccuracyCreateInaccurateThemesResponse,
  type AccuracyCreateInaccurateClustersResponse,
  type AccuracyCreateInaccuracyDriversResponse,
  type AccuracyCreateTopInaccurateClaimsResponse,
  type AccuracyCreateClaimBreakdownResponse,
  type AccuracyCreateClaimCitationsResponse,
  type AccuracyCreateClusterExampleRunsResponse,
  type AccuracyCreateClusterVerificationPairsResponse,
  type AccuracyCreateFactcheckSetupStatusResponse,
  type AccuracyCreateOverviewParams,
  type AccuracyCreateBreakdownParams,
  type AccuracyCreateCitationAnalysisParams,
  type AccuracyCreateTopicIDsParams,
  type AccuracyCreateInaccurateThemesParams,
  type AccuracyCreateInaccurateClustersParams,
  type AccuracyCreateInaccuracyDriversParams,
  type AccuracyCreateTopInaccurateClaimsParams,
  type AccuracyCreateClaimBreakdownParams,
  type AccuracyCreateClaimCitationsParams,
  type AccuracyCreateClusterExampleRunsParams,
  type AccuracyCreateClusterVerificationPairsParams,
  type AccuracyCreateFactcheckSetupStatusParams,
} from './accuracy';
import * as FactcheckAPI from './factcheck/factcheck';
import {
  Factcheck,
  type FactcheckQueryScoresResponse,
  type FactcheckStreamScoresResponse,
  type FactcheckQueryScoresParams,
  type FactcheckStreamScoresParams,
} from './factcheck/factcheck';
import * as SocialAPI from './social/social';
import { Social } from './social/social';

export class Reports extends APIResource {
  webSearchResults: WebSearchResultsAPI.WebSearchResults = new WebSearchResultsAPI.WebSearchResults(
    this._client,
  );
  shopping: ShoppingAPI.Shopping = new ShoppingAPI.Shopping(this._client);
  accuracy: AccuracyAPI.Accuracy = new AccuracyAPI.Accuracy(this._client);
  factcheck: FactcheckAPI.Factcheck = new FactcheckAPI.Factcheck(this._client);
  social: SocialAPI.Social = new SocialAPI.Social(this._client);

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
   * const report = await client.reports.citations({
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
   * Query Sentiment V2
   *
   * @param {ReportSentimentV2Params} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ReportSentimentV2Response>} Successful Response
   *
   * @example
   * ```ts
   * const report = await client.reports.sentimentV2({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   asset_name: '',
   *   start_date: '2024-01-01T00:00:00.000Z',
   *   end_date: '2024-01-01T00:00:00.000Z',
   *   date_bucket: 'day',
   *   metrics: [],
   * });
   * ```
   */
  sentimentV2(
    body: ReportSentimentV2Params,
    options?: RequestOptions,
  ): APIPromise<ReportSentimentV2Response> {
    return this._client.post('/v1/reports/sentiment-v2', { body, ...options });
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

  /**
   * Stream Citations V2
   *
   * @param {ReportStreamCitationsV2Params} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Stream<ReportStreamCitationsV2Response>>} Server-sent events stream. Emits one `summary` event (the report `info` block) first, then one `result` event per row.
   *
   * @example
   * ```ts
   * const stream = await client.reports.streamCitationsV2({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '',
   *   end_date: '',
   *   entity: 'domain',
   *   interval: 'day',
   *   scope: 'all',
   * });
   *
   * for await (const event of stream) {
   *   console.log(event);
   * }
   * ```
   */
  streamCitationsV2(
    body: ReportStreamCitationsV2Params,
    options?: RequestOptions,
  ): APIPromise<Stream<ReportStreamCitationsV2Response>> {
    return this._client.post('/v2/reports/citations/stream', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    });
  }

  /**
   * Stream Visibility V2
   *
   * @param {ReportStreamVisibilityV2Params} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Stream<ReportStreamVisibilityV2Response>>} Server-sent events stream. Emits one `summary` event (the report `info` block) first, then one `result` event per row.
   *
   * @example
   * ```ts
   * const stream = await client.reports.streamVisibilityV2({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '',
   *   end_date: '',
   *   interval: 'day',
   *   scope: 'owned',
   * });
   *
   * for await (const event of stream) {
   *   console.log(event);
   * }
   * ```
   */
  streamVisibilityV2(
    body: ReportStreamVisibilityV2Params,
    options?: RequestOptions,
  ): APIPromise<Stream<ReportStreamVisibilityV2Response>> {
    return this._client.post('/v2/reports/visibility/stream', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    });
  }

  /**
   * Stream Sentiment V2
   *
   * @param {ReportStreamSentimentV2Params} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Stream<ReportStreamSentimentV2Response>>} Server-sent events stream. Emits one `summary` event (the report `info` block) first, then one `result` event per row.
   *
   * @example
   * ```ts
   * const stream = await client.reports.streamSentimentV2({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   asset: '',
   *   start_date: '',
   *   end_date: '',
   *   interval: 'day',
   *   include_cited_websites: false,
   * });
   *
   * for await (const event of stream) {
   *   console.log(event);
   * }
   * ```
   */
  streamSentimentV2(
    body: ReportStreamSentimentV2Params,
    options?: RequestOptions,
  ): APIPromise<Stream<ReportStreamSentimentV2Response>> {
    return this._client.post('/v2/reports/sentiment/stream', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    });
  }

  /**
   * Stream Query Fanouts V2
   *
   * @param {ReportStreamQueryFanoutsParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Stream<ReportStreamQueryFanoutsResponse>>} Server-sent events stream. Emits one `summary` event (the report `info` block) first, then one `result` event per row.
   *
   * @example
   * ```ts
   * const stream = await client.reports.streamQueryFanouts({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '',
   *   end_date: '',
   *   interval: 'day',
   * });
   *
   * for await (const event of stream) {
   *   console.log(event);
   * }
   * ```
   */
  streamQueryFanouts(
    body: ReportStreamQueryFanoutsParams,
    options?: RequestOptions,
  ): APIPromise<Stream<ReportStreamQueryFanoutsResponse>> {
    return this._client.post('/v2/reports/query-fanouts/stream', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    });
  }

  /**
   * Get referral traffic report from the hourly aggregated materialized view (UTC-based).
   *
   * Supports date_interval="hour", calendar intervals through "year", "quarter", and "relative_week".
   * When `view_id` is provided, the query is scoped to that domain segment's hosts and paths.
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
   * When `view_id` is provided, the query is scoped to that domain segment's hosts and paths.
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
   * Query Visibility V2
   *
   * @param {ReportQueryVisibilityParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ReportQueryVisibilityResponse>} Successful Response
   *
   * @example
   * ```ts
   * const report = await client.reports.queryVisibility({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '',
   *   end_date: '',
   *   interval: 'day',
   *   scope: 'owned',
   * });
   * ```
   */
  queryVisibility(
    body: ReportQueryVisibilityParams,
    options?: RequestOptions,
  ): APIPromise<ReportQueryVisibilityResponse> {
    return this._client.post('/v2/reports/visibility', { body, ...options });
  }

  /**
   * Query Citations V2
   *
   * @param {ReportQueryCitationsParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ReportQueryCitationsResponse>} Successful Response
   *
   * @example
   * ```ts
   * const report = await client.reports.queryCitations({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '',
   *   end_date: '',
   *   entity: 'domain',
   *   interval: 'day',
   *   scope: 'all',
   * });
   * ```
   */
  queryCitations(
    body: ReportQueryCitationsParams,
    options?: RequestOptions,
  ): APIPromise<ReportQueryCitationsResponse> {
    return this._client.post('/v2/reports/citations', { body, ...options });
  }

  /**
   * Query Sentiment V2
   *
   * @param {ReportQuerySentimentParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ReportQuerySentimentResponse>} Successful Response
   *
   * @example
   * ```ts
   * const report = await client.reports.querySentiment({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   asset: '',
   *   start_date: '',
   *   end_date: '',
   *   interval: 'day',
   *   include_cited_websites: false,
   * });
   * ```
   */
  querySentiment(
    body: ReportQuerySentimentParams,
    options?: RequestOptions,
  ): APIPromise<ReportQuerySentimentResponse> {
    return this._client.post('/v2/reports/sentiment', { body, ...options });
  }

  /**
   * Query Fanouts V2
   *
   * @param {ReportQueryQueryFanoutsParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ReportQueryQueryFanoutsResponse>} Successful Response
   *
   * @example
   * ```ts
   * const report = await client.reports.queryQueryFanouts({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '',
   *   end_date: '',
   *   interval: 'day',
   * });
   * ```
   */
  queryQueryFanouts(
    body: ReportQueryQueryFanoutsParams,
    options?: RequestOptions,
  ): APIPromise<ReportQueryQueryFanoutsResponse> {
    return this._client.post('/v2/reports/query-fanouts', { body, ...options });
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

export interface ReportSentimentV2Params {
  /**
   * @format uuid
   */
  category_id: string;
  asset_name: string;
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
  metrics: Array<'sentiment' | 'occurrence'>;
  /**
   * Start of the previous period for delta computation.
   * @format date-time
   */
  comparison_start_date?: string | null;
  /**
   * End of the previous period for delta computation.
   * @format date-time
   */
  comparison_end_date?: string | null;
  /**
   * Date bucket for the report. Only used when dimensions includes date.
   * @default day
   */
  date_bucket?: 'day' | 'week' | 'month';
  /**
   * Dimensions to group the report by.
   */
  dimensions?: Array<
    | 'date'
    | 'topic'
    | 'region'
    | 'model'
    | 'prompt'
    | 'persona'
    | 'tag'
    | 'theme'
    | 'claim'
    | 'run'
    | 'asset_name'
  >;
  /**
   * List of filters to apply to the sentiment-v2 report.
   */
  filters?: Array<
    | ReportSentimentV2Params.SentimentV2ModelIDFilter
    | ReportSentimentV2Params.SentimentV2RegionIDFilter
    | ReportSentimentV2Params.SentimentV2TopicIDFilter
    | ReportSentimentV2Params.SentimentV2PromptIDFilter
    | ReportSentimentV2Params.SentimentV2PersonaIDFilter
    | ReportSentimentV2Params.SentimentV2TagIDFilter
    | ReportSentimentV2Params.SentimentV2RunIDFilter
    | ReportSentimentV2Params.SentimentV2ThemeFilter
    | ReportSentimentV2Params.SentimentV2ClaimFilter
    | ReportSentimentV2Params.SentimentV2ThemeIDFilter
    | ReportSentimentV2Params.SentimentV2ClaimIDFilter
    | ReportSentimentV2Params.SentimentV2SentimentFilter
  >;
  /**
   * Custom ordering of report results. Dimension keys must also be present in dimensions. The sentiment metric orders by positive_sentiment.
   */
  order_by?: Record<string, 'asc' | 'desc'>;
  /**
   * Pagination settings for the report results.
   */
  pagination?: Shared.Pagination;
}

export namespace ReportSentimentV2Params {
  export interface SentimentV2ModelIDFilter {
    field: 'model_id';
    operator: 'is' | 'not_is' | 'in' | 'not_in';
    value: string | Array<string>;
  }

  export interface SentimentV2RegionIDFilter {
    field: 'region_id';
    operator: 'is' | 'not_is' | 'in' | 'not_in';
    value: string | Array<string>;
  }

  export interface SentimentV2TopicIDFilter {
    field: 'topic_id';
    operator: 'is' | 'not_is' | 'in' | 'not_in';
    value: string | Array<string>;
  }

  export interface SentimentV2PromptIDFilter {
    field: 'prompt_id';
    operator: 'is' | 'not_is' | 'in' | 'not_in';
    value: string | Array<string>;
  }

  export interface SentimentV2PersonaIDFilter {
    field: 'persona_id';
    operator: 'is' | 'not_is' | 'in' | 'not_in';
    value: string | Array<string>;
  }

  export interface SentimentV2TagIDFilter {
    field: 'tag_id';
    operator: 'is' | 'not_is' | 'in' | 'not_in';
    value: string | Array<string>;
  }

  export interface SentimentV2RunIDFilter {
    field: 'run_id';
    operator: 'is' | 'not_is' | 'in' | 'not_in';
    value: string | Array<string>;
  }

  export interface SentimentV2ThemeFilter {
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

  export interface SentimentV2ClaimFilter {
    field: 'claim';
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

  export interface SentimentV2ThemeIDFilter {
    field: 'theme_id';
    operator: 'is' | 'not_is' | 'in' | 'not_in';
    value: string | Array<string>;
  }

  export interface SentimentV2ClaimIDFilter {
    field: 'claim_id';
    operator: 'is' | 'not_is' | 'in' | 'not_in';
    value: string | Array<string>;
  }

  export interface SentimentV2SentimentFilter {
    field: 'sentiment';
    operator: 'is' | 'not_is' | 'in' | 'not_in';
    value: 'positive' | 'negative' | Array<'positive' | 'negative'>;
  }
}

export interface ReportSentimentV2Response {
  info: ReportSentimentV2Response.Info;
  data?: Array<ReportSentimentV2Response.Data>;
}

export namespace ReportSentimentV2Response {
  export interface Info {
    query: Record<string, unknown>;
    total_rows: number;
  }

  export interface Data {
    scores: Data.Scores;
    date?: string | null;
    prev_date?: string | null;
    group_ids?: Record<string, string> | null;
    group_names?: Record<string, string> | null;
    group_metadata?: Data.GroupMetadata | null;
    cited_website_hrefs?: Array<string>;
    total_count?: number | null;
  }

  export namespace Data {
    export interface Scores {
      current?: Scores.Current | null;
      previous?: Scores.Previous | null;
    }

    export namespace Scores {
      export interface Current {
        positive_sentiment: number;
        negative_sentiment: number;
        assessment_count: number;
        occurrence?: number | null;
        response_count?: number | null;
        total_response_count?: number | null;
      }

      export interface Previous {
        positive_sentiment: number;
        negative_sentiment: number;
        assessment_count: number;
        occurrence?: number | null;
        response_count?: number | null;
        total_response_count?: number | null;
      }
    }

    export interface GroupMetadata {
      theme?: string | null;
      claim?: string | null;
      sentiment?: 'positive' | 'negative' | null;
      prompt_id?: string | null;
      prompt_text?: string | null;
      topic_id?: string | null;
      run_id?: string | null;
      created_at?: string | null;
      model_id?: string | null;
      region_id?: string | null;
      persona_id?: string | null;
      asset_name?: string | null;
      child_count_total?: number | null;
      child_count_matching?: number | null;
      parent_matches_search?: boolean | null;
      child_matches_search?: boolean | null;
    }
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

export interface ReportStreamCitationsV2Params {
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;
  /**
   * What each row represents: `domain` (default), `page`, or `citation_category`. Legacy: `group_by: ["page"]` (with `entity` omitted) is still accepted and is equivalent to `entity: "page"`. `citation_category` uses the dashboard split view: a citation counts under both its page-level and domain-level category, so category shares can sum to more than 100%.
   * @default domain
   */
  entity?: 'domain' | 'page' | 'citation_category';
  group_by?: Array<'page' | 'date' | 'model' | 'topic' | 'region' | 'persona' | 'prompt'>;
  metrics?: Array<'count' | 'citation_share' | 'rank' | 'first_cited_at'> | null;
  /**
   * @default day
   */
  interval?: 'day' | 'week' | 'month';
  /**
   * `all` (every cited domain) or `owned` (only your owned domains). Applies to `entity=domain`.
   * @default all
   */
  scope?: 'all' | 'owned';
  /**
   * `citation_category` filters on a cited URL's single category; `citation_tag` filters on the custom citation tags a URL carries (a URL can carry several). List the category's tags with `GET /v1/org/categories/{category_id}/citation-tags`.
   */
  filter?: ReportStreamCitationsV2Params.Filter | null;
  /**
   * Page size; default 10, max 50.
   * @maximum 50
   */
  limit?: number | null;
  /**
   * Stream endpoint only: cap the number of streamed rows (default: all).
   */
  max_results?: number | null;
  cursor?: string | null;
}

export namespace ReportStreamCitationsV2Params {
  export interface Filter {
    and?: Array<unknown> | null;
    or?: Array<unknown> | null;
    not?: unknown;
    field?: string | null;
    op?: string | null;
    value?: unknown;
  }
}

export type ReportStreamCitationsV2Response =
  | ReportStreamCitationsV2Response.CitationsV2Info
  | ReportStreamCitationsV2Response.CitationRow;

export namespace ReportStreamCitationsV2Response {
  export interface CitationsV2Info {
    /**
     * Number of rows returned in `data` for this page.
     */
    count: number;
    /**
     * Display names of the models the report covers.
     */
    models: Array<string>;
    /**
     * Echoed request start date (YYYY-MM-DD, ET).
     */
    start_date: string;
    /**
     * Echoed request end date (YYYY-MM-DD, ET).
     */
    end_date: string;
    /**
     * Citation scope: `all` or `owned`.
     */
    scope: string;
    /**
     * Metrics returned per row.
     */
    metrics: Array<string>;
    /**
     * Analysis types the citations were drawn from.
     */
    analysis_types: Array<string>;
    /**
     * Total rows matching the query before pagination (null when not computed).
     */
    total_results?: number | null;
    /**
     * Opaque cursor for the next page; null on the last page.
     */
    next_cursor?: string | null;
    /**
     * Echoed normalized filter tree, or null when no filter was sent.
     */
    filter?: Record<string, unknown> | null;
    [k: string]: unknown;
  }

  export interface CitationRow {
    domain?: string | null;
    page?: string | null;
    rank?: number | null;
    date?: string | null;
    model?: CitationRow.Model | null;
    topic?: CitationRow.Topic | null;
    region?: CitationRow.Region | null;
    persona?: CitationRow.Persona | null;
    prompt?: CitationRow.Prompt | null;
    count?: number | null;
    citation_share?: number | null;
    /**
     * Pages only.
     */
    first_cited_at?: string | null;
    [k: string]: unknown;
  }

  export namespace CitationRow {
    export interface Model {
      id?: string | null;
      name?: string | null;
    }

    export interface Topic {
      id?: string | null;
      name?: string | null;
    }

    export interface Region {
      id?: string | null;
      name?: string | null;
    }

    export interface Persona {
      id?: string | null;
      name?: string | null;
    }

    export interface Prompt {
      id?: string | null;
      name?: string | null;
    }
  }
}

export interface ReportStreamVisibilityV2Params {
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;
  group_by?: Array<'date' | 'model' | 'topic' | 'region' | 'prompt' | 'persona'>;
  metrics?: Array<'visibility_score' | 'share_of_voice' | 'average_position'> | null;
  /**
   * @default day
   */
  interval?: 'day' | 'week' | 'month';
  /**
   * @default owned
   */
  scope?: 'owned' | 'all';
  /**
   * A name (`is`), a list (`in`), or {op,value} with op `is`/`in`/`not_in`.
   */
  assets?: string | Array<string> | ReportStreamVisibilityV2Params.EntityFilterClause | null;
  filter?: ReportStreamVisibilityV2Params.Filter | null;
  sort?: ReportStreamVisibilityV2Params.Sort;
  /**
   * Page size; default 10, max 50.
   * @maximum 50
   */
  limit?: number | null;
  /**
   * Stream endpoint only: cap the number of streamed rows (default: all).
   */
  max_results?: number | null;
  cursor?: string | null;
}

export namespace ReportStreamVisibilityV2Params {
  export interface EntityFilterClause {
    op:
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

  export interface Filter {
    and?: Array<unknown> | null;
    or?: Array<unknown> | null;
    not?: unknown;
    field?: string | null;
    op?: string | null;
    value?: unknown;
  }

  export interface Sort {
    /**
     * @default visibility_score
     */
    field?: 'visibility_score' | 'share_of_voice' | 'average_position';
  }
}

export type ReportStreamVisibilityV2Response =
  | ReportStreamVisibilityV2Response.VisibilityV2Info
  | ReportStreamVisibilityV2Response.VisibilityRow;

export namespace ReportStreamVisibilityV2Response {
  export interface VisibilityV2Info {
    /**
     * Number of rows returned in `data` for this page.
     */
    count: number;
    /**
     * Display names of the models the report covers.
     */
    models: Array<string>;
    /**
     * Echoed request start date (YYYY-MM-DD, ET).
     */
    start_date: string;
    /**
     * Echoed request end date (YYYY-MM-DD, ET).
     */
    end_date: string;
    /**
     * Asset scope: `all` or `owned`.
     */
    scope: string;
    /**
     * Total rows matching the query before pagination (null when not computed).
     */
    total_results?: number | null;
    /**
     * Opaque cursor for the next page; null on the last page.
     */
    next_cursor?: string | null;
    /**
     * Echoed normalized filter tree, or null when no filter was sent.
     */
    filter?: Record<string, unknown> | null;
    /**
     * Echoed `assets` selection (filter clause, name, or list), or null.
     */
    asset_filter?: Record<string, unknown> | Array<string> | string | null;
    [k: string]: unknown;
  }

  export interface VisibilityRow {
    asset?: VisibilityRow.Asset | null;
    /**
     * Asset rank (only when not grouped).
     */
    rank?: number | null;
    date?: string | null;
    model?: VisibilityRow.Model | null;
    topic?: VisibilityRow.Topic | null;
    region?: VisibilityRow.Region | null;
    prompt?: VisibilityRow.Prompt | null;
    persona?: VisibilityRow.Persona | null;
    visibility_score?: number | null;
    share_of_voice?: number | null;
    average_position?: number | null;
    [k: string]: unknown;
  }

  export namespace VisibilityRow {
    export interface Asset {
      name?: string | null;
      /**
       * Whether the asset is owned by the category.
       */
      owned?: boolean | null;
    }

    export interface Model {
      id?: string | null;
      name?: string | null;
    }

    export interface Topic {
      id?: string | null;
      name?: string | null;
    }

    export interface Region {
      id?: string | null;
      name?: string | null;
    }

    export interface Prompt {
      id?: string | null;
      name?: string | null;
    }

    export interface Persona {
      id?: string | null;
      name?: string | null;
    }
  }
}

export interface ReportStreamSentimentV2Params {
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * The brand name to analyze (sentiment is extracted on name, not id).
   */
  asset: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;
  /**
   * YYYY-MM-DD, ET, inclusive (with end).
   */
  comparison_start_date?: string | null;
  /**
   * YYYY-MM-DD, ET, inclusive (with start).
   */
  comparison_end_date?: string | null;
  group_by?: Array<
    | 'date'
    | 'model'
    | 'topic'
    | 'region'
    | 'prompt'
    | 'persona'
    | 'tag'
    | 'theme'
    | 'claim'
    | 'run'
    | 'competitor'
  >;
  metrics?: Array<'positive_sentiment' | 'negative_sentiment' | 'occurrence'> | null;
  /**
   * @default day
   */
  interval?: 'day' | 'week' | 'month';
  filter?: ReportStreamSentimentV2Params.Filter | null;
  sort?: ReportStreamSentimentV2Params.Sort;
  /**
   * Return cited websites per row (only when grouping by `theme`/`claim`).
   * @default false
   */
  include_cited_websites?: boolean;
  /**
   * Page size; default 10, max 50.
   * @maximum 50
   */
  limit?: number | null;
  /**
   * Stream endpoint only: cap the number of streamed rows (default: all).
   */
  max_results?: number | null;
  cursor?: string | null;
}

export namespace ReportStreamSentimentV2Params {
  export interface Filter {
    and?: Array<unknown> | null;
    or?: Array<unknown> | null;
    not?: unknown;
    field?: string | null;
    op?: string | null;
    value?: unknown;
  }

  export interface Sort {
    /**
     * @default positive_sentiment
     */
    field?: 'occurrence' | 'positive_sentiment' | 'negative_sentiment';
    /**
     * @default desc
     */
    dir?: 'asc' | 'desc';
  }
}

export type ReportStreamSentimentV2Response =
  | ReportStreamSentimentV2Response.SentimentV2Info
  | ReportStreamSentimentV2Response.SentimentRow;

export namespace ReportStreamSentimentV2Response {
  export interface SentimentV2Info {
    /**
     * Number of rows returned in `data` for this page.
     */
    count: number;
    /**
     * Display names of the models the report covers.
     */
    models: Array<string>;
    /**
     * Echoed request start date (YYYY-MM-DD, ET).
     */
    start_date: string;
    /**
     * Echoed request end date (YYYY-MM-DD, ET).
     */
    end_date: string;
    /**
     * The analyzed brand name.
     */
    asset: string;
    /**
     * Sentiment metrics returned per row.
     */
    metrics: Array<string>;
    /**
     * Total rows matching the query before pagination (null when not computed).
     */
    total_results?: number | null;
    /**
     * Opaque cursor for the next page; null on the last page.
     */
    next_cursor?: string | null;
    /**
     * Echoed normalized filter tree, or null when no filter was sent.
     */
    filter?: Record<string, unknown> | null;
    /**
     * Comparison-window start (when requested).
     */
    comparison_start_date?: string | null;
    /**
     * Comparison-window end (when requested).
     */
    comparison_end_date?: string | null;
    [k: string]: unknown;
  }

  export interface SentimentRow {
    date?: string | null;
    model?: SentimentRow.Model | null;
    topic?: SentimentRow.Topic | null;
    region?: SentimentRow.Region | null;
    prompt?: SentimentRow.Prompt | null;
    persona?: SentimentRow.Persona | null;
    tag?: SentimentRow.Tag | null;
    theme?: SentimentRow.Theme | null;
    claim?: SentimentRow.Claim | null;
    run?: SentimentRow.Run | null;
    competitor?: SentimentRow.Competitor | null;
    positive_sentiment?: number | null;
    negative_sentiment?: number | null;
    occurrence?: number | null;
    /**
     * Comparison-window metrics (when requested).
     */
    previous?: SentimentRow.Previous | null;
    prev_date?: string | null;
    cited_websites?: Array<string> | null;
    rank?: number | null;
    [k: string]: unknown;
  }

  export namespace SentimentRow {
    export interface Model {
      id?: string | null;
      name?: string | null;
    }

    export interface Topic {
      id?: string | null;
      name?: string | null;
    }

    export interface Region {
      id?: string | null;
      name?: string | null;
    }

    export interface Prompt {
      id?: string | null;
      name?: string | null;
    }

    export interface Persona {
      id?: string | null;
      name?: string | null;
    }

    export interface Tag {
      id?: string | null;
      name?: string | null;
    }

    export interface Theme {
      id?: string | null;
      name?: string | null;
    }

    export interface Claim {
      id?: string | null;
      name?: string | null;
    }

    export interface Run {
      id?: string | null;
      name?: string | null;
    }

    export interface Competitor {
      id?: string | null;
      name?: string | null;
    }

    export interface Previous {
      positive_sentiment?: number | null;
      negative_sentiment?: number | null;
      occurrence?: number | null;
      [k: string]: unknown;
    }
  }
}

export interface ReportStreamQueryFanoutsParams {
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;
  group_by?: Array<'date' | 'model' | 'region' | 'prompt' | 'query'>;
  metrics?: Array<'fanouts_per_execution' | 'total_fanouts' | 'share' | 'query_variations'> | null;
  /**
   * @default day
   */
  interval?: 'day' | 'week' | 'month';
  filter?: ReportStreamQueryFanoutsParams.Filter | null;
  sort?: ReportStreamQueryFanoutsParams.Sort | null;
  /**
   * Page size; default 10, max 50.
   * @maximum 50
   */
  limit?: number | null;
  /**
   * Stream endpoint only: cap the number of streamed rows (default: all).
   */
  max_results?: number | null;
  cursor?: string | null;
}

export namespace ReportStreamQueryFanoutsParams {
  export interface Filter {
    and?: Array<unknown> | null;
    or?: Array<unknown> | null;
    not?: unknown;
    field?: string | null;
    op?: string | null;
    value?: unknown;
  }

  export interface Sort {
    field: string;
    /**
     * @default desc
     */
    dir?: 'asc' | 'desc';
  }
}

export type ReportStreamQueryFanoutsResponse =
  | ReportStreamQueryFanoutsResponse.QueryFanoutsV2Info
  | ReportStreamQueryFanoutsResponse.QueryFanoutRow;

export namespace ReportStreamQueryFanoutsResponse {
  export interface QueryFanoutsV2Info {
    /**
     * Number of rows returned in `data` for this page.
     */
    count: number;
    /**
     * Display names of the models the report covers.
     */
    models: Array<string>;
    /**
     * Echoed request start date (YYYY-MM-DD, ET).
     */
    start_date: string;
    /**
     * Echoed request end date (YYYY-MM-DD, ET).
     */
    end_date: string;
    /**
     * Fanout metrics returned per row.
     */
    metrics: Array<string>;
    /**
     * Caveat about which runs the fanout metrics cover.
     */
    coverage_note: string;
    /**
     * Total rows matching the query before pagination (null when not computed).
     */
    total_results?: number | null;
    /**
     * Opaque cursor for the next page; null on the last page.
     */
    next_cursor?: string | null;
    /**
     * Echoed normalized filter tree, or null when no filter was sent.
     */
    filter?: Record<string, unknown> | null;
    [k: string]: unknown;
  }

  export interface QueryFanoutRow {
    date?: string | null;
    model?: string | null;
    region?: string | null;
    prompt?: string | null;
    query?: string | null;
    total_fanouts?: number | null;
    fanouts_per_execution?: number | null;
    share?: number | null;
    query_variations?: number | null;
    rank?: number | null;
    [k: string]: unknown;
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
   * Domain segment UUID used to scope the query to a configured subset of hosts and paths.
   * @format uuid
   */
  view_id?: string | null;
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
   * Domain segment UUID used to scope the query to a configured subset of hosts and paths.
   * @format uuid
   */
  view_id?: string | null;
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

export interface ReportQueryVisibilityParams {
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;
  group_by?: Array<'date' | 'model' | 'topic' | 'region' | 'prompt' | 'persona'>;
  metrics?: Array<'visibility_score' | 'share_of_voice' | 'average_position'> | null;
  /**
   * @default day
   */
  interval?: 'day' | 'week' | 'month';
  /**
   * @default owned
   */
  scope?: 'owned' | 'all';
  /**
   * A name (`is`), a list (`in`), or {op,value} with op `is`/`in`/`not_in`.
   */
  assets?: string | Array<string> | ReportQueryVisibilityParams.EntityFilterClause | null;
  filter?: ReportQueryVisibilityParams.Filter | null;
  sort?: ReportQueryVisibilityParams.Sort;
  /**
   * Page size; default 10, max 50.
   * @maximum 50
   */
  limit?: number | null;
  /**
   * Stream endpoint only: cap the number of streamed rows (default: all).
   */
  max_results?: number | null;
  cursor?: string | null;
}

export namespace ReportQueryVisibilityParams {
  export interface EntityFilterClause {
    op:
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

  export interface Filter {
    and?: Array<unknown> | null;
    or?: Array<unknown> | null;
    not?: unknown;
    field?: string | null;
    op?: string | null;
    value?: unknown;
  }

  export interface Sort {
    /**
     * @default visibility_score
     */
    field?: 'visibility_score' | 'share_of_voice' | 'average_position';
  }
}

export interface ReportQueryVisibilityResponse {
  info: ReportQueryVisibilityResponse.Info;
  data: Array<ReportQueryVisibilityResponse.Data>;
}

export namespace ReportQueryVisibilityResponse {
  export interface Info {
    /**
     * Number of rows returned in `data` for this page.
     */
    count: number;
    /**
     * Display names of the models the report covers.
     */
    models: Array<string>;
    /**
     * Echoed request start date (YYYY-MM-DD, ET).
     */
    start_date: string;
    /**
     * Echoed request end date (YYYY-MM-DD, ET).
     */
    end_date: string;
    /**
     * Asset scope: `all` or `owned`.
     */
    scope: string;
    /**
     * Total rows matching the query before pagination (null when not computed).
     */
    total_results?: number | null;
    /**
     * Opaque cursor for the next page; null on the last page.
     */
    next_cursor?: string | null;
    /**
     * Echoed normalized filter tree, or null when no filter was sent.
     */
    filter?: Record<string, unknown> | null;
    /**
     * Echoed `assets` selection (filter clause, name, or list), or null.
     */
    asset_filter?: Record<string, unknown> | Array<string> | string | null;
    [k: string]: unknown;
  }

  export interface Data {
    asset?: Data.Asset | null;
    /**
     * Asset rank (only when not grouped).
     */
    rank?: number | null;
    date?: string | null;
    model?: Data.Model | null;
    topic?: Data.Topic | null;
    region?: Data.Region | null;
    prompt?: Data.Prompt | null;
    persona?: Data.Persona | null;
    visibility_score?: number | null;
    share_of_voice?: number | null;
    average_position?: number | null;
    [k: string]: unknown;
  }

  export namespace Data {
    export interface Asset {
      name?: string | null;
      /**
       * Whether the asset is owned by the category.
       */
      owned?: boolean | null;
    }

    export interface Model {
      id?: string | null;
      name?: string | null;
    }

    export interface Topic {
      id?: string | null;
      name?: string | null;
    }

    export interface Region {
      id?: string | null;
      name?: string | null;
    }

    export interface Prompt {
      id?: string | null;
      name?: string | null;
    }

    export interface Persona {
      id?: string | null;
      name?: string | null;
    }
  }
}

export interface ReportQueryCitationsParams {
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;
  /**
   * What each row represents: `domain` (default), `page`, or `citation_category`. Legacy: `group_by: ["page"]` (with `entity` omitted) is still accepted and is equivalent to `entity: "page"`. `citation_category` uses the dashboard split view: a citation counts under both its page-level and domain-level category, so category shares can sum to more than 100%.
   * @default domain
   */
  entity?: 'domain' | 'page' | 'citation_category';
  group_by?: Array<'page' | 'date' | 'model' | 'topic' | 'region' | 'persona' | 'prompt'>;
  metrics?: Array<'count' | 'citation_share' | 'rank' | 'first_cited_at'> | null;
  /**
   * @default day
   */
  interval?: 'day' | 'week' | 'month';
  /**
   * `all` (every cited domain) or `owned` (only your owned domains). Applies to `entity=domain`.
   * @default all
   */
  scope?: 'all' | 'owned';
  /**
   * `citation_category` filters on a cited URL's single category; `citation_tag` filters on the custom citation tags a URL carries (a URL can carry several). List the category's tags with `GET /v1/org/categories/{category_id}/citation-tags`.
   */
  filter?: ReportQueryCitationsParams.Filter | null;
  /**
   * Page size; default 10, max 50.
   * @maximum 50
   */
  limit?: number | null;
  /**
   * Stream endpoint only: cap the number of streamed rows (default: all).
   */
  max_results?: number | null;
  cursor?: string | null;
}

export namespace ReportQueryCitationsParams {
  export interface Filter {
    and?: Array<unknown> | null;
    or?: Array<unknown> | null;
    not?: unknown;
    field?: string | null;
    op?: string | null;
    value?: unknown;
  }
}

export interface ReportQueryCitationsResponse {
  info: ReportQueryCitationsResponse.Info;
  data: Array<ReportQueryCitationsResponse.Data>;
}

export namespace ReportQueryCitationsResponse {
  export interface Info {
    /**
     * Number of rows returned in `data` for this page.
     */
    count: number;
    /**
     * Display names of the models the report covers.
     */
    models: Array<string>;
    /**
     * Echoed request start date (YYYY-MM-DD, ET).
     */
    start_date: string;
    /**
     * Echoed request end date (YYYY-MM-DD, ET).
     */
    end_date: string;
    /**
     * Citation scope: `all` or `owned`.
     */
    scope: string;
    /**
     * Metrics returned per row.
     */
    metrics: Array<string>;
    /**
     * Analysis types the citations were drawn from.
     */
    analysis_types: Array<string>;
    /**
     * Total rows matching the query before pagination (null when not computed).
     */
    total_results?: number | null;
    /**
     * Opaque cursor for the next page; null on the last page.
     */
    next_cursor?: string | null;
    /**
     * Echoed normalized filter tree, or null when no filter was sent.
     */
    filter?: Record<string, unknown> | null;
    [k: string]: unknown;
  }

  export interface Data {
    domain?: string | null;
    page?: string | null;
    rank?: number | null;
    date?: string | null;
    model?: Data.Model | null;
    topic?: Data.Topic | null;
    region?: Data.Region | null;
    persona?: Data.Persona | null;
    prompt?: Data.Prompt | null;
    count?: number | null;
    citation_share?: number | null;
    /**
     * Pages only.
     */
    first_cited_at?: string | null;
    [k: string]: unknown;
  }

  export namespace Data {
    export interface Model {
      id?: string | null;
      name?: string | null;
    }

    export interface Topic {
      id?: string | null;
      name?: string | null;
    }

    export interface Region {
      id?: string | null;
      name?: string | null;
    }

    export interface Persona {
      id?: string | null;
      name?: string | null;
    }

    export interface Prompt {
      id?: string | null;
      name?: string | null;
    }
  }
}

export interface ReportQuerySentimentParams {
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * The brand name to analyze (sentiment is extracted on name, not id).
   */
  asset: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;
  /**
   * YYYY-MM-DD, ET, inclusive (with end).
   */
  comparison_start_date?: string | null;
  /**
   * YYYY-MM-DD, ET, inclusive (with start).
   */
  comparison_end_date?: string | null;
  group_by?: Array<
    | 'date'
    | 'model'
    | 'topic'
    | 'region'
    | 'prompt'
    | 'persona'
    | 'tag'
    | 'theme'
    | 'claim'
    | 'run'
    | 'competitor'
  >;
  metrics?: Array<'positive_sentiment' | 'negative_sentiment' | 'occurrence'> | null;
  /**
   * @default day
   */
  interval?: 'day' | 'week' | 'month';
  filter?: ReportQuerySentimentParams.Filter | null;
  sort?: ReportQuerySentimentParams.Sort;
  /**
   * Return cited websites per row (only when grouping by `theme`/`claim`).
   * @default false
   */
  include_cited_websites?: boolean;
  /**
   * Page size; default 10, max 50.
   * @maximum 50
   */
  limit?: number | null;
  /**
   * Stream endpoint only: cap the number of streamed rows (default: all).
   */
  max_results?: number | null;
  cursor?: string | null;
}

export namespace ReportQuerySentimentParams {
  export interface Filter {
    and?: Array<unknown> | null;
    or?: Array<unknown> | null;
    not?: unknown;
    field?: string | null;
    op?: string | null;
    value?: unknown;
  }

  export interface Sort {
    /**
     * @default positive_sentiment
     */
    field?: 'occurrence' | 'positive_sentiment' | 'negative_sentiment';
    /**
     * @default desc
     */
    dir?: 'asc' | 'desc';
  }
}

export interface ReportQuerySentimentResponse {
  info: ReportQuerySentimentResponse.Info;
  data: Array<ReportQuerySentimentResponse.Data>;
}

export namespace ReportQuerySentimentResponse {
  export interface Info {
    /**
     * Number of rows returned in `data` for this page.
     */
    count: number;
    /**
     * Display names of the models the report covers.
     */
    models: Array<string>;
    /**
     * Echoed request start date (YYYY-MM-DD, ET).
     */
    start_date: string;
    /**
     * Echoed request end date (YYYY-MM-DD, ET).
     */
    end_date: string;
    /**
     * The analyzed brand name.
     */
    asset: string;
    /**
     * Sentiment metrics returned per row.
     */
    metrics: Array<string>;
    /**
     * Total rows matching the query before pagination (null when not computed).
     */
    total_results?: number | null;
    /**
     * Opaque cursor for the next page; null on the last page.
     */
    next_cursor?: string | null;
    /**
     * Echoed normalized filter tree, or null when no filter was sent.
     */
    filter?: Record<string, unknown> | null;
    /**
     * Comparison-window start (when requested).
     */
    comparison_start_date?: string | null;
    /**
     * Comparison-window end (when requested).
     */
    comparison_end_date?: string | null;
    [k: string]: unknown;
  }

  export interface Data {
    date?: string | null;
    model?: Data.Model | null;
    topic?: Data.Topic | null;
    region?: Data.Region | null;
    prompt?: Data.Prompt | null;
    persona?: Data.Persona | null;
    tag?: Data.Tag | null;
    theme?: Data.Theme | null;
    claim?: Data.Claim | null;
    run?: Data.Run | null;
    competitor?: Data.Competitor | null;
    positive_sentiment?: number | null;
    negative_sentiment?: number | null;
    occurrence?: number | null;
    /**
     * Comparison-window metrics (when requested).
     */
    previous?: Data.Previous | null;
    prev_date?: string | null;
    cited_websites?: Array<string> | null;
    rank?: number | null;
    [k: string]: unknown;
  }

  export namespace Data {
    export interface Model {
      id?: string | null;
      name?: string | null;
    }

    export interface Topic {
      id?: string | null;
      name?: string | null;
    }

    export interface Region {
      id?: string | null;
      name?: string | null;
    }

    export interface Prompt {
      id?: string | null;
      name?: string | null;
    }

    export interface Persona {
      id?: string | null;
      name?: string | null;
    }

    export interface Tag {
      id?: string | null;
      name?: string | null;
    }

    export interface Theme {
      id?: string | null;
      name?: string | null;
    }

    export interface Claim {
      id?: string | null;
      name?: string | null;
    }

    export interface Run {
      id?: string | null;
      name?: string | null;
    }

    export interface Competitor {
      id?: string | null;
      name?: string | null;
    }

    export interface Previous {
      positive_sentiment?: number | null;
      negative_sentiment?: number | null;
      occurrence?: number | null;
      [k: string]: unknown;
    }
  }
}

export interface ReportQueryQueryFanoutsParams {
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;
  group_by?: Array<'date' | 'model' | 'region' | 'prompt' | 'query'>;
  metrics?: Array<'fanouts_per_execution' | 'total_fanouts' | 'share' | 'query_variations'> | null;
  /**
   * @default day
   */
  interval?: 'day' | 'week' | 'month';
  filter?: ReportQueryQueryFanoutsParams.Filter | null;
  sort?: ReportQueryQueryFanoutsParams.Sort | null;
  /**
   * Page size; default 10, max 50.
   * @maximum 50
   */
  limit?: number | null;
  /**
   * Stream endpoint only: cap the number of streamed rows (default: all).
   */
  max_results?: number | null;
  cursor?: string | null;
}

export namespace ReportQueryQueryFanoutsParams {
  export interface Filter {
    and?: Array<unknown> | null;
    or?: Array<unknown> | null;
    not?: unknown;
    field?: string | null;
    op?: string | null;
    value?: unknown;
  }

  export interface Sort {
    field: string;
    /**
     * @default desc
     */
    dir?: 'asc' | 'desc';
  }
}

export interface ReportQueryQueryFanoutsResponse {
  info: ReportQueryQueryFanoutsResponse.Info;
  data: Array<ReportQueryQueryFanoutsResponse.Data>;
}

export namespace ReportQueryQueryFanoutsResponse {
  export interface Info {
    /**
     * Number of rows returned in `data` for this page.
     */
    count: number;
    /**
     * Display names of the models the report covers.
     */
    models: Array<string>;
    /**
     * Echoed request start date (YYYY-MM-DD, ET).
     */
    start_date: string;
    /**
     * Echoed request end date (YYYY-MM-DD, ET).
     */
    end_date: string;
    /**
     * Fanout metrics returned per row.
     */
    metrics: Array<string>;
    /**
     * Caveat about which runs the fanout metrics cover.
     */
    coverage_note: string;
    /**
     * Total rows matching the query before pagination (null when not computed).
     */
    total_results?: number | null;
    /**
     * Opaque cursor for the next page; null on the last page.
     */
    next_cursor?: string | null;
    /**
     * Echoed normalized filter tree, or null when no filter was sent.
     */
    filter?: Record<string, unknown> | null;
    [k: string]: unknown;
  }

  export interface Data {
    date?: string | null;
    model?: string | null;
    region?: string | null;
    prompt?: string | null;
    query?: string | null;
    total_fanouts?: number | null;
    fanouts_per_execution?: number | null;
    share?: number | null;
    query_variations?: number | null;
    rank?: number | null;
    [k: string]: unknown;
  }
}
Reports.WebSearchResults = WebSearchResults;
Reports.Shopping = Shopping;
Reports.Accuracy = Accuracy;
Reports.Factcheck = Factcheck;
Reports.Social = Social;

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
    type ReportSentimentV2Response as ReportSentimentV2Response,
    type ReportStreamCitationsResponse as ReportStreamCitationsResponse,
    type ReportStreamVisibilityResponse as ReportStreamVisibilityResponse,
    type ReportStreamSentimentResponse as ReportStreamSentimentResponse,
    type ReportStreamCitationsV2Response as ReportStreamCitationsV2Response,
    type ReportStreamVisibilityV2Response as ReportStreamVisibilityV2Response,
    type ReportStreamSentimentV2Response as ReportStreamSentimentV2Response,
    type ReportStreamQueryFanoutsResponse as ReportStreamQueryFanoutsResponse,
    type ReportQueryVisibilityResponse as ReportQueryVisibilityResponse,
    type ReportQueryCitationsResponse as ReportQueryCitationsResponse,
    type ReportQuerySentimentResponse as ReportQuerySentimentResponse,
    type ReportQueryQueryFanoutsResponse as ReportQueryQueryFanoutsResponse,
    type ReportCitationsParams as ReportCitationsParams,
    type ReportVisibilityParams as ReportVisibilityParams,
    type ReportSentimentParams as ReportSentimentParams,
    type ReportSentimentV2Params as ReportSentimentV2Params,
    type ReportGetReferralsReportParams as ReportGetReferralsReportParams,
    type ReportGetBotsReportParams as ReportGetBotsReportParams,
    type ReportQueryFanoutsParams as ReportQueryFanoutsParams,
    type ReportStreamCitationsParams as ReportStreamCitationsParams,
    type ReportStreamVisibilityParams as ReportStreamVisibilityParams,
    type ReportStreamSentimentParams as ReportStreamSentimentParams,
    type ReportStreamCitationsV2Params as ReportStreamCitationsV2Params,
    type ReportStreamVisibilityV2Params as ReportStreamVisibilityV2Params,
    type ReportStreamSentimentV2Params as ReportStreamSentimentV2Params,
    type ReportStreamQueryFanoutsParams as ReportStreamQueryFanoutsParams,
    type ReportGetReferralsReportV2Params as ReportGetReferralsReportV2Params,
    type ReportGetBotsReportV2Params as ReportGetBotsReportV2Params,
    type ReportQueryVisibilityParams as ReportQueryVisibilityParams,
    type ReportQueryCitationsParams as ReportQueryCitationsParams,
    type ReportQuerySentimentParams as ReportQuerySentimentParams,
    type ReportQueryQueryFanoutsParams as ReportQueryQueryFanoutsParams,
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
    type ShoppingBrandsResponse as ShoppingBrandsResponse,
    type ShoppingStreamBrandsResponse as ShoppingStreamBrandsResponse,
    type ShoppingProductsResponse as ShoppingProductsResponse,
    type ShoppingStreamProductsResponse as ShoppingStreamProductsResponse,
    type ShoppingMerchantsResponse as ShoppingMerchantsResponse,
    type ShoppingStreamMerchantsResponse as ShoppingStreamMerchantsResponse,
    type ShoppingTriggerRateResponse as ShoppingTriggerRateResponse,
    type ShoppingStreamTriggerRateResponse as ShoppingStreamTriggerRateResponse,
    type ShoppingBrandsParams as ShoppingBrandsParams,
    type ShoppingStreamBrandsParams as ShoppingStreamBrandsParams,
    type ShoppingProductsParams as ShoppingProductsParams,
    type ShoppingStreamProductsParams as ShoppingStreamProductsParams,
    type ShoppingMerchantsParams as ShoppingMerchantsParams,
    type ShoppingStreamMerchantsParams as ShoppingStreamMerchantsParams,
    type ShoppingTriggerRateParams as ShoppingTriggerRateParams,
    type ShoppingStreamTriggerRateParams as ShoppingStreamTriggerRateParams,
  };

  export {
    Accuracy as Accuracy,
    type AccuracyCreateOverviewResponse as AccuracyCreateOverviewResponse,
    type AccuracyCreateBreakdownResponse as AccuracyCreateBreakdownResponse,
    type AccuracyCreateCitationAnalysisResponse as AccuracyCreateCitationAnalysisResponse,
    type AccuracyCreateTopicIDsResponse as AccuracyCreateTopicIDsResponse,
    type AccuracyCreateInaccurateThemesResponse as AccuracyCreateInaccurateThemesResponse,
    type AccuracyCreateInaccurateClustersResponse as AccuracyCreateInaccurateClustersResponse,
    type AccuracyCreateInaccuracyDriversResponse as AccuracyCreateInaccuracyDriversResponse,
    type AccuracyCreateTopInaccurateClaimsResponse as AccuracyCreateTopInaccurateClaimsResponse,
    type AccuracyCreateClaimBreakdownResponse as AccuracyCreateClaimBreakdownResponse,
    type AccuracyCreateClaimCitationsResponse as AccuracyCreateClaimCitationsResponse,
    type AccuracyCreateClusterExampleRunsResponse as AccuracyCreateClusterExampleRunsResponse,
    type AccuracyCreateClusterVerificationPairsResponse as AccuracyCreateClusterVerificationPairsResponse,
    type AccuracyCreateFactcheckSetupStatusResponse as AccuracyCreateFactcheckSetupStatusResponse,
    type AccuracyCreateOverviewParams as AccuracyCreateOverviewParams,
    type AccuracyCreateBreakdownParams as AccuracyCreateBreakdownParams,
    type AccuracyCreateCitationAnalysisParams as AccuracyCreateCitationAnalysisParams,
    type AccuracyCreateTopicIDsParams as AccuracyCreateTopicIDsParams,
    type AccuracyCreateInaccurateThemesParams as AccuracyCreateInaccurateThemesParams,
    type AccuracyCreateInaccurateClustersParams as AccuracyCreateInaccurateClustersParams,
    type AccuracyCreateInaccuracyDriversParams as AccuracyCreateInaccuracyDriversParams,
    type AccuracyCreateTopInaccurateClaimsParams as AccuracyCreateTopInaccurateClaimsParams,
    type AccuracyCreateClaimBreakdownParams as AccuracyCreateClaimBreakdownParams,
    type AccuracyCreateClaimCitationsParams as AccuracyCreateClaimCitationsParams,
    type AccuracyCreateClusterExampleRunsParams as AccuracyCreateClusterExampleRunsParams,
    type AccuracyCreateClusterVerificationPairsParams as AccuracyCreateClusterVerificationPairsParams,
    type AccuracyCreateFactcheckSetupStatusParams as AccuracyCreateFactcheckSetupStatusParams,
  };

  export {
    Factcheck as Factcheck,
    type FactcheckQueryScoresResponse as FactcheckQueryScoresResponse,
    type FactcheckStreamScoresResponse as FactcheckStreamScoresResponse,
    type FactcheckQueryScoresParams as FactcheckQueryScoresParams,
    type FactcheckStreamScoresParams as FactcheckStreamScoresParams,
  };

  export { Social as Social };
}

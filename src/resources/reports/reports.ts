// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as AccuracyAPI from './accuracy';
import {
  Accuracy,
  AccuracyCreateBreakdownParams,
  AccuracyCreateBreakdownResponse,
  AccuracyCreateCitationAnalysisParams,
  AccuracyCreateCitationAnalysisResponse,
  AccuracyCreateClaimBreakdownParams,
  AccuracyCreateClaimBreakdownResponse,
  AccuracyCreateClaimCitationsParams,
  AccuracyCreateClaimCitationsResponse,
  AccuracyCreateClusterExampleRunsParams,
  AccuracyCreateClusterExampleRunsResponse,
  AccuracyCreateClusterVerificationPairsParams,
  AccuracyCreateClusterVerificationPairsResponse,
  AccuracyCreateFactcheckSetupStatusParams,
  AccuracyCreateFactcheckSetupStatusResponse,
  AccuracyCreateInaccuracyDriversParams,
  AccuracyCreateInaccuracyDriversResponse,
  AccuracyCreateInaccurateClustersParams,
  AccuracyCreateInaccurateClustersResponse,
  AccuracyCreateInaccurateThemesParams,
  AccuracyCreateInaccurateThemesResponse,
  AccuracyCreateOverviewParams,
  AccuracyCreateOverviewResponse,
  AccuracyCreateTopInaccurateClaimsParams,
  AccuracyCreateTopInaccurateClaimsResponse,
  AccuracyCreateTopicIDsParams,
  AccuracyCreateTopicIDsResponse,
} from './accuracy';
import * as ShoppingAPI from './shopping';
import {
  BrandNameFilter,
  MerchantNameFilter,
  ProductNameFilter,
  Shopping,
  ShoppingAllItemsWithMerchantsParams,
  ShoppingAllItemsWithMerchantsResponse,
  ShoppingExecutionsParams,
  ShoppingExecutionsResponse,
  ShoppingItemVisibilityParams,
  ShoppingItemVisibilityResponse,
  ShoppingMerchantByItemsParams,
  ShoppingMerchantByItemsResponse,
  ShoppingMerchantDistributionParams,
  ShoppingMerchantDistributionResponse,
  ShoppingMerchantShareParams,
  ShoppingMerchantShareResponse,
  ShoppingMerchantVisibilityByBrandParams,
  ShoppingMerchantVisibilityByBrandResponse,
  ShoppingProductMerchantURLsParams,
  ShoppingProductMerchantURLsResponse,
  ShoppingTriggerRateParams,
  ShoppingTriggerRateResponse,
  ShoppingVisibilityParams,
  ShoppingVisibilityResponse,
} from './shopping';
import * as WebSearchResultsAPI from './web-search-results';
import {
  WebSearchResultQueryParams,
  WebSearchResultQueryResponse,
  WebSearchResultStreamParams,
  WebSearchResultStreamResponse,
  WebSearchResults,
} from './web-search-results';
import * as FactcheckAPI from './factcheck/factcheck';
import {
  Factcheck,
  FactcheckQueryScoresParams,
  FactcheckQueryScoresResponse,
  FactcheckStreamScoresParams,
  FactcheckStreamScoresResponse,
} from './factcheck/factcheck';
import { APIPromise } from '../../core/api-promise';
import { Stream } from '../../core/streaming';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Reports extends APIResource {
  webSearchResults: WebSearchResultsAPI.WebSearchResults = new WebSearchResultsAPI.WebSearchResults(
    this._client,
  );
  shopping: ShoppingAPI.Shopping = new ShoppingAPI.Shopping(this._client);
  accuracy: AccuracyAPI.Accuracy = new AccuracyAPI.Accuracy(this._client);
  factcheck: FactcheckAPI.Factcheck = new FactcheckAPI.Factcheck(this._client);

  /**
   * Get citations for a given category.
   *
   * The `mentioned` filter supports `is true` and `is false`. It uses the latest
   * page analysis available at or before `end_date`; pages without an analysis by
   * then are excluded from both values. `citation_share` keeps all otherwise
   * eligible citations in its denominator when this filter is used.
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
   * Query Citations V2
   *
   * @example
   * ```ts
   * const response = await client.reports.queryCitations({
   *   category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   end_date: 'end_date',
   *   start_date: 'start_date',
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
   * Query Fanouts V2
   *
   * @example
   * ```ts
   * const response = await client.reports.queryQueryFanouts({
   *   category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   end_date: 'end_date',
   *   start_date: 'start_date',
   * });
   * ```
   */
  queryQueryFanouts(
    body: ReportQueryQueryFanoutsParams,
    options?: RequestOptions,
  ): APIPromise<ReportQueryQueryFanoutsResponse> {
    return this._client.post('/v2/reports/query-fanouts', { body, ...options });
  }

  /**
   * Query Sentiment V2
   *
   * @example
   * ```ts
   * const response = await client.reports.querySentiment({
   *   asset: 'asset',
   *   category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   end_date: 'end_date',
   *   start_date: 'start_date',
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
   * Query Visibility V2
   *
   * @example
   * ```ts
   * const response = await client.reports.queryVisibility({
   *   category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   end_date: 'end_date',
   *   start_date: 'start_date',
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
   * Query Sentiment V2
   *
   * @example
   * ```ts
   * const response = await client.reports.sentimentV2({
   *   asset_name: 'asset_name',
   *   category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   end_date: '2019-12-27T18:11:19.117Z',
   *   metrics: ['sentiment'],
   *   start_date: '2019-12-27T18:11:19.117Z',
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
   * Stream citations with the same filter semantics as the non-streaming route.
   *
   * @example
   * ```ts
   * const response = await client.reports.streamCitations({
   *   category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   end_date: '2019-12-27T18:11:19.117Z',
   *   metrics: ['count'],
   *   start_date: '2019-12-27T18:11:19.117Z',
   * });
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
    }) as APIPromise<Stream<ReportStreamCitationsResponse>>;
  }

  /**
   * Stream Citations V2
   *
   * @example
   * ```ts
   * const response = await client.reports.streamCitationsV2({
   *   category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   end_date: 'end_date',
   *   start_date: 'start_date',
   * });
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
    }) as APIPromise<Stream<ReportStreamCitationsV2Response>>;
  }

  /**
   * Stream Query Fanouts V2
   *
   * @example
   * ```ts
   * const response = await client.reports.streamQueryFanouts({
   *   category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   end_date: 'end_date',
   *   start_date: 'start_date',
   * });
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
    }) as APIPromise<Stream<ReportStreamQueryFanoutsResponse>>;
  }

  /**
   * Stream Sentiment
   *
   * @example
   * ```ts
   * const response = await client.reports.streamSentiment({
   *   category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   end_date: '2019-12-27T18:11:19.117Z',
   *   metrics: ['positive'],
   *   start_date: '2019-12-27T18:11:19.117Z',
   * });
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
    }) as APIPromise<Stream<ReportStreamSentimentResponse>>;
  }

  /**
   * Stream Sentiment V2
   *
   * @example
   * ```ts
   * const response = await client.reports.streamSentimentV2({
   *   asset: 'asset',
   *   category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   end_date: 'end_date',
   *   start_date: 'start_date',
   * });
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
    }) as APIPromise<Stream<ReportStreamSentimentV2Response>>;
  }

  /**
   * Stream Visibility
   *
   * @example
   * ```ts
   * const response = await client.reports.streamVisibility({
   *   category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   end_date: '2019-12-27T18:11:19.117Z',
   *   metrics: ['share_of_voice'],
   *   start_date: '2019-12-27T18:11:19.117Z',
   * });
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
    }) as APIPromise<Stream<ReportStreamVisibilityResponse>>;
  }

  /**
   * Stream Visibility V2
   *
   * @example
   * ```ts
   * const response = await client.reports.streamVisibilityV2({
   *   category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   end_date: 'end_date',
   *   start_date: 'start_date',
   * });
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
    }) as APIPromise<Stream<ReportStreamVisibilityV2Response>>;
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

  metrics: Array<number | string>;
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

export interface ReportCitationsResponse {
  data: Array<ReportCitationsResponse.Data>;

  /**
   * Base model for report information.
   */
  info: ReportInfo;
}

export namespace ReportCitationsResponse {
  export interface Data {
    dimensions: Array<string>;

    metrics: Array<number | string | null>;
  }
}

export interface ReportQueryCitationsResponse {
  data: Array<ReportQueryCitationsResponse.Data>;

  info: ReportQueryCitationsResponse.Info;
}

export namespace ReportQueryCitationsResponse {
  /**
   * One (source x group) row. Each row carries `domain` or `page`; group
   * dims/metrics vary.
   */
  export interface Data {
    citation_share?: number | null;

    count?: number | null;

    date?: string | null;

    domain?: string | null;

    /**
     * Pages only.
     */
    first_cited_at?: string | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    model?: Data.Model | null;

    page?: string | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    persona?: Data.Persona | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    prompt?: Data.Prompt | null;

    rank?: number | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    region?: Data.Region | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    topic?: Data.Topic | null;

    [k: string]: unknown;
  }

  export namespace Data {
    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Model {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Persona {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Prompt {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Region {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Topic {
      id?: string | null;

      name?: string | null;
    }
  }

  export interface Info {
    /**
     * Analysis types the citations were drawn from.
     */
    analysis_types: Array<string>;

    /**
     * Number of rows returned in `data` for this page.
     */
    count: number;

    /**
     * Echoed request end date (YYYY-MM-DD, ET).
     */
    end_date: string;

    /**
     * Metrics returned per row.
     */
    metrics: Array<string>;

    /**
     * Display names of the models the report covers.
     */
    models: Array<string>;

    /**
     * Citation scope: `all` or `owned`.
     */
    scope: string;

    /**
     * Echoed request start date (YYYY-MM-DD, ET).
     */
    start_date: string;

    /**
     * Echoed normalized filter tree, or null when no filter was sent.
     */
    filter?: { [key: string]: unknown } | null;

    /**
     * Opaque cursor for the next page; null on the last page.
     */
    next_cursor?: string | null;

    /**
     * Total rows matching the query before pagination (null when not computed).
     */
    total_results?: number | null;

    [k: string]: unknown;
  }
}

export interface ReportQueryQueryFanoutsResponse {
  data: Array<ReportQueryQueryFanoutsResponse.Data>;

  info: ReportQueryQueryFanoutsResponse.Info;
}

export namespace ReportQueryQueryFanoutsResponse {
  /**
   * One row. Group dimensions are plain values (not `{id, name}`); metrics present
   * depend on `metrics`.
   */
  export interface Data {
    date?: string | null;

    fanouts_per_execution?: number | null;

    model?: string | null;

    prompt?: string | null;

    query?: string | null;

    query_variations?: number | null;

    rank?: number | null;

    region?: string | null;

    share?: number | null;

    total_fanouts?: number | null;

    [k: string]: unknown;
  }

  export interface Info {
    /**
     * Number of rows returned in `data` for this page.
     */
    count: number;

    /**
     * Caveat about which runs the fanout metrics cover.
     */
    coverage_note: string;

    /**
     * Echoed request end date (YYYY-MM-DD, ET).
     */
    end_date: string;

    /**
     * Fanout metrics returned per row.
     */
    metrics: Array<string>;

    /**
     * Display names of the models the report covers.
     */
    models: Array<string>;

    /**
     * Echoed request start date (YYYY-MM-DD, ET).
     */
    start_date: string;

    /**
     * Echoed normalized filter tree, or null when no filter was sent.
     */
    filter?: { [key: string]: unknown } | null;

    /**
     * Opaque cursor for the next page; null on the last page.
     */
    next_cursor?: string | null;

    /**
     * Total rows matching the query before pagination (null when not computed).
     */
    total_results?: number | null;

    [k: string]: unknown;
  }
}

export interface ReportQuerySentimentResponse {
  data: Array<ReportQuerySentimentResponse.Data>;

  info: ReportQuerySentimentResponse.Info;
}

export namespace ReportQuerySentimentResponse {
  /**
   * One group-combination row. Group dims and metrics present depend on
   * `group_by`/`metrics`.
   */
  export interface Data {
    cited_websites?: Array<string> | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    claim?: Data.Claim | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    competitor?: Data.Competitor | null;

    date?: string | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    model?: Data.Model | null;

    negative_sentiment?: number | null;

    occurrence?: number | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    persona?: Data.Persona | null;

    positive_sentiment?: number | null;

    prev_date?: string | null;

    /**
     * Comparison-window metrics (when requested).
     */
    previous?: Data.Previous | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    prompt?: Data.Prompt | null;

    rank?: number | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    region?: Data.Region | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    run?: Data.Run | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    tag?: Data.Tag | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    theme?: Data.Theme | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    topic?: Data.Topic | null;

    [k: string]: unknown;
  }

  export namespace Data {
    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Claim {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Competitor {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Model {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Persona {
      id?: string | null;

      name?: string | null;
    }

    /**
     * Comparison-window metrics (when requested).
     */
    export interface Previous {
      negative_sentiment?: number | null;

      occurrence?: number | null;

      positive_sentiment?: number | null;

      [k: string]: unknown;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Prompt {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Region {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Run {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Tag {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Theme {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Topic {
      id?: string | null;

      name?: string | null;
    }
  }

  export interface Info {
    /**
     * The analyzed brand name.
     */
    asset: string;

    /**
     * Number of rows returned in `data` for this page.
     */
    count: number;

    /**
     * Echoed request end date (YYYY-MM-DD, ET).
     */
    end_date: string;

    /**
     * Sentiment metrics returned per row.
     */
    metrics: Array<string>;

    /**
     * Display names of the models the report covers.
     */
    models: Array<string>;

    /**
     * Echoed request start date (YYYY-MM-DD, ET).
     */
    start_date: string;

    /**
     * Comparison-window end (when requested).
     */
    comparison_end_date?: string | null;

    /**
     * Comparison-window start (when requested).
     */
    comparison_start_date?: string | null;

    /**
     * Echoed normalized filter tree, or null when no filter was sent.
     */
    filter?: { [key: string]: unknown } | null;

    /**
     * Opaque cursor for the next page; null on the last page.
     */
    next_cursor?: string | null;

    /**
     * Total rows matching the query before pagination (null when not computed).
     */
    total_results?: number | null;

    [k: string]: unknown;
  }
}

export interface ReportQueryVisibilityResponse {
  data: Array<ReportQueryVisibilityResponse.Data>;

  info: ReportQueryVisibilityResponse.Info;
}

export namespace ReportQueryVisibilityResponse {
  /**
   * One (asset x group) row. Group dimensions and metrics present depend on
   * `group_by`/`metrics`.
   */
  export interface Data {
    asset?: Data.Asset | null;

    average_position?: number | null;

    date?: string | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    model?: Data.Model | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    persona?: Data.Persona | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    prompt?: Data.Prompt | null;

    /**
     * Asset rank (only when not grouped).
     */
    rank?: number | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    region?: Data.Region | null;

    share_of_voice?: number | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    topic?: Data.Topic | null;

    visibility_score?: number | null;

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

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Model {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Persona {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Prompt {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Region {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Topic {
      id?: string | null;

      name?: string | null;
    }
  }

  export interface Info {
    /**
     * Number of rows returned in `data` for this page.
     */
    count: number;

    /**
     * Echoed request end date (YYYY-MM-DD, ET).
     */
    end_date: string;

    /**
     * Display names of the models the report covers.
     */
    models: Array<string>;

    /**
     * Asset scope: `all` or `owned`.
     */
    scope: string;

    /**
     * Echoed request start date (YYYY-MM-DD, ET).
     */
    start_date: string;

    /**
     * Echoed `assets` selection (filter clause, name, or list), or null.
     */
    asset_filter?: { [key: string]: unknown } | Array<string> | string | null;

    /**
     * Echoed normalized filter tree, or null when no filter was sent.
     */
    filter?: { [key: string]: unknown } | null;

    /**
     * Opaque cursor for the next page; null on the last page.
     */
    next_cursor?: string | null;

    /**
     * Total rows matching the query before pagination (null when not computed).
     */
    total_results?: number | null;

    [k: string]: unknown;
  }
}

export interface ReportSentimentV2Response {
  info: ReportSentimentV2Response.Info;

  data?: Array<ReportSentimentV2Response.Data>;
}

export namespace ReportSentimentV2Response {
  export interface Info {
    query: { [key: string]: unknown };

    total_rows: number;
  }

  export interface Data {
    scores: Data.Scores;

    cited_website_hrefs?: Array<string>;

    date?: string | null;

    group_ids?: { [key: string]: string } | null;

    group_metadata?: Data.GroupMetadata | null;

    group_names?: { [key: string]: string } | null;

    prev_date?: string | null;

    total_count?: number | null;
  }

  export namespace Data {
    export interface Scores {
      current?: Scores.Current | null;

      previous?: Scores.Previous | null;
    }

    export namespace Scores {
      export interface Current {
        assessment_count: number;

        negative_sentiment: number;

        positive_sentiment: number;

        occurrence?: number | null;

        response_count?: number | null;

        total_response_count?: number | null;
      }

      export interface Previous {
        assessment_count: number;

        negative_sentiment: number;

        positive_sentiment: number;

        occurrence?: number | null;

        response_count?: number | null;

        total_response_count?: number | null;
      }
    }

    export interface GroupMetadata {
      asset_name?: string | null;

      child_count_matching?: number | null;

      child_count_total?: number | null;

      child_matches_search?: boolean | null;

      claim?: string | null;

      created_at?: string | null;

      model_id?: string | null;

      parent_matches_search?: boolean | null;

      persona_id?: string | null;

      prompt_id?: string | null;

      prompt_text?: string | null;

      region_id?: string | null;

      run_id?: string | null;

      sentiment?: 'positive' | 'negative' | null;

      theme?: string | null;

      topic_id?: string | null;
    }
  }
}

/**
 * A streamed citations report row payload.
 */
export type ReportStreamCitationsResponse =
  | ReportStreamCitationsResponse.SseSummaryEventData
  | { [key: string]: unknown };

export namespace ReportStreamCitationsResponse {
  export interface SseSummaryEventData {
    /**
     * The normalized query used to build the stream.
     */
    query: { [key: string]: unknown };

    /**
     * Total number of rows available before pagination is applied.
     */
    total_rows: number;
  }
}

/**
 * `summary` event payload (the report `info` block).
 */
export type ReportStreamCitationsV2Response =
  | ReportStreamCitationsV2Response.CitationsV2Info
  | ReportStreamCitationsV2Response.CitationRow;

export namespace ReportStreamCitationsV2Response {
  /**
   * `summary` event payload (the report `info` block).
   */
  export interface CitationsV2Info {
    /**
     * Analysis types the citations were drawn from.
     */
    analysis_types: Array<string>;

    /**
     * Number of rows returned in `data` for this page.
     */
    count: number;

    /**
     * Echoed request end date (YYYY-MM-DD, ET).
     */
    end_date: string;

    /**
     * Metrics returned per row.
     */
    metrics: Array<string>;

    /**
     * Display names of the models the report covers.
     */
    models: Array<string>;

    /**
     * Citation scope: `all` or `owned`.
     */
    scope: string;

    /**
     * Echoed request start date (YYYY-MM-DD, ET).
     */
    start_date: string;

    /**
     * Echoed normalized filter tree, or null when no filter was sent.
     */
    filter?: { [key: string]: unknown } | null;

    /**
     * Opaque cursor for the next page; null on the last page.
     */
    next_cursor?: string | null;

    /**
     * Total rows matching the query before pagination (null when not computed).
     */
    total_results?: number | null;

    [k: string]: unknown;
  }

  /**
   * `result` event payload — one citation row.
   */
  export interface CitationRow {
    citation_share?: number | null;

    count?: number | null;

    date?: string | null;

    domain?: string | null;

    /**
     * Pages only.
     */
    first_cited_at?: string | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    model?: CitationRow.Model | null;

    page?: string | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    persona?: CitationRow.Persona | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    prompt?: CitationRow.Prompt | null;

    rank?: number | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    region?: CitationRow.Region | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    topic?: CitationRow.Topic | null;

    [k: string]: unknown;
  }

  export namespace CitationRow {
    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Model {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Persona {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Prompt {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Region {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Topic {
      id?: string | null;

      name?: string | null;
    }
  }
}

/**
 * `summary` event payload (the report `info` block).
 */
export type ReportStreamQueryFanoutsResponse =
  | ReportStreamQueryFanoutsResponse.QueryFanoutsV2Info
  | ReportStreamQueryFanoutsResponse.QueryFanoutRow;

export namespace ReportStreamQueryFanoutsResponse {
  /**
   * `summary` event payload (the report `info` block).
   */
  export interface QueryFanoutsV2Info {
    /**
     * Number of rows returned in `data` for this page.
     */
    count: number;

    /**
     * Caveat about which runs the fanout metrics cover.
     */
    coverage_note: string;

    /**
     * Echoed request end date (YYYY-MM-DD, ET).
     */
    end_date: string;

    /**
     * Fanout metrics returned per row.
     */
    metrics: Array<string>;

    /**
     * Display names of the models the report covers.
     */
    models: Array<string>;

    /**
     * Echoed request start date (YYYY-MM-DD, ET).
     */
    start_date: string;

    /**
     * Echoed normalized filter tree, or null when no filter was sent.
     */
    filter?: { [key: string]: unknown } | null;

    /**
     * Opaque cursor for the next page; null on the last page.
     */
    next_cursor?: string | null;

    /**
     * Total rows matching the query before pagination (null when not computed).
     */
    total_results?: number | null;

    [k: string]: unknown;
  }

  /**
   * `result` event payload — one query-fanout row.
   */
  export interface QueryFanoutRow {
    date?: string | null;

    fanouts_per_execution?: number | null;

    model?: string | null;

    prompt?: string | null;

    query?: string | null;

    query_variations?: number | null;

    rank?: number | null;

    region?: string | null;

    share?: number | null;

    total_fanouts?: number | null;

    [k: string]: unknown;
  }
}

/**
 * A streamed sentiment report row payload.
 */
export type ReportStreamSentimentResponse =
  | ReportStreamSentimentResponse.SseSummaryEventData
  | { [key: string]: unknown };

export namespace ReportStreamSentimentResponse {
  export interface SseSummaryEventData {
    /**
     * The normalized query used to build the stream.
     */
    query: { [key: string]: unknown };

    /**
     * Total number of rows available before pagination is applied.
     */
    total_rows: number;
  }
}

/**
 * `summary` event payload (the report `info` block).
 */
export type ReportStreamSentimentV2Response =
  | ReportStreamSentimentV2Response.SentimentV2Info
  | ReportStreamSentimentV2Response.SentimentRow;

export namespace ReportStreamSentimentV2Response {
  /**
   * `summary` event payload (the report `info` block).
   */
  export interface SentimentV2Info {
    /**
     * The analyzed brand name.
     */
    asset: string;

    /**
     * Number of rows returned in `data` for this page.
     */
    count: number;

    /**
     * Echoed request end date (YYYY-MM-DD, ET).
     */
    end_date: string;

    /**
     * Sentiment metrics returned per row.
     */
    metrics: Array<string>;

    /**
     * Display names of the models the report covers.
     */
    models: Array<string>;

    /**
     * Echoed request start date (YYYY-MM-DD, ET).
     */
    start_date: string;

    /**
     * Comparison-window end (when requested).
     */
    comparison_end_date?: string | null;

    /**
     * Comparison-window start (when requested).
     */
    comparison_start_date?: string | null;

    /**
     * Echoed normalized filter tree, or null when no filter was sent.
     */
    filter?: { [key: string]: unknown } | null;

    /**
     * Opaque cursor for the next page; null on the last page.
     */
    next_cursor?: string | null;

    /**
     * Total rows matching the query before pagination (null when not computed).
     */
    total_results?: number | null;

    [k: string]: unknown;
  }

  /**
   * `result` event payload — one sentiment row.
   */
  export interface SentimentRow {
    cited_websites?: Array<string> | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    claim?: SentimentRow.Claim | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    competitor?: SentimentRow.Competitor | null;

    date?: string | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    model?: SentimentRow.Model | null;

    negative_sentiment?: number | null;

    occurrence?: number | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    persona?: SentimentRow.Persona | null;

    positive_sentiment?: number | null;

    prev_date?: string | null;

    /**
     * Comparison-window metrics (when requested).
     */
    previous?: SentimentRow.Previous | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    prompt?: SentimentRow.Prompt | null;

    rank?: number | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    region?: SentimentRow.Region | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    run?: SentimentRow.Run | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    tag?: SentimentRow.Tag | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    theme?: SentimentRow.Theme | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    topic?: SentimentRow.Topic | null;

    [k: string]: unknown;
  }

  export namespace SentimentRow {
    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Claim {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Competitor {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Model {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Persona {
      id?: string | null;

      name?: string | null;
    }

    /**
     * Comparison-window metrics (when requested).
     */
    export interface Previous {
      negative_sentiment?: number | null;

      occurrence?: number | null;

      positive_sentiment?: number | null;

      [k: string]: unknown;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Prompt {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Region {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Run {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Tag {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Theme {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Topic {
      id?: string | null;

      name?: string | null;
    }
  }
}

/**
 * A streamed visibility report row payload.
 */
export type ReportStreamVisibilityResponse =
  | ReportStreamVisibilityResponse.SseSummaryEventData
  | { [key: string]: unknown };

export namespace ReportStreamVisibilityResponse {
  export interface SseSummaryEventData {
    /**
     * The normalized query used to build the stream.
     */
    query: { [key: string]: unknown };

    /**
     * Total number of rows available before pagination is applied.
     */
    total_rows: number;
  }
}

/**
 * `summary` event payload (the report `info` block).
 */
export type ReportStreamVisibilityV2Response =
  | ReportStreamVisibilityV2Response.VisibilityV2Info
  | ReportStreamVisibilityV2Response.VisibilityRow;

export namespace ReportStreamVisibilityV2Response {
  /**
   * `summary` event payload (the report `info` block).
   */
  export interface VisibilityV2Info {
    /**
     * Number of rows returned in `data` for this page.
     */
    count: number;

    /**
     * Echoed request end date (YYYY-MM-DD, ET).
     */
    end_date: string;

    /**
     * Display names of the models the report covers.
     */
    models: Array<string>;

    /**
     * Asset scope: `all` or `owned`.
     */
    scope: string;

    /**
     * Echoed request start date (YYYY-MM-DD, ET).
     */
    start_date: string;

    /**
     * Echoed `assets` selection (filter clause, name, or list), or null.
     */
    asset_filter?: { [key: string]: unknown } | Array<string> | string | null;

    /**
     * Echoed normalized filter tree, or null when no filter was sent.
     */
    filter?: { [key: string]: unknown } | null;

    /**
     * Opaque cursor for the next page; null on the last page.
     */
    next_cursor?: string | null;

    /**
     * Total rows matching the query before pagination (null when not computed).
     */
    total_results?: number | null;

    [k: string]: unknown;
  }

  /**
   * `result` event payload — one visibility row.
   */
  export interface VisibilityRow {
    asset?: VisibilityRow.Asset | null;

    average_position?: number | null;

    date?: string | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    model?: VisibilityRow.Model | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    persona?: VisibilityRow.Persona | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    prompt?: VisibilityRow.Prompt | null;

    /**
     * Asset rank (only when not grouped).
     */
    rank?: number | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    region?: VisibilityRow.Region | null;

    share_of_voice?: number | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    topic?: VisibilityRow.Topic | null;

    visibility_score?: number | null;

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

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Model {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Persona {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Prompt {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Region {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Topic {
      id?: string | null;

      name?: string | null;
    }
  }
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
  metrics: Array<'count' | 'citation_share' | 'share_of_voice' | 'first_cited_at'>;

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

  /**
   * Custom ordering of the report results.
   *
   *     The order is a record of key-value pairs where:
   *     - `key` is the field to order by, which can be a metric or dimension
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

  /**
   * Filter citation pages by whether they mention an owned category asset.
   */
  export interface MentionedFilter {
    field: 'mentioned';

    operator: 'is';

    value: boolean | Array<boolean>;
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
   * Numeric filters applied after report metrics are calculated.
   */
  metric_filters?: Array<ReportGetBotsReportParams.MetricFilter>;

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

export namespace ReportGetBotsReportParams {
  export interface MetricFilter {
    field: string;

    operator: '>' | '>=' | '<' | '<=' | '=' | '==' | '!=';

    value: number;
  }
}

export interface ReportGetBotsReportV2Params {
  /**
   * Domain to query logs for.
   */
  domain: string;

  metrics: Array<'count' | 'citations' | 'indexing' | 'training' | 'last_visit' | 'agents'>;

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
   * Domain UUID used for tag lookups.
   */
  domain_id?: string | null;

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
   * Numeric filters applied after report metrics are calculated.
   */
  metric_filters?: Array<ReportGetBotsReportV2Params.MetricFilter>;

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

  tags?: Array<string>;

  /**
   * IANA timezone name for date bucketing and filter boundaries.
   */
  timezone?: string;
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

  export interface MetricFilter {
    field: string;

    operator: '>' | '>=' | '<' | '<=' | '=' | '==' | '!=';

    value: number;
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
   * Numeric filters applied after report metrics are calculated.
   */
  metric_filters?: Array<ReportGetReferralsReportParams.MetricFilter>;

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
   * Filter by referral source. Values are not enum-constrained so the platform's
   * shared provider filter can pass through IDs that have bot data but no referral
   * data.
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

    value: string | Array<string>;
  }

  export interface MetricFilter {
    field: string;

    operator: '>' | '>=' | '<' | '<=' | '=' | '==' | '!=';

    value: number;
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
   * Numeric filters applied after report metrics are calculated.
   */
  metric_filters?: Array<ReportGetReferralsReportV2Params.MetricFilter>;

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

  /**
   * IANA timezone name for date bucketing and filter boundaries.
   */
  timezone?: string;
}

export namespace ReportGetReferralsReportV2Params {
  /**
   * Filter by referral source. Values are not enum-constrained so the platform's
   * shared provider filter can pass through IDs that have bot data but no referral
   * data.
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

    value: string | Array<string>;
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

  export interface MetricFilter {
    field: string;

    operator: '>' | '>=' | '<' | '<=' | '=' | '==' | '!=';

    value: number;
  }
}

export interface ReportQueryCitationsParams {
  category_id: string;

  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;

  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;

  cursor?: string | null;

  /**
   * What each row represents: `domain` (default), `page`, or `citation_category`.
   * Legacy: `group_by: ["page"]` (with `entity` omitted) is still accepted and is
   * equivalent to `entity: "page"`. `citation_category` uses the dashboard split
   * view: a citation counts under both its page-level and domain-level category, so
   * category shares can sum to more than 100%.
   */
  entity?: 'domain' | 'page' | 'citation_category';

  /**
   * A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.
   */
  filter?: ReportQueryCitationsParams.Filter | null;

  group_by?: Array<'page' | 'date' | 'model' | 'topic' | 'region' | 'persona' | 'prompt'>;

  interval?: 'day' | 'week' | 'month';

  /**
   * Page size; default 10, max 50.
   */
  limit?: number | null;

  /**
   * Stream endpoint only: cap the number of streamed rows (default: all).
   */
  max_results?: number | null;

  metrics?: Array<'count' | 'citation_share' | 'rank' | 'first_cited_at'> | null;

  /**
   * `all` (every cited domain) or `owned` (only your owned domains). Applies to
   * `entity=domain`.
   */
  scope?: 'all' | 'owned';
}

export namespace ReportQueryCitationsParams {
  /**
   * A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.
   */
  export interface Filter {
    and?: Array<unknown> | null;

    field?: string | null;

    not?: unknown;

    op?: string | null;

    or?: Array<unknown> | null;

    value?: unknown;
  }
}

export interface ReportQueryFanoutsParams {
  category_id: string;

  /**
   * End date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   */
  end_date: string;

  metrics: Array<'fanouts_per_execution' | 'total_fanouts' | 'share' | 'query_variations'>;

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
    | Shared.RegionNameFilter
    | Shared.ModelIDFilter
    | Shared.TopicIDFilter
    | Shared.TagIDFilter
    | PromptIDFilter
    | Shared.PersonaIDFilter
    | Shared.AnalysisTypeFilter
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

export interface ReportQueryQueryFanoutsParams {
  category_id: string;

  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;

  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;

  cursor?: string | null;

  /**
   * A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.
   */
  filter?: ReportQueryQueryFanoutsParams.Filter | null;

  group_by?: Array<'date' | 'model' | 'region' | 'prompt' | 'query'>;

  interval?: 'day' | 'week' | 'month';

  /**
   * Page size; default 10, max 50.
   */
  limit?: number | null;

  /**
   * Stream endpoint only: cap the number of streamed rows (default: all).
   */
  max_results?: number | null;

  metrics?: Array<'fanouts_per_execution' | 'total_fanouts' | 'share' | 'query_variations'> | null;

  sort?: ReportQueryQueryFanoutsParams.Sort | null;
}

export namespace ReportQueryQueryFanoutsParams {
  /**
   * A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.
   */
  export interface Filter {
    and?: Array<unknown> | null;

    field?: string | null;

    not?: unknown;

    op?: string | null;

    or?: Array<unknown> | null;

    value?: unknown;
  }

  export interface Sort {
    field: string;

    dir?: 'asc' | 'desc';
  }
}

export interface ReportQuerySentimentParams {
  /**
   * The brand name to analyze (sentiment is extracted on name, not id).
   */
  asset: string;

  category_id: string;

  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;

  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;

  /**
   * YYYY-MM-DD, ET, inclusive (with start).
   */
  comparison_end_date?: string | null;

  /**
   * YYYY-MM-DD, ET, inclusive (with end).
   */
  comparison_start_date?: string | null;

  cursor?: string | null;

  /**
   * A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.
   */
  filter?: ReportQuerySentimentParams.Filter | null;

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

  /**
   * Return cited websites per row (only when grouping by `theme`/`claim`).
   */
  include_cited_websites?: boolean;

  interval?: 'day' | 'week' | 'month';

  /**
   * Page size; default 10, max 50.
   */
  limit?: number | null;

  /**
   * Stream endpoint only: cap the number of streamed rows (default: all).
   */
  max_results?: number | null;

  metrics?: Array<'positive_sentiment' | 'negative_sentiment' | 'occurrence'> | null;

  sort?: ReportQuerySentimentParams.Sort;
}

export namespace ReportQuerySentimentParams {
  /**
   * A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.
   */
  export interface Filter {
    and?: Array<unknown> | null;

    field?: string | null;

    not?: unknown;

    op?: string | null;

    or?: Array<unknown> | null;

    value?: unknown;
  }

  export interface Sort {
    dir?: 'asc' | 'desc';

    field?: 'occurrence' | 'positive_sentiment' | 'negative_sentiment';
  }
}

export interface ReportQueryVisibilityParams {
  category_id: string;

  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;

  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;

  /**
   * A name (`is`), a list (`in`), or {op,value} with op `is`/`in`/`not_in`.
   */
  assets?: string | Array<string> | ReportQueryVisibilityParams.EntityFilterClause | null;

  cursor?: string | null;

  /**
   * A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.
   */
  filter?: ReportQueryVisibilityParams.Filter | null;

  group_by?: Array<'date' | 'model' | 'topic' | 'region' | 'prompt' | 'persona'>;

  interval?: 'day' | 'week' | 'month';

  /**
   * Page size; default 10, max 50.
   */
  limit?: number | null;

  /**
   * Stream endpoint only: cap the number of streamed rows (default: all).
   */
  max_results?: number | null;

  metrics?: Array<'visibility_score' | 'share_of_voice' | 'average_position'> | null;

  scope?: 'owned' | 'all';

  sort?: ReportQueryVisibilityParams.Sort;
}

export namespace ReportQueryVisibilityParams {
  /**
   * Select/exclude the entity, applied outside the data `filter` tree.
   */
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

  /**
   * A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.
   */
  export interface Filter {
    and?: Array<unknown> | null;

    field?: string | null;

    not?: unknown;

    op?: string | null;

    or?: Array<unknown> | null;

    value?: unknown;
  }

  export interface Sort {
    field?: 'visibility_score' | 'share_of_voice' | 'average_position';
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
  /**
   * Filter by asset name
   */
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
}

export interface ReportSentimentV2Params {
  asset_name: string;

  category_id: string;

  /**
   * End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full
   * ISO timestamp.
   */
  end_date: string;

  metrics: Array<'sentiment' | 'occurrence'>;

  /**
   * Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or
   * full ISO timestamp.
   */
  start_date: string;

  /**
   * End of the previous period for delta computation.
   */
  comparison_end_date?: string | null;

  /**
   * Start of the previous period for delta computation.
   */
  comparison_start_date?: string | null;

  /**
   * Date bucket for the report. Only used when dimensions includes date.
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
   * Custom ordering of report results. Dimension keys must also be present in
   * dimensions. The sentiment metric orders by positive_sentiment.
   */
  order_by?: { [key: string]: 'asc' | 'desc' };

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

export interface ReportStreamCitationsParams {
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
  metrics: Array<'count' | 'citation_share' | 'share_of_voice' | 'first_cited_at'>;

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

  /**
   * Custom ordering of the report results.
   *
   *     The order is a record of key-value pairs where:
   *     - `key` is the field to order by, which can be a metric or dimension
   *     - `value` is the direction of the order, either `asc` for ascending or `desc` for descending.
   *
   *     When not specified, the default order is the first metric in the query descending.
   */
  order_by?: { [key: string]: 'asc' | 'desc' };

  /**
   * Offset-based pagination parameters.
   */
  pagination?: Shared.Pagination | null;
}

export namespace ReportStreamCitationsParams {
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

  /**
   * Filter citation pages by whether they mention an owned category asset.
   */
  export interface MentionedFilter {
    field: 'mentioned';

    operator: 'is';

    value: boolean | Array<boolean>;
  }
}

export interface ReportStreamCitationsV2Params {
  category_id: string;

  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;

  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;

  cursor?: string | null;

  /**
   * What each row represents: `domain` (default), `page`, or `citation_category`.
   * Legacy: `group_by: ["page"]` (with `entity` omitted) is still accepted and is
   * equivalent to `entity: "page"`. `citation_category` uses the dashboard split
   * view: a citation counts under both its page-level and domain-level category, so
   * category shares can sum to more than 100%.
   */
  entity?: 'domain' | 'page' | 'citation_category';

  /**
   * A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.
   */
  filter?: ReportStreamCitationsV2Params.Filter | null;

  group_by?: Array<'page' | 'date' | 'model' | 'topic' | 'region' | 'persona' | 'prompt'>;

  interval?: 'day' | 'week' | 'month';

  /**
   * Page size; default 10, max 50.
   */
  limit?: number | null;

  /**
   * Stream endpoint only: cap the number of streamed rows (default: all).
   */
  max_results?: number | null;

  metrics?: Array<'count' | 'citation_share' | 'rank' | 'first_cited_at'> | null;

  /**
   * `all` (every cited domain) or `owned` (only your owned domains). Applies to
   * `entity=domain`.
   */
  scope?: 'all' | 'owned';
}

export namespace ReportStreamCitationsV2Params {
  /**
   * A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.
   */
  export interface Filter {
    and?: Array<unknown> | null;

    field?: string | null;

    not?: unknown;

    op?: string | null;

    or?: Array<unknown> | null;

    value?: unknown;
  }
}

export interface ReportStreamQueryFanoutsParams {
  category_id: string;

  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;

  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;

  cursor?: string | null;

  /**
   * A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.
   */
  filter?: ReportStreamQueryFanoutsParams.Filter | null;

  group_by?: Array<'date' | 'model' | 'region' | 'prompt' | 'query'>;

  interval?: 'day' | 'week' | 'month';

  /**
   * Page size; default 10, max 50.
   */
  limit?: number | null;

  /**
   * Stream endpoint only: cap the number of streamed rows (default: all).
   */
  max_results?: number | null;

  metrics?: Array<'fanouts_per_execution' | 'total_fanouts' | 'share' | 'query_variations'> | null;

  sort?: ReportStreamQueryFanoutsParams.Sort | null;
}

export namespace ReportStreamQueryFanoutsParams {
  /**
   * A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.
   */
  export interface Filter {
    and?: Array<unknown> | null;

    field?: string | null;

    not?: unknown;

    op?: string | null;

    or?: Array<unknown> | null;

    value?: unknown;
  }

  export interface Sort {
    field: string;

    dir?: 'asc' | 'desc';
  }
}

export interface ReportStreamSentimentParams {
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
   * Offset-based pagination parameters.
   */
  pagination?: Shared.Pagination | null;
}

export namespace ReportStreamSentimentParams {
  /**
   * Filter by asset name
   */
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
}

export interface ReportStreamSentimentV2Params {
  /**
   * The brand name to analyze (sentiment is extracted on name, not id).
   */
  asset: string;

  category_id: string;

  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;

  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;

  /**
   * YYYY-MM-DD, ET, inclusive (with start).
   */
  comparison_end_date?: string | null;

  /**
   * YYYY-MM-DD, ET, inclusive (with end).
   */
  comparison_start_date?: string | null;

  cursor?: string | null;

  /**
   * A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.
   */
  filter?: ReportStreamSentimentV2Params.Filter | null;

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

  /**
   * Return cited websites per row (only when grouping by `theme`/`claim`).
   */
  include_cited_websites?: boolean;

  interval?: 'day' | 'week' | 'month';

  /**
   * Page size; default 10, max 50.
   */
  limit?: number | null;

  /**
   * Stream endpoint only: cap the number of streamed rows (default: all).
   */
  max_results?: number | null;

  metrics?: Array<'positive_sentiment' | 'negative_sentiment' | 'occurrence'> | null;

  sort?: ReportStreamSentimentV2Params.Sort;
}

export namespace ReportStreamSentimentV2Params {
  /**
   * A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.
   */
  export interface Filter {
    and?: Array<unknown> | null;

    field?: string | null;

    not?: unknown;

    op?: string | null;

    or?: Array<unknown> | null;

    value?: unknown;
  }

  export interface Sort {
    dir?: 'asc' | 'desc';

    field?: 'occurrence' | 'positive_sentiment' | 'negative_sentiment';
  }
}

export interface ReportStreamVisibilityParams {
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
   * Offset-based pagination parameters.
   */
  pagination?: Shared.Pagination | null;
}

export namespace ReportStreamVisibilityParams {
  /**
   * Filter by asset name
   */
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

export interface ReportStreamVisibilityV2Params {
  category_id: string;

  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;

  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;

  /**
   * A name (`is`), a list (`in`), or {op,value} with op `is`/`in`/`not_in`.
   */
  assets?: string | Array<string> | ReportStreamVisibilityV2Params.EntityFilterClause | null;

  cursor?: string | null;

  /**
   * A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.
   */
  filter?: ReportStreamVisibilityV2Params.Filter | null;

  group_by?: Array<'date' | 'model' | 'topic' | 'region' | 'prompt' | 'persona'>;

  interval?: 'day' | 'week' | 'month';

  /**
   * Page size; default 10, max 50.
   */
  limit?: number | null;

  /**
   * Stream endpoint only: cap the number of streamed rows (default: all).
   */
  max_results?: number | null;

  metrics?: Array<'visibility_score' | 'share_of_voice' | 'average_position'> | null;

  scope?: 'owned' | 'all';

  sort?: ReportStreamVisibilityV2Params.Sort;
}

export namespace ReportStreamVisibilityV2Params {
  /**
   * Select/exclude the entity, applied outside the data `filter` tree.
   */
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

  /**
   * A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.
   */
  export interface Filter {
    and?: Array<unknown> | null;

    field?: string | null;

    not?: unknown;

    op?: string | null;

    or?: Array<unknown> | null;

    value?: unknown;
  }

  export interface Sort {
    field?: 'visibility_score' | 'share_of_voice' | 'average_position';
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
   * Filter by asset name
   */
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

Reports.WebSearchResults = WebSearchResults;
Reports.Shopping = Shopping;
Reports.Accuracy = Accuracy;
Reports.Factcheck = Factcheck;

export declare namespace Reports {
  export {
    type HostnameFilter as HostnameFilter,
    type PromptIDFilter as PromptIDFilter,
    type ReportInfo as ReportInfo,
    type ReportResponse as ReportResponse,
    type ReportResult as ReportResult,
    type RootDomainFilter as RootDomainFilter,
    type TagNameFilter as TagNameFilter,
    type TopicNameFilter as TopicNameFilter,
    type URLFilter as URLFilter,
    type ReportCitationsResponse as ReportCitationsResponse,
    type ReportQueryCitationsResponse as ReportQueryCitationsResponse,
    type ReportQueryQueryFanoutsResponse as ReportQueryQueryFanoutsResponse,
    type ReportQuerySentimentResponse as ReportQuerySentimentResponse,
    type ReportQueryVisibilityResponse as ReportQueryVisibilityResponse,
    type ReportSentimentV2Response as ReportSentimentV2Response,
    type ReportStreamCitationsResponse as ReportStreamCitationsResponse,
    type ReportStreamCitationsV2Response as ReportStreamCitationsV2Response,
    type ReportStreamQueryFanoutsResponse as ReportStreamQueryFanoutsResponse,
    type ReportStreamSentimentResponse as ReportStreamSentimentResponse,
    type ReportStreamSentimentV2Response as ReportStreamSentimentV2Response,
    type ReportStreamVisibilityResponse as ReportStreamVisibilityResponse,
    type ReportStreamVisibilityV2Response as ReportStreamVisibilityV2Response,
    type ReportCitationsParams as ReportCitationsParams,
    type ReportGetBotsReportParams as ReportGetBotsReportParams,
    type ReportGetBotsReportV2Params as ReportGetBotsReportV2Params,
    type ReportGetReferralsReportParams as ReportGetReferralsReportParams,
    type ReportGetReferralsReportV2Params as ReportGetReferralsReportV2Params,
    type ReportQueryCitationsParams as ReportQueryCitationsParams,
    type ReportQueryFanoutsParams as ReportQueryFanoutsParams,
    type ReportQueryQueryFanoutsParams as ReportQueryQueryFanoutsParams,
    type ReportQuerySentimentParams as ReportQuerySentimentParams,
    type ReportQueryVisibilityParams as ReportQueryVisibilityParams,
    type ReportSentimentParams as ReportSentimentParams,
    type ReportSentimentV2Params as ReportSentimentV2Params,
    type ReportStreamCitationsParams as ReportStreamCitationsParams,
    type ReportStreamCitationsV2Params as ReportStreamCitationsV2Params,
    type ReportStreamQueryFanoutsParams as ReportStreamQueryFanoutsParams,
    type ReportStreamSentimentParams as ReportStreamSentimentParams,
    type ReportStreamSentimentV2Params as ReportStreamSentimentV2Params,
    type ReportStreamVisibilityParams as ReportStreamVisibilityParams,
    type ReportStreamVisibilityV2Params as ReportStreamVisibilityV2Params,
    type ReportVisibilityParams as ReportVisibilityParams,
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
    type ShoppingAllItemsWithMerchantsResponse as ShoppingAllItemsWithMerchantsResponse,
    type ShoppingExecutionsResponse as ShoppingExecutionsResponse,
    type ShoppingItemVisibilityResponse as ShoppingItemVisibilityResponse,
    type ShoppingMerchantByItemsResponse as ShoppingMerchantByItemsResponse,
    type ShoppingMerchantDistributionResponse as ShoppingMerchantDistributionResponse,
    type ShoppingMerchantShareResponse as ShoppingMerchantShareResponse,
    type ShoppingMerchantVisibilityByBrandResponse as ShoppingMerchantVisibilityByBrandResponse,
    type ShoppingProductMerchantURLsResponse as ShoppingProductMerchantURLsResponse,
    type ShoppingTriggerRateResponse as ShoppingTriggerRateResponse,
    type ShoppingVisibilityResponse as ShoppingVisibilityResponse,
    type ShoppingAllItemsWithMerchantsParams as ShoppingAllItemsWithMerchantsParams,
    type ShoppingExecutionsParams as ShoppingExecutionsParams,
    type ShoppingItemVisibilityParams as ShoppingItemVisibilityParams,
    type ShoppingMerchantByItemsParams as ShoppingMerchantByItemsParams,
    type ShoppingMerchantDistributionParams as ShoppingMerchantDistributionParams,
    type ShoppingMerchantShareParams as ShoppingMerchantShareParams,
    type ShoppingMerchantVisibilityByBrandParams as ShoppingMerchantVisibilityByBrandParams,
    type ShoppingProductMerchantURLsParams as ShoppingProductMerchantURLsParams,
    type ShoppingTriggerRateParams as ShoppingTriggerRateParams,
    type ShoppingVisibilityParams as ShoppingVisibilityParams,
  };

  export {
    Accuracy as Accuracy,
    type AccuracyCreateBreakdownResponse as AccuracyCreateBreakdownResponse,
    type AccuracyCreateCitationAnalysisResponse as AccuracyCreateCitationAnalysisResponse,
    type AccuracyCreateClaimBreakdownResponse as AccuracyCreateClaimBreakdownResponse,
    type AccuracyCreateClaimCitationsResponse as AccuracyCreateClaimCitationsResponse,
    type AccuracyCreateClusterExampleRunsResponse as AccuracyCreateClusterExampleRunsResponse,
    type AccuracyCreateClusterVerificationPairsResponse as AccuracyCreateClusterVerificationPairsResponse,
    type AccuracyCreateFactcheckSetupStatusResponse as AccuracyCreateFactcheckSetupStatusResponse,
    type AccuracyCreateInaccuracyDriversResponse as AccuracyCreateInaccuracyDriversResponse,
    type AccuracyCreateInaccurateClustersResponse as AccuracyCreateInaccurateClustersResponse,
    type AccuracyCreateInaccurateThemesResponse as AccuracyCreateInaccurateThemesResponse,
    type AccuracyCreateOverviewResponse as AccuracyCreateOverviewResponse,
    type AccuracyCreateTopInaccurateClaimsResponse as AccuracyCreateTopInaccurateClaimsResponse,
    type AccuracyCreateTopicIDsResponse as AccuracyCreateTopicIDsResponse,
    type AccuracyCreateBreakdownParams as AccuracyCreateBreakdownParams,
    type AccuracyCreateCitationAnalysisParams as AccuracyCreateCitationAnalysisParams,
    type AccuracyCreateClaimBreakdownParams as AccuracyCreateClaimBreakdownParams,
    type AccuracyCreateClaimCitationsParams as AccuracyCreateClaimCitationsParams,
    type AccuracyCreateClusterExampleRunsParams as AccuracyCreateClusterExampleRunsParams,
    type AccuracyCreateClusterVerificationPairsParams as AccuracyCreateClusterVerificationPairsParams,
    type AccuracyCreateFactcheckSetupStatusParams as AccuracyCreateFactcheckSetupStatusParams,
    type AccuracyCreateInaccuracyDriversParams as AccuracyCreateInaccuracyDriversParams,
    type AccuracyCreateInaccurateClustersParams as AccuracyCreateInaccurateClustersParams,
    type AccuracyCreateInaccurateThemesParams as AccuracyCreateInaccurateThemesParams,
    type AccuracyCreateOverviewParams as AccuracyCreateOverviewParams,
    type AccuracyCreateTopInaccurateClaimsParams as AccuracyCreateTopInaccurateClaimsParams,
    type AccuracyCreateTopicIDsParams as AccuracyCreateTopicIDsParams,
  };

  export {
    Factcheck as Factcheck,
    type FactcheckQueryScoresResponse as FactcheckQueryScoresResponse,
    type FactcheckStreamScoresResponse as FactcheckStreamScoresResponse,
    type FactcheckQueryScoresParams as FactcheckQueryScoresParams,
    type FactcheckStreamScoresParams as FactcheckStreamScoresParams,
  };
}

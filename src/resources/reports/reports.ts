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
   * Query Sentiment V2
   *
   * @example
   * ```ts
   * const response = await client.reports.querySentimentV2({
   *   asset_name: 'asset_name',
   *   category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   end_date: '2019-12-27T18:11:19.117Z',
   *   metrics: ['sentiment'],
   *   start_date: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  querySentimentV2(
    body: ReportQuerySentimentV2Params,
    options?: RequestOptions,
  ): APIPromise<ReportQuerySentimentV2Response> {
    return this._client.post('/v1/reports/sentiment-v2', { body, ...options });
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
   * Stream Citations
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

  metrics: Array<number>;
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

export interface ReportQuerySentimentV2Response {
  info: ReportQuerySentimentV2Response.Info;

  data?: Array<ReportQuerySentimentV2Response.Data>;
}

export namespace ReportQuerySentimentV2Response {
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

      claim?: string | null;

      claim_id?: string | null;

      created_at?: string | null;

      model_id?: string | null;

      persona_id?: string | null;

      prompt_id?: string | null;

      prompt_text?: string | null;

      region_id?: string | null;

      run_id?: string | null;

      sentiment?: 'positive' | 'negative' | null;

      theme?: string | null;

      theme_id?: string | null;

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

  export interface MetricFilter {
    field: string;

    operator: '>' | '>=' | '<' | '<=' | '=' | '==' | '!=';

    value: number;
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

export interface ReportQuerySentimentV2Params {
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
   * Date interval for the report. Only used when dimensions includes date.
   */
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';

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
    | ReportQuerySentimentV2Params.SentimentV2ModelIDFilter
    | ReportQuerySentimentV2Params.SentimentV2RegionIDFilter
    | ReportQuerySentimentV2Params.SentimentV2TopicIDFilter
    | ReportQuerySentimentV2Params.SentimentV2PromptIDFilter
    | ReportQuerySentimentV2Params.SentimentV2PersonaIDFilter
    | ReportQuerySentimentV2Params.SentimentV2TagIDFilter
    | ReportQuerySentimentV2Params.SentimentV2RunIDFilter
    | ReportQuerySentimentV2Params.SentimentV2ThemeIDFilter
    | ReportQuerySentimentV2Params.SentimentV2ThemeFilter
    | ReportQuerySentimentV2Params.SentimentV2ClaimIDFilter
    | ReportQuerySentimentV2Params.SentimentV2ClaimFilter
    | ReportQuerySentimentV2Params.SentimentV2SentimentFilter
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

export namespace ReportQuerySentimentV2Params {
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

  export interface SentimentV2ThemeIDFilter {
    field: 'theme_id';

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

  export interface SentimentV2ClaimIDFilter {
    field: 'claim_id';

    operator: 'is' | 'not_is' | 'in' | 'not_in';

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

  export interface SentimentV2SentimentFilter {
    field: 'sentiment';

    operator: 'is' | 'not_is' | 'in' | 'not_in';

    value: 'positive' | 'negative' | Array<'positive' | 'negative'>;
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
    type ReportQuerySentimentV2Response as ReportQuerySentimentV2Response,
    type ReportStreamCitationsResponse as ReportStreamCitationsResponse,
    type ReportStreamSentimentResponse as ReportStreamSentimentResponse,
    type ReportStreamVisibilityResponse as ReportStreamVisibilityResponse,
    type ReportCitationsParams as ReportCitationsParams,
    type ReportGetBotsReportParams as ReportGetBotsReportParams,
    type ReportGetBotsReportV2Params as ReportGetBotsReportV2Params,
    type ReportGetReferralsReportParams as ReportGetReferralsReportParams,
    type ReportGetReferralsReportV2Params as ReportGetReferralsReportV2Params,
    type ReportQueryFanoutsParams as ReportQueryFanoutsParams,
    type ReportQuerySentimentV2Params as ReportQuerySentimentV2Params,
    type ReportSentimentParams as ReportSentimentParams,
    type ReportStreamCitationsParams as ReportStreamCitationsParams,
    type ReportStreamSentimentParams as ReportStreamSentimentParams,
    type ReportStreamVisibilityParams as ReportStreamVisibilityParams,
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
}

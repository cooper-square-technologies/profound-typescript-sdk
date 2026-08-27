// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';

export class Accuracy extends APIResource {
  /**
   * Accuracy Overview
   *
   * @param {AccuracyCreateOverviewParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccuracyCreateOverviewResponse>} Successful Response
   *
   * @example
   * ```ts
   * const accuracy = await client.reports.accuracy.createOverview({
   *   start_date: '',
   *   end_date: '',
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   exclude_topic_ids: false,
   *   tag_filter_type: 'any',
   *   include_no_tag: false,
   *   include_no_persona: false,
   *   group_by: 'period',
   * });
   * ```
   */
  createOverview(
    body: AccuracyCreateOverviewParams,
    options?: RequestOptions,
  ): APIPromise<AccuracyCreateOverviewResponse> {
    return this._client.post('/v1/reports/accuracy/overview', { body, ...options });
  }

  /**
   * Accuracy Breakdown
   *
   * @param {AccuracyCreateBreakdownParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccuracyCreateBreakdownResponse>} Successful Response
   *
   * @example
   * ```ts
   * const accuracy = await client.reports.accuracy.createBreakdown({
   *   start_date: '',
   *   end_date: '',
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   exclude_topic_ids: false,
   *   tag_filter_type: 'any',
   *   include_no_tag: false,
   *   include_no_persona: false,
   *   breakdown_by: 'citation',
   *   limit: 10,
   *   offset: 0,
   *   sort_by: 'citationShare',
   *   sort_order: 'desc',
   * });
   * ```
   */
  createBreakdown(
    body: AccuracyCreateBreakdownParams,
    options?: RequestOptions,
  ): APIPromise<AccuracyCreateBreakdownResponse> {
    return this._client.post('/v1/reports/accuracy/breakdown', { body, ...options });
  }

  /**
   * Accuracy Citation Analysis
   *
   * @param {AccuracyCreateCitationAnalysisParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccuracyCreateCitationAnalysisResponse>} Successful Response
   *
   * @example
   * ```ts
   * const accuracy = await client.reports.accuracy.createCitationAnalysis({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   clean_href: '',
   *   start_date: '',
   *   end_date: '',
   * });
   * ```
   */
  createCitationAnalysis(
    body: AccuracyCreateCitationAnalysisParams,
    options?: RequestOptions,
  ): APIPromise<AccuracyCreateCitationAnalysisResponse> {
    return this._client.post('/v1/reports/accuracy/citation-analysis', { body, ...options });
  }

  /**
   * Accuracy Topic Ids
   *
   * @param {AccuracyCreateTopicIDsParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccuracyCreateTopicIDsResponse>} Successful Response
   *
   * @example
   * ```ts
   * const accuracy = await client.reports.accuracy.createTopicIDs({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '',
   *   end_date: '',
   * });
   * ```
   */
  createTopicIDs(
    body: AccuracyCreateTopicIDsParams,
    options?: RequestOptions,
  ): APIPromise<AccuracyCreateTopicIDsResponse> {
    return this._client.post('/v1/reports/accuracy/topic-ids', { body, ...options });
  }

  /**
   * Accuracy Inaccurate Themes
   *
   * @param {AccuracyCreateInaccurateThemesParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccuracyCreateInaccurateThemesResponse>} Successful Response
   *
   * @example
   * ```ts
   * const accuracy = await client.reports.accuracy.createInaccurateThemes({
   *   start_date: '',
   *   end_date: '',
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   exclude_topic_ids: false,
   *   tag_filter_type: 'any',
   *   include_no_tag: false,
   *   include_no_persona: false,
   *   limit: 10,
   *   offset: 0,
   *   sort_by: 'response_share',
   *   sort_order: 'desc',
   * });
   * ```
   */
  createInaccurateThemes(
    body: AccuracyCreateInaccurateThemesParams,
    options?: RequestOptions,
  ): APIPromise<AccuracyCreateInaccurateThemesResponse> {
    return this._client.post('/v1/reports/accuracy/inaccurate-themes', { body, ...options });
  }

  /**
   * Accuracy Inaccurate Clusters
   *
   * @param {AccuracyCreateInaccurateClustersParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccuracyCreateInaccurateClustersResponse>} Successful Response
   *
   * @example
   * ```ts
   * const accuracy = await client.reports.accuracy.createInaccurateClusters({
   *   start_date: '',
   *   end_date: '',
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   exclude_topic_ids: false,
   *   tag_filter_type: 'any',
   *   include_no_tag: false,
   *   include_no_persona: false,
   *   limit: 5000,
   *   offset: 0,
   *   include_models: false,
   * });
   * ```
   */
  createInaccurateClusters(
    body: AccuracyCreateInaccurateClustersParams,
    options?: RequestOptions,
  ): APIPromise<AccuracyCreateInaccurateClustersResponse> {
    return this._client.post('/v1/reports/accuracy/inaccurate-clusters', { body, ...options });
  }

  /**
   * Accuracy Inaccuracy Drivers
   *
   * @param {AccuracyCreateInaccuracyDriversParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccuracyCreateInaccuracyDriversResponse>} Successful Response
   *
   * @example
   * ```ts
   * const accuracy = await client.reports.accuracy.createInaccuracyDrivers({
   *   start_date: '',
   *   end_date: '',
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   exclude_topic_ids: false,
   *   tag_filter_type: 'any',
   *   include_no_tag: false,
   *   include_no_persona: false,
   *   limit: 5,
   * });
   * ```
   */
  createInaccuracyDrivers(
    body: AccuracyCreateInaccuracyDriversParams,
    options?: RequestOptions,
  ): APIPromise<AccuracyCreateInaccuracyDriversResponse> {
    return this._client.post('/v1/reports/accuracy/inaccuracy-drivers', { body, ...options });
  }

  /**
   * Accuracy Top Inaccurate Claims
   *
   * @param {AccuracyCreateTopInaccurateClaimsParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccuracyCreateTopInaccurateClaimsResponse>} Successful Response
   *
   * @example
   * ```ts
   * const accuracy = await client.reports.accuracy.createTopInaccurateClaims({
   *   start_date: '',
   *   end_date: '',
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   exclude_topic_ids: false,
   *   tag_filter_type: 'any',
   *   include_no_tag: false,
   *   include_no_persona: false,
   *   limit: 5,
   * });
   * ```
   */
  createTopInaccurateClaims(
    body: AccuracyCreateTopInaccurateClaimsParams,
    options?: RequestOptions,
  ): APIPromise<AccuracyCreateTopInaccurateClaimsResponse> {
    return this._client.post('/v1/reports/accuracy/top-inaccurate-claims', { body, ...options });
  }

  /**
   * Accuracy Claim Breakdown
   *
   * @param {AccuracyCreateClaimBreakdownParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccuracyCreateClaimBreakdownResponse>} Successful Response
   *
   * @example
   * ```ts
   * const accuracy = await client.reports.accuracy.createClaimBreakdown({
   *   start_date: '',
   *   end_date: '',
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   exclude_topic_ids: false,
   *   tag_filter_type: 'any',
   *   include_no_tag: false,
   *   include_no_persona: false,
   *   cluster_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   */
  createClaimBreakdown(
    body: AccuracyCreateClaimBreakdownParams,
    options?: RequestOptions,
  ): APIPromise<AccuracyCreateClaimBreakdownResponse> {
    return this._client.post('/v1/reports/accuracy/claim-breakdown', { body, ...options });
  }

  /**
   * Accuracy Claim Citations
   *
   * @param {AccuracyCreateClaimCitationsParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccuracyCreateClaimCitationsResponse>} Successful Response
   *
   * @example
   * ```ts
   * const accuracy = await client.reports.accuracy.createClaimCitations({
   *   start_date: '',
   *   end_date: '',
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   exclude_topic_ids: false,
   *   tag_filter_type: 'any',
   *   include_no_tag: false,
   *   include_no_persona: false,
   *   cluster_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   limit: 10,
   *   offset: 0,
   *   sort_order: 'desc',
   * });
   * ```
   */
  createClaimCitations(
    body: AccuracyCreateClaimCitationsParams,
    options?: RequestOptions,
  ): APIPromise<AccuracyCreateClaimCitationsResponse> {
    return this._client.post('/v1/reports/accuracy/claim-citations', { body, ...options });
  }

  /**
   * Accuracy Cluster Example Runs
   *
   * @param {AccuracyCreateClusterExampleRunsParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccuracyCreateClusterExampleRunsResponse>} Successful Response
   *
   * @example
   * ```ts
   * const accuracy = await client.reports.accuracy.createClusterExampleRuns({
   *   start_date: '',
   *   end_date: '',
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   exclude_topic_ids: false,
   *   tag_filter_type: 'any',
   *   include_no_tag: false,
   *   include_no_persona: false,
   *   cluster_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   limit: 20,
   *   offset: 0,
   * });
   * ```
   */
  createClusterExampleRuns(
    body: AccuracyCreateClusterExampleRunsParams,
    options?: RequestOptions,
  ): APIPromise<AccuracyCreateClusterExampleRunsResponse> {
    return this._client.post('/v1/reports/accuracy/cluster-example-runs', { body, ...options });
  }

  /**
   * Accuracy Cluster Verification Pairs
   *
   * @param {AccuracyCreateClusterVerificationPairsParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccuracyCreateClusterVerificationPairsResponse>} Successful Response
   *
   * @example
   * ```ts
   * const accuracy = await client.reports.accuracy.createClusterVerificationPairs({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   cluster_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   */
  createClusterVerificationPairs(
    body: AccuracyCreateClusterVerificationPairsParams,
    options?: RequestOptions,
  ): APIPromise<AccuracyCreateClusterVerificationPairsResponse> {
    return this._client.post('/v1/reports/accuracy/cluster-verification-pairs', { body, ...options });
  }

  /**
   * Accuracy Factcheck Setup Status
   *
   * @param {AccuracyCreateFactcheckSetupStatusParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccuracyCreateFactcheckSetupStatusResponse>} Successful Response
   *
   * @example
   * ```ts
   * const accuracy = await client.reports.accuracy.createFactcheckSetupStatus({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   */
  createFactcheckSetupStatus(
    body: AccuracyCreateFactcheckSetupStatusParams,
    options?: RequestOptions,
  ): APIPromise<AccuracyCreateFactcheckSetupStatusResponse> {
    return this._client.post('/v1/reports/accuracy/factcheck-setup-status', { body, ...options });
  }
}

export interface AccuracyCreateOverviewParams {
  start_date: string;
  end_date: string;
  /**
   * @format uuid
   */
  category_id: string;
  comparison_start_date?: string | null;
  comparison_end_date?: string | null;
  topic_ids?: Array<string> | null;
  /**
   * @default false
   */
  exclude_topic_ids?: boolean;
  tag_ids?: Array<string> | null;
  /**
   * @default any
   */
  tag_filter_type?: 'all' | 'any';
  /**
   * @default false
   */
  include_no_tag?: boolean;
  region_ids?: Array<string> | null;
  platform_ids?: Array<string> | null;
  persona_ids?: Array<string> | null;
  /**
   * @default false
   */
  include_no_persona?: boolean;
  prompt_ids?: Array<string> | null;
  citation_categories?: Array<string> | null;
  date_bucket?: string | null;
  /**
   * @default period
   */
  group_by?: 'period' | 'theme';
}

export interface AccuracyCreateOverviewResponse {
  trendByPeriod: Array<AccuracyCreateOverviewResponse.TrendByPeriod>;
  overallAccuracy: number;
  scoreBreakdown: Array<AccuracyCreateOverviewResponse.ScoreBreakdown>;
  accuracyChange?: number | null;
  themeTrend?: Array<AccuracyCreateOverviewResponse.ThemeTrend> | null;
  availableSeries?: Array<AccuracyCreateOverviewResponse.AvailableSeries> | null;
}

export namespace AccuracyCreateOverviewResponse {
  export interface TrendByPeriod {
    date: string;
    total: number;
    accurate: number;
    ratio: number;
    /**
     * @default 0
     */
    verified?: number;
    prevPeriodData?: unknown;
  }

  export interface ScoreBreakdown {
    status: string;
    count: number;
    share: number;
    countChange?: number | null;
    shareChange?: number | null;
  }

  export interface ThemeTrend {
    id: string;
    label: string;
    data: Array<ThemeTrend.Data>;
  }

  export namespace ThemeTrend {
    export interface Data {
      date: string;
      total: number;
      accurate: number;
      ratio: number;
    }
  }

  export interface AvailableSeries {
    id: string;
    label: string;
    total: number;
  }
}

export interface AccuracyCreateBreakdownParams {
  start_date: string;
  end_date: string;
  /**
   * @format uuid
   */
  category_id: string;
  comparison_start_date?: string | null;
  comparison_end_date?: string | null;
  topic_ids?: Array<string> | null;
  /**
   * @default false
   */
  exclude_topic_ids?: boolean;
  tag_ids?: Array<string> | null;
  /**
   * @default any
   */
  tag_filter_type?: 'all' | 'any';
  /**
   * @default false
   */
  include_no_tag?: boolean;
  region_ids?: Array<string> | null;
  platform_ids?: Array<string> | null;
  persona_ids?: Array<string> | null;
  /**
   * @default false
   */
  include_no_persona?: boolean;
  prompt_ids?: Array<string> | null;
  citation_categories?: Array<string> | null;
  /**
   * @default citation
   */
  breakdown_by?: 'citation' | 'platform' | 'topic' | 'prompt' | 'tag' | 'region' | 'persona' | 'theme';
  group_by?: Array<'platform' | 'topic' | 'prompt' | 'tag' | 'region' | 'persona' | 'theme' | 'date'> | null;
  date_bucket?: string | null;
  /**
   * @default 10
   * @minimum 1
   */
  limit?: number;
  /**
   * @default 0
   * @minimum 0
   */
  offset?: number;
  search_query?: string | null;
  /**
   * @default citationShare
   */
  sort_by?: 'citationShare' | 'accuracy';
  /**
   * @default desc
   */
  sort_order?: 'asc' | 'desc';
  pagination?: AccuracyCreateBreakdownParams.Pagination | null;
}

export namespace AccuracyCreateBreakdownParams {
  export interface Pagination {
    /**
     * @default group
     */
    dimension?: 'group';
    /**
     * @default accuracy
     */
    metric?: 'accuracy' | 'inaccurate_claims';
    /**
     * @default current
     */
    mode?: 'current' | 'delta';
    direction?: 'asc' | 'desc' | null;
  }
}

export interface AccuracyCreateBreakdownResponse {
  data: Array<AccuracyCreateBreakdownResponse.Data>;
  totalCount: number;
}

export namespace AccuracyCreateBreakdownResponse {
  export interface Data {
    id: string;
    name: string;
    share: number;
    responseAccuracy: number;
    inaccurateCount: number;
    groupIds?: Record<string, string> | null;
    groupNames?: Record<string, string> | null;
    shareChange?: number | null;
    accuracyChange?: number | null;
    /**
     * @default 0
     */
    accurateCount?: number;
    inaccurateCountChange?: number | null;
    promptCount?: number | null;
    citationCategory?: string | null;
    /**
     * @default true
     */
    hasScore?: boolean;
  }
}

export interface AccuracyCreateCitationAnalysisParams {
  /**
   * @format uuid
   */
  category_id: string;
  clean_href: string;
  start_date: string;
  end_date: string;
}

export interface AccuracyCreateCitationAnalysisResponse {
  href: string;
  domain: string;
  pageTitle: string;
  markdownContent: string;
  claims?: Array<AccuracyCreateCitationAnalysisResponse.Claim>;
}

export namespace AccuracyCreateCitationAnalysisResponse {
  export interface Claim {
    claimId: string;
    claim: string;
    attributeId: string;
    attribute: string;
    neutralThemeId: string;
    neutralTheme: string;
    snippet: string;
    /**
     * @default negative
     */
    polarity?: 'positive' | 'negative';
    /**
     * @default ""
     */
    kbPath?: string;
    /**
     * @default ""
     */
    kbSnippet?: string;
    /**
     * @default ""
     */
    reasoning?: string;
    evidence?: Array<Claim.Evidence>;
  }

  export namespace Claim {
    export interface Evidence {
      /**
       * @default ""
       */
      kbName?: string;
      /**
       * @default ""
       */
      kbPath?: string;
      /**
       * @default ""
       */
      kbSnippet?: string;
    }
  }
}

export interface AccuracyCreateTopicIDsParams {
  /**
   * @format uuid
   */
  category_id: string;
  start_date: string;
  end_date: string;
}

export type AccuracyCreateTopicIDsResponse = Array<string>;

export interface AccuracyCreateInaccurateThemesParams {
  start_date: string;
  end_date: string;
  /**
   * @format uuid
   */
  category_id: string;
  comparison_start_date?: string | null;
  comparison_end_date?: string | null;
  topic_ids?: Array<string> | null;
  /**
   * @default false
   */
  exclude_topic_ids?: boolean;
  tag_ids?: Array<string> | null;
  /**
   * @default any
   */
  tag_filter_type?: 'all' | 'any';
  /**
   * @default false
   */
  include_no_tag?: boolean;
  region_ids?: Array<string> | null;
  platform_ids?: Array<string> | null;
  persona_ids?: Array<string> | null;
  /**
   * @default false
   */
  include_no_persona?: boolean;
  prompt_ids?: Array<string> | null;
  citation_categories?: Array<string> | null;
  /**
   * @default 10
   * @minimum 1
   */
  limit?: number;
  /**
   * @default 0
   * @minimum 0
   */
  offset?: number;
  /**
   * @default response_share
   */
  sort_by?: 'response_share';
  /**
   * @default desc
   */
  sort_order?: 'asc' | 'desc';
  search_query?: string | null;
}

export interface AccuracyCreateInaccurateThemesResponse {
  data: Array<AccuracyCreateInaccurateThemesResponse.Data>;
  totalCount: number;
}

export namespace AccuracyCreateInaccurateThemesResponse {
  export interface Data {
    themeId: string;
    neutralTheme: string;
    inaccurateClaimCount: number;
    inaccurateClusterCount: number;
    totalClaimCount: number;
    totalClusterCount: number;
    responseCount: number;
    totalResponseCount: number;
    responseShare: number;
    /**
     * @default ""
     */
    description?: string;
    responseShareDelta?: number | null;
  }
}

export interface AccuracyCreateInaccurateClustersParams {
  start_date: string;
  end_date: string;
  /**
   * @format uuid
   */
  category_id: string;
  comparison_start_date?: string | null;
  comparison_end_date?: string | null;
  topic_ids?: Array<string> | null;
  /**
   * @default false
   */
  exclude_topic_ids?: boolean;
  tag_ids?: Array<string> | null;
  /**
   * @default any
   */
  tag_filter_type?: 'all' | 'any';
  /**
   * @default false
   */
  include_no_tag?: boolean;
  region_ids?: Array<string> | null;
  platform_ids?: Array<string> | null;
  persona_ids?: Array<string> | null;
  /**
   * @default false
   */
  include_no_persona?: boolean;
  prompt_ids?: Array<string> | null;
  citation_categories?: Array<string> | null;
  /**
   * @format uuid
   */
  theme_id?: string | null;
  /**
   * @default 5000
   * @minimum 1
   * @maximum 10000
   */
  limit?: number;
  /**
   * @default 0
   * @minimum 0
   */
  offset?: number;
  search_query?: string | null;
  /**
   * @default false
   */
  include_models?: boolean;
}

export interface AccuracyCreateInaccurateClustersResponse {
  data: Array<AccuracyCreateInaccurateClustersResponse.Data>;
  totalCount: number;
}

export namespace AccuracyCreateInaccurateClustersResponse {
  export interface Data {
    clusterId: string;
    canonicalClaim: string;
    kbPath: string;
    kbSnippet: string;
    reasoning: string;
    claimCount: number;
    responseCount: number;
    totalResponseCount: number;
    responseShare: number;
    citationHostnames: Array<string>;
    /**
     * @default ""
     */
    neutralTheme?: string;
    /**
     * @default ""
     */
    description?: string;
    responseShareDelta?: number | null;
    models?: Array<Data.Model> | null;
  }

  export namespace Data {
    export interface Model {
      modelId: string;
      occurrence: number;
    }
  }
}

export interface AccuracyCreateInaccuracyDriversParams {
  start_date: string;
  end_date: string;
  /**
   * @format uuid
   */
  category_id: string;
  comparison_start_date?: string | null;
  comparison_end_date?: string | null;
  topic_ids?: Array<string> | null;
  /**
   * @default false
   */
  exclude_topic_ids?: boolean;
  tag_ids?: Array<string> | null;
  /**
   * @default any
   */
  tag_filter_type?: 'all' | 'any';
  /**
   * @default false
   */
  include_no_tag?: boolean;
  region_ids?: Array<string> | null;
  platform_ids?: Array<string> | null;
  persona_ids?: Array<string> | null;
  /**
   * @default false
   */
  include_no_persona?: boolean;
  prompt_ids?: Array<string> | null;
  citation_categories?: Array<string> | null;
  /**
   * @default 5
   * @minimum 1
   * @maximum 50
   */
  limit?: number;
}

export interface AccuracyCreateInaccuracyDriversResponse {
  data: Array<AccuracyCreateInaccuracyDriversResponse.Data>;
}

export namespace AccuracyCreateInaccuracyDriversResponse {
  export interface Data {
    rowId: string;
    clusterId: string;
    canonicalClaim: string;
    snippet: string;
    snippetClaimId: string;
    claimOccurrence: number;
    href: string;
    citationCategory: string;
    domainCategory: string;
    citationCount: number;
    claimOccurrenceDelta?: number | null;
  }
}

export interface AccuracyCreateTopInaccurateClaimsParams {
  start_date: string;
  end_date: string;
  /**
   * @format uuid
   */
  category_id: string;
  comparison_start_date?: string | null;
  comparison_end_date?: string | null;
  topic_ids?: Array<string> | null;
  /**
   * @default false
   */
  exclude_topic_ids?: boolean;
  tag_ids?: Array<string> | null;
  /**
   * @default any
   */
  tag_filter_type?: 'all' | 'any';
  /**
   * @default false
   */
  include_no_tag?: boolean;
  region_ids?: Array<string> | null;
  platform_ids?: Array<string> | null;
  persona_ids?: Array<string> | null;
  /**
   * @default false
   */
  include_no_persona?: boolean;
  prompt_ids?: Array<string> | null;
  citation_categories?: Array<string> | null;
  /**
   * @default 5
   * @minimum 1
   * @maximum 50
   */
  limit?: number;
}

export interface AccuracyCreateTopInaccurateClaimsResponse {
  data: Array<AccuracyCreateTopInaccurateClaimsResponse.Data>;
}

export namespace AccuracyCreateTopInaccurateClaimsResponse {
  export interface Data {
    clusterId: string;
    canonicalClaim: string;
    claimOccurrence: number;
    claimOccurrenceDelta?: number | null;
  }
}

export interface AccuracyCreateClaimBreakdownParams {
  start_date: string;
  end_date: string;
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * @format uuid
   */
  cluster_id: string;
  comparison_start_date?: string | null;
  comparison_end_date?: string | null;
  topic_ids?: Array<string> | null;
  /**
   * @default false
   */
  exclude_topic_ids?: boolean;
  tag_ids?: Array<string> | null;
  /**
   * @default any
   */
  tag_filter_type?: 'all' | 'any';
  /**
   * @default false
   */
  include_no_tag?: boolean;
  region_ids?: Array<string> | null;
  platform_ids?: Array<string> | null;
  persona_ids?: Array<string> | null;
  /**
   * @default false
   */
  include_no_persona?: boolean;
  prompt_ids?: Array<string> | null;
  citation_categories?: Array<string> | null;
}

export interface AccuracyCreateClaimBreakdownResponse {
  platform: Array<AccuracyCreateClaimBreakdownResponse.Platform>;
  prompt: Array<AccuracyCreateClaimBreakdownResponse.Prompt>;
}

export namespace AccuracyCreateClaimBreakdownResponse {
  export interface Platform {
    id: string;
    label: string;
    responseCount: number;
    totalResponseCount: number;
    responseShare: number;
    prevResponseCount: number;
    prevTotalResponseCount: number;
    responseShareDelta?: number | null;
  }

  export interface Prompt {
    id: string;
    label: string;
    responseCount: number;
    totalResponseCount: number;
    responseShare: number;
    prevResponseCount: number;
    prevTotalResponseCount: number;
    promptId: string;
    promptText: string;
    topicId: string;
    hasCurrent: boolean;
    responseShareDelta?: number | null;
  }
}

export interface AccuracyCreateClaimCitationsParams {
  start_date: string;
  end_date: string;
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * @format uuid
   */
  cluster_id: string;
  comparison_start_date?: string | null;
  comparison_end_date?: string | null;
  topic_ids?: Array<string> | null;
  /**
   * @default false
   */
  exclude_topic_ids?: boolean;
  tag_ids?: Array<string> | null;
  /**
   * @default any
   */
  tag_filter_type?: 'all' | 'any';
  /**
   * @default false
   */
  include_no_tag?: boolean;
  region_ids?: Array<string> | null;
  platform_ids?: Array<string> | null;
  persona_ids?: Array<string> | null;
  /**
   * @default false
   */
  include_no_persona?: boolean;
  prompt_ids?: Array<string> | null;
  citation_categories?: Array<string> | null;
  /**
   * @default 10
   * @minimum 1
   */
  limit?: number;
  /**
   * @default 0
   * @minimum 0
   */
  offset?: number;
  search_query?: string | null;
  /**
   * @default desc
   */
  sort_order?: 'asc' | 'desc';
}

export interface AccuracyCreateClaimCitationsResponse {
  data: Array<AccuracyCreateClaimCitationsResponse.Data>;
  totalCount: number;
}

export namespace AccuracyCreateClaimCitationsResponse {
  export interface Data {
    href: string;
    hostname: string;
    path: string;
    citationCategory: string;
    domainCategory: string;
    snippet: string;
    citationCount: number;
    citationShare: number;
    citationShareDelta?: number | null;
  }
}

export interface AccuracyCreateClusterExampleRunsParams {
  start_date: string;
  end_date: string;
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * @format uuid
   */
  cluster_id: string;
  comparison_start_date?: string | null;
  comparison_end_date?: string | null;
  topic_ids?: Array<string> | null;
  /**
   * @default false
   */
  exclude_topic_ids?: boolean;
  tag_ids?: Array<string> | null;
  /**
   * @default any
   */
  tag_filter_type?: 'all' | 'any';
  /**
   * @default false
   */
  include_no_tag?: boolean;
  region_ids?: Array<string> | null;
  platform_ids?: Array<string> | null;
  persona_ids?: Array<string> | null;
  /**
   * @default false
   */
  include_no_persona?: boolean;
  prompt_ids?: Array<string> | null;
  citation_categories?: Array<string> | null;
  /**
   * @default 20
   * @minimum 1
   */
  limit?: number;
  /**
   * @default 0
   * @minimum 0
   */
  offset?: number;
}

export interface AccuracyCreateClusterExampleRunsResponse {
  data: Array<AccuracyCreateClusterExampleRunsResponse.Data>;
  totalCount: number;
}

export namespace AccuracyCreateClusterExampleRunsResponse {
  export interface Data {
    runId: string;
    claim: string;
    responseSnippet: string;
    modelId: string;
    regionId: string;
    createdAt: string;
  }
}

export interface AccuracyCreateClusterVerificationPairsParams {
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * @format uuid
   */
  cluster_id: string;
}

export interface AccuracyCreateClusterVerificationPairsResponse {
  data: Array<AccuracyCreateClusterVerificationPairsResponse.Data>;
  clusterReasoning?: string | null;
}

export namespace AccuracyCreateClusterVerificationPairsResponse {
  export interface Data {
    pairId: string;
    snippetIdx: number;
    kbPath: string;
    quote: string;
    reasoning: string;
    sourceUpdatedAt?: string | null;
  }
}

export interface AccuracyCreateFactcheckSetupStatusParams {
  /**
   * @format uuid
   */
  category_id: string;
}

export interface AccuracyCreateFactcheckSetupStatusResponse {
  activeAccuracyPromptCount: number;
  hasVerificationData: boolean;
  isSetupComplete: boolean;
  setupCreatedAt?: string | null;
  setupKnowledgeBaseId?: string | null;
}
export declare namespace Accuracy {
  export {
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
}

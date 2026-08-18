// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import type * as Shared from '../shared';

export class Accuracy extends APIResource {
  /**
   * Accuracy Overview
   *
   * @param {AccuracyOverviewV1OverviewPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccuracyOverviewV1OverviewPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const overviewV1OverviewPost = await client.reports.accuracy.overviewV1OverviewPost({
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
  overviewV1OverviewPost(
    body: AccuracyOverviewV1OverviewPostParams,
    options?: RequestOptions,
  ): APIPromise<AccuracyOverviewV1OverviewPostResponse> {
    return this._client.post('/v1/reports/accuracy/overview', { body, ...options });
  }

  /**
   * Accuracy Breakdown
   *
   * @param {AccuracyBreakdownV1BreakdownPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccuracyBreakdownV1BreakdownPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const breakdownV1BreakdownPost = await client.reports.accuracy.breakdownV1BreakdownPost({
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
  breakdownV1BreakdownPost(
    body: AccuracyBreakdownV1BreakdownPostParams,
    options?: RequestOptions,
  ): APIPromise<AccuracyBreakdownV1BreakdownPostResponse> {
    return this._client.post('/v1/reports/accuracy/breakdown', { body, ...options });
  }

  /**
   * Accuracy Citation Analysis
   *
   * @param {AccuracyCitationAnalysisV1CitationAnalysisPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccuracyCitationAnalysisV1CitationAnalysisPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const citationAnalysisV1CitationAnalysisPost =
   *   await client.reports.accuracy.citationAnalysisV1CitationAnalysisPost({
   *     category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *     clean_href: '',
   *     start_date: '',
   *     end_date: '',
   *   });
   * ```
   */
  citationAnalysisV1CitationAnalysisPost(
    body: AccuracyCitationAnalysisV1CitationAnalysisPostParams,
    options?: RequestOptions,
  ): APIPromise<AccuracyCitationAnalysisV1CitationAnalysisPostResponse> {
    return this._client.post('/v1/reports/accuracy/citation-analysis', { body, ...options });
  }

  /**
   * Accuracy Topic Ids
   *
   * @param {AccuracyTopicIDsV1TopicIDsPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccuracyTopicIDsV1TopicIDsPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const topicIDsV1TopicIDsPost = await client.reports.accuracy.topicIDsV1TopicIDsPost({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '',
   *   end_date: '',
   * });
   * ```
   */
  topicIDsV1TopicIDsPost(
    body: AccuracyTopicIDsV1TopicIDsPostParams,
    options?: RequestOptions,
  ): APIPromise<AccuracyTopicIDsV1TopicIDsPostResponse> {
    return this._client.post('/v1/reports/accuracy/topic-ids', { body, ...options });
  }

  /**
   * Accuracy Inaccurate Themes
   *
   * @param {AccuracyInaccurateThemesV1InaccurateThemesPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccuracyInaccurateThemesV1InaccurateThemesPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const inaccurateThemesV1InaccurateThemesPost =
   *   await client.reports.accuracy.inaccurateThemesV1InaccurateThemesPost({
   *     start_date: '',
   *     end_date: '',
   *     category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *     exclude_topic_ids: false,
   *     tag_filter_type: 'any',
   *     include_no_tag: false,
   *     include_no_persona: false,
   *     limit: 10,
   *     offset: 0,
   *     sort_by: 'response_share',
   *     sort_order: 'desc',
   *   });
   * ```
   */
  inaccurateThemesV1InaccurateThemesPost(
    body: AccuracyInaccurateThemesV1InaccurateThemesPostParams,
    options?: RequestOptions,
  ): APIPromise<AccuracyInaccurateThemesV1InaccurateThemesPostResponse> {
    return this._client.post('/v1/reports/accuracy/inaccurate-themes', { body, ...options });
  }

  /**
   * Accuracy Inaccurate Clusters
   *
   * @param {AccuracyInaccurateClustersV1InaccurateClustersPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccuracyInaccurateClustersV1InaccurateClustersPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const inaccurateClustersV1InaccurateClustersPost =
   *   await client.reports.accuracy.inaccurateClustersV1InaccurateClustersPost({
   *     start_date: '',
   *     end_date: '',
   *     category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *     exclude_topic_ids: false,
   *     tag_filter_type: 'any',
   *     include_no_tag: false,
   *     include_no_persona: false,
   *     limit: 5000,
   *     offset: 0,
   *     include_models: false,
   *   });
   * ```
   */
  inaccurateClustersV1InaccurateClustersPost(
    body: AccuracyInaccurateClustersV1InaccurateClustersPostParams,
    options?: RequestOptions,
  ): APIPromise<AccuracyInaccurateClustersV1InaccurateClustersPostResponse> {
    return this._client.post('/v1/reports/accuracy/inaccurate-clusters', { body, ...options });
  }

  /**
   * Accuracy Inaccuracy Drivers
   *
   * @param {AccuracyInaccuracyDriversV1InaccuracyDriversPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccuracyInaccuracyDriversV1InaccuracyDriversPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const inaccuracyDriversV1InaccuracyDriversPost =
   *   await client.reports.accuracy.inaccuracyDriversV1InaccuracyDriversPost({
   *     start_date: '',
   *     end_date: '',
   *     category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *     exclude_topic_ids: false,
   *     tag_filter_type: 'any',
   *     include_no_tag: false,
   *     include_no_persona: false,
   *     limit: 5,
   *   });
   * ```
   */
  inaccuracyDriversV1InaccuracyDriversPost(
    body: AccuracyInaccuracyDriversV1InaccuracyDriversPostParams,
    options?: RequestOptions,
  ): APIPromise<AccuracyInaccuracyDriversV1InaccuracyDriversPostResponse> {
    return this._client.post('/v1/reports/accuracy/inaccuracy-drivers', { body, ...options });
  }

  /**
   * Accuracy Top Inaccurate Claims
   *
   * @param {AccuracyTopInaccurateClaimsV1TopInaccurateClaimsPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccuracyTopInaccurateClaimsV1TopInaccurateClaimsPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const topInaccurateClaimsV1TopInaccurateClaimsPost =
   *   await client.reports.accuracy.topInaccurateClaimsV1TopInaccurateClaimsPost({
   *     start_date: '',
   *     end_date: '',
   *     category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *     exclude_topic_ids: false,
   *     tag_filter_type: 'any',
   *     include_no_tag: false,
   *     include_no_persona: false,
   *     limit: 5,
   *   });
   * ```
   */
  topInaccurateClaimsV1TopInaccurateClaimsPost(
    body: AccuracyTopInaccurateClaimsV1TopInaccurateClaimsPostParams,
    options?: RequestOptions,
  ): APIPromise<AccuracyTopInaccurateClaimsV1TopInaccurateClaimsPostResponse> {
    return this._client.post('/v1/reports/accuracy/top-inaccurate-claims', { body, ...options });
  }

  /**
   * Accuracy Claim Breakdown
   *
   * @param {AccuracyClaimBreakdownV1ClaimBreakdownPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccuracyClaimBreakdownV1ClaimBreakdownPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const claimBreakdownV1ClaimBreakdownPost = await client.reports.accuracy.claimBreakdownV1ClaimBreakdownPost({
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
  claimBreakdownV1ClaimBreakdownPost(
    body: AccuracyClaimBreakdownV1ClaimBreakdownPostParams,
    options?: RequestOptions,
  ): APIPromise<AccuracyClaimBreakdownV1ClaimBreakdownPostResponse> {
    return this._client.post('/v1/reports/accuracy/claim-breakdown', { body, ...options });
  }

  /**
   * Accuracy Claim Citations
   *
   * @param {AccuracyClaimCitationsV1ClaimCitationsPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccuracyClaimCitationsV1ClaimCitationsPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const claimCitationsV1ClaimCitationsPost = await client.reports.accuracy.claimCitationsV1ClaimCitationsPost({
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
  claimCitationsV1ClaimCitationsPost(
    body: AccuracyClaimCitationsV1ClaimCitationsPostParams,
    options?: RequestOptions,
  ): APIPromise<AccuracyClaimCitationsV1ClaimCitationsPostResponse> {
    return this._client.post('/v1/reports/accuracy/claim-citations', { body, ...options });
  }

  /**
   * Accuracy Cluster Example Runs
   *
   * @param {AccuracyClusterExampleRunsV1ClusterExampleRunsPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccuracyClusterExampleRunsV1ClusterExampleRunsPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const clusterExampleRunsV1ClusterExampleRunsPost =
   *   await client.reports.accuracy.clusterExampleRunsV1ClusterExampleRunsPost({
   *     start_date: '',
   *     end_date: '',
   *     category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *     exclude_topic_ids: false,
   *     tag_filter_type: 'any',
   *     include_no_tag: false,
   *     include_no_persona: false,
   *     cluster_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *     limit: 20,
   *     offset: 0,
   *   });
   * ```
   */
  clusterExampleRunsV1ClusterExampleRunsPost(
    body: AccuracyClusterExampleRunsV1ClusterExampleRunsPostParams,
    options?: RequestOptions,
  ): APIPromise<AccuracyClusterExampleRunsV1ClusterExampleRunsPostResponse> {
    return this._client.post('/v1/reports/accuracy/cluster-example-runs', { body, ...options });
  }

  /**
   * Accuracy Cluster Verification Pairs
   *
   * @param {AccuracyClusterVerificationPairsV1ClusterVerificationPairsPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccuracyClusterVerificationPairsV1ClusterVerificationPairsPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const clusterVerificationPairsV1ClusterVerificationPairsPost =
   *   await client.reports.accuracy.clusterVerificationPairsV1ClusterVerificationPairsPost({
   *     category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *     cluster_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   });
   * ```
   */
  clusterVerificationPairsV1ClusterVerificationPairsPost(
    body: AccuracyClusterVerificationPairsV1ClusterVerificationPairsPostParams,
    options?: RequestOptions,
  ): APIPromise<AccuracyClusterVerificationPairsV1ClusterVerificationPairsPostResponse> {
    return this._client.post('/v1/reports/accuracy/cluster-verification-pairs', { body, ...options });
  }

  /**
   * Accuracy Factcheck Setup Status
   *
   * @param {AccuracyFactcheckSetupStatusV1FactcheckSetupStatusPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccuracyFactcheckSetupStatusV1FactcheckSetupStatusPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const factcheckSetupStatusV1FactcheckSetupStatusPost =
   *   await client.reports.accuracy.factcheckSetupStatusV1FactcheckSetupStatusPost({
   *     category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   });
   * ```
   */
  factcheckSetupStatusV1FactcheckSetupStatusPost(
    body: AccuracyFactcheckSetupStatusV1FactcheckSetupStatusPostParams,
    options?: RequestOptions,
  ): APIPromise<AccuracyFactcheckSetupStatusV1FactcheckSetupStatusPostResponse> {
    return this._client.post('/v1/reports/accuracy/factcheck-setup-status', { body, ...options });
  }
}

export interface AccuracyOverviewQuery {
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

export interface AccuracyBreakdownQuery {
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
  pagination?: AccuracyBreakdownQuery.Pagination | null;
}

export namespace AccuracyBreakdownQuery {
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

export interface AccuracyCitationAnalysisQuery {
  /**
   * @format uuid
   */
  category_id: string;
  clean_href: string;
  start_date: string;
  end_date: string;
}

export interface AccuracyTopicIDsQuery {
  /**
   * @format uuid
   */
  category_id: string;
  start_date: string;
  end_date: string;
}

export interface InaccurateThemesQuery {
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

export interface InaccurateClustersQuery {
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

export interface InaccuracyDriversQuery {
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

export interface TopInaccurateClaimsQuery {
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

export interface ClaimBreakdownQuery {
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

export interface ClaimCitationsQuery {
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

export interface ClusterExampleRunsQuery {
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

export interface ClusterVerificationPairsQuery {
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * @format uuid
   */
  cluster_id: string;
}

export interface FactCheckSetupStatusQuery {
  /**
   * @format uuid
   */
  category_id: string;
}

export interface AccuracyOverviewV1OverviewPostParams {
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

export interface AccuracyOverviewV1OverviewPostResponse {
  trendByPeriod: Array<Shared.AccuracyTrendPoint>;
  overallAccuracy: number;
  scoreBreakdown: Array<AccuracyOverviewV1OverviewPostResponse.ScoreBreakdown>;
  accuracyChange?: number | null;
  themeTrend?: Array<AccuracyOverviewV1OverviewPostResponse.ThemeTrend> | null;
  availableSeries?: Array<AccuracyOverviewV1OverviewPostResponse.AvailableSeries> | null;
}

export namespace AccuracyOverviewV1OverviewPostResponse {
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

export interface AccuracyBreakdownV1BreakdownPostParams {
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
  pagination?: AccuracyBreakdownV1BreakdownPostParams.Pagination | null;
}

export namespace AccuracyBreakdownV1BreakdownPostParams {
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

export interface AccuracyBreakdownV1BreakdownPostResponse {
  data: Array<AccuracyBreakdownV1BreakdownPostResponse.Data>;
  totalCount: number;
}

export namespace AccuracyBreakdownV1BreakdownPostResponse {
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

export interface AccuracyCitationAnalysisV1CitationAnalysisPostParams {
  /**
   * @format uuid
   */
  category_id: string;
  clean_href: string;
  start_date: string;
  end_date: string;
}

export interface AccuracyCitationAnalysisV1CitationAnalysisPostResponse {
  href: string;
  domain: string;
  pageTitle: string;
  markdownContent: string;
  claims?: Array<AccuracyCitationAnalysisV1CitationAnalysisPostResponse.Claim>;
}

export namespace AccuracyCitationAnalysisV1CitationAnalysisPostResponse {
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

export interface AccuracyTopicIDsV1TopicIDsPostParams {
  /**
   * @format uuid
   */
  category_id: string;
  start_date: string;
  end_date: string;
}

export type AccuracyTopicIDsV1TopicIDsPostResponse = Array<string>;

export interface AccuracyInaccurateThemesV1InaccurateThemesPostParams {
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

export interface AccuracyInaccurateThemesV1InaccurateThemesPostResponse {
  data: Array<AccuracyInaccurateThemesV1InaccurateThemesPostResponse.Data>;
  totalCount: number;
}

export namespace AccuracyInaccurateThemesV1InaccurateThemesPostResponse {
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

export interface AccuracyInaccurateClustersV1InaccurateClustersPostParams {
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

export interface AccuracyInaccurateClustersV1InaccurateClustersPostResponse {
  data: Array<AccuracyInaccurateClustersV1InaccurateClustersPostResponse.Data>;
  totalCount: number;
}

export namespace AccuracyInaccurateClustersV1InaccurateClustersPostResponse {
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

export interface AccuracyInaccuracyDriversV1InaccuracyDriversPostParams {
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

export interface AccuracyInaccuracyDriversV1InaccuracyDriversPostResponse {
  data: Array<AccuracyInaccuracyDriversV1InaccuracyDriversPostResponse.Data>;
}

export namespace AccuracyInaccuracyDriversV1InaccuracyDriversPostResponse {
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

export interface AccuracyTopInaccurateClaimsV1TopInaccurateClaimsPostParams {
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

export interface AccuracyTopInaccurateClaimsV1TopInaccurateClaimsPostResponse {
  data: Array<AccuracyTopInaccurateClaimsV1TopInaccurateClaimsPostResponse.Data>;
}

export namespace AccuracyTopInaccurateClaimsV1TopInaccurateClaimsPostResponse {
  export interface Data {
    clusterId: string;
    canonicalClaim: string;
    claimOccurrence: number;
    claimOccurrenceDelta?: number | null;
  }
}

export interface AccuracyClaimBreakdownV1ClaimBreakdownPostParams {
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

export interface AccuracyClaimBreakdownV1ClaimBreakdownPostResponse {
  platform: Array<AccuracyClaimBreakdownV1ClaimBreakdownPostResponse.Platform>;
  prompt: Array<AccuracyClaimBreakdownV1ClaimBreakdownPostResponse.Prompt>;
}

export namespace AccuracyClaimBreakdownV1ClaimBreakdownPostResponse {
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

export interface AccuracyClaimCitationsV1ClaimCitationsPostParams {
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

export interface AccuracyClaimCitationsV1ClaimCitationsPostResponse {
  data: Array<AccuracyClaimCitationsV1ClaimCitationsPostResponse.Data>;
  totalCount: number;
}

export namespace AccuracyClaimCitationsV1ClaimCitationsPostResponse {
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

export interface AccuracyClusterExampleRunsV1ClusterExampleRunsPostParams {
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

export interface AccuracyClusterExampleRunsV1ClusterExampleRunsPostResponse {
  data: Array<AccuracyClusterExampleRunsV1ClusterExampleRunsPostResponse.Data>;
  totalCount: number;
}

export namespace AccuracyClusterExampleRunsV1ClusterExampleRunsPostResponse {
  export interface Data {
    runId: string;
    claim: string;
    responseSnippet: string;
    modelId: string;
    regionId: string;
    createdAt: string;
  }
}

export interface AccuracyClusterVerificationPairsV1ClusterVerificationPairsPostParams {
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * @format uuid
   */
  cluster_id: string;
}

export interface AccuracyClusterVerificationPairsV1ClusterVerificationPairsPostResponse {
  data: Array<AccuracyClusterVerificationPairsV1ClusterVerificationPairsPostResponse.Data>;
  clusterReasoning?: string | null;
}

export namespace AccuracyClusterVerificationPairsV1ClusterVerificationPairsPostResponse {
  export interface Data {
    pairId: string;
    snippetIdx: number;
    kbPath: string;
    quote: string;
    reasoning: string;
    sourceUpdatedAt?: string | null;
  }
}

export interface AccuracyFactcheckSetupStatusV1FactcheckSetupStatusPostParams {
  /**
   * @format uuid
   */
  category_id: string;
}

export interface AccuracyFactcheckSetupStatusV1FactcheckSetupStatusPostResponse {
  activeAccuracyPromptCount: number;
  hasVerificationData: boolean;
  isSetupComplete: boolean;
  setupCreatedAt?: string | null;
  setupKnowledgeBaseId?: string | null;
}
export declare namespace Accuracy {
  export {
    type AccuracyOverviewQuery as AccuracyOverviewQuery,
    type AccuracyBreakdownQuery as AccuracyBreakdownQuery,
    type AccuracyCitationAnalysisQuery as AccuracyCitationAnalysisQuery,
    type AccuracyTopicIDsQuery as AccuracyTopicIDsQuery,
    type InaccurateThemesQuery as InaccurateThemesQuery,
    type InaccurateClustersQuery as InaccurateClustersQuery,
    type InaccuracyDriversQuery as InaccuracyDriversQuery,
    type TopInaccurateClaimsQuery as TopInaccurateClaimsQuery,
    type ClaimBreakdownQuery as ClaimBreakdownQuery,
    type ClaimCitationsQuery as ClaimCitationsQuery,
    type ClusterExampleRunsQuery as ClusterExampleRunsQuery,
    type ClusterVerificationPairsQuery as ClusterVerificationPairsQuery,
    type FactCheckSetupStatusQuery as FactCheckSetupStatusQuery,
    type AccuracyOverviewV1OverviewPostResponse as AccuracyOverviewV1OverviewPostResponse,
    type AccuracyBreakdownV1BreakdownPostResponse as AccuracyBreakdownV1BreakdownPostResponse,
    type AccuracyCitationAnalysisV1CitationAnalysisPostResponse as AccuracyCitationAnalysisV1CitationAnalysisPostResponse,
    type AccuracyTopicIDsV1TopicIDsPostResponse as AccuracyTopicIDsV1TopicIDsPostResponse,
    type AccuracyInaccurateThemesV1InaccurateThemesPostResponse as AccuracyInaccurateThemesV1InaccurateThemesPostResponse,
    type AccuracyInaccurateClustersV1InaccurateClustersPostResponse as AccuracyInaccurateClustersV1InaccurateClustersPostResponse,
    type AccuracyInaccuracyDriversV1InaccuracyDriversPostResponse as AccuracyInaccuracyDriversV1InaccuracyDriversPostResponse,
    type AccuracyTopInaccurateClaimsV1TopInaccurateClaimsPostResponse as AccuracyTopInaccurateClaimsV1TopInaccurateClaimsPostResponse,
    type AccuracyClaimBreakdownV1ClaimBreakdownPostResponse as AccuracyClaimBreakdownV1ClaimBreakdownPostResponse,
    type AccuracyClaimCitationsV1ClaimCitationsPostResponse as AccuracyClaimCitationsV1ClaimCitationsPostResponse,
    type AccuracyClusterExampleRunsV1ClusterExampleRunsPostResponse as AccuracyClusterExampleRunsV1ClusterExampleRunsPostResponse,
    type AccuracyClusterVerificationPairsV1ClusterVerificationPairsPostResponse as AccuracyClusterVerificationPairsV1ClusterVerificationPairsPostResponse,
    type AccuracyFactcheckSetupStatusV1FactcheckSetupStatusPostResponse as AccuracyFactcheckSetupStatusV1FactcheckSetupStatusPostResponse,
    type AccuracyOverviewV1OverviewPostParams as AccuracyOverviewV1OverviewPostParams,
    type AccuracyBreakdownV1BreakdownPostParams as AccuracyBreakdownV1BreakdownPostParams,
    type AccuracyCitationAnalysisV1CitationAnalysisPostParams as AccuracyCitationAnalysisV1CitationAnalysisPostParams,
    type AccuracyTopicIDsV1TopicIDsPostParams as AccuracyTopicIDsV1TopicIDsPostParams,
    type AccuracyInaccurateThemesV1InaccurateThemesPostParams as AccuracyInaccurateThemesV1InaccurateThemesPostParams,
    type AccuracyInaccurateClustersV1InaccurateClustersPostParams as AccuracyInaccurateClustersV1InaccurateClustersPostParams,
    type AccuracyInaccuracyDriversV1InaccuracyDriversPostParams as AccuracyInaccuracyDriversV1InaccuracyDriversPostParams,
    type AccuracyTopInaccurateClaimsV1TopInaccurateClaimsPostParams as AccuracyTopInaccurateClaimsV1TopInaccurateClaimsPostParams,
    type AccuracyClaimBreakdownV1ClaimBreakdownPostParams as AccuracyClaimBreakdownV1ClaimBreakdownPostParams,
    type AccuracyClaimCitationsV1ClaimCitationsPostParams as AccuracyClaimCitationsV1ClaimCitationsPostParams,
    type AccuracyClusterExampleRunsV1ClusterExampleRunsPostParams as AccuracyClusterExampleRunsV1ClusterExampleRunsPostParams,
    type AccuracyClusterVerificationPairsV1ClusterVerificationPairsPostParams as AccuracyClusterVerificationPairsV1ClusterVerificationPairsPostParams,
    type AccuracyFactcheckSetupStatusV1FactcheckSetupStatusPostParams as AccuracyFactcheckSetupStatusV1FactcheckSetupStatusPostParams,
  };
}

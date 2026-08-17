// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";

export class Accuracy extends APIResource {
  /**
   * Accuracy Overview
   *
   * @param {AccuracyOverviewV1ReportsOverviewPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccuracyOverviewV1ReportsOverviewPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const overviewV1ReportsOverviewPost = await client.reports.accuracy.overviewV1ReportsOverviewPost({
   *   start_date: "",
   *   end_date: "",
   *   category_id: "",
   *   exclude_topic_ids: false,
   *   tag_filter_type: "any",
   *   include_no_tag: true,
   *   include_no_persona: true,
   *   group_by: "period",
   * });
   * ```
   */
  overviewV1ReportsOverviewPost(body: AccuracyOverviewV1ReportsOverviewPostParams, options?: RequestOptions): APIPromise<AccuracyOverviewV1ReportsOverviewPostResponse> {
    return this._client.post("/v1/reports/accuracy/overview", { body: body, ...options });
  }

  /**
   * Accuracy Breakdown
   *
   * @param {AccuracyBreakdownV1ReportsBreakdownPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccuracyBreakdownV1ReportsBreakdownPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const breakdownV1ReportsBreakdownPost = await client.reports.accuracy.breakdownV1ReportsBreakdownPost({
   *   start_date: "",
   *   end_date: "",
   *   category_id: "",
   *   exclude_topic_ids: false,
   *   tag_filter_type: "any",
   *   include_no_tag: true,
   *   include_no_persona: true,
   *   breakdown_by: "citation",
   *   limit: 10,
   *   offset: 0,
   *   sort_by: "citationShare",
   *   sort_order: "desc",
   * });
   * ```
   */
  breakdownV1ReportsBreakdownPost(body: AccuracyBreakdownV1ReportsBreakdownPostParams, options?: RequestOptions): APIPromise<AccuracyBreakdownV1ReportsBreakdownPostResponse> {
    return this._client.post("/v1/reports/accuracy/breakdown", { body: body, ...options });
  }

  /**
   * Accuracy Citation Analysis
   *
   * @param {AccuracyCitationAnalysisV1ReportsCitationAnalysisPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccuracyCitationAnalysisV1ReportsCitationAnalysisPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const citationAnalysisV1ReportsCitationAnalysisPost = await client.reports.accuracy.citationAnalysisV1ReportsCitationAnalysisPost({
   *   category_id: "",
   *   clean_href: "",
   *   start_date: "",
   *   end_date: "",
   * });
   * ```
   */
  citationAnalysisV1ReportsCitationAnalysisPost(body: AccuracyCitationAnalysisV1ReportsCitationAnalysisPostParams, options?: RequestOptions): APIPromise<AccuracyCitationAnalysisV1ReportsCitationAnalysisPostResponse> {
    return this._client.post("/v1/reports/accuracy/citation-analysis", { body: body, ...options });
  }

  /**
   * Accuracy Topic Ids
   *
   * @param {AccuracyTopicIDsV1ReportsTopicIDsPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccuracyTopicIDsV1ReportsTopicIDsPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const topicIDsV1ReportsTopicIDsPost = await client.reports.accuracy.topicIDsV1ReportsTopicIDsPost({
   *   category_id: "",
   *   start_date: "",
   *   end_date: "",
   * });
   * ```
   */
  topicIDsV1ReportsTopicIDsPost(body: AccuracyTopicIDsV1ReportsTopicIDsPostParams, options?: RequestOptions): APIPromise<AccuracyTopicIDsV1ReportsTopicIDsPostResponse> {
    return this._client.post("/v1/reports/accuracy/topic-ids", { body: body, ...options });
  }

  /**
   * Accuracy Inaccurate Themes
   *
   * @param {AccuracyInaccurateThemesV1ReportsInaccurateThemesPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccuracyInaccurateThemesV1ReportsInaccurateThemesPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const inaccurateThemesV1ReportsInaccurateThemesPost = await client.reports.accuracy.inaccurateThemesV1ReportsInaccurateThemesPost({
   *   start_date: "",
   *   end_date: "",
   *   category_id: "",
   *   exclude_topic_ids: false,
   *   tag_filter_type: "any",
   *   include_no_tag: true,
   *   include_no_persona: true,
   *   limit: 10,
   *   offset: 0,
   *   sort_by: "response_share",
   *   sort_order: "desc",
   * });
   * ```
   */
  inaccurateThemesV1ReportsInaccurateThemesPost(body: AccuracyInaccurateThemesV1ReportsInaccurateThemesPostParams, options?: RequestOptions): APIPromise<AccuracyInaccurateThemesV1ReportsInaccurateThemesPostResponse> {
    return this._client.post("/v1/reports/accuracy/inaccurate-themes", { body: body, ...options });
  }

  /**
   * Accuracy Inaccurate Clusters
   *
   * @param {AccuracyInaccurateClustersV1ReportsInaccurateClustersPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccuracyInaccurateClustersV1ReportsInaccurateClustersPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const inaccurateClustersV1ReportsInaccurateClustersPost = await client.reports.accuracy.inaccurateClustersV1ReportsInaccurateClustersPost({
   *   start_date: "",
   *   end_date: "",
   *   category_id: "",
   *   exclude_topic_ids: false,
   *   tag_filter_type: "any",
   *   include_no_tag: true,
   *   include_no_persona: true,
   *   theme_id: "",
   *   limit: 5000,
   *   offset: 0,
   * });
   * ```
   */
  inaccurateClustersV1ReportsInaccurateClustersPost(body: AccuracyInaccurateClustersV1ReportsInaccurateClustersPostParams, options?: RequestOptions): APIPromise<AccuracyInaccurateClustersV1ReportsInaccurateClustersPostResponse> {
    return this._client.post("/v1/reports/accuracy/inaccurate-clusters", { body: body, ...options });
  }

  /**
   * Accuracy Inaccuracy Drivers
   *
   * @param {AccuracyInaccuracyDriversV1ReportsInaccuracyDriversPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccuracyInaccuracyDriversV1ReportsInaccuracyDriversPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const inaccuracyDriversV1ReportsInaccuracyDriversPost = await client.reports.accuracy.inaccuracyDriversV1ReportsInaccuracyDriversPost({
   *   start_date: "",
   *   end_date: "",
   *   category_id: "",
   *   exclude_topic_ids: false,
   *   tag_filter_type: "any",
   *   include_no_tag: true,
   *   include_no_persona: true,
   *   limit: 5,
   * });
   * ```
   */
  inaccuracyDriversV1ReportsInaccuracyDriversPost(body: AccuracyInaccuracyDriversV1ReportsInaccuracyDriversPostParams, options?: RequestOptions): APIPromise<AccuracyInaccuracyDriversV1ReportsInaccuracyDriversPostResponse> {
    return this._client.post("/v1/reports/accuracy/inaccuracy-drivers", { body: body, ...options });
  }

  /**
   * Accuracy Top Inaccurate Claims
   *
   * @param {AccuracyTopInaccurateClaimsV1ReportsTopInaccurateClaimsPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccuracyTopInaccurateClaimsV1ReportsTopInaccurateClaimsPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const topInaccurateClaimsV1ReportsTopInaccurateClaimsPost = await client.reports.accuracy.topInaccurateClaimsV1ReportsTopInaccurateClaimsPost({
   *   start_date: "",
   *   end_date: "",
   *   category_id: "",
   *   exclude_topic_ids: false,
   *   tag_filter_type: "any",
   *   include_no_tag: true,
   *   include_no_persona: true,
   *   limit: 5,
   * });
   * ```
   */
  topInaccurateClaimsV1ReportsTopInaccurateClaimsPost(body: AccuracyTopInaccurateClaimsV1ReportsTopInaccurateClaimsPostParams, options?: RequestOptions): APIPromise<AccuracyTopInaccurateClaimsV1ReportsTopInaccurateClaimsPostResponse> {
    return this._client.post("/v1/reports/accuracy/top-inaccurate-claims", { body: body, ...options });
  }

  /**
   * Accuracy Claim Breakdown
   *
   * @param {AccuracyClaimBreakdownV1ReportsClaimBreakdownPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccuracyClaimBreakdownV1ReportsClaimBreakdownPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const claimBreakdownV1ReportsClaimBreakdownPost = await client.reports.accuracy.claimBreakdownV1ReportsClaimBreakdownPost({
   *   start_date: "",
   *   end_date: "",
   *   category_id: "",
   *   exclude_topic_ids: false,
   *   tag_filter_type: "any",
   *   include_no_tag: true,
   *   include_no_persona: true,
   *   cluster_id: "",
   * });
   * ```
   */
  claimBreakdownV1ReportsClaimBreakdownPost(body: AccuracyClaimBreakdownV1ReportsClaimBreakdownPostParams, options?: RequestOptions): APIPromise<AccuracyClaimBreakdownV1ReportsClaimBreakdownPostResponse> {
    return this._client.post("/v1/reports/accuracy/claim-breakdown", { body: body, ...options });
  }

  /**
   * Accuracy Claim Citations
   *
   * @param {AccuracyClaimCitationsV1ReportsClaimCitationsPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccuracyClaimCitationsV1ReportsClaimCitationsPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const claimCitationsV1ReportsClaimCitationsPost = await client.reports.accuracy.claimCitationsV1ReportsClaimCitationsPost({
   *   start_date: "",
   *   end_date: "",
   *   category_id: "",
   *   exclude_topic_ids: false,
   *   tag_filter_type: "any",
   *   include_no_tag: true,
   *   include_no_persona: true,
   *   cluster_id: "",
   *   limit: 10,
   *   offset: 0,
   *   sort_order: "desc",
   * });
   * ```
   */
  claimCitationsV1ReportsClaimCitationsPost(body: AccuracyClaimCitationsV1ReportsClaimCitationsPostParams, options?: RequestOptions): APIPromise<AccuracyClaimCitationsV1ReportsClaimCitationsPostResponse> {
    return this._client.post("/v1/reports/accuracy/claim-citations", { body: body, ...options });
  }

  /**
   * Accuracy Cluster Example Runs
   *
   * @param {AccuracyClusterExampleRunsV1ReportsClusterExampleRunsPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccuracyClusterExampleRunsV1ReportsClusterExampleRunsPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const clusterExampleRunsV1ReportsClusterExampleRunsPost = await client.reports.accuracy.clusterExampleRunsV1ReportsClusterExampleRunsPost({
   *   category_id: "",
   *   cluster_id: "",
   *   start_date: "",
   *   end_date: "",
   *   limit: 20,
   *   offset: 0,
   * });
   * ```
   */
  clusterExampleRunsV1ReportsClusterExampleRunsPost(body: AccuracyClusterExampleRunsV1ReportsClusterExampleRunsPostParams, options?: RequestOptions): APIPromise<AccuracyClusterExampleRunsV1ReportsClusterExampleRunsPostResponse> {
    return this._client.post("/v1/reports/accuracy/cluster-example-runs", { body: body, ...options });
  }

  /**
   * Accuracy Cluster Verification Pairs
   *
   * @param {AccuracyClusterVerificationPairsV1ReportsClusterVerificationPairsPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccuracyClusterVerificationPairsV1ReportsClusterVerificationPairsPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const clusterVerificationPairsV1ReportsClusterVerificationPairsPost = await client.reports.accuracy.clusterVerificationPairsV1ReportsClusterVerificationPairsPost({
   *   category_id: "",
   *   cluster_id: "",
   * });
   * ```
   */
  clusterVerificationPairsV1ReportsClusterVerificationPairsPost(body: AccuracyClusterVerificationPairsV1ReportsClusterVerificationPairsPostParams, options?: RequestOptions): APIPromise<AccuracyClusterVerificationPairsV1ReportsClusterVerificationPairsPostResponse> {
    return this._client.post("/v1/reports/accuracy/cluster-verification-pairs", { body: body, ...options });
  }

  /**
   * Accuracy Factcheck Setup Status
   *
   * @param {AccuracyFactcheckSetupStatusV1ReportsFactcheckSetupStatusPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccuracyFactcheckSetupStatusV1ReportsFactcheckSetupStatusPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const factcheckSetupStatusV1ReportsFactcheckSetupStatusPost = await client.reports.accuracy.factcheckSetupStatusV1ReportsFactcheckSetupStatusPost({
   *   category_id: "",
   * });
   * ```
   */
  factcheckSetupStatusV1ReportsFactcheckSetupStatusPost(body: AccuracyFactcheckSetupStatusV1ReportsFactcheckSetupStatusPostParams, options?: RequestOptions): APIPromise<AccuracyFactcheckSetupStatusV1ReportsFactcheckSetupStatusPostResponse> {
    return this._client.post("/v1/reports/accuracy/factcheck-setup-status", { body: body, ...options });
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
  tag_filter_type?: "all" | "any";
  /**
   * @default true
   */
  include_no_tag?: boolean;
  region_ids?: Array<string> | null;
  platform_ids?: Array<string> | null;
  persona_ids?: Array<string> | null;
  /**
   * @default true
   */
  include_no_persona?: boolean;
  prompt_ids?: Array<string> | null;
  citation_categories?: Array<string> | null;
  date_bucket?: string | null;
  /**
   * @default period
   */
  group_by?: "period" | "theme";
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
  tag_filter_type?: "all" | "any";
  /**
   * @default true
   */
  include_no_tag?: boolean;
  region_ids?: Array<string> | null;
  platform_ids?: Array<string> | null;
  persona_ids?: Array<string> | null;
  /**
   * @default true
   */
  include_no_persona?: boolean;
  prompt_ids?: Array<string> | null;
  citation_categories?: Array<string> | null;
  /**
   * @default citation
   */
  breakdown_by?: "citation" | "platform" | "topic" | "prompt" | "tag" | "region" | "persona";
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
  sort_by?: "citationShare" | "accuracy";
  /**
   * @default desc
   */
  sort_order?: "asc" | "desc";
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
  tag_filter_type?: "all" | "any";
  /**
   * @default true
   */
  include_no_tag?: boolean;
  region_ids?: Array<string> | null;
  platform_ids?: Array<string> | null;
  persona_ids?: Array<string> | null;
  /**
   * @default true
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
  sort_by?: "response_share";
  /**
   * @default desc
   */
  sort_order?: "asc" | "desc";
  search_query?: string | null;
}

export interface InaccurateClustersQuery {
  start_date: string;
  end_date: string;
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * @format uuid
   */
  theme_id: string;
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
  tag_filter_type?: "all" | "any";
  /**
   * @default true
   */
  include_no_tag?: boolean;
  region_ids?: Array<string> | null;
  platform_ids?: Array<string> | null;
  persona_ids?: Array<string> | null;
  /**
   * @default true
   */
  include_no_persona?: boolean;
  prompt_ids?: Array<string> | null;
  citation_categories?: Array<string> | null;
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
  tag_filter_type?: "all" | "any";
  /**
   * @default true
   */
  include_no_tag?: boolean;
  region_ids?: Array<string> | null;
  platform_ids?: Array<string> | null;
  persona_ids?: Array<string> | null;
  /**
   * @default true
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
  tag_filter_type?: "all" | "any";
  /**
   * @default true
   */
  include_no_tag?: boolean;
  region_ids?: Array<string> | null;
  platform_ids?: Array<string> | null;
  persona_ids?: Array<string> | null;
  /**
   * @default true
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
  tag_filter_type?: "all" | "any";
  /**
   * @default true
   */
  include_no_tag?: boolean;
  region_ids?: Array<string> | null;
  platform_ids?: Array<string> | null;
  persona_ids?: Array<string> | null;
  /**
   * @default true
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
  tag_filter_type?: "all" | "any";
  /**
   * @default true
   */
  include_no_tag?: boolean;
  region_ids?: Array<string> | null;
  platform_ids?: Array<string> | null;
  persona_ids?: Array<string> | null;
  /**
   * @default true
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
  sort_order?: "asc" | "desc";
}

export interface ClusterExampleRunsQuery {
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * @format uuid
   */
  cluster_id: string;
  start_date: string;
  end_date: string;
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

export interface AccuracyOverviewV1ReportsOverviewPostParams {
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
  tag_filter_type?: "all" | "any";
  /**
   * @default true
   */
  include_no_tag?: boolean;
  region_ids?: Array<string> | null;
  platform_ids?: Array<string> | null;
  persona_ids?: Array<string> | null;
  /**
   * @default true
   */
  include_no_persona?: boolean;
  prompt_ids?: Array<string> | null;
  citation_categories?: Array<string> | null;
  date_bucket?: string | null;
  /**
   * @default period
   */
  group_by?: "period" | "theme";
}

export interface AccuracyOverviewV1ReportsOverviewPostResponse {
  trendByPeriod: Array<AccuracyOverviewV1ReportsOverviewPostResponse.TrendByPeriod>;
  overallAccuracy: number;
  scoreBreakdown: Array<AccuracyOverviewV1ReportsOverviewPostResponse.ScoreBreakdown>;
  accuracyChange?: number | null;
  themeTrend?: Array<AccuracyOverviewV1ReportsOverviewPostResponse.ThemeTrend> | null;
  availableSeries?: Array<AccuracyOverviewV1ReportsOverviewPostResponse.AvailableSery> | null;
}

export namespace AccuracyOverviewV1ReportsOverviewPostResponse {
  export interface TrendByPeriod {
    date: string;
    total: number;
    accurate: number;
    ratio: number;
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

  export interface AvailableSery {
    id: string;
    label: string;
    total: number;
  }
}

export interface AccuracyBreakdownV1ReportsBreakdownPostParams {
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
  tag_filter_type?: "all" | "any";
  /**
   * @default true
   */
  include_no_tag?: boolean;
  region_ids?: Array<string> | null;
  platform_ids?: Array<string> | null;
  persona_ids?: Array<string> | null;
  /**
   * @default true
   */
  include_no_persona?: boolean;
  prompt_ids?: Array<string> | null;
  citation_categories?: Array<string> | null;
  /**
   * @default citation
   */
  breakdown_by?: "citation" | "platform" | "topic" | "prompt" | "tag" | "region" | "persona";
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
  sort_by?: "citationShare" | "accuracy";
  /**
   * @default desc
   */
  sort_order?: "asc" | "desc";
}

export interface AccuracyBreakdownV1ReportsBreakdownPostResponse {
  data: Array<AccuracyBreakdownV1ReportsBreakdownPostResponse.Data>;
  totalCount: number;
}

export namespace AccuracyBreakdownV1ReportsBreakdownPostResponse {
  export interface Data {
    id: string;
    name: string;
    share: number;
    responseAccuracy: number;
    inaccurateCount: number;
    shareChange?: number | null;
    accuracyChange?: number | null;
    inaccurateCountChange?: number | null;
    promptCount?: number | null;
    citationCategory?: string | null;
  }
}

export interface AccuracyCitationAnalysisV1ReportsCitationAnalysisPostParams {
  /**
   * @format uuid
   */
  category_id: string;
  clean_href: string;
  start_date: string;
  end_date: string;
}

export interface AccuracyCitationAnalysisV1ReportsCitationAnalysisPostResponse {
  href: string;
  domain: string;
  pageTitle: string;
  markdownContent: string;
  claims?: Array<AccuracyCitationAnalysisV1ReportsCitationAnalysisPostResponse.Claim>;
}

export namespace AccuracyCitationAnalysisV1ReportsCitationAnalysisPostResponse {
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
    polarity?: "positive" | "negative";
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

export interface AccuracyTopicIDsV1ReportsTopicIDsPostParams {
  /**
   * @format uuid
   */
  category_id: string;
  start_date: string;
  end_date: string;
}

export type AccuracyTopicIDsV1ReportsTopicIDsPostResponse = Array<string>;

export interface AccuracyInaccurateThemesV1ReportsInaccurateThemesPostParams {
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
  tag_filter_type?: "all" | "any";
  /**
   * @default true
   */
  include_no_tag?: boolean;
  region_ids?: Array<string> | null;
  platform_ids?: Array<string> | null;
  persona_ids?: Array<string> | null;
  /**
   * @default true
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
  sort_by?: "response_share";
  /**
   * @default desc
   */
  sort_order?: "asc" | "desc";
  search_query?: string | null;
}

export interface AccuracyInaccurateThemesV1ReportsInaccurateThemesPostResponse {
  data: Array<AccuracyInaccurateThemesV1ReportsInaccurateThemesPostResponse.Data>;
  totalCount: number;
}

export namespace AccuracyInaccurateThemesV1ReportsInaccurateThemesPostResponse {
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

export interface AccuracyInaccurateClustersV1ReportsInaccurateClustersPostParams {
  start_date: string;
  end_date: string;
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * @format uuid
   */
  theme_id: string;
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
  tag_filter_type?: "all" | "any";
  /**
   * @default true
   */
  include_no_tag?: boolean;
  region_ids?: Array<string> | null;
  platform_ids?: Array<string> | null;
  persona_ids?: Array<string> | null;
  /**
   * @default true
   */
  include_no_persona?: boolean;
  prompt_ids?: Array<string> | null;
  citation_categories?: Array<string> | null;
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
}

export interface AccuracyInaccurateClustersV1ReportsInaccurateClustersPostResponse {
  data: Array<AccuracyInaccurateClustersV1ReportsInaccurateClustersPostResponse.Data>;
  totalCount: number;
}

export namespace AccuracyInaccurateClustersV1ReportsInaccurateClustersPostResponse {
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
    description?: string;
    responseShareDelta?: number | null;
  }
}

export interface AccuracyInaccuracyDriversV1ReportsInaccuracyDriversPostParams {
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
  tag_filter_type?: "all" | "any";
  /**
   * @default true
   */
  include_no_tag?: boolean;
  region_ids?: Array<string> | null;
  platform_ids?: Array<string> | null;
  persona_ids?: Array<string> | null;
  /**
   * @default true
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

export interface AccuracyInaccuracyDriversV1ReportsInaccuracyDriversPostResponse {
  data: Array<AccuracyInaccuracyDriversV1ReportsInaccuracyDriversPostResponse.Data>;
}

export namespace AccuracyInaccuracyDriversV1ReportsInaccuracyDriversPostResponse {
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

export interface AccuracyTopInaccurateClaimsV1ReportsTopInaccurateClaimsPostParams {
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
  tag_filter_type?: "all" | "any";
  /**
   * @default true
   */
  include_no_tag?: boolean;
  region_ids?: Array<string> | null;
  platform_ids?: Array<string> | null;
  persona_ids?: Array<string> | null;
  /**
   * @default true
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

export interface AccuracyTopInaccurateClaimsV1ReportsTopInaccurateClaimsPostResponse {
  data: Array<AccuracyTopInaccurateClaimsV1ReportsTopInaccurateClaimsPostResponse.Data>;
}

export namespace AccuracyTopInaccurateClaimsV1ReportsTopInaccurateClaimsPostResponse {
  export interface Data {
    clusterId: string;
    canonicalClaim: string;
    claimOccurrence: number;
    claimOccurrenceDelta?: number | null;
  }
}

export interface AccuracyClaimBreakdownV1ReportsClaimBreakdownPostParams {
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
  tag_filter_type?: "all" | "any";
  /**
   * @default true
   */
  include_no_tag?: boolean;
  region_ids?: Array<string> | null;
  platform_ids?: Array<string> | null;
  persona_ids?: Array<string> | null;
  /**
   * @default true
   */
  include_no_persona?: boolean;
  prompt_ids?: Array<string> | null;
  citation_categories?: Array<string> | null;
}

export interface AccuracyClaimBreakdownV1ReportsClaimBreakdownPostResponse {
  platform: Array<AccuracyClaimBreakdownV1ReportsClaimBreakdownPostResponse.Platform>;
  prompt: Array<AccuracyClaimBreakdownV1ReportsClaimBreakdownPostResponse.Prompt>;
}

export namespace AccuracyClaimBreakdownV1ReportsClaimBreakdownPostResponse {
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

export interface AccuracyClaimCitationsV1ReportsClaimCitationsPostParams {
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
  tag_filter_type?: "all" | "any";
  /**
   * @default true
   */
  include_no_tag?: boolean;
  region_ids?: Array<string> | null;
  platform_ids?: Array<string> | null;
  persona_ids?: Array<string> | null;
  /**
   * @default true
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
  sort_order?: "asc" | "desc";
}

export interface AccuracyClaimCitationsV1ReportsClaimCitationsPostResponse {
  data: Array<AccuracyClaimCitationsV1ReportsClaimCitationsPostResponse.Data>;
  totalCount: number;
}

export namespace AccuracyClaimCitationsV1ReportsClaimCitationsPostResponse {
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

export interface AccuracyClusterExampleRunsV1ReportsClusterExampleRunsPostParams {
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * @format uuid
   */
  cluster_id: string;
  start_date: string;
  end_date: string;
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

export interface AccuracyClusterExampleRunsV1ReportsClusterExampleRunsPostResponse {
  data: Array<AccuracyClusterExampleRunsV1ReportsClusterExampleRunsPostResponse.Data>;
  totalCount: number;
}

export namespace AccuracyClusterExampleRunsV1ReportsClusterExampleRunsPostResponse {
  export interface Data {
    runId: string;
    claim: string;
    responseSnippet: string;
    modelId: string;
    regionId: string;
    createdAt: string;
  }
}

export interface AccuracyClusterVerificationPairsV1ReportsClusterVerificationPairsPostParams {
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * @format uuid
   */
  cluster_id: string;
}

export interface AccuracyClusterVerificationPairsV1ReportsClusterVerificationPairsPostResponse {
  data: Array<AccuracyClusterVerificationPairsV1ReportsClusterVerificationPairsPostResponse.Data>;
  clusterReasoning?: string | null;
}

export namespace AccuracyClusterVerificationPairsV1ReportsClusterVerificationPairsPostResponse {
  export interface Data {
    pairId: string;
    snippetIdx: number;
    kbPath: string;
    quote: string;
    reasoning: string;
    sourceUpdatedAt?: string | null;
  }
}

export interface AccuracyFactcheckSetupStatusV1ReportsFactcheckSetupStatusPostParams {
  /**
   * @format uuid
   */
  category_id: string;
}

export interface AccuracyFactcheckSetupStatusV1ReportsFactcheckSetupStatusPostResponse {
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
    type AccuracyOverviewV1ReportsOverviewPostResponse as AccuracyOverviewV1ReportsOverviewPostResponse,
    type AccuracyBreakdownV1ReportsBreakdownPostResponse as AccuracyBreakdownV1ReportsBreakdownPostResponse,
    type AccuracyCitationAnalysisV1ReportsCitationAnalysisPostResponse as AccuracyCitationAnalysisV1ReportsCitationAnalysisPostResponse,
    type AccuracyTopicIDsV1ReportsTopicIDsPostResponse as AccuracyTopicIDsV1ReportsTopicIDsPostResponse,
    type AccuracyInaccurateThemesV1ReportsInaccurateThemesPostResponse as AccuracyInaccurateThemesV1ReportsInaccurateThemesPostResponse,
    type AccuracyInaccurateClustersV1ReportsInaccurateClustersPostResponse as AccuracyInaccurateClustersV1ReportsInaccurateClustersPostResponse,
    type AccuracyInaccuracyDriversV1ReportsInaccuracyDriversPostResponse as AccuracyInaccuracyDriversV1ReportsInaccuracyDriversPostResponse,
    type AccuracyTopInaccurateClaimsV1ReportsTopInaccurateClaimsPostResponse as AccuracyTopInaccurateClaimsV1ReportsTopInaccurateClaimsPostResponse,
    type AccuracyClaimBreakdownV1ReportsClaimBreakdownPostResponse as AccuracyClaimBreakdownV1ReportsClaimBreakdownPostResponse,
    type AccuracyClaimCitationsV1ReportsClaimCitationsPostResponse as AccuracyClaimCitationsV1ReportsClaimCitationsPostResponse,
    type AccuracyClusterExampleRunsV1ReportsClusterExampleRunsPostResponse as AccuracyClusterExampleRunsV1ReportsClusterExampleRunsPostResponse,
    type AccuracyClusterVerificationPairsV1ReportsClusterVerificationPairsPostResponse as AccuracyClusterVerificationPairsV1ReportsClusterVerificationPairsPostResponse,
    type AccuracyFactcheckSetupStatusV1ReportsFactcheckSetupStatusPostResponse as AccuracyFactcheckSetupStatusV1ReportsFactcheckSetupStatusPostResponse,
    type AccuracyOverviewV1ReportsOverviewPostParams as AccuracyOverviewV1ReportsOverviewPostParams,
    type AccuracyBreakdownV1ReportsBreakdownPostParams as AccuracyBreakdownV1ReportsBreakdownPostParams,
    type AccuracyCitationAnalysisV1ReportsCitationAnalysisPostParams as AccuracyCitationAnalysisV1ReportsCitationAnalysisPostParams,
    type AccuracyTopicIDsV1ReportsTopicIDsPostParams as AccuracyTopicIDsV1ReportsTopicIDsPostParams,
    type AccuracyInaccurateThemesV1ReportsInaccurateThemesPostParams as AccuracyInaccurateThemesV1ReportsInaccurateThemesPostParams,
    type AccuracyInaccurateClustersV1ReportsInaccurateClustersPostParams as AccuracyInaccurateClustersV1ReportsInaccurateClustersPostParams,
    type AccuracyInaccuracyDriversV1ReportsInaccuracyDriversPostParams as AccuracyInaccuracyDriversV1ReportsInaccuracyDriversPostParams,
    type AccuracyTopInaccurateClaimsV1ReportsTopInaccurateClaimsPostParams as AccuracyTopInaccurateClaimsV1ReportsTopInaccurateClaimsPostParams,
    type AccuracyClaimBreakdownV1ReportsClaimBreakdownPostParams as AccuracyClaimBreakdownV1ReportsClaimBreakdownPostParams,
    type AccuracyClaimCitationsV1ReportsClaimCitationsPostParams as AccuracyClaimCitationsV1ReportsClaimCitationsPostParams,
    type AccuracyClusterExampleRunsV1ReportsClusterExampleRunsPostParams as AccuracyClusterExampleRunsV1ReportsClusterExampleRunsPostParams,
    type AccuracyClusterVerificationPairsV1ReportsClusterVerificationPairsPostParams as AccuracyClusterVerificationPairsV1ReportsClusterVerificationPairsPostParams,
    type AccuracyFactcheckSetupStatusV1ReportsFactcheckSetupStatusPostParams as AccuracyFactcheckSetupStatusV1ReportsFactcheckSetupStatusPostParams,
  };
}
export { Accuracy as AccuracyResource };

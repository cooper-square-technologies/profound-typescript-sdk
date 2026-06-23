// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Accuracy extends APIResource {
  /**
   * Accuracy Breakdown
   *
   * @example
   * ```ts
   * const response =
   *   await client.reports.accuracy.createBreakdown({
   *     category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     end_date: 'end_date',
   *     start_date: 'start_date',
   *   });
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
   * @example
   * ```ts
   * const response =
   *   await client.reports.accuracy.createCitationAnalysis({
   *     category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     clean_href: 'clean_href',
   *     end_date: 'end_date',
   *     start_date: 'start_date',
   *   });
   * ```
   */
  createCitationAnalysis(
    body: AccuracyCreateCitationAnalysisParams,
    options?: RequestOptions,
  ): APIPromise<AccuracyCreateCitationAnalysisResponse> {
    return this._client.post('/v1/reports/accuracy/citation-analysis', { body, ...options });
  }

  /**
   * Accuracy Claim Breakdown
   *
   * @example
   * ```ts
   * const response =
   *   await client.reports.accuracy.createClaimBreakdown({
   *     category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     cluster_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     end_date: 'end_date',
   *     start_date: 'start_date',
   *   });
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
   * @example
   * ```ts
   * const response =
   *   await client.reports.accuracy.createClaimCitations({
   *     category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     cluster_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     end_date: 'end_date',
   *     start_date: 'start_date',
   *   });
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
   * @example
   * ```ts
   * const response =
   *   await client.reports.accuracy.createClusterExampleRuns({
   *     category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     cluster_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     end_date: 'end_date',
   *     start_date: 'start_date',
   *   });
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
   * @example
   * ```ts
   * const response =
   *   await client.reports.accuracy.createClusterVerificationPairs(
   *     {
   *       category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       cluster_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     },
   *   );
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
   * @example
   * ```ts
   * const response =
   *   await client.reports.accuracy.createFactcheckSetupStatus({
   *     category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   });
   * ```
   */
  createFactcheckSetupStatus(
    body: AccuracyCreateFactcheckSetupStatusParams,
    options?: RequestOptions,
  ): APIPromise<AccuracyCreateFactcheckSetupStatusResponse> {
    return this._client.post('/v1/reports/accuracy/factcheck-setup-status', { body, ...options });
  }

  /**
   * Accuracy Inaccuracy Drivers
   *
   * @example
   * ```ts
   * const response =
   *   await client.reports.accuracy.createInaccuracyDrivers({
   *     category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     end_date: 'end_date',
   *     start_date: 'start_date',
   *   });
   * ```
   */
  createInaccuracyDrivers(
    body: AccuracyCreateInaccuracyDriversParams,
    options?: RequestOptions,
  ): APIPromise<AccuracyCreateInaccuracyDriversResponse> {
    return this._client.post('/v1/reports/accuracy/inaccuracy-drivers', { body, ...options });
  }

  /**
   * Accuracy Inaccurate Clusters
   *
   * @example
   * ```ts
   * const response =
   *   await client.reports.accuracy.createInaccurateClusters({
   *     category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     end_date: 'end_date',
   *     start_date: 'start_date',
   *     theme_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   });
   * ```
   */
  createInaccurateClusters(
    body: AccuracyCreateInaccurateClustersParams,
    options?: RequestOptions,
  ): APIPromise<AccuracyCreateInaccurateClustersResponse> {
    return this._client.post('/v1/reports/accuracy/inaccurate-clusters', { body, ...options });
  }

  /**
   * Accuracy Inaccurate Themes
   *
   * @example
   * ```ts
   * const response =
   *   await client.reports.accuracy.createInaccurateThemes({
   *     category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     end_date: 'end_date',
   *     start_date: 'start_date',
   *   });
   * ```
   */
  createInaccurateThemes(
    body: AccuracyCreateInaccurateThemesParams,
    options?: RequestOptions,
  ): APIPromise<AccuracyCreateInaccurateThemesResponse> {
    return this._client.post('/v1/reports/accuracy/inaccurate-themes', { body, ...options });
  }

  /**
   * Accuracy Overview
   *
   * @example
   * ```ts
   * const response =
   *   await client.reports.accuracy.createOverview({
   *     category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     end_date: 'end_date',
   *     start_date: 'start_date',
   *   });
   * ```
   */
  createOverview(
    body: AccuracyCreateOverviewParams,
    options?: RequestOptions,
  ): APIPromise<AccuracyCreateOverviewResponse> {
    return this._client.post('/v1/reports/accuracy/overview', { body, ...options });
  }

  /**
   * Accuracy Top Inaccurate Claims
   *
   * @example
   * ```ts
   * const response =
   *   await client.reports.accuracy.createTopInaccurateClaims({
   *     category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     end_date: 'end_date',
   *     start_date: 'start_date',
   *   });
   * ```
   */
  createTopInaccurateClaims(
    body: AccuracyCreateTopInaccurateClaimsParams,
    options?: RequestOptions,
  ): APIPromise<AccuracyCreateTopInaccurateClaimsResponse> {
    return this._client.post('/v1/reports/accuracy/top-inaccurate-claims', { body, ...options });
  }

  /**
   * Accuracy Topic Ids
   *
   * @example
   * ```ts
   * const response =
   *   await client.reports.accuracy.createTopicIDs({
   *     category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     end_date: 'end_date',
   *     start_date: 'start_date',
   *   });
   * ```
   */
  createTopicIDs(
    body: AccuracyCreateTopicIDsParams,
    options?: RequestOptions,
  ): APIPromise<AccuracyCreateTopicIDsResponse> {
    return this._client.post('/v1/reports/accuracy/topic-ids', { body, ...options });
  }
}

export interface AccuracyCreateBreakdownResponse {
  data: Array<AccuracyCreateBreakdownResponse.Data>;

  totalCount: number;
}

export namespace AccuracyCreateBreakdownResponse {
  export interface Data {
    id: string;

    inaccurateCount: number;

    name: string;

    responseAccuracy: number;

    share: number;

    accuracyChange?: number | null;

    citationCategory?: string | null;

    inaccurateCountChange?: number | null;

    promptCount?: number | null;

    shareChange?: number | null;
  }
}

export interface AccuracyCreateCitationAnalysisResponse {
  domain: string;

  href: string;

  markdownContent: string;

  pageTitle: string;

  claims?: Array<AccuracyCreateCitationAnalysisResponse.Claim>;
}

export namespace AccuracyCreateCitationAnalysisResponse {
  /**
   * A single inaccurate claim mapped to a cluster, surfaced on a cited page.
   *
   * `attribute` carries the cluster's canonical claim so the drawer can group claims
   * the same way it groups sentiment attributes.
   */
  export interface Claim {
    attribute: string;

    attributeId: string;

    claim: string;

    claimId: string;

    neutralTheme: string;

    neutralThemeId: string;

    snippet: string;

    kbPath?: string;

    kbSnippet?: string;

    polarity?: 'positive' | 'negative';
  }
}

export interface AccuracyCreateClaimBreakdownResponse {
  platform: Array<AccuracyCreateClaimBreakdownResponse.Platform>;

  prompt: Array<AccuracyCreateClaimBreakdownResponse.Prompt>;
}

export namespace AccuracyCreateClaimBreakdownResponse {
  export interface Platform {
    id: string;

    label: string;

    prevResponseCount: number;

    prevTotalResponseCount: number;

    responseCount: number;

    responseShare: number;

    totalResponseCount: number;

    responseShareDelta?: number | null;
  }

  export interface Prompt {
    id: string;

    hasCurrent: boolean;

    label: string;

    prevResponseCount: number;

    prevTotalResponseCount: number;

    promptId: string;

    promptText: string;

    responseCount: number;

    responseShare: number;

    topicId: string;

    totalResponseCount: number;

    responseShareDelta?: number | null;
  }
}

export interface AccuracyCreateClaimCitationsResponse {
  data: Array<AccuracyCreateClaimCitationsResponse.Data>;

  totalCount: number;
}

export namespace AccuracyCreateClaimCitationsResponse {
  export interface Data {
    citationCategory: string;

    citationCount: number;

    citationShare: number;

    domainCategory: string;

    hostname: string;

    href: string;

    path: string;

    snippet: string;

    citationShareDelta?: number | null;
  }
}

export interface AccuracyCreateClusterExampleRunsResponse {
  data: Array<AccuracyCreateClusterExampleRunsResponse.Data>;

  totalCount: number;
}

export namespace AccuracyCreateClusterExampleRunsResponse {
  export interface Data {
    claim: string;

    createdAt: string;

    modelId: string;

    regionId: string;

    responseSnippet: string;

    runId: string;
  }
}

export interface AccuracyCreateClusterVerificationPairsResponse {
  data: Array<AccuracyCreateClusterVerificationPairsResponse.Data>;
}

export namespace AccuracyCreateClusterVerificationPairsResponse {
  export interface Data {
    kbPath: string;

    pairId: string;

    quote: string;

    reasoning: string;

    snippetIdx: number;

    sourceUpdatedAt?: string | null;
  }
}

export interface AccuracyCreateFactcheckSetupStatusResponse {
  activeAccuracyPromptCount: number;

  hasVerificationData: boolean;

  isSetupComplete: boolean;

  setupCreatedAt?: string | null;

  setupKnowledgeBaseId?: string | null;
}

export interface AccuracyCreateInaccuracyDriversResponse {
  data: Array<AccuracyCreateInaccuracyDriversResponse.Data>;
}

export namespace AccuracyCreateInaccuracyDriversResponse {
  /**
   * A top inaccurate claim paired with one of its most-cited pages.
   */
  export interface Data {
    canonicalClaim: string;

    citationCategory: string;

    citationCount: number;

    claimOccurrence: number;

    clusterId: string;

    domainCategory: string;

    href: string;

    rowId: string;

    snippet: string;

    snippetClaimId: string;

    claimOccurrenceDelta?: number | null;
  }
}

export interface AccuracyCreateInaccurateClustersResponse {
  data: Array<AccuracyCreateInaccurateClustersResponse.Data>;

  totalCount: number;
}

export namespace AccuracyCreateInaccurateClustersResponse {
  export interface Data {
    canonicalClaim: string;

    citationHostnames: Array<string>;

    claimCount: number;

    clusterId: string;

    kbPath: string;

    kbSnippet: string;

    reasoning: string;

    responseCount: number;

    responseShare: number;

    totalResponseCount: number;

    description?: string;

    responseShareDelta?: number | null;
  }
}

export interface AccuracyCreateInaccurateThemesResponse {
  data: Array<AccuracyCreateInaccurateThemesResponse.Data>;

  totalCount: number;
}

export namespace AccuracyCreateInaccurateThemesResponse {
  export interface Data {
    inaccurateClaimCount: number;

    inaccurateClusterCount: number;

    neutralTheme: string;

    responseCount: number;

    responseShare: number;

    themeId: string;

    totalClaimCount: number;

    totalClusterCount: number;

    totalResponseCount: number;

    description?: string;

    responseShareDelta?: number | null;
  }
}

export interface AccuracyCreateOverviewResponse {
  overallAccuracy: number;

  scoreBreakdown: Array<AccuracyCreateOverviewResponse.ScoreBreakdown>;

  trendByPeriod: Array<AccuracyCreateOverviewResponse.TrendByPeriod>;

  accuracyChange?: number | null;

  availableSeries?: Array<AccuracyCreateOverviewResponse.AvailableSeries> | null;

  themeTrend?: Array<AccuracyCreateOverviewResponse.ThemeTrend> | null;
}

export namespace AccuracyCreateOverviewResponse {
  export interface ScoreBreakdown {
    count: number;

    share: number;

    status: string;

    countChange?: number | null;

    shareChange?: number | null;
  }

  export interface TrendByPeriod {
    accurate: number;

    date: string;

    ratio: number;

    total: number;

    prevPeriodData?: unknown;
  }

  export interface AvailableSeries {
    id: string;

    label: string;

    total: number;
  }

  export interface ThemeTrend {
    id: string;

    data: Array<ThemeTrend.Data>;

    label: string;
  }

  export namespace ThemeTrend {
    export interface Data {
      accurate: number;

      date: string;

      ratio: number;

      total: number;
    }
  }
}

export interface AccuracyCreateTopInaccurateClaimsResponse {
  data: Array<AccuracyCreateTopInaccurateClaimsResponse.Data>;
}

export namespace AccuracyCreateTopInaccurateClaimsResponse {
  export interface Data {
    canonicalClaim: string;

    claimOccurrence: number;

    clusterId: string;

    claimOccurrenceDelta?: number | null;
  }
}

export type AccuracyCreateTopicIDsResponse = Array<string>;

export interface AccuracyCreateBreakdownParams {
  category_id: string;

  end_date: string;

  start_date: string;

  breakdown_by?: 'citation' | 'platform' | 'topic' | 'prompt' | 'tag' | 'region' | 'persona';

  citation_categories?: Array<string> | null;

  comparison_end_date?: string | null;

  comparison_start_date?: string | null;

  exclude_topic_ids?: boolean;

  include_no_persona?: boolean;

  include_no_tag?: boolean;

  limit?: number;

  offset?: number;

  persona_ids?: Array<string> | null;

  platform_ids?: Array<string> | null;

  prompt_ids?: Array<string> | null;

  region_ids?: Array<string> | null;

  search_query?: string | null;

  sort_by?: 'citationShare' | 'accuracy';

  sort_order?: 'asc' | 'desc';

  tag_filter_type?: 'all' | 'any';

  tag_ids?: Array<string> | null;

  topic_ids?: Array<string> | null;
}

export interface AccuracyCreateCitationAnalysisParams {
  category_id: string;

  clean_href: string;

  end_date: string;

  start_date: string;
}

export interface AccuracyCreateClaimBreakdownParams {
  category_id: string;

  cluster_id: string;

  end_date: string;

  start_date: string;

  citation_categories?: Array<string> | null;

  comparison_end_date?: string | null;

  comparison_start_date?: string | null;

  exclude_topic_ids?: boolean;

  include_no_persona?: boolean;

  include_no_tag?: boolean;

  persona_ids?: Array<string> | null;

  platform_ids?: Array<string> | null;

  prompt_ids?: Array<string> | null;

  region_ids?: Array<string> | null;

  tag_filter_type?: 'all' | 'any';

  tag_ids?: Array<string> | null;

  topic_ids?: Array<string> | null;
}

export interface AccuracyCreateClaimCitationsParams {
  category_id: string;

  cluster_id: string;

  end_date: string;

  start_date: string;

  citation_categories?: Array<string> | null;

  comparison_end_date?: string | null;

  comparison_start_date?: string | null;

  exclude_topic_ids?: boolean;

  include_no_persona?: boolean;

  include_no_tag?: boolean;

  limit?: number;

  offset?: number;

  persona_ids?: Array<string> | null;

  platform_ids?: Array<string> | null;

  prompt_ids?: Array<string> | null;

  region_ids?: Array<string> | null;

  search_query?: string | null;

  sort_order?: 'asc' | 'desc';

  tag_filter_type?: 'all' | 'any';

  tag_ids?: Array<string> | null;

  topic_ids?: Array<string> | null;
}

export interface AccuracyCreateClusterExampleRunsParams {
  category_id: string;

  cluster_id: string;

  end_date: string;

  start_date: string;

  limit?: number;

  offset?: number;
}

export interface AccuracyCreateClusterVerificationPairsParams {
  category_id: string;

  cluster_id: string;
}

export interface AccuracyCreateFactcheckSetupStatusParams {
  category_id: string;
}

export interface AccuracyCreateInaccuracyDriversParams {
  category_id: string;

  end_date: string;

  start_date: string;

  citation_categories?: Array<string> | null;

  comparison_end_date?: string | null;

  comparison_start_date?: string | null;

  exclude_topic_ids?: boolean;

  include_no_persona?: boolean;

  include_no_tag?: boolean;

  limit?: number;

  persona_ids?: Array<string> | null;

  platform_ids?: Array<string> | null;

  prompt_ids?: Array<string> | null;

  region_ids?: Array<string> | null;

  tag_filter_type?: 'all' | 'any';

  tag_ids?: Array<string> | null;

  topic_ids?: Array<string> | null;
}

export interface AccuracyCreateInaccurateClustersParams {
  category_id: string;

  end_date: string;

  start_date: string;

  theme_id: string;

  citation_categories?: Array<string> | null;

  comparison_end_date?: string | null;

  comparison_start_date?: string | null;

  exclude_topic_ids?: boolean;

  include_no_persona?: boolean;

  include_no_tag?: boolean;

  limit?: number;

  offset?: number;

  persona_ids?: Array<string> | null;

  platform_ids?: Array<string> | null;

  prompt_ids?: Array<string> | null;

  region_ids?: Array<string> | null;

  search_query?: string | null;

  tag_filter_type?: 'all' | 'any';

  tag_ids?: Array<string> | null;

  topic_ids?: Array<string> | null;
}

export interface AccuracyCreateInaccurateThemesParams {
  category_id: string;

  end_date: string;

  start_date: string;

  citation_categories?: Array<string> | null;

  comparison_end_date?: string | null;

  comparison_start_date?: string | null;

  exclude_topic_ids?: boolean;

  include_no_persona?: boolean;

  include_no_tag?: boolean;

  limit?: number;

  offset?: number;

  persona_ids?: Array<string> | null;

  platform_ids?: Array<string> | null;

  prompt_ids?: Array<string> | null;

  region_ids?: Array<string> | null;

  search_query?: string | null;

  sort_by?: 'response_share';

  sort_order?: 'asc' | 'desc';

  tag_filter_type?: 'all' | 'any';

  tag_ids?: Array<string> | null;

  topic_ids?: Array<string> | null;
}

export interface AccuracyCreateOverviewParams {
  category_id: string;

  end_date: string;

  start_date: string;

  citation_categories?: Array<string> | null;

  comparison_end_date?: string | null;

  comparison_start_date?: string | null;

  date_bucket?: string | null;

  exclude_topic_ids?: boolean;

  group_by?: 'period' | 'theme';

  include_no_persona?: boolean;

  include_no_tag?: boolean;

  persona_ids?: Array<string> | null;

  platform_ids?: Array<string> | null;

  prompt_ids?: Array<string> | null;

  region_ids?: Array<string> | null;

  tag_filter_type?: 'all' | 'any';

  tag_ids?: Array<string> | null;

  topic_ids?: Array<string> | null;
}

export interface AccuracyCreateTopInaccurateClaimsParams {
  category_id: string;

  end_date: string;

  start_date: string;

  citation_categories?: Array<string> | null;

  comparison_end_date?: string | null;

  comparison_start_date?: string | null;

  exclude_topic_ids?: boolean;

  include_no_persona?: boolean;

  include_no_tag?: boolean;

  limit?: number;

  persona_ids?: Array<string> | null;

  platform_ids?: Array<string> | null;

  prompt_ids?: Array<string> | null;

  region_ids?: Array<string> | null;

  tag_filter_type?: 'all' | 'any';

  tag_ids?: Array<string> | null;

  topic_ids?: Array<string> | null;
}

export interface AccuracyCreateTopicIDsParams {
  category_id: string;

  end_date: string;

  start_date: string;
}

export declare namespace Accuracy {
  export {
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

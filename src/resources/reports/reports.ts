// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { Citations, type CitationsQuery, type StreamCitationsQuery, type CitationsV2Query, type CitationQueryV1ReportsPostResponse, type CitationStreamV1ReportsStreamPostResponse, type CitationQueryV2V2ReportsPostResponse, type CitationQueryV1ReportsPostParams, type CitationStreamV1ReportsStreamPostParams, type CitationQueryV2V2ReportsPostParams, type CitationStreamV2V2ReportsStreamPostParams } from "./citations";
import { Visibility, type VisibilityQuery, type StreamVisibilityQuery, type VisibilityV2Query, type VisibilityStreamV1ReportsStreamPostResponse, type VisibilityQueryV2V2ReportsPostResponse, type VisibilityQueryV1ReportsPostParams, type VisibilityStreamV1ReportsStreamPostParams, type VisibilityQueryV2V2ReportsPostParams, type VisibilityStreamV2V2ReportsStreamPostParams } from "./visibility";
import { Sentiment, type SentimentQuery, type StreamSentimentQuery, type SentimentV2Query, type SentimentStreamV1ReportsStreamPostResponse, type SentimentQueryV2V2ReportsPostResponse, type SentimentQueryV1ReportsPostParams, type SentimentStreamV1ReportsStreamPostParams, type SentimentQueryV2V2ReportsPostParams, type SentimentStreamV2V2ReportsStreamPostParams } from "./sentiment";
import { WebSearchResults, type WebSearchResultsQuery, type StreamWebSearchResultsQuery, type WebSearchResultQueryResponse, type WebSearchResultStreamResponse, type WebSearchResultQueryParams, type WebSearchResultStreamParams } from "./web-search-results";
import { Referrals, type ReferralsQuery, type ReferralsQueryV2, type ReferralCreateReportV1V1ReportsPostParams, type ReferralCreateReportV2V2ReportsPostParams } from "./referrals";
import { Bots, type BotsReportQuery, type BotsReportQueryV2, type BotCreateReportV1V1ReportsPostParams, type BotCreateReportV2V2ReportsPostParams } from "./bots";
import { QueryFanouts, type QueryFanoutsQuery, type QueryFanoutsV2Query, type QueryFanoutV2V2ReportsPostResponse, type QueryFanoutV1ReportsPostParams, type QueryFanoutV2V2ReportsPostParams, type QueryFanoutStreamV2V2ReportsStreamPostParams } from "./query-fanouts";
import { Shopping, type ShoppingVisibilityQuery, type ShoppingItemVisibilityQuery, type ShoppingMerchantDistributionQuery, type ShoppingMerchantVisibilityByBrandQuery, type ShoppingMerchantByItemsQuery, type ShoppingAllItemsWithMerchantsQuery, type ShoppingTriggerRateQuery, type ShoppingMerchantShareQuery, type ShoppingProductMerchantURLsQuery, type ShoppingExecutionsQuery, type BrandNameFilter, type MerchantNameFilter, type ProductNameFilter, type ShoppingVisibilityResponse, type ShoppingItemVisibilityResponse, type ShoppingMerchantDistributionResponse, type ShoppingMerchantVisibilityByBrandResponse, type ShoppingMerchantByItemsResponse, type ShoppingAllItemsWithMerchantsResponse, type ShoppingTriggerRateResponse, type ShoppingMerchantShareResponse, type ShoppingProductMerchantURLsResponse, type ShoppingExecutionsResponse, type ShoppingVisibilityParams, type ShoppingItemVisibilityParams, type ShoppingMerchantDistributionParams, type ShoppingMerchantVisibilityByBrandParams, type ShoppingMerchantByItemsParams, type ShoppingAllItemsWithMerchantsParams, type ShoppingTriggerRateParams, type ShoppingMerchantShareParams, type ShoppingProductMerchantURLsParams, type ShoppingExecutionsParams } from "./shopping";
import { Accuracy, type AccuracyOverviewQuery, type AccuracyBreakdownQuery, type AccuracyCitationAnalysisQuery, type AccuracyTopicIDsQuery, type InaccurateThemesQuery, type InaccurateClustersQuery, type InaccuracyDriversQuery, type TopInaccurateClaimsQuery, type ClaimBreakdownQuery, type ClaimCitationsQuery, type ClusterExampleRunsQuery, type ClusterVerificationPairsQuery, type FactCheckSetupStatusQuery, type AccuracyOverviewV1ReportsOverviewPostResponse, type AccuracyBreakdownV1ReportsBreakdownPostResponse, type AccuracyCitationAnalysisV1ReportsCitationAnalysisPostResponse, type AccuracyTopicIDsV1ReportsTopicIDsPostResponse, type AccuracyInaccurateThemesV1ReportsInaccurateThemesPostResponse, type AccuracyInaccurateClustersV1ReportsInaccurateClustersPostResponse, type AccuracyInaccuracyDriversV1ReportsInaccuracyDriversPostResponse, type AccuracyTopInaccurateClaimsV1ReportsTopInaccurateClaimsPostResponse, type AccuracyClaimBreakdownV1ReportsClaimBreakdownPostResponse, type AccuracyClaimCitationsV1ReportsClaimCitationsPostResponse, type AccuracyClusterExampleRunsV1ReportsClusterExampleRunsPostResponse, type AccuracyClusterVerificationPairsV1ReportsClusterVerificationPairsPostResponse, type AccuracyFactcheckSetupStatusV1ReportsFactcheckSetupStatusPostResponse, type AccuracyOverviewV1ReportsOverviewPostParams, type AccuracyBreakdownV1ReportsBreakdownPostParams, type AccuracyCitationAnalysisV1ReportsCitationAnalysisPostParams, type AccuracyTopicIDsV1ReportsTopicIDsPostParams, type AccuracyInaccurateThemesV1ReportsInaccurateThemesPostParams, type AccuracyInaccurateClustersV1ReportsInaccurateClustersPostParams, type AccuracyInaccuracyDriversV1ReportsInaccuracyDriversPostParams, type AccuracyTopInaccurateClaimsV1ReportsTopInaccurateClaimsPostParams, type AccuracyClaimBreakdownV1ReportsClaimBreakdownPostParams, type AccuracyClaimCitationsV1ReportsClaimCitationsPostParams, type AccuracyClusterExampleRunsV1ReportsClusterExampleRunsPostParams, type AccuracyClusterVerificationPairsV1ReportsClusterVerificationPairsPostParams, type AccuracyFactcheckSetupStatusV1ReportsFactcheckSetupStatusPostParams } from "./accuracy";

export class Reports extends APIResource {
  citations: Citations = new Citations(this._client);
  visibility: Visibility = new Visibility(this._client);
  sentiment: Sentiment = new Sentiment(this._client);
  webSearchResults: WebSearchResults = new WebSearchResults(this._client);
  referrals: Referrals = new Referrals(this._client);
  bots: Bots = new Bots(this._client);
  queryFanouts: QueryFanouts = new QueryFanouts(this._client);
  shopping: Shopping = new Shopping(this._client);
  accuracy: Accuracy = new Accuracy(this._client);

  /**
   * Query Sentiment V2
   *
   * @param {ReportQuerySentimentV2V1SentimentV2PostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ReportQuerySentimentV2V1SentimentV2PostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const querySentimentV2V1SentimentV2Post = await client.reports.querySentimentV2V1SentimentV2Post({
   *   category_id: "",
   *   asset_name: "",
   *   start_date: "",
   *   end_date: "",
   *   date_interval: "day",
   *   metrics: [],
   * });
   * ```
   */
  querySentimentV2V1SentimentV2Post(body: ReportQuerySentimentV2V1SentimentV2PostParams, options?: RequestOptions): APIPromise<ReportQuerySentimentV2V1SentimentV2PostResponse> {
    return this._client.post("/v1/reports/sentiment-v2", { body: body, ...options });
  }
}

export interface SentimentV2ReportQuery {
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
  metrics: Array<"sentiment" | "occurrence">;
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
   * Date interval for the report. Only used when dimensions includes date.
   * @default day
   */
  date_interval?: "hour" | "day" | "week" | "month" | "quarter" | "year" | "relative_week";
  /**
   * Dimensions to group the report by.
   */
  dimensions?: Array<"date" | "topic" | "region" | "model" | "prompt" | "persona" | "tag" | "theme" | "claim" | "run" | "asset_name">;
  /**
   * List of filters to apply to the sentiment-v2 report.
   */
  filters?: Array<{ field: "model_id"; operator: "is" | "not_is" | "in" | "not_in"; value: string | Array<string> } | { field: "region_id"; operator: "is" | "not_is" | "in" | "not_in"; value: string | Array<string> } | { field: "topic_id"; operator: "is" | "not_is" | "in" | "not_in"; value: string | Array<string> } | { field: "prompt_id"; operator: "is" | "not_is" | "in" | "not_in"; value: string | Array<string> } | { field: "persona_id"; operator: "is" | "not_is" | "in" | "not_in"; value: string | Array<string> } | { field: "tag_id"; operator: "is" | "not_is" | "in" | "not_in"; value: string | Array<string> } | { field: "run_id"; operator: "is" | "not_is" | "in" | "not_in"; value: string | Array<string> } | { field: "theme_id"; operator: "is" | "not_is" | "in" | "not_in"; value: string | Array<string> } | { field: "theme"; operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive"; value: string | Array<string> } | { field: "claim_id"; operator: "is" | "not_is" | "in" | "not_in"; value: string | Array<string> } | { field: "claim"; operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive"; value: string | Array<string> } | { field: "sentiment"; operator: "is" | "not_is" | "in" | "not_in"; value: "positive" | "negative" | Array<"positive" | "negative"> }>;
  /**
   * Custom ordering of report results. Dimension keys must also be present in dimensions. The sentiment metric orders by positive_sentiment.
   */
  order_by?: Record<string, "asc" | "desc">;
  /**
   * Pagination settings for the report results.
   */
  pagination?: Pagination;
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
  metrics: Array<number>;
  dimensions: Array<string>;
}

/**
 * Filter by topic name
 */
export interface TopicNameFilter {
  field: "topic_name";
  operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
  value: string | Array<string>;
}

/**
 * Filter by prompt UUID.
 */
export interface PromptIDFilter {
  field: "prompt_id";
  operator: "is" | "not_is" | "in" | "not_in";
  value: string | Array<string>;
}

/**
 * Filter by tag name.
 */
export interface TagNameFilter {
  field: "tag_name";
  operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
  value: string | Array<string>;
}

/**
 * Filter by root domain
 */
export interface RootDomainFilter {
  field: "root_domain";
  operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
  value: string | Array<string>;
}

/**
 * Filter by hostname
 */
export interface HostnameFilter {
  field: "hostname";
  operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
  value: string | Array<string>;
}

/**
 * Filter by URL
 */
export interface URLFilter {
  field: "url";
  operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
  value: string | Array<string>;
}

/**
 * Offset-based pagination parameters.
 */
export interface Pagination {
  /**
   * Maximum number of results to return. Default is 10,000, maximum is 50,000.
   * @default 10000
   * @maximum 50000
   */
  limit?: number;
  /**
   * Offset for the results. Used for pagination.
   * @default 0
   * @minimum 0
   */
  offset?: number;
}

export interface ReportQuerySentimentV2V1SentimentV2PostParams {
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
  metrics: Array<"sentiment" | "occurrence">;
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
   * Date interval for the report. Only used when dimensions includes date.
   * @default day
   */
  date_interval?: "hour" | "day" | "week" | "month" | "quarter" | "year" | "relative_week";
  /**
   * Dimensions to group the report by.
   */
  dimensions?: Array<"date" | "topic" | "region" | "model" | "prompt" | "persona" | "tag" | "theme" | "claim" | "run" | "asset_name">;
  /**
   * List of filters to apply to the sentiment-v2 report.
   */
  filters?: Array<ReportQuerySentimentV2V1SentimentV2PostParams.SentimentV2ModelIDFilter | ReportQuerySentimentV2V1SentimentV2PostParams.SentimentV2RegionIDFilter | ReportQuerySentimentV2V1SentimentV2PostParams.SentimentV2TopicIDFilter | ReportQuerySentimentV2V1SentimentV2PostParams.SentimentV2PromptIDFilter | ReportQuerySentimentV2V1SentimentV2PostParams.SentimentV2PersonaIDFilter | ReportQuerySentimentV2V1SentimentV2PostParams.SentimentV2TagIDFilter | ReportQuerySentimentV2V1SentimentV2PostParams.SentimentV2RunIDFilter | ReportQuerySentimentV2V1SentimentV2PostParams.SentimentV2ThemeIDFilter | ReportQuerySentimentV2V1SentimentV2PostParams.SentimentV2ThemeFilter | ReportQuerySentimentV2V1SentimentV2PostParams.SentimentV2ClaimIDFilter | ReportQuerySentimentV2V1SentimentV2PostParams.SentimentV2ClaimFilter | ReportQuerySentimentV2V1SentimentV2PostParams.SentimentV2SentimentFilter>;
  /**
   * Custom ordering of report results. Dimension keys must also be present in dimensions. The sentiment metric orders by positive_sentiment.
   */
  order_by?: Record<string, "asc" | "desc">;
  /**
   * Pagination settings for the report results.
   */
  pagination?: Pagination;
}

export namespace ReportQuerySentimentV2V1SentimentV2PostParams {
  export interface SentimentV2ModelIDFilter {
    field: "model_id";
    operator: "is" | "not_is" | "in" | "not_in";
    value: string | Array<string>;
  }

  export interface SentimentV2RegionIDFilter {
    field: "region_id";
    operator: "is" | "not_is" | "in" | "not_in";
    value: string | Array<string>;
  }

  export interface SentimentV2TopicIDFilter {
    field: "topic_id";
    operator: "is" | "not_is" | "in" | "not_in";
    value: string | Array<string>;
  }

  export interface SentimentV2PromptIDFilter {
    field: "prompt_id";
    operator: "is" | "not_is" | "in" | "not_in";
    value: string | Array<string>;
  }

  export interface SentimentV2PersonaIDFilter {
    field: "persona_id";
    operator: "is" | "not_is" | "in" | "not_in";
    value: string | Array<string>;
  }

  export interface SentimentV2TagIDFilter {
    field: "tag_id";
    operator: "is" | "not_is" | "in" | "not_in";
    value: string | Array<string>;
  }

  export interface SentimentV2RunIDFilter {
    field: "run_id";
    operator: "is" | "not_is" | "in" | "not_in";
    value: string | Array<string>;
  }

  export interface SentimentV2ThemeIDFilter {
    field: "theme_id";
    operator: "is" | "not_is" | "in" | "not_in";
    value: string | Array<string>;
  }

  export interface SentimentV2ThemeFilter {
    field: "theme";
    operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
    value: string | Array<string>;
  }

  export interface SentimentV2ClaimIDFilter {
    field: "claim_id";
    operator: "is" | "not_is" | "in" | "not_in";
    value: string | Array<string>;
  }

  export interface SentimentV2ClaimFilter {
    field: "claim";
    operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
    value: string | Array<string>;
  }

  export interface SentimentV2SentimentFilter {
    field: "sentiment";
    operator: "is" | "not_is" | "in" | "not_in";
    value: "positive" | "negative" | Array<"positive" | "negative">;
  }
}

export interface ReportQuerySentimentV2V1SentimentV2PostResponse {
  info: ReportQuerySentimentV2V1SentimentV2PostResponse.Info;
  data?: Array<ReportQuerySentimentV2V1SentimentV2PostResponse.Data>;
}

export namespace ReportQuerySentimentV2V1SentimentV2PostResponse {
  export interface Info {
    query: Info.Query;
    total_rows: number;
  }

  export namespace Info {
    export interface Query {
    }
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
      theme_id?: string | null;
      theme?: string | null;
      claim_id?: string | null;
      claim?: string | null;
      sentiment?: "positive" | "negative" | null;
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
Reports.Citations = Citations;
Reports.Visibility = Visibility;
Reports.Sentiment = Sentiment;
Reports.WebSearchResults = WebSearchResults;
Reports.Referrals = Referrals;
Reports.Bots = Bots;
Reports.QueryFanouts = QueryFanouts;
Reports.Shopping = Shopping;
Reports.Accuracy = Accuracy;

export declare namespace Reports {
  export {
    type SentimentV2ReportQuery as SentimentV2ReportQuery,
    type ReportInfo as ReportInfo,
    type ReportResponse as ReportResponse,
    type ReportResult as ReportResult,
    type TopicNameFilter as TopicNameFilter,
    type PromptIDFilter as PromptIDFilter,
    type TagNameFilter as TagNameFilter,
    type RootDomainFilter as RootDomainFilter,
    type HostnameFilter as HostnameFilter,
    type URLFilter as URLFilter,
    type ReportQuerySentimentV2V1SentimentV2PostResponse as ReportQuerySentimentV2V1SentimentV2PostResponse,
    type ReportQuerySentimentV2V1SentimentV2PostParams as ReportQuerySentimentV2V1SentimentV2PostParams,
  };

  export {
    Citations as Citations,
    type CitationsQuery as CitationsQuery,
    type StreamCitationsQuery as StreamCitationsQuery,
    type CitationsV2Query as CitationsV2Query,
    type CitationQueryV1ReportsPostResponse as CitationQueryV1ReportsPostResponse,
    type CitationStreamV1ReportsStreamPostResponse as CitationStreamV1ReportsStreamPostResponse,
    type CitationQueryV2V2ReportsPostResponse as CitationQueryV2V2ReportsPostResponse,
    type CitationQueryV1ReportsPostParams as CitationQueryV1ReportsPostParams,
    type CitationStreamV1ReportsStreamPostParams as CitationStreamV1ReportsStreamPostParams,
    type CitationQueryV2V2ReportsPostParams as CitationQueryV2V2ReportsPostParams,
    type CitationStreamV2V2ReportsStreamPostParams as CitationStreamV2V2ReportsStreamPostParams,
  };

  export {
    Visibility as Visibility,
    type VisibilityQuery as VisibilityQuery,
    type StreamVisibilityQuery as StreamVisibilityQuery,
    type VisibilityV2Query as VisibilityV2Query,
    type VisibilityStreamV1ReportsStreamPostResponse as VisibilityStreamV1ReportsStreamPostResponse,
    type VisibilityQueryV2V2ReportsPostResponse as VisibilityQueryV2V2ReportsPostResponse,
    type VisibilityQueryV1ReportsPostParams as VisibilityQueryV1ReportsPostParams,
    type VisibilityStreamV1ReportsStreamPostParams as VisibilityStreamV1ReportsStreamPostParams,
    type VisibilityQueryV2V2ReportsPostParams as VisibilityQueryV2V2ReportsPostParams,
    type VisibilityStreamV2V2ReportsStreamPostParams as VisibilityStreamV2V2ReportsStreamPostParams,
  };

  export {
    Sentiment as Sentiment,
    type SentimentQuery as SentimentQuery,
    type StreamSentimentQuery as StreamSentimentQuery,
    type SentimentV2Query as SentimentV2Query,
    type SentimentStreamV1ReportsStreamPostResponse as SentimentStreamV1ReportsStreamPostResponse,
    type SentimentQueryV2V2ReportsPostResponse as SentimentQueryV2V2ReportsPostResponse,
    type SentimentQueryV1ReportsPostParams as SentimentQueryV1ReportsPostParams,
    type SentimentStreamV1ReportsStreamPostParams as SentimentStreamV1ReportsStreamPostParams,
    type SentimentQueryV2V2ReportsPostParams as SentimentQueryV2V2ReportsPostParams,
    type SentimentStreamV2V2ReportsStreamPostParams as SentimentStreamV2V2ReportsStreamPostParams,
  };

  export {
    WebSearchResults as WebSearchResults,
    type WebSearchResultsQuery as WebSearchResultsQuery,
    type StreamWebSearchResultsQuery as StreamWebSearchResultsQuery,
    type WebSearchResultQueryResponse as WebSearchResultQueryResponse,
    type WebSearchResultStreamResponse as WebSearchResultStreamResponse,
    type WebSearchResultQueryParams as WebSearchResultQueryParams,
    type WebSearchResultStreamParams as WebSearchResultStreamParams,
  };

  export {
    Referrals as Referrals,
    type ReferralsQuery as ReferralsQuery,
    type ReferralsQueryV2 as ReferralsQueryV2,
    type ReferralCreateReportV1V1ReportsPostParams as ReferralCreateReportV1V1ReportsPostParams,
    type ReferralCreateReportV2V2ReportsPostParams as ReferralCreateReportV2V2ReportsPostParams,
  };

  export {
    Bots as Bots,
    type BotsReportQuery as BotsReportQuery,
    type BotsReportQueryV2 as BotsReportQueryV2,
    type BotCreateReportV1V1ReportsPostParams as BotCreateReportV1V1ReportsPostParams,
    type BotCreateReportV2V2ReportsPostParams as BotCreateReportV2V2ReportsPostParams,
  };

  export {
    QueryFanouts as QueryFanouts,
    type QueryFanoutsQuery as QueryFanoutsQuery,
    type QueryFanoutsV2Query as QueryFanoutsV2Query,
    type QueryFanoutV2V2ReportsPostResponse as QueryFanoutV2V2ReportsPostResponse,
    type QueryFanoutV1ReportsPostParams as QueryFanoutV1ReportsPostParams,
    type QueryFanoutV2V2ReportsPostParams as QueryFanoutV2V2ReportsPostParams,
    type QueryFanoutStreamV2V2ReportsStreamPostParams as QueryFanoutStreamV2V2ReportsStreamPostParams,
  };

  export {
    Shopping as Shopping,
    type ShoppingVisibilityQuery as ShoppingVisibilityQuery,
    type ShoppingItemVisibilityQuery as ShoppingItemVisibilityQuery,
    type ShoppingMerchantDistributionQuery as ShoppingMerchantDistributionQuery,
    type ShoppingMerchantVisibilityByBrandQuery as ShoppingMerchantVisibilityByBrandQuery,
    type ShoppingMerchantByItemsQuery as ShoppingMerchantByItemsQuery,
    type ShoppingAllItemsWithMerchantsQuery as ShoppingAllItemsWithMerchantsQuery,
    type ShoppingTriggerRateQuery as ShoppingTriggerRateQuery,
    type ShoppingMerchantShareQuery as ShoppingMerchantShareQuery,
    type ShoppingProductMerchantURLsQuery as ShoppingProductMerchantURLsQuery,
    type ShoppingExecutionsQuery as ShoppingExecutionsQuery,
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

  export {
    Accuracy as Accuracy,
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
export { Reports as ReportResource };

// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import type * as Shared from '../shared';
import * as CitationsAPI from './citations';
import {
  Citations,
  type CitationsQuery,
  type StreamCitationsQuery,
  type CitationsV2Query,
  type CitationQueryV1PostResponse,
  type CitationStreamV1StreamPostResponse,
  type CitationQueryV2V2PostResponse,
  type CitationStreamV2V2StreamPostResponse,
  type CitationQueryV1PostParams,
  type CitationStreamV1StreamPostParams,
  type CitationQueryV2V2PostParams,
  type CitationStreamV2V2StreamPostParams,
} from './citations';
import * as VisibilityAPI from './visibility';
import {
  Visibility,
  type VisibilityQuery,
  type StreamVisibilityQuery,
  type VisibilityV2Query,
  type VisibilityStreamV1StreamPostResponse,
  type VisibilityQueryV2V2PostResponse,
  type VisibilityStreamV2V2StreamPostResponse,
  type VisibilityQueryV1PostParams,
  type VisibilityStreamV1StreamPostParams,
  type VisibilityQueryV2V2PostParams,
  type VisibilityStreamV2V2StreamPostParams,
} from './visibility';
import * as SentimentAPI from './sentiment';
import {
  Sentiment,
  type SentimentQuery,
  type StreamSentimentQuery,
  type SentimentV2Query,
  type SentimentStreamV1StreamPostResponse,
  type SentimentQueryV2V2PostResponse,
  type SentimentStreamV2V2StreamPostResponse,
  type SentimentQueryV1PostParams,
  type SentimentStreamV1StreamPostParams,
  type SentimentQueryV2V2PostParams,
  type SentimentStreamV2V2StreamPostParams,
} from './sentiment';
import * as WebSearchResultsAPI from './web-search-results';
import {
  WebSearchResults,
  type WebSearchResultsQuery,
  type StreamWebSearchResultsQuery,
  type WebSearchResultQueryV1PostResponse,
  type WebSearchResultStreamV1StreamPostResponse,
  type WebSearchResultQueryV1PostParams,
  type WebSearchResultStreamV1StreamPostParams,
} from './web-search-results';
import * as ReferralsAPI from './referrals';
import {
  Referrals,
  type ReferralsQuery,
  type ReferralsQueryV2,
  type ReferralCreateV1V1PostParams,
  type ReferralCreateV2V2PostParams,
} from './referrals';
import * as BotsAPI from './bots';
import {
  Bots,
  type BotsReportQuery,
  type BotsReportQueryV2,
  type BotCreateV1V1PostParams,
  type BotCreateV2V2PostParams,
} from './bots';
import * as QueryFanoutsAPI from './query-fanouts';
import {
  QueryFanouts,
  type QueryFanoutsQuery,
  type QueryFanoutsV2Query,
  type QueryFanoutV2V2PostResponse,
  type QueryFanoutStreamV2V2StreamPostResponse,
  type QueryFanoutV1PostParams,
  type QueryFanoutV2V2PostParams,
  type QueryFanoutStreamV2V2StreamPostParams,
} from './query-fanouts';
import * as ShoppingAPI from './shopping';
import {
  Shopping,
  type ShoppingVisibilityQuery,
  type ShoppingItemVisibilityQuery,
  type ShoppingMerchantDistributionQuery,
  type ShoppingMerchantVisibilityByBrandQuery,
  type ShoppingMerchantByItemsQuery,
  type ShoppingAllItemsWithMerchantsQuery,
  type ShoppingTriggerRateQuery,
  type ShoppingTriggeredPromptsQuery,
  type ShoppingTriggeredTopicsQuery,
  type ShoppingMerchantShareQuery,
  type ShoppingProductMerchantURLsQuery,
  type ShoppingExecutionsQuery,
  type ShoppingBrandsV2Query,
  type ShoppingProductsV2Query,
  type ShoppingMerchantsV2Query,
  type ShoppingTriggerRateV2Query,
  type ShoppingQueryBrandsV2V2BrandsPostResponse,
  type ShoppingStreamBrandsV2V2BrandsStreamPostResponse,
  type ShoppingQueryProductsV2V2ProductsPostResponse,
  type ShoppingStreamProductsV2V2ProductsStreamPostResponse,
  type ShoppingQueryMerchantsV2V2MerchantsPostResponse,
  type ShoppingStreamMerchantsV2V2MerchantsStreamPostResponse,
  type ShoppingQueryTriggerRateV2V2TriggerRatePostResponse,
  type ShoppingStreamTriggerRateV2V2TriggerRateStreamPostResponse,
  type ShoppingVisibilityV1VisibilityPostParams,
  type ShoppingItemVisibilityV1ItemVisibilityPostParams,
  type ShoppingMerchantDistributionV1MerchantDistributionPostParams,
  type ShoppingMerchantVisibilityByBrandV1MerchantVisibilityByBrandPostParams,
  type ShoppingMerchantByItemsV1MerchantByItemsPostParams,
  type ShoppingAllItemsWithMerchantsV1AllItemsWithMerchantsPostParams,
  type ShoppingTriggerRateV1TriggerRatePostParams,
  type ShoppingTriggeredPromptsV1TriggeredPromptsPostParams,
  type ShoppingTriggeredTopicsV1TriggeredTopicsPostParams,
  type ShoppingMerchantShareV1MerchantSharePostParams,
  type ShoppingProductMerchantURLsV1ProductMerchantURLsPostParams,
  type ShoppingExecutionsV1ExecutionsPostParams,
  type ShoppingQueryBrandsV2V2BrandsPostParams,
  type ShoppingStreamBrandsV2V2BrandsStreamPostParams,
  type ShoppingQueryProductsV2V2ProductsPostParams,
  type ShoppingStreamProductsV2V2ProductsStreamPostParams,
  type ShoppingQueryMerchantsV2V2MerchantsPostParams,
  type ShoppingStreamMerchantsV2V2MerchantsStreamPostParams,
  type ShoppingQueryTriggerRateV2V2TriggerRatePostParams,
  type ShoppingStreamTriggerRateV2V2TriggerRateStreamPostParams,
} from './shopping';
import * as AccuracyAPI from './accuracy';
import {
  Accuracy,
  type AccuracyOverviewQuery,
  type AccuracyBreakdownQuery,
  type AccuracyCitationAnalysisQuery,
  type AccuracyTopicIDsQuery,
  type InaccurateThemesQuery,
  type InaccurateClustersQuery,
  type InaccuracyDriversQuery,
  type TopInaccurateClaimsQuery,
  type ClaimBreakdownQuery,
  type ClaimCitationsQuery,
  type ClusterExampleRunsQuery,
  type ClusterVerificationPairsQuery,
  type FactCheckSetupStatusQuery,
  type AccuracyOverviewV1OverviewPostResponse,
  type AccuracyBreakdownV1BreakdownPostResponse,
  type AccuracyCitationAnalysisV1CitationAnalysisPostResponse,
  type AccuracyTopicIDsV1TopicIDsPostResponse,
  type AccuracyInaccurateThemesV1InaccurateThemesPostResponse,
  type AccuracyInaccurateClustersV1InaccurateClustersPostResponse,
  type AccuracyInaccuracyDriversV1InaccuracyDriversPostResponse,
  type AccuracyTopInaccurateClaimsV1TopInaccurateClaimsPostResponse,
  type AccuracyClaimBreakdownV1ClaimBreakdownPostResponse,
  type AccuracyClaimCitationsV1ClaimCitationsPostResponse,
  type AccuracyClusterExampleRunsV1ClusterExampleRunsPostResponse,
  type AccuracyClusterVerificationPairsV1ClusterVerificationPairsPostResponse,
  type AccuracyFactcheckSetupStatusV1FactcheckSetupStatusPostResponse,
  type AccuracyOverviewV1OverviewPostParams,
  type AccuracyBreakdownV1BreakdownPostParams,
  type AccuracyCitationAnalysisV1CitationAnalysisPostParams,
  type AccuracyTopicIDsV1TopicIDsPostParams,
  type AccuracyInaccurateThemesV1InaccurateThemesPostParams,
  type AccuracyInaccurateClustersV1InaccurateClustersPostParams,
  type AccuracyInaccuracyDriversV1InaccuracyDriversPostParams,
  type AccuracyTopInaccurateClaimsV1TopInaccurateClaimsPostParams,
  type AccuracyClaimBreakdownV1ClaimBreakdownPostParams,
  type AccuracyClaimCitationsV1ClaimCitationsPostParams,
  type AccuracyClusterExampleRunsV1ClusterExampleRunsPostParams,
  type AccuracyClusterVerificationPairsV1ClusterVerificationPairsPostParams,
  type AccuracyFactcheckSetupStatusV1FactcheckSetupStatusPostParams,
} from './accuracy';
import * as FactcheckAPI from './factcheck';
import {
  Factcheck,
  type FactcheckScoresQuery,
  type FactcheckClaimsQuery,
  type FactcheckQueryScoresV2PostResponse,
  type FactcheckStreamScoresV2StreamPostResponse,
  type FactcheckQueryClaimsV2ClaimsPostResponse,
  type FactcheckStreamClaimsV2ClaimsStreamPostResponse,
  type FactcheckQueryScoresV2PostParams,
  type FactcheckStreamScoresV2StreamPostParams,
  type FactcheckQueryClaimsV2ClaimsPostParams,
  type FactcheckStreamClaimsV2ClaimsStreamPostParams,
} from './factcheck';
import * as SocialAPI from './social';
import {
  Social,
  type YoutubeChannelsQuery,
  type YoutubeVideosQuery,
  type YoutubeSummaryQuery,
  type SocialQueryYoutubeChannelsV2YoutubeChannelsPostResponse,
  type SocialQueryYoutubeVideosV2YoutubeVideosPostResponse,
  type SocialQueryYoutubeSummaryV2YoutubeSummaryPostResponse,
  type SocialQueryYoutubeChannelsV2YoutubeChannelsPostParams,
  type SocialQueryYoutubeVideosV2YoutubeVideosPostParams,
  type SocialQueryYoutubeSummaryV2YoutubeSummaryPostParams,
} from './social';

export class Reports extends APIResource {
  citations: CitationsAPI.Citations = new CitationsAPI.Citations(this._client);
  visibility: VisibilityAPI.Visibility = new VisibilityAPI.Visibility(this._client);
  sentiment: SentimentAPI.Sentiment = new SentimentAPI.Sentiment(this._client);
  webSearchResults: WebSearchResultsAPI.WebSearchResults = new WebSearchResultsAPI.WebSearchResults(
    this._client,
  );
  referrals: ReferralsAPI.Referrals = new ReferralsAPI.Referrals(this._client);
  bots: BotsAPI.Bots = new BotsAPI.Bots(this._client);
  queryFanouts: QueryFanoutsAPI.QueryFanouts = new QueryFanoutsAPI.QueryFanouts(this._client);
  shopping: ShoppingAPI.Shopping = new ShoppingAPI.Shopping(this._client);
  accuracy: AccuracyAPI.Accuracy = new AccuracyAPI.Accuracy(this._client);
  factcheck: FactcheckAPI.Factcheck = new FactcheckAPI.Factcheck(this._client);
  social: SocialAPI.Social = new SocialAPI.Social(this._client);

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
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   asset_name: '',
   *   start_date: '2024-01-01T00:00:00.000Z',
   *   end_date: '2024-01-01T00:00:00.000Z',
   *   date_bucket: 'day',
   *   metrics: [],
   * });
   * ```
   */
  querySentimentV2V1SentimentV2Post(
    body: ReportQuerySentimentV2V1SentimentV2PostParams,
    options?: RequestOptions,
  ): APIPromise<ReportQuerySentimentV2V1SentimentV2PostResponse> {
    return this._client.post('/v1/reports/sentiment-v2', { body, ...options });
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
    | SentimentV2ReportQuery.SentimentV2ModelIDFilter
    | SentimentV2ReportQuery.SentimentV2RegionIDFilter
    | SentimentV2ReportQuery.SentimentV2TopicIDFilter
    | SentimentV2ReportQuery.SentimentV2PromptIDFilter
    | SentimentV2ReportQuery.SentimentV2PersonaIDFilter
    | SentimentV2ReportQuery.SentimentV2TagIDFilter
    | SentimentV2ReportQuery.SentimentV2RunIDFilter
    | SentimentV2ReportQuery.SentimentV2ThemeFilter
    | SentimentV2ReportQuery.SentimentV2ClaimFilter
    | SentimentV2ReportQuery.SentimentV2ThemeIDFilter
    | SentimentV2ReportQuery.SentimentV2ClaimIDFilter
    | SentimentV2ReportQuery.SentimentV2SentimentFilter
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

export namespace SentimentV2ReportQuery {
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
    | ReportQuerySentimentV2V1SentimentV2PostParams.SentimentV2ModelIDFilter
    | ReportQuerySentimentV2V1SentimentV2PostParams.SentimentV2RegionIDFilter
    | ReportQuerySentimentV2V1SentimentV2PostParams.SentimentV2TopicIDFilter
    | ReportQuerySentimentV2V1SentimentV2PostParams.SentimentV2PromptIDFilter
    | ReportQuerySentimentV2V1SentimentV2PostParams.SentimentV2PersonaIDFilter
    | ReportQuerySentimentV2V1SentimentV2PostParams.SentimentV2TagIDFilter
    | ReportQuerySentimentV2V1SentimentV2PostParams.SentimentV2RunIDFilter
    | ReportQuerySentimentV2V1SentimentV2PostParams.SentimentV2ThemeFilter
    | ReportQuerySentimentV2V1SentimentV2PostParams.SentimentV2ClaimFilter
    | ReportQuerySentimentV2V1SentimentV2PostParams.SentimentV2ThemeIDFilter
    | ReportQuerySentimentV2V1SentimentV2PostParams.SentimentV2ClaimIDFilter
    | ReportQuerySentimentV2V1SentimentV2PostParams.SentimentV2SentimentFilter
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

export namespace ReportQuerySentimentV2V1SentimentV2PostParams {
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

export interface ReportQuerySentimentV2V1SentimentV2PostResponse {
  info: ReportQuerySentimentV2V1SentimentV2PostResponse.Info;
  data?: Array<ReportQuerySentimentV2V1SentimentV2PostResponse.Data>;
}

export namespace ReportQuerySentimentV2V1SentimentV2PostResponse {
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
Reports.Citations = Citations;
Reports.Visibility = Visibility;
Reports.Sentiment = Sentiment;
Reports.WebSearchResults = WebSearchResults;
Reports.Referrals = Referrals;
Reports.Bots = Bots;
Reports.QueryFanouts = QueryFanouts;
Reports.Shopping = Shopping;
Reports.Accuracy = Accuracy;
Reports.Factcheck = Factcheck;
Reports.Social = Social;

export declare namespace Reports {
  export {
    type SentimentV2ReportQuery as SentimentV2ReportQuery,
    type ReportQuerySentimentV2V1SentimentV2PostResponse as ReportQuerySentimentV2V1SentimentV2PostResponse,
    type ReportQuerySentimentV2V1SentimentV2PostParams as ReportQuerySentimentV2V1SentimentV2PostParams,
  };

  export {
    Citations as Citations,
    type CitationsQuery as CitationsQuery,
    type StreamCitationsQuery as StreamCitationsQuery,
    type CitationsV2Query as CitationsV2Query,
    type CitationQueryV1PostResponse as CitationQueryV1PostResponse,
    type CitationStreamV1StreamPostResponse as CitationStreamV1StreamPostResponse,
    type CitationQueryV2V2PostResponse as CitationQueryV2V2PostResponse,
    type CitationStreamV2V2StreamPostResponse as CitationStreamV2V2StreamPostResponse,
    type CitationQueryV1PostParams as CitationQueryV1PostParams,
    type CitationStreamV1StreamPostParams as CitationStreamV1StreamPostParams,
    type CitationQueryV2V2PostParams as CitationQueryV2V2PostParams,
    type CitationStreamV2V2StreamPostParams as CitationStreamV2V2StreamPostParams,
  };

  export {
    Visibility as Visibility,
    type VisibilityQuery as VisibilityQuery,
    type StreamVisibilityQuery as StreamVisibilityQuery,
    type VisibilityV2Query as VisibilityV2Query,
    type VisibilityStreamV1StreamPostResponse as VisibilityStreamV1StreamPostResponse,
    type VisibilityQueryV2V2PostResponse as VisibilityQueryV2V2PostResponse,
    type VisibilityStreamV2V2StreamPostResponse as VisibilityStreamV2V2StreamPostResponse,
    type VisibilityQueryV1PostParams as VisibilityQueryV1PostParams,
    type VisibilityStreamV1StreamPostParams as VisibilityStreamV1StreamPostParams,
    type VisibilityQueryV2V2PostParams as VisibilityQueryV2V2PostParams,
    type VisibilityStreamV2V2StreamPostParams as VisibilityStreamV2V2StreamPostParams,
  };

  export {
    Sentiment as Sentiment,
    type SentimentQuery as SentimentQuery,
    type StreamSentimentQuery as StreamSentimentQuery,
    type SentimentV2Query as SentimentV2Query,
    type SentimentStreamV1StreamPostResponse as SentimentStreamV1StreamPostResponse,
    type SentimentQueryV2V2PostResponse as SentimentQueryV2V2PostResponse,
    type SentimentStreamV2V2StreamPostResponse as SentimentStreamV2V2StreamPostResponse,
    type SentimentQueryV1PostParams as SentimentQueryV1PostParams,
    type SentimentStreamV1StreamPostParams as SentimentStreamV1StreamPostParams,
    type SentimentQueryV2V2PostParams as SentimentQueryV2V2PostParams,
    type SentimentStreamV2V2StreamPostParams as SentimentStreamV2V2StreamPostParams,
  };

  export {
    WebSearchResults as WebSearchResults,
    type WebSearchResultsQuery as WebSearchResultsQuery,
    type StreamWebSearchResultsQuery as StreamWebSearchResultsQuery,
    type WebSearchResultQueryV1PostResponse as WebSearchResultQueryV1PostResponse,
    type WebSearchResultStreamV1StreamPostResponse as WebSearchResultStreamV1StreamPostResponse,
    type WebSearchResultQueryV1PostParams as WebSearchResultQueryV1PostParams,
    type WebSearchResultStreamV1StreamPostParams as WebSearchResultStreamV1StreamPostParams,
  };

  export {
    Referrals as Referrals,
    type ReferralsQuery as ReferralsQuery,
    type ReferralsQueryV2 as ReferralsQueryV2,
    type ReferralCreateV1V1PostParams as ReferralCreateV1V1PostParams,
    type ReferralCreateV2V2PostParams as ReferralCreateV2V2PostParams,
  };

  export {
    Bots as Bots,
    type BotsReportQuery as BotsReportQuery,
    type BotsReportQueryV2 as BotsReportQueryV2,
    type BotCreateV1V1PostParams as BotCreateV1V1PostParams,
    type BotCreateV2V2PostParams as BotCreateV2V2PostParams,
  };

  export {
    QueryFanouts as QueryFanouts,
    type QueryFanoutsQuery as QueryFanoutsQuery,
    type QueryFanoutsV2Query as QueryFanoutsV2Query,
    type QueryFanoutV2V2PostResponse as QueryFanoutV2V2PostResponse,
    type QueryFanoutStreamV2V2StreamPostResponse as QueryFanoutStreamV2V2StreamPostResponse,
    type QueryFanoutV1PostParams as QueryFanoutV1PostParams,
    type QueryFanoutV2V2PostParams as QueryFanoutV2V2PostParams,
    type QueryFanoutStreamV2V2StreamPostParams as QueryFanoutStreamV2V2StreamPostParams,
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
    type ShoppingTriggeredPromptsQuery as ShoppingTriggeredPromptsQuery,
    type ShoppingTriggeredTopicsQuery as ShoppingTriggeredTopicsQuery,
    type ShoppingMerchantShareQuery as ShoppingMerchantShareQuery,
    type ShoppingProductMerchantURLsQuery as ShoppingProductMerchantURLsQuery,
    type ShoppingExecutionsQuery as ShoppingExecutionsQuery,
    type ShoppingBrandsV2Query as ShoppingBrandsV2Query,
    type ShoppingProductsV2Query as ShoppingProductsV2Query,
    type ShoppingMerchantsV2Query as ShoppingMerchantsV2Query,
    type ShoppingTriggerRateV2Query as ShoppingTriggerRateV2Query,
    type ShoppingQueryBrandsV2V2BrandsPostResponse as ShoppingQueryBrandsV2V2BrandsPostResponse,
    type ShoppingStreamBrandsV2V2BrandsStreamPostResponse as ShoppingStreamBrandsV2V2BrandsStreamPostResponse,
    type ShoppingQueryProductsV2V2ProductsPostResponse as ShoppingQueryProductsV2V2ProductsPostResponse,
    type ShoppingStreamProductsV2V2ProductsStreamPostResponse as ShoppingStreamProductsV2V2ProductsStreamPostResponse,
    type ShoppingQueryMerchantsV2V2MerchantsPostResponse as ShoppingQueryMerchantsV2V2MerchantsPostResponse,
    type ShoppingStreamMerchantsV2V2MerchantsStreamPostResponse as ShoppingStreamMerchantsV2V2MerchantsStreamPostResponse,
    type ShoppingQueryTriggerRateV2V2TriggerRatePostResponse as ShoppingQueryTriggerRateV2V2TriggerRatePostResponse,
    type ShoppingStreamTriggerRateV2V2TriggerRateStreamPostResponse as ShoppingStreamTriggerRateV2V2TriggerRateStreamPostResponse,
    type ShoppingVisibilityV1VisibilityPostParams as ShoppingVisibilityV1VisibilityPostParams,
    type ShoppingItemVisibilityV1ItemVisibilityPostParams as ShoppingItemVisibilityV1ItemVisibilityPostParams,
    type ShoppingMerchantDistributionV1MerchantDistributionPostParams as ShoppingMerchantDistributionV1MerchantDistributionPostParams,
    type ShoppingMerchantVisibilityByBrandV1MerchantVisibilityByBrandPostParams as ShoppingMerchantVisibilityByBrandV1MerchantVisibilityByBrandPostParams,
    type ShoppingMerchantByItemsV1MerchantByItemsPostParams as ShoppingMerchantByItemsV1MerchantByItemsPostParams,
    type ShoppingAllItemsWithMerchantsV1AllItemsWithMerchantsPostParams as ShoppingAllItemsWithMerchantsV1AllItemsWithMerchantsPostParams,
    type ShoppingTriggerRateV1TriggerRatePostParams as ShoppingTriggerRateV1TriggerRatePostParams,
    type ShoppingTriggeredPromptsV1TriggeredPromptsPostParams as ShoppingTriggeredPromptsV1TriggeredPromptsPostParams,
    type ShoppingTriggeredTopicsV1TriggeredTopicsPostParams as ShoppingTriggeredTopicsV1TriggeredTopicsPostParams,
    type ShoppingMerchantShareV1MerchantSharePostParams as ShoppingMerchantShareV1MerchantSharePostParams,
    type ShoppingProductMerchantURLsV1ProductMerchantURLsPostParams as ShoppingProductMerchantURLsV1ProductMerchantURLsPostParams,
    type ShoppingExecutionsV1ExecutionsPostParams as ShoppingExecutionsV1ExecutionsPostParams,
    type ShoppingQueryBrandsV2V2BrandsPostParams as ShoppingQueryBrandsV2V2BrandsPostParams,
    type ShoppingStreamBrandsV2V2BrandsStreamPostParams as ShoppingStreamBrandsV2V2BrandsStreamPostParams,
    type ShoppingQueryProductsV2V2ProductsPostParams as ShoppingQueryProductsV2V2ProductsPostParams,
    type ShoppingStreamProductsV2V2ProductsStreamPostParams as ShoppingStreamProductsV2V2ProductsStreamPostParams,
    type ShoppingQueryMerchantsV2V2MerchantsPostParams as ShoppingQueryMerchantsV2V2MerchantsPostParams,
    type ShoppingStreamMerchantsV2V2MerchantsStreamPostParams as ShoppingStreamMerchantsV2V2MerchantsStreamPostParams,
    type ShoppingQueryTriggerRateV2V2TriggerRatePostParams as ShoppingQueryTriggerRateV2V2TriggerRatePostParams,
    type ShoppingStreamTriggerRateV2V2TriggerRateStreamPostParams as ShoppingStreamTriggerRateV2V2TriggerRateStreamPostParams,
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

  export {
    Factcheck as Factcheck,
    type FactcheckScoresQuery as FactcheckScoresQuery,
    type FactcheckClaimsQuery as FactcheckClaimsQuery,
    type FactcheckQueryScoresV2PostResponse as FactcheckQueryScoresV2PostResponse,
    type FactcheckStreamScoresV2StreamPostResponse as FactcheckStreamScoresV2StreamPostResponse,
    type FactcheckQueryClaimsV2ClaimsPostResponse as FactcheckQueryClaimsV2ClaimsPostResponse,
    type FactcheckStreamClaimsV2ClaimsStreamPostResponse as FactcheckStreamClaimsV2ClaimsStreamPostResponse,
    type FactcheckQueryScoresV2PostParams as FactcheckQueryScoresV2PostParams,
    type FactcheckStreamScoresV2StreamPostParams as FactcheckStreamScoresV2StreamPostParams,
    type FactcheckQueryClaimsV2ClaimsPostParams as FactcheckQueryClaimsV2ClaimsPostParams,
    type FactcheckStreamClaimsV2ClaimsStreamPostParams as FactcheckStreamClaimsV2ClaimsStreamPostParams,
  };

  export {
    Social as Social,
    type YoutubeChannelsQuery as YoutubeChannelsQuery,
    type YoutubeVideosQuery as YoutubeVideosQuery,
    type YoutubeSummaryQuery as YoutubeSummaryQuery,
    type SocialQueryYoutubeChannelsV2YoutubeChannelsPostResponse as SocialQueryYoutubeChannelsV2YoutubeChannelsPostResponse,
    type SocialQueryYoutubeVideosV2YoutubeVideosPostResponse as SocialQueryYoutubeVideosV2YoutubeVideosPostResponse,
    type SocialQueryYoutubeSummaryV2YoutubeSummaryPostResponse as SocialQueryYoutubeSummaryV2YoutubeSummaryPostResponse,
    type SocialQueryYoutubeChannelsV2YoutubeChannelsPostParams as SocialQueryYoutubeChannelsV2YoutubeChannelsPostParams,
    type SocialQueryYoutubeVideosV2YoutubeVideosPostParams as SocialQueryYoutubeVideosV2YoutubeVideosPostParams,
    type SocialQueryYoutubeSummaryV2YoutubeSummaryPostParams as SocialQueryYoutubeSummaryV2YoutubeSummaryPostParams,
  };
}

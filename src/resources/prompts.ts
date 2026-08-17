// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import type * as Shared from './shared';
import type * as ReportsAPI from './reports/reports';

export class Prompts extends APIResource {
  /**
   * Get Answers
   *
   * @param {PromptAnswersParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PromptAnswersResponse>} Successful Response
   *
   * @example
   * ```ts
   * const answers = await client.prompts.answers({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '2024-01-01T00:00:00.000Z',
   *   end_date: '2024-01-01T00:00:00.000Z',
   * });
   * ```
   */
  answers(body: PromptAnswersParams, options?: RequestOptions): APIPromise<PromptAnswersResponse> {
    return this._client.post('/v1/prompts/answers', { body, ...options });
  }
}

export interface PromptAnswersParams {
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * @format date-time
   */
  start_date: string;
  /**
   * @format date-time
   */
  end_date: string;
  /**
   * Pagination parameters for the results. Default is 10,000 rows with no offset.
   */
  pagination?: Shared.Pagination;
  /**
   * List of filters to apply to the answers report.
   */
  filters?: Array<
    | Shared.RegionIDFilter
    | Shared.RegionNameFilter
    | Shared.ModelIDFilter
    | Shared.TagIDFilter
    | Shared.AnalysisTypeFilter
    | Shared.PromptTypeFilter
    | Shared.PromptFilter
    | ReportsAPI.PromptIDFilter
    | Shared.PersonaIDFilter
    | Shared.TopicIDFilter
    | Shared.AssetIDFilter
    | PromptAnswersParams.ProfoundAnswerEngineInsightsFiltersAssetNameFilter
  >;
  include?: PromptAnswersParams.Include;
}

export namespace PromptAnswersParams {
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

  export interface Include {
    /**
     * @default false
     */
    run_id?: boolean;
    /**
     * @default true
     */
    created_at?: boolean;
    /**
     * @default true
     */
    prompt?: boolean;
    /**
     * @default false
     */
    prompt_id?: boolean;
    /**
     * @default true
     */
    mentions?: boolean;
    /**
     * @default false
     */
    analysis_types?: boolean;
    /**
     * @default true
     * @deprecated
     */
    prompt_type?: boolean;
    /**
     * @default true
     */
    response?: boolean;
    /**
     * @default true
     */
    citations?: boolean;
    /**
     * @default false
     */
    citation_details?: boolean;
    /**
     * @default false
     */
    web_search_results?: boolean;
    /**
     * @default false
     */
    search_triggered?: boolean;
    /**
     * Use 'sentiment_themes' instead
     * @default true
     * @deprecated
     */
    themes?: boolean;
    /**
     * Uses legacy sentiment data.
     * @default false
     */
    sentiment_themes?: boolean;
    /**
     * @default true
     */
    topic?: boolean;
    /**
     * @default false
     */
    topic_id?: boolean;
    /**
     * @default true
     */
    region?: boolean;
    /**
     * @default true
     */
    model?: boolean;
    /**
     * @default true
     */
    model_id?: boolean;
    /**
     * @default true
     */
    asset?: boolean;
    /**
     * @default false
     */
    asset_id?: boolean;
    /**
     * @default false
     */
    tags?: boolean;
    /**
     * @default false
     */
    search_queries?: boolean;
    /**
     * @default false
     */
    persona?: boolean;
  }
}

export interface PromptAnswersResponse {
  info: PromptAnswersResponse.Info;
  data: Array<PromptAnswersResponse.Data>;
}

export namespace PromptAnswersResponse {
  export interface Info {
    total_rows: number;
  }

  export interface Data {
    /**
     * @format uuid
     */
    run_id?: string | null;
    /**
     * @format date-time
     */
    created_at?: string | null;
    prompt?: string | null;
    /**
     * @format uuid
     */
    prompt_id?: string | null;
    mentions?: Array<string> | null;
    analysis_types?: Array<string> | null;
    prompt_type?: string | null;
    response?: string | null;
    citations?: Array<string> | null;
    citation_details?: Array<Data.CitationDetail> | null;
    web_search_results?: Array<string> | null;
    search_triggered?: boolean | null;
    themes?: Array<string> | null;
    /**
     * Uses legacy sentiment data.
     */
    sentiment_themes?: Array<Data.SentimentTheme> | null;
    search_queries?: Array<string> | null;
    topic?: string | null;
    /**
     * @format uuid
     */
    topic_id?: string | null;
    region?: string | null;
    model?: string | null;
    /**
     * @format uuid
     */
    model_id?: string | null;
    asset?: string | null;
    /**
     * @format uuid
     */
    asset_id?: string | null;
    tags?: Array<string> | null;
    persona?: string | null;
  }

  export namespace Data {
    export interface CitationDetail {
      url: string;
      clean_url: string;
      title: string;
      hostname: string;
      path: string;
      text?: string | null;
      first_cited_at?: string | null;
      positions?: Array<number>;
      groups?: Array<CitationDetail.Group> | null;
      citation_category?: string | null;
    }

    export namespace CitationDetail {
      export interface Group {
        group_id: number;
        group_position: number;
      }
    }

    export interface SentimentTheme {
      type: 'positive' | 'negative';
      name: string;
    }
  }
}
export declare namespace Prompts {
  export {
    type PromptAnswersResponse as PromptAnswersResponse,
    type PromptAnswersParams as PromptAnswersParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Prompts extends APIResource {
  /**
   * Get Answers
   */
  answers(body: PromptAnswersParams, options?: RequestOptions): APIPromise<PromptAnswersResponse> {
    return this._client.post('/v1/prompts/answers', { body, ...options });
  }

  /**
   * Query Answers V2
   */
  answersV2(body: PromptAnswersV2Params, options?: RequestOptions): APIPromise<PromptAnswersV2Response> {
    return this._client.post('/v2/prompts/answers', { body, ...options });
  }

  /**
   * Stream Answers V2
   */
  streamAnswersV2(body: PromptStreamAnswersV2Params, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/v2/prompts/answers/stream', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Response for the answers endpoint.
 */
export interface PromptAnswersResponse {
  data: Array<PromptAnswersResponse.Data>;

  info: PromptAnswersResponse.Info;
}

export namespace PromptAnswersResponse {
  /**
   * Raw data for the answers endpoint.
   */
  export interface Data {
    analysis_types?: Array<string> | null;

    asset?: string | null;

    asset_id?: string | null;

    citation_details?: Array<Data.CitationDetail> | null;

    citations?: Array<string> | null;

    created_at?: string | null;

    mentions?: Array<string> | null;

    model?: string | null;

    model_id?: string | null;

    persona?: string | null;

    prompt?: string | null;

    prompt_id?: string | null;

    prompt_type?: string | null;

    region?: string | null;

    response?: string | null;

    run_id?: string | null;

    search_queries?: Array<string> | null;

    search_triggered?: boolean | null;

    /**
     * Uses legacy sentiment data.
     */
    sentiment_themes?: Array<Data.SentimentTheme> | null;

    tags?: Array<string> | null;

    themes?: Array<string> | null;

    topic?: string | null;

    topic_id?: string | null;

    web_search_results?: Array<string> | null;
  }

  export namespace Data {
    export interface CitationDetail {
      clean_url: string;

      hostname: string;

      path: string;

      title: string;

      url: string;

      citation_category?: string | null;

      first_cited_at?: string | null;

      groups?: Array<CitationDetail.Group> | null;

      positions?: Array<number>;

      text?: string | null;
    }

    export namespace CitationDetail {
      export interface Group {
        group_id: number;

        group_position: number;
      }
    }

    export interface SentimentTheme {
      name: string;

      type: 'positive' | 'negative';
    }
  }

  export interface Info {
    total_rows: number;
  }
}

export type PromptAnswersV2Response = { [key: string]: unknown };

export interface PromptAnswersParams {
  category_id: string;

  end_date: string;

  start_date: string;

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
    | Shared.PersonaIDFilter
    | Shared.TopicIDFilter
    | Shared.AssetIDFilter
    | PromptAnswersParams.ProfoundAnswerEngineInsightsFiltersAssetNameFilter
  >;

  include?: PromptAnswersParams.Include;

  /**
   * Pagination parameters for the results. Default is 10,000 rows with no offset.
   */
  pagination?: Shared.Pagination;
}

export namespace PromptAnswersParams {
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

  export interface Include {
    analysis_types?: boolean;

    asset?: boolean;

    asset_id?: boolean;

    citation_details?: boolean;

    citations?: boolean;

    created_at?: boolean;

    mentions?: boolean;

    model?: boolean;

    model_id?: boolean;

    persona?: boolean;

    prompt?: boolean;

    prompt_id?: boolean;

    /**
     * @deprecated
     */
    prompt_type?: boolean;

    region?: boolean;

    response?: boolean;

    run_id?: boolean;

    search_queries?: boolean;

    search_triggered?: boolean;

    /**
     * Uses legacy sentiment data.
     */
    sentiment_themes?: boolean;

    tags?: boolean;

    /**
     * @deprecated Use 'sentiment_themes' instead
     */
    themes?: boolean;

    topic?: boolean;

    topic_id?: boolean;

    web_search_results?: boolean;
  }
}

export interface PromptAnswersV2Params {
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
  filter?: PromptAnswersV2Params.Filter | null;

  /**
   * Which row fields to return: `run_id`, `date`, `model`, `topic`, `topic_id`,
   * `region`, `persona`, `tags`, `prompt`, `prompt_id`, `response`, `mentions`,
   * `citations`, `search_queries`, `analysis_types`, `sentiment_claims`. Omit for
   * all of them.
   */
  include?: Array<
    | 'run_id'
    | 'date'
    | 'model'
    | 'topic'
    | 'topic_id'
    | 'persona'
    | 'region'
    | 'tags'
    | 'prompt'
    | 'prompt_id'
    | 'response'
    | 'mentions'
    | 'citations'
    | 'search_queries'
    | 'analysis_types'
    | 'sentiment_claims'
  > | null;

  /**
   * Page size; default 10, max 200.
   */
  limit?: number | null;

  /**
   * Stream endpoint only: cap the number of streamed rows (default: all).
   */
  max_results?: number | null;
}

export namespace PromptAnswersV2Params {
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

export interface PromptStreamAnswersV2Params {
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
  filter?: PromptStreamAnswersV2Params.Filter | null;

  /**
   * Which row fields to return: `run_id`, `date`, `model`, `topic`, `topic_id`,
   * `region`, `persona`, `tags`, `prompt`, `prompt_id`, `response`, `mentions`,
   * `citations`, `search_queries`, `analysis_types`, `sentiment_claims`. Omit for
   * all of them.
   */
  include?: Array<
    | 'run_id'
    | 'date'
    | 'model'
    | 'topic'
    | 'topic_id'
    | 'persona'
    | 'region'
    | 'tags'
    | 'prompt'
    | 'prompt_id'
    | 'response'
    | 'mentions'
    | 'citations'
    | 'search_queries'
    | 'analysis_types'
    | 'sentiment_claims'
  > | null;

  /**
   * Page size; default 10, max 200.
   */
  limit?: number | null;

  /**
   * Stream endpoint only: cap the number of streamed rows (default: all).
   */
  max_results?: number | null;
}

export namespace PromptStreamAnswersV2Params {
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

export declare namespace Prompts {
  export {
    type PromptAnswersResponse as PromptAnswersResponse,
    type PromptAnswersV2Response as PromptAnswersV2Response,
    type PromptAnswersParams as PromptAnswersParams,
    type PromptAnswersV2Params as PromptAnswersV2Params,
    type PromptStreamAnswersV2Params as PromptStreamAnswersV2Params,
  };
}

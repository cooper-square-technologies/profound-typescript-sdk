// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { Stream } from '../../core/streaming';
import type { RequestOptions } from '../../internal/request-options';
import { buildHeaders } from '../../internal/headers';
import type * as Shared from '../shared';

export class Answers extends APIResource {
  /**
   * Get Answers
   *
   * @param {AnswerCreateV1PostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AnswerCreateV1PostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const createV1Post = await client.prompts.answers.createV1Post({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '2024-01-01T00:00:00.000Z',
   *   end_date: '2024-01-01T00:00:00.000Z',
   * });
   * ```
   */
  createV1Post(
    body: AnswerCreateV1PostParams,
    options?: RequestOptions,
  ): APIPromise<AnswerCreateV1PostResponse> {
    return this._client.post('/v1/prompts/answers', { body, ...options });
  }

  /**
   * Query Answers V2
   *
   * @param {AnswerQueryV2V2PostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AnswerQueryV2V2PostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const queryV2V2Post = await client.prompts.answers.queryV2V2Post({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '',
   *   end_date: '',
   * });
   * ```
   */
  queryV2V2Post(
    body: AnswerQueryV2V2PostParams,
    options?: RequestOptions,
  ): APIPromise<AnswerQueryV2V2PostResponse> {
    return this._client.post('/v2/prompts/answers', { body, ...options });
  }

  /**
   * Stream Answers V2
   *
   * @param {AnswerStreamV2V2StreamPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Stream<AnswerStreamV2V2StreamPostResponse>>} Server-sent events stream. Emits one `summary` event (the report `info` block) first, then one `result` event per row.
   *
   * @example
   * ```ts
   * const stream = await client.prompts.answers.streamV2V2StreamPost({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '',
   *   end_date: '',
   * });
   *
   * for await (const event of stream) {
   *   console.log(event);
   * }
   * ```
   */
  streamV2V2StreamPost(
    body: AnswerStreamV2V2StreamPostParams,
    options?: RequestOptions,
  ): APIPromise<Stream<AnswerStreamV2V2StreamPostResponse>> {
    return this._client.post('/v2/prompts/answers/stream', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    });
  }
}

/**
 * Body for the answers endpoint.
 */
export interface AnswersQuery {
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
    | Shared.PromptIDFilter
    | Shared.PersonaIDFilter
    | Shared.TopicIDFilter
    | Shared.AssetIDFilter
    | Shared.ProfoundAnswerEngineInsightsFiltersAssetNameFilter
  >;
  include?: AnswersQuery.Include;
}

export namespace AnswersQuery {
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

export interface AnswersV2Query {
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;
  /**
   * Which row fields to return: `run_id`, `date`, `model`, `topic`, `topic_id`, `region`, `persona`, `tags`, `prompt`, `prompt_id`, `response`, `mentions`, `citations`, `citation_details`, `search_queries`, `analysis_types`, `sentiment_claims`. Omit for all fields except `citation_details`, which must be requested explicitly because it is expensive.
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
    | 'citation_details'
    | 'search_queries'
    | 'analysis_types'
    | 'sentiment_claims'
  > | null;
  /**
   * and/or/not tree over `model`, `topic`, `region`, `persona`, `prompt`, `tag`, `analysis_type` (visibility/sentiment/factcheck); plus top-level `and` leaves `domain` or `page` (`is` one value, or `in` a list). Substring-search the prompt with `{"field": "prompt", "op": "contains", "value": "…"}`.
   */
  filter?: Shared.FilterNode | null;
  /**
   * Page size; default 10, max 200.
   * @maximum 200
   */
  limit?: number | null;
  /**
   * Stream endpoint only: cap the number of streamed rows (default: all).
   */
  max_results?: number | null;
  cursor?: string | null;
}

export interface AnswerCreateV1PostParams {
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
    | Shared.PromptIDFilter
    | Shared.PersonaIDFilter
    | Shared.TopicIDFilter
    | Shared.AssetIDFilter
    | Shared.ProfoundAnswerEngineInsightsFiltersAssetNameFilter
  >;
  include?: AnswerCreateV1PostParams.Include;
}

export namespace AnswerCreateV1PostParams {
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

export interface AnswerCreateV1PostResponse {
  info: AnswerCreateV1PostResponse.Info;
  data: Array<AnswerCreateV1PostResponse.Data>;
}

export namespace AnswerCreateV1PostResponse {
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

export interface AnswerQueryV2V2PostParams {
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;
  /**
   * Which row fields to return: `run_id`, `date`, `model`, `topic`, `topic_id`, `region`, `persona`, `tags`, `prompt`, `prompt_id`, `response`, `mentions`, `citations`, `citation_details`, `search_queries`, `analysis_types`, `sentiment_claims`. Omit for all fields except `citation_details`, which must be requested explicitly because it is expensive.
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
    | 'citation_details'
    | 'search_queries'
    | 'analysis_types'
    | 'sentiment_claims'
  > | null;
  /**
   * and/or/not tree over `model`, `topic`, `region`, `persona`, `prompt`, `tag`, `analysis_type` (visibility/sentiment/factcheck); plus top-level `and` leaves `domain` or `page` (`is` one value, or `in` a list). Substring-search the prompt with `{"field": "prompt", "op": "contains", "value": "…"}`.
   */
  filter?: Shared.FilterNode | null;
  /**
   * Page size; default 10, max 200.
   * @maximum 200
   */
  limit?: number | null;
  /**
   * Stream endpoint only: cap the number of streamed rows (default: all).
   */
  max_results?: number | null;
  cursor?: string | null;
}

export interface AnswerQueryV2V2PostResponse {
  info: AnswerQueryV2V2PostResponse.Info;
  data: Array<AnswerQueryV2V2PostResponse.Data>;
}

export namespace AnswerQueryV2V2PostResponse {
  export interface Info {
    /**
     * Number of rows returned in `data` for this page.
     */
    count: number;
    /**
     * Display names of the models the report covers.
     */
    models: Array<string>;
    /**
     * Echoed request start date (YYYY-MM-DD, ET).
     */
    start_date: string;
    /**
     * Echoed request end date (YYYY-MM-DD, ET).
     */
    end_date: string;
    /**
     * Row fields returned (echoes `include`, or all fields when omitted).
     */
    include: Array<string>;
    /**
     * Total rows matching the query before pagination (null when not computed).
     */
    total_results?: number | null;
    /**
     * Opaque cursor for the next page; null on the last page.
     */
    next_cursor?: string | null;
    /**
     * Echoed normalized filter tree, or null when no filter was sent.
     */
    filter?: Record<string, unknown> | null;
    [k: string]: unknown;
  }

  export interface Data {
    run_id?: string | null;
    date?: string | null;
    model?: Shared.DimensionRef | null;
    topic?: string | null;
    topic_id?: string | null;
    region?: string | null;
    persona?: string | null;
    tags?: Array<string> | null;
    prompt?: string | null;
    prompt_id?: string | null;
    response?: string | null;
    mentions?: Array<string> | null;
    citations?: Array<string> | null;
    /**
     * Citation metadata. `positions` identify citation locations in the answer text. Each `groups` entry represents a rendered citation pill, including single-source pills; `group_position` is the source's position within that pill.
     */
    citation_details?: Array<Data.CitationDetail> | null;
    search_queries?: Array<string> | null;
    analysis_types?: Array<string> | null;
    sentiment_claims?: Array<Record<string, unknown>> | null;
    [k: string]: unknown;
  }

  export namespace Data {
    export interface CitationDetail {
      url: string;
      clean_url: string;
      title: string;
      hostname: string;
      path: string;
      text?: string | null;
      positions?: Array<number>;
      groups?: Array<CitationDetail.Group> | null;
      first_cited_at?: string | null;
      citation_category?: string | null;
    }

    export namespace CitationDetail {
      export interface Group {
        group_id: number;
        group_position: number;
      }
    }
  }
}

export interface AnswerStreamV2V2StreamPostParams {
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;
  /**
   * Which row fields to return: `run_id`, `date`, `model`, `topic`, `topic_id`, `region`, `persona`, `tags`, `prompt`, `prompt_id`, `response`, `mentions`, `citations`, `citation_details`, `search_queries`, `analysis_types`, `sentiment_claims`. Omit for all fields except `citation_details`, which must be requested explicitly because it is expensive.
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
    | 'citation_details'
    | 'search_queries'
    | 'analysis_types'
    | 'sentiment_claims'
  > | null;
  /**
   * and/or/not tree over `model`, `topic`, `region`, `persona`, `prompt`, `tag`, `analysis_type` (visibility/sentiment/factcheck); plus top-level `and` leaves `domain` or `page` (`is` one value, or `in` a list). Substring-search the prompt with `{"field": "prompt", "op": "contains", "value": "…"}`.
   */
  filter?: Shared.FilterNode | null;
  /**
   * Page size; default 10, max 200.
   * @maximum 200
   */
  limit?: number | null;
  /**
   * Stream endpoint only: cap the number of streamed rows (default: all).
   */
  max_results?: number | null;
  cursor?: string | null;
}

export type AnswerStreamV2V2StreamPostResponse =
  | AnswerStreamV2V2StreamPostResponse.AnswersV2Info
  | AnswerStreamV2V2StreamPostResponse.AnswerRow;

export namespace AnswerStreamV2V2StreamPostResponse {
  export interface AnswersV2Info {
    /**
     * Number of rows returned in `data` for this page.
     */
    count: number;
    /**
     * Display names of the models the report covers.
     */
    models: Array<string>;
    /**
     * Echoed request start date (YYYY-MM-DD, ET).
     */
    start_date: string;
    /**
     * Echoed request end date (YYYY-MM-DD, ET).
     */
    end_date: string;
    /**
     * Row fields returned (echoes `include`, or all fields when omitted).
     */
    include: Array<string>;
    /**
     * Total rows matching the query before pagination (null when not computed).
     */
    total_results?: number | null;
    /**
     * Opaque cursor for the next page; null on the last page.
     */
    next_cursor?: string | null;
    /**
     * Echoed normalized filter tree, or null when no filter was sent.
     */
    filter?: Record<string, unknown> | null;
    [k: string]: unknown;
  }

  export interface AnswerRow {
    run_id?: string | null;
    date?: string | null;
    model?: Shared.DimensionRef | null;
    topic?: string | null;
    topic_id?: string | null;
    region?: string | null;
    persona?: string | null;
    tags?: Array<string> | null;
    prompt?: string | null;
    prompt_id?: string | null;
    response?: string | null;
    mentions?: Array<string> | null;
    citations?: Array<string> | null;
    /**
     * Citation metadata. `positions` identify citation locations in the answer text. Each `groups` entry represents a rendered citation pill, including single-source pills; `group_position` is the source's position within that pill.
     */
    citation_details?: Array<AnswerRow.CitationDetail> | null;
    search_queries?: Array<string> | null;
    analysis_types?: Array<string> | null;
    sentiment_claims?: Array<Record<string, unknown>> | null;
    [k: string]: unknown;
  }

  export namespace AnswerRow {
    export interface CitationDetail {
      url: string;
      clean_url: string;
      title: string;
      hostname: string;
      path: string;
      text?: string | null;
      positions?: Array<number>;
      groups?: Array<CitationDetail.Group> | null;
      first_cited_at?: string | null;
      citation_category?: string | null;
    }

    export namespace CitationDetail {
      export interface Group {
        group_id: number;
        group_position: number;
      }
    }
  }
}
export declare namespace Answers {
  export {
    type AnswersQuery as AnswersQuery,
    type AnswersV2Query as AnswersV2Query,
    type AnswerCreateV1PostResponse as AnswerCreateV1PostResponse,
    type AnswerQueryV2V2PostResponse as AnswerQueryV2V2PostResponse,
    type AnswerStreamV2V2StreamPostResponse as AnswerStreamV2V2StreamPostResponse,
    type AnswerCreateV1PostParams as AnswerCreateV1PostParams,
    type AnswerQueryV2V2PostParams as AnswerQueryV2V2PostParams,
    type AnswerStreamV2V2StreamPostParams as AnswerStreamV2V2StreamPostParams,
  };
}

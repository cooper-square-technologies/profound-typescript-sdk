// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import { Stream } from "../../core/streaming";
import type { RequestOptions } from "../../internal/request-options";
import { buildHeaders } from "../../internal/headers";

export class Answers extends APIResource {
  /**
   * Get Answers
   *
   * @param {AnswerCreateV1PromptsPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AnswerCreateV1PromptsPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const createV1PromptsPost = await client.prompts.answers.createV1PromptsPost({
   *   category_id: "",
   *   start_date: "",
   *   end_date: "",
   * });
   * ```
   */
  createV1PromptsPost(body: AnswerCreateV1PromptsPostParams, options?: RequestOptions): APIPromise<AnswerCreateV1PromptsPostResponse> {
    return this._client.post("/v1/prompts/answers", { body: body, ...options });
  }

  /**
   * Query Answers V2
   *
   * @param {AnswerQueryV2V2PromptsPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AnswerQueryV2V2PromptsPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const queryV2V2PromptsPost = await client.prompts.answers.queryV2V2PromptsPost({
   *   category_id: "",
   *   start_date: "",
   *   end_date: "",
   * });
   * ```
   */
  queryV2V2PromptsPost(body: AnswerQueryV2V2PromptsPostParams, options?: RequestOptions): APIPromise<AnswerQueryV2V2PromptsPostResponse> {
    return this._client.post("/v2/prompts/answers", { body: body, ...options });
  }

  /**
   * Stream Answers V2
   *
   * @param {AnswerStreamV2V2PromptsStreamPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Stream<string>>} Successful Response
   *
   * @example
   * ```ts
   * const stream = await client.prompts.answers.streamV2V2PromptsStreamPost({
   *   category_id: "",
   *   start_date: "",
   *   end_date: "",
   * });
   * for await (const event of stream) {
   *   console.log(event);
   * }
   * ```
   */
  streamV2V2PromptsStreamPost(body: AnswerStreamV2V2PromptsStreamPostParams, options?: RequestOptions): APIPromise<Stream<string>> {
    return this._client.post("/v2/prompts/answers/stream", { body: body, ...options, headers: buildHeaders([{ Accept: "text/event-stream" }, options?.headers]), stream: true });
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
  pagination?: Pagination;
  /**
   * List of filters to apply to the answers report.
   */
  filters?: Array<RegionIDFilter | RegionNameFilter | ModelIDFilter | TagIDFilter | AnalysisTypeFilter | PromptTypeFilter | PromptFilter | PersonaIDFilter | TopicIDFilter | AssetIDFilter | { field: "asset_name"; operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive"; value: string | Array<string> }>;
  include?: { run_id?: boolean; created_at?: boolean; prompt?: boolean; prompt_id?: boolean; mentions?: boolean; analysis_types?: boolean; prompt_type?: boolean; response?: boolean; citations?: boolean; citation_details?: boolean; web_search_results?: boolean; search_triggered?: boolean; themes?: boolean; sentiment_themes?: boolean; topic?: boolean; topic_id?: boolean; region?: boolean; model?: boolean; model_id?: boolean; asset?: boolean; asset_id?: boolean; tags?: boolean; search_queries?: boolean; persona?: boolean };
}

export interface AnswersV2Query {
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
   * Which row fields to return: `run_id`, `date`, `model`, `topic`, `topic_id`, `region`, `persona`, `tags`, `prompt`, `prompt_id`, `response`, `mentions`, `citations`, `search_queries`, `analysis_types`, `sentiment_claims`. Omit for all of them.
   */
  include?: Array<"run_id" | "date" | "model" | "topic" | "topic_id" | "persona" | "region" | "tags" | "prompt" | "prompt_id" | "response" | "mentions" | "citations" | "search_queries" | "analysis_types" | "sentiment_claims"> | null;
  /**
   * and/or/not tree over `model`, `topic`, `region`, `persona`, `prompt`, `tag`, `analysis_type` (visibility/sentiment/factcheck); plus top-level `and` leaves `domain` or `page` (`is` one value, or `in` a list). Substring-search the prompt with `{"field": "prompt", "op": "contains", "value": "…"}`.
   */
  filter?: { and?: Array<unknown> | null; or?: Array<unknown> | null; not?: unknown; field?: string | null; op?: string | null; value?: string };
  /**
   * Page size; default 10, max 50.
   * @maximum 50
   */
  limit?: number | null;
  /**
   * Stream endpoint only: cap the number of streamed rows (default: all).
   */
  max_results?: number | null;
  cursor?: string | null;
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

/**
 * Filter by region UUID.
 */
export interface RegionIDFilter {
  field: "region_id" | "region";
  operator: "is" | "not_is" | "in" | "not_in";
  value: string | Array<string>;
}

/**
 * Filter by region name.
 */
export interface RegionNameFilter {
  field: "region_name";
  operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
  value: string | Array<string>;
}

/**
 * Filter by AI model/platform UUID.
 */
export interface ModelIDFilter {
  field: "model_id" | "model";
  operator: "is" | "not_is" | "in" | "not_in";
  value: string | Array<string>;
}

/**
 * Filter by tag (prompt group) UUID.
 */
export interface TagIDFilter {
  field: "tag_id" | "tag";
  operator: "is" | "not_is" | "in" | "not_in";
  value: string | Array<string>;
}

/**
 * Filter by analysis type (visibility, sentiment, or accuracy).
 */
export interface AnalysisTypeFilter {
  field: "analysis_type";
  operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
  value: "visibility" | "sentiment" | "sentiment_v2" | "accuracy" | Array<"visibility" | "sentiment" | "sentiment_v2" | "accuracy">;
}

/**
 * Filter by prompt type (visibility or sentiment).
 *
 * .. deprecated::
 *     Use :class:`AnalysisTypeFilter` instead. ``prompt_type`` is normalised
 *     to ``analysis_type`` at parse time.
 */
export interface PromptTypeFilter {
  field: "prompt_type";
  operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
  value: "visibility" | "sentiment" | Array<"visibility" | "sentiment">;
}

/**
 * Filter by prompt text
 */
export interface PromptFilter {
  field: "prompt";
  operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
  value: string | Array<string>;
}

/**
 * Filter by persona UUID.
 */
export interface PersonaIDFilter {
  field: "persona_id";
  operator: "is" | "not_is" | "in" | "not_in";
  value: string | Array<string>;
}

/**
 * Filter by topic UUID.
 */
export interface TopicIDFilter {
  field: "topic_id" | "topic";
  operator: "is" | "not_is" | "in" | "not_in";
  value: string | Array<string>;
}

export interface AssetIDFilter {
  field: "asset_id";
  operator: "is" | "not_is" | "in" | "not_in";
  value: string | Array<string>;
}

export interface AnswerCreateV1PromptsPostParams {
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
  pagination?: Pagination;
  /**
   * List of filters to apply to the answers report.
   */
  filters?: Array<RegionIDFilter | RegionNameFilter | ModelIDFilter | TagIDFilter | AnalysisTypeFilter | PromptTypeFilter | PromptFilter | PersonaIDFilter | TopicIDFilter | AssetIDFilter | AnswerCreateV1PromptsPostParams.AssetNameFilter>;
  include?: AnswerCreateV1PromptsPostParams.Include;
}

export namespace AnswerCreateV1PromptsPostParams {
  export interface AssetNameFilter {
    field: "asset_name";
    operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
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

export interface AnswerCreateV1PromptsPostResponse {
  info: AnswerCreateV1PromptsPostResponse.Info;
  data: Array<AnswerCreateV1PromptsPostResponse.Data>;
}

export namespace AnswerCreateV1PromptsPostResponse {
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
      type: "positive" | "negative";
      name: string;
    }
  }
}

export interface AnswerQueryV2V2PromptsPostParams {
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
   * Which row fields to return: `run_id`, `date`, `model`, `topic`, `topic_id`, `region`, `persona`, `tags`, `prompt`, `prompt_id`, `response`, `mentions`, `citations`, `search_queries`, `analysis_types`, `sentiment_claims`. Omit for all of them.
   */
  include?: Array<"run_id" | "date" | "model" | "topic" | "topic_id" | "persona" | "region" | "tags" | "prompt" | "prompt_id" | "response" | "mentions" | "citations" | "search_queries" | "analysis_types" | "sentiment_claims"> | null;
  /**
   * and/or/not tree over `model`, `topic`, `region`, `persona`, `prompt`, `tag`, `analysis_type` (visibility/sentiment/factcheck); plus top-level `and` leaves `domain` or `page` (`is` one value, or `in` a list). Substring-search the prompt with `{"field": "prompt", "op": "contains", "value": "…"}`.
   */
  filter?: AnswerQueryV2V2PromptsPostParams.Filter | null;
  /**
   * Page size; default 10, max 50.
   * @maximum 50
   */
  limit?: number | null;
  /**
   * Stream endpoint only: cap the number of streamed rows (default: all).
   */
  max_results?: number | null;
  cursor?: string | null;
}

export namespace AnswerQueryV2V2PromptsPostParams {
  export interface Filter {
    and?: Array<unknown> | null;
    or?: Array<unknown> | null;
    not?: unknown;
    field?: string | null;
    op?: string | null;
    value?: string;
  }
}

export interface AnswerQueryV2V2PromptsPostResponse {
}

export interface AnswerStreamV2V2PromptsStreamPostParams {
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
   * Which row fields to return: `run_id`, `date`, `model`, `topic`, `topic_id`, `region`, `persona`, `tags`, `prompt`, `prompt_id`, `response`, `mentions`, `citations`, `search_queries`, `analysis_types`, `sentiment_claims`. Omit for all of them.
   */
  include?: Array<"run_id" | "date" | "model" | "topic" | "topic_id" | "persona" | "region" | "tags" | "prompt" | "prompt_id" | "response" | "mentions" | "citations" | "search_queries" | "analysis_types" | "sentiment_claims"> | null;
  /**
   * and/or/not tree over `model`, `topic`, `region`, `persona`, `prompt`, `tag`, `analysis_type` (visibility/sentiment/factcheck); plus top-level `and` leaves `domain` or `page` (`is` one value, or `in` a list). Substring-search the prompt with `{"field": "prompt", "op": "contains", "value": "…"}`.
   */
  filter?: AnswerStreamV2V2PromptsStreamPostParams.Filter | null;
  /**
   * Page size; default 10, max 50.
   * @maximum 50
   */
  limit?: number | null;
  /**
   * Stream endpoint only: cap the number of streamed rows (default: all).
   */
  max_results?: number | null;
  cursor?: string | null;
}

export namespace AnswerStreamV2V2PromptsStreamPostParams {
  export interface Filter {
    and?: Array<unknown> | null;
    or?: Array<unknown> | null;
    not?: unknown;
    field?: string | null;
    op?: string | null;
    value?: string;
  }
}
export declare namespace Answers {
  export {
    type AnswersQuery as AnswersQuery,
    type AnswersV2Query as AnswersV2Query,
    type AnswerCreateV1PromptsPostResponse as AnswerCreateV1PromptsPostResponse,
    type AnswerQueryV2V2PromptsPostResponse as AnswerQueryV2V2PromptsPostResponse,
    type AnswerCreateV1PromptsPostParams as AnswerCreateV1PromptsPostParams,
    type AnswerQueryV2V2PromptsPostParams as AnswerQueryV2V2PromptsPostParams,
    type AnswerStreamV2V2PromptsStreamPostParams as AnswerStreamV2V2PromptsStreamPostParams,
  };
}
export { Answers as AnswerResource };

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Prompts extends APIResource {
  /**
   * Get the answers for the prompts.
   */
  answers(body: PromptAnswersParams, options?: RequestOptions): APIPromise<PromptAnswersResponse> {
    return this._client.post('/v1/prompts/answers', { body, ...options });
  }
}

/**
 * Response for the answers endpoint.
 */
export interface PromptAnswersResponse {
  data: Array<PromptAnswersResponse.Data>;

  info: { [key: string]: unknown };
}

export namespace PromptAnswersResponse {
  /**
   * Raw data for the answers endpoint.
   */
  export interface Data {
    asset?: string | null;

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

    sentiment_themes?: Array<Data.SentimentTheme> | null;

    tags?: Array<string> | null;

    themes?: Array<string> | null;

    topic?: string | null;
  }

  export namespace Data {
    export interface SentimentTheme {
      name: string;

      type: 'positive' | 'negative';
    }
  }
}

export interface PromptAnswersParams {
  category_id: string;

  end_date: string;

  start_date: string;

  /**
   * List of filters to apply to the answers report.
   */
  filters?: Array<
    | PromptAnswersParams.RegionIDFilter
    | PromptAnswersParams.ModelIDFilter
    | PromptAnswersParams.TagIDFilter
    | PromptAnswersParams.PromptTypeFilter
    | PromptAnswersParams.PromptFilter
    | PromptAnswersParams.PersonaIDFilter
  >;

  include?: PromptAnswersParams.Include;

  /**
   * Pagination parameters for the results. Default is 10,000 rows with no offset.
   */
  pagination?: Shared.Pagination;
}

export namespace PromptAnswersParams {
  export interface RegionIDFilter {
    /**
     * - `region` - Deprecated
     */
    field: 'region_id' | 'region';

    operator: 'is' | 'not_is' | 'in' | 'not_in';

    value: string | Array<string>;
  }

  export interface ModelIDFilter {
    /**
     * - `model` - Deprecated
     */
    field: 'model_id' | 'model';

    operator: 'is' | 'not_is' | 'in' | 'not_in';

    value: string | Array<string>;
  }

  export interface TagIDFilter {
    /**
     * - `tag` - Deprecated
     */
    field: 'tag_id' | 'tag';

    operator: 'is' | 'not_is' | 'in' | 'not_in';

    value: string | Array<string>;
  }

  /**
   * Filter by prompt type (visibility or sentiment)
   */
  export interface PromptTypeFilter {
    field: 'prompt_type';

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

    value: 'visibility' | 'sentiment' | Array<'visibility' | 'sentiment'>;
  }

  /**
   * Filter by prompt text
   */
  export interface PromptFilter {
    field: 'prompt';

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

  export interface PersonaIDFilter {
    field: 'persona_id';

    operator: 'is' | 'not_is' | 'in' | 'not_in';

    value: string | Array<string>;
  }

  export interface Include {
    asset?: boolean;

    citations?: boolean;

    created_at?: boolean;

    mentions?: boolean;

    model?: boolean;

    model_id?: boolean;

    persona?: boolean;

    prompt?: boolean;

    prompt_id?: boolean;

    prompt_type?: boolean;

    region?: boolean;

    response?: boolean;

    run_id?: boolean;

    search_queries?: boolean;

    sentiment_themes?: boolean;

    tags?: boolean;

    /**
     * @deprecated Use 'sentiment_themes' instead
     */
    themes?: boolean;

    topic?: boolean;
  }
}

export declare namespace Prompts {
  export {
    type PromptAnswersResponse as PromptAnswersResponse,
    type PromptAnswersParams as PromptAnswersParams,
  };
}

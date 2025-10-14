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

    prompt?: string | null;

    prompt_id?: string | null;

    prompt_type?: string | null;

    region?: string | null;

    response?: string | null;

    run_id?: string | null;

    search_queries?: Array<string> | null;

    tags?: Array<string> | null;

    themes?: Array<string> | null;

    topic?: string | null;
  }
}

export interface PromptAnswersParams {
  category_id: string;

  end_date: string;

  start_date: string;

  filters?: Array<PromptAnswersParams.Filter>;

  include?: PromptAnswersParams.Include;

  /**
   * Pagination parameters for the results. Default is 10,000 rows with no offset.
   */
  pagination?: Shared.Pagination;
}

export namespace PromptAnswersParams {
  export interface Filter {
    field: 'region' | 'topic' | 'model' | 'prompt_type' | 'prompt' | 'tag';

    operator:
      | 'is'
      | 'not_is'
      | 'in'
      | 'not_in'
      | 'contains'
      | 'not_contains'
      | 'contains_case_insensitive'
      | 'not_contains_case_insensitive'
      | 'matches';

    /**
     * Value for the filter. Can be a single value or a list of depending on the
     * operator.
     */
    value: string | Array<string> | number | Array<number>;
  }

  export interface Include {
    asset?: boolean;

    citations?: boolean;

    created_at?: boolean;

    mentions?: boolean;

    model?: boolean;

    prompt?: boolean;

    prompt_id?: boolean;

    prompt_type?: boolean;

    region?: boolean;

    response?: boolean;

    run_id?: boolean;

    search_queries?: boolean;

    tags?: boolean;

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

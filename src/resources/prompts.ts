// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Prompts extends APIResource {
  /**
   * Get the answers for the prompts.
   */
  getAnswers(body: PromptGetAnswersParams, options?: RequestOptions): APIPromise<PromptGetAnswersResponse> {
    return this._client.post('/v1/prompts/answers', { body, ...options });
  }
}

/**
 * Report pagination model.
 */
export interface Pagination {
  /**
   * Maximum number of results to return. Default is 10,000, maximum is 50,000.
   */
  limit?: number;

  /**
   * Offset for the results. Used for pagination.
   */
  offset?: number;
}

/**
 * Response for the answers endpoint.
 */
export interface PromptGetAnswersResponse {
  data: Array<PromptGetAnswersResponse.Data>;

  info: { [key: string]: unknown };
}

export namespace PromptGetAnswersResponse {
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

    tags?: Array<string> | null;

    themes?: Array<string> | null;

    topic?: string | null;
  }
}

export interface PromptGetAnswersParams {
  category_id: string;

  end_date: string;

  start_date: string;

  filters?: Array<PromptGetAnswersParams.Filter>;

  include?: PromptGetAnswersParams.Include;

  /**
   * Pagination parameters for the results. Default is 10,000 rows with no offset.
   */
  pagination?: Pagination;
}

export namespace PromptGetAnswersParams {
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

    tags?: boolean;

    themes?: boolean;

    topic?: boolean;
  }
}

export declare namespace Prompts {
  export {
    type Pagination as Pagination,
    type PromptGetAnswersResponse as PromptGetAnswersResponse,
    type PromptGetAnswersParams as PromptGetAnswersParams,
  };
}

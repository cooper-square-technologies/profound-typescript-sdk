// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';

export class Intents extends APIResource {
  /**
   * Intent shares for one keyword across the requested cohort weeks.
   *
   * Shares are fractions from 0 to 1. Cohorts with two or fewer matching users
   * are omitted for privacy. Doesn't use the daily keyword allowance.
   *
   * @param {IntentOnTheFlyParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<IntentOnTheFlyResponse>} Successful Response
   *
   * @example
   * ```ts
   * const intent = await client.promptVolumes.intents.onTheFly({
   *   keyword: '',
   *   matching_type: 'exact_match',
   *   start_date: '2024-01-01',
   *   end_date: '2024-01-01',
   * });
   * ```
   */
  onTheFly(body: IntentOnTheFlyParams, options?: RequestOptions): APIPromise<IntentOnTheFlyResponse> {
    return this._client.post('/v2/prompt-volumes/intents/on-the-fly', { body, ...options });
  }
}

export interface IntentOnTheFlyParams {
  keyword: string;
  matching_type: 'exact_match' | 'phrase_match';
  /**
   * @format date
   */
  start_date: string;
  /**
   * @format date
   */
  end_date: string;
  /**
   * ISO 3166-1 alpha-3 country codes (e.g. USA). Omit to include every region.
   */
  regions?: Array<string>;
  /**
   * Platforms to restrict to. Omit to include every platform.
   */
  platforms?: Array<'chatgpt.com' | 'gemini.google.com' | 'perplexity.ai'>;
}

export interface IntentOnTheFlyResponse {
  /**
   * Metadata for volume query response.
   * truncated indicates if results hit MAX_ROWS limit.
   */
  info: IntentOnTheFlyResponse.Info;
  data: Array<IntentOnTheFlyResponse.Data>;
}

export namespace IntentOnTheFlyResponse {
  export interface Info {
    total_rows: number;
    /**
     * @default false
     */
    truncated?: boolean;
    query?: Record<string, unknown> | null;
  }

  export interface Data {
    main_classification: string;
    sub_category_classification: string | null;
    pct_conversation: number;
  }
}
export declare namespace Intents {
  export {
    type IntentOnTheFlyResponse as IntentOnTheFlyResponse,
    type IntentOnTheFlyParams as IntentOnTheFlyParams,
  };
}

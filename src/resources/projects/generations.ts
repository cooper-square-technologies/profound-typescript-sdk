// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as Shared from '../shared';

export class Generations extends APIResource {
  /**
   * List Project Generations
   *
   * @param {GenerationListParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<GenerationListResponse>} Successful Response
   *
   * @example
   * ```ts
   * const generation = await client.projects.generations.list({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   limit: 100,
   *   offset: 0,
   * });
   * ```
   */
  list(query: GenerationListParams, options?: RequestOptions): APIPromise<GenerationListResponse> {
    return this._client.get('/v1/projects/generations', { query, ...options });
  }

  /**
   * Get Project Generation Status
   *
   * @param {string} runID - Unique project generation run ID.
   * @param {GenerationRetrieveParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<GenerationRetrieveResponse>} Successful Response
   *
   * @example
   * ```ts
   * const generation = await client.projects.generations.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   */
  retrieve(
    runID: string,
    query: GenerationRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<GenerationRetrieveResponse> {
    return this._client.get(__scalarPath`/v1/projects/generations/${runID}`, { query, ...options });
  }
}

export interface GenerationListParams {
  /**
   * Category that owns the project.
   * @format uuid
   */
  category_id: string;
  /**
   * Comma-separated generation statuses: queued, running, completed, failed.
   */
  status?: string | null;
  /**
   * @default 100
   * @minimum 1
   * @maximum 200
   */
  limit?: number;
  /**
   * @default 0
   * @minimum 0
   */
  offset?: number;
}

export interface GenerationListResponse {
  data: Array<GenerationListResponse.Data>;
  /**
   * Offset-based pagination parameters.
   */
  pagination?: Shared.Pagination;
}

export namespace GenerationListResponse {
  export interface Data {
    /**
     * @format uuid
     */
    run_id: string;
    /**
     * @format uuid
     */
    category_id: string;
    mode: 'generate' | 'adhoc';
    status: 'queued' | 'running' | 'completed' | 'failed';
    focus_prompt?: string | null;
    /**
     * @format date-time
     */
    started_at?: string | null;
    /**
     * @format date-time
     */
    finished_at?: string | null;
    error?: string | null;
  }
}

export interface GenerationRetrieveParams {
  /**
   * Category that owns the project.
   * @format uuid
   */
  category_id: string;
}

export interface GenerationRetrieveResponse {
  data: GenerationRetrieveResponse.Data;
}

export namespace GenerationRetrieveResponse {
  export interface Data {
    /**
     * @format uuid
     */
    run_id: string;
    /**
     * @format uuid
     */
    category_id: string;
    mode: 'generate' | 'adhoc';
    status: 'queued' | 'running' | 'completed' | 'failed';
    focus_prompt?: string | null;
    /**
     * @format date-time
     */
    started_at?: string | null;
    /**
     * @format date-time
     */
    finished_at?: string | null;
    error?: string | null;
  }
}
export declare namespace Generations {
  export {
    type GenerationListResponse as GenerationListResponse,
    type GenerationRetrieveResponse as GenerationRetrieveResponse,
    type GenerationListParams as GenerationListParams,
    type GenerationRetrieveParams as GenerationRetrieveParams,
  };
}

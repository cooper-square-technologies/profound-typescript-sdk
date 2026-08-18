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
   * @param {GenerationListV1GetParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<GenerationListV1GetResponse>} Successful Response
   *
   * @example
   * ```ts
   * const listV1Get = await client.projects.generations.listV1Get({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   limit: 100,
   *   offset: 0,
   * });
   * ```
   */
  listV1Get(
    query: GenerationListV1GetParams,
    options?: RequestOptions,
  ): APIPromise<GenerationListV1GetResponse> {
    return this._client.get('/v1/projects/generations', { query, ...options });
  }

  /**
   * Get Project Generation Status
   *
   * @param {string} runID - Unique project generation run ID.
   * @param {GenerationRetrieveStatusV1RunGetParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<GenerationRetrieveStatusV1RunGetResponse>} Successful Response
   *
   * @example
   * ```ts
   * const retrieveStatusV1RunGet = await client.projects.generations.retrieveStatusV1RunGet(
   *   '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   {
   *     category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   },
   * );
   * ```
   */
  retrieveStatusV1RunGet(
    runID: string,
    query: GenerationRetrieveStatusV1RunGetParams,
    options?: RequestOptions,
  ): APIPromise<GenerationRetrieveStatusV1RunGetResponse> {
    return this._client.get(__scalarPath`/v1/projects/generations/${runID}`, { query, ...options });
  }
}

export interface GenerationListV1GetParams {
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

export interface GenerationListV1GetResponse {
  data: Array<GenerationListV1GetResponse.Data>;
  /**
   * Offset-based pagination parameters.
   */
  pagination?: Shared.Pagination;
}

export namespace GenerationListV1GetResponse {
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

export interface GenerationRetrieveStatusV1RunGetParams {
  /**
   * Category that owns the project.
   * @format uuid
   */
  category_id: string;
}

export interface GenerationRetrieveStatusV1RunGetResponse {
  data: GenerationRetrieveStatusV1RunGetResponse.Data;
}

export namespace GenerationRetrieveStatusV1RunGetResponse {
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
    type GenerationListV1GetResponse as GenerationListV1GetResponse,
    type GenerationRetrieveStatusV1RunGetResponse as GenerationRetrieveStatusV1RunGetResponse,
    type GenerationListV1GetParams as GenerationListV1GetParams,
    type GenerationRetrieveStatusV1RunGetParams as GenerationRetrieveStatusV1RunGetParams,
  };
}

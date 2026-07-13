// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Generations extends APIResource {
  /**
   * Get Project Generation Status
   */
  retrieve(
    runID: string,
    query: GenerationRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<GenerationRetrieveResponse> {
    return this._client.get(path`/v1/projects/generations/${runID}`, { query, ...options });
  }

  /**
   * List Project Generations
   */
  list(query: GenerationListParams, options?: RequestOptions): APIPromise<GenerationListResponse> {
    return this._client.get('/v1/projects/generations', { query, ...options });
  }
}

export interface GenerationRetrieveResponse {
  data: GenerationRetrieveResponse.Data;
}

export namespace GenerationRetrieveResponse {
  export interface Data {
    category_id: string;

    mode: 'generate' | 'adhoc';

    run_id: string;

    status: 'queued' | 'running' | 'completed' | 'failed';

    error?: string | null;

    finished_at?: string | null;

    focus_prompt?: string | null;

    started_at?: string | null;
  }
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
    category_id: string;

    mode: 'generate' | 'adhoc';

    run_id: string;

    status: 'queued' | 'running' | 'completed' | 'failed';

    error?: string | null;

    finished_at?: string | null;

    focus_prompt?: string | null;

    started_at?: string | null;
  }
}

export interface GenerationRetrieveParams {
  /**
   * Category that owns the project.
   */
  category_id: string;
}

export interface GenerationListParams {
  /**
   * Category that owns the project.
   */
  category_id: string;

  limit?: number;

  offset?: number;

  /**
   * Comma-separated generation statuses: queued, running, completed, failed.
   */
  status?: string | null;
}

export declare namespace Generations {
  export {
    type GenerationRetrieveResponse as GenerationRetrieveResponse,
    type GenerationListResponse as GenerationListResponse,
    type GenerationRetrieveParams as GenerationRetrieveParams,
    type GenerationListParams as GenerationListParams,
  };
}

// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { Stream } from '../../../core/streaming';
import type { RequestOptions } from '../../../internal/request-options';
import { buildHeaders } from '../../../internal/headers';
import type * as Shared from '../../shared';
import * as ClaimsAPI from './claims';
import {
  Claims,
  type ClaimQueryClaimsResponse,
  type ClaimStreamClaimsResponse,
  type ClaimQueryClaimsParams,
  type ClaimStreamClaimsParams,
} from './claims';

export class Factcheck extends APIResource {
  claims: ClaimsAPI.Claims = new ClaimsAPI.Claims(this._client);

  /**
   * Query Scores
   *
   * @param {FactcheckQueryScoresParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<FactcheckQueryScoresResponse>} Successful Response
   *
   * @example
   * ```ts
   * const queryScores = await client.reports.factcheck.queryScores({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '',
   *   end_date: '',
   * });
   * ```
   */
  queryScores(
    body: FactcheckQueryScoresParams,
    options?: RequestOptions,
  ): APIPromise<FactcheckQueryScoresResponse> {
    return this._client.post('/v2/reports/factcheck', { body, ...options });
  }

  /**
   * Stream Scores
   *
   * @param {FactcheckStreamScoresParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Stream<FactcheckStreamScoresResponse>>} Server-sent events stream. Emits one `summary` event (the report `info` block) first, then one `result` event per row.
   *
   * @example
   * ```ts
   * const stream = await client.reports.factcheck.streamScores({
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
  streamScores(
    body: FactcheckStreamScoresParams,
    options?: RequestOptions,
  ): APIPromise<Stream<FactcheckStreamScoresResponse>> {
    return this._client.post('/v2/reports/factcheck/stream', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    });
  }
}

export interface FactcheckQueryScoresParams {
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
   * Up to two dimensions to slice by; empty returns the headline score. `citation` must be alone.
   * @maxItems 2
   */
  group_by?: Array<
    'date' | 'model' | 'region' | 'persona' | 'prompt' | 'topic' | 'tag' | 'citation' | 'theme'
  >;
  /**
   * Scope which responses count (see Filtering).
   */
  filter?: Shared.FilterNode | null;
  /**
   * Rows per page; default 100.
   * @maximum 100
   */
  limit?: number | null;
  /**
   * Stream only: cap rows returned.
   */
  max_results?: number | null;
  cursor?: string | null;
}

export interface FactcheckQueryScoresResponse {
  info: FactcheckQueryScoresResponse.Info;
  data: Array<FactcheckQueryScoresResponse.Data>;
}

export namespace FactcheckQueryScoresResponse {
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
     * Dimensions the scores are sliced by (empty → headline).
     */
    group_by: Array<string>;
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
    date?: string | null;
    model?: Shared.DimensionRef | null;
    region?: Shared.DimensionRef | null;
    persona?: Shared.DimensionRef | null;
    prompt?: Shared.DimensionRef | null;
    topic?: Shared.DimensionRef | null;
    tag?: Shared.DimensionRef | null;
    theme?: Shared.DimensionRef | null;
    citation?: Data.Citation | null;
    accuracy?: number | null;
    accurate?: number | null;
    inaccurate?: number | null;
    [k: string]: unknown;
  }

  export namespace Data {
    export interface Citation {
      url?: string | null;
      citation_category?: string | null;
    }
  }
}

export interface FactcheckStreamScoresParams {
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
   * Up to two dimensions to slice by; empty returns the headline score. `citation` must be alone.
   * @maxItems 2
   */
  group_by?: Array<
    'date' | 'model' | 'region' | 'persona' | 'prompt' | 'topic' | 'tag' | 'citation' | 'theme'
  >;
  /**
   * Scope which responses count (see Filtering).
   */
  filter?: Shared.FilterNode | null;
  /**
   * Rows per page; default 100.
   * @maximum 100
   */
  limit?: number | null;
  /**
   * Stream only: cap rows returned.
   */
  max_results?: number | null;
  cursor?: string | null;
}

export type FactcheckStreamScoresResponse =
  | FactcheckStreamScoresResponse.FactcheckScoresInfo
  | FactcheckStreamScoresResponse.FactcheckScoreRow;

export namespace FactcheckStreamScoresResponse {
  export interface FactcheckScoresInfo {
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
     * Dimensions the scores are sliced by (empty → headline).
     */
    group_by: Array<string>;
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

  export interface FactcheckScoreRow {
    date?: string | null;
    model?: Shared.DimensionRef | null;
    region?: Shared.DimensionRef | null;
    persona?: Shared.DimensionRef | null;
    prompt?: Shared.DimensionRef | null;
    topic?: Shared.DimensionRef | null;
    tag?: Shared.DimensionRef | null;
    theme?: Shared.DimensionRef | null;
    citation?: FactcheckScoreRow.Citation | null;
    accuracy?: number | null;
    accurate?: number | null;
    inaccurate?: number | null;
    [k: string]: unknown;
  }

  export namespace FactcheckScoreRow {
    export interface Citation {
      url?: string | null;
      citation_category?: string | null;
    }
  }
}
Factcheck.Claims = Claims;

export declare namespace Factcheck {
  export {
    type FactcheckQueryScoresResponse as FactcheckQueryScoresResponse,
    type FactcheckStreamScoresResponse as FactcheckStreamScoresResponse,
    type FactcheckQueryScoresParams as FactcheckQueryScoresParams,
    type FactcheckStreamScoresParams as FactcheckStreamScoresParams,
  };

  export {
    Claims as Claims,
    type ClaimQueryClaimsResponse as ClaimQueryClaimsResponse,
    type ClaimStreamClaimsResponse as ClaimStreamClaimsResponse,
    type ClaimQueryClaimsParams as ClaimQueryClaimsParams,
    type ClaimStreamClaimsParams as ClaimStreamClaimsParams,
  };
}

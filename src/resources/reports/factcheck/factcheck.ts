// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ClaimsAPI from './claims';
import { ClaimQueryClaimsParams, ClaimQueryClaimsResponse, ClaimStreamClaimsParams, Claims } from './claims';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Factcheck extends APIResource {
  claims: ClaimsAPI.Claims = new ClaimsAPI.Claims(this._client);

  /**
   * Query Scores
   *
   * @example
   * ```ts
   * const response = await client.reports.factcheck.queryScores(
   *   {
   *     category_id: 'category_id',
   *     end_date: 'end_date',
   *     start_date: 'start_date',
   *   },
   * );
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
   * @example
   * ```ts
   * await client.reports.factcheck.streamScores({
   *   category_id: 'category_id',
   *   end_date: 'end_date',
   *   start_date: 'start_date',
   * });
   * ```
   */
  streamScores(body: FactcheckStreamScoresParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/v2/reports/factcheck/stream', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type FactcheckQueryScoresResponse = { [key: string]: unknown };

export interface FactcheckQueryScoresParams {
  category_id: string;

  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;

  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;

  cursor?: string | null;

  /**
   * A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.
   */
  filter?: FactcheckQueryScoresParams.Filter | null;

  /**
   * Up to two dimensions to slice by; empty returns the headline score. `citation`
   * must be alone.
   */
  group_by?: Array<
    'date' | 'model' | 'region' | 'persona' | 'prompt' | 'topic' | 'tag' | 'citation' | 'theme'
  >;

  /**
   * Rows per page; default 100.
   */
  limit?: number | null;

  /**
   * Stream only: cap rows returned.
   */
  max_results?: number | null;
}

export namespace FactcheckQueryScoresParams {
  /**
   * A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.
   */
  export interface Filter {
    and?: Array<unknown> | null;

    field?: string | null;

    not?: unknown;

    op?: string | null;

    or?: Array<unknown> | null;

    value?: unknown;
  }
}

export interface FactcheckStreamScoresParams {
  category_id: string;

  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;

  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;

  cursor?: string | null;

  /**
   * A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.
   */
  filter?: FactcheckStreamScoresParams.Filter | null;

  /**
   * Up to two dimensions to slice by; empty returns the headline score. `citation`
   * must be alone.
   */
  group_by?: Array<
    'date' | 'model' | 'region' | 'persona' | 'prompt' | 'topic' | 'tag' | 'citation' | 'theme'
  >;

  /**
   * Rows per page; default 100.
   */
  limit?: number | null;

  /**
   * Stream only: cap rows returned.
   */
  max_results?: number | null;
}

export namespace FactcheckStreamScoresParams {
  /**
   * A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.
   */
  export interface Filter {
    and?: Array<unknown> | null;

    field?: string | null;

    not?: unknown;

    op?: string | null;

    or?: Array<unknown> | null;

    value?: unknown;
  }
}

Factcheck.Claims = Claims;

export declare namespace Factcheck {
  export {
    type FactcheckQueryScoresResponse as FactcheckQueryScoresResponse,
    type FactcheckQueryScoresParams as FactcheckQueryScoresParams,
    type FactcheckStreamScoresParams as FactcheckStreamScoresParams,
  };

  export {
    Claims as Claims,
    type ClaimQueryClaimsResponse as ClaimQueryClaimsResponse,
    type ClaimQueryClaimsParams as ClaimQueryClaimsParams,
    type ClaimStreamClaimsParams as ClaimStreamClaimsParams,
  };
}

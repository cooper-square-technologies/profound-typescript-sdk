// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Claims extends APIResource {
  /**
   * Query Claims
   *
   * @example
   * ```ts
   * const response =
   *   await client.reports.factcheck.claims.queryClaims({
   *     category_id: 'category_id',
   *     end_date: 'end_date',
   *     start_date: 'start_date',
   *   });
   * ```
   */
  queryClaims(body: ClaimQueryClaimsParams, options?: RequestOptions): APIPromise<ClaimQueryClaimsResponse> {
    return this._client.post('/v2/reports/factcheck/claims', { body, ...options });
  }

  /**
   * Stream Claims
   *
   * @example
   * ```ts
   * await client.reports.factcheck.claims.streamClaims({
   *   category_id: 'category_id',
   *   end_date: 'end_date',
   *   start_date: 'start_date',
   * });
   * ```
   */
  streamClaims(body: ClaimStreamClaimsParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/v2/reports/factcheck/claims/stream', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type ClaimQueryClaimsResponse = { [key: string]: unknown };

export interface ClaimQueryClaimsParams {
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
  filter?: ClaimQueryClaimsParams.Filter | null;

  /**
   * Optional single dim to section the claims (e.g. per model). Empty → one flat
   * claim list.
   */
  group_by?: Array<'model' | 'region' | 'persona' | 'prompt' | 'topic' | 'tag' | 'theme'>;

  /**
   * Claim detail: theme, reasoning, models, evidence, citation_sources.
   */
  include?: Array<'theme' | 'reasoning' | 'models' | 'evidence' | 'citation_sources'> | null;

  /**
   * Claims (or sections) per page; default 25.
   */
  limit?: number | null;

  /**
   * Stream only: cap entries returned.
   */
  max_results?: number | null;
}

export namespace ClaimQueryClaimsParams {
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

export interface ClaimStreamClaimsParams {
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
  filter?: ClaimStreamClaimsParams.Filter | null;

  /**
   * Optional single dim to section the claims (e.g. per model). Empty → one flat
   * claim list.
   */
  group_by?: Array<'model' | 'region' | 'persona' | 'prompt' | 'topic' | 'tag' | 'theme'>;

  /**
   * Claim detail: theme, reasoning, models, evidence, citation_sources.
   */
  include?: Array<'theme' | 'reasoning' | 'models' | 'evidence' | 'citation_sources'> | null;

  /**
   * Claims (or sections) per page; default 25.
   */
  limit?: number | null;

  /**
   * Stream only: cap entries returned.
   */
  max_results?: number | null;
}

export namespace ClaimStreamClaimsParams {
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

export declare namespace Claims {
  export {
    type ClaimQueryClaimsResponse as ClaimQueryClaimsResponse,
    type ClaimQueryClaimsParams as ClaimQueryClaimsParams,
    type ClaimStreamClaimsParams as ClaimStreamClaimsParams,
  };
}

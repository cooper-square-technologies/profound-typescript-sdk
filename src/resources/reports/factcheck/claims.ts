// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { Stream } from '../../../core/streaming';
import type { RequestOptions } from '../../../internal/request-options';
import { buildHeaders } from '../../../internal/headers';
import type * as Shared from '../../shared';

export class Claims extends APIResource {
  /**
   * Query Claims
   *
   * @param {ClaimQueryClaimsParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ClaimQueryClaimsResponse>} Successful Response
   *
   * @example
   * ```ts
   * const queryClaims = await client.reports.factcheck.claims.queryClaims({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '',
   *   end_date: '',
   * });
   * ```
   */
  queryClaims(body: ClaimQueryClaimsParams, options?: RequestOptions): APIPromise<ClaimQueryClaimsResponse> {
    return this._client.post('/v2/reports/factcheck/claims', { body, ...options });
  }

  /**
   * Stream Claims
   *
   * @param {ClaimStreamClaimsParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Stream<ClaimStreamClaimsResponse>>} Server-sent events stream. Emits one `summary` event (the report `info` block) first, then one `result` event per row.
   *
   * @example
   * ```ts
   * const stream = await client.reports.factcheck.claims.streamClaims({
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
  streamClaims(
    body: ClaimStreamClaimsParams,
    options?: RequestOptions,
  ): APIPromise<Stream<ClaimStreamClaimsResponse>> {
    return this._client.post('/v2/reports/factcheck/claims/stream', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    });
  }
}

export interface ClaimQueryClaimsParams {
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
   * Optional single dim to section the claims (e.g. per model). Empty → one flat claim list.
   * @maxItems 1
   */
  group_by?: Array<'model' | 'region' | 'persona' | 'prompt' | 'topic' | 'tag' | 'theme'>;
  /**
   * Scope which responses count (see Filtering).
   */
  filter?: Shared.FilterNode | null;
  /**
   * Optional per-claim detail fields to add to each claim (see options).
   */
  include?: Array<'theme' | 'reasoning' | 'models' | 'evidence' | 'citation_sources'> | null;
  /**
   * Claims (or sections) per page; default 25.
   * @maximum 100
   */
  limit?: number | null;
  /**
   * Stream only: cap entries returned.
   */
  max_results?: number | null;
  cursor?: string | null;
}

export interface ClaimQueryClaimsResponse {
  info: ClaimQueryClaimsResponse.Info;
  data: Array<ClaimQueryClaimsResponse.Data>;
}

export namespace ClaimQueryClaimsResponse {
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
     * Dimension the claims are sectioned by (empty → one flat list).
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
    /**
     * Per-claim detail fields requested.
     */
    include?: Array<string>;
    [k: string]: unknown;
  }

  export interface Data {
    cluster_id?: string | null;
    claim?: string | null;
    occurrence?: number | null;
    reasoning?: string | null;
    models?: Array<Shared.ClaimModelOccurrence> | null;
    evidence?: Array<Data.Evidence> | null;
    citation_sources?: Array<Data.CitationSource> | null;
    model?: Shared.ClaimModelOccurrence | null;
    region?: Shared.DimensionRef | null;
    persona?: Shared.DimensionRef | null;
    prompt?: Shared.DimensionRef | null;
    topic?: Shared.DimensionRef | null;
    tag?: Shared.DimensionRef | null;
    /**
     * Claim theme (string), or an `{id, name}` ref when sectioning by `theme`.
     */
    theme?: string | Shared.DimensionRef | null;
    accuracy?: number | null;
    accurate?: number | null;
    inaccurate?: number | null;
    total_claims?: number | null;
    claims?: Array<Data.Claim> | null;
    [k: string]: unknown;
  }

  export namespace Data {
    export interface Evidence {
      id?: string | null;
      kb_path?: string | null;
      kb_snippet?: string | null;
      source_updated_at?: string | null;
    }

    export interface CitationSource {
      href?: string | null;
      hostname?: string | null;
      citation_category?: string | null;
      domain_category?: string | null;
      snippet?: string | null;
      citation_share?: number | null;
    }

    export interface Claim {
      cluster_id?: string | null;
      claim?: string | null;
      occurrence?: number | null;
      theme?: string | null;
      reasoning?: string | null;
      models?: Array<Shared.ClaimModelOccurrence> | null;
      evidence?: Array<Claim.Evidence> | null;
      citation_sources?: Array<Claim.CitationSource> | null;
      [k: string]: unknown;
    }

    export namespace Claim {
      export interface Evidence {
        id?: string | null;
        kb_path?: string | null;
        kb_snippet?: string | null;
        source_updated_at?: string | null;
      }

      export interface CitationSource {
        href?: string | null;
        hostname?: string | null;
        citation_category?: string | null;
        domain_category?: string | null;
        snippet?: string | null;
        citation_share?: number | null;
      }
    }
  }
}

export interface ClaimStreamClaimsParams {
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
   * Optional single dim to section the claims (e.g. per model). Empty → one flat claim list.
   * @maxItems 1
   */
  group_by?: Array<'model' | 'region' | 'persona' | 'prompt' | 'topic' | 'tag' | 'theme'>;
  /**
   * Scope which responses count (see Filtering).
   */
  filter?: Shared.FilterNode | null;
  /**
   * Optional per-claim detail fields to add to each claim (see options).
   */
  include?: Array<'theme' | 'reasoning' | 'models' | 'evidence' | 'citation_sources'> | null;
  /**
   * Claims (or sections) per page; default 25.
   * @maximum 100
   */
  limit?: number | null;
  /**
   * Stream only: cap entries returned.
   */
  max_results?: number | null;
  cursor?: string | null;
}

export type ClaimStreamClaimsResponse =
  | ClaimStreamClaimsResponse.FactcheckClaimsInfo
  | ClaimStreamClaimsResponse.FactcheckClaimsRow;

export namespace ClaimStreamClaimsResponse {
  export interface FactcheckClaimsInfo {
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
     * Dimension the claims are sectioned by (empty → one flat list).
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
    /**
     * Per-claim detail fields requested.
     */
    include?: Array<string>;
    [k: string]: unknown;
  }

  export interface FactcheckClaimsRow {
    cluster_id?: string | null;
    claim?: string | null;
    occurrence?: number | null;
    reasoning?: string | null;
    models?: Array<Shared.ClaimModelOccurrence> | null;
    evidence?: Array<FactcheckClaimsRow.Evidence> | null;
    citation_sources?: Array<FactcheckClaimsRow.CitationSource> | null;
    model?: Shared.ClaimModelOccurrence | null;
    region?: Shared.DimensionRef | null;
    persona?: Shared.DimensionRef | null;
    prompt?: Shared.DimensionRef | null;
    topic?: Shared.DimensionRef | null;
    tag?: Shared.DimensionRef | null;
    /**
     * Claim theme (string), or an `{id, name}` ref when sectioning by `theme`.
     */
    theme?: string | Shared.DimensionRef | null;
    accuracy?: number | null;
    accurate?: number | null;
    inaccurate?: number | null;
    total_claims?: number | null;
    claims?: Array<FactcheckClaimsRow.Claim> | null;
    [k: string]: unknown;
  }

  export namespace FactcheckClaimsRow {
    export interface Evidence {
      id?: string | null;
      kb_path?: string | null;
      kb_snippet?: string | null;
      source_updated_at?: string | null;
    }

    export interface CitationSource {
      href?: string | null;
      hostname?: string | null;
      citation_category?: string | null;
      domain_category?: string | null;
      snippet?: string | null;
      citation_share?: number | null;
    }

    export interface Claim {
      cluster_id?: string | null;
      claim?: string | null;
      occurrence?: number | null;
      theme?: string | null;
      reasoning?: string | null;
      models?: Array<Shared.ClaimModelOccurrence> | null;
      evidence?: Array<Claim.Evidence> | null;
      citation_sources?: Array<Claim.CitationSource> | null;
      [k: string]: unknown;
    }

    export namespace Claim {
      export interface Evidence {
        id?: string | null;
        kb_path?: string | null;
        kb_snippet?: string | null;
        source_updated_at?: string | null;
      }

      export interface CitationSource {
        href?: string | null;
        hostname?: string | null;
        citation_category?: string | null;
        domain_category?: string | null;
        snippet?: string | null;
        citation_share?: number | null;
      }
    }
  }
}
export declare namespace Claims {
  export {
    type ClaimQueryClaimsResponse as ClaimQueryClaimsResponse,
    type ClaimStreamClaimsResponse as ClaimStreamClaimsResponse,
    type ClaimQueryClaimsParams as ClaimQueryClaimsParams,
    type ClaimStreamClaimsParams as ClaimStreamClaimsParams,
  };
}

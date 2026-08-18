// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { Stream } from '../../core/streaming';
import type { RequestOptions } from '../../internal/request-options';
import { buildHeaders } from '../../internal/headers';
import type * as Shared from '../shared';

export class Factcheck extends APIResource {
  /**
   * Query Scores
   *
   * @param {FactcheckQueryScoresV2PostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<FactcheckQueryScoresV2PostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const queryScoresV2Post = await client.reports.factcheck.queryScoresV2Post({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '',
   *   end_date: '',
   * });
   * ```
   */
  queryScoresV2Post(
    body: FactcheckQueryScoresV2PostParams,
    options?: RequestOptions,
  ): APIPromise<FactcheckQueryScoresV2PostResponse> {
    return this._client.post('/v2/reports/factcheck', { body, ...options });
  }

  /**
   * Stream Scores
   *
   * @param {FactcheckStreamScoresV2StreamPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Stream<FactcheckStreamScoresV2StreamPostResponse>>} Server-sent events stream. Emits one `summary` event (the report `info` block) first, then one `result` event per row.
   *
   * @example
   * ```ts
   * const stream = await client.reports.factcheck.streamScoresV2StreamPost({
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
  streamScoresV2StreamPost(
    body: FactcheckStreamScoresV2StreamPostParams,
    options?: RequestOptions,
  ): APIPromise<Stream<FactcheckStreamScoresV2StreamPostResponse>> {
    return this._client.post('/v2/reports/factcheck/stream', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    });
  }

  /**
   * Query Claims
   *
   * @param {FactcheckQueryClaimsV2ClaimsPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<FactcheckQueryClaimsV2ClaimsPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const queryClaimsV2ClaimsPost = await client.reports.factcheck.queryClaimsV2ClaimsPost({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '',
   *   end_date: '',
   * });
   * ```
   */
  queryClaimsV2ClaimsPost(
    body: FactcheckQueryClaimsV2ClaimsPostParams,
    options?: RequestOptions,
  ): APIPromise<FactcheckQueryClaimsV2ClaimsPostResponse> {
    return this._client.post('/v2/reports/factcheck/claims', { body, ...options });
  }

  /**
   * Stream Claims
   *
   * @param {FactcheckStreamClaimsV2ClaimsStreamPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Stream<FactcheckStreamClaimsV2ClaimsStreamPostResponse>>} Server-sent events stream. Emits one `summary` event (the report `info` block) first, then one `result` event per row.
   *
   * @example
   * ```ts
   * const stream = await client.reports.factcheck.streamClaimsV2ClaimsStreamPost({
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
  streamClaimsV2ClaimsStreamPost(
    body: FactcheckStreamClaimsV2ClaimsStreamPostParams,
    options?: RequestOptions,
  ): APIPromise<Stream<FactcheckStreamClaimsV2ClaimsStreamPostResponse>> {
    return this._client.post('/v2/reports/factcheck/claims/stream', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    });
  }
}

/**
 * Accuracy scores. `group_by` picks the slice (one or two dimensions); empty → the headline score.
 */
export interface FactcheckScoresQuery {
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

/**
 * The inaccurate claims — flat + paginated, or `group_by` one dim to section them (all claims per section).
 */
export interface FactcheckClaimsQuery {
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

export interface FactcheckQueryScoresV2PostParams {
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

export interface FactcheckQueryScoresV2PostResponse {
  info: FactcheckQueryScoresV2PostResponse.Info;
  data: Array<FactcheckQueryScoresV2PostResponse.Data>;
}

export namespace FactcheckQueryScoresV2PostResponse {
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

export interface FactcheckStreamScoresV2StreamPostParams {
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

export type FactcheckStreamScoresV2StreamPostResponse =
  | FactcheckStreamScoresV2StreamPostResponse.FactcheckScoresInfo
  | FactcheckStreamScoresV2StreamPostResponse.FactcheckScoreRow;

export namespace FactcheckStreamScoresV2StreamPostResponse {
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

export interface FactcheckQueryClaimsV2ClaimsPostParams {
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

export interface FactcheckQueryClaimsV2ClaimsPostResponse {
  info: FactcheckQueryClaimsV2ClaimsPostResponse.Info;
  data: Array<FactcheckQueryClaimsV2ClaimsPostResponse.Data>;
}

export namespace FactcheckQueryClaimsV2ClaimsPostResponse {
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

export interface FactcheckStreamClaimsV2ClaimsStreamPostParams {
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

export type FactcheckStreamClaimsV2ClaimsStreamPostResponse =
  | FactcheckStreamClaimsV2ClaimsStreamPostResponse.FactcheckClaimsInfo
  | FactcheckStreamClaimsV2ClaimsStreamPostResponse.FactcheckClaimsRow;

export namespace FactcheckStreamClaimsV2ClaimsStreamPostResponse {
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
export declare namespace Factcheck {
  export {
    type FactcheckScoresQuery as FactcheckScoresQuery,
    type FactcheckClaimsQuery as FactcheckClaimsQuery,
    type FactcheckQueryScoresV2PostResponse as FactcheckQueryScoresV2PostResponse,
    type FactcheckStreamScoresV2StreamPostResponse as FactcheckStreamScoresV2StreamPostResponse,
    type FactcheckQueryClaimsV2ClaimsPostResponse as FactcheckQueryClaimsV2ClaimsPostResponse,
    type FactcheckStreamClaimsV2ClaimsStreamPostResponse as FactcheckStreamClaimsV2ClaimsStreamPostResponse,
    type FactcheckQueryScoresV2PostParams as FactcheckQueryScoresV2PostParams,
    type FactcheckStreamScoresV2StreamPostParams as FactcheckStreamScoresV2StreamPostParams,
    type FactcheckQueryClaimsV2ClaimsPostParams as FactcheckQueryClaimsV2ClaimsPostParams,
    type FactcheckStreamClaimsV2ClaimsStreamPostParams as FactcheckStreamClaimsV2ClaimsStreamPostParams,
  };
}

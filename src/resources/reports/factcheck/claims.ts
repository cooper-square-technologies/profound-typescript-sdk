// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { Stream } from '../../../core/streaming';
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
   *     category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
   * const response =
   *   await client.reports.factcheck.claims.streamClaims({
   *     category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     end_date: 'end_date',
   *     start_date: 'start_date',
   *   });
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
    }) as APIPromise<Stream<ClaimStreamClaimsResponse>>;
  }
}

export interface ClaimQueryClaimsResponse {
  data: Array<ClaimQueryClaimsResponse.Data>;

  info: ClaimQueryClaimsResponse.Info;
}

export namespace ClaimQueryClaimsResponse {
  /**
   * A flat claim, or (with `group_by`) a section: a dimension + accuracy rollup +
   * its `claims`.
   *
   * Present fields depend on `group_by`/`include`.
   */
  export interface Data {
    accuracy?: number | null;

    accurate?: number | null;

    citation_sources?: Array<Data.CitationSource> | null;

    claim?: string | null;

    claims?: Array<Data.Claim> | null;

    cluster_id?: string | null;

    evidence?: Array<Data.Evidence> | null;

    inaccurate?: number | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    model?: Data.Model | null;

    models?: Array<Data.Model> | null;

    occurrence?: number | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    persona?: Data.Persona | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    prompt?: Data.Prompt | null;

    reasoning?: string | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    region?: Data.Region | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    tag?: Data.Tag | null;

    /**
     * Claim theme (string), or an `{id, name}` ref when sectioning by `theme`.
     */
    theme?: string | Data.DimensionRef | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    topic?: Data.Topic | null;

    total_claims?: number | null;

    [k: string]: unknown;
  }

  export namespace Data {
    export interface CitationSource {
      citation_category?: string | null;

      citation_share?: number | null;

      domain_category?: string | null;

      hostname?: string | null;

      href?: string | null;

      snippet?: string | null;
    }

    /**
     * One inaccurate claim. `theme`/`reasoning`/`models`/`evidence`/`citation_sources`
     * follow `include`.
     */
    export interface Claim {
      citation_sources?: Array<Claim.CitationSource> | null;

      claim?: string | null;

      cluster_id?: string | null;

      evidence?: Array<Claim.Evidence> | null;

      models?: Array<Claim.Model> | null;

      occurrence?: number | null;

      reasoning?: string | null;

      theme?: string | null;

      [k: string]: unknown;
    }

    export namespace Claim {
      export interface CitationSource {
        citation_category?: string | null;

        citation_share?: number | null;

        domain_category?: string | null;

        hostname?: string | null;

        href?: string | null;

        snippet?: string | null;
      }

      export interface Evidence {
        id?: string | null;

        kb_path?: string | null;

        kb_snippet?: string | null;

        source_updated_at?: string | null;
      }

      export interface Model {
        id?: string | null;

        name?: string | null;

        occurrence?: number | null;
      }
    }

    export interface Evidence {
      id?: string | null;

      kb_path?: string | null;

      kb_snippet?: string | null;

      source_updated_at?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Model {
      id?: string | null;

      name?: string | null;
    }

    export interface Model {
      id?: string | null;

      name?: string | null;

      occurrence?: number | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Persona {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Prompt {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Region {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Tag {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface DimensionRef {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Topic {
      id?: string | null;

      name?: string | null;
    }
  }

  export interface Info {
    /**
     * Number of rows returned in `data` for this page.
     */
    count: number;

    /**
     * Echoed request end date (YYYY-MM-DD, ET).
     */
    end_date: string;

    /**
     * Dimension the claims are sectioned by (empty → one flat list).
     */
    group_by: Array<string>;

    /**
     * Display names of the models the report covers.
     */
    models: Array<string>;

    /**
     * Echoed request start date (YYYY-MM-DD, ET).
     */
    start_date: string;

    /**
     * Echoed normalized filter tree, or null when no filter was sent.
     */
    filter?: { [key: string]: unknown } | null;

    /**
     * Per-claim detail fields requested.
     */
    include?: Array<string>;

    /**
     * Opaque cursor for the next page; null on the last page.
     */
    next_cursor?: string | null;

    /**
     * Total rows matching the query before pagination (null when not computed).
     */
    total_results?: number | null;

    [k: string]: unknown;
  }
}

/**
 * `summary` event payload (the report `info` block).
 */
export type ClaimStreamClaimsResponse =
  | ClaimStreamClaimsResponse.FactcheckClaimsInfo
  | ClaimStreamClaimsResponse.FactcheckClaimsRow;

export namespace ClaimStreamClaimsResponse {
  /**
   * `summary` event payload (the report `info` block).
   */
  export interface FactcheckClaimsInfo {
    /**
     * Number of rows returned in `data` for this page.
     */
    count: number;

    /**
     * Echoed request end date (YYYY-MM-DD, ET).
     */
    end_date: string;

    /**
     * Dimension the claims are sectioned by (empty → one flat list).
     */
    group_by: Array<string>;

    /**
     * Display names of the models the report covers.
     */
    models: Array<string>;

    /**
     * Echoed request start date (YYYY-MM-DD, ET).
     */
    start_date: string;

    /**
     * Echoed normalized filter tree, or null when no filter was sent.
     */
    filter?: { [key: string]: unknown } | null;

    /**
     * Per-claim detail fields requested.
     */
    include?: Array<string>;

    /**
     * Opaque cursor for the next page; null on the last page.
     */
    next_cursor?: string | null;

    /**
     * Total rows matching the query before pagination (null when not computed).
     */
    total_results?: number | null;

    [k: string]: unknown;
  }

  /**
   * `result` event payload — one inaccurate claim.
   */
  export interface FactcheckClaimsRow {
    accuracy?: number | null;

    accurate?: number | null;

    citation_sources?: Array<FactcheckClaimsRow.CitationSource> | null;

    claim?: string | null;

    claims?: Array<FactcheckClaimsRow.Claim> | null;

    cluster_id?: string | null;

    evidence?: Array<FactcheckClaimsRow.Evidence> | null;

    inaccurate?: number | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    model?: FactcheckClaimsRow.Model | null;

    models?: Array<FactcheckClaimsRow.Model> | null;

    occurrence?: number | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    persona?: FactcheckClaimsRow.Persona | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    prompt?: FactcheckClaimsRow.Prompt | null;

    reasoning?: string | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    region?: FactcheckClaimsRow.Region | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    tag?: FactcheckClaimsRow.Tag | null;

    /**
     * Claim theme (string), or an `{id, name}` ref when sectioning by `theme`.
     */
    theme?: string | FactcheckClaimsRow.DimensionRef | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    topic?: FactcheckClaimsRow.Topic | null;

    total_claims?: number | null;

    [k: string]: unknown;
  }

  export namespace FactcheckClaimsRow {
    export interface CitationSource {
      citation_category?: string | null;

      citation_share?: number | null;

      domain_category?: string | null;

      hostname?: string | null;

      href?: string | null;

      snippet?: string | null;
    }

    /**
     * One inaccurate claim. `theme`/`reasoning`/`models`/`evidence`/`citation_sources`
     * follow `include`.
     */
    export interface Claim {
      citation_sources?: Array<Claim.CitationSource> | null;

      claim?: string | null;

      cluster_id?: string | null;

      evidence?: Array<Claim.Evidence> | null;

      models?: Array<Claim.Model> | null;

      occurrence?: number | null;

      reasoning?: string | null;

      theme?: string | null;

      [k: string]: unknown;
    }

    export namespace Claim {
      export interface CitationSource {
        citation_category?: string | null;

        citation_share?: number | null;

        domain_category?: string | null;

        hostname?: string | null;

        href?: string | null;

        snippet?: string | null;
      }

      export interface Evidence {
        id?: string | null;

        kb_path?: string | null;

        kb_snippet?: string | null;

        source_updated_at?: string | null;
      }

      export interface Model {
        id?: string | null;

        name?: string | null;

        occurrence?: number | null;
      }
    }

    export interface Evidence {
      id?: string | null;

      kb_path?: string | null;

      kb_snippet?: string | null;

      source_updated_at?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Model {
      id?: string | null;

      name?: string | null;
    }

    export interface Model {
      id?: string | null;

      name?: string | null;

      occurrence?: number | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Persona {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Prompt {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Region {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Tag {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface DimensionRef {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Topic {
      id?: string | null;

      name?: string | null;
    }
  }
}

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
   * Optional per-claim detail fields to add to each claim (see options).
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
   * Optional per-claim detail fields to add to each claim (see options).
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
    type ClaimStreamClaimsResponse as ClaimStreamClaimsResponse,
    type ClaimQueryClaimsParams as ClaimQueryClaimsParams,
    type ClaimStreamClaimsParams as ClaimStreamClaimsParams,
  };
}

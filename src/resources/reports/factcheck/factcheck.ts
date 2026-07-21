// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ClaimsAPI from './claims';
import {
  ClaimQueryClaimsParams,
  ClaimQueryClaimsResponse,
  ClaimStreamClaimsParams,
  ClaimStreamClaimsResponse,
  Claims,
} from './claims';
import { APIPromise } from '../../../core/api-promise';
import { Stream } from '../../../core/streaming';
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
   *     category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
   * const response =
   *   await client.reports.factcheck.streamScores({
   *     category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     end_date: 'end_date',
   *     start_date: 'start_date',
   *   });
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
    }) as APIPromise<Stream<FactcheckStreamScoresResponse>>;
  }
}

export interface FactcheckQueryScoresResponse {
  data: Array<FactcheckQueryScoresResponse.Data>;

  info: FactcheckQueryScoresResponse.Info;
}

export namespace FactcheckQueryScoresResponse {
  /**
   * An accuracy score row: the headline (no dims), a daily point, or a per-dimension
   * breakdown.
   */
  export interface Data {
    accuracy?: number | null;

    accurate?: number | null;

    citation?: Data.Citation | null;

    date?: string | null;

    inaccurate?: number | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    model?: Data.Model | null;

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
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    theme?: Data.Theme | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    topic?: Data.Topic | null;

    [k: string]: unknown;
  }

  export namespace Data {
    export interface Citation {
      citation_category?: string | null;

      url?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Model {
      id?: string | null;

      name?: string | null;
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
    export interface Theme {
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
     * Dimensions the scores are sliced by (empty → headline).
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
export type FactcheckStreamScoresResponse =
  | FactcheckStreamScoresResponse.FactcheckScoresInfo
  | FactcheckStreamScoresResponse.FactcheckScoreRow;

export namespace FactcheckStreamScoresResponse {
  /**
   * `summary` event payload (the report `info` block).
   */
  export interface FactcheckScoresInfo {
    /**
     * Number of rows returned in `data` for this page.
     */
    count: number;

    /**
     * Echoed request end date (YYYY-MM-DD, ET).
     */
    end_date: string;

    /**
     * Dimensions the scores are sliced by (empty → headline).
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
   * `result` event payload — one accuracy score row.
   */
  export interface FactcheckScoreRow {
    accuracy?: number | null;

    accurate?: number | null;

    citation?: FactcheckScoreRow.Citation | null;

    date?: string | null;

    inaccurate?: number | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    model?: FactcheckScoreRow.Model | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    persona?: FactcheckScoreRow.Persona | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    prompt?: FactcheckScoreRow.Prompt | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    region?: FactcheckScoreRow.Region | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    tag?: FactcheckScoreRow.Tag | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    theme?: FactcheckScoreRow.Theme | null;

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    topic?: FactcheckScoreRow.Topic | null;

    [k: string]: unknown;
  }

  export namespace FactcheckScoreRow {
    export interface Citation {
      citation_category?: string | null;

      url?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value (model, topic, region,
     * …).
     */
    export interface Model {
      id?: string | null;

      name?: string | null;
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
    export interface Theme {
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

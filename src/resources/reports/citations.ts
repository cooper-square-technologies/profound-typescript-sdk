// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { Stream } from '../../core/streaming';
import type { RequestOptions } from '../../internal/request-options';
import { buildHeaders } from '../../internal/headers';
import type * as Shared from '../shared';

export class Citations extends APIResource {
  /**
   * Get citations for a given category.
   *
   * The ``mentioned`` filter supports ``is true`` and ``is false``. It uses the
   * latest page analysis available at or before ``end_date``; pages without an
   * analysis by then are excluded from both values. ``citation_share`` keeps all
   * otherwise eligible citations in its denominator when this filter is used.
   *
   * @param {CitationQueryV1PostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CitationQueryV1PostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const queryV1Post = await client.reports.citations.queryV1Post({
   *   date_interval: 'day',
   *   dimensions: [],
   *   metrics: [],
   *   order_by: {},
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '2024-01-01T00:00:00.000Z',
   *   end_date: '2024-01-01T00:00:00.000Z',
   * });
   * ```
   */
  queryV1Post(
    body: CitationQueryV1PostParams,
    options?: RequestOptions,
  ): APIPromise<CitationQueryV1PostResponse> {
    return this._client.post('/v1/reports/citations', { body, ...options });
  }

  /**
   * Stream citations with the same filter semantics as the non-streaming route.
   *
   * @param {CitationStreamV1StreamPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Stream<CitationStreamV1StreamPostResponse>>} Server-sent events stream. Emits a `summary` event first, then one `row` event per streamed row.
   *
   * @example
   * ```ts
   * const stream = await client.reports.citations.streamV1StreamPost({
   *   date_interval: 'day',
   *   dimensions: [],
   *   metrics: [],
   *   order_by: {},
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '2024-01-01T00:00:00.000Z',
   *   end_date: '2024-01-01T00:00:00.000Z',
   * });
   *
   * for await (const event of stream) {
   *   console.log(event);
   * }
   * ```
   */
  streamV1StreamPost(
    body: CitationStreamV1StreamPostParams,
    options?: RequestOptions,
  ): APIPromise<Stream<CitationStreamV1StreamPostResponse>> {
    return this._client.post('/v1/reports/citations/stream', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    });
  }

  /**
   * Query Citations V2
   *
   * @param {CitationQueryV2V2PostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CitationQueryV2V2PostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const queryV2V2Post = await client.reports.citations.queryV2V2Post({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '',
   *   end_date: '',
   *   entity: 'domain',
   *   interval: 'day',
   *   scope: 'all',
   * });
   * ```
   */
  queryV2V2Post(
    body: CitationQueryV2V2PostParams,
    options?: RequestOptions,
  ): APIPromise<CitationQueryV2V2PostResponse> {
    return this._client.post('/v2/reports/citations', { body, ...options });
  }

  /**
   * Stream Citations V2
   *
   * @param {CitationStreamV2V2StreamPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Stream<CitationStreamV2V2StreamPostResponse>>} Server-sent events stream. Emits one `summary` event (the report `info` block) first, then one `result` event per row.
   *
   * @example
   * ```ts
   * const stream = await client.reports.citations.streamV2V2StreamPost({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '',
   *   end_date: '',
   *   entity: 'domain',
   *   interval: 'day',
   *   scope: 'all',
   * });
   *
   * for await (const event of stream) {
   *   console.log(event);
   * }
   * ```
   */
  streamV2V2StreamPost(
    body: CitationStreamV2V2StreamPostParams,
    options?: RequestOptions,
  ): APIPromise<Stream<CitationStreamV2V2StreamPostResponse>> {
    return this._client.post('/v2/reports/citations/stream', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    });
  }
}

export interface CitationsQuery {
  /**
   * Metrics to include. `share_of_voice` is deprecated, use `citation_share` instead.
   */
  metrics: Array<'count' | 'citation_share' | 'share_of_voice' | 'first_cited_at'>;
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.
   * @format date-time
   */
  start_date: string;
  /**
   * End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.
   * @format date-time
   */
  end_date: string;
  /**
   * Date interval for the report. (only used with date dimension)
   * @default day
   */
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';
  /**
   * Dimensions to group the report by.
   * @default []
   */
  dimensions?: Array<
    | 'hostname'
    | 'path'
    | 'date'
    | 'region'
    | 'topic'
    | 'topic_id'
    | 'model'
    | 'tag'
    | 'prompt'
    | 'prompt_id'
    | 'url'
    | 'root_domain'
    | 'persona'
    | 'citation_category'
  >;
  /**
   *
   *     Custom ordering of the report results.
   *
   *     The order is a record of key-value pairs where:
   *     - `key` is the field to order by, which can be a metric or dimension
   *     - `value` is the direction of the order, either `asc` for ascending or `desc` for descending.
   *
   *     When not specified, the default order is the first metric in the query descending.
   *
   * @default {}
   */
  order_by?: Record<string, 'asc' | 'desc'>;
  /**
   * Pagination settings for the report results.
   */
  pagination?: Shared.Pagination;
  /**
   * List of filters to apply to the citations report.
   */
  filters?: Array<
    | Shared.HostnameFilter
    | Shared.PathFilter
    | Shared.RegionIDFilter
    | Shared.RegionNameFilter
    | Shared.TopicIDFilter
    | Shared.TopicNameFilter
    | Shared.ModelIDFilter
    | Shared.TagIDFilter
    | Shared.TagNameFilter
    | Shared.URLFilter
    | Shared.RootDomainFilter
    | Shared.AnalysisTypeFilter
    | Shared.PromptTypeFilter
    | Shared.PersonaIDFilter
    | CitationsQuery.CitationCategoryFilter
    | Shared.PromptFilter
    | Shared.PromptIDFilter
    | CitationsQuery.MentionedFilter
  >;
}

export namespace CitationsQuery {
  export interface CitationCategoryFilter {
    field: 'citation_category';
    operator:
      | 'is'
      | 'not_is'
      | 'in'
      | 'not_in'
      | 'contains'
      | 'not_contains'
      | 'matches'
      | 'contains_case_insensitive'
      | 'not_contains_case_insensitive';
    value: string | Array<string>;
  }

  export interface MentionedFilter {
    field: 'mentioned';
    operator: 'is';
    value: boolean | Array<boolean>;
  }
}

export interface StreamCitationsQuery {
  /**
   * Metrics to include. `share_of_voice` is deprecated, use `citation_share` instead.
   */
  metrics: Array<'count' | 'citation_share' | 'share_of_voice' | 'first_cited_at'>;
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.
   * @format date-time
   */
  start_date: string;
  /**
   * End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.
   * @format date-time
   */
  end_date: string;
  /**
   * Date interval for the report. (only used with date dimension)
   * @default day
   */
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';
  /**
   * Dimensions to group the report by.
   * @default []
   */
  dimensions?: Array<
    | 'hostname'
    | 'path'
    | 'date'
    | 'region'
    | 'topic'
    | 'topic_id'
    | 'model'
    | 'tag'
    | 'prompt'
    | 'prompt_id'
    | 'url'
    | 'root_domain'
    | 'persona'
    | 'citation_category'
  >;
  /**
   *
   *     Custom ordering of the report results.
   *
   *     The order is a record of key-value pairs where:
   *     - `key` is the field to order by, which can be a metric or dimension
   *     - `value` is the direction of the order, either `asc` for ascending or `desc` for descending.
   *
   *     When not specified, the default order is the first metric in the query descending.
   *
   * @default {}
   */
  order_by?: Record<string, 'asc' | 'desc'>;
  pagination?: Shared.Pagination | null;
  /**
   * List of filters to apply to the citations report.
   */
  filters?: Array<
    | Shared.HostnameFilter
    | Shared.PathFilter
    | Shared.RegionIDFilter
    | Shared.RegionNameFilter
    | Shared.TopicIDFilter
    | Shared.TopicNameFilter
    | Shared.ModelIDFilter
    | Shared.TagIDFilter
    | Shared.TagNameFilter
    | Shared.URLFilter
    | Shared.RootDomainFilter
    | Shared.AnalysisTypeFilter
    | Shared.PromptTypeFilter
    | Shared.PersonaIDFilter
    | StreamCitationsQuery.CitationCategoryFilter
    | Shared.PromptFilter
    | Shared.PromptIDFilter
    | StreamCitationsQuery.MentionedFilter
  >;
}

export namespace StreamCitationsQuery {
  export interface CitationCategoryFilter {
    field: 'citation_category';
    operator:
      | 'is'
      | 'not_is'
      | 'in'
      | 'not_in'
      | 'contains'
      | 'not_contains'
      | 'matches'
      | 'contains_case_insensitive'
      | 'not_contains_case_insensitive';
    value: string | Array<string>;
  }

  export interface MentionedFilter {
    field: 'mentioned';
    operator: 'is';
    value: boolean | Array<boolean>;
  }
}

export interface CitationsV2Query {
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
   * What each row represents: `domain` (default), `page`, or `citation_category`. Legacy: `group_by: ["page"]` (with `entity` omitted) is still accepted and is equivalent to `entity: "page"`. `citation_category` uses the dashboard split view: a citation counts under both its page-level and domain-level category, so category shares can sum to more than 100%.
   * @default domain
   */
  entity?: 'domain' | 'page' | 'citation_category';
  group_by?: Array<'page' | 'date' | 'model' | 'topic' | 'region' | 'persona' | 'prompt'>;
  metrics?: Array<'count' | 'citation_share' | 'rank' | 'first_cited_at'> | null;
  /**
   * @default day
   */
  interval?: 'day' | 'week' | 'month';
  /**
   * `all` (every cited domain) or `owned` (only your owned domains). Applies to `entity=domain`.
   * @default all
   */
  scope?: 'all' | 'owned';
  /**
   * `citation_category` filters on a cited URL's single category; `citation_tag` filters on the custom citation tags a URL carries (a URL can carry several). List the category's tags with `GET /v1/org/categories/{category_id}/citation-tags`.
   */
  filter?: Shared.FilterNode | null;
  /**
   * Page size; default 10, max 50.
   * @maximum 50
   */
  limit?: number | null;
  /**
   * Stream endpoint only: cap the number of streamed rows (default: all).
   */
  max_results?: number | null;
  cursor?: string | null;
}

export interface CitationQueryV1PostParams {
  /**
   * Metrics to include. `share_of_voice` is deprecated, use `citation_share` instead.
   */
  metrics: Array<'count' | 'citation_share' | 'share_of_voice' | 'first_cited_at'>;
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.
   * @format date-time
   */
  start_date: string;
  /**
   * End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.
   * @format date-time
   */
  end_date: string;
  /**
   * Date interval for the report. (only used with date dimension)
   * @default day
   */
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';
  /**
   * Dimensions to group the report by.
   * @default []
   */
  dimensions?: Array<
    | 'hostname'
    | 'path'
    | 'date'
    | 'region'
    | 'topic'
    | 'topic_id'
    | 'model'
    | 'tag'
    | 'prompt'
    | 'prompt_id'
    | 'url'
    | 'root_domain'
    | 'persona'
    | 'citation_category'
  >;
  /**
   *
   *     Custom ordering of the report results.
   *
   *     The order is a record of key-value pairs where:
   *     - `key` is the field to order by, which can be a metric or dimension
   *     - `value` is the direction of the order, either `asc` for ascending or `desc` for descending.
   *
   *     When not specified, the default order is the first metric in the query descending.
   *
   * @default {}
   */
  order_by?: Record<string, 'asc' | 'desc'>;
  /**
   * Pagination settings for the report results.
   */
  pagination?: Shared.Pagination;
  /**
   * List of filters to apply to the citations report.
   */
  filters?: Array<
    | Shared.HostnameFilter
    | Shared.PathFilter
    | Shared.RegionIDFilter
    | Shared.RegionNameFilter
    | Shared.TopicIDFilter
    | Shared.TopicNameFilter
    | Shared.ModelIDFilter
    | Shared.TagIDFilter
    | Shared.TagNameFilter
    | Shared.URLFilter
    | Shared.RootDomainFilter
    | Shared.AnalysisTypeFilter
    | Shared.PromptTypeFilter
    | Shared.PersonaIDFilter
    | CitationQueryV1PostParams.CitationCategoryFilter
    | Shared.PromptFilter
    | Shared.PromptIDFilter
    | CitationQueryV1PostParams.MentionedFilter
  >;
}

export namespace CitationQueryV1PostParams {
  export interface CitationCategoryFilter {
    field: 'citation_category';
    operator:
      | 'is'
      | 'not_is'
      | 'in'
      | 'not_in'
      | 'contains'
      | 'not_contains'
      | 'matches'
      | 'contains_case_insensitive'
      | 'not_contains_case_insensitive';
    value: string | Array<string>;
  }

  export interface MentionedFilter {
    field: 'mentioned';
    operator: 'is';
    value: boolean | Array<boolean>;
  }
}

export interface CitationQueryV1PostResponse {
  /**
   * Base model for report information.
   */
  info: Shared.Info;
  data: Array<CitationQueryV1PostResponse.Data>;
}

export namespace CitationQueryV1PostResponse {
  export interface Data {
    metrics: Array<number | string | null>;
    dimensions: Array<string>;
  }
}

export interface CitationStreamV1StreamPostParams {
  /**
   * Metrics to include. `share_of_voice` is deprecated, use `citation_share` instead.
   */
  metrics: Array<'count' | 'citation_share' | 'share_of_voice' | 'first_cited_at'>;
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.
   * @format date-time
   */
  start_date: string;
  /**
   * End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.
   * @format date-time
   */
  end_date: string;
  /**
   * Date interval for the report. (only used with date dimension)
   * @default day
   */
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';
  /**
   * Dimensions to group the report by.
   * @default []
   */
  dimensions?: Array<
    | 'hostname'
    | 'path'
    | 'date'
    | 'region'
    | 'topic'
    | 'topic_id'
    | 'model'
    | 'tag'
    | 'prompt'
    | 'prompt_id'
    | 'url'
    | 'root_domain'
    | 'persona'
    | 'citation_category'
  >;
  /**
   *
   *     Custom ordering of the report results.
   *
   *     The order is a record of key-value pairs where:
   *     - `key` is the field to order by, which can be a metric or dimension
   *     - `value` is the direction of the order, either `asc` for ascending or `desc` for descending.
   *
   *     When not specified, the default order is the first metric in the query descending.
   *
   * @default {}
   */
  order_by?: Record<string, 'asc' | 'desc'>;
  pagination?: Shared.Pagination | null;
  /**
   * List of filters to apply to the citations report.
   */
  filters?: Array<
    | Shared.HostnameFilter
    | Shared.PathFilter
    | Shared.RegionIDFilter
    | Shared.RegionNameFilter
    | Shared.TopicIDFilter
    | Shared.TopicNameFilter
    | Shared.ModelIDFilter
    | Shared.TagIDFilter
    | Shared.TagNameFilter
    | Shared.URLFilter
    | Shared.RootDomainFilter
    | Shared.AnalysisTypeFilter
    | Shared.PromptTypeFilter
    | Shared.PersonaIDFilter
    | CitationStreamV1StreamPostParams.CitationCategoryFilter
    | Shared.PromptFilter
    | Shared.PromptIDFilter
    | CitationStreamV1StreamPostParams.MentionedFilter
  >;
}

export namespace CitationStreamV1StreamPostParams {
  export interface CitationCategoryFilter {
    field: 'citation_category';
    operator:
      | 'is'
      | 'not_is'
      | 'in'
      | 'not_in'
      | 'contains'
      | 'not_contains'
      | 'matches'
      | 'contains_case_insensitive'
      | 'not_contains_case_insensitive';
    value: string | Array<string>;
  }

  export interface MentionedFilter {
    field: 'mentioned';
    operator: 'is';
    value: boolean | Array<boolean>;
  }
}

export type CitationStreamV1StreamPostResponse =
  | CitationStreamV1StreamPostResponse.SseSummaryEventData
  | Record<string, unknown>;

export namespace CitationStreamV1StreamPostResponse {
  export interface SseSummaryEventData {
    /**
     * The normalized query used to build the stream.
     */
    query: Record<string, unknown>;
    /**
     * Total number of rows available before pagination is applied.
     */
    total_rows: number;
  }
}

export interface CitationQueryV2V2PostParams {
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
   * What each row represents: `domain` (default), `page`, or `citation_category`. Legacy: `group_by: ["page"]` (with `entity` omitted) is still accepted and is equivalent to `entity: "page"`. `citation_category` uses the dashboard split view: a citation counts under both its page-level and domain-level category, so category shares can sum to more than 100%.
   * @default domain
   */
  entity?: 'domain' | 'page' | 'citation_category';
  group_by?: Array<'page' | 'date' | 'model' | 'topic' | 'region' | 'persona' | 'prompt'>;
  metrics?: Array<'count' | 'citation_share' | 'rank' | 'first_cited_at'> | null;
  /**
   * @default day
   */
  interval?: 'day' | 'week' | 'month';
  /**
   * `all` (every cited domain) or `owned` (only your owned domains). Applies to `entity=domain`.
   * @default all
   */
  scope?: 'all' | 'owned';
  /**
   * `citation_category` filters on a cited URL's single category; `citation_tag` filters on the custom citation tags a URL carries (a URL can carry several). List the category's tags with `GET /v1/org/categories/{category_id}/citation-tags`.
   */
  filter?: Shared.FilterNode | null;
  /**
   * Page size; default 10, max 50.
   * @maximum 50
   */
  limit?: number | null;
  /**
   * Stream endpoint only: cap the number of streamed rows (default: all).
   */
  max_results?: number | null;
  cursor?: string | null;
}

export interface CitationQueryV2V2PostResponse {
  info: CitationQueryV2V2PostResponse.Info;
  data: Array<CitationQueryV2V2PostResponse.Data>;
}

export namespace CitationQueryV2V2PostResponse {
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
     * Citation scope: `all` or `owned`.
     */
    scope: string;
    /**
     * Metrics returned per row.
     */
    metrics: Array<string>;
    /**
     * Analysis types the citations were drawn from.
     */
    analysis_types: Array<string>;
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
    domain?: string | null;
    page?: string | null;
    rank?: number | null;
    date?: string | null;
    model?: Shared.DimensionRef | null;
    topic?: Shared.DimensionRef | null;
    region?: Shared.DimensionRef | null;
    persona?: Shared.DimensionRef | null;
    prompt?: Shared.DimensionRef | null;
    count?: number | null;
    citation_share?: number | null;
    /**
     * Pages only.
     */
    first_cited_at?: string | null;
    [k: string]: unknown;
  }
}

export interface CitationStreamV2V2StreamPostParams {
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
   * What each row represents: `domain` (default), `page`, or `citation_category`. Legacy: `group_by: ["page"]` (with `entity` omitted) is still accepted and is equivalent to `entity: "page"`. `citation_category` uses the dashboard split view: a citation counts under both its page-level and domain-level category, so category shares can sum to more than 100%.
   * @default domain
   */
  entity?: 'domain' | 'page' | 'citation_category';
  group_by?: Array<'page' | 'date' | 'model' | 'topic' | 'region' | 'persona' | 'prompt'>;
  metrics?: Array<'count' | 'citation_share' | 'rank' | 'first_cited_at'> | null;
  /**
   * @default day
   */
  interval?: 'day' | 'week' | 'month';
  /**
   * `all` (every cited domain) or `owned` (only your owned domains). Applies to `entity=domain`.
   * @default all
   */
  scope?: 'all' | 'owned';
  /**
   * `citation_category` filters on a cited URL's single category; `citation_tag` filters on the custom citation tags a URL carries (a URL can carry several). List the category's tags with `GET /v1/org/categories/{category_id}/citation-tags`.
   */
  filter?: Shared.FilterNode | null;
  /**
   * Page size; default 10, max 50.
   * @maximum 50
   */
  limit?: number | null;
  /**
   * Stream endpoint only: cap the number of streamed rows (default: all).
   */
  max_results?: number | null;
  cursor?: string | null;
}

export type CitationStreamV2V2StreamPostResponse =
  | CitationStreamV2V2StreamPostResponse.CitationsV2Info
  | CitationStreamV2V2StreamPostResponse.CitationRow;

export namespace CitationStreamV2V2StreamPostResponse {
  export interface CitationsV2Info {
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
     * Citation scope: `all` or `owned`.
     */
    scope: string;
    /**
     * Metrics returned per row.
     */
    metrics: Array<string>;
    /**
     * Analysis types the citations were drawn from.
     */
    analysis_types: Array<string>;
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

  export interface CitationRow {
    domain?: string | null;
    page?: string | null;
    rank?: number | null;
    date?: string | null;
    model?: Shared.DimensionRef | null;
    topic?: Shared.DimensionRef | null;
    region?: Shared.DimensionRef | null;
    persona?: Shared.DimensionRef | null;
    prompt?: Shared.DimensionRef | null;
    count?: number | null;
    citation_share?: number | null;
    /**
     * Pages only.
     */
    first_cited_at?: string | null;
    [k: string]: unknown;
  }
}
export declare namespace Citations {
  export {
    type CitationsQuery as CitationsQuery,
    type StreamCitationsQuery as StreamCitationsQuery,
    type CitationsV2Query as CitationsV2Query,
    type CitationQueryV1PostResponse as CitationQueryV1PostResponse,
    type CitationStreamV1StreamPostResponse as CitationStreamV1StreamPostResponse,
    type CitationQueryV2V2PostResponse as CitationQueryV2V2PostResponse,
    type CitationStreamV2V2StreamPostResponse as CitationStreamV2V2StreamPostResponse,
    type CitationQueryV1PostParams as CitationQueryV1PostParams,
    type CitationStreamV1StreamPostParams as CitationStreamV1StreamPostParams,
    type CitationQueryV2V2PostParams as CitationQueryV2V2PostParams,
    type CitationStreamV2V2StreamPostParams as CitationStreamV2V2StreamPostParams,
  };
}

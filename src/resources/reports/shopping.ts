// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { Stream } from '../../core/streaming';
import type { RequestOptions } from '../../internal/request-options';
import { buildHeaders } from '../../internal/headers';

export class Shopping extends APIResource {
  /**
   * Query Shopping Brands V2
   *
   * @param {ShoppingBrandsParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ShoppingBrandsResponse>} Successful Response
   *
   * @example
   * ```ts
   * const shopping = await client.reports.shopping.brands({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '',
   *   end_date: '',
   *   interval: 'day',
   *   scope: 'owned',
   * });
   * ```
   */
  brands(body: ShoppingBrandsParams, options?: RequestOptions): APIPromise<ShoppingBrandsResponse> {
    return this._client.post('/v2/reports/shopping/brands', { body, ...options });
  }

  /**
   * Stream Shopping Brands V2
   *
   * @param {ShoppingStreamBrandsParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Stream<ShoppingStreamBrandsResponse>>} Server-sent events stream. Emits one `summary` event (the report `info` block) first, then one `result` event per row.
   *
   * @example
   * ```ts
   * const stream = await client.reports.shopping.streamBrands({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '',
   *   end_date: '',
   *   interval: 'day',
   *   scope: 'owned',
   * });
   *
   * for await (const event of stream) {
   *   console.log(event);
   * }
   * ```
   */
  streamBrands(
    body: ShoppingStreamBrandsParams,
    options?: RequestOptions,
  ): APIPromise<Stream<ShoppingStreamBrandsResponse>> {
    return this._client.post('/v2/reports/shopping/brands/stream', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    });
  }

  /**
   * Query Shopping Products V2
   *
   * @param {ShoppingProductsParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ShoppingProductsResponse>} Successful Response
   *
   * @example
   * ```ts
   * const shopping = await client.reports.shopping.products({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '',
   *   end_date: '',
   *   interval: 'day',
   *   include_merchants: false,
   *   competitor_limit: 5,
   * });
   * ```
   */
  products(body: ShoppingProductsParams, options?: RequestOptions): APIPromise<ShoppingProductsResponse> {
    return this._client.post('/v2/reports/shopping/products', { body, ...options });
  }

  /**
   * Stream Shopping Products V2
   *
   * @param {ShoppingStreamProductsParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Stream<ShoppingStreamProductsResponse>>} Server-sent events stream. Emits one `summary` event (the report `info` block) first, then one `result` event per row.
   *
   * @example
   * ```ts
   * const stream = await client.reports.shopping.streamProducts({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '',
   *   end_date: '',
   *   interval: 'day',
   *   include_merchants: false,
   *   competitor_limit: 5,
   * });
   *
   * for await (const event of stream) {
   *   console.log(event);
   * }
   * ```
   */
  streamProducts(
    body: ShoppingStreamProductsParams,
    options?: RequestOptions,
  ): APIPromise<Stream<ShoppingStreamProductsResponse>> {
    return this._client.post('/v2/reports/shopping/products/stream', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    });
  }

  /**
   * Query Shopping Merchants V2
   *
   * @param {ShoppingMerchantsParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ShoppingMerchantsResponse>} Successful Response
   *
   * @example
   * ```ts
   * const shopping = await client.reports.shopping.merchants({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '',
   *   end_date: '',
   *   interval: 'day',
   * });
   * ```
   */
  merchants(body: ShoppingMerchantsParams, options?: RequestOptions): APIPromise<ShoppingMerchantsResponse> {
    return this._client.post('/v2/reports/shopping/merchants', { body, ...options });
  }

  /**
   * Stream Shopping Merchants V2
   *
   * @param {ShoppingStreamMerchantsParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Stream<ShoppingStreamMerchantsResponse>>} Server-sent events stream. Emits one `summary` event (the report `info` block) first, then one `result` event per row.
   *
   * @example
   * ```ts
   * const stream = await client.reports.shopping.streamMerchants({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '',
   *   end_date: '',
   *   interval: 'day',
   * });
   *
   * for await (const event of stream) {
   *   console.log(event);
   * }
   * ```
   */
  streamMerchants(
    body: ShoppingStreamMerchantsParams,
    options?: RequestOptions,
  ): APIPromise<Stream<ShoppingStreamMerchantsResponse>> {
    return this._client.post('/v2/reports/shopping/merchants/stream', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    });
  }

  /**
   * Query Shopping Trigger Rate V2
   *
   * @param {ShoppingTriggerRateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ShoppingTriggerRateResponse>} Successful Response
   *
   * @example
   * ```ts
   * const shopping = await client.reports.shopping.triggerRate({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '',
   *   end_date: '',
   *   interval: 'day',
   * });
   * ```
   */
  triggerRate(
    body: ShoppingTriggerRateParams,
    options?: RequestOptions,
  ): APIPromise<ShoppingTriggerRateResponse> {
    return this._client.post('/v2/reports/shopping/trigger-rate', { body, ...options });
  }

  /**
   * Stream Shopping Trigger Rate V2
   *
   * @param {ShoppingStreamTriggerRateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Stream<ShoppingStreamTriggerRateResponse>>} Server-sent events stream. Emits one `summary` event (the report `info` block) first, then one `result` event per row.
   *
   * @example
   * ```ts
   * const stream = await client.reports.shopping.streamTriggerRate({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '',
   *   end_date: '',
   *   interval: 'day',
   * });
   *
   * for await (const event of stream) {
   *   console.log(event);
   * }
   * ```
   */
  streamTriggerRate(
    body: ShoppingStreamTriggerRateParams,
    options?: RequestOptions,
  ): APIPromise<Stream<ShoppingStreamTriggerRateResponse>> {
    return this._client.post('/v2/reports/shopping/trigger-rate/stream', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    });
  }
}

export interface BrandNameFilter {
  field: 'brand_name';
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

export interface MerchantNameFilter {
  field: 'merchant_name';
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

export interface ProductNameFilter {
  field: 'product_name';
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

export interface ShoppingBrandsParams {
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
  group_by?: Array<'date' | 'topic' | 'region' | 'prompt'>;
  metrics?: Array<'visibility_score' | 'average_position' | 'visibility_rank'> | null;
  /**
   * @default day
   */
  interval?: 'day' | 'week' | 'month';
  /**
   * @default owned
   */
  scope?: 'owned' | 'all';
  /**
   * Restrict to these asset names (a name or list). Overrides `scope`.
   */
  assets?: string | Array<string> | null;
  filter?: ShoppingBrandsParams.Filter | null;
  /**
   * Page size for scope=all; default 10, max 50.
   * @maximum 50
   */
  limit?: number | null;
  /**
   * Stream endpoint only: cap the number of streamed rows (default: all).
   * @maximum 50000
   */
  max_results?: number | null;
  cursor?: string | null;
}

export namespace ShoppingBrandsParams {
  export interface Filter {
    and?: Array<unknown> | null;
    or?: Array<unknown> | null;
    not?: unknown;
    field?: string | null;
    op?: string | null;
    value?: unknown;
  }
}

export interface ShoppingBrandsResponse {
  info: ShoppingBrandsResponse.Info;
  data: Array<ShoppingBrandsResponse.Data>;
}

export namespace ShoppingBrandsResponse {
  export interface Info {
    /**
     * Number of assets on this page. When grouped by `date`, `data` holds one row per asset x bucket, so `len(data)` can exceed `count`.
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
     * Asset scope: `all`, `owned`, or `custom` when `assets` was given.
     */
    scope: string;
    /**
     * Metrics returned per row.
     */
    metrics: Array<string>;
    /**
     * Total assets matching the query before pagination.
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
     * Echoed `assets` selection; when set it overrides `scope`.
     */
    assets?: string | Array<string> | null;
    [k: string]: unknown;
  }

  export interface Data {
    asset?: Record<string, unknown> | null;
    /**
     * Asset visibility rank as a top-level field (ungrouped only).
     */
    rank?: number | null;
    date?: string | null;
    topic?: Data.Topic | null;
    region?: Data.Region | null;
    prompt?: Data.Prompt | null;
    visibility_score?: number | null;
    average_position?: number | null;
    /**
     * Asset visibility rank (present on grouped rows).
     */
    visibility_rank?: number | null;
    [k: string]: unknown;
  }

  export namespace Data {
    export interface Topic {
      id?: string | null;
      name?: string | null;
    }

    export interface Region {
      id?: string | null;
      name?: string | null;
    }

    export interface Prompt {
      id?: string | null;
      name?: string | null;
    }
  }
}

export interface ShoppingStreamBrandsParams {
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
  group_by?: Array<'date' | 'topic' | 'region' | 'prompt'>;
  metrics?: Array<'visibility_score' | 'average_position' | 'visibility_rank'> | null;
  /**
   * @default day
   */
  interval?: 'day' | 'week' | 'month';
  /**
   * @default owned
   */
  scope?: 'owned' | 'all';
  /**
   * Restrict to these asset names (a name or list). Overrides `scope`.
   */
  assets?: string | Array<string> | null;
  filter?: ShoppingStreamBrandsParams.Filter | null;
  /**
   * Page size for scope=all; default 10, max 50.
   * @maximum 50
   */
  limit?: number | null;
  /**
   * Stream endpoint only: cap the number of streamed rows (default: all).
   * @maximum 50000
   */
  max_results?: number | null;
  cursor?: string | null;
}

export namespace ShoppingStreamBrandsParams {
  export interface Filter {
    and?: Array<unknown> | null;
    or?: Array<unknown> | null;
    not?: unknown;
    field?: string | null;
    op?: string | null;
    value?: unknown;
  }
}

export type ShoppingStreamBrandsResponse =
  | ShoppingStreamBrandsResponse.ShoppingBrandsV2Info
  | ShoppingStreamBrandsResponse.ShoppingBrandRow;

export namespace ShoppingStreamBrandsResponse {
  export interface ShoppingBrandsV2Info {
    /**
     * Number of assets on this page. When grouped by `date`, `data` holds one row per asset x bucket, so `len(data)` can exceed `count`.
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
     * Asset scope: `all`, `owned`, or `custom` when `assets` was given.
     */
    scope: string;
    /**
     * Metrics returned per row.
     */
    metrics: Array<string>;
    /**
     * Total assets matching the query before pagination.
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
     * Echoed `assets` selection; when set it overrides `scope`.
     */
    assets?: string | Array<string> | null;
    [k: string]: unknown;
  }

  export interface ShoppingBrandRow {
    asset?: Record<string, unknown> | null;
    /**
     * Asset visibility rank as a top-level field (ungrouped only).
     */
    rank?: number | null;
    date?: string | null;
    topic?: ShoppingBrandRow.Topic | null;
    region?: ShoppingBrandRow.Region | null;
    prompt?: ShoppingBrandRow.Prompt | null;
    visibility_score?: number | null;
    average_position?: number | null;
    /**
     * Asset visibility rank (present on grouped rows).
     */
    visibility_rank?: number | null;
    [k: string]: unknown;
  }

  export namespace ShoppingBrandRow {
    export interface Topic {
      id?: string | null;
      name?: string | null;
    }

    export interface Region {
      id?: string | null;
      name?: string | null;
    }

    export interface Prompt {
      id?: string | null;
      name?: string | null;
    }
  }
}

export interface ShoppingProductsParams {
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
  group_by?: Array<'date' | 'topic' | 'prompt'>;
  metrics?: Array<
    | 'visibility_score'
    | 'average_position'
    | 'visibility_rank'
    | 'position1_percentage'
    | 'position2_percentage'
    | 'position3_percentage'
    | 'position_above3_percentage'
    | 'product_rating'
    | 'product_num_reviews'
  > | null;
  /**
   * @default day
   */
  interval?: 'day' | 'week' | 'month';
  /**
   * Include per-product merchant offers (names, prices, urls, images).
   * @default false
   */
  include_merchants?: boolean;
  /**
   * Return this product plus its top competitors (item view only).
   * @minLength 1
   */
  target_product?: string | null;
  /**
   * Competitors returned when `target_product` is set.
   * @default 5
   * @minimum 1
   */
  competitor_limit?: number;
  filter?: ShoppingProductsParams.Filter | null;
  /**
   * Page size; default 10, max 50.
   * @maximum 50
   */
  limit?: number | null;
  /**
   * Stream endpoint only: cap streamed rows.
   * @maximum 50000
   */
  max_results?: number | null;
  cursor?: string | null;
}

export namespace ShoppingProductsParams {
  export interface Filter {
    and?: Array<unknown> | null;
    or?: Array<unknown> | null;
    not?: unknown;
    field?: string | null;
    op?: string | null;
    value?: unknown;
  }
}

export interface ShoppingProductsResponse {
  info: ShoppingProductsResponse.Info;
  data: Array<ShoppingProductsResponse.Data>;
}

export namespace ShoppingProductsResponse {
  export interface Info {
    /**
     * Number of products on this page. When grouped by `date`/`topic`/`prompt`, `data` holds one row per product x bucket, so `len(data)` can exceed `count`.
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
     * Whether merchant offers are included in each row.
     */
    include_merchants: boolean;
    /**
     * Metrics returned per row.
     */
    metrics: Array<string>;
    /**
     * Total products matching the query before pagination.
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
    product?: Record<string, unknown> | null;
    date?: string | null;
    topic?: Data.Topic | null;
    prompt?: Data.Prompt | null;
    visibility_score?: number | null;
    average_position?: number | null;
    visibility_rank?: number | null;
    position1_percentage?: number | null;
    position2_percentage?: number | null;
    position3_percentage?: number | null;
    position_above3_percentage?: number | null;
    product_rating?: number | null;
    product_num_reviews?: number | null;
    product_url?: string | null;
    product_image_urls?: Array<string> | null;
    /**
     * Per-product merchant offers `{name, price}` (only with `include_merchants`).
     */
    merchants?: Array<Record<string, unknown>> | null;
    [k: string]: unknown;
  }

  export namespace Data {
    export interface Topic {
      id?: string | null;
      name?: string | null;
    }

    export interface Prompt {
      id?: string | null;
      name?: string | null;
    }
  }
}

export interface ShoppingStreamProductsParams {
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
  group_by?: Array<'date' | 'topic' | 'prompt'>;
  metrics?: Array<
    | 'visibility_score'
    | 'average_position'
    | 'visibility_rank'
    | 'position1_percentage'
    | 'position2_percentage'
    | 'position3_percentage'
    | 'position_above3_percentage'
    | 'product_rating'
    | 'product_num_reviews'
  > | null;
  /**
   * @default day
   */
  interval?: 'day' | 'week' | 'month';
  /**
   * Include per-product merchant offers (names, prices, urls, images).
   * @default false
   */
  include_merchants?: boolean;
  /**
   * Return this product plus its top competitors (item view only).
   * @minLength 1
   */
  target_product?: string | null;
  /**
   * Competitors returned when `target_product` is set.
   * @default 5
   * @minimum 1
   */
  competitor_limit?: number;
  filter?: ShoppingStreamProductsParams.Filter | null;
  /**
   * Page size; default 10, max 50.
   * @maximum 50
   */
  limit?: number | null;
  /**
   * Stream endpoint only: cap streamed rows.
   * @maximum 50000
   */
  max_results?: number | null;
  cursor?: string | null;
}

export namespace ShoppingStreamProductsParams {
  export interface Filter {
    and?: Array<unknown> | null;
    or?: Array<unknown> | null;
    not?: unknown;
    field?: string | null;
    op?: string | null;
    value?: unknown;
  }
}

export type ShoppingStreamProductsResponse =
  | ShoppingStreamProductsResponse.ShoppingProductsV2Info
  | ShoppingStreamProductsResponse.ShoppingProductRow;

export namespace ShoppingStreamProductsResponse {
  export interface ShoppingProductsV2Info {
    /**
     * Number of products on this page. When grouped by `date`/`topic`/`prompt`, `data` holds one row per product x bucket, so `len(data)` can exceed `count`.
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
     * Whether merchant offers are included in each row.
     */
    include_merchants: boolean;
    /**
     * Metrics returned per row.
     */
    metrics: Array<string>;
    /**
     * Total products matching the query before pagination.
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

  export interface ShoppingProductRow {
    product?: Record<string, unknown> | null;
    date?: string | null;
    topic?: ShoppingProductRow.Topic | null;
    prompt?: ShoppingProductRow.Prompt | null;
    visibility_score?: number | null;
    average_position?: number | null;
    visibility_rank?: number | null;
    position1_percentage?: number | null;
    position2_percentage?: number | null;
    position3_percentage?: number | null;
    position_above3_percentage?: number | null;
    product_rating?: number | null;
    product_num_reviews?: number | null;
    product_url?: string | null;
    product_image_urls?: Array<string> | null;
    /**
     * Per-product merchant offers `{name, price}` (only with `include_merchants`).
     */
    merchants?: Array<Record<string, unknown>> | null;
    [k: string]: unknown;
  }

  export namespace ShoppingProductRow {
    export interface Topic {
      id?: string | null;
      name?: string | null;
    }

    export interface Prompt {
      id?: string | null;
      name?: string | null;
    }
  }
}

export interface ShoppingMerchantsParams {
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
   * `[]` = distribution; `[brand]` = brand share within each merchant; `[product]` = top products per merchant. `date` (distribution only) adds a time series.
   */
  group_by?: Array<'date' | 'brand' | 'product'>;
  /**
   * Defaults to the chosen view's metrics; must be valid for that view.
   */
  metrics?: Array<
    | 'merchant_share'
    | 'merchant_share_rank'
    | 'merchant_visibility'
    | 'merchant_visibility_rank'
    | 'visibility_rank'
    | 'brand_share'
    | 'product_visibility'
    | 'product_rank'
  > | null;
  /**
   * @default day
   */
  interval?: 'day' | 'week' | 'month';
  filter?: ShoppingMerchantsParams.Filter | null;
  /**
   * Page size; default 10, max 50.
   * @maximum 50
   */
  limit?: number | null;
  /**
   * Stream endpoint only: cap streamed rows.
   * @maximum 50000
   */
  max_results?: number | null;
  cursor?: string | null;
}

export namespace ShoppingMerchantsParams {
  export interface Filter {
    and?: Array<unknown> | null;
    or?: Array<unknown> | null;
    not?: unknown;
    field?: string | null;
    op?: string | null;
    value?: unknown;
  }
}

export interface ShoppingMerchantsResponse {
  info: ShoppingMerchantsResponse.Info;
  data: Array<ShoppingMerchantsResponse.Data>;
}

export namespace ShoppingMerchantsResponse {
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
     * `distribution`, `brand_share`, or `top_products`.
     */
    view: string;
    /**
     * Metrics returned per row.
     */
    metrics: Array<string>;
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
    merchant_name?: string | null;
    merchant_share?: number | null;
    merchant_share_rank?: number | null;
    merchant_visibility?: number | null;
    merchant_visibility_rank?: number | null;
    date?: string | null;
    visibility_rank?: number | null;
    brand_name?: string | null;
    brand_share?: number | null;
    product?: Record<string, unknown> | null;
    product_visibility?: number | null;
    product_rank?: number | null;
    [k: string]: unknown;
  }
}

export interface ShoppingStreamMerchantsParams {
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
   * `[]` = distribution; `[brand]` = brand share within each merchant; `[product]` = top products per merchant. `date` (distribution only) adds a time series.
   */
  group_by?: Array<'date' | 'brand' | 'product'>;
  /**
   * Defaults to the chosen view's metrics; must be valid for that view.
   */
  metrics?: Array<
    | 'merchant_share'
    | 'merchant_share_rank'
    | 'merchant_visibility'
    | 'merchant_visibility_rank'
    | 'visibility_rank'
    | 'brand_share'
    | 'product_visibility'
    | 'product_rank'
  > | null;
  /**
   * @default day
   */
  interval?: 'day' | 'week' | 'month';
  filter?: ShoppingStreamMerchantsParams.Filter | null;
  /**
   * Page size; default 10, max 50.
   * @maximum 50
   */
  limit?: number | null;
  /**
   * Stream endpoint only: cap streamed rows.
   * @maximum 50000
   */
  max_results?: number | null;
  cursor?: string | null;
}

export namespace ShoppingStreamMerchantsParams {
  export interface Filter {
    and?: Array<unknown> | null;
    or?: Array<unknown> | null;
    not?: unknown;
    field?: string | null;
    op?: string | null;
    value?: unknown;
  }
}

export type ShoppingStreamMerchantsResponse =
  | ShoppingStreamMerchantsResponse.ShoppingMerchantsV2Info
  | ShoppingStreamMerchantsResponse.ShoppingMerchantRow;

export namespace ShoppingStreamMerchantsResponse {
  export interface ShoppingMerchantsV2Info {
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
     * `distribution`, `brand_share`, or `top_products`.
     */
    view: string;
    /**
     * Metrics returned per row.
     */
    metrics: Array<string>;
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

  export interface ShoppingMerchantRow {
    merchant_name?: string | null;
    merchant_share?: number | null;
    merchant_share_rank?: number | null;
    merchant_visibility?: number | null;
    merchant_visibility_rank?: number | null;
    date?: string | null;
    visibility_rank?: number | null;
    brand_name?: string | null;
    brand_share?: number | null;
    product?: Record<string, unknown> | null;
    product_visibility?: number | null;
    product_rank?: number | null;
    [k: string]: unknown;
  }
}

export interface ShoppingTriggerRateParams {
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
   * Group by `prompt`/`topic` for the per-prompt/-topic trigger rate.
   */
  group_by?: Array<'date' | 'topic' | 'region' | 'persona' | 'prompt'>;
  metrics?: Array<'total_runs' | 'shopping_triggered_runs' | 'trigger_rate_percentage'> | null;
  /**
   * @default day
   */
  interval?: 'day' | 'week' | 'month';
  filter?: ShoppingTriggerRateParams.Filter | null;
  /**
   * Page size; default 10, max 50.
   * @maximum 50
   */
  limit?: number | null;
  /**
   * Stream endpoint only: cap streamed rows.
   * @maximum 50000
   */
  max_results?: number | null;
  cursor?: string | null;
}

export namespace ShoppingTriggerRateParams {
  export interface Filter {
    and?: Array<unknown> | null;
    or?: Array<unknown> | null;
    not?: unknown;
    field?: string | null;
    op?: string | null;
    value?: unknown;
  }
}

export interface ShoppingTriggerRateResponse {
  info: ShoppingTriggerRateResponse.Info;
  data: Array<ShoppingTriggerRateResponse.Data>;
}

export namespace ShoppingTriggerRateResponse {
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
     * Metrics returned per row.
     */
    metrics: Array<string>;
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
    topic?: Data.Topic | null;
    region?: Data.Region | null;
    persona?: Data.Persona | null;
    prompt?: Data.Prompt | null;
    total_runs?: number | null;
    shopping_triggered_runs?: number | null;
    trigger_rate_percentage?: number | null;
    [k: string]: unknown;
  }

  export namespace Data {
    export interface Topic {
      id?: string | null;
      name?: string | null;
    }

    export interface Region {
      id?: string | null;
      name?: string | null;
    }

    export interface Persona {
      id?: string | null;
      name?: string | null;
    }

    export interface Prompt {
      id?: string | null;
      name?: string | null;
    }
  }
}

export interface ShoppingStreamTriggerRateParams {
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
   * Group by `prompt`/`topic` for the per-prompt/-topic trigger rate.
   */
  group_by?: Array<'date' | 'topic' | 'region' | 'persona' | 'prompt'>;
  metrics?: Array<'total_runs' | 'shopping_triggered_runs' | 'trigger_rate_percentage'> | null;
  /**
   * @default day
   */
  interval?: 'day' | 'week' | 'month';
  filter?: ShoppingStreamTriggerRateParams.Filter | null;
  /**
   * Page size; default 10, max 50.
   * @maximum 50
   */
  limit?: number | null;
  /**
   * Stream endpoint only: cap streamed rows.
   * @maximum 50000
   */
  max_results?: number | null;
  cursor?: string | null;
}

export namespace ShoppingStreamTriggerRateParams {
  export interface Filter {
    and?: Array<unknown> | null;
    or?: Array<unknown> | null;
    not?: unknown;
    field?: string | null;
    op?: string | null;
    value?: unknown;
  }
}

export type ShoppingStreamTriggerRateResponse =
  | ShoppingStreamTriggerRateResponse.ShoppingTriggerRateV2Info
  | ShoppingStreamTriggerRateResponse.ShoppingTriggerRateRow;

export namespace ShoppingStreamTriggerRateResponse {
  export interface ShoppingTriggerRateV2Info {
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
     * Metrics returned per row.
     */
    metrics: Array<string>;
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

  export interface ShoppingTriggerRateRow {
    date?: string | null;
    topic?: ShoppingTriggerRateRow.Topic | null;
    region?: ShoppingTriggerRateRow.Region | null;
    persona?: ShoppingTriggerRateRow.Persona | null;
    prompt?: ShoppingTriggerRateRow.Prompt | null;
    total_runs?: number | null;
    shopping_triggered_runs?: number | null;
    trigger_rate_percentage?: number | null;
    [k: string]: unknown;
  }

  export namespace ShoppingTriggerRateRow {
    export interface Topic {
      id?: string | null;
      name?: string | null;
    }

    export interface Region {
      id?: string | null;
      name?: string | null;
    }

    export interface Persona {
      id?: string | null;
      name?: string | null;
    }

    export interface Prompt {
      id?: string | null;
      name?: string | null;
    }
  }
}
export declare namespace Shopping {
  export {
    type BrandNameFilter as BrandNameFilter,
    type MerchantNameFilter as MerchantNameFilter,
    type ProductNameFilter as ProductNameFilter,
    type ShoppingBrandsResponse as ShoppingBrandsResponse,
    type ShoppingStreamBrandsResponse as ShoppingStreamBrandsResponse,
    type ShoppingProductsResponse as ShoppingProductsResponse,
    type ShoppingStreamProductsResponse as ShoppingStreamProductsResponse,
    type ShoppingMerchantsResponse as ShoppingMerchantsResponse,
    type ShoppingStreamMerchantsResponse as ShoppingStreamMerchantsResponse,
    type ShoppingTriggerRateResponse as ShoppingTriggerRateResponse,
    type ShoppingStreamTriggerRateResponse as ShoppingStreamTriggerRateResponse,
    type ShoppingBrandsParams as ShoppingBrandsParams,
    type ShoppingStreamBrandsParams as ShoppingStreamBrandsParams,
    type ShoppingProductsParams as ShoppingProductsParams,
    type ShoppingStreamProductsParams as ShoppingStreamProductsParams,
    type ShoppingMerchantsParams as ShoppingMerchantsParams,
    type ShoppingStreamMerchantsParams as ShoppingStreamMerchantsParams,
    type ShoppingTriggerRateParams as ShoppingTriggerRateParams,
    type ShoppingStreamTriggerRateParams as ShoppingStreamTriggerRateParams,
  };
}

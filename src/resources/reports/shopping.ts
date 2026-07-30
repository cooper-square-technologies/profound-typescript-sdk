// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { Stream } from '../../core/streaming';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Shopping extends APIResource {
  /**
   * Query Shopping Brands V2
   *
   * @example
   * ```ts
   * const response = await client.reports.shopping.brands({
   *   category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   end_date: 'end_date',
   *   start_date: 'start_date',
   * });
   * ```
   */
  brands(body: ShoppingBrandsParams, options?: RequestOptions): APIPromise<ShoppingBrandsResponse> {
    return this._client.post('/v2/reports/shopping/brands', { body, ...options });
  }

  /**
   * Query Shopping Merchants V2
   *
   * @example
   * ```ts
   * const response = await client.reports.shopping.merchants({
   *   category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   end_date: 'end_date',
   *   start_date: 'start_date',
   * });
   * ```
   */
  merchants(body: ShoppingMerchantsParams, options?: RequestOptions): APIPromise<ShoppingMerchantsResponse> {
    return this._client.post('/v2/reports/shopping/merchants', { body, ...options });
  }

  /**
   * Query Shopping Products V2
   *
   * @example
   * ```ts
   * const response = await client.reports.shopping.products({
   *   category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   end_date: 'end_date',
   *   start_date: 'start_date',
   * });
   * ```
   */
  products(body: ShoppingProductsParams, options?: RequestOptions): APIPromise<ShoppingProductsResponse> {
    return this._client.post('/v2/reports/shopping/products', { body, ...options });
  }

  /**
   * Stream Shopping Brands V2
   *
   * @example
   * ```ts
   * const response = await client.reports.shopping.streamBrands(
   *   {
   *     category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     end_date: 'end_date',
   *     start_date: 'start_date',
   *   },
   * );
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
    }) as APIPromise<Stream<ShoppingStreamBrandsResponse>>;
  }

  /**
   * Stream Shopping Merchants V2
   *
   * @example
   * ```ts
   * const response =
   *   await client.reports.shopping.streamMerchants({
   *     category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     end_date: 'end_date',
   *     start_date: 'start_date',
   *   });
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
    }) as APIPromise<Stream<ShoppingStreamMerchantsResponse>>;
  }

  /**
   * Stream Shopping Products V2
   *
   * @example
   * ```ts
   * const response =
   *   await client.reports.shopping.streamProducts({
   *     category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     end_date: 'end_date',
   *     start_date: 'start_date',
   *   });
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
    }) as APIPromise<Stream<ShoppingStreamProductsResponse>>;
  }

  /**
   * Stream Shopping Trigger Rate V2
   *
   * @example
   * ```ts
   * const response =
   *   await client.reports.shopping.streamTriggerRate({
   *     category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     end_date: 'end_date',
   *     start_date: 'start_date',
   *   });
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
    }) as APIPromise<Stream<ShoppingStreamTriggerRateResponse>>;
  }

  /**
   * Query Shopping Trigger Rate V2
   *
   * @example
   * ```ts
   * const response = await client.reports.shopping.triggerRate({
   *   category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   end_date: 'end_date',
   *   start_date: 'start_date',
   * });
   * ```
   */
  triggerRate(
    body: ShoppingTriggerRateParams,
    options?: RequestOptions,
  ): APIPromise<ShoppingTriggerRateResponse> {
    return this._client.post('/v2/reports/shopping/trigger-rate', { body, ...options });
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

export interface ShoppingBrandsResponse {
  data: Array<ShoppingBrandsResponse.Data>;

  info: ShoppingBrandsResponse.Info;
}

export namespace ShoppingBrandsResponse {
  /**
   * One (asset x group) row. Group dims/metrics present depend on
   * `group_by`/`metrics`.
   */
  export interface Data {
    asset?: { [key: string]: unknown } | null;

    average_position?: number | null;

    date?: string | null;

    /**
     * An `{id, name}` reference for a grouped dimension value.
     */
    prompt?: Data.Prompt | null;

    /**
     * Asset visibility rank as a top-level field (ungrouped only).
     */
    rank?: number | null;

    /**
     * An `{id, name}` reference for a grouped dimension value.
     */
    region?: Data.Region | null;

    /**
     * An `{id, name}` reference for a grouped dimension value.
     */
    topic?: Data.Topic | null;

    /**
     * Asset visibility rank (present on grouped rows).
     */
    visibility_rank?: number | null;

    visibility_score?: number | null;

    [k: string]: unknown;
  }

  export namespace Data {
    /**
     * An `{id, name}` reference for a grouped dimension value.
     */
    export interface Prompt {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value.
     */
    export interface Region {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value.
     */
    export interface Topic {
      id?: string | null;

      name?: string | null;
    }
  }

  export interface Info {
    /**
     * Number of assets on this page. When grouped by `date`, `data` holds one row per
     * asset x bucket, so `len(data)` can exceed `count`.
     */
    count: number;

    /**
     * Echoed request end date (YYYY-MM-DD, ET).
     */
    end_date: string;

    /**
     * Metrics returned per row.
     */
    metrics: Array<string>;

    /**
     * Display names of the models the report covers.
     */
    models: Array<string>;

    /**
     * Asset scope: `all`, `owned`, or `custom` when `assets` was given.
     */
    scope: string;

    /**
     * Echoed request start date (YYYY-MM-DD, ET).
     */
    start_date: string;

    /**
     * Echoed `assets` selection; when set it overrides `scope`.
     */
    assets?: string | Array<string> | null;

    /**
     * Echoed normalized filter tree, or null when no filter was sent.
     */
    filter?: { [key: string]: unknown } | null;

    /**
     * Opaque cursor for the next page; null on the last page.
     */
    next_cursor?: string | null;

    /**
     * Total assets matching the query before pagination.
     */
    total_results?: number | null;

    [k: string]: unknown;
  }
}

export interface ShoppingMerchantsResponse {
  data: Array<ShoppingMerchantsResponse.Data>;

  info: ShoppingMerchantsResponse.Info;
}

export namespace ShoppingMerchantsResponse {
  /**
   * One merchant row. `brand_name`/`brand_share` appear in the brand-share view;
   * `product`/product metrics in the top-products view; metrics vary by view.
   */
  export interface Data {
    brand_name?: string | null;

    brand_share?: number | null;

    date?: string | null;

    merchant_name?: string | null;

    merchant_share?: number | null;

    merchant_share_rank?: number | null;

    merchant_visibility?: number | null;

    merchant_visibility_rank?: number | null;

    product?: { [key: string]: unknown } | null;

    product_rank?: number | null;

    product_visibility?: number | null;

    visibility_rank?: number | null;

    [k: string]: unknown;
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
     * Metrics returned per row.
     */
    metrics: Array<string>;

    /**
     * Display names of the models the report covers.
     */
    models: Array<string>;

    /**
     * Echoed request start date (YYYY-MM-DD, ET).
     */
    start_date: string;

    /**
     * `distribution`, `brand_share`, or `top_products`.
     */
    view: string;

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

export interface ShoppingProductsResponse {
  data: Array<ShoppingProductsResponse.Data>;

  info: ShoppingProductsResponse.Info;
}

export namespace ShoppingProductsResponse {
  /**
   * One product row. Merchant fields present only when `include_merchants` is true.
   */
  export interface Data {
    average_position?: number | null;

    date?: string | null;

    /**
     * Per-product merchant offers `{name, price}` (only with `include_merchants`).
     */
    merchants?: Array<{ [key: string]: unknown }> | null;

    position_above3_percentage?: number | null;

    position1_percentage?: number | null;

    position2_percentage?: number | null;

    position3_percentage?: number | null;

    product?: { [key: string]: unknown } | null;

    product_image_urls?: Array<string> | null;

    product_num_reviews?: number | null;

    product_rating?: number | null;

    product_url?: string | null;

    /**
     * An `{id, name}` reference for a grouped dimension value.
     */
    prompt?: Data.Prompt | null;

    /**
     * An `{id, name}` reference for a grouped dimension value.
     */
    topic?: Data.Topic | null;

    visibility_rank?: number | null;

    visibility_score?: number | null;

    [k: string]: unknown;
  }

  export namespace Data {
    /**
     * An `{id, name}` reference for a grouped dimension value.
     */
    export interface Prompt {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value.
     */
    export interface Topic {
      id?: string | null;

      name?: string | null;
    }
  }

  export interface Info {
    /**
     * Number of products on this page. When grouped by `date`/`topic`/`prompt`, `data`
     * holds one row per product x bucket, so `len(data)` can exceed `count`.
     */
    count: number;

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
     * Total products matching the query before pagination.
     */
    total_results?: number | null;

    [k: string]: unknown;
  }
}

/**
 * `summary` event payload (the report `info` block).
 */
export type ShoppingStreamBrandsResponse =
  | ShoppingStreamBrandsResponse.ShoppingBrandsV2Info
  | ShoppingStreamBrandsResponse.ShoppingBrandRow;

export namespace ShoppingStreamBrandsResponse {
  /**
   * `summary` event payload (the report `info` block).
   */
  export interface ShoppingBrandsV2Info {
    /**
     * Number of assets on this page. When grouped by `date`, `data` holds one row per
     * asset x bucket, so `len(data)` can exceed `count`.
     */
    count: number;

    /**
     * Echoed request end date (YYYY-MM-DD, ET).
     */
    end_date: string;

    /**
     * Metrics returned per row.
     */
    metrics: Array<string>;

    /**
     * Display names of the models the report covers.
     */
    models: Array<string>;

    /**
     * Asset scope: `all`, `owned`, or `custom` when `assets` was given.
     */
    scope: string;

    /**
     * Echoed request start date (YYYY-MM-DD, ET).
     */
    start_date: string;

    /**
     * Echoed `assets` selection; when set it overrides `scope`.
     */
    assets?: string | Array<string> | null;

    /**
     * Echoed normalized filter tree, or null when no filter was sent.
     */
    filter?: { [key: string]: unknown } | null;

    /**
     * Opaque cursor for the next page; null on the last page.
     */
    next_cursor?: string | null;

    /**
     * Total assets matching the query before pagination.
     */
    total_results?: number | null;

    [k: string]: unknown;
  }

  /**
   * `result` event payload — one visibility row.
   */
  export interface ShoppingBrandRow {
    asset?: { [key: string]: unknown } | null;

    average_position?: number | null;

    date?: string | null;

    /**
     * An `{id, name}` reference for a grouped dimension value.
     */
    prompt?: ShoppingBrandRow.Prompt | null;

    /**
     * Asset visibility rank as a top-level field (ungrouped only).
     */
    rank?: number | null;

    /**
     * An `{id, name}` reference for a grouped dimension value.
     */
    region?: ShoppingBrandRow.Region | null;

    /**
     * An `{id, name}` reference for a grouped dimension value.
     */
    topic?: ShoppingBrandRow.Topic | null;

    /**
     * Asset visibility rank (present on grouped rows).
     */
    visibility_rank?: number | null;

    visibility_score?: number | null;

    [k: string]: unknown;
  }

  export namespace ShoppingBrandRow {
    /**
     * An `{id, name}` reference for a grouped dimension value.
     */
    export interface Prompt {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value.
     */
    export interface Region {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value.
     */
    export interface Topic {
      id?: string | null;

      name?: string | null;
    }
  }
}

/**
 * `summary` event payload (the report `info` block).
 */
export type ShoppingStreamMerchantsResponse =
  | ShoppingStreamMerchantsResponse.ShoppingMerchantsV2Info
  | ShoppingStreamMerchantsResponse.ShoppingMerchantRow;

export namespace ShoppingStreamMerchantsResponse {
  /**
   * `summary` event payload (the report `info` block).
   */
  export interface ShoppingMerchantsV2Info {
    /**
     * Number of rows returned in `data` for this page.
     */
    count: number;

    /**
     * Echoed request end date (YYYY-MM-DD, ET).
     */
    end_date: string;

    /**
     * Metrics returned per row.
     */
    metrics: Array<string>;

    /**
     * Display names of the models the report covers.
     */
    models: Array<string>;

    /**
     * Echoed request start date (YYYY-MM-DD, ET).
     */
    start_date: string;

    /**
     * `distribution`, `brand_share`, or `top_products`.
     */
    view: string;

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
   * `result` event payload — one merchant row.
   */
  export interface ShoppingMerchantRow {
    brand_name?: string | null;

    brand_share?: number | null;

    date?: string | null;

    merchant_name?: string | null;

    merchant_share?: number | null;

    merchant_share_rank?: number | null;

    merchant_visibility?: number | null;

    merchant_visibility_rank?: number | null;

    product?: { [key: string]: unknown } | null;

    product_rank?: number | null;

    product_visibility?: number | null;

    visibility_rank?: number | null;

    [k: string]: unknown;
  }
}

/**
 * `summary` event payload (the report `info` block).
 */
export type ShoppingStreamProductsResponse =
  | ShoppingStreamProductsResponse.ShoppingProductsV2Info
  | ShoppingStreamProductsResponse.ShoppingProductRow;

export namespace ShoppingStreamProductsResponse {
  /**
   * `summary` event payload (the report `info` block).
   */
  export interface ShoppingProductsV2Info {
    /**
     * Number of products on this page. When grouped by `date`/`topic`/`prompt`, `data`
     * holds one row per product x bucket, so `len(data)` can exceed `count`.
     */
    count: number;

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
     * Total products matching the query before pagination.
     */
    total_results?: number | null;

    [k: string]: unknown;
  }

  /**
   * `result` event payload — one product row.
   */
  export interface ShoppingProductRow {
    average_position?: number | null;

    date?: string | null;

    /**
     * Per-product merchant offers `{name, price}` (only with `include_merchants`).
     */
    merchants?: Array<{ [key: string]: unknown }> | null;

    position_above3_percentage?: number | null;

    position1_percentage?: number | null;

    position2_percentage?: number | null;

    position3_percentage?: number | null;

    product?: { [key: string]: unknown } | null;

    product_image_urls?: Array<string> | null;

    product_num_reviews?: number | null;

    product_rating?: number | null;

    product_url?: string | null;

    /**
     * An `{id, name}` reference for a grouped dimension value.
     */
    prompt?: ShoppingProductRow.Prompt | null;

    /**
     * An `{id, name}` reference for a grouped dimension value.
     */
    topic?: ShoppingProductRow.Topic | null;

    visibility_rank?: number | null;

    visibility_score?: number | null;

    [k: string]: unknown;
  }

  export namespace ShoppingProductRow {
    /**
     * An `{id, name}` reference for a grouped dimension value.
     */
    export interface Prompt {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value.
     */
    export interface Topic {
      id?: string | null;

      name?: string | null;
    }
  }
}

/**
 * `summary` event payload (the report `info` block).
 */
export type ShoppingStreamTriggerRateResponse =
  | ShoppingStreamTriggerRateResponse.ShoppingTriggerRateV2Info
  | ShoppingStreamTriggerRateResponse.ShoppingTriggerRateRow;

export namespace ShoppingStreamTriggerRateResponse {
  /**
   * `summary` event payload (the report `info` block).
   */
  export interface ShoppingTriggerRateV2Info {
    /**
     * Number of rows returned in `data` for this page.
     */
    count: number;

    /**
     * Echoed request end date (YYYY-MM-DD, ET).
     */
    end_date: string;

    /**
     * Metrics returned per row.
     */
    metrics: Array<string>;

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
   * `result` event payload — one trigger row.
   */
  export interface ShoppingTriggerRateRow {
    date?: string | null;

    /**
     * An `{id, name}` reference for a grouped dimension value.
     */
    persona?: ShoppingTriggerRateRow.Persona | null;

    /**
     * An `{id, name}` reference for a grouped dimension value.
     */
    prompt?: ShoppingTriggerRateRow.Prompt | null;

    /**
     * An `{id, name}` reference for a grouped dimension value.
     */
    region?: ShoppingTriggerRateRow.Region | null;

    shopping_triggered_runs?: number | null;

    /**
     * An `{id, name}` reference for a grouped dimension value.
     */
    topic?: ShoppingTriggerRateRow.Topic | null;

    total_runs?: number | null;

    trigger_rate_percentage?: number | null;

    [k: string]: unknown;
  }

  export namespace ShoppingTriggerRateRow {
    /**
     * An `{id, name}` reference for a grouped dimension value.
     */
    export interface Persona {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value.
     */
    export interface Prompt {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value.
     */
    export interface Region {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value.
     */
    export interface Topic {
      id?: string | null;

      name?: string | null;
    }
  }
}

export interface ShoppingTriggerRateResponse {
  data: Array<ShoppingTriggerRateResponse.Data>;

  info: ShoppingTriggerRateResponse.Info;
}

export namespace ShoppingTriggerRateResponse {
  /**
   * One trigger-rate row. Group dims present depend on `group_by`.
   */
  export interface Data {
    date?: string | null;

    /**
     * An `{id, name}` reference for a grouped dimension value.
     */
    persona?: Data.Persona | null;

    /**
     * An `{id, name}` reference for a grouped dimension value.
     */
    prompt?: Data.Prompt | null;

    /**
     * An `{id, name}` reference for a grouped dimension value.
     */
    region?: Data.Region | null;

    shopping_triggered_runs?: number | null;

    /**
     * An `{id, name}` reference for a grouped dimension value.
     */
    topic?: Data.Topic | null;

    total_runs?: number | null;

    trigger_rate_percentage?: number | null;

    [k: string]: unknown;
  }

  export namespace Data {
    /**
     * An `{id, name}` reference for a grouped dimension value.
     */
    export interface Persona {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value.
     */
    export interface Prompt {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value.
     */
    export interface Region {
      id?: string | null;

      name?: string | null;
    }

    /**
     * An `{id, name}` reference for a grouped dimension value.
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
     * Metrics returned per row.
     */
    metrics: Array<string>;

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

export interface ShoppingBrandsParams {
  category_id: string;

  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;

  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;

  /**
   * Restrict to these asset names (a name or list). Overrides `scope`.
   */
  assets?: string | Array<string> | null;

  cursor?: string | null;

  /**
   * A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.
   */
  filter?: ShoppingBrandsParams.Filter | null;

  group_by?: Array<'date' | 'topic' | 'region' | 'prompt'>;

  interval?: 'day' | 'week' | 'month';

  /**
   * Page size for scope=all; default 10, max 50.
   */
  limit?: number | null;

  /**
   * Stream endpoint only: cap the number of streamed rows (default: all).
   */
  max_results?: number | null;

  metrics?: Array<'visibility_score' | 'average_position' | 'visibility_rank'> | null;

  scope?: 'owned' | 'all';
}

export namespace ShoppingBrandsParams {
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

export interface ShoppingMerchantsParams {
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
  filter?: ShoppingMerchantsParams.Filter | null;

  /**
   * `[]` = distribution; `[brand]` = brand share within each merchant; `[product]` =
   * top products per merchant. `date` (distribution only) adds a time series.
   */
  group_by?: Array<'date' | 'brand' | 'product'>;

  interval?: 'day' | 'week' | 'month';

  /**
   * Page size; default 10, max 50.
   */
  limit?: number | null;

  /**
   * Stream endpoint only: cap streamed rows.
   */
  max_results?: number | null;

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
}

export namespace ShoppingMerchantsParams {
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

export interface ShoppingProductsParams {
  category_id: string;

  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;

  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;

  /**
   * Competitors returned when `target_product` is set.
   */
  competitor_limit?: number;

  cursor?: string | null;

  /**
   * A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.
   */
  filter?: ShoppingProductsParams.Filter | null;

  group_by?: Array<'date' | 'topic' | 'prompt'>;

  /**
   * Include per-product merchant offers (names, prices, urls, images).
   */
  include_merchants?: boolean;

  interval?: 'day' | 'week' | 'month';

  /**
   * Page size; default 10, max 50.
   */
  limit?: number | null;

  /**
   * Stream endpoint only: cap streamed rows.
   */
  max_results?: number | null;

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
   * Return this product plus its top competitors (item view only).
   */
  target_product?: string | null;
}

export namespace ShoppingProductsParams {
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

export interface ShoppingStreamBrandsParams {
  category_id: string;

  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;

  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;

  /**
   * Restrict to these asset names (a name or list). Overrides `scope`.
   */
  assets?: string | Array<string> | null;

  cursor?: string | null;

  /**
   * A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.
   */
  filter?: ShoppingStreamBrandsParams.Filter | null;

  group_by?: Array<'date' | 'topic' | 'region' | 'prompt'>;

  interval?: 'day' | 'week' | 'month';

  /**
   * Page size for scope=all; default 10, max 50.
   */
  limit?: number | null;

  /**
   * Stream endpoint only: cap the number of streamed rows (default: all).
   */
  max_results?: number | null;

  metrics?: Array<'visibility_score' | 'average_position' | 'visibility_rank'> | null;

  scope?: 'owned' | 'all';
}

export namespace ShoppingStreamBrandsParams {
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

export interface ShoppingStreamMerchantsParams {
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
  filter?: ShoppingStreamMerchantsParams.Filter | null;

  /**
   * `[]` = distribution; `[brand]` = brand share within each merchant; `[product]` =
   * top products per merchant. `date` (distribution only) adds a time series.
   */
  group_by?: Array<'date' | 'brand' | 'product'>;

  interval?: 'day' | 'week' | 'month';

  /**
   * Page size; default 10, max 50.
   */
  limit?: number | null;

  /**
   * Stream endpoint only: cap streamed rows.
   */
  max_results?: number | null;

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
}

export namespace ShoppingStreamMerchantsParams {
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

export interface ShoppingStreamProductsParams {
  category_id: string;

  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;

  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;

  /**
   * Competitors returned when `target_product` is set.
   */
  competitor_limit?: number;

  cursor?: string | null;

  /**
   * A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.
   */
  filter?: ShoppingStreamProductsParams.Filter | null;

  group_by?: Array<'date' | 'topic' | 'prompt'>;

  /**
   * Include per-product merchant offers (names, prices, urls, images).
   */
  include_merchants?: boolean;

  interval?: 'day' | 'week' | 'month';

  /**
   * Page size; default 10, max 50.
   */
  limit?: number | null;

  /**
   * Stream endpoint only: cap streamed rows.
   */
  max_results?: number | null;

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
   * Return this product plus its top competitors (item view only).
   */
  target_product?: string | null;
}

export namespace ShoppingStreamProductsParams {
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

export interface ShoppingStreamTriggerRateParams {
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
  filter?: ShoppingStreamTriggerRateParams.Filter | null;

  /**
   * Group by `prompt`/`topic` for the per-prompt/-topic trigger rate.
   */
  group_by?: Array<'date' | 'topic' | 'region' | 'persona' | 'prompt'>;

  interval?: 'day' | 'week' | 'month';

  /**
   * Page size; default 10, max 50.
   */
  limit?: number | null;

  /**
   * Stream endpoint only: cap streamed rows.
   */
  max_results?: number | null;

  metrics?: Array<'total_runs' | 'shopping_triggered_runs' | 'trigger_rate_percentage'> | null;
}

export namespace ShoppingStreamTriggerRateParams {
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

export interface ShoppingTriggerRateParams {
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
  filter?: ShoppingTriggerRateParams.Filter | null;

  /**
   * Group by `prompt`/`topic` for the per-prompt/-topic trigger rate.
   */
  group_by?: Array<'date' | 'topic' | 'region' | 'persona' | 'prompt'>;

  interval?: 'day' | 'week' | 'month';

  /**
   * Page size; default 10, max 50.
   */
  limit?: number | null;

  /**
   * Stream endpoint only: cap streamed rows.
   */
  max_results?: number | null;

  metrics?: Array<'total_runs' | 'shopping_triggered_runs' | 'trigger_rate_percentage'> | null;
}

export namespace ShoppingTriggerRateParams {
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

export declare namespace Shopping {
  export {
    type BrandNameFilter as BrandNameFilter,
    type MerchantNameFilter as MerchantNameFilter,
    type ProductNameFilter as ProductNameFilter,
    type ShoppingBrandsResponse as ShoppingBrandsResponse,
    type ShoppingMerchantsResponse as ShoppingMerchantsResponse,
    type ShoppingProductsResponse as ShoppingProductsResponse,
    type ShoppingStreamBrandsResponse as ShoppingStreamBrandsResponse,
    type ShoppingStreamMerchantsResponse as ShoppingStreamMerchantsResponse,
    type ShoppingStreamProductsResponse as ShoppingStreamProductsResponse,
    type ShoppingStreamTriggerRateResponse as ShoppingStreamTriggerRateResponse,
    type ShoppingTriggerRateResponse as ShoppingTriggerRateResponse,
    type ShoppingBrandsParams as ShoppingBrandsParams,
    type ShoppingMerchantsParams as ShoppingMerchantsParams,
    type ShoppingProductsParams as ShoppingProductsParams,
    type ShoppingStreamBrandsParams as ShoppingStreamBrandsParams,
    type ShoppingStreamMerchantsParams as ShoppingStreamMerchantsParams,
    type ShoppingStreamProductsParams as ShoppingStreamProductsParams,
    type ShoppingStreamTriggerRateParams as ShoppingStreamTriggerRateParams,
    type ShoppingTriggerRateParams as ShoppingTriggerRateParams,
  };
}

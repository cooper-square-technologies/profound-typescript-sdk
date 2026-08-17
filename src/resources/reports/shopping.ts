// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import type * as ReportsAPI from './reports';
import type * as Shared from '../shared';

export class Shopping extends APIResource {
  /**
   * Shopping Visibility
   *
   * @param {ShoppingVisibilityParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ShoppingVisibilityResponse>} Successful Response
   *
   * @example
   * ```ts
   * const visibility = await client.reports.shopping.visibility({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '2024-01-01T00:00:00.000Z',
   *   end_date: '2024-01-01T00:00:00.000Z',
   *   date_interval: 'day',
   *   include_count: false,
   *   tag_filter_type: 'any',
   *   include_no_tag: false,
   *   exclude_topic_ids: false,
   *   include_asset_only: false,
   *   rank_by: 'visibility_score',
   *   include_position_frequency: false,
   * });
   * ```
   */
  visibility(
    body: ShoppingVisibilityParams,
    options?: RequestOptions,
  ): APIPromise<ShoppingVisibilityResponse> {
    return this._client.post('/v1/reports/shopping/visibility', { body, ...options });
  }

  /**
   * Shopping Item Visibility
   *
   * @param {ShoppingItemVisibilityParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ShoppingItemVisibilityResponse>} Successful Response
   *
   * @example
   * ```ts
   * const itemVisibility = await client.reports.shopping.itemVisibility({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '2024-01-01T00:00:00.000Z',
   *   end_date: '2024-01-01T00:00:00.000Z',
   *   date_interval: 'day',
   *   include_count: false,
   *   tag_filter_type: 'any',
   *   include_no_tag: false,
   *   exclude_topic_ids: false,
   *   merchant_filter_type: 'any',
   *   include_competitors: false,
   *   competitor_limit: 5,
   *   include_position_frequency: false,
   * });
   * ```
   */
  itemVisibility(
    body: ShoppingItemVisibilityParams,
    options?: RequestOptions,
  ): APIPromise<ShoppingItemVisibilityResponse> {
    return this._client.post('/v1/reports/shopping/item-visibility', { body, ...options });
  }

  /**
   * Shopping Merchant Distribution
   *
   * @param {ShoppingMerchantDistributionParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ShoppingMerchantDistributionResponse>} Successful Response
   *
   * @example
   * ```ts
   * const merchantDistribution = await client.reports.shopping.merchantDistribution({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '2024-01-01T00:00:00.000Z',
   *   end_date: '2024-01-01T00:00:00.000Z',
   *   date_interval: 'day',
   *   include_count: false,
   *   tag_filter_type: 'any',
   *   include_no_tag: false,
   *   exclude_topic_ids: false,
   * });
   * ```
   */
  merchantDistribution(
    body: ShoppingMerchantDistributionParams,
    options?: RequestOptions,
  ): APIPromise<ShoppingMerchantDistributionResponse> {
    return this._client.post('/v1/reports/shopping/merchant-distribution', { body, ...options });
  }

  /**
   * Shopping Merchant Visibility By Brand
   *
   * @param {ShoppingMerchantVisibilityByBrandParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ShoppingMerchantVisibilityByBrandResponse>} Successful Response
   *
   * @example
   * ```ts
   * const merchantVisibilityByBrand = await client.reports.shopping.merchantVisibilityByBrand({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '2024-01-01T00:00:00.000Z',
   *   end_date: '2024-01-01T00:00:00.000Z',
   *   date_interval: 'day',
   *   include_count: false,
   *   tag_filter_type: 'any',
   *   include_no_tag: false,
   *   exclude_topic_ids: false,
   *   include_brand_only: false,
   * });
   * ```
   */
  merchantVisibilityByBrand(
    body: ShoppingMerchantVisibilityByBrandParams,
    options?: RequestOptions,
  ): APIPromise<ShoppingMerchantVisibilityByBrandResponse> {
    return this._client.post('/v1/reports/shopping/merchant-visibility-by-brand', { body, ...options });
  }

  /**
   * Shopping Merchant By Items
   *
   * @param {ShoppingMerchantByItemsParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ShoppingMerchantByItemsResponse>} Successful Response
   *
   * @example
   * ```ts
   * const merchantByItems = await client.reports.shopping.merchantByItems({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '2024-01-01T00:00:00.000Z',
   *   end_date: '2024-01-01T00:00:00.000Z',
   *   date_interval: 'day',
   *   include_count: false,
   *   tag_filter_type: 'any',
   *   include_no_tag: false,
   *   exclude_topic_ids: false,
   * });
   * ```
   */
  merchantByItems(
    body: ShoppingMerchantByItemsParams,
    options?: RequestOptions,
  ): APIPromise<ShoppingMerchantByItemsResponse> {
    return this._client.post('/v1/reports/shopping/merchant-by-items', { body, ...options });
  }

  /**
   * Shopping All Items With Merchants
   *
   * @param {ShoppingAllItemsWithMerchantsParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ShoppingAllItemsWithMerchantsResponse>} Successful Response
   *
   * @example
   * ```ts
   * const allItemsWithMerchants = await client.reports.shopping.allItemsWithMerchants({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '2024-01-01T00:00:00.000Z',
   *   end_date: '2024-01-01T00:00:00.000Z',
   *   date_interval: 'day',
   *   include_count: false,
   *   tag_filter_type: 'any',
   *   include_no_tag: false,
   *   exclude_topic_ids: false,
   *   merchant_filter_type: 'any',
   *   rank_by: 'visibility',
   *   sort_order: 'desc',
   * });
   * ```
   */
  allItemsWithMerchants(
    body: ShoppingAllItemsWithMerchantsParams,
    options?: RequestOptions,
  ): APIPromise<ShoppingAllItemsWithMerchantsResponse> {
    return this._client.post('/v1/reports/shopping/all-items-with-merchants', { body, ...options });
  }

  /**
   * Shopping Trigger Rate
   *
   * @param {ShoppingTriggerRateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ShoppingTriggerRateResponse>} Successful Response
   *
   * @example
   * ```ts
   * const triggerRate = await client.reports.shopping.triggerRate({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '2024-01-01T00:00:00.000Z',
   *   end_date: '2024-01-01T00:00:00.000Z',
   *   date_interval: 'day',
   *   include_count: false,
   *   tag_filter_type: 'any',
   *   include_no_tag: false,
   *   exclude_topic_ids: false,
   * });
   * ```
   */
  triggerRate(
    body: ShoppingTriggerRateParams,
    options?: RequestOptions,
  ): APIPromise<ShoppingTriggerRateResponse> {
    return this._client.post('/v1/reports/shopping/trigger-rate', { body, ...options });
  }

  /**
   * Shopping Merchant Share
   *
   * @param {ShoppingMerchantShareParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ShoppingMerchantShareResponse>} Successful Response
   *
   * @example
   * ```ts
   * const merchantShare = await client.reports.shopping.merchantShare({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '2024-01-01T00:00:00.000Z',
   *   end_date: '2024-01-01T00:00:00.000Z',
   *   date_interval: 'day',
   *   include_count: false,
   *   tag_filter_type: 'any',
   *   include_no_tag: false,
   *   exclude_topic_ids: false,
   * });
   * ```
   */
  merchantShare(
    body: ShoppingMerchantShareParams,
    options?: RequestOptions,
  ): APIPromise<ShoppingMerchantShareResponse> {
    return this._client.post('/v1/reports/shopping/merchant-share', { body, ...options });
  }

  /**
   * Shopping Product Merchant Urls
   *
   * @param {ShoppingProductMerchantURLsParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ShoppingProductMerchantURLsResponse>} Successful Response
   *
   * @example
   * ```ts
   * const productMerchantURLs = await client.reports.shopping.productMerchantURLs({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   product_names: [],
   *   start_date: '2024-01-01T00:00:00.000Z',
   *   end_date: '2024-01-01T00:00:00.000Z',
   * });
   * ```
   */
  productMerchantURLs(
    body: ShoppingProductMerchantURLsParams,
    options?: RequestOptions,
  ): APIPromise<ShoppingProductMerchantURLsResponse> {
    return this._client.post('/v1/reports/shopping/product-merchant-urls', { body, ...options });
  }

  /**
   * Shopping Executions
   *
   * @param {ShoppingExecutionsParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ShoppingExecutionsResponse>} Successful Response
   *
   * @example
   * ```ts
   * const executions = await client.reports.shopping.executions({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '2024-01-01T00:00:00.000Z',
   *   end_date: '2024-01-01T00:00:00.000Z',
   *   date_interval: 'day',
   *   include_count: false,
   *   tag_filter_type: 'any',
   *   include_no_tag: false,
   *   exclude_topic_ids: false,
   *   analysis_filter_type: 'any',
   * });
   * ```
   */
  executions(
    body: ShoppingExecutionsParams,
    options?: RequestOptions,
  ): APIPromise<ShoppingExecutionsResponse> {
    return this._client.post('/v1/reports/shopping/executions', { body, ...options });
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

export interface ShoppingVisibilityParams {
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * Start date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   * @format date-time
   */
  start_date: string;
  /**
   * End date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   * @format date-time
   */
  end_date: string;
  /**
   * @format date-time
   */
  comparison_start_date?: string | null;
  /**
   * @format date-time
   */
  comparison_end_date?: string | null;
  /**
   * @default day
   */
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';
  filters?: Array<
    | Shared.RegionIDFilter
    | Shared.ModelIDFilter
    | Shared.TopicIDFilter
    | Shared.TagIDFilter
    | ReportsAPI.PromptIDFilter
    | Shared.PersonaIDFilter
    | BrandNameFilter
    | MerchantNameFilter
    | ProductNameFilter
    | ShoppingVisibilityParams.ProfoundShoppingAPIAssetNameFilter
  >;
  order_by?: Record<string, 'asc' | 'desc'>;
  pagination?: Shared.Pagination | null;
  /**
   * @default false
   */
  include_count?: boolean;
  /**
   * @default any
   */
  tag_filter_type?: 'any' | 'all';
  /**
   * @default false
   */
  include_no_tag?: boolean;
  /**
   * @default false
   */
  exclude_topic_ids?: boolean;
  dimensions?: Array<
    'period' | 'asset_name' | 'date' | 'model_id' | 'topic_id' | 'region_id' | 'prompt_id' | 'prompt'
  >;
  metrics?: Array<
    | 'visibility_score'
    | 'share_of_voice'
    | 'average_position'
    | 'visibility_rank'
    | 'average_position_rank'
    | 'position1_percentage'
    | 'position2_percentage'
    | 'position3_percentage'
    | 'position_above3_percentage'
    | 'total_count'
  >;
  owned_asset_names?: Array<string>;
  search_asset?: string | null;
  include_asset?: string | null;
  /**
   * @default false
   */
  include_asset_only?: boolean;
  include_assets_only?: Array<string>;
  /**
   * @default visibility_score
   */
  rank_by?: 'visibility_score' | 'average_position';
  /**
   * @default false
   */
  include_position_frequency?: boolean;
}

export namespace ShoppingVisibilityParams {
  export interface ProfoundShoppingAPIAssetNameFilter {
    field: 'asset_name';
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
}

export interface ShoppingVisibilityResponse {
  /**
   * Base model for report information.
   */
  info: ReportsAPI.ReportInfo;
  data: Array<Record<string, unknown>>;
}

export interface ShoppingItemVisibilityParams {
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * Start date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   * @format date-time
   */
  start_date: string;
  /**
   * End date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   * @format date-time
   */
  end_date: string;
  /**
   * @format date-time
   */
  comparison_start_date?: string | null;
  /**
   * @format date-time
   */
  comparison_end_date?: string | null;
  /**
   * @default day
   */
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';
  filters?: Array<
    | Shared.RegionIDFilter
    | Shared.ModelIDFilter
    | Shared.TopicIDFilter
    | Shared.TagIDFilter
    | ReportsAPI.PromptIDFilter
    | Shared.PersonaIDFilter
    | BrandNameFilter
    | MerchantNameFilter
    | ProductNameFilter
    | ShoppingItemVisibilityParams.ProfoundShoppingAPIAssetNameFilter
  >;
  order_by?: Record<string, 'asc' | 'desc'>;
  pagination?: Shared.Pagination | null;
  /**
   * @default false
   */
  include_count?: boolean;
  /**
   * @default any
   */
  tag_filter_type?: 'any' | 'all';
  /**
   * @default false
   */
  include_no_tag?: boolean;
  /**
   * @default false
   */
  exclude_topic_ids?: boolean;
  dimensions?: Array<
    | 'period'
    | 'product_key'
    | 'product_name'
    | 'brand_name'
    | 'date'
    | 'topic_id'
    | 'prompt_id'
    | 'prompt'
    | 'product_url'
    | 'product_image_urls'
    | 'product_price'
  >;
  metrics?: Array<
    | 'visibility_score'
    | 'share_of_voice'
    | 'average_position'
    | 'visibility_rank'
    | 'position1_percentage'
    | 'position2_percentage'
    | 'position3_percentage'
    | 'position_above3_percentage'
    | 'product_rating'
    | 'product_num_reviews'
    | 'total_count'
  >;
  owned_asset_names?: Array<string>;
  include_items?: Array<string>;
  search_item?: string | null;
  /**
   * @default any
   */
  merchant_filter_type?: 'any' | 'all';
  /**
   * @default false
   */
  include_competitors?: boolean;
  target_product?: string | null;
  /**
   * @default 5
   * @minimum 1
   */
  competitor_limit?: number;
  /**
   * @default false
   */
  include_position_frequency?: boolean;
}

export namespace ShoppingItemVisibilityParams {
  export interface ProfoundShoppingAPIAssetNameFilter {
    field: 'asset_name';
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
}

export interface ShoppingItemVisibilityResponse {
  /**
   * Base model for report information.
   */
  info: ReportsAPI.ReportInfo;
  data: Array<Record<string, unknown>>;
}

export interface ShoppingMerchantDistributionParams {
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * Start date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   * @format date-time
   */
  start_date: string;
  /**
   * End date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   * @format date-time
   */
  end_date: string;
  /**
   * @format date-time
   */
  comparison_start_date?: string | null;
  /**
   * @format date-time
   */
  comparison_end_date?: string | null;
  /**
   * @default day
   */
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';
  filters?: Array<
    | Shared.RegionIDFilter
    | Shared.ModelIDFilter
    | Shared.TopicIDFilter
    | Shared.TagIDFilter
    | ReportsAPI.PromptIDFilter
    | Shared.PersonaIDFilter
    | BrandNameFilter
    | MerchantNameFilter
    | ProductNameFilter
    | ShoppingMerchantDistributionParams.ProfoundShoppingAPIAssetNameFilter
  >;
  order_by?: Record<string, 'asc' | 'desc'>;
  pagination?: Shared.Pagination | null;
  /**
   * @default false
   */
  include_count?: boolean;
  /**
   * @default any
   */
  tag_filter_type?: 'any' | 'all';
  /**
   * @default false
   */
  include_no_tag?: boolean;
  /**
   * @default false
   */
  exclude_topic_ids?: boolean;
  dimensions?: Array<'period' | 'merchant_name' | 'date' | 'owned_asset_name'>;
  metrics?: Array<
    'offer_count' | 'product_count' | 'average_rank' | 'share_of_offers' | 'visibility_rank' | 'total_count'
  >;
  owned_asset_names?: Array<string>;
  search_merchant?: string | null;
}

export namespace ShoppingMerchantDistributionParams {
  export interface ProfoundShoppingAPIAssetNameFilter {
    field: 'asset_name';
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
}

export interface ShoppingMerchantDistributionResponse {
  /**
   * Base model for report information.
   */
  info: ReportsAPI.ReportInfo;
  data: Array<Record<string, unknown>>;
}

export interface ShoppingMerchantVisibilityByBrandParams {
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * Start date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   * @format date-time
   */
  start_date: string;
  /**
   * End date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   * @format date-time
   */
  end_date: string;
  /**
   * @format date-time
   */
  comparison_start_date?: string | null;
  /**
   * @format date-time
   */
  comparison_end_date?: string | null;
  /**
   * @default day
   */
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';
  filters?: Array<
    | Shared.RegionIDFilter
    | Shared.ModelIDFilter
    | Shared.TopicIDFilter
    | Shared.TagIDFilter
    | ReportsAPI.PromptIDFilter
    | Shared.PersonaIDFilter
    | BrandNameFilter
    | MerchantNameFilter
    | ProductNameFilter
    | ShoppingMerchantVisibilityByBrandParams.ProfoundShoppingAPIAssetNameFilter
  >;
  order_by?: Record<string, 'asc' | 'desc'>;
  pagination?: Shared.Pagination | null;
  /**
   * @default false
   */
  include_count?: boolean;
  /**
   * @default any
   */
  tag_filter_type?: 'any' | 'all';
  /**
   * @default false
   */
  include_no_tag?: boolean;
  /**
   * @default false
   */
  exclude_topic_ids?: boolean;
  dimensions?: Array<'period' | 'merchant_name' | 'brand_name'>;
  metrics?: Array<
    'visibility_score' | 'share_of_voice' | 'average_position' | 'visibility_rank' | 'total_count'
  >;
  owned_asset_names?: Array<string>;
  search_brand?: string | null;
  include_brand?: string | null;
  /**
   * @default false
   */
  include_brand_only?: boolean;
}

export namespace ShoppingMerchantVisibilityByBrandParams {
  export interface ProfoundShoppingAPIAssetNameFilter {
    field: 'asset_name';
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
}

export interface ShoppingMerchantVisibilityByBrandResponse {
  /**
   * Base model for report information.
   */
  info: ReportsAPI.ReportInfo;
  data: Array<Record<string, unknown>>;
}

export interface ShoppingMerchantByItemsParams {
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * Start date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   * @format date-time
   */
  start_date: string;
  /**
   * End date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   * @format date-time
   */
  end_date: string;
  /**
   * @format date-time
   */
  comparison_start_date?: string | null;
  /**
   * @format date-time
   */
  comparison_end_date?: string | null;
  /**
   * @default day
   */
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';
  filters?: Array<
    | Shared.RegionIDFilter
    | Shared.ModelIDFilter
    | Shared.TopicIDFilter
    | Shared.TagIDFilter
    | ReportsAPI.PromptIDFilter
    | Shared.PersonaIDFilter
    | BrandNameFilter
    | MerchantNameFilter
    | ProductNameFilter
    | ShoppingMerchantByItemsParams.ProfoundShoppingAPIAssetNameFilter
  >;
  order_by?: Record<string, 'asc' | 'desc'>;
  pagination?: Shared.Pagination | null;
  /**
   * @default false
   */
  include_count?: boolean;
  /**
   * @default any
   */
  tag_filter_type?: 'any' | 'all';
  /**
   * @default false
   */
  include_no_tag?: boolean;
  /**
   * @default false
   */
  exclude_topic_ids?: boolean;
  dimensions?: Array<
    | 'period'
    | 'merchant_name'
    | 'product_name'
    | 'brand_name'
    | 'product_image_urls'
    | 'product_price'
    | 'merchant_prices'
    | 'has_instant_checkout'
    | 'delivery_options'
    | 'merchant_url'
  >;
  metrics?: Array<
    'merchant_visibility' | 'product_visibility' | 'product_rank' | 'avg_position' | 'total_count'
  >;
  product_name?: string | null;
}

export namespace ShoppingMerchantByItemsParams {
  export interface ProfoundShoppingAPIAssetNameFilter {
    field: 'asset_name';
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
}

export interface ShoppingMerchantByItemsResponse {
  /**
   * Base model for report information.
   */
  info: ReportsAPI.ReportInfo;
  data: Array<Record<string, unknown>>;
}

export interface ShoppingAllItemsWithMerchantsParams {
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * Start date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   * @format date-time
   */
  start_date: string;
  /**
   * End date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   * @format date-time
   */
  end_date: string;
  /**
   * @format date-time
   */
  comparison_start_date?: string | null;
  /**
   * @format date-time
   */
  comparison_end_date?: string | null;
  /**
   * @default day
   */
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';
  filters?: Array<
    | Shared.RegionIDFilter
    | Shared.ModelIDFilter
    | Shared.TopicIDFilter
    | Shared.TagIDFilter
    | ReportsAPI.PromptIDFilter
    | Shared.PersonaIDFilter
    | BrandNameFilter
    | MerchantNameFilter
    | ProductNameFilter
    | ShoppingAllItemsWithMerchantsParams.ProfoundShoppingAPIAssetNameFilter
  >;
  order_by?: Record<string, 'asc' | 'desc'>;
  pagination?: Shared.Pagination | null;
  /**
   * @default false
   */
  include_count?: boolean;
  /**
   * @default any
   */
  tag_filter_type?: 'any' | 'all';
  /**
   * @default false
   */
  include_no_tag?: boolean;
  /**
   * @default false
   */
  exclude_topic_ids?: boolean;
  dimensions?: Array<
    | 'period'
    | 'product_name'
    | 'brand_name'
    | 'product_url'
    | 'product_image_urls'
    | 'product_price'
    | 'merchant_names'
    | 'merchant_prices'
  >;
  metrics?: Array<
    | 'visibility_score'
    | 'share_of_voice'
    | 'average_position'
    | 'visibility_rank'
    | 'product_rating'
    | 'product_num_reviews'
    | 'total_count'
  >;
  owned_asset_names?: Array<string>;
  include_items?: Array<string>;
  search_item?: string | null;
  /**
   * @default any
   */
  merchant_filter_type?: 'any' | 'all';
  /**
   * @default visibility
   */
  rank_by?: 'visibility' | 'average_position' | 'name';
  /**
   * @default desc
   */
  sort_order?: 'asc' | 'desc';
}

export namespace ShoppingAllItemsWithMerchantsParams {
  export interface ProfoundShoppingAPIAssetNameFilter {
    field: 'asset_name';
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
}

export interface ShoppingAllItemsWithMerchantsResponse {
  /**
   * Base model for report information.
   */
  info: ReportsAPI.ReportInfo;
  data: Array<Record<string, unknown>>;
}

export interface ShoppingTriggerRateParams {
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * Start date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   * @format date-time
   */
  start_date: string;
  /**
   * End date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   * @format date-time
   */
  end_date: string;
  /**
   * @format date-time
   */
  comparison_start_date?: string | null;
  /**
   * @format date-time
   */
  comparison_end_date?: string | null;
  /**
   * @default day
   */
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';
  filters?: Array<
    | Shared.RegionIDFilter
    | Shared.ModelIDFilter
    | Shared.TopicIDFilter
    | Shared.TagIDFilter
    | ReportsAPI.PromptIDFilter
    | Shared.PersonaIDFilter
    | BrandNameFilter
    | MerchantNameFilter
    | ProductNameFilter
    | ShoppingTriggerRateParams.ProfoundShoppingAPIAssetNameFilter
  >;
  order_by?: Record<string, 'asc' | 'desc'>;
  pagination?: Shared.Pagination | null;
  /**
   * @default false
   */
  include_count?: boolean;
  /**
   * @default any
   */
  tag_filter_type?: 'any' | 'all';
  /**
   * @default false
   */
  include_no_tag?: boolean;
  /**
   * @default false
   */
  exclude_topic_ids?: boolean;
  dimensions?: Array<
    'period' | 'date' | 'model_id' | 'topic_id' | 'region_id' | 'persona_id' | 'prompt_id' | 'prompt'
  >;
  metrics?: Array<'total_runs' | 'shopping_triggered_runs' | 'trigger_rate_percentage'>;
}

export namespace ShoppingTriggerRateParams {
  export interface ProfoundShoppingAPIAssetNameFilter {
    field: 'asset_name';
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
}

export interface ShoppingTriggerRateResponse {
  /**
   * Base model for report information.
   */
  info: ReportsAPI.ReportInfo;
  data: Array<Record<string, unknown>>;
}

export interface ShoppingMerchantShareParams {
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * Start date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   * @format date-time
   */
  start_date: string;
  /**
   * End date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   * @format date-time
   */
  end_date: string;
  /**
   * @format date-time
   */
  comparison_start_date?: string | null;
  /**
   * @format date-time
   */
  comparison_end_date?: string | null;
  /**
   * @default day
   */
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';
  filters?: Array<
    | Shared.RegionIDFilter
    | Shared.ModelIDFilter
    | Shared.TopicIDFilter
    | Shared.TagIDFilter
    | ReportsAPI.PromptIDFilter
    | Shared.PersonaIDFilter
    | BrandNameFilter
    | MerchantNameFilter
    | ProductNameFilter
    | ShoppingMerchantShareParams.ProfoundShoppingAPIAssetNameFilter
  >;
  order_by?: Record<string, 'asc' | 'desc'>;
  pagination?: Shared.Pagination | null;
  /**
   * @default false
   */
  include_count?: boolean;
  /**
   * @default any
   */
  tag_filter_type?: 'any' | 'all';
  /**
   * @default false
   */
  include_no_tag?: boolean;
  /**
   * @default false
   */
  exclude_topic_ids?: boolean;
  dimensions?: Array<'period' | 'topic_id' | 'prompt_id'>;
  metrics?: Array<'merchant_share'>;
  target_asset_names?: Array<string>;
  owned_asset_names?: Array<string>;
}

export namespace ShoppingMerchantShareParams {
  export interface ProfoundShoppingAPIAssetNameFilter {
    field: 'asset_name';
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
}

export interface ShoppingMerchantShareResponse {
  /**
   * Base model for report information.
   */
  info: ReportsAPI.ReportInfo;
  data: Array<Record<string, unknown>>;
}

export interface ShoppingProductMerchantURLsParams {
  /**
   * @format uuid
   */
  category_id: string;
  product_names: Array<string>;
  /**
   * @format date-time
   */
  start_date: string;
  /**
   * @format date-time
   */
  end_date: string;
}

export interface ShoppingProductMerchantURLsResponse {
  /**
   * Base model for report information.
   */
  info: ReportsAPI.ReportInfo;
  data: Array<Record<string, unknown>>;
}

export interface ShoppingExecutionsParams {
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * Start date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   * @format date-time
   */
  start_date: string;
  /**
   * End date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   * @format date-time
   */
  end_date: string;
  /**
   * @format date-time
   */
  comparison_start_date?: string | null;
  /**
   * @format date-time
   */
  comparison_end_date?: string | null;
  /**
   * @default day
   */
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';
  filters?: Array<
    | Shared.RegionIDFilter
    | Shared.ModelIDFilter
    | Shared.TopicIDFilter
    | Shared.TagIDFilter
    | ReportsAPI.PromptIDFilter
    | Shared.PersonaIDFilter
    | BrandNameFilter
    | MerchantNameFilter
    | ProductNameFilter
    | ShoppingExecutionsParams.ProfoundShoppingAPIAssetNameFilter
  >;
  order_by?: Record<string, 'asc' | 'desc'>;
  pagination?: Shared.Pagination | null;
  /**
   * @default false
   */
  include_count?: boolean;
  /**
   * @default any
   */
  tag_filter_type?: 'any' | 'all';
  /**
   * @default false
   */
  include_no_tag?: boolean;
  /**
   * @default false
   */
  exclude_topic_ids?: boolean;
  analysis_types?: Array<'visibility' | 'sentiment' | 'sentiment_v2' | 'accuracy'>;
  /**
   * @default any
   */
  analysis_filter_type?: 'any' | 'all';
  owned_asset_names?: Array<string>;
}

export namespace ShoppingExecutionsParams {
  export interface ProfoundShoppingAPIAssetNameFilter {
    field: 'asset_name';
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
}

export interface ShoppingExecutionsResponse {
  /**
   * Base model for report information.
   */
  info: ReportsAPI.ReportInfo;
  data: Array<Record<string, unknown>>;
}
export declare namespace Shopping {
  export {
    type BrandNameFilter as BrandNameFilter,
    type MerchantNameFilter as MerchantNameFilter,
    type ProductNameFilter as ProductNameFilter,
    type ShoppingVisibilityResponse as ShoppingVisibilityResponse,
    type ShoppingItemVisibilityResponse as ShoppingItemVisibilityResponse,
    type ShoppingMerchantDistributionResponse as ShoppingMerchantDistributionResponse,
    type ShoppingMerchantVisibilityByBrandResponse as ShoppingMerchantVisibilityByBrandResponse,
    type ShoppingMerchantByItemsResponse as ShoppingMerchantByItemsResponse,
    type ShoppingAllItemsWithMerchantsResponse as ShoppingAllItemsWithMerchantsResponse,
    type ShoppingTriggerRateResponse as ShoppingTriggerRateResponse,
    type ShoppingMerchantShareResponse as ShoppingMerchantShareResponse,
    type ShoppingProductMerchantURLsResponse as ShoppingProductMerchantURLsResponse,
    type ShoppingExecutionsResponse as ShoppingExecutionsResponse,
    type ShoppingVisibilityParams as ShoppingVisibilityParams,
    type ShoppingItemVisibilityParams as ShoppingItemVisibilityParams,
    type ShoppingMerchantDistributionParams as ShoppingMerchantDistributionParams,
    type ShoppingMerchantVisibilityByBrandParams as ShoppingMerchantVisibilityByBrandParams,
    type ShoppingMerchantByItemsParams as ShoppingMerchantByItemsParams,
    type ShoppingAllItemsWithMerchantsParams as ShoppingAllItemsWithMerchantsParams,
    type ShoppingTriggerRateParams as ShoppingTriggerRateParams,
    type ShoppingMerchantShareParams as ShoppingMerchantShareParams,
    type ShoppingProductMerchantURLsParams as ShoppingProductMerchantURLsParams,
    type ShoppingExecutionsParams as ShoppingExecutionsParams,
  };
}

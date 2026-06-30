// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as ReportsAPI from './reports';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Shopping extends APIResource {
  /**
   * Shopping All Items With Merchants
   *
   * @example
   * ```ts
   * const response =
   *   await client.reports.shopping.allItemsWithMerchants({
   *     category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     end_date: '2019-12-27T18:11:19.117Z',
   *     start_date: '2019-12-27T18:11:19.117Z',
   *   });
   * ```
   */
  allItemsWithMerchants(
    body: ShoppingAllItemsWithMerchantsParams,
    options?: RequestOptions,
  ): APIPromise<ShoppingAllItemsWithMerchantsResponse> {
    return this._client.post('/v1/reports/shopping/all-items-with-merchants', { body, ...options });
  }

  /**
   * Shopping Executions
   *
   * @example
   * ```ts
   * const response = await client.reports.shopping.executions({
   *   category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   end_date: '2019-12-27T18:11:19.117Z',
   *   start_date: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  executions(
    body: ShoppingExecutionsParams,
    options?: RequestOptions,
  ): APIPromise<ShoppingExecutionsResponse> {
    return this._client.post('/v1/reports/shopping/executions', { body, ...options });
  }

  /**
   * Shopping Item Visibility
   *
   * @example
   * ```ts
   * const response =
   *   await client.reports.shopping.itemVisibility({
   *     category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     end_date: '2019-12-27T18:11:19.117Z',
   *     start_date: '2019-12-27T18:11:19.117Z',
   *   });
   * ```
   */
  itemVisibility(
    body: ShoppingItemVisibilityParams,
    options?: RequestOptions,
  ): APIPromise<ShoppingItemVisibilityResponse> {
    return this._client.post('/v1/reports/shopping/item-visibility', { body, ...options });
  }

  /**
   * Shopping Merchant By Items
   *
   * @example
   * ```ts
   * const response =
   *   await client.reports.shopping.merchantByItems({
   *     category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     end_date: '2019-12-27T18:11:19.117Z',
   *     start_date: '2019-12-27T18:11:19.117Z',
   *   });
   * ```
   */
  merchantByItems(
    body: ShoppingMerchantByItemsParams,
    options?: RequestOptions,
  ): APIPromise<ShoppingMerchantByItemsResponse> {
    return this._client.post('/v1/reports/shopping/merchant-by-items', { body, ...options });
  }

  /**
   * Shopping Merchant Distribution
   *
   * @example
   * ```ts
   * const response =
   *   await client.reports.shopping.merchantDistribution({
   *     category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     end_date: '2019-12-27T18:11:19.117Z',
   *     start_date: '2019-12-27T18:11:19.117Z',
   *   });
   * ```
   */
  merchantDistribution(
    body: ShoppingMerchantDistributionParams,
    options?: RequestOptions,
  ): APIPromise<ShoppingMerchantDistributionResponse> {
    return this._client.post('/v1/reports/shopping/merchant-distribution', { body, ...options });
  }

  /**
   * Shopping Merchant Share
   *
   * @example
   * ```ts
   * const response =
   *   await client.reports.shopping.merchantShare({
   *     category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     end_date: '2019-12-27T18:11:19.117Z',
   *     start_date: '2019-12-27T18:11:19.117Z',
   *   });
   * ```
   */
  merchantShare(
    body: ShoppingMerchantShareParams,
    options?: RequestOptions,
  ): APIPromise<ShoppingMerchantShareResponse> {
    return this._client.post('/v1/reports/shopping/merchant-share', { body, ...options });
  }

  /**
   * Shopping Merchant Visibility By Brand
   *
   * @example
   * ```ts
   * const response =
   *   await client.reports.shopping.merchantVisibilityByBrand({
   *     category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     end_date: '2019-12-27T18:11:19.117Z',
   *     start_date: '2019-12-27T18:11:19.117Z',
   *   });
   * ```
   */
  merchantVisibilityByBrand(
    body: ShoppingMerchantVisibilityByBrandParams,
    options?: RequestOptions,
  ): APIPromise<ShoppingMerchantVisibilityByBrandResponse> {
    return this._client.post('/v1/reports/shopping/merchant-visibility-by-brand', { body, ...options });
  }

  /**
   * Shopping Product Merchant Urls
   *
   * @example
   * ```ts
   * const response =
   *   await client.reports.shopping.productMerchantURLs({
   *     category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     end_date: '2019-12-27T18:11:19.117Z',
   *     product_names: ['string'],
   *     start_date: '2019-12-27T18:11:19.117Z',
   *   });
   * ```
   */
  productMerchantURLs(
    body: ShoppingProductMerchantURLsParams,
    options?: RequestOptions,
  ): APIPromise<ShoppingProductMerchantURLsResponse> {
    return this._client.post('/v1/reports/shopping/product-merchant-urls', { body, ...options });
  }

  /**
   * Shopping Trigger Rate
   *
   * @example
   * ```ts
   * const response = await client.reports.shopping.triggerRate({
   *   category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   end_date: '2019-12-27T18:11:19.117Z',
   *   start_date: '2019-12-27T18:11:19.117Z',
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
   * Shopping Visibility
   *
   * @example
   * ```ts
   * const response = await client.reports.shopping.visibility({
   *   category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   end_date: '2019-12-27T18:11:19.117Z',
   *   start_date: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  visibility(
    body: ShoppingVisibilityParams,
    options?: RequestOptions,
  ): APIPromise<ShoppingVisibilityResponse> {
    return this._client.post('/v1/reports/shopping/visibility', { body, ...options });
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

export interface ShoppingAllItemsWithMerchantsResponse {
  data: Array<{ [key: string]: unknown }>;

  /**
   * Base model for report information.
   */
  info: ReportsAPI.ReportInfo;
}

export interface ShoppingExecutionsResponse {
  data: Array<{ [key: string]: unknown }>;

  /**
   * Base model for report information.
   */
  info: ReportsAPI.ReportInfo;
}

export interface ShoppingItemVisibilityResponse {
  data: Array<{ [key: string]: unknown }>;

  /**
   * Base model for report information.
   */
  info: ReportsAPI.ReportInfo;
}

export interface ShoppingMerchantByItemsResponse {
  data: Array<{ [key: string]: unknown }>;

  /**
   * Base model for report information.
   */
  info: ReportsAPI.ReportInfo;
}

export interface ShoppingMerchantDistributionResponse {
  data: Array<{ [key: string]: unknown }>;

  /**
   * Base model for report information.
   */
  info: ReportsAPI.ReportInfo;
}

export interface ShoppingMerchantShareResponse {
  data: Array<{ [key: string]: unknown }>;

  /**
   * Base model for report information.
   */
  info: ReportsAPI.ReportInfo;
}

export interface ShoppingMerchantVisibilityByBrandResponse {
  data: Array<{ [key: string]: unknown }>;

  /**
   * Base model for report information.
   */
  info: ReportsAPI.ReportInfo;
}

export interface ShoppingProductMerchantURLsResponse {
  data: Array<{ [key: string]: unknown }>;

  /**
   * Base model for report information.
   */
  info: ReportsAPI.ReportInfo;
}

export interface ShoppingTriggerRateResponse {
  data: Array<{ [key: string]: unknown }>;

  /**
   * Base model for report information.
   */
  info: ReportsAPI.ReportInfo;
}

export interface ShoppingVisibilityResponse {
  data: Array<{ [key: string]: unknown }>;

  /**
   * Base model for report information.
   */
  info: ReportsAPI.ReportInfo;
}

export interface ShoppingAllItemsWithMerchantsParams {
  category_id: string;

  /**
   * End date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   */
  end_date: string;

  /**
   * Start date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   */
  start_date: string;

  comparison_end_date?: string | null;

  comparison_start_date?: string | null;

  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';

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

  exclude_topic_ids?: boolean;

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

  include_count?: boolean;

  include_items?: Array<string>;

  include_no_tag?: boolean;

  merchant_filter_type?: 'any' | 'all';

  metrics?: Array<
    | 'visibility_score'
    | 'share_of_voice'
    | 'average_position'
    | 'visibility_rank'
    | 'product_rating'
    | 'product_num_reviews'
    | 'total_count'
  >;

  order_by?: { [key: string]: 'asc' | 'desc' };

  owned_asset_names?: Array<string>;

  /**
   * Offset-based pagination parameters.
   */
  pagination?: Shared.Pagination | null;

  rank_by?: 'visibility' | 'average_position' | 'name';

  search_item?: string | null;

  sort_order?: 'asc' | 'desc';

  tag_filter_type?: 'any' | 'all';
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

export interface ShoppingExecutionsParams {
  category_id: string;

  /**
   * End date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   */
  end_date: string;

  /**
   * Start date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   */
  start_date: string;

  analysis_filter_type?: 'any' | 'all';

  analysis_types?: Array<'visibility' | 'sentiment' | 'sentiment_v2' | 'accuracy'>;

  comparison_end_date?: string | null;

  comparison_start_date?: string | null;

  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';

  exclude_topic_ids?: boolean;

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

  include_count?: boolean;

  include_no_tag?: boolean;

  order_by?: { [key: string]: 'asc' | 'desc' };

  owned_asset_names?: Array<string>;

  /**
   * Offset-based pagination parameters.
   */
  pagination?: Shared.Pagination | null;

  tag_filter_type?: 'any' | 'all';
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

export interface ShoppingItemVisibilityParams {
  category_id: string;

  /**
   * End date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   */
  end_date: string;

  /**
   * Start date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   */
  start_date: string;

  comparison_end_date?: string | null;

  comparison_start_date?: string | null;

  competitor_limit?: number;

  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';

  dimensions?: Array<
    | 'period'
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

  exclude_topic_ids?: boolean;

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

  include_competitors?: boolean;

  include_count?: boolean;

  include_items?: Array<string>;

  include_no_tag?: boolean;

  include_position_frequency?: boolean;

  merchant_filter_type?: 'any' | 'all';

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

  order_by?: { [key: string]: 'asc' | 'desc' };

  owned_asset_names?: Array<string>;

  /**
   * Offset-based pagination parameters.
   */
  pagination?: Shared.Pagination | null;

  search_item?: string | null;

  tag_filter_type?: 'any' | 'all';

  target_product?: string | null;
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

export interface ShoppingMerchantByItemsParams {
  category_id: string;

  /**
   * End date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   */
  end_date: string;

  /**
   * Start date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   */
  start_date: string;

  comparison_end_date?: string | null;

  comparison_start_date?: string | null;

  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';

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

  exclude_topic_ids?: boolean;

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

  include_count?: boolean;

  include_no_tag?: boolean;

  metrics?: Array<
    'merchant_visibility' | 'product_visibility' | 'product_rank' | 'avg_position' | 'total_count'
  >;

  order_by?: { [key: string]: 'asc' | 'desc' };

  /**
   * Offset-based pagination parameters.
   */
  pagination?: Shared.Pagination | null;

  product_name?: string | null;

  tag_filter_type?: 'any' | 'all';
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

export interface ShoppingMerchantDistributionParams {
  category_id: string;

  /**
   * End date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   */
  end_date: string;

  /**
   * Start date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   */
  start_date: string;

  comparison_end_date?: string | null;

  comparison_start_date?: string | null;

  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';

  dimensions?: Array<'period' | 'merchant_name' | 'date' | 'owned_asset_name'>;

  exclude_topic_ids?: boolean;

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

  include_count?: boolean;

  include_no_tag?: boolean;

  metrics?: Array<
    'offer_count' | 'product_count' | 'average_rank' | 'share_of_offers' | 'visibility_rank' | 'total_count'
  >;

  order_by?: { [key: string]: 'asc' | 'desc' };

  owned_asset_names?: Array<string>;

  /**
   * Offset-based pagination parameters.
   */
  pagination?: Shared.Pagination | null;

  search_merchant?: string | null;

  tag_filter_type?: 'any' | 'all';
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

export interface ShoppingMerchantShareParams {
  category_id: string;

  /**
   * End date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   */
  end_date: string;

  /**
   * Start date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   */
  start_date: string;

  comparison_end_date?: string | null;

  comparison_start_date?: string | null;

  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';

  dimensions?: Array<'period' | 'topic_id' | 'prompt_id'>;

  exclude_topic_ids?: boolean;

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

  include_count?: boolean;

  include_no_tag?: boolean;

  metrics?: Array<'merchant_share'>;

  order_by?: { [key: string]: 'asc' | 'desc' };

  owned_asset_names?: Array<string>;

  /**
   * Offset-based pagination parameters.
   */
  pagination?: Shared.Pagination | null;

  tag_filter_type?: 'any' | 'all';

  target_asset_names?: Array<string>;
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

export interface ShoppingMerchantVisibilityByBrandParams {
  category_id: string;

  /**
   * End date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   */
  end_date: string;

  /**
   * Start date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   */
  start_date: string;

  comparison_end_date?: string | null;

  comparison_start_date?: string | null;

  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';

  dimensions?: Array<'period' | 'merchant_name' | 'brand_name'>;

  exclude_topic_ids?: boolean;

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

  include_brand?: string | null;

  include_brand_only?: boolean;

  include_count?: boolean;

  include_no_tag?: boolean;

  metrics?: Array<
    'visibility_score' | 'share_of_voice' | 'average_position' | 'visibility_rank' | 'total_count'
  >;

  order_by?: { [key: string]: 'asc' | 'desc' };

  owned_asset_names?: Array<string>;

  /**
   * Offset-based pagination parameters.
   */
  pagination?: Shared.Pagination | null;

  search_brand?: string | null;

  tag_filter_type?: 'any' | 'all';
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

export interface ShoppingProductMerchantURLsParams {
  category_id: string;

  end_date: string;

  product_names: Array<string>;

  start_date: string;
}

export interface ShoppingTriggerRateParams {
  category_id: string;

  /**
   * End date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   */
  end_date: string;

  /**
   * Start date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   */
  start_date: string;

  comparison_end_date?: string | null;

  comparison_start_date?: string | null;

  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';

  dimensions?: Array<
    'period' | 'date' | 'model_id' | 'topic_id' | 'region_id' | 'persona_id' | 'prompt_id' | 'prompt'
  >;

  exclude_topic_ids?: boolean;

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

  include_count?: boolean;

  include_no_tag?: boolean;

  metrics?: Array<'total_runs' | 'shopping_triggered_runs' | 'trigger_rate_percentage'>;

  order_by?: { [key: string]: 'asc' | 'desc' };

  /**
   * Offset-based pagination parameters.
   */
  pagination?: Shared.Pagination | null;

  tag_filter_type?: 'any' | 'all';
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

export interface ShoppingVisibilityParams {
  category_id: string;

  /**
   * End date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   */
  end_date: string;

  /**
   * Start date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.
   */
  start_date: string;

  comparison_end_date?: string | null;

  comparison_start_date?: string | null;

  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';

  dimensions?: Array<
    'period' | 'asset_name' | 'date' | 'model_id' | 'topic_id' | 'region_id' | 'prompt_id' | 'prompt'
  >;

  exclude_topic_ids?: boolean;

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

  include_asset?: string | null;

  include_asset_only?: boolean;

  include_assets_only?: Array<string>;

  include_count?: boolean;

  include_no_tag?: boolean;

  include_position_frequency?: boolean;

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

  order_by?: { [key: string]: 'asc' | 'desc' };

  owned_asset_names?: Array<string>;

  /**
   * Offset-based pagination parameters.
   */
  pagination?: Shared.Pagination | null;

  rank_by?: 'visibility_score' | 'average_position';

  search_asset?: string | null;

  tag_filter_type?: 'any' | 'all';
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

export declare namespace Shopping {
  export {
    type BrandNameFilter as BrandNameFilter,
    type MerchantNameFilter as MerchantNameFilter,
    type ProductNameFilter as ProductNameFilter,
    type ShoppingAllItemsWithMerchantsResponse as ShoppingAllItemsWithMerchantsResponse,
    type ShoppingExecutionsResponse as ShoppingExecutionsResponse,
    type ShoppingItemVisibilityResponse as ShoppingItemVisibilityResponse,
    type ShoppingMerchantByItemsResponse as ShoppingMerchantByItemsResponse,
    type ShoppingMerchantDistributionResponse as ShoppingMerchantDistributionResponse,
    type ShoppingMerchantShareResponse as ShoppingMerchantShareResponse,
    type ShoppingMerchantVisibilityByBrandResponse as ShoppingMerchantVisibilityByBrandResponse,
    type ShoppingProductMerchantURLsResponse as ShoppingProductMerchantURLsResponse,
    type ShoppingTriggerRateResponse as ShoppingTriggerRateResponse,
    type ShoppingVisibilityResponse as ShoppingVisibilityResponse,
    type ShoppingAllItemsWithMerchantsParams as ShoppingAllItemsWithMerchantsParams,
    type ShoppingExecutionsParams as ShoppingExecutionsParams,
    type ShoppingItemVisibilityParams as ShoppingItemVisibilityParams,
    type ShoppingMerchantByItemsParams as ShoppingMerchantByItemsParams,
    type ShoppingMerchantDistributionParams as ShoppingMerchantDistributionParams,
    type ShoppingMerchantShareParams as ShoppingMerchantShareParams,
    type ShoppingMerchantVisibilityByBrandParams as ShoppingMerchantVisibilityByBrandParams,
    type ShoppingProductMerchantURLsParams as ShoppingProductMerchantURLsParams,
    type ShoppingTriggerRateParams as ShoppingTriggerRateParams,
    type ShoppingVisibilityParams as ShoppingVisibilityParams,
  };
}

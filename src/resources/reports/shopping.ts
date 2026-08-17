// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";

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
   *   category_id: "",
   *   start_date: "",
   *   end_date: "",
   *   date_interval: "day",
   *   include_count: false,
   *   tag_filter_type: "any",
   *   include_no_tag: false,
   *   exclude_topic_ids: false,
   *   include_asset_only: false,
   *   rank_by: "visibility_score",
   *   include_position_frequency: false,
   * });
   * ```
   */
  visibility(body: ShoppingVisibilityParams, options?: RequestOptions): APIPromise<ShoppingVisibilityResponse> {
    return this._client.post("/v1/reports/shopping/visibility", { body: body, ...options });
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
   *   category_id: "",
   *   start_date: "",
   *   end_date: "",
   *   date_interval: "day",
   *   include_count: false,
   *   tag_filter_type: "any",
   *   include_no_tag: false,
   *   exclude_topic_ids: false,
   *   merchant_filter_type: "any",
   *   include_competitors: false,
   *   competitor_limit: 5,
   *   include_position_frequency: false,
   * });
   * ```
   */
  itemVisibility(body: ShoppingItemVisibilityParams, options?: RequestOptions): APIPromise<ShoppingItemVisibilityResponse> {
    return this._client.post("/v1/reports/shopping/item-visibility", { body: body, ...options });
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
   *   category_id: "",
   *   start_date: "",
   *   end_date: "",
   *   date_interval: "day",
   *   include_count: false,
   *   tag_filter_type: "any",
   *   include_no_tag: false,
   *   exclude_topic_ids: false,
   * });
   * ```
   */
  merchantDistribution(body: ShoppingMerchantDistributionParams, options?: RequestOptions): APIPromise<ShoppingMerchantDistributionResponse> {
    return this._client.post("/v1/reports/shopping/merchant-distribution", { body: body, ...options });
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
   *   category_id: "",
   *   start_date: "",
   *   end_date: "",
   *   date_interval: "day",
   *   include_count: false,
   *   tag_filter_type: "any",
   *   include_no_tag: false,
   *   exclude_topic_ids: false,
   *   include_brand_only: false,
   * });
   * ```
   */
  merchantVisibilityByBrand(body: ShoppingMerchantVisibilityByBrandParams, options?: RequestOptions): APIPromise<ShoppingMerchantVisibilityByBrandResponse> {
    return this._client.post("/v1/reports/shopping/merchant-visibility-by-brand", { body: body, ...options });
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
   *   category_id: "",
   *   start_date: "",
   *   end_date: "",
   *   date_interval: "day",
   *   include_count: false,
   *   tag_filter_type: "any",
   *   include_no_tag: false,
   *   exclude_topic_ids: false,
   * });
   * ```
   */
  merchantByItems(body: ShoppingMerchantByItemsParams, options?: RequestOptions): APIPromise<ShoppingMerchantByItemsResponse> {
    return this._client.post("/v1/reports/shopping/merchant-by-items", { body: body, ...options });
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
   *   category_id: "",
   *   start_date: "",
   *   end_date: "",
   *   date_interval: "day",
   *   include_count: false,
   *   tag_filter_type: "any",
   *   include_no_tag: false,
   *   exclude_topic_ids: false,
   *   merchant_filter_type: "any",
   *   rank_by: "visibility",
   *   sort_order: "desc",
   * });
   * ```
   */
  allItemsWithMerchants(body: ShoppingAllItemsWithMerchantsParams, options?: RequestOptions): APIPromise<ShoppingAllItemsWithMerchantsResponse> {
    return this._client.post("/v1/reports/shopping/all-items-with-merchants", { body: body, ...options });
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
   *   category_id: "",
   *   start_date: "",
   *   end_date: "",
   *   date_interval: "day",
   *   include_count: false,
   *   tag_filter_type: "any",
   *   include_no_tag: false,
   *   exclude_topic_ids: false,
   * });
   * ```
   */
  triggerRate(body: ShoppingTriggerRateParams, options?: RequestOptions): APIPromise<ShoppingTriggerRateResponse> {
    return this._client.post("/v1/reports/shopping/trigger-rate", { body: body, ...options });
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
   *   category_id: "",
   *   start_date: "",
   *   end_date: "",
   *   date_interval: "day",
   *   include_count: false,
   *   tag_filter_type: "any",
   *   include_no_tag: false,
   *   exclude_topic_ids: false,
   * });
   * ```
   */
  merchantShare(body: ShoppingMerchantShareParams, options?: RequestOptions): APIPromise<ShoppingMerchantShareResponse> {
    return this._client.post("/v1/reports/shopping/merchant-share", { body: body, ...options });
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
   *   category_id: "",
   *   product_names: [],
   *   start_date: "",
   *   end_date: "",
   * });
   * ```
   */
  productMerchantURLs(body: ShoppingProductMerchantURLsParams, options?: RequestOptions): APIPromise<ShoppingProductMerchantURLsResponse> {
    return this._client.post("/v1/reports/shopping/product-merchant-urls", { body: body, ...options });
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
   *   category_id: "",
   *   start_date: "",
   *   end_date: "",
   *   date_interval: "day",
   *   include_count: false,
   *   tag_filter_type: "any",
   *   include_no_tag: false,
   *   exclude_topic_ids: false,
   *   analysis_filter_type: "any",
   * });
   * ```
   */
  executions(body: ShoppingExecutionsParams, options?: RequestOptions): APIPromise<ShoppingExecutionsResponse> {
    return this._client.post("/v1/reports/shopping/executions", { body: body, ...options });
  }
}

export interface ShoppingVisibilityQuery {
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
  date_interval?: "hour" | "day" | "week" | "month" | "quarter" | "year" | "relative_week";
  filters?: Array<RegionIDFilter | ModelIDFilter | TopicIDFilter | TagIDFilter | PromptIDFilter | PersonaIDFilter | BrandNameFilter | MerchantNameFilter | ProductNameFilter | { field: "asset_name"; operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive"; value: string | Array<string> }>;
  order_by?: Record<string, "asc" | "desc">;
  pagination?: Pagination | null;
  /**
   * @default false
   */
  include_count?: boolean;
  /**
   * @default any
   */
  tag_filter_type?: "any" | "all";
  /**
   * @default false
   */
  include_no_tag?: boolean;
  /**
   * @default false
   */
  exclude_topic_ids?: boolean;
  dimensions?: Array<"period" | "asset_name" | "date" | "model_id" | "topic_id" | "region_id" | "prompt_id" | "prompt">;
  metrics?: Array<"visibility_score" | "share_of_voice" | "average_position" | "visibility_rank" | "average_position_rank" | "position1_percentage" | "position2_percentage" | "position3_percentage" | "position_above3_percentage" | "total_count">;
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
  rank_by?: "visibility_score" | "average_position";
  /**
   * @default false
   */
  include_position_frequency?: boolean;
}

export interface ShoppingItemVisibilityQuery {
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
  date_interval?: "hour" | "day" | "week" | "month" | "quarter" | "year" | "relative_week";
  filters?: Array<RegionIDFilter | ModelIDFilter | TopicIDFilter | TagIDFilter | PromptIDFilter | PersonaIDFilter | BrandNameFilter | MerchantNameFilter | ProductNameFilter | { field: "asset_name"; operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive"; value: string | Array<string> }>;
  order_by?: Record<string, "asc" | "desc">;
  pagination?: Pagination | null;
  /**
   * @default false
   */
  include_count?: boolean;
  /**
   * @default any
   */
  tag_filter_type?: "any" | "all";
  /**
   * @default false
   */
  include_no_tag?: boolean;
  /**
   * @default false
   */
  exclude_topic_ids?: boolean;
  dimensions?: Array<"period" | "product_name" | "brand_name" | "date" | "topic_id" | "prompt_id" | "prompt" | "product_url" | "product_image_urls" | "product_price">;
  metrics?: Array<"visibility_score" | "share_of_voice" | "average_position" | "visibility_rank" | "position1_percentage" | "position2_percentage" | "position3_percentage" | "position_above3_percentage" | "product_rating" | "product_num_reviews" | "total_count">;
  owned_asset_names?: Array<string>;
  include_items?: Array<string>;
  search_item?: string | null;
  /**
   * @default any
   */
  merchant_filter_type?: "any" | "all";
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

export interface ShoppingMerchantDistributionQuery {
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
  date_interval?: "hour" | "day" | "week" | "month" | "quarter" | "year" | "relative_week";
  filters?: Array<RegionIDFilter | ModelIDFilter | TopicIDFilter | TagIDFilter | PromptIDFilter | PersonaIDFilter | BrandNameFilter | MerchantNameFilter | ProductNameFilter | { field: "asset_name"; operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive"; value: string | Array<string> }>;
  order_by?: Record<string, "asc" | "desc">;
  pagination?: Pagination | null;
  /**
   * @default false
   */
  include_count?: boolean;
  /**
   * @default any
   */
  tag_filter_type?: "any" | "all";
  /**
   * @default false
   */
  include_no_tag?: boolean;
  /**
   * @default false
   */
  exclude_topic_ids?: boolean;
  dimensions?: Array<"period" | "merchant_name" | "date" | "owned_asset_name">;
  metrics?: Array<"offer_count" | "product_count" | "average_rank" | "share_of_offers" | "visibility_rank" | "total_count">;
  owned_asset_names?: Array<string>;
  search_merchant?: string | null;
}

export interface ShoppingMerchantVisibilityByBrandQuery {
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
  date_interval?: "hour" | "day" | "week" | "month" | "quarter" | "year" | "relative_week";
  filters?: Array<RegionIDFilter | ModelIDFilter | TopicIDFilter | TagIDFilter | PromptIDFilter | PersonaIDFilter | BrandNameFilter | MerchantNameFilter | ProductNameFilter | { field: "asset_name"; operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive"; value: string | Array<string> }>;
  order_by?: Record<string, "asc" | "desc">;
  pagination?: Pagination | null;
  /**
   * @default false
   */
  include_count?: boolean;
  /**
   * @default any
   */
  tag_filter_type?: "any" | "all";
  /**
   * @default false
   */
  include_no_tag?: boolean;
  /**
   * @default false
   */
  exclude_topic_ids?: boolean;
  dimensions?: Array<"period" | "merchant_name" | "brand_name">;
  metrics?: Array<"visibility_score" | "share_of_voice" | "average_position" | "visibility_rank" | "total_count">;
  owned_asset_names?: Array<string>;
  search_brand?: string | null;
  include_brand?: string | null;
  /**
   * @default false
   */
  include_brand_only?: boolean;
}

export interface ShoppingMerchantByItemsQuery {
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
  date_interval?: "hour" | "day" | "week" | "month" | "quarter" | "year" | "relative_week";
  filters?: Array<RegionIDFilter | ModelIDFilter | TopicIDFilter | TagIDFilter | PromptIDFilter | PersonaIDFilter | BrandNameFilter | MerchantNameFilter | ProductNameFilter | { field: "asset_name"; operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive"; value: string | Array<string> }>;
  order_by?: Record<string, "asc" | "desc">;
  pagination?: Pagination | null;
  /**
   * @default false
   */
  include_count?: boolean;
  /**
   * @default any
   */
  tag_filter_type?: "any" | "all";
  /**
   * @default false
   */
  include_no_tag?: boolean;
  /**
   * @default false
   */
  exclude_topic_ids?: boolean;
  dimensions?: Array<"period" | "merchant_name" | "product_name" | "brand_name" | "product_image_urls" | "product_price" | "merchant_prices" | "has_instant_checkout" | "delivery_options" | "merchant_url">;
  metrics?: Array<"merchant_visibility" | "product_visibility" | "product_rank" | "avg_position" | "total_count">;
  product_name?: string | null;
}

export interface ShoppingAllItemsWithMerchantsQuery {
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
  date_interval?: "hour" | "day" | "week" | "month" | "quarter" | "year" | "relative_week";
  filters?: Array<RegionIDFilter | ModelIDFilter | TopicIDFilter | TagIDFilter | PromptIDFilter | PersonaIDFilter | BrandNameFilter | MerchantNameFilter | ProductNameFilter | { field: "asset_name"; operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive"; value: string | Array<string> }>;
  order_by?: Record<string, "asc" | "desc">;
  pagination?: Pagination | null;
  /**
   * @default false
   */
  include_count?: boolean;
  /**
   * @default any
   */
  tag_filter_type?: "any" | "all";
  /**
   * @default false
   */
  include_no_tag?: boolean;
  /**
   * @default false
   */
  exclude_topic_ids?: boolean;
  dimensions?: Array<"period" | "product_name" | "brand_name" | "product_url" | "product_image_urls" | "product_price" | "merchant_names" | "merchant_prices">;
  metrics?: Array<"visibility_score" | "share_of_voice" | "average_position" | "visibility_rank" | "product_rating" | "product_num_reviews" | "total_count">;
  owned_asset_names?: Array<string>;
  include_items?: Array<string>;
  search_item?: string | null;
  /**
   * @default any
   */
  merchant_filter_type?: "any" | "all";
  /**
   * @default visibility
   */
  rank_by?: "visibility" | "average_position" | "name";
  /**
   * @default desc
   */
  sort_order?: "asc" | "desc";
}

export interface ShoppingTriggerRateQuery {
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
  date_interval?: "hour" | "day" | "week" | "month" | "quarter" | "year" | "relative_week";
  filters?: Array<RegionIDFilter | ModelIDFilter | TopicIDFilter | TagIDFilter | PromptIDFilter | PersonaIDFilter | BrandNameFilter | MerchantNameFilter | ProductNameFilter | { field: "asset_name"; operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive"; value: string | Array<string> }>;
  order_by?: Record<string, "asc" | "desc">;
  pagination?: Pagination | null;
  /**
   * @default false
   */
  include_count?: boolean;
  /**
   * @default any
   */
  tag_filter_type?: "any" | "all";
  /**
   * @default false
   */
  include_no_tag?: boolean;
  /**
   * @default false
   */
  exclude_topic_ids?: boolean;
  dimensions?: Array<"period" | "date" | "model_id" | "topic_id" | "region_id" | "persona_id" | "prompt_id" | "prompt">;
  metrics?: Array<"total_runs" | "shopping_triggered_runs" | "trigger_rate_percentage">;
}

export interface ShoppingMerchantShareQuery {
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
  date_interval?: "hour" | "day" | "week" | "month" | "quarter" | "year" | "relative_week";
  filters?: Array<RegionIDFilter | ModelIDFilter | TopicIDFilter | TagIDFilter | PromptIDFilter | PersonaIDFilter | BrandNameFilter | MerchantNameFilter | ProductNameFilter | { field: "asset_name"; operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive"; value: string | Array<string> }>;
  order_by?: Record<string, "asc" | "desc">;
  pagination?: Pagination | null;
  /**
   * @default false
   */
  include_count?: boolean;
  /**
   * @default any
   */
  tag_filter_type?: "any" | "all";
  /**
   * @default false
   */
  include_no_tag?: boolean;
  /**
   * @default false
   */
  exclude_topic_ids?: boolean;
  dimensions?: Array<"period" | "topic_id" | "prompt_id">;
  metrics?: Array<"merchant_share">;
  target_asset_names?: Array<string>;
  owned_asset_names?: Array<string>;
}

export interface ShoppingProductMerchantURLsQuery {
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

export interface ShoppingExecutionsQuery {
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
  date_interval?: "hour" | "day" | "week" | "month" | "quarter" | "year" | "relative_week";
  filters?: Array<RegionIDFilter | ModelIDFilter | TopicIDFilter | TagIDFilter | PromptIDFilter | PersonaIDFilter | BrandNameFilter | MerchantNameFilter | ProductNameFilter | { field: "asset_name"; operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive"; value: string | Array<string> }>;
  order_by?: Record<string, "asc" | "desc">;
  pagination?: Pagination | null;
  /**
   * @default false
   */
  include_count?: boolean;
  /**
   * @default any
   */
  tag_filter_type?: "any" | "all";
  /**
   * @default false
   */
  include_no_tag?: boolean;
  /**
   * @default false
   */
  exclude_topic_ids?: boolean;
  analysis_types?: Array<"visibility" | "sentiment" | "sentiment_v2" | "accuracy">;
  /**
   * @default any
   */
  analysis_filter_type?: "any" | "all";
  owned_asset_names?: Array<string>;
}

export interface BrandNameFilter {
  field: "brand_name";
  operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
  value: string | Array<string>;
}

export interface MerchantNameFilter {
  field: "merchant_name";
  operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
  value: string | Array<string>;
}

export interface ProductNameFilter {
  field: "product_name";
  operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
  value: string | Array<string>;
}

/**
 * Base model for report information.
 */
export interface ReportInfo {
  total_rows: number;
  query?: Record<string, unknown> | null;
}

/**
 * Filter by region UUID.
 */
export interface RegionIDFilter {
  field: "region_id" | "region";
  operator: "is" | "not_is" | "in" | "not_in";
  value: string | Array<string>;
}

/**
 * Filter by AI model/platform UUID.
 */
export interface ModelIDFilter {
  field: "model_id" | "model";
  operator: "is" | "not_is" | "in" | "not_in";
  value: string | Array<string>;
}

/**
 * Filter by topic UUID.
 */
export interface TopicIDFilter {
  field: "topic_id" | "topic";
  operator: "is" | "not_is" | "in" | "not_in";
  value: string | Array<string>;
}

/**
 * Filter by tag (prompt group) UUID.
 */
export interface TagIDFilter {
  field: "tag_id" | "tag";
  operator: "is" | "not_is" | "in" | "not_in";
  value: string | Array<string>;
}

/**
 * Filter by prompt UUID.
 */
export interface PromptIDFilter {
  field: "prompt_id";
  operator: "is" | "not_is" | "in" | "not_in";
  value: string | Array<string>;
}

/**
 * Filter by persona UUID.
 */
export interface PersonaIDFilter {
  field: "persona_id";
  operator: "is" | "not_is" | "in" | "not_in";
  value: string | Array<string>;
}

/**
 * Offset-based pagination parameters.
 */
export interface Pagination {
  /**
   * Maximum number of results to return. Default is 10,000, maximum is 50,000.
   * @default 10000
   * @maximum 50000
   */
  limit?: number;
  /**
   * Offset for the results. Used for pagination.
   * @default 0
   * @minimum 0
   */
  offset?: number;
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
  date_interval?: "hour" | "day" | "week" | "month" | "quarter" | "year" | "relative_week";
  filters?: Array<RegionIDFilter | ModelIDFilter | TopicIDFilter | TagIDFilter | PromptIDFilter | PersonaIDFilter | BrandNameFilter | MerchantNameFilter | ProductNameFilter | ShoppingVisibilityParams.AssetNameFilter>;
  order_by?: Record<string, "asc" | "desc">;
  pagination?: Pagination | null;
  /**
   * @default false
   */
  include_count?: boolean;
  /**
   * @default any
   */
  tag_filter_type?: "any" | "all";
  /**
   * @default false
   */
  include_no_tag?: boolean;
  /**
   * @default false
   */
  exclude_topic_ids?: boolean;
  dimensions?: Array<"period" | "asset_name" | "date" | "model_id" | "topic_id" | "region_id" | "prompt_id" | "prompt">;
  metrics?: Array<"visibility_score" | "share_of_voice" | "average_position" | "visibility_rank" | "average_position_rank" | "position1_percentage" | "position2_percentage" | "position3_percentage" | "position_above3_percentage" | "total_count">;
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
  rank_by?: "visibility_score" | "average_position";
  /**
   * @default false
   */
  include_position_frequency?: boolean;
}

export namespace ShoppingVisibilityParams {
  export interface AssetNameFilter {
    field: "asset_name";
    operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
    value: string | Array<string>;
  }
}

export interface ShoppingVisibilityResponse {
  /**
   * Base model for report information.
   */
  info: ReportInfo;
  data: Array<ShoppingVisibilityResponse.Data>;
}

export namespace ShoppingVisibilityResponse {
  export interface Data {
  }
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
  date_interval?: "hour" | "day" | "week" | "month" | "quarter" | "year" | "relative_week";
  filters?: Array<RegionIDFilter | ModelIDFilter | TopicIDFilter | TagIDFilter | PromptIDFilter | PersonaIDFilter | BrandNameFilter | MerchantNameFilter | ProductNameFilter | ShoppingItemVisibilityParams.AssetNameFilter>;
  order_by?: Record<string, "asc" | "desc">;
  pagination?: Pagination | null;
  /**
   * @default false
   */
  include_count?: boolean;
  /**
   * @default any
   */
  tag_filter_type?: "any" | "all";
  /**
   * @default false
   */
  include_no_tag?: boolean;
  /**
   * @default false
   */
  exclude_topic_ids?: boolean;
  dimensions?: Array<"period" | "product_name" | "brand_name" | "date" | "topic_id" | "prompt_id" | "prompt" | "product_url" | "product_image_urls" | "product_price">;
  metrics?: Array<"visibility_score" | "share_of_voice" | "average_position" | "visibility_rank" | "position1_percentage" | "position2_percentage" | "position3_percentage" | "position_above3_percentage" | "product_rating" | "product_num_reviews" | "total_count">;
  owned_asset_names?: Array<string>;
  include_items?: Array<string>;
  search_item?: string | null;
  /**
   * @default any
   */
  merchant_filter_type?: "any" | "all";
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
  export interface AssetNameFilter {
    field: "asset_name";
    operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
    value: string | Array<string>;
  }
}

export interface ShoppingItemVisibilityResponse {
  /**
   * Base model for report information.
   */
  info: ReportInfo;
  data: Array<ShoppingItemVisibilityResponse.Data>;
}

export namespace ShoppingItemVisibilityResponse {
  export interface Data {
  }
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
  date_interval?: "hour" | "day" | "week" | "month" | "quarter" | "year" | "relative_week";
  filters?: Array<RegionIDFilter | ModelIDFilter | TopicIDFilter | TagIDFilter | PromptIDFilter | PersonaIDFilter | BrandNameFilter | MerchantNameFilter | ProductNameFilter | ShoppingMerchantDistributionParams.AssetNameFilter>;
  order_by?: Record<string, "asc" | "desc">;
  pagination?: Pagination | null;
  /**
   * @default false
   */
  include_count?: boolean;
  /**
   * @default any
   */
  tag_filter_type?: "any" | "all";
  /**
   * @default false
   */
  include_no_tag?: boolean;
  /**
   * @default false
   */
  exclude_topic_ids?: boolean;
  dimensions?: Array<"period" | "merchant_name" | "date" | "owned_asset_name">;
  metrics?: Array<"offer_count" | "product_count" | "average_rank" | "share_of_offers" | "visibility_rank" | "total_count">;
  owned_asset_names?: Array<string>;
  search_merchant?: string | null;
}

export namespace ShoppingMerchantDistributionParams {
  export interface AssetNameFilter {
    field: "asset_name";
    operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
    value: string | Array<string>;
  }
}

export interface ShoppingMerchantDistributionResponse {
  /**
   * Base model for report information.
   */
  info: ReportInfo;
  data: Array<ShoppingMerchantDistributionResponse.Data>;
}

export namespace ShoppingMerchantDistributionResponse {
  export interface Data {
  }
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
  date_interval?: "hour" | "day" | "week" | "month" | "quarter" | "year" | "relative_week";
  filters?: Array<RegionIDFilter | ModelIDFilter | TopicIDFilter | TagIDFilter | PromptIDFilter | PersonaIDFilter | BrandNameFilter | MerchantNameFilter | ProductNameFilter | ShoppingMerchantVisibilityByBrandParams.AssetNameFilter>;
  order_by?: Record<string, "asc" | "desc">;
  pagination?: Pagination | null;
  /**
   * @default false
   */
  include_count?: boolean;
  /**
   * @default any
   */
  tag_filter_type?: "any" | "all";
  /**
   * @default false
   */
  include_no_tag?: boolean;
  /**
   * @default false
   */
  exclude_topic_ids?: boolean;
  dimensions?: Array<"period" | "merchant_name" | "brand_name">;
  metrics?: Array<"visibility_score" | "share_of_voice" | "average_position" | "visibility_rank" | "total_count">;
  owned_asset_names?: Array<string>;
  search_brand?: string | null;
  include_brand?: string | null;
  /**
   * @default false
   */
  include_brand_only?: boolean;
}

export namespace ShoppingMerchantVisibilityByBrandParams {
  export interface AssetNameFilter {
    field: "asset_name";
    operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
    value: string | Array<string>;
  }
}

export interface ShoppingMerchantVisibilityByBrandResponse {
  /**
   * Base model for report information.
   */
  info: ReportInfo;
  data: Array<ShoppingMerchantVisibilityByBrandResponse.Data>;
}

export namespace ShoppingMerchantVisibilityByBrandResponse {
  export interface Data {
  }
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
  date_interval?: "hour" | "day" | "week" | "month" | "quarter" | "year" | "relative_week";
  filters?: Array<RegionIDFilter | ModelIDFilter | TopicIDFilter | TagIDFilter | PromptIDFilter | PersonaIDFilter | BrandNameFilter | MerchantNameFilter | ProductNameFilter | ShoppingMerchantByItemsParams.AssetNameFilter>;
  order_by?: Record<string, "asc" | "desc">;
  pagination?: Pagination | null;
  /**
   * @default false
   */
  include_count?: boolean;
  /**
   * @default any
   */
  tag_filter_type?: "any" | "all";
  /**
   * @default false
   */
  include_no_tag?: boolean;
  /**
   * @default false
   */
  exclude_topic_ids?: boolean;
  dimensions?: Array<"period" | "merchant_name" | "product_name" | "brand_name" | "product_image_urls" | "product_price" | "merchant_prices" | "has_instant_checkout" | "delivery_options" | "merchant_url">;
  metrics?: Array<"merchant_visibility" | "product_visibility" | "product_rank" | "avg_position" | "total_count">;
  product_name?: string | null;
}

export namespace ShoppingMerchantByItemsParams {
  export interface AssetNameFilter {
    field: "asset_name";
    operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
    value: string | Array<string>;
  }
}

export interface ShoppingMerchantByItemsResponse {
  /**
   * Base model for report information.
   */
  info: ReportInfo;
  data: Array<ShoppingMerchantByItemsResponse.Data>;
}

export namespace ShoppingMerchantByItemsResponse {
  export interface Data {
  }
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
  date_interval?: "hour" | "day" | "week" | "month" | "quarter" | "year" | "relative_week";
  filters?: Array<RegionIDFilter | ModelIDFilter | TopicIDFilter | TagIDFilter | PromptIDFilter | PersonaIDFilter | BrandNameFilter | MerchantNameFilter | ProductNameFilter | ShoppingAllItemsWithMerchantsParams.AssetNameFilter>;
  order_by?: Record<string, "asc" | "desc">;
  pagination?: Pagination | null;
  /**
   * @default false
   */
  include_count?: boolean;
  /**
   * @default any
   */
  tag_filter_type?: "any" | "all";
  /**
   * @default false
   */
  include_no_tag?: boolean;
  /**
   * @default false
   */
  exclude_topic_ids?: boolean;
  dimensions?: Array<"period" | "product_name" | "brand_name" | "product_url" | "product_image_urls" | "product_price" | "merchant_names" | "merchant_prices">;
  metrics?: Array<"visibility_score" | "share_of_voice" | "average_position" | "visibility_rank" | "product_rating" | "product_num_reviews" | "total_count">;
  owned_asset_names?: Array<string>;
  include_items?: Array<string>;
  search_item?: string | null;
  /**
   * @default any
   */
  merchant_filter_type?: "any" | "all";
  /**
   * @default visibility
   */
  rank_by?: "visibility" | "average_position" | "name";
  /**
   * @default desc
   */
  sort_order?: "asc" | "desc";
}

export namespace ShoppingAllItemsWithMerchantsParams {
  export interface AssetNameFilter {
    field: "asset_name";
    operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
    value: string | Array<string>;
  }
}

export interface ShoppingAllItemsWithMerchantsResponse {
  /**
   * Base model for report information.
   */
  info: ReportInfo;
  data: Array<ShoppingAllItemsWithMerchantsResponse.Data>;
}

export namespace ShoppingAllItemsWithMerchantsResponse {
  export interface Data {
  }
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
  date_interval?: "hour" | "day" | "week" | "month" | "quarter" | "year" | "relative_week";
  filters?: Array<RegionIDFilter | ModelIDFilter | TopicIDFilter | TagIDFilter | PromptIDFilter | PersonaIDFilter | BrandNameFilter | MerchantNameFilter | ProductNameFilter | ShoppingTriggerRateParams.AssetNameFilter>;
  order_by?: Record<string, "asc" | "desc">;
  pagination?: Pagination | null;
  /**
   * @default false
   */
  include_count?: boolean;
  /**
   * @default any
   */
  tag_filter_type?: "any" | "all";
  /**
   * @default false
   */
  include_no_tag?: boolean;
  /**
   * @default false
   */
  exclude_topic_ids?: boolean;
  dimensions?: Array<"period" | "date" | "model_id" | "topic_id" | "region_id" | "persona_id" | "prompt_id" | "prompt">;
  metrics?: Array<"total_runs" | "shopping_triggered_runs" | "trigger_rate_percentage">;
}

export namespace ShoppingTriggerRateParams {
  export interface AssetNameFilter {
    field: "asset_name";
    operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
    value: string | Array<string>;
  }
}

export interface ShoppingTriggerRateResponse {
  /**
   * Base model for report information.
   */
  info: ReportInfo;
  data: Array<ShoppingTriggerRateResponse.Data>;
}

export namespace ShoppingTriggerRateResponse {
  export interface Data {
  }
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
  date_interval?: "hour" | "day" | "week" | "month" | "quarter" | "year" | "relative_week";
  filters?: Array<RegionIDFilter | ModelIDFilter | TopicIDFilter | TagIDFilter | PromptIDFilter | PersonaIDFilter | BrandNameFilter | MerchantNameFilter | ProductNameFilter | ShoppingMerchantShareParams.AssetNameFilter>;
  order_by?: Record<string, "asc" | "desc">;
  pagination?: Pagination | null;
  /**
   * @default false
   */
  include_count?: boolean;
  /**
   * @default any
   */
  tag_filter_type?: "any" | "all";
  /**
   * @default false
   */
  include_no_tag?: boolean;
  /**
   * @default false
   */
  exclude_topic_ids?: boolean;
  dimensions?: Array<"period" | "topic_id" | "prompt_id">;
  metrics?: Array<"merchant_share">;
  target_asset_names?: Array<string>;
  owned_asset_names?: Array<string>;
}

export namespace ShoppingMerchantShareParams {
  export interface AssetNameFilter {
    field: "asset_name";
    operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
    value: string | Array<string>;
  }
}

export interface ShoppingMerchantShareResponse {
  /**
   * Base model for report information.
   */
  info: ReportInfo;
  data: Array<ShoppingMerchantShareResponse.Data>;
}

export namespace ShoppingMerchantShareResponse {
  export interface Data {
  }
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
  info: ReportInfo;
  data: Array<ShoppingProductMerchantURLsResponse.Data>;
}

export namespace ShoppingProductMerchantURLsResponse {
  export interface Data {
  }
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
  date_interval?: "hour" | "day" | "week" | "month" | "quarter" | "year" | "relative_week";
  filters?: Array<RegionIDFilter | ModelIDFilter | TopicIDFilter | TagIDFilter | PromptIDFilter | PersonaIDFilter | BrandNameFilter | MerchantNameFilter | ProductNameFilter | ShoppingExecutionsParams.AssetNameFilter>;
  order_by?: Record<string, "asc" | "desc">;
  pagination?: Pagination | null;
  /**
   * @default false
   */
  include_count?: boolean;
  /**
   * @default any
   */
  tag_filter_type?: "any" | "all";
  /**
   * @default false
   */
  include_no_tag?: boolean;
  /**
   * @default false
   */
  exclude_topic_ids?: boolean;
  analysis_types?: Array<"visibility" | "sentiment" | "sentiment_v2" | "accuracy">;
  /**
   * @default any
   */
  analysis_filter_type?: "any" | "all";
  owned_asset_names?: Array<string>;
}

export namespace ShoppingExecutionsParams {
  export interface AssetNameFilter {
    field: "asset_name";
    operator: "is" | "not_is" | "in" | "not_in" | "contains" | "not_contains" | "matches" | "contains_case_insensitive" | "not_contains_case_insensitive";
    value: string | Array<string>;
  }
}

export interface ShoppingExecutionsResponse {
  /**
   * Base model for report information.
   */
  info: ReportInfo;
  data: Array<ShoppingExecutionsResponse.Data>;
}

export namespace ShoppingExecutionsResponse {
  export interface Data {
  }
}
export declare namespace Shopping {
  export {
    type ShoppingVisibilityQuery as ShoppingVisibilityQuery,
    type ShoppingItemVisibilityQuery as ShoppingItemVisibilityQuery,
    type ShoppingMerchantDistributionQuery as ShoppingMerchantDistributionQuery,
    type ShoppingMerchantVisibilityByBrandQuery as ShoppingMerchantVisibilityByBrandQuery,
    type ShoppingMerchantByItemsQuery as ShoppingMerchantByItemsQuery,
    type ShoppingAllItemsWithMerchantsQuery as ShoppingAllItemsWithMerchantsQuery,
    type ShoppingTriggerRateQuery as ShoppingTriggerRateQuery,
    type ShoppingMerchantShareQuery as ShoppingMerchantShareQuery,
    type ShoppingProductMerchantURLsQuery as ShoppingProductMerchantURLsQuery,
    type ShoppingExecutionsQuery as ShoppingExecutionsQuery,
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
export { Shopping as ShoppingResource };

// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { Stream } from '../../core/streaming';
import type { RequestOptions } from '../../internal/request-options';
import { buildHeaders } from '../../internal/headers';
import type * as Shared from '../shared';

export class Shopping extends APIResource {
  /**
   * Shopping Visibility
   *
   * @param {ShoppingVisibilityV1VisibilityPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Shared.ShoppingRowsResponse>} Successful Response
   *
   * @example
   * ```ts
   * const rows = await client.reports.shopping.visibilityV1VisibilityPost({
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
  visibilityV1VisibilityPost(
    body: ShoppingVisibilityV1VisibilityPostParams,
    options?: RequestOptions,
  ): APIPromise<Shared.ShoppingRowsResponse> {
    return this._client.post('/v1/reports/shopping/visibility', { body, ...options });
  }

  /**
   * Shopping Item Visibility
   *
   * @param {ShoppingItemVisibilityV1ItemVisibilityPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Shared.ShoppingRowsResponse>} Successful Response
   *
   * @example
   * ```ts
   * const rows = await client.reports.shopping.itemVisibilityV1ItemVisibilityPost({
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
  itemVisibilityV1ItemVisibilityPost(
    body: ShoppingItemVisibilityV1ItemVisibilityPostParams,
    options?: RequestOptions,
  ): APIPromise<Shared.ShoppingRowsResponse> {
    return this._client.post('/v1/reports/shopping/item-visibility', { body, ...options });
  }

  /**
   * Shopping Merchant Distribution
   *
   * @param {ShoppingMerchantDistributionV1MerchantDistributionPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Shared.ShoppingRowsResponse>} Successful Response
   *
   * @example
   * ```ts
   * const rows = await client.reports.shopping.merchantDistributionV1MerchantDistributionPost({
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
  merchantDistributionV1MerchantDistributionPost(
    body: ShoppingMerchantDistributionV1MerchantDistributionPostParams,
    options?: RequestOptions,
  ): APIPromise<Shared.ShoppingRowsResponse> {
    return this._client.post('/v1/reports/shopping/merchant-distribution', { body, ...options });
  }

  /**
   * Shopping Merchant Visibility By Brand
   *
   * @param {ShoppingMerchantVisibilityByBrandV1MerchantVisibilityByBrandPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Shared.ShoppingRowsResponse>} Successful Response
   *
   * @example
   * ```ts
   * const rows = await client.reports.shopping.merchantVisibilityByBrandV1MerchantVisibilityByBrandPost({
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
  merchantVisibilityByBrandV1MerchantVisibilityByBrandPost(
    body: ShoppingMerchantVisibilityByBrandV1MerchantVisibilityByBrandPostParams,
    options?: RequestOptions,
  ): APIPromise<Shared.ShoppingRowsResponse> {
    return this._client.post('/v1/reports/shopping/merchant-visibility-by-brand', { body, ...options });
  }

  /**
   * Shopping Merchant By Items
   *
   * @param {ShoppingMerchantByItemsV1MerchantByItemsPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Shared.ShoppingRowsResponse>} Successful Response
   *
   * @example
   * ```ts
   * const rows = await client.reports.shopping.merchantByItemsV1MerchantByItemsPost({
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
  merchantByItemsV1MerchantByItemsPost(
    body: ShoppingMerchantByItemsV1MerchantByItemsPostParams,
    options?: RequestOptions,
  ): APIPromise<Shared.ShoppingRowsResponse> {
    return this._client.post('/v1/reports/shopping/merchant-by-items', { body, ...options });
  }

  /**
   * Shopping All Items With Merchants
   *
   * @param {ShoppingAllItemsWithMerchantsV1AllItemsWithMerchantsPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Shared.ShoppingRowsResponse>} Successful Response
   *
   * @example
   * ```ts
   * const rows = await client.reports.shopping.allItemsWithMerchantsV1AllItemsWithMerchantsPost({
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
  allItemsWithMerchantsV1AllItemsWithMerchantsPost(
    body: ShoppingAllItemsWithMerchantsV1AllItemsWithMerchantsPostParams,
    options?: RequestOptions,
  ): APIPromise<Shared.ShoppingRowsResponse> {
    return this._client.post('/v1/reports/shopping/all-items-with-merchants', { body, ...options });
  }

  /**
   * Shopping Trigger Rate
   *
   * @param {ShoppingTriggerRateV1TriggerRatePostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Shared.ShoppingRowsResponse>} Successful Response
   *
   * @example
   * ```ts
   * const rows = await client.reports.shopping.triggerRateV1TriggerRatePost({
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
  triggerRateV1TriggerRatePost(
    body: ShoppingTriggerRateV1TriggerRatePostParams,
    options?: RequestOptions,
  ): APIPromise<Shared.ShoppingRowsResponse> {
    return this._client.post('/v1/reports/shopping/trigger-rate', { body, ...options });
  }

  /**
   * Shopping Triggered Prompts
   *
   * @param {ShoppingTriggeredPromptsV1TriggeredPromptsPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Shared.ShoppingRowsResponse>} Successful Response
   *
   * @example
   * ```ts
   * const rows = await client.reports.shopping.triggeredPromptsV1TriggeredPromptsPost({
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
  triggeredPromptsV1TriggeredPromptsPost(
    body: ShoppingTriggeredPromptsV1TriggeredPromptsPostParams,
    options?: RequestOptions,
  ): APIPromise<Shared.ShoppingRowsResponse> {
    return this._client.post('/v1/reports/shopping/triggered-prompts', { body, ...options });
  }

  /**
   * Shopping Triggered Topics
   *
   * @param {ShoppingTriggeredTopicsV1TriggeredTopicsPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Shared.ShoppingRowsResponse>} Successful Response
   *
   * @example
   * ```ts
   * const rows = await client.reports.shopping.triggeredTopicsV1TriggeredTopicsPost({
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
  triggeredTopicsV1TriggeredTopicsPost(
    body: ShoppingTriggeredTopicsV1TriggeredTopicsPostParams,
    options?: RequestOptions,
  ): APIPromise<Shared.ShoppingRowsResponse> {
    return this._client.post('/v1/reports/shopping/triggered-topics', { body, ...options });
  }

  /**
   * Shopping Merchant Share
   *
   * @param {ShoppingMerchantShareV1MerchantSharePostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Shared.ShoppingRowsResponse>} Successful Response
   *
   * @example
   * ```ts
   * const rows = await client.reports.shopping.merchantShareV1MerchantSharePost({
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
  merchantShareV1MerchantSharePost(
    body: ShoppingMerchantShareV1MerchantSharePostParams,
    options?: RequestOptions,
  ): APIPromise<Shared.ShoppingRowsResponse> {
    return this._client.post('/v1/reports/shopping/merchant-share', { body, ...options });
  }

  /**
   * Shopping Product Merchant Urls
   *
   * @param {ShoppingProductMerchantURLsV1ProductMerchantURLsPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Shared.ShoppingRowsResponse>} Successful Response
   *
   * @example
   * ```ts
   * const rows = await client.reports.shopping.productMerchantURLsV1ProductMerchantURLsPost({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   product_names: [],
   *   start_date: '2024-01-01T00:00:00.000Z',
   *   end_date: '2024-01-01T00:00:00.000Z',
   * });
   * ```
   */
  productMerchantURLsV1ProductMerchantURLsPost(
    body: ShoppingProductMerchantURLsV1ProductMerchantURLsPostParams,
    options?: RequestOptions,
  ): APIPromise<Shared.ShoppingRowsResponse> {
    return this._client.post('/v1/reports/shopping/product-merchant-urls', { body, ...options });
  }

  /**
   * Shopping Executions
   *
   * @param {ShoppingExecutionsV1ExecutionsPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Shared.ShoppingRowsResponse>} Successful Response
   *
   * @example
   * ```ts
   * const rows = await client.reports.shopping.executionsV1ExecutionsPost({
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
  executionsV1ExecutionsPost(
    body: ShoppingExecutionsV1ExecutionsPostParams,
    options?: RequestOptions,
  ): APIPromise<Shared.ShoppingRowsResponse> {
    return this._client.post('/v1/reports/shopping/executions', { body, ...options });
  }

  /**
   * Query Shopping Brands V2
   *
   * @param {ShoppingQueryBrandsV2V2BrandsPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ShoppingQueryBrandsV2V2BrandsPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const queryBrandsV2V2BrandsPost = await client.reports.shopping.queryBrandsV2V2BrandsPost({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '',
   *   end_date: '',
   *   interval: 'day',
   *   scope: 'owned',
   * });
   * ```
   */
  queryBrandsV2V2BrandsPost(
    body: ShoppingQueryBrandsV2V2BrandsPostParams,
    options?: RequestOptions,
  ): APIPromise<ShoppingQueryBrandsV2V2BrandsPostResponse> {
    return this._client.post('/v2/reports/shopping/brands', { body, ...options });
  }

  /**
   * Stream Shopping Brands V2
   *
   * @param {ShoppingStreamBrandsV2V2BrandsStreamPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Stream<ShoppingStreamBrandsV2V2BrandsStreamPostResponse>>} Server-sent events stream. Emits one `summary` event (the report `info` block) first, then one `result` event per row.
   *
   * @example
   * ```ts
   * const stream = await client.reports.shopping.streamBrandsV2V2BrandsStreamPost({
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
  streamBrandsV2V2BrandsStreamPost(
    body: ShoppingStreamBrandsV2V2BrandsStreamPostParams,
    options?: RequestOptions,
  ): APIPromise<Stream<ShoppingStreamBrandsV2V2BrandsStreamPostResponse>> {
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
   * @param {ShoppingQueryProductsV2V2ProductsPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ShoppingQueryProductsV2V2ProductsPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const queryProductsV2V2ProductsPost = await client.reports.shopping.queryProductsV2V2ProductsPost({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '',
   *   end_date: '',
   *   interval: 'day',
   *   include_merchants: false,
   *   competitor_limit: 5,
   * });
   * ```
   */
  queryProductsV2V2ProductsPost(
    body: ShoppingQueryProductsV2V2ProductsPostParams,
    options?: RequestOptions,
  ): APIPromise<ShoppingQueryProductsV2V2ProductsPostResponse> {
    return this._client.post('/v2/reports/shopping/products', { body, ...options });
  }

  /**
   * Stream Shopping Products V2
   *
   * @param {ShoppingStreamProductsV2V2ProductsStreamPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Stream<ShoppingStreamProductsV2V2ProductsStreamPostResponse>>} Server-sent events stream. Emits one `summary` event (the report `info` block) first, then one `result` event per row.
   *
   * @example
   * ```ts
   * const stream = await client.reports.shopping.streamProductsV2V2ProductsStreamPost({
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
  streamProductsV2V2ProductsStreamPost(
    body: ShoppingStreamProductsV2V2ProductsStreamPostParams,
    options?: RequestOptions,
  ): APIPromise<Stream<ShoppingStreamProductsV2V2ProductsStreamPostResponse>> {
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
   * @param {ShoppingQueryMerchantsV2V2MerchantsPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ShoppingQueryMerchantsV2V2MerchantsPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const queryMerchantsV2V2MerchantsPost = await client.reports.shopping.queryMerchantsV2V2MerchantsPost({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '',
   *   end_date: '',
   *   interval: 'day',
   * });
   * ```
   */
  queryMerchantsV2V2MerchantsPost(
    body: ShoppingQueryMerchantsV2V2MerchantsPostParams,
    options?: RequestOptions,
  ): APIPromise<ShoppingQueryMerchantsV2V2MerchantsPostResponse> {
    return this._client.post('/v2/reports/shopping/merchants', { body, ...options });
  }

  /**
   * Stream Shopping Merchants V2
   *
   * @param {ShoppingStreamMerchantsV2V2MerchantsStreamPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Stream<ShoppingStreamMerchantsV2V2MerchantsStreamPostResponse>>} Server-sent events stream. Emits one `summary` event (the report `info` block) first, then one `result` event per row.
   *
   * @example
   * ```ts
   * const stream = await client.reports.shopping.streamMerchantsV2V2MerchantsStreamPost({
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
  streamMerchantsV2V2MerchantsStreamPost(
    body: ShoppingStreamMerchantsV2V2MerchantsStreamPostParams,
    options?: RequestOptions,
  ): APIPromise<Stream<ShoppingStreamMerchantsV2V2MerchantsStreamPostResponse>> {
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
   * @param {ShoppingQueryTriggerRateV2V2TriggerRatePostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ShoppingQueryTriggerRateV2V2TriggerRatePostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const queryTriggerRateV2V2TriggerRatePost = await client.reports.shopping.queryTriggerRateV2V2TriggerRatePost(
   *   {
   *     category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *     start_date: '',
   *     end_date: '',
   *     interval: 'day',
   *   },
   * );
   * ```
   */
  queryTriggerRateV2V2TriggerRatePost(
    body: ShoppingQueryTriggerRateV2V2TriggerRatePostParams,
    options?: RequestOptions,
  ): APIPromise<ShoppingQueryTriggerRateV2V2TriggerRatePostResponse> {
    return this._client.post('/v2/reports/shopping/trigger-rate', { body, ...options });
  }

  /**
   * Stream Shopping Trigger Rate V2
   *
   * @param {ShoppingStreamTriggerRateV2V2TriggerRateStreamPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Stream<ShoppingStreamTriggerRateV2V2TriggerRateStreamPostResponse>>} Server-sent events stream. Emits one `summary` event (the report `info` block) first, then one `result` event per row.
   *
   * @example
   * ```ts
   * const stream = await client.reports.shopping.streamTriggerRateV2V2TriggerRateStreamPost({
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
  streamTriggerRateV2V2TriggerRateStreamPost(
    body: ShoppingStreamTriggerRateV2V2TriggerRateStreamPostParams,
    options?: RequestOptions,
  ): APIPromise<Stream<ShoppingStreamTriggerRateV2V2TriggerRateStreamPostResponse>> {
    return this._client.post('/v2/reports/shopping/trigger-rate/stream', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    });
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
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';
  filters?: Array<
    | Shared.RegionIDFilter
    | Shared.ModelIDFilter
    | Shared.TopicIDFilter
    | Shared.TagIDFilter
    | Shared.PromptIDFilter
    | Shared.PersonaIDFilter
    | Shared.BrandNameFilter
    | Shared.MerchantNameFilter
    | Shared.ProductNameFilter
    | Shared.ProfoundShoppingAPIAssetNameFilter
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
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';
  filters?: Array<
    | Shared.RegionIDFilter
    | Shared.ModelIDFilter
    | Shared.TopicIDFilter
    | Shared.TagIDFilter
    | Shared.PromptIDFilter
    | Shared.PersonaIDFilter
    | Shared.BrandNameFilter
    | Shared.MerchantNameFilter
    | Shared.ProductNameFilter
    | Shared.ProfoundShoppingAPIAssetNameFilter
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
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';
  filters?: Array<
    | Shared.RegionIDFilter
    | Shared.ModelIDFilter
    | Shared.TopicIDFilter
    | Shared.TagIDFilter
    | Shared.PromptIDFilter
    | Shared.PersonaIDFilter
    | Shared.BrandNameFilter
    | Shared.MerchantNameFilter
    | Shared.ProductNameFilter
    | Shared.ProfoundShoppingAPIAssetNameFilter
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
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';
  filters?: Array<
    | Shared.RegionIDFilter
    | Shared.ModelIDFilter
    | Shared.TopicIDFilter
    | Shared.TagIDFilter
    | Shared.PromptIDFilter
    | Shared.PersonaIDFilter
    | Shared.BrandNameFilter
    | Shared.MerchantNameFilter
    | Shared.ProductNameFilter
    | Shared.ProfoundShoppingAPIAssetNameFilter
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
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';
  filters?: Array<
    | Shared.RegionIDFilter
    | Shared.ModelIDFilter
    | Shared.TopicIDFilter
    | Shared.TagIDFilter
    | Shared.PromptIDFilter
    | Shared.PersonaIDFilter
    | Shared.BrandNameFilter
    | Shared.MerchantNameFilter
    | Shared.ProductNameFilter
    | Shared.ProfoundShoppingAPIAssetNameFilter
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
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';
  filters?: Array<
    | Shared.RegionIDFilter
    | Shared.ModelIDFilter
    | Shared.TopicIDFilter
    | Shared.TagIDFilter
    | Shared.PromptIDFilter
    | Shared.PersonaIDFilter
    | Shared.BrandNameFilter
    | Shared.MerchantNameFilter
    | Shared.ProductNameFilter
    | Shared.ProfoundShoppingAPIAssetNameFilter
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
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';
  filters?: Array<
    | Shared.RegionIDFilter
    | Shared.ModelIDFilter
    | Shared.TopicIDFilter
    | Shared.TagIDFilter
    | Shared.PromptIDFilter
    | Shared.PersonaIDFilter
    | Shared.BrandNameFilter
    | Shared.MerchantNameFilter
    | Shared.ProductNameFilter
    | Shared.ProfoundShoppingAPIAssetNameFilter
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

export interface ShoppingTriggeredPromptsQuery {
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
    | Shared.PromptIDFilter
    | Shared.PersonaIDFilter
    | Shared.BrandNameFilter
    | Shared.MerchantNameFilter
    | Shared.ProductNameFilter
    | Shared.ProfoundShoppingAPIAssetNameFilter
  >;
  order_by?: Record<string, 'asc' | 'desc'>;
  pagination?: null;
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
}

export interface ShoppingTriggeredTopicsQuery {
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
    | Shared.PromptIDFilter
    | Shared.PersonaIDFilter
    | Shared.BrandNameFilter
    | Shared.MerchantNameFilter
    | Shared.ProductNameFilter
    | Shared.ProfoundShoppingAPIAssetNameFilter
  >;
  order_by?: Record<string, 'asc' | 'desc'>;
  pagination?: null;
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
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';
  filters?: Array<
    | Shared.RegionIDFilter
    | Shared.ModelIDFilter
    | Shared.TopicIDFilter
    | Shared.TagIDFilter
    | Shared.PromptIDFilter
    | Shared.PersonaIDFilter
    | Shared.BrandNameFilter
    | Shared.MerchantNameFilter
    | Shared.ProductNameFilter
    | Shared.ProfoundShoppingAPIAssetNameFilter
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
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';
  filters?: Array<
    | Shared.RegionIDFilter
    | Shared.ModelIDFilter
    | Shared.TopicIDFilter
    | Shared.TagIDFilter
    | Shared.PromptIDFilter
    | Shared.PersonaIDFilter
    | Shared.BrandNameFilter
    | Shared.MerchantNameFilter
    | Shared.ProductNameFilter
    | Shared.ProfoundShoppingAPIAssetNameFilter
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

export interface ShoppingBrandsV2Query {
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
  filter?: Shared.FilterNode | null;
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

export interface ShoppingProductsV2Query {
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
  filter?: Shared.FilterNode | null;
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

export interface ShoppingMerchantsV2Query {
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
  filter?: Shared.FilterNode | null;
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

export interface ShoppingTriggerRateV2Query {
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
  filter?: Shared.FilterNode | null;
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

export interface ShoppingVisibilityV1VisibilityPostParams {
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
    | Shared.PromptIDFilter
    | Shared.PersonaIDFilter
    | Shared.BrandNameFilter
    | Shared.MerchantNameFilter
    | Shared.ProductNameFilter
    | Shared.ProfoundShoppingAPIAssetNameFilter
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

export interface ShoppingItemVisibilityV1ItemVisibilityPostParams {
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
    | Shared.PromptIDFilter
    | Shared.PersonaIDFilter
    | Shared.BrandNameFilter
    | Shared.MerchantNameFilter
    | Shared.ProductNameFilter
    | Shared.ProfoundShoppingAPIAssetNameFilter
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

export interface ShoppingMerchantDistributionV1MerchantDistributionPostParams {
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
    | Shared.PromptIDFilter
    | Shared.PersonaIDFilter
    | Shared.BrandNameFilter
    | Shared.MerchantNameFilter
    | Shared.ProductNameFilter
    | Shared.ProfoundShoppingAPIAssetNameFilter
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

export interface ShoppingMerchantVisibilityByBrandV1MerchantVisibilityByBrandPostParams {
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
    | Shared.PromptIDFilter
    | Shared.PersonaIDFilter
    | Shared.BrandNameFilter
    | Shared.MerchantNameFilter
    | Shared.ProductNameFilter
    | Shared.ProfoundShoppingAPIAssetNameFilter
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

export interface ShoppingMerchantByItemsV1MerchantByItemsPostParams {
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
    | Shared.PromptIDFilter
    | Shared.PersonaIDFilter
    | Shared.BrandNameFilter
    | Shared.MerchantNameFilter
    | Shared.ProductNameFilter
    | Shared.ProfoundShoppingAPIAssetNameFilter
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

export interface ShoppingAllItemsWithMerchantsV1AllItemsWithMerchantsPostParams {
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
    | Shared.PromptIDFilter
    | Shared.PersonaIDFilter
    | Shared.BrandNameFilter
    | Shared.MerchantNameFilter
    | Shared.ProductNameFilter
    | Shared.ProfoundShoppingAPIAssetNameFilter
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

export interface ShoppingTriggerRateV1TriggerRatePostParams {
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
    | Shared.PromptIDFilter
    | Shared.PersonaIDFilter
    | Shared.BrandNameFilter
    | Shared.MerchantNameFilter
    | Shared.ProductNameFilter
    | Shared.ProfoundShoppingAPIAssetNameFilter
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

export interface ShoppingTriggeredPromptsV1TriggeredPromptsPostParams {
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
    | Shared.PromptIDFilter
    | Shared.PersonaIDFilter
    | Shared.BrandNameFilter
    | Shared.MerchantNameFilter
    | Shared.ProductNameFilter
    | Shared.ProfoundShoppingAPIAssetNameFilter
  >;
  order_by?: Record<string, 'asc' | 'desc'>;
  pagination?: null;
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
}

export interface ShoppingTriggeredTopicsV1TriggeredTopicsPostParams {
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
    | Shared.PromptIDFilter
    | Shared.PersonaIDFilter
    | Shared.BrandNameFilter
    | Shared.MerchantNameFilter
    | Shared.ProductNameFilter
    | Shared.ProfoundShoppingAPIAssetNameFilter
  >;
  order_by?: Record<string, 'asc' | 'desc'>;
  pagination?: null;
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
}

export interface ShoppingMerchantShareV1MerchantSharePostParams {
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
    | Shared.PromptIDFilter
    | Shared.PersonaIDFilter
    | Shared.BrandNameFilter
    | Shared.MerchantNameFilter
    | Shared.ProductNameFilter
    | Shared.ProfoundShoppingAPIAssetNameFilter
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

export interface ShoppingProductMerchantURLsV1ProductMerchantURLsPostParams {
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

export interface ShoppingExecutionsV1ExecutionsPostParams {
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
    | Shared.PromptIDFilter
    | Shared.PersonaIDFilter
    | Shared.BrandNameFilter
    | Shared.MerchantNameFilter
    | Shared.ProductNameFilter
    | Shared.ProfoundShoppingAPIAssetNameFilter
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

export interface ShoppingQueryBrandsV2V2BrandsPostParams {
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
  filter?: Shared.FilterNode | null;
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

export interface ShoppingQueryBrandsV2V2BrandsPostResponse {
  info: ShoppingQueryBrandsV2V2BrandsPostResponse.Info;
  data: Array<ShoppingQueryBrandsV2V2BrandsPostResponse.Data>;
}

export namespace ShoppingQueryBrandsV2V2BrandsPostResponse {
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
    topic?: Shared.DimensionRef | null;
    region?: Shared.DimensionRef | null;
    prompt?: Shared.DimensionRef | null;
    visibility_score?: number | null;
    average_position?: number | null;
    /**
     * Asset visibility rank (present on grouped rows).
     */
    visibility_rank?: number | null;
    [k: string]: unknown;
  }
}

export interface ShoppingStreamBrandsV2V2BrandsStreamPostParams {
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
  filter?: Shared.FilterNode | null;
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

export type ShoppingStreamBrandsV2V2BrandsStreamPostResponse =
  | ShoppingStreamBrandsV2V2BrandsStreamPostResponse.ShoppingBrandsV2Info
  | ShoppingStreamBrandsV2V2BrandsStreamPostResponse.ShoppingBrandRow;

export namespace ShoppingStreamBrandsV2V2BrandsStreamPostResponse {
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
    topic?: Shared.DimensionRef | null;
    region?: Shared.DimensionRef | null;
    prompt?: Shared.DimensionRef | null;
    visibility_score?: number | null;
    average_position?: number | null;
    /**
     * Asset visibility rank (present on grouped rows).
     */
    visibility_rank?: number | null;
    [k: string]: unknown;
  }
}

export interface ShoppingQueryProductsV2V2ProductsPostParams {
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
  filter?: Shared.FilterNode | null;
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

export interface ShoppingQueryProductsV2V2ProductsPostResponse {
  info: ShoppingQueryProductsV2V2ProductsPostResponse.Info;
  data: Array<ShoppingQueryProductsV2V2ProductsPostResponse.Data>;
}

export namespace ShoppingQueryProductsV2V2ProductsPostResponse {
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
    topic?: Shared.DimensionRef | null;
    prompt?: Shared.DimensionRef | null;
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
}

export interface ShoppingStreamProductsV2V2ProductsStreamPostParams {
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
  filter?: Shared.FilterNode | null;
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

export type ShoppingStreamProductsV2V2ProductsStreamPostResponse =
  | ShoppingStreamProductsV2V2ProductsStreamPostResponse.ShoppingProductsV2Info
  | ShoppingStreamProductsV2V2ProductsStreamPostResponse.ShoppingProductRow;

export namespace ShoppingStreamProductsV2V2ProductsStreamPostResponse {
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
    topic?: Shared.DimensionRef | null;
    prompt?: Shared.DimensionRef | null;
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
}

export interface ShoppingQueryMerchantsV2V2MerchantsPostParams {
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
  filter?: Shared.FilterNode | null;
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

export interface ShoppingQueryMerchantsV2V2MerchantsPostResponse {
  info: ShoppingQueryMerchantsV2V2MerchantsPostResponse.Info;
  data: Array<ShoppingQueryMerchantsV2V2MerchantsPostResponse.Data>;
}

export namespace ShoppingQueryMerchantsV2V2MerchantsPostResponse {
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

export interface ShoppingStreamMerchantsV2V2MerchantsStreamPostParams {
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
  filter?: Shared.FilterNode | null;
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

export type ShoppingStreamMerchantsV2V2MerchantsStreamPostResponse =
  | ShoppingStreamMerchantsV2V2MerchantsStreamPostResponse.ShoppingMerchantsV2Info
  | ShoppingStreamMerchantsV2V2MerchantsStreamPostResponse.ShoppingMerchantRow;

export namespace ShoppingStreamMerchantsV2V2MerchantsStreamPostResponse {
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

export interface ShoppingQueryTriggerRateV2V2TriggerRatePostParams {
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
  filter?: Shared.FilterNode | null;
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

export interface ShoppingQueryTriggerRateV2V2TriggerRatePostResponse {
  info: ShoppingQueryTriggerRateV2V2TriggerRatePostResponse.Info;
  data: Array<ShoppingQueryTriggerRateV2V2TriggerRatePostResponse.Data>;
}

export namespace ShoppingQueryTriggerRateV2V2TriggerRatePostResponse {
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
    topic?: Shared.DimensionRef | null;
    region?: Shared.DimensionRef | null;
    persona?: Shared.DimensionRef | null;
    prompt?: Shared.DimensionRef | null;
    total_runs?: number | null;
    shopping_triggered_runs?: number | null;
    trigger_rate_percentage?: number | null;
    [k: string]: unknown;
  }
}

export interface ShoppingStreamTriggerRateV2V2TriggerRateStreamPostParams {
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
  filter?: Shared.FilterNode | null;
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

export type ShoppingStreamTriggerRateV2V2TriggerRateStreamPostResponse =
  | ShoppingStreamTriggerRateV2V2TriggerRateStreamPostResponse.ShoppingTriggerRateV2Info
  | ShoppingStreamTriggerRateV2V2TriggerRateStreamPostResponse.ShoppingTriggerRateRow;

export namespace ShoppingStreamTriggerRateV2V2TriggerRateStreamPostResponse {
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
    topic?: Shared.DimensionRef | null;
    region?: Shared.DimensionRef | null;
    persona?: Shared.DimensionRef | null;
    prompt?: Shared.DimensionRef | null;
    total_runs?: number | null;
    shopping_triggered_runs?: number | null;
    trigger_rate_percentage?: number | null;
    [k: string]: unknown;
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
    type ShoppingTriggeredPromptsQuery as ShoppingTriggeredPromptsQuery,
    type ShoppingTriggeredTopicsQuery as ShoppingTriggeredTopicsQuery,
    type ShoppingMerchantShareQuery as ShoppingMerchantShareQuery,
    type ShoppingProductMerchantURLsQuery as ShoppingProductMerchantURLsQuery,
    type ShoppingExecutionsQuery as ShoppingExecutionsQuery,
    type ShoppingBrandsV2Query as ShoppingBrandsV2Query,
    type ShoppingProductsV2Query as ShoppingProductsV2Query,
    type ShoppingMerchantsV2Query as ShoppingMerchantsV2Query,
    type ShoppingTriggerRateV2Query as ShoppingTriggerRateV2Query,
    type ShoppingQueryBrandsV2V2BrandsPostResponse as ShoppingQueryBrandsV2V2BrandsPostResponse,
    type ShoppingStreamBrandsV2V2BrandsStreamPostResponse as ShoppingStreamBrandsV2V2BrandsStreamPostResponse,
    type ShoppingQueryProductsV2V2ProductsPostResponse as ShoppingQueryProductsV2V2ProductsPostResponse,
    type ShoppingStreamProductsV2V2ProductsStreamPostResponse as ShoppingStreamProductsV2V2ProductsStreamPostResponse,
    type ShoppingQueryMerchantsV2V2MerchantsPostResponse as ShoppingQueryMerchantsV2V2MerchantsPostResponse,
    type ShoppingStreamMerchantsV2V2MerchantsStreamPostResponse as ShoppingStreamMerchantsV2V2MerchantsStreamPostResponse,
    type ShoppingQueryTriggerRateV2V2TriggerRatePostResponse as ShoppingQueryTriggerRateV2V2TriggerRatePostResponse,
    type ShoppingStreamTriggerRateV2V2TriggerRateStreamPostResponse as ShoppingStreamTriggerRateV2V2TriggerRateStreamPostResponse,
    type ShoppingVisibilityV1VisibilityPostParams as ShoppingVisibilityV1VisibilityPostParams,
    type ShoppingItemVisibilityV1ItemVisibilityPostParams as ShoppingItemVisibilityV1ItemVisibilityPostParams,
    type ShoppingMerchantDistributionV1MerchantDistributionPostParams as ShoppingMerchantDistributionV1MerchantDistributionPostParams,
    type ShoppingMerchantVisibilityByBrandV1MerchantVisibilityByBrandPostParams as ShoppingMerchantVisibilityByBrandV1MerchantVisibilityByBrandPostParams,
    type ShoppingMerchantByItemsV1MerchantByItemsPostParams as ShoppingMerchantByItemsV1MerchantByItemsPostParams,
    type ShoppingAllItemsWithMerchantsV1AllItemsWithMerchantsPostParams as ShoppingAllItemsWithMerchantsV1AllItemsWithMerchantsPostParams,
    type ShoppingTriggerRateV1TriggerRatePostParams as ShoppingTriggerRateV1TriggerRatePostParams,
    type ShoppingTriggeredPromptsV1TriggeredPromptsPostParams as ShoppingTriggeredPromptsV1TriggeredPromptsPostParams,
    type ShoppingTriggeredTopicsV1TriggeredTopicsPostParams as ShoppingTriggeredTopicsV1TriggeredTopicsPostParams,
    type ShoppingMerchantShareV1MerchantSharePostParams as ShoppingMerchantShareV1MerchantSharePostParams,
    type ShoppingProductMerchantURLsV1ProductMerchantURLsPostParams as ShoppingProductMerchantURLsV1ProductMerchantURLsPostParams,
    type ShoppingExecutionsV1ExecutionsPostParams as ShoppingExecutionsV1ExecutionsPostParams,
    type ShoppingQueryBrandsV2V2BrandsPostParams as ShoppingQueryBrandsV2V2BrandsPostParams,
    type ShoppingStreamBrandsV2V2BrandsStreamPostParams as ShoppingStreamBrandsV2V2BrandsStreamPostParams,
    type ShoppingQueryProductsV2V2ProductsPostParams as ShoppingQueryProductsV2V2ProductsPostParams,
    type ShoppingStreamProductsV2V2ProductsStreamPostParams as ShoppingStreamProductsV2V2ProductsStreamPostParams,
    type ShoppingQueryMerchantsV2V2MerchantsPostParams as ShoppingQueryMerchantsV2V2MerchantsPostParams,
    type ShoppingStreamMerchantsV2V2MerchantsStreamPostParams as ShoppingStreamMerchantsV2V2MerchantsStreamPostParams,
    type ShoppingQueryTriggerRateV2V2TriggerRatePostParams as ShoppingQueryTriggerRateV2V2TriggerRatePostParams,
    type ShoppingStreamTriggerRateV2V2TriggerRateStreamPostParams as ShoppingStreamTriggerRateV2V2TriggerRateStreamPostParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Profound from '@profoundai/client';

const client = new Profound({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource shopping', () => {
  // Mock server tests are disabled
  test.skip('allItemsWithMerchants: only required params', async () => {
    const responsePromise = client.reports.shopping.allItemsWithMerchants({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      start_date: '2019-12-27T18:11:19.117Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('allItemsWithMerchants: required and optional params', async () => {
    const response = await client.reports.shopping.allItemsWithMerchants({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      start_date: '2019-12-27T18:11:19.117Z',
      comparison_end_date: '2019-12-27T18:11:19.117Z',
      comparison_start_date: '2019-12-27T18:11:19.117Z',
      date_interval: 'hour',
      dimensions: ['period'],
      exclude_topic_ids: true,
      filters: [
        {
          field: 'region_id',
          operator: 'is',
          value: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
      ],
      include_count: true,
      include_items: ['string'],
      include_no_tag: true,
      merchant_filter_type: 'any',
      metrics: ['visibility_score'],
      order_by: { foo: 'asc' },
      owned_asset_names: ['string'],
      pagination: { limit: 1, offset: 0 },
      rank_by: 'visibility',
      search_item: 'search_item',
      sort_order: 'asc',
      tag_filter_type: 'any',
    });
  });

  // Mock server tests are disabled
  test.skip('executions: only required params', async () => {
    const responsePromise = client.reports.shopping.executions({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      start_date: '2019-12-27T18:11:19.117Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('executions: required and optional params', async () => {
    const response = await client.reports.shopping.executions({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      start_date: '2019-12-27T18:11:19.117Z',
      analysis_filter_type: 'any',
      analysis_types: ['visibility'],
      comparison_end_date: '2019-12-27T18:11:19.117Z',
      comparison_start_date: '2019-12-27T18:11:19.117Z',
      date_interval: 'hour',
      exclude_topic_ids: true,
      filters: [
        {
          field: 'region_id',
          operator: 'is',
          value: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
      ],
      include_count: true,
      include_no_tag: true,
      order_by: { foo: 'asc' },
      owned_asset_names: ['string'],
      pagination: { limit: 1, offset: 0 },
      tag_filter_type: 'any',
    });
  });

  // Mock server tests are disabled
  test.skip('itemVisibility: only required params', async () => {
    const responsePromise = client.reports.shopping.itemVisibility({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      start_date: '2019-12-27T18:11:19.117Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('itemVisibility: required and optional params', async () => {
    const response = await client.reports.shopping.itemVisibility({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      start_date: '2019-12-27T18:11:19.117Z',
      comparison_end_date: '2019-12-27T18:11:19.117Z',
      comparison_start_date: '2019-12-27T18:11:19.117Z',
      competitor_limit: 1,
      date_interval: 'hour',
      dimensions: ['period'],
      exclude_topic_ids: true,
      filters: [
        {
          field: 'region_id',
          operator: 'is',
          value: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
      ],
      include_competitors: true,
      include_count: true,
      include_items: ['string'],
      include_no_tag: true,
      include_position_frequency: true,
      merchant_filter_type: 'any',
      metrics: ['visibility_score'],
      order_by: { foo: 'asc' },
      owned_asset_names: ['string'],
      pagination: { limit: 1, offset: 0 },
      search_item: 'search_item',
      tag_filter_type: 'any',
      target_product: 'target_product',
    });
  });

  // Mock server tests are disabled
  test.skip('merchantByItems: only required params', async () => {
    const responsePromise = client.reports.shopping.merchantByItems({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      start_date: '2019-12-27T18:11:19.117Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('merchantByItems: required and optional params', async () => {
    const response = await client.reports.shopping.merchantByItems({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      start_date: '2019-12-27T18:11:19.117Z',
      comparison_end_date: '2019-12-27T18:11:19.117Z',
      comparison_start_date: '2019-12-27T18:11:19.117Z',
      date_interval: 'hour',
      dimensions: ['period'],
      exclude_topic_ids: true,
      filters: [
        {
          field: 'region_id',
          operator: 'is',
          value: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
      ],
      include_count: true,
      include_no_tag: true,
      metrics: ['merchant_visibility'],
      order_by: { foo: 'asc' },
      pagination: { limit: 1, offset: 0 },
      product_name: 'product_name',
      tag_filter_type: 'any',
    });
  });

  // Mock server tests are disabled
  test.skip('merchantDistribution: only required params', async () => {
    const responsePromise = client.reports.shopping.merchantDistribution({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      start_date: '2019-12-27T18:11:19.117Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('merchantDistribution: required and optional params', async () => {
    const response = await client.reports.shopping.merchantDistribution({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      start_date: '2019-12-27T18:11:19.117Z',
      comparison_end_date: '2019-12-27T18:11:19.117Z',
      comparison_start_date: '2019-12-27T18:11:19.117Z',
      date_interval: 'hour',
      dimensions: ['period'],
      exclude_topic_ids: true,
      filters: [
        {
          field: 'region_id',
          operator: 'is',
          value: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
      ],
      include_count: true,
      include_no_tag: true,
      metrics: ['offer_count'],
      order_by: { foo: 'asc' },
      owned_asset_names: ['string'],
      pagination: { limit: 1, offset: 0 },
      search_merchant: 'search_merchant',
      tag_filter_type: 'any',
    });
  });

  // Mock server tests are disabled
  test.skip('merchantShare: only required params', async () => {
    const responsePromise = client.reports.shopping.merchantShare({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      start_date: '2019-12-27T18:11:19.117Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('merchantShare: required and optional params', async () => {
    const response = await client.reports.shopping.merchantShare({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      start_date: '2019-12-27T18:11:19.117Z',
      comparison_end_date: '2019-12-27T18:11:19.117Z',
      comparison_start_date: '2019-12-27T18:11:19.117Z',
      date_interval: 'hour',
      dimensions: ['period'],
      exclude_topic_ids: true,
      filters: [
        {
          field: 'region_id',
          operator: 'is',
          value: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
      ],
      include_count: true,
      include_no_tag: true,
      metrics: ['merchant_share'],
      order_by: { foo: 'asc' },
      owned_asset_names: ['string'],
      pagination: { limit: 1, offset: 0 },
      tag_filter_type: 'any',
      target_asset_names: ['string'],
    });
  });

  // Mock server tests are disabled
  test.skip('merchantVisibilityByBrand: only required params', async () => {
    const responsePromise = client.reports.shopping.merchantVisibilityByBrand({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      start_date: '2019-12-27T18:11:19.117Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('merchantVisibilityByBrand: required and optional params', async () => {
    const response = await client.reports.shopping.merchantVisibilityByBrand({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      start_date: '2019-12-27T18:11:19.117Z',
      comparison_end_date: '2019-12-27T18:11:19.117Z',
      comparison_start_date: '2019-12-27T18:11:19.117Z',
      date_interval: 'hour',
      dimensions: ['period'],
      exclude_topic_ids: true,
      filters: [
        {
          field: 'region_id',
          operator: 'is',
          value: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
      ],
      include_brand: 'include_brand',
      include_brand_only: true,
      include_count: true,
      include_no_tag: true,
      metrics: ['visibility_score'],
      order_by: { foo: 'asc' },
      owned_asset_names: ['string'],
      pagination: { limit: 1, offset: 0 },
      search_brand: 'search_brand',
      tag_filter_type: 'any',
    });
  });

  // Mock server tests are disabled
  test.skip('productMerchantURLs: only required params', async () => {
    const responsePromise = client.reports.shopping.productMerchantURLs({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      product_names: ['string'],
      start_date: '2019-12-27T18:11:19.117Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('productMerchantURLs: required and optional params', async () => {
    const response = await client.reports.shopping.productMerchantURLs({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      product_names: ['string'],
      start_date: '2019-12-27T18:11:19.117Z',
    });
  });

  // Mock server tests are disabled
  test.skip('triggerRate: only required params', async () => {
    const responsePromise = client.reports.shopping.triggerRate({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      start_date: '2019-12-27T18:11:19.117Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('triggerRate: required and optional params', async () => {
    const response = await client.reports.shopping.triggerRate({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      start_date: '2019-12-27T18:11:19.117Z',
      comparison_end_date: '2019-12-27T18:11:19.117Z',
      comparison_start_date: '2019-12-27T18:11:19.117Z',
      date_interval: 'hour',
      dimensions: ['period'],
      exclude_topic_ids: true,
      filters: [
        {
          field: 'region_id',
          operator: 'is',
          value: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
      ],
      include_count: true,
      include_no_tag: true,
      metrics: ['total_runs'],
      order_by: { foo: 'asc' },
      pagination: { limit: 1, offset: 0 },
      tag_filter_type: 'any',
    });
  });

  // Mock server tests are disabled
  test.skip('visibility: only required params', async () => {
    const responsePromise = client.reports.shopping.visibility({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      start_date: '2019-12-27T18:11:19.117Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('visibility: required and optional params', async () => {
    const response = await client.reports.shopping.visibility({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      start_date: '2019-12-27T18:11:19.117Z',
      comparison_end_date: '2019-12-27T18:11:19.117Z',
      comparison_start_date: '2019-12-27T18:11:19.117Z',
      date_interval: 'hour',
      dimensions: ['period'],
      exclude_topic_ids: true,
      filters: [
        {
          field: 'region_id',
          operator: 'is',
          value: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
      ],
      include_asset: 'include_asset',
      include_asset_only: true,
      include_assets_only: ['string'],
      include_count: true,
      include_no_tag: true,
      include_position_frequency: true,
      metrics: ['visibility_score'],
      order_by: { foo: 'asc' },
      owned_asset_names: ['string'],
      pagination: { limit: 1, offset: 0 },
      rank_by: 'visibility_score',
      search_asset: 'search_asset',
      tag_filter_type: 'any',
    });
  });
});

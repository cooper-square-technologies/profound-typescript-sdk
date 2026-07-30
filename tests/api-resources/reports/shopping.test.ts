// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Profound from '@profoundai/client';

const client = new Profound({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource shopping', () => {
  // Mock server tests are disabled
  test.skip('brands: only required params', async () => {
    const responsePromise = client.reports.shopping.brands({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: 'end_date',
      start_date: 'start_date',
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
  test.skip('brands: required and optional params', async () => {
    const response = await client.reports.shopping.brands({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: 'end_date',
      start_date: 'start_date',
      assets: 'string',
      cursor: 'cursor',
      filter: {
        and: [],
        field: 'field',
        op: 'op',
        or: [],
        value: {},
      },
      group_by: ['date'],
      interval: 'day',
      limit: 1,
      max_results: 1,
      metrics: ['visibility_score'],
      scope: 'owned',
    });
  });

  // Mock server tests are disabled
  test.skip('merchants: only required params', async () => {
    const responsePromise = client.reports.shopping.merchants({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: 'end_date',
      start_date: 'start_date',
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
  test.skip('merchants: required and optional params', async () => {
    const response = await client.reports.shopping.merchants({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: 'end_date',
      start_date: 'start_date',
      cursor: 'cursor',
      filter: {
        and: [],
        field: 'field',
        op: 'op',
        or: [],
        value: {},
      },
      group_by: ['date'],
      interval: 'day',
      limit: 1,
      max_results: 1,
      metrics: ['merchant_share'],
    });
  });

  // Mock server tests are disabled
  test.skip('products: only required params', async () => {
    const responsePromise = client.reports.shopping.products({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: 'end_date',
      start_date: 'start_date',
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
  test.skip('products: required and optional params', async () => {
    const response = await client.reports.shopping.products({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: 'end_date',
      start_date: 'start_date',
      competitor_limit: 1,
      cursor: 'cursor',
      filter: {
        and: [],
        field: 'field',
        op: 'op',
        or: [],
        value: {},
      },
      group_by: ['date'],
      include_merchants: true,
      interval: 'day',
      limit: 1,
      max_results: 1,
      metrics: ['visibility_score'],
      target_product: 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('streamBrands: only required params', async () => {
    const responsePromise = client.reports.shopping.streamBrands({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: 'end_date',
      start_date: 'start_date',
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
  test.skip('streamBrands: required and optional params', async () => {
    const response = await client.reports.shopping.streamBrands({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: 'end_date',
      start_date: 'start_date',
      assets: 'string',
      cursor: 'cursor',
      filter: {
        and: [],
        field: 'field',
        op: 'op',
        or: [],
        value: {},
      },
      group_by: ['date'],
      interval: 'day',
      limit: 1,
      max_results: 1,
      metrics: ['visibility_score'],
      scope: 'owned',
    });
  });

  // Mock server tests are disabled
  test.skip('streamMerchants: only required params', async () => {
    const responsePromise = client.reports.shopping.streamMerchants({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: 'end_date',
      start_date: 'start_date',
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
  test.skip('streamMerchants: required and optional params', async () => {
    const response = await client.reports.shopping.streamMerchants({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: 'end_date',
      start_date: 'start_date',
      cursor: 'cursor',
      filter: {
        and: [],
        field: 'field',
        op: 'op',
        or: [],
        value: {},
      },
      group_by: ['date'],
      interval: 'day',
      limit: 1,
      max_results: 1,
      metrics: ['merchant_share'],
    });
  });

  // Mock server tests are disabled
  test.skip('streamProducts: only required params', async () => {
    const responsePromise = client.reports.shopping.streamProducts({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: 'end_date',
      start_date: 'start_date',
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
  test.skip('streamProducts: required and optional params', async () => {
    const response = await client.reports.shopping.streamProducts({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: 'end_date',
      start_date: 'start_date',
      competitor_limit: 1,
      cursor: 'cursor',
      filter: {
        and: [],
        field: 'field',
        op: 'op',
        or: [],
        value: {},
      },
      group_by: ['date'],
      include_merchants: true,
      interval: 'day',
      limit: 1,
      max_results: 1,
      metrics: ['visibility_score'],
      target_product: 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('streamTriggerRate: only required params', async () => {
    const responsePromise = client.reports.shopping.streamTriggerRate({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: 'end_date',
      start_date: 'start_date',
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
  test.skip('streamTriggerRate: required and optional params', async () => {
    const response = await client.reports.shopping.streamTriggerRate({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: 'end_date',
      start_date: 'start_date',
      cursor: 'cursor',
      filter: {
        and: [],
        field: 'field',
        op: 'op',
        or: [],
        value: {},
      },
      group_by: ['date'],
      interval: 'day',
      limit: 1,
      max_results: 1,
      metrics: ['total_runs'],
    });
  });

  // Mock server tests are disabled
  test.skip('triggerRate: only required params', async () => {
    const responsePromise = client.reports.shopping.triggerRate({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: 'end_date',
      start_date: 'start_date',
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
      end_date: 'end_date',
      start_date: 'start_date',
      cursor: 'cursor',
      filter: {
        and: [],
        field: 'field',
        op: 'op',
        or: [],
        value: {},
      },
      group_by: ['date'],
      interval: 'day',
      limit: 1,
      max_results: 1,
      metrics: ['total_runs'],
    });
  });
});

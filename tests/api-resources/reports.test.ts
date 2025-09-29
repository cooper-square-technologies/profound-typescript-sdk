// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Profound from 'profound';

const client = new Profound({
  queryAPIKey: 'My Query API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource reports', () => {
  // Prism tests are disabled
  test.skip('citations: only required params', async () => {
    const responsePromise = client.reports.citations({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      metrics: ['count'],
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

  // Prism tests are disabled
  test.skip('citations: required and optional params', async () => {
    const response = await client.reports.citations({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      metrics: ['count'],
      start_date: '2019-12-27T18:11:19.117Z',
      date_interval: 'day',
      dimensions: ['hostname'],
      filters: [{ field: 'hostname', operator: 'is', value: 'string' }],
      order_by: { date: 'asc' },
      pagination: { limit: 1, offset: 0 },
    });
  });

  // Prism tests are disabled
  test.skip('sentiment: only required params', async () => {
    const responsePromise = client.reports.sentiment({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      metrics: ['positive'],
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

  // Prism tests are disabled
  test.skip('sentiment: required and optional params', async () => {
    const response = await client.reports.sentiment({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      metrics: ['positive'],
      start_date: '2019-12-27T18:11:19.117Z',
      date_interval: 'day',
      dimensions: ['theme'],
      filters: [{ field: 'asset_name', operator: 'is', value: 'string' }],
      order_by: { date: 'asc' },
      pagination: { limit: 1, offset: 0 },
    });
  });

  // Prism tests are disabled
  test.skip('visibility: only required params', async () => {
    const responsePromise = client.reports.visibility({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      metrics: ['share_of_voice'],
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

  // Prism tests are disabled
  test.skip('visibility: required and optional params', async () => {
    const response = await client.reports.visibility({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      metrics: ['share_of_voice'],
      start_date: '2019-12-27T18:11:19.117Z',
      date_interval: 'day',
      dimensions: ['date'],
      filters: [{ field: 'region', operator: 'is', value: 'string' }],
      order_by: { date: 'asc' },
      pagination: { limit: 1, offset: 0 },
    });
  });
});

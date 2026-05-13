// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Profound from '@profoundai/client';

const client = new Profound({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource webSearchResults', () => {
  // Mock server tests are disabled
  test.skip('query: only required params', async () => {
    const responsePromise = client.reports.webSearchResults.query({
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

  // Mock server tests are disabled
  test.skip('query: required and optional params', async () => {
    const response = await client.reports.webSearchResults.query({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      metrics: ['count'],
      start_date: '2019-12-27T18:11:19.117Z',
      date_interval: 'hour',
      dimensions: ['hostname'],
      filters: [
        {
          field: 'hostname',
          operator: 'is',
          value: 'string',
        },
      ],
      order_by: { date: 'asc' },
      pagination: { limit: 1, offset: 0 },
    });
  });

  // Mock server tests are disabled
  test.skip('stream: only required params', async () => {
    const responsePromise = client.reports.webSearchResults.stream({
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

  // Mock server tests are disabled
  test.skip('stream: required and optional params', async () => {
    const response = await client.reports.webSearchResults.stream({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      metrics: ['count'],
      start_date: '2019-12-27T18:11:19.117Z',
      date_interval: 'hour',
      dimensions: ['hostname'],
      filters: [
        {
          field: 'hostname',
          operator: 'is',
          value: 'string',
        },
      ],
      order_by: { date: 'asc' },
      pagination: { limit: 1, offset: 0 },
    });
  });
});

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Profound from 'profound';

const client = new Profound({
  headerAPIKey: 'My Header API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource raw', () => {
  // Prism tests are disabled
  test.skip('getBots: only required params', async () => {
    const responsePromise = client.logs.raw.getBots({
      domain: 'domain',
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
  test.skip('getBots: required and optional params', async () => {
    const response = await client.logs.raw.getBots({
      domain: 'domain',
      metrics: ['count'],
      start_date: '2019-12-27T18:11:19.117Z',
      date_interval: 'day',
      dimensions: ['method'],
      end_date: '2019-12-27T18:11:19.117Z',
      filters: [{ field: 'method', operator: 'is', value: 'string' }],
      order_by: { date: 'asc' },
      pagination: { limit: 1, offset: 0 },
    });
  });

  // Prism tests are disabled
  test.skip('getLogs: only required params', async () => {
    const responsePromise = client.logs.raw.getLogs({
      domain: 'domain',
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
  test.skip('getLogs: required and optional params', async () => {
    const response = await client.logs.raw.getLogs({
      domain: 'domain',
      metrics: ['count'],
      start_date: '2019-12-27T18:11:19.117Z',
      date_interval: 'day',
      dimensions: ['timestamp'],
      end_date: '2019-12-27T18:11:19.117Z',
      filters: [{ field: 'method', operator: 'is', value: 'string' }],
      order_by: { date: 'asc' },
      pagination: { limit: 1, offset: 0 },
    });
  });
});

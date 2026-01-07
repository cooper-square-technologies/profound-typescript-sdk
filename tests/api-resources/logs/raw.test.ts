// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Profound from 'profoundai';

const client = new Profound({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource raw', () => {
  // Prism tests are disabled
  test.skip('bots: only required params', async () => {
    const responsePromise = client.logs.raw.bots({
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
  test.skip('bots: required and optional params', async () => {
    const response = await client.logs.raw.bots({
      domain: 'domain',
      metrics: ['count'],
      start_date: '2019-12-27T18:11:19.117Z',
      date_interval: 'day',
      dimensions: ['timestamp'],
      end_date: '2019-12-27T18:11:19.117Z',
      filters: [
        {
          field: 'bot_name',
          operator: 'is',
          value: 'Amazonbot',
        },
      ],
      order_by: { date: 'asc' },
      pagination: { limit: 1, offset: 0 },
    });
  });

  // Prism tests are disabled
  test.skip('logs: only required params', async () => {
    const responsePromise = client.logs.raw.logs({
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
  test.skip('logs: required and optional params', async () => {
    const response = await client.logs.raw.logs({
      domain: 'domain',
      metrics: ['count'],
      start_date: '2019-12-27T18:11:19.117Z',
      date_interval: 'day',
      dimensions: ['timestamp'],
      end_date: '2019-12-27T18:11:19.117Z',
      filters: [
        {
          field: 'method',
          operator: 'is',
          value: 'string',
        },
      ],
      order_by: { date: 'asc' },
      pagination: { limit: 1, offset: 0 },
    });
  });
});

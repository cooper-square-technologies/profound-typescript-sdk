// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Profound from 'profoundai';

const client = new Profound({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource promptVolumes', () => {
  // Mock server tests are disabled
  test.skip('createVolume: only required params', async () => {
    const responsePromise = client.promptVolumes.createVolume({
      end_date: '2019-12-27T18:11:19.117Z',
      metrics: ['volume'],
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
  test.skip('createVolume: required and optional params', async () => {
    const response = await client.promptVolumes.createVolume({
      end_date: '2019-12-27T18:11:19.117Z',
      metrics: ['volume'],
      start_date: '2019-12-27T18:11:19.117Z',
      date_interval: 'hour',
      dimensions: ['keyword'],
      filters: [
        {
          field: 'country_code',
          operator: 'is',
          value: 'string',
        },
      ],
      order_by: { date: 'asc' },
      pagination: { limit: 1, offset: 0 },
    });
  });

  // Mock server tests are disabled
  test.skip('listCitationPrompts: only required params', async () => {
    const responsePromise = client.promptVolumes.listCitationPrompts({ input_domain: 'xxx' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listCitationPrompts: required and optional params', async () => {
    const response = await client.promptVolumes.listCitationPrompts({ input_domain: 'xxx' });
  });
});

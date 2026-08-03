// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Profound from '@profoundai/client';

const client = new Profound({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource adAccount', () => {
  // Mock server tests are disabled
  test.skip('retrieveInsights', async () => {
    const responsePromise = client.ads.openaiAds.adAccount.retrieveInsights();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveInsights: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ads.openaiAds.adAccount.retrieveInsights(
        {
          after: 'after',
          aggregation_level: 'ad_account',
          before: 'before',
          limit: 1,
          organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          time_granularity: 'hourly',
          time_ranges: ['string', 'string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Profound.NotFoundError);
  });
});

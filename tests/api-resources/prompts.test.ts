// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Profound from 'profoundai';

const client = new Profound({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource prompts', () => {
  // Prism tests are disabled
  test.skip('answers: only required params', async () => {
    const responsePromise = client.prompts.answers({
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

  // Prism tests are disabled
  test.skip('answers: required and optional params', async () => {
    const response = await client.prompts.answers({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      start_date: '2019-12-27T18:11:19.117Z',
      filters: [{ field: 'region', operator: 'is', value: 'string' }],
      include: {
        asset: true,
        citations: true,
        created_at: true,
        mentions: true,
        model: true,
        prompt: true,
        prompt_id: true,
        prompt_type: true,
        region: true,
        response: true,
        run_id: true,
        search_queries: true,
        tags: true,
        themes: true,
        topic: true,
      },
      pagination: { limit: 1, offset: 0 },
    });
  });
});

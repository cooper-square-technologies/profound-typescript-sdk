// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Profound from '@profoundai/client';

const client = new Profound({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource knowledgeBases', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.knowledgeBases.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.knowledgeBases.list(
        { organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Profound.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('search: only required params', async () => {
    const responsePromise = client.knowledgeBases.search('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      query: 'x',
      top_k: 1,
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
  test.skip('search: required and optional params', async () => {
    const response = await client.knowledgeBases.search('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      query: 'x',
      top_k: 1,
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      filters: { folders: ['x'], tags: ['x'] },
      return_full_page: true,
    });
  });
});

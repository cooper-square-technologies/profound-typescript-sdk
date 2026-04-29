// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Profound from '@profoundai/client';

const client = new Profound({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource documents', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.knowledgeBases.documents.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      name: 'x',
      text: 'x',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.knowledgeBases.documents.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      name: 'x',
      text: 'x',
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      folder: 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.knowledgeBases.documents.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      name: 'x',
      text: 'x',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.knowledgeBases.documents.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      name: 'x',
      text: 'x',
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      folder: 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.knowledgeBases.documents.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      name: 'x',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.knowledgeBases.documents.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      name: 'x',
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
});

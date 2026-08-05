// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Profound from '@profoundai/client';

const client = new Profound({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource documents', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.documents.create({
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      content_markdown: 'x',
      name: 'x',
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
    const response = await client.documents.create({
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      content_markdown: 'x',
      name: 'x',
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.documents.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.documents.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      include_comments: true,
      include_tabs: true,
      preview: true,
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.documents.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
    const response = await client.documents.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      name: 'x',
      visibility: 'invited_only',
    });
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.documents.list({
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('list: required and optional params', async () => {
    const response = await client.documents.list({
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      limit: 1,
      next_cursor: 'next_cursor',
      q: 'q',
      sort: 'sort',
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.documents.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
    const response = await client.documents.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Mock server tests are disabled
  test.skip('replaceContent: only required params', async () => {
    const responsePromise = client.documents.replaceContent('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      content_markdown: 'content_markdown',
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('replaceContent: required and optional params', async () => {
    const response = await client.documents.replaceContent('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      content_markdown: 'content_markdown',
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      skip_title_sync: true,
    });
  });
});

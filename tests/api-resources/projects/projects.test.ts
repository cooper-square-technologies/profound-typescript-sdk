// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Profound from '@profoundai/client';

const client = new Profound({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource projects', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.projects.create({ category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
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
    const response = await client.projects.create({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      attachments: [
        {
          id: 'x',
          data_base64: 'x',
          mime_type: 'x',
          name: 'x',
          size_bytes: 1,
        },
      ],
      focus: 'x',
      generation_context: {
        dateRange: {
          label: 'x',
          preset: 'x',
          endDate: 'endDate',
          mode: 'custom',
          startDate: 'startDate',
        },
        platforms: [
          {
            id: 'x',
            name: 'x',
            slug: 'slug',
          },
        ],
        projectCategories: ['creative'],
        regions: [
          {
            id: 'x',
            name: 'x',
            slug: 'slug',
          },
        ],
        tags: [
          {
            id: 'x',
            name: 'x',
            slug: 'slug',
          },
        ],
      },
      project_name: 'x',
      title: 'x',
      topics: ['x'],
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.projects.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
    const response = await client.projects.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.projects.list({ category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
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
    const response = await client.projects.list({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      limit: 1,
      offset: 0,
      status: 'status',
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.projects.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
    const response = await client.projects.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Mock server tests are disabled
  test.skip('archive: only required params', async () => {
    const responsePromise = client.projects.archive('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('archive: required and optional params', async () => {
    const response = await client.projects.archive('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      reason: 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('getStatus: only required params', async () => {
    const responsePromise = client.projects.getStatus('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('getStatus: required and optional params', async () => {
    const response = await client.projects.getStatus('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Mock server tests are disabled
  test.skip('unarchive: only required params', async () => {
    const responsePromise = client.projects.unarchive('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('unarchive: required and optional params', async () => {
    const response = await client.projects.unarchive('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
});

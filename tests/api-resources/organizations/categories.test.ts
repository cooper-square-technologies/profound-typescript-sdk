// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Profound from '@profoundai/client';

const client = new Profound({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource categories', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.organizations.categories.list();
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
      client.organizations.categories.list(
        { organization_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Profound.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('assets', async () => {
    const responsePromise = client.organizations.categories.assets('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createPrompts: only required params', async () => {
    const responsePromise = client.organizations.categories.createPrompts(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        prompts: [
          {
            language: 'language',
            platforms: [{}],
            prompt: 'x',
            regions: [{}],
            topic: {},
          },
        ],
      },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createPrompts: required and optional params', async () => {
    const response = await client.organizations.categories.createPrompts(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        prompts: [
          {
            language: 'language',
            platforms: [{ id: 'id', name: 'name' }],
            prompt: 'x',
            regions: [{ id: 'id', name: 'name' }],
            topic: { id: 'id', name: 'name' },
            analysis_types: ['visibility'],
            asset: { id: 'id', name: 'name' },
            personas: [{ id: 'id', name: 'name' }],
            prompt_type: 'prompt_type',
            tags: [{ id: 'id', name: 'name' }],
          },
        ],
        dry_run: true,
      },
    );
  });

  // Mock server tests are disabled
  test.skip('getCategoryPersonas', async () => {
    const responsePromise = client.organizations.categories.getCategoryPersonas(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('prompts', async () => {
    const responsePromise = client.organizations.categories.prompts('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('prompts: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.organizations.categories.prompts(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          analysis_type: ['visibility'],
          cursor: 'cursor',
          limit: 1,
          order_dir: 'asc',
          persona_id: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          platform_id: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          prompt_type: ['visibility'],
          region_id: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          status: ['active'],
          tag_id: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          topic_id: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Profound.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('tags', async () => {
    const responsePromise = client.organizations.categories.tags('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('topics', async () => {
    const responsePromise = client.organizations.categories.topics('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updatePromptStatus: only required params', async () => {
    const responsePromise = client.organizations.categories.updatePromptStatus(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { prompt_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'], status: 'active' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updatePromptStatus: required and optional params', async () => {
    const response = await client.organizations.categories.updatePromptStatus(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        prompt_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
        status: 'active',
        dry_run: true,
      },
    );
  });

  // Mock server tests are disabled
  test.skip('updatePrompts: only required params', async () => {
    const responsePromise = client.organizations.categories.updatePrompts(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { prompts: [{ id: 'id' }] },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updatePrompts: required and optional params', async () => {
    const response = await client.organizations.categories.updatePrompts(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        prompts: [
          {
            id: 'id',
            analysis_types: ['visibility'],
            asset: { id: 'id', name: 'name' },
            language: 'language',
            personas: [{ id: 'id', name: 'name' }],
            platforms: [{ id: 'id', name: 'name' }],
            prompt: 'prompt',
            prompt_type: 'prompt_type',
            regions: [{ id: 'id', name: 'name' }],
            tags: [{ id: 'id', name: 'name' }],
            topic: { id: 'id', name: 'name' },
          },
        ],
        dry_run: true,
      },
    );
  });
});

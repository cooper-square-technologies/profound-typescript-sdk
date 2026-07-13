// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Profound from '@profoundai/client';

const client = new Profound({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tasks', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.projects.tasks.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      title: 'x',
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
    const response = await client.projects.tasks.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      title: 'x',
      brief: 'x',
      impact: 1,
      position: 0,
      reference_label: 'x',
      reference_url: 'x',
      summary: 'x',
      topic: 'x',
      type: 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.projects.tasks.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
    const response = await client.projects.tasks.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.projects.tasks.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.projects.tasks.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      brief: 'x',
      impact: 1,
      reference_label: 'x',
      reference_url: 'x',
      summary: 'x',
      title: 'x',
      topic: 'x',
      type: 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.projects.tasks.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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
  test.skip('list: required and optional params', async () => {
    const response = await client.projects.tasks.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.projects.tasks.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
    const response = await client.projects.tasks.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Mock server tests are disabled
  test.skip('updateStatus: only required params', async () => {
    const responsePromise = client.projects.tasks.updateStatus('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      status: 'not_started',
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
  test.skip('updateStatus: required and optional params', async () => {
    const response = await client.projects.tasks.updateStatus('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      status: 'not_started',
      note: 'x',
    });
  });
});

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Profound from 'profoundai';

const client = new Profound({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource organizations', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.organizations.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('domains', async () => {
    const responsePromise = client.organizations.domains();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('domains: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.organizations.domains({ organization_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'] }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Profound.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getPersonas', async () => {
    const responsePromise = client.organizations.getPersonas();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getPersonas: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.organizations.getPersonas({ organization_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'] }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Profound.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listAssets', async () => {
    const responsePromise = client.organizations.listAssets();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listAssets: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.organizations.listAssets({ organization_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'] }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Profound.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('models', async () => {
    const responsePromise = client.organizations.models();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('regions', async () => {
    const responsePromise = client.organizations.regions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('regions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.organizations.regions({ organization_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'] }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Profound.NotFoundError);
  });
});

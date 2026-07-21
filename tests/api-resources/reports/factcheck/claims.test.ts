// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Profound from '@profoundai/client';

const client = new Profound({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource claims', () => {
  // Mock server tests are disabled
  test.skip('queryClaims: only required params', async () => {
    const responsePromise = client.reports.factcheck.claims.queryClaims({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: 'end_date',
      start_date: 'start_date',
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
  test.skip('queryClaims: required and optional params', async () => {
    const response = await client.reports.factcheck.claims.queryClaims({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: 'end_date',
      start_date: 'start_date',
      cursor: 'cursor',
      filter: {
        and: [],
        field: 'field',
        op: 'op',
        or: [],
        value: {},
      },
      group_by: ['model'],
      include: ['theme'],
      limit: 1,
      max_results: 1,
    });
  });

  // Mock server tests are disabled
  test.skip('streamClaims: only required params', async () => {
    const responsePromise = client.reports.factcheck.claims.streamClaims({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: 'end_date',
      start_date: 'start_date',
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
  test.skip('streamClaims: required and optional params', async () => {
    const response = await client.reports.factcheck.claims.streamClaims({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: 'end_date',
      start_date: 'start_date',
      cursor: 'cursor',
      filter: {
        and: [],
        field: 'field',
        op: 'op',
        or: [],
        value: {},
      },
      group_by: ['model'],
      include: ['theme'],
      limit: 1,
      max_results: 1,
    });
  });
});

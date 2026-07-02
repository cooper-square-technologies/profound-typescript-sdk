// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Profound from '@profoundai/client';

const client = new Profound({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource factcheck', () => {
  // Mock server tests are disabled
  test.skip('queryScores: only required params', async () => {
    const responsePromise = client.reports.factcheck.queryScores({
      category_id: 'category_id',
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
  test.skip('queryScores: required and optional params', async () => {
    const response = await client.reports.factcheck.queryScores({
      category_id: 'category_id',
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
      group_by: ['date'],
      limit: 1,
      max_results: 1,
    });
  });

  // Mock server tests are disabled
  test.skip('streamScores: only required params', async () => {
    const responsePromise = client.reports.factcheck.streamScores({
      category_id: 'category_id',
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
  test.skip('streamScores: required and optional params', async () => {
    const response = await client.reports.factcheck.streamScores({
      category_id: 'category_id',
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
      group_by: ['date'],
      limit: 1,
      max_results: 1,
    });
  });
});

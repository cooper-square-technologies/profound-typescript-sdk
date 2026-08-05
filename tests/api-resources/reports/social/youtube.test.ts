// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Profound from '@profoundai/client';

const client = new Profound({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource youtube', () => {
  // Mock server tests are disabled
  test.skip('getChannels: only required params', async () => {
    const responsePromise = client.reports.social.youtube.getChannels({
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
  test.skip('getChannels: required and optional params', async () => {
    const response = await client.reports.social.youtube.getChannels({
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
      group_by: ['channel'],
      interval: 'day',
      limit: 1,
      source_types: ['video'],
    });
  });

  // Mock server tests are disabled
  test.skip('getSummary: only required params', async () => {
    const responsePromise = client.reports.social.youtube.getSummary({
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
  test.skip('getSummary: required and optional params', async () => {
    const response = await client.reports.social.youtube.getSummary({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: 'end_date',
      start_date: 'start_date',
      filter: {
        and: [],
        field: 'field',
        op: 'op',
        or: [],
        value: {},
      },
    });
  });

  // Mock server tests are disabled
  test.skip('getVideos: only required params', async () => {
    const responsePromise = client.reports.social.youtube.getVideos({
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
  test.skip('getVideos: required and optional params', async () => {
    const response = await client.reports.social.youtube.getVideos({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: 'end_date',
      start_date: 'start_date',
      attribution: 'attributed',
      cursor: 'cursor',
      filter: {
        and: [],
        field: 'field',
        op: 'op',
        or: [],
        value: {},
      },
      limit: 1,
      source_types: ['video'],
    });
  });
});

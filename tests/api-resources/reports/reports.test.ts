// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Profound from '@profoundai/client';

const client = new Profound({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource reports', () => {
  // Mock server tests are disabled
  test.skip('citations: only required params', async () => {
    const responsePromise = client.reports.citations({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      metrics: ['count'],
      start_date: '2019-12-27T18:11:19.117Z',
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
  test.skip('citations: required and optional params', async () => {
    const response = await client.reports.citations({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      metrics: ['count'],
      start_date: '2019-12-27T18:11:19.117Z',
      date_interval: 'hour',
      dimensions: ['hostname'],
      filters: [
        {
          field: 'hostname',
          operator: 'is',
          value: 'string',
        },
      ],
      order_by: { date: 'asc' },
      pagination: { limit: 1, offset: 0 },
    });
  });

  // Mock server tests are disabled
  test.skip('getBotsReport: only required params', async () => {
    const responsePromise = client.reports.getBotsReport({
      domain: 'domain',
      metrics: ['count'],
      start_date: '2019-12-27T18:11:19.117Z',
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
  test.skip('getBotsReport: required and optional params', async () => {
    const response = await client.reports.getBotsReport({
      domain: 'domain',
      metrics: ['count'],
      start_date: '2019-12-27T18:11:19.117Z',
      date_interval: 'hour',
      dimensions: ['date'],
      end_date: '2019-12-27T18:11:19.117Z',
      filters: [
        {
          field: 'path',
          operator: 'is',
          value: 'string',
        },
      ],
      metric_filters: [
        {
          field: 'field',
          operator: '>',
          value: 0,
        },
      ],
      order_by: { date: 'asc' },
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      pagination: { limit: 1, offset: 0 },
    });
  });

  // Mock server tests are disabled
  test.skip('getBotsReportV2: only required params', async () => {
    const responsePromise = client.reports.getBotsReportV2({
      domain: 'domain',
      metrics: ['count'],
      start_date: '2019-12-27T18:11:19.117Z',
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
  test.skip('getBotsReportV2: required and optional params', async () => {
    const response = await client.reports.getBotsReportV2({
      domain: 'domain',
      metrics: ['count'],
      start_date: '2019-12-27T18:11:19.117Z',
      date_interval: 'hour',
      dimensions: ['date'],
      end_date: '2019-12-27T18:11:19.117Z',
      filters: [
        {
          field: 'path',
          operator: 'is',
          value: 'string',
        },
      ],
      metric_filters: [
        {
          field: 'field',
          operator: '>',
          value: 0,
        },
      ],
      order_by: { date: 'asc' },
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      pagination: { limit: 1, offset: 0 },
    });
  });

  // Mock server tests are disabled
  test.skip('getReferralsReport: only required params', async () => {
    const responsePromise = client.reports.getReferralsReport({
      domain: 'domain',
      metrics: ['visits'],
      start_date: '2019-12-27T18:11:19.117Z',
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
  test.skip('getReferralsReport: required and optional params', async () => {
    const response = await client.reports.getReferralsReport({
      domain: 'domain',
      metrics: ['visits'],
      start_date: '2019-12-27T18:11:19.117Z',
      date_interval: 'hour',
      dimensions: ['date'],
      end_date: '2019-12-27T18:11:19.117Z',
      filters: [
        {
          field: 'path',
          operator: 'is',
          value: 'string',
        },
      ],
      metric_filters: [
        {
          field: 'field',
          operator: '>',
          value: 0,
        },
      ],
      order_by: { date: 'asc' },
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      pagination: { limit: 1, offset: 0 },
    });
  });

  // Mock server tests are disabled
  test.skip('getReferralsReportV2: only required params', async () => {
    const responsePromise = client.reports.getReferralsReportV2({
      domain: 'domain',
      metrics: ['visits'],
      start_date: '2019-12-27T18:11:19.117Z',
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
  test.skip('getReferralsReportV2: required and optional params', async () => {
    const response = await client.reports.getReferralsReportV2({
      domain: 'domain',
      metrics: ['visits'],
      start_date: '2019-12-27T18:11:19.117Z',
      date_interval: 'hour',
      dimensions: ['date'],
      end_date: '2019-12-27T18:11:19.117Z',
      filters: [
        {
          field: 'path',
          operator: 'is',
          value: 'string',
        },
      ],
      metric_filters: [
        {
          field: 'field',
          operator: '>',
          value: 0,
        },
      ],
      order_by: { date: 'asc' },
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      pagination: { limit: 1, offset: 0 },
    });
  });

  // Mock server tests are disabled
  test.skip('queryCitations: only required params', async () => {
    const responsePromise = client.reports.queryCitations({
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
  test.skip('queryCitations: required and optional params', async () => {
    const response = await client.reports.queryCitations({
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
      group_by: ['page'],
      interval: 'day',
      limit: 1,
      max_results: 1,
      metrics: ['count'],
      scope: 'all',
    });
  });

  // Mock server tests are disabled
  test.skip('queryFanouts: only required params', async () => {
    const responsePromise = client.reports.queryFanouts({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      metrics: ['fanouts_per_execution'],
      start_date: '2019-12-27T18:11:19.117Z',
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
  test.skip('queryFanouts: required and optional params', async () => {
    const response = await client.reports.queryFanouts({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      metrics: ['fanouts_per_execution'],
      start_date: '2019-12-27T18:11:19.117Z',
      date_interval: 'hour',
      dimensions: ['prompt'],
      filters: [
        {
          field: 'region_id',
          operator: 'is',
          value: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
      ],
      order_by: { fanouts_per_execution: 'desc' },
      pagination: { limit: 1, offset: 0 },
    });
  });

  // Mock server tests are disabled
  test.skip('queryFanoutsV2: only required params', async () => {
    const responsePromise = client.reports.queryFanoutsV2({
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
  test.skip('queryFanoutsV2: required and optional params', async () => {
    const response = await client.reports.queryFanoutsV2({
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
      interval: 'day',
      limit: 1,
      max_results: 1,
      metrics: ['fanouts_per_execution'],
      sort: { field: 'field', dir: 'asc' },
    });
  });

  // Mock server tests are disabled
  test.skip('querySentiment: only required params', async () => {
    const responsePromise = client.reports.querySentiment({
      asset: 'asset',
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
  test.skip('querySentiment: required and optional params', async () => {
    const response = await client.reports.querySentiment({
      asset: 'asset',
      category_id: 'category_id',
      end_date: 'end_date',
      start_date: 'start_date',
      comparison_end_date: 'comparison_end_date',
      comparison_start_date: 'comparison_start_date',
      cursor: 'cursor',
      filter: {
        and: [],
        field: 'field',
        op: 'op',
        or: [],
        value: {},
      },
      group_by: ['date'],
      include_cited_websites: true,
      interval: 'day',
      limit: 1,
      max_results: 1,
      metrics: ['positive_sentiment'],
      sort: { dir: 'asc', field: 'occurrence' },
    });
  });

  // Mock server tests are disabled
  test.skip('querySentimentV2: only required params', async () => {
    const responsePromise = client.reports.querySentimentV2({
      asset_name: 'asset_name',
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      metrics: ['sentiment'],
      start_date: '2019-12-27T18:11:19.117Z',
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
  test.skip('querySentimentV2: required and optional params', async () => {
    const response = await client.reports.querySentimentV2({
      asset_name: 'asset_name',
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      metrics: ['sentiment'],
      start_date: '2019-12-27T18:11:19.117Z',
      comparison_end_date: '2019-12-27T18:11:19.117Z',
      comparison_start_date: '2019-12-27T18:11:19.117Z',
      date_interval: 'hour',
      dimensions: ['date'],
      filters: [
        {
          field: 'model_id',
          operator: 'is',
          value: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
      ],
      order_by: { occurrence: 'desc' },
      pagination: { limit: 1, offset: 0 },
    });
  });

  // Mock server tests are disabled
  test.skip('queryVisibility: only required params', async () => {
    const responsePromise = client.reports.queryVisibility({
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
  test.skip('queryVisibility: required and optional params', async () => {
    const response = await client.reports.queryVisibility({
      category_id: 'category_id',
      end_date: 'end_date',
      start_date: 'start_date',
      assets: 'string',
      cursor: 'cursor',
      filter: {
        and: [],
        field: 'field',
        op: 'op',
        or: [],
        value: {},
      },
      group_by: ['date'],
      interval: 'day',
      limit: 1,
      max_results: 1,
      metrics: ['visibility_score'],
      scope: 'owned',
      sort: { field: 'visibility_score' },
    });
  });

  // Mock server tests are disabled
  test.skip('sentiment: only required params', async () => {
    const responsePromise = client.reports.sentiment({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      metrics: ['positive'],
      start_date: '2019-12-27T18:11:19.117Z',
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
  test.skip('sentiment: required and optional params', async () => {
    const response = await client.reports.sentiment({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      metrics: ['positive'],
      start_date: '2019-12-27T18:11:19.117Z',
      date_interval: 'hour',
      dimensions: ['theme'],
      filters: [
        {
          field: 'asset_id',
          operator: 'is',
          value: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
      ],
      order_by: { date: 'asc' },
      pagination: { limit: 1, offset: 0 },
    });
  });

  // Mock server tests are disabled
  test.skip('streamCitations: only required params', async () => {
    const responsePromise = client.reports.streamCitations({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      metrics: ['count'],
      start_date: '2019-12-27T18:11:19.117Z',
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
  test.skip('streamCitations: required and optional params', async () => {
    const response = await client.reports.streamCitations({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      metrics: ['count'],
      start_date: '2019-12-27T18:11:19.117Z',
      date_interval: 'hour',
      dimensions: ['hostname'],
      filters: [
        {
          field: 'hostname',
          operator: 'is',
          value: 'string',
        },
      ],
      order_by: { date: 'asc' },
      pagination: { limit: 1, offset: 0 },
    });
  });

  // Mock server tests are disabled
  test.skip('streamCitationsV2: only required params', async () => {
    const responsePromise = client.reports.streamCitationsV2({
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
  test.skip('streamCitationsV2: required and optional params', async () => {
    const response = await client.reports.streamCitationsV2({
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
      group_by: ['page'],
      interval: 'day',
      limit: 1,
      max_results: 1,
      metrics: ['count'],
      scope: 'all',
    });
  });

  // Mock server tests are disabled
  test.skip('streamQueryFanouts: only required params', async () => {
    const responsePromise = client.reports.streamQueryFanouts({
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
  test.skip('streamQueryFanouts: required and optional params', async () => {
    const response = await client.reports.streamQueryFanouts({
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
      interval: 'day',
      limit: 1,
      max_results: 1,
      metrics: ['fanouts_per_execution'],
      sort: { field: 'field', dir: 'asc' },
    });
  });

  // Mock server tests are disabled
  test.skip('streamSentiment: only required params', async () => {
    const responsePromise = client.reports.streamSentiment({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      metrics: ['positive'],
      start_date: '2019-12-27T18:11:19.117Z',
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
  test.skip('streamSentiment: required and optional params', async () => {
    const response = await client.reports.streamSentiment({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      metrics: ['positive'],
      start_date: '2019-12-27T18:11:19.117Z',
      date_interval: 'hour',
      dimensions: ['theme'],
      filters: [
        {
          field: 'asset_id',
          operator: 'is',
          value: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
      ],
      order_by: { date: 'asc' },
      pagination: { limit: 1, offset: 0 },
    });
  });

  // Mock server tests are disabled
  test.skip('streamSentimentV2: only required params', async () => {
    const responsePromise = client.reports.streamSentimentV2({
      asset: 'asset',
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
  test.skip('streamSentimentV2: required and optional params', async () => {
    const response = await client.reports.streamSentimentV2({
      asset: 'asset',
      category_id: 'category_id',
      end_date: 'end_date',
      start_date: 'start_date',
      comparison_end_date: 'comparison_end_date',
      comparison_start_date: 'comparison_start_date',
      cursor: 'cursor',
      filter: {
        and: [],
        field: 'field',
        op: 'op',
        or: [],
        value: {},
      },
      group_by: ['date'],
      include_cited_websites: true,
      interval: 'day',
      limit: 1,
      max_results: 1,
      metrics: ['positive_sentiment'],
      sort: { dir: 'asc', field: 'occurrence' },
    });
  });

  // Mock server tests are disabled
  test.skip('streamVisibility: only required params', async () => {
    const responsePromise = client.reports.streamVisibility({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      metrics: ['share_of_voice'],
      start_date: '2019-12-27T18:11:19.117Z',
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
  test.skip('streamVisibility: required and optional params', async () => {
    const response = await client.reports.streamVisibility({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      metrics: ['share_of_voice'],
      start_date: '2019-12-27T18:11:19.117Z',
      date_interval: 'hour',
      dimensions: ['date'],
      filters: [
        {
          field: 'region_id',
          operator: 'is',
          value: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
      ],
      order_by: { date: 'asc' },
      pagination: { limit: 1, offset: 0 },
    });
  });

  // Mock server tests are disabled
  test.skip('streamVisibilityV2: only required params', async () => {
    const responsePromise = client.reports.streamVisibilityV2({
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
  test.skip('streamVisibilityV2: required and optional params', async () => {
    const response = await client.reports.streamVisibilityV2({
      category_id: 'category_id',
      end_date: 'end_date',
      start_date: 'start_date',
      assets: 'string',
      cursor: 'cursor',
      filter: {
        and: [],
        field: 'field',
        op: 'op',
        or: [],
        value: {},
      },
      group_by: ['date'],
      interval: 'day',
      limit: 1,
      max_results: 1,
      metrics: ['visibility_score'],
      scope: 'owned',
      sort: { field: 'visibility_score' },
    });
  });

  // Mock server tests are disabled
  test.skip('visibility: only required params', async () => {
    const responsePromise = client.reports.visibility({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      metrics: ['share_of_voice'],
      start_date: '2019-12-27T18:11:19.117Z',
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
  test.skip('visibility: required and optional params', async () => {
    const response = await client.reports.visibility({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: '2019-12-27T18:11:19.117Z',
      metrics: ['share_of_voice'],
      start_date: '2019-12-27T18:11:19.117Z',
      date_interval: 'hour',
      dimensions: ['date'],
      filters: [
        {
          field: 'region_id',
          operator: 'is',
          value: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
      ],
      order_by: { date: 'asc' },
      pagination: { limit: 1, offset: 0 },
    });
  });
});

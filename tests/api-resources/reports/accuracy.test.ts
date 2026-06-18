// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Profound from '@profoundai/client';

const client = new Profound({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accuracy', () => {
  // Mock server tests are disabled
  test.skip('createBreakdown: only required params', async () => {
    const responsePromise = client.reports.accuracy.createBreakdown({
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
  test.skip('createBreakdown: required and optional params', async () => {
    const response = await client.reports.accuracy.createBreakdown({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: 'end_date',
      start_date: 'start_date',
      breakdown_by: 'citation',
      citation_categories: ['string'],
      comparison_end_date: 'comparison_end_date',
      comparison_start_date: 'comparison_start_date',
      exclude_topic_ids: true,
      include_no_persona: true,
      include_no_tag: true,
      limit: 1,
      offset: 0,
      persona_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      platform_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      prompt_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      region_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      search_query: 'search_query',
      sort_by: 'citationShare',
      sort_order: 'asc',
      tag_filter_type: 'all',
      tag_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      topic_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
    });
  });

  // Mock server tests are disabled
  test.skip('createCitationAnalysis: only required params', async () => {
    const responsePromise = client.reports.accuracy.createCitationAnalysis({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      clean_href: 'clean_href',
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
  test.skip('createCitationAnalysis: required and optional params', async () => {
    const response = await client.reports.accuracy.createCitationAnalysis({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      clean_href: 'clean_href',
      end_date: 'end_date',
      start_date: 'start_date',
    });
  });

  // Mock server tests are disabled
  test.skip('createClaimBreakdown: only required params', async () => {
    const responsePromise = client.reports.accuracy.createClaimBreakdown({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      cluster_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('createClaimBreakdown: required and optional params', async () => {
    const response = await client.reports.accuracy.createClaimBreakdown({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      cluster_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: 'end_date',
      start_date: 'start_date',
      citation_categories: ['string'],
      comparison_end_date: 'comparison_end_date',
      comparison_start_date: 'comparison_start_date',
      exclude_topic_ids: true,
      include_no_persona: true,
      include_no_tag: true,
      persona_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      platform_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      prompt_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      region_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      tag_filter_type: 'all',
      tag_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      topic_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
    });
  });

  // Mock server tests are disabled
  test.skip('createClaimCitations: only required params', async () => {
    const responsePromise = client.reports.accuracy.createClaimCitations({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      cluster_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('createClaimCitations: required and optional params', async () => {
    const response = await client.reports.accuracy.createClaimCitations({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      cluster_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: 'end_date',
      start_date: 'start_date',
      citation_categories: ['string'],
      comparison_end_date: 'comparison_end_date',
      comparison_start_date: 'comparison_start_date',
      exclude_topic_ids: true,
      include_no_persona: true,
      include_no_tag: true,
      limit: 1,
      offset: 0,
      persona_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      platform_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      prompt_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      region_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      search_query: 'search_query',
      sort_order: 'asc',
      tag_filter_type: 'all',
      tag_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      topic_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
    });
  });

  // Mock server tests are disabled
  test.skip('createClusterExampleRuns: only required params', async () => {
    const responsePromise = client.reports.accuracy.createClusterExampleRuns({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      cluster_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('createClusterExampleRuns: required and optional params', async () => {
    const response = await client.reports.accuracy.createClusterExampleRuns({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      cluster_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: 'end_date',
      start_date: 'start_date',
      limit: 1,
      offset: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('createClusterVerificationPairs: only required params', async () => {
    const responsePromise = client.reports.accuracy.createClusterVerificationPairs({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      cluster_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('createClusterVerificationPairs: required and optional params', async () => {
    const response = await client.reports.accuracy.createClusterVerificationPairs({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      cluster_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Mock server tests are disabled
  test.skip('createFactcheckSetupStatus: only required params', async () => {
    const responsePromise = client.reports.accuracy.createFactcheckSetupStatus({
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
  test.skip('createFactcheckSetupStatus: required and optional params', async () => {
    const response = await client.reports.accuracy.createFactcheckSetupStatus({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Mock server tests are disabled
  test.skip('createInaccuracyDrivers: only required params', async () => {
    const responsePromise = client.reports.accuracy.createInaccuracyDrivers({
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
  test.skip('createInaccuracyDrivers: required and optional params', async () => {
    const response = await client.reports.accuracy.createInaccuracyDrivers({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: 'end_date',
      start_date: 'start_date',
      citation_categories: ['string'],
      comparison_end_date: 'comparison_end_date',
      comparison_start_date: 'comparison_start_date',
      exclude_topic_ids: true,
      include_no_persona: true,
      include_no_tag: true,
      limit: 1,
      persona_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      platform_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      prompt_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      region_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      tag_filter_type: 'all',
      tag_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      topic_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
    });
  });

  // Mock server tests are disabled
  test.skip('createInaccurateClusters: only required params', async () => {
    const responsePromise = client.reports.accuracy.createInaccurateClusters({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: 'end_date',
      start_date: 'start_date',
      theme_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('createInaccurateClusters: required and optional params', async () => {
    const response = await client.reports.accuracy.createInaccurateClusters({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: 'end_date',
      start_date: 'start_date',
      theme_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      citation_categories: ['string'],
      comparison_end_date: 'comparison_end_date',
      comparison_start_date: 'comparison_start_date',
      exclude_topic_ids: true,
      include_no_persona: true,
      include_no_tag: true,
      limit: 1,
      offset: 0,
      persona_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      platform_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      prompt_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      region_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      search_query: 'search_query',
      tag_filter_type: 'all',
      tag_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      topic_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
    });
  });

  // Mock server tests are disabled
  test.skip('createInaccurateThemes: only required params', async () => {
    const responsePromise = client.reports.accuracy.createInaccurateThemes({
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
  test.skip('createInaccurateThemes: required and optional params', async () => {
    const response = await client.reports.accuracy.createInaccurateThemes({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: 'end_date',
      start_date: 'start_date',
      citation_categories: ['string'],
      comparison_end_date: 'comparison_end_date',
      comparison_start_date: 'comparison_start_date',
      exclude_topic_ids: true,
      include_no_persona: true,
      include_no_tag: true,
      limit: 1,
      offset: 0,
      persona_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      platform_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      prompt_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      region_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      search_query: 'search_query',
      sort_by: 'response_share',
      sort_order: 'asc',
      tag_filter_type: 'all',
      tag_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      topic_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
    });
  });

  // Mock server tests are disabled
  test.skip('createOverview: only required params', async () => {
    const responsePromise = client.reports.accuracy.createOverview({
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
  test.skip('createOverview: required and optional params', async () => {
    const response = await client.reports.accuracy.createOverview({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: 'end_date',
      start_date: 'start_date',
      citation_categories: ['string'],
      comparison_end_date: 'comparison_end_date',
      comparison_start_date: 'comparison_start_date',
      date_bucket: 'date_bucket',
      exclude_topic_ids: true,
      group_by: 'period',
      include_no_persona: true,
      include_no_tag: true,
      persona_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      platform_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      prompt_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      region_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      tag_filter_type: 'all',
      tag_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      topic_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
    });
  });

  // Mock server tests are disabled
  test.skip('createTopInaccurateClaims: only required params', async () => {
    const responsePromise = client.reports.accuracy.createTopInaccurateClaims({
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
  test.skip('createTopInaccurateClaims: required and optional params', async () => {
    const response = await client.reports.accuracy.createTopInaccurateClaims({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: 'end_date',
      start_date: 'start_date',
      citation_categories: ['string'],
      comparison_end_date: 'comparison_end_date',
      comparison_start_date: 'comparison_start_date',
      exclude_topic_ids: true,
      include_no_persona: true,
      include_no_tag: true,
      limit: 1,
      persona_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      platform_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      prompt_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      region_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      tag_filter_type: 'all',
      tag_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      topic_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
    });
  });

  // Mock server tests are disabled
  test.skip('createTopicIDs: only required params', async () => {
    const responsePromise = client.reports.accuracy.createTopicIDs({
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
  test.skip('createTopicIDs: required and optional params', async () => {
    const response = await client.reports.accuracy.createTopicIDs({
      category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      end_date: 'end_date',
      start_date: 'start_date',
    });
  });
});

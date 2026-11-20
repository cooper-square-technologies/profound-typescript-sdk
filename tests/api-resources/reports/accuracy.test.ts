// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource accuracy', () => {
  smokeCase(
    'reports.accuracy.createOverview:required',
    { operation: 'createOverview', path: '/v1/reports/accuracy/overview' },
    'createOverview: only required params',
    async () => {
      const accuracy = await client.reports.accuracy.createOverview({
        citation_category_taxonomy: 'legacy',
        start_date: '',
        end_date: '',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        exclude_topic_ids: false,
        tag_filter_type: 'any',
        include_no_tag: true,
        include_no_persona: true,
        group_by: 'period',
      });
    },
  );
  smokeCase(
    'reports.accuracy.createOverview:all',
    { operation: 'createOverview', path: '/v1/reports/accuracy/overview' },
    'createOverview: required and optional params',
    async () => {
      const accuracy = await client.reports.accuracy.createOverview({
        citation_categories: [''],
        citation_category_taxonomy: 'legacy',
        citation_category_pairs: [[{}, {}]],
        start_date: '',
        end_date: '',
        comparison_start_date: '',
        comparison_end_date: '',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        languages: [''],
        topic_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        exclude_topic_ids: false,
        tag_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        tag_filter_type: 'any',
        include_no_tag: true,
        region_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        platform_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        persona_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        include_no_persona: true,
        prompt_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        date_bucket: '',
        group_by: 'period',
      });
    },
  );
  smokeCase(
    'reports.accuracy.createBreakdown:required',
    { operation: 'createBreakdown', path: '/v1/reports/accuracy/breakdown' },
    'createBreakdown: only required params',
    async () => {
      const accuracy = await client.reports.accuracy.createBreakdown({
        citation_category_taxonomy: 'legacy',
        start_date: '',
        end_date: '',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        exclude_topic_ids: false,
        tag_filter_type: 'any',
        include_no_tag: true,
        include_no_persona: true,
        breakdown_by: 'citation',
        limit: 10,
        offset: 0,
        sort_by: 'citationShare',
        sort_order: 'desc',
      });
    },
  );
  smokeCase(
    'reports.accuracy.createBreakdown:all',
    { operation: 'createBreakdown', path: '/v1/reports/accuracy/breakdown' },
    'createBreakdown: required and optional params',
    async () => {
      const accuracy = await client.reports.accuracy.createBreakdown({
        citation_categories: [''],
        citation_category_taxonomy: 'legacy',
        citation_category_pairs: [[{}, {}]],
        start_date: '',
        end_date: '',
        comparison_start_date: '',
        comparison_end_date: '',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        languages: [''],
        topic_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        exclude_topic_ids: false,
        tag_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        tag_filter_type: 'any',
        include_no_tag: true,
        region_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        platform_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        persona_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        include_no_persona: true,
        prompt_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        breakdown_by: 'citation',
        group_by: ['platform'],
        date_bucket: '',
        limit: 10,
        offset: 0,
        search_query: '',
        sort_by: 'citationShare',
        sort_order: 'desc',
        pagination: {
          dimension: 'group',
          metric: 'accuracy',
          mode: 'current',
        },
      });
    },
  );
  smokeCase(
    'reports.accuracy.createCitationAnalysis:single',
    { operation: 'createCitationAnalysis', path: '/v1/reports/accuracy/citation-analysis' },
    'createCitationAnalysis',
    async () => {
      const accuracy = await client.reports.accuracy.createCitationAnalysis({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        clean_href: 'x',
        start_date: '',
        end_date: '',
      });
    },
  );
  smokeCase(
    'reports.accuracy.createTopicIds:single',
    { operation: 'createTopicIds', path: '/v1/reports/accuracy/topic-ids' },
    'createTopicIds',
    async () => {
      const accuracy = await client.reports.accuracy.createTopicIDs({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
      });
    },
  );
  smokeCase(
    'reports.accuracy.createInaccurateThemes:required',
    { operation: 'createInaccurateThemes', path: '/v1/reports/accuracy/inaccurate-themes' },
    'createInaccurateThemes: only required params',
    async () => {
      const accuracy = await client.reports.accuracy.createInaccurateThemes({
        citation_category_taxonomy: 'legacy',
        start_date: '',
        end_date: '',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        exclude_topic_ids: false,
        tag_filter_type: 'any',
        include_no_tag: true,
        include_no_persona: true,
        verification_status: 'inaccurate',
        limit: 10,
        offset: 0,
        sort_by: 'response_share',
        sort_order: 'desc',
      });
    },
  );
  smokeCase(
    'reports.accuracy.createInaccurateThemes:all',
    { operation: 'createInaccurateThemes', path: '/v1/reports/accuracy/inaccurate-themes' },
    'createInaccurateThemes: required and optional params',
    async () => {
      const accuracy = await client.reports.accuracy.createInaccurateThemes({
        citation_categories: [''],
        citation_category_taxonomy: 'legacy',
        citation_category_pairs: [[{}, {}]],
        start_date: '',
        end_date: '',
        comparison_start_date: '',
        comparison_end_date: '',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        languages: [''],
        topic_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        exclude_topic_ids: false,
        tag_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        tag_filter_type: 'any',
        include_no_tag: true,
        region_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        platform_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        persona_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        include_no_persona: true,
        prompt_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        verification_status: 'inaccurate',
        limit: 10,
        offset: 0,
        sort_by: 'response_share',
        sort_order: 'desc',
        search_query: '',
      });
    },
  );
  smokeCase(
    'reports.accuracy.createInaccurateClusters:required',
    { operation: 'createInaccurateClusters', path: '/v1/reports/accuracy/inaccurate-clusters' },
    'createInaccurateClusters: only required params',
    async () => {
      const accuracy = await client.reports.accuracy.createInaccurateClusters({
        citation_category_taxonomy: 'legacy',
        start_date: '',
        end_date: '',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        exclude_topic_ids: false,
        tag_filter_type: 'any',
        include_no_tag: true,
        include_no_persona: true,
        verification_status: 'inaccurate',
        limit: 5000,
        offset: 0,
        include_models: false,
        include_citations: true,
        include_citation_hostnames: true,
      });
    },
  );
  smokeCase(
    'reports.accuracy.createInaccurateClusters:all',
    { operation: 'createInaccurateClusters', path: '/v1/reports/accuracy/inaccurate-clusters' },
    'createInaccurateClusters: required and optional params',
    async () => {
      const accuracy = await client.reports.accuracy.createInaccurateClusters({
        citation_categories: [''],
        citation_category_taxonomy: 'legacy',
        citation_category_pairs: [[{}, {}]],
        start_date: '',
        end_date: '',
        comparison_start_date: '',
        comparison_end_date: '',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        languages: [''],
        topic_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        exclude_topic_ids: false,
        tag_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        tag_filter_type: 'any',
        include_no_tag: true,
        region_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        platform_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        persona_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        include_no_persona: true,
        prompt_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        verification_status: 'inaccurate',
        theme_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 5000,
        offset: 0,
        search_query: '',
        include_models: false,
        include_citations: true,
        include_citation_hostnames: true,
      });
    },
  );
  smokeCase(
    'reports.accuracy.createInaccuracyDrivers:required',
    { operation: 'createInaccuracyDrivers', path: '/v1/reports/accuracy/inaccuracy-drivers' },
    'createInaccuracyDrivers: only required params',
    async () => {
      const accuracy = await client.reports.accuracy.createInaccuracyDrivers({
        citation_category_taxonomy: 'legacy',
        start_date: '',
        end_date: '',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        exclude_topic_ids: false,
        tag_filter_type: 'any',
        include_no_tag: true,
        include_no_persona: true,
        limit: 5,
      });
    },
  );
  smokeCase(
    'reports.accuracy.createInaccuracyDrivers:all',
    { operation: 'createInaccuracyDrivers', path: '/v1/reports/accuracy/inaccuracy-drivers' },
    'createInaccuracyDrivers: required and optional params',
    async () => {
      const accuracy = await client.reports.accuracy.createInaccuracyDrivers({
        citation_categories: [''],
        citation_category_taxonomy: 'legacy',
        citation_category_pairs: [[{}, {}]],
        start_date: '',
        end_date: '',
        comparison_start_date: '',
        comparison_end_date: '',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        languages: [''],
        topic_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        exclude_topic_ids: false,
        tag_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        tag_filter_type: 'any',
        include_no_tag: true,
        region_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        platform_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        persona_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        include_no_persona: true,
        prompt_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        limit: 5,
      });
    },
  );
  smokeCase(
    'reports.accuracy.createTopInaccurateClaims:required',
    { operation: 'createTopInaccurateClaims', path: '/v1/reports/accuracy/top-inaccurate-claims' },
    'createTopInaccurateClaims: only required params',
    async () => {
      const accuracy = await client.reports.accuracy.createTopInaccurateClaims({
        citation_category_taxonomy: 'legacy',
        start_date: '',
        end_date: '',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        exclude_topic_ids: false,
        tag_filter_type: 'any',
        include_no_tag: true,
        include_no_persona: true,
        limit: 5,
      });
    },
  );
  smokeCase(
    'reports.accuracy.createTopInaccurateClaims:all',
    { operation: 'createTopInaccurateClaims', path: '/v1/reports/accuracy/top-inaccurate-claims' },
    'createTopInaccurateClaims: required and optional params',
    async () => {
      const accuracy = await client.reports.accuracy.createTopInaccurateClaims({
        citation_categories: [''],
        citation_category_taxonomy: 'legacy',
        citation_category_pairs: [[{}, {}]],
        start_date: '',
        end_date: '',
        comparison_start_date: '',
        comparison_end_date: '',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        languages: [''],
        topic_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        exclude_topic_ids: false,
        tag_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        tag_filter_type: 'any',
        include_no_tag: true,
        region_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        platform_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        persona_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        include_no_persona: true,
        prompt_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        limit: 5,
      });
    },
  );
  smokeCase(
    'reports.accuracy.createClaimBreakdown:required',
    { operation: 'createClaimBreakdown', path: '/v1/reports/accuracy/claim-breakdown' },
    'createClaimBreakdown: only required params',
    async () => {
      const accuracy = await client.reports.accuracy.createClaimBreakdown({
        citation_category_taxonomy: 'legacy',
        start_date: '',
        end_date: '',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        exclude_topic_ids: false,
        tag_filter_type: 'any',
        include_no_tag: true,
        include_no_persona: true,
        cluster_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        verification_status: 'inaccurate',
      });
    },
  );
  smokeCase(
    'reports.accuracy.createClaimBreakdown:all',
    { operation: 'createClaimBreakdown', path: '/v1/reports/accuracy/claim-breakdown' },
    'createClaimBreakdown: required and optional params',
    async () => {
      const accuracy = await client.reports.accuracy.createClaimBreakdown({
        citation_categories: [''],
        citation_category_taxonomy: 'legacy',
        citation_category_pairs: [[{}, {}]],
        start_date: '',
        end_date: '',
        comparison_start_date: '',
        comparison_end_date: '',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        languages: [''],
        topic_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        exclude_topic_ids: false,
        tag_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        tag_filter_type: 'any',
        include_no_tag: true,
        region_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        platform_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        persona_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        include_no_persona: true,
        prompt_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        cluster_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        verification_status: 'inaccurate',
      });
    },
  );
  smokeCase(
    'reports.accuracy.createClaimCitations:required',
    { operation: 'createClaimCitations', path: '/v1/reports/accuracy/claim-citations' },
    'createClaimCitations: only required params',
    async () => {
      const accuracy = await client.reports.accuracy.createClaimCitations({
        citation_category_taxonomy: 'legacy',
        start_date: '',
        end_date: '',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        exclude_topic_ids: false,
        tag_filter_type: 'any',
        include_no_tag: true,
        include_no_persona: true,
        cluster_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 10,
        offset: 0,
        sort_order: 'desc',
      });
    },
  );
  smokeCase(
    'reports.accuracy.createClaimCitations:all',
    { operation: 'createClaimCitations', path: '/v1/reports/accuracy/claim-citations' },
    'createClaimCitations: required and optional params',
    async () => {
      const accuracy = await client.reports.accuracy.createClaimCitations({
        citation_categories: [''],
        citation_category_taxonomy: 'legacy',
        citation_category_pairs: [[{}, {}]],
        start_date: '',
        end_date: '',
        comparison_start_date: '',
        comparison_end_date: '',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        languages: [''],
        topic_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        exclude_topic_ids: false,
        tag_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        tag_filter_type: 'any',
        include_no_tag: true,
        region_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        platform_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        persona_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        include_no_persona: true,
        prompt_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        cluster_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 10,
        offset: 0,
        search_query: '',
        sort_order: 'desc',
      });
    },
  );
  smokeCase(
    'reports.accuracy.createClusterExampleRuns:required',
    { operation: 'createClusterExampleRuns', path: '/v1/reports/accuracy/cluster-example-runs' },
    'createClusterExampleRuns: only required params',
    async () => {
      const accuracy = await client.reports.accuracy.createClusterExampleRuns({
        citation_category_taxonomy: 'legacy',
        start_date: '',
        end_date: '',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        exclude_topic_ids: false,
        tag_filter_type: 'any',
        include_no_tag: true,
        include_no_persona: true,
        cluster_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 20,
        offset: 0,
      });
    },
  );
  smokeCase(
    'reports.accuracy.createClusterExampleRuns:all',
    { operation: 'createClusterExampleRuns', path: '/v1/reports/accuracy/cluster-example-runs' },
    'createClusterExampleRuns: required and optional params',
    async () => {
      const accuracy = await client.reports.accuracy.createClusterExampleRuns({
        citation_categories: [''],
        citation_category_taxonomy: 'legacy',
        citation_category_pairs: [[{}, {}]],
        start_date: '',
        end_date: '',
        comparison_start_date: '',
        comparison_end_date: '',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        languages: [''],
        topic_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        exclude_topic_ids: false,
        tag_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        tag_filter_type: 'any',
        include_no_tag: true,
        region_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        platform_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        persona_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        include_no_persona: true,
        prompt_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        cluster_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 20,
        offset: 0,
      });
    },
  );
  smokeCase(
    'reports.accuracy.createClusterVerificationPairs:single',
    { operation: 'createClusterVerificationPairs', path: '/v1/reports/accuracy/cluster-verification-pairs' },
    'createClusterVerificationPairs',
    async () => {
      const accuracy = await client.reports.accuracy.createClusterVerificationPairs({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        cluster_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  );
  smokeCase(
    'reports.accuracy.createFactcheckSetupStatus:single',
    { operation: 'createFactcheckSetupStatus', path: '/v1/reports/accuracy/factcheck-setup-status' },
    'createFactcheckSetupStatus',
    async () => {
      const accuracy = await client.reports.accuracy.createFactcheckSetupStatus({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  );
});

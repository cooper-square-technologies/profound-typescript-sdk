// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke test: calls every generated operation once to confirm the SDK can reach each endpoint.
// Run it from this repo with `bun tests/smoke-test.ts`. Each case below calls one SDK method
// exactly the way the SDK exposes it (positional params, request body, pagination, streaming).
//
// Two environment variables tune a run:
//   - SCALAR_SMOKE_FILTER: comma-separated needles; only operations whose name or path contains
//     one of them run, so you can smoke-test a subset without editing this file.
//   - SCALAR_SMOKE_REPORT: a file path; when set, the run writes a JSON report there instead of
//     printing a table. The generator uses this to collect per-operation results.
import { writeFileSync } from 'node:fs';

// The package exports the client class. The client reads auth and the base URL from the
// environment, so it needs no constructor options to point at a server.
import Profound from '@profoundai/client';

// One shared client runs every case.
const client = new Profound();

// The result of running one case, collected for the JSON report or the printed table.
type SmokeResult = {
  operation: string;
  method: string;
  path: string;
  status: 'passed' | 'failed';
  durationMs: number;
  error?: string;
};

// One entry per generated operation. `run` performs the real SDK call; the other fields are
// metadata used for filtering and reporting. This list is generated, so it stays in sync with
// the SDK surface.
const cases: { operation: string; method: string; path: string; run: () => Promise<unknown> }[] = [
  {
    operation: 'regions',
    method: 'GET',
    path: '/v1/org/regions',
    run: async () => {
      const organization = await client.organizations.regions();
    },
  },

  {
    operation: 'models',
    method: 'GET',
    path: '/v1/org/models',
    run: async () => {
      const organization = await client.organizations.models();
    },
  },

  {
    operation: 'domains',
    method: 'GET',
    path: '/v1/org/domains',
    run: async () => {
      const organization = await client.organizations.domains();
    },
  },

  {
    operation: 'listAssets',
    method: 'GET',
    path: '/v1/org/assets',
    run: async () => {
      const organization = await client.organizations.listAssets();
    },
  },

  {
    operation: 'getPersonas',
    method: 'GET',
    path: '/v1/org/personas',
    run: async () => {
      const organization = await client.organizations.getPersonas();
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/org',
    run: async () => {
      const organization = await client.organizations.list();
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/org/categories',
    run: async () => {
      const category = await client.organizations.categories.list();
    },
  },

  {
    operation: 'topics',
    method: 'GET',
    path: '/v1/org/categories/{category_id}/topics',
    run: async () => {
      const category = await client.organizations.categories.topics('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'tags',
    method: 'GET',
    path: '/v1/org/categories/{category_id}/tags',
    run: async () => {
      const category = await client.organizations.categories.tags('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'prompts',
    method: 'GET',
    path: '/v1/org/categories/{category_id}/prompts',
    run: async () => {
      const category = await client.organizations.categories.prompts('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        limit: 10000,
        status: ['active'],
      });
    },
  },

  {
    operation: 'assets',
    method: 'GET',
    path: '/v1/org/categories/{category_id}/assets',
    run: async () => {
      const category = await client.organizations.categories.assets('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'getCategoryPersonas',
    method: 'GET',
    path: '/v1/org/categories/{category_id}/personas',
    run: async () => {
      const category = await client.organizations.categories.getCategoryPersonas(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      );
    },
  },

  {
    operation: 'createPrompts',
    method: 'POST',
    path: '/v1/org/categories/{category_id}/prompts',
    run: async () => {
      const category = await client.organizations.categories.createPrompts(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          prompts: [],
          dry_run: false,
        },
      );
    },
  },

  {
    operation: 'updatePrompts',
    method: 'PATCH',
    path: '/v1/org/categories/{category_id}/prompts',
    run: async () => {
      const category = await client.organizations.categories.updatePrompts(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          prompts: [],
          dry_run: false,
        },
      );
    },
  },

  {
    operation: 'updatePromptStatus',
    method: 'PATCH',
    path: '/v1/org/categories/{category_id}/prompts/status',
    run: async () => {
      const category = await client.organizations.categories.updatePromptStatus(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          prompt_ids: [],
          status: 'active',
          dry_run: false,
        },
      );
    },
  },

  {
    operation: 'retrieveRegions',
    method: 'GET',
    path: '/v1/org/categories/{category_id}/regions',
    run: async () => {
      const category = await client.organizations.categories.retrieveRegions(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      );
    },
  },

  {
    operation: 'getCitationCategories',
    method: 'GET',
    path: '/v1/org/categories/{category_id}/citation-categories',
    run: async () => {
      const category = await client.organizations.categories.getCitationCategories(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      );
    },
  },

  {
    operation: 'answers',
    method: 'POST',
    path: '/v1/prompts/answers',
    run: async () => {
      const prompt = await client.prompts.answers({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
      });
    },
  },

  {
    operation: 'answersV2',
    method: 'POST',
    path: '/v2/prompts/answers',
    run: async () => {
      const prompt = await client.prompts.answersV2({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
      });
    },
  },

  {
    operation: 'streamAnswersV2',
    method: 'POST',
    path: '/v2/prompts/answers/stream',
    run: async () => {
      const stream = await client.prompts.streamAnswersV2({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
      });

      for await (const event of stream) {
        console.log(event);
      }
    },
  },

  {
    operation: 'citations',
    method: 'POST',
    path: '/v1/reports/citations',
    run: async () => {
      const report = await client.reports.citations({
        date_interval: 'day',
        dimensions: [],
        metrics: [],
        order_by: {},
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
      });
    },
  },

  {
    operation: 'visibility',
    method: 'POST',
    path: '/v1/reports/visibility',
    run: async () => {
      const report = await client.reports.visibility({
        date_interval: 'day',
        dimensions: [],
        metrics: [],
        order_by: {},
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
      });
    },
  },

  {
    operation: 'sentiment',
    method: 'POST',
    path: '/v1/reports/sentiment',
    run: async () => {
      const report = await client.reports.sentiment({
        date_interval: 'day',
        dimensions: [],
        metrics: [],
        order_by: {},
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
      });
    },
  },

  {
    operation: 'sentimentV2',
    method: 'POST',
    path: '/v1/reports/sentiment-v2',
    run: async () => {
      const report = await client.reports.sentimentV2({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        asset_name: '',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
        date_bucket: 'day',
        metrics: [],
      });
    },
  },

  {
    operation: 'getReferralsReport',
    method: 'POST',
    path: '/v1/reports/referrals',
    run: async () => {
      const report = await client.reports.getReferralsReport({
        date_interval: 'day',
        dimensions: [],
        metrics: [],
        order_by: {},
        domain: '',
        start_date: '2024-01-01T00:00:00.000Z',
      });
    },
  },

  {
    operation: 'getBotsReport',
    method: 'POST',
    path: '/v1/reports/bots',
    run: async () => {
      const report = await client.reports.getBotsReport({
        date_interval: 'day',
        dimensions: [],
        metrics: [],
        order_by: {},
        domain: '',
        start_date: '2024-01-01T00:00:00.000Z',
      });
    },
  },

  {
    operation: 'queryFanouts',
    method: 'POST',
    path: '/v1/reports/query-fanouts',
    run: async () => {
      const report = await client.reports.queryFanouts({
        date_interval: 'day',
        dimensions: [],
        metrics: [],
        order_by: {},
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
      });
    },
  },

  {
    operation: 'streamCitations',
    method: 'POST',
    path: '/v1/reports/citations/stream',
    run: async () => {
      const stream = await client.reports.streamCitations({
        date_interval: 'day',
        dimensions: [],
        metrics: [],
        order_by: {},
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
      });

      for await (const event of stream) {
        console.log(event);
      }
    },
  },

  {
    operation: 'streamVisibility',
    method: 'POST',
    path: '/v1/reports/visibility/stream',
    run: async () => {
      const stream = await client.reports.streamVisibility({
        date_interval: 'day',
        dimensions: [],
        metrics: [],
        order_by: {},
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
      });

      for await (const event of stream) {
        console.log(event);
      }
    },
  },

  {
    operation: 'streamSentiment',
    method: 'POST',
    path: '/v1/reports/sentiment/stream',
    run: async () => {
      const stream = await client.reports.streamSentiment({
        date_interval: 'day',
        dimensions: [],
        metrics: [],
        order_by: {},
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
      });

      for await (const event of stream) {
        console.log(event);
      }
    },
  },

  {
    operation: 'streamCitationsV2',
    method: 'POST',
    path: '/v2/reports/citations/stream',
    run: async () => {
      const stream = await client.reports.streamCitationsV2({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        entity: 'domain',
        interval: 'day',
        scope: 'all',
      });

      for await (const event of stream) {
        console.log(event);
      }
    },
  },

  {
    operation: 'streamVisibilityV2',
    method: 'POST',
    path: '/v2/reports/visibility/stream',
    run: async () => {
      const stream = await client.reports.streamVisibilityV2({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        interval: 'day',
        scope: 'owned',
      });

      for await (const event of stream) {
        console.log(event);
      }
    },
  },

  {
    operation: 'streamSentimentV2',
    method: 'POST',
    path: '/v2/reports/sentiment/stream',
    run: async () => {
      const stream = await client.reports.streamSentimentV2({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        asset: '',
        start_date: '',
        end_date: '',
        interval: 'day',
        include_cited_websites: false,
      });

      for await (const event of stream) {
        console.log(event);
      }
    },
  },

  {
    operation: 'streamQueryFanouts',
    method: 'POST',
    path: '/v2/reports/query-fanouts/stream',
    run: async () => {
      const stream = await client.reports.streamQueryFanouts({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        interval: 'day',
      });

      for await (const event of stream) {
        console.log(event);
      }
    },
  },

  {
    operation: 'getReferralsReportV2',
    method: 'POST',
    path: '/v2/reports/referrals',
    run: async () => {
      const report = await client.reports.getReferralsReportV2({
        date_interval: 'day',
        dimensions: [],
        metrics: [],
        order_by: {},
        domain: '',
        start_date: '2024-01-01T00:00:00.000Z',
        timezone: 'UTC',
      });
    },
  },

  {
    operation: 'getBotsReportV2',
    method: 'POST',
    path: '/v2/reports/bots',
    run: async () => {
      const report = await client.reports.getBotsReportV2({
        date_interval: 'day',
        dimensions: [],
        metrics: [],
        order_by: {},
        domain: '',
        start_date: '2024-01-01T00:00:00.000Z',
        timezone: 'UTC',
      });
    },
  },

  {
    operation: 'queryVisibility',
    method: 'POST',
    path: '/v2/reports/visibility',
    run: async () => {
      const report = await client.reports.queryVisibility({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        interval: 'day',
        scope: 'owned',
      });
    },
  },

  {
    operation: 'queryCitations',
    method: 'POST',
    path: '/v2/reports/citations',
    run: async () => {
      const report = await client.reports.queryCitations({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        entity: 'domain',
        interval: 'day',
        scope: 'all',
      });
    },
  },

  {
    operation: 'querySentiment',
    method: 'POST',
    path: '/v2/reports/sentiment',
    run: async () => {
      const report = await client.reports.querySentiment({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        asset: '',
        start_date: '',
        end_date: '',
        interval: 'day',
        include_cited_websites: false,
      });
    },
  },

  {
    operation: 'queryQueryFanouts',
    method: 'POST',
    path: '/v2/reports/query-fanouts',
    run: async () => {
      const report = await client.reports.queryQueryFanouts({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        interval: 'day',
      });
    },
  },

  {
    operation: 'query',
    method: 'POST',
    path: '/v1/reports/web-search-results',
    run: async () => {
      const webSearchResult = await client.reports.webSearchResults.query({
        date_interval: 'day',
        dimensions: [],
        metrics: [],
        order_by: {},
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
      });
    },
  },

  {
    operation: 'stream',
    method: 'POST',
    path: '/v1/reports/web-search-results/stream',
    run: async () => {
      const stream = await client.reports.webSearchResults.stream({
        date_interval: 'day',
        dimensions: [],
        metrics: [],
        order_by: {},
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
      });

      for await (const event of stream) {
        console.log(event);
      }
    },
  },

  {
    operation: 'brands',
    method: 'POST',
    path: '/v2/reports/shopping/brands',
    run: async () => {
      const shopping = await client.reports.shopping.brands({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        interval: 'day',
        scope: 'owned',
      });
    },
  },

  {
    operation: 'streamBrands',
    method: 'POST',
    path: '/v2/reports/shopping/brands/stream',
    run: async () => {
      const stream = await client.reports.shopping.streamBrands({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        interval: 'day',
        scope: 'owned',
      });

      for await (const event of stream) {
        console.log(event);
      }
    },
  },

  {
    operation: 'products',
    method: 'POST',
    path: '/v2/reports/shopping/products',
    run: async () => {
      const shopping = await client.reports.shopping.products({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        interval: 'day',
        include_merchants: false,
        competitor_limit: 5,
      });
    },
  },

  {
    operation: 'streamProducts',
    method: 'POST',
    path: '/v2/reports/shopping/products/stream',
    run: async () => {
      const stream = await client.reports.shopping.streamProducts({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        interval: 'day',
        include_merchants: false,
        competitor_limit: 5,
      });

      for await (const event of stream) {
        console.log(event);
      }
    },
  },

  {
    operation: 'merchants',
    method: 'POST',
    path: '/v2/reports/shopping/merchants',
    run: async () => {
      const shopping = await client.reports.shopping.merchants({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        interval: 'day',
      });
    },
  },

  {
    operation: 'streamMerchants',
    method: 'POST',
    path: '/v2/reports/shopping/merchants/stream',
    run: async () => {
      const stream = await client.reports.shopping.streamMerchants({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        interval: 'day',
      });

      for await (const event of stream) {
        console.log(event);
      }
    },
  },

  {
    operation: 'triggerRate',
    method: 'POST',
    path: '/v2/reports/shopping/trigger-rate',
    run: async () => {
      const shopping = await client.reports.shopping.triggerRate({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        interval: 'day',
      });
    },
  },

  {
    operation: 'streamTriggerRate',
    method: 'POST',
    path: '/v2/reports/shopping/trigger-rate/stream',
    run: async () => {
      const stream = await client.reports.shopping.streamTriggerRate({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        interval: 'day',
      });

      for await (const event of stream) {
        console.log(event);
      }
    },
  },

  {
    operation: 'createOverview',
    method: 'POST',
    path: '/v1/reports/accuracy/overview',
    run: async () => {
      const accuracy = await client.reports.accuracy.createOverview({
        start_date: '',
        end_date: '',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        exclude_topic_ids: false,
        tag_filter_type: 'any',
        include_no_tag: false,
        include_no_persona: false,
        group_by: 'period',
      });
    },
  },

  {
    operation: 'createBreakdown',
    method: 'POST',
    path: '/v1/reports/accuracy/breakdown',
    run: async () => {
      const accuracy = await client.reports.accuracy.createBreakdown({
        start_date: '',
        end_date: '',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        exclude_topic_ids: false,
        tag_filter_type: 'any',
        include_no_tag: false,
        include_no_persona: false,
        breakdown_by: 'citation',
        limit: 10,
        offset: 0,
        sort_by: 'citationShare',
        sort_order: 'desc',
      });
    },
  },

  {
    operation: 'createCitationAnalysis',
    method: 'POST',
    path: '/v1/reports/accuracy/citation-analysis',
    run: async () => {
      const accuracy = await client.reports.accuracy.createCitationAnalysis({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        clean_href: '',
        start_date: '',
        end_date: '',
      });
    },
  },

  {
    operation: 'createTopicIds',
    method: 'POST',
    path: '/v1/reports/accuracy/topic-ids',
    run: async () => {
      const accuracy = await client.reports.accuracy.createTopicIDs({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
      });
    },
  },

  {
    operation: 'createInaccurateThemes',
    method: 'POST',
    path: '/v1/reports/accuracy/inaccurate-themes',
    run: async () => {
      const accuracy = await client.reports.accuracy.createInaccurateThemes({
        start_date: '',
        end_date: '',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        exclude_topic_ids: false,
        tag_filter_type: 'any',
        include_no_tag: false,
        include_no_persona: false,
        limit: 10,
        offset: 0,
        sort_by: 'response_share',
        sort_order: 'desc',
      });
    },
  },

  {
    operation: 'createInaccurateClusters',
    method: 'POST',
    path: '/v1/reports/accuracy/inaccurate-clusters',
    run: async () => {
      const accuracy = await client.reports.accuracy.createInaccurateClusters({
        start_date: '',
        end_date: '',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        exclude_topic_ids: false,
        tag_filter_type: 'any',
        include_no_tag: false,
        include_no_persona: false,
        limit: 5000,
        offset: 0,
        include_models: false,
      });
    },
  },

  {
    operation: 'createInaccuracyDrivers',
    method: 'POST',
    path: '/v1/reports/accuracy/inaccuracy-drivers',
    run: async () => {
      const accuracy = await client.reports.accuracy.createInaccuracyDrivers({
        start_date: '',
        end_date: '',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        exclude_topic_ids: false,
        tag_filter_type: 'any',
        include_no_tag: false,
        include_no_persona: false,
        limit: 5,
      });
    },
  },

  {
    operation: 'createTopInaccurateClaims',
    method: 'POST',
    path: '/v1/reports/accuracy/top-inaccurate-claims',
    run: async () => {
      const accuracy = await client.reports.accuracy.createTopInaccurateClaims({
        start_date: '',
        end_date: '',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        exclude_topic_ids: false,
        tag_filter_type: 'any',
        include_no_tag: false,
        include_no_persona: false,
        limit: 5,
      });
    },
  },

  {
    operation: 'createClaimBreakdown',
    method: 'POST',
    path: '/v1/reports/accuracy/claim-breakdown',
    run: async () => {
      const accuracy = await client.reports.accuracy.createClaimBreakdown({
        start_date: '',
        end_date: '',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        exclude_topic_ids: false,
        tag_filter_type: 'any',
        include_no_tag: false,
        include_no_persona: false,
        cluster_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'createClaimCitations',
    method: 'POST',
    path: '/v1/reports/accuracy/claim-citations',
    run: async () => {
      const accuracy = await client.reports.accuracy.createClaimCitations({
        start_date: '',
        end_date: '',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        exclude_topic_ids: false,
        tag_filter_type: 'any',
        include_no_tag: false,
        include_no_persona: false,
        cluster_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 10,
        offset: 0,
        sort_order: 'desc',
      });
    },
  },

  {
    operation: 'createClusterExampleRuns',
    method: 'POST',
    path: '/v1/reports/accuracy/cluster-example-runs',
    run: async () => {
      const accuracy = await client.reports.accuracy.createClusterExampleRuns({
        start_date: '',
        end_date: '',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        exclude_topic_ids: false,
        tag_filter_type: 'any',
        include_no_tag: false,
        include_no_persona: false,
        cluster_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 20,
        offset: 0,
      });
    },
  },

  {
    operation: 'createClusterVerificationPairs',
    method: 'POST',
    path: '/v1/reports/accuracy/cluster-verification-pairs',
    run: async () => {
      const accuracy = await client.reports.accuracy.createClusterVerificationPairs({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        cluster_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'createFactcheckSetupStatus',
    method: 'POST',
    path: '/v1/reports/accuracy/factcheck-setup-status',
    run: async () => {
      const accuracy = await client.reports.accuracy.createFactcheckSetupStatus({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'queryScores',
    method: 'POST',
    path: '/v2/reports/factcheck',
    run: async () => {
      const factcheck = await client.reports.factcheck.queryScores({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
      });
    },
  },

  {
    operation: 'streamScores',
    method: 'POST',
    path: '/v2/reports/factcheck/stream',
    run: async () => {
      const stream = await client.reports.factcheck.streamScores({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
      });

      for await (const event of stream) {
        console.log(event);
      }
    },
  },

  {
    operation: 'queryClaims',
    method: 'POST',
    path: '/v2/reports/factcheck/claims',
    run: async () => {
      const claim = await client.reports.factcheck.claims.queryClaims({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
      });
    },
  },

  {
    operation: 'streamClaims',
    method: 'POST',
    path: '/v2/reports/factcheck/claims/stream',
    run: async () => {
      const stream = await client.reports.factcheck.claims.streamClaims({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
      });

      for await (const event of stream) {
        console.log(event);
      }
    },
  },

  {
    operation: 'getChannels',
    method: 'POST',
    path: '/v2/reports/social/youtube/channels',
    run: async () => {
      const youtube = await client.reports.social.youtube.getChannels({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
      });
    },
  },

  {
    operation: 'getVideos',
    method: 'POST',
    path: '/v2/reports/social/youtube/videos',
    run: async () => {
      const youtube = await client.reports.social.youtube.getVideos({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        attribution: 'attributed',
      });
    },
  },

  {
    operation: 'getSummary',
    method: 'POST',
    path: '/v2/reports/social/youtube/summary',
    run: async () => {
      const youtube = await client.reports.social.youtube.getSummary({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/content/{asset_id}/optimization',
    run: async () => {
      const optimization = await client.content.optimization.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        limit: 10000,
        offset: 0,
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/content/{asset_id}/optimization/{content_id}',
    run: async () => {
      const optimization = await client.content.optimization.retrieve(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          asset_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        },
      );
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/agents',
    run: async () => {
      const agent = await client.agents.list({
        limit: 100,
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/agents/{agent_id}',
    run: async () => {
      const agent = await client.agents.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/agents',
    run: async () => {
      const agent = await client.agents.create({
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        name: 'x',
      });
    },
  },

  {
    operation: 'publish',
    method: 'POST',
    path: '/v1/agents/{agent_id}/publish',
    run: async () => {
      const agent = await client.agents.publish('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/agents/{agent_id}',
    run: async () => {
      const agent = await client.agents.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        graph: {},
      });
    },
  },

  {
    operation: 'retrieveGraph',
    method: 'GET',
    path: '/v1/agents/{agent_id}/graph',
    run: async () => {
      const agent = await client.agents.retrieveGraph('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/agents/{agent_id}/runs',
    run: async () => {
      const run = await client.agents.runs.create('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/agents/{agent_id}/runs/{run_id}',
    run: async () => {
      const run = await client.agents.runs.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        agent_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        verbose: false,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/agents/node-types',
    run: async () => {
      const nodeType = await client.agents.nodeTypes.list();
    },
  },

  {
    operation: 'retrieveSchema',
    method: 'GET',
    path: '/v1/agents/node-types/{node_type}/schema',
    run: async () => {
      const nodeType = await client.agents.nodeTypes.retrieveSchema('nodeType');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/knowledge-bases',
    run: async () => {
      const knowledgeBase = await client.knowledgeBases.list();
    },
  },

  {
    operation: 'search',
    method: 'POST',
    path: '/v1/knowledge-bases/{knowledge_base_id}/search',
    run: async () => {
      const knowledgeBase = await client.knowledgeBases.search('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        query: 'x',
        top_k: 0,
        return_full_page: false,
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/knowledge-bases/{knowledge_base_id}/documents',
    run: async () => {
      const document = await client.knowledgeBases.documents.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        name: 'x',
        text: 'x',
      });
    },
  },

  {
    operation: 'update',
    method: 'PUT',
    path: '/v1/knowledge-bases/{knowledge_base_id}/documents',
    run: async () => {
      const document = await client.knowledgeBases.documents.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        name: 'x',
        text: 'x',
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/knowledge-bases/{knowledge_base_id}/documents',
    run: async () => {
      const document = await client.knowledgeBases.documents.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        name: 'x',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/knowledge-bases/{knowledge_base_id}/folders',
    run: async () => {
      const folder = await client.knowledgeBases.folders.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        path: 'x',
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/knowledge-bases/{knowledge_base_id}/folders',
    run: async () => {
      const folder = await client.knowledgeBases.folders.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        path: 'x',
        recursive: false,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/projects',
    run: async () => {
      const project = await client.projects.list({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 100,
        offset: 0,
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/projects',
    run: async () => {
      const project = await client.projects.create({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/projects/{project_id}',
    run: async () => {
      const project = await client.projects.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/projects/{project_id}',
    run: async () => {
      await client.projects.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'getStatus',
    method: 'GET',
    path: '/v1/projects/{project_id}/status',
    run: async () => {
      const project = await client.projects.getStatus('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'archive',
    method: 'POST',
    path: '/v1/projects/{project_id}/archive',
    run: async () => {
      const project = await client.projects.archive('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'unarchive',
    method: 'POST',
    path: '/v1/projects/{project_id}/unarchive',
    run: async () => {
      const project = await client.projects.unarchive('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/projects/generations',
    run: async () => {
      const generation = await client.projects.generations.list({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 100,
        offset: 0,
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/projects/generations/{run_id}',
    run: async () => {
      const generation = await client.projects.generations.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/projects/{project_id}/tasks',
    run: async () => {
      const task = await client.projects.tasks.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/projects/{project_id}/tasks',
    run: async () => {
      const task = await client.projects.tasks.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        title: 'x',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/projects/{project_id}/tasks/{task_id}',
    run: async () => {
      const task = await client.projects.tasks.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        project_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/projects/{project_id}/tasks/{task_id}',
    run: async () => {
      const task = await client.projects.tasks.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        project_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/projects/{project_id}/tasks/{task_id}',
    run: async () => {
      await client.projects.tasks.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        project_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'updateStatus',
    method: 'POST',
    path: '/v1/projects/{project_id}/tasks/{task_id}/status',
    run: async () => {
      const task = await client.projects.tasks.updateStatus('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        project_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        status: 'not_started',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/integrations',
    run: async () => {
      const integration = await client.integrations.list();
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/documents',
    run: async () => {
      const document = await client.documents.create({
        id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        name: 'x',
        content_markdown: 'x',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/documents',
    run: async () => {
      const document = await client.documents.list({
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 20,
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/documents/{document_id}',
    run: async () => {
      const document = await client.documents.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        include_tabs: true,
        include_comments: true,
        preview: true,
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/documents/{document_id}',
    run: async () => {
      const document = await client.documents.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/documents/{document_id}',
    run: async () => {
      await client.documents.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'replaceContent',
    method: 'POST',
    path: '/v1/documents/{document_id}/content',
    run: async () => {
      const document = await client.documents.replaceContent('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        content_markdown: '',
        skip_title_sync: false,
      });
    },
  },

  {
    operation: 'retrieveInsights',
    method: 'GET',
    path: '/v1/ads/openai-ads/ad-account/insights',
    run: async () => {
      const adAccount = await client.ads.openaiAds.adAccount.retrieveInsights();
    },
  },
];

const main = async (): Promise<void> => {
  // SCALAR_SMOKE_FILTER (comma-separated) keeps only cases whose operation name or path matches
  // one of the needles, so a caller can smoke-test a subset. With no filter, every case runs.
  const filter = process.env['SCALAR_SMOKE_FILTER'];
  const needles = filter
    ? filter
        .split(',')
        .map((needle) => needle.trim())
        .filter(Boolean)
    : [];
  const selected =
    needles.length > 0
      ? cases.filter((testCase) =>
          needles.some((needle) => testCase.operation.includes(needle) || testCase.path.includes(needle)),
        )
      : cases;

  // Run every selected case concurrently. Promise.allSettled means one failing operation never
  // blocks the others, so a single run reports the status of every endpoint.
  const settled = await Promise.allSettled(
    selected.map(async (testCase): Promise<SmokeResult> => {
      const startedAt = Date.now();
      try {
        await testCase.run();
        return {
          operation: testCase.operation,
          method: testCase.method,
          path: testCase.path,
          status: 'passed',
          durationMs: Date.now() - startedAt,
        };
      } catch (error) {
        // Prefer the stack so a failure points at the failing SDK call; fall back to the message.
        const message = error instanceof Error ? (error.stack ?? error.message) : String(error);
        return {
          operation: testCase.operation,
          method: testCase.method,
          path: testCase.path,
          status: 'failed',
          durationMs: Date.now() - startedAt,
          error: message,
        };
      }
    }),
  );

  // allSettled never rejects, but defensively map any rejected slot to a failed result.
  const results: SmokeResult[] = settled.map((result) =>
    result.status === 'fulfilled'
      ? result.value
      : {
          operation: 'unknown',
          method: '',
          path: '',
          status: 'failed',
          durationMs: 0,
          error: String(result.reason),
        },
  );
  const failed = results.filter((result) => result.status === 'failed');

  // With SCALAR_SMOKE_REPORT set, write a machine-readable report; otherwise print a table.
  const reportPath = process.env['SCALAR_SMOKE_REPORT'];
  if (reportPath) {
    writeFileSync(reportPath, JSON.stringify({ total: results.length, failed: failed.length, results }));
  } else {
    for (const result of results) {
      if (result.status === 'passed')
        console.log(`\u2714 ${result.operation} (${result.method} ${result.path}) ${result.durationMs}ms`);
      else
        console.error(`\u2718 ${result.operation} (${result.method} ${result.path})\n${result.error ?? ''}`);
    }
    if (results.length === 0) {
      console.error('No code samples ran (empty SDK or a SCALAR_SMOKE_FILTER that matched nothing).');
    } else {
      console.log(`\n${results.length - failed.length}/${results.length} samples passed`);
    }
  }

  // An empty run (no operations, or a filter that matched nothing) is a failure, not a vacuous pass.
  if (failed.length > 0 || results.length === 0) process.exitCode = 1;
};

void main();

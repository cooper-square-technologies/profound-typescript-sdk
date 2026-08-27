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
  label?: string;
  status: 'passed' | 'failed';
  durationMs: number;
  error?: string;
};

// One or two entries per generated operation: the first passes only the arguments the method
// requires, the second also fills every optional parameter and body property. `label` says which
// is which, and is absent when the operation has no optional argument and so has only one case.
// `run` performs the real SDK call; the other fields are metadata used for filtering and
// reporting. This list is generated, so it stays in sync with the SDK surface.
const cases: {
  operation: string;
  method: string;
  path: string;
  label?: string;
  run: () => Promise<unknown>;
}[] = [
  {
    operation: 'regions',
    method: 'GET',
    path: '/v1/org/regions',
    label: 'required params',
    run: async () => {
      const organization = await client.organizations.regions();
    },
  },

  {
    operation: 'regions',
    method: 'GET',
    path: '/v1/org/regions',
    label: 'all params',
    run: async () => {
      const organization = await client.organizations.regions({
        organization_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
      });
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
    label: 'required params',
    run: async () => {
      const organization = await client.organizations.domains();
    },
  },

  {
    operation: 'domains',
    method: 'GET',
    path: '/v1/org/domains',
    label: 'all params',
    run: async () => {
      const organization = await client.organizations.domains({
        organization_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
      });
    },
  },

  {
    operation: 'listAssets',
    method: 'GET',
    path: '/v1/org/assets',
    label: 'required params',
    run: async () => {
      const organization = await client.organizations.listAssets();
    },
  },

  {
    operation: 'listAssets',
    method: 'GET',
    path: '/v1/org/assets',
    label: 'all params',
    run: async () => {
      const organization = await client.organizations.listAssets({
        organization_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
      });
    },
  },

  {
    operation: 'getPersonas',
    method: 'GET',
    path: '/v1/org/personas',
    label: 'required params',
    run: async () => {
      const organization = await client.organizations.getPersonas();
    },
  },

  {
    operation: 'getPersonas',
    method: 'GET',
    path: '/v1/org/personas',
    label: 'all params',
    run: async () => {
      const organization = await client.organizations.getPersonas({
        organization_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
      });
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
    label: 'required params',
    run: async () => {
      const category = await client.organizations.categories.list();
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/org/categories',
    label: 'all params',
    run: async () => {
      const category = await client.organizations.categories.list({
        organization_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
      });
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
    label: 'required params',
    run: async () => {
      const category = await client.organizations.categories.prompts('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        limit: 10000,
        status: ['active'],
      });
    },
  },

  {
    operation: 'prompts',
    method: 'GET',
    path: '/v1/org/categories/{category_id}/prompts',
    label: 'all params',
    run: async () => {
      const category = await client.organizations.categories.prompts('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        limit: 10000,
        cursor: 'cursor',
        order_by: 'created_at',
        order_dir: 'asc',
        analysis_type: ['visibility'],
        prompt_type: ['visibility'],
        status: ['active'],
        topic_id: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        tag_id: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        region_id: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        platform_id: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        persona_id: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
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
    label: 'required params',
    run: async () => {
      const prompt = await client.prompts.answers({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
      });
    },
  },

  {
    operation: 'answers',
    method: 'POST',
    path: '/v1/prompts/answers',
    label: 'all params',
    run: async () => {
      const prompt = await client.prompts.answers({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
        pagination: {
          limit: 10000,
          offset: 0,
        },
        filters: [],
        include: {
          run_id: false,
          created_at: true,
          prompt: true,
          prompt_id: false,
          mentions: true,
          analysis_types: false,
          prompt_type: true,
          response: true,
          citations: true,
          citation_details: false,
          web_search_results: false,
          search_triggered: false,
          themes: true,
          sentiment_themes: false,
          topic: true,
          topic_id: false,
          region: true,
          model: true,
          model_id: true,
          asset: true,
          asset_id: false,
          tags: false,
          search_queries: false,
          persona: false,
        },
      });
    },
  },

  {
    operation: 'answersV2',
    method: 'POST',
    path: '/v2/prompts/answers',
    label: 'required params',
    run: async () => {
      const prompt = await client.prompts.answersV2({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
      });
    },
  },

  {
    operation: 'answersV2',
    method: 'POST',
    path: '/v2/prompts/answers',
    label: 'all params',
    run: async () => {
      const prompt = await client.prompts.answersV2({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        include: [],
        filter: {},
        limit: 0,
        max_results: 0,
        cursor: '',
      });
    },
  },

  {
    operation: 'streamAnswersV2',
    method: 'POST',
    path: '/v2/prompts/answers/stream',
    label: 'required params',
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
    operation: 'streamAnswersV2',
    method: 'POST',
    path: '/v2/prompts/answers/stream',
    label: 'all params',
    run: async () => {
      const stream = await client.prompts.streamAnswersV2({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        include: [],
        filter: {},
        limit: 0,
        max_results: 0,
        cursor: '',
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
    label: 'required params',
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
    operation: 'citations',
    method: 'POST',
    path: '/v1/reports/citations',
    label: 'all params',
    run: async () => {
      const report = await client.reports.citations({
        date_interval: 'day',
        dimensions: [],
        metrics: [],
        order_by: {},
        pagination: {
          limit: 10000,
          offset: 0,
        },
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
        filters: [],
      });
    },
  },

  {
    operation: 'visibility',
    method: 'POST',
    path: '/v1/reports/visibility',
    label: 'required params',
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
    operation: 'visibility',
    method: 'POST',
    path: '/v1/reports/visibility',
    label: 'all params',
    run: async () => {
      const report = await client.reports.visibility({
        date_interval: 'day',
        dimensions: [],
        metrics: [],
        order_by: {},
        pagination: {
          limit: 10000,
          offset: 0,
        },
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
        filters: [],
      });
    },
  },

  {
    operation: 'sentiment',
    method: 'POST',
    path: '/v1/reports/sentiment',
    label: 'required params',
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
    operation: 'sentiment',
    method: 'POST',
    path: '/v1/reports/sentiment',
    label: 'all params',
    run: async () => {
      const report = await client.reports.sentiment({
        date_interval: 'day',
        dimensions: [],
        metrics: [],
        order_by: {},
        pagination: {
          limit: 10000,
          offset: 0,
        },
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
        filters: [],
      });
    },
  },

  {
    operation: 'sentimentV2',
    method: 'POST',
    path: '/v1/reports/sentiment-v2',
    label: 'required params',
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
    operation: 'sentimentV2',
    method: 'POST',
    path: '/v1/reports/sentiment-v2',
    label: 'all params',
    run: async () => {
      const report = await client.reports.sentimentV2({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        asset_name: '',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
        comparison_start_date: '2024-01-01T00:00:00.000Z',
        comparison_end_date: '2024-01-01T00:00:00.000Z',
        date_bucket: 'day',
        dimensions: [],
        metrics: [],
        filters: [],
        order_by: { occurrence: 'desc' },
        pagination: {
          limit: 10000,
          offset: 0,
        },
      });
    },
  },

  {
    operation: 'getReferralsReport',
    method: 'POST',
    path: '/v1/reports/referrals',
    label: 'required params',
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
    operation: 'getReferralsReport',
    method: 'POST',
    path: '/v1/reports/referrals',
    label: 'all params',
    run: async () => {
      const report = await client.reports.getReferralsReport({
        date_interval: 'day',
        dimensions: [],
        metrics: [],
        order_by: {},
        pagination: {
          limit: 10000,
          offset: 0,
        },
        domain: '',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        metric_filters: [],
        filters: [],
      });
    },
  },

  {
    operation: 'getBotsReport',
    method: 'POST',
    path: '/v1/reports/bots',
    label: 'required params',
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
    operation: 'getBotsReport',
    method: 'POST',
    path: '/v1/reports/bots',
    label: 'all params',
    run: async () => {
      const report = await client.reports.getBotsReport({
        date_interval: 'day',
        dimensions: [],
        metrics: [],
        order_by: {},
        pagination: {
          limit: 10000,
          offset: 0,
        },
        domain: '',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        metric_filters: [],
        filters: [],
      });
    },
  },

  {
    operation: 'queryFanouts',
    method: 'POST',
    path: '/v1/reports/query-fanouts',
    label: 'required params',
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
    operation: 'queryFanouts',
    method: 'POST',
    path: '/v1/reports/query-fanouts',
    label: 'all params',
    run: async () => {
      const report = await client.reports.queryFanouts({
        date_interval: 'day',
        dimensions: [],
        metrics: [],
        order_by: {},
        pagination: {
          limit: 10000,
          offset: 0,
        },
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
        filters: [],
      });
    },
  },

  {
    operation: 'streamCitations',
    method: 'POST',
    path: '/v1/reports/citations/stream',
    label: 'required params',
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
    operation: 'streamCitations',
    method: 'POST',
    path: '/v1/reports/citations/stream',
    label: 'all params',
    run: async () => {
      const stream = await client.reports.streamCitations({
        date_interval: 'day',
        dimensions: [],
        metrics: [],
        order_by: {},
        pagination: {
          limit: 10000,
          offset: 0,
        },
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
        filters: [],
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
    label: 'required params',
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
    operation: 'streamVisibility',
    method: 'POST',
    path: '/v1/reports/visibility/stream',
    label: 'all params',
    run: async () => {
      const stream = await client.reports.streamVisibility({
        date_interval: 'day',
        dimensions: [],
        metrics: [],
        order_by: {},
        pagination: {
          limit: 10000,
          offset: 0,
        },
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
        filters: [],
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
    label: 'required params',
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
    operation: 'streamSentiment',
    method: 'POST',
    path: '/v1/reports/sentiment/stream',
    label: 'all params',
    run: async () => {
      const stream = await client.reports.streamSentiment({
        date_interval: 'day',
        dimensions: [],
        metrics: [],
        order_by: {},
        pagination: {
          limit: 10000,
          offset: 0,
        },
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
        filters: [],
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
    label: 'required params',
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
    operation: 'streamCitationsV2',
    method: 'POST',
    path: '/v2/reports/citations/stream',
    label: 'all params',
    run: async () => {
      const stream = await client.reports.streamCitationsV2({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        entity: 'domain',
        group_by: [],
        metrics: [],
        interval: 'day',
        scope: 'all',
        filter: {},
        limit: 0,
        max_results: 0,
        cursor: '',
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
    label: 'required params',
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
    operation: 'streamVisibilityV2',
    method: 'POST',
    path: '/v2/reports/visibility/stream',
    label: 'all params',
    run: async () => {
      const stream = await client.reports.streamVisibilityV2({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        group_by: [],
        metrics: [],
        interval: 'day',
        scope: 'owned',
        assets: '',
        filter: {},
        sort: {
          field: 'visibility_score',
        },
        limit: 0,
        max_results: 0,
        cursor: '',
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
    label: 'required params',
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
    operation: 'streamSentimentV2',
    method: 'POST',
    path: '/v2/reports/sentiment/stream',
    label: 'all params',
    run: async () => {
      const stream = await client.reports.streamSentimentV2({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        asset: '',
        start_date: '',
        end_date: '',
        comparison_start_date: '',
        comparison_end_date: '',
        group_by: [],
        metrics: [],
        interval: 'day',
        filter: {},
        sort: {
          field: 'positive_sentiment',
          dir: 'desc',
        },
        include_cited_websites: false,
        limit: 0,
        max_results: 0,
        cursor: '',
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
    label: 'required params',
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
    operation: 'streamQueryFanouts',
    method: 'POST',
    path: '/v2/reports/query-fanouts/stream',
    label: 'all params',
    run: async () => {
      const stream = await client.reports.streamQueryFanouts({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        group_by: [],
        metrics: [],
        interval: 'day',
        filter: {},
        sort: {
          field: '',
          dir: 'desc',
        },
        limit: 0,
        max_results: 0,
        cursor: '',
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
    label: 'required params',
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
    operation: 'getReferralsReportV2',
    method: 'POST',
    path: '/v2/reports/referrals',
    label: 'all params',
    run: async () => {
      const report = await client.reports.getReferralsReportV2({
        date_interval: 'day',
        dimensions: [],
        metrics: [],
        order_by: {},
        pagination: {
          limit: 10000,
          offset: 0,
        },
        domain: '',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        timezone: 'UTC',
        view_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        metric_filters: [],
        filters: [],
      });
    },
  },

  {
    operation: 'getBotsReportV2',
    method: 'POST',
    path: '/v2/reports/bots',
    label: 'required params',
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
    operation: 'getBotsReportV2',
    method: 'POST',
    path: '/v2/reports/bots',
    label: 'all params',
    run: async () => {
      const report = await client.reports.getBotsReportV2({
        date_interval: 'day',
        dimensions: [],
        metrics: [],
        order_by: {},
        pagination: {
          limit: 10000,
          offset: 0,
        },
        domain: '',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        timezone: 'UTC',
        view_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        metric_filters: [],
        filters: [],
        domain_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        tags: [],
      });
    },
  },

  {
    operation: 'queryVisibility',
    method: 'POST',
    path: '/v2/reports/visibility',
    label: 'required params',
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
    operation: 'queryVisibility',
    method: 'POST',
    path: '/v2/reports/visibility',
    label: 'all params',
    run: async () => {
      const report = await client.reports.queryVisibility({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        group_by: [],
        metrics: [],
        interval: 'day',
        scope: 'owned',
        assets: '',
        filter: {},
        sort: {
          field: 'visibility_score',
        },
        limit: 0,
        max_results: 0,
        cursor: '',
      });
    },
  },

  {
    operation: 'queryCitations',
    method: 'POST',
    path: '/v2/reports/citations',
    label: 'required params',
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
    operation: 'queryCitations',
    method: 'POST',
    path: '/v2/reports/citations',
    label: 'all params',
    run: async () => {
      const report = await client.reports.queryCitations({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        entity: 'domain',
        group_by: [],
        metrics: [],
        interval: 'day',
        scope: 'all',
        filter: {},
        limit: 0,
        max_results: 0,
        cursor: '',
      });
    },
  },

  {
    operation: 'querySentiment',
    method: 'POST',
    path: '/v2/reports/sentiment',
    label: 'required params',
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
    operation: 'querySentiment',
    method: 'POST',
    path: '/v2/reports/sentiment',
    label: 'all params',
    run: async () => {
      const report = await client.reports.querySentiment({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        asset: '',
        start_date: '',
        end_date: '',
        comparison_start_date: '',
        comparison_end_date: '',
        group_by: [],
        metrics: [],
        interval: 'day',
        filter: {},
        sort: {
          field: 'positive_sentiment',
          dir: 'desc',
        },
        include_cited_websites: false,
        limit: 0,
        max_results: 0,
        cursor: '',
      });
    },
  },

  {
    operation: 'queryQueryFanouts',
    method: 'POST',
    path: '/v2/reports/query-fanouts',
    label: 'required params',
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
    operation: 'queryQueryFanouts',
    method: 'POST',
    path: '/v2/reports/query-fanouts',
    label: 'all params',
    run: async () => {
      const report = await client.reports.queryQueryFanouts({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        group_by: [],
        metrics: [],
        interval: 'day',
        filter: {},
        sort: {
          field: '',
          dir: 'desc',
        },
        limit: 0,
        max_results: 0,
        cursor: '',
      });
    },
  },

  {
    operation: 'query',
    method: 'POST',
    path: '/v1/reports/web-search-results',
    label: 'required params',
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
    operation: 'query',
    method: 'POST',
    path: '/v1/reports/web-search-results',
    label: 'all params',
    run: async () => {
      const webSearchResult = await client.reports.webSearchResults.query({
        date_interval: 'day',
        dimensions: [],
        metrics: [],
        order_by: {},
        pagination: {
          limit: 10000,
          offset: 0,
        },
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
        filters: [],
      });
    },
  },

  {
    operation: 'stream',
    method: 'POST',
    path: '/v1/reports/web-search-results/stream',
    label: 'required params',
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
    operation: 'stream',
    method: 'POST',
    path: '/v1/reports/web-search-results/stream',
    label: 'all params',
    run: async () => {
      const stream = await client.reports.webSearchResults.stream({
        date_interval: 'day',
        dimensions: [],
        metrics: [],
        order_by: {},
        pagination: {
          limit: 10000,
          offset: 0,
        },
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
        filters: [],
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
    label: 'required params',
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
    operation: 'brands',
    method: 'POST',
    path: '/v2/reports/shopping/brands',
    label: 'all params',
    run: async () => {
      const shopping = await client.reports.shopping.brands({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        group_by: [],
        metrics: [],
        interval: 'day',
        scope: 'owned',
        assets: '',
        filter: {},
        limit: 0,
        max_results: 0,
        cursor: '',
      });
    },
  },

  {
    operation: 'streamBrands',
    method: 'POST',
    path: '/v2/reports/shopping/brands/stream',
    label: 'required params',
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
    operation: 'streamBrands',
    method: 'POST',
    path: '/v2/reports/shopping/brands/stream',
    label: 'all params',
    run: async () => {
      const stream = await client.reports.shopping.streamBrands({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        group_by: [],
        metrics: [],
        interval: 'day',
        scope: 'owned',
        assets: '',
        filter: {},
        limit: 0,
        max_results: 0,
        cursor: '',
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
    label: 'required params',
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
    operation: 'products',
    method: 'POST',
    path: '/v2/reports/shopping/products',
    label: 'all params',
    run: async () => {
      const shopping = await client.reports.shopping.products({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        group_by: [],
        metrics: [],
        interval: 'day',
        include_merchants: false,
        target_product: 'x',
        competitor_limit: 5,
        filter: {},
        limit: 0,
        max_results: 0,
        cursor: '',
      });
    },
  },

  {
    operation: 'streamProducts',
    method: 'POST',
    path: '/v2/reports/shopping/products/stream',
    label: 'required params',
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
    operation: 'streamProducts',
    method: 'POST',
    path: '/v2/reports/shopping/products/stream',
    label: 'all params',
    run: async () => {
      const stream = await client.reports.shopping.streamProducts({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        group_by: [],
        metrics: [],
        interval: 'day',
        include_merchants: false,
        target_product: 'x',
        competitor_limit: 5,
        filter: {},
        limit: 0,
        max_results: 0,
        cursor: '',
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
    label: 'required params',
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
    operation: 'merchants',
    method: 'POST',
    path: '/v2/reports/shopping/merchants',
    label: 'all params',
    run: async () => {
      const shopping = await client.reports.shopping.merchants({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        group_by: [],
        metrics: [],
        interval: 'day',
        filter: {},
        limit: 0,
        max_results: 0,
        cursor: '',
      });
    },
  },

  {
    operation: 'streamMerchants',
    method: 'POST',
    path: '/v2/reports/shopping/merchants/stream',
    label: 'required params',
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
    operation: 'streamMerchants',
    method: 'POST',
    path: '/v2/reports/shopping/merchants/stream',
    label: 'all params',
    run: async () => {
      const stream = await client.reports.shopping.streamMerchants({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        group_by: [],
        metrics: [],
        interval: 'day',
        filter: {},
        limit: 0,
        max_results: 0,
        cursor: '',
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
    label: 'required params',
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
    operation: 'triggerRate',
    method: 'POST',
    path: '/v2/reports/shopping/trigger-rate',
    label: 'all params',
    run: async () => {
      const shopping = await client.reports.shopping.triggerRate({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        group_by: [],
        metrics: [],
        interval: 'day',
        filter: {},
        limit: 0,
        max_results: 0,
        cursor: '',
      });
    },
  },

  {
    operation: 'streamTriggerRate',
    method: 'POST',
    path: '/v2/reports/shopping/trigger-rate/stream',
    label: 'required params',
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
    operation: 'streamTriggerRate',
    method: 'POST',
    path: '/v2/reports/shopping/trigger-rate/stream',
    label: 'all params',
    run: async () => {
      const stream = await client.reports.shopping.streamTriggerRate({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        group_by: [],
        metrics: [],
        interval: 'day',
        filter: {},
        limit: 0,
        max_results: 0,
        cursor: '',
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
    label: 'required params',
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
    operation: 'createOverview',
    method: 'POST',
    path: '/v1/reports/accuracy/overview',
    label: 'all params',
    run: async () => {
      const accuracy = await client.reports.accuracy.createOverview({
        start_date: '',
        end_date: '',
        comparison_start_date: '',
        comparison_end_date: '',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        topic_ids: [],
        exclude_topic_ids: false,
        tag_ids: [],
        tag_filter_type: 'any',
        include_no_tag: false,
        region_ids: [],
        platform_ids: [],
        persona_ids: [],
        include_no_persona: false,
        prompt_ids: [],
        citation_categories: [],
        date_bucket: '',
        group_by: 'period',
      });
    },
  },

  {
    operation: 'createBreakdown',
    method: 'POST',
    path: '/v1/reports/accuracy/breakdown',
    label: 'required params',
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
    operation: 'createBreakdown',
    method: 'POST',
    path: '/v1/reports/accuracy/breakdown',
    label: 'all params',
    run: async () => {
      const accuracy = await client.reports.accuracy.createBreakdown({
        start_date: '',
        end_date: '',
        comparison_start_date: '',
        comparison_end_date: '',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        topic_ids: [],
        exclude_topic_ids: false,
        tag_ids: [],
        tag_filter_type: 'any',
        include_no_tag: false,
        region_ids: [],
        platform_ids: [],
        persona_ids: [],
        include_no_persona: false,
        prompt_ids: [],
        citation_categories: [],
        breakdown_by: 'citation',
        group_by: [],
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
    label: 'required params',
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
    operation: 'createInaccurateThemes',
    method: 'POST',
    path: '/v1/reports/accuracy/inaccurate-themes',
    label: 'all params',
    run: async () => {
      const accuracy = await client.reports.accuracy.createInaccurateThemes({
        start_date: '',
        end_date: '',
        comparison_start_date: '',
        comparison_end_date: '',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        topic_ids: [],
        exclude_topic_ids: false,
        tag_ids: [],
        tag_filter_type: 'any',
        include_no_tag: false,
        region_ids: [],
        platform_ids: [],
        persona_ids: [],
        include_no_persona: false,
        prompt_ids: [],
        citation_categories: [],
        limit: 10,
        offset: 0,
        sort_by: 'response_share',
        sort_order: 'desc',
        search_query: '',
      });
    },
  },

  {
    operation: 'createInaccurateClusters',
    method: 'POST',
    path: '/v1/reports/accuracy/inaccurate-clusters',
    label: 'required params',
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
    operation: 'createInaccurateClusters',
    method: 'POST',
    path: '/v1/reports/accuracy/inaccurate-clusters',
    label: 'all params',
    run: async () => {
      const accuracy = await client.reports.accuracy.createInaccurateClusters({
        start_date: '',
        end_date: '',
        comparison_start_date: '',
        comparison_end_date: '',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        topic_ids: [],
        exclude_topic_ids: false,
        tag_ids: [],
        tag_filter_type: 'any',
        include_no_tag: false,
        region_ids: [],
        platform_ids: [],
        persona_ids: [],
        include_no_persona: false,
        prompt_ids: [],
        citation_categories: [],
        theme_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 5000,
        offset: 0,
        search_query: '',
        include_models: false,
      });
    },
  },

  {
    operation: 'createInaccuracyDrivers',
    method: 'POST',
    path: '/v1/reports/accuracy/inaccuracy-drivers',
    label: 'required params',
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
    operation: 'createInaccuracyDrivers',
    method: 'POST',
    path: '/v1/reports/accuracy/inaccuracy-drivers',
    label: 'all params',
    run: async () => {
      const accuracy = await client.reports.accuracy.createInaccuracyDrivers({
        start_date: '',
        end_date: '',
        comparison_start_date: '',
        comparison_end_date: '',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        topic_ids: [],
        exclude_topic_ids: false,
        tag_ids: [],
        tag_filter_type: 'any',
        include_no_tag: false,
        region_ids: [],
        platform_ids: [],
        persona_ids: [],
        include_no_persona: false,
        prompt_ids: [],
        citation_categories: [],
        limit: 5,
      });
    },
  },

  {
    operation: 'createTopInaccurateClaims',
    method: 'POST',
    path: '/v1/reports/accuracy/top-inaccurate-claims',
    label: 'required params',
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
    operation: 'createTopInaccurateClaims',
    method: 'POST',
    path: '/v1/reports/accuracy/top-inaccurate-claims',
    label: 'all params',
    run: async () => {
      const accuracy = await client.reports.accuracy.createTopInaccurateClaims({
        start_date: '',
        end_date: '',
        comparison_start_date: '',
        comparison_end_date: '',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        topic_ids: [],
        exclude_topic_ids: false,
        tag_ids: [],
        tag_filter_type: 'any',
        include_no_tag: false,
        region_ids: [],
        platform_ids: [],
        persona_ids: [],
        include_no_persona: false,
        prompt_ids: [],
        citation_categories: [],
        limit: 5,
      });
    },
  },

  {
    operation: 'createClaimBreakdown',
    method: 'POST',
    path: '/v1/reports/accuracy/claim-breakdown',
    label: 'required params',
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
    operation: 'createClaimBreakdown',
    method: 'POST',
    path: '/v1/reports/accuracy/claim-breakdown',
    label: 'all params',
    run: async () => {
      const accuracy = await client.reports.accuracy.createClaimBreakdown({
        start_date: '',
        end_date: '',
        comparison_start_date: '',
        comparison_end_date: '',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        topic_ids: [],
        exclude_topic_ids: false,
        tag_ids: [],
        tag_filter_type: 'any',
        include_no_tag: false,
        region_ids: [],
        platform_ids: [],
        persona_ids: [],
        include_no_persona: false,
        prompt_ids: [],
        citation_categories: [],
        cluster_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'createClaimCitations',
    method: 'POST',
    path: '/v1/reports/accuracy/claim-citations',
    label: 'required params',
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
    operation: 'createClaimCitations',
    method: 'POST',
    path: '/v1/reports/accuracy/claim-citations',
    label: 'all params',
    run: async () => {
      const accuracy = await client.reports.accuracy.createClaimCitations({
        start_date: '',
        end_date: '',
        comparison_start_date: '',
        comparison_end_date: '',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        topic_ids: [],
        exclude_topic_ids: false,
        tag_ids: [],
        tag_filter_type: 'any',
        include_no_tag: false,
        region_ids: [],
        platform_ids: [],
        persona_ids: [],
        include_no_persona: false,
        prompt_ids: [],
        citation_categories: [],
        cluster_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 10,
        offset: 0,
        search_query: '',
        sort_order: 'desc',
      });
    },
  },

  {
    operation: 'createClusterExampleRuns',
    method: 'POST',
    path: '/v1/reports/accuracy/cluster-example-runs',
    label: 'required params',
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
    operation: 'createClusterExampleRuns',
    method: 'POST',
    path: '/v1/reports/accuracy/cluster-example-runs',
    label: 'all params',
    run: async () => {
      const accuracy = await client.reports.accuracy.createClusterExampleRuns({
        start_date: '',
        end_date: '',
        comparison_start_date: '',
        comparison_end_date: '',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        topic_ids: [],
        exclude_topic_ids: false,
        tag_ids: [],
        tag_filter_type: 'any',
        include_no_tag: false,
        region_ids: [],
        platform_ids: [],
        persona_ids: [],
        include_no_persona: false,
        prompt_ids: [],
        citation_categories: [],
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
    label: 'required params',
    run: async () => {
      const factcheck = await client.reports.factcheck.queryScores({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
      });
    },
  },

  {
    operation: 'queryScores',
    method: 'POST',
    path: '/v2/reports/factcheck',
    label: 'all params',
    run: async () => {
      const factcheck = await client.reports.factcheck.queryScores({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        group_by: [],
        filter: {},
        limit: 0,
        max_results: 0,
        cursor: '',
      });
    },
  },

  {
    operation: 'streamScores',
    method: 'POST',
    path: '/v2/reports/factcheck/stream',
    label: 'required params',
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
    operation: 'streamScores',
    method: 'POST',
    path: '/v2/reports/factcheck/stream',
    label: 'all params',
    run: async () => {
      const stream = await client.reports.factcheck.streamScores({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        group_by: [],
        filter: {},
        limit: 0,
        max_results: 0,
        cursor: '',
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
    label: 'required params',
    run: async () => {
      const claim = await client.reports.factcheck.claims.queryClaims({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
      });
    },
  },

  {
    operation: 'queryClaims',
    method: 'POST',
    path: '/v2/reports/factcheck/claims',
    label: 'all params',
    run: async () => {
      const claim = await client.reports.factcheck.claims.queryClaims({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        group_by: [],
        filter: {},
        include: [],
        limit: 0,
        max_results: 0,
        cursor: '',
      });
    },
  },

  {
    operation: 'streamClaims',
    method: 'POST',
    path: '/v2/reports/factcheck/claims/stream',
    label: 'required params',
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
    operation: 'streamClaims',
    method: 'POST',
    path: '/v2/reports/factcheck/claims/stream',
    label: 'all params',
    run: async () => {
      const stream = await client.reports.factcheck.claims.streamClaims({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        group_by: [],
        filter: {},
        include: [],
        limit: 0,
        max_results: 0,
        cursor: '',
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
    label: 'required params',
    run: async () => {
      const youtube = await client.reports.social.youtube.getChannels({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
      });
    },
  },

  {
    operation: 'getChannels',
    method: 'POST',
    path: '/v2/reports/social/youtube/channels',
    label: 'all params',
    run: async () => {
      const youtube = await client.reports.social.youtube.getChannels({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        filter: {},
        limit: 0,
        cursor: '',
        source_types: [],
        group_by: [],
        interval: 'day',
      });
    },
  },

  {
    operation: 'getVideos',
    method: 'POST',
    path: '/v2/reports/social/youtube/videos',
    label: 'required params',
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
    operation: 'getVideos',
    method: 'POST',
    path: '/v2/reports/social/youtube/videos',
    label: 'all params',
    run: async () => {
      const youtube = await client.reports.social.youtube.getVideos({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        filter: {},
        limit: 0,
        cursor: '',
        source_types: [],
        attribution: 'attributed',
      });
    },
  },

  {
    operation: 'getSummary',
    method: 'POST',
    path: '/v2/reports/social/youtube/summary',
    label: 'required params',
    run: async () => {
      const youtube = await client.reports.social.youtube.getSummary({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
      });
    },
  },

  {
    operation: 'getSummary',
    method: 'POST',
    path: '/v2/reports/social/youtube/summary',
    label: 'all params',
    run: async () => {
      const youtube = await client.reports.social.youtube.getSummary({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        filter: {},
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
    label: 'required params',
    run: async () => {
      const agent = await client.agents.list({
        limit: 100,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/agents',
    label: 'all params',
    run: async () => {
      const agent = await client.agents.list({
        statuses: ['published'],
        limit: 100,
        next_cursor: 'nextCursor',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/agents/{agent_id}',
    label: 'required params',
    run: async () => {
      const agent = await client.agents.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/agents/{agent_id}',
    label: 'all params',
    run: async () => {
      const agent = await client.agents.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        version: 'published',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/agents',
    label: 'required params',
    run: async () => {
      const agent = await client.agents.create({
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        name: 'x',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/agents',
    label: 'all params',
    run: async () => {
      const agent = await client.agents.create({
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        name: 'x',
        description: '',
        graph: {},
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
    label: 'required params',
    run: async () => {
      const agent = await client.agents.retrieveGraph('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'retrieveGraph',
    method: 'GET',
    path: '/v1/agents/{agent_id}/graph',
    label: 'all params',
    run: async () => {
      const agent = await client.agents.retrieveGraph('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        version: 'published',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/agents/{agent_id}/runs',
    label: 'required params',
    run: async () => {
      const run = await client.agents.runs.create('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/agents/{agent_id}/runs',
    label: 'all params',
    run: async () => {
      const run = await client.agents.runs.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        inputs: {},
      });
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
    label: 'required params',
    run: async () => {
      const knowledgeBase = await client.knowledgeBases.list();
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/knowledge-bases',
    label: 'all params',
    run: async () => {
      const knowledgeBase = await client.knowledgeBases.list({
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'search',
    method: 'POST',
    path: '/v1/knowledge-bases/{knowledge_base_id}/search',
    label: 'required params',
    run: async () => {
      const knowledgeBase = await client.knowledgeBases.search('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        query: 'x',
        top_k: 0,
        return_full_page: false,
      });
    },
  },

  {
    operation: 'search',
    method: 'POST',
    path: '/v1/knowledge-bases/{knowledge_base_id}/search',
    label: 'all params',
    run: async () => {
      const knowledgeBase = await client.knowledgeBases.search('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        query: 'x',
        top_k: 0,
        return_full_page: false,
        filters: {
          tags: [],
          folders: [],
        },
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/knowledge-bases/{knowledge_base_id}/documents',
    label: 'required params',
    run: async () => {
      const document = await client.knowledgeBases.documents.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        name: 'x',
        text: 'x',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/knowledge-bases/{knowledge_base_id}/documents',
    label: 'all params',
    run: async () => {
      const document = await client.knowledgeBases.documents.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        name: 'x',
        text: 'x',
        folder: 'x',
      });
    },
  },

  {
    operation: 'update',
    method: 'PUT',
    path: '/v1/knowledge-bases/{knowledge_base_id}/documents',
    label: 'required params',
    run: async () => {
      const document = await client.knowledgeBases.documents.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        name: 'x',
        text: 'x',
      });
    },
  },

  {
    operation: 'update',
    method: 'PUT',
    path: '/v1/knowledge-bases/{knowledge_base_id}/documents',
    label: 'all params',
    run: async () => {
      const document = await client.knowledgeBases.documents.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        name: 'x',
        text: 'x',
        folder: 'x',
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/knowledge-bases/{knowledge_base_id}/documents',
    label: 'required params',
    run: async () => {
      const document = await client.knowledgeBases.documents.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        name: 'x',
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/knowledge-bases/{knowledge_base_id}/documents',
    label: 'all params',
    run: async () => {
      const document = await client.knowledgeBases.documents.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        name: 'x',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/knowledge-bases/{knowledge_base_id}/folders',
    label: 'required params',
    run: async () => {
      const folder = await client.knowledgeBases.folders.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        path: 'x',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/knowledge-bases/{knowledge_base_id}/folders',
    label: 'all params',
    run: async () => {
      const folder = await client.knowledgeBases.folders.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        path: 'x',
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/knowledge-bases/{knowledge_base_id}/folders',
    label: 'required params',
    run: async () => {
      const folder = await client.knowledgeBases.folders.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        path: 'x',
        recursive: false,
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/knowledge-bases/{knowledge_base_id}/folders',
    label: 'all params',
    run: async () => {
      const folder = await client.knowledgeBases.folders.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        path: 'x',
        recursive: false,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/projects',
    label: 'required params',
    run: async () => {
      const project = await client.projects.list({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 100,
        offset: 0,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/projects',
    label: 'all params',
    run: async () => {
      const project = await client.projects.list({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        status: 'status',
        limit: 100,
        offset: 0,
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/projects',
    label: 'required params',
    run: async () => {
      const project = await client.projects.create({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/projects',
    label: 'all params',
    run: async () => {
      const project = await client.projects.create({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        title: 'x',
        project_name: 'x',
        focus: 'x',
        topics: [],
        attachments: [],
        generation_context: {},
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
    label: 'required params',
    run: async () => {
      const project = await client.projects.archive('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'archive',
    method: 'POST',
    path: '/v1/projects/{project_id}/archive',
    label: 'all params',
    run: async () => {
      const project = await client.projects.archive('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        reason: 'x',
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
    label: 'required params',
    run: async () => {
      const generation = await client.projects.generations.list({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 100,
        offset: 0,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/projects/generations',
    label: 'all params',
    run: async () => {
      const generation = await client.projects.generations.list({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        status: 'status',
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
    label: 'required params',
    run: async () => {
      const task = await client.projects.tasks.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        title: 'x',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/projects/{project_id}/tasks',
    label: 'all params',
    run: async () => {
      const task = await client.projects.tasks.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        title: 'x',
        summary: 'x',
        brief: 'x',
        type: 'x',
        topic: 'x',
        impact: 0,
        reference_url: 'x',
        reference_label: 'x',
        position: 0,
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
    label: 'required params',
    run: async () => {
      const task = await client.projects.tasks.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        project_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/projects/{project_id}/tasks/{task_id}',
    label: 'all params',
    run: async () => {
      const task = await client.projects.tasks.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        project_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        title: 'x',
        summary: 'x',
        brief: 'x',
        type: 'x',
        topic: 'x',
        impact: 0,
        reference_url: 'x',
        reference_label: 'x',
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
    label: 'required params',
    run: async () => {
      const task = await client.projects.tasks.updateStatus('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        project_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        status: 'not_started',
      });
    },
  },

  {
    operation: 'updateStatus',
    method: 'POST',
    path: '/v1/projects/{project_id}/tasks/{task_id}/status',
    label: 'all params',
    run: async () => {
      const task = await client.projects.tasks.updateStatus('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        project_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        status: 'not_started',
        note: 'x',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/integrations',
    label: 'required params',
    run: async () => {
      const integration = await client.integrations.list();
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/integrations',
    label: 'all params',
    run: async () => {
      const integration = await client.integrations.list({
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        provider: 'provider',
        status_filter: 'active',
      });
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
    label: 'required params',
    run: async () => {
      const document = await client.documents.list({
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 20,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/documents',
    label: 'all params',
    run: async () => {
      const document = await client.documents.list({
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        q: 'q',
        sort: 'sort',
        limit: 20,
        next_cursor: 'nextCursor',
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
    label: 'required params',
    run: async () => {
      const document = await client.documents.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/documents/{document_id}',
    label: 'all params',
    run: async () => {
      const document = await client.documents.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        name: 'x',
        visibility: 'invited_only',
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
    label: 'required params',
    run: async () => {
      const adAccount = await client.ads.openaiAds.adAccount.retrieveInsights();
    },
  },

  {
    operation: 'retrieveInsights',
    method: 'GET',
    path: '/v1/ads/openai-ads/ad-account/insights',
    label: 'all params',
    run: async () => {
      const adAccount = await client.ads.openaiAds.adAccount.retrieveInsights({
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        aggregation_level: 'ad_account',
        time_granularity: 'hourly',
        'time_ranges[]': ['timeRange'],
        limit: 1,
        after: 'after',
        before: 'before',
      });
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
      // `label` distinguishes the required-params run from the all-params run of the same
      // operation; it is omitted entirely when the operation contributed only one case.
      const identity = {
        operation: testCase.operation,
        method: testCase.method,
        path: testCase.path,
        ...(testCase.label ? { label: testCase.label } : {}),
      };
      try {
        await testCase.run();
        return { ...identity, status: 'passed', durationMs: Date.now() - startedAt };
      } catch (error) {
        // Prefer the stack so a failure points at the failing SDK call; fall back to the message.
        const message = error instanceof Error ? (error.stack ?? error.message) : String(error);
        return { ...identity, status: 'failed', durationMs: Date.now() - startedAt, error: message };
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
      const suffix = result.label ? ` [${result.label}]` : '';
      if (result.status === 'passed')
        console.log(
          `\u2714 ${result.operation}${suffix} (${result.method} ${result.path}) ${result.durationMs}ms`,
        );
      else
        console.error(
          `\u2718 ${result.operation}${suffix} (${result.method} ${result.path})\n${result.error ?? ''}`,
        );
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

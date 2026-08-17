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
      const regions = await client.organizations.regions();
    },
  },

  {
    operation: 'models',
    method: 'GET',
    path: '/v1/org/models',
    run: async () => {
      const models = await client.organizations.models();
    },
  },

  {
    operation: 'domains',
    method: 'GET',
    path: '/v1/org/domains',
    run: async () => {
      const domains = await client.organizations.domains();
    },
  },

  {
    operation: 'listAssets',
    method: 'GET',
    path: '/v1/org/assets',
    run: async () => {
      const listAssets = await client.organizations.listAssets();
    },
  },

  {
    operation: 'getPersonas',
    method: 'GET',
    path: '/v1/org/personas',
    run: async () => {
      const getPersonas = await client.organizations.getPersonas();
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/org',
    run: async () => {
      const list = await client.organizations.list();
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/org/categories',
    run: async () => {
      const list = await client.organizations.categories.list();
    },
  },

  {
    operation: 'topics',
    method: 'GET',
    path: '/v1/org/categories/{category_id}/topics',
    run: async () => {
      const topics = await client.organizations.categories.topics('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'tags',
    method: 'GET',
    path: '/v1/org/categories/{category_id}/tags',
    run: async () => {
      const tags = await client.organizations.categories.tags('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'prompts',
    method: 'GET',
    path: '/v1/org/categories/{category_id}/prompts',
    run: async () => {
      const prompts = await client.organizations.categories.prompts('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
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
      const assets = await client.organizations.categories.assets('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'getCategoryPersonas',
    method: 'GET',
    path: '/v1/org/categories/{category_id}/personas',
    run: async () => {
      const getCategoryPersonas = await client.organizations.categories.getCategoryPersonas(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      );
    },
  },

  {
    operation: 'createPrompts',
    method: 'POST',
    path: '/v1/org/categories/{category_id}/prompts',
    run: async () => {
      const createPrompts = await client.organizations.categories.createPrompts(
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
      const updatePrompts = await client.organizations.categories.updatePrompts(
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
      const updatePromptStatus = await client.organizations.categories.updatePromptStatus(
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
    operation: 'answers',
    method: 'POST',
    path: '/v1/prompts/answers',
    run: async () => {
      const answers = await client.prompts.answers({
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
    run: async () => {
      const citations = await client.reports.citations({
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
    operation: 'query',
    method: 'POST',
    path: '/v1/reports/web-search-results',
    run: async () => {
      const query = await client.reports.webSearchResults.query({
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
    operation: 'visibility',
    method: 'POST',
    path: '/v1/reports/shopping/visibility',
    run: async () => {
      const visibility = await client.reports.shopping.visibility({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
        date_interval: 'day',
        include_count: false,
        tag_filter_type: 'any',
        include_no_tag: false,
        exclude_topic_ids: false,
        include_asset_only: false,
        rank_by: 'visibility_score',
        include_position_frequency: false,
      });
    },
  },

  {
    operation: 'itemVisibility',
    method: 'POST',
    path: '/v1/reports/shopping/item-visibility',
    run: async () => {
      const itemVisibility = await client.reports.shopping.itemVisibility({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
        date_interval: 'day',
        include_count: false,
        tag_filter_type: 'any',
        include_no_tag: false,
        exclude_topic_ids: false,
        merchant_filter_type: 'any',
        include_competitors: false,
        competitor_limit: 5,
        include_position_frequency: false,
      });
    },
  },

  {
    operation: 'merchantDistribution',
    method: 'POST',
    path: '/v1/reports/shopping/merchant-distribution',
    run: async () => {
      const merchantDistribution = await client.reports.shopping.merchantDistribution({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
        date_interval: 'day',
        include_count: false,
        tag_filter_type: 'any',
        include_no_tag: false,
        exclude_topic_ids: false,
      });
    },
  },

  {
    operation: 'merchantVisibilityByBrand',
    method: 'POST',
    path: '/v1/reports/shopping/merchant-visibility-by-brand',
    run: async () => {
      const merchantVisibilityByBrand = await client.reports.shopping.merchantVisibilityByBrand({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
        date_interval: 'day',
        include_count: false,
        tag_filter_type: 'any',
        include_no_tag: false,
        exclude_topic_ids: false,
        include_brand_only: false,
      });
    },
  },

  {
    operation: 'merchantByItems',
    method: 'POST',
    path: '/v1/reports/shopping/merchant-by-items',
    run: async () => {
      const merchantByItems = await client.reports.shopping.merchantByItems({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
        date_interval: 'day',
        include_count: false,
        tag_filter_type: 'any',
        include_no_tag: false,
        exclude_topic_ids: false,
      });
    },
  },

  {
    operation: 'allItemsWithMerchants',
    method: 'POST',
    path: '/v1/reports/shopping/all-items-with-merchants',
    run: async () => {
      const allItemsWithMerchants = await client.reports.shopping.allItemsWithMerchants({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
        date_interval: 'day',
        include_count: false,
        tag_filter_type: 'any',
        include_no_tag: false,
        exclude_topic_ids: false,
        merchant_filter_type: 'any',
        rank_by: 'visibility',
        sort_order: 'desc',
      });
    },
  },

  {
    operation: 'triggerRate',
    method: 'POST',
    path: '/v1/reports/shopping/trigger-rate',
    run: async () => {
      const triggerRate = await client.reports.shopping.triggerRate({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
        date_interval: 'day',
        include_count: false,
        tag_filter_type: 'any',
        include_no_tag: false,
        exclude_topic_ids: false,
      });
    },
  },

  {
    operation: 'merchantShare',
    method: 'POST',
    path: '/v1/reports/shopping/merchant-share',
    run: async () => {
      const merchantShare = await client.reports.shopping.merchantShare({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
        date_interval: 'day',
        include_count: false,
        tag_filter_type: 'any',
        include_no_tag: false,
        exclude_topic_ids: false,
      });
    },
  },

  {
    operation: 'productMerchantUrls',
    method: 'POST',
    path: '/v1/reports/shopping/product-merchant-urls',
    run: async () => {
      const productMerchantURLs = await client.reports.shopping.productMerchantURLs({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        product_names: [],
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
      });
    },
  },

  {
    operation: 'executions',
    method: 'POST',
    path: '/v1/reports/shopping/executions',
    run: async () => {
      const executions = await client.reports.shopping.executions({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
        date_interval: 'day',
        include_count: false,
        tag_filter_type: 'any',
        include_no_tag: false,
        exclude_topic_ids: false,
        analysis_filter_type: 'any',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/content/{asset_id}/optimization',
    run: async () => {
      const list = await client.content.optimization.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
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
      const retrieve = await client.content.optimization.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        asset_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/agents',
    run: async () => {
      const list = await client.agents.list({
        limit: 100,
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/agents/{agent_id}',
    run: async () => {
      const retrieve = await client.agents.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/agents/{agent_id}/runs',
    run: async () => {
      const create = await client.agents.runs.create('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/agents/{agent_id}/runs/{run_id}',
    run: async () => {
      const retrieve = await client.agents.runs.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        agent_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        verbose: false,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/knowledge-bases',
    run: async () => {
      const list = await client.knowledgeBases.list();
    },
  },

  {
    operation: 'search',
    method: 'POST',
    path: '/v1/knowledge-bases/{knowledge_base_id}/search',
    run: async () => {
      const search = await client.knowledgeBases.search('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
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
      const create = await client.knowledgeBases.documents.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
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
      const update = await client.knowledgeBases.documents.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
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
      const delete_ = await client.knowledgeBases.documents.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        name: 'x',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/knowledge-bases/{knowledge_base_id}/folders',
    run: async () => {
      const create = await client.knowledgeBases.folders.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        path: 'x',
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/knowledge-bases/{knowledge_base_id}/folders',
    run: async () => {
      const delete_ = await client.knowledgeBases.folders.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        path: 'x',
        recursive: false,
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

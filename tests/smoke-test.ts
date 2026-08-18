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
    operation: 'listV1OrgGet',
    method: 'GET',
    path: '/v1/org',
    run: async () => {
      const listV1OrgGet = await client.organization.listV1OrgGet();
    },
  },

  {
    operation: 'listRegionsV1OrgRegionsGet',
    method: 'GET',
    path: '/v1/org/regions',
    run: async () => {
      const listRegionsV1OrgRegionsGet = await client.organization.listRegionsV1OrgRegionsGet();
    },
  },

  {
    operation: 'listModelsV1OrgModelsGet',
    method: 'GET',
    path: '/v1/org/models',
    run: async () => {
      const listModelsV1OrgModelsGet = await client.organization.listModelsV1OrgModelsGet();
    },
  },

  {
    operation: 'listDomainsV1OrgDomainsGet',
    method: 'GET',
    path: '/v1/org/domains',
    run: async () => {
      const listDomainsV1OrgDomainsGet = await client.organization.listDomainsV1OrgDomainsGet();
    },
  },

  {
    operation: 'listAssetsV1OrgAssetsGet',
    method: 'GET',
    path: '/v1/org/assets',
    run: async () => {
      const listAssetsV1OrgAssetsGet = await client.organization.listAssetsV1OrgAssetsGet();
    },
  },

  {
    operation: 'listPersonasV1OrgPersonasGet',
    method: 'GET',
    path: '/v1/org/personas',
    run: async () => {
      const listPersonasV1OrgPersonasGet = await client.organization.listPersonasV1OrgPersonasGet();
    },
  },

  {
    operation: 'listCategoriesV1OrgCategoriesGet',
    method: 'GET',
    path: '/v1/org/categories',
    run: async () => {
      const listCategoriesV1OrgCategoriesGet = await client.organization.listCategoriesV1OrgCategoriesGet();
    },
  },

  {
    operation: 'listCategoryTopicsV1OrgCategoriesCategoryTopicsGet',
    method: 'GET',
    path: '/v1/org/categories/{category_id}/topics',
    run: async () => {
      const listCategoryTopicsV1OrgCategoriesCategoryTopicsGet =
        await client.organization.listCategoryTopicsV1OrgCategoriesCategoryTopicsGet(
          '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        );
    },
  },

  {
    operation: 'listCategoryTagsV1OrgCategoriesCategoryTagsGet',
    method: 'GET',
    path: '/v1/org/categories/{category_id}/tags',
    run: async () => {
      const listCategoryTagsV1OrgCategoriesCategoryTagsGet =
        await client.organization.listCategoryTagsV1OrgCategoriesCategoryTagsGet(
          '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        );
    },
  },

  {
    operation: 'listCategoryRegionsV1OrgCategoriesCategoryRegionsGet',
    method: 'GET',
    path: '/v1/org/categories/{category_id}/regions',
    run: async () => {
      const listCategoryRegionsV1OrgCategoriesCategoryRegionsGet =
        await client.organization.listCategoryRegionsV1OrgCategoriesCategoryRegionsGet(
          '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        );
    },
  },

  {
    operation: 'listCategoryCitationCategoriesV1OrgCategoriesCategoryCitationCategoriesGet',
    method: 'GET',
    path: '/v1/org/categories/{category_id}/citation-categories',
    run: async () => {
      const listCategoryCitationCategoriesV1OrgCategoriesCategoryCitationCategoriesGet =
        await client.organization.listCategoryCitationCategoriesV1OrgCategoriesCategoryCitationCategoriesGet(
          '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        );
    },
  },

  {
    operation: 'listCategoryCitationTagsV1OrgCategoriesCategoryCitationTagsGet',
    method: 'GET',
    path: '/v1/org/categories/{category_id}/citation-tags',
    run: async () => {
      const listCategoryCitationTagsV1OrgCategoriesCategoryCitationTagsGet =
        await client.organization.listCategoryCitationTagsV1OrgCategoriesCategoryCitationTagsGet(
          '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        );
    },
  },

  {
    operation: 'listCategoryPromptsV1OrgCategoriesCategoryPromptsGet',
    method: 'GET',
    path: '/v1/org/categories/{category_id}/prompts',
    run: async () => {
      const listCategoryPromptsV1OrgCategoriesCategoryPromptsGet =
        await client.organization.listCategoryPromptsV1OrgCategoriesCategoryPromptsGet(
          '7c9e6679-7425-40de-944b-e07fc1f90ae7',
          {
            limit: 10000,
            status: ['active'],
          },
        );
    },
  },

  {
    operation: 'createCategoryPromptsV1OrgCategoriesCategoryIdPromptsPost',
    method: 'POST',
    path: '/v1/org/categories/{category_id}/prompts',
    run: async () => {
      const createCategoryPromptsV1OrgCategoriesCategoryIDPromptsPost =
        await client.organization.createCategoryPromptsV1OrgCategoriesCategoryIDPromptsPost(
          '7c9e6679-7425-40de-944b-e07fc1f90ae7',
          {
            prompts: [],
            dry_run: false,
          },
        );
    },
  },

  {
    operation: 'updateCategoryPromptsV1OrgCategoriesCategoryIdPromptsPatch',
    method: 'PATCH',
    path: '/v1/org/categories/{category_id}/prompts',
    run: async () => {
      const updateCategoryPromptsV1OrgCategoriesCategoryIDPromptsPatch =
        await client.organization.updateCategoryPromptsV1OrgCategoriesCategoryIDPromptsPatch(
          '7c9e6679-7425-40de-944b-e07fc1f90ae7',
          {
            prompts: [],
            dry_run: false,
          },
        );
    },
  },

  {
    operation: 'updateCategoryPromptStatusV1OrgCategoriesCategoryIdPromptsStatusPatch',
    method: 'PATCH',
    path: '/v1/org/categories/{category_id}/prompts/status',
    run: async () => {
      const updateCategoryPromptStatusV1OrgCategoriesCategoryIDPromptsStatusPatch =
        await client.organization.updateCategoryPromptStatusV1OrgCategoriesCategoryIDPromptsStatusPatch(
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
    operation: 'listCategoryAssetsV1OrgCategoriesCategoryAssetsGet',
    method: 'GET',
    path: '/v1/org/categories/{category_id}/assets',
    run: async () => {
      const listCategoryAssetsV1OrgCategoriesCategoryAssetsGet =
        await client.organization.listCategoryAssetsV1OrgCategoriesCategoryAssetsGet(
          '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        );
    },
  },

  {
    operation: 'listCategoryPersonasV1OrgCategoriesCategoryPersonasGet',
    method: 'GET',
    path: '/v1/org/categories/{category_id}/personas',
    run: async () => {
      const listCategoryPersonasV1OrgCategoriesCategoryPersonasGet =
        await client.organization.listCategoryPersonasV1OrgCategoriesCategoryPersonasGet(
          '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        );
    },
  },

  {
    operation: 'createV1Post',
    method: 'POST',
    path: '/v1/prompts/answers',
    run: async () => {
      const createV1Post = await client.prompts.answers.createV1Post({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
      });
    },
  },

  {
    operation: 'queryV2V2Post',
    method: 'POST',
    path: '/v2/prompts/answers',
    run: async () => {
      const queryV2V2Post = await client.prompts.answers.queryV2V2Post({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
      });
    },
  },

  {
    operation: 'streamV2V2StreamPost',
    method: 'POST',
    path: '/v2/prompts/answers/stream',
    run: async () => {
      const stream = await client.prompts.answers.streamV2V2StreamPost({
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
    operation: 'querySentimentV2V1SentimentV2Post',
    method: 'POST',
    path: '/v1/reports/sentiment-v2',
    run: async () => {
      const querySentimentV2V1SentimentV2Post = await client.reports.querySentimentV2V1SentimentV2Post({
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
    operation: 'queryV1Post',
    method: 'POST',
    path: '/v1/reports/citations',
    run: async () => {
      const queryV1Post = await client.reports.citations.queryV1Post({
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
    operation: 'streamV1StreamPost',
    method: 'POST',
    path: '/v1/reports/citations/stream',
    run: async () => {
      const stream = await client.reports.citations.streamV1StreamPost({
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
    operation: 'queryV2V2Post',
    method: 'POST',
    path: '/v2/reports/citations',
    run: async () => {
      const queryV2V2Post = await client.reports.citations.queryV2V2Post({
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
    operation: 'streamV2V2StreamPost',
    method: 'POST',
    path: '/v2/reports/citations/stream',
    run: async () => {
      const stream = await client.reports.citations.streamV2V2StreamPost({
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
    operation: 'queryV1Post',
    method: 'POST',
    path: '/v1/reports/visibility',
    run: async () => {
      const response = await client.reports.visibility.queryV1Post({
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
    operation: 'streamV1StreamPost',
    method: 'POST',
    path: '/v1/reports/visibility/stream',
    run: async () => {
      const stream = await client.reports.visibility.streamV1StreamPost({
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
    operation: 'queryV2V2Post',
    method: 'POST',
    path: '/v2/reports/visibility',
    run: async () => {
      const queryV2V2Post = await client.reports.visibility.queryV2V2Post({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        interval: 'day',
        scope: 'owned',
      });
    },
  },

  {
    operation: 'streamV2V2StreamPost',
    method: 'POST',
    path: '/v2/reports/visibility/stream',
    run: async () => {
      const stream = await client.reports.visibility.streamV2V2StreamPost({
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
    operation: 'queryV1Post',
    method: 'POST',
    path: '/v1/reports/sentiment',
    run: async () => {
      const response = await client.reports.sentiment.queryV1Post({
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
    operation: 'streamV1StreamPost',
    method: 'POST',
    path: '/v1/reports/sentiment/stream',
    run: async () => {
      const stream = await client.reports.sentiment.streamV1StreamPost({
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
    operation: 'queryV2V2Post',
    method: 'POST',
    path: '/v2/reports/sentiment',
    run: async () => {
      const queryV2V2Post = await client.reports.sentiment.queryV2V2Post({
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
    operation: 'streamV2V2StreamPost',
    method: 'POST',
    path: '/v2/reports/sentiment/stream',
    run: async () => {
      const stream = await client.reports.sentiment.streamV2V2StreamPost({
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
    operation: 'queryV1Post',
    method: 'POST',
    path: '/v1/reports/web-search-results',
    run: async () => {
      const queryV1Post = await client.reports.webSearchResults.queryV1Post({
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
    operation: 'streamV1StreamPost',
    method: 'POST',
    path: '/v1/reports/web-search-results/stream',
    run: async () => {
      const stream = await client.reports.webSearchResults.streamV1StreamPost({
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
    operation: 'createV1V1Post',
    method: 'POST',
    path: '/v1/reports/referrals',
    run: async () => {
      const response = await client.reports.referrals.createV1V1Post({
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
    operation: 'createV2V2Post',
    method: 'POST',
    path: '/v2/reports/referrals',
    run: async () => {
      const response = await client.reports.referrals.createV2V2Post({
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
    operation: 'createV1V1Post',
    method: 'POST',
    path: '/v1/reports/bots',
    run: async () => {
      const response = await client.reports.bots.createV1V1Post({
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
    operation: 'createV2V2Post',
    method: 'POST',
    path: '/v2/reports/bots',
    run: async () => {
      const response = await client.reports.bots.createV2V2Post({
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
    operation: 'v1Post',
    method: 'POST',
    path: '/v1/reports/query-fanouts',
    run: async () => {
      const response = await client.reports.queryFanouts.v1Post({
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
    operation: 'v2V2Post',
    method: 'POST',
    path: '/v2/reports/query-fanouts',
    run: async () => {
      const v2V2Post = await client.reports.queryFanouts.v2V2Post({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        interval: 'day',
      });
    },
  },

  {
    operation: 'streamV2V2StreamPost',
    method: 'POST',
    path: '/v2/reports/query-fanouts/stream',
    run: async () => {
      const stream = await client.reports.queryFanouts.streamV2V2StreamPost({
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
    operation: 'visibilityV1VisibilityPost',
    method: 'POST',
    path: '/v1/reports/shopping/visibility',
    run: async () => {
      const rows = await client.reports.shopping.visibilityV1VisibilityPost({
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
    operation: 'itemVisibilityV1ItemVisibilityPost',
    method: 'POST',
    path: '/v1/reports/shopping/item-visibility',
    run: async () => {
      const rows = await client.reports.shopping.itemVisibilityV1ItemVisibilityPost({
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
    operation: 'merchantDistributionV1MerchantDistributionPost',
    method: 'POST',
    path: '/v1/reports/shopping/merchant-distribution',
    run: async () => {
      const rows = await client.reports.shopping.merchantDistributionV1MerchantDistributionPost({
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
    operation: 'merchantVisibilityByBrandV1MerchantVisibilityByBrandPost',
    method: 'POST',
    path: '/v1/reports/shopping/merchant-visibility-by-brand',
    run: async () => {
      const rows = await client.reports.shopping.merchantVisibilityByBrandV1MerchantVisibilityByBrandPost({
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
    operation: 'merchantByItemsV1MerchantByItemsPost',
    method: 'POST',
    path: '/v1/reports/shopping/merchant-by-items',
    run: async () => {
      const rows = await client.reports.shopping.merchantByItemsV1MerchantByItemsPost({
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
    operation: 'allItemsWithMerchantsV1AllItemsWithMerchantsPost',
    method: 'POST',
    path: '/v1/reports/shopping/all-items-with-merchants',
    run: async () => {
      const rows = await client.reports.shopping.allItemsWithMerchantsV1AllItemsWithMerchantsPost({
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
    operation: 'triggerRateV1TriggerRatePost',
    method: 'POST',
    path: '/v1/reports/shopping/trigger-rate',
    run: async () => {
      const rows = await client.reports.shopping.triggerRateV1TriggerRatePost({
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
    operation: 'triggeredPromptsV1TriggeredPromptsPost',
    method: 'POST',
    path: '/v1/reports/shopping/triggered-prompts',
    run: async () => {
      const rows = await client.reports.shopping.triggeredPromptsV1TriggeredPromptsPost({
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
    operation: 'triggeredTopicsV1TriggeredTopicsPost',
    method: 'POST',
    path: '/v1/reports/shopping/triggered-topics',
    run: async () => {
      const rows = await client.reports.shopping.triggeredTopicsV1TriggeredTopicsPost({
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
    operation: 'merchantShareV1MerchantSharePost',
    method: 'POST',
    path: '/v1/reports/shopping/merchant-share',
    run: async () => {
      const rows = await client.reports.shopping.merchantShareV1MerchantSharePost({
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
    operation: 'productMerchantUrlsV1ProductMerchantUrlsPost',
    method: 'POST',
    path: '/v1/reports/shopping/product-merchant-urls',
    run: async () => {
      const rows = await client.reports.shopping.productMerchantURLsV1ProductMerchantURLsPost({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        product_names: [],
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
      });
    },
  },

  {
    operation: 'executionsV1ExecutionsPost',
    method: 'POST',
    path: '/v1/reports/shopping/executions',
    run: async () => {
      const rows = await client.reports.shopping.executionsV1ExecutionsPost({
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
    operation: 'queryBrandsV2V2BrandsPost',
    method: 'POST',
    path: '/v2/reports/shopping/brands',
    run: async () => {
      const queryBrandsV2V2BrandsPost = await client.reports.shopping.queryBrandsV2V2BrandsPost({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        interval: 'day',
        scope: 'owned',
      });
    },
  },

  {
    operation: 'streamBrandsV2V2BrandsStreamPost',
    method: 'POST',
    path: '/v2/reports/shopping/brands/stream',
    run: async () => {
      const stream = await client.reports.shopping.streamBrandsV2V2BrandsStreamPost({
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
    operation: 'queryProductsV2V2ProductsPost',
    method: 'POST',
    path: '/v2/reports/shopping/products',
    run: async () => {
      const queryProductsV2V2ProductsPost = await client.reports.shopping.queryProductsV2V2ProductsPost({
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
    operation: 'streamProductsV2V2ProductsStreamPost',
    method: 'POST',
    path: '/v2/reports/shopping/products/stream',
    run: async () => {
      const stream = await client.reports.shopping.streamProductsV2V2ProductsStreamPost({
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
    operation: 'queryMerchantsV2V2MerchantsPost',
    method: 'POST',
    path: '/v2/reports/shopping/merchants',
    run: async () => {
      const queryMerchantsV2V2MerchantsPost = await client.reports.shopping.queryMerchantsV2V2MerchantsPost({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        interval: 'day',
      });
    },
  },

  {
    operation: 'streamMerchantsV2V2MerchantsStreamPost',
    method: 'POST',
    path: '/v2/reports/shopping/merchants/stream',
    run: async () => {
      const stream = await client.reports.shopping.streamMerchantsV2V2MerchantsStreamPost({
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
    operation: 'queryTriggerRateV2V2TriggerRatePost',
    method: 'POST',
    path: '/v2/reports/shopping/trigger-rate',
    run: async () => {
      const queryTriggerRateV2V2TriggerRatePost =
        await client.reports.shopping.queryTriggerRateV2V2TriggerRatePost({
          category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
          start_date: '',
          end_date: '',
          interval: 'day',
        });
    },
  },

  {
    operation: 'streamTriggerRateV2V2TriggerRateStreamPost',
    method: 'POST',
    path: '/v2/reports/shopping/trigger-rate/stream',
    run: async () => {
      const stream = await client.reports.shopping.streamTriggerRateV2V2TriggerRateStreamPost({
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
    operation: 'overviewV1OverviewPost',
    method: 'POST',
    path: '/v1/reports/accuracy/overview',
    run: async () => {
      const overviewV1OverviewPost = await client.reports.accuracy.overviewV1OverviewPost({
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
    operation: 'breakdownV1BreakdownPost',
    method: 'POST',
    path: '/v1/reports/accuracy/breakdown',
    run: async () => {
      const breakdownV1BreakdownPost = await client.reports.accuracy.breakdownV1BreakdownPost({
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
    operation: 'citationAnalysisV1CitationAnalysisPost',
    method: 'POST',
    path: '/v1/reports/accuracy/citation-analysis',
    run: async () => {
      const citationAnalysisV1CitationAnalysisPost =
        await client.reports.accuracy.citationAnalysisV1CitationAnalysisPost({
          category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
          clean_href: '',
          start_date: '',
          end_date: '',
        });
    },
  },

  {
    operation: 'topicIdsV1TopicIdsPost',
    method: 'POST',
    path: '/v1/reports/accuracy/topic-ids',
    run: async () => {
      const topicIDsV1TopicIDsPost = await client.reports.accuracy.topicIDsV1TopicIDsPost({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
      });
    },
  },

  {
    operation: 'inaccurateThemesV1InaccurateThemesPost',
    method: 'POST',
    path: '/v1/reports/accuracy/inaccurate-themes',
    run: async () => {
      const inaccurateThemesV1InaccurateThemesPost =
        await client.reports.accuracy.inaccurateThemesV1InaccurateThemesPost({
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
    operation: 'inaccurateClustersV1InaccurateClustersPost',
    method: 'POST',
    path: '/v1/reports/accuracy/inaccurate-clusters',
    run: async () => {
      const inaccurateClustersV1InaccurateClustersPost =
        await client.reports.accuracy.inaccurateClustersV1InaccurateClustersPost({
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
    operation: 'inaccuracyDriversV1InaccuracyDriversPost',
    method: 'POST',
    path: '/v1/reports/accuracy/inaccuracy-drivers',
    run: async () => {
      const inaccuracyDriversV1InaccuracyDriversPost =
        await client.reports.accuracy.inaccuracyDriversV1InaccuracyDriversPost({
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
    operation: 'topInaccurateClaimsV1TopInaccurateClaimsPost',
    method: 'POST',
    path: '/v1/reports/accuracy/top-inaccurate-claims',
    run: async () => {
      const topInaccurateClaimsV1TopInaccurateClaimsPost =
        await client.reports.accuracy.topInaccurateClaimsV1TopInaccurateClaimsPost({
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
    operation: 'claimBreakdownV1ClaimBreakdownPost',
    method: 'POST',
    path: '/v1/reports/accuracy/claim-breakdown',
    run: async () => {
      const claimBreakdownV1ClaimBreakdownPost =
        await client.reports.accuracy.claimBreakdownV1ClaimBreakdownPost({
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
    operation: 'claimCitationsV1ClaimCitationsPost',
    method: 'POST',
    path: '/v1/reports/accuracy/claim-citations',
    run: async () => {
      const claimCitationsV1ClaimCitationsPost =
        await client.reports.accuracy.claimCitationsV1ClaimCitationsPost({
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
    operation: 'clusterExampleRunsV1ClusterExampleRunsPost',
    method: 'POST',
    path: '/v1/reports/accuracy/cluster-example-runs',
    run: async () => {
      const clusterExampleRunsV1ClusterExampleRunsPost =
        await client.reports.accuracy.clusterExampleRunsV1ClusterExampleRunsPost({
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
    operation: 'clusterVerificationPairsV1ClusterVerificationPairsPost',
    method: 'POST',
    path: '/v1/reports/accuracy/cluster-verification-pairs',
    run: async () => {
      const clusterVerificationPairsV1ClusterVerificationPairsPost =
        await client.reports.accuracy.clusterVerificationPairsV1ClusterVerificationPairsPost({
          category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
          cluster_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        });
    },
  },

  {
    operation: 'factcheckSetupStatusV1FactcheckSetupStatusPost',
    method: 'POST',
    path: '/v1/reports/accuracy/factcheck-setup-status',
    run: async () => {
      const factcheckSetupStatusV1FactcheckSetupStatusPost =
        await client.reports.accuracy.factcheckSetupStatusV1FactcheckSetupStatusPost({
          category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        });
    },
  },

  {
    operation: 'queryScoresV2Post',
    method: 'POST',
    path: '/v2/reports/factcheck',
    run: async () => {
      const queryScoresV2Post = await client.reports.factcheck.queryScoresV2Post({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
      });
    },
  },

  {
    operation: 'streamScoresV2StreamPost',
    method: 'POST',
    path: '/v2/reports/factcheck/stream',
    run: async () => {
      const stream = await client.reports.factcheck.streamScoresV2StreamPost({
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
    operation: 'queryClaimsV2ClaimsPost',
    method: 'POST',
    path: '/v2/reports/factcheck/claims',
    run: async () => {
      const queryClaimsV2ClaimsPost = await client.reports.factcheck.queryClaimsV2ClaimsPost({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
      });
    },
  },

  {
    operation: 'streamClaimsV2ClaimsStreamPost',
    method: 'POST',
    path: '/v2/reports/factcheck/claims/stream',
    run: async () => {
      const stream = await client.reports.factcheck.streamClaimsV2ClaimsStreamPost({
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
    operation: 'queryYoutubeChannelsV2YoutubeChannelsPost',
    method: 'POST',
    path: '/v2/reports/social/youtube/channels',
    run: async () => {
      const queryYoutubeChannelsV2YoutubeChannelsPost =
        await client.reports.social.queryYoutubeChannelsV2YoutubeChannelsPost({
          category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
          start_date: '',
          end_date: '',
        });
    },
  },

  {
    operation: 'queryYoutubeVideosV2YoutubeVideosPost',
    method: 'POST',
    path: '/v2/reports/social/youtube/videos',
    run: async () => {
      const queryYoutubeVideosV2YoutubeVideosPost =
        await client.reports.social.queryYoutubeVideosV2YoutubeVideosPost({
          category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
          start_date: '',
          end_date: '',
          attribution: 'attributed',
        });
    },
  },

  {
    operation: 'queryYoutubeSummaryV2YoutubeSummaryPost',
    method: 'POST',
    path: '/v2/reports/social/youtube/summary',
    run: async () => {
      const queryYoutubeSummaryV2YoutubeSummaryPost =
        await client.reports.social.queryYoutubeSummaryV2YoutubeSummaryPost({
          category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
          start_date: '',
          end_date: '',
        });
    },
  },

  {
    operation: 'listV1AssetIdGet',
    method: 'GET',
    path: '/v1/content/{asset_id}/optimization',
    run: async () => {
      const listV1AssetIDGet = await client.content.optimization.listV1AssetIDGet(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          limit: 10000,
          offset: 0,
        },
      );
    },
  },

  {
    operation: 'analysisV1AssetIdIdGet',
    method: 'GET',
    path: '/v1/content/{asset_id}/optimization/{content_id}',
    run: async () => {
      const analysisV1AssetIDIDGet = await client.content.optimization.analysisV1AssetIDIDGet(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          asset_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        },
      );
    },
  },

  {
    operation: 'listV1Get',
    method: 'GET',
    path: '/v1/knowledge-bases',
    run: async () => {
      const listV1Get = await client.knowledgeBases.listV1Get();
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
    operation: 'createV1IdPost',
    method: 'POST',
    path: '/v1/knowledge-bases/{knowledge_base_id}/documents',
    run: async () => {
      const operation = await client.knowledgeBases.documents.createV1IDPost(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          name: 'x',
          text: 'x',
        },
      );
    },
  },

  {
    operation: 'updateV1IdPut',
    method: 'PUT',
    path: '/v1/knowledge-bases/{knowledge_base_id}/documents',
    run: async () => {
      const operation = await client.knowledgeBases.documents.updateV1IDPut(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          name: 'x',
          text: 'x',
        },
      );
    },
  },

  {
    operation: 'deleteV1IdDelete',
    method: 'DELETE',
    path: '/v1/knowledge-bases/{knowledge_base_id}/documents',
    run: async () => {
      const operation = await client.knowledgeBases.documents.deleteV1IDDelete(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          name: 'x',
        },
      );
    },
  },

  {
    operation: 'createV1IdPost',
    method: 'POST',
    path: '/v1/knowledge-bases/{knowledge_base_id}/folders',
    run: async () => {
      const createV1IDPost = await client.knowledgeBases.folders.createV1IDPost(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          path: 'x',
        },
      );
    },
  },

  {
    operation: 'deleteV1IdDelete',
    method: 'DELETE',
    path: '/v1/knowledge-bases/{knowledge_base_id}/folders',
    run: async () => {
      const deleteV1IDDelete = await client.knowledgeBases.folders.deleteV1IDDelete(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          path: 'x',
          recursive: false,
        },
      );
    },
  },

  {
    operation: 'listV1Get',
    method: 'GET',
    path: '/v1/integrations',
    run: async () => {
      const listV1Get = await client.integrations.listV1Get();
    },
  },

  {
    operation: 'listV1Get',
    method: 'GET',
    path: '/v1/documents',
    run: async () => {
      const listV1Get = await client.documents.listV1Get({
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 20,
      });
    },
  },

  {
    operation: 'createV1Post',
    method: 'POST',
    path: '/v1/documents',
    run: async () => {
      const createV1Post = await client.documents.createV1Post({
        id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        name: 'x',
        content_markdown: 'x',
      });
    },
  },

  {
    operation: 'readV1IdGet',
    method: 'GET',
    path: '/v1/documents/{document_id}',
    run: async () => {
      const readV1IDGet = await client.documents.readV1IDGet('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        include_tabs: true,
        include_comments: true,
        preview: true,
      });
    },
  },

  {
    operation: 'patchV1IdPatch',
    method: 'PATCH',
    path: '/v1/documents/{document_id}',
    run: async () => {
      const patchV1IDPatch = await client.documents.patchV1IDPatch('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'deleteV1IdDelete',
    method: 'DELETE',
    path: '/v1/documents/{document_id}',
    run: async () => {
      await client.documents.deleteV1IDDelete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'replaceContentV1IdContentPost',
    method: 'POST',
    path: '/v1/documents/{document_id}/content',
    run: async () => {
      const replaceContentV1IDContentPost = await client.documents.replaceContentV1IDContentPost(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
          content_markdown: '',
          skip_title_sync: false,
        },
      );
    },
  },

  {
    operation: 'listAccountInsightsV1OpenaiAccountInsightsGet',
    method: 'GET',
    path: '/v1/ads/openai-ads/ad-account/insights',
    run: async () => {
      const listAccountInsightsV1OpenAIAccountInsightsGet =
        await client.openAIAds.listAccountInsightsV1OpenAIAccountInsightsGet();
    },
  },

  {
    operation: 'listV1Get',
    method: 'GET',
    path: '/v1/projects',
    run: async () => {
      const listV1Get = await client.projects.listV1Get({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 100,
        offset: 0,
      });
    },
  },

  {
    operation: 'createV1Post',
    method: 'POST',
    path: '/v1/projects',
    run: async () => {
      const createV1Post = await client.projects.createV1Post({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'retrieveV1Get',
    method: 'GET',
    path: '/v1/projects/{project_id}',
    run: async () => {
      const retrieveV1Get = await client.projects.retrieveV1Get('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'deleteV1IdDelete',
    method: 'DELETE',
    path: '/v1/projects/{project_id}',
    run: async () => {
      await client.projects.deleteV1IDDelete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'listStatusV1StatusGet',
    method: 'GET',
    path: '/v1/projects/{project_id}/status',
    run: async () => {
      const listStatusV1StatusGet = await client.projects.listStatusV1StatusGet(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        },
      );
    },
  },

  {
    operation: 'archiveV1IdArchivePost',
    method: 'POST',
    path: '/v1/projects/{project_id}/archive',
    run: async () => {
      const archiveV1IDArchivePost = await client.projects.archiveV1IDArchivePost(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        },
      );
    },
  },

  {
    operation: 'unarchiveV1IdUnarchivePost',
    method: 'POST',
    path: '/v1/projects/{project_id}/unarchive',
    run: async () => {
      const unarchiveV1IDUnarchivePost = await client.projects.unarchiveV1IDUnarchivePost(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        },
      );
    },
  },

  {
    operation: 'listV1Get',
    method: 'GET',
    path: '/v1/projects/generations',
    run: async () => {
      const listV1Get = await client.projects.generations.listV1Get({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 100,
        offset: 0,
      });
    },
  },

  {
    operation: 'retrieveStatusV1RunGet',
    method: 'GET',
    path: '/v1/projects/generations/{run_id}',
    run: async () => {
      const retrieveStatusV1RunGet = await client.projects.generations.retrieveStatusV1RunGet(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        },
      );
    },
  },

  {
    operation: 'listV1IdGet',
    method: 'GET',
    path: '/v1/projects/{project_id}/tasks',
    run: async () => {
      const listV1IDGet = await client.projects.tasks.listV1IDGet('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'createV1IdPost',
    method: 'POST',
    path: '/v1/projects/{project_id}/tasks',
    run: async () => {
      const createV1IDPost = await client.projects.tasks.createV1IDPost(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
          title: 'x',
        },
      );
    },
  },

  {
    operation: 'retrieveV1Get',
    method: 'GET',
    path: '/v1/projects/{project_id}/tasks/{task_id}',
    run: async () => {
      const retrieveV1Get = await client.projects.tasks.retrieveV1Get(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          project_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
          category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        },
      );
    },
  },

  {
    operation: 'updateV1IdIdPatch',
    method: 'PATCH',
    path: '/v1/projects/{project_id}/tasks/{task_id}',
    run: async () => {
      const updateV1IDIDPatch = await client.projects.tasks.updateV1IDIDPatch(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          project_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
          category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        },
      );
    },
  },

  {
    operation: 'deleteV1IdIdDelete',
    method: 'DELETE',
    path: '/v1/projects/{project_id}/tasks/{task_id}',
    run: async () => {
      await client.projects.tasks.deleteV1IDIDDelete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        project_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'updateStatusV1IdIdStatusPost',
    method: 'POST',
    path: '/v1/projects/{project_id}/tasks/{task_id}/status',
    run: async () => {
      const updateStatusV1IDIDStatusPost = await client.projects.tasks.updateStatusV1IDIDStatusPost(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          project_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
          category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
          status: 'not_started',
        },
      );
    },
  },

  {
    operation: 'listV1Get',
    method: 'GET',
    path: '/v1/agents',
    run: async () => {
      const listV1Get = await client.agents.listV1Get({
        limit: 100,
      });
    },
  },

  {
    operation: 'createV1Post',
    method: 'POST',
    path: '/v1/agents',
    run: async () => {
      const agent = await client.agents.createV1Post({
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        name: 'x',
      });
    },
  },

  {
    operation: 'publishV1IdPublishPost',
    method: 'POST',
    path: '/v1/agents/{agent_id}/publish',
    run: async () => {
      const agent = await client.agents.publishV1IDPublishPost('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'retrieveV1Get',
    method: 'GET',
    path: '/v1/agents/{agent_id}',
    run: async () => {
      const retrieveV1Get = await client.agents.retrieveV1Get('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'updateV1IdPatch',
    method: 'PATCH',
    path: '/v1/agents/{agent_id}',
    run: async () => {
      const updateV1IDPatch = await client.agents.updateV1IDPatch('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        graph: {},
      });
    },
  },

  {
    operation: 'listGraphV1GraphGet',
    method: 'GET',
    path: '/v1/agents/{agent_id}/graph',
    run: async () => {
      const listGraphV1GraphGet = await client.agents.listGraphV1GraphGet(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      );
    },
  },

  {
    operation: 'listV1Get',
    method: 'GET',
    path: '/v1/agents/node-types',
    run: async () => {
      const listV1Get = await client.agents.nodeTypes.listV1Get();
    },
  },

  {
    operation: 'listSchemaV1SchemaGet',
    method: 'GET',
    path: '/v1/agents/node-types/{node_type}/schema',
    run: async () => {
      const listSchemaV1SchemaGet = await client.agents.nodeTypes.listSchemaV1SchemaGet('nodeType');
    },
  },

  {
    operation: 'v1IdPost',
    method: 'POST',
    path: '/v1/agents/{agent_id}/runs',
    run: async () => {
      const v1IDPost = await client.agents.runs.v1IDPost('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'retrieveV1Get',
    method: 'GET',
    path: '/v1/agents/{agent_id}/runs/{run_id}',
    run: async () => {
      const retrieveV1Get = await client.agents.runs.retrieveV1Get('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        agent_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        verbose: false,
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

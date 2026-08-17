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
import { writeFileSync } from 'node:fs'

// The default export is the client class. The client reads auth and the base URL from the
// environment, so it needs no constructor options to point at a server.
import Profound from "@profoundai/client"

// One shared client runs every case.
const client = new Profound()

// The result of running one case, collected for the JSON report or the printed table.
type SmokeResult = {
  operation: string
  method: string
  path: string
  status: 'passed' | 'failed'
  durationMs: number
  error?: string
}

// One entry per generated operation. `run` performs the real SDK call; the other fields are
// metadata used for filtering and reporting. This list is generated, so it stays in sync with
// the SDK surface.
const cases: { operation: string; method: string; path: string; run: () => Promise<unknown> }[] = [
  {
    operation: "listCategoryRegionsV1OrgCategoriesCategoryRegionsGet",
    method: "GET",
    path: "/v1/org/categories/{category_id}/regions",
    run: async () => {
      const listCategoryRegionsV1OrgCategoriesCategoryRegionsGet = await client.organization.listCategoryRegionsV1OrgCategoriesCategoryRegionsGet("categoryId");
    },
  },

  {
    operation: "createV1PromptsPost",
    method: "POST",
    path: "/v1/prompts/answers",
    run: async () => {
      const createV1PromptsPost = await client.prompts.answers.createV1PromptsPost({
        category_id: "",
        start_date: "",
        end_date: "",
      });
    },
  },

  {
    operation: "queryV2V2PromptsPost",
    method: "POST",
    path: "/v2/prompts/answers",
    run: async () => {
      const queryV2V2PromptsPost = await client.prompts.answers.queryV2V2PromptsPost({
        category_id: "",
        start_date: "",
        end_date: "",
      });
    },
  },

  {
    operation: "streamV2V2PromptsStreamPost",
    method: "POST",
    path: "/v2/prompts/answers/stream",
    run: async () => {
      const stream = await client.prompts.answers.streamV2V2PromptsStreamPost({
        category_id: "",
        start_date: "",
        end_date: "",
      });
      for await (const event of stream) {
        console.log(event);
      }
    },
  },

  {
    operation: "querySentimentV2V1SentimentV2Post",
    method: "POST",
    path: "/v1/reports/sentiment-v2",
    run: async () => {
      const querySentimentV2V1SentimentV2Post = await client.reports.querySentimentV2V1SentimentV2Post({
        category_id: "",
        asset_name: "",
        start_date: "",
        end_date: "",
        date_interval: "day",
        metrics: [],
      });
    },
  },

  {
    operation: "queryV1ReportsPost",
    method: "POST",
    path: "/v1/reports/citations",
    run: async () => {
      const queryV1ReportsPost = await client.reports.citations.queryV1ReportsPost({
        date_interval: "day",
        dimensions: [],
        metrics: [],
        order_by: {},
        category_id: "",
        start_date: "",
        end_date: "",
      });
    },
  },

  {
    operation: "streamV1ReportsStreamPost",
    method: "POST",
    path: "/v1/reports/citations/stream",
    run: async () => {
      const stream = await client.reports.citations.streamV1ReportsStreamPost({
        date_interval: "day",
        dimensions: [],
        metrics: [],
        order_by: {},
        category_id: "",
        start_date: "",
        end_date: "",
      });
      for await (const event of stream) {
        console.log(event);
      }
    },
  },

  {
    operation: "queryV2V2ReportsPost",
    method: "POST",
    path: "/v2/reports/citations",
    run: async () => {
      const queryV2V2ReportsPost = await client.reports.citations.queryV2V2ReportsPost({
        category_id: "",
        start_date: "",
        end_date: "",
        interval: "day",
        scope: "all",
      });
    },
  },

  {
    operation: "streamV2V2ReportsStreamPost",
    method: "POST",
    path: "/v2/reports/citations/stream",
    run: async () => {
      const stream = await client.reports.citations.streamV2V2ReportsStreamPost({
        category_id: "",
        start_date: "",
        end_date: "",
        interval: "day",
        scope: "all",
      });
      for await (const event of stream) {
        console.log(event);
      }
    },
  },

  {
    operation: "queryV1ReportsPost",
    method: "POST",
    path: "/v1/reports/visibility",
    run: async () => {
      const report = await client.reports.visibility.queryV1ReportsPost({
        date_interval: "day",
        dimensions: [],
        metrics: [],
        order_by: {},
        category_id: "",
        start_date: "",
        end_date: "",
      });
    },
  },

  {
    operation: "streamV1ReportsStreamPost",
    method: "POST",
    path: "/v1/reports/visibility/stream",
    run: async () => {
      const stream = await client.reports.visibility.streamV1ReportsStreamPost({
        date_interval: "day",
        dimensions: [],
        metrics: [],
        order_by: {},
        category_id: "",
        start_date: "",
        end_date: "",
      });
      for await (const event of stream) {
        console.log(event);
      }
    },
  },

  {
    operation: "queryV2V2ReportsPost",
    method: "POST",
    path: "/v2/reports/visibility",
    run: async () => {
      const queryV2V2ReportsPost = await client.reports.visibility.queryV2V2ReportsPost({
        category_id: "",
        start_date: "",
        end_date: "",
        interval: "day",
        scope: "owned",
      });
    },
  },

  {
    operation: "streamV2V2ReportsStreamPost",
    method: "POST",
    path: "/v2/reports/visibility/stream",
    run: async () => {
      const stream = await client.reports.visibility.streamV2V2ReportsStreamPost({
        category_id: "",
        start_date: "",
        end_date: "",
        interval: "day",
        scope: "owned",
      });
      for await (const event of stream) {
        console.log(event);
      }
    },
  },

  {
    operation: "queryV1ReportsPost",
    method: "POST",
    path: "/v1/reports/sentiment",
    run: async () => {
      const report = await client.reports.sentiment.queryV1ReportsPost({
        date_interval: "day",
        dimensions: [],
        metrics: [],
        order_by: {},
        category_id: "",
        start_date: "",
        end_date: "",
      });
    },
  },

  {
    operation: "streamV1ReportsStreamPost",
    method: "POST",
    path: "/v1/reports/sentiment/stream",
    run: async () => {
      const stream = await client.reports.sentiment.streamV1ReportsStreamPost({
        date_interval: "day",
        dimensions: [],
        metrics: [],
        order_by: {},
        category_id: "",
        start_date: "",
        end_date: "",
      });
      for await (const event of stream) {
        console.log(event);
      }
    },
  },

  {
    operation: "queryV2V2ReportsPost",
    method: "POST",
    path: "/v2/reports/sentiment",
    run: async () => {
      const queryV2V2ReportsPost = await client.reports.sentiment.queryV2V2ReportsPost({
        category_id: "",
        asset: "",
        start_date: "",
        end_date: "",
        interval: "day",
        include_cited_websites: false,
      });
    },
  },

  {
    operation: "streamV2V2ReportsStreamPost",
    method: "POST",
    path: "/v2/reports/sentiment/stream",
    run: async () => {
      const stream = await client.reports.sentiment.streamV2V2ReportsStreamPost({
        category_id: "",
        asset: "",
        start_date: "",
        end_date: "",
        interval: "day",
        include_cited_websites: false,
      });
      for await (const event of stream) {
        console.log(event);
      }
    },
  },

  {
    operation: "query",
    method: "POST",
    path: "/v1/reports/web-search-results",
    run: async () => {
      const query = await client.reports.webSearchResults.query({
        date_interval: "day",
        dimensions: [],
        metrics: [],
        order_by: {},
        category_id: "",
        start_date: "",
        end_date: "",
      });
    },
  },

  {
    operation: "stream",
    method: "POST",
    path: "/v1/reports/web-search-results/stream",
    run: async () => {
      const stream = await client.reports.webSearchResults.stream({
        date_interval: "day",
        dimensions: [],
        metrics: [],
        order_by: {},
        category_id: "",
        start_date: "",
        end_date: "",
      });
      for await (const event of stream) {
        console.log(event);
      }
    },
  },

  {
    operation: "createReportV1V1ReportsPost",
    method: "POST",
    path: "/v1/reports/referrals",
    run: async () => {
      const report = await client.reports.referrals.createReportV1V1ReportsPost({
        date_interval: "day",
        dimensions: [],
        metrics: [],
        order_by: {},
        domain: "",
        start_date: "",
      });
    },
  },

  {
    operation: "createReportV2V2ReportsPost",
    method: "POST",
    path: "/v2/reports/referrals",
    run: async () => {
      const report = await client.reports.referrals.createReportV2V2ReportsPost({
        date_interval: "day",
        dimensions: [],
        metrics: [],
        order_by: {},
        domain: "",
        start_date: "",
      });
    },
  },

  {
    operation: "createReportV1V1ReportsPost",
    method: "POST",
    path: "/v1/reports/bots",
    run: async () => {
      const report = await client.reports.bots.createReportV1V1ReportsPost({
        date_interval: "day",
        dimensions: [],
        metrics: [],
        order_by: {},
        domain: "",
        start_date: "",
      });
    },
  },

  {
    operation: "createReportV2V2ReportsPost",
    method: "POST",
    path: "/v2/reports/bots",
    run: async () => {
      const report = await client.reports.bots.createReportV2V2ReportsPost({
        date_interval: "day",
        dimensions: [],
        metrics: [],
        order_by: {},
        domain: "",
        start_date: "",
      });
    },
  },

  {
    operation: "v1ReportsPost",
    method: "POST",
    path: "/v1/reports/query-fanouts",
    run: async () => {
      const report = await client.reports.queryFanouts.v1ReportsPost({
        date_interval: "day",
        dimensions: [],
        metrics: [],
        order_by: {},
        category_id: "",
        start_date: "",
        end_date: "",
      });
    },
  },

  {
    operation: "v2V2ReportsPost",
    method: "POST",
    path: "/v2/reports/query-fanouts",
    run: async () => {
      const v2V2ReportsPost = await client.reports.queryFanouts.v2V2ReportsPost({
        category_id: "",
        start_date: "",
        end_date: "",
        interval: "day",
      });
    },
  },

  {
    operation: "streamV2V2ReportsStreamPost",
    method: "POST",
    path: "/v2/reports/query-fanouts/stream",
    run: async () => {
      const stream = await client.reports.queryFanouts.streamV2V2ReportsStreamPost({
        category_id: "",
        start_date: "",
        end_date: "",
        interval: "day",
      });
      for await (const event of stream) {
        console.log(event);
      }
    },
  },

  {
    operation: "visibility",
    method: "POST",
    path: "/v1/reports/shopping/visibility",
    run: async () => {
      const visibility = await client.reports.shopping.visibility({
        category_id: "",
        start_date: "",
        end_date: "",
        date_interval: "day",
        include_count: false,
        tag_filter_type: "any",
        include_no_tag: false,
        exclude_topic_ids: false,
        include_asset_only: false,
        rank_by: "visibility_score",
        include_position_frequency: false,
      });
    },
  },

  {
    operation: "itemVisibility",
    method: "POST",
    path: "/v1/reports/shopping/item-visibility",
    run: async () => {
      const itemVisibility = await client.reports.shopping.itemVisibility({
        category_id: "",
        start_date: "",
        end_date: "",
        date_interval: "day",
        include_count: false,
        tag_filter_type: "any",
        include_no_tag: false,
        exclude_topic_ids: false,
        merchant_filter_type: "any",
        include_competitors: false,
        competitor_limit: 5,
        include_position_frequency: false,
      });
    },
  },

  {
    operation: "merchantDistribution",
    method: "POST",
    path: "/v1/reports/shopping/merchant-distribution",
    run: async () => {
      const merchantDistribution = await client.reports.shopping.merchantDistribution({
        category_id: "",
        start_date: "",
        end_date: "",
        date_interval: "day",
        include_count: false,
        tag_filter_type: "any",
        include_no_tag: false,
        exclude_topic_ids: false,
      });
    },
  },

  {
    operation: "merchantVisibilityByBrand",
    method: "POST",
    path: "/v1/reports/shopping/merchant-visibility-by-brand",
    run: async () => {
      const merchantVisibilityByBrand = await client.reports.shopping.merchantVisibilityByBrand({
        category_id: "",
        start_date: "",
        end_date: "",
        date_interval: "day",
        include_count: false,
        tag_filter_type: "any",
        include_no_tag: false,
        exclude_topic_ids: false,
        include_brand_only: false,
      });
    },
  },

  {
    operation: "merchantByItems",
    method: "POST",
    path: "/v1/reports/shopping/merchant-by-items",
    run: async () => {
      const merchantByItems = await client.reports.shopping.merchantByItems({
        category_id: "",
        start_date: "",
        end_date: "",
        date_interval: "day",
        include_count: false,
        tag_filter_type: "any",
        include_no_tag: false,
        exclude_topic_ids: false,
      });
    },
  },

  {
    operation: "allItemsWithMerchants",
    method: "POST",
    path: "/v1/reports/shopping/all-items-with-merchants",
    run: async () => {
      const allItemsWithMerchants = await client.reports.shopping.allItemsWithMerchants({
        category_id: "",
        start_date: "",
        end_date: "",
        date_interval: "day",
        include_count: false,
        tag_filter_type: "any",
        include_no_tag: false,
        exclude_topic_ids: false,
        merchant_filter_type: "any",
        rank_by: "visibility",
        sort_order: "desc",
      });
    },
  },

  {
    operation: "triggerRate",
    method: "POST",
    path: "/v1/reports/shopping/trigger-rate",
    run: async () => {
      const triggerRate = await client.reports.shopping.triggerRate({
        category_id: "",
        start_date: "",
        end_date: "",
        date_interval: "day",
        include_count: false,
        tag_filter_type: "any",
        include_no_tag: false,
        exclude_topic_ids: false,
      });
    },
  },

  {
    operation: "merchantShare",
    method: "POST",
    path: "/v1/reports/shopping/merchant-share",
    run: async () => {
      const merchantShare = await client.reports.shopping.merchantShare({
        category_id: "",
        start_date: "",
        end_date: "",
        date_interval: "day",
        include_count: false,
        tag_filter_type: "any",
        include_no_tag: false,
        exclude_topic_ids: false,
      });
    },
  },

  {
    operation: "productMerchantUrls",
    method: "POST",
    path: "/v1/reports/shopping/product-merchant-urls",
    run: async () => {
      const productMerchantURLs = await client.reports.shopping.productMerchantURLs({
        category_id: "",
        product_names: [],
        start_date: "",
        end_date: "",
      });
    },
  },

  {
    operation: "executions",
    method: "POST",
    path: "/v1/reports/shopping/executions",
    run: async () => {
      const executions = await client.reports.shopping.executions({
        category_id: "",
        start_date: "",
        end_date: "",
        date_interval: "day",
        include_count: false,
        tag_filter_type: "any",
        include_no_tag: false,
        exclude_topic_ids: false,
        analysis_filter_type: "any",
      });
    },
  },

  {
    operation: "overviewV1ReportsOverviewPost",
    method: "POST",
    path: "/v1/reports/accuracy/overview",
    run: async () => {
      const overviewV1ReportsOverviewPost = await client.reports.accuracy.overviewV1ReportsOverviewPost({
        start_date: "",
        end_date: "",
        category_id: "",
        exclude_topic_ids: false,
        tag_filter_type: "any",
        include_no_tag: true,
        include_no_persona: true,
        group_by: "period",
      });
    },
  },

  {
    operation: "breakdownV1ReportsBreakdownPost",
    method: "POST",
    path: "/v1/reports/accuracy/breakdown",
    run: async () => {
      const breakdownV1ReportsBreakdownPost = await client.reports.accuracy.breakdownV1ReportsBreakdownPost({
        start_date: "",
        end_date: "",
        category_id: "",
        exclude_topic_ids: false,
        tag_filter_type: "any",
        include_no_tag: true,
        include_no_persona: true,
        breakdown_by: "citation",
        limit: 10,
        offset: 0,
        sort_by: "citationShare",
        sort_order: "desc",
      });
    },
  },

  {
    operation: "citationAnalysisV1ReportsCitationAnalysisPost",
    method: "POST",
    path: "/v1/reports/accuracy/citation-analysis",
    run: async () => {
      const citationAnalysisV1ReportsCitationAnalysisPost = await client.reports.accuracy.citationAnalysisV1ReportsCitationAnalysisPost({
        category_id: "",
        clean_href: "",
        start_date: "",
        end_date: "",
      });
    },
  },

  {
    operation: "topicIdsV1ReportsTopicIdsPost",
    method: "POST",
    path: "/v1/reports/accuracy/topic-ids",
    run: async () => {
      const topicIDsV1ReportsTopicIDsPost = await client.reports.accuracy.topicIDsV1ReportsTopicIDsPost({
        category_id: "",
        start_date: "",
        end_date: "",
      });
    },
  },

  {
    operation: "inaccurateThemesV1ReportsInaccurateThemesPost",
    method: "POST",
    path: "/v1/reports/accuracy/inaccurate-themes",
    run: async () => {
      const inaccurateThemesV1ReportsInaccurateThemesPost = await client.reports.accuracy.inaccurateThemesV1ReportsInaccurateThemesPost({
        start_date: "",
        end_date: "",
        category_id: "",
        exclude_topic_ids: false,
        tag_filter_type: "any",
        include_no_tag: true,
        include_no_persona: true,
        limit: 10,
        offset: 0,
        sort_by: "response_share",
        sort_order: "desc",
      });
    },
  },

  {
    operation: "inaccurateClustersV1ReportsInaccurateClustersPost",
    method: "POST",
    path: "/v1/reports/accuracy/inaccurate-clusters",
    run: async () => {
      const inaccurateClustersV1ReportsInaccurateClustersPost = await client.reports.accuracy.inaccurateClustersV1ReportsInaccurateClustersPost({
        start_date: "",
        end_date: "",
        category_id: "",
        exclude_topic_ids: false,
        tag_filter_type: "any",
        include_no_tag: true,
        include_no_persona: true,
        theme_id: "",
        limit: 5000,
        offset: 0,
      });
    },
  },

  {
    operation: "inaccuracyDriversV1ReportsInaccuracyDriversPost",
    method: "POST",
    path: "/v1/reports/accuracy/inaccuracy-drivers",
    run: async () => {
      const inaccuracyDriversV1ReportsInaccuracyDriversPost = await client.reports.accuracy.inaccuracyDriversV1ReportsInaccuracyDriversPost({
        start_date: "",
        end_date: "",
        category_id: "",
        exclude_topic_ids: false,
        tag_filter_type: "any",
        include_no_tag: true,
        include_no_persona: true,
        limit: 5,
      });
    },
  },

  {
    operation: "topInaccurateClaimsV1ReportsTopInaccurateClaimsPost",
    method: "POST",
    path: "/v1/reports/accuracy/top-inaccurate-claims",
    run: async () => {
      const topInaccurateClaimsV1ReportsTopInaccurateClaimsPost = await client.reports.accuracy.topInaccurateClaimsV1ReportsTopInaccurateClaimsPost({
        start_date: "",
        end_date: "",
        category_id: "",
        exclude_topic_ids: false,
        tag_filter_type: "any",
        include_no_tag: true,
        include_no_persona: true,
        limit: 5,
      });
    },
  },

  {
    operation: "claimBreakdownV1ReportsClaimBreakdownPost",
    method: "POST",
    path: "/v1/reports/accuracy/claim-breakdown",
    run: async () => {
      const claimBreakdownV1ReportsClaimBreakdownPost = await client.reports.accuracy.claimBreakdownV1ReportsClaimBreakdownPost({
        start_date: "",
        end_date: "",
        category_id: "",
        exclude_topic_ids: false,
        tag_filter_type: "any",
        include_no_tag: true,
        include_no_persona: true,
        cluster_id: "",
      });
    },
  },

  {
    operation: "claimCitationsV1ReportsClaimCitationsPost",
    method: "POST",
    path: "/v1/reports/accuracy/claim-citations",
    run: async () => {
      const claimCitationsV1ReportsClaimCitationsPost = await client.reports.accuracy.claimCitationsV1ReportsClaimCitationsPost({
        start_date: "",
        end_date: "",
        category_id: "",
        exclude_topic_ids: false,
        tag_filter_type: "any",
        include_no_tag: true,
        include_no_persona: true,
        cluster_id: "",
        limit: 10,
        offset: 0,
        sort_order: "desc",
      });
    },
  },

  {
    operation: "clusterExampleRunsV1ReportsClusterExampleRunsPost",
    method: "POST",
    path: "/v1/reports/accuracy/cluster-example-runs",
    run: async () => {
      const clusterExampleRunsV1ReportsClusterExampleRunsPost = await client.reports.accuracy.clusterExampleRunsV1ReportsClusterExampleRunsPost({
        category_id: "",
        cluster_id: "",
        start_date: "",
        end_date: "",
        limit: 20,
        offset: 0,
      });
    },
  },

  {
    operation: "clusterVerificationPairsV1ReportsClusterVerificationPairsPost",
    method: "POST",
    path: "/v1/reports/accuracy/cluster-verification-pairs",
    run: async () => {
      const clusterVerificationPairsV1ReportsClusterVerificationPairsPost = await client.reports.accuracy.clusterVerificationPairsV1ReportsClusterVerificationPairsPost({
        category_id: "",
        cluster_id: "",
      });
    },
  },

  {
    operation: "factcheckSetupStatusV1ReportsFactcheckSetupStatusPost",
    method: "POST",
    path: "/v1/reports/accuracy/factcheck-setup-status",
    run: async () => {
      const factcheckSetupStatusV1ReportsFactcheckSetupStatusPost = await client.reports.accuracy.factcheckSetupStatusV1ReportsFactcheckSetupStatusPost({
        category_id: "",
      });
    },
  },

  {
    operation: "list",
    method: "GET",
    path: "/v1/content/{asset_id}/optimization",
    run: async () => {
      const list = await client.content.optimization.list("assetId", {
        limit: 10000,
        offset: 0,
      });
    },
  },

  {
    operation: "retrieve",
    method: "GET",
    path: "/v1/content/{asset_id}/optimization/{content_id}",
    run: async () => {
      const retrieve = await client.content.optimization.retrieve("contentId", {
        asset_id: "assetId",
      });
    },
  },

  {
    operation: "list",
    method: "GET",
    path: "/v1/knowledge-bases",
    run: async () => {
      const list = await client.knowledgeBases.list();
    },
  },

  {
    operation: "search",
    method: "POST",
    path: "/v1/knowledge-bases/{knowledge_base_id}/search",
    run: async () => {
      const search = await client.knowledgeBases.search("knowledgeBaseId", {
        query: "",
        top_k: 0,
        return_full_page: false,
      });
    },
  },

  {
    operation: "create",
    method: "POST",
    path: "/v1/knowledge-bases/{knowledge_base_id}/documents",
    run: async () => {
      const create = await client.knowledgeBases.documents.create("knowledgeBaseId", {
        name: "",
        text: "",
      });
    },
  },

  {
    operation: "update",
    method: "PUT",
    path: "/v1/knowledge-bases/{knowledge_base_id}/documents",
    run: async () => {
      const update = await client.knowledgeBases.documents.update("knowledgeBaseId", {
        name: "",
        text: "",
      });
    },
  },

  {
    operation: "delete",
    method: "DELETE",
    path: "/v1/knowledge-bases/{knowledge_base_id}/documents",
    run: async () => {
      const delete_ = await client.knowledgeBases.documents.delete("knowledgeBaseId", {
        name: "",
      });
    },
  },

  {
    operation: "create",
    method: "POST",
    path: "/v1/knowledge-bases/{knowledge_base_id}/folders",
    run: async () => {
      const create = await client.knowledgeBases.folders.create("knowledgeBaseId", {
        path: "",
      });
    },
  },

  {
    operation: "delete",
    method: "DELETE",
    path: "/v1/knowledge-bases/{knowledge_base_id}/folders",
    run: async () => {
      const delete_ = await client.knowledgeBases.folders.delete("knowledgeBaseId", {
        path: "",
        recursive: false,
      });
    },
  },

  {
    operation: "list",
    method: "GET",
    path: "/v1/agents",
    run: async () => {
      const list = await client.agents.list({
        limit: 100,
      });
    },
  },

  {
    operation: "createV1Post",
    method: "POST",
    path: "/v1/agents",
    run: async () => {
      const createV1Post = await client.agents.createV1Post({
        organization_id: "",
        name: "",
      });
    },
  },

  {
    operation: "publishV1IdPublishPost",
    method: "POST",
    path: "/v1/agents/{agent_id}/publish",
    run: async () => {
      const publishV1IDPublishPost = await client.agents.publishV1IDPublishPost("agentId");
    },
  },

  {
    operation: "retrieve",
    method: "GET",
    path: "/v1/agents/{agent_id}",
    run: async () => {
      const retrieve = await client.agents.retrieve("agentId");
    },
  },

  {
    operation: "updateV1IdPatch",
    method: "PATCH",
    path: "/v1/agents/{agent_id}",
    run: async () => {
      const updateV1IDPatch = await client.agents.updateV1IDPatch("agentId", {
        graph: {},
      });
    },
  },

  {
    operation: "listGraphV1GraphGet",
    method: "GET",
    path: "/v1/agents/{agent_id}/graph",
    run: async () => {
      const listGraphV1GraphGet = await client.agents.listGraphV1GraphGet("agentId");
    },
  },

  {
    operation: "listV1AgentsGet",
    method: "GET",
    path: "/v1/agents/node-types",
    run: async () => {
      const listV1AgentsGet = await client.agents.nodeTypes.listV1AgentsGet();
    },
  },

  {
    operation: "listSchemaV1AgentsSchemaGet",
    method: "GET",
    path: "/v1/agents/node-types/{node_type}/schema",
    run: async () => {
      const listSchemaV1AgentsSchemaGet = await client.agents.nodeTypes.listSchemaV1AgentsSchemaGet("nodeType");
    },
  },

  {
    operation: "create",
    method: "POST",
    path: "/v1/agents/{agent_id}/runs",
    run: async () => {
      const create = await client.agents.runs.create("agentId");
    },
  },

  {
    operation: "retrieve",
    method: "GET",
    path: "/v1/agents/{agent_id}/runs/{run_id}",
    run: async () => {
      const retrieve = await client.agents.runs.retrieve("runId", {
        agent_id: "agentId",
      });
    },
  },

  {
    operation: "list",
    method: "GET",
    path: "/v1/org",
    run: async () => {
      const list = await client.organizations.list();
    },
  },

  {
    operation: "regions",
    method: "GET",
    path: "/v1/org/regions",
    run: async () => {
      const regions = await client.organizations.regions();
    },
  },

  {
    operation: "models",
    method: "GET",
    path: "/v1/org/models",
    run: async () => {
      const models = await client.organizations.models();
    },
  },

  {
    operation: "domains",
    method: "GET",
    path: "/v1/org/domains",
    run: async () => {
      const domains = await client.organizations.domains();
    },
  },

  {
    operation: "listAssets",
    method: "GET",
    path: "/v1/org/assets",
    run: async () => {
      const listAssets = await client.organizations.listAssets();
    },
  },

  {
    operation: "getPersonas",
    method: "GET",
    path: "/v1/org/personas",
    run: async () => {
      const getPersonas = await client.organizations.getPersonas();
    },
  },

  {
    operation: "list",
    method: "GET",
    path: "/v1/org/categories",
    run: async () => {
      const list = await client.organizations.categories.list();
    },
  },

  {
    operation: "topics",
    method: "GET",
    path: "/v1/org/categories/{category_id}/topics",
    run: async () => {
      const topics = await client.organizations.categories.topics("categoryId");
    },
  },

  {
    operation: "tags",
    method: "GET",
    path: "/v1/org/categories/{category_id}/tags",
    run: async () => {
      const tags = await client.organizations.categories.tags("categoryId");
    },
  },

  {
    operation: "prompts",
    method: "GET",
    path: "/v1/org/categories/{category_id}/prompts",
    run: async () => {
      const prompts = await client.organizations.categories.prompts("categoryId", {
        limit: 10000,
        status: ["active"],
      });
    },
  },

  {
    operation: "createPrompts",
    method: "POST",
    path: "/v1/org/categories/{category_id}/prompts",
    run: async () => {
      const createPrompts = await client.organizations.categories.createPrompts("categoryId", {
        prompts: [],
        dry_run: false,
      });
    },
  },

  {
    operation: "updatePrompts",
    method: "PATCH",
    path: "/v1/org/categories/{category_id}/prompts",
    run: async () => {
      const updatePrompts = await client.organizations.categories.updatePrompts("categoryId", {
        prompts: [],
        dry_run: false,
      });
    },
  },

  {
    operation: "updatePromptStatus",
    method: "PATCH",
    path: "/v1/org/categories/{category_id}/prompts/status",
    run: async () => {
      const updatePromptStatus = await client.organizations.categories.updatePromptStatus("categoryId", {
        prompt_ids: [],
        status: "active",
        dry_run: false,
      });
    },
  },

  {
    operation: "assets",
    method: "GET",
    path: "/v1/org/categories/{category_id}/assets",
    run: async () => {
      const assets = await client.organizations.categories.assets("categoryId");
    },
  },

  {
    operation: "getCategoryPersonas",
    method: "GET",
    path: "/v1/org/categories/{category_id}/personas",
    run: async () => {
      const getCategoryPersonas = await client.organizations.categories.getCategoryPersonas("categoryId");
    },
  },

]

const main = async (): Promise<void> => {
  // SCALAR_SMOKE_FILTER (comma-separated) keeps only cases whose operation name or path matches
  // one of the needles, so a caller can smoke-test a subset. With no filter, every case runs.
  const filter = process.env['SCALAR_SMOKE_FILTER']
  const needles = filter ? filter.split(',').map((needle) => needle.trim()).filter(Boolean) : []
  const selected = needles.length > 0 ? cases.filter((testCase) => needles.some((needle) => testCase.operation.includes(needle) || testCase.path.includes(needle))) : cases

  // Run every selected case concurrently. Promise.allSettled means one failing operation never
  // blocks the others, so a single run reports the status of every endpoint.
  const settled = await Promise.allSettled(
    selected.map(async (testCase): Promise<SmokeResult> => {
      const startedAt = Date.now()
      try {
        await testCase.run()
        return { operation: testCase.operation, method: testCase.method, path: testCase.path, status: 'passed', durationMs: Date.now() - startedAt }
      } catch (error) {
        // Prefer the stack so a failure points at the failing SDK call; fall back to the message.
        const message = error instanceof Error ? (error.stack ?? error.message) : String(error)
        return { operation: testCase.operation, method: testCase.method, path: testCase.path, status: 'failed', durationMs: Date.now() - startedAt, error: message }
      }
    }),
  )

  // allSettled never rejects, but defensively map any rejected slot to a failed result.
  const results: SmokeResult[] = settled.map((result) => (result.status === 'fulfilled' ? result.value : { operation: 'unknown', method: '', path: '', status: 'failed', durationMs: 0, error: String(result.reason) }))
  const failed = results.filter((result) => result.status === 'failed')

  // With SCALAR_SMOKE_REPORT set, write a machine-readable report; otherwise print a table.
  const reportPath = process.env['SCALAR_SMOKE_REPORT']
  if (reportPath) {
    writeFileSync(reportPath, JSON.stringify({ total: results.length, failed: failed.length, results }))
  } else {
    for (const result of results) {
      if (result.status === 'passed') console.log(`\u2714 ${result.operation} (${result.method} ${result.path}) ${result.durationMs}ms`)
      else console.error(`\u2718 ${result.operation} (${result.method} ${result.path})\n${result.error ?? ''}`)
    }
    if (results.length === 0) {
      console.error('No code samples ran (empty SDK or a SCALAR_SMOKE_FILTER that matched nothing).')
    } else {
      console.log(`\n${results.length - failed.length}/${results.length} samples passed`)
    }
  }

  // An empty run (no operations, or a filter that matched nothing) is a failure, not a vacuous pass.
  if (failed.length > 0 || results.length === 0) process.exitCode = 1
}

void main()

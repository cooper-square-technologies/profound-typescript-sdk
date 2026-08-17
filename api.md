# profound TypeScript API

Complete reference of every operation, grouped by resource. See [the README](./README.md) for usage and configuration.

## Contents

- [`Organization`](#organization)
  - [Get Category Regions](#get-category-regions)
- [`Prompts`](#prompts)
  - [`Prompts Answers`](#prompts-answers)
    - [Get Answers](#get-answers)
    - [Query Answers V2](#query-answers-v2)
    - [Stream Answers V2](#stream-answers-v2)
- [`Reports`](#reports)
  - [Query Sentiment V2](#query-sentiment-v2)
  - [`Reports Citations`](#reports-citations)
    - [Query Citations](#query-citations)
    - [Stream Citations](#stream-citations)
    - [Query Citations V2](#query-citations-v2)
    - [Stream Citations V2](#stream-citations-v2)
  - [`Reports Visibility`](#reports-visibility)
    - [Query Visibility](#query-visibility)
    - [Stream Visibility](#stream-visibility)
    - [Query Visibility V2](#query-visibility-v2)
    - [Stream Visibility V2](#stream-visibility-v2)
  - [`Reports Sentiment`](#reports-sentiment)
    - [Query Sentiment](#query-sentiment)
    - [Stream Sentiment](#stream-sentiment)
    - [Query Sentiment V2](#query-sentiment-v2-1)
    - [Stream Sentiment V2](#stream-sentiment-v2)
  - [`Reports WebSearchResults`](#reports-websearchresults)
    - [Query Web Search Results](#query-web-search-results)
    - [Stream Web Search Results](#stream-web-search-results)
  - [`Reports Referrals`](#reports-referrals)
    - [Get Referrals Report V1](#get-referrals-report-v1)
    - [Get Referrals Report V2](#get-referrals-report-v2)
  - [`Reports Bots`](#reports-bots)
    - [Get Bots Report V1](#get-bots-report-v1)
    - [Get Bots Report V2](#get-bots-report-v2)
  - [`Reports QueryFanouts`](#reports-queryfanouts)
    - [Query Fanouts](#query-fanouts)
    - [Query Fanouts V2](#query-fanouts-v2)
    - [Stream Query Fanouts V2](#stream-query-fanouts-v2)
  - [`Reports Shopping`](#reports-shopping)
    - [Shopping Visibility](#shopping-visibility)
    - [Shopping Item Visibility](#shopping-item-visibility)
    - [Shopping Merchant Distribution](#shopping-merchant-distribution)
    - [Shopping Merchant Visibility By Brand](#shopping-merchant-visibility-by-brand)
    - [Shopping Merchant By Items](#shopping-merchant-by-items)
    - [Shopping All Items With Merchants](#shopping-all-items-with-merchants)
    - [Shopping Trigger Rate](#shopping-trigger-rate)
    - [Shopping Merchant Share](#shopping-merchant-share)
    - [Shopping Product Merchant Urls](#shopping-product-merchant-urls)
    - [Shopping Executions](#shopping-executions)
  - [`Reports Accuracy`](#reports-accuracy)
    - [Accuracy Overview](#accuracy-overview)
    - [Accuracy Breakdown](#accuracy-breakdown)
    - [Accuracy Citation Analysis](#accuracy-citation-analysis)
    - [Accuracy Topic Ids](#accuracy-topic-ids)
    - [Accuracy Inaccurate Themes](#accuracy-inaccurate-themes)
    - [Accuracy Inaccurate Clusters](#accuracy-inaccurate-clusters)
    - [Accuracy Inaccuracy Drivers](#accuracy-inaccuracy-drivers)
    - [Accuracy Top Inaccurate Claims](#accuracy-top-inaccurate-claims)
    - [Accuracy Claim Breakdown](#accuracy-claim-breakdown)
    - [Accuracy Claim Citations](#accuracy-claim-citations)
    - [Accuracy Cluster Example Runs](#accuracy-cluster-example-runs)
    - [Accuracy Cluster Verification Pairs](#accuracy-cluster-verification-pairs)
    - [Accuracy Factcheck Setup Status](#accuracy-factcheck-setup-status)
- [`Content`](#content)
  - [`Content Optimization`](#content-optimization)
    - [Optimization List](#optimization-list)
    - [Optimization Analysis](#optimization-analysis)
- [`KnowledgeBases`](#knowledgebases)
  - [List Knowledge Bases](#list-knowledge-bases)
  - [Search Knowledge Base](#search-knowledge-base)
  - [`KnowledgeBases Documents`](#knowledgebases-documents)
    - [Add Document](#add-document)
    - [Update Document](#update-document)
    - [Delete Document](#delete-document)
  - [`KnowledgeBases Folders`](#knowledgebases-folders)
    - [Add Folder](#add-folder)
    - [Delete Folder](#delete-folder)
- [`Agents`](#agents)
  - [List agents](#list-agents)
  - [Create an agent](#create-an-agent)
  - [Publish an agent](#publish-an-agent)
  - [Get an agent](#get-an-agent)
  - [Update an agent](#update-an-agent)
  - [Get an agent's graph](#get-an-agents-graph)
  - [`Agents NodeTypes`](#agents-nodetypes)
    - [List node types](#list-node-types)
    - [Get a node type schema](#get-a-node-type-schema)
  - [`Agents Runs`](#agents-runs)
    - [Run an agent](#run-an-agent)
    - [Get an agent run](#get-an-agent-run)
- [`Organizations`](#organizations)
  - [List organizations](#list-organizations)
  - [Get Regions](#get-regions)
  - [Get Models](#get-models)
  - [Get Domains](#get-domains)
  - [Get Assets](#get-assets)
  - [Get Personas](#get-personas)
  - [`Organizations Categories`](#organizations-categories)
    - [Get Categories](#get-categories)
    - [Get Category Topics](#get-category-topics)
    - [Get Category Tags](#get-category-tags)
    - [List prompts](#list-prompts)
    - [Create prompts](#create-prompts)
    - [Update prompts](#update-prompts)
    - [Update prompt status](#update-prompt-status)
    - [Get Category Assets](#get-category-assets)
    - [Get Category Personas](#get-category-personas)

## Setup

```ts
import Profound from "@profoundai/client";

const client = new Profound({
  apiKeyHeader: process.env["API_KEY_HEADER"], // defaults to the API_KEY_HEADER env var
  environment: "production",
});
```

## `Organization`

### Get Category Regions

Get the regions for a specific category.

| Direction | Type |
| --- | --- |
| Response | [`OrganizationListCategoryRegionsV1OrgCategoriesCategoryRegionsGetResponse`](./src/resources/organization.ts) |

```ts
const listCategoryRegionsV1OrgCategoriesCategoryRegionsGet = await client.organization.listCategoryRegionsV1OrgCategoriesCategoryRegionsGet("categoryId");
```

## `Prompts`

### `Prompts Answers`

#### Get Answers

| Direction | Type |
| --- | --- |
| Request | [`AnswerCreateV1PromptsPostParams`](./src/resources/prompts/answers.ts) |
| Response | [`AnswerCreateV1PromptsPostResponse`](./src/resources/prompts/answers.ts) |

```ts
const createV1PromptsPost = await client.prompts.answers.createV1PromptsPost({
  category_id: "",
  start_date: "",
  end_date: "",
});
```

#### Query Answers V2

| Direction | Type |
| --- | --- |
| Request | [`AnswerQueryV2V2PromptsPostParams`](./src/resources/prompts/answers.ts) |
| Response | [`AnswerQueryV2V2PromptsPostResponse`](./src/resources/prompts/answers.ts) |

```ts
const queryV2V2PromptsPost = await client.prompts.answers.queryV2V2PromptsPost({
  category_id: "",
  start_date: "",
  end_date: "",
});
```

#### Stream Answers V2

| Direction | Type |
| --- | --- |
| Request | [`AnswerStreamV2V2PromptsStreamPostParams`](./src/resources/prompts/answers.ts) |

```ts
const stream = await client.prompts.answers.streamV2V2PromptsStreamPost({
  category_id: "",
  start_date: "",
  end_date: "",
});
for await (const event of stream) {
  console.log(event);
}
```

## `Reports`

### Query Sentiment V2

| Direction | Type |
| --- | --- |
| Request | [`ReportQuerySentimentV2V1SentimentV2PostParams`](./src/resources/reports/reports.ts) |
| Response | [`ReportQuerySentimentV2V1SentimentV2PostResponse`](./src/resources/reports/reports.ts) |

```ts
const querySentimentV2V1SentimentV2Post = await client.reports.querySentimentV2V1SentimentV2Post({
  category_id: "",
  asset_name: "",
  start_date: "",
  end_date: "",
  date_interval: "day",
  metrics: [],
});
```

### `Reports Citations`

#### Query Citations

Get citations for a given category.

| Direction | Type |
| --- | --- |
| Request | [`CitationQueryV1ReportsPostParams`](./src/resources/reports/citations.ts) |
| Response | [`CitationQueryV1ReportsPostResponse`](./src/resources/reports/citations.ts) |

```ts
const queryV1ReportsPost = await client.reports.citations.queryV1ReportsPost({
  date_interval: "day",
  dimensions: [],
  metrics: [],
  order_by: {},
  category_id: "",
  start_date: "",
  end_date: "",
});
```

#### Stream Citations

| Direction | Type |
| --- | --- |
| Request | [`CitationStreamV1ReportsStreamPostParams`](./src/resources/reports/citations.ts) |
| Response | [`CitationStreamV1ReportsStreamPostResponse`](./src/resources/reports/citations.ts) |

```ts
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
```

#### Query Citations V2

| Direction | Type |
| --- | --- |
| Request | [`CitationQueryV2V2ReportsPostParams`](./src/resources/reports/citations.ts) |
| Response | [`CitationQueryV2V2ReportsPostResponse`](./src/resources/reports/citations.ts) |

```ts
const queryV2V2ReportsPost = await client.reports.citations.queryV2V2ReportsPost({
  category_id: "",
  start_date: "",
  end_date: "",
  interval: "day",
  scope: "all",
});
```

#### Stream Citations V2

| Direction | Type |
| --- | --- |
| Request | [`CitationStreamV2V2ReportsStreamPostParams`](./src/resources/reports/citations.ts) |

```ts
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
```

### `Reports Visibility`

#### Query Visibility

Query visibility report.

| Direction | Type |
| --- | --- |
| Request | [`VisibilityQueryV1ReportsPostParams`](./src/resources/reports/visibility.ts) |
| Response | [`ReportResponse`](./src/resources/reports/visibility.ts) |

```ts
const report = await client.reports.visibility.queryV1ReportsPost({
  date_interval: "day",
  dimensions: [],
  metrics: [],
  order_by: {},
  category_id: "",
  start_date: "",
  end_date: "",
});
```

#### Stream Visibility

| Direction | Type |
| --- | --- |
| Request | [`VisibilityStreamV1ReportsStreamPostParams`](./src/resources/reports/visibility.ts) |
| Response | [`VisibilityStreamV1ReportsStreamPostResponse`](./src/resources/reports/visibility.ts) |

```ts
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
```

#### Query Visibility V2

| Direction | Type |
| --- | --- |
| Request | [`VisibilityQueryV2V2ReportsPostParams`](./src/resources/reports/visibility.ts) |
| Response | [`VisibilityQueryV2V2ReportsPostResponse`](./src/resources/reports/visibility.ts) |

```ts
const queryV2V2ReportsPost = await client.reports.visibility.queryV2V2ReportsPost({
  category_id: "",
  start_date: "",
  end_date: "",
  interval: "day",
  scope: "owned",
});
```

#### Stream Visibility V2

| Direction | Type |
| --- | --- |
| Request | [`VisibilityStreamV2V2ReportsStreamPostParams`](./src/resources/reports/visibility.ts) |

```ts
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
```

### `Reports Sentiment`

#### Query Sentiment

Get citations for a given category.

| Direction | Type |
| --- | --- |
| Request | [`SentimentQueryV1ReportsPostParams`](./src/resources/reports/sentiment.ts) |
| Response | [`ReportResponse`](./src/resources/reports/sentiment.ts) |

```ts
const report = await client.reports.sentiment.queryV1ReportsPost({
  date_interval: "day",
  dimensions: [],
  metrics: [],
  order_by: {},
  category_id: "",
  start_date: "",
  end_date: "",
});
```

#### Stream Sentiment

| Direction | Type |
| --- | --- |
| Request | [`SentimentStreamV1ReportsStreamPostParams`](./src/resources/reports/sentiment.ts) |
| Response | [`SentimentStreamV1ReportsStreamPostResponse`](./src/resources/reports/sentiment.ts) |

```ts
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
```

#### Query Sentiment V2

| Direction | Type |
| --- | --- |
| Request | [`SentimentQueryV2V2ReportsPostParams`](./src/resources/reports/sentiment.ts) |
| Response | [`SentimentQueryV2V2ReportsPostResponse`](./src/resources/reports/sentiment.ts) |

```ts
const queryV2V2ReportsPost = await client.reports.sentiment.queryV2V2ReportsPost({
  category_id: "",
  asset: "",
  start_date: "",
  end_date: "",
  interval: "day",
  include_cited_websites: false,
});
```

#### Stream Sentiment V2

| Direction | Type |
| --- | --- |
| Request | [`SentimentStreamV2V2ReportsStreamPostParams`](./src/resources/reports/sentiment.ts) |

```ts
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
```

### `Reports WebSearchResults`

#### Query Web Search Results

Get web search results for a given category.

| Direction | Type |
| --- | --- |
| Request | [`WebSearchResultQueryParams`](./src/resources/reports/web-search-results.ts) |
| Response | [`WebSearchResultQueryResponse`](./src/resources/reports/web-search-results.ts) |

```ts
const query = await client.reports.webSearchResults.query({
  date_interval: "day",
  dimensions: [],
  metrics: [],
  order_by: {},
  category_id: "",
  start_date: "",
  end_date: "",
});
```

#### Stream Web Search Results

| Direction | Type |
| --- | --- |
| Request | [`WebSearchResultStreamParams`](./src/resources/reports/web-search-results.ts) |
| Response | [`WebSearchResultStreamResponse`](./src/resources/reports/web-search-results.ts) |

```ts
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
```

### `Reports Referrals`

#### Get Referrals Report V1

Get referral traffic report from the daily aggregated materialized view.

This endpoint queries pre-aggregated daily referral data, making it efficient
for large date ranges and high-traffic sites.

| Direction | Type |
| --- | --- |
| Request | [`ReferralCreateReportV1V1ReportsPostParams`](./src/resources/reports/referrals.ts) |
| Response | [`ReportResponse`](./src/resources/reports/referrals.ts) |

```ts
const report = await client.reports.referrals.createReportV1V1ReportsPost({
  date_interval: "day",
  dimensions: [],
  metrics: [],
  order_by: {},
  domain: "",
  start_date: "",
});
```

#### Get Referrals Report V2

Get referral traffic report from the hourly aggregated materialized view (UTC-based).

Supports date_interval="hour", calendar intervals through "year", "quarter", and "relative_week".

| Direction | Type |
| --- | --- |
| Request | [`ReferralCreateReportV2V2ReportsPostParams`](./src/resources/reports/referrals.ts) |
| Response | [`ReportResponse`](./src/resources/reports/referrals.ts) |

```ts
const report = await client.reports.referrals.createReportV2V2ReportsPost({
  date_interval: "day",
  dimensions: [],
  metrics: [],
  order_by: {},
  domain: "",
  start_date: "",
});
```

### `Reports Bots`

#### Get Bots Report V1

Get bot traffic report from the daily aggregated materialized view.

This endpoint queries pre-aggregated daily bot data, making it efficient
for large date ranges and high-traffic sites.

Metrics:
- count: unique bot visits
- citations: unique citation events
- indexing: unique indexing events
- training: unique training events
- last_visit: most recent visit timestamp

| Direction | Type |
| --- | --- |
| Request | [`BotCreateReportV1V1ReportsPostParams`](./src/resources/reports/bots.ts) |
| Response | [`ReportResponse`](./src/resources/reports/bots.ts) |

```ts
const report = await client.reports.bots.createReportV1V1ReportsPost({
  date_interval: "day",
  dimensions: [],
  metrics: [],
  order_by: {},
  domain: "",
  start_date: "",
});
```

#### Get Bots Report V2

Get bot traffic report from the hourly aggregated materialized view (UTC-based).

Supports date_interval="hour", calendar intervals through "year", "quarter", and "relative_week".

Metrics:
- count: unique bot visits
- citations: unique citation events (ai_assistant bot type)
- indexing: unique indexing events (index bot type)
- training: unique training events (ai_training bot type)
- last_visit: most recent visit timestamp

Dimensions:
- date, path, bot_name, bot_provider, bot_type

| Direction | Type |
| --- | --- |
| Request | [`BotCreateReportV2V2ReportsPostParams`](./src/resources/reports/bots.ts) |
| Response | [`ReportResponse`](./src/resources/reports/bots.ts) |

```ts
const report = await client.reports.bots.createReportV2V2ReportsPost({
  date_interval: "day",
  dimensions: [],
  metrics: [],
  order_by: {},
  domain: "",
  start_date: "",
});
```

### `Reports QueryFanouts`

#### Query Fanouts

| Direction | Type |
| --- | --- |
| Request | [`QueryFanoutV1ReportsPostParams`](./src/resources/reports/query-fanouts.ts) |
| Response | [`ReportResponse`](./src/resources/reports/query-fanouts.ts) |

```ts
const report = await client.reports.queryFanouts.v1ReportsPost({
  date_interval: "day",
  dimensions: [],
  metrics: [],
  order_by: {},
  category_id: "",
  start_date: "",
  end_date: "",
});
```

#### Query Fanouts V2

| Direction | Type |
| --- | --- |
| Request | [`QueryFanoutV2V2ReportsPostParams`](./src/resources/reports/query-fanouts.ts) |
| Response | [`QueryFanoutV2V2ReportsPostResponse`](./src/resources/reports/query-fanouts.ts) |

```ts
const v2V2ReportsPost = await client.reports.queryFanouts.v2V2ReportsPost({
  category_id: "",
  start_date: "",
  end_date: "",
  interval: "day",
});
```

#### Stream Query Fanouts V2

| Direction | Type |
| --- | --- |
| Request | [`QueryFanoutStreamV2V2ReportsStreamPostParams`](./src/resources/reports/query-fanouts.ts) |

```ts
const stream = await client.reports.queryFanouts.streamV2V2ReportsStreamPost({
  category_id: "",
  start_date: "",
  end_date: "",
  interval: "day",
});
for await (const event of stream) {
  console.log(event);
}
```

### `Reports Shopping`

#### Shopping Visibility

| Direction | Type |
| --- | --- |
| Request | [`ShoppingVisibilityParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingVisibilityResponse`](./src/resources/reports/shopping.ts) |

```ts
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
```

#### Shopping Item Visibility

| Direction | Type |
| --- | --- |
| Request | [`ShoppingItemVisibilityParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingItemVisibilityResponse`](./src/resources/reports/shopping.ts) |

```ts
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
```

#### Shopping Merchant Distribution

| Direction | Type |
| --- | --- |
| Request | [`ShoppingMerchantDistributionParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingMerchantDistributionResponse`](./src/resources/reports/shopping.ts) |

```ts
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
```

#### Shopping Merchant Visibility By Brand

| Direction | Type |
| --- | --- |
| Request | [`ShoppingMerchantVisibilityByBrandParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingMerchantVisibilityByBrandResponse`](./src/resources/reports/shopping.ts) |

```ts
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
```

#### Shopping Merchant By Items

| Direction | Type |
| --- | --- |
| Request | [`ShoppingMerchantByItemsParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingMerchantByItemsResponse`](./src/resources/reports/shopping.ts) |

```ts
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
```

#### Shopping All Items With Merchants

| Direction | Type |
| --- | --- |
| Request | [`ShoppingAllItemsWithMerchantsParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingAllItemsWithMerchantsResponse`](./src/resources/reports/shopping.ts) |

```ts
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
```

#### Shopping Trigger Rate

| Direction | Type |
| --- | --- |
| Request | [`ShoppingTriggerRateParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingTriggerRateResponse`](./src/resources/reports/shopping.ts) |

```ts
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
```

#### Shopping Merchant Share

| Direction | Type |
| --- | --- |
| Request | [`ShoppingMerchantShareParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingMerchantShareResponse`](./src/resources/reports/shopping.ts) |

```ts
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
```

#### Shopping Product Merchant Urls

| Direction | Type |
| --- | --- |
| Request | [`ShoppingProductMerchantURLsParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingProductMerchantURLsResponse`](./src/resources/reports/shopping.ts) |

```ts
const productMerchantURLs = await client.reports.shopping.productMerchantURLs({
  category_id: "",
  product_names: [],
  start_date: "",
  end_date: "",
});
```

#### Shopping Executions

| Direction | Type |
| --- | --- |
| Request | [`ShoppingExecutionsParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingExecutionsResponse`](./src/resources/reports/shopping.ts) |

```ts
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
```

### `Reports Accuracy`

#### Accuracy Overview

| Direction | Type |
| --- | --- |
| Request | [`AccuracyOverviewV1ReportsOverviewPostParams`](./src/resources/reports/accuracy.ts) |
| Response | [`AccuracyOverviewV1ReportsOverviewPostResponse`](./src/resources/reports/accuracy.ts) |

```ts
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
```

#### Accuracy Breakdown

| Direction | Type |
| --- | --- |
| Request | [`AccuracyBreakdownV1ReportsBreakdownPostParams`](./src/resources/reports/accuracy.ts) |
| Response | [`AccuracyBreakdownV1ReportsBreakdownPostResponse`](./src/resources/reports/accuracy.ts) |

```ts
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
```

#### Accuracy Citation Analysis

| Direction | Type |
| --- | --- |
| Request | [`AccuracyCitationAnalysisV1ReportsCitationAnalysisPostParams`](./src/resources/reports/accuracy.ts) |
| Response | [`AccuracyCitationAnalysisV1ReportsCitationAnalysisPostResponse`](./src/resources/reports/accuracy.ts) |

```ts
const citationAnalysisV1ReportsCitationAnalysisPost = await client.reports.accuracy.citationAnalysisV1ReportsCitationAnalysisPost({
  category_id: "",
  clean_href: "",
  start_date: "",
  end_date: "",
});
```

#### Accuracy Topic Ids

| Direction | Type |
| --- | --- |
| Request | [`AccuracyTopicIDsV1ReportsTopicIDsPostParams`](./src/resources/reports/accuracy.ts) |
| Response | [`AccuracyTopicIDsV1ReportsTopicIDsPostResponse`](./src/resources/reports/accuracy.ts) |

```ts
const topicIDsV1ReportsTopicIDsPost = await client.reports.accuracy.topicIDsV1ReportsTopicIDsPost({
  category_id: "",
  start_date: "",
  end_date: "",
});
```

#### Accuracy Inaccurate Themes

| Direction | Type |
| --- | --- |
| Request | [`AccuracyInaccurateThemesV1ReportsInaccurateThemesPostParams`](./src/resources/reports/accuracy.ts) |
| Response | [`AccuracyInaccurateThemesV1ReportsInaccurateThemesPostResponse`](./src/resources/reports/accuracy.ts) |

```ts
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
```

#### Accuracy Inaccurate Clusters

| Direction | Type |
| --- | --- |
| Request | [`AccuracyInaccurateClustersV1ReportsInaccurateClustersPostParams`](./src/resources/reports/accuracy.ts) |
| Response | [`AccuracyInaccurateClustersV1ReportsInaccurateClustersPostResponse`](./src/resources/reports/accuracy.ts) |

```ts
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
```

#### Accuracy Inaccuracy Drivers

| Direction | Type |
| --- | --- |
| Request | [`AccuracyInaccuracyDriversV1ReportsInaccuracyDriversPostParams`](./src/resources/reports/accuracy.ts) |
| Response | [`AccuracyInaccuracyDriversV1ReportsInaccuracyDriversPostResponse`](./src/resources/reports/accuracy.ts) |

```ts
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
```

#### Accuracy Top Inaccurate Claims

| Direction | Type |
| --- | --- |
| Request | [`AccuracyTopInaccurateClaimsV1ReportsTopInaccurateClaimsPostParams`](./src/resources/reports/accuracy.ts) |
| Response | [`AccuracyTopInaccurateClaimsV1ReportsTopInaccurateClaimsPostResponse`](./src/resources/reports/accuracy.ts) |

```ts
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
```

#### Accuracy Claim Breakdown

| Direction | Type |
| --- | --- |
| Request | [`AccuracyClaimBreakdownV1ReportsClaimBreakdownPostParams`](./src/resources/reports/accuracy.ts) |
| Response | [`AccuracyClaimBreakdownV1ReportsClaimBreakdownPostResponse`](./src/resources/reports/accuracy.ts) |

```ts
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
```

#### Accuracy Claim Citations

| Direction | Type |
| --- | --- |
| Request | [`AccuracyClaimCitationsV1ReportsClaimCitationsPostParams`](./src/resources/reports/accuracy.ts) |
| Response | [`AccuracyClaimCitationsV1ReportsClaimCitationsPostResponse`](./src/resources/reports/accuracy.ts) |

```ts
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
```

#### Accuracy Cluster Example Runs

| Direction | Type |
| --- | --- |
| Request | [`AccuracyClusterExampleRunsV1ReportsClusterExampleRunsPostParams`](./src/resources/reports/accuracy.ts) |
| Response | [`AccuracyClusterExampleRunsV1ReportsClusterExampleRunsPostResponse`](./src/resources/reports/accuracy.ts) |

```ts
const clusterExampleRunsV1ReportsClusterExampleRunsPost = await client.reports.accuracy.clusterExampleRunsV1ReportsClusterExampleRunsPost({
  category_id: "",
  cluster_id: "",
  start_date: "",
  end_date: "",
  limit: 20,
  offset: 0,
});
```

#### Accuracy Cluster Verification Pairs

| Direction | Type |
| --- | --- |
| Request | [`AccuracyClusterVerificationPairsV1ReportsClusterVerificationPairsPostParams`](./src/resources/reports/accuracy.ts) |
| Response | [`AccuracyClusterVerificationPairsV1ReportsClusterVerificationPairsPostResponse`](./src/resources/reports/accuracy.ts) |

```ts
const clusterVerificationPairsV1ReportsClusterVerificationPairsPost = await client.reports.accuracy.clusterVerificationPairsV1ReportsClusterVerificationPairsPost({
  category_id: "",
  cluster_id: "",
});
```

#### Accuracy Factcheck Setup Status

| Direction | Type |
| --- | --- |
| Request | [`AccuracyFactcheckSetupStatusV1ReportsFactcheckSetupStatusPostParams`](./src/resources/reports/accuracy.ts) |
| Response | [`AccuracyFactcheckSetupStatusV1ReportsFactcheckSetupStatusPostResponse`](./src/resources/reports/accuracy.ts) |

```ts
const factcheckSetupStatusV1ReportsFactcheckSetupStatusPost = await client.reports.accuracy.factcheckSetupStatusV1ReportsFactcheckSetupStatusPost({
  category_id: "",
});
```

## `Content`

### `Content Optimization`

#### Optimization List

| Direction | Type |
| --- | --- |
| Request | [`OptimizationListParams`](./src/resources/content/optimization.ts) |
| Response | [`OptimizationListResponse`](./src/resources/content/optimization.ts) |

```ts
const list = await client.content.optimization.list("assetId", {
  limit: 10000,
  offset: 0,
});
```

#### Optimization Analysis

| Direction | Type |
| --- | --- |
| Request | [`OptimizationRetrieveParams`](./src/resources/content/optimization.ts) |
| Response | [`OptimizationRetrieveResponse`](./src/resources/content/optimization.ts) |

```ts
const retrieve = await client.content.optimization.retrieve("contentId", {
  asset_id: "assetId",
});
```

## `KnowledgeBases`

### List Knowledge Bases

List knowledge bases accessible to the API key.

| Direction | Type |
| --- | --- |
| Request | [`KnowledgeBaseListParams`](./src/resources/knowledge-bases/knowledge-bases.ts) |
| Response | [`KnowledgeBaseListResponse`](./src/resources/knowledge-bases/knowledge-bases.ts) |

```ts
const list = await client.knowledgeBases.list();
```

### Search Knowledge Base

Search a knowledge base and return matching snippets or pages.

| Direction | Type |
| --- | --- |
| Request | [`KnowledgeBaseSearchParams`](./src/resources/knowledge-bases/knowledge-bases.ts) |
| Response | [`KnowledgeBaseSearchResponse`](./src/resources/knowledge-bases/knowledge-bases.ts) |

```ts
const search = await client.knowledgeBases.search("knowledgeBaseId", {
  query: "",
  top_k: 0,
  return_full_page: false,
});
```

### `KnowledgeBases Documents`

#### Add Document

Add a document to a knowledge base using JSON text or multipart file upload.

| Direction | Type |
| --- | --- |
| Request | [`DocumentCreateParams`](./src/resources/knowledge-bases/documents.ts) |
| Response | [`DocumentCreateResponse`](./src/resources/knowledge-bases/documents.ts) |

```ts
const create = await client.knowledgeBases.documents.create("knowledgeBaseId", {
  name: "",
  text: "",
});
```

#### Update Document

Overwrite a knowledge base document using JSON text or multipart file upload.

| Direction | Type |
| --- | --- |
| Request | [`DocumentUpdateParams`](./src/resources/knowledge-bases/documents.ts) |
| Response | [`DocumentUpdateResponse`](./src/resources/knowledge-bases/documents.ts) |

```ts
const update = await client.knowledgeBases.documents.update("knowledgeBaseId", {
  name: "",
  text: "",
});
```

#### Delete Document

Delete an existing document from a knowledge base.

| Direction | Type |
| --- | --- |
| Request | [`DocumentDeleteParams`](./src/resources/knowledge-bases/documents.ts) |
| Response | [`DocumentDeleteResponse`](./src/resources/knowledge-bases/documents.ts) |

```ts
const delete_ = await client.knowledgeBases.documents.delete("knowledgeBaseId", {
  name: "",
});
```

### `KnowledgeBases Folders`

#### Add Folder

Create an empty folder at the requested knowledge base path.

| Direction | Type |
| --- | --- |
| Request | [`FolderCreateParams`](./src/resources/knowledge-bases/folders.ts) |
| Response | [`FolderCreateResponse`](./src/resources/knowledge-bases/folders.ts) |

```ts
const create = await client.knowledgeBases.folders.create("knowledgeBaseId", {
  path: "",
});
```

#### Delete Folder

Delete a folder. With recursive=false, non-empty folders return 409 and no contents are deleted.

| Direction | Type |
| --- | --- |
| Request | [`FolderDeleteParams`](./src/resources/knowledge-bases/folders.ts) |
| Response | [`FolderDeleteResponse`](./src/resources/knowledge-bases/folders.ts) |

```ts
const delete_ = await client.knowledgeBases.folders.delete("knowledgeBaseId", {
  path: "",
  recursive: false,
});
```

## `Agents`

### List agents

List agents available to your organization.

Agent status reflects whether an agent has ever been published. `published`
agents have a live published version. `draft` agents have not been
published yet.

| Direction | Type |
| --- | --- |
| Request | [`AgentListParams`](./src/resources/agents/agents.ts) |
| Response | [`AgentListResponse`](./src/resources/agents/agents.ts) |

```ts
const list = await client.agents.list({
  limit: 100,
});
```

### Create an agent

Create a new draft agent owned by the given organization.

`organization_id` is required and you must be a member of it. The agent is created
as a `draft`; publish it with `POST /v1/agents/{agent_id}/publish` once its graph
is ready.

| Direction | Type |
| --- | --- |
| Request | [`AgentCreateV1PostParams`](./src/resources/agents/agents.ts) |
| Response | [`AgentCreateV1PostResponse`](./src/resources/agents/agents.ts) |

```ts
const createV1Post = await client.agents.createV1Post({
  organization_id: "",
  name: "",
});
```

### Publish an agent

Publish an agent's latest draft as its live published version.

You must be a member of the agent's organization. Publishing promotes the current
draft graph to a new published version. A draft that cannot produce its declared
input/output contract is rejected with `422` and is not published.

| Direction | Type |
| --- | --- |
| Response | [`AgentPublishV1IDPublishPostResponse`](./src/resources/agents/agents.ts) |

```ts
const publishV1IDPublishPost = await client.agents.publishV1IDPublishPost("agentId");
```

### Get an agent

Retrieve an agent and its schema details.

Agents can have both a live published version and a draft version with newer
unpublished changes. Use the `version` parameter to choose which state to return.

| Direction | Type |
| --- | --- |
| Request | [`AgentRetrieveParams`](./src/resources/agents/agents.ts) |
| Response | [`AgentRetrieveResponse`](./src/resources/agents/agents.ts) |

```ts
const retrieve = await client.agents.retrieve("agentId");
```

### Update an agent

Update an agent's draft graph in place.

You must be a member of the agent's organization. The agent's draft is replaced with the
supplied graph and re-validated, so you can iterate one draft — create, then update per
fix — instead of creating a new agent on every change. The response carries the updated
`validation`; publish with `POST /v1/agents/{agent_id}/publish` once `validation.valid`.

| Direction | Type |
| --- | --- |
| Request | [`AgentUpdateV1IDPatchParams`](./src/resources/agents/agents.ts) |
| Response | [`AgentUpdateV1IDPatchResponse`](./src/resources/agents/agents.ts) |

```ts
const updateV1IDPatch = await client.agents.updateV1IDPatch("agentId", {
  graph: {},
});
```

### Get an agent's graph

Retrieve an agent's full workflow graph (`{nodes, edges}`).

The graph is returned verbatim in the canonical dialect — the same shape `POST /v1/agents`
and `PATCH /v1/agents/{agent_id}` accept — so a known-good agent can be read back, copied,
and edited. Tool-backed nodes appear in their lowered `tool` form rather than the friendly
v1 node types. A `draft` is visible only to its creator; the `published` version is visible
across its organization.

| Direction | Type |
| --- | --- |
| Request | [`AgentListGraphV1GraphGetParams`](./src/resources/agents/agents.ts) |
| Response | [`AgentListGraphV1GraphGetResponse`](./src/resources/agents/agents.ts) |

```ts
const listGraphV1GraphGet = await client.agents.listGraphV1GraphGet("agentId");
```

### `Agents NodeTypes`

#### List node types

List the node types available for building agents.

The set is deterministic and does not depend on the caller, so the response
is safe to cache across sessions. Integration-dependent and dynamic-schema
node types are intentionally excluded in v1.

| Direction | Type |
| --- | --- |
| Response | [`NodeTypeListV1AgentsGetResponse`](./src/resources/agents/node-types.ts) |

```ts
const listV1AgentsGet = await client.agents.nodeTypes.listV1AgentsGet();
```

#### Get a node type schema

Retrieve the JSON schema and worked examples for a single node type.

The `schema` field is an opaque JSON Schema for the node's configuration.
Use `schema_version` as a cache key — it bumps whenever the schema changes.

| Direction | Type |
| --- | --- |
| Response | [`NodeTypeListSchemaV1AgentsSchemaGetResponse`](./src/resources/agents/node-types.ts) |

```ts
const listSchemaV1AgentsSchemaGet = await client.agents.nodeTypes.listSchemaV1AgentsSchemaGet("nodeType");
```

### `Agents Runs`

#### Run an agent

Start a new run for an agent.

Runs always execute the agent's live published version, so the agent must be
published first with `POST /v1/agents/{agent_id}/publish`. Unpublished drafts
cannot be run.

| Direction | Type |
| --- | --- |
| Request | [`RunCreateParams`](./src/resources/agents/runs.ts) |
| Response | [`RunCreateResponse`](./src/resources/agents/runs.ts) |

```ts
const create = await client.agents.runs.create("agentId");
```

#### Get an agent run

Retrieve the current status and result details for an agent run.

| Direction | Type |
| --- | --- |
| Request | [`RunRetrieveParams`](./src/resources/agents/runs.ts) |
| Response | [`RunRetrieveResponse`](./src/resources/agents/runs.ts) |

```ts
const retrieve = await client.agents.runs.retrieve("runId", {
  agent_id: "agentId",
});
```

## `Organizations`

### List organizations

Return every organization the caller's API key grants access to. Use this to discover organization IDs before calling endpoints that accept an `organization_id` filter.

| Direction | Type |
| --- | --- |
| Response | [`OrganizationListResponse`](./src/resources/organizations/organizations.ts) |

```ts
const list = await client.organizations.list();
```

### Get Regions

Get the organization regions.

| Direction | Type |
| --- | --- |
| Request | [`OrganizationRegionsParams`](./src/resources/organizations/organizations.ts) |
| Response | [`OrganizationRegionsResponse`](./src/resources/organizations/organizations.ts) |

```ts
const regions = await client.organizations.regions();
```

### Get Models

Get the organization models.

| Direction | Type |
| --- | --- |
| Response | [`OrganizationModelsResponse`](./src/resources/organizations/organizations.ts) |

```ts
const models = await client.organizations.models();
```

### Get Domains

Get the organization domains.

| Direction | Type |
| --- | --- |
| Request | [`OrganizationDomainsParams`](./src/resources/organizations/organizations.ts) |
| Response | [`OrganizationDomainsResponse`](./src/resources/organizations/organizations.ts) |

```ts
const domains = await client.organizations.domains();
```

### Get Assets

Get the organization assets, one row per (asset, organization) pair.

An asset's category can belong to multiple organizations; one asset row is
emitted per owning org so no association is silently dropped.

| Direction | Type |
| --- | --- |
| Request | [`OrganizationListAssetsParams`](./src/resources/organizations/organizations.ts) |
| Response | [`OrganizationListAssetsResponse`](./src/resources/organizations/organizations.ts) |

```ts
const listAssets = await client.organizations.listAssets();
```

### Get Personas

Get the organization personas, one row per (persona, organization) pair.

Same (item, org) fan-out as ``get_assets``: a persona's category can be
owned by multiple orgs, and each owning org gets its own row so no
association is silently dropped.

| Direction | Type |
| --- | --- |
| Request | [`OrganizationGetPersonasParams`](./src/resources/organizations/organizations.ts) |
| Response | [`OrganizationGetPersonasResponse`](./src/resources/organizations/organizations.ts) |

```ts
const getPersonas = await client.organizations.getPersonas();
```

### `Organizations Categories`

#### Get Categories

Get the organization categories, one row per (category, organization) pair.

| Direction | Type |
| --- | --- |
| Request | [`CategoryListParams`](./src/resources/organizations/categories.ts) |
| Response | [`CategoryListResponse`](./src/resources/organizations/categories.ts) |

```ts
const list = await client.organizations.categories.list();
```

#### Get Category Topics

Get the topics for a specific category.

| Direction | Type |
| --- | --- |
| Response | [`CategoryTopicsResponse`](./src/resources/organizations/categories.ts) |

```ts
const topics = await client.organizations.categories.topics("categoryId");
```

#### Get Category Tags

Get the tags for a specific category.

| Direction | Type |
| --- | --- |
| Response | [`CategoryTagsResponse`](./src/resources/organizations/categories.ts) |

```ts
const tags = await client.organizations.categories.tags("categoryId");
```

#### List prompts

Retrieve prompts in a category with optional filtering by type, topic, tag, region, platform, or persona. Supports cursor-based pagination.

| Direction | Type |
| --- | --- |
| Request | [`CategoryPromptsParams`](./src/resources/organizations/categories.ts) |
| Response | [`CategoryPromptsResponse`](./src/resources/organizations/categories.ts) |

```ts
const prompts = await client.organizations.categories.prompts("categoryId", {
  limit: 10000,
  status: ["active"],
});
```

#### Create prompts

Create one or more prompts in a category. Topics and tags are auto-created if referenced by name and not yet existing. Use dry_run to preview without persisting.

| Direction | Type |
| --- | --- |
| Request | [`CategoryCreatePromptsParams`](./src/resources/organizations/categories.ts) |
| Response | [`CategoryCreatePromptsResponse`](./src/resources/organizations/categories.ts) |

```ts
const createPrompts = await client.organizations.categories.createPrompts("categoryId", {
  prompts: [],
  dry_run: false,
});
```

#### Update prompts

Update one or more existing prompts. Only provided fields are changed. Dimension fields (regions, platforms, personas, tags) replace the full set when provided. Use dry_run to preview without persisting.

| Direction | Type |
| --- | --- |
| Request | [`CategoryUpdatePromptsParams`](./src/resources/organizations/categories.ts) |
| Response | [`CategoryUpdatePromptsResponse`](./src/resources/organizations/categories.ts) |

```ts
const updatePrompts = await client.organizations.categories.updatePrompts("categoryId", {
  prompts: [],
  dry_run: false,
});
```

#### Update prompt status

Bulk-update the status of one or more prompts. Prompts already in the target status are skipped. Use dry_run to preview without persisting.

Status options:
- 'active': Prompts will run daily.
- 'disabled': Prompts will not run moving forward, but historical data is preserved.
- 'deleted': Prompts are deleted along with historical data

| Direction | Type |
| --- | --- |
| Request | [`CategoryUpdatePromptStatusParams`](./src/resources/organizations/categories.ts) |
| Response | [`CategoryUpdatePromptStatusResponse`](./src/resources/organizations/categories.ts) |

```ts
const updatePromptStatus = await client.organizations.categories.updatePromptStatus("categoryId", {
  prompt_ids: [],
  status: "active",
  dry_run: false,
});
```

#### Get Category Assets

| Direction | Type |
| --- | --- |
| Response | [`CategoryAssetsResponse`](./src/resources/organizations/categories.ts) |

```ts
const assets = await client.organizations.categories.assets("categoryId");
```

#### Get Category Personas

| Direction | Type |
| --- | --- |
| Response | [`CategoryGetCategoryPersonasResponse`](./src/resources/organizations/categories.ts) |

```ts
const getCategoryPersonas = await client.organizations.categories.getCategoryPersonas("categoryId");
```

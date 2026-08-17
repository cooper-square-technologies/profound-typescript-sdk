# profound TypeScript API

Complete reference of every operation, grouped by resource. See [the README](./README.md) for usage and configuration.

## Contents

- [`Organizations`](#organizations)
  - [Get Regions](#get-regions)
  - [Get Models](#get-models)
  - [Get Domains](#get-domains)
  - [Get Assets](#get-assets)
  - [Get Personas](#get-personas)
  - [List organizations](#list-organizations)
  - [`Organizations Categories`](#organizations-categories)
    - [Get Categories](#get-categories)
    - [Get Category Topics](#get-category-topics)
    - [Get Category Tags](#get-category-tags)
    - [List prompts](#list-prompts)
    - [Get Category Assets](#get-category-assets)
    - [Get Category Personas](#get-category-personas)
    - [Create prompts](#create-prompts)
    - [Update prompts](#update-prompts)
    - [Update prompt status](#update-prompt-status)
- [`Prompts`](#prompts)
  - [Get Answers](#get-answers)
- [`Reports`](#reports)
  - [Query Citations](#query-citations)
  - [Query Visibility](#query-visibility)
  - [Query Sentiment](#query-sentiment)
  - [Get Referrals Report V1](#get-referrals-report-v1)
  - [Get Bots Report V1](#get-bots-report-v1)
  - [Get Referrals Report V2](#get-referrals-report-v2)
  - [Get Bots Report V2](#get-bots-report-v2)
  - [Query Fanouts](#query-fanouts)
  - [Stream Citations](#stream-citations)
  - [Stream Visibility](#stream-visibility)
  - [Stream Sentiment](#stream-sentiment)
  - [`Reports WebSearchResults`](#reports-websearchresults)
    - [Query Web Search Results](#query-web-search-results)
    - [Stream Web Search Results](#stream-web-search-results)
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
- [`Content`](#content)
  - [`Content Optimization`](#content-optimization)
    - [Optimization List](#optimization-list)
    - [Optimization Analysis](#optimization-analysis)
- [`Agents`](#agents)
  - [List agents](#list-agents)
  - [Get an agent](#get-an-agent)
  - [`Agents Runs`](#agents-runs)
    - [Run an agent](#run-an-agent)
    - [Get an agent run](#get-an-agent-run)
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

## Setup

```ts
import Profound from '@profoundai/client';

const client = new Profound({
  apiKey: process.env['PROFOUND_API_KEY'], // defaults to the PROFOUND_API_KEY env var
});
```

## `Organizations`

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

### List organizations

Return every organization the caller's API key grants access to. Use this to discover organization IDs before calling endpoints that accept an `organization_id` filter.

| Direction | Type |
| --- | --- |
| Response | [`OrganizationListResponse`](./src/resources/organizations/organizations.ts) |

```ts
const list = await client.organizations.list();
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
const topics = await client.organizations.categories.topics('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

#### Get Category Tags

Get the tags for a specific category.

| Direction | Type |
| --- | --- |
| Response | [`CategoryTagsResponse`](./src/resources/organizations/categories.ts) |

```ts
const tags = await client.organizations.categories.tags('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

#### List prompts

Retrieve prompts in a category with optional filtering by type, topic, tag, region, platform, or persona. Supports cursor-based pagination.

| Direction | Type |
| --- | --- |
| Request | [`CategoryPromptsParams`](./src/resources/organizations/categories.ts) |
| Response | [`CategoryPromptsResponse`](./src/resources/organizations/categories.ts) |

```ts
const prompts = await client.organizations.categories.prompts('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  limit: 10000,
  status: ['active'],
});
```

#### Get Category Assets

| Direction | Type |
| --- | --- |
| Response | [`CategoryAssetsResponse`](./src/resources/organizations/categories.ts) |

```ts
const assets = await client.organizations.categories.assets('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

#### Get Category Personas

| Direction | Type |
| --- | --- |
| Response | [`CategoryGetCategoryPersonasResponse`](./src/resources/organizations/categories.ts) |

```ts
const getCategoryPersonas = await client.organizations.categories.getCategoryPersonas(
  '7c9e6679-7425-40de-944b-e07fc1f90ae7',
);
```

#### Create prompts

Create one or more prompts in a category. Topics and tags are auto-created if referenced by name and not yet existing. Use dry_run to preview without persisting.

| Direction | Type |
| --- | --- |
| Request | [`CategoryCreatePromptsParams`](./src/resources/organizations/categories.ts) |
| Response | [`CategoryCreatePromptsResponse`](./src/resources/organizations/categories.ts) |

```ts
const createPrompts = await client.organizations.categories.createPrompts(
  '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  {
    prompts: [],
    dry_run: false,
  },
);
```

#### Update prompts

Update one or more existing prompts. Only provided fields are changed. Dimension fields (regions, platforms, personas, tags) replace the full set when provided. Use dry_run to preview without persisting.

| Direction | Type |
| --- | --- |
| Request | [`CategoryUpdatePromptsParams`](./src/resources/organizations/categories.ts) |
| Response | [`CategoryUpdatePromptsResponse`](./src/resources/organizations/categories.ts) |

```ts
const updatePrompts = await client.organizations.categories.updatePrompts(
  '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  {
    prompts: [],
    dry_run: false,
  },
);
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
const updatePromptStatus = await client.organizations.categories.updatePromptStatus(
  '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  {
    prompt_ids: [],
    status: 'active',
    dry_run: false,
  },
);
```

## `Prompts`

### Get Answers

| Direction | Type |
| --- | --- |
| Request | [`PromptAnswersParams`](./src/resources/prompts.ts) |
| Response | [`PromptAnswersResponse`](./src/resources/prompts.ts) |

```ts
const answers = await client.prompts.answers({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '2024-01-01T00:00:00.000Z',
  end_date: '2024-01-01T00:00:00.000Z',
});
```

## `Reports`

### Query Citations

Get citations for a given category.

The ``mentioned`` filter supports ``is true`` and ``is false``. It uses the
latest page analysis available at or before ``end_date``; pages without an
analysis by then are excluded from both values. ``citation_share`` keeps all
otherwise eligible citations in its denominator when this filter is used.

| Direction | Type |
| --- | --- |
| Request | [`ReportCitationsParams`](./src/resources/reports/reports.ts) |
| Response | [`ReportCitationsResponse`](./src/resources/reports/reports.ts) |

```ts
const citations = await client.reports.citations({
  date_interval: 'day',
  dimensions: [],
  metrics: [],
  order_by: {},
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '2024-01-01T00:00:00.000Z',
  end_date: '2024-01-01T00:00:00.000Z',
});
```

### Query Visibility

Query visibility report.

| Direction | Type |
| --- | --- |
| Request | [`ReportVisibilityParams`](./src/resources/reports/reports.ts) |
| Response | [`ReportResponse`](./src/resources/reports/reports.ts) |

```ts
const report = await client.reports.visibility({
  date_interval: 'day',
  dimensions: [],
  metrics: [],
  order_by: {},
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '2024-01-01T00:00:00.000Z',
  end_date: '2024-01-01T00:00:00.000Z',
});
```

### Query Sentiment

Get citations for a given category.

| Direction | Type |
| --- | --- |
| Request | [`ReportSentimentParams`](./src/resources/reports/reports.ts) |
| Response | [`ReportResponse`](./src/resources/reports/reports.ts) |

```ts
const report = await client.reports.sentiment({
  date_interval: 'day',
  dimensions: [],
  metrics: [],
  order_by: {},
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '2024-01-01T00:00:00.000Z',
  end_date: '2024-01-01T00:00:00.000Z',
});
```

### Get Referrals Report V1

Get referral traffic report from the daily aggregated materialized view.

This endpoint queries pre-aggregated daily referral data, making it efficient
for large date ranges and high-traffic sites.

| Direction | Type |
| --- | --- |
| Request | [`ReportGetReferralsReportParams`](./src/resources/reports/reports.ts) |
| Response | [`ReportResponse`](./src/resources/reports/reports.ts) |

```ts
const report = await client.reports.getReferralsReport({
  date_interval: 'day',
  dimensions: [],
  metrics: [],
  order_by: {},
  domain: '',
  start_date: '2024-01-01T00:00:00.000Z',
});
```

### Get Bots Report V1

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
| Request | [`ReportGetBotsReportParams`](./src/resources/reports/reports.ts) |
| Response | [`ReportResponse`](./src/resources/reports/reports.ts) |

```ts
const report = await client.reports.getBotsReport({
  date_interval: 'day',
  dimensions: [],
  metrics: [],
  order_by: {},
  domain: '',
  start_date: '2024-01-01T00:00:00.000Z',
});
```

### Get Referrals Report V2

Get referral traffic report from the hourly aggregated materialized view (UTC-based).

Supports date_interval="hour", calendar intervals through "year", "quarter", and "relative_week".

| Direction | Type |
| --- | --- |
| Request | [`ReportGetReferralsReportV2Params`](./src/resources/reports/reports.ts) |
| Response | [`ReportResponse`](./src/resources/reports/reports.ts) |

```ts
const report = await client.reports.getReferralsReportV2({
  date_interval: 'day',
  dimensions: [],
  metrics: [],
  order_by: {},
  domain: '',
  start_date: '2024-01-01T00:00:00.000Z',
  timezone: 'UTC',
});
```

### Get Bots Report V2

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
| Request | [`ReportGetBotsReportV2Params`](./src/resources/reports/reports.ts) |
| Response | [`ReportResponse`](./src/resources/reports/reports.ts) |

```ts
const report = await client.reports.getBotsReportV2({
  date_interval: 'day',
  dimensions: [],
  metrics: [],
  order_by: {},
  domain: '',
  start_date: '2024-01-01T00:00:00.000Z',
  timezone: 'UTC',
});
```

### Query Fanouts

| Direction | Type |
| --- | --- |
| Request | [`ReportQueryFanoutsParams`](./src/resources/reports/reports.ts) |
| Response | [`ReportResponse`](./src/resources/reports/reports.ts) |

```ts
const report = await client.reports.queryFanouts({
  date_interval: 'day',
  dimensions: [],
  metrics: [],
  order_by: {},
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '2024-01-01T00:00:00.000Z',
  end_date: '2024-01-01T00:00:00.000Z',
});
```

### Stream Citations

Stream citations with the same filter semantics as the non-streaming route.

| Direction | Type |
| --- | --- |
| Request | [`ReportStreamCitationsParams`](./src/resources/reports/reports.ts) |
| Response | [`ReportStreamCitationsResponse`](./src/resources/reports/reports.ts) |

```ts
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
```

### Stream Visibility

| Direction | Type |
| --- | --- |
| Request | [`ReportStreamVisibilityParams`](./src/resources/reports/reports.ts) |
| Response | [`ReportStreamVisibilityResponse`](./src/resources/reports/reports.ts) |

```ts
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
```

### Stream Sentiment

| Direction | Type |
| --- | --- |
| Request | [`ReportStreamSentimentParams`](./src/resources/reports/reports.ts) |
| Response | [`ReportStreamSentimentResponse`](./src/resources/reports/reports.ts) |

```ts
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
  date_interval: 'day',
  dimensions: [],
  metrics: [],
  order_by: {},
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '2024-01-01T00:00:00.000Z',
  end_date: '2024-01-01T00:00:00.000Z',
});
```

#### Stream Web Search Results

| Direction | Type |
| --- | --- |
| Request | [`WebSearchResultStreamParams`](./src/resources/reports/web-search-results.ts) |
| Response | [`WebSearchResultStreamResponse`](./src/resources/reports/web-search-results.ts) |

```ts
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
```

### `Reports Shopping`

#### Shopping Visibility

| Direction | Type |
| --- | --- |
| Request | [`ShoppingVisibilityParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingVisibilityResponse`](./src/resources/reports/shopping.ts) |

```ts
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
```

#### Shopping Item Visibility

| Direction | Type |
| --- | --- |
| Request | [`ShoppingItemVisibilityParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingItemVisibilityResponse`](./src/resources/reports/shopping.ts) |

```ts
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
```

#### Shopping Merchant Distribution

| Direction | Type |
| --- | --- |
| Request | [`ShoppingMerchantDistributionParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingMerchantDistributionResponse`](./src/resources/reports/shopping.ts) |

```ts
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
```

#### Shopping Merchant Visibility By Brand

| Direction | Type |
| --- | --- |
| Request | [`ShoppingMerchantVisibilityByBrandParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingMerchantVisibilityByBrandResponse`](./src/resources/reports/shopping.ts) |

```ts
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
```

#### Shopping Merchant By Items

| Direction | Type |
| --- | --- |
| Request | [`ShoppingMerchantByItemsParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingMerchantByItemsResponse`](./src/resources/reports/shopping.ts) |

```ts
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
```

#### Shopping All Items With Merchants

| Direction | Type |
| --- | --- |
| Request | [`ShoppingAllItemsWithMerchantsParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingAllItemsWithMerchantsResponse`](./src/resources/reports/shopping.ts) |

```ts
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
```

#### Shopping Trigger Rate

| Direction | Type |
| --- | --- |
| Request | [`ShoppingTriggerRateParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingTriggerRateResponse`](./src/resources/reports/shopping.ts) |

```ts
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
```

#### Shopping Merchant Share

| Direction | Type |
| --- | --- |
| Request | [`ShoppingMerchantShareParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingMerchantShareResponse`](./src/resources/reports/shopping.ts) |

```ts
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
```

#### Shopping Product Merchant Urls

| Direction | Type |
| --- | --- |
| Request | [`ShoppingProductMerchantURLsParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingProductMerchantURLsResponse`](./src/resources/reports/shopping.ts) |

```ts
const productMerchantURLs = await client.reports.shopping.productMerchantURLs({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  product_names: [],
  start_date: '2024-01-01T00:00:00.000Z',
  end_date: '2024-01-01T00:00:00.000Z',
});
```

#### Shopping Executions

| Direction | Type |
| --- | --- |
| Request | [`ShoppingExecutionsParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingExecutionsResponse`](./src/resources/reports/shopping.ts) |

```ts
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
```

## `Content`

### `Content Optimization`

#### Optimization List

| Direction | Type |
| --- | --- |
| Request | [`OptimizationListParams`](./src/resources/content/optimization.ts) |
| Response | [`OptimizationListResponse`](./src/resources/content/optimization.ts) |

```ts
const list = await client.content.optimization.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
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
const retrieve = await client.content.optimization.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  asset_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
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

### Get an agent

Retrieve an agent and its schema details.

Agents can have both a live published version and a draft version with newer
unpublished changes. Use the `version` parameter to choose which state to return.

| Direction | Type |
| --- | --- |
| Request | [`AgentRetrieveParams`](./src/resources/agents/agents.ts) |
| Response | [`AgentRetrieveResponse`](./src/resources/agents/agents.ts) |

```ts
const retrieve = await client.agents.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
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
const create = await client.agents.runs.create('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

#### Get an agent run

Retrieve the current status and result details for an agent run.

| Direction | Type |
| --- | --- |
| Request | [`RunRetrieveParams`](./src/resources/agents/runs.ts) |
| Response | [`RunRetrieveResponse`](./src/resources/agents/runs.ts) |

```ts
const retrieve = await client.agents.runs.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  agent_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  verbose: false,
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
const search = await client.knowledgeBases.search('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  query: 'x',
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
const create = await client.knowledgeBases.documents.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  name: 'x',
  text: 'x',
});
```

#### Update Document

Overwrite a knowledge base document using JSON text or multipart file upload.

| Direction | Type |
| --- | --- |
| Request | [`DocumentUpdateParams`](./src/resources/knowledge-bases/documents.ts) |
| Response | [`DocumentUpdateResponse`](./src/resources/knowledge-bases/documents.ts) |

```ts
const update = await client.knowledgeBases.documents.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  name: 'x',
  text: 'x',
});
```

#### Delete Document

Delete an existing document from a knowledge base.

| Direction | Type |
| --- | --- |
| Request | [`DocumentDeleteParams`](./src/resources/knowledge-bases/documents.ts) |
| Response | [`DocumentDeleteResponse`](./src/resources/knowledge-bases/documents.ts) |

```ts
const delete_ = await client.knowledgeBases.documents.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  name: 'x',
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
const create = await client.knowledgeBases.folders.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  path: 'x',
});
```

#### Delete Folder

Delete a folder. With recursive=false, non-empty folders return 409 and no contents are deleted.

| Direction | Type |
| --- | --- |
| Request | [`FolderDeleteParams`](./src/resources/knowledge-bases/folders.ts) |
| Response | [`FolderDeleteResponse`](./src/resources/knowledge-bases/folders.ts) |

```ts
const delete_ = await client.knowledgeBases.folders.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  path: 'x',
  recursive: false,
});
```

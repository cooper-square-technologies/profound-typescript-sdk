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
    - [Get Category Regions](#get-category-regions)
    - [Get Category Citation Categories](#get-category-citation-categories)
- [`Prompts`](#prompts)
  - [Get Answers](#get-answers)
  - [Query Answers V2](#query-answers-v2)
  - [Stream Answers V2](#stream-answers-v2)
- [`Reports`](#reports)
  - [Query Citations](#query-citations)
  - [Query Visibility](#query-visibility)
  - [Query Sentiment](#query-sentiment)
  - [Query Sentiment V2](#query-sentiment-v2)
  - [Get Referrals Report V1](#get-referrals-report-v1)
  - [Get Bots Report V1](#get-bots-report-v1)
  - [Query Fanouts](#query-fanouts)
  - [Stream Citations](#stream-citations)
  - [Stream Visibility](#stream-visibility)
  - [Stream Sentiment](#stream-sentiment)
  - [Stream Citations V2](#stream-citations-v2)
  - [Stream Visibility V2](#stream-visibility-v2)
  - [Stream Sentiment V2](#stream-sentiment-v2)
  - [Stream Query Fanouts V2](#stream-query-fanouts-v2)
  - [Get Referrals Report V2](#get-referrals-report-v2)
  - [Get Bots Report V2](#get-bots-report-v2)
  - [Query Visibility V2](#query-visibility-v2)
  - [Query Citations V2](#query-citations-v2)
  - [Query Sentiment V2](#query-sentiment-v2-1)
  - [Query Fanouts V2](#query-fanouts-v2)
  - [`Reports WebSearchResults`](#reports-websearchresults)
    - [Query Web Search Results](#query-web-search-results)
    - [Stream Web Search Results](#stream-web-search-results)
  - [`Reports Shopping`](#reports-shopping)
    - [Query Shopping Brands V2](#query-shopping-brands-v2)
    - [Stream Shopping Brands V2](#stream-shopping-brands-v2)
    - [Query Shopping Products V2](#query-shopping-products-v2)
    - [Stream Shopping Products V2](#stream-shopping-products-v2)
    - [Query Shopping Merchants V2](#query-shopping-merchants-v2)
    - [Stream Shopping Merchants V2](#stream-shopping-merchants-v2)
    - [Query Shopping Trigger Rate V2](#query-shopping-trigger-rate-v2)
    - [Stream Shopping Trigger Rate V2](#stream-shopping-trigger-rate-v2)
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
  - [`Reports Factcheck`](#reports-factcheck)
    - [Query Scores](#query-scores)
    - [Stream Scores](#stream-scores)
    - [`Reports Factcheck Claims`](#reports-factcheck-claims)
      - [Query Claims](#query-claims)
      - [Stream Claims](#stream-claims)
  - [`Reports Social`](#reports-social)
    - [`Reports Social Youtube`](#reports-social-youtube)
      - [Query Youtube Channels](#query-youtube-channels)
      - [Query Youtube Videos](#query-youtube-videos)
      - [Query Youtube Summary](#query-youtube-summary)
- [`Content`](#content)
  - [`Content Optimization`](#content-optimization)
    - [Optimization List](#optimization-list)
    - [Optimization Analysis](#optimization-analysis)
- [`Agents`](#agents)
  - [List agents](#list-agents)
  - [Get an agent](#get-an-agent)
  - [Create an agent](#create-an-agent)
  - [Publish an agent](#publish-an-agent)
  - [Update an agent](#update-an-agent)
  - [Get an agent's graph](#get-an-agents-graph)
  - [`Agents Runs`](#agents-runs)
    - [Run an agent](#run-an-agent)
    - [Get an agent run](#get-an-agent-run)
  - [`Agents NodeTypes`](#agents-nodetypes)
    - [List node types](#list-node-types)
    - [Get a node type schema](#get-a-node-type-schema)
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
- [`Projects`](#projects)
  - [List Projects](#list-projects)
  - [Create Project](#create-project)
  - [Get Project](#get-project)
  - [Delete Project](#delete-project)
  - [Get Project Status](#get-project-status)
  - [Archive Project](#archive-project)
  - [Unarchive Project](#unarchive-project)
  - [`Projects Generations`](#projects-generations)
    - [List Project Generations](#list-project-generations)
    - [Get Project Generation Status](#get-project-generation-status)
  - [`Projects Tasks`](#projects-tasks)
    - [List Project Tasks](#list-project-tasks)
    - [Create Project Task](#create-project-task)
    - [Get Project Task](#get-project-task)
    - [Update Project Task](#update-project-task)
    - [Delete Project Task](#delete-project-task)
    - [Update Project Task Status](#update-project-task-status)
- [`Integrations`](#integrations)
  - [List Integrations](#list-integrations)
- [`Documents`](#documents)
  - [Create a document](#create-a-document)
  - [List documents](#list-documents)
  - [Read a document](#read-a-document)
  - [Rename or reshare a document](#rename-or-reshare-a-document)
  - [Delete a document](#delete-a-document)
  - [Replace a document's content](#replace-a-documents-content)
- [`Ads`](#ads)
  - [`Ads OpenaiAds`](#ads-openaiads)
    - [`Ads OpenaiAds AdAccount`](#ads-openaiads-adaccount)
      - [Get Account Insights](#get-account-insights)

## Setup

```ts
import Profound from '@profoundai/client';

const client = new Profound({
  apiKey: process.env['PROFOUND_API_KEY'], // defaults to the PROFOUND_API_KEY env var
  environment: 'production',
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

#### Get Category Regions

Get the regions for a specific category.

| Direction | Type |
| --- | --- |
| Response | [`CategoryRetrieveRegionsResponse`](./src/resources/organizations/categories.ts) |

```ts
const retrieveRegions = await client.organizations.categories.retrieveRegions(
  '7c9e6679-7425-40de-944b-e07fc1f90ae7',
);
```

#### Get Category Citation Categories

Get the citation categories for a category: the built-in buckets plus any custom categories.

| Direction | Type |
| --- | --- |
| Response | [`CategoryGetCitationCategoriesResponse`](./src/resources/organizations/categories.ts) |

```ts
const getCitationCategories = await client.organizations.categories.getCitationCategories(
  '7c9e6679-7425-40de-944b-e07fc1f90ae7',
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

### Query Answers V2

| Direction | Type |
| --- | --- |
| Request | [`PromptAnswersV2Params`](./src/resources/prompts.ts) |
| Response | [`PromptAnswersV2Response`](./src/resources/prompts.ts) |

```ts
const answersV2 = await client.prompts.answersV2({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '',
  end_date: '',
});
```

### Stream Answers V2

| Direction | Type |
| --- | --- |
| Request | [`PromptStreamAnswersV2Params`](./src/resources/prompts.ts) |
| Response | [`PromptStreamAnswersV2Response`](./src/resources/prompts.ts) |

```ts
const stream = await client.prompts.streamAnswersV2({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '',
  end_date: '',
});

for await (const event of stream) {
  console.log(event);
}
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

### Query Sentiment V2

| Direction | Type |
| --- | --- |
| Request | [`ReportSentimentV2Params`](./src/resources/reports/reports.ts) |
| Response | [`ReportSentimentV2Response`](./src/resources/reports/reports.ts) |

```ts
const sentimentV2 = await client.reports.sentimentV2({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  asset_name: '',
  start_date: '2024-01-01T00:00:00.000Z',
  end_date: '2024-01-01T00:00:00.000Z',
  date_bucket: 'day',
  metrics: [],
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

### Stream Citations V2

| Direction | Type |
| --- | --- |
| Request | [`ReportStreamCitationsV2Params`](./src/resources/reports/reports.ts) |
| Response | [`ReportStreamCitationsV2Response`](./src/resources/reports/reports.ts) |

```ts
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
```

### Stream Visibility V2

| Direction | Type |
| --- | --- |
| Request | [`ReportStreamVisibilityV2Params`](./src/resources/reports/reports.ts) |
| Response | [`ReportStreamVisibilityV2Response`](./src/resources/reports/reports.ts) |

```ts
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
```

### Stream Sentiment V2

| Direction | Type |
| --- | --- |
| Request | [`ReportStreamSentimentV2Params`](./src/resources/reports/reports.ts) |
| Response | [`ReportStreamSentimentV2Response`](./src/resources/reports/reports.ts) |

```ts
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
```

### Stream Query Fanouts V2

| Direction | Type |
| --- | --- |
| Request | [`ReportStreamQueryFanoutsParams`](./src/resources/reports/reports.ts) |
| Response | [`ReportStreamQueryFanoutsResponse`](./src/resources/reports/reports.ts) |

```ts
const stream = await client.reports.streamQueryFanouts({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '',
  end_date: '',
  interval: 'day',
});

for await (const event of stream) {
  console.log(event);
}
```

### Get Referrals Report V2

Get referral traffic report from the hourly aggregated materialized view (UTC-based).

Supports date_interval="hour", calendar intervals through "year", "quarter", and "relative_week".
When `view_id` is provided, the query is scoped to that domain segment's hosts and paths.

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
When `view_id` is provided, the query is scoped to that domain segment's hosts and paths.

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

### Query Visibility V2

| Direction | Type |
| --- | --- |
| Request | [`ReportQueryVisibilityParams`](./src/resources/reports/reports.ts) |
| Response | [`ReportQueryVisibilityResponse`](./src/resources/reports/reports.ts) |

```ts
const queryVisibility = await client.reports.queryVisibility({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '',
  end_date: '',
  interval: 'day',
  scope: 'owned',
});
```

### Query Citations V2

| Direction | Type |
| --- | --- |
| Request | [`ReportQueryCitationsParams`](./src/resources/reports/reports.ts) |
| Response | [`ReportQueryCitationsResponse`](./src/resources/reports/reports.ts) |

```ts
const queryCitations = await client.reports.queryCitations({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '',
  end_date: '',
  entity: 'domain',
  interval: 'day',
  scope: 'all',
});
```

### Query Sentiment V2

| Direction | Type |
| --- | --- |
| Request | [`ReportQuerySentimentParams`](./src/resources/reports/reports.ts) |
| Response | [`ReportQuerySentimentResponse`](./src/resources/reports/reports.ts) |

```ts
const querySentiment = await client.reports.querySentiment({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  asset: '',
  start_date: '',
  end_date: '',
  interval: 'day',
  include_cited_websites: false,
});
```

### Query Fanouts V2

| Direction | Type |
| --- | --- |
| Request | [`ReportQueryQueryFanoutsParams`](./src/resources/reports/reports.ts) |
| Response | [`ReportQueryQueryFanoutsResponse`](./src/resources/reports/reports.ts) |

```ts
const queryQueryFanouts = await client.reports.queryQueryFanouts({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '',
  end_date: '',
  interval: 'day',
});
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

#### Query Shopping Brands V2

| Direction | Type |
| --- | --- |
| Request | [`ShoppingBrandsParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingBrandsResponse`](./src/resources/reports/shopping.ts) |

```ts
const brands = await client.reports.shopping.brands({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '',
  end_date: '',
  interval: 'day',
  scope: 'owned',
});
```

#### Stream Shopping Brands V2

| Direction | Type |
| --- | --- |
| Request | [`ShoppingStreamBrandsParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingStreamBrandsResponse`](./src/resources/reports/shopping.ts) |

```ts
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
```

#### Query Shopping Products V2

| Direction | Type |
| --- | --- |
| Request | [`ShoppingProductsParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingProductsResponse`](./src/resources/reports/shopping.ts) |

```ts
const products = await client.reports.shopping.products({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '',
  end_date: '',
  interval: 'day',
  include_merchants: false,
  competitor_limit: 5,
});
```

#### Stream Shopping Products V2

| Direction | Type |
| --- | --- |
| Request | [`ShoppingStreamProductsParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingStreamProductsResponse`](./src/resources/reports/shopping.ts) |

```ts
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
```

#### Query Shopping Merchants V2

| Direction | Type |
| --- | --- |
| Request | [`ShoppingMerchantsParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingMerchantsResponse`](./src/resources/reports/shopping.ts) |

```ts
const merchants = await client.reports.shopping.merchants({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '',
  end_date: '',
  interval: 'day',
});
```

#### Stream Shopping Merchants V2

| Direction | Type |
| --- | --- |
| Request | [`ShoppingStreamMerchantsParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingStreamMerchantsResponse`](./src/resources/reports/shopping.ts) |

```ts
const stream = await client.reports.shopping.streamMerchants({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '',
  end_date: '',
  interval: 'day',
});

for await (const event of stream) {
  console.log(event);
}
```

#### Query Shopping Trigger Rate V2

| Direction | Type |
| --- | --- |
| Request | [`ShoppingTriggerRateParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingTriggerRateResponse`](./src/resources/reports/shopping.ts) |

```ts
const triggerRate = await client.reports.shopping.triggerRate({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '',
  end_date: '',
  interval: 'day',
});
```

#### Stream Shopping Trigger Rate V2

| Direction | Type |
| --- | --- |
| Request | [`ShoppingStreamTriggerRateParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingStreamTriggerRateResponse`](./src/resources/reports/shopping.ts) |

```ts
const stream = await client.reports.shopping.streamTriggerRate({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '',
  end_date: '',
  interval: 'day',
});

for await (const event of stream) {
  console.log(event);
}
```

### `Reports Accuracy`

#### Accuracy Overview

| Direction | Type |
| --- | --- |
| Request | [`AccuracyCreateOverviewParams`](./src/resources/reports/accuracy.ts) |
| Response | [`AccuracyCreateOverviewResponse`](./src/resources/reports/accuracy.ts) |

```ts
const createOverview = await client.reports.accuracy.createOverview({
  start_date: '',
  end_date: '',
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  exclude_topic_ids: false,
  tag_filter_type: 'any',
  include_no_tag: false,
  include_no_persona: false,
  group_by: 'period',
});
```

#### Accuracy Breakdown

| Direction | Type |
| --- | --- |
| Request | [`AccuracyCreateBreakdownParams`](./src/resources/reports/accuracy.ts) |
| Response | [`AccuracyCreateBreakdownResponse`](./src/resources/reports/accuracy.ts) |

```ts
const createBreakdown = await client.reports.accuracy.createBreakdown({
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
```

#### Accuracy Citation Analysis

| Direction | Type |
| --- | --- |
| Request | [`AccuracyCreateCitationAnalysisParams`](./src/resources/reports/accuracy.ts) |
| Response | [`AccuracyCreateCitationAnalysisResponse`](./src/resources/reports/accuracy.ts) |

```ts
const createCitationAnalysis = await client.reports.accuracy.createCitationAnalysis({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  clean_href: '',
  start_date: '',
  end_date: '',
});
```

#### Accuracy Topic Ids

| Direction | Type |
| --- | --- |
| Request | [`AccuracyCreateTopicIDsParams`](./src/resources/reports/accuracy.ts) |
| Response | [`AccuracyCreateTopicIDsResponse`](./src/resources/reports/accuracy.ts) |

```ts
const createTopicIDs = await client.reports.accuracy.createTopicIDs({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '',
  end_date: '',
});
```

#### Accuracy Inaccurate Themes

| Direction | Type |
| --- | --- |
| Request | [`AccuracyCreateInaccurateThemesParams`](./src/resources/reports/accuracy.ts) |
| Response | [`AccuracyCreateInaccurateThemesResponse`](./src/resources/reports/accuracy.ts) |

```ts
const createInaccurateThemes = await client.reports.accuracy.createInaccurateThemes({
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
```

#### Accuracy Inaccurate Clusters

| Direction | Type |
| --- | --- |
| Request | [`AccuracyCreateInaccurateClustersParams`](./src/resources/reports/accuracy.ts) |
| Response | [`AccuracyCreateInaccurateClustersResponse`](./src/resources/reports/accuracy.ts) |

```ts
const createInaccurateClusters = await client.reports.accuracy.createInaccurateClusters({
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
```

#### Accuracy Inaccuracy Drivers

| Direction | Type |
| --- | --- |
| Request | [`AccuracyCreateInaccuracyDriversParams`](./src/resources/reports/accuracy.ts) |
| Response | [`AccuracyCreateInaccuracyDriversResponse`](./src/resources/reports/accuracy.ts) |

```ts
const createInaccuracyDrivers = await client.reports.accuracy.createInaccuracyDrivers({
  start_date: '',
  end_date: '',
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  exclude_topic_ids: false,
  tag_filter_type: 'any',
  include_no_tag: false,
  include_no_persona: false,
  limit: 5,
});
```

#### Accuracy Top Inaccurate Claims

| Direction | Type |
| --- | --- |
| Request | [`AccuracyCreateTopInaccurateClaimsParams`](./src/resources/reports/accuracy.ts) |
| Response | [`AccuracyCreateTopInaccurateClaimsResponse`](./src/resources/reports/accuracy.ts) |

```ts
const createTopInaccurateClaims = await client.reports.accuracy.createTopInaccurateClaims({
  start_date: '',
  end_date: '',
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  exclude_topic_ids: false,
  tag_filter_type: 'any',
  include_no_tag: false,
  include_no_persona: false,
  limit: 5,
});
```

#### Accuracy Claim Breakdown

| Direction | Type |
| --- | --- |
| Request | [`AccuracyCreateClaimBreakdownParams`](./src/resources/reports/accuracy.ts) |
| Response | [`AccuracyCreateClaimBreakdownResponse`](./src/resources/reports/accuracy.ts) |

```ts
const createClaimBreakdown = await client.reports.accuracy.createClaimBreakdown({
  start_date: '',
  end_date: '',
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  exclude_topic_ids: false,
  tag_filter_type: 'any',
  include_no_tag: false,
  include_no_persona: false,
  cluster_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
});
```

#### Accuracy Claim Citations

| Direction | Type |
| --- | --- |
| Request | [`AccuracyCreateClaimCitationsParams`](./src/resources/reports/accuracy.ts) |
| Response | [`AccuracyCreateClaimCitationsResponse`](./src/resources/reports/accuracy.ts) |

```ts
const createClaimCitations = await client.reports.accuracy.createClaimCitations({
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
```

#### Accuracy Cluster Example Runs

| Direction | Type |
| --- | --- |
| Request | [`AccuracyCreateClusterExampleRunsParams`](./src/resources/reports/accuracy.ts) |
| Response | [`AccuracyCreateClusterExampleRunsResponse`](./src/resources/reports/accuracy.ts) |

```ts
const createClusterExampleRuns = await client.reports.accuracy.createClusterExampleRuns({
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
```

#### Accuracy Cluster Verification Pairs

| Direction | Type |
| --- | --- |
| Request | [`AccuracyCreateClusterVerificationPairsParams`](./src/resources/reports/accuracy.ts) |
| Response | [`AccuracyCreateClusterVerificationPairsResponse`](./src/resources/reports/accuracy.ts) |

```ts
const createClusterVerificationPairs = await client.reports.accuracy.createClusterVerificationPairs({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  cluster_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
});
```

#### Accuracy Factcheck Setup Status

| Direction | Type |
| --- | --- |
| Request | [`AccuracyCreateFactcheckSetupStatusParams`](./src/resources/reports/accuracy.ts) |
| Response | [`AccuracyCreateFactcheckSetupStatusResponse`](./src/resources/reports/accuracy.ts) |

```ts
const createFactcheckSetupStatus = await client.reports.accuracy.createFactcheckSetupStatus({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
});
```

### `Reports Factcheck`

#### Query Scores

| Direction | Type |
| --- | --- |
| Request | [`FactcheckQueryScoresParams`](./src/resources/reports/factcheck/factcheck.ts) |
| Response | [`FactcheckQueryScoresResponse`](./src/resources/reports/factcheck/factcheck.ts) |

```ts
const queryScores = await client.reports.factcheck.queryScores({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '',
  end_date: '',
});
```

#### Stream Scores

| Direction | Type |
| --- | --- |
| Request | [`FactcheckStreamScoresParams`](./src/resources/reports/factcheck/factcheck.ts) |
| Response | [`FactcheckStreamScoresResponse`](./src/resources/reports/factcheck/factcheck.ts) |

```ts
const stream = await client.reports.factcheck.streamScores({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '',
  end_date: '',
});

for await (const event of stream) {
  console.log(event);
}
```

#### `Reports Factcheck Claims`

##### Query Claims

| Direction | Type |
| --- | --- |
| Request | [`ClaimQueryClaimsParams`](./src/resources/reports/factcheck/claims.ts) |
| Response | [`ClaimQueryClaimsResponse`](./src/resources/reports/factcheck/claims.ts) |

```ts
const queryClaims = await client.reports.factcheck.claims.queryClaims({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '',
  end_date: '',
});
```

##### Stream Claims

| Direction | Type |
| --- | --- |
| Request | [`ClaimStreamClaimsParams`](./src/resources/reports/factcheck/claims.ts) |
| Response | [`ClaimStreamClaimsResponse`](./src/resources/reports/factcheck/claims.ts) |

```ts
const stream = await client.reports.factcheck.claims.streamClaims({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '',
  end_date: '',
});

for await (const event of stream) {
  console.log(event);
}
```

### `Reports Social`

#### `Reports Social Youtube`

##### Query Youtube Channels

Rank the YouTube channels cited in a category, or the video categories they publish in.

| Direction | Type |
| --- | --- |
| Request | [`YoutubeGetChannelsParams`](./src/resources/reports/social/youtube.ts) |
| Response | [`YoutubeGetChannelsResponse`](./src/resources/reports/social/youtube.ts) |

```ts
const getChannels = await client.reports.social.youtube.getChannels({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '',
  end_date: '',
});
```

##### Query Youtube Videos

Rank cited YouTube videos, for one channel or across all of them.

| Direction | Type |
| --- | --- |
| Request | [`YoutubeGetVideosParams`](./src/resources/reports/social/youtube.ts) |
| Response | [`YoutubeGetVideosResponse`](./src/resources/reports/social/youtube.ts) |

```ts
const getVideos = await client.reports.social.youtube.getVideos({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '',
  end_date: '',
  attribution: 'attributed',
});
```

##### Query Youtube Summary

Report how much of youtube.com the channel and video rankings account for.

| Direction | Type |
| --- | --- |
| Request | [`YoutubeGetSummaryParams`](./src/resources/reports/social/youtube.ts) |
| Response | [`YoutubeGetSummaryResponse`](./src/resources/reports/social/youtube.ts) |

```ts
const getSummary = await client.reports.social.youtube.getSummary({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '',
  end_date: '',
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

### Create an agent

Create a new draft agent owned by the given organization.

`organization_id` is required and you must be a member of it. The agent is created
as a `draft`; publish it with `POST /v1/agents/{agent_id}/publish` once its graph
is ready.

| Direction | Type |
| --- | --- |
| Request | [`AgentCreateParams`](./src/resources/agents/agents.ts) |
| Response | [`Agent`](./src/resources/shared.ts) |

```ts
const agent = await client.agents.create({
  organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  name: 'x',
});
```

### Publish an agent

Publish an agent's latest draft as its live published version.

You must be a member of the agent's organization. Publishing promotes the current
draft graph to a new published version. A draft that cannot produce its declared
input/output contract is rejected with `422` and is not published.

| Direction | Type |
| --- | --- |
| Response | [`Agent`](./src/resources/shared.ts) |

```ts
const agent = await client.agents.publish('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### Update an agent

Update an agent's draft graph in place.

You must be a member of the agent's organization. The agent's draft is replaced with the
supplied graph and re-validated, so you can iterate one draft — create, then update per
fix — instead of creating a new agent on every change. The response carries the updated
`validation`; publish with `POST /v1/agents/{agent_id}/publish` once `validation.valid`.

| Direction | Type |
| --- | --- |
| Request | [`AgentUpdateParams`](./src/resources/agents/agents.ts) |
| Response | [`AgentUpdateResponse`](./src/resources/agents/agents.ts) |

```ts
const update = await client.agents.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
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
| Request | [`AgentRetrieveGraphParams`](./src/resources/agents/agents.ts) |
| Response | [`AgentRetrieveGraphResponse`](./src/resources/agents/agents.ts) |

```ts
const retrieveGraph = await client.agents.retrieveGraph('7c9e6679-7425-40de-944b-e07fc1f90ae7');
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

### `Agents NodeTypes`

#### List node types

List the node types available for building agents.

The set is deterministic and does not depend on the caller, so the response
is safe to cache across sessions. Integration-dependent and dynamic-schema
node types are intentionally excluded in v1.

| Direction | Type |
| --- | --- |
| Response | [`NodeTypeListResponse`](./src/resources/agents/node-types.ts) |

```ts
const list = await client.agents.nodeTypes.list();
```

#### Get a node type schema

Retrieve the JSON schema for a single node type.

The `schema` field is an opaque JSON Schema for the node's configuration.
Use `schema_version` as a cache key — it bumps whenever the schema changes.

| Direction | Type |
| --- | --- |
| Response | [`NodeTypeRetrieveSchemaResponse`](./src/resources/agents/node-types.ts) |

```ts
const retrieveSchema = await client.agents.nodeTypes.retrieveSchema('nodeType');
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
| Response | [`DocumentOperationResponse`](./src/resources/shared.ts) |

```ts
const operation = await client.knowledgeBases.documents.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  name: 'x',
  text: 'x',
});
```

#### Update Document

Overwrite a knowledge base document using JSON text or multipart file upload.

| Direction | Type |
| --- | --- |
| Request | [`DocumentUpdateParams`](./src/resources/knowledge-bases/documents.ts) |
| Response | [`DocumentOperationResponse`](./src/resources/shared.ts) |

```ts
const operation = await client.knowledgeBases.documents.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  name: 'x',
  text: 'x',
});
```

#### Delete Document

Delete an existing document from a knowledge base.

| Direction | Type |
| --- | --- |
| Request | [`DocumentDeleteParams`](./src/resources/knowledge-bases/documents.ts) |
| Response | [`DocumentOperationResponse`](./src/resources/shared.ts) |

```ts
const operation = await client.knowledgeBases.documents.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
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

## `Projects`

### List Projects

| Direction | Type |
| --- | --- |
| Request | [`ProjectListParams`](./src/resources/projects/projects.ts) |
| Response | [`ProjectListResponse`](./src/resources/projects/projects.ts) |

```ts
const list = await client.projects.list({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  limit: 100,
  offset: 0,
});
```

### Create Project

| Direction | Type |
| --- | --- |
| Request | [`ProjectCreateParams`](./src/resources/projects/projects.ts) |
| Response | [`ProjectCreateResponse`](./src/resources/projects/projects.ts) |

```ts
const create = await client.projects.create({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
});
```

### Get Project

| Direction | Type |
| --- | --- |
| Request | [`ProjectRetrieveParams`](./src/resources/projects/projects.ts) |
| Response | [`ProjectRetrieveResponse`](./src/resources/projects/projects.ts) |

```ts
const retrieve = await client.projects.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
});
```

### Delete Project

| Direction | Type |
| --- | --- |
| Request | [`ProjectDeleteParams`](./src/resources/projects/projects.ts) |

```ts
await client.projects.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
});
```

### Get Project Status

| Direction | Type |
| --- | --- |
| Request | [`ProjectGetStatusParams`](./src/resources/projects/projects.ts) |
| Response | [`ProjectGetStatusResponse`](./src/resources/projects/projects.ts) |

```ts
const getStatus = await client.projects.getStatus('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
});
```

### Archive Project

| Direction | Type |
| --- | --- |
| Request | [`ProjectArchiveParams`](./src/resources/projects/projects.ts) |
| Response | [`ProjectArchiveResponse`](./src/resources/projects/projects.ts) |

```ts
const archive = await client.projects.archive('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
});
```

### Unarchive Project

| Direction | Type |
| --- | --- |
| Request | [`ProjectUnarchiveParams`](./src/resources/projects/projects.ts) |
| Response | [`ProjectUnarchiveResponse`](./src/resources/projects/projects.ts) |

```ts
const unarchive = await client.projects.unarchive('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
});
```

### `Projects Generations`

#### List Project Generations

| Direction | Type |
| --- | --- |
| Request | [`GenerationListParams`](./src/resources/projects/generations.ts) |
| Response | [`GenerationListResponse`](./src/resources/projects/generations.ts) |

```ts
const list = await client.projects.generations.list({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  limit: 100,
  offset: 0,
});
```

#### Get Project Generation Status

| Direction | Type |
| --- | --- |
| Request | [`GenerationRetrieveParams`](./src/resources/projects/generations.ts) |
| Response | [`GenerationRetrieveResponse`](./src/resources/projects/generations.ts) |

```ts
const retrieve = await client.projects.generations.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
});
```

### `Projects Tasks`

#### List Project Tasks

| Direction | Type |
| --- | --- |
| Request | [`TaskListParams`](./src/resources/projects/tasks.ts) |
| Response | [`TaskListResponse`](./src/resources/projects/tasks.ts) |

```ts
const list = await client.projects.tasks.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
});
```

#### Create Project Task

| Direction | Type |
| --- | --- |
| Request | [`TaskCreateParams`](./src/resources/projects/tasks.ts) |
| Response | [`TaskCreateResponse`](./src/resources/projects/tasks.ts) |

```ts
const create = await client.projects.tasks.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  title: 'x',
});
```

#### Get Project Task

| Direction | Type |
| --- | --- |
| Request | [`TaskRetrieveParams`](./src/resources/projects/tasks.ts) |
| Response | [`TaskRetrieveResponse`](./src/resources/projects/tasks.ts) |

```ts
const retrieve = await client.projects.tasks.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  project_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
});
```

#### Update Project Task

| Direction | Type |
| --- | --- |
| Request | [`TaskUpdateParams`](./src/resources/projects/tasks.ts) |
| Response | [`TaskUpdateResponse`](./src/resources/projects/tasks.ts) |

```ts
const update = await client.projects.tasks.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  project_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
});
```

#### Delete Project Task

| Direction | Type |
| --- | --- |
| Request | [`TaskDeleteParams`](./src/resources/projects/tasks.ts) |

```ts
await client.projects.tasks.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  project_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
});
```

#### Update Project Task Status

| Direction | Type |
| --- | --- |
| Request | [`TaskUpdateStatusParams`](./src/resources/projects/tasks.ts) |
| Response | [`TaskUpdateStatusResponse`](./src/resources/projects/tasks.ts) |

```ts
const updateStatus = await client.projects.tasks.updateStatus('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  project_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  status: 'not_started',
});
```

## `Integrations`

### List Integrations

List the organization's connected integrations.

Returns every connected integration by default, each with its lifecycle
`status`; pass `status_filter` to narrow to one status (e.g. `needs_reauth`).
Each row's `integration_id` is the value a hub-backed node needs bound to it.

| Direction | Type |
| --- | --- |
| Request | [`IntegrationListParams`](./src/resources/integrations.ts) |
| Response | [`IntegrationListResponse`](./src/resources/integrations.ts) |

```ts
const list = await client.integrations.list();
```

## `Documents`

### Create a document

Create a Profound document with markdown content.

`organization_id` is required and you must be a member of it. You choose the
document's `id`, and creation is idempotent on it: repeating the request returns
the existing document rather than creating a second one.

New documents are visible only to their creator; share them from the Profound app,
or open one with the `url` in the response.

A `201` response does not confirm that a new document was created: it is also
returned when `id` already existed, in which case the existing document comes
back unchanged. Upstream gives no signal to tell the two apart, so this endpoint
does not claim to either — it is safe to retry with the same `id` either way.

| Direction | Type |
| --- | --- |
| Request | [`DocumentCreateParams`](./src/resources/documents.ts) |
| Response | [`DocumentCreateResponse`](./src/resources/documents.ts) |

```ts
const create = await client.documents.create({
  id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  name: 'x',
  content_markdown: 'x',
});
```

### List documents

List documents visible to your organization, newest-modified-first.

Documents are ordered by last-modified time, most recent first, with no other
sort option. This is a walk over a live, mutable collection: a document created
or modified while you are paging can shift which page it lands on, so a single
walk may show it to you twice or, rarely, skip it.

This response never includes a total count. Upstream counts totals before
applying your organization's access filter, so a total, or treating a short
page as the last one, would misreport what you can actually see. Keep
following `pagination.next_cursor` until it comes back null — that, and not
a short or even an empty page, is the end of the walk. A page whose rows the
access filter removed entirely is empty while later pages still hold
documents, so the last page of a walk may legitimately be an empty one.

| Direction | Type |
| --- | --- |
| Request | [`DocumentListParams`](./src/resources/documents.ts) |
| Response | [`DocumentListResponse`](./src/resources/documents.ts) |

```ts
const list = await client.documents.list({
  organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  limit: 20,
});
```

### Read a document

Read a document: its metadata, its default tab's body, its other tabs, its comments, and its version hash.

You can read any document you have access to in the Profound app, including ones
created there rather than through this API.

By default this is a preview: the body is truncated to save your context, and the
version hash is withheld so a preview alone can never be used to replace a document
blindly. Pass `preview=false` when you intend to write.

| Direction | Type |
| --- | --- |
| Request | [`DocumentRetrieveParams`](./src/resources/documents.ts) |
| Response | [`DocumentRetrieveResponse`](./src/resources/documents.ts) |

```ts
const retrieve = await client.documents.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  include_tabs: true,
  include_comments: true,
  preview: true,
});
```

### Rename or reshare a document

Rename a document, change who can see it, or both in one call.

Renaming sets a permanent lock on the title, and changing visibility can silently
change who has access — see the `name` and `visibility` field descriptions for what
each one does before you use it.

Renaming needs edit access; changing visibility is creator-only, and upstream
enforces it. You can act on a document this API created, or one you created
yourself in the Profound app — not one merely shared with you.

| Direction | Type |
| --- | --- |
| Request | [`DocumentUpdateParams`](./src/resources/documents.ts) |
| Response | [`DocumentUpdateResponse`](./src/resources/documents.ts) |

```ts
const update = await client.documents.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
});
```

### Delete a document

Delete a document created through this integration.

Only documents created through this integration can be deleted here. A document
created in the Profound app can never be deleted through this route, even by the
person who owns it — creation provenance is stamped once, at creation, and is never
backfilled onto documents made another way.

The delete is soft: the row is marked deleted at the storage layer rather than
destroyed. There is no restore through this API, or any other — treat a delete as
final even though the data itself is not gone.

A 404 means the document is not visible to you at all. It covers three cases the
response does not distinguish, on purpose: the document never existed, it was
already deleted by an earlier call to this same route, or it exists but your
credential resolves no role on it. Deleting the same document twice returns 404 on
the second call, not a second 204.

A 403 means the opposite: the document is visible to you but not deletable here,
and the message says which rule refused — it was not created through this
integration, or you are not its creator. Deleting is creator-only, so edit access
is not enough to remove a document out from under its owner.

| Direction | Type |
| --- | --- |
| Request | [`DocumentDeleteParams`](./src/resources/documents.ts) |

```ts
await client.documents.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
});
```

### Replace a document's content

Overwrite a document's entire body with new markdown, replacing what it held before.

This is a whole-body replace, not a patch: send the complete new text every time. An
empty `content_markdown` is valid and clears the document.

Two destructive side effects apply on every call, regardless of what you send:

- The document collapses to its default tab. Every non-default tab is deleted, and
  the comments map is cleared for **all** tabs, including the default one — a
  document with a live comment thread on any tab loses it.
- `skip_title_sync` defaults to `false`, matching the Profound app: the title follows
  the new content's first heading, so a replace silently renames the document unless
  the heading matches the current title or `skip_title_sync` is set.

There is no compare-and-swap: this call does not accept a precondition, and nothing
stops two concurrent replaces from silently overwriting each other last-writer-wins.
Upstream's own `version_hash` documentation says as much — the token is "still a
change detector rather than a precondition: a caller must not treat a matching token
as licence to overwrite blindly, because it names the room at a moment cortex
observed and not the moment its own write lands." Sending a `working_version_hash`
(or any spelling of it) is rejected with a `400` naming this rather than accepted
and silently discarded, which is what happens on the upstream route this wraps.

You can replace a document this API created, or one you created yourself directly —
not merely one shared with you.

| Direction | Type |
| --- | --- |
| Request | [`DocumentReplaceContentParams`](./src/resources/documents.ts) |
| Response | [`DocumentReplaceContentResponse`](./src/resources/documents.ts) |

```ts
const replaceContent = await client.documents.replaceContent('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  content_markdown: '',
  skip_title_sync: false,
});
```

## `Ads`

### `Ads OpenaiAds`

#### `Ads OpenaiAds AdAccount`

##### Get Account Insights

Get ad account insights for the organization's OpenAI Ads partner brand.

`aggregation_level=campaign` returns one row per campaign (with `campaign_id`
/ `campaign_name` and all metrics), so every campaign's insights come back in
a single call; `time_granularity=daily` gives per-day rows (e.g. daily spend).

| Direction | Type |
| --- | --- |
| Request | [`AdAccountRetrieveInsightsParams`](./src/resources/ads/openai-ads/ad-account.ts) |
| Response | [`AdAccountRetrieveInsightsResponse`](./src/resources/ads/openai-ads/ad-account.ts) |

```ts
const retrieveInsights = await client.ads.openaiAds.adAccount.retrieveInsights();
```

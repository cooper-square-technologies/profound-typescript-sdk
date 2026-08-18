# profound TypeScript API

Complete reference of every operation, grouped by resource. See [the README](./README.md) for usage and configuration.

## Contents

- [`Organization`](#organization)
  - [List organizations](#list-organizations)
  - [Get Regions](#get-regions)
  - [Get Models](#get-models)
  - [Get Domains](#get-domains)
  - [Get Assets](#get-assets)
  - [Get Personas](#get-personas)
  - [Get Categories](#get-categories)
  - [Get Category Topics](#get-category-topics)
  - [Get Category Tags](#get-category-tags)
  - [Get Category Regions](#get-category-regions)
  - [Get Category Citation Categories](#get-category-citation-categories)
  - [Get Category Citation Tags](#get-category-citation-tags)
  - [List prompts](#list-prompts)
  - [Create prompts](#create-prompts)
  - [Update prompts](#update-prompts)
  - [Update prompt status](#update-prompt-status)
  - [Get Category Assets](#get-category-assets)
  - [Get Category Personas](#get-category-personas)
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
    - [Shopping Triggered Prompts](#shopping-triggered-prompts)
    - [Shopping Triggered Topics](#shopping-triggered-topics)
    - [Shopping Merchant Share](#shopping-merchant-share)
    - [Shopping Product Merchant Urls](#shopping-product-merchant-urls)
    - [Shopping Executions](#shopping-executions)
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
    - [Query Claims](#query-claims)
    - [Stream Claims](#stream-claims)
  - [`Reports Social`](#reports-social)
    - [Query Youtube Channels](#query-youtube-channels)
    - [Query Youtube Videos](#query-youtube-videos)
    - [Query Youtube Summary](#query-youtube-summary)
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
- [`Integrations`](#integrations)
  - [List Integrations](#list-integrations)
- [`Documents`](#documents)
  - [List documents](#list-documents)
  - [Create a document](#create-a-document)
  - [Read a document](#read-a-document)
  - [Rename or reshare a document](#rename-or-reshare-a-document)
  - [Delete a document](#delete-a-document)
  - [Replace a document's content](#replace-a-documents-content)
- [`OpenAiAds`](#openaiads)
  - [Get Account Insights](#get-account-insights)
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

## Setup

```ts
import Profound from '@profoundai/client';

const client = new Profound({
  apiKey: process.env['PROFOUND_API_KEY'], // defaults to the PROFOUND_API_KEY env var
  environment: 'production',
});
```

## `Organization`

### List organizations

Return every organization the caller's API key grants access to. Use this to discover organization IDs before calling endpoints that accept an `organization_id` filter.

| Direction | Type |
| --- | --- |
| Response | [`OrganizationListV1OrgGetResponse`](./src/resources/organization.ts) |

```ts
const listV1OrgGet = await client.organization.listV1OrgGet();
```

### Get Regions

Get the organization regions.

| Direction | Type |
| --- | --- |
| Request | [`OrganizationListRegionsV1OrgRegionsGetParams`](./src/resources/organization.ts) |
| Response | [`OrganizationListRegionsV1OrgRegionsGetResponse`](./src/resources/organization.ts) |

```ts
const listRegionsV1OrgRegionsGet = await client.organization.listRegionsV1OrgRegionsGet();
```

### Get Models

Get the organization models.

| Direction | Type |
| --- | --- |
| Response | [`OrganizationListModelsV1OrgModelsGetResponse`](./src/resources/organization.ts) |

```ts
const listModelsV1OrgModelsGet = await client.organization.listModelsV1OrgModelsGet();
```

### Get Domains

Get the organization domains.

| Direction | Type |
| --- | --- |
| Request | [`OrganizationListDomainsV1OrgDomainsGetParams`](./src/resources/organization.ts) |
| Response | [`OrganizationListDomainsV1OrgDomainsGetResponse`](./src/resources/organization.ts) |

```ts
const listDomainsV1OrgDomainsGet = await client.organization.listDomainsV1OrgDomainsGet();
```

### Get Assets

Get the organization assets, one row per (asset, organization) pair.

An asset's category can belong to multiple organizations; one asset row is
emitted per owning org so no association is silently dropped.

| Direction | Type |
| --- | --- |
| Request | [`OrganizationListAssetsV1OrgAssetsGetParams`](./src/resources/organization.ts) |
| Response | [`OrganizationListAssetsV1OrgAssetsGetResponse`](./src/resources/organization.ts) |

```ts
const listAssetsV1OrgAssetsGet = await client.organization.listAssetsV1OrgAssetsGet();
```

### Get Personas

Get the organization personas, one row per (persona, organization) pair.

Same (item, org) fan-out as ``get_assets``: a persona's category can be
owned by multiple orgs, and each owning org gets its own row so no
association is silently dropped.

| Direction | Type |
| --- | --- |
| Request | [`OrganizationListPersonasV1OrgPersonasGetParams`](./src/resources/organization.ts) |
| Response | [`OrganizationListPersonasV1OrgPersonasGetResponse`](./src/resources/organization.ts) |

```ts
const listPersonasV1OrgPersonasGet = await client.organization.listPersonasV1OrgPersonasGet();
```

### Get Categories

Get the organization categories, one row per (category, organization) pair.

| Direction | Type |
| --- | --- |
| Request | [`OrganizationListCategoriesV1OrgCategoriesGetParams`](./src/resources/organization.ts) |
| Response | [`OrganizationListCategoriesV1OrgCategoriesGetResponse`](./src/resources/organization.ts) |

```ts
const listCategoriesV1OrgCategoriesGet = await client.organization.listCategoriesV1OrgCategoriesGet();
```

### Get Category Topics

Get the topics for a specific category.

| Direction | Type |
| --- | --- |
| Response | [`OrganizationListCategoryTopicsV1OrgCategoriesCategoryTopicsGetResponse`](./src/resources/organization.ts) |

```ts
const listCategoryTopicsV1OrgCategoriesCategoryTopicsGet =
  await client.organization.listCategoryTopicsV1OrgCategoriesCategoryTopicsGet(
    '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  );
```

### Get Category Tags

Get the tags for a specific category.

| Direction | Type |
| --- | --- |
| Response | [`OrganizationListCategoryTagsV1OrgCategoriesCategoryTagsGetResponse`](./src/resources/organization.ts) |

```ts
const listCategoryTagsV1OrgCategoriesCategoryTagsGet =
  await client.organization.listCategoryTagsV1OrgCategoriesCategoryTagsGet(
    '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  );
```

### Get Category Regions

Get the regions for a specific category.

| Direction | Type |
| --- | --- |
| Response | [`OrganizationListCategoryRegionsV1OrgCategoriesCategoryRegionsGetResponse`](./src/resources/organization.ts) |

```ts
const listCategoryRegionsV1OrgCategoriesCategoryRegionsGet =
  await client.organization.listCategoryRegionsV1OrgCategoriesCategoryRegionsGet(
    '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  );
```

### Get Category Citation Categories

Get the citation categories for a category: the built-in buckets plus any custom categories.

| Direction | Type |
| --- | --- |
| Response | [`OrganizationListCategoryCitationCategoriesV1OrgCategoriesCategoryCitationCategoriesGetResponse`](./src/resources/organization.ts) |

```ts
const listCategoryCitationCategoriesV1OrgCategoriesCategoryCitationCategoriesGet =
  await client.organization.listCategoryCitationCategoriesV1OrgCategoriesCategoryCitationCategoriesGet(
    '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  );
```

### Get Category Citation Tags

Get the custom citation tags defined for a category.

| Direction | Type |
| --- | --- |
| Response | [`OrganizationListCategoryCitationTagsV1OrgCategoriesCategoryCitationTagsGetResponse`](./src/resources/organization.ts) |

```ts
const listCategoryCitationTagsV1OrgCategoriesCategoryCitationTagsGet =
  await client.organization.listCategoryCitationTagsV1OrgCategoriesCategoryCitationTagsGet(
    '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  );
```

### List prompts

Retrieve prompts in a category with optional filtering by type, topic, tag, region, platform, or persona. Supports cursor-based pagination.

| Direction | Type |
| --- | --- |
| Request | [`OrganizationListCategoryPromptsV1OrgCategoriesCategoryPromptsGetParams`](./src/resources/organization.ts) |
| Response | [`OrganizationListCategoryPromptsV1OrgCategoriesCategoryPromptsGetResponse`](./src/resources/organization.ts) |

```ts
const listCategoryPromptsV1OrgCategoriesCategoryPromptsGet =
  await client.organization.listCategoryPromptsV1OrgCategoriesCategoryPromptsGet(
    '7c9e6679-7425-40de-944b-e07fc1f90ae7',
    {
      limit: 10000,
      status: ['active'],
    },
  );
```

### Create prompts

Create one or more prompts in a category. Topics and tags are auto-created if referenced by name and not yet existing. Use dry_run to preview without persisting.

| Direction | Type |
| --- | --- |
| Request | [`OrganizationCreateCategoryPromptsV1OrgCategoriesCategoryIDPromptsPostParams`](./src/resources/organization.ts) |
| Response | [`OrganizationCreateCategoryPromptsV1OrgCategoriesCategoryIDPromptsPostResponse`](./src/resources/organization.ts) |

```ts
const createCategoryPromptsV1OrgCategoriesCategoryIDPromptsPost =
  await client.organization.createCategoryPromptsV1OrgCategoriesCategoryIDPromptsPost(
    '7c9e6679-7425-40de-944b-e07fc1f90ae7',
    {
      prompts: [],
      dry_run: false,
    },
  );
```

### Update prompts

Update one or more existing prompts. Only provided fields are changed. Dimension fields (regions, platforms, personas, tags) replace the full set when provided. Use dry_run to preview without persisting.

| Direction | Type |
| --- | --- |
| Request | [`OrganizationUpdateCategoryPromptsV1OrgCategoriesCategoryIDPromptsPatchParams`](./src/resources/organization.ts) |
| Response | [`OrganizationUpdateCategoryPromptsV1OrgCategoriesCategoryIDPromptsPatchResponse`](./src/resources/organization.ts) |

```ts
const updateCategoryPromptsV1OrgCategoriesCategoryIDPromptsPatch =
  await client.organization.updateCategoryPromptsV1OrgCategoriesCategoryIDPromptsPatch(
    '7c9e6679-7425-40de-944b-e07fc1f90ae7',
    {
      prompts: [],
      dry_run: false,
    },
  );
```

### Update prompt status

Bulk-update the status of one or more prompts. Prompts already in the target status are skipped. Use dry_run to preview without persisting.

Status options:
- 'active': Prompts will run daily.
- 'disabled': Prompts will not run moving forward, but historical data is preserved.
- 'deleted': Prompts are deleted along with historical data

| Direction | Type |
| --- | --- |
| Request | [`OrganizationUpdateCategoryPromptStatusV1OrgCategoriesCategoryIDPromptsStatusPatchParams`](./src/resources/organization.ts) |
| Response | [`OrganizationUpdateCategoryPromptStatusV1OrgCategoriesCategoryIDPromptsStatusPatchResponse`](./src/resources/organization.ts) |

```ts
const updateCategoryPromptStatusV1OrgCategoriesCategoryIDPromptsStatusPatch =
  await client.organization.updateCategoryPromptStatusV1OrgCategoriesCategoryIDPromptsStatusPatch(
    '7c9e6679-7425-40de-944b-e07fc1f90ae7',
    {
      prompt_ids: [],
      status: 'active',
      dry_run: false,
    },
  );
```

### Get Category Assets

| Direction | Type |
| --- | --- |
| Response | [`OrganizationListCategoryAssetsV1OrgCategoriesCategoryAssetsGetResponse`](./src/resources/organization.ts) |

```ts
const listCategoryAssetsV1OrgCategoriesCategoryAssetsGet =
  await client.organization.listCategoryAssetsV1OrgCategoriesCategoryAssetsGet(
    '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  );
```

### Get Category Personas

| Direction | Type |
| --- | --- |
| Response | [`OrganizationListCategoryPersonasV1OrgCategoriesCategoryPersonasGetResponse`](./src/resources/organization.ts) |

```ts
const listCategoryPersonasV1OrgCategoriesCategoryPersonasGet =
  await client.organization.listCategoryPersonasV1OrgCategoriesCategoryPersonasGet(
    '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  );
```

## `Prompts`

### `Prompts Answers`

#### Get Answers

| Direction | Type |
| --- | --- |
| Request | [`AnswerCreateV1PostParams`](./src/resources/prompts/answers.ts) |
| Response | [`AnswerCreateV1PostResponse`](./src/resources/prompts/answers.ts) |

```ts
const createV1Post = await client.prompts.answers.createV1Post({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '2024-01-01T00:00:00.000Z',
  end_date: '2024-01-01T00:00:00.000Z',
});
```

#### Query Answers V2

| Direction | Type |
| --- | --- |
| Request | [`AnswerQueryV2V2PostParams`](./src/resources/prompts/answers.ts) |
| Response | [`AnswerQueryV2V2PostResponse`](./src/resources/prompts/answers.ts) |

```ts
const queryV2V2Post = await client.prompts.answers.queryV2V2Post({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '',
  end_date: '',
});
```

#### Stream Answers V2

| Direction | Type |
| --- | --- |
| Request | [`AnswerStreamV2V2StreamPostParams`](./src/resources/prompts/answers.ts) |
| Response | [`AnswerStreamV2V2StreamPostResponse`](./src/resources/prompts/answers.ts) |

```ts
const stream = await client.prompts.answers.streamV2V2StreamPost({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '',
  end_date: '',
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
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  asset_name: '',
  start_date: '2024-01-01T00:00:00.000Z',
  end_date: '2024-01-01T00:00:00.000Z',
  date_bucket: 'day',
  metrics: [],
});
```

### `Reports Citations`

#### Query Citations

Get citations for a given category.

The ``mentioned`` filter supports ``is true`` and ``is false``. It uses the
latest page analysis available at or before ``end_date``; pages without an
analysis by then are excluded from both values. ``citation_share`` keeps all
otherwise eligible citations in its denominator when this filter is used.

| Direction | Type |
| --- | --- |
| Request | [`CitationQueryV1PostParams`](./src/resources/reports/citations.ts) |
| Response | [`CitationQueryV1PostResponse`](./src/resources/reports/citations.ts) |

```ts
const queryV1Post = await client.reports.citations.queryV1Post({
  date_interval: 'day',
  dimensions: [],
  metrics: [],
  order_by: {},
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '2024-01-01T00:00:00.000Z',
  end_date: '2024-01-01T00:00:00.000Z',
});
```

#### Stream Citations

Stream citations with the same filter semantics as the non-streaming route.

| Direction | Type |
| --- | --- |
| Request | [`CitationStreamV1StreamPostParams`](./src/resources/reports/citations.ts) |
| Response | [`CitationStreamV1StreamPostResponse`](./src/resources/reports/citations.ts) |

```ts
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
```

#### Query Citations V2

| Direction | Type |
| --- | --- |
| Request | [`CitationQueryV2V2PostParams`](./src/resources/reports/citations.ts) |
| Response | [`CitationQueryV2V2PostResponse`](./src/resources/reports/citations.ts) |

```ts
const queryV2V2Post = await client.reports.citations.queryV2V2Post({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '',
  end_date: '',
  entity: 'domain',
  interval: 'day',
  scope: 'all',
});
```

#### Stream Citations V2

| Direction | Type |
| --- | --- |
| Request | [`CitationStreamV2V2StreamPostParams`](./src/resources/reports/citations.ts) |
| Response | [`CitationStreamV2V2StreamPostResponse`](./src/resources/reports/citations.ts) |

```ts
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
```

### `Reports Visibility`

#### Query Visibility

Query visibility report.

| Direction | Type |
| --- | --- |
| Request | [`VisibilityQueryV1PostParams`](./src/resources/reports/visibility.ts) |
| Response | [`Response`](./src/resources/shared.ts) |

```ts
const response = await client.reports.visibility.queryV1Post({
  date_interval: 'day',
  dimensions: [],
  metrics: [],
  order_by: {},
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '2024-01-01T00:00:00.000Z',
  end_date: '2024-01-01T00:00:00.000Z',
});
```

#### Stream Visibility

| Direction | Type |
| --- | --- |
| Request | [`VisibilityStreamV1StreamPostParams`](./src/resources/reports/visibility.ts) |
| Response | [`VisibilityStreamV1StreamPostResponse`](./src/resources/reports/visibility.ts) |

```ts
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
```

#### Query Visibility V2

| Direction | Type |
| --- | --- |
| Request | [`VisibilityQueryV2V2PostParams`](./src/resources/reports/visibility.ts) |
| Response | [`VisibilityQueryV2V2PostResponse`](./src/resources/reports/visibility.ts) |

```ts
const queryV2V2Post = await client.reports.visibility.queryV2V2Post({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '',
  end_date: '',
  interval: 'day',
  scope: 'owned',
});
```

#### Stream Visibility V2

| Direction | Type |
| --- | --- |
| Request | [`VisibilityStreamV2V2StreamPostParams`](./src/resources/reports/visibility.ts) |
| Response | [`VisibilityStreamV2V2StreamPostResponse`](./src/resources/reports/visibility.ts) |

```ts
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
```

### `Reports Sentiment`

#### Query Sentiment

Get citations for a given category.

| Direction | Type |
| --- | --- |
| Request | [`SentimentQueryV1PostParams`](./src/resources/reports/sentiment.ts) |
| Response | [`Response`](./src/resources/shared.ts) |

```ts
const response = await client.reports.sentiment.queryV1Post({
  date_interval: 'day',
  dimensions: [],
  metrics: [],
  order_by: {},
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '2024-01-01T00:00:00.000Z',
  end_date: '2024-01-01T00:00:00.000Z',
});
```

#### Stream Sentiment

| Direction | Type |
| --- | --- |
| Request | [`SentimentStreamV1StreamPostParams`](./src/resources/reports/sentiment.ts) |
| Response | [`SentimentStreamV1StreamPostResponse`](./src/resources/reports/sentiment.ts) |

```ts
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
```

#### Query Sentiment V2

| Direction | Type |
| --- | --- |
| Request | [`SentimentQueryV2V2PostParams`](./src/resources/reports/sentiment.ts) |
| Response | [`SentimentQueryV2V2PostResponse`](./src/resources/reports/sentiment.ts) |

```ts
const queryV2V2Post = await client.reports.sentiment.queryV2V2Post({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  asset: '',
  start_date: '',
  end_date: '',
  interval: 'day',
  include_cited_websites: false,
});
```

#### Stream Sentiment V2

| Direction | Type |
| --- | --- |
| Request | [`SentimentStreamV2V2StreamPostParams`](./src/resources/reports/sentiment.ts) |
| Response | [`SentimentStreamV2V2StreamPostResponse`](./src/resources/reports/sentiment.ts) |

```ts
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
```

### `Reports WebSearchResults`

#### Query Web Search Results

Get web search results for a given category.

| Direction | Type |
| --- | --- |
| Request | [`WebSearchResultQueryV1PostParams`](./src/resources/reports/web-search-results.ts) |
| Response | [`WebSearchResultQueryV1PostResponse`](./src/resources/reports/web-search-results.ts) |

```ts
const queryV1Post = await client.reports.webSearchResults.queryV1Post({
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
| Request | [`WebSearchResultStreamV1StreamPostParams`](./src/resources/reports/web-search-results.ts) |
| Response | [`WebSearchResultStreamV1StreamPostResponse`](./src/resources/reports/web-search-results.ts) |

```ts
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
```

### `Reports Referrals`

#### Get Referrals Report V1

Get referral traffic report from the daily aggregated materialized view.

This endpoint queries pre-aggregated daily referral data, making it efficient
for large date ranges and high-traffic sites.

| Direction | Type |
| --- | --- |
| Request | [`ReferralCreateV1V1PostParams`](./src/resources/reports/referrals.ts) |
| Response | [`Response`](./src/resources/shared.ts) |

```ts
const response = await client.reports.referrals.createV1V1Post({
  date_interval: 'day',
  dimensions: [],
  metrics: [],
  order_by: {},
  domain: '',
  start_date: '2024-01-01T00:00:00.000Z',
});
```

#### Get Referrals Report V2

Get referral traffic report from the hourly aggregated materialized view (UTC-based).

Supports date_interval="hour", calendar intervals through "year", "quarter", and "relative_week".

| Direction | Type |
| --- | --- |
| Request | [`ReferralCreateV2V2PostParams`](./src/resources/reports/referrals.ts) |
| Response | [`Response`](./src/resources/shared.ts) |

```ts
const response = await client.reports.referrals.createV2V2Post({
  date_interval: 'day',
  dimensions: [],
  metrics: [],
  order_by: {},
  domain: '',
  start_date: '2024-01-01T00:00:00.000Z',
  timezone: 'UTC',
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
| Request | [`BotCreateV1V1PostParams`](./src/resources/reports/bots.ts) |
| Response | [`Response`](./src/resources/shared.ts) |

```ts
const response = await client.reports.bots.createV1V1Post({
  date_interval: 'day',
  dimensions: [],
  metrics: [],
  order_by: {},
  domain: '',
  start_date: '2024-01-01T00:00:00.000Z',
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
| Request | [`BotCreateV2V2PostParams`](./src/resources/reports/bots.ts) |
| Response | [`Response`](./src/resources/shared.ts) |

```ts
const response = await client.reports.bots.createV2V2Post({
  date_interval: 'day',
  dimensions: [],
  metrics: [],
  order_by: {},
  domain: '',
  start_date: '2024-01-01T00:00:00.000Z',
  timezone: 'UTC',
});
```

### `Reports QueryFanouts`

#### Query Fanouts

| Direction | Type |
| --- | --- |
| Request | [`QueryFanoutV1PostParams`](./src/resources/reports/query-fanouts.ts) |
| Response | [`Response`](./src/resources/shared.ts) |

```ts
const response = await client.reports.queryFanouts.v1Post({
  date_interval: 'day',
  dimensions: [],
  metrics: [],
  order_by: {},
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '2024-01-01T00:00:00.000Z',
  end_date: '2024-01-01T00:00:00.000Z',
});
```

#### Query Fanouts V2

| Direction | Type |
| --- | --- |
| Request | [`QueryFanoutV2V2PostParams`](./src/resources/reports/query-fanouts.ts) |
| Response | [`QueryFanoutV2V2PostResponse`](./src/resources/reports/query-fanouts.ts) |

```ts
const v2V2Post = await client.reports.queryFanouts.v2V2Post({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '',
  end_date: '',
  interval: 'day',
});
```

#### Stream Query Fanouts V2

| Direction | Type |
| --- | --- |
| Request | [`QueryFanoutStreamV2V2StreamPostParams`](./src/resources/reports/query-fanouts.ts) |
| Response | [`QueryFanoutStreamV2V2StreamPostResponse`](./src/resources/reports/query-fanouts.ts) |

```ts
const stream = await client.reports.queryFanouts.streamV2V2StreamPost({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '',
  end_date: '',
  interval: 'day',
});

for await (const event of stream) {
  console.log(event);
}
```

### `Reports Shopping`

#### Shopping Visibility

| Direction | Type |
| --- | --- |
| Request | [`ShoppingVisibilityV1VisibilityPostParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingRowsResponse`](./src/resources/shared.ts) |

```ts
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
```

#### Shopping Item Visibility

| Direction | Type |
| --- | --- |
| Request | [`ShoppingItemVisibilityV1ItemVisibilityPostParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingRowsResponse`](./src/resources/shared.ts) |

```ts
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
```

#### Shopping Merchant Distribution

| Direction | Type |
| --- | --- |
| Request | [`ShoppingMerchantDistributionV1MerchantDistributionPostParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingRowsResponse`](./src/resources/shared.ts) |

```ts
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
```

#### Shopping Merchant Visibility By Brand

| Direction | Type |
| --- | --- |
| Request | [`ShoppingMerchantVisibilityByBrandV1MerchantVisibilityByBrandPostParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingRowsResponse`](./src/resources/shared.ts) |

```ts
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
```

#### Shopping Merchant By Items

| Direction | Type |
| --- | --- |
| Request | [`ShoppingMerchantByItemsV1MerchantByItemsPostParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingRowsResponse`](./src/resources/shared.ts) |

```ts
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
```

#### Shopping All Items With Merchants

| Direction | Type |
| --- | --- |
| Request | [`ShoppingAllItemsWithMerchantsV1AllItemsWithMerchantsPostParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingRowsResponse`](./src/resources/shared.ts) |

```ts
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
```

#### Shopping Trigger Rate

| Direction | Type |
| --- | --- |
| Request | [`ShoppingTriggerRateV1TriggerRatePostParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingRowsResponse`](./src/resources/shared.ts) |

```ts
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
```

#### Shopping Triggered Prompts

| Direction | Type |
| --- | --- |
| Request | [`ShoppingTriggeredPromptsV1TriggeredPromptsPostParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingRowsResponse`](./src/resources/shared.ts) |

```ts
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
```

#### Shopping Triggered Topics

| Direction | Type |
| --- | --- |
| Request | [`ShoppingTriggeredTopicsV1TriggeredTopicsPostParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingRowsResponse`](./src/resources/shared.ts) |

```ts
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
```

#### Shopping Merchant Share

| Direction | Type |
| --- | --- |
| Request | [`ShoppingMerchantShareV1MerchantSharePostParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingRowsResponse`](./src/resources/shared.ts) |

```ts
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
```

#### Shopping Product Merchant Urls

| Direction | Type |
| --- | --- |
| Request | [`ShoppingProductMerchantURLsV1ProductMerchantURLsPostParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingRowsResponse`](./src/resources/shared.ts) |

```ts
const rows = await client.reports.shopping.productMerchantURLsV1ProductMerchantURLsPost({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  product_names: [],
  start_date: '2024-01-01T00:00:00.000Z',
  end_date: '2024-01-01T00:00:00.000Z',
});
```

#### Shopping Executions

| Direction | Type |
| --- | --- |
| Request | [`ShoppingExecutionsV1ExecutionsPostParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingRowsResponse`](./src/resources/shared.ts) |

```ts
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
```

#### Query Shopping Brands V2

| Direction | Type |
| --- | --- |
| Request | [`ShoppingQueryBrandsV2V2BrandsPostParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingQueryBrandsV2V2BrandsPostResponse`](./src/resources/reports/shopping.ts) |

```ts
const queryBrandsV2V2BrandsPost = await client.reports.shopping.queryBrandsV2V2BrandsPost({
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
| Request | [`ShoppingStreamBrandsV2V2BrandsStreamPostParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingStreamBrandsV2V2BrandsStreamPostResponse`](./src/resources/reports/shopping.ts) |

```ts
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
```

#### Query Shopping Products V2

| Direction | Type |
| --- | --- |
| Request | [`ShoppingQueryProductsV2V2ProductsPostParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingQueryProductsV2V2ProductsPostResponse`](./src/resources/reports/shopping.ts) |

```ts
const queryProductsV2V2ProductsPost = await client.reports.shopping.queryProductsV2V2ProductsPost({
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
| Request | [`ShoppingStreamProductsV2V2ProductsStreamPostParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingStreamProductsV2V2ProductsStreamPostResponse`](./src/resources/reports/shopping.ts) |

```ts
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
```

#### Query Shopping Merchants V2

| Direction | Type |
| --- | --- |
| Request | [`ShoppingQueryMerchantsV2V2MerchantsPostParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingQueryMerchantsV2V2MerchantsPostResponse`](./src/resources/reports/shopping.ts) |

```ts
const queryMerchantsV2V2MerchantsPost = await client.reports.shopping.queryMerchantsV2V2MerchantsPost({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '',
  end_date: '',
  interval: 'day',
});
```

#### Stream Shopping Merchants V2

| Direction | Type |
| --- | --- |
| Request | [`ShoppingStreamMerchantsV2V2MerchantsStreamPostParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingStreamMerchantsV2V2MerchantsStreamPostResponse`](./src/resources/reports/shopping.ts) |

```ts
const stream = await client.reports.shopping.streamMerchantsV2V2MerchantsStreamPost({
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
| Request | [`ShoppingQueryTriggerRateV2V2TriggerRatePostParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingQueryTriggerRateV2V2TriggerRatePostResponse`](./src/resources/reports/shopping.ts) |

```ts
const queryTriggerRateV2V2TriggerRatePost = await client.reports.shopping.queryTriggerRateV2V2TriggerRatePost(
  {
    category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
    start_date: '',
    end_date: '',
    interval: 'day',
  },
);
```

#### Stream Shopping Trigger Rate V2

| Direction | Type |
| --- | --- |
| Request | [`ShoppingStreamTriggerRateV2V2TriggerRateStreamPostParams`](./src/resources/reports/shopping.ts) |
| Response | [`ShoppingStreamTriggerRateV2V2TriggerRateStreamPostResponse`](./src/resources/reports/shopping.ts) |

```ts
const stream = await client.reports.shopping.streamTriggerRateV2V2TriggerRateStreamPost({
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
| Request | [`AccuracyOverviewV1OverviewPostParams`](./src/resources/reports/accuracy.ts) |
| Response | [`AccuracyOverviewV1OverviewPostResponse`](./src/resources/reports/accuracy.ts) |

```ts
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
```

#### Accuracy Breakdown

| Direction | Type |
| --- | --- |
| Request | [`AccuracyBreakdownV1BreakdownPostParams`](./src/resources/reports/accuracy.ts) |
| Response | [`AccuracyBreakdownV1BreakdownPostResponse`](./src/resources/reports/accuracy.ts) |

```ts
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
```

#### Accuracy Citation Analysis

| Direction | Type |
| --- | --- |
| Request | [`AccuracyCitationAnalysisV1CitationAnalysisPostParams`](./src/resources/reports/accuracy.ts) |
| Response | [`AccuracyCitationAnalysisV1CitationAnalysisPostResponse`](./src/resources/reports/accuracy.ts) |

```ts
const citationAnalysisV1CitationAnalysisPost =
  await client.reports.accuracy.citationAnalysisV1CitationAnalysisPost({
    category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
    clean_href: '',
    start_date: '',
    end_date: '',
  });
```

#### Accuracy Topic Ids

| Direction | Type |
| --- | --- |
| Request | [`AccuracyTopicIDsV1TopicIDsPostParams`](./src/resources/reports/accuracy.ts) |
| Response | [`AccuracyTopicIDsV1TopicIDsPostResponse`](./src/resources/reports/accuracy.ts) |

```ts
const topicIDsV1TopicIDsPost = await client.reports.accuracy.topicIDsV1TopicIDsPost({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '',
  end_date: '',
});
```

#### Accuracy Inaccurate Themes

| Direction | Type |
| --- | --- |
| Request | [`AccuracyInaccurateThemesV1InaccurateThemesPostParams`](./src/resources/reports/accuracy.ts) |
| Response | [`AccuracyInaccurateThemesV1InaccurateThemesPostResponse`](./src/resources/reports/accuracy.ts) |

```ts
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
```

#### Accuracy Inaccurate Clusters

| Direction | Type |
| --- | --- |
| Request | [`AccuracyInaccurateClustersV1InaccurateClustersPostParams`](./src/resources/reports/accuracy.ts) |
| Response | [`AccuracyInaccurateClustersV1InaccurateClustersPostResponse`](./src/resources/reports/accuracy.ts) |

```ts
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
```

#### Accuracy Inaccuracy Drivers

| Direction | Type |
| --- | --- |
| Request | [`AccuracyInaccuracyDriversV1InaccuracyDriversPostParams`](./src/resources/reports/accuracy.ts) |
| Response | [`AccuracyInaccuracyDriversV1InaccuracyDriversPostResponse`](./src/resources/reports/accuracy.ts) |

```ts
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
```

#### Accuracy Top Inaccurate Claims

| Direction | Type |
| --- | --- |
| Request | [`AccuracyTopInaccurateClaimsV1TopInaccurateClaimsPostParams`](./src/resources/reports/accuracy.ts) |
| Response | [`AccuracyTopInaccurateClaimsV1TopInaccurateClaimsPostResponse`](./src/resources/reports/accuracy.ts) |

```ts
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
```

#### Accuracy Claim Breakdown

| Direction | Type |
| --- | --- |
| Request | [`AccuracyClaimBreakdownV1ClaimBreakdownPostParams`](./src/resources/reports/accuracy.ts) |
| Response | [`AccuracyClaimBreakdownV1ClaimBreakdownPostResponse`](./src/resources/reports/accuracy.ts) |

```ts
const claimBreakdownV1ClaimBreakdownPost = await client.reports.accuracy.claimBreakdownV1ClaimBreakdownPost({
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
| Request | [`AccuracyClaimCitationsV1ClaimCitationsPostParams`](./src/resources/reports/accuracy.ts) |
| Response | [`AccuracyClaimCitationsV1ClaimCitationsPostResponse`](./src/resources/reports/accuracy.ts) |

```ts
const claimCitationsV1ClaimCitationsPost = await client.reports.accuracy.claimCitationsV1ClaimCitationsPost({
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
| Request | [`AccuracyClusterExampleRunsV1ClusterExampleRunsPostParams`](./src/resources/reports/accuracy.ts) |
| Response | [`AccuracyClusterExampleRunsV1ClusterExampleRunsPostResponse`](./src/resources/reports/accuracy.ts) |

```ts
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
```

#### Accuracy Cluster Verification Pairs

| Direction | Type |
| --- | --- |
| Request | [`AccuracyClusterVerificationPairsV1ClusterVerificationPairsPostParams`](./src/resources/reports/accuracy.ts) |
| Response | [`AccuracyClusterVerificationPairsV1ClusterVerificationPairsPostResponse`](./src/resources/reports/accuracy.ts) |

```ts
const clusterVerificationPairsV1ClusterVerificationPairsPost =
  await client.reports.accuracy.clusterVerificationPairsV1ClusterVerificationPairsPost({
    category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
    cluster_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  });
```

#### Accuracy Factcheck Setup Status

| Direction | Type |
| --- | --- |
| Request | [`AccuracyFactcheckSetupStatusV1FactcheckSetupStatusPostParams`](./src/resources/reports/accuracy.ts) |
| Response | [`AccuracyFactcheckSetupStatusV1FactcheckSetupStatusPostResponse`](./src/resources/reports/accuracy.ts) |

```ts
const factcheckSetupStatusV1FactcheckSetupStatusPost =
  await client.reports.accuracy.factcheckSetupStatusV1FactcheckSetupStatusPost({
    category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  });
```

### `Reports Factcheck`

#### Query Scores

| Direction | Type |
| --- | --- |
| Request | [`FactcheckQueryScoresV2PostParams`](./src/resources/reports/factcheck.ts) |
| Response | [`FactcheckQueryScoresV2PostResponse`](./src/resources/reports/factcheck.ts) |

```ts
const queryScoresV2Post = await client.reports.factcheck.queryScoresV2Post({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '',
  end_date: '',
});
```

#### Stream Scores

| Direction | Type |
| --- | --- |
| Request | [`FactcheckStreamScoresV2StreamPostParams`](./src/resources/reports/factcheck.ts) |
| Response | [`FactcheckStreamScoresV2StreamPostResponse`](./src/resources/reports/factcheck.ts) |

```ts
const stream = await client.reports.factcheck.streamScoresV2StreamPost({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '',
  end_date: '',
});

for await (const event of stream) {
  console.log(event);
}
```

#### Query Claims

| Direction | Type |
| --- | --- |
| Request | [`FactcheckQueryClaimsV2ClaimsPostParams`](./src/resources/reports/factcheck.ts) |
| Response | [`FactcheckQueryClaimsV2ClaimsPostResponse`](./src/resources/reports/factcheck.ts) |

```ts
const queryClaimsV2ClaimsPost = await client.reports.factcheck.queryClaimsV2ClaimsPost({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '',
  end_date: '',
});
```

#### Stream Claims

| Direction | Type |
| --- | --- |
| Request | [`FactcheckStreamClaimsV2ClaimsStreamPostParams`](./src/resources/reports/factcheck.ts) |
| Response | [`FactcheckStreamClaimsV2ClaimsStreamPostResponse`](./src/resources/reports/factcheck.ts) |

```ts
const stream = await client.reports.factcheck.streamClaimsV2ClaimsStreamPost({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '',
  end_date: '',
});

for await (const event of stream) {
  console.log(event);
}
```

### `Reports Social`

#### Query Youtube Channels

Rank the YouTube channels cited in a category, or the video categories they publish in.

| Direction | Type |
| --- | --- |
| Request | [`SocialQueryYoutubeChannelsV2YoutubeChannelsPostParams`](./src/resources/reports/social.ts) |
| Response | [`SocialQueryYoutubeChannelsV2YoutubeChannelsPostResponse`](./src/resources/reports/social.ts) |

```ts
const queryYoutubeChannelsV2YoutubeChannelsPost =
  await client.reports.social.queryYoutubeChannelsV2YoutubeChannelsPost({
    category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
    start_date: '',
    end_date: '',
  });
```

#### Query Youtube Videos

Rank cited YouTube videos, for one channel or across all of them.

| Direction | Type |
| --- | --- |
| Request | [`SocialQueryYoutubeVideosV2YoutubeVideosPostParams`](./src/resources/reports/social.ts) |
| Response | [`SocialQueryYoutubeVideosV2YoutubeVideosPostResponse`](./src/resources/reports/social.ts) |

```ts
const queryYoutubeVideosV2YoutubeVideosPost =
  await client.reports.social.queryYoutubeVideosV2YoutubeVideosPost({
    category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
    start_date: '',
    end_date: '',
    attribution: 'attributed',
  });
```

#### Query Youtube Summary

Report how much of youtube.com the channel and video rankings account for.

| Direction | Type |
| --- | --- |
| Request | [`SocialQueryYoutubeSummaryV2YoutubeSummaryPostParams`](./src/resources/reports/social.ts) |
| Response | [`SocialQueryYoutubeSummaryV2YoutubeSummaryPostResponse`](./src/resources/reports/social.ts) |

```ts
const queryYoutubeSummaryV2YoutubeSummaryPost =
  await client.reports.social.queryYoutubeSummaryV2YoutubeSummaryPost({
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
| Request | [`OptimizationListV1AssetIDGetParams`](./src/resources/content/optimization.ts) |
| Response | [`OptimizationListV1AssetIDGetResponse`](./src/resources/content/optimization.ts) |

```ts
const listV1AssetIDGet = await client.content.optimization.listV1AssetIDGet(
  '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  {
    limit: 10000,
    offset: 0,
  },
);
```

#### Optimization Analysis

| Direction | Type |
| --- | --- |
| Request | [`OptimizationAnalysisV1AssetIDIDGetParams`](./src/resources/content/optimization.ts) |
| Response | [`OptimizationAnalysisV1AssetIDIDGetResponse`](./src/resources/content/optimization.ts) |

```ts
const analysisV1AssetIDIDGet = await client.content.optimization.analysisV1AssetIDIDGet(
  '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  {
    asset_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  },
);
```

## `KnowledgeBases`

### List Knowledge Bases

List knowledge bases accessible to the API key.

| Direction | Type |
| --- | --- |
| Request | [`KnowledgeBaseListV1GetParams`](./src/resources/knowledge-bases/knowledge-bases.ts) |
| Response | [`KnowledgeBaseListV1GetResponse`](./src/resources/knowledge-bases/knowledge-bases.ts) |

```ts
const listV1Get = await client.knowledgeBases.listV1Get();
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
| Request | [`DocumentCreateV1IDPostParams`](./src/resources/knowledge-bases/documents.ts) |
| Response | [`DocumentOperationResponse`](./src/resources/shared.ts) |

```ts
const operation = await client.knowledgeBases.documents.createV1IDPost(
  '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  {
    name: 'x',
    text: 'x',
  },
);
```

#### Update Document

Overwrite a knowledge base document using JSON text or multipart file upload.

| Direction | Type |
| --- | --- |
| Request | [`DocumentUpdateV1IDPutParams`](./src/resources/knowledge-bases/documents.ts) |
| Response | [`DocumentOperationResponse`](./src/resources/shared.ts) |

```ts
const operation = await client.knowledgeBases.documents.updateV1IDPut(
  '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  {
    name: 'x',
    text: 'x',
  },
);
```

#### Delete Document

Delete an existing document from a knowledge base.

| Direction | Type |
| --- | --- |
| Request | [`DocumentDeleteV1IDDeleteParams`](./src/resources/knowledge-bases/documents.ts) |
| Response | [`DocumentOperationResponse`](./src/resources/shared.ts) |

```ts
const operation = await client.knowledgeBases.documents.deleteV1IDDelete(
  '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  {
    name: 'x',
  },
);
```

### `KnowledgeBases Folders`

#### Add Folder

Create an empty folder at the requested knowledge base path.

| Direction | Type |
| --- | --- |
| Request | [`FolderCreateV1IDPostParams`](./src/resources/knowledge-bases/folders.ts) |
| Response | [`FolderCreateV1IDPostResponse`](./src/resources/knowledge-bases/folders.ts) |

```ts
const createV1IDPost = await client.knowledgeBases.folders.createV1IDPost(
  '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  {
    path: 'x',
  },
);
```

#### Delete Folder

Delete a folder. With recursive=false, non-empty folders return 409 and no contents are deleted.

| Direction | Type |
| --- | --- |
| Request | [`FolderDeleteV1IDDeleteParams`](./src/resources/knowledge-bases/folders.ts) |
| Response | [`FolderDeleteV1IDDeleteResponse`](./src/resources/knowledge-bases/folders.ts) |

```ts
const deleteV1IDDelete = await client.knowledgeBases.folders.deleteV1IDDelete(
  '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  {
    path: 'x',
    recursive: false,
  },
);
```

## `Integrations`

### List Integrations

List the organization's connected integrations.

Returns every connected integration by default, each with its lifecycle
`status`; pass `status_filter` to narrow to one status (e.g. `needs_reauth`).
Each row's `integration_id` is the value a hub-backed node needs bound to it.

| Direction | Type |
| --- | --- |
| Request | [`IntegrationListV1GetParams`](./src/resources/integrations.ts) |
| Response | [`IntegrationListV1GetResponse`](./src/resources/integrations.ts) |

```ts
const listV1Get = await client.integrations.listV1Get();
```

## `Documents`

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
| Request | [`DocumentListV1GetParams`](./src/resources/documents.ts) |
| Response | [`DocumentListV1GetResponse`](./src/resources/documents.ts) |

```ts
const listV1Get = await client.documents.listV1Get({
  organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  limit: 20,
});
```

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
| Request | [`DocumentCreateV1PostParams`](./src/resources/documents.ts) |
| Response | [`DocumentCreateV1PostResponse`](./src/resources/documents.ts) |

```ts
const createV1Post = await client.documents.createV1Post({
  id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  name: 'x',
  content_markdown: 'x',
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
| Request | [`DocumentReadV1IDGetParams`](./src/resources/documents.ts) |
| Response | [`DocumentReadV1IDGetResponse`](./src/resources/documents.ts) |

```ts
const readV1IDGet = await client.documents.readV1IDGet('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
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
| Request | [`DocumentPatchV1IDPatchParams`](./src/resources/documents.ts) |
| Response | [`DocumentPatchV1IDPatchResponse`](./src/resources/documents.ts) |

```ts
const patchV1IDPatch = await client.documents.patchV1IDPatch('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
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
| Request | [`DocumentDeleteV1IDDeleteParams`](./src/resources/documents.ts) |

```ts
await client.documents.deleteV1IDDelete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
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
| Request | [`DocumentReplaceContentV1IDContentPostParams`](./src/resources/documents.ts) |
| Response | [`DocumentReplaceContentV1IDContentPostResponse`](./src/resources/documents.ts) |

```ts
const replaceContentV1IDContentPost = await client.documents.replaceContentV1IDContentPost(
  '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  {
    organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
    content_markdown: '',
    skip_title_sync: false,
  },
);
```

## `OpenAiAds`

### Get Account Insights

Get ad account insights for the organization's OpenAI Ads partner brand.

`aggregation_level=campaign` returns one row per campaign (with `campaign_id`
/ `campaign_name` and all metrics), so every campaign's insights come back in
a single call; `time_granularity=daily` gives per-day rows (e.g. daily spend).

| Direction | Type |
| --- | --- |
| Request | [`OpenAIAdListAccountInsightsV1OpenAIAccountInsightsGetParams`](./src/resources/open-ai-ads.ts) |
| Response | [`OpenAIAdListAccountInsightsV1OpenAIAccountInsightsGetResponse`](./src/resources/open-ai-ads.ts) |

```ts
const listAccountInsightsV1OpenAIAccountInsightsGet =
  await client.openAIAds.listAccountInsightsV1OpenAIAccountInsightsGet();
```

## `Projects`

### List Projects

| Direction | Type |
| --- | --- |
| Request | [`ProjectListV1GetParams`](./src/resources/projects/projects.ts) |
| Response | [`ProjectListV1GetResponse`](./src/resources/projects/projects.ts) |

```ts
const listV1Get = await client.projects.listV1Get({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  limit: 100,
  offset: 0,
});
```

### Create Project

| Direction | Type |
| --- | --- |
| Request | [`ProjectCreateV1PostParams`](./src/resources/projects/projects.ts) |
| Response | [`ProjectCreateV1PostResponse`](./src/resources/projects/projects.ts) |

```ts
const createV1Post = await client.projects.createV1Post({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
});
```

### Get Project

| Direction | Type |
| --- | --- |
| Request | [`ProjectRetrieveV1GetParams`](./src/resources/projects/projects.ts) |
| Response | [`ProjectRetrieveV1GetResponse`](./src/resources/projects/projects.ts) |

```ts
const retrieveV1Get = await client.projects.retrieveV1Get('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
});
```

### Delete Project

| Direction | Type |
| --- | --- |
| Request | [`ProjectDeleteV1IDDeleteParams`](./src/resources/projects/projects.ts) |

```ts
await client.projects.deleteV1IDDelete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
});
```

### Get Project Status

| Direction | Type |
| --- | --- |
| Request | [`ProjectListStatusV1StatusGetParams`](./src/resources/projects/projects.ts) |
| Response | [`ProjectListStatusV1StatusGetResponse`](./src/resources/projects/projects.ts) |

```ts
const listStatusV1StatusGet = await client.projects.listStatusV1StatusGet(
  '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  {
    category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  },
);
```

### Archive Project

| Direction | Type |
| --- | --- |
| Request | [`ProjectArchiveV1IDArchivePostParams`](./src/resources/projects/projects.ts) |
| Response | [`ProjectArchiveV1IDArchivePostResponse`](./src/resources/projects/projects.ts) |

```ts
const archiveV1IDArchivePost = await client.projects.archiveV1IDArchivePost(
  '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  {
    category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  },
);
```

### Unarchive Project

| Direction | Type |
| --- | --- |
| Request | [`ProjectUnarchiveV1IDUnarchivePostParams`](./src/resources/projects/projects.ts) |
| Response | [`ProjectUnarchiveV1IDUnarchivePostResponse`](./src/resources/projects/projects.ts) |

```ts
const unarchiveV1IDUnarchivePost = await client.projects.unarchiveV1IDUnarchivePost(
  '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  {
    category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  },
);
```

### `Projects Generations`

#### List Project Generations

| Direction | Type |
| --- | --- |
| Request | [`GenerationListV1GetParams`](./src/resources/projects/generations.ts) |
| Response | [`GenerationListV1GetResponse`](./src/resources/projects/generations.ts) |

```ts
const listV1Get = await client.projects.generations.listV1Get({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  limit: 100,
  offset: 0,
});
```

#### Get Project Generation Status

| Direction | Type |
| --- | --- |
| Request | [`GenerationRetrieveStatusV1RunGetParams`](./src/resources/projects/generations.ts) |
| Response | [`GenerationRetrieveStatusV1RunGetResponse`](./src/resources/projects/generations.ts) |

```ts
const retrieveStatusV1RunGet = await client.projects.generations.retrieveStatusV1RunGet(
  '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  {
    category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  },
);
```

### `Projects Tasks`

#### List Project Tasks

| Direction | Type |
| --- | --- |
| Request | [`TaskListV1IDGetParams`](./src/resources/projects/tasks.ts) |
| Response | [`TaskListV1IDGetResponse`](./src/resources/projects/tasks.ts) |

```ts
const listV1IDGet = await client.projects.tasks.listV1IDGet('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
});
```

#### Create Project Task

| Direction | Type |
| --- | --- |
| Request | [`TaskCreateV1IDPostParams`](./src/resources/projects/tasks.ts) |
| Response | [`TaskCreateV1IDPostResponse`](./src/resources/projects/tasks.ts) |

```ts
const createV1IDPost = await client.projects.tasks.createV1IDPost('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  title: 'x',
});
```

#### Get Project Task

| Direction | Type |
| --- | --- |
| Request | [`TaskRetrieveV1GetParams`](./src/resources/projects/tasks.ts) |
| Response | [`TaskRetrieveV1GetResponse`](./src/resources/projects/tasks.ts) |

```ts
const retrieveV1Get = await client.projects.tasks.retrieveV1Get('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  project_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
});
```

#### Update Project Task

| Direction | Type |
| --- | --- |
| Request | [`TaskUpdateV1IDIDPatchParams`](./src/resources/projects/tasks.ts) |
| Response | [`TaskUpdateV1IDIDPatchResponse`](./src/resources/projects/tasks.ts) |

```ts
const updateV1IDIDPatch = await client.projects.tasks.updateV1IDIDPatch(
  '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  {
    project_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
    category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  },
);
```

#### Delete Project Task

| Direction | Type |
| --- | --- |
| Request | [`TaskDeleteV1IDIDDeleteParams`](./src/resources/projects/tasks.ts) |

```ts
await client.projects.tasks.deleteV1IDIDDelete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  project_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
});
```

#### Update Project Task Status

| Direction | Type |
| --- | --- |
| Request | [`TaskUpdateStatusV1IDIDStatusPostParams`](./src/resources/projects/tasks.ts) |
| Response | [`TaskUpdateStatusV1IDIDStatusPostResponse`](./src/resources/projects/tasks.ts) |

```ts
const updateStatusV1IDIDStatusPost = await client.projects.tasks.updateStatusV1IDIDStatusPost(
  '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  {
    project_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
    category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
    status: 'not_started',
  },
);
```

## `Agents`

### List agents

List agents available to your organization.

Agent status reflects whether an agent has ever been published. `published`
agents have a live published version. `draft` agents have not been
published yet.

| Direction | Type |
| --- | --- |
| Request | [`AgentListV1GetParams`](./src/resources/agents/agents.ts) |
| Response | [`AgentListV1GetResponse`](./src/resources/agents/agents.ts) |

```ts
const listV1Get = await client.agents.listV1Get({
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
| Response | [`Agent`](./src/resources/shared.ts) |

```ts
const agent = await client.agents.createV1Post({
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
const agent = await client.agents.publishV1IDPublishPost('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### Get an agent

Retrieve an agent and its schema details.

Agents can have both a live published version and a draft version with newer
unpublished changes. Use the `version` parameter to choose which state to return.

| Direction | Type |
| --- | --- |
| Request | [`AgentRetrieveV1GetParams`](./src/resources/agents/agents.ts) |
| Response | [`AgentRetrieveV1GetResponse`](./src/resources/agents/agents.ts) |

```ts
const retrieveV1Get = await client.agents.retrieveV1Get('7c9e6679-7425-40de-944b-e07fc1f90ae7');
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
const updateV1IDPatch = await client.agents.updateV1IDPatch('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
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
const listGraphV1GraphGet = await client.agents.listGraphV1GraphGet('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### `Agents NodeTypes`

#### List node types

List the node types available for building agents.

The set is deterministic and does not depend on the caller, so the response
is safe to cache across sessions. Integration-dependent and dynamic-schema
node types are intentionally excluded in v1.

| Direction | Type |
| --- | --- |
| Response | [`NodeTypeListV1GetResponse`](./src/resources/agents/node-types.ts) |

```ts
const listV1Get = await client.agents.nodeTypes.listV1Get();
```

#### Get a node type schema

Retrieve the JSON schema for a single node type.

The `schema` field is an opaque JSON Schema for the node's configuration.
Use `schema_version` as a cache key — it bumps whenever the schema changes.

| Direction | Type |
| --- | --- |
| Response | [`NodeTypeListSchemaV1SchemaGetResponse`](./src/resources/agents/node-types.ts) |

```ts
const listSchemaV1SchemaGet = await client.agents.nodeTypes.listSchemaV1SchemaGet('nodeType');
```

### `Agents Runs`

#### Run an agent

Start a new run for an agent.

Runs always execute the agent's live published version, so the agent must be
published first with `POST /v1/agents/{agent_id}/publish`. Unpublished drafts
cannot be run.

| Direction | Type |
| --- | --- |
| Request | [`RunV1IDPostParams`](./src/resources/agents/runs.ts) |
| Response | [`RunV1IDPostResponse`](./src/resources/agents/runs.ts) |

```ts
const v1IDPost = await client.agents.runs.v1IDPost('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

#### Get an agent run

Retrieve the current status and result details for an agent run.

| Direction | Type |
| --- | --- |
| Request | [`RunRetrieveV1GetParams`](./src/resources/agents/runs.ts) |
| Response | [`RunRetrieveV1GetResponse`](./src/resources/agents/runs.ts) |

```ts
const retrieveV1Get = await client.agents.runs.retrieveV1Get('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  agent_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  verbose: false,
});
```

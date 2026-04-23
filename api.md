# Shared

Types:

- <code><a href="./src/resources/shared.ts">AssetNameFilter</a></code>
- <code><a href="./src/resources/shared.ts">BotNameFilter</a></code>
- <code><a href="./src/resources/shared.ts">BotProviderFilter</a></code>
- <code><a href="./src/resources/shared.ts">ModelIDFilter</a></code>
- <code><a href="./src/resources/shared.ts">Pagination</a></code>
- <code><a href="./src/resources/shared.ts">PathFilter</a></code>
- <code><a href="./src/resources/shared.ts">PersonaIDFilter</a></code>
- <code><a href="./src/resources/shared.ts">PromptFilter</a></code>
- <code><a href="./src/resources/shared.ts">PromptTypeFilter</a></code>
- <code><a href="./src/resources/shared.ts">RegionIDFilter</a></code>
- <code><a href="./src/resources/shared.ts">RegionNameFilter</a></code>
- <code><a href="./src/resources/shared.ts">TagIDFilter</a></code>
- <code><a href="./src/resources/shared.ts">TopicIDFilter</a></code>

# Organizations

Types:

- <code><a href="./src/resources/organizations/organizations.ts">Category</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">NamedResource</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">Organization</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">PersonaProfile</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">PersonaProfileBehavior</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">PersonaProfileDemographics</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">PersonaProfileEmployment</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">OrganizationListResponse</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">OrganizationDomainsResponse</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">OrganizationGetPersonasResponse</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">OrganizationListAssetsResponse</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">OrganizationModelsResponse</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">OrganizationRegionsResponse</a></code>

Methods:

- <code title="get /v1/org">client.organizations.<a href="./src/resources/organizations/organizations.ts">list</a>() -> OrganizationListResponse</code>
- <code title="get /v1/org/domains">client.organizations.<a href="./src/resources/organizations/organizations.ts">domains</a>({ ...params }) -> OrganizationDomainsResponse</code>
- <code title="get /v1/org/personas">client.organizations.<a href="./src/resources/organizations/organizations.ts">getPersonas</a>({ ...params }) -> OrganizationGetPersonasResponse</code>
- <code title="get /v1/org/assets">client.organizations.<a href="./src/resources/organizations/organizations.ts">listAssets</a>({ ...params }) -> OrganizationListAssetsResponse</code>
- <code title="get /v1/org/models">client.organizations.<a href="./src/resources/organizations/organizations.ts">models</a>() -> OrganizationModelsResponse</code>
- <code title="get /v1/org/regions">client.organizations.<a href="./src/resources/organizations/organizations.ts">regions</a>({ ...params }) -> OrganizationRegionsResponse</code>

## Categories

Types:

- <code><a href="./src/resources/organizations/categories.ts">FieldDiff</a></code>
- <code><a href="./src/resources/organizations/categories.ts">IDOrName</a></code>
- <code><a href="./src/resources/organizations/categories.ts">NamedResourceDiffList</a></code>
- <code><a href="./src/resources/organizations/categories.ts">CategoryListResponse</a></code>
- <code><a href="./src/resources/organizations/categories.ts">CategoryAssetsResponse</a></code>
- <code><a href="./src/resources/organizations/categories.ts">CategoryCreatePromptsResponse</a></code>
- <code><a href="./src/resources/organizations/categories.ts">CategoryGetCategoryPersonasResponse</a></code>
- <code><a href="./src/resources/organizations/categories.ts">CategoryPromptsResponse</a></code>
- <code><a href="./src/resources/organizations/categories.ts">CategoryTagsResponse</a></code>
- <code><a href="./src/resources/organizations/categories.ts">CategoryTopicsResponse</a></code>
- <code><a href="./src/resources/organizations/categories.ts">CategoryUpdatePromptStatusResponse</a></code>
- <code><a href="./src/resources/organizations/categories.ts">CategoryUpdatePromptsResponse</a></code>

Methods:

- <code title="get /v1/org/categories">client.organizations.categories.<a href="./src/resources/organizations/categories.ts">list</a>({ ...params }) -> CategoryListResponse</code>
- <code title="get /v1/org/categories/{category_id}/assets">client.organizations.categories.<a href="./src/resources/organizations/categories.ts">assets</a>(categoryID) -> CategoryAssetsResponse</code>
- <code title="post /v1/org/categories/{category_id}/prompts">client.organizations.categories.<a href="./src/resources/organizations/categories.ts">createPrompts</a>(categoryID, { ...params }) -> CategoryCreatePromptsResponse</code>
- <code title="get /v1/org/categories/{category_id}/personas">client.organizations.categories.<a href="./src/resources/organizations/categories.ts">getCategoryPersonas</a>(categoryID) -> CategoryGetCategoryPersonasResponse</code>
- <code title="get /v1/org/categories/{category_id}/prompts">client.organizations.categories.<a href="./src/resources/organizations/categories.ts">prompts</a>(categoryID, { ...params }) -> CategoryPromptsResponse</code>
- <code title="get /v1/org/categories/{category_id}/tags">client.organizations.categories.<a href="./src/resources/organizations/categories.ts">tags</a>(categoryID) -> CategoryTagsResponse</code>
- <code title="get /v1/org/categories/{category_id}/topics">client.organizations.categories.<a href="./src/resources/organizations/categories.ts">topics</a>(categoryID) -> CategoryTopicsResponse</code>
- <code title="patch /v1/org/categories/{category_id}/prompts/status">client.organizations.categories.<a href="./src/resources/organizations/categories.ts">updatePromptStatus</a>(categoryID, { ...params }) -> CategoryUpdatePromptStatusResponse</code>
- <code title="patch /v1/org/categories/{category_id}/prompts">client.organizations.categories.<a href="./src/resources/organizations/categories.ts">updatePrompts</a>(categoryID, { ...params }) -> CategoryUpdatePromptsResponse</code>

# Prompts

Types:

- <code><a href="./src/resources/prompts.ts">PromptAnswersResponse</a></code>

Methods:

- <code title="post /v1/prompts/answers">client.prompts.<a href="./src/resources/prompts.ts">answers</a>({ ...params }) -> PromptAnswersResponse</code>

# Reports

Types:

- <code><a href="./src/resources/reports.ts">PromptIDFilter</a></code>
- <code><a href="./src/resources/reports.ts">ReportInfo</a></code>
- <code><a href="./src/resources/reports.ts">ReportResponse</a></code>
- <code><a href="./src/resources/reports.ts">ReportResult</a></code>
- <code><a href="./src/resources/reports.ts">TagNameFilter</a></code>
- <code><a href="./src/resources/reports.ts">TopicNameFilter</a></code>
- <code><a href="./src/resources/reports.ts">ReportCitationsResponse</a></code>

Methods:

- <code title="post /v1/reports/citations">client.reports.<a href="./src/resources/reports.ts">citations</a>({ ...params }) -> ReportCitationsResponse</code>
- <code title="post /v1/reports/bots">client.reports.<a href="./src/resources/reports.ts">getBotsReport</a>({ ...params }) -> ReportResponse</code>
- <code title="post /v2/reports/bots">client.reports.<a href="./src/resources/reports.ts">getBotsReportV2</a>({ ...params }) -> ReportResponse</code>
- <code title="post /v1/reports/referrals">client.reports.<a href="./src/resources/reports.ts">getReferralsReport</a>({ ...params }) -> ReportResponse</code>
- <code title="post /v2/reports/referrals">client.reports.<a href="./src/resources/reports.ts">getReferralsReportV2</a>({ ...params }) -> ReportResponse</code>
- <code title="post /v1/reports/query-fanouts">client.reports.<a href="./src/resources/reports.ts">queryFanouts</a>({ ...params }) -> ReportResponse</code>
- <code title="post /v1/reports/sentiment">client.reports.<a href="./src/resources/reports.ts">sentiment</a>({ ...params }) -> ReportResponse</code>
- <code title="post /v1/reports/visibility">client.reports.<a href="./src/resources/reports.ts">visibility</a>({ ...params }) -> ReportResponse</code>

# Logs

## Raw

Types:

- <code><a href="./src/resources/logs/raw.ts">RawBotsResponse</a></code>
- <code><a href="./src/resources/logs/raw.ts">RawLogsResponse</a></code>

Methods:

- <code title="post /v1/logs/raw/bots">client.logs.raw.<a href="./src/resources/logs/raw.ts">bots</a>({ ...params }) -> RawBotsResponse</code>
- <code title="post /v1/logs/raw">client.logs.raw.<a href="./src/resources/logs/raw.ts">logs</a>({ ...params }) -> RawLogsResponse</code>

# Content

## Optimization

Types:

- <code><a href="./src/resources/content/optimization.ts">OptimizationRetrieveResponse</a></code>
- <code><a href="./src/resources/content/optimization.ts">OptimizationListResponse</a></code>

Methods:

- <code title="get /v1/content/{asset_id}/optimization/{content_id}">client.content.optimization.<a href="./src/resources/content/optimization.ts">retrieve</a>(contentID, { ...params }) -> OptimizationRetrieveResponse</code>
- <code title="get /v1/content/{asset_id}/optimization">client.content.optimization.<a href="./src/resources/content/optimization.ts">list</a>(assetID, { ...params }) -> OptimizationListResponse</code>

# Agents

Types:

- <code><a href="./src/resources/agents/agents.ts">AgentRetrieveResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentListResponse</a></code>

Methods:

- <code title="get /v1/agents/{agent_id}">client.agents.<a href="./src/resources/agents/agents.ts">retrieve</a>(agentID, { ...params }) -> AgentRetrieveResponse</code>
- <code title="get /v1/agents">client.agents.<a href="./src/resources/agents/agents.ts">list</a>({ ...params }) -> AgentListResponse</code>

## Runs

Types:

- <code><a href="./src/resources/agents/runs.ts">RunCreateResponse</a></code>
- <code><a href="./src/resources/agents/runs.ts">RunRetrieveResponse</a></code>

Methods:

- <code title="post /v1/agents/{agent_id}/runs">client.agents.runs.<a href="./src/resources/agents/runs.ts">create</a>(agentID, { ...params }) -> RunCreateResponse</code>
- <code title="get /v1/agents/{agent_id}/runs/{run_id}">client.agents.runs.<a href="./src/resources/agents/runs.ts">retrieve</a>(runID, { ...params }) -> RunRetrieveResponse</code>

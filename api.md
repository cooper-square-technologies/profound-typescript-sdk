# Shared

Types:

- <code><a href="./src/resources/shared.ts">Pagination</a></code>

# Organizations

Types:

- <code><a href="./src/resources/organizations/organizations.ts">OrganizationDomainsResponse</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">OrganizationModelsResponse</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">OrganizationRegionsResponse</a></code>

Methods:

- <code title="get /v1/org/domains">client.organizations.<a href="./src/resources/organizations/organizations.ts">domains</a>() -> OrganizationDomainsResponse</code>
- <code title="get /v1/org/models">client.organizations.<a href="./src/resources/organizations/organizations.ts">models</a>() -> OrganizationModelsResponse</code>
- <code title="get /v1/org/regions">client.organizations.<a href="./src/resources/organizations/organizations.ts">regions</a>() -> OrganizationRegionsResponse</code>

## Categories

Types:

- <code><a href="./src/resources/organizations/categories.ts">OrgItem</a></code>
- <code><a href="./src/resources/organizations/categories.ts">CategoryListResponse</a></code>
- <code><a href="./src/resources/organizations/categories.ts">CategoryAssetsResponse</a></code>
- <code><a href="./src/resources/organizations/categories.ts">CategoryPromptsResponse</a></code>
- <code><a href="./src/resources/organizations/categories.ts">CategoryTagsResponse</a></code>
- <code><a href="./src/resources/organizations/categories.ts">CategoryTopicsResponse</a></code>

Methods:

- <code title="get /v1/org/categories">client.organizations.categories.<a href="./src/resources/organizations/categories.ts">list</a>() -> CategoryListResponse</code>
- <code title="get /v1/org/categories/{category_id}/assets">client.organizations.categories.<a href="./src/resources/organizations/categories.ts">assets</a>(categoryID) -> CategoryAssetsResponse</code>
- <code title="get /v1/org/categories/{category_id}/prompts">client.organizations.categories.<a href="./src/resources/organizations/categories.ts">prompts</a>(categoryID) -> CategoryPromptsResponse</code>
- <code title="get /v1/org/categories/{category_id}/tags">client.organizations.categories.<a href="./src/resources/organizations/categories.ts">tags</a>(categoryID) -> CategoryTagsResponse</code>
- <code title="get /v1/org/categories/{category_id}/topics">client.organizations.categories.<a href="./src/resources/organizations/categories.ts">topics</a>(categoryID) -> CategoryTopicsResponse</code>

# Prompts

Types:

- <code><a href="./src/resources/prompts.ts">PromptAnswersResponse</a></code>

Methods:

- <code title="post /v1/prompts/answers">client.prompts.<a href="./src/resources/prompts.ts">answers</a>({ ...params }) -> PromptAnswersResponse</code>

# Reports

Types:

- <code><a href="./src/resources/reports.ts">ReportInfo</a></code>
- <code><a href="./src/resources/reports.ts">ReportResponse</a></code>
- <code><a href="./src/resources/reports.ts">ReportResult</a></code>
- <code><a href="./src/resources/reports.ts">ReportCitationsResponse</a></code>

Methods:

- <code title="post /v1/reports/citations">client.reports.<a href="./src/resources/reports.ts">citations</a>({ ...params }) -> ReportCitationsResponse</code>
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

# Org

Types:

- <code><a href="./src/resources/org/org.ts">OrgRetrieveDomainsResponse</a></code>
- <code><a href="./src/resources/org/org.ts">OrgRetrieveModelsResponse</a></code>
- <code><a href="./src/resources/org/org.ts">OrgRetrieveRegionsResponse</a></code>

Methods:

- <code title="get /v1/org/domains">client.org.<a href="./src/resources/org/org.ts">retrieveDomains</a>() -> OrgRetrieveDomainsResponse</code>
- <code title="get /v1/org/models">client.org.<a href="./src/resources/org/org.ts">retrieveModels</a>() -> OrgRetrieveModelsResponse</code>
- <code title="get /v1/org/regions">client.org.<a href="./src/resources/org/org.ts">retrieveRegions</a>() -> OrgRetrieveRegionsResponse</code>

## Categories

Types:

- <code><a href="./src/resources/org/categories.ts">OrgItem</a></code>
- <code><a href="./src/resources/org/categories.ts">CategoryListResponse</a></code>
- <code><a href="./src/resources/org/categories.ts">CategoryRetrievePromptsResponse</a></code>
- <code><a href="./src/resources/org/categories.ts">CategoryRetrieveTagsResponse</a></code>
- <code><a href="./src/resources/org/categories.ts">CategoryRetrieveTopicsResponse</a></code>

Methods:

- <code title="get /v1/org/categories">client.org.categories.<a href="./src/resources/org/categories.ts">list</a>() -> CategoryListResponse</code>
- <code title="get /v1/org/categories/{category_id}/prompts">client.org.categories.<a href="./src/resources/org/categories.ts">retrievePrompts</a>(categoryID) -> CategoryRetrievePromptsResponse</code>
- <code title="get /v1/org/categories/{category_id}/tags">client.org.categories.<a href="./src/resources/org/categories.ts">retrieveTags</a>(categoryID) -> CategoryRetrieveTagsResponse</code>
- <code title="get /v1/org/categories/{category_id}/topics">client.org.categories.<a href="./src/resources/org/categories.ts">retrieveTopics</a>(categoryID) -> CategoryRetrieveTopicsResponse</code>

# Prompts

Types:

- <code><a href="./src/resources/prompts.ts">Pagination</a></code>
- <code><a href="./src/resources/prompts.ts">PromptGetAnswersResponse</a></code>

Methods:

- <code title="post /v1/prompts/answers">client.prompts.<a href="./src/resources/prompts.ts">getAnswers</a>({ ...params }) -> PromptGetAnswersResponse</code>

# Reports

Types:

- <code><a href="./src/resources/reports.ts">Info</a></code>
- <code><a href="./src/resources/reports.ts">Response</a></code>
- <code><a href="./src/resources/reports.ts">Result</a></code>
- <code><a href="./src/resources/reports.ts">ReportQueryCitationsResponse</a></code>

Methods:

- <code title="post /v1/reports/citations">client.reports.<a href="./src/resources/reports.ts">queryCitations</a>({ ...params }) -> ReportQueryCitationsResponse</code>
- <code title="post /v1/reports/sentiment">client.reports.<a href="./src/resources/reports.ts">querySentiment</a>({ ...params }) -> Response</code>
- <code title="post /v1/reports/visibility">client.reports.<a href="./src/resources/reports.ts">queryVisibility</a>({ ...params }) -> Response</code>

# Logs

## Raw

Types:

- <code><a href="./src/resources/logs/raw.ts">RawGetBotsResponse</a></code>
- <code><a href="./src/resources/logs/raw.ts">RawGetLogsResponse</a></code>

Methods:

- <code title="post /v1/logs/raw/bots">client.logs.raw.<a href="./src/resources/logs/raw.ts">getBots</a>({ ...params }) -> RawGetBotsResponse</code>
- <code title="post /v1/logs/raw">client.logs.raw.<a href="./src/resources/logs/raw.ts">getLogs</a>({ ...params }) -> RawGetLogsResponse</code>

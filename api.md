# Shared

Types:

- <code><a href="./src/resources/shared.ts">AnalysisTypeFilter</a></code>
- <code><a href="./src/resources/shared.ts">AssetIDFilter</a></code>
- <code><a href="./src/resources/shared.ts">BotNameFilter</a></code>
- <code><a href="./src/resources/shared.ts">BotProviderFilter</a></code>
- <code><a href="./src/resources/shared.ts">CursorPagination</a></code>
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
- <code><a href="./src/resources/organizations/categories.ts">CategoryGetCitationCategoriesResponse</a></code>
- <code><a href="./src/resources/organizations/categories.ts">CategoryPromptsResponse</a></code>
- <code><a href="./src/resources/organizations/categories.ts">CategoryRetrieveRegionsResponse</a></code>
- <code><a href="./src/resources/organizations/categories.ts">CategoryTagsResponse</a></code>
- <code><a href="./src/resources/organizations/categories.ts">CategoryTopicsResponse</a></code>
- <code><a href="./src/resources/organizations/categories.ts">CategoryUpdatePromptStatusResponse</a></code>
- <code><a href="./src/resources/organizations/categories.ts">CategoryUpdatePromptsResponse</a></code>

Methods:

- <code title="get /v1/org/categories">client.organizations.categories.<a href="./src/resources/organizations/categories.ts">list</a>({ ...params }) -> CategoryListResponse</code>
- <code title="get /v1/org/categories/{category_id}/assets">client.organizations.categories.<a href="./src/resources/organizations/categories.ts">assets</a>(categoryID) -> CategoryAssetsResponse</code>
- <code title="post /v1/org/categories/{category_id}/prompts">client.organizations.categories.<a href="./src/resources/organizations/categories.ts">createPrompts</a>(categoryID, { ...params }) -> CategoryCreatePromptsResponse</code>
- <code title="get /v1/org/categories/{category_id}/personas">client.organizations.categories.<a href="./src/resources/organizations/categories.ts">getCategoryPersonas</a>(categoryID) -> CategoryGetCategoryPersonasResponse</code>
- <code title="get /v1/org/categories/{category_id}/citation-categories">client.organizations.categories.<a href="./src/resources/organizations/categories.ts">getCitationCategories</a>(categoryID) -> CategoryGetCitationCategoriesResponse</code>
- <code title="get /v1/org/categories/{category_id}/prompts">client.organizations.categories.<a href="./src/resources/organizations/categories.ts">prompts</a>(categoryID, { ...params }) -> CategoryPromptsResponse</code>
- <code title="get /v1/org/categories/{category_id}/regions">client.organizations.categories.<a href="./src/resources/organizations/categories.ts">retrieveRegions</a>(categoryID) -> CategoryRetrieveRegionsResponse</code>
- <code title="get /v1/org/categories/{category_id}/tags">client.organizations.categories.<a href="./src/resources/organizations/categories.ts">tags</a>(categoryID) -> CategoryTagsResponse</code>
- <code title="get /v1/org/categories/{category_id}/topics">client.organizations.categories.<a href="./src/resources/organizations/categories.ts">topics</a>(categoryID) -> CategoryTopicsResponse</code>
- <code title="patch /v1/org/categories/{category_id}/prompts/status">client.organizations.categories.<a href="./src/resources/organizations/categories.ts">updatePromptStatus</a>(categoryID, { ...params }) -> CategoryUpdatePromptStatusResponse</code>
- <code title="patch /v1/org/categories/{category_id}/prompts">client.organizations.categories.<a href="./src/resources/organizations/categories.ts">updatePrompts</a>(categoryID, { ...params }) -> CategoryUpdatePromptsResponse</code>

# Prompts

Types:

- <code><a href="./src/resources/prompts.ts">PromptAnswersResponse</a></code>
- <code><a href="./src/resources/prompts.ts">PromptAnswersV2Response</a></code>
- <code><a href="./src/resources/prompts.ts">PromptStreamAnswersV2Response</a></code>

Methods:

- <code title="post /v1/prompts/answers">client.prompts.<a href="./src/resources/prompts.ts">answers</a>({ ...params }) -> PromptAnswersResponse</code>
- <code title="post /v2/prompts/answers">client.prompts.<a href="./src/resources/prompts.ts">answersV2</a>({ ...params }) -> PromptAnswersV2Response</code>
- <code title="post /v2/prompts/answers/stream">client.prompts.<a href="./src/resources/prompts.ts">streamAnswersV2</a>({ ...params }) -> PromptStreamAnswersV2Response</code>

# Reports

Types:

- <code><a href="./src/resources/reports/reports.ts">HostnameFilter</a></code>
- <code><a href="./src/resources/reports/reports.ts">PromptIDFilter</a></code>
- <code><a href="./src/resources/reports/reports.ts">ReportInfo</a></code>
- <code><a href="./src/resources/reports/reports.ts">ReportResponse</a></code>
- <code><a href="./src/resources/reports/reports.ts">ReportResult</a></code>
- <code><a href="./src/resources/reports/reports.ts">RootDomainFilter</a></code>
- <code><a href="./src/resources/reports/reports.ts">TagNameFilter</a></code>
- <code><a href="./src/resources/reports/reports.ts">TopicNameFilter</a></code>
- <code><a href="./src/resources/reports/reports.ts">URLFilter</a></code>
- <code><a href="./src/resources/reports/reports.ts">ReportCitationsResponse</a></code>
- <code><a href="./src/resources/reports/reports.ts">ReportQueryCitationsResponse</a></code>
- <code><a href="./src/resources/reports/reports.ts">ReportQueryQueryFanoutsResponse</a></code>
- <code><a href="./src/resources/reports/reports.ts">ReportQuerySentimentResponse</a></code>
- <code><a href="./src/resources/reports/reports.ts">ReportQueryVisibilityResponse</a></code>
- <code><a href="./src/resources/reports/reports.ts">ReportSentimentV2Response</a></code>
- <code><a href="./src/resources/reports/reports.ts">ReportStreamCitationsResponse</a></code>
- <code><a href="./src/resources/reports/reports.ts">ReportStreamCitationsV2Response</a></code>
- <code><a href="./src/resources/reports/reports.ts">ReportStreamQueryFanoutsResponse</a></code>
- <code><a href="./src/resources/reports/reports.ts">ReportStreamSentimentResponse</a></code>
- <code><a href="./src/resources/reports/reports.ts">ReportStreamSentimentV2Response</a></code>
- <code><a href="./src/resources/reports/reports.ts">ReportStreamVisibilityResponse</a></code>
- <code><a href="./src/resources/reports/reports.ts">ReportStreamVisibilityV2Response</a></code>

Methods:

- <code title="post /v1/reports/citations">client.reports.<a href="./src/resources/reports/reports.ts">citations</a>({ ...params }) -> ReportCitationsResponse</code>
- <code title="post /v1/reports/bots">client.reports.<a href="./src/resources/reports/reports.ts">getBotsReport</a>({ ...params }) -> ReportResponse</code>
- <code title="post /v2/reports/bots">client.reports.<a href="./src/resources/reports/reports.ts">getBotsReportV2</a>({ ...params }) -> ReportResponse</code>
- <code title="post /v1/reports/referrals">client.reports.<a href="./src/resources/reports/reports.ts">getReferralsReport</a>({ ...params }) -> ReportResponse</code>
- <code title="post /v2/reports/referrals">client.reports.<a href="./src/resources/reports/reports.ts">getReferralsReportV2</a>({ ...params }) -> ReportResponse</code>
- <code title="post /v2/reports/citations">client.reports.<a href="./src/resources/reports/reports.ts">queryCitations</a>({ ...params }) -> ReportQueryCitationsResponse</code>
- <code title="post /v1/reports/query-fanouts">client.reports.<a href="./src/resources/reports/reports.ts">queryFanouts</a>({ ...params }) -> ReportResponse</code>
- <code title="post /v2/reports/query-fanouts">client.reports.<a href="./src/resources/reports/reports.ts">queryQueryFanouts</a>({ ...params }) -> ReportQueryQueryFanoutsResponse</code>
- <code title="post /v2/reports/sentiment">client.reports.<a href="./src/resources/reports/reports.ts">querySentiment</a>({ ...params }) -> ReportQuerySentimentResponse</code>
- <code title="post /v2/reports/visibility">client.reports.<a href="./src/resources/reports/reports.ts">queryVisibility</a>({ ...params }) -> ReportQueryVisibilityResponse</code>
- <code title="post /v1/reports/sentiment">client.reports.<a href="./src/resources/reports/reports.ts">sentiment</a>({ ...params }) -> ReportResponse</code>
- <code title="post /v1/reports/sentiment-v2">client.reports.<a href="./src/resources/reports/reports.ts">sentimentV2</a>({ ...params }) -> ReportSentimentV2Response</code>
- <code title="post /v1/reports/citations/stream">client.reports.<a href="./src/resources/reports/reports.ts">streamCitations</a>({ ...params }) -> ReportStreamCitationsResponse</code>
- <code title="post /v2/reports/citations/stream">client.reports.<a href="./src/resources/reports/reports.ts">streamCitationsV2</a>({ ...params }) -> ReportStreamCitationsV2Response</code>
- <code title="post /v2/reports/query-fanouts/stream">client.reports.<a href="./src/resources/reports/reports.ts">streamQueryFanouts</a>({ ...params }) -> ReportStreamQueryFanoutsResponse</code>
- <code title="post /v1/reports/sentiment/stream">client.reports.<a href="./src/resources/reports/reports.ts">streamSentiment</a>({ ...params }) -> ReportStreamSentimentResponse</code>
- <code title="post /v2/reports/sentiment/stream">client.reports.<a href="./src/resources/reports/reports.ts">streamSentimentV2</a>({ ...params }) -> ReportStreamSentimentV2Response</code>
- <code title="post /v1/reports/visibility/stream">client.reports.<a href="./src/resources/reports/reports.ts">streamVisibility</a>({ ...params }) -> ReportStreamVisibilityResponse</code>
- <code title="post /v2/reports/visibility/stream">client.reports.<a href="./src/resources/reports/reports.ts">streamVisibilityV2</a>({ ...params }) -> ReportStreamVisibilityV2Response</code>
- <code title="post /v1/reports/visibility">client.reports.<a href="./src/resources/reports/reports.ts">visibility</a>({ ...params }) -> ReportResponse</code>

## WebSearchResults

Types:

- <code><a href="./src/resources/reports/web-search-results.ts">WebSearchResultQueryResponse</a></code>
- <code><a href="./src/resources/reports/web-search-results.ts">WebSearchResultStreamResponse</a></code>

Methods:

- <code title="post /v1/reports/web-search-results">client.reports.webSearchResults.<a href="./src/resources/reports/web-search-results.ts">query</a>({ ...params }) -> WebSearchResultQueryResponse</code>
- <code title="post /v1/reports/web-search-results/stream">client.reports.webSearchResults.<a href="./src/resources/reports/web-search-results.ts">stream</a>({ ...params }) -> WebSearchResultStreamResponse</code>

## Shopping

Types:

- <code><a href="./src/resources/reports/shopping.ts">BrandNameFilter</a></code>
- <code><a href="./src/resources/reports/shopping.ts">MerchantNameFilter</a></code>
- <code><a href="./src/resources/reports/shopping.ts">ProductNameFilter</a></code>
- <code><a href="./src/resources/reports/shopping.ts">ShoppingBrandsResponse</a></code>
- <code><a href="./src/resources/reports/shopping.ts">ShoppingMerchantsResponse</a></code>
- <code><a href="./src/resources/reports/shopping.ts">ShoppingProductsResponse</a></code>
- <code><a href="./src/resources/reports/shopping.ts">ShoppingStreamBrandsResponse</a></code>
- <code><a href="./src/resources/reports/shopping.ts">ShoppingStreamMerchantsResponse</a></code>
- <code><a href="./src/resources/reports/shopping.ts">ShoppingStreamProductsResponse</a></code>
- <code><a href="./src/resources/reports/shopping.ts">ShoppingStreamTriggerRateResponse</a></code>
- <code><a href="./src/resources/reports/shopping.ts">ShoppingTriggerRateResponse</a></code>

Methods:

- <code title="post /v2/reports/shopping/brands">client.reports.shopping.<a href="./src/resources/reports/shopping.ts">brands</a>({ ...params }) -> ShoppingBrandsResponse</code>
- <code title="post /v2/reports/shopping/merchants">client.reports.shopping.<a href="./src/resources/reports/shopping.ts">merchants</a>({ ...params }) -> ShoppingMerchantsResponse</code>
- <code title="post /v2/reports/shopping/products">client.reports.shopping.<a href="./src/resources/reports/shopping.ts">products</a>({ ...params }) -> ShoppingProductsResponse</code>
- <code title="post /v2/reports/shopping/brands/stream">client.reports.shopping.<a href="./src/resources/reports/shopping.ts">streamBrands</a>({ ...params }) -> ShoppingStreamBrandsResponse</code>
- <code title="post /v2/reports/shopping/merchants/stream">client.reports.shopping.<a href="./src/resources/reports/shopping.ts">streamMerchants</a>({ ...params }) -> ShoppingStreamMerchantsResponse</code>
- <code title="post /v2/reports/shopping/products/stream">client.reports.shopping.<a href="./src/resources/reports/shopping.ts">streamProducts</a>({ ...params }) -> ShoppingStreamProductsResponse</code>
- <code title="post /v2/reports/shopping/trigger-rate/stream">client.reports.shopping.<a href="./src/resources/reports/shopping.ts">streamTriggerRate</a>({ ...params }) -> ShoppingStreamTriggerRateResponse</code>
- <code title="post /v2/reports/shopping/trigger-rate">client.reports.shopping.<a href="./src/resources/reports/shopping.ts">triggerRate</a>({ ...params }) -> ShoppingTriggerRateResponse</code>

## Accuracy

Types:

- <code><a href="./src/resources/reports/accuracy.ts">AccuracyCreateBreakdownResponse</a></code>
- <code><a href="./src/resources/reports/accuracy.ts">AccuracyCreateCitationAnalysisResponse</a></code>
- <code><a href="./src/resources/reports/accuracy.ts">AccuracyCreateClaimBreakdownResponse</a></code>
- <code><a href="./src/resources/reports/accuracy.ts">AccuracyCreateClaimCitationsResponse</a></code>
- <code><a href="./src/resources/reports/accuracy.ts">AccuracyCreateClusterExampleRunsResponse</a></code>
- <code><a href="./src/resources/reports/accuracy.ts">AccuracyCreateClusterVerificationPairsResponse</a></code>
- <code><a href="./src/resources/reports/accuracy.ts">AccuracyCreateFactcheckSetupStatusResponse</a></code>
- <code><a href="./src/resources/reports/accuracy.ts">AccuracyCreateInaccuracyDriversResponse</a></code>
- <code><a href="./src/resources/reports/accuracy.ts">AccuracyCreateInaccurateClustersResponse</a></code>
- <code><a href="./src/resources/reports/accuracy.ts">AccuracyCreateInaccurateThemesResponse</a></code>
- <code><a href="./src/resources/reports/accuracy.ts">AccuracyCreateOverviewResponse</a></code>
- <code><a href="./src/resources/reports/accuracy.ts">AccuracyCreateTopInaccurateClaimsResponse</a></code>
- <code><a href="./src/resources/reports/accuracy.ts">AccuracyCreateTopicIDsResponse</a></code>

Methods:

- <code title="post /v1/reports/accuracy/breakdown">client.reports.accuracy.<a href="./src/resources/reports/accuracy.ts">createBreakdown</a>({ ...params }) -> AccuracyCreateBreakdownResponse</code>
- <code title="post /v1/reports/accuracy/citation-analysis">client.reports.accuracy.<a href="./src/resources/reports/accuracy.ts">createCitationAnalysis</a>({ ...params }) -> AccuracyCreateCitationAnalysisResponse</code>
- <code title="post /v1/reports/accuracy/claim-breakdown">client.reports.accuracy.<a href="./src/resources/reports/accuracy.ts">createClaimBreakdown</a>({ ...params }) -> AccuracyCreateClaimBreakdownResponse</code>
- <code title="post /v1/reports/accuracy/claim-citations">client.reports.accuracy.<a href="./src/resources/reports/accuracy.ts">createClaimCitations</a>({ ...params }) -> AccuracyCreateClaimCitationsResponse</code>
- <code title="post /v1/reports/accuracy/cluster-example-runs">client.reports.accuracy.<a href="./src/resources/reports/accuracy.ts">createClusterExampleRuns</a>({ ...params }) -> AccuracyCreateClusterExampleRunsResponse</code>
- <code title="post /v1/reports/accuracy/cluster-verification-pairs">client.reports.accuracy.<a href="./src/resources/reports/accuracy.ts">createClusterVerificationPairs</a>({ ...params }) -> AccuracyCreateClusterVerificationPairsResponse</code>
- <code title="post /v1/reports/accuracy/factcheck-setup-status">client.reports.accuracy.<a href="./src/resources/reports/accuracy.ts">createFactcheckSetupStatus</a>({ ...params }) -> AccuracyCreateFactcheckSetupStatusResponse</code>
- <code title="post /v1/reports/accuracy/inaccuracy-drivers">client.reports.accuracy.<a href="./src/resources/reports/accuracy.ts">createInaccuracyDrivers</a>({ ...params }) -> AccuracyCreateInaccuracyDriversResponse</code>
- <code title="post /v1/reports/accuracy/inaccurate-clusters">client.reports.accuracy.<a href="./src/resources/reports/accuracy.ts">createInaccurateClusters</a>({ ...params }) -> AccuracyCreateInaccurateClustersResponse</code>
- <code title="post /v1/reports/accuracy/inaccurate-themes">client.reports.accuracy.<a href="./src/resources/reports/accuracy.ts">createInaccurateThemes</a>({ ...params }) -> AccuracyCreateInaccurateThemesResponse</code>
- <code title="post /v1/reports/accuracy/overview">client.reports.accuracy.<a href="./src/resources/reports/accuracy.ts">createOverview</a>({ ...params }) -> AccuracyCreateOverviewResponse</code>
- <code title="post /v1/reports/accuracy/top-inaccurate-claims">client.reports.accuracy.<a href="./src/resources/reports/accuracy.ts">createTopInaccurateClaims</a>({ ...params }) -> AccuracyCreateTopInaccurateClaimsResponse</code>
- <code title="post /v1/reports/accuracy/topic-ids">client.reports.accuracy.<a href="./src/resources/reports/accuracy.ts">createTopicIDs</a>({ ...params }) -> AccuracyCreateTopicIDsResponse</code>

## Factcheck

Types:

- <code><a href="./src/resources/reports/factcheck/factcheck.ts">FactcheckQueryScoresResponse</a></code>
- <code><a href="./src/resources/reports/factcheck/factcheck.ts">FactcheckStreamScoresResponse</a></code>

Methods:

- <code title="post /v2/reports/factcheck">client.reports.factcheck.<a href="./src/resources/reports/factcheck/factcheck.ts">queryScores</a>({ ...params }) -> FactcheckQueryScoresResponse</code>
- <code title="post /v2/reports/factcheck/stream">client.reports.factcheck.<a href="./src/resources/reports/factcheck/factcheck.ts">streamScores</a>({ ...params }) -> FactcheckStreamScoresResponse</code>

### Claims

Types:

- <code><a href="./src/resources/reports/factcheck/claims.ts">ClaimQueryClaimsResponse</a></code>
- <code><a href="./src/resources/reports/factcheck/claims.ts">ClaimStreamClaimsResponse</a></code>

Methods:

- <code title="post /v2/reports/factcheck/claims">client.reports.factcheck.claims.<a href="./src/resources/reports/factcheck/claims.ts">queryClaims</a>({ ...params }) -> ClaimQueryClaimsResponse</code>
- <code title="post /v2/reports/factcheck/claims/stream">client.reports.factcheck.claims.<a href="./src/resources/reports/factcheck/claims.ts">streamClaims</a>({ ...params }) -> ClaimStreamClaimsResponse</code>

# Logs

## Raw

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

- <code><a href="./src/resources/agents/agents.ts">AgentCreateResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentRetrieveResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentUpdateResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentListResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentPublishResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentRetrieveGraphResponse</a></code>

Methods:

- <code title="post /v1/agents">client.agents.<a href="./src/resources/agents/agents.ts">create</a>({ ...params }) -> AgentCreateResponse</code>
- <code title="get /v1/agents/{agent_id}">client.agents.<a href="./src/resources/agents/agents.ts">retrieve</a>(agentID, { ...params }) -> AgentRetrieveResponse</code>
- <code title="patch /v1/agents/{agent_id}">client.agents.<a href="./src/resources/agents/agents.ts">update</a>(agentID, { ...params }) -> AgentUpdateResponse</code>
- <code title="get /v1/agents">client.agents.<a href="./src/resources/agents/agents.ts">list</a>({ ...params }) -> AgentListResponse</code>
- <code title="post /v1/agents/{agent_id}/publish">client.agents.<a href="./src/resources/agents/agents.ts">publish</a>(agentID) -> AgentPublishResponse</code>
- <code title="get /v1/agents/{agent_id}/graph">client.agents.<a href="./src/resources/agents/agents.ts">retrieveGraph</a>(agentID, { ...params }) -> AgentRetrieveGraphResponse</code>

## Runs

Types:

- <code><a href="./src/resources/agents/runs.ts">RunCreateResponse</a></code>
- <code><a href="./src/resources/agents/runs.ts">RunRetrieveResponse</a></code>

Methods:

- <code title="post /v1/agents/{agent_id}/runs">client.agents.runs.<a href="./src/resources/agents/runs.ts">create</a>(agentID, { ...params }) -> RunCreateResponse</code>
- <code title="get /v1/agents/{agent_id}/runs/{run_id}">client.agents.runs.<a href="./src/resources/agents/runs.ts">retrieve</a>(runID, { ...params }) -> RunRetrieveResponse</code>

## NodeTypes

Types:

- <code><a href="./src/resources/agents/node-types.ts">NodeTypeListResponse</a></code>
- <code><a href="./src/resources/agents/node-types.ts">NodeTypeRetrieveSchemaResponse</a></code>

Methods:

- <code title="get /v1/agents/node-types">client.agents.nodeTypes.<a href="./src/resources/agents/node-types.ts">list</a>() -> NodeTypeListResponse</code>
- <code title="get /v1/agents/node-types/{node_type}/schema">client.agents.nodeTypes.<a href="./src/resources/agents/node-types.ts">retrieveSchema</a>(nodeType) -> NodeTypeRetrieveSchemaResponse</code>

# KnowledgeBases

Types:

- <code><a href="./src/resources/knowledge-bases/knowledge-bases.ts">KnowledgeBaseListResponse</a></code>
- <code><a href="./src/resources/knowledge-bases/knowledge-bases.ts">KnowledgeBaseSearchResponse</a></code>

Methods:

- <code title="get /v1/knowledge-bases">client.knowledgeBases.<a href="./src/resources/knowledge-bases/knowledge-bases.ts">list</a>({ ...params }) -> KnowledgeBaseListResponse</code>
- <code title="post /v1/knowledge-bases/{knowledge_base_id}/search">client.knowledgeBases.<a href="./src/resources/knowledge-bases/knowledge-bases.ts">search</a>(knowledgeBaseID, { ...params }) -> KnowledgeBaseSearchResponse</code>

## Documents

Types:

- <code><a href="./src/resources/knowledge-bases/documents.ts">DocumentCreateResponse</a></code>
- <code><a href="./src/resources/knowledge-bases/documents.ts">DocumentUpdateResponse</a></code>
- <code><a href="./src/resources/knowledge-bases/documents.ts">DocumentDeleteResponse</a></code>

Methods:

- <code title="post /v1/knowledge-bases/{knowledge_base_id}/documents">client.knowledgeBases.documents.<a href="./src/resources/knowledge-bases/documents.ts">create</a>(knowledgeBaseID, { ...params }) -> DocumentCreateResponse</code>
- <code title="put /v1/knowledge-bases/{knowledge_base_id}/documents">client.knowledgeBases.documents.<a href="./src/resources/knowledge-bases/documents.ts">update</a>(knowledgeBaseID, { ...params }) -> DocumentUpdateResponse</code>
- <code title="delete /v1/knowledge-bases/{knowledge_base_id}/documents">client.knowledgeBases.documents.<a href="./src/resources/knowledge-bases/documents.ts">delete</a>(knowledgeBaseID, { ...params }) -> DocumentDeleteResponse</code>

## Folders

Types:

- <code><a href="./src/resources/knowledge-bases/folders.ts">FolderCreateResponse</a></code>
- <code><a href="./src/resources/knowledge-bases/folders.ts">FolderDeleteResponse</a></code>

Methods:

- <code title="post /v1/knowledge-bases/{knowledge_base_id}/folders">client.knowledgeBases.folders.<a href="./src/resources/knowledge-bases/folders.ts">create</a>(knowledgeBaseID, { ...params }) -> FolderCreateResponse</code>
- <code title="delete /v1/knowledge-bases/{knowledge_base_id}/folders">client.knowledgeBases.folders.<a href="./src/resources/knowledge-bases/folders.ts">delete</a>(knowledgeBaseID, { ...params }) -> FolderDeleteResponse</code>

# Projects

Types:

- <code><a href="./src/resources/projects/projects.ts">ProjectCreateResponse</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectRetrieveResponse</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectListResponse</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectArchiveResponse</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectGetStatusResponse</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectUnarchiveResponse</a></code>

Methods:

- <code title="post /v1/projects">client.projects.<a href="./src/resources/projects/projects.ts">create</a>({ ...params }) -> ProjectCreateResponse</code>
- <code title="get /v1/projects/{project_id}">client.projects.<a href="./src/resources/projects/projects.ts">retrieve</a>(projectID, { ...params }) -> ProjectRetrieveResponse</code>
- <code title="get /v1/projects">client.projects.<a href="./src/resources/projects/projects.ts">list</a>({ ...params }) -> ProjectListResponse</code>
- <code title="delete /v1/projects/{project_id}">client.projects.<a href="./src/resources/projects/projects.ts">delete</a>(projectID, { ...params }) -> void</code>
- <code title="post /v1/projects/{project_id}/archive">client.projects.<a href="./src/resources/projects/projects.ts">archive</a>(projectID, { ...params }) -> ProjectArchiveResponse</code>
- <code title="get /v1/projects/{project_id}/status">client.projects.<a href="./src/resources/projects/projects.ts">getStatus</a>(projectID, { ...params }) -> ProjectGetStatusResponse</code>
- <code title="post /v1/projects/{project_id}/unarchive">client.projects.<a href="./src/resources/projects/projects.ts">unarchive</a>(projectID, { ...params }) -> ProjectUnarchiveResponse</code>

## Generations

Types:

- <code><a href="./src/resources/projects/generations.ts">GenerationRetrieveResponse</a></code>
- <code><a href="./src/resources/projects/generations.ts">GenerationListResponse</a></code>

Methods:

- <code title="get /v1/projects/generations/{run_id}">client.projects.generations.<a href="./src/resources/projects/generations.ts">retrieve</a>(runID, { ...params }) -> GenerationRetrieveResponse</code>
- <code title="get /v1/projects/generations">client.projects.generations.<a href="./src/resources/projects/generations.ts">list</a>({ ...params }) -> GenerationListResponse</code>

## Tasks

Types:

- <code><a href="./src/resources/projects/tasks.ts">TaskCreateResponse</a></code>
- <code><a href="./src/resources/projects/tasks.ts">TaskRetrieveResponse</a></code>
- <code><a href="./src/resources/projects/tasks.ts">TaskUpdateResponse</a></code>
- <code><a href="./src/resources/projects/tasks.ts">TaskListResponse</a></code>
- <code><a href="./src/resources/projects/tasks.ts">TaskUpdateStatusResponse</a></code>

Methods:

- <code title="post /v1/projects/{project_id}/tasks">client.projects.tasks.<a href="./src/resources/projects/tasks.ts">create</a>(projectID, { ...params }) -> TaskCreateResponse</code>
- <code title="get /v1/projects/{project_id}/tasks/{task_id}">client.projects.tasks.<a href="./src/resources/projects/tasks.ts">retrieve</a>(taskID, { ...params }) -> TaskRetrieveResponse</code>
- <code title="patch /v1/projects/{project_id}/tasks/{task_id}">client.projects.tasks.<a href="./src/resources/projects/tasks.ts">update</a>(taskID, { ...params }) -> TaskUpdateResponse</code>
- <code title="get /v1/projects/{project_id}/tasks">client.projects.tasks.<a href="./src/resources/projects/tasks.ts">list</a>(projectID, { ...params }) -> TaskListResponse</code>
- <code title="delete /v1/projects/{project_id}/tasks/{task_id}">client.projects.tasks.<a href="./src/resources/projects/tasks.ts">delete</a>(taskID, { ...params }) -> void</code>
- <code title="post /v1/projects/{project_id}/tasks/{task_id}/status">client.projects.tasks.<a href="./src/resources/projects/tasks.ts">updateStatus</a>(taskID, { ...params }) -> TaskUpdateStatusResponse</code>

# Integrations

Types:

- <code><a href="./src/resources/integrations.ts">IntegrationListResponse</a></code>

Methods:

- <code title="get /v1/integrations">client.integrations.<a href="./src/resources/integrations.ts">list</a>({ ...params }) -> IntegrationListResponse</code>

# Documents

Types:

- <code><a href="./src/resources/documents.ts">DocumentCreateResponse</a></code>

Methods:

- <code title="post /v1/documents">client.documents.<a href="./src/resources/documents.ts">create</a>({ ...params }) -> DocumentCreateResponse</code>

# Ads

## OpenAIAds

### AdAccount

Types:

- <code><a href="./src/resources/ads/openai-ads/ad-account.ts">AdAccountRetrieveInsightsResponse</a></code>

Methods:

- <code title="get /v1/ads/openai-ads/ad-account/insights">client.ads.openaiAds.adAccount.<a href="./src/resources/ads/openai-ads/ad-account.ts">retrieveInsights</a>({ ...params }) -> AdAccountRetrieveInsightsResponse</code>

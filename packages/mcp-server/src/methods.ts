// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.organizations.list',
    fullyQualifiedName: 'organizations.list',
    httpMethod: 'get',
    httpPath: '/v1/org',
  },
  {
    clientCallName: 'client.organizations.domains',
    fullyQualifiedName: 'organizations.domains',
    httpMethod: 'get',
    httpPath: '/v1/org/domains',
  },
  {
    clientCallName: 'client.organizations.getPersonas',
    fullyQualifiedName: 'organizations.getPersonas',
    httpMethod: 'get',
    httpPath: '/v1/org/personas',
  },
  {
    clientCallName: 'client.organizations.listAssets',
    fullyQualifiedName: 'organizations.listAssets',
    httpMethod: 'get',
    httpPath: '/v1/org/assets',
  },
  {
    clientCallName: 'client.organizations.models',
    fullyQualifiedName: 'organizations.models',
    httpMethod: 'get',
    httpPath: '/v1/org/models',
  },
  {
    clientCallName: 'client.organizations.regions',
    fullyQualifiedName: 'organizations.regions',
    httpMethod: 'get',
    httpPath: '/v1/org/regions',
  },
  {
    clientCallName: 'client.organizations.categories.list',
    fullyQualifiedName: 'organizations.categories.list',
    httpMethod: 'get',
    httpPath: '/v1/org/categories',
  },
  {
    clientCallName: 'client.organizations.categories.assets',
    fullyQualifiedName: 'organizations.categories.assets',
    httpMethod: 'get',
    httpPath: '/v1/org/categories/{category_id}/assets',
  },
  {
    clientCallName: 'client.organizations.categories.createPrompts',
    fullyQualifiedName: 'organizations.categories.createPrompts',
    httpMethod: 'post',
    httpPath: '/v1/org/categories/{category_id}/prompts',
  },
  {
    clientCallName: 'client.organizations.categories.getCategoryPersonas',
    fullyQualifiedName: 'organizations.categories.getCategoryPersonas',
    httpMethod: 'get',
    httpPath: '/v1/org/categories/{category_id}/personas',
  },
  {
    clientCallName: 'client.organizations.categories.prompts',
    fullyQualifiedName: 'organizations.categories.prompts',
    httpMethod: 'get',
    httpPath: '/v1/org/categories/{category_id}/prompts',
  },
  {
    clientCallName: 'client.organizations.categories.retrieveRegions',
    fullyQualifiedName: 'organizations.categories.retrieveRegions',
    httpMethod: 'get',
    httpPath: '/v1/org/categories/{category_id}/regions',
  },
  {
    clientCallName: 'client.organizations.categories.tags',
    fullyQualifiedName: 'organizations.categories.tags',
    httpMethod: 'get',
    httpPath: '/v1/org/categories/{category_id}/tags',
  },
  {
    clientCallName: 'client.organizations.categories.topics',
    fullyQualifiedName: 'organizations.categories.topics',
    httpMethod: 'get',
    httpPath: '/v1/org/categories/{category_id}/topics',
  },
  {
    clientCallName: 'client.organizations.categories.updatePromptStatus',
    fullyQualifiedName: 'organizations.categories.updatePromptStatus',
    httpMethod: 'patch',
    httpPath: '/v1/org/categories/{category_id}/prompts/status',
  },
  {
    clientCallName: 'client.organizations.categories.updatePrompts',
    fullyQualifiedName: 'organizations.categories.updatePrompts',
    httpMethod: 'patch',
    httpPath: '/v1/org/categories/{category_id}/prompts',
  },
  {
    clientCallName: 'client.prompts.answers',
    fullyQualifiedName: 'prompts.answers',
    httpMethod: 'post',
    httpPath: '/v1/prompts/answers',
  },
  {
    clientCallName: 'client.reports.citations',
    fullyQualifiedName: 'reports.citations',
    httpMethod: 'post',
    httpPath: '/v1/reports/citations',
  },
  {
    clientCallName: 'client.reports.getBotsReport',
    fullyQualifiedName: 'reports.getBotsReport',
    httpMethod: 'post',
    httpPath: '/v1/reports/bots',
  },
  {
    clientCallName: 'client.reports.getBotsReportV2',
    fullyQualifiedName: 'reports.getBotsReportV2',
    httpMethod: 'post',
    httpPath: '/v2/reports/bots',
  },
  {
    clientCallName: 'client.reports.getReferralsReport',
    fullyQualifiedName: 'reports.getReferralsReport',
    httpMethod: 'post',
    httpPath: '/v1/reports/referrals',
  },
  {
    clientCallName: 'client.reports.getReferralsReportV2',
    fullyQualifiedName: 'reports.getReferralsReportV2',
    httpMethod: 'post',
    httpPath: '/v2/reports/referrals',
  },
  {
    clientCallName: 'client.reports.queryFanouts',
    fullyQualifiedName: 'reports.queryFanouts',
    httpMethod: 'post',
    httpPath: '/v1/reports/query-fanouts',
  },
  {
    clientCallName: 'client.reports.sentiment',
    fullyQualifiedName: 'reports.sentiment',
    httpMethod: 'post',
    httpPath: '/v1/reports/sentiment',
  },
  {
    clientCallName: 'client.reports.streamCitations',
    fullyQualifiedName: 'reports.streamCitations',
    httpMethod: 'post',
    httpPath: '/v1/reports/citations/stream',
  },
  {
    clientCallName: 'client.reports.streamSentiment',
    fullyQualifiedName: 'reports.streamSentiment',
    httpMethod: 'post',
    httpPath: '/v1/reports/sentiment/stream',
  },
  {
    clientCallName: 'client.reports.streamVisibility',
    fullyQualifiedName: 'reports.streamVisibility',
    httpMethod: 'post',
    httpPath: '/v1/reports/visibility/stream',
  },
  {
    clientCallName: 'client.reports.visibility',
    fullyQualifiedName: 'reports.visibility',
    httpMethod: 'post',
    httpPath: '/v1/reports/visibility',
  },
  {
    clientCallName: 'client.reports.webSearchResults.query',
    fullyQualifiedName: 'reports.webSearchResults.query',
    httpMethod: 'post',
    httpPath: '/v1/reports/web-search-results',
  },
  {
    clientCallName: 'client.reports.webSearchResults.stream',
    fullyQualifiedName: 'reports.webSearchResults.stream',
    httpMethod: 'post',
    httpPath: '/v1/reports/web-search-results/stream',
  },
  {
    clientCallName: 'client.reports.shopping.allItemsWithMerchants',
    fullyQualifiedName: 'reports.shopping.allItemsWithMerchants',
    httpMethod: 'post',
    httpPath: '/v1/reports/shopping/all-items-with-merchants',
  },
  {
    clientCallName: 'client.reports.shopping.executions',
    fullyQualifiedName: 'reports.shopping.executions',
    httpMethod: 'post',
    httpPath: '/v1/reports/shopping/executions',
  },
  {
    clientCallName: 'client.reports.shopping.itemVisibility',
    fullyQualifiedName: 'reports.shopping.itemVisibility',
    httpMethod: 'post',
    httpPath: '/v1/reports/shopping/item-visibility',
  },
  {
    clientCallName: 'client.reports.shopping.merchantByItems',
    fullyQualifiedName: 'reports.shopping.merchantByItems',
    httpMethod: 'post',
    httpPath: '/v1/reports/shopping/merchant-by-items',
  },
  {
    clientCallName: 'client.reports.shopping.merchantDistribution',
    fullyQualifiedName: 'reports.shopping.merchantDistribution',
    httpMethod: 'post',
    httpPath: '/v1/reports/shopping/merchant-distribution',
  },
  {
    clientCallName: 'client.reports.shopping.merchantShare',
    fullyQualifiedName: 'reports.shopping.merchantShare',
    httpMethod: 'post',
    httpPath: '/v1/reports/shopping/merchant-share',
  },
  {
    clientCallName: 'client.reports.shopping.merchantVisibilityByBrand',
    fullyQualifiedName: 'reports.shopping.merchantVisibilityByBrand',
    httpMethod: 'post',
    httpPath: '/v1/reports/shopping/merchant-visibility-by-brand',
  },
  {
    clientCallName: 'client.reports.shopping.productMerchantURLs',
    fullyQualifiedName: 'reports.shopping.productMerchantURLs',
    httpMethod: 'post',
    httpPath: '/v1/reports/shopping/product-merchant-urls',
  },
  {
    clientCallName: 'client.reports.shopping.triggerRate',
    fullyQualifiedName: 'reports.shopping.triggerRate',
    httpMethod: 'post',
    httpPath: '/v1/reports/shopping/trigger-rate',
  },
  {
    clientCallName: 'client.reports.shopping.visibility',
    fullyQualifiedName: 'reports.shopping.visibility',
    httpMethod: 'post',
    httpPath: '/v1/reports/shopping/visibility',
  },
  {
    clientCallName: 'client.reports.accuracy.createBreakdown',
    fullyQualifiedName: 'reports.accuracy.createBreakdown',
    httpMethod: 'post',
    httpPath: '/v1/reports/accuracy/breakdown',
  },
  {
    clientCallName: 'client.reports.accuracy.createCitationAnalysis',
    fullyQualifiedName: 'reports.accuracy.createCitationAnalysis',
    httpMethod: 'post',
    httpPath: '/v1/reports/accuracy/citation-analysis',
  },
  {
    clientCallName: 'client.reports.accuracy.createClaimBreakdown',
    fullyQualifiedName: 'reports.accuracy.createClaimBreakdown',
    httpMethod: 'post',
    httpPath: '/v1/reports/accuracy/claim-breakdown',
  },
  {
    clientCallName: 'client.reports.accuracy.createClaimCitations',
    fullyQualifiedName: 'reports.accuracy.createClaimCitations',
    httpMethod: 'post',
    httpPath: '/v1/reports/accuracy/claim-citations',
  },
  {
    clientCallName: 'client.reports.accuracy.createClusterExampleRuns',
    fullyQualifiedName: 'reports.accuracy.createClusterExampleRuns',
    httpMethod: 'post',
    httpPath: '/v1/reports/accuracy/cluster-example-runs',
  },
  {
    clientCallName: 'client.reports.accuracy.createClusterVerificationPairs',
    fullyQualifiedName: 'reports.accuracy.createClusterVerificationPairs',
    httpMethod: 'post',
    httpPath: '/v1/reports/accuracy/cluster-verification-pairs',
  },
  {
    clientCallName: 'client.reports.accuracy.createFactcheckSetupStatus',
    fullyQualifiedName: 'reports.accuracy.createFactcheckSetupStatus',
    httpMethod: 'post',
    httpPath: '/v1/reports/accuracy/factcheck-setup-status',
  },
  {
    clientCallName: 'client.reports.accuracy.createInaccuracyDrivers',
    fullyQualifiedName: 'reports.accuracy.createInaccuracyDrivers',
    httpMethod: 'post',
    httpPath: '/v1/reports/accuracy/inaccuracy-drivers',
  },
  {
    clientCallName: 'client.reports.accuracy.createInaccurateClusters',
    fullyQualifiedName: 'reports.accuracy.createInaccurateClusters',
    httpMethod: 'post',
    httpPath: '/v1/reports/accuracy/inaccurate-clusters',
  },
  {
    clientCallName: 'client.reports.accuracy.createInaccurateThemes',
    fullyQualifiedName: 'reports.accuracy.createInaccurateThemes',
    httpMethod: 'post',
    httpPath: '/v1/reports/accuracy/inaccurate-themes',
  },
  {
    clientCallName: 'client.reports.accuracy.createOverview',
    fullyQualifiedName: 'reports.accuracy.createOverview',
    httpMethod: 'post',
    httpPath: '/v1/reports/accuracy/overview',
  },
  {
    clientCallName: 'client.reports.accuracy.createTopInaccurateClaims',
    fullyQualifiedName: 'reports.accuracy.createTopInaccurateClaims',
    httpMethod: 'post',
    httpPath: '/v1/reports/accuracy/top-inaccurate-claims',
  },
  {
    clientCallName: 'client.reports.accuracy.createTopicIDs',
    fullyQualifiedName: 'reports.accuracy.createTopicIDs',
    httpMethod: 'post',
    httpPath: '/v1/reports/accuracy/topic-ids',
  },
  {
    clientCallName: 'client.logs.raw.bots',
    fullyQualifiedName: 'logs.raw.bots',
    httpMethod: 'post',
    httpPath: '/v1/logs/raw/bots',
  },
  {
    clientCallName: 'client.logs.raw.logs',
    fullyQualifiedName: 'logs.raw.logs',
    httpMethod: 'post',
    httpPath: '/v1/logs/raw',
  },
  {
    clientCallName: 'client.content.optimization.retrieve',
    fullyQualifiedName: 'content.optimization.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/content/{asset_id}/optimization/{content_id}',
  },
  {
    clientCallName: 'client.content.optimization.list',
    fullyQualifiedName: 'content.optimization.list',
    httpMethod: 'get',
    httpPath: '/v1/content/{asset_id}/optimization',
  },
  {
    clientCallName: 'client.agents.create',
    fullyQualifiedName: 'agents.create',
    httpMethod: 'post',
    httpPath: '/v1/agents',
  },
  {
    clientCallName: 'client.agents.retrieve',
    fullyQualifiedName: 'agents.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/agents/{agent_id}',
  },
  {
    clientCallName: 'client.agents.update',
    fullyQualifiedName: 'agents.update',
    httpMethod: 'patch',
    httpPath: '/v1/agents/{agent_id}',
  },
  {
    clientCallName: 'client.agents.list',
    fullyQualifiedName: 'agents.list',
    httpMethod: 'get',
    httpPath: '/v1/agents',
  },
  {
    clientCallName: 'client.agents.publish',
    fullyQualifiedName: 'agents.publish',
    httpMethod: 'post',
    httpPath: '/v1/agents/{agent_id}/publish',
  },
  {
    clientCallName: 'client.agents.runs.create',
    fullyQualifiedName: 'agents.runs.create',
    httpMethod: 'post',
    httpPath: '/v1/agents/{agent_id}/runs',
  },
  {
    clientCallName: 'client.agents.runs.retrieve',
    fullyQualifiedName: 'agents.runs.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/agents/{agent_id}/runs/{run_id}',
  },
  {
    clientCallName: 'client.agents.nodeTypes.list',
    fullyQualifiedName: 'agents.nodeTypes.list',
    httpMethod: 'get',
    httpPath: '/v1/agents/node-types',
  },
  {
    clientCallName: 'client.agents.nodeTypes.retrieveSchema',
    fullyQualifiedName: 'agents.nodeTypes.retrieveSchema',
    httpMethod: 'get',
    httpPath: '/v1/agents/node-types/{node_type}/schema',
  },
  {
    clientCallName: 'client.knowledgeBases.list',
    fullyQualifiedName: 'knowledgeBases.list',
    httpMethod: 'get',
    httpPath: '/v1/knowledge-bases',
  },
  {
    clientCallName: 'client.knowledgeBases.search',
    fullyQualifiedName: 'knowledgeBases.search',
    httpMethod: 'post',
    httpPath: '/v1/knowledge-bases/{knowledge_base_id}/search',
  },
  {
    clientCallName: 'client.knowledgeBases.documents.create',
    fullyQualifiedName: 'knowledgeBases.documents.create',
    httpMethod: 'post',
    httpPath: '/v1/knowledge-bases/{knowledge_base_id}/documents',
  },
  {
    clientCallName: 'client.knowledgeBases.documents.update',
    fullyQualifiedName: 'knowledgeBases.documents.update',
    httpMethod: 'put',
    httpPath: '/v1/knowledge-bases/{knowledge_base_id}/documents',
  },
  {
    clientCallName: 'client.knowledgeBases.documents.delete',
    fullyQualifiedName: 'knowledgeBases.documents.delete',
    httpMethod: 'delete',
    httpPath: '/v1/knowledge-bases/{knowledge_base_id}/documents',
  },
  {
    clientCallName: 'client.knowledgeBases.folders.create',
    fullyQualifiedName: 'knowledgeBases.folders.create',
    httpMethod: 'post',
    httpPath: '/v1/knowledge-bases/{knowledge_base_id}/folders',
  },
  {
    clientCallName: 'client.knowledgeBases.folders.delete',
    fullyQualifiedName: 'knowledgeBases.folders.delete',
    httpMethod: 'delete',
    httpPath: '/v1/knowledge-bases/{knowledge_base_id}/folders',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}

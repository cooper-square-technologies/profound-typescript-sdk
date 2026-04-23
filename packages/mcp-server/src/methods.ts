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
    clientCallName: 'client.reports.visibility',
    fullyQualifiedName: 'reports.visibility',
    httpMethod: 'post',
    httpPath: '/v1/reports/visibility',
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
    clientCallName: 'client.agents.retrieve',
    fullyQualifiedName: 'agents.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/agents/{agent_id}',
  },
  {
    clientCallName: 'client.agents.list',
    fullyQualifiedName: 'agents.list',
    httpMethod: 'get',
    httpPath: '/v1/agents',
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

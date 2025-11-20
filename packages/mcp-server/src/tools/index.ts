// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import domains_organizations from './organizations/domains-organizations';
import models_organizations from './organizations/models-organizations';
import regions_organizations from './organizations/regions-organizations';
import list_organizations_categories from './organizations/categories/list-organizations-categories';
import assets_organizations_categories from './organizations/categories/assets-organizations-categories';
import prompts_organizations_categories from './organizations/categories/prompts-organizations-categories';
import tags_organizations_categories from './organizations/categories/tags-organizations-categories';
import topics_organizations_categories from './organizations/categories/topics-organizations-categories';
import answers_prompts from './prompts/answers-prompts';
import citations_reports from './reports/citations-reports';
import sentiment_reports from './reports/sentiment-reports';
import visibility_reports from './reports/visibility-reports';
import bots_logs_raw from './logs/raw/bots-logs-raw';
import logs_logs_raw from './logs/raw/logs-logs-raw';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(domains_organizations);
addEndpoint(models_organizations);
addEndpoint(regions_organizations);
addEndpoint(list_organizations_categories);
addEndpoint(assets_organizations_categories);
addEndpoint(prompts_organizations_categories);
addEndpoint(tags_organizations_categories);
addEndpoint(topics_organizations_categories);
addEndpoint(answers_prompts);
addEndpoint(citations_reports);
addEndpoint(sentiment_reports);
addEndpoint(visibility_reports);
addEndpoint(bots_logs_raw);
addEndpoint(logs_logs_raw);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}

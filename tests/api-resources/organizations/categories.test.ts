// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource categories', () => {
  smokeCase(
    'organizations.categories.list:required',
    { operation: 'list', path: '/v1/org/categories' },
    'list: only required params',
    async () => {
      const category = await client.organizations.categories.list();
    },
  );
  smokeCase(
    'organizations.categories.list:all',
    { operation: 'list', path: '/v1/org/categories' },
    'list: required and optional params',
    async () => {
      const category = await client.organizations.categories.list({
        organization_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
      });
    },
  );
  smokeCase(
    'organizations.categories.topics:single',
    { operation: 'topics', path: '/v1/org/categories/{category_id}/topics' },
    'topics',
    async () => {
      const category = await client.organizations.categories.topics('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  );
  smokeCase(
    'organizations.categories.tags:single',
    { operation: 'tags', path: '/v1/org/categories/{category_id}/tags' },
    'tags',
    async () => {
      const category = await client.organizations.categories.tags('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  );
  smokeCase(
    'organizations.categories.prompts:required',
    { operation: 'prompts', path: '/v1/org/categories/{category_id}/prompts' },
    'prompts: only required params',
    async () => {
      const category = await client.organizations.categories.prompts('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        limit: 10000,
        order_by: 'created_at',
        order_dir: 'desc',
        status: ['active'],
      });
    },
  );
  smokeCase(
    'organizations.categories.prompts:all',
    { operation: 'prompts', path: '/v1/org/categories/{category_id}/prompts' },
    'prompts: required and optional params',
    async () => {
      const category = await client.organizations.categories.prompts('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        limit: 10000,
        cursor: 'cursor',
        order_by: 'created_at',
        order_dir: 'desc',
        analysis_type: ['visibility'],
        prompt_type: ['visibility'],
        status: ['active'],
        topic_id: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        tag_id: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        region_id: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        platform_id: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        persona_id: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
      });
    },
  );
  smokeCase(
    'organizations.categories.assets:single',
    { operation: 'assets', path: '/v1/org/categories/{category_id}/assets' },
    'assets',
    async () => {
      const category = await client.organizations.categories.assets('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  );
  smokeCase(
    'organizations.categories.getCategoryPersonas:single',
    { operation: 'getCategoryPersonas', path: '/v1/org/categories/{category_id}/personas' },
    'getCategoryPersonas',
    async () => {
      const category = await client.organizations.categories.getCategoryPersonas(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      );
    },
  );
  smokeCase(
    'organizations.categories.createPrompts:single',
    { operation: 'createPrompts', path: '/v1/org/categories/{category_id}/prompts' },
    'createPrompts',
    async () => {
      const category = await client.organizations.categories.createPrompts(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          prompts: [
            {
              prompt: 'x',
              topic: {},
              language: '',
              tags: [],
              regions: [{}],
              platforms: [{}],
              personas: [],
            },
          ],
          dry_run: false,
        },
      );
    },
  );
  smokeCase(
    'organizations.categories.updatePrompts:single',
    { operation: 'updatePrompts', path: '/v1/org/categories/{category_id}/prompts' },
    'updatePrompts',
    async () => {
      const category = await client.organizations.categories.updatePrompts(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          prompts: [
            {
              id: '',
            },
          ],
          dry_run: false,
        },
      );
    },
  );
  smokeCase(
    'organizations.categories.updatePromptStatus:single',
    { operation: 'updatePromptStatus', path: '/v1/org/categories/{category_id}/prompts/status' },
    'updatePromptStatus',
    async () => {
      const category = await client.organizations.categories.updatePromptStatus(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          prompt_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
          status: 'active',
          dry_run: false,
        },
      );
    },
  );
  smokeCase(
    'organizations.categories.retrieveRegions:single',
    { operation: 'retrieveRegions', path: '/v1/org/categories/{category_id}/regions' },
    'retrieveRegions',
    async () => {
      const category = await client.organizations.categories.retrieveRegions(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      );
    },
  );
  smokeCase(
    'organizations.categories.getCitationCategories:single',
    { operation: 'getCitationCategories', path: '/v1/org/categories/{category_id}/citation-categories' },
    'getCitationCategories',
    async () => {
      const category = await client.organizations.categories.getCitationCategories(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      );
    },
  );
});

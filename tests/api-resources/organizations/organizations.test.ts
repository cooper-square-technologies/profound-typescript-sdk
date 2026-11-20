// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource organizations', () => {
  smokeCase(
    'organizations.regions:required',
    { operation: 'regions', path: '/v1/org/regions' },
    'regions: only required params',
    async () => {
      const organization = await client.organizations.regions();
    },
  );
  smokeCase(
    'organizations.regions:all',
    { operation: 'regions', path: '/v1/org/regions' },
    'regions: required and optional params',
    async () => {
      const organization = await client.organizations.regions({
        organization_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
      });
    },
  );
  smokeCase(
    'organizations.models:single',
    { operation: 'models', path: '/v1/org/models' },
    'models',
    async () => {
      const organization = await client.organizations.models();
    },
  );
  smokeCase(
    'organizations.domains:required',
    { operation: 'domains', path: '/v1/org/domains' },
    'domains: only required params',
    async () => {
      const organization = await client.organizations.domains();
    },
  );
  smokeCase(
    'organizations.domains:all',
    { operation: 'domains', path: '/v1/org/domains' },
    'domains: required and optional params',
    async () => {
      const organization = await client.organizations.domains({
        organization_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
      });
    },
  );
  smokeCase(
    'organizations.listAssets:required',
    { operation: 'listAssets', path: '/v1/org/assets' },
    'listAssets: only required params',
    async () => {
      const organization = await client.organizations.listAssets();
    },
  );
  smokeCase(
    'organizations.listAssets:all',
    { operation: 'listAssets', path: '/v1/org/assets' },
    'listAssets: required and optional params',
    async () => {
      const organization = await client.organizations.listAssets({
        organization_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
      });
    },
  );
  smokeCase(
    'organizations.getPersonas:required',
    { operation: 'getPersonas', path: '/v1/org/personas' },
    'getPersonas: only required params',
    async () => {
      const organization = await client.organizations.getPersonas();
    },
  );
  smokeCase(
    'organizations.getPersonas:all',
    { operation: 'getPersonas', path: '/v1/org/personas' },
    'getPersonas: required and optional params',
    async () => {
      const organization = await client.organizations.getPersonas({
        organization_ids: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
      });
    },
  );
  smokeCase('organizations.list:single', { operation: 'list', path: '/v1/org' }, 'list', async () => {
    const organization = await client.organizations.list();
  });
});

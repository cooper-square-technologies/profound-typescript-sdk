// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource projects', () => {
  smokeCase(
    'projects.list:required',
    { operation: 'list', path: '/v1/projects' },
    'list: only required params',
    async () => {
      const project = await client.projects.list({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 100,
        offset: 0,
      });
    },
  );
  smokeCase(
    'projects.list:all',
    { operation: 'list', path: '/v1/projects' },
    'list: required and optional params',
    async () => {
      const project = await client.projects.list({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        status: 'status',
        limit: 100,
        offset: 0,
      });
    },
  );
  smokeCase('projects.create:single', { operation: 'create', path: '/v1/projects' }, 'create', async () => {
    const response = await client.projects.create();
  });
  smokeCase(
    'projects.retrieve:single',
    { operation: 'retrieve', path: '/v1/projects/{project_id}' },
    'retrieve',
    async () => {
      const project = await client.projects.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  );
  smokeCase(
    'projects.delete:single',
    { operation: 'delete', path: '/v1/projects/{project_id}' },
    'delete',
    async () => {
      await client.projects.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  );
  smokeCase(
    'projects.getStatus:single',
    { operation: 'getStatus', path: '/v1/projects/{project_id}/status' },
    'getStatus',
    async () => {
      const project = await client.projects.getStatus('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  );
  smokeCase(
    'projects.archive:required',
    { operation: 'archive', path: '/v1/projects/{project_id}/archive' },
    'archive: only required params',
    async () => {
      const project = await client.projects.archive('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  );
  smokeCase(
    'projects.archive:all',
    { operation: 'archive', path: '/v1/projects/{project_id}/archive' },
    'archive: required and optional params',
    async () => {
      const project = await client.projects.archive('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        reason: 'x',
      });
    },
  );
  smokeCase(
    'projects.unarchive:single',
    { operation: 'unarchive', path: '/v1/projects/{project_id}/unarchive' },
    'unarchive',
    async () => {
      const project = await client.projects.unarchive('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  );
});

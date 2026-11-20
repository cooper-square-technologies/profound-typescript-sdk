// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource tasks', () => {
  smokeCase(
    'projects.tasks.list:single',
    { operation: 'list', path: '/v1/projects/{project_id}/tasks' },
    'list',
    async () => {
      const task = await client.projects.tasks.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  );
  smokeCase(
    'projects.tasks.create:required',
    { operation: 'create', path: '/v1/projects/{project_id}/tasks' },
    'create: only required params',
    async () => {
      const task = await client.projects.tasks.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        title: 'x',
      });
    },
  );
  smokeCase(
    'projects.tasks.create:all',
    { operation: 'create', path: '/v1/projects/{project_id}/tasks' },
    'create: required and optional params',
    async () => {
      const task = await client.projects.tasks.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        title: 'x',
        summary: 'x',
        brief: 'x',
        type: 'x',
        topic: 'x',
        impact: 1,
        reference_url: 'x',
        reference_label: 'x',
        position: 0,
      });
    },
  );
  smokeCase(
    'projects.tasks.retrieve:single',
    { operation: 'retrieve', path: '/v1/projects/{project_id}/tasks/{task_id}' },
    'retrieve',
    async () => {
      const task = await client.projects.tasks.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        project_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  );
  smokeCase(
    'projects.tasks.update:required',
    { operation: 'update', path: '/v1/projects/{project_id}/tasks/{task_id}' },
    'update: only required params',
    async () => {
      const task = await client.projects.tasks.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        project_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  );
  smokeCase(
    'projects.tasks.update:all',
    { operation: 'update', path: '/v1/projects/{project_id}/tasks/{task_id}' },
    'update: required and optional params',
    async () => {
      const task = await client.projects.tasks.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        project_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        title: 'x',
        summary: 'x',
        brief: 'x',
        type: 'x',
        topic: 'x',
        impact: 1,
        reference_url: 'x',
        reference_label: 'x',
      });
    },
  );
  smokeCase(
    'projects.tasks.delete:single',
    { operation: 'delete', path: '/v1/projects/{project_id}/tasks/{task_id}' },
    'delete',
    async () => {
      await client.projects.tasks.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        project_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  );
  smokeCase(
    'projects.tasks.updateStatus:required',
    { operation: 'updateStatus', path: '/v1/projects/{project_id}/tasks/{task_id}/status' },
    'updateStatus: only required params',
    async () => {
      const task = await client.projects.tasks.updateStatus('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        project_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        status: 'not_started',
      });
    },
  );
  smokeCase(
    'projects.tasks.updateStatus:all',
    { operation: 'updateStatus', path: '/v1/projects/{project_id}/tasks/{task_id}/status' },
    'updateStatus: required and optional params',
    async () => {
      const task = await client.projects.tasks.updateStatus('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        project_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        status: 'not_started',
        note: 'x',
      });
    },
  );
});

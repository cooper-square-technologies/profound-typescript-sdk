// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource generations', () => {
  smokeCase(
    'projects.generations.list:single',
    { operation: 'list', path: '/v1/projects/generations' },
    'list',
    async () => {
      const response = await client.projects.generations.list();
    },
  );
  smokeCase(
    'projects.generations.retrieve:single',
    { operation: 'retrieve', path: '/v1/projects/generations/{run_id}' },
    'retrieve',
    async () => {
      const response = await client.projects.generations.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  );
});

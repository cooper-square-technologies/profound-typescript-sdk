// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource optimization', () => {
  smokeCase(
    'content.optimization.list:single',
    { operation: 'list', path: '/v1/content/{asset_id}/optimization' },
    'list',
    async () => {
      const optimization = await client.content.optimization.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        limit: 10000,
        offset: 0,
      });
    },
  );
  smokeCase(
    'content.optimization.retrieve:single',
    { operation: 'retrieve', path: '/v1/content/{asset_id}/optimization/{content_id}' },
    'retrieve',
    async () => {
      const optimization = await client.content.optimization.retrieve(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          asset_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        },
      );
    },
  );
});

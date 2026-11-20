// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource integrations', () => {
  smokeCase(
    'integrations.list:required',
    { operation: 'list', path: '/v1/integrations' },
    'list: only required params',
    async () => {
      const integration = await client.integrations.list();
    },
  );
  smokeCase(
    'integrations.list:all',
    { operation: 'list', path: '/v1/integrations' },
    'list: required and optional params',
    async () => {
      const integration = await client.integrations.list({
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        provider: 'provider',
        status_filter: 'active',
      });
    },
  );
});

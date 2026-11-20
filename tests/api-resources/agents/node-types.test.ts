// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource nodeTypes', () => {
  smokeCase(
    'agents.nodeTypes.list:single',
    { operation: 'list', path: '/v1/agents/node-types' },
    'list',
    async () => {
      const nodeType = await client.agents.nodeTypes.list();
    },
  );
  smokeCase(
    'agents.nodeTypes.retrieveSchema:single',
    { operation: 'retrieveSchema', path: '/v1/agents/node-types/{node_type}/schema' },
    'retrieveSchema',
    async () => {
      const nodeType = await client.agents.nodeTypes.retrieveSchema('nodeType');
    },
  );
});

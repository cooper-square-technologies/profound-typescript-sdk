// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource agents', () => {
  smokeCase(
    'agents.list:required',
    { operation: 'list', path: '/v1/agents' },
    'list: only required params',
    async () => {
      const agent = await client.agents.list({
        limit: 100,
      });
    },
  );
  smokeCase(
    'agents.list:all',
    { operation: 'list', path: '/v1/agents' },
    'list: required and optional params',
    async () => {
      const agent = await client.agents.list({
        statuses: ['published'],
        limit: 100,
        next_cursor: 'nextCursor',
      });
    },
  );
  smokeCase(
    'agents.retrieve:single',
    { operation: 'retrieve', path: '/v1/agents/{agent_id}' },
    'retrieve',
    async () => {
      const agent = await client.agents.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        version: 'published',
      });
    },
  );
  smokeCase(
    'agents.create:required',
    { operation: 'create', path: '/v1/agents' },
    'create: only required params',
    async () => {
      const agent = await client.agents.create({
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        name: 'x',
      });
    },
  );
  smokeCase(
    'agents.create:all',
    { operation: 'create', path: '/v1/agents' },
    'create: required and optional params',
    async () => {
      const agent = await client.agents.create({
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        name: 'x',
        description: '',
        graph: {},
      });
    },
  );
  smokeCase(
    'agents.publish:single',
    { operation: 'publish', path: '/v1/agents/{agent_id}/publish' },
    'publish',
    async () => {
      const agent = await client.agents.publish('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  );
  smokeCase(
    'agents.update:single',
    { operation: 'update', path: '/v1/agents/{agent_id}' },
    'update',
    async () => {
      const agent = await client.agents.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        graph: {},
      });
    },
  );
  smokeCase(
    'agents.retrieveGraph:single',
    { operation: 'retrieveGraph', path: '/v1/agents/{agent_id}/graph' },
    'retrieveGraph',
    async () => {
      const agent = await client.agents.retrieveGraph('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        version: 'published',
      });
    },
  );
});

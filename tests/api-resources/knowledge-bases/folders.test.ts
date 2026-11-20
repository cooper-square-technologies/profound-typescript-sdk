// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource folders', () => {
  smokeCase(
    'knowledgeBases.folders.create:required',
    { operation: 'create', path: '/v1/knowledge-bases/{knowledge_base_id}/folders' },
    'create: only required params',
    async () => {
      const folder = await client.knowledgeBases.folders.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        path: 'x',
      });
    },
  );
  smokeCase(
    'knowledgeBases.folders.create:all',
    { operation: 'create', path: '/v1/knowledge-bases/{knowledge_base_id}/folders' },
    'create: required and optional params',
    async () => {
      const folder = await client.knowledgeBases.folders.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        path: 'x',
      });
    },
  );
  smokeCase(
    'knowledgeBases.folders.delete:required',
    { operation: 'delete', path: '/v1/knowledge-bases/{knowledge_base_id}/folders' },
    'delete: only required params',
    async () => {
      const folder = await client.knowledgeBases.folders.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        path: 'x',
        recursive: false,
      });
    },
  );
  smokeCase(
    'knowledgeBases.folders.delete:all',
    { operation: 'delete', path: '/v1/knowledge-bases/{knowledge_base_id}/folders' },
    'delete: required and optional params',
    async () => {
      const folder = await client.knowledgeBases.folders.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        path: 'x',
        recursive: false,
      });
    },
  );
});

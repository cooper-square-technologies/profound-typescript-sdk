// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource knowledgeBases', () => {
  smokeCase(
    'knowledgeBases.list:required',
    { operation: 'list', path: '/v1/knowledge-bases' },
    'list: only required params',
    async () => {
      const knowledgeBase = await client.knowledgeBases.list();
    },
  );
  smokeCase(
    'knowledgeBases.list:all',
    { operation: 'list', path: '/v1/knowledge-bases' },
    'list: required and optional params',
    async () => {
      const knowledgeBase = await client.knowledgeBases.list({
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  );
  smokeCase(
    'knowledgeBases.search:required',
    { operation: 'search', path: '/v1/knowledge-bases/{knowledge_base_id}/search' },
    'search: only required params',
    async () => {
      const knowledgeBase = await client.knowledgeBases.search('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        query: 'x',
        top_k: 1,
        return_full_page: false,
      });
    },
  );
  smokeCase(
    'knowledgeBases.search:all',
    { operation: 'search', path: '/v1/knowledge-bases/{knowledge_base_id}/search' },
    'search: required and optional params',
    async () => {
      const knowledgeBase = await client.knowledgeBases.search('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        query: 'x',
        top_k: 1,
        return_full_page: false,
        filters: {
          tags: ['x'],
          folders: ['x'],
        },
      });
    },
  );
});

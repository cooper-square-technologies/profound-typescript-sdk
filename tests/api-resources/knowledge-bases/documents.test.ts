// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource documents', () => {
  smokeCase(
    'knowledgeBases.documents.create:required',
    { operation: 'create', path: '/v1/knowledge-bases/{knowledge_base_id}/documents' },
    'create: only required params',
    async () => {
      const document = await client.knowledgeBases.documents.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        name: 'x',
        text: 'x',
      });
    },
  );
  smokeCase(
    'knowledgeBases.documents.create:all',
    { operation: 'create', path: '/v1/knowledge-bases/{knowledge_base_id}/documents' },
    'create: required and optional params',
    async () => {
      const document = await client.knowledgeBases.documents.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        name: 'x',
        text: 'x',
        folder: 'x',
      });
    },
  );
  smokeCase(
    'knowledgeBases.documents.update:required',
    { operation: 'update', path: '/v1/knowledge-bases/{knowledge_base_id}/documents' },
    'update: only required params',
    async () => {
      const document = await client.knowledgeBases.documents.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        name: 'x',
        text: 'x',
      });
    },
  );
  smokeCase(
    'knowledgeBases.documents.update:all',
    { operation: 'update', path: '/v1/knowledge-bases/{knowledge_base_id}/documents' },
    'update: required and optional params',
    async () => {
      const document = await client.knowledgeBases.documents.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        name: 'x',
        text: 'x',
        folder: 'x',
      });
    },
  );
  smokeCase(
    'knowledgeBases.documents.delete:required',
    { operation: 'delete', path: '/v1/knowledge-bases/{knowledge_base_id}/documents' },
    'delete: only required params',
    async () => {
      const document = await client.knowledgeBases.documents.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        name: 'x',
      });
    },
  );
  smokeCase(
    'knowledgeBases.documents.delete:all',
    { operation: 'delete', path: '/v1/knowledge-bases/{knowledge_base_id}/documents' },
    'delete: required and optional params',
    async () => {
      const document = await client.knowledgeBases.documents.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        name: 'x',
      });
    },
  );
});

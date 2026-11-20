// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource documents', () => {
  smokeCase('documents.create:single', { operation: 'create', path: '/v1/documents' }, 'create', async () => {
    const document = await client.documents.create({
      id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      name: 'x',
      content_markdown: 'x',
    });
  });
  smokeCase(
    'documents.list:required',
    { operation: 'list', path: '/v1/documents' },
    'list: only required params',
    async () => {
      const document = await client.documents.list({
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        limit: 20,
      });
    },
  );
  smokeCase(
    'documents.list:all',
    { operation: 'list', path: '/v1/documents' },
    'list: required and optional params',
    async () => {
      const document = await client.documents.list({
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        q: 'q',
        sort: 'sort',
        limit: 20,
        next_cursor: 'nextCursor',
      });
    },
  );
  smokeCase(
    'documents.retrieve:single',
    { operation: 'retrieve', path: '/v1/documents/{document_id}' },
    'retrieve',
    async () => {
      const document = await client.documents.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        include_tabs: true,
        include_comments: true,
        preview: true,
      });
    },
  );
  smokeCase(
    'documents.update:required',
    { operation: 'update', path: '/v1/documents/{document_id}' },
    'update: only required params',
    async () => {
      const document = await client.documents.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  );
  smokeCase(
    'documents.update:all',
    { operation: 'update', path: '/v1/documents/{document_id}' },
    'update: required and optional params',
    async () => {
      const document = await client.documents.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        name: 'x',
        visibility: 'invited_only',
      });
    },
  );
  smokeCase(
    'documents.delete:single',
    { operation: 'delete', path: '/v1/documents/{document_id}' },
    'delete',
    async () => {
      await client.documents.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  );
  smokeCase(
    'documents.replaceContent:single',
    { operation: 'replaceContent', path: '/v1/documents/{document_id}/content' },
    'replaceContent',
    async () => {
      const document = await client.documents.replaceContent('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        content_markdown: '',
        skip_title_sync: false,
      });
    },
  );
});

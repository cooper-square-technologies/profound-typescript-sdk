// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../../smoke-support';

describe.concurrent('resource claims', () => {
  smokeCase(
    'reports.factcheck.claims.queryClaims:required',
    { operation: 'queryClaims', path: '/v2/reports/factcheck/claims' },
    'queryClaims: only required params',
    async () => {
      const claim = await client.reports.factcheck.claims.queryClaims({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
      });
    },
  );
  smokeCase(
    'reports.factcheck.claims.queryClaims:all',
    { operation: 'queryClaims', path: '/v2/reports/factcheck/claims' },
    'queryClaims: required and optional params',
    async () => {
      const claim = await client.reports.factcheck.claims.queryClaims({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        group_by: ['model'],
        filter: {},
        include: ['theme'],
        limit: 1,
        max_results: 1,
        cursor: '',
      });
    },
  );
  smokeCase(
    'reports.factcheck.claims.streamClaims:required',
    { operation: 'streamClaims', path: '/v2/reports/factcheck/claims/stream' },
    'streamClaims: only required params',
    async () => {
      const stream = await client.reports.factcheck.claims.streamClaims({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
      });

      for await (const event of stream) {
        console.log(event);
      }
    },
  );
  smokeCase(
    'reports.factcheck.claims.streamClaims:all',
    { operation: 'streamClaims', path: '/v2/reports/factcheck/claims/stream' },
    'streamClaims: required and optional params',
    async () => {
      const stream = await client.reports.factcheck.claims.streamClaims({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        group_by: ['model'],
        filter: {},
        include: ['theme'],
        limit: 1,
        max_results: 1,
        cursor: '',
      });

      for await (const event of stream) {
        console.log(event);
      }
    },
  );
});

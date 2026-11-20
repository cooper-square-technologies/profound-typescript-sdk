// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../../smoke-support';

describe.concurrent('resource factcheck', () => {
  smokeCase(
    'reports.factcheck.queryScores:required',
    { operation: 'queryScores', path: '/v2/reports/factcheck' },
    'queryScores: only required params',
    async () => {
      const factcheck = await client.reports.factcheck.queryScores({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
      });
    },
  );
  smokeCase(
    'reports.factcheck.queryScores:all',
    { operation: 'queryScores', path: '/v2/reports/factcheck' },
    'queryScores: required and optional params',
    async () => {
      const factcheck = await client.reports.factcheck.queryScores({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        group_by: ['date'],
        filter: {},
        limit: 1,
        max_results: 1,
        cursor: '',
      });
    },
  );
  smokeCase(
    'reports.factcheck.streamScores:required',
    { operation: 'streamScores', path: '/v2/reports/factcheck/stream' },
    'streamScores: only required params',
    async () => {
      const stream = await client.reports.factcheck.streamScores({
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
    'reports.factcheck.streamScores:all',
    { operation: 'streamScores', path: '/v2/reports/factcheck/stream' },
    'streamScores: required and optional params',
    async () => {
      const stream = await client.reports.factcheck.streamScores({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        group_by: ['date'],
        filter: {},
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

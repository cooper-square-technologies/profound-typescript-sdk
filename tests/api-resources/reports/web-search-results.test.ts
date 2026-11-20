// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource webSearchResults', () => {
  smokeCase(
    'reports.webSearchResults.query:required',
    { operation: 'query', path: '/v1/reports/web-search-results' },
    'query: only required params',
    async () => {
      const webSearchResult = await client.reports.webSearchResults.query({
        date_interval: 'day',
        dimensions: [],
        metrics: ['count'],
        order_by: {},
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
      });
    },
  );
  smokeCase(
    'reports.webSearchResults.query:all',
    { operation: 'query', path: '/v1/reports/web-search-results' },
    'query: required and optional params',
    async () => {
      const webSearchResult = await client.reports.webSearchResults.query({
        date_interval: 'day',
        dimensions: [],
        metrics: ['count'],
        order_by: {},
        pagination: {
          limit: 10000,
          offset: 0,
        },
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
        filters: [
          {
            field: 'hostname',
            operator: 'is',
            value: '',
          },
        ],
      });
    },
  );
  smokeCase(
    'reports.webSearchResults.stream:required',
    { operation: 'stream', path: '/v1/reports/web-search-results/stream' },
    'stream: only required params',
    async () => {
      const stream = await client.reports.webSearchResults.stream({
        date_interval: 'day',
        dimensions: [],
        metrics: ['count'],
        order_by: {},
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
      });

      for await (const event of stream) {
        console.log(event);
      }
    },
  );
  smokeCase(
    'reports.webSearchResults.stream:all',
    { operation: 'stream', path: '/v1/reports/web-search-results/stream' },
    'stream: required and optional params',
    async () => {
      const stream = await client.reports.webSearchResults.stream({
        date_interval: 'day',
        dimensions: [],
        metrics: ['count'],
        order_by: {},
        pagination: {
          limit: 10000,
          offset: 0,
        },
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
        filters: [
          {
            field: 'hostname',
            operator: 'is',
            value: '',
          },
        ],
      });

      for await (const event of stream) {
        console.log(event);
      }
    },
  );
});

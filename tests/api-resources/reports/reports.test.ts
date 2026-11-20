// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource reports', () => {
  smokeCase(
    'reports.citations:required',
    { operation: 'citations', path: '/v1/reports/citations' },
    'citations: only required params',
    async () => {
      const report = await client.reports.citations({
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
    'reports.citations:all',
    { operation: 'citations', path: '/v1/reports/citations' },
    'citations: required and optional params',
    async () => {
      const report = await client.reports.citations({
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
    'reports.visibility:required',
    { operation: 'visibility', path: '/v1/reports/visibility' },
    'visibility: only required params',
    async () => {
      const report = await client.reports.visibility({
        date_interval: 'day',
        dimensions: [],
        metrics: ['share_of_voice'],
        order_by: {},
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
      });
    },
  );
  smokeCase(
    'reports.visibility:all',
    { operation: 'visibility', path: '/v1/reports/visibility' },
    'visibility: required and optional params',
    async () => {
      const report = await client.reports.visibility({
        date_interval: 'day',
        dimensions: [],
        metrics: ['share_of_voice'],
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
            field: 'region_id',
            operator: 'is',
            value: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
          },
        ],
      });
    },
  );
  smokeCase(
    'reports.sentiment:required',
    { operation: 'sentiment', path: '/v1/reports/sentiment' },
    'sentiment: only required params',
    async () => {
      const report = await client.reports.sentiment({
        date_interval: 'day',
        dimensions: [],
        metrics: ['positive'],
        order_by: {},
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
      });
    },
  );
  smokeCase(
    'reports.sentiment:all',
    { operation: 'sentiment', path: '/v1/reports/sentiment' },
    'sentiment: required and optional params',
    async () => {
      const report = await client.reports.sentiment({
        date_interval: 'day',
        dimensions: [],
        metrics: ['positive'],
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
            field: 'asset_id',
            operator: 'is',
            value: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
          },
        ],
      });
    },
  );
  smokeCase(
    'reports.sentimentV2:required',
    { operation: 'sentimentV2', path: '/v1/reports/sentiment-v2' },
    'sentimentV2: only required params',
    async () => {
      const report = await client.reports.sentimentV2({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        asset_name: '',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
        date_bucket: 'day',
        metrics: ['sentiment'],
      });
    },
  );
  smokeCase(
    'reports.sentimentV2:all',
    { operation: 'sentimentV2', path: '/v1/reports/sentiment-v2' },
    'sentimentV2: required and optional params',
    async () => {
      const report = await client.reports.sentimentV2({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        asset_name: '',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
        comparison_start_date: '2024-01-01T00:00:00.000Z',
        comparison_end_date: '2024-01-01T00:00:00.000Z',
        date_bucket: 'day',
        dimensions: ['date'],
        metrics: ['sentiment'],
        filters: [
          {
            field: 'model_id',
            operator: 'is',
            value: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
          },
        ],
        order_by: { occurrence: 'desc' },
        pagination: {
          limit: 10000,
          offset: 0,
        },
      });
    },
  );
  smokeCase(
    'reports.getReferralsReport:required',
    { operation: 'getReferralsReport', path: '/v1/reports/referrals' },
    'getReferralsReport: only required params',
    async () => {
      const report = await client.reports.getReferralsReport({
        date_interval: 'day',
        dimensions: [],
        metrics: ['visits'],
        order_by: {},
        domain: '',
        start_date: '2024-01-01T00:00:00.000Z',
      });
    },
  );
  smokeCase(
    'reports.getReferralsReport:all',
    { operation: 'getReferralsReport', path: '/v1/reports/referrals' },
    'getReferralsReport: required and optional params',
    async () => {
      const report = await client.reports.getReferralsReport({
        date_interval: 'day',
        dimensions: [],
        metrics: ['visits'],
        order_by: {},
        pagination: {
          limit: 10000,
          offset: 0,
        },
        domain: '',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        metric_filters: [
          {
            field: '',
            operator: '>',
            value: 0,
          },
        ],
        filters: [
          {
            field: 'path',
            operator: 'is',
            value: '',
          },
        ],
      });
    },
  );
  smokeCase(
    'reports.getBotsReport:required',
    { operation: 'getBotsReport', path: '/v1/reports/bots' },
    'getBotsReport: only required params',
    async () => {
      const report = await client.reports.getBotsReport({
        date_interval: 'day',
        dimensions: [],
        metrics: ['count'],
        order_by: {},
        domain: '',
        start_date: '2024-01-01T00:00:00.000Z',
      });
    },
  );
  smokeCase(
    'reports.getBotsReport:all',
    { operation: 'getBotsReport', path: '/v1/reports/bots' },
    'getBotsReport: required and optional params',
    async () => {
      const report = await client.reports.getBotsReport({
        date_interval: 'day',
        dimensions: [],
        metrics: ['count'],
        order_by: {},
        pagination: {
          limit: 10000,
          offset: 0,
        },
        domain: '',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        metric_filters: [
          {
            field: '',
            operator: '>',
            value: 0,
          },
        ],
        filters: [
          {
            field: 'path',
            operator: 'is',
            value: '',
          },
        ],
      });
    },
  );
  smokeCase(
    'reports.queryFanouts:required',
    { operation: 'queryFanouts', path: '/v1/reports/query-fanouts' },
    'queryFanouts: only required params',
    async () => {
      const report = await client.reports.queryFanouts({
        date_interval: 'day',
        dimensions: [],
        metrics: ['fanouts_per_execution'],
        order_by: {},
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
      });
    },
  );
  smokeCase(
    'reports.queryFanouts:all',
    { operation: 'queryFanouts', path: '/v1/reports/query-fanouts' },
    'queryFanouts: required and optional params',
    async () => {
      const report = await client.reports.queryFanouts({
        date_interval: 'day',
        dimensions: [],
        metrics: ['fanouts_per_execution'],
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
            field: 'region_id',
            operator: 'is',
            value: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
          },
        ],
      });
    },
  );
  smokeCase(
    'reports.streamCitations:required',
    { operation: 'streamCitations', path: '/v1/reports/citations/stream' },
    'streamCitations: only required params',
    async () => {
      const stream = await client.reports.streamCitations({
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
    'reports.streamCitations:all',
    { operation: 'streamCitations', path: '/v1/reports/citations/stream' },
    'streamCitations: required and optional params',
    async () => {
      const stream = await client.reports.streamCitations({
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
  smokeCase(
    'reports.streamVisibility:required',
    { operation: 'streamVisibility', path: '/v1/reports/visibility/stream' },
    'streamVisibility: only required params',
    async () => {
      const stream = await client.reports.streamVisibility({
        date_interval: 'day',
        dimensions: [],
        metrics: ['share_of_voice'],
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
    'reports.streamVisibility:all',
    { operation: 'streamVisibility', path: '/v1/reports/visibility/stream' },
    'streamVisibility: required and optional params',
    async () => {
      const stream = await client.reports.streamVisibility({
        date_interval: 'day',
        dimensions: [],
        metrics: ['share_of_voice'],
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
            field: 'region_id',
            operator: 'is',
            value: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
          },
        ],
      });

      for await (const event of stream) {
        console.log(event);
      }
    },
  );
  smokeCase(
    'reports.streamSentiment:required',
    { operation: 'streamSentiment', path: '/v1/reports/sentiment/stream' },
    'streamSentiment: only required params',
    async () => {
      const stream = await client.reports.streamSentiment({
        date_interval: 'day',
        dimensions: [],
        metrics: ['positive'],
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
    'reports.streamSentiment:all',
    { operation: 'streamSentiment', path: '/v1/reports/sentiment/stream' },
    'streamSentiment: required and optional params',
    async () => {
      const stream = await client.reports.streamSentiment({
        date_interval: 'day',
        dimensions: [],
        metrics: ['positive'],
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
            field: 'asset_id',
            operator: 'is',
            value: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
          },
        ],
      });

      for await (const event of stream) {
        console.log(event);
      }
    },
  );
  smokeCase(
    'reports.streamCitationsV2:required',
    { operation: 'streamCitationsV2', path: '/v2/reports/citations/stream' },
    'streamCitationsV2: only required params',
    async () => {
      const stream = await client.reports.streamCitationsV2({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        entity: 'domain',
        interval: 'day',
        scope: 'all',
      });

      for await (const event of stream) {
        console.log(event);
      }
    },
  );
  smokeCase(
    'reports.streamCitationsV2:all',
    { operation: 'streamCitationsV2', path: '/v2/reports/citations/stream' },
    'streamCitationsV2: required and optional params',
    async () => {
      const stream = await client.reports.streamCitationsV2({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        entity: 'domain',
        group_by: ['page'],
        metrics: ['count'],
        interval: 'day',
        scope: 'all',
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
  smokeCase(
    'reports.streamVisibilityV2:required',
    { operation: 'streamVisibilityV2', path: '/v2/reports/visibility/stream' },
    'streamVisibilityV2: only required params',
    async () => {
      const stream = await client.reports.streamVisibilityV2({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        interval: 'day',
        scope: 'owned',
      });

      for await (const event of stream) {
        console.log(event);
      }
    },
  );
  smokeCase(
    'reports.streamVisibilityV2:all',
    { operation: 'streamVisibilityV2', path: '/v2/reports/visibility/stream' },
    'streamVisibilityV2: required and optional params',
    async () => {
      const stream = await client.reports.streamVisibilityV2({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        group_by: ['date'],
        metrics: ['visibility_score'],
        interval: 'day',
        scope: 'owned',
        assets: '',
        filter: {},
        sort: {
          field: 'visibility_score',
        },
        limit: 1,
        max_results: 1,
        cursor: '',
      });

      for await (const event of stream) {
        console.log(event);
      }
    },
  );
  smokeCase(
    'reports.streamSentimentV2:required',
    { operation: 'streamSentimentV2', path: '/v2/reports/sentiment/stream' },
    'streamSentimentV2: only required params',
    async () => {
      const stream = await client.reports.streamSentimentV2({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        asset: '',
        start_date: '',
        end_date: '',
        source: 'response',
        interval: 'day',
        include_cited_websites: false,
      });

      for await (const event of stream) {
        console.log(event);
      }
    },
  );
  smokeCase(
    'reports.streamSentimentV2:all',
    { operation: 'streamSentimentV2', path: '/v2/reports/sentiment/stream' },
    'streamSentimentV2: required and optional params',
    async () => {
      const stream = await client.reports.streamSentimentV2({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        asset: '',
        start_date: '',
        end_date: '',
        comparison_start_date: '',
        comparison_end_date: '',
        source: 'response',
        group_by: ['date'],
        metrics: ['positive_sentiment'],
        interval: 'day',
        filter: {},
        sort: {
          field: 'positive_sentiment',
          dir: 'desc',
        },
        include_cited_websites: false,
        limit: 1,
        max_results: 1,
        cursor: '',
      });

      for await (const event of stream) {
        console.log(event);
      }
    },
  );
  smokeCase(
    'reports.streamQueryFanouts:required',
    { operation: 'streamQueryFanouts', path: '/v2/reports/query-fanouts/stream' },
    'streamQueryFanouts: only required params',
    async () => {
      const stream = await client.reports.streamQueryFanouts({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        interval: 'day',
      });

      for await (const event of stream) {
        console.log(event);
      }
    },
  );
  smokeCase(
    'reports.streamQueryFanouts:all',
    { operation: 'streamQueryFanouts', path: '/v2/reports/query-fanouts/stream' },
    'streamQueryFanouts: required and optional params',
    async () => {
      const stream = await client.reports.streamQueryFanouts({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        group_by: ['date'],
        metrics: ['fanouts_per_execution'],
        interval: 'day',
        filter: {},
        sort: {
          field: '',
          dir: 'desc',
        },
        limit: 1,
        max_results: 1,
        cursor: '',
      });

      for await (const event of stream) {
        console.log(event);
      }
    },
  );
  smokeCase(
    'reports.getReferralsReportV2:required',
    { operation: 'getReferralsReportV2', path: '/v2/reports/referrals' },
    'getReferralsReportV2: only required params',
    async () => {
      const report = await client.reports.getReferralsReportV2({
        date_interval: 'day',
        dimensions: [],
        metrics: ['visits'],
        order_by: {},
        domain: '',
        start_date: '2024-01-01T00:00:00.000Z',
        timezone: 'UTC',
      });
    },
  );
  smokeCase(
    'reports.getReferralsReportV2:all',
    { operation: 'getReferralsReportV2', path: '/v2/reports/referrals' },
    'getReferralsReportV2: required and optional params',
    async () => {
      const report = await client.reports.getReferralsReportV2({
        date_interval: 'day',
        dimensions: [],
        metrics: ['visits'],
        order_by: {},
        pagination: {
          limit: 10000,
          offset: 0,
        },
        domain: '',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        timezone: 'UTC',
        view_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        metric_filters: [
          {
            field: '',
            operator: '>',
            value: 0,
          },
        ],
        filters: [
          {
            field: 'path',
            operator: 'is',
            value: '',
          },
        ],
      });
    },
  );
  smokeCase(
    'reports.getBotsReportV2:required',
    { operation: 'getBotsReportV2', path: '/v2/reports/bots' },
    'getBotsReportV2: only required params',
    async () => {
      const report = await client.reports.getBotsReportV2({
        date_interval: 'day',
        dimensions: [],
        metrics: ['count'],
        order_by: {},
        domain: '',
        start_date: '2024-01-01T00:00:00.000Z',
        timezone: 'UTC',
      });
    },
  );
  smokeCase(
    'reports.getBotsReportV2:all',
    { operation: 'getBotsReportV2', path: '/v2/reports/bots' },
    'getBotsReportV2: required and optional params',
    async () => {
      const report = await client.reports.getBotsReportV2({
        date_interval: 'day',
        dimensions: [],
        metrics: ['count'],
        order_by: {},
        pagination: {
          limit: 10000,
          offset: 0,
        },
        domain: '',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        timezone: 'UTC',
        view_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        metric_filters: [
          {
            field: '',
            operator: '>',
            value: 0,
          },
        ],
        filters: [
          {
            field: 'path',
            operator: 'is',
            value: '',
          },
        ],
        domain_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        tags: [''],
      });
    },
  );
  smokeCase(
    'reports.queryVisibility:required',
    { operation: 'queryVisibility', path: '/v2/reports/visibility' },
    'queryVisibility: only required params',
    async () => {
      const report = await client.reports.queryVisibility({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        interval: 'day',
        scope: 'owned',
      });
    },
  );
  smokeCase(
    'reports.queryVisibility:all',
    { operation: 'queryVisibility', path: '/v2/reports/visibility' },
    'queryVisibility: required and optional params',
    async () => {
      const report = await client.reports.queryVisibility({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        group_by: ['date'],
        metrics: ['visibility_score'],
        interval: 'day',
        scope: 'owned',
        assets: '',
        filter: {},
        sort: {
          field: 'visibility_score',
        },
        limit: 1,
        max_results: 1,
        cursor: '',
      });
    },
  );
  smokeCase(
    'reports.queryCitations:required',
    { operation: 'queryCitations', path: '/v2/reports/citations' },
    'queryCitations: only required params',
    async () => {
      const report = await client.reports.queryCitations({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        entity: 'domain',
        interval: 'day',
        scope: 'all',
      });
    },
  );
  smokeCase(
    'reports.queryCitations:all',
    { operation: 'queryCitations', path: '/v2/reports/citations' },
    'queryCitations: required and optional params',
    async () => {
      const report = await client.reports.queryCitations({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        entity: 'domain',
        group_by: ['page'],
        metrics: ['count'],
        interval: 'day',
        scope: 'all',
        filter: {},
        limit: 1,
        max_results: 1,
        cursor: '',
      });
    },
  );
  smokeCase(
    'reports.querySentiment:required',
    { operation: 'querySentiment', path: '/v2/reports/sentiment' },
    'querySentiment: only required params',
    async () => {
      const report = await client.reports.querySentiment({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        asset: '',
        start_date: '',
        end_date: '',
        source: 'response',
        interval: 'day',
        include_cited_websites: false,
      });
    },
  );
  smokeCase(
    'reports.querySentiment:all',
    { operation: 'querySentiment', path: '/v2/reports/sentiment' },
    'querySentiment: required and optional params',
    async () => {
      const report = await client.reports.querySentiment({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        asset: '',
        start_date: '',
        end_date: '',
        comparison_start_date: '',
        comparison_end_date: '',
        source: 'response',
        group_by: ['date'],
        metrics: ['positive_sentiment'],
        interval: 'day',
        filter: {},
        sort: {
          field: 'positive_sentiment',
          dir: 'desc',
        },
        include_cited_websites: false,
        limit: 1,
        max_results: 1,
        cursor: '',
      });
    },
  );
  smokeCase(
    'reports.queryQueryFanouts:required',
    { operation: 'queryQueryFanouts', path: '/v2/reports/query-fanouts' },
    'queryQueryFanouts: only required params',
    async () => {
      const report = await client.reports.queryQueryFanouts({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        interval: 'day',
      });
    },
  );
  smokeCase(
    'reports.queryQueryFanouts:all',
    { operation: 'queryQueryFanouts', path: '/v2/reports/query-fanouts' },
    'queryQueryFanouts: required and optional params',
    async () => {
      const report = await client.reports.queryQueryFanouts({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        group_by: ['date'],
        metrics: ['fanouts_per_execution'],
        interval: 'day',
        filter: {},
        sort: {
          field: '',
          dir: 'desc',
        },
        limit: 1,
        max_results: 1,
        cursor: '',
      });
    },
  );
});

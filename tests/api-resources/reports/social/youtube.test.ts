// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../../smoke-support';

describe.concurrent('resource youtube', () => {
  smokeCase(
    'reports.social.youtube.getChannels:required',
    { operation: 'getChannels', path: '/v2/reports/social/youtube/channels' },
    'getChannels: only required params',
    async () => {
      const youtube = await client.reports.social.youtube.getChannels({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
      });
    },
  );
  smokeCase(
    'reports.social.youtube.getChannels:all',
    { operation: 'getChannels', path: '/v2/reports/social/youtube/channels' },
    'getChannels: required and optional params',
    async () => {
      const youtube = await client.reports.social.youtube.getChannels({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        filter: {},
        limit: 1,
        cursor: '',
        source_types: ['video'],
        group_by: ['channel'],
        interval: 'day',
      });
    },
  );
  smokeCase(
    'reports.social.youtube.getVideos:required',
    { operation: 'getVideos', path: '/v2/reports/social/youtube/videos' },
    'getVideos: only required params',
    async () => {
      const youtube = await client.reports.social.youtube.getVideos({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        attribution: 'attributed',
      });
    },
  );
  smokeCase(
    'reports.social.youtube.getVideos:all',
    { operation: 'getVideos', path: '/v2/reports/social/youtube/videos' },
    'getVideos: required and optional params',
    async () => {
      const youtube = await client.reports.social.youtube.getVideos({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        filter: {},
        limit: 1,
        cursor: '',
        source_types: ['video'],
        attribution: 'attributed',
      });
    },
  );
  smokeCase(
    'reports.social.youtube.getSummary:required',
    { operation: 'getSummary', path: '/v2/reports/social/youtube/summary' },
    'getSummary: only required params',
    async () => {
      const youtube = await client.reports.social.youtube.getSummary({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
      });
    },
  );
  smokeCase(
    'reports.social.youtube.getSummary:all',
    { operation: 'getSummary', path: '/v2/reports/social/youtube/summary' },
    'getSummary: required and optional params',
    async () => {
      const youtube = await client.reports.social.youtube.getSummary({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        filter: {},
      });
    },
  );
});

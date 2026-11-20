// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../../smoke-support';

describe.concurrent('resource adAccount', () => {
  smokeCase(
    'ads.openaiAds.adAccount.retrieveInsights:required',
    { operation: 'retrieveInsights', path: '/v1/ads/openai-ads/ad-account/insights' },
    'retrieveInsights: only required params',
    async () => {
      const adAccount = await client.ads.openaiAds.adAccount.retrieveInsights();
    },
  );
  smokeCase(
    'ads.openaiAds.adAccount.retrieveInsights:all',
    { operation: 'retrieveInsights', path: '/v1/ads/openai-ads/ad-account/insights' },
    'retrieveInsights: required and optional params',
    async () => {
      const adAccount = await client.ads.openaiAds.adAccount.retrieveInsights({
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        aggregation_level: 'ad_account',
        time_granularity: 'hourly',
        'time_ranges[]': ['timeRange'],
        limit: 1,
        after: 'after',
        before: 'before',
      });
    },
  );
});

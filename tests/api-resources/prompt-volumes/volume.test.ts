// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource volume', () => {
  smokeCase(
    'promptVolumes.volume.onTheFly:required',
    { operation: 'onTheFly', path: '/v2/prompt-volumes/volume/on-the-fly' },
    'onTheFly: only required params',
    async () => {
      const volume = await client.promptVolumes.volume.onTheFly({
        matching_type: 'exact_match',
        start_date: '2024-01-01',
        end_date: '2024-01-01',
        keyword: 'x',
      });
    },
  );
  smokeCase(
    'promptVolumes.volume.onTheFly:all',
    { operation: 'onTheFly', path: '/v2/prompt-volumes/volume/on-the-fly' },
    'onTheFly: required and optional params',
    async () => {
      const volume = await client.promptVolumes.volume.onTheFly({
        matching_type: 'exact_match',
        start_date: '2024-01-01',
        end_date: '2024-01-01',
        regions: [''],
        platforms: ['chatgpt.com'],
        keyword: 'x',
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  );
});

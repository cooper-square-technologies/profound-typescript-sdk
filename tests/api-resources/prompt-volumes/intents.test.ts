// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource intents', () => {
  smokeCase(
    'promptVolumes.intents.onTheFly:required',
    { operation: 'onTheFly', path: '/v2/prompt-volumes/intents/on-the-fly' },
    'onTheFly: only required params',
    async () => {
      const intent = await client.promptVolumes.intents.onTheFly({
        matching_type: 'exact_match',
        start_date: '2024-01-01',
        end_date: '2024-01-01',
        keyword: 'x',
      });
    },
  );
  smokeCase(
    'promptVolumes.intents.onTheFly:all',
    { operation: 'onTheFly', path: '/v2/prompt-volumes/intents/on-the-fly' },
    'onTheFly: required and optional params',
    async () => {
      const intent = await client.promptVolumes.intents.onTheFly({
        matching_type: 'exact_match',
        start_date: '2024-01-01',
        end_date: '2024-01-01',
        regions: [''],
        platforms: ['chatgpt.com'],
        keyword: 'x',
      });
    },
  );
});

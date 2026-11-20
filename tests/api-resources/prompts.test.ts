// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../smoke-support';

describe.concurrent('resource prompts', () => {
  smokeCase(
    'prompts.answers:required',
    { operation: 'answers', path: '/v1/prompts/answers' },
    'answers: only required params',
    async () => {
      const prompt = await client.prompts.answers({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
      });
    },
  );
  smokeCase(
    'prompts.answers:all',
    { operation: 'answers', path: '/v1/prompts/answers' },
    'answers: required and optional params',
    async () => {
      const prompt = await client.prompts.answers({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-01T00:00:00.000Z',
        pagination: {
          limit: 10000,
          offset: 0,
        },
        filters: [
          {
            field: 'region_id',
            operator: 'is',
            value: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
          },
        ],
        include: {
          run_id: false,
          created_at: true,
          prompt: true,
          prompt_id: false,
          mentions: true,
          analysis_types: false,
          prompt_type: true,
          response: true,
          citations: true,
          citation_details: false,
          web_search_results: false,
          search_triggered: false,
          themes: true,
          sentiment_themes: false,
          topic: true,
          topic_id: false,
          region: true,
          model: true,
          model_id: true,
          asset: true,
          asset_id: false,
          tags: false,
          search_queries: false,
          persona: false,
        },
      });
    },
  );
  smokeCase(
    'prompts.answersV2:required',
    { operation: 'answersV2', path: '/v2/prompts/answers' },
    'answersV2: only required params',
    async () => {
      const prompt = await client.prompts.answersV2({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
      });
    },
  );
  smokeCase(
    'prompts.answersV2:all',
    { operation: 'answersV2', path: '/v2/prompts/answers' },
    'answersV2: required and optional params',
    async () => {
      const prompt = await client.prompts.answersV2({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        include: ['run_id'],
        filter: {},
        limit: 1,
        max_results: 1,
        cursor: '',
      });
    },
  );
  smokeCase(
    'prompts.streamAnswersV2:required',
    { operation: 'streamAnswersV2', path: '/v2/prompts/answers/stream' },
    'streamAnswersV2: only required params',
    async () => {
      const stream = await client.prompts.streamAnswersV2({
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
    'prompts.streamAnswersV2:all',
    { operation: 'streamAnswersV2', path: '/v2/prompts/answers/stream' },
    'streamAnswersV2: required and optional params',
    async () => {
      const stream = await client.prompts.streamAnswersV2({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        include: ['run_id'],
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

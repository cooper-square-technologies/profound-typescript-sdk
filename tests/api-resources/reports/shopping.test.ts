// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke tests for one resource; see smoke-support.ts for how to run them.
import { describe } from 'vitest';

import { client, smokeCase } from '../../smoke-support';

describe.concurrent('resource shopping', () => {
  smokeCase(
    'reports.shopping.brands:required',
    { operation: 'brands', path: '/v2/reports/shopping/brands' },
    'brands: only required params',
    async () => {
      const shopping = await client.reports.shopping.brands({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        interval: 'day',
        scope: 'owned',
      });
    },
  );
  smokeCase(
    'reports.shopping.brands:all',
    { operation: 'brands', path: '/v2/reports/shopping/brands' },
    'brands: required and optional params',
    async () => {
      const shopping = await client.reports.shopping.brands({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        group_by: ['date'],
        metrics: ['visibility_score'],
        interval: 'day',
        scope: 'owned',
        assets: '',
        filter: {},
        limit: 1,
        max_results: 1,
        cursor: '',
      });
    },
  );
  smokeCase(
    'reports.shopping.streamBrands:required',
    { operation: 'streamBrands', path: '/v2/reports/shopping/brands/stream' },
    'streamBrands: only required params',
    async () => {
      const stream = await client.reports.shopping.streamBrands({
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
    'reports.shopping.streamBrands:all',
    { operation: 'streamBrands', path: '/v2/reports/shopping/brands/stream' },
    'streamBrands: required and optional params',
    async () => {
      const stream = await client.reports.shopping.streamBrands({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        group_by: ['date'],
        metrics: ['visibility_score'],
        interval: 'day',
        scope: 'owned',
        assets: '',
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
    'reports.shopping.products:required',
    { operation: 'products', path: '/v2/reports/shopping/products' },
    'products: only required params',
    async () => {
      const shopping = await client.reports.shopping.products({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        interval: 'day',
        include_merchants: false,
        competitor_limit: 5,
      });
    },
  );
  smokeCase(
    'reports.shopping.products:all',
    { operation: 'products', path: '/v2/reports/shopping/products' },
    'products: required and optional params',
    async () => {
      const shopping = await client.reports.shopping.products({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        group_by: ['date'],
        metrics: ['visibility_score'],
        interval: 'day',
        include_merchants: false,
        target_product: 'x',
        competitor_limit: 5,
        filter: {},
        limit: 1,
        max_results: 1,
        cursor: '',
      });
    },
  );
  smokeCase(
    'reports.shopping.streamProducts:required',
    { operation: 'streamProducts', path: '/v2/reports/shopping/products/stream' },
    'streamProducts: only required params',
    async () => {
      const stream = await client.reports.shopping.streamProducts({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        interval: 'day',
        include_merchants: false,
        competitor_limit: 5,
      });

      for await (const event of stream) {
        console.log(event);
      }
    },
  );
  smokeCase(
    'reports.shopping.streamProducts:all',
    { operation: 'streamProducts', path: '/v2/reports/shopping/products/stream' },
    'streamProducts: required and optional params',
    async () => {
      const stream = await client.reports.shopping.streamProducts({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        group_by: ['date'],
        metrics: ['visibility_score'],
        interval: 'day',
        include_merchants: false,
        target_product: 'x',
        competitor_limit: 5,
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
    'reports.shopping.merchants:required',
    { operation: 'merchants', path: '/v2/reports/shopping/merchants' },
    'merchants: only required params',
    async () => {
      const shopping = await client.reports.shopping.merchants({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        interval: 'day',
      });
    },
  );
  smokeCase(
    'reports.shopping.merchants:all',
    { operation: 'merchants', path: '/v2/reports/shopping/merchants' },
    'merchants: required and optional params',
    async () => {
      const shopping = await client.reports.shopping.merchants({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        group_by: ['date'],
        metrics: ['merchant_share'],
        interval: 'day',
        filter: {},
        limit: 1,
        max_results: 1,
        cursor: '',
      });
    },
  );
  smokeCase(
    'reports.shopping.streamMerchants:required',
    { operation: 'streamMerchants', path: '/v2/reports/shopping/merchants/stream' },
    'streamMerchants: only required params',
    async () => {
      const stream = await client.reports.shopping.streamMerchants({
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
    'reports.shopping.streamMerchants:all',
    { operation: 'streamMerchants', path: '/v2/reports/shopping/merchants/stream' },
    'streamMerchants: required and optional params',
    async () => {
      const stream = await client.reports.shopping.streamMerchants({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        group_by: ['date'],
        metrics: ['merchant_share'],
        interval: 'day',
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
    'reports.shopping.triggerRate:required',
    { operation: 'triggerRate', path: '/v2/reports/shopping/trigger-rate' },
    'triggerRate: only required params',
    async () => {
      const shopping = await client.reports.shopping.triggerRate({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        interval: 'day',
      });
    },
  );
  smokeCase(
    'reports.shopping.triggerRate:all',
    { operation: 'triggerRate', path: '/v2/reports/shopping/trigger-rate' },
    'triggerRate: required and optional params',
    async () => {
      const shopping = await client.reports.shopping.triggerRate({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        group_by: ['date'],
        metrics: ['total_runs'],
        interval: 'day',
        filter: {},
        limit: 1,
        max_results: 1,
        cursor: '',
      });
    },
  );
  smokeCase(
    'reports.shopping.streamTriggerRate:required',
    { operation: 'streamTriggerRate', path: '/v2/reports/shopping/trigger-rate/stream' },
    'streamTriggerRate: only required params',
    async () => {
      const stream = await client.reports.shopping.streamTriggerRate({
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
    'reports.shopping.streamTriggerRate:all',
    { operation: 'streamTriggerRate', path: '/v2/reports/shopping/trigger-rate/stream' },
    'streamTriggerRate: required and optional params',
    async () => {
      const stream = await client.reports.shopping.streamTriggerRate({
        category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        start_date: '',
        end_date: '',
        group_by: ['date'],
        metrics: ['total_runs'],
        interval: 'day',
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

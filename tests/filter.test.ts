import { test } from 'node:test';
import assert from 'node:assert/strict';
import { filter, Fields } from '../src/lib/filter.ts';
import type { ReportQueryVisibilityParams } from '../src/resources/reports/reports.ts';

test('docs example serializes to the exact JSON tree', () => {
  const tree = filter.and(
    filter.or(filter.equals(Fields.model, 'ChatGPT'), filter.equals(Fields.model, 'Perplexity')),
    filter.not(filter.equals(Fields.region, 'United States')),
  );
  const assignable: ReportQueryVisibilityParams['filter'] = tree;
  assert.ok(assignable);
  assert.deepEqual(JSON.parse(JSON.stringify(tree)), {
    and: [
      {
        or: [
          { field: 'model', op: 'is', value: 'ChatGPT' },
          { field: 'model', op: 'is', value: 'Perplexity' },
        ],
      },
      { not: { field: 'region', op: 'is', value: 'United States' } },
    ],
  });
});

test('mixing prompt and entity layers under or/not throws', () => {
  assert.throws(
    () => filter.or(filter.equals(Fields.model, 'ChatGPT'), filter.equals(Fields.domain, 'example.com')),
    /mix prompt-layer and entity-layer/,
  );
  assert.throws(
    () =>
      filter.not(
        filter.and(filter.equals(Fields.model, 'ChatGPT'), filter.equals(Fields.domain, 'example.com')),
      ),
    /mix prompt-layer and entity-layer/,
  );
});

test('nesting deeper than 3 throws', () => {
  assert.throws(
    () => filter.and(filter.or(filter.not(filter.equals(Fields.model, 'ChatGPT')))),
    /maximum nesting depth of 3/,
  );
});

test('unsupported op on a field is rejected', () => {
  assert.throws(
    // @ts-expect-error theme does not support contains
    () => filter.contains(Fields.theme, 'pricing'),
    /does not support op "contains"/,
  );
  assert.throws(
    // @ts-expect-error model does not support exists
    () => filter.exists(Fields.model),
    /does not support op "exists"/,
  );
});

test('op-specific runtime validations', () => {
  assert.throws(() => filter.in(Fields.model, []), /non-empty list/);
  assert.throws(() => filter.matches(Fields.prompt, 'ab'), /at least 3 characters/);
  assert.deepEqual(filter.exists(Fields.tag), { field: 'tag', op: 'exists' });
});

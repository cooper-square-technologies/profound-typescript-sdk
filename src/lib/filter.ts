import { FIELD_TABLE, MAX_DEPTH } from './filter-table.js';

export { MAX_DEPTH };

export type FieldName = keyof typeof FIELD_TABLE;
export type Op = (typeof FIELD_TABLE)[FieldName]['ops'][number];

type Layer = (typeof FIELD_TABLE)[FieldName]['layer'];

export interface FieldRef<N extends FieldName = FieldName> {
  readonly name: N;
}

export const Fields = Object.fromEntries(Object.keys(FIELD_TABLE).map((name) => [name, { name }])) as {
  readonly [K in FieldName]: FieldRef<K>;
};

type NamesWithOp<O extends Op> = {
  [K in FieldName]: O extends (typeof FIELD_TABLE)[K]['ops'][number] ? K : never;
}[FieldName];

export interface LeafNode {
  field: FieldName;
  op: Op;
  value?: string | string[];
}

export type FilterNode = LeafNode | { and: FilterNode[] } | { or: FilterNode[] } | { not: FilterNode };

function depth(node: FilterNode): number {
  if ('and' in node) return 1 + Math.max(...node.and.map(depth));
  if ('or' in node) return 1 + Math.max(...node.or.map(depth));
  if ('not' in node) return 1 + depth(node.not);
  return 1;
}

function collectLayers(node: FilterNode, acc: Set<Layer>): Set<Layer> {
  if ('and' in node) node.and.forEach((n) => collectLayers(n, acc));
  else if ('or' in node) node.or.forEach((n) => collectLayers(n, acc));
  else if ('not' in node) collectLayers(node.not, acc);
  else acc.add(FIELD_TABLE[node.field].layer);
  return acc;
}

function checkDepth<T extends FilterNode>(node: T): T {
  const d = depth(node);
  if (d > MAX_DEPTH) {
    throw new Error(`Filter tree exceeds the maximum nesting depth of ${MAX_DEPTH} (got ${d})`);
  }
  return node;
}

function checkSingleLayer(node: FilterNode, kind: 'or' | 'not'): void {
  const layers = collectLayers(node, new Set());
  if (layers.size > 1) {
    throw new Error(
      `Cannot mix prompt-layer and entity-layer fields under "${kind}"; combine layers at the top level with "and"`,
    );
  }
}

function leaf(field: FieldRef, op: Op, value?: string | string[]): LeafNode {
  const spec = FIELD_TABLE[field.name];
  if (!spec) throw new Error(`Unknown field: ${String(field?.name ?? field)}`);
  if (!(spec.ops as readonly Op[]).includes(op)) {
    throw new Error(`Field "${field.name}" does not support op "${op}" (allowed: ${spec.ops.join(', ')})`);
  }
  return value === undefined ? { field: field.name, op } : { field: field.name, op, value };
}

function listLeaf(field: FieldRef, op: 'in' | 'not_in', values: string[]): LeafNode {
  if (!Array.isArray(values) || values.length === 0) {
    throw new Error(`"${op}" requires a non-empty list of values`);
  }
  return leaf(field, op, values);
}

export const filter = {
  and(...nodes: FilterNode[]): FilterNode {
    if (nodes.length === 0) throw new Error('"and" requires at least one node');
    return checkDepth({ and: nodes });
  },

  or(...nodes: FilterNode[]): FilterNode {
    if (nodes.length === 0) throw new Error('"or" requires at least one node');
    const node = checkDepth({ or: nodes });
    checkSingleLayer(node, 'or');
    return node;
  },

  not(inner: FilterNode): FilterNode {
    const node = checkDepth({ not: inner });
    checkSingleLayer(node, 'not');
    return node;
  },

  equals(field: FieldRef<NamesWithOp<'is'>>, value: string): LeafNode {
    return leaf(field, 'is', value);
  },

  notEquals(field: FieldRef<NamesWithOp<'not_is'>>, value: string): LeafNode {
    return leaf(field, 'not_is', value);
  },

  in(field: FieldRef<NamesWithOp<'in'>>, values: string[]): LeafNode {
    return listLeaf(field, 'in', values);
  },

  notIn(field: FieldRef<NamesWithOp<'not_in'>>, values: string[]): LeafNode {
    return listLeaf(field, 'not_in', values);
  },

  contains(field: FieldRef<NamesWithOp<'contains'>>, value: string): LeafNode {
    return leaf(field, 'contains', value);
  },

  notContains(field: FieldRef<NamesWithOp<'not_contains'>>, value: string): LeafNode {
    return leaf(field, 'not_contains', value);
  },

  containsInsensitive(field: FieldRef<NamesWithOp<'contains_case_insensitive'>>, value: string): LeafNode {
    return leaf(field, 'contains_case_insensitive', value);
  },

  notContainsInsensitive(
    field: FieldRef<NamesWithOp<'not_contains_case_insensitive'>>,
    value: string,
  ): LeafNode {
    return leaf(field, 'not_contains_case_insensitive', value);
  },

  matches(field: FieldRef<NamesWithOp<'matches'>>, pattern: string): LeafNode {
    if (typeof pattern !== 'string' || pattern.length < 3) {
      throw new Error('"matches" requires a regex pattern of at least 3 characters');
    }
    return leaf(field, 'matches', pattern);
  },

  exists(field: FieldRef<NamesWithOp<'exists'>>): LeafNode {
    return leaf(field, 'exists');
  },
};

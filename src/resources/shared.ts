// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

/**
 * Filter by asset name
 */
export interface AssetNameFilter {
  field: 'asset_name';

  operator:
    | 'is'
    | 'not_is'
    | 'in'
    | 'not_in'
    | 'contains'
    | 'not_contains'
    | 'matches'
    | 'contains_case_insensitive'
    | 'not_contains_case_insensitive';

  value: string | Array<string>;
}

/**
 * Report pagination model.
 */
export interface Pagination {
  /**
   * Maximum number of results to return. Default is 10,000, maximum is 50,000.
   */
  limit?: number;

  /**
   * Offset for the results. Used for pagination.
   */
  offset?: number;
}

/**
 * Filter by request path
 */
export interface PathFilter {
  field: 'path';

  operator:
    | 'is'
    | 'not_is'
    | 'in'
    | 'not_in'
    | 'contains'
    | 'not_contains'
    | 'matches'
    | 'contains_case_insensitive'
    | 'not_contains_case_insensitive';

  value: string | Array<string>;
}

/**
 * Filter by prompt text
 */
export interface PromptFilter {
  field: 'prompt';

  operator:
    | 'is'
    | 'not_is'
    | 'in'
    | 'not_in'
    | 'contains'
    | 'not_contains'
    | 'matches'
    | 'contains_case_insensitive'
    | 'not_contains_case_insensitive';

  value: string | Array<string>;
}

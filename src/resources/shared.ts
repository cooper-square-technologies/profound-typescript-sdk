// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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

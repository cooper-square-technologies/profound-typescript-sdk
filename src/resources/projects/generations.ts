// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';

export class Generations extends APIResource {
  /**
   * List Project Generations
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Successful Response
   *
   * @example
   * ```ts
   * const response = await client.projects.generations.list();
   * ```
   *
   * @deprecated
   */
  list(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/v1/projects/generations', options);
  }

  /**
   * Get Project Generation Status
   *
   * @param {string} runID - Unique project generation run ID.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<unknown>} Successful Response
   *
   * @example
   * ```ts
   * const response = await client.projects.generations.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   *
   * @deprecated
   */
  retrieve(runID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(__scalarPath`/v1/projects/generations/${runID}`, options);
  }
}

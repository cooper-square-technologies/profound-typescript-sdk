// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as Shared from '../shared';

export class Folders extends APIResource {
  /**
   * Create an empty folder at the requested knowledge base path.
   *
   * @param {string} knowledgeBaseID - Unique knowledge base ID.
   * @param {FolderCreateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<FolderCreateResponse>} Successful Response
   *
   * @example
   * ```ts
   * const create = await client.knowledgeBases.folders.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   path: 'x',
   * });
   * ```
   */
  create(
    knowledgeBaseID: string,
    params: FolderCreateParams,
    options?: RequestOptions,
  ): APIPromise<FolderCreateResponse> {
    const { organization_id, ...body } = params;
    return this._client.post(__scalarPath`/v1/knowledge-bases/${knowledgeBaseID}/folders`, {
      body,
      query: { organization_id },
      ...options,
    });
  }

  /**
   * Delete a folder. With recursive=false, non-empty folders return 409 and no contents are deleted.
   *
   * @param {string} knowledgeBaseID - Unique knowledge base ID.
   * @param {FolderDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<FolderDeleteResponse>} Successful Response
   *
   * @example
   * ```ts
   * const delete_ = await client.knowledgeBases.folders.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   path: 'x',
   *   recursive: false,
   * });
   * ```
   */
  delete(
    knowledgeBaseID: string,
    params: FolderDeleteParams,
    options?: RequestOptions,
  ): APIPromise<FolderDeleteResponse> {
    const { organization_id, ...body } = params;
    return this._client.delete(__scalarPath`/v1/knowledge-bases/${knowledgeBaseID}/folders`, {
      body,
      query: { organization_id },
      ...options,
    });
  }
}

export interface FolderCreateParams {
  /**
   * Query param: Organization scope for API keys that can access multiple organizations.
   * @format uuid
   */
  organization_id?: string | null;
  /**
   * Body param: Folder path to create.
   * @minLength 1
   */
  path: string;
}

export interface FolderCreateResponse {
  /**
   * Operation result message.
   */
  message: string;
  /**
   * Folder path.
   */
  path: string;
}

export interface FolderDeleteParams {
  /**
   * Query param: Organization scope for API keys that can access multiple organizations.
   * @format uuid
   */
  organization_id?: string | null;
  /**
   * Body param: Folder path to delete.
   * @minLength 1
   */
  path: string;
  /**
   * Body param: When false, only empty folders are deleted and non-empty folders return a conflict. When true, the folder and all contents are deleted.
   * @default false
   */
  recursive?: boolean;
}

export interface FolderDeleteResponse {
  /**
   * Operation result message.
   */
  message: string;
  /**
   * Folder path.
   */
  path: string;
}
export declare namespace Folders {
  export {
    type FolderCreateResponse as FolderCreateResponse,
    type FolderDeleteResponse as FolderDeleteResponse,
    type FolderCreateParams as FolderCreateParams,
    type FolderDeleteParams as FolderDeleteParams,
  };
}

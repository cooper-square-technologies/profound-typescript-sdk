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
   * @param {FolderCreateV1IDPostParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<FolderCreateV1IDPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const createV1IDPost = await client.knowledgeBases.folders.createV1IDPost(
   *   '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   {
   *     path: 'x',
   *   },
   * );
   * ```
   */
  createV1IDPost(
    knowledgeBaseID: string,
    params: FolderCreateV1IDPostParams,
    options?: RequestOptions,
  ): APIPromise<FolderCreateV1IDPostResponse> {
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
   * @param {FolderDeleteV1IDDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<FolderDeleteV1IDDeleteResponse>} Successful Response
   *
   * @example
   * ```ts
   * const deleteV1IDDelete = await client.knowledgeBases.folders.deleteV1IDDelete(
   *   '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   {
   *     path: 'x',
   *     recursive: false,
   *   },
   * );
   * ```
   */
  deleteV1IDDelete(
    knowledgeBaseID: string,
    params: FolderDeleteV1IDDeleteParams,
    options?: RequestOptions,
  ): APIPromise<FolderDeleteV1IDDeleteResponse> {
    const { organization_id, ...body } = params;
    return this._client.delete(__scalarPath`/v1/knowledge-bases/${knowledgeBaseID}/folders`, {
      body,
      query: { organization_id },
      ...options,
    });
  }
}

export interface AddFolderRequest {
  /**
   * Folder path to create.
   * @minLength 1
   */
  path: string;
}

export interface DeleteFolderRequest {
  /**
   * Folder path to delete.
   * @minLength 1
   */
  path: string;
  /**
   * When false, only empty folders are deleted and non-empty folders return a conflict. When true, the folder and all contents are deleted.
   * @default false
   */
  recursive?: boolean;
}

export interface FolderCreateV1IDPostParams {
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

export interface FolderCreateV1IDPostResponse {
  /**
   * Operation result message.
   */
  message: string;
  /**
   * Folder path.
   */
  path: string;
}

export interface FolderDeleteV1IDDeleteParams {
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

export interface FolderDeleteV1IDDeleteResponse {
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
    type AddFolderRequest as AddFolderRequest,
    type DeleteFolderRequest as DeleteFolderRequest,
    type FolderCreateV1IDPostResponse as FolderCreateV1IDPostResponse,
    type FolderDeleteV1IDDeleteResponse as FolderDeleteV1IDDeleteResponse,
    type FolderCreateV1IDPostParams as FolderCreateV1IDPostParams,
    type FolderDeleteV1IDDeleteParams as FolderDeleteV1IDDeleteParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Folders extends APIResource {
  /**
   * Create an empty folder at the requested knowledge base path.
   */
  create(
    knowledgeBaseID: string,
    params: FolderCreateParams,
    options?: RequestOptions,
  ): APIPromise<FolderCreateResponse> {
    const { organization_id, ...body } = params;
    return this._client.post(path`/v1/knowledge-bases/${knowledgeBaseID}/folders`, {
      query: { organization_id },
      body,
      ...options,
    });
  }

  /**
   * Delete a folder. With recursive=false, non-empty folders return 409 and no
   * contents are deleted.
   */
  delete(
    knowledgeBaseID: string,
    params: FolderDeleteParams,
    options?: RequestOptions,
  ): APIPromise<FolderDeleteResponse> {
    const { organization_id, ...body } = params;
    return this._client.delete(path`/v1/knowledge-bases/${knowledgeBaseID}/folders`, {
      query: { organization_id },
      body,
      ...options,
    });
  }
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

export interface FolderCreateParams {
  /**
   * Body param: Folder path to create.
   */
  path: string;

  /**
   * Query param: Organization scope for API keys that can access multiple
   * organizations.
   */
  organization_id?: string | null;
}

export interface FolderDeleteParams {
  /**
   * Body param: Folder path to delete.
   */
  path: string;

  /**
   * Query param: Organization scope for API keys that can access multiple
   * organizations.
   */
  organization_id?: string | null;

  /**
   * Body param: When false, only empty folders are deleted and non-empty folders
   * return a conflict. When true, the folder and all contents are deleted.
   */
  recursive?: boolean;
}

export declare namespace Folders {
  export {
    type FolderCreateResponse as FolderCreateResponse,
    type FolderDeleteResponse as FolderDeleteResponse,
    type FolderCreateParams as FolderCreateParams,
    type FolderDeleteParams as FolderDeleteParams,
  };
}

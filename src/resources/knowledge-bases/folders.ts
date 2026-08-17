// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { path as __scalarPath } from "../../internal/utils/path";

export class Folders extends APIResource {
  /**
   * Create an empty folder at the requested knowledge base path.
   *
   * @param {string} knowledge_base_id - Unique knowledge base ID.
   * @param {FolderCreateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<FolderCreateResponse>} Successful Response
   *
   * @example
   * ```ts
   * const create = await client.knowledgeBases.folders.create("knowledgeBaseId", {
   *   path: "",
   * });
   * ```
   */
  create(knowledge_base_id: string, params: FolderCreateParams, options?: RequestOptions): APIPromise<FolderCreateResponse> {
    const { organization_id, ...body } = params ?? {};
    return this._client.post(__scalarPath`/v1/knowledge-bases/${knowledge_base_id}/folders`, { body: body, query: { organization_id: organization_id }, ...options });
  }

  /**
   * Delete a folder. With recursive=false, non-empty folders return 409 and no contents are deleted.
   *
   * @param {string} knowledge_base_id - Unique knowledge base ID.
   * @param {FolderDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<FolderDeleteResponse>} Successful Response
   *
   * @example
   * ```ts
   * const delete_ = await client.knowledgeBases.folders.delete("knowledgeBaseId", {
   *   path: "",
   *   recursive: false,
   * });
   * ```
   */
  delete(knowledge_base_id: string, params: FolderDeleteParams, options?: RequestOptions): APIPromise<FolderDeleteResponse> {
    const { organization_id, ...body } = params ?? {};
    return this._client.delete(__scalarPath`/v1/knowledge-bases/${knowledge_base_id}/folders`, { body: body, query: { organization_id: organization_id }, ...options });
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
    type AddFolderRequest as AddFolderRequest,
    type DeleteFolderRequest as DeleteFolderRequest,
    type FolderCreateResponse as FolderCreateResponse,
    type FolderDeleteResponse as FolderDeleteResponse,
    type FolderCreateParams as FolderCreateParams,
    type FolderDeleteParams as FolderDeleteParams,
  };
}
export { Folders as FolderResource };

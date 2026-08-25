// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../../internal/uploads';
import { path as __scalarPath } from '../../internal/utils/path';

export class Documents extends APIResource {
  /**
   * Add a document to a knowledge base using JSON text or multipart file upload.
   *
   * @param {string} knowledgeBaseID - Unique knowledge base ID.
   * @param {DocumentCreateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DocumentCreateResponse>} Successful Response
   *
   * @example
   * ```ts
   * const document = await client.knowledgeBases.documents.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   name: 'x',
   *   text: 'x',
   * });
   * ```
   */
  create(
    knowledgeBaseID: string,
    params: DocumentCreateParams,
    options?: RequestOptions,
  ): APIPromise<DocumentCreateResponse> {
    const { organization_id, ...body } = params;
    return this._client.post(
      __scalarPath`/v1/knowledge-bases/${knowledgeBaseID}/documents`,
      maybeMultipartFormRequestOptions({ body, query: { organization_id }, ...options }, this._client),
    );
  }

  /**
   * Overwrite a knowledge base document using JSON text or multipart file upload.
   *
   * @param {string} knowledgeBaseID - Unique knowledge base ID.
   * @param {DocumentUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DocumentUpdateResponse>} Successful Response
   *
   * @example
   * ```ts
   * const document = await client.knowledgeBases.documents.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   name: 'x',
   *   text: 'x',
   * });
   * ```
   */
  update(
    knowledgeBaseID: string,
    params: DocumentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<DocumentUpdateResponse> {
    const { organization_id, ...body } = params;
    return this._client.put(
      __scalarPath`/v1/knowledge-bases/${knowledgeBaseID}/documents`,
      maybeMultipartFormRequestOptions({ body, query: { organization_id }, ...options }, this._client),
    );
  }

  /**
   * Delete an existing document from a knowledge base.
   *
   * @param {string} knowledgeBaseID - Unique knowledge base ID.
   * @param {DocumentDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DocumentDeleteResponse>} Successful Response
   *
   * @example
   * ```ts
   * const document = await client.knowledgeBases.documents.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   name: 'x',
   * });
   * ```
   */
  delete(
    knowledgeBaseID: string,
    params: DocumentDeleteParams,
    options?: RequestOptions,
  ): APIPromise<DocumentDeleteResponse> {
    const { organization_id, ...body } = params;
    return this._client.delete(__scalarPath`/v1/knowledge-bases/${knowledgeBaseID}/documents`, {
      body,
      query: { organization_id },
      ...options,
    });
  }
}

export interface DocumentCreateParams {
  /**
   * Query param: Organization scope for API keys that can access multiple organizations.
   * @format uuid
   */
  organization_id?: string | null;
  /**
   * Body param: Unique document name.
   * @minLength 1
   */
  name: string;
  /**
   * Body param: Text content to add to the document.
   * @minLength 1
   */
  text: string;
  /**
   * Body param: Folder path to add the document under.
   * @minLength 1
   */
  folder?: string | null;
}

export interface DocumentCreateResponse {
  /**
   * Operation result message.
   */
  message: string;
  /**
   * Document name.
   */
  name: string;
  /**
   * Document path.
   */
  path: string;
  /**
   * Document folder path.
   */
  folder?: string | null;
}

export interface DocumentUpdateParams {
  /**
   * Query param: Organization scope for API keys that can access multiple organizations.
   * @format uuid
   */
  organization_id?: string | null;
  /**
   * Body param: Document name or path to update.
   * @minLength 1
   */
  name: string;
  /**
   * Body param: Replacement text content for the document.
   * @minLength 1
   */
  text: string;
  /**
   * Body param: Folder path containing the document.
   * @minLength 1
   */
  folder?: string | null;
}

export interface DocumentUpdateResponse {
  /**
   * Operation result message.
   */
  message: string;
  /**
   * Document name.
   */
  name: string;
  /**
   * Document path.
   */
  path: string;
  /**
   * Document folder path.
   */
  folder?: string | null;
}

export interface DocumentDeleteParams {
  /**
   * Query param: Organization scope for API keys that can access multiple organizations.
   * @format uuid
   */
  organization_id?: string | null;
  /**
   * Body param: Document path to delete.
   * @minLength 1
   */
  name: string;
}

export interface DocumentDeleteResponse {
  /**
   * Operation result message.
   */
  message: string;
  /**
   * Document name.
   */
  name: string;
  /**
   * Document path.
   */
  path: string;
  /**
   * Document folder path.
   */
  folder?: string | null;
}
export declare namespace Documents {
  export {
    type DocumentCreateResponse as DocumentCreateResponse,
    type DocumentUpdateResponse as DocumentUpdateResponse,
    type DocumentDeleteResponse as DocumentDeleteResponse,
    type DocumentCreateParams as DocumentCreateParams,
    type DocumentUpdateParams as DocumentUpdateParams,
    type DocumentDeleteParams as DocumentDeleteParams,
  };
}

// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../../internal/uploads';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as Shared from '../shared';

export class Documents extends APIResource {
  /**
   * Add a document to a knowledge base using JSON text or multipart file upload.
   *
   * @param {string} knowledgeBaseID - Unique knowledge base ID.
   * @param {DocumentCreateV1IDPostParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Shared.DocumentOperationResponse>} Successful Response
   *
   * @example
   * ```ts
   * const operation = await client.knowledgeBases.documents.createV1IDPost(
   *   '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   {
   *     name: 'x',
   *     text: 'x',
   *   },
   * );
   * ```
   */
  createV1IDPost(
    knowledgeBaseID: string,
    params: DocumentCreateV1IDPostParams,
    options?: RequestOptions,
  ): APIPromise<Shared.DocumentOperationResponse> {
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
   * @param {DocumentUpdateV1IDPutParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Shared.DocumentOperationResponse>} Successful Response
   *
   * @example
   * ```ts
   * const operation = await client.knowledgeBases.documents.updateV1IDPut(
   *   '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   {
   *     name: 'x',
   *     text: 'x',
   *   },
   * );
   * ```
   */
  updateV1IDPut(
    knowledgeBaseID: string,
    params: DocumentUpdateV1IDPutParams,
    options?: RequestOptions,
  ): APIPromise<Shared.DocumentOperationResponse> {
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
   * @param {DocumentDeleteV1IDDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Shared.DocumentOperationResponse>} Successful Response
   *
   * @example
   * ```ts
   * const operation = await client.knowledgeBases.documents.deleteV1IDDelete(
   *   '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   {
   *     name: 'x',
   *   },
   * );
   * ```
   */
  deleteV1IDDelete(
    knowledgeBaseID: string,
    params: DocumentDeleteV1IDDeleteParams,
    options?: RequestOptions,
  ): APIPromise<Shared.DocumentOperationResponse> {
    const { organization_id, ...body } = params;
    return this._client.delete(__scalarPath`/v1/knowledge-bases/${knowledgeBaseID}/documents`, {
      body,
      query: { organization_id },
      ...options,
    });
  }
}

export interface DeleteDocumentRequest {
  /**
   * Document path to delete.
   * @minLength 1
   */
  name: string;
}

export interface DocumentCreateV1IDPostParams {
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

export interface DocumentUpdateV1IDPutParams {
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

export interface DocumentDeleteV1IDDeleteParams {
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
export declare namespace Documents {
  export {
    type DeleteDocumentRequest as DeleteDocumentRequest,
    type DocumentCreateV1IDPostParams as DocumentCreateV1IDPostParams,
    type DocumentUpdateV1IDPutParams as DocumentUpdateV1IDPutParams,
    type DocumentDeleteV1IDDeleteParams as DocumentDeleteV1IDDeleteParams,
  };
}

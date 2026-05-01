// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Documents extends APIResource {
  /**
   * Add a document to a knowledge base using JSON text or multipart file upload.
   */
  create(
    knowledgeBaseID: string,
    params: DocumentCreateParams,
    options?: RequestOptions,
  ): APIPromise<DocumentCreateResponse> {
    const { organization_id, ...body } = params;
    return this._client.post(
      path`/v1/knowledge-bases/${knowledgeBaseID}/documents`,
      maybeMultipartFormRequestOptions({ query: { organization_id }, body, ...options }, this._client),
    );
  }

  /**
   * Overwrite a knowledge base document using JSON text or multipart file upload.
   */
  update(
    knowledgeBaseID: string,
    params: DocumentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<DocumentUpdateResponse> {
    const { organization_id, ...body } = params;
    return this._client.put(
      path`/v1/knowledge-bases/${knowledgeBaseID}/documents`,
      maybeMultipartFormRequestOptions({ query: { organization_id }, body, ...options }, this._client),
    );
  }

  /**
   * Delete an existing document from a knowledge base.
   */
  delete(
    knowledgeBaseID: string,
    params: DocumentDeleteParams,
    options?: RequestOptions,
  ): APIPromise<DocumentDeleteResponse> {
    const { organization_id, ...body } = params;
    return this._client.delete(path`/v1/knowledge-bases/${knowledgeBaseID}/documents`, {
      query: { organization_id },
      body,
      ...options,
    });
  }
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

export interface DocumentCreateParams {
  /**
   * Body param: Unique document name.
   */
  name: string;

  /**
   * Body param: Text content to add to the document.
   */
  text: string;

  /**
   * Query param: Organization scope for API keys that can access multiple
   * organizations.
   */
  organization_id?: string | null;

  /**
   * Body param: Folder path to add the document under.
   */
  folder?: string | null;
}

export interface DocumentUpdateParams {
  /**
   * Body param: Document name or path to update.
   */
  name: string;

  /**
   * Body param: Replacement text content for the document.
   */
  text: string;

  /**
   * Query param: Organization scope for API keys that can access multiple
   * organizations.
   */
  organization_id?: string | null;

  /**
   * Body param: Folder path containing the document.
   */
  folder?: string | null;
}

export interface DocumentDeleteParams {
  /**
   * Body param: Document path to delete.
   */
  name: string;

  /**
   * Query param: Organization scope for API keys that can access multiple
   * organizations.
   */
  organization_id?: string | null;
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

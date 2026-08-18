// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as Shared from '../shared';
import * as DocumentsAPI from './documents';
import {
  Documents,
  type DeleteDocumentRequest,
  type DocumentCreateV1IDPostParams,
  type DocumentUpdateV1IDPutParams,
  type DocumentDeleteV1IDDeleteParams,
} from './documents';
import * as FoldersAPI from './folders';
import {
  Folders,
  type AddFolderRequest,
  type DeleteFolderRequest,
  type FolderCreateV1IDPostResponse,
  type FolderDeleteV1IDDeleteResponse,
  type FolderCreateV1IDPostParams,
  type FolderDeleteV1IDDeleteParams,
} from './folders';

export class KnowledgeBases extends APIResource {
  documents: DocumentsAPI.Documents = new DocumentsAPI.Documents(this._client);
  folders: FoldersAPI.Folders = new FoldersAPI.Folders(this._client);

  /**
   * List knowledge bases accessible to the API key.
   *
   * @param {KnowledgeBaseListV1GetParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<KnowledgeBaseListV1GetResponse>} Successful Response
   *
   * @example
   * ```ts
   * const listV1Get = await client.knowledgeBases.listV1Get();
   * ```
   */
  listV1Get(
    query: KnowledgeBaseListV1GetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<KnowledgeBaseListV1GetResponse> {
    return this._client.get('/v1/knowledge-bases', { query, ...options });
  }

  /**
   * Search a knowledge base and return matching snippets or pages.
   *
   * @param {string} knowledgeBaseID - Unique knowledge base ID.
   * @param {KnowledgeBaseSearchParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<KnowledgeBaseSearchResponse>} Successful Response
   *
   * @example
   * ```ts
   * const search = await client.knowledgeBases.search('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   query: 'x',
   *   top_k: 0,
   *   return_full_page: false,
   * });
   * ```
   */
  search(
    knowledgeBaseID: string,
    params: KnowledgeBaseSearchParams,
    options?: RequestOptions,
  ): APIPromise<KnowledgeBaseSearchResponse> {
    const { organization_id, ...body } = params;
    return this._client.post(__scalarPath`/v1/knowledge-bases/${knowledgeBaseID}/search`, {
      body,
      query: { organization_id },
      ...options,
    });
  }
}

export interface SearchKnowledgeBaseRequest {
  /**
   * Search query.
   * @minLength 1
   */
  query: string;
  /**
   * Maximum number of results to return.
   * @minimum 1
   * @maximum 100
   */
  top_k: number;
  /**
   * Return full page content instead of snippets.
   * @default false
   */
  return_full_page?: boolean;
  /**
   * Optional search filters.
   */
  filters?: SearchKnowledgeBaseRequest.Filters | null;
}

export namespace SearchKnowledgeBaseRequest {
  export interface Filters {
    /**
     * Optional tags to match. Documents with any matching tag are included.
     * @minItems 1
     */
    tags?: Array<string> | null;
    /**
     * Optional folder paths to search within. Currently limited to one folder.
     * @minItems 1
     * @maxItems 1
     */
    folders?: Array<string> | null;
  }
}

export interface KnowledgeBaseListV1GetParams {
  /**
   * Organization scope for API keys that can access multiple organizations.
   * @format uuid
   */
  organization_id?: string | null;
}

export interface KnowledgeBaseListV1GetResponse {
  /**
   * Knowledge bases accessible to the API key.
   */
  data: Array<KnowledgeBaseListV1GetResponse.Data>;
  /**
   * Pagination metadata.
   */
  pagination?: Shared.CursorPagination;
}

export namespace KnowledgeBaseListV1GetResponse {
  export interface Data {
    /**
     * Unique knowledge base ID.
     * @format uuid
     */
    id: string;
    /**
     * Knowledge base name.
     */
    name: string;
    /**
     * Creation timestamp.
     * @format date-time
     */
    created_at: string;
    /**
     * Knowledge base slug.
     */
    slug?: string | null;
    /**
     * Knowledge base description.
     */
    description?: string | null;
  }
}

export interface KnowledgeBaseSearchParams {
  /**
   * Query param: Organization scope for API keys that can access multiple organizations.
   * @format uuid
   */
  organization_id?: string | null;
  /**
   * Body param: Search query.
   * @minLength 1
   */
  query: string;
  /**
   * Body param: Maximum number of results to return.
   * @minimum 1
   * @maximum 100
   */
  top_k: number;
  /**
   * Body param: Return full page content instead of snippets.
   * @default false
   */
  return_full_page?: boolean;
  /**
   * Body param: Optional search filters.
   */
  filters?: KnowledgeBaseSearchParams.Filters | null;
}

export namespace KnowledgeBaseSearchParams {
  export interface Filters {
    /**
     * Optional tags to match. Documents with any matching tag are included.
     * @minItems 1
     */
    tags?: Array<string> | null;
    /**
     * Optional folder paths to search within. Currently limited to one folder.
     * @minItems 1
     * @maxItems 1
     */
    folders?: Array<string> | null;
  }
}

export interface KnowledgeBaseSearchResponse {
  /**
   * Knowledge base search results.
   */
  data: Array<KnowledgeBaseSearchResponse.Data>;
  /**
   * Pagination metadata.
   */
  pagination?: Shared.CursorPagination;
}

export namespace KnowledgeBaseSearchResponse {
  export interface Data {
    /**
     * Document or chunk path.
     */
    id: string;
    /**
     * Relevance score.
     */
    score: number;
    /**
     * Result metadata, including folder path.
     */
    metadata: Record<string, unknown>;
    /**
     * Matched content.
     */
    content: string;
  }
}
KnowledgeBases.Documents = Documents;
KnowledgeBases.Folders = Folders;

export declare namespace KnowledgeBases {
  export {
    type SearchKnowledgeBaseRequest as SearchKnowledgeBaseRequest,
    type KnowledgeBaseListV1GetResponse as KnowledgeBaseListV1GetResponse,
    type KnowledgeBaseSearchResponse as KnowledgeBaseSearchResponse,
    type KnowledgeBaseListV1GetParams as KnowledgeBaseListV1GetParams,
    type KnowledgeBaseSearchParams as KnowledgeBaseSearchParams,
  };

  export {
    Documents as Documents,
    type DeleteDocumentRequest as DeleteDocumentRequest,
    type DocumentCreateV1IDPostParams as DocumentCreateV1IDPostParams,
    type DocumentUpdateV1IDPutParams as DocumentUpdateV1IDPutParams,
    type DocumentDeleteV1IDDeleteParams as DocumentDeleteV1IDDeleteParams,
  };

  export {
    Folders as Folders,
    type AddFolderRequest as AddFolderRequest,
    type DeleteFolderRequest as DeleteFolderRequest,
    type FolderCreateV1IDPostResponse as FolderCreateV1IDPostResponse,
    type FolderDeleteV1IDDeleteResponse as FolderDeleteV1IDDeleteResponse,
    type FolderCreateV1IDPostParams as FolderCreateV1IDPostParams,
    type FolderDeleteV1IDDeleteParams as FolderDeleteV1IDDeleteParams,
  };
}

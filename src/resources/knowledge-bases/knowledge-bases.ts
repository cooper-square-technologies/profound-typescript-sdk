// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as Shared from '../shared';
import * as DocumentsAPI from './documents';
import {
  Documents,
  type DocumentCreateParams,
  type DocumentUpdateParams,
  type DocumentDeleteParams,
} from './documents';
import * as FoldersAPI from './folders';
import {
  Folders,
  type FolderCreateResponse,
  type FolderDeleteResponse,
  type FolderCreateParams,
  type FolderDeleteParams,
} from './folders';

export class KnowledgeBases extends APIResource {
  documents: DocumentsAPI.Documents = new DocumentsAPI.Documents(this._client);
  folders: FoldersAPI.Folders = new FoldersAPI.Folders(this._client);

  /**
   * List knowledge bases accessible to the API key.
   *
   * @param {KnowledgeBaseListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<KnowledgeBaseListResponse>} Successful Response
   *
   * @example
   * ```ts
   * const list = await client.knowledgeBases.list();
   * ```
   */
  list(
    query: KnowledgeBaseListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<KnowledgeBaseListResponse> {
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

export interface KnowledgeBaseListParams {
  /**
   * Organization scope for API keys that can access multiple organizations.
   * @format uuid
   */
  organization_id?: string | null;
}

export interface KnowledgeBaseListResponse {
  /**
   * Knowledge bases accessible to the API key.
   */
  data: Array<KnowledgeBaseListResponse.Data>;
  /**
   * Pagination metadata.
   */
  pagination?: Shared.CursorPagination;
}

export namespace KnowledgeBaseListResponse {
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
    type KnowledgeBaseListResponse as KnowledgeBaseListResponse,
    type KnowledgeBaseSearchResponse as KnowledgeBaseSearchResponse,
    type KnowledgeBaseListParams as KnowledgeBaseListParams,
    type KnowledgeBaseSearchParams as KnowledgeBaseSearchParams,
  };

  export {
    Documents as Documents,
    type DocumentCreateParams as DocumentCreateParams,
    type DocumentUpdateParams as DocumentUpdateParams,
    type DocumentDeleteParams as DocumentDeleteParams,
  };

  export {
    Folders as Folders,
    type FolderCreateResponse as FolderCreateResponse,
    type FolderDeleteResponse as FolderDeleteResponse,
    type FolderCreateParams as FolderCreateParams,
    type FolderDeleteParams as FolderDeleteParams,
  };
}

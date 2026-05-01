// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as DocumentsAPI from './documents';
import {
  DocumentCreateParams,
  DocumentCreateResponse,
  DocumentDeleteParams,
  DocumentDeleteResponse,
  DocumentUpdateParams,
  DocumentUpdateResponse,
  Documents,
} from './documents';
import * as FoldersAPI from './folders';
import {
  FolderCreateParams,
  FolderCreateResponse,
  FolderDeleteParams,
  FolderDeleteResponse,
  Folders,
} from './folders';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class KnowledgeBases extends APIResource {
  documents: DocumentsAPI.Documents = new DocumentsAPI.Documents(this._client);
  folders: FoldersAPI.Folders = new FoldersAPI.Folders(this._client);

  /**
   * List knowledge bases accessible to the API key.
   */
  list(
    query: KnowledgeBaseListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<KnowledgeBaseListResponse> {
    return this._client.get('/v1/knowledge-bases', { query, ...options });
  }

  /**
   * Search a knowledge base and return matching snippets or pages.
   */
  search(
    knowledgeBaseID: string,
    params: KnowledgeBaseSearchParams,
    options?: RequestOptions,
  ): APIPromise<KnowledgeBaseSearchResponse> {
    const { organization_id, ...body } = params;
    return this._client.post(path`/v1/knowledge-bases/${knowledgeBaseID}/search`, {
      query: { organization_id },
      body,
      ...options,
    });
  }
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
     */
    id: string;

    /**
     * Creation timestamp.
     */
    created_at: string;

    /**
     * Knowledge base name.
     */
    name: string;

    /**
     * Knowledge base description.
     */
    description?: string | null;

    /**
     * Knowledge base slug.
     */
    slug?: string | null;
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
     * Matched content.
     */
    content: string;

    /**
     * Result metadata, including folder path.
     */
    metadata: { [key: string]: unknown };

    /**
     * Relevance score.
     */
    score: number;
  }
}

export interface KnowledgeBaseListParams {
  /**
   * Organization scope for API keys that can access multiple organizations.
   */
  organization_id?: string | null;
}

export interface KnowledgeBaseSearchParams {
  /**
   * Body param: Search query.
   */
  query: string;

  /**
   * Body param: Maximum number of results to return.
   */
  top_k: number;

  /**
   * Query param: Organization scope for API keys that can access multiple
   * organizations.
   */
  organization_id?: string | null;

  /**
   * Body param: Optional search filters.
   */
  filters?: KnowledgeBaseSearchParams.Filters | null;

  /**
   * Body param: Return full page content instead of snippets.
   */
  return_full_page?: boolean;
}

export namespace KnowledgeBaseSearchParams {
  /**
   * Optional search filters.
   */
  export interface Filters {
    /**
     * Optional folder paths to search within. Currently limited to one folder.
     */
    folders?: Array<string> | null;

    /**
     * Optional tags to match. Documents with any matching tag are included.
     */
    tags?: Array<string> | null;
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
    type DocumentCreateResponse as DocumentCreateResponse,
    type DocumentUpdateResponse as DocumentUpdateResponse,
    type DocumentDeleteResponse as DocumentDeleteResponse,
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

// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { path as __scalarPath } from "../../internal/utils/path";
import { Documents, type DeleteDocumentRequest, type DocumentCreateResponse, type DocumentUpdateResponse, type DocumentDeleteResponse, type DocumentCreateParams, type DocumentUpdateParams, type DocumentDeleteParams } from "./documents";
import { Folders, type AddFolderRequest, type DeleteFolderRequest, type FolderCreateResponse, type FolderDeleteResponse, type FolderCreateParams, type FolderDeleteParams } from "./folders";

export class KnowledgeBases extends APIResource {
  documents: Documents = new Documents(this._client);
  folders: Folders = new Folders(this._client);

  /**
   * List knowledge bases accessible to the API key.
   *
   * @param {KnowledgeBaseListParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<KnowledgeBaseListResponse>} Successful Response
   *
   * @example
   * ```ts
   * const list = await client.knowledgeBases.list();
   * ```
   */
  list(params: KnowledgeBaseListParams | null | undefined = {}, options?: RequestOptions): APIPromise<KnowledgeBaseListResponse> {
    const { organization_id } = params ?? {};
    return this._client.get("/v1/knowledge-bases", { query: { organization_id: organization_id }, ...options });
  }

  /**
   * Search a knowledge base and return matching snippets or pages.
   *
   * @param {string} knowledge_base_id - Unique knowledge base ID.
   * @param {KnowledgeBaseSearchParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<KnowledgeBaseSearchResponse>} Successful Response
   *
   * @example
   * ```ts
   * const search = await client.knowledgeBases.search("knowledgeBaseId", {
   *   query: "",
   *   top_k: 0,
   *   return_full_page: false,
   * });
   * ```
   */
  search(knowledge_base_id: string, params: KnowledgeBaseSearchParams, options?: RequestOptions): APIPromise<KnowledgeBaseSearchResponse> {
    const { organization_id, ...body } = params ?? {};
    return this._client.post(__scalarPath`/v1/knowledge-bases/${knowledge_base_id}/search`, { body: body, query: { organization_id: organization_id }, ...options });
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
  filters?: { tags?: Array<string> | null; folders?: Array<string> | null };
}

/**
 * Cursor-based pagination metadata.
 */
export interface CursorPagination {
  /**
   * Maximum number of results to return. Default is 10,000, maximum is 50,000.
   * @default 10000
   * @maximum 50000
   */
  limit?: number;
  /**
   * Token for the next page, if more results are available.
   */
  next_cursor?: string | null;
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
  pagination?: CursorPagination;
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
  pagination?: CursorPagination;
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
    metadata: Data.Metadata;
    /**
     * Matched content.
     */
    content: string;
  }

  export namespace Data {
    export interface Metadata {
    }
  }
}
KnowledgeBases.Documents = Documents;
KnowledgeBases.Folders = Folders;

export declare namespace KnowledgeBases {
  export {
    type SearchKnowledgeBaseRequest as SearchKnowledgeBaseRequest,
    type KnowledgeBaseListResponse as KnowledgeBaseListResponse,
    type KnowledgeBaseSearchResponse as KnowledgeBaseSearchResponse,
    type KnowledgeBaseListParams as KnowledgeBaseListParams,
    type KnowledgeBaseSearchParams as KnowledgeBaseSearchParams,
  };

  export {
    Documents as Documents,
    type DeleteDocumentRequest as DeleteDocumentRequest,
    type DocumentCreateResponse as DocumentCreateResponse,
    type DocumentUpdateResponse as DocumentUpdateResponse,
    type DocumentDeleteResponse as DocumentDeleteResponse,
    type DocumentCreateParams as DocumentCreateParams,
    type DocumentUpdateParams as DocumentUpdateParams,
    type DocumentDeleteParams as DocumentDeleteParams,
  };

  export {
    Folders as Folders,
    type AddFolderRequest as AddFolderRequest,
    type DeleteFolderRequest as DeleteFolderRequest,
    type FolderCreateResponse as FolderCreateResponse,
    type FolderDeleteResponse as FolderDeleteResponse,
    type FolderCreateParams as FolderCreateParams,
    type FolderDeleteParams as FolderDeleteParams,
  };
}
export { KnowledgeBases as KnowledgeBaseResource };

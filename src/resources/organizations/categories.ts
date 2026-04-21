// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrganizationsAPI from './organizations';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Categories extends APIResource {
  /**
   * Get the organization categories, one row per (category, organization) pair.
   */
  list(
    query: CategoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CategoryListResponse> {
    return this._client.get('/v1/org/categories', { query, ...options });
  }

  /**
   * Get Category Assets
   */
  assets(categoryID: string, options?: RequestOptions): APIPromise<CategoryAssetsResponse> {
    return this._client.get(path`/v1/org/categories/${categoryID}/assets`, options);
  }

  /**
   * Get Category Personas
   */
  getCategoryPersonas(
    categoryID: string,
    options?: RequestOptions,
  ): APIPromise<CategoryGetCategoryPersonasResponse> {
    return this._client.get(path`/v1/org/categories/${categoryID}/personas`, options);
  }

  /**
   * Retrieve prompts in a category with optional filtering by type, topic, tag,
   * region, platform, or persona. Supports cursor-based pagination.
   */
  prompts(
    categoryID: string,
    query: CategoryPromptsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CategoryPromptsResponse> {
    return this._client.get(path`/v1/org/categories/${categoryID}/prompts`, { query, ...options });
  }

  /**
   * Get the tags for a specific category.
   */
  tags(categoryID: string, options?: RequestOptions): APIPromise<CategoryTagsResponse> {
    return this._client.get(path`/v1/org/categories/${categoryID}/tags`, options);
  }

  /**
   * Get the topics for a specific category.
   */
  topics(categoryID: string, options?: RequestOptions): APIPromise<CategoryTopicsResponse> {
    return this._client.get(path`/v1/org/categories/${categoryID}/topics`, options);
  }
}

export type CategoryListResponse = Array<CategoryListResponse.CategoryListResponseItem>;

export namespace CategoryListResponse {
  /**
   * A category annotated with the organization that owns it.
   */
  export interface CategoryListResponseItem {
    id: string;

    name: string;

    organization: CategoryListResponseItem.Organization;
  }

  export namespace CategoryListResponseItem {
    export interface Organization {
      id: string;

      name: string | null;
    }
  }
}

export type CategoryAssetsResponse = Array<CategoryAssetsResponse.CategoryAssetsResponseItem>;

export namespace CategoryAssetsResponse {
  export interface CategoryAssetsResponseItem {
    id: string;

    created_at: string;

    is_owned: boolean;

    logo_url: string;

    name: string;

    website: string;

    alternate_domains?: Array<string> | null;
  }
}

export interface CategoryGetCategoryPersonasResponse {
  data: Array<CategoryGetCategoryPersonasResponse.Data>;
}

export namespace CategoryGetCategoryPersonasResponse {
  export interface Data {
    id: string;

    name: string;

    persona: OrganizationsAPI.PersonaProfile;
  }
}

export interface CategoryPromptsResponse {
  data: Array<CategoryPromptsResponse.Data>;

  info: CategoryPromptsResponse.Info;
}

export namespace CategoryPromptsResponse {
  export interface Data {
    id: string;

    created_at: string;

    language: string;

    platforms: Array<OrganizationsAPI.NamedResource>;

    prompt: string;

    prompt_type: string;

    regions: Array<OrganizationsAPI.NamedResource>;

    status: 'active' | 'disabled';

    /**
     * Generic id+name reference used across domain boundaries.
     */
    topic: OrganizationsAPI.NamedResource;

    updated_at: string;

    personas?: Array<OrganizationsAPI.NamedResource>;

    tags?: Array<OrganizationsAPI.NamedResource>;
  }

  export interface Info {
    limit: number;

    next_cursor: string | null;

    total_rows: number;
  }
}

export type CategoryTagsResponse = Array<OrganizationsAPI.NamedResource>;

export type CategoryTopicsResponse = Array<CategoryTopicsResponse.CategoryTopicsResponseItem>;

export namespace CategoryTopicsResponse {
  export interface CategoryTopicsResponseItem {
    id: string;

    name: string;

    status: 'active' | 'disabled';
  }
}

export interface CategoryListParams {
  /**
   * Restrict results to one or more organizations the caller belongs to. Repeat the
   * parameter to target multiple orgs (e.g.
   * `?organization_ids=<id1>&organization_ids=<id2>`). Omit to return data from
   * every organization the caller has access to.
   */
  organization_ids?: Array<string> | null;
}

export interface CategoryPromptsParams {
  /**
   * Pagination cursor from a previous response.
   */
  cursor?: string | null;

  /**
   * Maximum number of prompts to return.
   */
  limit?: number;

  /**
   * Sort direction by creation date.
   */
  order_dir?: 'asc' | 'desc';

  /**
   * Filter by persona IDs.
   */
  persona_id?: Array<string>;

  /**
   * Filter by platform IDs.
   */
  platform_id?: Array<string>;

  /**
   * Filter by prompt type.
   */
  prompt_type?: Array<'visibility' | 'sentiment'>;

  /**
   * Filter by region IDs.
   */
  region_id?: Array<string>;

  /**
   * Filter by prompt status.
   */
  status?: Array<'active' | 'disabled'>;

  /**
   * Filter by tag IDs.
   */
  tag_id?: Array<string>;

  /**
   * Filter by topic IDs.
   */
  topic_id?: Array<string>;
}

export declare namespace Categories {
  export {
    type CategoryListResponse as CategoryListResponse,
    type CategoryAssetsResponse as CategoryAssetsResponse,
    type CategoryGetCategoryPersonasResponse as CategoryGetCategoryPersonasResponse,
    type CategoryPromptsResponse as CategoryPromptsResponse,
    type CategoryTagsResponse as CategoryTagsResponse,
    type CategoryTopicsResponse as CategoryTopicsResponse,
    type CategoryListParams as CategoryListParams,
    type CategoryPromptsParams as CategoryPromptsParams,
  };
}

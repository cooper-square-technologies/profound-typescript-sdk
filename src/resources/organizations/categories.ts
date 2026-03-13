// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrganizationsAPI from './organizations';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Categories extends APIResource {
  /**
   * Get the organization categories.
   */
  list(options?: RequestOptions): APIPromise<CategoryListResponse> {
    return this._client.get('/v1/org/categories', options);
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
   * Get Category Prompts
   */
  prompts(
    categoryID: string,
    query: CategoryPromptsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CategoryPromptsResponse> {
    return this._client.get(path`/v1/org/categories/${categoryID}/prompts`, { query, ...options });
  }

  /**
   * Get the organization tags for a specific category.
   */
  tags(categoryID: string, options?: RequestOptions): APIPromise<CategoryTagsResponse> {
    return this._client.get(path`/v1/org/categories/${categoryID}/tags`, options);
  }

  /**
   * Get the organization categories.
   */
  topics(categoryID: string, options?: RequestOptions): APIPromise<CategoryTopicsResponse> {
    return this._client.get(path`/v1/org/categories/${categoryID}/topics`, options);
  }
}

export type CategoryListResponse = Array<OrganizationsAPI.NamedResource>;

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

    platforms: Array<OrganizationsAPI.NamedResource>;

    prompt: string;

    prompt_type: string;

    regions: Array<OrganizationsAPI.NamedResource>;

    /**
     * Generic id+name reference used across domain boundaries.
     */
    topic: OrganizationsAPI.NamedResource;

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
  }
}

export interface CategoryPromptsParams {
  cursor?: string | null;

  limit?: number;

  order_dir?: 'asc' | 'desc';

  platform_id?: Array<string>;

  prompt_type?: Array<'visibility' | 'sentiment'>;

  region_id?: Array<string>;

  tag_id?: Array<string>;

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
    type CategoryPromptsParams as CategoryPromptsParams,
  };
}

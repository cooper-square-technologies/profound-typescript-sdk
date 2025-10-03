// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CategoriesAPI from './categories';
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
   * Get Category Prompts
   */
  prompts(categoryID: string, options?: RequestOptions): APIPromise<CategoryPromptsResponse> {
    return this._client.get(path`/v1/org/categories/${categoryID}/prompts`, options);
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

export interface OrgItem {
  id: string;

  name: string;
}

export type CategoryListResponse = Array<OrgItem>;

export interface CategoryPromptsResponse {
  data: Array<CategoryPromptsResponse.Data>;
}

export namespace CategoryPromptsResponse {
  export interface Data {
    id: string;

    created_at: string;

    platforms: Array<CategoriesAPI.OrgItem>;

    prompt: string;

    prompt_type: string;

    regions: Array<CategoriesAPI.OrgItem>;

    topic: CategoriesAPI.OrgItem;

    tags?: Array<CategoriesAPI.OrgItem>;
  }
}

export type CategoryTagsResponse = Array<OrgItem>;

export type CategoryTopicsResponse = Array<OrgItem>;

export declare namespace Categories {
  export {
    type OrgItem as OrgItem,
    type CategoryListResponse as CategoryListResponse,
    type CategoryPromptsResponse as CategoryPromptsResponse,
    type CategoryTagsResponse as CategoryTagsResponse,
    type CategoryTopicsResponse as CategoryTopicsResponse,
  };
}

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
  retrievePrompts(categoryID: string, options?: RequestOptions): APIPromise<CategoryRetrievePromptsResponse> {
    return this._client.get(path`/v1/org/categories/${categoryID}/prompts`, options);
  }

  /**
   * Get the organization tags for a specific category.
   */
  retrieveTags(categoryID: string, options?: RequestOptions): APIPromise<CategoryRetrieveTagsResponse> {
    return this._client.get(path`/v1/org/categories/${categoryID}/tags`, options);
  }

  /**
   * Get the organization categories.
   */
  retrieveTopics(categoryID: string, options?: RequestOptions): APIPromise<CategoryRetrieveTopicsResponse> {
    return this._client.get(path`/v1/org/categories/${categoryID}/topics`, options);
  }
}

export interface OrgItem {
  id: string;

  name: string;
}

export type CategoryListResponse = Array<OrgItem>;

export interface CategoryRetrievePromptsResponse {
  data: Array<CategoryRetrievePromptsResponse.Data>;
}

export namespace CategoryRetrievePromptsResponse {
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

export type CategoryRetrieveTagsResponse = Array<OrgItem>;

export type CategoryRetrieveTopicsResponse = Array<OrgItem>;

export declare namespace Categories {
  export {
    type OrgItem as OrgItem,
    type CategoryListResponse as CategoryListResponse,
    type CategoryRetrievePromptsResponse as CategoryRetrievePromptsResponse,
    type CategoryRetrieveTagsResponse as CategoryRetrieveTagsResponse,
    type CategoryRetrieveTopicsResponse as CategoryRetrieveTopicsResponse,
  };
}

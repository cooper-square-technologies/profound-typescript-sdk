// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CategoriesAPI from './categories';
import {
  Categories,
  CategoryListResponse,
  CategoryRetrievePromptsResponse,
  CategoryRetrieveTagsResponse,
  CategoryRetrieveTopicsResponse,
  OrgItem,
} from './categories';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Org extends APIResource {
  categories: CategoriesAPI.Categories = new CategoriesAPI.Categories(this._client);

  /**
   * Get the organization domains.
   */
  retrieveDomains(options?: RequestOptions): APIPromise<OrgRetrieveDomainsResponse> {
    return this._client.get('/v1/org/domains', options);
  }

  /**
   * Get the organization models.
   */
  retrieveModels(options?: RequestOptions): APIPromise<OrgRetrieveModelsResponse> {
    return this._client.get('/v1/org/models', options);
  }

  /**
   * Get the organization regions.
   */
  retrieveRegions(options?: RequestOptions): APIPromise<OrgRetrieveRegionsResponse> {
    return this._client.get('/v1/org/regions', options);
  }
}

export type OrgRetrieveDomainsResponse = Array<OrgRetrieveDomainsResponse.OrgRetrieveDomainsResponseItem>;

export namespace OrgRetrieveDomainsResponse {
  export interface OrgRetrieveDomainsResponseItem {
    id: string;

    created_at: string;

    name: string;
  }
}

export type OrgRetrieveModelsResponse = Array<CategoriesAPI.OrgItem>;

export type OrgRetrieveRegionsResponse = Array<CategoriesAPI.OrgItem>;

Org.Categories = Categories;

export declare namespace Org {
  export {
    type OrgRetrieveDomainsResponse as OrgRetrieveDomainsResponse,
    type OrgRetrieveModelsResponse as OrgRetrieveModelsResponse,
    type OrgRetrieveRegionsResponse as OrgRetrieveRegionsResponse,
  };

  export {
    Categories as Categories,
    type OrgItem as OrgItem,
    type CategoryListResponse as CategoryListResponse,
    type CategoryRetrievePromptsResponse as CategoryRetrievePromptsResponse,
    type CategoryRetrieveTagsResponse as CategoryRetrieveTagsResponse,
    type CategoryRetrieveTopicsResponse as CategoryRetrieveTopicsResponse,
  };
}

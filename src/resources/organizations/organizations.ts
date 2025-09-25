// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CategoriesAPI from './categories';
import {
  Categories,
  CategoryListResponse,
  CategoryPromptsResponse,
  CategoryTagsResponse,
  CategoryTopicsResponse,
  OrgItem,
} from './categories';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Organizations extends APIResource {
  categories: CategoriesAPI.Categories = new CategoriesAPI.Categories(this._client);

  /**
   * Get the organization domains.
   */
  domains(options?: RequestOptions): APIPromise<OrganizationDomainsResponse> {
    return this._client.get('/v1/org/domains', options);
  }

  /**
   * Get the organization models.
   */
  models(options?: RequestOptions): APIPromise<OrganizationModelsResponse> {
    return this._client.get('/v1/org/models', options);
  }

  /**
   * Get the organization regions.
   */
  regions(options?: RequestOptions): APIPromise<OrganizationRegionsResponse> {
    return this._client.get('/v1/org/regions', options);
  }
}

export type OrganizationDomainsResponse = Array<OrganizationDomainsResponse.OrganizationDomainsResponseItem>;

export namespace OrganizationDomainsResponse {
  export interface OrganizationDomainsResponseItem {
    id: string;

    created_at: string;

    name: string;
  }
}

export type OrganizationModelsResponse = Array<CategoriesAPI.OrgItem>;

export type OrganizationRegionsResponse = Array<CategoriesAPI.OrgItem>;

Organizations.Categories = Categories;

export declare namespace Organizations {
  export {
    type OrganizationDomainsResponse as OrganizationDomainsResponse,
    type OrganizationModelsResponse as OrganizationModelsResponse,
    type OrganizationRegionsResponse as OrganizationRegionsResponse,
  };

  export {
    Categories as Categories,
    type OrgItem as OrgItem,
    type CategoryListResponse as CategoryListResponse,
    type CategoryPromptsResponse as CategoryPromptsResponse,
    type CategoryTagsResponse as CategoryTagsResponse,
    type CategoryTopicsResponse as CategoryTopicsResponse,
  };
}

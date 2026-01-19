// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CategoriesAPI from './categories';
import {
  Categories,
  CategoryAssetsResponse,
  CategoryGetCategoryPersonasResponse,
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
   * Get Personas
   */
  getPersonas(options?: RequestOptions): APIPromise<OrganizationGetPersonasResponse> {
    return this._client.get('/v1/org/personas', options);
  }

  /**
   * Get Assets
   */
  listAssets(options?: RequestOptions): APIPromise<OrganizationListAssetsResponse> {
    return this._client.get('/v1/org/assets', options);
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

export interface OrganizationGetPersonasResponse {
  data: Array<OrganizationGetPersonasResponse.Data>;
}

export namespace OrganizationGetPersonasResponse {
  export interface Data {
    id: string;

    category: CategoriesAPI.OrgItem;

    name: string;

    persona: Data.Persona;
  }

  export namespace Data {
    export interface Persona {
      behavior: Persona.Behavior;

      demographics: Persona.Demographics;

      employment: Persona.Employment;
    }

    export namespace Persona {
      export interface Behavior {
        motivations?: string | null;

        painPoints?: string | null;
      }

      export interface Demographics {
        ageRange?: Array<string>;
      }

      export interface Employment {
        companySize?: Array<string>;

        industry?: Array<string>;

        jobTitle?: Array<string>;

        roleSeniority?: Array<string>;
      }
    }
  }
}

export interface OrganizationListAssetsResponse {
  data: Array<OrganizationListAssetsResponse.Data>;
}

export namespace OrganizationListAssetsResponse {
  export interface Data {
    id: string;

    category: CategoriesAPI.OrgItem;

    created_at: string;

    is_owned: boolean;

    logo_url: string;

    name: string;

    website: string;

    alternate_domains?: Array<string> | null;
  }
}

export type OrganizationModelsResponse = Array<CategoriesAPI.OrgItem>;

export type OrganizationRegionsResponse = Array<CategoriesAPI.OrgItem>;

Organizations.Categories = Categories;

export declare namespace Organizations {
  export {
    type OrganizationDomainsResponse as OrganizationDomainsResponse,
    type OrganizationGetPersonasResponse as OrganizationGetPersonasResponse,
    type OrganizationListAssetsResponse as OrganizationListAssetsResponse,
    type OrganizationModelsResponse as OrganizationModelsResponse,
    type OrganizationRegionsResponse as OrganizationRegionsResponse,
  };

  export {
    Categories as Categories,
    type OrgItem as OrgItem,
    type CategoryListResponse as CategoryListResponse,
    type CategoryAssetsResponse as CategoryAssetsResponse,
    type CategoryGetCategoryPersonasResponse as CategoryGetCategoryPersonasResponse,
    type CategoryPromptsResponse as CategoryPromptsResponse,
    type CategoryTagsResponse as CategoryTagsResponse,
    type CategoryTopicsResponse as CategoryTopicsResponse,
  };
}

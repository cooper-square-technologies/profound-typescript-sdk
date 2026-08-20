// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import type * as Shared from '../shared';
import * as CategoriesAPI from './categories';
import {
  Categories,
  type IDOrName,
  type NamedResourceDiffList,
  type FieldDiff,
  type CategoryListResponse,
  type CategoryTopicsResponse,
  type CategoryTagsResponse,
  type CategoryPromptsResponse,
  type CategoryAssetsResponse,
  type CategoryGetCategoryPersonasResponse,
  type CategoryCreatePromptsResponse,
  type CategoryUpdatePromptsResponse,
  type CategoryUpdatePromptStatusResponse,
  type CategoryRetrieveRegionsResponse,
  type CategoryGetCitationCategoriesResponse,
  type CategoryListParams,
  type CategoryPromptsParams,
  type CategoryCreatePromptsParams,
  type CategoryUpdatePromptsParams,
  type CategoryUpdatePromptStatusParams,
} from './categories';

export class Organizations extends APIResource {
  categories: CategoriesAPI.Categories = new CategoriesAPI.Categories(this._client);

  /**
   * Get the organization regions.
   *
   * @param {OrganizationRegionsParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OrganizationRegionsResponse>} Successful Response
   *
   * @example
   * ```ts
   * const regions = await client.organizations.regions();
   * ```
   */
  regions(
    query: OrganizationRegionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrganizationRegionsResponse> {
    return this._client.get('/v1/org/regions', { query, ...options });
  }

  /**
   * Get the organization models.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OrganizationModelsResponse>} Successful Response
   *
   * @example
   * ```ts
   * const models = await client.organizations.models();
   * ```
   */
  models(options?: RequestOptions): APIPromise<OrganizationModelsResponse> {
    return this._client.get('/v1/org/models', options);
  }

  /**
   * Get the organization domains.
   *
   * @param {OrganizationDomainsParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OrganizationDomainsResponse>} Successful Response
   *
   * @example
   * ```ts
   * const domains = await client.organizations.domains();
   * ```
   */
  domains(
    query: OrganizationDomainsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrganizationDomainsResponse> {
    return this._client.get('/v1/org/domains', { query, ...options });
  }

  /**
   * Get the organization assets, one row per (asset, organization) pair.
   *
   * An asset's category can belong to multiple organizations; one asset row is
   * emitted per owning org so no association is silently dropped.
   *
   * @param {OrganizationListAssetsParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OrganizationListAssetsResponse>} Successful Response
   *
   * @example
   * ```ts
   * const listAssets = await client.organizations.listAssets();
   * ```
   */
  listAssets(
    query: OrganizationListAssetsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrganizationListAssetsResponse> {
    return this._client.get('/v1/org/assets', { query, ...options });
  }

  /**
   * Get the organization personas, one row per (persona, organization) pair.
   *
   * Same (item, org) fan-out as ``get_assets``: a persona's category can be
   * owned by multiple orgs, and each owning org gets its own row so no
   * association is silently dropped.
   *
   * @param {OrganizationGetPersonasParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OrganizationGetPersonasResponse>} Successful Response
   *
   * @example
   * ```ts
   * const getPersonas = await client.organizations.getPersonas();
   * ```
   */
  getPersonas(
    query: OrganizationGetPersonasParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrganizationGetPersonasResponse> {
    return this._client.get('/v1/org/personas', { query, ...options });
  }

  /**
   * Return every organization the caller's API key grants access to. Use this to discover organization IDs before calling endpoints that accept an `organization_id` filter.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OrganizationListResponse>} Successful Response
   *
   * @example
   * ```ts
   * const list = await client.organizations.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<OrganizationListResponse> {
    return this._client.get('/v1/org', options);
  }
}

/**
 * Generic id+name reference used across domain boundaries.
 */
export interface NamedResource {
  id: string;
  name: string;
}

export interface PersonaProfile {
  behavior: PersonaProfileBehavior;
  employment: PersonaProfileEmployment;
  demographics: PersonaProfileDemographics;
}

export interface PersonaProfileBehavior {
  painPoints?: string | null;
  motivations?: string | null;
}

export interface PersonaProfileDemographics {
  ageRange?: Array<string>;
}

export interface PersonaProfileEmployment {
  industry?: Array<string>;
  jobTitle?: Array<string>;
  companySize?: Array<string>;
  roleSeniority?: Array<string>;
}

export interface Organization {
  /**
   * @format uuid
   */
  id: string;
  name: string | null;
}

export interface Category {
  /**
   * @format uuid
   */
  id: string;
  name: string;
  internal_name?: string | null;
}

export interface OrganizationRegionsParams {
  /**
   * Restrict results to one or more organizations the caller belongs to. Repeat the parameter to target multiple orgs (e.g. `?organization_ids=<id1>&organization_ids=<id2>`). Omit to return data from every organization the caller has access to.
   */
  organization_ids?: Array<string> | null;
}

export type OrganizationRegionsResponse = Array<NamedResource>;

export type OrganizationModelsResponse = Array<NamedResource>;

export interface OrganizationDomainsParams {
  /**
   * Restrict results to one or more organizations the caller belongs to. Repeat the parameter to target multiple orgs (e.g. `?organization_ids=<id1>&organization_ids=<id2>`). Omit to return data from every organization the caller has access to.
   */
  organization_ids?: Array<string> | null;
}

export type OrganizationDomainsResponse = Array<OrganizationDomainsResponse.OrganizationDomainsResponseItem>;

export namespace OrganizationDomainsResponse {
  export interface OrganizationDomainsResponseItem {
    /**
     * @format date-time
     */
    created_at: string;
    /**
     * @format uuid
     */
    id: string;
    name: string;
    organization: Organization;
  }
}

export interface OrganizationListAssetsParams {
  /**
   * Restrict results to one or more organizations the caller belongs to. Repeat the parameter to target multiple orgs (e.g. `?organization_ids=<id1>&organization_ids=<id2>`). Omit to return data from every organization the caller has access to.
   */
  organization_ids?: Array<string> | null;
}

export interface OrganizationListAssetsResponse {
  data: Array<OrganizationListAssetsResponse.Data>;
}

export namespace OrganizationListAssetsResponse {
  export interface Data {
    /**
     * @format uuid
     */
    id: string;
    name: string;
    website: string;
    is_owned: boolean;
    /**
     * @format date-time
     */
    created_at: string;
    logo_url: string;
    category: Category;
    organization: Organization;
    alternate_domains?: Array<string> | null;
  }
}

export interface OrganizationGetPersonasParams {
  /**
   * Restrict results to one or more organizations the caller belongs to. Repeat the parameter to target multiple orgs (e.g. `?organization_ids=<id1>&organization_ids=<id2>`). Omit to return data from every organization the caller has access to.
   */
  organization_ids?: Array<string> | null;
}

export interface OrganizationGetPersonasResponse {
  data: Array<OrganizationGetPersonasResponse.Data>;
}

export namespace OrganizationGetPersonasResponse {
  export interface Data {
    id: string;
    name: string;
    persona: PersonaProfile;
    category: Category;
    organization: Organization;
  }
}

export type OrganizationListResponse = Array<Organization>;
Organizations.Categories = Categories;

export declare namespace Organizations {
  export {
    type NamedResource as NamedResource,
    type PersonaProfile as PersonaProfile,
    type PersonaProfileBehavior as PersonaProfileBehavior,
    type PersonaProfileDemographics as PersonaProfileDemographics,
    type PersonaProfileEmployment as PersonaProfileEmployment,
    type Organization as Organization,
    type Category as Category,
    type OrganizationRegionsResponse as OrganizationRegionsResponse,
    type OrganizationModelsResponse as OrganizationModelsResponse,
    type OrganizationDomainsResponse as OrganizationDomainsResponse,
    type OrganizationListAssetsResponse as OrganizationListAssetsResponse,
    type OrganizationGetPersonasResponse as OrganizationGetPersonasResponse,
    type OrganizationListResponse as OrganizationListResponse,
    type OrganizationRegionsParams as OrganizationRegionsParams,
    type OrganizationDomainsParams as OrganizationDomainsParams,
    type OrganizationListAssetsParams as OrganizationListAssetsParams,
    type OrganizationGetPersonasParams as OrganizationGetPersonasParams,
  };

  export {
    Categories as Categories,
    type IDOrName as IDOrName,
    type NamedResourceDiffList as NamedResourceDiffList,
    type FieldDiff as FieldDiff,
    type CategoryListResponse as CategoryListResponse,
    type CategoryTopicsResponse as CategoryTopicsResponse,
    type CategoryTagsResponse as CategoryTagsResponse,
    type CategoryPromptsResponse as CategoryPromptsResponse,
    type CategoryAssetsResponse as CategoryAssetsResponse,
    type CategoryGetCategoryPersonasResponse as CategoryGetCategoryPersonasResponse,
    type CategoryCreatePromptsResponse as CategoryCreatePromptsResponse,
    type CategoryUpdatePromptsResponse as CategoryUpdatePromptsResponse,
    type CategoryUpdatePromptStatusResponse as CategoryUpdatePromptStatusResponse,
    type CategoryRetrieveRegionsResponse as CategoryRetrieveRegionsResponse,
    type CategoryGetCitationCategoriesResponse as CategoryGetCitationCategoriesResponse,
    type CategoryListParams as CategoryListParams,
    type CategoryPromptsParams as CategoryPromptsParams,
    type CategoryCreatePromptsParams as CategoryCreatePromptsParams,
    type CategoryUpdatePromptsParams as CategoryUpdatePromptsParams,
    type CategoryUpdatePromptStatusParams as CategoryUpdatePromptStatusParams,
  };
}

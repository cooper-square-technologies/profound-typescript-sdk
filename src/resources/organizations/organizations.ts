// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrganizationsAPI from './organizations';
import * as CategoriesAPI from './categories';
import { Categories, CategoryAssetsResponse, CategoryCreatePromptsParams, CategoryCreatePromptsResponse, CategoryGetCategoryPersonasResponse, CategoryListParams, CategoryListResponse, CategoryPromptsParams, CategoryPromptsResponse, CategoryTagsResponse, CategoryTopicsResponse, CategoryUpdatePromptStatusParams, CategoryUpdatePromptStatusResponse, CategoryUpdatePromptsParams, CategoryUpdatePromptsResponse, FieldDiff, IDOrName, NamedResourceDiffList } from './categories';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Organizations extends APIResource {
  categories: CategoriesAPI.Categories = new CategoriesAPI.Categories(this._client);

  /**
   * Return every organization the caller's API key grants access to. Use this to
   * discover organization IDs before calling endpoints that accept an
   * `organization_id` filter.
   */
  list(options?: RequestOptions): APIPromise<OrganizationListResponse> {
    return this._client.get('/v1/org', options);
  }

  /**
   * Get the organization domains.
   */
  domains(query: OrganizationDomainsParams | null | undefined = {}, options?: RequestOptions): APIPromise<OrganizationDomainsResponse> {
    return this._client.get('/v1/org/domains', { query, ...options });
  }

  /**
   * Get the organization personas, one row per (persona, organization) pair.
   *
   * Same (item, org) fan-out as `get_assets`: a persona's category can be owned by
   * multiple orgs, and each owning org gets its own row so no association is
   * silently dropped.
   */
  getPersonas(query: OrganizationGetPersonasParams | null | undefined = {}, options?: RequestOptions): APIPromise<OrganizationGetPersonasResponse> {
    return this._client.get('/v1/org/personas', { query, ...options });
  }

  /**
   * Get the organization assets, one row per (asset, organization) pair.
   *
   * An asset's category can belong to multiple organizations; one asset row is
   * emitted per owning org so no association is silently dropped.
   */
  listAssets(query: OrganizationListAssetsParams | null | undefined = {}, options?: RequestOptions): APIPromise<OrganizationListAssetsResponse> {
    return this._client.get('/v1/org/assets', { query, ...options });
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
  regions(query: OrganizationRegionsParams | null | undefined = {}, options?: RequestOptions): APIPromise<OrganizationRegionsResponse> {
    return this._client.get('/v1/org/regions', { query, ...options });
  }
}

export interface Category {
  id: string;

  name: string;
}

/**
 * Generic id+name reference used across domain boundaries.
 */
export interface NamedResource {
  id: string;

  name: string;
}

export interface Organization {
  id: string;

  name: string | null;
}

export interface PersonaProfile {
  behavior: PersonaProfileBehavior;

  demographics: PersonaProfileDemographics;

  employment: PersonaProfileEmployment;
}

export interface PersonaProfileBehavior {
  motivations?: string | null;

  painPoints?: string | null;
}

export interface PersonaProfileDemographics {
  ageRange?: Array<string>;
}

export interface PersonaProfileEmployment {
  companySize?: Array<string>;

  industry?: Array<string>;

  jobTitle?: Array<string>;

  roleSeniority?: Array<string>;
}

export type OrganizationListResponse = Array<Organization>

export type OrganizationDomainsResponse = Array<OrganizationDomainsResponse.OrganizationDomainsResponseItem>

export namespace OrganizationDomainsResponse {
  /**
   * A domain paired with the organization edge it belongs to.
   */
  export interface OrganizationDomainsResponseItem {
    id: string;

    created_at: string;

    name: string;

    organization: OrganizationsAPI.Organization;
  }
}

export interface OrganizationGetPersonasResponse {
  data: Array<OrganizationGetPersonasResponse.Data>;
}

export namespace OrganizationGetPersonasResponse {
  export interface Data {
    id: string;

    category: OrganizationsAPI.Category;

    name: string;

    organization: OrganizationsAPI.Organization;

    persona: OrganizationsAPI.PersonaProfile;
  }
}

export interface OrganizationListAssetsResponse {
  data: Array<OrganizationListAssetsResponse.Data>;
}

export namespace OrganizationListAssetsResponse {
  export interface Data {
    id: string;

    category: OrganizationsAPI.Category;

    created_at: string;

    is_owned: boolean;

    logo_url: string;

    name: string;

    organization: OrganizationsAPI.Organization;

    website: string;

    alternate_domains?: Array<string> | null;
  }
}

export type OrganizationModelsResponse = Array<NamedResource>

export type OrganizationRegionsResponse = Array<NamedResource>

export interface OrganizationDomainsParams {
  /**
   * Restrict results to one or more organizations the caller belongs to. Repeat the
   * parameter to target multiple orgs (e.g.
   * `?organization_ids=<id1>&organization_ids=<id2>`). Omit to return data from
   * every organization the caller has access to.
   */
  organization_ids?: Array<string> | null;
}

export interface OrganizationGetPersonasParams {
  /**
   * Restrict results to one or more organizations the caller belongs to. Repeat the
   * parameter to target multiple orgs (e.g.
   * `?organization_ids=<id1>&organization_ids=<id2>`). Omit to return data from
   * every organization the caller has access to.
   */
  organization_ids?: Array<string> | null;
}

export interface OrganizationListAssetsParams {
  /**
   * Restrict results to one or more organizations the caller belongs to. Repeat the
   * parameter to target multiple orgs (e.g.
   * `?organization_ids=<id1>&organization_ids=<id2>`). Omit to return data from
   * every organization the caller has access to.
   */
  organization_ids?: Array<string> | null;
}

export interface OrganizationRegionsParams {
  /**
   * Restrict results to one or more organizations the caller belongs to. Repeat the
   * parameter to target multiple orgs (e.g.
   * `?organization_ids=<id1>&organization_ids=<id2>`). Omit to return data from
   * every organization the caller has access to.
   */
  organization_ids?: Array<string> | null;
}

Organizations.Categories = Categories;

export declare namespace Organizations {
  export {
    type Category as Category,
    type NamedResource as NamedResource,
    type Organization as Organization,
    type PersonaProfile as PersonaProfile,
    type PersonaProfileBehavior as PersonaProfileBehavior,
    type PersonaProfileDemographics as PersonaProfileDemographics,
    type PersonaProfileEmployment as PersonaProfileEmployment,
    type OrganizationListResponse as OrganizationListResponse,
    type OrganizationDomainsResponse as OrganizationDomainsResponse,
    type OrganizationGetPersonasResponse as OrganizationGetPersonasResponse,
    type OrganizationListAssetsResponse as OrganizationListAssetsResponse,
    type OrganizationModelsResponse as OrganizationModelsResponse,
    type OrganizationRegionsResponse as OrganizationRegionsResponse,
    type OrganizationDomainsParams as OrganizationDomainsParams,
    type OrganizationGetPersonasParams as OrganizationGetPersonasParams,
    type OrganizationListAssetsParams as OrganizationListAssetsParams,
    type OrganizationRegionsParams as OrganizationRegionsParams
  };

  export {
    Categories as Categories,
    type FieldDiff as FieldDiff,
    type IDOrName as IDOrName,
    type NamedResourceDiffList as NamedResourceDiffList,
    type CategoryListResponse as CategoryListResponse,
    type CategoryAssetsResponse as CategoryAssetsResponse,
    type CategoryCreatePromptsResponse as CategoryCreatePromptsResponse,
    type CategoryGetCategoryPersonasResponse as CategoryGetCategoryPersonasResponse,
    type CategoryPromptsResponse as CategoryPromptsResponse,
    type CategoryTagsResponse as CategoryTagsResponse,
    type CategoryTopicsResponse as CategoryTopicsResponse,
    type CategoryUpdatePromptStatusResponse as CategoryUpdatePromptStatusResponse,
    type CategoryUpdatePromptsResponse as CategoryUpdatePromptsResponse,
    type CategoryListParams as CategoryListParams,
    type CategoryCreatePromptsParams as CategoryCreatePromptsParams,
    type CategoryPromptsParams as CategoryPromptsParams,
    type CategoryUpdatePromptStatusParams as CategoryUpdatePromptStatusParams,
    type CategoryUpdatePromptsParams as CategoryUpdatePromptsParams
  };
}

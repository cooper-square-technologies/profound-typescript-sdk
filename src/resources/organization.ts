// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { path as __scalarPath } from '../internal/utils/path';
import type * as Shared from './shared';

export class OrganizationResource extends APIResource {
  /**
   * Return every organization the caller's API key grants access to. Use this to discover organization IDs before calling endpoints that accept an `organization_id` filter.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OrganizationListV1OrgGetResponse>} Successful Response
   *
   * @example
   * ```ts
   * const listV1OrgGet = await client.organization.listV1OrgGet();
   * ```
   */
  listV1OrgGet(options?: RequestOptions): APIPromise<OrganizationListV1OrgGetResponse> {
    return this._client.get('/v1/org', options);
  }

  /**
   * Get the organization regions.
   *
   * @param {OrganizationListRegionsV1OrgRegionsGetParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OrganizationListRegionsV1OrgRegionsGetResponse>} Successful Response
   *
   * @example
   * ```ts
   * const listRegionsV1OrgRegionsGet = await client.organization.listRegionsV1OrgRegionsGet();
   * ```
   */
  listRegionsV1OrgRegionsGet(
    query: OrganizationListRegionsV1OrgRegionsGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrganizationListRegionsV1OrgRegionsGetResponse> {
    return this._client.get('/v1/org/regions', { query, ...options });
  }

  /**
   * Get the organization models.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OrganizationListModelsV1OrgModelsGetResponse>} Successful Response
   *
   * @example
   * ```ts
   * const listModelsV1OrgModelsGet = await client.organization.listModelsV1OrgModelsGet();
   * ```
   */
  listModelsV1OrgModelsGet(
    options?: RequestOptions,
  ): APIPromise<OrganizationListModelsV1OrgModelsGetResponse> {
    return this._client.get('/v1/org/models', options);
  }

  /**
   * Get the organization domains.
   *
   * @param {OrganizationListDomainsV1OrgDomainsGetParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OrganizationListDomainsV1OrgDomainsGetResponse>} Successful Response
   *
   * @example
   * ```ts
   * const listDomainsV1OrgDomainsGet = await client.organization.listDomainsV1OrgDomainsGet();
   * ```
   */
  listDomainsV1OrgDomainsGet(
    query: OrganizationListDomainsV1OrgDomainsGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrganizationListDomainsV1OrgDomainsGetResponse> {
    return this._client.get('/v1/org/domains', { query, ...options });
  }

  /**
   * Get the organization assets, one row per (asset, organization) pair.
   *
   * An asset's category can belong to multiple organizations; one asset row is
   * emitted per owning org so no association is silently dropped.
   *
   * @param {OrganizationListAssetsV1OrgAssetsGetParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OrganizationListAssetsV1OrgAssetsGetResponse>} Successful Response
   *
   * @example
   * ```ts
   * const listAssetsV1OrgAssetsGet = await client.organization.listAssetsV1OrgAssetsGet();
   * ```
   */
  listAssetsV1OrgAssetsGet(
    query: OrganizationListAssetsV1OrgAssetsGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrganizationListAssetsV1OrgAssetsGetResponse> {
    return this._client.get('/v1/org/assets', { query, ...options });
  }

  /**
   * Get the organization personas, one row per (persona, organization) pair.
   *
   * Same (item, org) fan-out as ``get_assets``: a persona's category can be
   * owned by multiple orgs, and each owning org gets its own row so no
   * association is silently dropped.
   *
   * @param {OrganizationListPersonasV1OrgPersonasGetParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OrganizationListPersonasV1OrgPersonasGetResponse>} Successful Response
   *
   * @example
   * ```ts
   * const listPersonasV1OrgPersonasGet = await client.organization.listPersonasV1OrgPersonasGet();
   * ```
   */
  listPersonasV1OrgPersonasGet(
    query: OrganizationListPersonasV1OrgPersonasGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrganizationListPersonasV1OrgPersonasGetResponse> {
    return this._client.get('/v1/org/personas', { query, ...options });
  }

  /**
   * Get the organization categories, one row per (category, organization) pair.
   *
   * @param {OrganizationListCategoriesV1OrgCategoriesGetParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OrganizationListCategoriesV1OrgCategoriesGetResponse>} Successful Response
   *
   * @example
   * ```ts
   * const listCategoriesV1OrgCategoriesGet = await client.organization.listCategoriesV1OrgCategoriesGet();
   * ```
   */
  listCategoriesV1OrgCategoriesGet(
    query: OrganizationListCategoriesV1OrgCategoriesGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrganizationListCategoriesV1OrgCategoriesGetResponse> {
    return this._client.get('/v1/org/categories', { query, ...options });
  }

  /**
   * Get the topics for a specific category.
   *
   * @param {string} categoryID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OrganizationListCategoryTopicsV1OrgCategoriesCategoryTopicsGetResponse>} Successful Response
   *
   * @example
   * ```ts
   * const listCategoryTopicsV1OrgCategoriesCategoryTopicsGet =
   *   await client.organization.listCategoryTopicsV1OrgCategoriesCategoryTopicsGet(
   *     '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   );
   * ```
   */
  listCategoryTopicsV1OrgCategoriesCategoryTopicsGet(
    categoryID: string,
    options?: RequestOptions,
  ): APIPromise<OrganizationListCategoryTopicsV1OrgCategoriesCategoryTopicsGetResponse> {
    return this._client.get(__scalarPath`/v1/org/categories/${categoryID}/topics`, options);
  }

  /**
   * Get the tags for a specific category.
   *
   * @param {string} categoryID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OrganizationListCategoryTagsV1OrgCategoriesCategoryTagsGetResponse>} Successful Response
   *
   * @example
   * ```ts
   * const listCategoryTagsV1OrgCategoriesCategoryTagsGet =
   *   await client.organization.listCategoryTagsV1OrgCategoriesCategoryTagsGet(
   *     '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   );
   * ```
   */
  listCategoryTagsV1OrgCategoriesCategoryTagsGet(
    categoryID: string,
    options?: RequestOptions,
  ): APIPromise<OrganizationListCategoryTagsV1OrgCategoriesCategoryTagsGetResponse> {
    return this._client.get(__scalarPath`/v1/org/categories/${categoryID}/tags`, options);
  }

  /**
   * Get the regions for a specific category.
   *
   * @param {string} categoryID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OrganizationListCategoryRegionsV1OrgCategoriesCategoryRegionsGetResponse>} Successful Response
   *
   * @example
   * ```ts
   * const listCategoryRegionsV1OrgCategoriesCategoryRegionsGet =
   *   await client.organization.listCategoryRegionsV1OrgCategoriesCategoryRegionsGet(
   *     '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   );
   * ```
   */
  listCategoryRegionsV1OrgCategoriesCategoryRegionsGet(
    categoryID: string,
    options?: RequestOptions,
  ): APIPromise<OrganizationListCategoryRegionsV1OrgCategoriesCategoryRegionsGetResponse> {
    return this._client.get(__scalarPath`/v1/org/categories/${categoryID}/regions`, options);
  }

  /**
   * Get the citation categories for a category: the built-in buckets plus any custom categories.
   *
   * @param {string} categoryID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OrganizationListCategoryCitationCategoriesV1OrgCategoriesCategoryCitationCategoriesGetResponse>} Successful Response
   *
   * @example
   * ```ts
   * const listCategoryCitationCategoriesV1OrgCategoriesCategoryCitationCategoriesGet =
   *   await client.organization.listCategoryCitationCategoriesV1OrgCategoriesCategoryCitationCategoriesGet(
   *     '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   );
   * ```
   */
  listCategoryCitationCategoriesV1OrgCategoriesCategoryCitationCategoriesGet(
    categoryID: string,
    options?: RequestOptions,
  ): APIPromise<OrganizationListCategoryCitationCategoriesV1OrgCategoriesCategoryCitationCategoriesGetResponse> {
    return this._client.get(__scalarPath`/v1/org/categories/${categoryID}/citation-categories`, options);
  }

  /**
   * Get the custom citation tags defined for a category.
   *
   * @param {string} categoryID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OrganizationListCategoryCitationTagsV1OrgCategoriesCategoryCitationTagsGetResponse>} Successful Response
   *
   * @example
   * ```ts
   * const listCategoryCitationTagsV1OrgCategoriesCategoryCitationTagsGet =
   *   await client.organization.listCategoryCitationTagsV1OrgCategoriesCategoryCitationTagsGet(
   *     '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   );
   * ```
   */
  listCategoryCitationTagsV1OrgCategoriesCategoryCitationTagsGet(
    categoryID: string,
    options?: RequestOptions,
  ): APIPromise<OrganizationListCategoryCitationTagsV1OrgCategoriesCategoryCitationTagsGetResponse> {
    return this._client.get(__scalarPath`/v1/org/categories/${categoryID}/citation-tags`, options);
  }

  /**
   * Retrieve prompts in a category with optional filtering by type, topic, tag, region, platform, or persona. Supports cursor-based pagination.
   *
   * @param {string} categoryID
   * @param {OrganizationListCategoryPromptsV1OrgCategoriesCategoryPromptsGetParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OrganizationListCategoryPromptsV1OrgCategoriesCategoryPromptsGetResponse>} Successful Response
   *
   * @example
   * ```ts
   * const listCategoryPromptsV1OrgCategoriesCategoryPromptsGet =
   *   await client.organization.listCategoryPromptsV1OrgCategoriesCategoryPromptsGet(
   *     '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *     {
   *       limit: 10000,
   *       status: ['active'],
   *     },
   *   );
   * ```
   */
  listCategoryPromptsV1OrgCategoriesCategoryPromptsGet(
    categoryID: string,
    query: OrganizationListCategoryPromptsV1OrgCategoriesCategoryPromptsGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrganizationListCategoryPromptsV1OrgCategoriesCategoryPromptsGetResponse> {
    return this._client.get(__scalarPath`/v1/org/categories/${categoryID}/prompts`, { query, ...options });
  }

  /**
   * Create one or more prompts in a category. Topics and tags are auto-created if referenced by name and not yet existing. Use dry_run to preview without persisting.
   *
   * @param {string} categoryID
   * @param {OrganizationCreateCategoryPromptsV1OrgCategoriesCategoryIDPromptsPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OrganizationCreateCategoryPromptsV1OrgCategoriesCategoryIDPromptsPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const createCategoryPromptsV1OrgCategoriesCategoryIDPromptsPost =
   *   await client.organization.createCategoryPromptsV1OrgCategoriesCategoryIDPromptsPost(
   *     '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *     {
   *       prompts: [],
   *       dry_run: false,
   *     },
   *   );
   * ```
   */
  createCategoryPromptsV1OrgCategoriesCategoryIDPromptsPost(
    categoryID: string,
    body: OrganizationCreateCategoryPromptsV1OrgCategoriesCategoryIDPromptsPostParams,
    options?: RequestOptions,
  ): APIPromise<OrganizationCreateCategoryPromptsV1OrgCategoriesCategoryIDPromptsPostResponse> {
    return this._client.post(__scalarPath`/v1/org/categories/${categoryID}/prompts`, { body, ...options });
  }

  /**
   * Update one or more existing prompts. Only provided fields are changed. Dimension fields (regions, platforms, personas, tags) replace the full set when provided. Use dry_run to preview without persisting.
   *
   * @param {string} categoryID
   * @param {OrganizationUpdateCategoryPromptsV1OrgCategoriesCategoryIDPromptsPatchParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OrganizationUpdateCategoryPromptsV1OrgCategoriesCategoryIDPromptsPatchResponse>} Successful Response
   *
   * @example
   * ```ts
   * const updateCategoryPromptsV1OrgCategoriesCategoryIDPromptsPatch =
   *   await client.organization.updateCategoryPromptsV1OrgCategoriesCategoryIDPromptsPatch(
   *     '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *     {
   *       prompts: [],
   *       dry_run: false,
   *     },
   *   );
   * ```
   */
  updateCategoryPromptsV1OrgCategoriesCategoryIDPromptsPatch(
    categoryID: string,
    body: OrganizationUpdateCategoryPromptsV1OrgCategoriesCategoryIDPromptsPatchParams,
    options?: RequestOptions,
  ): APIPromise<OrganizationUpdateCategoryPromptsV1OrgCategoriesCategoryIDPromptsPatchResponse> {
    return this._client.patch(__scalarPath`/v1/org/categories/${categoryID}/prompts`, { body, ...options });
  }

  /**
   * Bulk-update the status of one or more prompts. Prompts already in the target status are skipped. Use dry_run to preview without persisting.
   *
   * Status options:
   * - 'active': Prompts will run daily.
   * - 'disabled': Prompts will not run moving forward, but historical data is preserved.
   * - 'deleted': Prompts are deleted along with historical data
   *
   * @param {string} categoryID
   * @param {OrganizationUpdateCategoryPromptStatusV1OrgCategoriesCategoryIDPromptsStatusPatchParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OrganizationUpdateCategoryPromptStatusV1OrgCategoriesCategoryIDPromptsStatusPatchResponse>} Successful Response
   *
   * @example
   * ```ts
   * const updateCategoryPromptStatusV1OrgCategoriesCategoryIDPromptsStatusPatch =
   *   await client.organization.updateCategoryPromptStatusV1OrgCategoriesCategoryIDPromptsStatusPatch(
   *     '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *     {
   *       prompt_ids: [],
   *       status: 'active',
   *       dry_run: false,
   *     },
   *   );
   * ```
   */
  updateCategoryPromptStatusV1OrgCategoriesCategoryIDPromptsStatusPatch(
    categoryID: string,
    body: OrganizationUpdateCategoryPromptStatusV1OrgCategoriesCategoryIDPromptsStatusPatchParams,
    options?: RequestOptions,
  ): APIPromise<OrganizationUpdateCategoryPromptStatusV1OrgCategoriesCategoryIDPromptsStatusPatchResponse> {
    return this._client.patch(__scalarPath`/v1/org/categories/${categoryID}/prompts/status`, {
      body,
      ...options,
    });
  }

  /**
   * Get Category Assets
   *
   * @param {string} categoryID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OrganizationListCategoryAssetsV1OrgCategoriesCategoryAssetsGetResponse>} Successful Response
   *
   * @example
   * ```ts
   * const listCategoryAssetsV1OrgCategoriesCategoryAssetsGet =
   *   await client.organization.listCategoryAssetsV1OrgCategoriesCategoryAssetsGet(
   *     '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   );
   * ```
   */
  listCategoryAssetsV1OrgCategoriesCategoryAssetsGet(
    categoryID: string,
    options?: RequestOptions,
  ): APIPromise<OrganizationListCategoryAssetsV1OrgCategoriesCategoryAssetsGetResponse> {
    return this._client.get(__scalarPath`/v1/org/categories/${categoryID}/assets`, options);
  }

  /**
   * Get Category Personas
   *
   * @param {string} categoryID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OrganizationListCategoryPersonasV1OrgCategoriesCategoryPersonasGetResponse>} Successful Response
   *
   * @example
   * ```ts
   * const listCategoryPersonasV1OrgCategoriesCategoryPersonasGet =
   *   await client.organization.listCategoryPersonasV1OrgCategoriesCategoryPersonasGet(
   *     '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   );
   * ```
   */
  listCategoryPersonasV1OrgCategoriesCategoryPersonasGet(
    categoryID: string,
    options?: RequestOptions,
  ): APIPromise<OrganizationListCategoryPersonasV1OrgCategoriesCategoryPersonasGetResponse> {
    return this._client.get(__scalarPath`/v1/org/categories/${categoryID}/personas`, options);
  }
}

export interface Organization {
  /**
   * @format uuid
   */
  id: string;
  name: string | null;
}

export interface CreatePromptsBody {
  /**
   * List of prompts to create.
   */
  prompts: Array<CreatePromptsBody.Prompt>;
  /**
   * When true, validate and preview changes without persisting them.
   * @default false
   */
  dry_run?: boolean;
}

export namespace CreatePromptsBody {
  export interface Prompt {
    /**
     * The prompt text to be sent to AI platforms.
     * @minLength 1
     */
    prompt: string;
    /**
     * Topic to assign. A new topic is created if the name doesn't exist.
     */
    topic: Shared.IDOrName;
    /**
     * Language code (e.g. 'en-US')
     */
    language: string;
    /**
     * Regions where the prompt will be collected.
     * @minItems 1
     */
    regions: Array<Shared.IDOrName>;
    /**
     * AI platforms where the prompt will be collected.
     * @minItems 1
     */
    platforms: Array<Shared.IDOrName>;
    /**
     * Optional client-generated UUID for the prompt. When provided, creation is idempotent: retrying a request with the same id will not create a duplicate prompt. Omit to have the server generate one (non-idempotent).
     */
    id?: string | null;
    /**
     * Tags to assign. New tags are created if names don't exist.
     * @default []
     */
    tags?: Array<Shared.IDOrName>;
    /**
     * Personas to use when collecting. Omit for default (no persona).
     * @default []
     */
    personas?: Array<Shared.IDOrName>;
    /**
     * Analysis types: 'visibility', 'sentiment', 'accuracy'. Defaults to ['visibility'].
     */
    analysis_types?: Array<'visibility' | 'sentiment' | 'sentiment_v2' | 'accuracy'> | null;
    /**
     * Deprecated. Use analysis_types instead. 'Visibility' or 'Sentiment'.
     * @deprecated
     */
    prompt_type?: string | null;
    /**
     * Required for Sentiment prompts. The brand asset to evaluate.
     */
    asset?: Shared.IDOrName | null;
  }
}

export interface UpdatePromptsBody {
  /**
   * List of prompt updates. Each entry must include an `id` and at least one field to change.
   */
  prompts: Array<UpdatePromptsBody.Prompt>;
  /**
   * When true, validate and preview changes without persisting them.
   * @default false
   */
  dry_run?: boolean;
}

export namespace UpdatePromptsBody {
  export interface Prompt {
    /**
     * ID of the prompt to update.
     */
    id: string;
    /**
     * New prompt text.
     */
    prompt?: string | null;
    /**
     * New topic. A new topic is created if the name doesn't exist.
     */
    topic?: Shared.IDOrName | null;
    /**
     * New language code. Must be enabled for the organization.
     */
    language?: string | null;
    /**
     * New tag set. Replaces all existing tags on the prompt.
     */
    tags?: Array<Shared.IDOrName> | null;
    /**
     * New region set. Replaces all existing regions.
     */
    regions?: Array<Shared.IDOrName> | null;
    /**
     * New platform set. Replaces all existing platforms.
     */
    platforms?: Array<Shared.IDOrName> | null;
    /**
     * New persona set. Replaces all existing personas.
     */
    personas?: Array<Shared.IDOrName> | null;
    /**
     * New analysis types. Replaces all existing analysis types on the prompt.
     */
    analysis_types?: Array<'visibility' | 'sentiment' | 'sentiment_v2' | 'accuracy'> | null;
    /**
     * Deprecated. Use analysis_types instead.
     * @deprecated
     */
    prompt_type?: string | null;
    /**
     * Asset reference. Required when analysis_types includes 'sentiment'.
     */
    asset?: Shared.IDOrName | null;
  }
}

export interface UpdatePromptStatusBody {
  /**
   * IDs of the prompts to update.
   */
  prompt_ids: Array<string>;
  /**
   * Target status: 'active', 'disabled', or 'deleted'.
   */
  status: 'active' | 'disabled' | 'deleted';
  /**
   * When true, validate and preview changes without persisting them.
   * @default false
   */
  dry_run?: boolean;
}

export type OrganizationListV1OrgGetResponse = Array<Organization>;

export interface OrganizationListRegionsV1OrgRegionsGetParams {
  /**
   * Restrict results to one or more organizations the caller belongs to. Repeat the parameter to target multiple orgs (e.g. `?organization_ids=<id1>&organization_ids=<id2>`). Omit to return data from every organization the caller has access to.
   */
  organization_ids?: Array<string> | null;
}

export type OrganizationListRegionsV1OrgRegionsGetResponse = Array<Shared.NamedResource>;

export type OrganizationListModelsV1OrgModelsGetResponse = Array<Shared.NamedResource>;

export interface OrganizationListDomainsV1OrgDomainsGetParams {
  /**
   * Restrict results to one or more organizations the caller belongs to. Repeat the parameter to target multiple orgs (e.g. `?organization_ids=<id1>&organization_ids=<id2>`). Omit to return data from every organization the caller has access to.
   */
  organization_ids?: Array<string> | null;
}

export type OrganizationListDomainsV1OrgDomainsGetResponse =
  Array<OrganizationListDomainsV1OrgDomainsGetResponse.OrganizationListDomainsV1OrgDomainsGetResponseItem>;

export namespace OrganizationListDomainsV1OrgDomainsGetResponse {
  export interface OrganizationListDomainsV1OrgDomainsGetResponseItem {
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

export interface OrganizationListAssetsV1OrgAssetsGetParams {
  /**
   * Restrict results to one or more organizations the caller belongs to. Repeat the parameter to target multiple orgs (e.g. `?organization_ids=<id1>&organization_ids=<id2>`). Omit to return data from every organization the caller has access to.
   */
  organization_ids?: Array<string> | null;
}

export interface OrganizationListAssetsV1OrgAssetsGetResponse {
  data: Array<OrganizationListAssetsV1OrgAssetsGetResponse.Data>;
}

export namespace OrganizationListAssetsV1OrgAssetsGetResponse {
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
    category: Data.Category;
    organization: Organization;
    alternate_domains?: Array<string> | null;
  }

  export namespace Data {
    export interface Category {
      /**
       * @format uuid
       */
      id: string;
      name: string;
      internal_name?: string | null;
    }
  }
}

export interface OrganizationListPersonasV1OrgPersonasGetParams {
  /**
   * Restrict results to one or more organizations the caller belongs to. Repeat the parameter to target multiple orgs (e.g. `?organization_ids=<id1>&organization_ids=<id2>`). Omit to return data from every organization the caller has access to.
   */
  organization_ids?: Array<string> | null;
}

export interface OrganizationListPersonasV1OrgPersonasGetResponse {
  data: Array<OrganizationListPersonasV1OrgPersonasGetResponse.Data>;
}

export namespace OrganizationListPersonasV1OrgPersonasGetResponse {
  export interface Data {
    id: string;
    name: string;
    persona: Data.Persona;
    category: Data.Category;
    organization: Organization;
  }

  export namespace Data {
    export interface Persona {
      behavior: Persona.Behavior;
      employment: Persona.Employment;
      demographics: Persona.Demographics;
    }

    export namespace Persona {
      export interface Behavior {
        painPoints?: string | null;
        motivations?: string | null;
      }

      export interface Employment {
        industry?: Array<string>;
        jobTitle?: Array<string>;
        companySize?: Array<string>;
        roleSeniority?: Array<string>;
      }

      export interface Demographics {
        ageRange?: Array<string>;
      }
    }

    export interface Category {
      /**
       * @format uuid
       */
      id: string;
      name: string;
      internal_name?: string | null;
    }
  }
}

export interface OrganizationListCategoriesV1OrgCategoriesGetParams {
  /**
   * Restrict results to one or more organizations the caller belongs to. Repeat the parameter to target multiple orgs (e.g. `?organization_ids=<id1>&organization_ids=<id2>`). Omit to return data from every organization the caller has access to.
   */
  organization_ids?: Array<string> | null;
}

export type OrganizationListCategoriesV1OrgCategoriesGetResponse =
  Array<OrganizationListCategoriesV1OrgCategoriesGetResponse.OrganizationListCategoriesV1OrgCategoriesGetResponseItem>;

export namespace OrganizationListCategoriesV1OrgCategoriesGetResponse {
  export interface OrganizationListCategoriesV1OrgCategoriesGetResponseItem {
    /**
     * @format uuid
     */
    id: string;
    name: string;
    organization: Organization;
    internal_name?: string | null;
  }
}

export type OrganizationListCategoryTopicsV1OrgCategoriesCategoryTopicsGetResponse =
  Array<OrganizationListCategoryTopicsV1OrgCategoriesCategoryTopicsGetResponse.OrganizationListCategoryTopicsV1OrgCategoriesCategoryTopicsGetResponseItem>;

export namespace OrganizationListCategoryTopicsV1OrgCategoriesCategoryTopicsGetResponse {
  export interface OrganizationListCategoryTopicsV1OrgCategoriesCategoryTopicsGetResponseItem {
    id: string;
    name: string;
    status: 'active' | 'disabled';
  }
}

export type OrganizationListCategoryTagsV1OrgCategoriesCategoryTagsGetResponse =
  Array<OrganizationListCategoryTagsV1OrgCategoriesCategoryTagsGetResponse.OrganizationListCategoryTagsV1OrgCategoriesCategoryTagsGetResponseItem>;

export namespace OrganizationListCategoryTagsV1OrgCategoriesCategoryTagsGetResponse {
  export interface OrganizationListCategoryTagsV1OrgCategoriesCategoryTagsGetResponseItem {
    id: string;
    name: string;
  }
}

export type OrganizationListCategoryRegionsV1OrgCategoriesCategoryRegionsGetResponse =
  Array<Shared.NamedResource>;

export interface OrganizationListCategoryCitationCategoriesV1OrgCategoriesCategoryCitationCategoriesGetResponse {
  data: Array<OrganizationListCategoryCitationCategoriesV1OrgCategoriesCategoryCitationCategoriesGetResponse.Data>;
}

export namespace OrganizationListCategoryCitationCategoriesV1OrgCategoriesCategoryCitationCategoriesGetResponse {
  export interface Data {
    /**
     * Value to pass to the v2 citations `citation_category` filter.
     */
    value: string;
    /**
     * Display name.
     */
    name: string;
  }
}

export interface OrganizationListCategoryCitationTagsV1OrgCategoriesCategoryCitationTagsGetResponse {
  data: Array<OrganizationListCategoryCitationTagsV1OrgCategoriesCategoryCitationTagsGetResponse.Data>;
}

export namespace OrganizationListCategoryCitationTagsV1OrgCategoriesCategoryCitationTagsGetResponse {
  export interface Data {
    /**
     * Value to pass to the v2 citations `citation_tag` filter.
     */
    value: string;
    /**
     * Display name.
     */
    name: string;
  }
}

export interface OrganizationListCategoryPromptsV1OrgCategoriesCategoryPromptsGetParams {
  /**
   * Maximum number of prompts to return.
   * @default 10000
   * @maximum 10000
   */
  limit?: number;
  /**
   * Pagination cursor from a previous response.
   */
  cursor?: string | null;
  /**
   * Field used to order prompts.
   */
  order_by?: 'created_at' | 'prompt';
  /**
   * Sort direction for the selected order field.
   */
  order_dir?: 'asc' | 'desc';
  /**
   * Filter by analysis type (visibility, sentiment, accuracy).
   */
  analysis_type?: Array<'visibility' | 'sentiment' | 'sentiment_v2' | 'accuracy'>;
  /**
   * Deprecated. Use analysis_type instead.
   */
  prompt_type?: Array<'visibility' | 'sentiment'>;
  /**
   * Filter by prompt status. Defaults to `active` only.
   * @default ["active"]
   */
  status?: Array<'active' | 'disabled'>;
  /**
   * Filter by topic IDs.
   */
  topic_id?: Array<string>;
  /**
   * Filter by tag IDs.
   */
  tag_id?: Array<string>;
  /**
   * Filter by region IDs.
   */
  region_id?: Array<string>;
  /**
   * Filter by platform IDs.
   */
  platform_id?: Array<string>;
  /**
   * Filter by persona IDs.
   */
  persona_id?: Array<string>;
}

export interface OrganizationListCategoryPromptsV1OrgCategoriesCategoryPromptsGetResponse {
  info: OrganizationListCategoryPromptsV1OrgCategoriesCategoryPromptsGetResponse.Info;
  data: Array<OrganizationListCategoryPromptsV1OrgCategoriesCategoryPromptsGetResponse.Data>;
}

export namespace OrganizationListCategoryPromptsV1OrgCategoriesCategoryPromptsGetResponse {
  export interface Info {
    total_rows: number;
    limit: number;
    next_cursor: string | null;
  }

  export interface Data {
    id: string;
    prompt: string;
    language: string;
    status: 'active' | 'disabled';
    /**
     * Generic id+name reference used across domain boundaries.
     */
    topic: Shared.NamedResource;
    regions: Array<Shared.NamedResource>;
    platforms: Array<Shared.NamedResource>;
    /**
     * @format date-time
     */
    created_at: string;
    /**
     * @format date-time
     */
    updated_at: string;
    /**
     * @default []
     */
    analysis_types?: Array<'visibility' | 'sentiment' | 'sentiment_v2' | 'accuracy'>;
    /**
     * @default ""
     * @deprecated
     */
    prompt_type?: string;
    /**
     * @default []
     */
    tags?: Array<Shared.NamedResource>;
    /**
     * @default []
     */
    personas?: Array<Shared.NamedResource>;
  }
}

export interface OrganizationCreateCategoryPromptsV1OrgCategoriesCategoryIDPromptsPostParams {
  /**
   * List of prompts to create.
   */
  prompts: Array<OrganizationCreateCategoryPromptsV1OrgCategoriesCategoryIDPromptsPostParams.Prompt>;
  /**
   * When true, validate and preview changes without persisting them.
   * @default false
   */
  dry_run?: boolean;
}

export namespace OrganizationCreateCategoryPromptsV1OrgCategoriesCategoryIDPromptsPostParams {
  export interface Prompt {
    /**
     * The prompt text to be sent to AI platforms.
     * @minLength 1
     */
    prompt: string;
    /**
     * Topic to assign. A new topic is created if the name doesn't exist.
     */
    topic: Shared.IDOrName;
    /**
     * Language code (e.g. 'en-US')
     */
    language: string;
    /**
     * Regions where the prompt will be collected.
     * @minItems 1
     */
    regions: Array<Shared.IDOrName>;
    /**
     * AI platforms where the prompt will be collected.
     * @minItems 1
     */
    platforms: Array<Shared.IDOrName>;
    /**
     * Optional client-generated UUID for the prompt. When provided, creation is idempotent: retrying a request with the same id will not create a duplicate prompt. Omit to have the server generate one (non-idempotent).
     */
    id?: string | null;
    /**
     * Tags to assign. New tags are created if names don't exist.
     * @default []
     */
    tags?: Array<Shared.IDOrName>;
    /**
     * Personas to use when collecting. Omit for default (no persona).
     * @default []
     */
    personas?: Array<Shared.IDOrName>;
    /**
     * Analysis types: 'visibility', 'sentiment', 'accuracy'. Defaults to ['visibility'].
     */
    analysis_types?: Array<'visibility' | 'sentiment' | 'sentiment_v2' | 'accuracy'> | null;
    /**
     * Deprecated. Use analysis_types instead. 'Visibility' or 'Sentiment'.
     * @deprecated
     */
    prompt_type?: string | null;
    /**
     * Required for Sentiment prompts. The brand asset to evaluate.
     */
    asset?: Shared.IDOrName | null;
  }
}

export interface OrganizationCreateCategoryPromptsV1OrgCategoriesCategoryIDPromptsPostResponse {
  /**
   * Whether this was a dry run (no changes persisted).
   */
  dry_run: boolean;
  /**
   * Number of prompts created.
   * @default 0
   */
  created?: number;
  /**
   * Number of new topics created.
   * @default 0
   */
  topics_created?: number;
  /**
   * Number of new tags created.
   * @default 0
   */
  tags_created?: number;
  /**
   * List of created (or previewed) prompts with resolved references.
   * @default []
   */
  prompts?: Array<OrganizationCreateCategoryPromptsV1OrgCategoriesCategoryIDPromptsPostResponse.Prompt>;
}

export namespace OrganizationCreateCategoryPromptsV1OrgCategoriesCategoryIDPromptsPostResponse {
  export interface Prompt {
    /**
     * Generated prompt ID.
     */
    id: string;
    /**
     * The prompt text.
     */
    prompt: string;
    /**
     * Resolved topic.
     */
    topic: Shared.NamedResource;
    /**
     * Language code.
     */
    language: string;
    /**
     * Resolved tags.
     * @default []
     */
    tags?: Array<Shared.NamedResource>;
    /**
     * Resolved regions.
     * @default []
     */
    regions?: Array<Shared.NamedResource>;
    /**
     * Resolved platforms.
     * @default []
     */
    platforms?: Array<Shared.NamedResource>;
    /**
     * Resolved personas.
     * @default []
     */
    personas?: Array<Shared.NamedResource>;
    /**
     * Analysis types assigned to this prompt.
     * @default []
     */
    analysis_types?: Array<'visibility' | 'sentiment' | 'sentiment_v2' | 'accuracy'>;
    /**
     * Resolved asset, if applicable.
     */
    asset?: Shared.NamedResource | null;
  }
}

export interface OrganizationUpdateCategoryPromptsV1OrgCategoriesCategoryIDPromptsPatchParams {
  /**
   * List of prompt updates. Each entry must include an `id` and at least one field to change.
   */
  prompts: Array<OrganizationUpdateCategoryPromptsV1OrgCategoriesCategoryIDPromptsPatchParams.Prompt>;
  /**
   * When true, validate and preview changes without persisting them.
   * @default false
   */
  dry_run?: boolean;
}

export namespace OrganizationUpdateCategoryPromptsV1OrgCategoriesCategoryIDPromptsPatchParams {
  export interface Prompt {
    /**
     * ID of the prompt to update.
     */
    id: string;
    /**
     * New prompt text.
     */
    prompt?: string | null;
    /**
     * New topic. A new topic is created if the name doesn't exist.
     */
    topic?: Shared.IDOrName | null;
    /**
     * New language code. Must be enabled for the organization.
     */
    language?: string | null;
    /**
     * New tag set. Replaces all existing tags on the prompt.
     */
    tags?: Array<Shared.IDOrName> | null;
    /**
     * New region set. Replaces all existing regions.
     */
    regions?: Array<Shared.IDOrName> | null;
    /**
     * New platform set. Replaces all existing platforms.
     */
    platforms?: Array<Shared.IDOrName> | null;
    /**
     * New persona set. Replaces all existing personas.
     */
    personas?: Array<Shared.IDOrName> | null;
    /**
     * New analysis types. Replaces all existing analysis types on the prompt.
     */
    analysis_types?: Array<'visibility' | 'sentiment' | 'sentiment_v2' | 'accuracy'> | null;
    /**
     * Deprecated. Use analysis_types instead.
     * @deprecated
     */
    prompt_type?: string | null;
    /**
     * Asset reference. Required when analysis_types includes 'sentiment'.
     */
    asset?: Shared.IDOrName | null;
  }
}

export interface OrganizationUpdateCategoryPromptsV1OrgCategoriesCategoryIDPromptsPatchResponse {
  /**
   * Whether this was a dry run (no changes persisted).
   */
  dry_run: boolean;
  /**
   * Number of prompts that had changes.
   * @default 0
   */
  updated?: number;
  /**
   * Number of new topics created.
   * @default 0
   */
  topics_created?: number;
  /**
   * Number of new tags created.
   * @default 0
   */
  tags_created?: number;
  /**
   * List of prompts with their change diffs.
   * @default []
   */
  prompts?: Array<OrganizationUpdateCategoryPromptsV1OrgCategoriesCategoryIDPromptsPatchResponse.Prompt>;
}

export namespace OrganizationUpdateCategoryPromptsV1OrgCategoriesCategoryIDPromptsPatchResponse {
  export interface Prompt {
    /**
     * ID of the updated prompt.
     */
    id: string;
    /**
     * Prompt text diff.
     */
    prompt?: Shared.FieldDiff | null;
    /**
     * Topic diff.
     */
    topic?: Shared.FieldDiff | null;
    /**
     * Language diff.
     */
    language?: Shared.FieldDiff | null;
    /**
     * Tags added and removed.
     */
    tags?: Shared.NamedResourceDiffList | null;
    /**
     * Regions added and removed.
     */
    regions?: Shared.NamedResourceDiffList | null;
    /**
     * Platforms added and removed.
     */
    platforms?: Shared.NamedResourceDiffList | null;
    /**
     * Personas added and removed.
     */
    personas?: Shared.NamedResourceDiffList | null;
    /**
     * Analysis types diff.
     */
    analysis_types?: Shared.FieldDiff | null;
    /**
     * Asset diff.
     */
    asset?: Shared.FieldDiff | null;
  }
}

export interface OrganizationUpdateCategoryPromptStatusV1OrgCategoriesCategoryIDPromptsStatusPatchParams {
  /**
   * IDs of the prompts to update.
   */
  prompt_ids: Array<string>;
  /**
   * Target status: 'active', 'disabled', or 'deleted'.
   */
  status: 'active' | 'disabled' | 'deleted';
  /**
   * When true, validate and preview changes without persisting them.
   * @default false
   */
  dry_run?: boolean;
}

export interface OrganizationUpdateCategoryPromptStatusV1OrgCategoriesCategoryIDPromptsStatusPatchResponse {
  /**
   * Whether this was a dry run (no changes persisted).
   */
  dry_run: boolean;
  /**
   * Number of prompts whose status was changed.
   * @default 0
   */
  updated_prompts?: number;
}

export type OrganizationListCategoryAssetsV1OrgCategoriesCategoryAssetsGetResponse =
  Array<OrganizationListCategoryAssetsV1OrgCategoriesCategoryAssetsGetResponse.OrganizationListCategoryAssetsV1OrgCategoriesCategoryAssetsGetResponseItem>;

export namespace OrganizationListCategoryAssetsV1OrgCategoriesCategoryAssetsGetResponse {
  export interface OrganizationListCategoryAssetsV1OrgCategoriesCategoryAssetsGetResponseItem {
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
    alternate_domains?: Array<string> | null;
  }
}

export interface OrganizationListCategoryPersonasV1OrgCategoriesCategoryPersonasGetResponse {
  data: Array<OrganizationListCategoryPersonasV1OrgCategoriesCategoryPersonasGetResponse.Data>;
}

export namespace OrganizationListCategoryPersonasV1OrgCategoriesCategoryPersonasGetResponse {
  export interface Data {
    id: string;
    name: string;
    persona: Data.Persona;
  }

  export namespace Data {
    export interface Persona {
      behavior: Persona.Behavior;
      employment: Persona.Employment;
      demographics: Persona.Demographics;
    }

    export namespace Persona {
      export interface Behavior {
        painPoints?: string | null;
        motivations?: string | null;
      }

      export interface Employment {
        industry?: Array<string>;
        jobTitle?: Array<string>;
        companySize?: Array<string>;
        roleSeniority?: Array<string>;
      }

      export interface Demographics {
        ageRange?: Array<string>;
      }
    }
  }
}
export declare namespace OrganizationResource {
  export {
    type Organization as Organization,
    type CreatePromptsBody as CreatePromptsBody,
    type UpdatePromptsBody as UpdatePromptsBody,
    type UpdatePromptStatusBody as UpdatePromptStatusBody,
    type OrganizationListV1OrgGetResponse as OrganizationListV1OrgGetResponse,
    type OrganizationListRegionsV1OrgRegionsGetResponse as OrganizationListRegionsV1OrgRegionsGetResponse,
    type OrganizationListModelsV1OrgModelsGetResponse as OrganizationListModelsV1OrgModelsGetResponse,
    type OrganizationListDomainsV1OrgDomainsGetResponse as OrganizationListDomainsV1OrgDomainsGetResponse,
    type OrganizationListAssetsV1OrgAssetsGetResponse as OrganizationListAssetsV1OrgAssetsGetResponse,
    type OrganizationListPersonasV1OrgPersonasGetResponse as OrganizationListPersonasV1OrgPersonasGetResponse,
    type OrganizationListCategoriesV1OrgCategoriesGetResponse as OrganizationListCategoriesV1OrgCategoriesGetResponse,
    type OrganizationListCategoryTopicsV1OrgCategoriesCategoryTopicsGetResponse as OrganizationListCategoryTopicsV1OrgCategoriesCategoryTopicsGetResponse,
    type OrganizationListCategoryTagsV1OrgCategoriesCategoryTagsGetResponse as OrganizationListCategoryTagsV1OrgCategoriesCategoryTagsGetResponse,
    type OrganizationListCategoryRegionsV1OrgCategoriesCategoryRegionsGetResponse as OrganizationListCategoryRegionsV1OrgCategoriesCategoryRegionsGetResponse,
    type OrganizationListCategoryCitationCategoriesV1OrgCategoriesCategoryCitationCategoriesGetResponse as OrganizationListCategoryCitationCategoriesV1OrgCategoriesCategoryCitationCategoriesGetResponse,
    type OrganizationListCategoryCitationTagsV1OrgCategoriesCategoryCitationTagsGetResponse as OrganizationListCategoryCitationTagsV1OrgCategoriesCategoryCitationTagsGetResponse,
    type OrganizationListCategoryPromptsV1OrgCategoriesCategoryPromptsGetResponse as OrganizationListCategoryPromptsV1OrgCategoriesCategoryPromptsGetResponse,
    type OrganizationCreateCategoryPromptsV1OrgCategoriesCategoryIDPromptsPostResponse as OrganizationCreateCategoryPromptsV1OrgCategoriesCategoryIDPromptsPostResponse,
    type OrganizationUpdateCategoryPromptsV1OrgCategoriesCategoryIDPromptsPatchResponse as OrganizationUpdateCategoryPromptsV1OrgCategoriesCategoryIDPromptsPatchResponse,
    type OrganizationUpdateCategoryPromptStatusV1OrgCategoriesCategoryIDPromptsStatusPatchResponse as OrganizationUpdateCategoryPromptStatusV1OrgCategoriesCategoryIDPromptsStatusPatchResponse,
    type OrganizationListCategoryAssetsV1OrgCategoriesCategoryAssetsGetResponse as OrganizationListCategoryAssetsV1OrgCategoriesCategoryAssetsGetResponse,
    type OrganizationListCategoryPersonasV1OrgCategoriesCategoryPersonasGetResponse as OrganizationListCategoryPersonasV1OrgCategoriesCategoryPersonasGetResponse,
    type OrganizationListRegionsV1OrgRegionsGetParams as OrganizationListRegionsV1OrgRegionsGetParams,
    type OrganizationListDomainsV1OrgDomainsGetParams as OrganizationListDomainsV1OrgDomainsGetParams,
    type OrganizationListAssetsV1OrgAssetsGetParams as OrganizationListAssetsV1OrgAssetsGetParams,
    type OrganizationListPersonasV1OrgPersonasGetParams as OrganizationListPersonasV1OrgPersonasGetParams,
    type OrganizationListCategoriesV1OrgCategoriesGetParams as OrganizationListCategoriesV1OrgCategoriesGetParams,
    type OrganizationListCategoryPromptsV1OrgCategoriesCategoryPromptsGetParams as OrganizationListCategoryPromptsV1OrgCategoriesCategoryPromptsGetParams,
    type OrganizationCreateCategoryPromptsV1OrgCategoriesCategoryIDPromptsPostParams as OrganizationCreateCategoryPromptsV1OrgCategoriesCategoryIDPromptsPostParams,
    type OrganizationUpdateCategoryPromptsV1OrgCategoriesCategoryIDPromptsPatchParams as OrganizationUpdateCategoryPromptsV1OrgCategoriesCategoryIDPromptsPatchParams,
    type OrganizationUpdateCategoryPromptStatusV1OrgCategoriesCategoryIDPromptsStatusPatchParams as OrganizationUpdateCategoryPromptStatusV1OrgCategoriesCategoryIDPromptsStatusPatchParams,
  };
}

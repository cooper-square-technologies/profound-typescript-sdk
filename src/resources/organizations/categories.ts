// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as OrganizationsAPI from './organizations';
import type * as Shared from '../shared';

export class Categories extends APIResource {
  /**
   * Get the organization categories, one row per (category, organization) pair.
   *
   * @param {CategoryListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CategoryListResponse>} Successful Response
   *
   * @example
   * ```ts
   * const list = await client.organizations.categories.list();
   * ```
   */
  list(
    query: CategoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CategoryListResponse> {
    return this._client.get('/v1/org/categories', { query, ...options });
  }

  /**
   * Get the topics for a specific category.
   *
   * @param {string} categoryID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CategoryTopicsResponse>} Successful Response
   *
   * @example
   * ```ts
   * const topics = await client.organizations.categories.topics('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  topics(categoryID: string, options?: RequestOptions): APIPromise<CategoryTopicsResponse> {
    return this._client.get(__scalarPath`/v1/org/categories/${categoryID}/topics`, options);
  }

  /**
   * Get the tags for a specific category.
   *
   * @param {string} categoryID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CategoryTagsResponse>} Successful Response
   *
   * @example
   * ```ts
   * const tags = await client.organizations.categories.tags('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  tags(categoryID: string, options?: RequestOptions): APIPromise<CategoryTagsResponse> {
    return this._client.get(__scalarPath`/v1/org/categories/${categoryID}/tags`, options);
  }

  /**
   * Retrieve prompts in a category with optional filtering by type, topic, tag, region, platform, or persona. Supports cursor-based pagination.
   *
   * @param {string} categoryID
   * @param {CategoryPromptsParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CategoryPromptsResponse>} Successful Response
   *
   * @example
   * ```ts
   * const prompts = await client.organizations.categories.prompts('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   limit: 10000,
   *   status: ['active'],
   * });
   * ```
   */
  prompts(
    categoryID: string,
    query: CategoryPromptsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CategoryPromptsResponse> {
    return this._client.get(__scalarPath`/v1/org/categories/${categoryID}/prompts`, { query, ...options });
  }

  /**
   * Get Category Assets
   *
   * @param {string} categoryID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CategoryAssetsResponse>} Successful Response
   *
   * @example
   * ```ts
   * const assets = await client.organizations.categories.assets('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  assets(categoryID: string, options?: RequestOptions): APIPromise<CategoryAssetsResponse> {
    return this._client.get(__scalarPath`/v1/org/categories/${categoryID}/assets`, options);
  }

  /**
   * Get Category Personas
   *
   * @param {string} categoryID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CategoryGetCategoryPersonasResponse>} Successful Response
   *
   * @example
   * ```ts
   * const getCategoryPersonas = await client.organizations.categories.getCategoryPersonas(
   *   '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * );
   * ```
   */
  getCategoryPersonas(
    categoryID: string,
    options?: RequestOptions,
  ): APIPromise<CategoryGetCategoryPersonasResponse> {
    return this._client.get(__scalarPath`/v1/org/categories/${categoryID}/personas`, options);
  }

  /**
   * Create one or more prompts in a category. Topics and tags are auto-created if referenced by name and not yet existing. Use dry_run to preview without persisting.
   *
   * @param {string} categoryID
   * @param {CategoryCreatePromptsParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CategoryCreatePromptsResponse>} Successful Response
   *
   * @example
   * ```ts
   * const createPrompts = await client.organizations.categories.createPrompts(
   *   '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   {
   *     prompts: [],
   *     dry_run: false,
   *   },
   * );
   * ```
   */
  createPrompts(
    categoryID: string,
    body: CategoryCreatePromptsParams,
    options?: RequestOptions,
  ): APIPromise<CategoryCreatePromptsResponse> {
    return this._client.post(__scalarPath`/v1/org/categories/${categoryID}/prompts`, { body, ...options });
  }

  /**
   * Update one or more existing prompts. Only provided fields are changed. Dimension fields (regions, platforms, personas, tags) replace the full set when provided. Use dry_run to preview without persisting.
   *
   * @param {string} categoryID
   * @param {CategoryUpdatePromptsParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CategoryUpdatePromptsResponse>} Successful Response
   *
   * @example
   * ```ts
   * const updatePrompts = await client.organizations.categories.updatePrompts(
   *   '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   {
   *     prompts: [],
   *     dry_run: false,
   *   },
   * );
   * ```
   */
  updatePrompts(
    categoryID: string,
    body: CategoryUpdatePromptsParams,
    options?: RequestOptions,
  ): APIPromise<CategoryUpdatePromptsResponse> {
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
   * @param {CategoryUpdatePromptStatusParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CategoryUpdatePromptStatusResponse>} Successful Response
   *
   * @example
   * ```ts
   * const updatePromptStatus = await client.organizations.categories.updatePromptStatus(
   *   '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   {
   *     prompt_ids: [],
   *     status: 'active',
   *     dry_run: false,
   *   },
   * );
   * ```
   */
  updatePromptStatus(
    categoryID: string,
    body: CategoryUpdatePromptStatusParams,
    options?: RequestOptions,
  ): APIPromise<CategoryUpdatePromptStatusResponse> {
    return this._client.patch(__scalarPath`/v1/org/categories/${categoryID}/prompts/status`, {
      body,
      ...options,
    });
  }

  /**
   * Get the regions for a specific category.
   *
   * @param {string} categoryID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CategoryRetrieveRegionsResponse>} Successful Response
   *
   * @example
   * ```ts
   * const retrieveRegions = await client.organizations.categories.retrieveRegions(
   *   '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * );
   * ```
   */
  retrieveRegions(categoryID: string, options?: RequestOptions): APIPromise<CategoryRetrieveRegionsResponse> {
    return this._client.get(__scalarPath`/v1/org/categories/${categoryID}/regions`, options);
  }

  /**
   * Get the citation categories for a category: the built-in buckets plus any custom categories.
   *
   * @param {string} categoryID
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CategoryGetCitationCategoriesResponse>} Successful Response
   *
   * @example
   * ```ts
   * const getCitationCategories = await client.organizations.categories.getCitationCategories(
   *   '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * );
   * ```
   */
  getCitationCategories(
    categoryID: string,
    options?: RequestOptions,
  ): APIPromise<CategoryGetCitationCategoriesResponse> {
    return this._client.get(__scalarPath`/v1/org/categories/${categoryID}/citation-categories`, options);
  }
}

/**
 * Reference by id, name, or both. Plain strings work too:
 * UUIDs become id lookups, other strings become name lookups.
 */
export interface IDOrName {
  /**
   * UUID of the resource.
   */
  id?: string | null;
  /**
   * Display name of the resource.
   */
  name?: string | null;
}

/**
 * Shows which resources were added or removed.
 */
export interface NamedResourceDiffList {
  /**
   * Resources that were added.
   * @default []
   */
  added?: Array<OrganizationsAPI.NamedResource>;
  /**
   * Resources that were removed.
   * @default []
   */
  removed?: Array<OrganizationsAPI.NamedResource>;
}

/**
 * Shows the old and new value for a changed field.
 */
export interface FieldDiff {
  /**
   * Previous value.
   */
  old?: unknown;
  /**
   * New value.
   */
  new?: unknown;
}

export interface CategoryListParams {
  /**
   * Restrict results to one or more organizations the caller belongs to. Repeat the parameter to target multiple orgs (e.g. `?organization_ids=<id1>&organization_ids=<id2>`). Omit to return data from every organization the caller has access to.
   */
  organization_ids?: Array<string> | null;
}

export type CategoryListResponse = Array<CategoryListResponse.CategoryListResponseItem>;

export namespace CategoryListResponse {
  export interface CategoryListResponseItem {
    /**
     * @format uuid
     */
    id: string;
    name: string;
    organization: OrganizationsAPI.Organization;
    internal_name?: string | null;
  }
}

export type CategoryTopicsResponse = Array<CategoryTopicsResponse.CategoryTopicsResponseItem>;

export namespace CategoryTopicsResponse {
  export interface CategoryTopicsResponseItem {
    id: string;
    name: string;
    status: 'active' | 'disabled';
  }
}

export type CategoryTagsResponse = Array<CategoryTagsResponse.CategoryTagsResponseItem>;

export namespace CategoryTagsResponse {
  export interface CategoryTagsResponseItem {
    id: string;
    name: string;
  }
}

export interface CategoryPromptsParams {
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

export interface CategoryPromptsResponse {
  info: CategoryPromptsResponse.Info;
  data: Array<CategoryPromptsResponse.Data>;
}

export namespace CategoryPromptsResponse {
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
    topic: OrganizationsAPI.NamedResource;
    regions: Array<OrganizationsAPI.NamedResource>;
    platforms: Array<OrganizationsAPI.NamedResource>;
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
    tags?: Array<OrganizationsAPI.NamedResource>;
    /**
     * @default []
     */
    personas?: Array<OrganizationsAPI.NamedResource>;
  }
}

export type CategoryAssetsResponse = Array<CategoryAssetsResponse.CategoryAssetsResponseItem>;

export namespace CategoryAssetsResponse {
  export interface CategoryAssetsResponseItem {
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

export interface CategoryCreatePromptsParams {
  /**
   * List of prompts to create.
   */
  prompts: Array<CategoryCreatePromptsParams.Prompt>;
  /**
   * When true, validate and preview changes without persisting them.
   * @default false
   */
  dry_run?: boolean;
}

export namespace CategoryCreatePromptsParams {
  export interface Prompt {
    /**
     * The prompt text to be sent to AI platforms.
     * @minLength 1
     */
    prompt: string;
    /**
     * Topic to assign. A new topic is created if the name doesn't exist.
     */
    topic: IDOrName;
    /**
     * Language code (e.g. 'en-US')
     */
    language: string;
    /**
     * Regions where the prompt will be collected.
     * @minItems 1
     */
    regions: Array<IDOrName>;
    /**
     * AI platforms where the prompt will be collected.
     * @minItems 1
     */
    platforms: Array<IDOrName>;
    /**
     * Optional client-generated UUID for the prompt. When provided, creation is idempotent: retrying a request with the same id will not create a duplicate prompt. Omit to have the server generate one (non-idempotent).
     */
    id?: string | null;
    /**
     * Tags to assign. New tags are created if names don't exist.
     * @default []
     */
    tags?: Array<IDOrName>;
    /**
     * Personas to use when collecting. Omit for default (no persona).
     * @default []
     */
    personas?: Array<IDOrName>;
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
    asset?: IDOrName | null;
  }
}

export interface CategoryCreatePromptsResponse {
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
  prompts?: Array<CategoryCreatePromptsResponse.Prompt>;
}

export namespace CategoryCreatePromptsResponse {
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
    topic: OrganizationsAPI.NamedResource;
    /**
     * Language code.
     */
    language: string;
    /**
     * Resolved tags.
     * @default []
     */
    tags?: Array<OrganizationsAPI.NamedResource>;
    /**
     * Resolved regions.
     * @default []
     */
    regions?: Array<OrganizationsAPI.NamedResource>;
    /**
     * Resolved platforms.
     * @default []
     */
    platforms?: Array<OrganizationsAPI.NamedResource>;
    /**
     * Resolved personas.
     * @default []
     */
    personas?: Array<OrganizationsAPI.NamedResource>;
    /**
     * Analysis types assigned to this prompt.
     * @default []
     */
    analysis_types?: Array<'visibility' | 'sentiment' | 'sentiment_v2' | 'accuracy'>;
    /**
     * Resolved asset, if applicable.
     */
    asset?: OrganizationsAPI.NamedResource | null;
  }
}

export interface CategoryUpdatePromptsParams {
  /**
   * List of prompt updates. Each entry must include an `id` and at least one field to change.
   */
  prompts: Array<CategoryUpdatePromptsParams.Prompt>;
  /**
   * When true, validate and preview changes without persisting them.
   * @default false
   */
  dry_run?: boolean;
}

export namespace CategoryUpdatePromptsParams {
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
    topic?: IDOrName | null;
    /**
     * New language code. Must be enabled for the organization.
     */
    language?: string | null;
    /**
     * New tag set. Replaces all existing tags on the prompt.
     */
    tags?: Array<IDOrName> | null;
    /**
     * New region set. Replaces all existing regions.
     */
    regions?: Array<IDOrName> | null;
    /**
     * New platform set. Replaces all existing platforms.
     */
    platforms?: Array<IDOrName> | null;
    /**
     * New persona set. Replaces all existing personas.
     */
    personas?: Array<IDOrName> | null;
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
    asset?: IDOrName | null;
  }
}

export interface CategoryUpdatePromptsResponse {
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
  prompts?: Array<CategoryUpdatePromptsResponse.Prompt>;
}

export namespace CategoryUpdatePromptsResponse {
  export interface Prompt {
    /**
     * ID of the updated prompt.
     */
    id: string;
    /**
     * Prompt text diff.
     */
    prompt?: FieldDiff | null;
    /**
     * Topic diff.
     */
    topic?: FieldDiff | null;
    /**
     * Language diff.
     */
    language?: FieldDiff | null;
    /**
     * Tags added and removed.
     */
    tags?: NamedResourceDiffList | null;
    /**
     * Regions added and removed.
     */
    regions?: NamedResourceDiffList | null;
    /**
     * Platforms added and removed.
     */
    platforms?: NamedResourceDiffList | null;
    /**
     * Personas added and removed.
     */
    personas?: NamedResourceDiffList | null;
    /**
     * Analysis types diff.
     */
    analysis_types?: FieldDiff | null;
    /**
     * Asset diff.
     */
    asset?: FieldDiff | null;
  }
}

export interface CategoryUpdatePromptStatusParams {
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

export interface CategoryUpdatePromptStatusResponse {
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

export type CategoryRetrieveRegionsResponse = Array<OrganizationsAPI.NamedResource>;

export interface CategoryGetCitationCategoriesResponse {
  data: Array<CategoryGetCitationCategoriesResponse.Data>;
}

export namespace CategoryGetCitationCategoriesResponse {
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
export declare namespace Categories {
  export {
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

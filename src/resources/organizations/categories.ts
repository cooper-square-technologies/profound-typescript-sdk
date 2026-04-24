// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CategoriesAPI from './categories';
import * as OrganizationsAPI from './organizations';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Categories extends APIResource {
  /**
   * Get the organization categories, one row per (category, organization) pair.
   */
  list(query: CategoryListParams | null | undefined = {}, options?: RequestOptions): APIPromise<CategoryListResponse> {
    return this._client.get('/v1/org/categories', { query, ...options });
  }

  /**
   * Get Category Assets
   */
  assets(categoryID: string, options?: RequestOptions): APIPromise<CategoryAssetsResponse> {
    return this._client.get(path`/v1/org/categories/${categoryID}/assets`, options);
  }

  /**
   * Create one or more prompts in a category. Topics and tags are auto-created if
   * referenced by name and not yet existing. Use dry_run to preview without
   * persisting.
   */
  createPrompts(categoryID: string, body: CategoryCreatePromptsParams, options?: RequestOptions): APIPromise<CategoryCreatePromptsResponse> {
    return this._client.post(path`/v1/org/categories/${categoryID}/prompts`, { body, ...options });
  }

  /**
   * Get Category Personas
   */
  getCategoryPersonas(categoryID: string, options?: RequestOptions): APIPromise<CategoryGetCategoryPersonasResponse> {
    return this._client.get(path`/v1/org/categories/${categoryID}/personas`, options);
  }

  /**
   * Retrieve prompts in a category with optional filtering by type, topic, tag,
   * region, platform, or persona. Supports cursor-based pagination.
   */
  prompts(categoryID: string, query: CategoryPromptsParams | null | undefined = {}, options?: RequestOptions): APIPromise<CategoryPromptsResponse> {
    return this._client.get(path`/v1/org/categories/${categoryID}/prompts`, { query, ...options });
  }

  /**
   * Get the tags for a specific category.
   */
  tags(categoryID: string, options?: RequestOptions): APIPromise<CategoryTagsResponse> {
    return this._client.get(path`/v1/org/categories/${categoryID}/tags`, options);
  }

  /**
   * Get the topics for a specific category.
   */
  topics(categoryID: string, options?: RequestOptions): APIPromise<CategoryTopicsResponse> {
    return this._client.get(path`/v1/org/categories/${categoryID}/topics`, options);
  }

  /**
   * Bulk-update the status of one or more prompts. Prompts already in the target
   * status are skipped. Use dry_run to preview without persisting.
   *
   * Status options:
   *
   * - 'active': Prompts will run daily.
   * - 'disabled': Prompts will not run moving forward, but historical data is
   *   preserved.
   * - 'deleted': Prompts are deleted along with historical data
   */
  updatePromptStatus(categoryID: string, body: CategoryUpdatePromptStatusParams, options?: RequestOptions): APIPromise<CategoryUpdatePromptStatusResponse> {
    return this._client.patch(path`/v1/org/categories/${categoryID}/prompts/status`, { body, ...options });
  }

  /**
   * Update one or more existing prompts. Only provided fields are changed. Dimension
   * fields (regions, platforms, personas, tags) replace the full set when provided.
   * Use dry_run to preview without persisting.
   */
  updatePrompts(categoryID: string, body: CategoryUpdatePromptsParams, options?: RequestOptions): APIPromise<CategoryUpdatePromptsResponse> {
    return this._client.patch(path`/v1/org/categories/${categoryID}/prompts`, { body, ...options });
  }
}

/**
 * Shows the old and new value for a changed field.
 */
export interface FieldDiff {
  /**
   * New value.
   */
  new?: unknown;

  /**
   * Previous value.
   */
  old?: unknown;
}

/**
 * Reference by id, name, or both. Plain strings work too: UUIDs become id lookups,
 * other strings become name lookups.
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
   */
  added?: Array<OrganizationsAPI.NamedResource>;

  /**
   * Resources that were removed.
   */
  removed?: Array<OrganizationsAPI.NamedResource>;
}

export type CategoryListResponse = Array<CategoryListResponse.CategoryListResponseItem>

export namespace CategoryListResponse {
  /**
   * A category annotated with the organization that owns it.
   */
  export interface CategoryListResponseItem {
    id: string;

    name: string;

    organization: OrganizationsAPI.Organization;
  }
}

export type CategoryAssetsResponse = Array<CategoryAssetsResponse.CategoryAssetsResponseItem>

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

/**
 * Response from creating prompts.
 */
export interface CategoryCreatePromptsResponse {
  /**
   * Whether this was a dry run (no changes persisted).
   */
  dry_run: boolean;

  /**
   * Number of prompts created.
   */
  created?: number;

  /**
   * List of created (or previewed) prompts with resolved references.
   */
  prompts?: Array<CategoryCreatePromptsResponse.Prompt>;

  /**
   * Number of new tags created.
   */
  tags_created?: number;

  /**
   * Number of new topics created.
   */
  topics_created?: number;
}

export namespace CategoryCreatePromptsResponse {
  /**
   * Preview of a prompt that was (or would be) created.
   */
  export interface Prompt {
    /**
     * Generated prompt ID.
     */
    id: string;

    /**
     * Language code.
     */
    language: string;

    /**
     * The prompt text.
     */
    prompt: string;

    /**
     * The internal prompt type ('open-ended' or 'brand-direct').
     */
    prompt_type: string;

    /**
     * Resolved topic.
     */
    topic: OrganizationsAPI.NamedResource;

    /**
     * Generic id+name reference used across domain boundaries.
     */
    asset?: OrganizationsAPI.NamedResource | null;

    /**
     * Resolved personas.
     */
    personas?: Array<OrganizationsAPI.NamedResource>;

    /**
     * Resolved platforms.
     */
    platforms?: Array<OrganizationsAPI.NamedResource>;

    /**
     * Resolved regions.
     */
    regions?: Array<OrganizationsAPI.NamedResource>;

    /**
     * Resolved tags.
     */
    tags?: Array<OrganizationsAPI.NamedResource>;
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

    language: string;

    platforms: Array<OrganizationsAPI.NamedResource>;

    prompt: string;

    prompt_type: string;

    regions: Array<OrganizationsAPI.NamedResource>;

    status: 'active' | 'disabled';

    /**
     * Generic id+name reference used across domain boundaries.
     */
    topic: OrganizationsAPI.NamedResource;

    updated_at: string;

    personas?: Array<OrganizationsAPI.NamedResource>;

    tags?: Array<OrganizationsAPI.NamedResource>;
  }

  export interface Info {
    limit: number;

    next_cursor: string | null;

    total_rows: number;
  }
}

export type CategoryTagsResponse = Array<OrganizationsAPI.NamedResource>

export type CategoryTopicsResponse = Array<CategoryTopicsResponse.CategoryTopicsResponseItem>

export namespace CategoryTopicsResponse {
  export interface CategoryTopicsResponseItem {
    id: string;

    name: string;

    status: 'active' | 'disabled';
  }
}

/**
 * Response from updating prompt statuses.
 */
export interface CategoryUpdatePromptStatusResponse {
  /**
   * Whether this was a dry run (no changes persisted).
   */
  dry_run: boolean;

  /**
   * Number of prompts whose status was changed.
   */
  updated_prompts?: number;
}

/**
 * Response from updating prompts.
 */
export interface CategoryUpdatePromptsResponse {
  /**
   * Whether this was a dry run (no changes persisted).
   */
  dry_run: boolean;

  /**
   * List of prompts with their change diffs.
   */
  prompts?: Array<CategoryUpdatePromptsResponse.Prompt>;

  /**
   * Number of new tags created.
   */
  tags_created?: number;

  /**
   * Number of new topics created.
   */
  topics_created?: number;

  /**
   * Number of prompts that had changes.
   */
  updated?: number;
}

export namespace CategoryUpdatePromptsResponse {
  /**
   * Preview of changes applied (or to be applied) to a single prompt. Only changed
   * fields are included.
   */
  export interface Prompt {
    /**
     * ID of the updated prompt.
     */
    id: string;

    /**
     * Shows the old and new value for a changed field.
     */
    asset?: CategoriesAPI.FieldDiff | null;

    /**
     * Shows the old and new value for a changed field.
     */
    language?: CategoriesAPI.FieldDiff | null;

    /**
     * Shows which resources were added or removed.
     */
    personas?: CategoriesAPI.NamedResourceDiffList | null;

    /**
     * Shows which resources were added or removed.
     */
    platforms?: CategoriesAPI.NamedResourceDiffList | null;

    /**
     * Shows the old and new value for a changed field.
     */
    prompt?: CategoriesAPI.FieldDiff | null;

    /**
     * Shows the old and new value for a changed field.
     */
    prompt_type?: CategoriesAPI.FieldDiff | null;

    /**
     * Shows which resources were added or removed.
     */
    regions?: CategoriesAPI.NamedResourceDiffList | null;

    /**
     * Shows which resources were added or removed.
     */
    tags?: CategoriesAPI.NamedResourceDiffList | null;

    /**
     * Shows the old and new value for a changed field.
     */
    topic?: CategoriesAPI.FieldDiff | null;
  }
}

export interface CategoryListParams {
  /**
   * Restrict results to one or more organizations the caller belongs to. Repeat the
   * parameter to target multiple orgs (e.g.
   * `?organization_ids=<id1>&organization_ids=<id2>`). Omit to return data from
   * every organization the caller has access to.
   */
  organization_ids?: Array<string> | null;
}

export interface CategoryCreatePromptsParams {
  /**
   * List of prompts to create.
   */
  prompts: Array<CategoryCreatePromptsParams.Prompt>;

  /**
   * When true, validate and preview changes without persisting them.
   */
  dry_run?: boolean;
}

export namespace CategoryCreatePromptsParams {
  /**
   * A single prompt to create within a category.
   */
  export interface Prompt {
    /**
     * Language code (e.g. 'en-US')
     */
    language: string;

    /**
     * AI platforms where the prompt will be collected.
     */
    platforms: Array<CategoriesAPI.IDOrName>;

    /**
     * The prompt text to be sent to AI platforms.
     */
    prompt: string;

    /**
     * Regions where the prompt will be collected.
     */
    regions: Array<CategoriesAPI.IDOrName>;

    /**
     * Topic to assign. A new topic is created if the name doesn't exist.
     */
    topic: CategoriesAPI.IDOrName;

    /**
     * Reference by id, name, or both. Plain strings work too: UUIDs become id lookups,
     * other strings become name lookups.
     */
    asset?: CategoriesAPI.IDOrName | null;

    /**
     * Personas to use when collecting. Omit for default (no persona).
     */
    personas?: Array<CategoriesAPI.IDOrName>;

    /**
     * 'Visibility' (open-ended) or 'Sentiment' (brand-direct). Defaults to Visibility.
     */
    prompt_type?: string | null;

    /**
     * Tags to assign. New tags are created if names don't exist.
     */
    tags?: Array<CategoriesAPI.IDOrName>;
  }
}

export interface CategoryPromptsParams {
  /**
   * Pagination cursor from a previous response.
   */
  cursor?: string | null;

  /**
   * Maximum number of prompts to return.
   */
  limit?: number;

  /**
   * Sort direction by creation date.
   */
  order_dir?: 'asc' | 'desc';

  /**
   * Filter by persona IDs.
   */
  persona_id?: Array<string>;

  /**
   * Filter by platform IDs.
   */
  platform_id?: Array<string>;

  /**
   * Filter by prompt type.
   */
  prompt_type?: Array<'visibility' | 'sentiment'>;

  /**
   * Filter by region IDs.
   */
  region_id?: Array<string>;

  /**
   * Filter by prompt status. Defaults to `active` only.
   */
  status?: Array<'active' | 'disabled'>;

  /**
   * Filter by tag IDs.
   */
  tag_id?: Array<string>;

  /**
   * Filter by topic IDs.
   */
  topic_id?: Array<string>;
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
   */
  dry_run?: boolean;
}

export interface CategoryUpdatePromptsParams {
  /**
   * List of prompt updates. Each entry must include an `id` and at least one field
   * to change.
   */
  prompts: Array<CategoryUpdatePromptsParams.Prompt>;

  /**
   * When true, validate and preview changes without persisting them.
   */
  dry_run?: boolean;
}

export namespace CategoryUpdatePromptsParams {
  /**
   * Fields to update on an existing prompt. Only provided fields are changed;
   * omitted fields are left unchanged.
   */
  export interface Prompt {
    /**
     * ID of the prompt to update.
     */
    id: string;

    /**
     * Reference by id, name, or both. Plain strings work too: UUIDs become id lookups,
     * other strings become name lookups.
     */
    asset?: CategoriesAPI.IDOrName | null;

    /**
     * New language code. Must be enabled for the organization.
     */
    language?: string | null;

    /**
     * New persona set. Replaces all existing personas.
     */
    personas?: Array<CategoriesAPI.IDOrName> | null;

    /**
     * New platform set. Replaces all existing platforms.
     */
    platforms?: Array<CategoriesAPI.IDOrName> | null;

    /**
     * New prompt text.
     */
    prompt?: string | null;

    /**
     * 'Visibility' or 'Sentiment'.
     */
    prompt_type?: string | null;

    /**
     * New region set. Replaces all existing regions.
     */
    regions?: Array<CategoriesAPI.IDOrName> | null;

    /**
     * New tag set. Replaces all existing tags on the prompt.
     */
    tags?: Array<CategoriesAPI.IDOrName> | null;

    /**
     * Reference by id, name, or both. Plain strings work too: UUIDs become id lookups,
     * other strings become name lookups.
     */
    topic?: CategoriesAPI.IDOrName | null;
  }
}

export declare namespace Categories {
  export {
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

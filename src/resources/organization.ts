// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";
import { path as __scalarPath } from "../internal/utils/path";

export class OrganizationResource extends APIResource {
  /**
   * Get the regions for a specific category.
   *
   * @param {string} category_id
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OrganizationListCategoryRegionsV1OrgCategoriesCategoryRegionsGetResponse>} Successful Response
   *
   * @example
   * ```ts
   * const listCategoryRegionsV1OrgCategoriesCategoryRegionsGet = await client.organization.listCategoryRegionsV1OrgCategoriesCategoryRegionsGet("categoryId");
   * ```
   */
  listCategoryRegionsV1OrgCategoriesCategoryRegionsGet(category_id: string, options?: RequestOptions): APIPromise<OrganizationListCategoryRegionsV1OrgCategoriesCategoryRegionsGetResponse> {
    return this._client.get(__scalarPath`/v1/org/categories/${category_id}/regions`, options);
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
  prompts: Array<{ prompt: string; topic: IDOrName; language: string; regions: Array<IDOrName>; platforms: Array<IDOrName>; tags?: Array<IDOrName>; personas?: Array<IDOrName>; analysis_types?: Array<"visibility" | "sentiment" | "sentiment_v2" | "accuracy"> | null; prompt_type?: string | null; asset?: IDOrName | null }>;
  /**
   * When true, validate and preview changes without persisting them.
   * @default false
   */
  dry_run?: boolean;
}

export interface UpdatePromptsBody {
  /**
   * List of prompt updates. Each entry must include an `id` and at least one field to change.
   */
  prompts: Array<{ id: string; prompt?: string | null; topic?: IDOrName | null; language?: string | null; tags?: Array<IDOrName> | null; regions?: Array<IDOrName> | null; platforms?: Array<IDOrName> | null; personas?: Array<IDOrName> | null; analysis_types?: Array<"visibility" | "sentiment" | "sentiment_v2" | "accuracy"> | null; prompt_type?: string | null; asset?: IDOrName | null }>;
  /**
   * When true, validate and preview changes without persisting them.
   * @default false
   */
  dry_run?: boolean;
}

export interface UpdatePromptStatusBody {
  /**
   * IDs of the prompts to update.
   */
  prompt_ids: Array<string>;
  /**
   * Target status: 'active', 'disabled', or 'deleted'.
   */
  status: "active" | "disabled" | "deleted";
  /**
   * When true, validate and preview changes without persisting them.
   * @default false
   */
  dry_run?: boolean;
}

/**
 * Generic id+name reference used across domain boundaries.
 */
export interface NamedResource {
  id: string;
  name: string;
}

export type OrganizationListCategoryRegionsV1OrgCategoriesCategoryRegionsGetResponse = Array<NamedResource>;
export declare namespace OrganizationResource {
  export {
    type Organization as Organization,
    type CreatePromptsBody as CreatePromptsBody,
    type UpdatePromptsBody as UpdatePromptsBody,
    type UpdatePromptStatusBody as UpdatePromptStatusBody,
    type OrganizationListCategoryRegionsV1OrgCategoriesCategoryRegionsGetResponse as OrganizationListCategoryRegionsV1OrgCategoriesCategoryRegionsGetResponse,
  };
}

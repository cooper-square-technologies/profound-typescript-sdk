// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { buildHeaders } from '../../internal/headers';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as Shared from '../shared';
import * as GenerationsAPI from './generations';
import {
  Generations,
  type GenerationListV1GetResponse,
  type GenerationRetrieveStatusV1RunGetResponse,
  type GenerationListV1GetParams,
  type GenerationRetrieveStatusV1RunGetParams,
} from './generations';
import * as TasksAPI from './tasks';
import {
  Tasks,
  type CreateProjectTaskRequest,
  type UpdateProjectTaskRequest,
  type UpdateProjectTaskStatusRequest,
  type TaskListV1IDGetResponse,
  type TaskCreateV1IDPostResponse,
  type TaskRetrieveV1GetResponse,
  type TaskUpdateV1IDIDPatchResponse,
  type TaskUpdateStatusV1IDIDStatusPostResponse,
  type TaskListV1IDGetParams,
  type TaskCreateV1IDPostParams,
  type TaskRetrieveV1GetParams,
  type TaskUpdateV1IDIDPatchParams,
  type TaskDeleteV1IDIDDeleteParams,
  type TaskUpdateStatusV1IDIDStatusPostParams,
} from './tasks';

export class Projects extends APIResource {
  generations: GenerationsAPI.Generations = new GenerationsAPI.Generations(this._client);
  tasks: TasksAPI.Tasks = new TasksAPI.Tasks(this._client);

  /**
   * List Projects
   *
   * @param {ProjectListV1GetParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ProjectListV1GetResponse>} Successful Response
   *
   * @example
   * ```ts
   * const listV1Get = await client.projects.listV1Get({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   limit: 100,
   *   offset: 0,
   * });
   * ```
   */
  listV1Get(query: ProjectListV1GetParams, options?: RequestOptions): APIPromise<ProjectListV1GetResponse> {
    return this._client.get('/v1/projects', { query, ...options });
  }

  /**
   * Create Project
   *
   * @param {ProjectCreateV1PostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ProjectCreateV1PostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const createV1Post = await client.projects.createV1Post({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   */
  createV1Post(
    body: ProjectCreateV1PostParams,
    options?: RequestOptions,
  ): APIPromise<ProjectCreateV1PostResponse> {
    return this._client.post('/v1/projects', { body, ...options });
  }

  /**
   * Get Project
   *
   * @param {string} projectID - Unique project ID.
   * @param {ProjectRetrieveV1GetParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ProjectRetrieveV1GetResponse>} Successful Response
   *
   * @example
   * ```ts
   * const retrieveV1Get = await client.projects.retrieveV1Get('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   */
  retrieveV1Get(
    projectID: string,
    query: ProjectRetrieveV1GetParams,
    options?: RequestOptions,
  ): APIPromise<ProjectRetrieveV1GetResponse> {
    return this._client.get(__scalarPath`/v1/projects/${projectID}`, { query, ...options });
  }

  /**
   * Delete Project
   *
   * @param {string} projectID - Unique project ID.
   * @param {ProjectDeleteV1IDDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns Successful Response
   *
   * @example
   * ```ts
   * await client.projects.deleteV1IDDelete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   */
  deleteV1IDDelete(
    projectID: string,
    params: ProjectDeleteV1IDDeleteParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { category_id } = params;
    return this._client.delete(__scalarPath`/v1/projects/${projectID}`, {
      query: { category_id },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get Project Status
   *
   * @param {string} projectID - Unique project ID.
   * @param {ProjectListStatusV1StatusGetParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ProjectListStatusV1StatusGetResponse>} Successful Response
   *
   * @example
   * ```ts
   * const listStatusV1StatusGet = await client.projects.listStatusV1StatusGet(
   *   '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   {
   *     category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   },
   * );
   * ```
   */
  listStatusV1StatusGet(
    projectID: string,
    query: ProjectListStatusV1StatusGetParams,
    options?: RequestOptions,
  ): APIPromise<ProjectListStatusV1StatusGetResponse> {
    return this._client.get(__scalarPath`/v1/projects/${projectID}/status`, { query, ...options });
  }

  /**
   * Archive Project
   *
   * @param {string} projectID - Unique project ID.
   * @param {ProjectArchiveV1IDArchivePostParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ProjectArchiveV1IDArchivePostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const archiveV1IDArchivePost = await client.projects.archiveV1IDArchivePost(
   *   '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   {
   *     category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   },
   * );
   * ```
   */
  archiveV1IDArchivePost(
    projectID: string,
    params: ProjectArchiveV1IDArchivePostParams,
    options?: RequestOptions,
  ): APIPromise<ProjectArchiveV1IDArchivePostResponse> {
    const { category_id, ...body } = params;
    return this._client.post(__scalarPath`/v1/projects/${projectID}/archive`, {
      body,
      query: { category_id },
      ...options,
    });
  }

  /**
   * Unarchive Project
   *
   * @param {string} projectID - Unique project ID.
   * @param {ProjectUnarchiveV1IDUnarchivePostParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ProjectUnarchiveV1IDUnarchivePostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const unarchiveV1IDUnarchivePost = await client.projects.unarchiveV1IDUnarchivePost(
   *   '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   {
   *     category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   },
   * );
   * ```
   */
  unarchiveV1IDUnarchivePost(
    projectID: string,
    params: ProjectUnarchiveV1IDUnarchivePostParams,
    options?: RequestOptions,
  ): APIPromise<ProjectUnarchiveV1IDUnarchivePostResponse> {
    const { category_id } = params;
    return this._client.post(__scalarPath`/v1/projects/${projectID}/unarchive`, {
      query: { category_id },
      ...options,
    });
  }
}

export interface CreateProjectRequest {
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * @minLength 1
   * @maxLength 120
   */
  title?: string | null;
  /**
   * @minLength 1
   * @maxLength 120
   */
  project_name?: string | null;
  /**
   * @minLength 1
   * @maxLength 2000
   */
  focus?: string | null;
  /**
   * @maxItems 6
   */
  topics?: Array<string>;
  /**
   * @maxItems 3
   */
  attachments?: Array<CreateProjectRequest.Attachment>;
  generation_context?: CreateProjectRequest.GenerationContext | null;
}

export namespace CreateProjectRequest {
  export interface Attachment {
    /**
     * @minLength 1
     */
    id: string;
    /**
     * @minLength 1
     * @maxLength 255
     */
    name: string;
    /**
     * @minLength 1
     */
    mime_type: string;
    /**
     * @maximum 10485760
     */
    size_bytes: number;
    /**
     * @minLength 1
     * @maxLength 13981016
     */
    data_base64: string;
  }

  export interface GenerationContext {
    dateRange?: GenerationContext.DateRange | null;
    /**
     * @maxItems 20
     */
    platforms?: Array<Shared.ProjectGenerationContextItem>;
    /**
     * @maxItems 5
     */
    projectCategories?: Array<'creative' | 'earned' | 'publish' | 'refresh' | 'social'>;
    /**
     * @maxItems 50
     */
    regions?: Array<Shared.ProjectGenerationContextItem>;
    /**
     * @maxItems 100
     */
    tags?: Array<Shared.ProjectGenerationContextItem>;
  }

  export namespace GenerationContext {
    export interface DateRange {
      /**
       * @minLength 1
       * @maxLength 80
       */
      label: string;
      /**
       * @minLength 1
       * @maxLength 80
       */
      preset: string;
      /**
       * @maxLength 40
       */
      endDate?: string | null;
      mode?: 'custom' | 'relative' | null;
      /**
       * @maxLength 40
       */
      startDate?: string | null;
    }
  }
}

export interface ArchiveProjectRequest {
  /**
   * @minLength 1
   * @maxLength 500
   */
  reason?: string | null;
}

export interface ProjectListV1GetParams {
  /**
   * Category that owns the project.
   * @format uuid
   */
  category_id: string;
  /**
   * Comma-separated project statuses: suggested, tracked, retired.
   */
  status?: string | null;
  /**
   * @default 100
   * @minimum 1
   * @maximum 200
   */
  limit?: number;
  /**
   * @default 0
   * @minimum 0
   */
  offset?: number;
}

export interface ProjectListV1GetResponse {
  data: Array<ProjectListV1GetResponse.Data>;
  /**
   * Offset-based pagination parameters.
   */
  pagination?: Shared.Pagination;
}

export namespace ProjectListV1GetResponse {
  export interface Data {
    /**
     * @format uuid
     */
    project_id: string;
    /**
     * @format uuid
     */
    category_id: string;
    title: string;
    /**
     * @default suggested
     */
    status?: 'suggested' | 'tracked' | 'retired';
    summary?: string | null;
    initiated_by_user_id?: string | null;
    topics?: Array<string>;
    /**
     * @format date-time
     */
    updated_at?: string | null;
    task_types?: Array<string>;
    /**
     * @default 0
     * @minimum 0
     */
    task_count?: number;
    /**
     * @default 0
     * @minimum 0
     */
    new_task_count?: number;
    /**
     * @format date-time
     */
    retired_at?: string | null;
    retired_reason?: string | null;
    live_generation?: Shared.LiveGeneration | null;
  }
}

export interface ProjectCreateV1PostParams {
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * @minLength 1
   * @maxLength 120
   */
  title?: string | null;
  /**
   * @minLength 1
   * @maxLength 120
   */
  project_name?: string | null;
  /**
   * @minLength 1
   * @maxLength 2000
   */
  focus?: string | null;
  /**
   * @maxItems 6
   */
  topics?: Array<string>;
  /**
   * @maxItems 3
   */
  attachments?: Array<ProjectCreateV1PostParams.Attachment>;
  generation_context?: ProjectCreateV1PostParams.GenerationContext | null;
}

export namespace ProjectCreateV1PostParams {
  export interface Attachment {
    /**
     * @minLength 1
     */
    id: string;
    /**
     * @minLength 1
     * @maxLength 255
     */
    name: string;
    /**
     * @minLength 1
     */
    mime_type: string;
    /**
     * @maximum 10485760
     */
    size_bytes: number;
    /**
     * @minLength 1
     * @maxLength 13981016
     */
    data_base64: string;
  }

  export interface GenerationContext {
    dateRange?: GenerationContext.DateRange | null;
    /**
     * @maxItems 20
     */
    platforms?: Array<Shared.ProjectGenerationContextItem>;
    /**
     * @maxItems 5
     */
    projectCategories?: Array<'creative' | 'earned' | 'publish' | 'refresh' | 'social'>;
    /**
     * @maxItems 50
     */
    regions?: Array<Shared.ProjectGenerationContextItem>;
    /**
     * @maxItems 100
     */
    tags?: Array<Shared.ProjectGenerationContextItem>;
  }

  export namespace GenerationContext {
    export interface DateRange {
      /**
       * @minLength 1
       * @maxLength 80
       */
      label: string;
      /**
       * @minLength 1
       * @maxLength 80
       */
      preset: string;
      /**
       * @maxLength 40
       */
      endDate?: string | null;
      mode?: 'custom' | 'relative' | null;
      /**
       * @maxLength 40
       */
      startDate?: string | null;
    }
  }
}

export interface ProjectCreateV1PostResponse {
  data: ProjectCreateV1PostResponse.Data;
}

export namespace ProjectCreateV1PostResponse {
  export interface Data {
    /**
     * @format uuid
     */
    project_id: string;
    /**
     * @format uuid
     */
    run_id: string;
    /**
     * @default queued
     */
    status?: 'queued' | 'running';
  }
}

export interface ProjectRetrieveV1GetParams {
  /**
   * Category that owns the project.
   * @format uuid
   */
  category_id: string;
}

export interface ProjectRetrieveV1GetResponse {
  data: ProjectRetrieveV1GetResponse.Data;
}

export namespace ProjectRetrieveV1GetResponse {
  export interface Data {
    /**
     * @format uuid
     */
    project_id: string;
    /**
     * @format uuid
     */
    category_id: string;
    title: string;
    /**
     * @format uuid
     */
    origin_run_id?: string | null;
    initiated_by_user_id?: string | null;
    summary?: string | null;
    why?: string | null;
    topics?: Array<string>;
    prompts?: Array<string>;
    measurement?: Record<string, unknown> | null;
    /**
     * @default adhoc
     */
    source_kind?: 'generate' | 'adhoc';
    source_prompt?: string | null;
    /**
     * @default tracked
     */
    status?: 'suggested' | 'tracked' | 'retired';
    /**
     * @default 0
     * @minimum 0
     */
    task_count?: number;
    /**
     * @default 0
     * @minimum 0
     */
    new_task_count?: number;
    /**
     * @format date-time
     */
    retired_at?: string | null;
    retired_reason?: string | null;
    /**
     * @format uuid
     */
    latest_version_id?: string | null;
    /**
     * @default 0
     * @minimum 0
     */
    version_count?: number;
    /**
     * @format date-time
     */
    created_at?: string | null;
    /**
     * @format date-time
     */
    updated_at?: string | null;
    live_generation?: Shared.LiveGeneration | null;
    tasks?: Array<Shared.ProjectTask>;
  }
}

export interface ProjectDeleteV1IDDeleteParams {
  /**
   * Category that owns the project.
   * @format uuid
   */
  category_id: string;
}

export interface ProjectListStatusV1StatusGetParams {
  /**
   * Category that owns the project.
   * @format uuid
   */
  category_id: string;
}

export interface ProjectListStatusV1StatusGetResponse {
  data: ProjectListStatusV1StatusGetResponse.Data;
}

export namespace ProjectListStatusV1StatusGetResponse {
  export interface Data {
    /**
     * @format uuid
     */
    project_id: string;
    /**
     * @format uuid
     */
    category_id: string;
    status: 'suggested' | 'tracked' | 'retired';
    live_generation?: Shared.LiveGeneration | null;
    /**
     * @format date-time
     */
    updated_at?: string | null;
  }
}

export interface ProjectArchiveV1IDArchivePostParams {
  /**
   * Query param: Category that owns the project.
   * @format uuid
   */
  category_id: string;
  /**
   * Body param
   * @minLength 1
   * @maxLength 500
   */
  reason?: string | null;
}

export interface ProjectArchiveV1IDArchivePostResponse {
  data: ProjectArchiveV1IDArchivePostResponse.Data;
}

export namespace ProjectArchiveV1IDArchivePostResponse {
  export interface Data {
    /**
     * @format uuid
     */
    project_id: string;
    /**
     * @format uuid
     */
    category_id: string;
    title: string;
    /**
     * @format uuid
     */
    origin_run_id?: string | null;
    initiated_by_user_id?: string | null;
    summary?: string | null;
    why?: string | null;
    topics?: Array<string>;
    prompts?: Array<string>;
    measurement?: Record<string, unknown> | null;
    /**
     * @default adhoc
     */
    source_kind?: 'generate' | 'adhoc';
    source_prompt?: string | null;
    /**
     * @default tracked
     */
    status?: 'suggested' | 'tracked' | 'retired';
    /**
     * @default 0
     * @minimum 0
     */
    task_count?: number;
    /**
     * @default 0
     * @minimum 0
     */
    new_task_count?: number;
    /**
     * @format date-time
     */
    retired_at?: string | null;
    retired_reason?: string | null;
    /**
     * @format uuid
     */
    latest_version_id?: string | null;
    /**
     * @default 0
     * @minimum 0
     */
    version_count?: number;
    /**
     * @format date-time
     */
    created_at?: string | null;
    /**
     * @format date-time
     */
    updated_at?: string | null;
    live_generation?: Shared.LiveGeneration | null;
  }
}

export interface ProjectUnarchiveV1IDUnarchivePostParams {
  /**
   * Category that owns the project.
   * @format uuid
   */
  category_id: string;
}

export interface ProjectUnarchiveV1IDUnarchivePostResponse {
  data: ProjectUnarchiveV1IDUnarchivePostResponse.Data;
}

export namespace ProjectUnarchiveV1IDUnarchivePostResponse {
  export interface Data {
    /**
     * @format uuid
     */
    project_id: string;
    /**
     * @format uuid
     */
    category_id: string;
    title: string;
    /**
     * @format uuid
     */
    origin_run_id?: string | null;
    initiated_by_user_id?: string | null;
    summary?: string | null;
    why?: string | null;
    topics?: Array<string>;
    prompts?: Array<string>;
    measurement?: Record<string, unknown> | null;
    /**
     * @default adhoc
     */
    source_kind?: 'generate' | 'adhoc';
    source_prompt?: string | null;
    /**
     * @default tracked
     */
    status?: 'suggested' | 'tracked' | 'retired';
    /**
     * @default 0
     * @minimum 0
     */
    task_count?: number;
    /**
     * @default 0
     * @minimum 0
     */
    new_task_count?: number;
    /**
     * @format date-time
     */
    retired_at?: string | null;
    retired_reason?: string | null;
    /**
     * @format uuid
     */
    latest_version_id?: string | null;
    /**
     * @default 0
     * @minimum 0
     */
    version_count?: number;
    /**
     * @format date-time
     */
    created_at?: string | null;
    /**
     * @format date-time
     */
    updated_at?: string | null;
    live_generation?: Shared.LiveGeneration | null;
  }
}
Projects.Generations = Generations;
Projects.Tasks = Tasks;

export declare namespace Projects {
  export {
    type CreateProjectRequest as CreateProjectRequest,
    type ArchiveProjectRequest as ArchiveProjectRequest,
    type ProjectListV1GetResponse as ProjectListV1GetResponse,
    type ProjectCreateV1PostResponse as ProjectCreateV1PostResponse,
    type ProjectRetrieveV1GetResponse as ProjectRetrieveV1GetResponse,
    type ProjectListStatusV1StatusGetResponse as ProjectListStatusV1StatusGetResponse,
    type ProjectArchiveV1IDArchivePostResponse as ProjectArchiveV1IDArchivePostResponse,
    type ProjectUnarchiveV1IDUnarchivePostResponse as ProjectUnarchiveV1IDUnarchivePostResponse,
    type ProjectListV1GetParams as ProjectListV1GetParams,
    type ProjectCreateV1PostParams as ProjectCreateV1PostParams,
    type ProjectRetrieveV1GetParams as ProjectRetrieveV1GetParams,
    type ProjectDeleteV1IDDeleteParams as ProjectDeleteV1IDDeleteParams,
    type ProjectListStatusV1StatusGetParams as ProjectListStatusV1StatusGetParams,
    type ProjectArchiveV1IDArchivePostParams as ProjectArchiveV1IDArchivePostParams,
    type ProjectUnarchiveV1IDUnarchivePostParams as ProjectUnarchiveV1IDUnarchivePostParams,
  };

  export {
    Generations as Generations,
    type GenerationListV1GetResponse as GenerationListV1GetResponse,
    type GenerationRetrieveStatusV1RunGetResponse as GenerationRetrieveStatusV1RunGetResponse,
    type GenerationListV1GetParams as GenerationListV1GetParams,
    type GenerationRetrieveStatusV1RunGetParams as GenerationRetrieveStatusV1RunGetParams,
  };

  export {
    Tasks as Tasks,
    type CreateProjectTaskRequest as CreateProjectTaskRequest,
    type UpdateProjectTaskRequest as UpdateProjectTaskRequest,
    type UpdateProjectTaskStatusRequest as UpdateProjectTaskStatusRequest,
    type TaskListV1IDGetResponse as TaskListV1IDGetResponse,
    type TaskCreateV1IDPostResponse as TaskCreateV1IDPostResponse,
    type TaskRetrieveV1GetResponse as TaskRetrieveV1GetResponse,
    type TaskUpdateV1IDIDPatchResponse as TaskUpdateV1IDIDPatchResponse,
    type TaskUpdateStatusV1IDIDStatusPostResponse as TaskUpdateStatusV1IDIDStatusPostResponse,
    type TaskListV1IDGetParams as TaskListV1IDGetParams,
    type TaskCreateV1IDPostParams as TaskCreateV1IDPostParams,
    type TaskRetrieveV1GetParams as TaskRetrieveV1GetParams,
    type TaskUpdateV1IDIDPatchParams as TaskUpdateV1IDIDPatchParams,
    type TaskDeleteV1IDIDDeleteParams as TaskDeleteV1IDIDDeleteParams,
    type TaskUpdateStatusV1IDIDStatusPostParams as TaskUpdateStatusV1IDIDStatusPostParams,
  };
}

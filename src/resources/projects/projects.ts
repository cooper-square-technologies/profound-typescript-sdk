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
  type GenerationListResponse,
  type GenerationRetrieveResponse,
  type GenerationListParams,
  type GenerationRetrieveParams,
} from './generations';
import * as TasksAPI from './tasks';
import {
  Tasks,
  type TaskListResponse,
  type TaskCreateResponse,
  type TaskRetrieveResponse,
  type TaskUpdateResponse,
  type TaskUpdateStatusResponse,
  type TaskListParams,
  type TaskCreateParams,
  type TaskRetrieveParams,
  type TaskUpdateParams,
  type TaskDeleteParams,
  type TaskUpdateStatusParams,
} from './tasks';

export class Projects extends APIResource {
  generations: GenerationsAPI.Generations = new GenerationsAPI.Generations(this._client);
  tasks: TasksAPI.Tasks = new TasksAPI.Tasks(this._client);

  /**
   * List Projects
   *
   * @param {ProjectListParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ProjectListResponse>} Successful Response
   *
   * @example
   * ```ts
   * const project = await client.projects.list({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   limit: 100,
   *   offset: 0,
   * });
   * ```
   */
  list(query: ProjectListParams, options?: RequestOptions): APIPromise<ProjectListResponse> {
    return this._client.get('/v1/projects', { query, ...options });
  }

  /**
   * Create Project
   *
   * @param {ProjectCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ProjectCreateResponse>} Successful Response
   *
   * @example
   * ```ts
   * const project = await client.projects.create({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   */
  create(body: ProjectCreateParams, options?: RequestOptions): APIPromise<ProjectCreateResponse> {
    return this._client.post('/v1/projects', { body, ...options });
  }

  /**
   * Get Project
   *
   * @param {string} projectID - Unique project ID.
   * @param {ProjectRetrieveParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ProjectRetrieveResponse>} Successful Response
   *
   * @example
   * ```ts
   * const project = await client.projects.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   */
  retrieve(
    projectID: string,
    query: ProjectRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ProjectRetrieveResponse> {
    return this._client.get(__scalarPath`/v1/projects/${projectID}`, { query, ...options });
  }

  /**
   * Delete Project
   *
   * @param {string} projectID - Unique project ID.
   * @param {ProjectDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns Successful Response
   *
   * @example
   * ```ts
   * await client.projects.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   */
  delete(projectID: string, params: ProjectDeleteParams, options?: RequestOptions): APIPromise<void> {
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
   * @param {ProjectGetStatusParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ProjectGetStatusResponse>} Successful Response
   *
   * @example
   * ```ts
   * const project = await client.projects.getStatus('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   */
  getStatus(
    projectID: string,
    query: ProjectGetStatusParams,
    options?: RequestOptions,
  ): APIPromise<ProjectGetStatusResponse> {
    return this._client.get(__scalarPath`/v1/projects/${projectID}/status`, { query, ...options });
  }

  /**
   * Archive Project
   *
   * @param {string} projectID - Unique project ID.
   * @param {ProjectArchiveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ProjectArchiveResponse>} Successful Response
   *
   * @example
   * ```ts
   * const project = await client.projects.archive('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   */
  archive(
    projectID: string,
    params: ProjectArchiveParams,
    options?: RequestOptions,
  ): APIPromise<ProjectArchiveResponse> {
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
   * @param {ProjectUnarchiveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ProjectUnarchiveResponse>} Successful Response
   *
   * @example
   * ```ts
   * const project = await client.projects.unarchive('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   */
  unarchive(
    projectID: string,
    params: ProjectUnarchiveParams,
    options?: RequestOptions,
  ): APIPromise<ProjectUnarchiveResponse> {
    const { category_id } = params;
    return this._client.post(__scalarPath`/v1/projects/${projectID}/unarchive`, {
      query: { category_id },
      ...options,
    });
  }
}

export interface ProjectListParams {
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

export interface ProjectListResponse {
  data: Array<ProjectListResponse.Data>;
  /**
   * Offset-based pagination parameters.
   */
  pagination?: Shared.Pagination;
}

export namespace ProjectListResponse {
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
    live_generation?: Data.LiveGeneration | null;
  }

  export namespace Data {
    export interface LiveGeneration {
      /**
       * @format uuid
       */
      run_id: string;
      status: 'queued' | 'running' | 'completed' | 'failed';
      /**
       * @format date-time
       */
      started_at?: string | null;
      /**
       * @format date-time
       */
      finished_at?: string | null;
      error?: string | null;
    }
  }
}

export interface ProjectCreateParams {
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
  attachments?: Array<ProjectCreateParams.Attachment>;
  generation_context?: ProjectCreateParams.GenerationContext | null;
}

export namespace ProjectCreateParams {
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
    platforms?: Array<GenerationContext.Platform>;
    /**
     * @maxItems 5
     */
    projectCategories?: Array<'creative' | 'earned' | 'publish' | 'refresh' | 'social'>;
    /**
     * @maxItems 50
     */
    regions?: Array<GenerationContext.Region>;
    /**
     * @maxItems 100
     */
    tags?: Array<GenerationContext.Tag>;
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

    export interface Platform {
      /**
       * @minLength 1
       * @maxLength 200
       */
      id: string;
      /**
       * @minLength 1
       * @maxLength 200
       */
      name: string;
      /**
       * @maxLength 200
       */
      slug?: string | null;
    }

    export interface Region {
      /**
       * @minLength 1
       * @maxLength 200
       */
      id: string;
      /**
       * @minLength 1
       * @maxLength 200
       */
      name: string;
      /**
       * @maxLength 200
       */
      slug?: string | null;
    }

    export interface Tag {
      /**
       * @minLength 1
       * @maxLength 200
       */
      id: string;
      /**
       * @minLength 1
       * @maxLength 200
       */
      name: string;
      /**
       * @maxLength 200
       */
      slug?: string | null;
    }
  }
}

export interface ProjectCreateResponse {
  data: ProjectCreateResponse.Data;
}

export namespace ProjectCreateResponse {
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

export interface ProjectRetrieveParams {
  /**
   * Category that owns the project.
   * @format uuid
   */
  category_id: string;
}

export interface ProjectRetrieveResponse {
  data: ProjectRetrieveResponse.Data;
}

export namespace ProjectRetrieveResponse {
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
    live_generation?: Data.LiveGeneration | null;
    tasks?: Array<Data.Task>;
  }

  export namespace Data {
    export interface LiveGeneration {
      /**
       * @format uuid
       */
      run_id: string;
      status: 'queued' | 'running' | 'completed' | 'failed';
      /**
       * @format date-time
       */
      started_at?: string | null;
      /**
       * @format date-time
       */
      finished_at?: string | null;
      error?: string | null;
    }

    export interface Task {
      /**
       * @format uuid
       */
      task_id: string;
      /**
       * @format uuid
       */
      project_id: string;
      /**
       * @format uuid
       */
      category_id: string;
      title: string;
      type?: string | null;
      summary?: string | null;
      brief?: string | null;
      topic?: string | null;
      /**
       * @minimum 1
       * @maximum 5
       */
      impact?: number | null;
      reference_url?: string | null;
      reference_label?: string | null;
      /**
       * @default not_started
       */
      status?: 'not_started' | 'in_progress' | 'done' | 'abandoned';
      /**
       * @format date-time
       */
      status_changed_at?: string | null;
      /**
       * @default true
       */
      is_new?: boolean;
      /**
       * @format date-time
       */
      created_at?: string | null;
    }
  }
}

export interface ProjectDeleteParams {
  /**
   * Category that owns the project.
   * @format uuid
   */
  category_id: string;
}

export interface ProjectGetStatusParams {
  /**
   * Category that owns the project.
   * @format uuid
   */
  category_id: string;
}

export interface ProjectGetStatusResponse {
  data: ProjectGetStatusResponse.Data;
}

export namespace ProjectGetStatusResponse {
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
    live_generation?: Data.LiveGeneration | null;
    /**
     * @format date-time
     */
    updated_at?: string | null;
  }

  export namespace Data {
    export interface LiveGeneration {
      /**
       * @format uuid
       */
      run_id: string;
      status: 'queued' | 'running' | 'completed' | 'failed';
      /**
       * @format date-time
       */
      started_at?: string | null;
      /**
       * @format date-time
       */
      finished_at?: string | null;
      error?: string | null;
    }
  }
}

export interface ProjectArchiveParams {
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

export interface ProjectArchiveResponse {
  data: ProjectArchiveResponse.Data;
}

export namespace ProjectArchiveResponse {
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
    live_generation?: Data.LiveGeneration | null;
  }

  export namespace Data {
    export interface LiveGeneration {
      /**
       * @format uuid
       */
      run_id: string;
      status: 'queued' | 'running' | 'completed' | 'failed';
      /**
       * @format date-time
       */
      started_at?: string | null;
      /**
       * @format date-time
       */
      finished_at?: string | null;
      error?: string | null;
    }
  }
}

export interface ProjectUnarchiveParams {
  /**
   * Category that owns the project.
   * @format uuid
   */
  category_id: string;
}

export interface ProjectUnarchiveResponse {
  data: ProjectUnarchiveResponse.Data;
}

export namespace ProjectUnarchiveResponse {
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
    live_generation?: Data.LiveGeneration | null;
  }

  export namespace Data {
    export interface LiveGeneration {
      /**
       * @format uuid
       */
      run_id: string;
      status: 'queued' | 'running' | 'completed' | 'failed';
      /**
       * @format date-time
       */
      started_at?: string | null;
      /**
       * @format date-time
       */
      finished_at?: string | null;
      error?: string | null;
    }
  }
}
Projects.Generations = Generations;
Projects.Tasks = Tasks;

export declare namespace Projects {
  export {
    type ProjectListResponse as ProjectListResponse,
    type ProjectCreateResponse as ProjectCreateResponse,
    type ProjectRetrieveResponse as ProjectRetrieveResponse,
    type ProjectGetStatusResponse as ProjectGetStatusResponse,
    type ProjectArchiveResponse as ProjectArchiveResponse,
    type ProjectUnarchiveResponse as ProjectUnarchiveResponse,
    type ProjectListParams as ProjectListParams,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectRetrieveParams as ProjectRetrieveParams,
    type ProjectDeleteParams as ProjectDeleteParams,
    type ProjectGetStatusParams as ProjectGetStatusParams,
    type ProjectArchiveParams as ProjectArchiveParams,
    type ProjectUnarchiveParams as ProjectUnarchiveParams,
  };

  export {
    Generations as Generations,
    type GenerationListResponse as GenerationListResponse,
    type GenerationRetrieveResponse as GenerationRetrieveResponse,
    type GenerationListParams as GenerationListParams,
    type GenerationRetrieveParams as GenerationRetrieveParams,
  };

  export {
    Tasks as Tasks,
    type TaskListResponse as TaskListResponse,
    type TaskCreateResponse as TaskCreateResponse,
    type TaskRetrieveResponse as TaskRetrieveResponse,
    type TaskUpdateResponse as TaskUpdateResponse,
    type TaskUpdateStatusResponse as TaskUpdateStatusResponse,
    type TaskListParams as TaskListParams,
    type TaskCreateParams as TaskCreateParams,
    type TaskRetrieveParams as TaskRetrieveParams,
    type TaskUpdateParams as TaskUpdateParams,
    type TaskDeleteParams as TaskDeleteParams,
    type TaskUpdateStatusParams as TaskUpdateStatusParams,
  };
}

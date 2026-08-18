// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { buildHeaders } from '../../internal/headers';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as Shared from '../shared';

export class Tasks extends APIResource {
  /**
   * List Project Tasks
   *
   * @param {string} projectID - Unique project ID.
   * @param {TaskListV1IDGetParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TaskListV1IDGetResponse>} Successful Response
   *
   * @example
   * ```ts
   * const listV1IDGet = await client.projects.tasks.listV1IDGet('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   */
  listV1IDGet(
    projectID: string,
    query: TaskListV1IDGetParams,
    options?: RequestOptions,
  ): APIPromise<TaskListV1IDGetResponse> {
    return this._client.get(__scalarPath`/v1/projects/${projectID}/tasks`, { query, ...options });
  }

  /**
   * Create Project Task
   *
   * @param {string} projectID - Unique project ID.
   * @param {TaskCreateV1IDPostParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TaskCreateV1IDPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const createV1IDPost = await client.projects.tasks.createV1IDPost('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   title: 'x',
   * });
   * ```
   */
  createV1IDPost(
    projectID: string,
    params: TaskCreateV1IDPostParams,
    options?: RequestOptions,
  ): APIPromise<TaskCreateV1IDPostResponse> {
    const { category_id, ...body } = params;
    return this._client.post(__scalarPath`/v1/projects/${projectID}/tasks`, {
      body,
      query: { category_id },
      ...options,
    });
  }

  /**
   * Get Project Task
   *
   * @param {string} taskID - Unique project task ID.
   * @param {TaskRetrieveV1GetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TaskRetrieveV1GetResponse>} Successful Response
   *
   * @example
   * ```ts
   * const retrieveV1Get = await client.projects.tasks.retrieveV1Get('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   project_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   */
  retrieveV1Get(
    taskID: string,
    params: TaskRetrieveV1GetParams,
    options?: RequestOptions,
  ): APIPromise<TaskRetrieveV1GetResponse> {
    const { project_id, ...query } = params;
    return this._client.get(__scalarPath`/v1/projects/${project_id}/tasks/${taskID}`, { query, ...options });
  }

  /**
   * Update Project Task
   *
   * @param {string} taskID - Unique project task ID.
   * @param {TaskUpdateV1IDIDPatchParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TaskUpdateV1IDIDPatchResponse>} Successful Response
   *
   * @example
   * ```ts
   * const updateV1IDIDPatch = await client.projects.tasks.updateV1IDIDPatch(
   *   '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   {
   *     project_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *     category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   },
   * );
   * ```
   */
  updateV1IDIDPatch(
    taskID: string,
    params: TaskUpdateV1IDIDPatchParams,
    options?: RequestOptions,
  ): APIPromise<TaskUpdateV1IDIDPatchResponse> {
    const { project_id, category_id, ...body } = params;
    return this._client.patch(__scalarPath`/v1/projects/${project_id}/tasks/${taskID}`, {
      body,
      query: { category_id },
      ...options,
    });
  }

  /**
   * Delete Project Task
   *
   * @param {string} taskID - Unique project task ID.
   * @param {TaskDeleteV1IDIDDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns Successful Response
   *
   * @example
   * ```ts
   * await client.projects.tasks.deleteV1IDIDDelete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   project_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   */
  deleteV1IDIDDelete(
    taskID: string,
    params: TaskDeleteV1IDIDDeleteParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { project_id, category_id } = params;
    return this._client.delete(__scalarPath`/v1/projects/${project_id}/tasks/${taskID}`, {
      query: { category_id },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Update Project Task Status
   *
   * @param {string} taskID - Unique project task ID.
   * @param {TaskUpdateStatusV1IDIDStatusPostParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TaskUpdateStatusV1IDIDStatusPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const updateStatusV1IDIDStatusPost = await client.projects.tasks.updateStatusV1IDIDStatusPost(
   *   '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   {
   *     project_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *     category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *     status: 'not_started',
   *   },
   * );
   * ```
   */
  updateStatusV1IDIDStatusPost(
    taskID: string,
    params: TaskUpdateStatusV1IDIDStatusPostParams,
    options?: RequestOptions,
  ): APIPromise<TaskUpdateStatusV1IDIDStatusPostResponse> {
    const { project_id, category_id, ...body } = params;
    return this._client.post(__scalarPath`/v1/projects/${project_id}/tasks/${taskID}/status`, {
      body,
      query: { category_id },
      ...options,
    });
  }
}

export interface CreateProjectTaskRequest {
  /**
   * @minLength 1
   * @maxLength 240
   */
  title: string;
  /**
   * @minLength 1
   * @maxLength 2000
   */
  summary?: string | null;
  /**
   * @minLength 1
   * @maxLength 8000
   */
  brief?: string | null;
  /**
   * @minLength 1
   * @maxLength 80
   */
  type?: string | null;
  /**
   * @minLength 1
   * @maxLength 120
   */
  topic?: string | null;
  /**
   * @minimum 1
   * @maximum 5
   */
  impact?: number | null;
  /**
   * @minLength 1
   * @maxLength 2048
   */
  reference_url?: string | null;
  /**
   * @minLength 1
   * @maxLength 240
   */
  reference_label?: string | null;
  position?: number | null;
}

export interface UpdateProjectTaskRequest {
  /**
   * @minLength 1
   * @maxLength 240
   */
  title?: string | null;
  /**
   * @minLength 1
   * @maxLength 2000
   */
  summary?: string | null;
  /**
   * @minLength 1
   * @maxLength 8000
   */
  brief?: string | null;
  /**
   * @minLength 1
   * @maxLength 80
   */
  type?: string | null;
  /**
   * @minLength 1
   * @maxLength 120
   */
  topic?: string | null;
  /**
   * @minimum 1
   * @maximum 5
   */
  impact?: number | null;
  /**
   * @minLength 1
   * @maxLength 2048
   */
  reference_url?: string | null;
  /**
   * @minLength 1
   * @maxLength 240
   */
  reference_label?: string | null;
}

export interface UpdateProjectTaskStatusRequest {
  status: 'not_started' | 'in_progress' | 'done' | 'abandoned';
  /**
   * @minLength 1
   * @maxLength 2000
   */
  note?: string | null;
}

export interface TaskListV1IDGetParams {
  /**
   * Category that owns the project.
   * @format uuid
   */
  category_id: string;
}

export interface TaskListV1IDGetResponse {
  data: Array<Shared.ProjectTask>;
  /**
   * Offset-based pagination parameters.
   */
  pagination?: Shared.Pagination;
}

export interface TaskCreateV1IDPostParams {
  /**
   * Query param: Category that owns the project.
   * @format uuid
   */
  category_id: string;
  /**
   * Body param
   * @minLength 1
   * @maxLength 240
   */
  title: string;
  /**
   * Body param
   * @minLength 1
   * @maxLength 2000
   */
  summary?: string | null;
  /**
   * Body param
   * @minLength 1
   * @maxLength 8000
   */
  brief?: string | null;
  /**
   * Body param
   * @minLength 1
   * @maxLength 80
   */
  type?: string | null;
  /**
   * Body param
   * @minLength 1
   * @maxLength 120
   */
  topic?: string | null;
  /**
   * Body param
   * @minimum 1
   * @maximum 5
   */
  impact?: number | null;
  /**
   * Body param
   * @minLength 1
   * @maxLength 2048
   */
  reference_url?: string | null;
  /**
   * Body param
   * @minLength 1
   * @maxLength 240
   */
  reference_label?: string | null;
  /**
   * Body param
   */
  position?: number | null;
}

export interface TaskCreateV1IDPostResponse {
  data: Shared.ProjectTask;
}

export interface TaskRetrieveV1GetParams {
  /**
   * Path param: Unique project ID.
   * @format uuid
   */
  project_id: string;
  /**
   * Query param: Category that owns the project.
   * @format uuid
   */
  category_id: string;
}

export interface TaskRetrieveV1GetResponse {
  data: TaskRetrieveV1GetResponse.Data;
}

export namespace TaskRetrieveV1GetResponse {
  export interface Data {
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
    project_title?: string | null;
  }
}

export interface TaskUpdateV1IDIDPatchParams {
  /**
   * Path param: Unique project ID.
   * @format uuid
   */
  project_id: string;
  /**
   * Query param: Category that owns the project.
   * @format uuid
   */
  category_id: string;
  /**
   * Body param
   * @minLength 1
   * @maxLength 240
   */
  title?: string | null;
  /**
   * Body param
   * @minLength 1
   * @maxLength 2000
   */
  summary?: string | null;
  /**
   * Body param
   * @minLength 1
   * @maxLength 8000
   */
  brief?: string | null;
  /**
   * Body param
   * @minLength 1
   * @maxLength 80
   */
  type?: string | null;
  /**
   * Body param
   * @minLength 1
   * @maxLength 120
   */
  topic?: string | null;
  /**
   * Body param
   * @minimum 1
   * @maximum 5
   */
  impact?: number | null;
  /**
   * Body param
   * @minLength 1
   * @maxLength 2048
   */
  reference_url?: string | null;
  /**
   * Body param
   * @minLength 1
   * @maxLength 240
   */
  reference_label?: string | null;
}

export interface TaskUpdateV1IDIDPatchResponse {
  data: Shared.ProjectTask;
}

export interface TaskDeleteV1IDIDDeleteParams {
  /**
   * Path param: Unique project ID.
   * @format uuid
   */
  project_id: string;
  /**
   * Query param: Category that owns the project.
   * @format uuid
   */
  category_id: string;
}

export interface TaskUpdateStatusV1IDIDStatusPostParams {
  /**
   * Path param: Unique project ID.
   * @format uuid
   */
  project_id: string;
  /**
   * Query param: Category that owns the project.
   * @format uuid
   */
  category_id: string;
  /**
   * Body param
   */
  status: 'not_started' | 'in_progress' | 'done' | 'abandoned';
  /**
   * Body param
   * @minLength 1
   * @maxLength 2000
   */
  note?: string | null;
}

export interface TaskUpdateStatusV1IDIDStatusPostResponse {
  data: TaskUpdateStatusV1IDIDStatusPostResponse.Data;
}

export namespace TaskUpdateStatusV1IDIDStatusPostResponse {
  export interface Data {
    /**
     * @format uuid
     */
    task_id: string;
    /**
     * @format uuid
     */
    project_id: string;
    status: 'not_started' | 'in_progress' | 'done' | 'abandoned';
    /**
     * @format date-time
     */
    changed_at: string;
    changed_by?: string | null;
    note?: string | null;
  }
}
export declare namespace Tasks {
  export {
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

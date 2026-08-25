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
   * @param {TaskListParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TaskListResponse>} Successful Response
   *
   * @example
   * ```ts
   * const task = await client.projects.tasks.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   */
  list(projectID: string, query: TaskListParams, options?: RequestOptions): APIPromise<TaskListResponse> {
    return this._client.get(__scalarPath`/v1/projects/${projectID}/tasks`, { query, ...options });
  }

  /**
   * Create Project Task
   *
   * @param {string} projectID - Unique project ID.
   * @param {TaskCreateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TaskCreateResponse>} Successful Response
   *
   * @example
   * ```ts
   * const task = await client.projects.tasks.create('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   title: 'x',
   * });
   * ```
   */
  create(
    projectID: string,
    params: TaskCreateParams,
    options?: RequestOptions,
  ): APIPromise<TaskCreateResponse> {
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
   * @param {TaskRetrieveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TaskRetrieveResponse>} Successful Response
   *
   * @example
   * ```ts
   * const task = await client.projects.tasks.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   project_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   */
  retrieve(
    taskID: string,
    params: TaskRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<TaskRetrieveResponse> {
    const { project_id, ...query } = params;
    return this._client.get(__scalarPath`/v1/projects/${project_id}/tasks/${taskID}`, { query, ...options });
  }

  /**
   * Update Project Task
   *
   * @param {string} taskID - Unique project task ID.
   * @param {TaskUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TaskUpdateResponse>} Successful Response
   *
   * @example
   * ```ts
   * const task = await client.projects.tasks.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   project_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   */
  update(taskID: string, params: TaskUpdateParams, options?: RequestOptions): APIPromise<TaskUpdateResponse> {
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
   * @param {TaskDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns Successful Response
   *
   * @example
   * ```ts
   * await client.projects.tasks.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   project_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   */
  delete(taskID: string, params: TaskDeleteParams, options?: RequestOptions): APIPromise<void> {
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
   * @param {TaskUpdateStatusParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TaskUpdateStatusResponse>} Successful Response
   *
   * @example
   * ```ts
   * const task = await client.projects.tasks.updateStatus('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   project_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   status: 'not_started',
   * });
   * ```
   */
  updateStatus(
    taskID: string,
    params: TaskUpdateStatusParams,
    options?: RequestOptions,
  ): APIPromise<TaskUpdateStatusResponse> {
    const { project_id, category_id, ...body } = params;
    return this._client.post(__scalarPath`/v1/projects/${project_id}/tasks/${taskID}/status`, {
      body,
      query: { category_id },
      ...options,
    });
  }
}

export interface TaskListParams {
  /**
   * Category that owns the project.
   * @format uuid
   */
  category_id: string;
}

export interface TaskListResponse {
  data: Array<TaskListResponse.Data>;
  /**
   * Offset-based pagination parameters.
   */
  pagination?: Shared.Pagination;
}

export namespace TaskListResponse {
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
  }
}

export interface TaskCreateParams {
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

export interface TaskCreateResponse {
  data: TaskCreateResponse.Data;
}

export namespace TaskCreateResponse {
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
  }
}

export interface TaskRetrieveParams {
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

export interface TaskRetrieveResponse {
  data: TaskRetrieveResponse.Data;
}

export namespace TaskRetrieveResponse {
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

export interface TaskUpdateParams {
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

export interface TaskUpdateResponse {
  data: TaskUpdateResponse.Data;
}

export namespace TaskUpdateResponse {
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
  }
}

export interface TaskDeleteParams {
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

export interface TaskUpdateStatusParams {
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

export interface TaskUpdateStatusResponse {
  data: TaskUpdateStatusResponse.Data;
}

export namespace TaskUpdateStatusResponse {
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

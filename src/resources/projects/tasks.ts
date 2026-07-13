// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tasks extends APIResource {
  /**
   * Create Project Task
   */
  create(
    projectID: string,
    params: TaskCreateParams,
    options?: RequestOptions,
  ): APIPromise<TaskCreateResponse> {
    const { category_id, ...body } = params;
    return this._client.post(path`/v1/projects/${projectID}/tasks`, {
      query: { category_id },
      body,
      ...options,
    });
  }

  /**
   * Get Project Task
   */
  retrieve(
    taskID: string,
    params: TaskRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<TaskRetrieveResponse> {
    const { project_id, ...query } = params;
    return this._client.get(path`/v1/projects/${project_id}/tasks/${taskID}`, { query, ...options });
  }

  /**
   * Update Project Task
   */
  update(taskID: string, params: TaskUpdateParams, options?: RequestOptions): APIPromise<TaskUpdateResponse> {
    const { project_id, category_id, ...body } = params;
    return this._client.patch(path`/v1/projects/${project_id}/tasks/${taskID}`, {
      query: { category_id },
      body,
      ...options,
    });
  }

  /**
   * List Project Tasks
   */
  list(projectID: string, query: TaskListParams, options?: RequestOptions): APIPromise<TaskListResponse> {
    return this._client.get(path`/v1/projects/${projectID}/tasks`, { query, ...options });
  }

  /**
   * Delete Project Task
   */
  delete(taskID: string, params: TaskDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { project_id, category_id } = params;
    return this._client.delete(path`/v1/projects/${project_id}/tasks/${taskID}`, {
      query: { category_id },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Update Project Task Status
   */
  updateStatus(
    taskID: string,
    params: TaskUpdateStatusParams,
    options?: RequestOptions,
  ): APIPromise<TaskUpdateStatusResponse> {
    const { project_id, category_id, ...body } = params;
    return this._client.post(path`/v1/projects/${project_id}/tasks/${taskID}/status`, {
      query: { category_id },
      body,
      ...options,
    });
  }
}

export interface TaskCreateResponse {
  data: TaskCreateResponse.Data;
}

export namespace TaskCreateResponse {
  export interface Data {
    category_id: string;

    project_id: string;

    task_id: string;

    title: string;

    brief?: string | null;

    created_at?: string | null;

    impact?: number | null;

    is_new?: boolean;

    reference_label?: string | null;

    reference_url?: string | null;

    status?: 'not_started' | 'in_progress' | 'done' | 'abandoned';

    status_changed_at?: string | null;

    summary?: string | null;

    topic?: string | null;

    type?: string | null;
  }
}

export interface TaskRetrieveResponse {
  data: TaskRetrieveResponse.Data;
}

export namespace TaskRetrieveResponse {
  export interface Data {
    category_id: string;

    project_id: string;

    task_id: string;

    title: string;

    brief?: string | null;

    created_at?: string | null;

    impact?: number | null;

    is_new?: boolean;

    project_title?: string | null;

    reference_label?: string | null;

    reference_url?: string | null;

    status?: 'not_started' | 'in_progress' | 'done' | 'abandoned';

    status_changed_at?: string | null;

    summary?: string | null;

    topic?: string | null;

    type?: string | null;
  }
}

export interface TaskUpdateResponse {
  data: TaskUpdateResponse.Data;
}

export namespace TaskUpdateResponse {
  export interface Data {
    category_id: string;

    project_id: string;

    task_id: string;

    title: string;

    brief?: string | null;

    created_at?: string | null;

    impact?: number | null;

    is_new?: boolean;

    reference_label?: string | null;

    reference_url?: string | null;

    status?: 'not_started' | 'in_progress' | 'done' | 'abandoned';

    status_changed_at?: string | null;

    summary?: string | null;

    topic?: string | null;

    type?: string | null;
  }
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
    category_id: string;

    project_id: string;

    task_id: string;

    title: string;

    brief?: string | null;

    created_at?: string | null;

    impact?: number | null;

    is_new?: boolean;

    reference_label?: string | null;

    reference_url?: string | null;

    status?: 'not_started' | 'in_progress' | 'done' | 'abandoned';

    status_changed_at?: string | null;

    summary?: string | null;

    topic?: string | null;

    type?: string | null;
  }
}

export interface TaskUpdateStatusResponse {
  data: TaskUpdateStatusResponse.Data;
}

export namespace TaskUpdateStatusResponse {
  export interface Data {
    changed_at: string;

    project_id: string;

    status: 'not_started' | 'in_progress' | 'done' | 'abandoned';

    task_id: string;

    changed_by?: string | null;

    note?: string | null;
  }
}

export interface TaskCreateParams {
  /**
   * Query param: Category that owns the project.
   */
  category_id: string;

  /**
   * Body param
   */
  title: string;

  /**
   * Body param
   */
  brief?: string | null;

  /**
   * Body param
   */
  impact?: number | null;

  /**
   * Body param
   */
  position?: number | null;

  /**
   * Body param
   */
  reference_label?: string | null;

  /**
   * Body param
   */
  reference_url?: string | null;

  /**
   * Body param
   */
  summary?: string | null;

  /**
   * Body param
   */
  topic?: string | null;

  /**
   * Body param
   */
  type?: string | null;
}

export interface TaskRetrieveParams {
  /**
   * Path param: Unique project ID.
   */
  project_id: string;

  /**
   * Query param: Category that owns the project.
   */
  category_id: string;
}

export interface TaskUpdateParams {
  /**
   * Path param: Unique project ID.
   */
  project_id: string;

  /**
   * Query param: Category that owns the project.
   */
  category_id: string;

  /**
   * Body param
   */
  brief?: string | null;

  /**
   * Body param
   */
  impact?: number | null;

  /**
   * Body param
   */
  reference_label?: string | null;

  /**
   * Body param
   */
  reference_url?: string | null;

  /**
   * Body param
   */
  summary?: string | null;

  /**
   * Body param
   */
  title?: string | null;

  /**
   * Body param
   */
  topic?: string | null;

  /**
   * Body param
   */
  type?: string | null;
}

export interface TaskListParams {
  /**
   * Category that owns the project.
   */
  category_id: string;
}

export interface TaskDeleteParams {
  /**
   * Path param: Unique project ID.
   */
  project_id: string;

  /**
   * Query param: Category that owns the project.
   */
  category_id: string;
}

export interface TaskUpdateStatusParams {
  /**
   * Path param: Unique project ID.
   */
  project_id: string;

  /**
   * Query param: Category that owns the project.
   */
  category_id: string;

  /**
   * Body param
   */
  status: 'not_started' | 'in_progress' | 'done' | 'abandoned';

  /**
   * Body param
   */
  note?: string | null;
}

export declare namespace Tasks {
  export {
    type TaskCreateResponse as TaskCreateResponse,
    type TaskRetrieveResponse as TaskRetrieveResponse,
    type TaskUpdateResponse as TaskUpdateResponse,
    type TaskListResponse as TaskListResponse,
    type TaskUpdateStatusResponse as TaskUpdateStatusResponse,
    type TaskCreateParams as TaskCreateParams,
    type TaskRetrieveParams as TaskRetrieveParams,
    type TaskUpdateParams as TaskUpdateParams,
    type TaskListParams as TaskListParams,
    type TaskDeleteParams as TaskDeleteParams,
    type TaskUpdateStatusParams as TaskUpdateStatusParams,
  };
}

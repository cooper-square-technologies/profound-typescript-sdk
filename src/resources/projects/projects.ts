// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as GenerationsAPI from './generations';
import {
  GenerationListParams,
  GenerationListResponse,
  GenerationRetrieveParams,
  GenerationRetrieveResponse,
  Generations,
} from './generations';
import * as TasksAPI from './tasks';
import {
  TaskCreateParams,
  TaskCreateResponse,
  TaskDeleteParams,
  TaskListParams,
  TaskListResponse,
  TaskRetrieveParams,
  TaskRetrieveResponse,
  TaskUpdateParams,
  TaskUpdateResponse,
  TaskUpdateStatusParams,
  TaskUpdateStatusResponse,
  Tasks,
} from './tasks';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Projects extends APIResource {
  generations: GenerationsAPI.Generations = new GenerationsAPI.Generations(this._client);
  tasks: TasksAPI.Tasks = new TasksAPI.Tasks(this._client);

  /**
   * Create Project
   */
  create(body: ProjectCreateParams, options?: RequestOptions): APIPromise<ProjectCreateResponse> {
    return this._client.post('/v1/projects', { body, ...options });
  }

  /**
   * Get Project
   */
  retrieve(
    projectID: string,
    query: ProjectRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ProjectRetrieveResponse> {
    return this._client.get(path`/v1/projects/${projectID}`, { query, ...options });
  }

  /**
   * List Projects
   */
  list(query: ProjectListParams, options?: RequestOptions): APIPromise<ProjectListResponse> {
    return this._client.get('/v1/projects', { query, ...options });
  }

  /**
   * Delete Project
   */
  delete(projectID: string, params: ProjectDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { category_id } = params;
    return this._client.delete(path`/v1/projects/${projectID}`, {
      query: { category_id },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Archive Project
   */
  archive(
    projectID: string,
    params: ProjectArchiveParams,
    options?: RequestOptions,
  ): APIPromise<ProjectArchiveResponse> {
    const { category_id, ...body } = params;
    return this._client.post(path`/v1/projects/${projectID}/archive`, {
      query: { category_id },
      body,
      ...options,
    });
  }

  /**
   * Get Project Status
   */
  getStatus(
    projectID: string,
    query: ProjectGetStatusParams,
    options?: RequestOptions,
  ): APIPromise<ProjectGetStatusResponse> {
    return this._client.get(path`/v1/projects/${projectID}/status`, { query, ...options });
  }

  /**
   * Unarchive Project
   */
  unarchive(
    projectID: string,
    params: ProjectUnarchiveParams,
    options?: RequestOptions,
  ): APIPromise<ProjectUnarchiveResponse> {
    const { category_id } = params;
    return this._client.post(path`/v1/projects/${projectID}/unarchive`, {
      query: { category_id },
      ...options,
    });
  }
}

export interface ProjectCreateResponse {
  data: ProjectCreateResponse.Data;
}

export namespace ProjectCreateResponse {
  export interface Data {
    project_id: string;

    run_id: string;

    status?: 'queued' | 'running';
  }
}

export interface ProjectRetrieveResponse {
  data: ProjectRetrieveResponse.Data;
}

export namespace ProjectRetrieveResponse {
  export interface Data {
    category_id: string;

    project_id: string;

    title: string;

    created_at?: string | null;

    initiated_by_user_id?: string | null;

    latest_version_id?: string | null;

    live_generation?: Data.LiveGeneration | null;

    measurement?: { [key: string]: unknown } | null;

    new_task_count?: number;

    origin_run_id?: string | null;

    prompts?: Array<string>;

    retired_at?: string | null;

    retired_reason?: string | null;

    source_kind?: 'generate' | 'adhoc';

    source_prompt?: string | null;

    status?: 'suggested' | 'tracked' | 'retired';

    summary?: string | null;

    task_count?: number;

    tasks?: Array<Data.Task>;

    topics?: Array<string>;

    updated_at?: string | null;

    version_count?: number;

    why?: string | null;
  }

  export namespace Data {
    export interface LiveGeneration {
      run_id: string;

      status: 'queued' | 'running' | 'completed' | 'failed';

      error?: string | null;

      finished_at?: string | null;

      started_at?: string | null;
    }

    export interface Task {
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
    category_id: string;

    project_id: string;

    title: string;

    initiated_by_user_id?: string | null;

    live_generation?: Data.LiveGeneration | null;

    new_task_count?: number;

    retired_at?: string | null;

    retired_reason?: string | null;

    status?: 'suggested' | 'tracked' | 'retired';

    summary?: string | null;

    task_count?: number;

    task_types?: Array<string>;

    topics?: Array<string>;

    updated_at?: string | null;
  }

  export namespace Data {
    export interface LiveGeneration {
      run_id: string;

      status: 'queued' | 'running' | 'completed' | 'failed';

      error?: string | null;

      finished_at?: string | null;

      started_at?: string | null;
    }
  }
}

export interface ProjectArchiveResponse {
  data: ProjectArchiveResponse.Data;
}

export namespace ProjectArchiveResponse {
  export interface Data {
    category_id: string;

    project_id: string;

    title: string;

    created_at?: string | null;

    initiated_by_user_id?: string | null;

    latest_version_id?: string | null;

    live_generation?: Data.LiveGeneration | null;

    measurement?: { [key: string]: unknown } | null;

    new_task_count?: number;

    origin_run_id?: string | null;

    prompts?: Array<string>;

    retired_at?: string | null;

    retired_reason?: string | null;

    source_kind?: 'generate' | 'adhoc';

    source_prompt?: string | null;

    status?: 'suggested' | 'tracked' | 'retired';

    summary?: string | null;

    task_count?: number;

    topics?: Array<string>;

    updated_at?: string | null;

    version_count?: number;

    why?: string | null;
  }

  export namespace Data {
    export interface LiveGeneration {
      run_id: string;

      status: 'queued' | 'running' | 'completed' | 'failed';

      error?: string | null;

      finished_at?: string | null;

      started_at?: string | null;
    }
  }
}

export interface ProjectGetStatusResponse {
  data: ProjectGetStatusResponse.Data;
}

export namespace ProjectGetStatusResponse {
  export interface Data {
    category_id: string;

    project_id: string;

    status: 'suggested' | 'tracked' | 'retired';

    live_generation?: Data.LiveGeneration | null;

    updated_at?: string | null;
  }

  export namespace Data {
    export interface LiveGeneration {
      run_id: string;

      status: 'queued' | 'running' | 'completed' | 'failed';

      error?: string | null;

      finished_at?: string | null;

      started_at?: string | null;
    }
  }
}

export interface ProjectUnarchiveResponse {
  data: ProjectUnarchiveResponse.Data;
}

export namespace ProjectUnarchiveResponse {
  export interface Data {
    category_id: string;

    project_id: string;

    title: string;

    created_at?: string | null;

    initiated_by_user_id?: string | null;

    latest_version_id?: string | null;

    live_generation?: Data.LiveGeneration | null;

    measurement?: { [key: string]: unknown } | null;

    new_task_count?: number;

    origin_run_id?: string | null;

    prompts?: Array<string>;

    retired_at?: string | null;

    retired_reason?: string | null;

    source_kind?: 'generate' | 'adhoc';

    source_prompt?: string | null;

    status?: 'suggested' | 'tracked' | 'retired';

    summary?: string | null;

    task_count?: number;

    topics?: Array<string>;

    updated_at?: string | null;

    version_count?: number;

    why?: string | null;
  }

  export namespace Data {
    export interface LiveGeneration {
      run_id: string;

      status: 'queued' | 'running' | 'completed' | 'failed';

      error?: string | null;

      finished_at?: string | null;

      started_at?: string | null;
    }
  }
}

export interface ProjectCreateParams {
  category_id: string;

  attachments?: Array<ProjectCreateParams.Attachment>;

  focus?: string | null;

  generation_context?: ProjectCreateParams.GenerationContext | null;

  project_name?: string | null;

  title?: string | null;

  topics?: Array<string>;
}

export namespace ProjectCreateParams {
  export interface Attachment {
    id: string;

    data_base64: string;

    mime_type: string;

    name: string;

    size_bytes: number;
  }

  export interface GenerationContext {
    dateRange?: GenerationContext.DateRange | null;

    platforms?: Array<GenerationContext.Platform>;

    projectCategories?: Array<'creative' | 'earned' | 'publish' | 'refresh' | 'social'>;

    regions?: Array<GenerationContext.Region>;

    tags?: Array<GenerationContext.Tag>;
  }

  export namespace GenerationContext {
    export interface DateRange {
      label: string;

      preset: string;

      endDate?: string | null;

      mode?: 'custom' | 'relative' | null;

      startDate?: string | null;
    }

    export interface Platform {
      id: string;

      name: string;

      slug?: string | null;
    }

    export interface Region {
      id: string;

      name: string;

      slug?: string | null;
    }

    export interface Tag {
      id: string;

      name: string;

      slug?: string | null;
    }
  }
}

export interface ProjectRetrieveParams {
  /**
   * Category that owns the project.
   */
  category_id: string;
}

export interface ProjectListParams {
  /**
   * Category that owns the project.
   */
  category_id: string;

  limit?: number;

  offset?: number;

  /**
   * Comma-separated project statuses: suggested, tracked, retired.
   */
  status?: string | null;
}

export interface ProjectDeleteParams {
  /**
   * Category that owns the project.
   */
  category_id: string;
}

export interface ProjectArchiveParams {
  /**
   * Query param: Category that owns the project.
   */
  category_id: string;

  /**
   * Body param
   */
  reason?: string | null;
}

export interface ProjectGetStatusParams {
  /**
   * Category that owns the project.
   */
  category_id: string;
}

export interface ProjectUnarchiveParams {
  /**
   * Category that owns the project.
   */
  category_id: string;
}

Projects.Generations = Generations;
Projects.Tasks = Tasks;

export declare namespace Projects {
  export {
    type ProjectCreateResponse as ProjectCreateResponse,
    type ProjectRetrieveResponse as ProjectRetrieveResponse,
    type ProjectListResponse as ProjectListResponse,
    type ProjectArchiveResponse as ProjectArchiveResponse,
    type ProjectGetStatusResponse as ProjectGetStatusResponse,
    type ProjectUnarchiveResponse as ProjectUnarchiveResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectRetrieveParams as ProjectRetrieveParams,
    type ProjectListParams as ProjectListParams,
    type ProjectDeleteParams as ProjectDeleteParams,
    type ProjectArchiveParams as ProjectArchiveParams,
    type ProjectGetStatusParams as ProjectGetStatusParams,
    type ProjectUnarchiveParams as ProjectUnarchiveParams,
  };

  export {
    Generations as Generations,
    type GenerationRetrieveResponse as GenerationRetrieveResponse,
    type GenerationListResponse as GenerationListResponse,
    type GenerationRetrieveParams as GenerationRetrieveParams,
    type GenerationListParams as GenerationListParams,
  };

  export {
    Tasks as Tasks,
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

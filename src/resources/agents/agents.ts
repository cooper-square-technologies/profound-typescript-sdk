// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as RunsAPI from './runs';
import { RunCreateParams, RunCreateResponse, RunRetrieveParams, RunRetrieveResponse, Runs } from './runs';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Agents extends APIResource {
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);

  /**
   * Retrieve an agent and its schema details.
   *
   * Agents can have both a live published version and a draft version with newer
   * unpublished changes. Use the `version` parameter to choose which state to
   * return.
   */
  retrieve(
    agentID: string,
    query: AgentRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentRetrieveResponse> {
    return this._client.get(path`/v1/agents/${agentID}`, { query, ...options });
  }

  /**
   * List agents available to your organization.
   *
   * Agent status reflects whether an agent has ever been published. `published`
   * agents have a live published version. `draft` agents have not been published
   * yet.
   */
  list(
    query: AgentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentListResponse> {
    return this._client.get('/v1/agents', { query, ...options });
  }
}

/**
 * Detailed information for an agent.
 */
export interface AgentRetrieveResponse {
  /**
   * Unique ID for the agent.
   */
  id: string;

  /**
   * When the agent was created.
   */
  created_at: string;

  /**
   * Display name of the agent.
   */
  name: string;

  /**
   * Unique ID of the organization that owns the agent.
   */
  organization_id: string;

  /**
   * Input and output schemas for this agent.
   */
  schema: AgentRetrieveResponse.Schema;

  /**
   * Current status of the agent.
   */
  status: 'draft' | 'published' | 'unknown';

  /**
   * Short description of the agent, if provided.
   */
  description?: string | null;
}

export namespace AgentRetrieveResponse {
  /**
   * Input and output schemas for this agent.
   */
  export interface Schema {
    /**
     * JSON Schema for the agent's `inputs` object. Use the top-level property keys as
     * input field names when starting a run.
     */
    input: { [key: string]: unknown };

    /**
     * JSON Schema for the `outputs` object returned by
     * `GET /v1/agents/{agent_id}/runs/{run_id}`.
     */
    output: { [key: string]: unknown };
  }
}

/**
 * Paginated list of agents.
 */
export interface AgentListResponse {
  /**
   * Agents returned for this page.
   */
  data: Array<AgentListResponse.Data>;

  /**
   * Cursor pagination details for this response.
   */
  pagination?: Shared.CursorPagination;
}

export namespace AgentListResponse {
  /**
   * Summary information for an agent.
   */
  export interface Data {
    /**
     * Unique ID for the agent.
     */
    id: string;

    /**
     * When the agent was created.
     */
    created_at: string;

    /**
     * Display name of the agent.
     */
    name: string;

    /**
     * Unique ID of the organization that owns the agent.
     */
    organization_id: string;

    /**
     * Current status of the agent.
     */
    status: 'draft' | 'published' | 'unknown';

    /**
     * Short description of the agent, if provided.
     */
    description?: string | null;
  }
}

export interface AgentRetrieveParams {
  /**
   * Version of the agent to retrieve. Use `published` for the live version, or
   * `draft` for the latest unpublished changes for the same agent. Defaults to
   * `published`.
   */
  version?: 'published' | 'draft';
}

export interface AgentListParams {
  limit?: number;

  next_cursor?: string | null;

  /**
   * Optional status filter. Use `published` to list agents that have a live
   * published version, or `draft` to list agents that have not been published yet.
   * Defaults to `published`.
   */
  statuses?: Array<'published' | 'draft'> | null;
}

Agents.Runs = Runs;

export declare namespace Agents {
  export {
    type AgentRetrieveResponse as AgentRetrieveResponse,
    type AgentListResponse as AgentListResponse,
    type AgentRetrieveParams as AgentRetrieveParams,
    type AgentListParams as AgentListParams,
  };

  export {
    Runs as Runs,
    type RunCreateResponse as RunCreateResponse,
    type RunRetrieveResponse as RunRetrieveResponse,
    type RunCreateParams as RunCreateParams,
    type RunRetrieveParams as RunRetrieveParams,
  };
}

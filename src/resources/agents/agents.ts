// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as Shared from '../shared';
import * as RunsAPI from './runs';
import {
  Runs,
  type RunCreateResponse,
  type RunRetrieveResponse,
  type RunCreateParams,
  type RunRetrieveParams,
} from './runs';

export class Agents extends APIResource {
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);

  /**
   * List agents available to your organization.
   *
   * Agent status reflects whether an agent has ever been published. `published`
   * agents have a live published version. `draft` agents have not been
   * published yet.
   *
   * @param {AgentListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AgentListResponse>} Successful Response
   *
   * @example
   * ```ts
   * const list = await client.agents.list({
   *   limit: 100,
   * });
   * ```
   */
  list(
    query: AgentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentListResponse> {
    return this._client.get('/v1/agents', { query, ...options });
  }

  /**
   * Retrieve an agent and its schema details.
   *
   * Agents can have both a live published version and a draft version with newer
   * unpublished changes. Use the `version` parameter to choose which state to return.
   *
   * @param {string} agentID - The ID of the agent to retrieve.
   * @param {AgentRetrieveParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AgentRetrieveResponse>} Successful Response
   *
   * @example
   * ```ts
   * const retrieve = await client.agents.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  retrieve(
    agentID: string,
    query: AgentRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentRetrieveResponse> {
    return this._client.get(__scalarPath`/v1/agents/${agentID}`, { query, ...options });
  }
}

export interface AgentListParams {
  /**
   * Optional status filter. Use `published` to list agents that have a live published version, or `draft` to list agents that have not been published yet. Defaults to `published`.
   */
  statuses?: Array<'published' | 'draft'> | null;
  /**
   * @default 100
   * @maximum 100
   */
  limit?: number;
  next_cursor?: string | null;
}

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
  export interface Data {
    /**
     * Unique ID for the agent.
     * @format uuid
     */
    id: string;
    /**
     * Unique ID of the organization that owns the agent.
     * @format uuid
     */
    organization_id: string;
    /**
     * Display name of the agent.
     */
    name: string;
    /**
     * Current status of the agent.
     */
    status: 'draft' | 'published' | 'unknown';
    /**
     * When the agent was created.
     * @format date-time
     */
    created_at: string;
    /**
     * Short description of the agent, if provided.
     */
    description?: string | null;
  }
}

export interface AgentRetrieveParams {
  /**
   * Version of the agent to retrieve. Use `published` for the live version, or `draft` for the latest unpublished changes for the same agent. Defaults to `published`.
   */
  version?: 'published' | 'draft';
}

export interface AgentRetrieveResponse {
  /**
   * Unique ID for the agent.
   * @format uuid
   */
  id: string;
  /**
   * Unique ID of the organization that owns the agent.
   * @format uuid
   */
  organization_id: string;
  /**
   * Display name of the agent.
   */
  name: string;
  /**
   * Current status of the agent.
   */
  status: 'draft' | 'published' | 'unknown';
  /**
   * When the agent was created.
   * @format date-time
   */
  created_at: string;
  /**
   * Short description of the agent, if provided.
   */
  description?: string | null;
  /**
   * Input and output schemas for this agent. Omitted while the agent's graph cannot be previewed (e.g. an empty or structurally-invalid draft); check `validation` to see what needs fixing.
   */
  schema?: AgentRetrieveResponse.Schema | null;
  /**
   * Validation report for the agent's graph, when available. Use `validation.valid` to check the agent is publishable.
   */
  validation?: AgentRetrieveResponse.Validation | null;
}

export namespace AgentRetrieveResponse {
  export interface Schema {
    /**
     * JSON Schema for the agent's `inputs` object. Use the top-level property keys as input field names when starting a run.
     */
    input: Record<string, unknown>;
    /**
     * JSON Schema for the `outputs` object returned by `GET /v1/agents/{agent_id}/runs/{run_id}`.
     */
    output: Record<string, unknown>;
  }

  export interface Validation {
    /**
     * Whether the agent's graph is valid and ready to publish.
     */
    valid: boolean;
    /**
     * Problems found while validating the graph. Empty when `valid` is true.
     */
    issues?: Array<Validation.Issue>;
  }

  export namespace Validation {
    export interface Issue {
      /**
       * Stable machine-readable identifier for the kind of issue.
       */
      code: string;
      /**
       * Human-readable description of the issue.
       */
      message: string;
      /**
       * ID of the node the issue applies to, if node-specific.
       */
      node_id?: string | null;
      /**
       * Display title of the affected node, if available.
       */
      node_title?: string | null;
      /**
       * Name of the offending field on the node, if field-specific.
       */
      field?: string | null;
      /**
       * Display title of the affected field, if available.
       */
      field_title?: string | null;
      /**
       * The specific constraint that was violated, if available.
       */
      violation?: string | null;
    }
  }
}
Agents.Runs = Runs;

export declare namespace Agents {
  export {
    type AgentListResponse as AgentListResponse,
    type AgentRetrieveResponse as AgentRetrieveResponse,
    type AgentListParams as AgentListParams,
    type AgentRetrieveParams as AgentRetrieveParams,
  };

  export {
    Runs as Runs,
    type RunCreateResponse as RunCreateResponse,
    type RunRetrieveResponse as RunRetrieveResponse,
    type RunCreateParams as RunCreateParams,
    type RunRetrieveParams as RunRetrieveParams,
  };
}

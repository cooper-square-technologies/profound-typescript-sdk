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
import * as NodeTypesAPI from './node-types';
import { NodeTypes, type NodeTypeListResponse, type NodeTypeRetrieveSchemaResponse } from './node-types';

export class Agents extends APIResource {
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);
  nodeTypes: NodeTypesAPI.NodeTypes = new NodeTypesAPI.NodeTypes(this._client);

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
   * const agent = await client.agents.list({
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
   * const agent = await client.agents.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  retrieve(
    agentID: string,
    query: AgentRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentRetrieveResponse> {
    return this._client.get(__scalarPath`/v1/agents/${agentID}`, { query, ...options });
  }

  /**
   * Create a new draft agent owned by the given organization.
   *
   * `organization_id` is required and you must be a member of it. The agent is created
   * as a `draft`; publish it with `POST /v1/agents/{agent_id}/publish` once its graph
   * is ready.
   *
   * @param {AgentCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AgentCreateResponse>} Successful Response
   *
   * @example
   * ```ts
   * const agent = await client.agents.create({
   *   organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   name: 'x',
   * });
   * ```
   */
  create(body: AgentCreateParams, options?: RequestOptions): APIPromise<AgentCreateResponse> {
    return this._client.post('/v1/agents', { body, ...options });
  }

  /**
   * Publish an agent's latest draft as its live published version.
   *
   * You must be a member of the agent's organization. Publishing promotes the current
   * draft graph to a new published version. A draft that cannot produce its declared
   * input/output contract is rejected with `422` and is not published.
   *
   * @param {string} agentID - The ID of the agent to publish.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AgentPublishResponse>} Successful Response
   *
   * @example
   * ```ts
   * const agent = await client.agents.publish('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  publish(agentID: string, options?: RequestOptions): APIPromise<AgentPublishResponse> {
    return this._client.post(__scalarPath`/v1/agents/${agentID}/publish`, options);
  }

  /**
   * Update an agent's draft graph in place.
   *
   * You must be a member of the agent's organization. The agent's draft is replaced with the
   * supplied graph and re-validated, so you can iterate one draft — create, then update per
   * fix — instead of creating a new agent on every change. The response carries the updated
   * `validation`; publish with `POST /v1/agents/{agent_id}/publish` once `validation.valid`.
   *
   * @param {string} agentID - The ID of the agent to update.
   * @param {AgentUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AgentUpdateResponse>} Successful Response
   *
   * @example
   * ```ts
   * const agent = await client.agents.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   graph: {},
   * });
   * ```
   */
  update(
    agentID: string,
    body: AgentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AgentUpdateResponse> {
    return this._client.patch(__scalarPath`/v1/agents/${agentID}`, { body, ...options });
  }

  /**
   * Retrieve an agent's full workflow graph (`{nodes, edges}`).
   *
   * The graph is returned verbatim in the canonical dialect — the same shape `POST /v1/agents`
   * and `PATCH /v1/agents/{agent_id}` accept — so a known-good agent can be read back, copied,
   * and edited. Tool-backed nodes appear in their lowered `tool` form rather than the friendly
   * v1 node types. A `draft` is visible only to its creator; the `published` version is visible
   * across its organization.
   *
   * @param {string} agentID - The ID of the agent whose graph to retrieve.
   * @param {AgentRetrieveGraphParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AgentRetrieveGraphResponse>} Successful Response
   *
   * @example
   * ```ts
   * const agent = await client.agents.retrieveGraph('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  retrieveGraph(
    agentID: string,
    query: AgentRetrieveGraphParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentRetrieveGraphResponse> {
    return this._client.get(__scalarPath`/v1/agents/${agentID}/graph`, { query, ...options });
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

export interface AgentCreateParams {
  /**
   * ID of the organization that will own the agent. Required — Profound API keys are user-scoped, so the owning organization must be chosen explicitly. The caller must be a member of this organization.
   * @format uuid
   */
  organization_id: string;
  /**
   * Display name for the agent. Must be non-empty.
   * @minLength 1
   */
  name: string;
  /**
   * Short description of the agent.
   */
  description?: string | null;
  /**
   * Initial workflow graph for the agent's draft version. Optional — an agent can be created empty and have its graph filled in later.
   */
  graph?: Record<string, unknown> | null;
}

export interface AgentCreateResponse {
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

export interface AgentPublishResponse {
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

export interface AgentUpdateParams {
  /**
   * New workflow graph for the agent's draft version. Replaces the current draft graph; the agent is iterated in place rather than re-created, so its ID is stable. Required — a null graph is rejected as a 422 here rather than as a relayed upstream error.
   */
  graph: Record<string, unknown>;
}

export interface AgentUpdateResponse {
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
  schema?: AgentUpdateResponse.Schema | null;
  /**
   * Validation report for the agent's graph, when available. Use `validation.valid` to check the agent is publishable.
   */
  validation?: AgentUpdateResponse.Validation | null;
}

export namespace AgentUpdateResponse {
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

export interface AgentRetrieveGraphParams {
  /**
   * Version of the agent whose graph to retrieve. Use `published` for the live version, or `draft` for the latest unpublished changes. Defaults to `published`.
   */
  version?: 'published' | 'draft';
}

export interface AgentRetrieveGraphResponse {
  /**
   * Unique ID of the agent the graph belongs to.
   * @format uuid
   */
  agent_id: string;
  /**
   * Which version of the agent this graph is — `published` or `draft`.
   */
  version: 'published' | 'draft';
  /**
   * Workflow graph (`{nodes, edges}`) in the canonical dialect — the same shape `create` and `update` accept. Treat it as an opaque object: it is returned verbatim, so tool-backed nodes appear in their lowered `tool` form rather than the friendly v1 node types. Read it back to copy and edit a known-good agent.
   */
  graph: Record<string, unknown>;
}
Agents.Runs = Runs;
Agents.NodeTypes = NodeTypes;

export declare namespace Agents {
  export {
    type AgentListResponse as AgentListResponse,
    type AgentRetrieveResponse as AgentRetrieveResponse,
    type AgentCreateResponse as AgentCreateResponse,
    type AgentPublishResponse as AgentPublishResponse,
    type AgentUpdateResponse as AgentUpdateResponse,
    type AgentRetrieveGraphResponse as AgentRetrieveGraphResponse,
    type AgentListParams as AgentListParams,
    type AgentRetrieveParams as AgentRetrieveParams,
    type AgentCreateParams as AgentCreateParams,
    type AgentUpdateParams as AgentUpdateParams,
    type AgentRetrieveGraphParams as AgentRetrieveGraphParams,
  };

  export {
    Runs as Runs,
    type RunCreateResponse as RunCreateResponse,
    type RunRetrieveResponse as RunRetrieveResponse,
    type RunCreateParams as RunCreateParams,
    type RunRetrieveParams as RunRetrieveParams,
  };

  export {
    NodeTypes as NodeTypes,
    type NodeTypeListResponse as NodeTypeListResponse,
    type NodeTypeRetrieveSchemaResponse as NodeTypeRetrieveSchemaResponse,
  };
}

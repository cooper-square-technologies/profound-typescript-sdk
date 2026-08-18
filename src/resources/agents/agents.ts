// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as Shared from '../shared';
import * as NodeTypesAPI from './node-types';
import {
  NodeTypes,
  type NodeTypeListV1GetResponse,
  type NodeTypeListSchemaV1SchemaGetResponse,
} from './node-types';
import * as RunsAPI from './runs';
import {
  Runs,
  type RunAgentRequest,
  type RunV1IDPostResponse,
  type RunRetrieveV1GetResponse,
  type RunV1IDPostParams,
  type RunRetrieveV1GetParams,
} from './runs';

export class Agents extends APIResource {
  nodeTypes: NodeTypesAPI.NodeTypes = new NodeTypesAPI.NodeTypes(this._client);
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);

  /**
   * List agents available to your organization.
   *
   * Agent status reflects whether an agent has ever been published. `published`
   * agents have a live published version. `draft` agents have not been
   * published yet.
   *
   * @param {AgentListV1GetParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AgentListV1GetResponse>} Successful Response
   *
   * @example
   * ```ts
   * const listV1Get = await client.agents.listV1Get({
   *   limit: 100,
   * });
   * ```
   */
  listV1Get(
    query: AgentListV1GetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentListV1GetResponse> {
    return this._client.get('/v1/agents', { query, ...options });
  }

  /**
   * Create a new draft agent owned by the given organization.
   *
   * `organization_id` is required and you must be a member of it. The agent is created
   * as a `draft`; publish it with `POST /v1/agents/{agent_id}/publish` once its graph
   * is ready.
   *
   * @param {AgentCreateV1PostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Shared.Agent>} Successful Response
   *
   * @example
   * ```ts
   * const agent = await client.agents.createV1Post({
   *   organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   name: 'x',
   * });
   * ```
   */
  createV1Post(body: AgentCreateV1PostParams, options?: RequestOptions): APIPromise<Shared.Agent> {
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
   * @returns {APIPromise<Shared.Agent>} Successful Response
   *
   * @example
   * ```ts
   * const agent = await client.agents.publishV1IDPublishPost('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  publishV1IDPublishPost(agentID: string, options?: RequestOptions): APIPromise<Shared.Agent> {
    return this._client.post(__scalarPath`/v1/agents/${agentID}/publish`, options);
  }

  /**
   * Retrieve an agent and its schema details.
   *
   * Agents can have both a live published version and a draft version with newer
   * unpublished changes. Use the `version` parameter to choose which state to return.
   *
   * @param {string} agentID - The ID of the agent to retrieve.
   * @param {AgentRetrieveV1GetParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AgentRetrieveV1GetResponse>} Successful Response
   *
   * @example
   * ```ts
   * const retrieveV1Get = await client.agents.retrieveV1Get('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  retrieveV1Get(
    agentID: string,
    query: AgentRetrieveV1GetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentRetrieveV1GetResponse> {
    return this._client.get(__scalarPath`/v1/agents/${agentID}`, { query, ...options });
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
   * @param {AgentUpdateV1IDPatchParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AgentUpdateV1IDPatchResponse>} Successful Response
   *
   * @example
   * ```ts
   * const updateV1IDPatch = await client.agents.updateV1IDPatch('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   graph: {},
   * });
   * ```
   */
  updateV1IDPatch(
    agentID: string,
    body: AgentUpdateV1IDPatchParams,
    options?: RequestOptions,
  ): APIPromise<AgentUpdateV1IDPatchResponse> {
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
   * @param {AgentListGraphV1GraphGetParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AgentListGraphV1GraphGetResponse>} Successful Response
   *
   * @example
   * ```ts
   * const listGraphV1GraphGet = await client.agents.listGraphV1GraphGet('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  listGraphV1GraphGet(
    agentID: string,
    query: AgentListGraphV1GraphGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentListGraphV1GraphGetResponse> {
    return this._client.get(__scalarPath`/v1/agents/${agentID}/graph`, { query, ...options });
  }
}

/**
 * Request body for creating a draft agent.
 */
export interface CreateAgentRequest {
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

/**
 * Request body for updating a draft agent's graph in place.
 */
export interface UpdateAgentRequest {
  /**
   * New workflow graph for the agent's draft version. Replaces the current draft graph; the agent is iterated in place rather than re-created, so its ID is stable. Required — a null graph is rejected as a 422 here rather than as a relayed upstream error.
   */
  graph: Record<string, unknown>;
}

export interface AgentListV1GetParams {
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

export interface AgentListV1GetResponse {
  /**
   * Agents returned for this page.
   */
  data: Array<Shared.Agent>;
  /**
   * Cursor pagination details for this response.
   */
  pagination?: Shared.CursorPagination;
}

export interface AgentCreateV1PostParams {
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

export interface AgentRetrieveV1GetParams {
  /**
   * Version of the agent to retrieve. Use `published` for the live version, or `draft` for the latest unpublished changes for the same agent. Defaults to `published`.
   */
  version?: Shared.AgentVersion;
}

export interface AgentRetrieveV1GetResponse {
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
  schema?: AgentRetrieveV1GetResponse.Schema | null;
  /**
   * Validation report for the agent's graph, when available. Use `validation.valid` to check the agent is publishable.
   */
  validation?: AgentRetrieveV1GetResponse.Validation | null;
}

export namespace AgentRetrieveV1GetResponse {
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

export interface AgentUpdateV1IDPatchParams {
  /**
   * New workflow graph for the agent's draft version. Replaces the current draft graph; the agent is iterated in place rather than re-created, so its ID is stable. Required — a null graph is rejected as a 422 here rather than as a relayed upstream error.
   */
  graph: Record<string, unknown>;
}

export interface AgentUpdateV1IDPatchResponse {
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
  schema?: AgentUpdateV1IDPatchResponse.Schema | null;
  /**
   * Validation report for the agent's graph, when available. Use `validation.valid` to check the agent is publishable.
   */
  validation?: AgentUpdateV1IDPatchResponse.Validation | null;
}

export namespace AgentUpdateV1IDPatchResponse {
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

export interface AgentListGraphV1GraphGetParams {
  /**
   * Version of the agent whose graph to retrieve. Use `published` for the live version, or `draft` for the latest unpublished changes. Defaults to `published`.
   */
  version?: Shared.AgentVersion;
}

export interface AgentListGraphV1GraphGetResponse {
  /**
   * Unique ID of the agent the graph belongs to.
   * @format uuid
   */
  agent_id: string;
  /**
   * Which version of the agent this graph is — `published` or `draft`.
   */
  version: Shared.AgentVersion;
  /**
   * Workflow graph (`{nodes, edges}`) in the canonical dialect — the same shape `create` and `update` accept. Treat it as an opaque object: it is returned verbatim, so tool-backed nodes appear in their lowered `tool` form rather than the friendly v1 node types. Read it back to copy and edit a known-good agent.
   */
  graph: Record<string, unknown>;
}
Agents.NodeTypes = NodeTypes;
Agents.Runs = Runs;

export declare namespace Agents {
  export {
    type CreateAgentRequest as CreateAgentRequest,
    type UpdateAgentRequest as UpdateAgentRequest,
    type AgentListV1GetResponse as AgentListV1GetResponse,
    type AgentRetrieveV1GetResponse as AgentRetrieveV1GetResponse,
    type AgentUpdateV1IDPatchResponse as AgentUpdateV1IDPatchResponse,
    type AgentListGraphV1GraphGetResponse as AgentListGraphV1GraphGetResponse,
    type AgentListV1GetParams as AgentListV1GetParams,
    type AgentCreateV1PostParams as AgentCreateV1PostParams,
    type AgentRetrieveV1GetParams as AgentRetrieveV1GetParams,
    type AgentUpdateV1IDPatchParams as AgentUpdateV1IDPatchParams,
    type AgentListGraphV1GraphGetParams as AgentListGraphV1GraphGetParams,
  };

  export {
    NodeTypes as NodeTypes,
    type NodeTypeListV1GetResponse as NodeTypeListV1GetResponse,
    type NodeTypeListSchemaV1SchemaGetResponse as NodeTypeListSchemaV1SchemaGetResponse,
  };

  export {
    Runs as Runs,
    type RunAgentRequest as RunAgentRequest,
    type RunV1IDPostResponse as RunV1IDPostResponse,
    type RunRetrieveV1GetResponse as RunRetrieveV1GetResponse,
    type RunV1IDPostParams as RunV1IDPostParams,
    type RunRetrieveV1GetParams as RunRetrieveV1GetParams,
  };
}

// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { path as __scalarPath } from "../../internal/utils/path";
import { NodeTypes, type NodeTypeListV1AgentsGetResponse, type NodeTypeListSchemaV1AgentsSchemaGetResponse } from "./node-types";
import { Runs, type RunAgentRequest, type RunCreateResponse, type RunRetrieveResponse, type RunCreateParams, type RunRetrieveParams } from "./runs";

export class Agents extends APIResource {
  nodeTypes: NodeTypes = new NodeTypes(this._client);
  runs: Runs = new Runs(this._client);

  /**
   * List agents available to your organization.
   *
   * Agent status reflects whether an agent has ever been published. `published`
   * agents have a live published version. `draft` agents have not been
   * published yet.
   *
   * @param {AgentListParams} [params] - The parameters to send with the request.
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
  list(params: AgentListParams | null | undefined = {}, options?: RequestOptions): APIPromise<AgentListResponse> {
    const { statuses, limit, next_cursor } = params ?? {};
    return this._client.get("/v1/agents", { query: { statuses: statuses, limit: limit, next_cursor: next_cursor }, ...options });
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
   * @returns {APIPromise<AgentCreateV1PostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const createV1Post = await client.agents.createV1Post({
   *   organization_id: "",
   *   name: "",
   * });
   * ```
   */
  createV1Post(body: AgentCreateV1PostParams, options?: RequestOptions): APIPromise<AgentCreateV1PostResponse> {
    return this._client.post("/v1/agents", { body: body, ...options });
  }

  /**
   * Publish an agent's latest draft as its live published version.
   *
   * You must be a member of the agent's organization. Publishing promotes the current
   * draft graph to a new published version. A draft that cannot produce its declared
   * input/output contract is rejected with `422` and is not published.
   *
   * @param {string} agent_id - The ID of the agent to publish.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AgentPublishV1IDPublishPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const publishV1IDPublishPost = await client.agents.publishV1IDPublishPost("agentId");
   * ```
   */
  publishV1IDPublishPost(agent_id: string, options?: RequestOptions): APIPromise<AgentPublishV1IDPublishPostResponse> {
    return this._client.post(__scalarPath`/v1/agents/${agent_id}/publish`, options);
  }

  /**
   * Retrieve an agent and its schema details.
   *
   * Agents can have both a live published version and a draft version with newer
   * unpublished changes. Use the `version` parameter to choose which state to return.
   *
   * @param {string} agent_id - The ID of the agent to retrieve.
   * @param {AgentRetrieveParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AgentRetrieveResponse>} Successful Response
   *
   * @example
   * ```ts
   * const retrieve = await client.agents.retrieve("agentId");
   * ```
   */
  retrieve(agent_id: string, params: AgentRetrieveParams | null | undefined = {}, options?: RequestOptions): APIPromise<AgentRetrieveResponse> {
    const { version } = params ?? {};
    return this._client.get(__scalarPath`/v1/agents/${agent_id}`, { query: { version: version }, ...options });
  }

  /**
   * Update an agent's draft graph in place.
   *
   * You must be a member of the agent's organization. The agent's draft is replaced with the
   * supplied graph and re-validated, so you can iterate one draft — create, then update per
   * fix — instead of creating a new agent on every change. The response carries the updated
   * `validation`; publish with `POST /v1/agents/{agent_id}/publish` once `validation.valid`.
   *
   * @param {string} agent_id - The ID of the agent to update.
   * @param {AgentUpdateV1IDPatchParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AgentUpdateV1IDPatchResponse>} Successful Response
   *
   * @example
   * ```ts
   * const updateV1IDPatch = await client.agents.updateV1IDPatch("agentId", {
   *   graph: {},
   * });
   * ```
   */
  updateV1IDPatch(agent_id: string, body: AgentUpdateV1IDPatchParams, options?: RequestOptions): APIPromise<AgentUpdateV1IDPatchResponse> {
    return this._client.patch(__scalarPath`/v1/agents/${agent_id}`, { body: body, ...options });
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
   * @param {string} agent_id - The ID of the agent whose graph to retrieve.
   * @param {AgentListGraphV1GraphGetParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AgentListGraphV1GraphGetResponse>} Successful Response
   *
   * @example
   * ```ts
   * const listGraphV1GraphGet = await client.agents.listGraphV1GraphGet("agentId");
   * ```
   */
  listGraphV1GraphGet(agent_id: string, params: AgentListGraphV1GraphGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<AgentListGraphV1GraphGetResponse> {
    const { version } = params ?? {};
    return this._client.get(__scalarPath`/v1/agents/${agent_id}/graph`, { query: { version: version }, ...options });
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

/**
 * Cursor-based pagination metadata.
 */
export interface CursorPagination {
  /**
   * Maximum number of results to return. Default is 10,000, maximum is 50,000.
   * @default 10000
   * @maximum 50000
   */
  limit?: number;
  /**
   * Token for the next page, if more results are available.
   */
  next_cursor?: string | null;
}

export interface AgentListParams {
  /**
   * Optional status filter. Use `published` to list agents that have a live published version, or `draft` to list agents that have not been published yet. Defaults to `published`.
   */
  statuses?: Array<"published" | "draft"> | null;
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
  pagination?: CursorPagination;
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
    status: "draft" | "published" | "unknown";
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
  graph?: AgentCreateV1PostParams.Graph | null;
}

export namespace AgentCreateV1PostParams {
  export interface Graph {
  }
}

export interface AgentCreateV1PostResponse {
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
  status: "draft" | "published" | "unknown";
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

export interface AgentPublishV1IDPublishPostResponse {
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
  status: "draft" | "published" | "unknown";
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

export interface AgentRetrieveParams {
  /**
   * Version of the agent to retrieve. Use `published` for the live version, or `draft` for the latest unpublished changes for the same agent. Defaults to `published`.
   */
  version?: "published" | "draft";
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
  status: "draft" | "published" | "unknown";
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
    input: Schema.Input;
    /**
     * JSON Schema for the `outputs` object returned by `GET /v1/agents/{agent_id}/runs/{run_id}`.
     */
    output: Schema.Output;
  }

  export namespace Schema {
    export interface Input {
    }

    export interface Output {
    }
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
  graph: AgentUpdateV1IDPatchParams.Graph;
}

export namespace AgentUpdateV1IDPatchParams {
  export interface Graph {
  }
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
  status: "draft" | "published" | "unknown";
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
    input: Schema.Input;
    /**
     * JSON Schema for the `outputs` object returned by `GET /v1/agents/{agent_id}/runs/{run_id}`.
     */
    output: Schema.Output;
  }

  export namespace Schema {
    export interface Input {
    }

    export interface Output {
    }
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
  version?: "published" | "draft";
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
  version: "published" | "draft";
  /**
   * Workflow graph (`{nodes, edges}`) in the canonical dialect — the same shape `create` and `update` accept. Treat it as an opaque object: it is returned verbatim, so tool-backed nodes appear in their lowered `tool` form rather than the friendly v1 node types. Read it back to copy and edit a known-good agent.
   */
  graph: AgentListGraphV1GraphGetResponse.Graph;
}

export namespace AgentListGraphV1GraphGetResponse {
  export interface Graph {
  }
}
Agents.NodeTypes = NodeTypes;
Agents.Runs = Runs;

export declare namespace Agents {
  export {
    type CreateAgentRequest as CreateAgentRequest,
    type UpdateAgentRequest as UpdateAgentRequest,
    type AgentListResponse as AgentListResponse,
    type AgentCreateV1PostResponse as AgentCreateV1PostResponse,
    type AgentPublishV1IDPublishPostResponse as AgentPublishV1IDPublishPostResponse,
    type AgentRetrieveResponse as AgentRetrieveResponse,
    type AgentUpdateV1IDPatchResponse as AgentUpdateV1IDPatchResponse,
    type AgentListGraphV1GraphGetResponse as AgentListGraphV1GraphGetResponse,
    type AgentListParams as AgentListParams,
    type AgentCreateV1PostParams as AgentCreateV1PostParams,
    type AgentRetrieveParams as AgentRetrieveParams,
    type AgentUpdateV1IDPatchParams as AgentUpdateV1IDPatchParams,
    type AgentListGraphV1GraphGetParams as AgentListGraphV1GraphGetParams,
  };

  export {
    NodeTypes as NodeTypes,
    type NodeTypeListV1AgentsGetResponse as NodeTypeListV1AgentsGetResponse,
    type NodeTypeListSchemaV1AgentsSchemaGetResponse as NodeTypeListSchemaV1AgentsSchemaGetResponse,
  };

  export {
    Runs as Runs,
    type RunAgentRequest as RunAgentRequest,
    type RunCreateResponse as RunCreateResponse,
    type RunRetrieveResponse as RunRetrieveResponse,
    type RunCreateParams as RunCreateParams,
    type RunRetrieveParams as RunRetrieveParams,
  };
}
export { Agents as AgentResource };

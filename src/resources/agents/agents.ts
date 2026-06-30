// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as NodeTypesAPI from './node-types';
import { NodeTypeListResponse, NodeTypeRetrieveSchemaResponse, NodeTypes } from './node-types';
import * as RunsAPI from './runs';
import { RunCreateParams, RunCreateResponse, RunRetrieveParams, RunRetrieveResponse, Runs } from './runs';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Agents extends APIResource {
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);
  nodeTypes: NodeTypesAPI.NodeTypes = new NodeTypesAPI.NodeTypes(this._client);

  /**
   * Create a new draft agent owned by the given organization.
   *
   * `organization_id` is required and you must be a member of it. The agent is
   * created as a `draft`; publish it with `POST /v1/agents/{agent_id}/publish` once
   * its graph is ready.
   */
  create(body: AgentCreateParams, options?: RequestOptions): APIPromise<AgentCreateResponse> {
    return this._client.post('/v1/agents', { body, ...options });
  }

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
   * Update an agent's draft graph in place.
   *
   * You must be a member of the agent's organization. The agent's draft is replaced
   * with the supplied graph and re-validated, so you can iterate one draft — create,
   * then update per fix — instead of creating a new agent on every change. The
   * response carries the updated `validation`; publish with
   * `POST /v1/agents/{agent_id}/publish` once `validation.valid`.
   */
  update(
    agentID: string,
    body: AgentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AgentUpdateResponse> {
    return this._client.patch(path`/v1/agents/${agentID}`, { body, ...options });
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

  /**
   * Publish an agent's latest draft as its live published version.
   *
   * You must be a member of the agent's organization. Publishing promotes the
   * current draft graph to a new published version. A draft that cannot produce its
   * declared input/output contract is rejected with `422` and is not published.
   */
  publish(agentID: string, options?: RequestOptions): APIPromise<AgentPublishResponse> {
    return this._client.post(path`/v1/agents/${agentID}/publish`, options);
  }

  /**
   * Retrieve an agent's full workflow graph (`{nodes, edges}`).
   *
   * The graph is returned verbatim in the canonical dialect — the same shape
   * `POST /v1/agents` and `PATCH /v1/agents/{agent_id}` accept — so a known-good
   * agent can be read back, copied, and edited. Tool-backed nodes appear in their
   * lowered `tool` form rather than the friendly v1 node types. A `draft` is visible
   * only to its creator; the `published` version is visible across its organization.
   */
  retrieveGraph(
    agentID: string,
    query: AgentRetrieveGraphParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentRetrieveGraphResponse> {
    return this._client.get(path`/v1/agents/${agentID}/graph`, { query, ...options });
  }
}

/**
 * Summary information for an agent.
 */
export interface AgentCreateResponse {
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
   * Current status of the agent.
   */
  status: 'draft' | 'published' | 'unknown';

  /**
   * Short description of the agent, if provided.
   */
  description?: string | null;

  /**
   * Schema metadata for an agent.
   */
  schema?: AgentRetrieveResponse.Schema | null;

  /**
   * Result of validating an agent's graph.
   *
   * Mirrors the report computed on every read, so callers can confirm a draft is
   * publishable before calling publish.
   */
  validation?: AgentRetrieveResponse.Validation | null;
}

export namespace AgentRetrieveResponse {
  /**
   * Schema metadata for an agent.
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

  /**
   * Result of validating an agent's graph.
   *
   * Mirrors the report computed on every read, so callers can confirm a draft is
   * publishable before calling publish.
   */
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
    /**
     * A single problem found while validating an agent's graph.
     */
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
       * Name of the offending field on the node, if field-specific.
       */
      field?: string | null;

      /**
       * Display title of the affected field, if available.
       */
      field_title?: string | null;

      /**
       * ID of the node the issue applies to, if node-specific.
       */
      node_id?: string | null;

      /**
       * Display title of the affected node, if available.
       */
      node_title?: string | null;

      /**
       * The specific constraint that was violated, if available.
       */
      violation?: string | null;
    }
  }
}

/**
 * Detailed information for an agent.
 */
export interface AgentUpdateResponse {
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

  /**
   * Schema metadata for an agent.
   */
  schema?: AgentUpdateResponse.Schema | null;

  /**
   * Result of validating an agent's graph.
   *
   * Mirrors the report computed on every read, so callers can confirm a draft is
   * publishable before calling publish.
   */
  validation?: AgentUpdateResponse.Validation | null;
}

export namespace AgentUpdateResponse {
  /**
   * Schema metadata for an agent.
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

  /**
   * Result of validating an agent's graph.
   *
   * Mirrors the report computed on every read, so callers can confirm a draft is
   * publishable before calling publish.
   */
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
    /**
     * A single problem found while validating an agent's graph.
     */
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
       * Name of the offending field on the node, if field-specific.
       */
      field?: string | null;

      /**
       * Display title of the affected field, if available.
       */
      field_title?: string | null;

      /**
       * ID of the node the issue applies to, if node-specific.
       */
      node_id?: string | null;

      /**
       * Display title of the affected node, if available.
       */
      node_title?: string | null;

      /**
       * The specific constraint that was violated, if available.
       */
      violation?: string | null;
    }
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

/**
 * Summary information for an agent.
 */
export interface AgentPublishResponse {
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

/**
 * An agent version's workflow graph in the canonical dialect.
 */
export interface AgentRetrieveGraphResponse {
  /**
   * Unique ID of the agent the graph belongs to.
   */
  agent_id: string;

  /**
   * Workflow graph (`{nodes, edges}`) in the canonical dialect — the same shape
   * `create` and `update` accept. Treat it as an opaque object: it is returned
   * verbatim, so tool-backed nodes appear in their lowered `tool` form rather than
   * the friendly v1 node types. Read it back to copy and edit a known-good agent.
   */
  graph: { [key: string]: unknown };

  /**
   * Which version of the agent this graph is — `published` or `draft`.
   */
  version: 'published' | 'draft';
}

export interface AgentCreateParams {
  /**
   * Display name for the agent. Must be non-empty.
   */
  name: string;

  /**
   * ID of the organization that will own the agent. Required — Profound API keys are
   * user-scoped, so the owning organization must be chosen explicitly. The caller
   * must be a member of this organization.
   */
  organization_id: string;

  /**
   * Short description of the agent.
   */
  description?: string | null;

  /**
   * Initial workflow graph for the agent's draft version. Optional — an agent can be
   * created empty and have its graph filled in later.
   */
  graph?: { [key: string]: unknown } | null;
}

export interface AgentRetrieveParams {
  /**
   * Version of the agent to retrieve. Use `published` for the live version, or
   * `draft` for the latest unpublished changes for the same agent. Defaults to
   * `published`.
   */
  version?: 'published' | 'draft';
}

export interface AgentUpdateParams {
  /**
   * New workflow graph for the agent's draft version. Replaces the current draft
   * graph; the agent is iterated in place rather than re-created, so its ID is
   * stable. Required — a null graph is rejected as a 422 here rather than as a
   * relayed upstream error.
   */
  graph: { [key: string]: unknown };
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

export interface AgentRetrieveGraphParams {
  /**
   * Version of the agent whose graph to retrieve. Use `published` for the live
   * version, or `draft` for the latest unpublished changes. Defaults to `published`.
   */
  version?: 'published' | 'draft';
}

Agents.Runs = Runs;
Agents.NodeTypes = NodeTypes;

export declare namespace Agents {
  export {
    type AgentCreateResponse as AgentCreateResponse,
    type AgentRetrieveResponse as AgentRetrieveResponse,
    type AgentUpdateResponse as AgentUpdateResponse,
    type AgentListResponse as AgentListResponse,
    type AgentPublishResponse as AgentPublishResponse,
    type AgentRetrieveGraphResponse as AgentRetrieveGraphResponse,
    type AgentCreateParams as AgentCreateParams,
    type AgentRetrieveParams as AgentRetrieveParams,
    type AgentUpdateParams as AgentUpdateParams,
    type AgentListParams as AgentListParams,
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

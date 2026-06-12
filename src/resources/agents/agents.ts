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

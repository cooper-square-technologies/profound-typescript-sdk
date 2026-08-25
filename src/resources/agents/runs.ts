// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';

export class Runs extends APIResource {
  /**
   * Start a new run for an agent.
   *
   * Runs always execute the agent's live published version, so the agent must be
   * published first with `POST /v1/agents/{agent_id}/publish`. Unpublished drafts
   * cannot be run.
   *
   * @param {string} agentID - The ID of the agent to run.
   * @param {RunCreateParams} [body] - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RunCreateResponse>} Successful Response
   *
   * @example
   * ```ts
   * const run = await client.agents.runs.create('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  create(
    agentID: string,
    body: RunCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RunCreateResponse> {
    return this._client.post(__scalarPath`/v1/agents/${agentID}/runs`, { body, ...options });
  }

  /**
   * Retrieve the current status and result details for an agent run.
   *
   * @param {string} runID - The ID of the run to retrieve.
   * @param {RunRetrieveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RunRetrieveResponse>} Successful Response
   *
   * @example
   * ```ts
   * const run = await client.agents.runs.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   agent_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   verbose: false,
   * });
   * ```
   */
  retrieve(
    runID: string,
    params: RunRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<RunRetrieveResponse> {
    const { agent_id, ...query } = params;
    return this._client.get(__scalarPath`/v1/agents/${agent_id}/runs/${runID}`, { query, ...options });
  }
}

export interface RunCreateParams {
  /**
   * Input values for the run. Keys should match the property names defined in `schema.input`. Omit the request body when the agent does not require inputs.
   */
  inputs?: Record<string, unknown>;
}

export interface RunCreateResponse {
  /**
   * Unique ID for the accepted run.
   * @format uuid
   */
  id: string;
  /**
   * Unique ID of the agent for this run.
   * @format uuid
   */
  agent_id: string;
  /**
   * Initial status of the accepted run.
   */
  status: 'queued' | 'running' | 'succeeded' | 'failed' | 'cancelled' | 'skipped' | 'unknown';
  /**
   * When the run started, if execution began immediately.
   * @format date-time
   */
  started_at?: string | null;
}

export interface RunRetrieveParams {
  /**
   * Path param: The ID of the agent that owns the run.
   * @format uuid
   */
  agent_id: string;
  /**
   * Query param: Include each step's raw `outputs` payload in the execution trace.
   * @default false
   */
  verbose?: boolean;
}

export interface RunRetrieveResponse {
  /**
   * Unique ID for the run.
   * @format uuid
   */
  id: string;
  /**
   * Unique ID of the agent for this run.
   * @format uuid
   */
  agent_id: string;
  /**
   * Current status of the run.
   */
  status: 'queued' | 'running' | 'succeeded' | 'failed' | 'cancelled' | 'skipped' | 'unknown';
  /**
   * When the run started, if it has started.
   * @format date-time
   */
  started_at?: string | null;
  /**
   * When the run finished, if it has completed.
   * @format date-time
   */
  finished_at?: string | null;
  /**
   * Error details, when the run fails and error information is available.
   */
  error?: Record<string, unknown> | null;
  /**
   * Output values returned by the run, keyed by variable ID. This object conforms to `schema.output` from the agent detail response and is empty when no outputs are available.
   */
  outputs?: Record<string, unknown>;
  /**
   * Ordered step-by-step execution trace — one entry per node that ran, in execution order. Always present once the run has executed a node; per-node `outputs` inside each step are included only when the request asks for `verbose`.
   */
  steps?: Array<RunRetrieveResponse.Step> | null;
}

export namespace RunRetrieveResponse {
  export interface Step {
    /**
     * ID of the node that ran, within its agent graph.
     */
    node_id: string;
    /**
     * Kind of node, e.g. "profound_visibility", "llm", "conditional".
     */
    node_type: string;
    /**
     * Human-readable title of the node.
     */
    title: string;
    /**
     * Terminal status of this node execution.
     */
    status: string;
    /**
     * Wall-clock seconds the node took, if recorded.
     */
    elapsed_time?: number | null;
    /**
     * When the node finished, if it has.
     * @format date-time
     */
    finished_at?: string | null;
    /**
     * Failure detail for this node, when it failed.
     */
    error_message?: string | null;
    /**
     * Raw output payload this node produced. Included only when the request asks for `verbose`.
     */
    outputs?: Record<string, unknown> | null;
  }
}
export declare namespace Runs {
  export {
    type RunCreateResponse as RunCreateResponse,
    type RunRetrieveResponse as RunRetrieveResponse,
    type RunCreateParams as RunCreateParams,
    type RunRetrieveParams as RunRetrieveParams,
  };
}

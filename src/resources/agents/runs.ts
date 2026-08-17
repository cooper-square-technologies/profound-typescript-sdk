// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { path as __scalarPath } from "../../internal/utils/path";

export class Runs extends APIResource {
  /**
   * Start a new run for an agent.
   *
   * Runs always execute the agent's live published version, so the agent must be
   * published first with `POST /v1/agents/{agent_id}/publish`. Unpublished drafts
   * cannot be run.
   *
   * @param {string} agent_id - The ID of the agent to run.
   * @param {RunCreateParams} [body] - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RunCreateResponse>} Successful Response
   *
   * @example
   * ```ts
   * const create = await client.agents.runs.create("agentId");
   * ```
   */
  create(agent_id: string, body: RunCreateParams | null | undefined = undefined, options?: RequestOptions): APIPromise<RunCreateResponse> {
    return this._client.post(__scalarPath`/v1/agents/${agent_id}/runs`, { body: body, ...options });
  }

  /**
   * Retrieve the current status and result details for an agent run.
   *
   * @param {string} run_id - The ID of the run to retrieve.
   * @param {RunRetrieveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RunRetrieveResponse>} Successful Response
   *
   * @example
   * ```ts
   * const retrieve = await client.agents.runs.retrieve("runId", {
   *   agent_id: "agentId",
   * });
   * ```
   */
  retrieve(run_id: string, params: RunRetrieveParams, options?: RequestOptions): APIPromise<RunRetrieveResponse> {
    const { agent_id } = params ?? {};
    return this._client.get(__scalarPath`/v1/agents/${agent_id}/runs/${run_id}`, options);
  }
}

/**
 * Request body for starting an agent run.
 */
export interface RunAgentRequest {
  /**
   * Input values for the run. Keys should match the property names defined in `schema.input`. Omit the request body when the agent does not require inputs.
   */
  inputs?: Record<string, unknown>;
}

export type RunCreateParams = RunAgentRequest | null;

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
  status: "queued" | "running" | "succeeded" | "failed" | "cancelled" | "skipped" | "unknown";
  /**
   * When the run started, if execution began immediately.
   * @format date-time
   */
  started_at?: string | null;
}

export interface RunRetrieveParams {
  /**
   * The ID of the agent that owns the run.
   * @format uuid
   */
  agent_id: string;
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
  status: "queued" | "running" | "succeeded" | "failed" | "cancelled" | "skipped" | "unknown";
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
  error?: RunRetrieveResponse.Error | null;
  /**
   * Output values returned by the run, keyed by variable ID. This object conforms to `schema.output` from the agent detail response and is empty when no outputs are available.
   */
  outputs?: RunRetrieveResponse.Outputs;
}

export namespace RunRetrieveResponse {
  export interface Error {
  }

  export interface Outputs {
  }
}
export declare namespace Runs {
  export {
    type RunAgentRequest as RunAgentRequest,
    type RunCreateResponse as RunCreateResponse,
    type RunRetrieveResponse as RunRetrieveResponse,
    type RunCreateParams as RunCreateParams,
    type RunRetrieveParams as RunRetrieveParams,
  };
}
export { Runs as RunResource };

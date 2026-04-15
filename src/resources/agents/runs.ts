// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Runs extends APIResource {
  /**
   * Retrieve the current status and result details for an agent run.
   */
  retrieve(
    runID: string,
    params: RunRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<RunRetrieveResponse> {
    const { agent_id } = params;
    return this._client.get(path`/v1/agents/${agent_id}/runs/${runID}`, options);
  }

  /**
   * Start a new run for an agent.
   */
  start(agentID: string, body: RunStartParams, options?: RequestOptions): APIPromise<RunStartResponse> {
    return this._client.post(path`/v1/agents/${agentID}/runs`, { body, ...options });
  }
}

/**
 * Status and result details for an agent run.
 */
export interface RunRetrieveResponse {
  /**
   * Unique ID for the run.
   */
  id: string;

  /**
   * Unique ID of the agent for this run.
   */
  agent_id: string;

  /**
   * Current status of the run.
   */
  status: 'queued' | 'running' | 'succeeded' | 'failed' | 'cancelled' | 'skipped' | 'unknown';

  /**
   * Error details, when the run fails and error information is available.
   */
  error?: { [key: string]: unknown } | null;

  /**
   * When the run finished, if it has completed.
   */
  finished_at?: string | null;

  /**
   * Output values returned by the run, keyed by variable ID. This object conforms to
   * `schema.output` from the agent detail response and is empty when no outputs are
   * available.
   */
  outputs?: { [key: string]: unknown };

  /**
   * When the run started, if it has started.
   */
  started_at?: string | null;
}

/**
 * Run details returned after a run request is accepted.
 */
export interface RunStartResponse {
  /**
   * Unique ID for the accepted run.
   */
  id: string;

  /**
   * Unique ID of the agent for this run.
   */
  agent_id: string;

  /**
   * Initial status of the accepted run.
   */
  status: 'queued' | 'running' | 'succeeded' | 'failed' | 'cancelled' | 'skipped' | 'unknown';

  /**
   * When the run started, if execution began immediately.
   */
  started_at?: string | null;
}

export interface RunRetrieveParams {
  /**
   * The ID of the agent that owns the run.
   */
  agent_id: string;
}

export interface RunStartParams {
  /**
   * Input values for the run. Keys should match the property names defined in
   * `schema.input`.
   */
  inputs?: { [key: string]: unknown };
}

export declare namespace Runs {
  export {
    type RunRetrieveResponse as RunRetrieveResponse,
    type RunStartResponse as RunStartResponse,
    type RunRetrieveParams as RunRetrieveParams,
    type RunStartParams as RunStartParams,
  };
}

// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as Shared from '../shared';

export class NodeTypes extends APIResource {
  /**
   * List the node types available for building agents.
   *
   * The set is deterministic and does not depend on the caller, so the response
   * is safe to cache across sessions. Integration-dependent and dynamic-schema
   * node types are intentionally excluded in v1.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<NodeTypeListV1GetResponse>} Successful Response
   *
   * @example
   * ```ts
   * const listV1Get = await client.agents.nodeTypes.listV1Get();
   * ```
   */
  listV1Get(options?: RequestOptions): APIPromise<NodeTypeListV1GetResponse> {
    return this._client.get('/v1/agents/node-types', options);
  }

  /**
   * Retrieve the JSON schema for a single node type.
   *
   * The `schema` field is an opaque JSON Schema for the node's configuration.
   * Use `schema_version` as a cache key — it bumps whenever the schema changes.
   *
   * @param {string} nodeType - The node type to fetch the schema for, e.g. `llm`.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<NodeTypeListSchemaV1SchemaGetResponse>} Successful Response
   *
   * @example
   * ```ts
   * const listSchemaV1SchemaGet = await client.agents.nodeTypes.listSchemaV1SchemaGet('nodeType');
   * ```
   */
  listSchemaV1SchemaGet(
    nodeType: string,
    options?: RequestOptions,
  ): APIPromise<NodeTypeListSchemaV1SchemaGetResponse> {
    return this._client.get(__scalarPath`/v1/agents/node-types/${nodeType}/schema`, options);
  }
}

export interface NodeTypeListV1GetResponse {
  /**
   * Allowlisted node types, returned as thin summaries.
   */
  data: Array<NodeTypeListV1GetResponse.Data>;
}

export namespace NodeTypeListV1GetResponse {
  export interface Data {
    /**
     * Stable identifier for the node type, e.g. `llm`.
     */
    node_type: string;
    /**
     * Human-readable name for the node type.
     */
    display_name: string;
    /**
     * Short description of what the node type does, if provided.
     */
    description?: string | null;
  }
}

export interface NodeTypeListSchemaV1SchemaGetResponse {
  /**
   * Stable identifier for the node type, e.g. `llm`.
   */
  node_type: string;
  /**
   * Opaque JSON Schema for the node's configuration. Treat this as an arbitrary object; its internal shape can change between `schema_version` bumps.
   */
  schema: Record<string, unknown>;
  /**
   * Opaque version string for the node schema. Bumps whenever the underlying schema changes, so it can be used as a client-side cache key.
   */
  schema_version: string;
  /**
   * Short description of what the node type does, if provided.
   */
  description?: string | null;
  /**
   * Worked example configurations for the node type, in the canonical graph dialect. Curated authoring guidance, versioned by `docs_version` (NOT `schema_version`): they illustrate a valid shape at curation time but are a starting point, not the contract — they may lag the validator. The authoritative contract is `schema`, and the only authoritative check that a graph is valid is publishing it (or the agent-validation endpoint). Do not parse `examples` as the schema.
   */
  examples?: Array<Record<string, unknown>> | null;
  /**
   * Opaque, human-oriented authoring guidance for the node type — purpose, constraints, enum values, and variable-flow notes that the machine `schema` does not always express (e.g. a conditional's else-branch rule, or an iteration's sub-graph shape). Treat as an arbitrary object; use `docs_version` as its cache key.
   */
  documentation?: Record<string, unknown> | null;
  /**
   * Opaque version string for `documentation`/`examples`, independent of `schema_version`. Bumps when the authoring guidance changes even if the underlying machine `schema` did not. When it trails the live `schema_version`, treat `documentation`/`examples` as guidance that may be stale and validate against the live `schema`.
   */
  docs_version?: string | null;
}
export declare namespace NodeTypes {
  export {
    type NodeTypeListV1GetResponse as NodeTypeListV1GetResponse,
    type NodeTypeListSchemaV1SchemaGetResponse as NodeTypeListSchemaV1SchemaGetResponse,
  };
}

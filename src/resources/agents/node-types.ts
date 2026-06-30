// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class NodeTypes extends APIResource {
  /**
   * List the node types available for building agents.
   *
   * The set is deterministic and does not depend on the caller, so the response is
   * safe to cache across sessions. Integration-dependent and dynamic-schema node
   * types are intentionally excluded in v1.
   */
  list(options?: RequestOptions): APIPromise<NodeTypeListResponse> {
    return this._client.get('/v1/agents/node-types', options);
  }

  /**
   * Retrieve the JSON schema and worked examples for a single node type.
   *
   * The `schema` field is an opaque JSON Schema for the node's configuration. Use
   * `schema_version` as a cache key — it bumps whenever the schema changes.
   */
  retrieveSchema(nodeType: string, options?: RequestOptions): APIPromise<NodeTypeRetrieveSchemaResponse> {
    return this._client.get(path`/v1/agents/node-types/${nodeType}/schema`, options);
  }
}

/**
 * List of node types available to v1 agent authors.
 */
export interface NodeTypeListResponse {
  /**
   * Allowlisted node types, returned as thin summaries.
   */
  data: Array<NodeTypeListResponse.Data>;
}

export namespace NodeTypeListResponse {
  /**
   * Thin summary for a node type available to v1 agent authors.
   */
  export interface Data {
    /**
     * Human-readable name for the node type.
     */
    display_name: string;

    /**
     * Stable identifier for the node type, e.g. `llm`.
     */
    node_type: string;

    /**
     * Short description of what the node type does, if provided.
     */
    description?: string | null;
  }
}

/**
 * JSON schema and worked examples for a single node type.
 */
export interface NodeTypeRetrieveSchemaResponse {
  /**
   * Stable identifier for the node type, e.g. `llm`.
   */
  node_type: string;

  /**
   * Opaque JSON Schema for the node's configuration. Treat this as an arbitrary
   * object; its internal shape can change between `schema_version` bumps.
   */
  schema: { [key: string]: unknown };

  /**
   * Opaque version string for the node schema. Bumps whenever the underlying schema
   * changes, so it can be used as a client-side cache key.
   */
  schema_version: string;

  /**
   * Short description of what the node type does, if provided.
   */
  description?: string | null;

  /**
   * Opaque version string for `documentation`/`examples`, independent of
   * `schema_version`. Bumps when the authoring guidance changes even if the
   * underlying machine `schema` did not. When it trails the live `schema_version`,
   * treat `documentation`/`examples` as guidance that may be stale and validate
   * against the live `schema`.
   */
  docs_version?: string | null;

  /**
   * Opaque, human-oriented authoring guidance for the node type — purpose,
   * constraints, enum values, and variable-flow notes that the machine `schema` does
   * not always express (e.g. a conditional's else-branch rule, or an iteration's
   * sub-graph shape). Treat as an arbitrary object; use `docs_version` as its cache
   * key.
   */
  documentation?: { [key: string]: unknown } | null;

  /**
   * Worked example configurations for the node type, in the canonical graph dialect.
   * These are curated guidance maintained by external-api, versioned by
   * `docs_version` (NOT `schema_version`): they illustrate a valid shape at curation
   * time but are a starting point, not the contract — they may lag the validator.
   * The authoritative contract is `schema`, and the only authoritative check that a
   * graph is valid is publishing it (or the agent-validation endpoint). Do not parse
   * `examples` as the schema.
   */
  examples?: Array<{ [key: string]: unknown }> | null;
}

export declare namespace NodeTypes {
  export {
    type NodeTypeListResponse as NodeTypeListResponse,
    type NodeTypeRetrieveSchemaResponse as NodeTypeRetrieveSchemaResponse,
  };
}

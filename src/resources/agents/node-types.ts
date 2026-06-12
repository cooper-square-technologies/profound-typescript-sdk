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
   * Worked example configurations for the node type that conform to `schema`.
   */
  examples?: Array<{ [key: string]: unknown }> | null;
}

export declare namespace NodeTypes {
  export {
    type NodeTypeListResponse as NodeTypeListResponse,
    type NodeTypeRetrieveSchemaResponse as NodeTypeRetrieveSchemaResponse,
  };
}

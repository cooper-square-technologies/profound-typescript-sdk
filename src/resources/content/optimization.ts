// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { path as __scalarPath } from "../../internal/utils/path";

export class Optimization extends APIResource {
  /**
   * Optimization List
   *
   * @param {string} asset_id
   * @param {OptimizationListParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OptimizationListResponse>} Successful Response
   *
   * @example
   * ```ts
   * const list = await client.content.optimization.list("assetId", {
   *   limit: 10000,
   *   offset: 0,
   * });
   * ```
   */
  list(asset_id: string, params: OptimizationListParams | null | undefined = {}, options?: RequestOptions): APIPromise<OptimizationListResponse> {
    const { limit, offset } = params ?? {};
    return this._client.get(__scalarPath`/v1/content/${asset_id}/optimization`, { query: { limit: limit, offset: offset }, ...options });
  }

  /**
   * Optimization Analysis
   *
   * @param {string} content_id
   * @param {OptimizationRetrieveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OptimizationRetrieveResponse>} Successful Response
   *
   * @example
   * ```ts
   * const retrieve = await client.content.optimization.retrieve("contentId", {
   *   asset_id: "assetId",
   * });
   * ```
   */
  retrieve(content_id: string, params: OptimizationRetrieveParams, options?: RequestOptions): APIPromise<OptimizationRetrieveResponse> {
    const { asset_id } = params ?? {};
    return this._client.get(__scalarPath`/v1/content/${asset_id}/optimization/${content_id}`, options);
  }
}

/**
 * Offset-based pagination parameters.
 */
export interface Pagination {
  /**
   * Maximum number of results to return. Default is 10,000, maximum is 50,000.
   * @default 10000
   * @maximum 50000
   */
  limit?: number;
  /**
   * Offset for the results. Used for pagination.
   * @default 0
   * @minimum 0
   */
  offset?: number;
}

export interface OptimizationListParams {
  /**
   * Maximum number of results to return
   * @default 10000
   * @maximum 50000
   */
  limit?: number;
  /**
   * Offset for pagination
   * @default 0
   * @minimum 0
   */
  offset?: number;
}

export interface OptimizationListResponse {
  info: OptimizationListResponse.Info;
  data: Array<OptimizationListResponse.Data>;
}

export namespace OptimizationListResponse {
  export interface Info {
    total_rows: number;
    query: Info.Query;
  }

  export namespace Info {
    export interface Query {
      /**
       * @format uuid
       */
      asset_id: string;
      /**
       * Pagination parameters for the results. Default is 10,000 rows with no offset.
       */
      pagination?: Pagination;
    }
  }

  export interface Data {
    /**
     * @format uuid
     */
    id: string;
    title: string;
    /**
     * @format date-time
     */
    created_at: string;
    extracted_input: string | null;
    type: "file" | "text" | "url";
    status: string;
  }
}

export interface OptimizationRetrieveParams {
  /**
   * @format uuid
   */
  asset_id: string;
}

export interface OptimizationRetrieveResponse {
  data: OptimizationRetrieveResponse.Data;
}

export namespace OptimizationRetrieveResponse {
  export interface Data {
    content: Data.Content;
    aeo_content_score: Data.AeoContentScore | null;
    analysis: Data.Analysis;
    recommendations: Array<Data.Recommendation>;
    inputs: Data.Inputs;
  }

  export namespace Data {
    export interface Content {
      format: "markdown" | "html";
      value: string;
    }

    export interface AeoContentScore {
      target_zone: AeoContentScore.TargetZone;
      value: number;
    }

    export namespace AeoContentScore {
      export interface TargetZone {
        low: number;
        high: number;
      }
    }

    export interface Analysis {
      breakdown: Array<Analysis.Breakdown>;
    }

    export namespace Analysis {
      export interface Breakdown {
        title: string;
        weight: number;
        score: number;
      }
    }

    export interface Recommendation {
      title: string;
      status: "done" | "pending";
      impact: Recommendation.Impact | null;
      suggestion: Recommendation.Suggestion;
    }

    export namespace Recommendation {
      export interface Impact {
        section: string;
        score: number;
      }

      export interface Suggestion {
        text: string;
        rationale: string;
      }
    }

    export interface Inputs {
      topic: Inputs.Topic | null;
      prompt: Inputs.Prompt | null;
      top_citations: Array<string>;
      user: Inputs.User;
    }

    export namespace Inputs {
      export interface Topic {
        /**
         * @format uuid
         */
        id: string;
        name: string;
      }

      export interface Prompt {
        /**
         * @format uuid
         */
        id: string;
        name: string;
      }

      export interface User {
        type: "file" | "text" | "url";
        value: string;
        metadata: Record<string, number | string>;
      }
    }
  }
}
export declare namespace Optimization {
  export {
    type OptimizationListResponse as OptimizationListResponse,
    type OptimizationRetrieveResponse as OptimizationRetrieveResponse,
    type OptimizationListParams as OptimizationListParams,
    type OptimizationRetrieveParams as OptimizationRetrieveParams,
  };
}
export { Optimization as OptimizationResource };

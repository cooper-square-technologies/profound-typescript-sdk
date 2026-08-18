// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as Shared from '../shared';

export class Optimization extends APIResource {
  /**
   * Optimization List
   *
   * @param {string} assetID
   * @param {OptimizationListV1AssetIDGetParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OptimizationListV1AssetIDGetResponse>} Successful Response
   *
   * @example
   * ```ts
   * const listV1AssetIDGet = await client.content.optimization.listV1AssetIDGet(
   *   '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   {
   *     limit: 10000,
   *     offset: 0,
   *   },
   * );
   * ```
   */
  listV1AssetIDGet(
    assetID: string,
    query: OptimizationListV1AssetIDGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OptimizationListV1AssetIDGetResponse> {
    return this._client.get(__scalarPath`/v1/content/${assetID}/optimization`, { query, ...options });
  }

  /**
   * Optimization Analysis
   *
   * @param {string} contentID
   * @param {OptimizationAnalysisV1AssetIDIDGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OptimizationAnalysisV1AssetIDIDGetResponse>} Successful Response
   *
   * @example
   * ```ts
   * const analysisV1AssetIDIDGet = await client.content.optimization.analysisV1AssetIDIDGet(
   *   '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   {
   *     asset_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   },
   * );
   * ```
   */
  analysisV1AssetIDIDGet(
    contentID: string,
    params: OptimizationAnalysisV1AssetIDIDGetParams,
    options?: RequestOptions,
  ): APIPromise<OptimizationAnalysisV1AssetIDIDGetResponse> {
    const { asset_id } = params;
    return this._client.get(__scalarPath`/v1/content/${asset_id}/optimization/${contentID}`, options);
  }
}

export interface OptimizationListV1AssetIDGetParams {
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

export interface OptimizationListV1AssetIDGetResponse {
  info: OptimizationListV1AssetIDGetResponse.Info;
  data: Array<OptimizationListV1AssetIDGetResponse.Data>;
}

export namespace OptimizationListV1AssetIDGetResponse {
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
      pagination?: Shared.Pagination;
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
    type: 'file' | 'text' | 'url';
    status: string;
  }
}

export interface OptimizationAnalysisV1AssetIDIDGetParams {
  /**
   * @format uuid
   */
  asset_id: string;
}

export interface OptimizationAnalysisV1AssetIDIDGetResponse {
  data: OptimizationAnalysisV1AssetIDIDGetResponse.Data;
}

export namespace OptimizationAnalysisV1AssetIDIDGetResponse {
  export interface Data {
    content: Data.Content;
    aeo_content_score: Data.AeoContentScore | null;
    analysis: Data.Analysis;
    recommendations: Array<Data.Recommendation>;
    inputs: Data.Inputs;
  }

  export namespace Data {
    export interface Content {
      format: 'markdown' | 'html';
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
      status: 'done' | 'pending';
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
        type: 'file' | 'text' | 'url';
        value: string;
        metadata: Record<string, number | string>;
      }
    }
  }
}
export declare namespace Optimization {
  export {
    type OptimizationListV1AssetIDGetResponse as OptimizationListV1AssetIDGetResponse,
    type OptimizationAnalysisV1AssetIDIDGetResponse as OptimizationAnalysisV1AssetIDIDGetResponse,
    type OptimizationListV1AssetIDGetParams as OptimizationListV1AssetIDGetParams,
    type OptimizationAnalysisV1AssetIDIDGetParams as OptimizationAnalysisV1AssetIDIDGetParams,
  };
}

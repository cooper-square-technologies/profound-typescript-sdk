// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Optimization extends APIResource {
  /**
   * Optimization Analysis
   */
  retrieve(
    contentID: string,
    params: OptimizationRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<OptimizationRetrieveResponse> {
    const { asset_id } = params;
    return this._client.get(path`/v1/content/${asset_id}/optimization/${contentID}`, options);
  }

  /**
   * Optimization List
   */
  list(
    assetID: string,
    query: OptimizationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OptimizationListResponse> {
    return this._client.get(path`/v1/content/${assetID}/optimization`, { query, ...options });
  }
}

export interface OptimizationRetrieveResponse {
  data: OptimizationRetrieveResponse.Data;
}

export namespace OptimizationRetrieveResponse {
  export interface Data {
    aeo_content_score: Data.AeoContentScore | null;

    analysis: Data.Analysis;

    content: Data.Content;

    inputs: Data.Inputs;

    recommendations: Array<Data.Recommendation>;
  }

  export namespace Data {
    export interface AeoContentScore {
      target_zone: AeoContentScore.TargetZone;

      value: number;
    }

    export namespace AeoContentScore {
      export interface TargetZone {
        high: number;

        low: number;
      }
    }

    export interface Analysis {
      breakdown: Array<Analysis.Breakdown>;
    }

    export namespace Analysis {
      export interface Breakdown {
        score: number;

        title: string;

        weight: number;
      }
    }

    export interface Content {
      format: 'markdown' | 'html';

      value: string;
    }

    export interface Inputs {
      prompt: Inputs.Prompt | null;

      top_citations: Array<string>;

      topic: Inputs.Topic | null;

      user: Inputs.User;
    }

    export namespace Inputs {
      export interface Prompt {
        id: string;

        name: string;
      }

      export interface Topic {
        id: string;

        name: string;
      }

      export interface User {
        metadata: { [key: string]: number | string };

        type: 'file' | 'text' | 'url';

        value: string;
      }
    }

    export interface Recommendation {
      impact: Recommendation.Impact | null;

      status: 'done' | 'pending';

      suggestion: Recommendation.Suggestion;

      title: string;
    }

    export namespace Recommendation {
      export interface Impact {
        score: number;

        section: string;
      }

      export interface Suggestion {
        rationale: string;

        text: string;
      }
    }
  }
}

export interface OptimizationListResponse {
  data: Array<OptimizationListResponse.Data>;

  info: OptimizationListResponse.Info;
}

export namespace OptimizationListResponse {
  export interface Data {
    id: string;

    created_at: string;

    extracted_input: string | null;

    status: string;

    title: string;

    type: 'file' | 'text' | 'url';
  }

  export interface Info {
    query: Info.Query;

    total_rows: number;
  }

  export namespace Info {
    export interface Query {
      asset_id: string;

      /**
       * Pagination parameters for the results. Default is 10,000 rows with no offset.
       */
      pagination?: Shared.Pagination;
    }
  }
}

export interface OptimizationRetrieveParams {
  asset_id: string;
}

export interface OptimizationListParams {
  /**
   * Maximum number of results to return
   */
  limit?: number;

  /**
   * Offset for pagination
   */
  offset?: number;
}

export declare namespace Optimization {
  export {
    type OptimizationRetrieveResponse as OptimizationRetrieveResponse,
    type OptimizationListResponse as OptimizationListResponse,
    type OptimizationRetrieveParams as OptimizationRetrieveParams,
    type OptimizationListParams as OptimizationListParams,
  };
}

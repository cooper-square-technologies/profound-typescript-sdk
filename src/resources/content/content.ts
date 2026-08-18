// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import * as OptimizationAPI from './optimization';
import {
  Optimization,
  type OptimizationListV1AssetIDGetResponse,
  type OptimizationAnalysisV1AssetIDIDGetResponse,
  type OptimizationListV1AssetIDGetParams,
  type OptimizationAnalysisV1AssetIDIDGetParams,
} from './optimization';

export class Content extends APIResource {
  optimization: OptimizationAPI.Optimization = new OptimizationAPI.Optimization(this._client);
}

Content.Optimization = Optimization;

export declare namespace Content {
  export {
    Optimization as Optimization,
    type OptimizationListV1AssetIDGetResponse as OptimizationListV1AssetIDGetResponse,
    type OptimizationAnalysisV1AssetIDIDGetResponse as OptimizationAnalysisV1AssetIDIDGetResponse,
    type OptimizationListV1AssetIDGetParams as OptimizationListV1AssetIDGetParams,
    type OptimizationAnalysisV1AssetIDIDGetParams as OptimizationAnalysisV1AssetIDIDGetParams,
  };
}

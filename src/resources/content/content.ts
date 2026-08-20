// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import * as OptimizationAPI from './optimization';
import {
  Optimization,
  type OptimizationListResponse,
  type OptimizationRetrieveResponse,
  type OptimizationListParams,
  type OptimizationRetrieveParams,
} from './optimization';

export class Content extends APIResource {
  optimization: OptimizationAPI.Optimization = new OptimizationAPI.Optimization(this._client);
}

Content.Optimization = Optimization;

export declare namespace Content {
  export {
    Optimization as Optimization,
    type OptimizationListResponse as OptimizationListResponse,
    type OptimizationRetrieveResponse as OptimizationRetrieveResponse,
    type OptimizationListParams as OptimizationListParams,
    type OptimizationRetrieveParams as OptimizationRetrieveParams,
  };
}

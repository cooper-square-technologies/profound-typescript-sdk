// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OptimizationAPI from './optimization';
import {
  Optimization,
  OptimizationListParams,
  OptimizationListResponse,
  OptimizationRetrieveParams,
  OptimizationRetrieveResponse,
} from './optimization';

export class Content extends APIResource {
  optimization: OptimizationAPI.Optimization = new OptimizationAPI.Optimization(this._client);
}

Content.Optimization = Optimization;

export declare namespace Content {
  export {
    Optimization as Optimization,
    type OptimizationRetrieveResponse as OptimizationRetrieveResponse,
    type OptimizationListResponse as OptimizationListResponse,
    type OptimizationRetrieveParams as OptimizationRetrieveParams,
    type OptimizationListParams as OptimizationListParams,
  };
}

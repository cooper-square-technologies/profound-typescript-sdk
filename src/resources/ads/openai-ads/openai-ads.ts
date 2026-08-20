// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import type { RequestOptions } from '../../../internal/request-options';
import * as AdAccountAPI from './ad-account';
import {
  AdAccount,
  type AdAccountRetrieveInsightsResponse,
  type AdAccountRetrieveInsightsParams,
} from './ad-account';

export class OpenAIAds extends APIResource {
  adAccount: AdAccountAPI.AdAccount = new AdAccountAPI.AdAccount(this._client);
}

OpenAIAds.AdAccount = AdAccount;

export declare namespace OpenAIAds {
  export {
    AdAccount as AdAccount,
    type AdAccountRetrieveInsightsResponse as AdAccountRetrieveInsightsResponse,
    type AdAccountRetrieveInsightsParams as AdAccountRetrieveInsightsParams,
  };
}

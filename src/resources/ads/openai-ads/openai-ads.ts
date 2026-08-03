// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AdAccountAPI from './ad-account';
import { AdAccount, AdAccountRetrieveInsightsParams, AdAccountRetrieveInsightsResponse } from './ad-account';

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

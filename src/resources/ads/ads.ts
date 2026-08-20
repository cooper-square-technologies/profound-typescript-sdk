// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import * as OpenAIAdsAPI from './openai-ads/openai-ads';
import { OpenAIAds } from './openai-ads/openai-ads';

export class Ads extends APIResource {
  openaiAds: OpenAIAdsAPI.OpenAIAds = new OpenAIAdsAPI.OpenAIAds(this._client);
}

Ads.OpenAIAds = OpenAIAds;

export declare namespace Ads {
  export { OpenAIAds as OpenAIAds };
}

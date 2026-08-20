// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import type { RequestOptions } from '../../../internal/request-options';
import * as YoutubeAPI from './youtube';
import {
  Youtube,
  type YoutubeGetChannelsResponse,
  type YoutubeGetVideosResponse,
  type YoutubeGetSummaryResponse,
  type YoutubeGetChannelsParams,
  type YoutubeGetVideosParams,
  type YoutubeGetSummaryParams,
} from './youtube';

export class Social extends APIResource {
  youtube: YoutubeAPI.Youtube = new YoutubeAPI.Youtube(this._client);
}

Social.Youtube = Youtube;

export declare namespace Social {
  export {
    Youtube as Youtube,
    type YoutubeGetChannelsResponse as YoutubeGetChannelsResponse,
    type YoutubeGetVideosResponse as YoutubeGetVideosResponse,
    type YoutubeGetSummaryResponse as YoutubeGetSummaryResponse,
    type YoutubeGetChannelsParams as YoutubeGetChannelsParams,
    type YoutubeGetVideosParams as YoutubeGetVideosParams,
    type YoutubeGetSummaryParams as YoutubeGetSummaryParams,
  };
}

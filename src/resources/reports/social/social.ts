// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as YoutubeAPI from './youtube';
import {
  Youtube,
  YoutubeGetChannelsParams,
  YoutubeGetChannelsResponse,
  YoutubeGetSummaryParams,
  YoutubeGetSummaryResponse,
  YoutubeGetVideosParams,
  YoutubeGetVideosResponse,
} from './youtube';

export class Social extends APIResource {
  youtube: YoutubeAPI.Youtube = new YoutubeAPI.Youtube(this._client);
}

Social.Youtube = Youtube;

export declare namespace Social {
  export {
    Youtube as Youtube,
    type YoutubeGetChannelsResponse as YoutubeGetChannelsResponse,
    type YoutubeGetSummaryResponse as YoutubeGetSummaryResponse,
    type YoutubeGetVideosResponse as YoutubeGetVideosResponse,
    type YoutubeGetChannelsParams as YoutubeGetChannelsParams,
    type YoutubeGetSummaryParams as YoutubeGetSummaryParams,
    type YoutubeGetVideosParams as YoutubeGetVideosParams,
  };
}

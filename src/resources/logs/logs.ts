// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RawAPI from './raw';
import { Raw, RawBotsParams, RawBotsResponse, RawLogsParams, RawLogsResponse } from './raw';

export class Logs extends APIResource {
  raw: RawAPI.Raw = new RawAPI.Raw(this._client);
}

Logs.Raw = Raw;

export declare namespace Logs {
  export {
    Raw as Raw,
    type RawBotsResponse as RawBotsResponse,
    type RawLogsResponse as RawLogsResponse,
    type RawBotsParams as RawBotsParams,
    type RawLogsParams as RawLogsParams,
  };
}

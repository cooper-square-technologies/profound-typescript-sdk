// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RawAPI from './raw';
import { Raw, RawGetBotsParams, RawGetBotsResponse, RawGetLogsParams, RawGetLogsResponse } from './raw';

export class Logs extends APIResource {
  raw: RawAPI.Raw = new RawAPI.Raw(this._client);
}

Logs.Raw = Raw;

export declare namespace Logs {
  export {
    Raw as Raw,
    type RawGetBotsResponse as RawGetBotsResponse,
    type RawGetLogsResponse as RawGetLogsResponse,
    type RawGetBotsParams as RawGetBotsParams,
    type RawGetLogsParams as RawGetLogsParams,
  };
}

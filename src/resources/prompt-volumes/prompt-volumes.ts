// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import * as VolumeAPI from './volume';
import { Volume, type VolumeOnTheFlyResponse, type VolumeOnTheFlyParams } from './volume';
import * as IntentsAPI from './intents';
import { Intents, type IntentOnTheFlyResponse, type IntentOnTheFlyParams } from './intents';

export class PromptVolumes extends APIResource {
  volume: VolumeAPI.Volume = new VolumeAPI.Volume(this._client);
  intents: IntentsAPI.Intents = new IntentsAPI.Intents(this._client);
}

PromptVolumes.Volume = Volume;
PromptVolumes.Intents = Intents;

export declare namespace PromptVolumes {
  export {
    Volume as Volume,
    type VolumeOnTheFlyResponse as VolumeOnTheFlyResponse,
    type VolumeOnTheFlyParams as VolumeOnTheFlyParams,
  };

  export {
    Intents as Intents,
    type IntentOnTheFlyResponse as IntentOnTheFlyResponse,
    type IntentOnTheFlyParams as IntentOnTheFlyParams,
  };
}

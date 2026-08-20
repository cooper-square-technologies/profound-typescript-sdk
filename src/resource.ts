// File generated from our OpenAPI spec by Scalar. See README.md for details.

import type { Profound } from './client';

export abstract class APIResource {
  protected _client: Profound;

  constructor(client: Profound) {
    this._client = client;
  }
}

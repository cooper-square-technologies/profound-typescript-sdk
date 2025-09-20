// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Profound } from '../client';

export abstract class APIResource {
  protected _client: Profound;

  constructor(client: Profound) {
    this._client = client;
  }
}

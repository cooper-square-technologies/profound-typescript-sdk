// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';

export class Volume extends APIResource {
  /**
   * Weekly and monthly volume projections for one keyword.
   *
   * Each organization can look up 1,000 distinct normalized keywords per UTC
   * day. Repeats consume no additional allowance. New keywords over the cap
   * return 429 with X-KeywordQuota-* and Retry-After headers. Quota admission
   * requires Redis (503 when unavailable); empty results and query failures
   * retain the reservation. Slices with at most two users are omitted.
   *
   * @param {VolumeOnTheFlyParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VolumeOnTheFlyResponse>} Successful Response
   *
   * @example
   * ```ts
   * const volume = await client.promptVolumes.volume.onTheFly({
   *   keyword: '',
   *   matching_type: 'exact_match',
   *   start_date: '2024-01-01',
   *   end_date: '2024-01-01',
   * });
   * ```
   */
  onTheFly(body: VolumeOnTheFlyParams, options?: RequestOptions): APIPromise<VolumeOnTheFlyResponse> {
    return this._client.post('/v2/prompt-volumes/volume/on-the-fly', { body, ...options });
  }
}

export interface VolumeOnTheFlyParams {
  keyword: string;
  matching_type: 'exact_match' | 'phrase_match';
  /**
   * @format date
   */
  start_date: string;
  /**
   * @format date
   */
  end_date: string;
  regions?: Array<string>;
  platforms?: Array<string>;
  /**
   * Organization whose daily keyword allowance is used. Required in the JSON request body for API keys with multiple organizations that have API access. If omitted or null, defaults to the API key's sole organization with API access or the token's active organization. For OAuth/M2M tokens, any supplied organization_id must match the token's organization.
   * @format uuid
   */
  organization_id?: string | null;
}

export interface VolumeOnTheFlyResponse {
  /**
   * Metadata for volume query response.
   * truncated indicates if results hit MAX_ROWS limit.
   */
  info: VolumeOnTheFlyResponse.Info;
  data: Array<VolumeOnTheFlyResponse.Data>;
}

export namespace VolumeOnTheFlyResponse {
  export interface Info {
    total_rows: number;
    /**
     * @default false
     */
    truncated?: boolean;
    query?: Record<string, unknown> | null;
  }

  export interface Data {
    country_code: string;
    platform: string;
    matching_type: string;
    frequency: string;
    /**
     * @format date
     */
    date: string;
    volume: number;
  }
}
export declare namespace Volume {
  export {
    type VolumeOnTheFlyResponse as VolumeOnTheFlyResponse,
    type VolumeOnTheFlyParams as VolumeOnTheFlyParams,
  };
}

// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import type * as Shared from './shared';

export class DomainSegments extends APIResource {
  /**
   * List domain segments visible to the caller for a workspace.
   *
   * Returns the id and name of every domain segment the caller can access, so a
   * customer can discover a `view_id` to pass into agent analytics report queries.
   *
   * @param {DomainSegmentListV2GetParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DomainSegmentListV2GetResponse>} Successful Response
   *
   * @example
   * ```ts
   * const listV2Get = await client.domainSegments.listV2Get();
   * ```
   */
  listV2Get(
    query: DomainSegmentListV2GetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DomainSegmentListV2GetResponse> {
    return this._client.get('/v2/domain-segments', { query, ...options });
  }
}

export interface DomainSegmentListV2GetParams {
  /**
   * Organization UUID to list segments for. Required when the caller belongs to multiple organizations.
   * @format uuid
   */
  organization_id?: string | null;
}

export type DomainSegmentListV2GetResponse =
  Array<DomainSegmentListV2GetResponse.DomainSegmentListV2GetResponseItem>;

export namespace DomainSegmentListV2GetResponse {
  export interface DomainSegmentListV2GetResponseItem {
    /**
     * @format uuid
     */
    id: string;
    name: string;
  }
}
export declare namespace DomainSegments {
  export {
    type DomainSegmentListV2GetResponse as DomainSegmentListV2GetResponse,
    type DomainSegmentListV2GetParams as DomainSegmentListV2GetParams,
  };
}

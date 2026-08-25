// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';

export class Integrations extends APIResource {
  /**
   * List the organization's connected integrations.
   *
   * Returns every connected integration by default, each with its lifecycle
   * `status`; pass `status_filter` to narrow to one status (e.g. `needs_reauth`).
   * Each row's `integration_id` is the value a hub-backed node needs bound to it.
   *
   * @param {IntegrationListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<IntegrationListResponse>} Successful Response
   *
   * @example
   * ```ts
   * const integration = await client.integrations.list();
   * ```
   */
  list(
    query: IntegrationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IntegrationListResponse> {
    return this._client.get('/v1/integrations', { query, ...options });
  }
}

export interface IntegrationListParams {
  /**
   * Organization scope for API keys that can access multiple organizations.
   * @format uuid
   */
  organization_id?: string | null;
  /**
   * Filter to a single connector/provider id, e.g. `google_drive`.
   */
  provider?: string | null;
  /**
   * Filter to one lifecycle status. Omitted returns all statuses.
   */
  status_filter?: 'active' | 'pending' | 'needs_reauth' | 'revoking' | 'revoked' | null;
}

export interface IntegrationListResponse {
  /**
   * Connected integrations.
   */
  data: Array<IntegrationListResponse.Data>;
}

export namespace IntegrationListResponse {
  export interface Data {
    /**
     * Installation id to bind to a hub-backed node's `integration_id`.
     */
    id: string;
    /**
     * Canonical connector id, matching node contracts.
     */
    provider: string;
    /**
     * Human-readable account label for the connection.
     */
    label: string;
    /**
     * Connected account identity as the provider reports it, e.g. the Google account email or the WordPress site URL. This is what tells two connections of the same provider apart; `label` often repeats across them. Null when the provider reports no identity.
     */
    account: string | null;
    /**
     * Connection lifecycle status.
     */
    status: string;
    /**
     * Installation scope: shared across the org, or user-owned.
     */
    level: 'org' | 'user';
  }
}
export declare namespace Integrations {
  export {
    type IntegrationListResponse as IntegrationListResponse,
    type IntegrationListParams as IntegrationListParams,
  };
}

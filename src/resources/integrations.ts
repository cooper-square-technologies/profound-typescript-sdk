// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Integrations extends APIResource {
  /**
   * List the organization's connected integrations.
   *
   * Returns every connected integration by default, each with its lifecycle
   * `status`; pass `status_filter` to narrow to one status (e.g. `needs_reauth`).
   * Each row's `integration_id` is the value a hub-backed node needs bound to it.
   */
  list(
    query: IntegrationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IntegrationListResponse> {
    return this._client.get('/v1/integrations', { query, ...options });
  }
}

/**
 * Connected integrations visible to the caller's org/user context.
 */
export interface IntegrationListResponse {
  /**
   * Connected integrations.
   */
  data: Array<IntegrationListResponse.Data>;
}

export namespace IntegrationListResponse {
  /**
   * One connected integration installation visible to the caller.
   */
  export interface Data {
    /**
     * Installation id to bind to a hub-backed node's `integration_id`.
     */
    id: string;

    /**
     * Human-readable account label for the connection.
     */
    label: string;

    /**
     * Installation scope: shared across the org, or user-owned.
     */
    level: 'org' | 'user';

    /**
     * Canonical connector id, matching node contracts.
     */
    provider: string;

    /**
     * Connection lifecycle status.
     */
    status: string;
  }
}

export interface IntegrationListParams {
  /**
   * Organization scope for API keys that can access multiple organizations.
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

export declare namespace Integrations {
  export {
    type IntegrationListResponse as IntegrationListResponse,
    type IntegrationListParams as IntegrationListParams,
  };
}

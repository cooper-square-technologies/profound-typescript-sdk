// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import type * as Shared from './shared';

export class OpenAIAds extends APIResource {
  /**
   * Get ad account insights for the organization's OpenAI Ads partner brand.
   *
   * `aggregation_level=campaign` returns one row per campaign (with `campaign_id`
   * / `campaign_name` and all metrics), so every campaign's insights come back in
   * a single call; `time_granularity=daily` gives per-day rows (e.g. daily spend).
   *
   * @param {OpenAIAdListAccountInsightsV1OpenAIAccountInsightsGetParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OpenAIAdListAccountInsightsV1OpenAIAccountInsightsGetResponse>} Successful Response
   *
   * @example
   * ```ts
   * const listAccountInsightsV1OpenAIAccountInsightsGet =
   *   await client.openAIAds.listAccountInsightsV1OpenAIAccountInsightsGet();
   * ```
   */
  listAccountInsightsV1OpenAIAccountInsightsGet(
    query: OpenAIAdListAccountInsightsV1OpenAIAccountInsightsGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OpenAIAdListAccountInsightsV1OpenAIAccountInsightsGetResponse> {
    return this._client.get('/v1/ads/openai-ads/ad-account/insights', { query, ...options });
  }
}

export interface OpenAIAdListAccountInsightsV1OpenAIAccountInsightsGetParams {
  /**
   * Organization scope for API keys that can access multiple organizations.
   * @format uuid
   */
  organization_id?: string | null;
  /**
   * Row entity for the insights breakdown. `campaign` returns one row per campaign.
   */
  aggregation_level?: 'ad_account' | 'campaign' | 'ad_group' | 'ad' | null;
  /**
   * Time bucket for the rows; `none` or omitted returns totals over the whole range.
   */
  time_granularity?: 'hourly' | 'daily' | 'monthly' | 'none' | null;
  /**
   * Time ranges as JSON objects, e.g. `{"type": "date_range", "since": "2026-07-01", "until": "2026-07-18"}`.
   */
  'time_ranges[]'?: Array<string> | null;
  /**
   * Maximum rows to return.
   * @minimum 1
   * @maximum 2000
   */
  limit?: number | null;
  /**
   * Return items after this ID (forward pagination).
   */
  after?: string | null;
  /**
   * Return items before this ID (backward pagination).
   */
  before?: string | null;
}

export interface OpenAIAdListAccountInsightsV1OpenAIAccountInsightsGetResponse {
  /**
   * Insight rows.
   */
  data: Array<OpenAIAdListAccountInsightsV1OpenAIAccountInsightsGetResponse.Data>;
  /**
   * Total row count, when reported upstream.
   */
  count?: number | null;
  /**
   * ID of the first item; pass as `before` to page back.
   */
  first_id?: string | null;
  /**
   * ID of the last item; pass as `after` to page forward.
   */
  last_id?: string | null;
  /**
   * Whether more items are available.
   * @default false
   */
  has_more?: boolean;
}

export namespace OpenAIAdListAccountInsightsV1OpenAIAccountInsightsGetResponse {
  export interface Data {
    /**
     * Row ID.
     */
    id: string;
    /**
     * Bucket start (unix seconds).
     */
    start_time?: number | null;
    /**
     * Bucket end (unix seconds).
     */
    end_time?: number | null;
    /**
     * Human-readable time bucket.
     */
    readable_time?: string | null;
    /**
     * Timezone of the time bucket.
     */
    timezone?: string | null;
    /**
     * Campaign ID for campaign-level rows.
     */
    campaign_id?: string | null;
    /**
     * Campaign name for campaign-level rows.
     */
    campaign_name?: string | null;
    /**
     * Ad group ID for ad_group-level rows.
     */
    ad_group_id?: string | null;
    /**
     * Ad group name for ad_group-level rows.
     */
    ad_group_name?: string | null;
    /**
     * Ad ID for ad-level rows.
     */
    ad_id?: string | null;
    /**
     * Ad name for ad-level rows.
     */
    ad_name?: string | null;
    /**
     * Impressions.
     */
    impressions?: number | null;
    /**
     * Clicks.
     */
    clicks?: number | null;
    /**
     * Spend in the ad account's currency units.
     */
    spend?: number | null;
    /**
     * Click-through rate.
     */
    ctr?: number | null;
    /**
     * Cost per click.
     */
    cpc?: number | null;
    /**
     * Cost per thousand impressions.
     */
    cpm?: number | null;
  }
}
export declare namespace OpenAIAds {
  export {
    type OpenAIAdListAccountInsightsV1OpenAIAccountInsightsGetResponse as OpenAIAdListAccountInsightsV1OpenAIAccountInsightsGetResponse,
    type OpenAIAdListAccountInsightsV1OpenAIAccountInsightsGetParams as OpenAIAdListAccountInsightsV1OpenAIAccountInsightsGetParams,
  };
}

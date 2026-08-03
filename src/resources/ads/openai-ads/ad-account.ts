// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class AdAccount extends APIResource {
  /**
   * Get ad account insights for the organization's OpenAI Ads partner brand.
   *
   * `aggregation_level=campaign` returns one row per campaign (with `campaign_id` /
   * `campaign_name` and all metrics), so every campaign's insights come back in a
   * single call; `time_granularity=daily` gives per-day rows (e.g. daily spend).
   */
  retrieveInsights(
    query: AdAccountRetrieveInsightsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AdAccountRetrieveInsightsResponse> {
    return this._client.get('/v1/ads/openai-ads/ad-account/insights', { query, ...options });
  }
}

/**
 * Cursor-paginated insights, mirroring the OpenAI Ads insights envelope.
 */
export interface AdAccountRetrieveInsightsResponse {
  /**
   * Insight rows.
   */
  data: Array<AdAccountRetrieveInsightsResponse.Data>;

  /**
   * Total row count, when reported upstream.
   */
  count?: number | null;

  /**
   * ID of the first item; pass as `before` to page back.
   */
  first_id?: string | null;

  /**
   * Whether more items are available.
   */
  has_more?: boolean;

  /**
   * ID of the last item; pass as `after` to page forward.
   */
  last_id?: string | null;
}

export namespace AdAccountRetrieveInsightsResponse {
  /**
   * One insights row; the entity it describes follows `aggregation_level`.
   *
   * Time bounds are present when a `time_granularity` is requested (one row per time
   * bucket); the entity id/name fields (`campaign_*`, `ad_group_*`, `ad_*`) are
   * present when rows are broken down by that entity.
   */
  export interface Data {
    /**
     * Row ID.
     */
    id: string;

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
     * Campaign ID for campaign-level rows.
     */
    campaign_id?: string | null;

    /**
     * Campaign name for campaign-level rows.
     */
    campaign_name?: string | null;

    /**
     * Clicks.
     */
    clicks?: number | null;

    /**
     * Cost per click.
     */
    cpc?: number | null;

    /**
     * Cost per thousand impressions.
     */
    cpm?: number | null;

    /**
     * Click-through rate.
     */
    ctr?: number | null;

    /**
     * Bucket end (unix seconds).
     */
    end_time?: number | null;

    /**
     * Impressions.
     */
    impressions?: number | null;

    /**
     * Human-readable time bucket.
     */
    readable_time?: string | null;

    /**
     * Spend in the ad account's currency units.
     */
    spend?: number | null;

    /**
     * Bucket start (unix seconds).
     */
    start_time?: number | null;

    /**
     * Timezone of the time bucket.
     */
    timezone?: string | null;
  }
}

export interface AdAccountRetrieveInsightsParams {
  /**
   * Return items after this ID (forward pagination).
   */
  after?: string | null;

  /**
   * Row entity for the insights breakdown. `campaign` returns one row per campaign.
   */
  aggregation_level?: 'ad_account' | 'campaign' | 'ad_group' | 'ad' | null;

  /**
   * Return items before this ID (backward pagination).
   */
  before?: string | null;

  /**
   * Maximum rows to return.
   */
  limit?: number | null;

  /**
   * Organization scope for API keys that can access multiple organizations.
   */
  organization_id?: string | null;

  /**
   * Time bucket for the rows; `none` or omitted returns totals over the whole range.
   */
  time_granularity?: 'hourly' | 'daily' | 'monthly' | 'none' | null;

  /**
   * Time ranges as JSON objects, e.g.
   * `{"type": "date_range", "since": "2026-07-01", "until": "2026-07-18"}`.
   */
  time_ranges?: Array<string> | null;
}

export declare namespace AdAccount {
  export {
    type AdAccountRetrieveInsightsResponse as AdAccountRetrieveInsightsResponse,
    type AdAccountRetrieveInsightsParams as AdAccountRetrieveInsightsParams,
  };
}

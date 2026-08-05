// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Youtube extends APIResource {
  /**
   * Rank the YouTube channels cited in a category, or the video categories they
   * publish in.
   *
   * @example
   * ```ts
   * const response =
   *   await client.reports.social.youtube.getChannels({
   *     category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     end_date: 'end_date',
   *     start_date: 'start_date',
   *   });
   * ```
   */
  getChannels(
    body: YoutubeGetChannelsParams,
    options?: RequestOptions,
  ): APIPromise<YoutubeGetChannelsResponse> {
    return this._client.post('/v2/reports/social/youtube/channels', { body, ...options });
  }

  /**
   * Report how much of youtube.com the channel and video rankings account for.
   *
   * @example
   * ```ts
   * const response =
   *   await client.reports.social.youtube.getSummary({
   *     category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     end_date: 'end_date',
   *     start_date: 'start_date',
   *   });
   * ```
   */
  getSummary(body: YoutubeGetSummaryParams, options?: RequestOptions): APIPromise<YoutubeGetSummaryResponse> {
    return this._client.post('/v2/reports/social/youtube/summary', { body, ...options });
  }

  /**
   * Rank cited YouTube videos, for one channel or across all of them.
   *
   * @example
   * ```ts
   * const response =
   *   await client.reports.social.youtube.getVideos({
   *     category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     end_date: 'end_date',
   *     start_date: 'start_date',
   *   });
   * ```
   */
  getVideos(body: YoutubeGetVideosParams, options?: RequestOptions): APIPromise<YoutubeGetVideosResponse> {
    return this._client.post('/v2/reports/social/youtube/videos', { body, ...options });
  }
}

export interface YoutubeGetChannelsResponse {
  data: Array<{ [key: string]: unknown }>;

  info: { [key: string]: unknown };
}

export interface YoutubeGetSummaryResponse {
  /**
   * How much of youtube.com the rollups can speak for.
   */
  data: YoutubeGetSummaryResponse.Data;

  info: { [key: string]: unknown };
}

export namespace YoutubeGetSummaryResponse {
  /**
   * How much of youtube.com the rollups can speak for.
   */
  export interface Data {
    /**
     * Citations that resolve to a channel; the ranking denominator.
     */
    attributed_citations?: number;

    /**
     * Citations pointing at a channel page rather than a video.
     */
    citations_channel?: number;

    /**
     * Search, feed, and homepage URLs. Never attributable.
     */
    citations_other?: number;

    /**
     * Citations pointing at a playlist.
     */
    citations_playlist?: number;

    /**
     * Citations pointing at Shorts.
     */
    citations_short?: number;

    /**
     * Citations pointing at long-form videos.
     */
    citations_video?: number;

    /**
     * Distinct channels cited.
     */
    distinct_channels?: number;

    /**
     * Distinct Shorts cited.
     */
    distinct_shorts?: number;

    /**
     * Distinct long-form videos cited.
     */
    distinct_videos?: number;

    /**
     * Every YouTube citation in the window.
     */
    total_youtube_citations?: number;

    /**
     * Citations with no channel: search and feed URLs, deleted sources, or not yet
     * resolved.
     */
    unattributed_citations?: number;
  }
}

export interface YoutubeGetVideosResponse {
  data: Array<YoutubeGetVideosResponse.Data>;

  info: { [key: string]: unknown };
}

export namespace YoutubeGetVideosResponse {
  export interface Data {
    /**
     * Share of attributed YouTube citations in the window.
     */
    citation_share: number;

    /**
     * Citations attributed to this video.
     */
    count: number;

    /**
     * 1-based position in the full ranked set, continuing across pages.
     */
    rank: number;

    /**
     * YouTube source type: `video`, `short`, `channel`, `playlist` or `other`.
     */
    source_type: 'video' | 'short' | 'channel' | 'playlist' | 'other';

    /**
     * YouTube video id, as in the watch URL.
     */
    video_id: string;

    /**
     * Handle of the publishing channel; select it with a `channel` filter of `in`.
     */
    channel_handle?: string | null;

    /**
     * Publishing channel title, or null when unknown.
     */
    channel_title?: string | null;

    /**
     * Openable URL for the publishing channel.
     */
    channel_url?: string | null;

    /**
     * Length, or null when unknown.
     */
    duration_seconds?: number | null;

    /**
     * Upload date, or null when unknown.
     */
    published_at?: string | null;

    /**
     * Resolved title, or null when unavailable.
     */
    title?: string | null;

    /**
     * Openable video URL.
     */
    url?: string | null;

    /**
     * YouTube content category, or null when unknown.
     */
    video_category?: string | null;

    [k: string]: unknown;
  }
}

export interface YoutubeGetChannelsParams {
  category_id: string;

  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;

  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;

  cursor?: string | null;

  /**
   * A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.
   */
  filter?: YoutubeGetChannelsParams.Filter | null;

  /**
   * What each row represents. Empty or `["channel"]` ranks channels;
   * `["video_category"]` ranks content categories; `["source_type"]` ranks source
   * types; `["channel", "video_category"]`, `["channel", "source_type"]` and
   * `["channel", "model"]` return cross-tabs — a row per channel per category, or
   * per answer engine. `limit` counts channels in every case, so ten channels across
   * nine engines is ten channels and ninety rows.
   */
  group_by?: Array<'channel' | 'video_category' | 'model' | 'source_type'>;

  /**
   * Return a time series instead of window totals: one row per entity per period,
   * each carrying `date`. `citation_share` is then relative to that period, so the
   * series is comparable across periods. Omit for window totals.
   */
  interval?: 'day' | 'week' | 'month' | null;

  /**
   * Page size; default 10, max 50.
   */
  limit?: number | null;

  /**
   * Limit results to YouTube source types: `video`, `short`, `channel`, `playlist`,
   * or `other`. Omit to include every source type.
   */
  source_types?: Array<'video' | 'short' | 'channel' | 'playlist' | 'other'> | null;
}

export namespace YoutubeGetChannelsParams {
  /**
   * A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.
   */
  export interface Filter {
    and?: Array<unknown> | null;

    field?: string | null;

    not?: unknown;

    op?: string | null;

    or?: Array<unknown> | null;

    value?: unknown;
  }
}

export interface YoutubeGetSummaryParams {
  category_id: string;

  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;

  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;

  /**
   * A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.
   */
  filter?: YoutubeGetSummaryParams.Filter | null;
}

export namespace YoutubeGetSummaryParams {
  /**
   * A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.
   */
  export interface Filter {
    and?: Array<unknown> | null;

    field?: string | null;

    not?: unknown;

    op?: string | null;

    or?: Array<unknown> | null;

    value?: unknown;
  }
}

export interface YoutubeGetVideosParams {
  category_id: string;

  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;

  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;

  /**
   * Choose attributed citations, unattributed citations, or all citations. An
   * unattributed row has no channel: `source_type` is `other` for a search or feed
   * URL that names no source, and any other type is a source we have no channel for.
   */
  attribution?: 'attributed' | 'unattributed' | 'all';

  cursor?: string | null;

  /**
   * A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.
   */
  filter?: YoutubeGetVideosParams.Filter | null;

  /**
   * Page size; default 10, max 50.
   */
  limit?: number | null;

  /**
   * Limit results to YouTube source types: `video`, `short`, `channel`, `playlist`,
   * or `other`. Omit to include every source type.
   */
  source_types?: Array<'video' | 'short' | 'channel' | 'playlist' | 'other'> | null;
}

export namespace YoutubeGetVideosParams {
  /**
   * A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.
   */
  export interface Filter {
    and?: Array<unknown> | null;

    field?: string | null;

    not?: unknown;

    op?: string | null;

    or?: Array<unknown> | null;

    value?: unknown;
  }
}

export declare namespace Youtube {
  export {
    type YoutubeGetChannelsResponse as YoutubeGetChannelsResponse,
    type YoutubeGetSummaryResponse as YoutubeGetSummaryResponse,
    type YoutubeGetVideosResponse as YoutubeGetVideosResponse,
    type YoutubeGetChannelsParams as YoutubeGetChannelsParams,
    type YoutubeGetSummaryParams as YoutubeGetSummaryParams,
    type YoutubeGetVideosParams as YoutubeGetVideosParams,
  };
}

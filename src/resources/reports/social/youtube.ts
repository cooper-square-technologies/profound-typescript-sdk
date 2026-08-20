// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import type { RequestOptions } from '../../../internal/request-options';
import type * as Shared from '../../shared';

export class Youtube extends APIResource {
  /**
   * Rank the YouTube channels cited in a category, or the video categories they publish in.
   *
   * @param {YoutubeGetChannelsParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<YoutubeGetChannelsResponse>} Successful Response
   *
   * @example
   * ```ts
   * const getChannels = await client.reports.social.youtube.getChannels({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '',
   *   end_date: '',
   * });
   * ```
   */
  getChannels(
    body: YoutubeGetChannelsParams,
    options?: RequestOptions,
  ): APIPromise<YoutubeGetChannelsResponse> {
    return this._client.post('/v2/reports/social/youtube/channels', { body, ...options });
  }

  /**
   * Rank cited YouTube videos, for one channel or across all of them.
   *
   * @param {YoutubeGetVideosParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<YoutubeGetVideosResponse>} Successful Response
   *
   * @example
   * ```ts
   * const getVideos = await client.reports.social.youtube.getVideos({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '',
   *   end_date: '',
   *   attribution: 'attributed',
   * });
   * ```
   */
  getVideos(body: YoutubeGetVideosParams, options?: RequestOptions): APIPromise<YoutubeGetVideosResponse> {
    return this._client.post('/v2/reports/social/youtube/videos', { body, ...options });
  }

  /**
   * Report how much of youtube.com the channel and video rankings account for.
   *
   * @param {YoutubeGetSummaryParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<YoutubeGetSummaryResponse>} Successful Response
   *
   * @example
   * ```ts
   * const getSummary = await client.reports.social.youtube.getSummary({
   *   category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   start_date: '',
   *   end_date: '',
   * });
   * ```
   */
  getSummary(body: YoutubeGetSummaryParams, options?: RequestOptions): APIPromise<YoutubeGetSummaryResponse> {
    return this._client.post('/v2/reports/social/youtube/summary', { body, ...options });
  }
}

export interface YoutubeGetChannelsParams {
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;
  /**
   * Advanced filter tree. Prompt-level dimensions are `model`, `topic`, `region`, `prompt`, `persona`, `tag`, `analysis_type`. `channel` covers both channel cases: `in` with a list of handles selects exactly those channels, resolving each handle to its channel so a renamed channel is never returned in pieces; `contains` matches a channel's title or handle by name. Combine with `and`/`or`/`not` up to 3 deep. An exact `channel` selection must be its own `and` clause, and a `channel` leaf cannot share an `or` or `not` with a prompt-level leaf, because those compile at different stages of the query. `domain` and `page` are rejected rather than approximated: every row here is one domain, and `page` is not a video id.
   */
  filter?: Shared.FilterNode | null;
  /**
   * Page size; default 10, max 50.
   * @maximum 50
   */
  limit?: number | null;
  cursor?: string | null;
  /**
   * Limit results to YouTube source types: `video`, `short`, `channel`, `playlist`, or `other`. Omit to include `video`, `short`, `channel`, and `playlist`; `other` is excluded because those citations have no channel. Requests containing `other` are rejected.
   */
  source_types?: Array<'video' | 'short' | 'channel' | 'playlist' | 'other'> | null;
  /**
   * What each row represents. Empty or `["channel"]` ranks channels; `["video_category"]` ranks content categories; `["source_type"]` ranks source types; `["channel", "video_category"]`, `["channel", "source_type"]` and `["channel", "model"]` return cross-tabs — a row per channel per category, or per answer engine. `limit` counts leading channels in every case, so ten channels across nine engines is ten channels and ninety rows.
   */
  group_by?: Array<'channel' | 'video_category' | 'model' | 'source_type'>;
  /**
   * Return a time series instead of window totals: one row per entity per period, each carrying `date`. `citation_share` is then relative to that period, so the series is comparable across periods. Omit for window totals.
   */
  interval?: 'day' | 'week' | 'month' | null;
}

export interface YoutubeGetChannelsResponse {
  /**
   * Channel report metadata, including effective paging and grouping settings.
   */
  info: YoutubeGetChannelsResponse.Info;
  data: Array<YoutubeGetChannelsResponse.Data>;
}

export namespace YoutubeGetChannelsResponse {
  export interface Info {
    /**
     * Distinct leading channels matching the window; this can differ from the number of rows returned.
     */
    total_results: number;
    /**
     * Number of rows returned in `data` for this page.
     */
    count: number;
    /**
     * Display names of the models the report covers.
     */
    models: Array<string>;
    /**
     * Echoed request start date (YYYY-MM-DD, ET).
     */
    start_date: string;
    /**
     * Echoed request end date (YYYY-MM-DD, ET).
     */
    end_date: string;
    /**
     * Echoed category id this report covers.
     * @format uuid
     */
    category_id: string;
    /**
     * Source types this report covers. Derived from the request, not returned rows, so a listed type may have no rows.
     */
    source_types: Array<'video' | 'short' | 'channel' | 'playlist' | 'other'>;
    /**
     * Effective page size in leading channels, not returned rows.
     */
    limit: number;
    /**
     * Echoed dimensions that define a row. Channel reports echo `["channel"]` when group_by is omitted.
     */
    group_by: Array<string>;
    /**
     * Opaque cursor for the next page; null on the last page.
     */
    next_cursor?: string | null;
    /**
     * Echoed normalized filter tree, or null when no filter was sent.
     */
    filter?: Record<string, unknown> | null;
    /**
     * Echoed request cursor; omitted on the first page.
     */
    cursor?: string | null;
    /**
     * Effective channel time-series interval, or null when the channel report covers the full window.
     */
    interval?: 'day' | 'week' | 'month' | null;
    [k: string]: unknown;
  }

  export interface Data {
    /**
     * Channel title when grouped by channel, or the handle when no title resolved; category name when grouped by `["video_category"]`; source type when grouped by `["source_type"]`.
     */
    name: string;
    /**
     * Leading channel's 1-based position in the full ranked set, continuing across pages; repeated across that channel's cross-tab rows rather than numbering rows.
     */
    rank: number;
    /**
     * Citations attributed to this row.
     */
    count: number;
    /**
     * Distinct videos of this channel that were cited.
     */
    videos: number;
    /**
     * Share of every YouTube citation in the window (attributed and unattributed alike), or the period when `interval` is set, regardless of `source_types`. An unnarrowed complete ranking sums to slightly less than 1 because unattributed citations cannot appear in channel rows; a narrowed ranking sums to its slice's share.
     */
    citation_share: number;
    /**
     * Channel handle without the `@`, and the identifier this API exposes. Pass it to /videos as `channel_handle`. Null for the rare channel whose handle did not resolve.
     */
    handle?: string | null;
    /**
     * Openable channel URL. Null for video-category rows.
     */
    url?: string | null;
    /**
     * Period start. Present when `interval` is set.
     */
    date?: string | null;
    /**
     * Populated for a secondary video-category slice; with group_by `["video_category"]`, the category is returned in `name` instead. An unresolved category is returned as an empty string.
     */
    video_category?: string | null;
    /**
     * Answer engine as an object `{id, name}`, present when grouped by model. The name matches `info.models`; the id is the model id the other reports accept.
     */
    model?: Shared.DimensionRef | null;
    /**
     * YouTube source type, present when grouped by source type, including as the second dimension of a cross-tab.
     */
    source_type?: 'video' | 'short' | 'channel' | 'playlist' | 'other' | null;
    [k: string]: unknown;
  }
}

export interface YoutubeGetVideosParams {
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;
  /**
   * Advanced filter tree. Prompt-level dimensions are `model`, `topic`, `region`, `prompt`, `persona`, `tag`, `analysis_type`. `channel` covers both channel cases: `in` with a list of handles selects exactly those channels, resolving each handle to its channel so a renamed channel is never returned in pieces; `contains` matches a channel's title or handle by name. Combine with `and`/`or`/`not` up to 3 deep. An exact `channel` selection must be its own `and` clause, and a `channel` leaf cannot share an `or` or `not` with a prompt-level leaf, because those compile at different stages of the query. `domain` and `page` are rejected rather than approximated: every row here is one domain, and `page` is not a video id.
   */
  filter?: Shared.FilterNode | null;
  /**
   * Page size; default 10, max 50.
   * @maximum 50
   */
  limit?: number | null;
  cursor?: string | null;
  /**
   * Limit results to YouTube source types: `video`, `short`, `channel`, `playlist`, or `other`. Omit to include `video` and `short` with the default `attribution='attributed'`; `unattributed` and `all` widen the default to all five source types. Requests containing `other` with `attribution='attributed'` are rejected.
   */
  source_types?: Array<'video' | 'short' | 'channel' | 'playlist' | 'other'> | null;
  /**
   * Choose attributed citations, unattributed citations, or all citations. An unattributed row has no channel: `source_type` is `other` for a search or feed URL that names no source, and any other type is a source we have no channel for.
   * @default attributed
   */
  attribution?: 'attributed' | 'unattributed' | 'all';
}

export interface YoutubeGetVideosResponse {
  /**
   * Video report metadata, including effective paging and attribution settings.
   */
  info: YoutubeGetVideosResponse.Info;
  data: Array<YoutubeGetVideosResponse.Data>;
}

export namespace YoutubeGetVideosResponse {
  export interface Info {
    /**
     * Number of rows returned in `data` for this page.
     */
    count: number;
    /**
     * Display names of the models the report covers.
     */
    models: Array<string>;
    /**
     * Echoed request start date (YYYY-MM-DD, ET).
     */
    start_date: string;
    /**
     * Echoed request end date (YYYY-MM-DD, ET).
     */
    end_date: string;
    /**
     * Echoed category id this report covers.
     * @format uuid
     */
    category_id: string;
    /**
     * Source types this report covers. Derived from the request, not returned rows, so a listed type may have no rows.
     */
    source_types: Array<'video' | 'short' | 'channel' | 'playlist' | 'other'>;
    /**
     * Effective page size applied to this paged report.
     */
    limit: number;
    /**
     * Effective video attribution mode.
     */
    attribution: 'attributed' | 'unattributed' | 'all';
    /**
     * Total rows matching the query before pagination (null when not computed).
     */
    total_results?: number | null;
    /**
     * Opaque cursor for the next page; null on the last page.
     */
    next_cursor?: string | null;
    /**
     * Echoed normalized filter tree, or null when no filter was sent.
     */
    filter?: Record<string, unknown> | null;
    /**
     * Echoed request cursor; omitted on the first page.
     */
    cursor?: string | null;
    [k: string]: unknown;
  }

  export interface Data {
    /**
     * YouTube video id, as in the watch URL.
     */
    video_id: string;
    /**
     * YouTube source type: `video`, `short`, `channel`, `playlist` or `other`.
     */
    source_type: 'video' | 'short' | 'channel' | 'playlist' | 'other';
    /**
     * 1-based position in the full ranked set, continuing across pages.
     */
    rank: number;
    /**
     * Citations attributed to this video.
     */
    count: number;
    /**
     * Share of every YouTube citation in the window (attributed and unattributed alike), regardless of `source_types`. Shares sum to at most 1, reaching about 1 only with `attribution="all"` and no `source_types` filter; a narrowed ranking sums to its slice's share.
     */
    citation_share: number;
    /**
     * Resolved title, or null when unavailable.
     */
    title?: string | null;
    /**
     * Publishing channel title, or null when unknown.
     */
    channel_title?: string | null;
    /**
     * Handle of the publishing channel; select it with a `channel` filter of `in`. Null when unknown.
     */
    channel_handle?: string | null;
    /**
     * Openable video URL, or null when unavailable.
     */
    url?: string | null;
    /**
     * Openable URL for the publishing channel, or null when unknown.
     */
    channel_url?: string | null;
    /**
     * Upload date, or null when unknown.
     */
    published_at?: string | null;
    /**
     * Length in seconds, or null when unknown.
     */
    duration_seconds?: number | null;
    /**
     * YouTube content category, or null when unknown.
     */
    video_category?: string | null;
    [k: string]: unknown;
  }
}

export interface YoutubeGetSummaryParams {
  /**
   * @format uuid
   */
  category_id: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  start_date: string;
  /**
   * YYYY-MM-DD, ET, inclusive
   */
  end_date: string;
  /**
   * Advanced filter tree. Prompt-level dimensions are `model`, `topic`, `region`, `prompt`, `persona`, `tag`, `analysis_type`. `channel` covers both channel cases: `in` with a list of handles selects exactly those channels, resolving each handle to its channel so a renamed channel is never returned in pieces; `contains` matches a channel's title or handle by name. Combine with `and`/`or`/`not` up to 3 deep. An exact `channel` selection must be its own `and` clause, and a `channel` leaf cannot share an `or` or `not` with a prompt-level leaf, because those compile at different stages of the query. `domain` and `page` are rejected rather than approximated: every row here is one domain, and `page` is not a video id.
   */
  filter?: Shared.FilterNode | null;
}

export interface YoutubeGetSummaryResponse {
  /**
   * Summary report metadata.
   */
  info: YoutubeGetSummaryResponse.Info;
  /**
   * How much of youtube.com the rollups can speak for.
   */
  data: YoutubeGetSummaryResponse.Data;
}

export namespace YoutubeGetSummaryResponse {
  export interface Info {
    /**
     * Number of rows returned in `data` for this page.
     */
    count: number;
    /**
     * Display names of the models the report covers.
     */
    models: Array<string>;
    /**
     * Echoed request start date (YYYY-MM-DD, ET).
     */
    start_date: string;
    /**
     * Echoed request end date (YYYY-MM-DD, ET).
     */
    end_date: string;
    /**
     * Echoed category id this report covers.
     * @format uuid
     */
    category_id: string;
    /**
     * All five YouTube source types; this endpoint has no source_types request field and cannot be narrowed.
     */
    source_types: Array<'video' | 'short' | 'channel' | 'playlist' | 'other'>;
    /**
     * Total rows matching the query before pagination (null when not computed).
     */
    total_results?: number | null;
    /**
     * Opaque cursor for the next page; null on the last page.
     */
    next_cursor?: string | null;
    /**
     * Echoed normalized filter tree, or null when no filter was sent.
     */
    filter?: Record<string, unknown> | null;
    [k: string]: unknown;
  }

  export interface Data {
    /**
     * Every YouTube citation in the window.
     * @default 0
     */
    total_youtube_citations?: number;
    /**
     * Citations that resolve to a channel, so can appear in the channel and video rankings. NOT the citation_share divisor — that is total_youtube_citations, so a complete channel ranking's shares sum to slightly less than 1.
     * @default 0
     */
    attributed_citations?: number;
    /**
     * Citations with no channel: search and feed URLs, deleted sources, or not yet resolved.
     * @default 0
     */
    unattributed_citations?: number;
    /**
     * Citations pointing at long-form videos.
     * @default 0
     */
    citations_video?: number;
    /**
     * Citations pointing at Shorts.
     * @default 0
     */
    citations_short?: number;
    /**
     * Citations pointing at a channel page rather than a video.
     * @default 0
     */
    citations_channel?: number;
    /**
     * Citations pointing at a playlist.
     * @default 0
     */
    citations_playlist?: number;
    /**
     * Search, feed, and homepage URLs. Never attributable.
     * @default 0
     */
    citations_other?: number;
    /**
     * Distinct channels cited.
     * @default 0
     */
    distinct_channels?: number;
    /**
     * Distinct long-form videos cited.
     * @default 0
     */
    distinct_videos?: number;
    /**
     * Distinct Shorts cited.
     * @default 0
     */
    distinct_shorts?: number;
  }
}
export declare namespace Youtube {
  export {
    type YoutubeGetChannelsResponse as YoutubeGetChannelsResponse,
    type YoutubeGetVideosResponse as YoutubeGetVideosResponse,
    type YoutubeGetSummaryResponse as YoutubeGetSummaryResponse,
    type YoutubeGetChannelsParams as YoutubeGetChannelsParams,
    type YoutubeGetVideosParams as YoutubeGetVideosParams,
    type YoutubeGetSummaryParams as YoutubeGetSummaryParams,
  };
}

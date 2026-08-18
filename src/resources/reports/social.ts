// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import type * as Shared from '../shared';

export class Social extends APIResource {
  /**
   * Rank the YouTube channels cited in a category, or the video categories they publish in.
   *
   * @param {SocialQueryYoutubeChannelsV2YoutubeChannelsPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SocialQueryYoutubeChannelsV2YoutubeChannelsPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const queryYoutubeChannelsV2YoutubeChannelsPost =
   *   await client.reports.social.queryYoutubeChannelsV2YoutubeChannelsPost({
   *     category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *     start_date: '',
   *     end_date: '',
   *   });
   * ```
   */
  queryYoutubeChannelsV2YoutubeChannelsPost(
    body: SocialQueryYoutubeChannelsV2YoutubeChannelsPostParams,
    options?: RequestOptions,
  ): APIPromise<SocialQueryYoutubeChannelsV2YoutubeChannelsPostResponse> {
    return this._client.post('/v2/reports/social/youtube/channels', { body, ...options });
  }

  /**
   * Rank cited YouTube videos, for one channel or across all of them.
   *
   * @param {SocialQueryYoutubeVideosV2YoutubeVideosPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SocialQueryYoutubeVideosV2YoutubeVideosPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const queryYoutubeVideosV2YoutubeVideosPost =
   *   await client.reports.social.queryYoutubeVideosV2YoutubeVideosPost({
   *     category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *     start_date: '',
   *     end_date: '',
   *     attribution: 'attributed',
   *   });
   * ```
   */
  queryYoutubeVideosV2YoutubeVideosPost(
    body: SocialQueryYoutubeVideosV2YoutubeVideosPostParams,
    options?: RequestOptions,
  ): APIPromise<SocialQueryYoutubeVideosV2YoutubeVideosPostResponse> {
    return this._client.post('/v2/reports/social/youtube/videos', { body, ...options });
  }

  /**
   * Report how much of youtube.com the channel and video rankings account for.
   *
   * @param {SocialQueryYoutubeSummaryV2YoutubeSummaryPostParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SocialQueryYoutubeSummaryV2YoutubeSummaryPostResponse>} Successful Response
   *
   * @example
   * ```ts
   * const queryYoutubeSummaryV2YoutubeSummaryPost =
   *   await client.reports.social.queryYoutubeSummaryV2YoutubeSummaryPost({
   *     category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *     start_date: '',
   *     end_date: '',
   *   });
   * ```
   */
  queryYoutubeSummaryV2YoutubeSummaryPost(
    body: SocialQueryYoutubeSummaryV2YoutubeSummaryPostParams,
    options?: RequestOptions,
  ): APIPromise<SocialQueryYoutubeSummaryV2YoutubeSummaryPostResponse> {
    return this._client.post('/v2/reports/social/youtube/summary', { body, ...options });
  }
}

/**
 * Channel and category rollups.
 */
export interface YoutubeChannelsQuery {
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

/**
 * Cited videos, optionally narrowed to specific channels.
 */
export interface YoutubeVideosQuery {
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

/**
 * One object describing the window.
 */
export interface YoutubeSummaryQuery {
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

export interface SocialQueryYoutubeChannelsV2YoutubeChannelsPostParams {
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

export interface SocialQueryYoutubeChannelsV2YoutubeChannelsPostResponse {
  /**
   * Channel report metadata, including effective paging and grouping settings.
   */
  info: SocialQueryYoutubeChannelsV2YoutubeChannelsPostResponse.Info;
  data: Array<SocialQueryYoutubeChannelsV2YoutubeChannelsPostResponse.Data>;
}

export namespace SocialQueryYoutubeChannelsV2YoutubeChannelsPostResponse {
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

export interface SocialQueryYoutubeVideosV2YoutubeVideosPostParams {
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

export interface SocialQueryYoutubeVideosV2YoutubeVideosPostResponse {
  /**
   * Video report metadata, including effective paging and attribution settings.
   */
  info: SocialQueryYoutubeVideosV2YoutubeVideosPostResponse.Info;
  data: Array<SocialQueryYoutubeVideosV2YoutubeVideosPostResponse.Data>;
}

export namespace SocialQueryYoutubeVideosV2YoutubeVideosPostResponse {
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

export interface SocialQueryYoutubeSummaryV2YoutubeSummaryPostParams {
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

export interface SocialQueryYoutubeSummaryV2YoutubeSummaryPostResponse {
  /**
   * Summary report metadata.
   */
  info: SocialQueryYoutubeSummaryV2YoutubeSummaryPostResponse.Info;
  /**
   * How much of youtube.com the rollups can speak for.
   */
  data: SocialQueryYoutubeSummaryV2YoutubeSummaryPostResponse.Data;
}

export namespace SocialQueryYoutubeSummaryV2YoutubeSummaryPostResponse {
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
export declare namespace Social {
  export {
    type YoutubeChannelsQuery as YoutubeChannelsQuery,
    type YoutubeVideosQuery as YoutubeVideosQuery,
    type YoutubeSummaryQuery as YoutubeSummaryQuery,
    type SocialQueryYoutubeChannelsV2YoutubeChannelsPostResponse as SocialQueryYoutubeChannelsV2YoutubeChannelsPostResponse,
    type SocialQueryYoutubeVideosV2YoutubeVideosPostResponse as SocialQueryYoutubeVideosV2YoutubeVideosPostResponse,
    type SocialQueryYoutubeSummaryV2YoutubeSummaryPostResponse as SocialQueryYoutubeSummaryV2YoutubeSummaryPostResponse,
    type SocialQueryYoutubeChannelsV2YoutubeChannelsPostParams as SocialQueryYoutubeChannelsV2YoutubeChannelsPostParams,
    type SocialQueryYoutubeVideosV2YoutubeVideosPostParams as SocialQueryYoutubeVideosV2YoutubeVideosPostParams,
    type SocialQueryYoutubeSummaryV2YoutubeSummaryPostParams as SocialQueryYoutubeSummaryV2YoutubeSummaryPostParams,
  };
}

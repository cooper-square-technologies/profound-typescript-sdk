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
  data: Array<YoutubeGetChannelsResponse.Data>;

  /**
   * Channel report metadata, including effective paging and grouping settings.
   */
  info: YoutubeGetChannelsResponse.Info;
}

export namespace YoutubeGetChannelsResponse {
  /**
   * One channel (or video category) row, optionally sliced.
   */
  export interface Data {
    /**
     * Share of every YouTube citation in the window (attributed and unattributed
     * alike), or the period when `interval` is set, regardless of `source_types`. An
     * unnarrowed complete ranking sums to slightly less than 1 because unattributed
     * citations cannot appear in channel rows; a narrowed ranking sums to its slice's
     * share.
     */
    citation_share: number;

    /**
     * Citations attributed to this row.
     */
    count: number;

    /**
     * Channel title when grouped by channel, or the handle when no title resolved;
     * category name when grouped by `["video_category"]`; source type when grouped by
     * `["source_type"]`.
     */
    name: string;

    /**
     * Leading channel's 1-based position in the full ranked set, continuing across
     * pages; repeated across that channel's cross-tab rows rather than numbering rows.
     */
    rank: number;

    /**
     * Distinct videos of this channel that were cited.
     */
    videos: number;

    /**
     * Period start. Present when `interval` is set.
     */
    date?: string | null;

    /**
     * Channel handle without the `@`, and the identifier this API exposes. Pass it to
     * /videos as `channel_handle`. Null for the rare channel whose handle did not
     * resolve.
     */
    handle?: string | null;

    /**
     * An `{id, name}` reference for a grouped dimension value.
     */
    model?: Data.Model | null;

    /**
     * YouTube source type, present when grouped by source type, including as the
     * second dimension of a cross-tab.
     */
    source_type?: 'video' | 'short' | 'channel' | 'playlist' | 'other' | null;

    /**
     * Openable channel URL. Null for video-category rows.
     */
    url?: string | null;

    /**
     * Populated for a secondary video-category slice; with group_by
     * `["video_category"]`, the category is returned in `name` instead. An unresolved
     * category is returned as an empty string.
     */
    video_category?: string | null;

    [k: string]: unknown;
  }

  export namespace Data {
    /**
     * An `{id, name}` reference for a grouped dimension value.
     */
    export interface Model {
      id?: string | null;

      name?: string | null;
    }
  }

  /**
   * Channel report metadata, including effective paging and grouping settings.
   */
  export interface Info {
    /**
     * Echoed category id this report covers.
     */
    category_id: string;

    /**
     * Number of rows returned in `data` for this page.
     */
    count: number;

    /**
     * Echoed request end date (YYYY-MM-DD, ET).
     */
    end_date: string;

    /**
     * Echoed dimensions that define a row. Channel reports echo `["channel"]` when
     * group_by is omitted.
     */
    group_by: Array<string>;

    /**
     * Effective page size in leading channels, not returned rows.
     */
    limit: number;

    /**
     * Display names of the models the report covers.
     */
    models: Array<string>;

    /**
     * Source types this report covers. Derived from the request, not returned rows, so
     * a listed type may have no rows.
     */
    source_types: Array<'video' | 'short' | 'channel' | 'playlist' | 'other'>;

    /**
     * Echoed request start date (YYYY-MM-DD, ET).
     */
    start_date: string;

    /**
     * Distinct leading channels matching the window; this can differ from the number
     * of rows returned.
     */
    total_results: number;

    /**
     * Echoed request cursor; omitted on the first page.
     */
    cursor?: string | null;

    /**
     * Echoed normalized filter tree, or null when no filter was sent.
     */
    filter?: { [key: string]: unknown } | null;

    /**
     * Effective channel time-series interval, or null when the channel report covers
     * the full window.
     */
    interval?: 'day' | 'week' | 'month' | null;

    /**
     * Opaque cursor for the next page; null on the last page.
     */
    next_cursor?: string | null;

    [k: string]: unknown;
  }
}

export interface YoutubeGetSummaryResponse {
  /**
   * How much of youtube.com the rollups can speak for.
   */
  data: YoutubeGetSummaryResponse.Data;

  /**
   * Summary report metadata.
   */
  info: YoutubeGetSummaryResponse.Info;
}

export namespace YoutubeGetSummaryResponse {
  /**
   * How much of youtube.com the rollups can speak for.
   */
  export interface Data {
    /**
     * Citations that resolve to a channel, so can appear in the channel and video
     * rankings. NOT the citation_share divisor — that is total_youtube_citations, so a
     * complete channel ranking's shares sum to slightly less than 1.
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

  /**
   * Summary report metadata.
   */
  export interface Info {
    /**
     * Echoed category id this report covers.
     */
    category_id: string;

    /**
     * Number of rows returned in `data` for this page.
     */
    count: number;

    /**
     * Echoed request end date (YYYY-MM-DD, ET).
     */
    end_date: string;

    /**
     * Display names of the models the report covers.
     */
    models: Array<string>;

    /**
     * All five YouTube source types; this endpoint has no source_types request field
     * and cannot be narrowed.
     */
    source_types: Array<'video' | 'short' | 'channel' | 'playlist' | 'other'>;

    /**
     * Echoed request start date (YYYY-MM-DD, ET).
     */
    start_date: string;

    /**
     * Echoed normalized filter tree, or null when no filter was sent.
     */
    filter?: { [key: string]: unknown } | null;

    /**
     * Opaque cursor for the next page; null on the last page.
     */
    next_cursor?: string | null;

    /**
     * Total rows matching the query before pagination (null when not computed).
     */
    total_results?: number | null;

    [k: string]: unknown;
  }
}

export interface YoutubeGetVideosResponse {
  data: Array<YoutubeGetVideosResponse.Data>;

  /**
   * Video report metadata, including effective paging and attribution settings.
   */
  info: YoutubeGetVideosResponse.Info;
}

export namespace YoutubeGetVideosResponse {
  export interface Data {
    /**
     * Share of every YouTube citation in the window (attributed and unattributed
     * alike), regardless of `source_types`. Shares sum to at most 1, reaching about 1
     * only with `attribution="all"` and no `source_types` filter; a narrowed ranking
     * sums to its slice's share.
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
     * Null when unknown.
     */
    channel_handle?: string | null;

    /**
     * Publishing channel title, or null when unknown.
     */
    channel_title?: string | null;

    /**
     * Openable URL for the publishing channel, or null when unknown.
     */
    channel_url?: string | null;

    /**
     * Length in seconds, or null when unknown.
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
     * Openable video URL, or null when unavailable.
     */
    url?: string | null;

    /**
     * YouTube content category, or null when unknown.
     */
    video_category?: string | null;

    [k: string]: unknown;
  }

  /**
   * Video report metadata, including effective paging and attribution settings.
   */
  export interface Info {
    /**
     * Effective video attribution mode.
     */
    attribution: 'attributed' | 'unattributed' | 'all';

    /**
     * Echoed category id this report covers.
     */
    category_id: string;

    /**
     * Number of rows returned in `data` for this page.
     */
    count: number;

    /**
     * Echoed request end date (YYYY-MM-DD, ET).
     */
    end_date: string;

    /**
     * Effective page size applied to this paged report.
     */
    limit: number;

    /**
     * Display names of the models the report covers.
     */
    models: Array<string>;

    /**
     * Source types this report covers. Derived from the request, not returned rows, so
     * a listed type may have no rows.
     */
    source_types: Array<'video' | 'short' | 'channel' | 'playlist' | 'other'>;

    /**
     * Echoed request start date (YYYY-MM-DD, ET).
     */
    start_date: string;

    /**
     * Echoed request cursor; omitted on the first page.
     */
    cursor?: string | null;

    /**
     * Echoed normalized filter tree, or null when no filter was sent.
     */
    filter?: { [key: string]: unknown } | null;

    /**
     * Opaque cursor for the next page; null on the last page.
     */
    next_cursor?: string | null;

    /**
     * Total rows matching the query before pagination (null when not computed).
     */
    total_results?: number | null;

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
   * per answer engine. `limit` counts leading channels in every case, so ten
   * channels across nine engines is ten channels and ninety rows.
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
   * or `other`. Omit to include `video`, `short`, `channel`, and `playlist`; `other`
   * is excluded because those citations have no channel. Requests containing `other`
   * are rejected.
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
   * or `other`. Omit to include `video` and `short` with the default
   * `attribution='attributed'`; `unattributed` and `all` widen the default to all
   * five source types. Requests containing `other` with `attribution='attributed'`
   * are rejected.
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

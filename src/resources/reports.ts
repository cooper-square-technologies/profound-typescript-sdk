// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Reports extends APIResource {
  /**
   * Get citations for a given category.
   *
   * @example
   * ```ts
   * const response = await client.reports.citations({
   *   category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   end_date: '2019-12-27T18:11:19.117Z',
   *   metrics: ['count'],
   *   start_date: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  citations(body: ReportCitationsParams, options?: RequestOptions): APIPromise<ReportCitationsResponse> {
    return this._client.post('/v1/reports/citations', { body, ...options });
  }

  /**
   * Get bot traffic report from the daily aggregated materialized view.
   *
   * This endpoint queries pre-aggregated daily bot data, making it efficient for
   * large date ranges and high-traffic sites.
   *
   * Metrics:
   *
   * - count: unique bot visits
   * - citations: unique citation events
   * - indexing: unique indexing events
   * - training: unique training events
   * - last_visit: most recent visit timestamp
   *
   * @example
   * ```ts
   * const reportResponse = await client.reports.getBotsReport({
   *   domain: 'domain',
   *   metrics: ['count'],
   *   start_date: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  getBotsReport(body: ReportGetBotsReportParams, options?: RequestOptions): APIPromise<ReportResponse> {
    return this._client.post('/v1/reports/bots', { body, ...options });
  }

  /**
   * Get referral traffic report from the daily aggregated materialized view.
   *
   * This endpoint queries pre-aggregated daily referral data, making it efficient
   * for large date ranges and high-traffic sites.
   *
   * @example
   * ```ts
   * const reportResponse =
   *   await client.reports.getReferralsReport({
   *     domain: 'domain',
   *     metrics: ['visits'],
   *     start_date: '2019-12-27T18:11:19.117Z',
   *   });
   * ```
   */
  getReferralsReport(
    body: ReportGetReferralsReportParams,
    options?: RequestOptions,
  ): APIPromise<ReportResponse> {
    return this._client.post('/v1/reports/referrals', { body, ...options });
  }

  /**
   * Get citations for a given category.
   *
   * @example
   * ```ts
   * const reportResponse = await client.reports.sentiment({
   *   category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   end_date: '2019-12-27T18:11:19.117Z',
   *   metrics: ['positive'],
   *   start_date: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  sentiment(body: ReportSentimentParams, options?: RequestOptions): APIPromise<ReportResponse> {
    return this._client.post('/v1/reports/sentiment', { body, ...options });
  }

  /**
   * Query visibility report.
   *
   * @example
   * ```ts
   * const reportResponse = await client.reports.visibility({
   *   category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   end_date: '2019-12-27T18:11:19.117Z',
   *   metrics: ['share_of_voice'],
   *   start_date: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  visibility(body: ReportVisibilityParams, options?: RequestOptions): APIPromise<ReportResponse> {
    return this._client.post('/v1/reports/visibility', { body, ...options });
  }
}

/**
 * Base model for report information.
 */
export interface ReportInfo {
  total_rows: number;

  query?: { [key: string]: unknown } | null;
}

/**
 * Base response model for reports.
 */
export interface ReportResponse {
  data: Array<ReportResult>;

  /**
   * Base model for report information.
   */
  info: ReportInfo;
}

/**
 * Base model for report results.
 */
export interface ReportResult {
  dimensions: Array<string>;

  metrics: Array<number>;
}

export interface ReportCitationsResponse {
  data: Array<ReportResult>;

  /**
   * Base model for report information.
   */
  info: ReportInfo;
}

export interface ReportCitationsParams {
  category_id: string;

  /**
   * End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full
   * ISO timestamp.
   */
  end_date: string;

  metrics: Array<'count' | 'share_of_voice'>;

  /**
   * Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or
   * full ISO timestamp.
   */
  start_date: string;

  /**
   * Date interval for the report. (only used with date dimension)
   */
  date_interval?: 'day' | 'week' | 'month' | 'year';

  /**
   * Dimensions to group the report by.
   */
  dimensions?: Array<
    | 'hostname'
    | 'path'
    | 'date'
    | 'region'
    | 'topic'
    | 'model'
    | 'tag'
    | 'prompt'
    | 'url'
    | 'root_domain'
    | 'persona'
    | 'citation_category'
  >;

  /**
   * List of filters to apply to the citations report.
   */
  filters?: Array<
    | ReportCitationsParams.HostnameFilter
    | ReportCitationsParams.AppModelsAnswerEngineInsightsFiltersPathFilter
    | ReportCitationsParams.RegionIDFilter
    | ReportCitationsParams.TopicIDFilter
    | ReportCitationsParams.ModelIDFilter
    | ReportCitationsParams.TagIDFilter
    | ReportCitationsParams.URLFilter
    | ReportCitationsParams.RootDomainFilter
    | ReportCitationsParams.PromptTypeFilter
    | ReportCitationsParams.PersonaIDFilter
    | ReportCitationsParams.CitationCategoryFilter
  >;

  /**
   * Custom ordering of the report results.
   *
   *     The order is a record of key-value pairs where:
   *     - `key` is the field to order by, which can be a metric and/or `date`, `hostname`, `path` dimensions
   *     - `value` is the direction of the order, either `asc` for ascending or `desc` for descending.
   *
   *     When not specified, the default order is the first metric in the query descending.
   */
  order_by?: { [key: string]: 'asc' | 'desc' };

  /**
   * Pagination settings for the report results.
   */
  pagination?: Shared.Pagination;
}

export namespace ReportCitationsParams {
  /**
   * Filter by hostname
   */
  export interface HostnameFilter {
    field: 'hostname';

    operator:
      | 'is'
      | 'not_is'
      | 'in'
      | 'not_in'
      | 'contains'
      | 'not_contains'
      | 'matches'
      | 'contains_case_insensitive'
      | 'not_contains_case_insensitive';

    value: string | Array<string>;
  }

  /**
   * Filter by URL path
   */
  export interface AppModelsAnswerEngineInsightsFiltersPathFilter {
    field: 'path';

    operator:
      | 'is'
      | 'not_is'
      | 'in'
      | 'not_in'
      | 'contains'
      | 'not_contains'
      | 'matches'
      | 'contains_case_insensitive'
      | 'not_contains_case_insensitive';

    value: string | Array<string>;
  }

  export interface RegionIDFilter {
    /**
     * - `region` - Deprecated
     */
    field: 'region_id' | 'region';

    operator: 'is' | 'not_is' | 'in' | 'not_in';

    value: string | Array<string>;
  }

  export interface TopicIDFilter {
    /**
     * - `topic` - Deprecated
     */
    field: 'topic_id' | 'topic';

    operator: 'is' | 'not_is' | 'in' | 'not_in';

    value: string | Array<string>;
  }

  export interface ModelIDFilter {
    /**
     * - `model` - Deprecated
     */
    field: 'model_id' | 'model';

    operator: 'is' | 'not_is' | 'in' | 'not_in';

    value: string | Array<string>;
  }

  export interface TagIDFilter {
    /**
     * - `tag` - Deprecated
     */
    field: 'tag_id' | 'tag';

    operator: 'is' | 'not_is' | 'in' | 'not_in';

    value: string | Array<string>;
  }

  /**
   * Filter by URL
   */
  export interface URLFilter {
    field: 'url';

    operator:
      | 'is'
      | 'not_is'
      | 'in'
      | 'not_in'
      | 'contains'
      | 'not_contains'
      | 'matches'
      | 'contains_case_insensitive'
      | 'not_contains_case_insensitive';

    value: string | Array<string>;
  }

  /**
   * Filter by root domain
   */
  export interface RootDomainFilter {
    field: 'root_domain';

    operator:
      | 'is'
      | 'not_is'
      | 'in'
      | 'not_in'
      | 'contains'
      | 'not_contains'
      | 'matches'
      | 'contains_case_insensitive'
      | 'not_contains_case_insensitive';

    value: string | Array<string>;
  }

  /**
   * Filter by prompt type (visibility or sentiment)
   */
  export interface PromptTypeFilter {
    field: 'prompt_type';

    operator:
      | 'is'
      | 'not_is'
      | 'in'
      | 'not_in'
      | 'contains'
      | 'not_contains'
      | 'matches'
      | 'contains_case_insensitive'
      | 'not_contains_case_insensitive';

    value: 'visibility' | 'sentiment' | Array<'visibility' | 'sentiment'>;
  }

  export interface PersonaIDFilter {
    field: 'persona_id';

    operator: 'is' | 'not_is' | 'in' | 'not_in';

    value: string | Array<string>;
  }

  /**
   * Filter by citation category
   */
  export interface CitationCategoryFilter {
    field: 'citation_category';

    operator:
      | 'is'
      | 'not_is'
      | 'in'
      | 'not_in'
      | 'contains'
      | 'not_contains'
      | 'matches'
      | 'contains_case_insensitive'
      | 'not_contains_case_insensitive';

    value: string | Array<string>;
  }
}

export interface ReportGetBotsReportParams {
  /**
   * Domain to query logs for.
   */
  domain: string;

  metrics: Array<'count' | 'citations' | 'indexing' | 'training' | 'last_visit'>;

  /**
   * Start date for logs. Accepts: YYYY-MM-DD, YYYY-MM-DD HH:MM, YYYY-MM-DD HH:MM:SS,
   * or full ISO timestamp.
   */
  start_date: string;

  /**
   * Date interval for the report. (only used with date dimension)
   */
  date_interval?: 'day' | 'week' | 'month' | 'year';

  /**
   * Dimensions to group the report by.
   */
  dimensions?: Array<'date' | 'path' | 'bot_name' | 'bot_provider'>;

  /**
   * End date for logs. Accepts same formats as start_date. Defaults to now if
   * omitted.
   */
  end_date?: string;

  /**
   * Filters for bots report.
   */
  filters?: Array<
    | ReportGetBotsReportParams.PathFilter
    | ReportGetBotsReportParams.BotNameFilter
    | ReportGetBotsReportParams.BotProviderFilter
  >;

  /**
   * Custom ordering of the report results.
   *
   * The order is a record of key-value pairs where:
   *
   * - key is the field to order by, which can be a metric or dimension
   * - value is the direction of the order, either 'asc' for ascending or 'desc' for
   *   descending.
   *
   * When not specified, the default order is the first metric in the query
   * descending.
   */
  order_by?: { [key: string]: 'asc' | 'desc' };

  /**
   * Pagination settings for the report results.
   */
  pagination?: Shared.Pagination;
}

export namespace ReportGetBotsReportParams {
  /**
   * Filter by request path
   */
  export interface PathFilter {
    field: 'path';

    operator:
      | 'is'
      | 'not_is'
      | 'in'
      | 'not_in'
      | 'contains'
      | 'not_contains'
      | 'matches'
      | 'contains_case_insensitive'
      | 'not_contains_case_insensitive';

    value: string | Array<string>;
  }

  /**
   * Filter by bot name (user agent)
   */
  export interface BotNameFilter {
    field: 'bot_name';

    operator:
      | 'is'
      | 'not_is'
      | 'in'
      | 'not_in'
      | 'contains'
      | 'not_contains'
      | 'matches'
      | 'contains_case_insensitive'
      | 'not_contains_case_insensitive';

    value:
      | 'Amazonbot'
      | 'ClaudeBot'
      | 'Claude-User'
      | 'Claude-SearchBot'
      | 'Applebot'
      | 'Applebot-Extended'
      | 'Bytespider'
      | 'DeepSeek'
      | 'DuckAssistBot'
      | 'DuckDuckBot'
      | 'Googlebot'
      | 'Googlebot-News'
      | 'Googlebot-Video'
      | 'Googlebot-Image'
      | 'Google-Extended'
      | 'Storebot-Google'
      | 'Google-CloudVertexBot'
      | 'meta-externalfetcher'
      | 'meta-externalagent'
      | 'bingbot'
      | 'MicrosoftPreview'
      | 'ChatGPT-User'
      | 'GPTBot'
      | 'OAI-SearchBot'
      | 'OAI-Operator'
      | 'PerplexityBot'
      | 'Perplexity-User'
      | 'Grok-PageBrowser'
      | 'YouBot'
      | Array<
          | 'Amazonbot'
          | 'ClaudeBot'
          | 'Claude-User'
          | 'Claude-SearchBot'
          | 'Applebot'
          | 'Applebot-Extended'
          | 'Bytespider'
          | 'DeepSeek'
          | 'DuckAssistBot'
          | 'DuckDuckBot'
          | 'Googlebot'
          | 'Googlebot-News'
          | 'Googlebot-Video'
          | 'Googlebot-Image'
          | 'Google-Extended'
          | 'Storebot-Google'
          | 'Google-CloudVertexBot'
          | 'meta-externalfetcher'
          | 'meta-externalagent'
          | 'bingbot'
          | 'MicrosoftPreview'
          | 'ChatGPT-User'
          | 'GPTBot'
          | 'OAI-SearchBot'
          | 'OAI-Operator'
          | 'PerplexityBot'
          | 'Perplexity-User'
          | 'Grok-PageBrowser'
          | 'YouBot'
        >;
  }

  /**
   * Filter by bot provider
   */
  export interface BotProviderFilter {
    field: 'bot_provider';

    operator:
      | 'is'
      | 'not_is'
      | 'in'
      | 'not_in'
      | 'contains'
      | 'not_contains'
      | 'matches'
      | 'contains_case_insensitive'
      | 'not_contains_case_insensitive';

    value:
      | 'openai'
      | 'anthropic'
      | 'chatgpt'
      | 'deepseek'
      | 'google'
      | 'microsoft'
      | 'perplexity'
      | 'apple'
      | 'bytedance'
      | 'amazon'
      | 'meta'
      | 'duckduckgo'
      | 'you'
      | 'xai'
      | 'grok'
      | 'gemini'
      | Array<
          | 'openai'
          | 'anthropic'
          | 'chatgpt'
          | 'deepseek'
          | 'google'
          | 'microsoft'
          | 'perplexity'
          | 'apple'
          | 'bytedance'
          | 'amazon'
          | 'meta'
          | 'duckduckgo'
          | 'you'
          | 'xai'
          | 'grok'
          | 'gemini'
        >;
  }
}

export interface ReportGetReferralsReportParams {
  /**
   * Domain to query logs for.
   */
  domain: string;

  metrics: Array<'visits' | 'last_visit'>;

  /**
   * Start date for logs. Accepts: YYYY-MM-DD, YYYY-MM-DD HH:MM, YYYY-MM-DD HH:MM:SS,
   * or full ISO timestamp.
   */
  start_date: string;

  /**
   * Date interval for the report. (only used with date dimension)
   */
  date_interval?: 'day' | 'week' | 'month' | 'year';

  /**
   * Dimensions to group the report by.
   */
  dimensions?: Array<'date' | 'path' | 'referral_source'>;

  /**
   * End date for logs. Accepts same formats as start_date. Defaults to now if
   * omitted.
   */
  end_date?: string;

  /**
   * Filters for referrals report.
   */
  filters?: Array<
    ReportGetReferralsReportParams.PathFilter | ReportGetReferralsReportParams.ReferralSourceFilter
  >;

  /**
   * Custom ordering of the report results.
   *
   * The order is a record of key-value pairs where:
   *
   * - key is the field to order by, which can be a metric or dimension
   * - value is the direction of the order, either 'asc' for ascending or 'desc' for
   *   descending.
   *
   * When not specified, the default order is the first metric in the query
   * descending.
   */
  order_by?: { [key: string]: 'asc' | 'desc' };

  /**
   * Pagination settings for the report results.
   */
  pagination?: Shared.Pagination;
}

export namespace ReportGetReferralsReportParams {
  /**
   * Filter by request path
   */
  export interface PathFilter {
    field: 'path';

    operator:
      | 'is'
      | 'not_is'
      | 'in'
      | 'not_in'
      | 'contains'
      | 'not_contains'
      | 'matches'
      | 'contains_case_insensitive'
      | 'not_contains_case_insensitive';

    value: string | Array<string>;
  }

  /**
   * Filter by referral source
   */
  export interface ReferralSourceFilter {
    field: 'referral_source';

    operator:
      | 'is'
      | 'not_is'
      | 'in'
      | 'not_in'
      | 'contains'
      | 'not_contains'
      | 'matches'
      | 'contains_case_insensitive'
      | 'not_contains_case_insensitive';

    value:
      | 'openai'
      | 'none'
      | 'anthropic'
      | 'deepseek'
      | 'perplexity'
      | 'you'
      | 'grok'
      | 'microsoft'
      | 'gemini'
      | 'internal'
      | 'other'
      | Array<
          | 'openai'
          | 'none'
          | 'anthropic'
          | 'deepseek'
          | 'perplexity'
          | 'you'
          | 'grok'
          | 'microsoft'
          | 'gemini'
          | 'internal'
          | 'other'
        >;
  }
}

export interface ReportSentimentParams {
  category_id: string;

  /**
   * End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full
   * ISO timestamp.
   */
  end_date: string;

  metrics: Array<'positive' | 'negative' | 'occurrences'>;

  /**
   * Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or
   * full ISO timestamp.
   */
  start_date: string;

  /**
   * Date interval for the report. (only used with date dimension)
   */
  date_interval?: 'day' | 'week' | 'month' | 'year';

  /**
   * Dimensions to group the report by.
   */
  dimensions?: Array<
    | 'theme'
    | 'date'
    | 'region'
    | 'topic'
    | 'model'
    | 'asset_id'
    | 'asset_name'
    | 'tag'
    | 'prompt'
    | 'sentiment_type'
    | 'persona'
  >;

  /**
   * List of filters to apply to the sentiment report.
   */
  filters?: Array<
    | ReportSentimentParams.AssetNameFilter
    | ReportSentimentParams.ThemeFilter
    | ReportSentimentParams.RegionIDFilter
    | ReportSentimentParams.TopicIDFilter
    | ReportSentimentParams.ModelIDFilter
    | ReportSentimentParams.TagIDFilter
    | ReportSentimentParams.PromptFilter
    | ReportSentimentParams.PersonaIDFilter
  >;

  /**
   * Custom ordering of the report results.
   *
   * The order is a record of key-value pairs where:
   *
   * - key is the field to order by, which can be a metric or dimension
   * - value is the direction of the order, either 'asc' for ascending or 'desc' for
   *   descending.
   *
   * When not specified, the default order is the first metric in the query
   * descending.
   */
  order_by?: { [key: string]: 'asc' | 'desc' };

  /**
   * Pagination settings for the report results.
   */
  pagination?: Shared.Pagination;
}

export namespace ReportSentimentParams {
  /**
   * Filter by asset name
   */
  export interface AssetNameFilter {
    field: 'asset_name';

    operator:
      | 'is'
      | 'not_is'
      | 'in'
      | 'not_in'
      | 'contains'
      | 'not_contains'
      | 'matches'
      | 'contains_case_insensitive'
      | 'not_contains_case_insensitive';

    value: string | Array<string>;
  }

  /**
   * Filter by theme
   */
  export interface ThemeFilter {
    field: 'theme';

    operator:
      | 'is'
      | 'not_is'
      | 'in'
      | 'not_in'
      | 'contains'
      | 'not_contains'
      | 'matches'
      | 'contains_case_insensitive'
      | 'not_contains_case_insensitive';

    value: string | Array<string>;
  }

  export interface RegionIDFilter {
    /**
     * - `region` - Deprecated
     */
    field: 'region_id' | 'region';

    operator: 'is' | 'not_is' | 'in' | 'not_in';

    value: string | Array<string>;
  }

  export interface TopicIDFilter {
    /**
     * - `topic` - Deprecated
     */
    field: 'topic_id' | 'topic';

    operator: 'is' | 'not_is' | 'in' | 'not_in';

    value: string | Array<string>;
  }

  export interface ModelIDFilter {
    /**
     * - `model` - Deprecated
     */
    field: 'model_id' | 'model';

    operator: 'is' | 'not_is' | 'in' | 'not_in';

    value: string | Array<string>;
  }

  export interface TagIDFilter {
    /**
     * - `tag` - Deprecated
     */
    field: 'tag_id' | 'tag';

    operator: 'is' | 'not_is' | 'in' | 'not_in';

    value: string | Array<string>;
  }

  /**
   * Filter by prompt text
   */
  export interface PromptFilter {
    field: 'prompt';

    operator:
      | 'is'
      | 'not_is'
      | 'in'
      | 'not_in'
      | 'contains'
      | 'not_contains'
      | 'matches'
      | 'contains_case_insensitive'
      | 'not_contains_case_insensitive';

    value: string | Array<string>;
  }

  export interface PersonaIDFilter {
    field: 'persona_id';

    operator: 'is' | 'not_is' | 'in' | 'not_in';

    value: string | Array<string>;
  }
}

export interface ReportVisibilityParams {
  category_id: string;

  /**
   * End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full
   * ISO timestamp.
   */
  end_date: string;

  metrics: Array<'share_of_voice' | 'mentions_count' | 'visibility_score' | 'executions'>;

  /**
   * Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or
   * full ISO timestamp.
   */
  start_date: string;

  /**
   * Date interval for the report. (only used with date dimension)
   */
  date_interval?: 'day' | 'week' | 'month' | 'year';

  /**
   * Dimensions to group the report by.
   */
  dimensions?: Array<
    'date' | 'region' | 'topic' | 'model' | 'asset_id' | 'asset_name' | 'prompt' | 'tag' | 'persona'
  >;

  /**
   * List of filters to apply to the visibility report.
   */
  filters?: Array<
    | ReportVisibilityParams.RegionIDFilter
    | ReportVisibilityParams.ModelIDFilter
    | ReportVisibilityParams.TopicIDFilter
    | ReportVisibilityParams.AssetNameFilter
    | ReportVisibilityParams.TagIDFilter
    | ReportVisibilityParams.PromptFilter
    | ReportVisibilityParams.PersonaIDFilter
  >;

  /**
   * Custom ordering of the report results.
   *
   * The order is a record of key-value pairs where:
   *
   * - key is the field to order by, which can be a metric or dimension
   * - value is the direction of the order, either 'asc' for ascending or 'desc' for
   *   descending.
   *
   * When not specified, the default order is the first metric in the query
   * descending.
   */
  order_by?: { [key: string]: 'asc' | 'desc' };

  /**
   * Pagination settings for the report results.
   */
  pagination?: Shared.Pagination;
}

export namespace ReportVisibilityParams {
  export interface RegionIDFilter {
    /**
     * - `region` - Deprecated
     */
    field: 'region_id' | 'region';

    operator: 'is' | 'not_is' | 'in' | 'not_in';

    value: string | Array<string>;
  }

  export interface ModelIDFilter {
    /**
     * - `model` - Deprecated
     */
    field: 'model_id' | 'model';

    operator: 'is' | 'not_is' | 'in' | 'not_in';

    value: string | Array<string>;
  }

  export interface TopicIDFilter {
    /**
     * - `topic` - Deprecated
     */
    field: 'topic_id' | 'topic';

    operator: 'is' | 'not_is' | 'in' | 'not_in';

    value: string | Array<string>;
  }

  /**
   * Filter by asset name
   */
  export interface AssetNameFilter {
    field: 'asset_name';

    operator:
      | 'is'
      | 'not_is'
      | 'in'
      | 'not_in'
      | 'contains'
      | 'not_contains'
      | 'matches'
      | 'contains_case_insensitive'
      | 'not_contains_case_insensitive';

    value: string | Array<string>;
  }

  export interface TagIDFilter {
    /**
     * - `tag` - Deprecated
     */
    field: 'tag_id' | 'tag';

    operator: 'is' | 'not_is' | 'in' | 'not_in';

    value: string | Array<string>;
  }

  /**
   * Filter by prompt text
   */
  export interface PromptFilter {
    field: 'prompt';

    operator:
      | 'is'
      | 'not_is'
      | 'in'
      | 'not_in'
      | 'contains'
      | 'not_contains'
      | 'matches'
      | 'contains_case_insensitive'
      | 'not_contains_case_insensitive';

    value: string | Array<string>;
  }

  export interface PersonaIDFilter {
    field: 'persona_id';

    operator: 'is' | 'not_is' | 'in' | 'not_in';

    value: string | Array<string>;
  }
}

export declare namespace Reports {
  export {
    type ReportInfo as ReportInfo,
    type ReportResponse as ReportResponse,
    type ReportResult as ReportResult,
    type ReportCitationsResponse as ReportCitationsResponse,
    type ReportCitationsParams as ReportCitationsParams,
    type ReportGetBotsReportParams as ReportGetBotsReportParams,
    type ReportGetReferralsReportParams as ReportGetReferralsReportParams,
    type ReportSentimentParams as ReportSentimentParams,
    type ReportVisibilityParams as ReportVisibilityParams,
  };
}

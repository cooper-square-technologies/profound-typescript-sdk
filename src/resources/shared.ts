// File generated from our OpenAPI spec by Scalar. See README.md for details.

/**
 * Filter by analysis type (visibility, sentiment, or accuracy).
 */
export interface AnalysisTypeFilter {
  field: 'analysis_type';
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
    | 'visibility'
    | 'sentiment'
    | 'sentiment_v2'
    | 'accuracy'
    | Array<'visibility' | 'sentiment' | 'sentiment_v2' | 'accuracy'>;
}
export interface AssetIDFilter {
  field: 'asset_id';
  operator: 'is' | 'not_is' | 'in' | 'not_in';
  value: string | Array<string>;
}
/**
 * Filter by bot name (user agent). Values come from analytics data and should
 * not be enum-constrained because web-v2 may send newly cataloged user-agent names.
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
  value: string | Array<string>;
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
    | 'you.com'
    | 'xai'
    | 'grok'
    | 'gemini'
    | 'mistral'
    | 'huawei'
    | 'yandex'
    | 'baidu'
    | 'yahoo'
    | 'commoncrawl'
    | 'openclaw'
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
        | 'you.com'
        | 'xai'
        | 'grok'
        | 'gemini'
        | 'mistral'
        | 'huawei'
        | 'yandex'
        | 'baidu'
        | 'yahoo'
        | 'commoncrawl'
        | 'openclaw'
      >;
}
/**
 * Cursor-based pagination metadata.
 */
export interface CursorPagination {
  /**
   * Maximum number of results to return. Default is 10,000, maximum is 50,000.
   * @default 10000
   * @maximum 50000
   */
  limit?: number;
  /**
   * Token for the next page, if more results are available.
   */
  next_cursor?: string | null;
}
/**
 * Filter by AI model/platform UUID.
 */
export interface ModelIDFilter {
  field: 'model_id' | 'model';
  operator: 'is' | 'not_is' | 'in' | 'not_in';
  value: string | Array<string>;
}
/**
 * Offset-based pagination parameters.
 */
export interface Pagination {
  /**
   * Maximum number of results to return. Default is 10,000, maximum is 50,000.
   * @default 10000
   * @maximum 50000
   */
  limit?: number;
  /**
   * Offset for the results. Used for pagination.
   * @default 0
   * @minimum 0
   */
  offset?: number;
}
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
 * Filter by persona UUID.
 */
export interface PersonaIDFilter {
  field: 'persona_id';
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
/**
 * Filter by prompt type (visibility or sentiment).
 *
 * .. deprecated::
 *     Use :class:`AnalysisTypeFilter` instead. ``prompt_type`` is normalised
 *     to ``analysis_type`` at parse time.
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
/**
 * Filter by region UUID.
 */
export interface RegionIDFilter {
  field: 'region_id' | 'region';
  operator: 'is' | 'not_is' | 'in' | 'not_in';
  value: string | Array<string>;
}
/**
 * Filter by region name.
 */
export interface RegionNameFilter {
  field: 'region_name';
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
 * Filter by tag (prompt group) UUID.
 */
export interface TagIDFilter {
  field: 'tag_id' | 'tag';
  operator: 'is' | 'not_is' | 'in' | 'not_in';
  value: string | Array<string>;
}
/**
 * Filter by topic UUID.
 */
export interface TopicIDFilter {
  field: 'topic_id' | 'topic';
  operator: 'is' | 'not_is' | 'in' | 'not_in';
  value: string | Array<string>;
}

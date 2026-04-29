// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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

  value: 'visibility' | 'sentiment' | 'accuracy' | Array<'visibility' | 'sentiment' | 'accuracy'>;
}

export interface AssetIDFilter {
  field: 'asset_id';

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

/**
 * Cursor-based pagination metadata.
 */
export interface CursorPagination {
  /**
   * Maximum number of results to return. Default is 10,000, maximum is 50,000.
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
  /**
   * - `model` - Deprecated
   */
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
   */
  limit?: number;

  /**
   * Offset for the results. Used for pagination.
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
 * .. deprecated:: Use :class:`AnalysisTypeFilter` instead. `prompt_type` is
 * normalised to `analysis_type` at parse time.
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
  /**
   * - `region` - Deprecated
   */
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
  /**
   * - `tag` - Deprecated
   */
  field: 'tag_id' | 'tag';

  operator: 'is' | 'not_is' | 'in' | 'not_in';

  value: string | Array<string>;
}

/**
 * Filter by topic UUID.
 */
export interface TopicIDFilter {
  /**
   * - `topic` - Deprecated
   */
  field: 'topic_id' | 'topic';

  operator: 'is' | 'not_is' | 'in' | 'not_in';

  value: string | Array<string>;
}

// File generated from our OpenAPI spec by Scalar. See README.md for details.

export interface AccuracyTrendPoint {
  date: string;
  total: number;
  accurate: number;
  ratio: number;
  /**
   * @default 0
   */
  verified?: number;
  prevPeriodData?: AccuracyTrendPoint | null;
}
/**
 * Summary information for an agent.
 */
export interface Agent {
  /**
   * Unique ID for the agent.
   * @format uuid
   */
  id: string;
  /**
   * Unique ID of the organization that owns the agent.
   * @format uuid
   */
  organization_id: string;
  /**
   * Display name of the agent.
   */
  name: string;
  /**
   * Current status of the agent.
   */
  status: 'draft' | 'published' | 'unknown';
  /**
   * When the agent was created.
   * @format date-time
   */
  created_at: string;
  /**
   * Short description of the agent, if provided.
   */
  description?: string | null;
}
/**
 * Version selector for retrieving a specific agent.
 */
export type AgentVersion = 'published' | 'draft';
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
export interface BrandNameFilter {
  field: 'brand_name';
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
export interface ClaimModelOccurrence {
  id?: string | null;
  name?: string | null;
  /**
   * Only populated for entries in `models`; omitted from grouped-section `model`.
   */
  occurrence?: number | null;
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
 * An ``{id, name}`` reference for a grouped dimension value.
 */
export interface DimensionRef {
  id?: string | null;
  name?: string | null;
}
export interface DocumentOperationResponse {
  /**
   * Operation result message.
   */
  message: string;
  /**
   * Document name.
   */
  name: string;
  /**
   * Document path.
   */
  path: string;
  /**
   * Document folder path.
   */
  folder?: string | null;
}
/**
 * Shows the old and new value for a changed field.
 */
export interface FieldDiff {
  /**
   * Previous value.
   */
  old?: unknown;
  /**
   * New value.
   */
  new?: unknown;
}
/**
 * A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.
 */
export interface FilterNode {
  and?: Array<FilterNode> | null;
  or?: Array<FilterNode> | null;
  not?: FilterNode | null;
  field?: string | null;
  op?: string | null;
  value?: unknown;
}
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
export interface HTTPValidationError {
  detail?: Array<HTTPValidationError.Detail>;
}

export namespace HTTPValidationError {
  export interface Detail {
    loc: Array<string | number>;
    msg: string;
    type: string;
    input?: unknown;
    ctx?: Record<string, unknown>;
  }
}
/**
 * Reference by id, name, or both. Plain strings work too:
 * UUIDs become id lookups, other strings become name lookups.
 */
export interface IDOrName {
  /**
   * UUID of the resource.
   */
  id?: string | null;
  /**
   * Display name of the resource.
   */
  name?: string | null;
}
/**
 * Base model for report information.
 */
export interface Info {
  total_rows: number;
  query?: Record<string, unknown> | null;
}
export interface LiveGeneration {
  /**
   * @format uuid
   */
  run_id: string;
  status: 'queued' | 'running' | 'completed' | 'failed';
  /**
   * @format date-time
   */
  started_at?: string | null;
  /**
   * @format date-time
   */
  finished_at?: string | null;
  error?: string | null;
}
export interface MerchantNameFilter {
  field: 'merchant_name';
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
 * Filter by AI model/platform UUID.
 */
export interface ModelIDFilter {
  field: 'model_id' | 'model';
  operator: 'is' | 'not_is' | 'in' | 'not_in';
  value: string | Array<string>;
}
/**
 * Generic id+name reference used across domain boundaries.
 */
export interface NamedResource {
  id: string;
  name: string;
}
/**
 * Shows which resources were added or removed.
 */
export interface NamedResourceDiffList {
  /**
   * Resources that were added.
   * @default []
   */
  added?: Array<NamedResource>;
  /**
   * Resources that were removed.
   * @default []
   */
  removed?: Array<NamedResource>;
}
export interface NumericMetricFilter {
  field: string;
  operator: '>' | '>=' | '<' | '<=' | '=' | '==' | '!=';
  value: number;
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
export interface ProductNameFilter {
  field: 'product_name';
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
 * Filter by asset name
 */
export interface ProfoundAnswerEngineInsightsFiltersAssetNameFilter {
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
export interface ProfoundShoppingAPIAssetNameFilter {
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
export interface ProjectGenerationContextItem {
  /**
   * @minLength 1
   * @maxLength 200
   */
  id: string;
  /**
   * @minLength 1
   * @maxLength 200
   */
  name: string;
  /**
   * @maxLength 200
   */
  slug?: string | null;
}
export interface ProjectTask {
  /**
   * @format uuid
   */
  task_id: string;
  /**
   * @format uuid
   */
  project_id: string;
  /**
   * @format uuid
   */
  category_id: string;
  title: string;
  type?: string | null;
  summary?: string | null;
  brief?: string | null;
  topic?: string | null;
  /**
   * @minimum 1
   * @maximum 5
   */
  impact?: number | null;
  reference_url?: string | null;
  reference_label?: string | null;
  /**
   * @default not_started
   */
  status?: 'not_started' | 'in_progress' | 'done' | 'abandoned';
  /**
   * @format date-time
   */
  status_changed_at?: string | null;
  /**
   * @default true
   */
  is_new?: boolean;
  /**
   * @format date-time
   */
  created_at?: string | null;
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
 * Filter by prompt UUID.
 */
export interface PromptIDFilter {
  field: 'prompt_id';
  operator: 'is' | 'not_is' | 'in' | 'not_in';
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
 * Base response model for reports.
 */
export interface Response {
  /**
   * Base model for report information.
   */
  info: Info;
  data: Array<Response.Data>;
}

export namespace Response {
  export interface Data {
    metrics: Array<number | string>;
    dimensions: Array<string>;
  }
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
export interface ShoppingRowsResponse {
  /**
   * Base model for report information.
   */
  info: Info;
  data: Array<Record<string, unknown>>;
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
 * Filter by tag name.
 */
export interface TagNameFilter {
  field: 'tag_name';
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
 * Filter by topic UUID.
 */
export interface TopicIDFilter {
  field: 'topic_id' | 'topic';
  operator: 'is' | 'not_is' | 'in' | 'not_in';
  value: string | Array<string>;
}
/**
 * Filter by topic name
 */
export interface TopicNameFilter {
  field: 'topic_name';
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

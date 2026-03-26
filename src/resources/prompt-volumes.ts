// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class PromptVolumes extends APIResource {
  /**
   * Get Volume
   */
  createVolume(body: PromptVolumeCreateVolumeParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/v1/prompt-volumes/volume', { body, ...options });
  }

  /**
   * Get Citation Prompts
   */
  listCitationPrompts(
    query: PromptVolumeListCitationPromptsParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get('/v1/prompt-volumes/citation-prompts', { query, ...options });
  }
}

export type PromptVolumeCreateVolumeResponse = unknown;

export type PromptVolumeListCitationPromptsResponse = unknown;

export interface PromptVolumeCreateVolumeParams {
  /**
   * End date for the query. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full
   * ISO timestamp.
   */
  end_date: string;

  metrics: Array<'volume' | 'change'>;

  /**
   * Start date for the query. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full
   * ISO timestamp.
   */
  start_date: string;

  /**
   * Date interval for the report. (only used with date dimension)
   */
  date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week';

  /**
   * Dimensions to group the report by.
   */
  dimensions?: Array<'keyword' | 'date' | 'platform' | 'country_code' | 'matching_type' | 'frequency'>;

  /**
   * Filters to apply to the query
   */
  filters?: Array<
    | PromptVolumeCreateVolumeParams.CountryCodeFilter
    | PromptVolumeCreateVolumeParams.FrequencyFilter
    | PromptVolumeCreateVolumeParams.KeywordFilter
    | PromptVolumeCreateVolumeParams.MatchingTypeFilter
    | PromptVolumeCreateVolumeParams.PlatformFilter
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

export namespace PromptVolumeCreateVolumeParams {
  /**
   * Filter by country code
   */
  export interface CountryCodeFilter {
    field: 'country_code';

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
   * Filter by frequency
   */
  export interface FrequencyFilter {
    field: 'frequency';

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
   * Filter by keyword
   */
  export interface KeywordFilter {
    field: 'keyword';

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
   * Filter by matching type
   */
  export interface MatchingTypeFilter {
    field: 'matching_type';

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
   * Filter by platform
   */
  export interface PlatformFilter {
    field: 'platform';

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

export interface PromptVolumeListCitationPromptsParams {
  /**
   * Domain to look up (e.g. ramp.com)
   */
  input_domain: string;
}

export declare namespace PromptVolumes {
  export {
    type PromptVolumeCreateVolumeResponse as PromptVolumeCreateVolumeResponse,
    type PromptVolumeListCitationPromptsResponse as PromptVolumeListCitationPromptsResponse,
    type PromptVolumeCreateVolumeParams as PromptVolumeCreateVolumeParams,
    type PromptVolumeListCitationPromptsParams as PromptVolumeListCitationPromptsParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'domains',
    endpoint: '/v1/org/domains',
    httpMethod: 'get',
    summary: 'Get Domains',
    description: 'Get the organization domains.',
    stainlessPath: '(resource) organizations > (method) domains',
    qualified: 'client.organizations.domains',
    response: '{ id: string; created_at: string; name: string; }[]',
    markdown:
      "## domains\n\n`client.organizations.domains(): { id: string; created_at: string; name: string; }[]`\n\n**get** `/v1/org/domains`\n\nGet the organization domains.\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; }[]`\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst response = await client.organizations.domains();\n\nconsole.log(response);\n```",
  },
  {
    name: 'get_personas',
    endpoint: '/v1/org/personas',
    httpMethod: 'get',
    summary: 'Get Personas',
    description: 'Get Personas',
    stainlessPath: '(resource) organizations > (method) get_personas',
    qualified: 'client.organizations.getPersonas',
    response: '{ data: { id: string; category: object; name: string; persona: object; }[]; }',
    markdown:
      "## get_personas\n\n`client.organizations.getPersonas(): { data: object[]; }`\n\n**get** `/v1/org/personas`\n\nGet Personas\n\n### Returns\n\n- `{ data: { id: string; category: object; name: string; persona: object; }[]; }`\n\n  - `data: { id: string; category: { id: string; name: string; }; name: string; persona: { behavior: object; demographics: object; employment: object; }; }[]`\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst response = await client.organizations.getPersonas();\n\nconsole.log(response);\n```",
  },
  {
    name: 'list_assets',
    endpoint: '/v1/org/assets',
    httpMethod: 'get',
    summary: 'Get Assets',
    description: 'Get Assets',
    stainlessPath: '(resource) organizations > (method) list_assets',
    qualified: 'client.organizations.listAssets',
    response:
      '{ data: { id: string; category: object; created_at: string; is_owned: boolean; logo_url: string; name: string; website: string; alternate_domains?: string[]; }[]; }',
    markdown:
      "## list_assets\n\n`client.organizations.listAssets(): { data: object[]; }`\n\n**get** `/v1/org/assets`\n\nGet Assets\n\n### Returns\n\n- `{ data: { id: string; category: object; created_at: string; is_owned: boolean; logo_url: string; name: string; website: string; alternate_domains?: string[]; }[]; }`\n\n  - `data: { id: string; category: { id: string; name: string; }; created_at: string; is_owned: boolean; logo_url: string; name: string; website: string; alternate_domains?: string[]; }[]`\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst response = await client.organizations.listAssets();\n\nconsole.log(response);\n```",
  },
  {
    name: 'models',
    endpoint: '/v1/org/models',
    httpMethod: 'get',
    summary: 'Get Models',
    description: 'Get the organization models.',
    stainlessPath: '(resource) organizations > (method) models',
    qualified: 'client.organizations.models',
    response: '{ id: string; name: string; }[]',
    markdown:
      "## models\n\n`client.organizations.models(): object[]`\n\n**get** `/v1/org/models`\n\nGet the organization models.\n\n### Returns\n\n- `{ id: string; name: string; }[]`\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst namedResources = await client.organizations.models();\n\nconsole.log(namedResources);\n```",
  },
  {
    name: 'regions',
    endpoint: '/v1/org/regions',
    httpMethod: 'get',
    summary: 'Get Regions',
    description: 'Get the organization regions.',
    stainlessPath: '(resource) organizations > (method) regions',
    qualified: 'client.organizations.regions',
    response: '{ id: string; name: string; }[]',
    markdown:
      "## regions\n\n`client.organizations.regions(): object[]`\n\n**get** `/v1/org/regions`\n\nGet the organization regions.\n\n### Returns\n\n- `{ id: string; name: string; }[]`\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst namedResources = await client.organizations.regions();\n\nconsole.log(namedResources);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/org/categories',
    httpMethod: 'get',
    summary: 'Get Categories',
    description: 'Get the organization categories.',
    stainlessPath: '(resource) organizations.categories > (method) list',
    qualified: 'client.organizations.categories.list',
    response: '{ id: string; name: string; }[]',
    markdown:
      "## list\n\n`client.organizations.categories.list(): object[]`\n\n**get** `/v1/org/categories`\n\nGet the organization categories.\n\n### Returns\n\n- `{ id: string; name: string; }[]`\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst namedResources = await client.organizations.categories.list();\n\nconsole.log(namedResources);\n```",
  },
  {
    name: 'assets',
    endpoint: '/v1/org/categories/{category_id}/assets',
    httpMethod: 'get',
    summary: 'Get Category Assets',
    description: 'Get Category Assets',
    stainlessPath: '(resource) organizations.categories > (method) assets',
    qualified: 'client.organizations.categories.assets',
    params: ['category_id: string;'],
    response:
      '{ id: string; created_at: string; is_owned: boolean; logo_url: string; name: string; website: string; alternate_domains?: string[]; }[]',
    markdown:
      "## assets\n\n`client.organizations.categories.assets(category_id: string): { id: string; created_at: string; is_owned: boolean; logo_url: string; name: string; website: string; alternate_domains?: string[]; }[]`\n\n**get** `/v1/org/categories/{category_id}/assets`\n\nGet Category Assets\n\n### Parameters\n\n- `category_id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; is_owned: boolean; logo_url: string; name: string; website: string; alternate_domains?: string[]; }[]`\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst response = await client.organizations.categories.assets('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
  },
  {
    name: 'get_category_personas',
    endpoint: '/v1/org/categories/{category_id}/personas',
    httpMethod: 'get',
    summary: 'Get Category Personas',
    description: 'Get Category Personas',
    stainlessPath: '(resource) organizations.categories > (method) get_category_personas',
    qualified: 'client.organizations.categories.getCategoryPersonas',
    params: ['category_id: string;'],
    response: '{ data: { id: string; name: string; persona: object; }[]; }',
    markdown:
      "## get_category_personas\n\n`client.organizations.categories.getCategoryPersonas(category_id: string): { data: object[]; }`\n\n**get** `/v1/org/categories/{category_id}/personas`\n\nGet Category Personas\n\n### Parameters\n\n- `category_id: string`\n\n### Returns\n\n- `{ data: { id: string; name: string; persona: object; }[]; }`\n\n  - `data: { id: string; name: string; persona: { behavior: object; demographics: object; employment: object; }; }[]`\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst response = await client.organizations.categories.getCategoryPersonas('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
  },
  {
    name: 'prompts',
    endpoint: '/v1/org/categories/{category_id}/prompts',
    httpMethod: 'get',
    summary: 'Get Category Prompts',
    description: 'Get Category Prompts',
    stainlessPath: '(resource) organizations.categories > (method) prompts',
    qualified: 'client.organizations.categories.prompts',
    params: [
      'category_id: string;',
      'cursor?: string;',
      'limit?: number;',
      "order_dir?: 'asc' | 'desc';",
      'platform_id?: string[];',
      "prompt_type?: 'visibility' | 'sentiment'[];",
      'region_id?: string[];',
      'tag_id?: string[];',
      'topic_id?: string[];',
    ],
    response:
      '{ data: { id: string; created_at: string; platforms: object[]; prompt: string; prompt_type: string; regions: object[]; topic: object; tags?: object[]; }[]; info: { limit: number; next_cursor: string; total_rows: number; }; }',
    markdown:
      "## prompts\n\n`client.organizations.categories.prompts(category_id: string, cursor?: string, limit?: number, order_dir?: 'asc' | 'desc', platform_id?: string[], prompt_type?: 'visibility' | 'sentiment'[], region_id?: string[], tag_id?: string[], topic_id?: string[]): { data: object[]; info: object; }`\n\n**get** `/v1/org/categories/{category_id}/prompts`\n\nGet Category Prompts\n\n### Parameters\n\n- `category_id: string`\n\n- `cursor?: string`\n\n- `limit?: number`\n\n- `order_dir?: 'asc' | 'desc'`\n\n- `platform_id?: string[]`\n\n- `prompt_type?: 'visibility' | 'sentiment'[]`\n\n- `region_id?: string[]`\n\n- `tag_id?: string[]`\n\n- `topic_id?: string[]`\n\n### Returns\n\n- `{ data: { id: string; created_at: string; platforms: object[]; prompt: string; prompt_type: string; regions: object[]; topic: object; tags?: object[]; }[]; info: { limit: number; next_cursor: string; total_rows: number; }; }`\n\n  - `data: { id: string; created_at: string; platforms: { id: string; name: string; }[]; prompt: string; prompt_type: string; regions: { id: string; name: string; }[]; topic: { id: string; name: string; }; tags?: { id: string; name: string; }[]; }[]`\n  - `info: { limit: number; next_cursor: string; total_rows: number; }`\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst response = await client.organizations.categories.prompts('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
  },
  {
    name: 'tags',
    endpoint: '/v1/org/categories/{category_id}/tags',
    httpMethod: 'get',
    summary: 'Get Category Tags',
    description: 'Get the organization tags for a specific category.',
    stainlessPath: '(resource) organizations.categories > (method) tags',
    qualified: 'client.organizations.categories.tags',
    params: ['category_id: string;'],
    response: '{ id: string; name: string; }[]',
    markdown:
      "## tags\n\n`client.organizations.categories.tags(category_id: string): object[]`\n\n**get** `/v1/org/categories/{category_id}/tags`\n\nGet the organization tags for a specific category.\n\n### Parameters\n\n- `category_id: string`\n\n### Returns\n\n- `{ id: string; name: string; }[]`\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst namedResources = await client.organizations.categories.tags('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(namedResources);\n```",
  },
  {
    name: 'topics',
    endpoint: '/v1/org/categories/{category_id}/topics',
    httpMethod: 'get',
    summary: 'Get Category Topics',
    description: 'Get the organization categories.',
    stainlessPath: '(resource) organizations.categories > (method) topics',
    qualified: 'client.organizations.categories.topics',
    params: ['category_id: string;'],
    response: '{ id: string; name: string; }[]',
    markdown:
      "## topics\n\n`client.organizations.categories.topics(category_id: string): { id: string; name: string; }[]`\n\n**get** `/v1/org/categories/{category_id}/topics`\n\nGet the organization categories.\n\n### Parameters\n\n- `category_id: string`\n\n### Returns\n\n- `{ id: string; name: string; }[]`\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst response = await client.organizations.categories.topics('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
  },
  {
    name: 'answers',
    endpoint: '/v1/prompts/answers',
    httpMethod: 'post',
    summary: 'Get Answers',
    description: 'Get the answers for the prompts.',
    stainlessPath: '(resource) prompts > (method) answers',
    qualified: 'client.prompts.answers',
    params: [
      'category_id: string;',
      'end_date: string;',
      'start_date: string;',
      "filters?: { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'prompt_type'; operator: string; value: 'visibility' | 'sentiment' | 'visibility' | 'sentiment'[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'asset_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'asset_name'; operator: string; value: string | string[]; }[];",
      'include?: { asset?: boolean; asset_id?: boolean; citations?: boolean; created_at?: boolean; mentions?: boolean; model?: boolean; model_id?: boolean; persona?: boolean; prompt?: boolean; prompt_id?: boolean; prompt_type?: boolean; region?: boolean; response?: boolean; run_id?: boolean; search_queries?: boolean; sentiment_themes?: boolean; tags?: boolean; themes?: boolean; topic?: boolean; topic_id?: boolean; };',
      'pagination?: { limit?: number; offset?: number; };',
    ],
    response:
      "{ data: { asset?: string; asset_id?: string; citations?: string[]; created_at?: string; mentions?: string[]; model?: string; model_id?: string; persona?: string; prompt?: string; prompt_id?: string; prompt_type?: string; region?: string; response?: string; run_id?: string; search_queries?: string[]; sentiment_themes?: { name: string; type: 'positive' | 'negative'; }[]; tags?: string[]; themes?: string[]; topic?: string; topic_id?: string; }[]; info: { total_rows: number; }; }",
    markdown:
      "## answers\n\n`client.prompts.answers(category_id: string, end_date: string, start_date: string, filters?: { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'prompt_type'; operator: string; value: 'visibility' | 'sentiment' | 'visibility' | 'sentiment'[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'asset_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'asset_name'; operator: string; value: string | string[]; }[], include?: { asset?: boolean; asset_id?: boolean; citations?: boolean; created_at?: boolean; mentions?: boolean; model?: boolean; model_id?: boolean; persona?: boolean; prompt?: boolean; prompt_id?: boolean; prompt_type?: boolean; region?: boolean; response?: boolean; run_id?: boolean; search_queries?: boolean; sentiment_themes?: boolean; tags?: boolean; themes?: boolean; topic?: boolean; topic_id?: boolean; }, pagination?: { limit?: number; offset?: number; }): { data: object[]; info: object; }`\n\n**post** `/v1/prompts/answers`\n\nGet the answers for the prompts.\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n\n- `start_date: string`\n\n- `filters?: { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'prompt_type'; operator: string; value: 'visibility' | 'sentiment' | 'visibility' | 'sentiment'[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'asset_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'asset_name'; operator: string; value: string | string[]; }[]`\n  List of filters to apply to the answers report.\n\n- `include?: { asset?: boolean; asset_id?: boolean; citations?: boolean; created_at?: boolean; mentions?: boolean; model?: boolean; model_id?: boolean; persona?: boolean; prompt?: boolean; prompt_id?: boolean; prompt_type?: boolean; region?: boolean; response?: boolean; run_id?: boolean; search_queries?: boolean; sentiment_themes?: boolean; tags?: boolean; themes?: boolean; topic?: boolean; topic_id?: boolean; }`\n  - `asset?: boolean`\n  - `asset_id?: boolean`\n  - `citations?: boolean`\n  - `created_at?: boolean`\n  - `mentions?: boolean`\n  - `model?: boolean`\n  - `model_id?: boolean`\n  - `persona?: boolean`\n  - `prompt?: boolean`\n  - `prompt_id?: boolean`\n  - `prompt_type?: boolean`\n  - `region?: boolean`\n  - `response?: boolean`\n  - `run_id?: boolean`\n  - `search_queries?: boolean`\n  - `sentiment_themes?: boolean`\n  - `tags?: boolean`\n  - `themes?: boolean`\n    Use 'sentiment_themes' instead\n  - `topic?: boolean`\n  - `topic_id?: boolean`\n\n- `pagination?: { limit?: number; offset?: number; }`\n  Pagination parameters for the results. Default is 10,000 rows with no offset.\n  - `limit?: number`\n    Maximum number of results to return. Default is 10,000, maximum is 50,000.\n  - `offset?: number`\n    Offset for the results. Used for pagination.\n\n### Returns\n\n- `{ data: { asset?: string; asset_id?: string; citations?: string[]; created_at?: string; mentions?: string[]; model?: string; model_id?: string; persona?: string; prompt?: string; prompt_id?: string; prompt_type?: string; region?: string; response?: string; run_id?: string; search_queries?: string[]; sentiment_themes?: { name: string; type: 'positive' | 'negative'; }[]; tags?: string[]; themes?: string[]; topic?: string; topic_id?: string; }[]; info: { total_rows: number; }; }`\n  Response for the answers endpoint.\n\n  - `data: { asset?: string; asset_id?: string; citations?: string[]; created_at?: string; mentions?: string[]; model?: string; model_id?: string; persona?: string; prompt?: string; prompt_id?: string; prompt_type?: string; region?: string; response?: string; run_id?: string; search_queries?: string[]; sentiment_themes?: { name: string; type: 'positive' | 'negative'; }[]; tags?: string[]; themes?: string[]; topic?: string; topic_id?: string; }[]`\n  - `info: { total_rows: number; }`\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst response = await client.prompts.answers({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: '2019-12-27T18:11:19.117Z',\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(response);\n```",
  },
  {
    name: 'citations',
    endpoint: '/v1/reports/citations',
    httpMethod: 'post',
    summary: 'Query Citations',
    description: 'Get citations for a given category.',
    stainlessPath: '(resource) reports > (method) citations',
    qualified: 'client.reports.citations',
    params: [
      'category_id: string;',
      'end_date: string;',
      "metrics: 'count' | 'citation_share' | 'share_of_voice'[];",
      'start_date: string;',
      "date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week';",
      'dimensions?: string[];',
      "filters?: { field: 'hostname'; operator: string; value: string | string[]; } | { field: 'path'; operator: string; value: string | string[]; } | { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_name'; operator: string; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'url'; operator: string; value: string | string[]; } | { field: 'root_domain'; operator: string; value: string | string[]; } | { field: 'prompt_type'; operator: string; value: 'visibility' | 'sentiment' | 'visibility' | 'sentiment'[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'citation_category'; operator: string; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; }[];",
      'order_by?: object;',
      'pagination?: { limit?: number; offset?: number; };',
    ],
    response:
      '{ data: { dimensions: string[]; metrics: number[]; }[]; info: { total_rows: number; query?: object; }; }',
    markdown:
      "## citations\n\n`client.reports.citations(category_id: string, end_date: string, metrics: 'count' | 'citation_share' | 'share_of_voice'[], start_date: string, date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week', dimensions?: string[], filters?: { field: 'hostname'; operator: string; value: string | string[]; } | { field: 'path'; operator: string; value: string | string[]; } | { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_name'; operator: string; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'url'; operator: string; value: string | string[]; } | { field: 'root_domain'; operator: string; value: string | string[]; } | { field: 'prompt_type'; operator: string; value: 'visibility' | 'sentiment' | 'visibility' | 'sentiment'[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'citation_category'; operator: string; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; }[], order_by?: object, pagination?: { limit?: number; offset?: number; }): { data: report_result[]; info: report_info; }`\n\n**post** `/v1/reports/citations`\n\nGet citations for a given category.\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n  End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.\n\n- `metrics: 'count' | 'citation_share' | 'share_of_voice'[]`\n  Metrics to include. `share_of_voice` is deprecated, use `citation_share` instead.\n\n- `start_date: string`\n  Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.\n\n- `date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week'`\n  Date interval for the report. (only used with date dimension)\n\n- `dimensions?: string[]`\n  Dimensions to group the report by.\n\n- `filters?: { field: 'hostname'; operator: string; value: string | string[]; } | { field: 'path'; operator: string; value: string | string[]; } | { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_name'; operator: string; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'url'; operator: string; value: string | string[]; } | { field: 'root_domain'; operator: string; value: string | string[]; } | { field: 'prompt_type'; operator: string; value: 'visibility' | 'sentiment' | 'visibility' | 'sentiment'[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'citation_category'; operator: string; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; }[]`\n  List of filters to apply to the citations report.\n\n- `order_by?: object`\n  \n    Custom ordering of the report results.\n\n    The order is a record of key-value pairs where:\n    - `key` is the field to order by, which can be a metric and/or `date`, `hostname`, `path` dimensions\n    - `value` is the direction of the order, either `asc` for ascending or `desc` for descending.\n\n    When not specified, the default order is the first metric in the query descending.\n            \n\n- `pagination?: { limit?: number; offset?: number; }`\n  Pagination settings for the report results.\n  - `limit?: number`\n    Maximum number of results to return. Default is 10,000, maximum is 50,000.\n  - `offset?: number`\n    Offset for the results. Used for pagination.\n\n### Returns\n\n- `{ data: { dimensions: string[]; metrics: number[]; }[]; info: { total_rows: number; query?: object; }; }`\n\n  - `data: { dimensions: string[]; metrics: number[]; }[]`\n  - `info: { total_rows: number; query?: object; }`\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst response = await client.reports.citations({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: '2019-12-27T18:11:19.117Z',\n  metrics: ['count'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(response);\n```",
  },
  {
    name: 'get_bots_report',
    endpoint: '/v1/reports/bots',
    httpMethod: 'post',
    summary: 'Get Bots Report',
    description:
      'Get bot traffic report from the daily aggregated materialized view.\n\nThis endpoint queries pre-aggregated daily bot data, making it efficient\nfor large date ranges and high-traffic sites.\n\nMetrics:\n- count: unique bot visits\n- citations: unique citation events\n- indexing: unique indexing events\n- training: unique training events\n- last_visit: most recent visit timestamp',
    stainlessPath: '(resource) reports > (method) get_bots_report',
    qualified: 'client.reports.getBotsReport',
    params: [
      'domain: string;',
      "metrics: 'count' | 'citations' | 'indexing' | 'training' | 'last_visit'[];",
      'start_date: string;',
      "date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week';",
      "dimensions?: 'date' | 'path' | 'bot_name' | 'bot_provider'[];",
      'end_date?: string;',
      "filters?: { field: 'path'; operator: string; value: string | string[]; } | { field: 'bot_name'; operator: string; value: string | string[]; } | { field: 'bot_provider'; operator: string; value: string | string[]; }[];",
      'order_by?: object;',
      'organization_id?: string;',
      'pagination?: { limit?: number; offset?: number; };',
    ],
    response:
      '{ data: { dimensions: string[]; metrics: number[]; }[]; info: { total_rows: number; query?: object; }; }',
    markdown:
      "## get_bots_report\n\n`client.reports.getBotsReport(domain: string, metrics: 'count' | 'citations' | 'indexing' | 'training' | 'last_visit'[], start_date: string, date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week', dimensions?: 'date' | 'path' | 'bot_name' | 'bot_provider'[], end_date?: string, filters?: { field: 'path'; operator: string; value: string | string[]; } | { field: 'bot_name'; operator: string; value: string | string[]; } | { field: 'bot_provider'; operator: string; value: string | string[]; }[], order_by?: object, organization_id?: string, pagination?: { limit?: number; offset?: number; }): { data: report_result[]; info: report_info; }`\n\n**post** `/v1/reports/bots`\n\nGet bot traffic report from the daily aggregated materialized view.\n\nThis endpoint queries pre-aggregated daily bot data, making it efficient\nfor large date ranges and high-traffic sites.\n\nMetrics:\n- count: unique bot visits\n- citations: unique citation events\n- indexing: unique indexing events\n- training: unique training events\n- last_visit: most recent visit timestamp\n\n### Parameters\n\n- `domain: string`\n  Domain to query logs for.\n\n- `metrics: 'count' | 'citations' | 'indexing' | 'training' | 'last_visit'[]`\n\n- `start_date: string`\n  Start date for logs. Accepts: YYYY-MM-DD, YYYY-MM-DD HH:MM, YYYY-MM-DD HH:MM:SS, or full ISO timestamp.\n\n- `date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week'`\n  Date interval for the report. (only used with date dimension)\n\n- `dimensions?: 'date' | 'path' | 'bot_name' | 'bot_provider'[]`\n  Dimensions to group the report by.\n\n- `end_date?: string`\n  End date for logs. Accepts same formats as start_date. Defaults to now if omitted.\n\n- `filters?: { field: 'path'; operator: string; value: string | string[]; } | { field: 'bot_name'; operator: string; value: string | string[]; } | { field: 'bot_provider'; operator: string; value: string | string[]; }[]`\n  Filters for bots report.\n\n- `order_by?: object`\n  \nCustom ordering of the report results.\n\nThe order is a record of key-value pairs where:\n- key is the field to order by, which can be a metric or dimension\n- value is the direction of the order, either 'asc' for ascending or 'desc' for descending.\n\nWhen not specified, the default order is the first metric in the query descending.\n        \n\n- `organization_id?: string`\n\n- `pagination?: { limit?: number; offset?: number; }`\n  Pagination settings for the report results.\n  - `limit?: number`\n    Maximum number of results to return. Default is 10,000, maximum is 50,000.\n  - `offset?: number`\n    Offset for the results. Used for pagination.\n\n### Returns\n\n- `{ data: { dimensions: string[]; metrics: number[]; }[]; info: { total_rows: number; query?: object; }; }`\n  Base response model for reports.\n\n  - `data: { dimensions: string[]; metrics: number[]; }[]`\n  - `info: { total_rows: number; query?: object; }`\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst reportResponse = await client.reports.getBotsReport({\n  domain: 'domain',\n  metrics: ['count'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(reportResponse);\n```",
  },
  {
    name: 'get_bots_report_v2',
    endpoint: '/v2/reports/bots',
    httpMethod: 'post',
    summary: 'Get Bots Report',
    description:
      'Get bot traffic report from the hourly aggregated materialized view (UTC-based).\n\nSupports date_interval="day" (default, UTC daily buckets) or "hour" (UTC hourly buckets).\n\nMetrics:\n- count: unique bot visits\n- citations: unique citation events (ai_assistant bot type)\n- indexing: unique indexing events (index bot type)\n- training: unique training events (ai_training bot type)\n- last_visit: most recent visit timestamp\n\nDimensions:\n- date, path, bot_name, bot_provider, bot_type',
    stainlessPath: '(resource) reports > (method) get_bots_report_v2',
    qualified: 'client.reports.getBotsReportV2',
    params: [
      'domain: string;',
      "metrics: 'count' | 'citations' | 'indexing' | 'training' | 'last_visit'[];",
      'start_date: string;',
      "date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week';",
      "dimensions?: 'date' | 'hour' | 'path' | 'bot_name' | 'bot_provider' | 'bot_type'[];",
      'end_date?: string;',
      "filters?: { field: 'path'; operator: string; value: string | string[]; } | { field: 'bot_name'; operator: string; value: string | string[]; } | { field: 'bot_provider'; operator: string; value: string | string[]; } | { field: 'bot_type'; operator: string; value: string; }[];",
      'order_by?: object;',
      'organization_id?: string;',
      'pagination?: { limit?: number; offset?: number; };',
    ],
    response:
      '{ data: { dimensions: string[]; metrics: number[]; }[]; info: { total_rows: number; query?: object; }; }',
    markdown:
      "## get_bots_report_v2\n\n`client.reports.getBotsReportV2(domain: string, metrics: 'count' | 'citations' | 'indexing' | 'training' | 'last_visit'[], start_date: string, date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week', dimensions?: 'date' | 'hour' | 'path' | 'bot_name' | 'bot_provider' | 'bot_type'[], end_date?: string, filters?: { field: 'path'; operator: string; value: string | string[]; } | { field: 'bot_name'; operator: string; value: string | string[]; } | { field: 'bot_provider'; operator: string; value: string | string[]; } | { field: 'bot_type'; operator: string; value: string; }[], order_by?: object, organization_id?: string, pagination?: { limit?: number; offset?: number; }): { data: report_result[]; info: report_info; }`\n\n**post** `/v2/reports/bots`\n\nGet bot traffic report from the hourly aggregated materialized view (UTC-based).\n\nSupports date_interval=\"day\" (default, UTC daily buckets) or \"hour\" (UTC hourly buckets).\n\nMetrics:\n- count: unique bot visits\n- citations: unique citation events (ai_assistant bot type)\n- indexing: unique indexing events (index bot type)\n- training: unique training events (ai_training bot type)\n- last_visit: most recent visit timestamp\n\nDimensions:\n- date, path, bot_name, bot_provider, bot_type\n\n### Parameters\n\n- `domain: string`\n  Domain to query logs for.\n\n- `metrics: 'count' | 'citations' | 'indexing' | 'training' | 'last_visit'[]`\n\n- `start_date: string`\n  Start date for logs. Accepts: YYYY-MM-DD, YYYY-MM-DD HH:MM, YYYY-MM-DD HH:MM:SS, or full ISO timestamp.\n\n- `date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week'`\n  Date interval for the report. (only used with date dimension)\n\n- `dimensions?: 'date' | 'hour' | 'path' | 'bot_name' | 'bot_provider' | 'bot_type'[]`\n  Dimensions to group the report by.\n\n- `end_date?: string`\n  End date in UTC. Accepts same formats as start_date. Defaults to now UTC if omitted.\n\n- `filters?: { field: 'path'; operator: string; value: string | string[]; } | { field: 'bot_name'; operator: string; value: string | string[]; } | { field: 'bot_provider'; operator: string; value: string | string[]; } | { field: 'bot_type'; operator: string; value: string; }[]`\n  Filters for bots report.\n\n- `order_by?: object`\n  \nCustom ordering of the report results.\n\nThe order is a record of key-value pairs where:\n- key is the field to order by, which can be a metric or dimension\n- value is the direction of the order, either 'asc' for ascending or 'desc' for descending.\n\nWhen not specified, the default order is the first metric in the query descending.\n        \n\n- `organization_id?: string`\n\n- `pagination?: { limit?: number; offset?: number; }`\n  Pagination settings for the report results.\n  - `limit?: number`\n    Maximum number of results to return. Default is 10,000, maximum is 50,000.\n  - `offset?: number`\n    Offset for the results. Used for pagination.\n\n### Returns\n\n- `{ data: { dimensions: string[]; metrics: number[]; }[]; info: { total_rows: number; query?: object; }; }`\n  Base response model for reports.\n\n  - `data: { dimensions: string[]; metrics: number[]; }[]`\n  - `info: { total_rows: number; query?: object; }`\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst reportResponse = await client.reports.getBotsReportV2({\n  domain: 'domain',\n  metrics: ['count'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(reportResponse);\n```",
  },
  {
    name: 'get_referrals_report',
    endpoint: '/v1/reports/referrals',
    httpMethod: 'post',
    summary: 'Get Referrals Report',
    description:
      'Get referral traffic report from the daily aggregated materialized view.\n\nThis endpoint queries pre-aggregated daily referral data, making it efficient\nfor large date ranges and high-traffic sites.',
    stainlessPath: '(resource) reports > (method) get_referrals_report',
    qualified: 'client.reports.getReferralsReport',
    params: [
      'domain: string;',
      "metrics: 'visits' | 'last_visit'[];",
      'start_date: string;',
      "date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week';",
      "dimensions?: 'date' | 'path' | 'referral_source'[];",
      'end_date?: string;',
      "filters?: { field: 'path'; operator: string; value: string | string[]; } | { field: 'referral_source'; operator: string; value: string | string[]; }[];",
      'order_by?: object;',
      'organization_id?: string;',
      'pagination?: { limit?: number; offset?: number; };',
    ],
    response:
      '{ data: { dimensions: string[]; metrics: number[]; }[]; info: { total_rows: number; query?: object; }; }',
    markdown:
      "## get_referrals_report\n\n`client.reports.getReferralsReport(domain: string, metrics: 'visits' | 'last_visit'[], start_date: string, date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week', dimensions?: 'date' | 'path' | 'referral_source'[], end_date?: string, filters?: { field: 'path'; operator: string; value: string | string[]; } | { field: 'referral_source'; operator: string; value: string | string[]; }[], order_by?: object, organization_id?: string, pagination?: { limit?: number; offset?: number; }): { data: report_result[]; info: report_info; }`\n\n**post** `/v1/reports/referrals`\n\nGet referral traffic report from the daily aggregated materialized view.\n\nThis endpoint queries pre-aggregated daily referral data, making it efficient\nfor large date ranges and high-traffic sites.\n\n### Parameters\n\n- `domain: string`\n  Domain to query logs for.\n\n- `metrics: 'visits' | 'last_visit'[]`\n\n- `start_date: string`\n  Start date for logs. Accepts: YYYY-MM-DD, YYYY-MM-DD HH:MM, YYYY-MM-DD HH:MM:SS, or full ISO timestamp.\n\n- `date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week'`\n  Date interval for the report. (only used with date dimension)\n\n- `dimensions?: 'date' | 'path' | 'referral_source'[]`\n  Dimensions to group the report by.\n\n- `end_date?: string`\n  End date for logs. Accepts same formats as start_date. Defaults to now if omitted.\n\n- `filters?: { field: 'path'; operator: string; value: string | string[]; } | { field: 'referral_source'; operator: string; value: string | string[]; }[]`\n  Filters for referrals report.\n\n- `order_by?: object`\n  \nCustom ordering of the report results.\n\nThe order is a record of key-value pairs where:\n- key is the field to order by, which can be a metric or dimension\n- value is the direction of the order, either 'asc' for ascending or 'desc' for descending.\n\nWhen not specified, the default order is the first metric in the query descending.\n        \n\n- `organization_id?: string`\n\n- `pagination?: { limit?: number; offset?: number; }`\n  Pagination settings for the report results.\n  - `limit?: number`\n    Maximum number of results to return. Default is 10,000, maximum is 50,000.\n  - `offset?: number`\n    Offset for the results. Used for pagination.\n\n### Returns\n\n- `{ data: { dimensions: string[]; metrics: number[]; }[]; info: { total_rows: number; query?: object; }; }`\n  Base response model for reports.\n\n  - `data: { dimensions: string[]; metrics: number[]; }[]`\n  - `info: { total_rows: number; query?: object; }`\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst reportResponse = await client.reports.getReferralsReport({\n  domain: 'domain',\n  metrics: ['visits'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(reportResponse);\n```",
  },
  {
    name: 'get_referrals_report_v2',
    endpoint: '/v2/reports/referrals',
    httpMethod: 'post',
    summary: 'Get Referrals Report',
    description:
      'Get referral traffic report from the hourly aggregated materialized view (UTC-based).\n\nSupports date_interval="day" (default, UTC daily buckets) or "hour" (UTC hourly buckets).',
    stainlessPath: '(resource) reports > (method) get_referrals_report_v2',
    qualified: 'client.reports.getReferralsReportV2',
    params: [
      'domain: string;',
      "metrics: 'visits' | 'last_visit'[];",
      'start_date: string;',
      "date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week';",
      "dimensions?: 'date' | 'hour' | 'path' | 'referral_source' | 'referral_type'[];",
      'end_date?: string;',
      "filters?: { field: 'path'; operator: string; value: string | string[]; } | { field: 'referral_source'; operator: string; value: string | string[]; } | { field: 'referral_type'; operator: string; value: 'internal' | 'referer' | 'utm' | 'none' | 'internal' | 'referer' | 'utm' | 'none'[]; }[];",
      'order_by?: object;',
      'organization_id?: string;',
      'pagination?: { limit?: number; offset?: number; };',
    ],
    response:
      '{ data: { dimensions: string[]; metrics: number[]; }[]; info: { total_rows: number; query?: object; }; }',
    markdown:
      "## get_referrals_report_v2\n\n`client.reports.getReferralsReportV2(domain: string, metrics: 'visits' | 'last_visit'[], start_date: string, date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week', dimensions?: 'date' | 'hour' | 'path' | 'referral_source' | 'referral_type'[], end_date?: string, filters?: { field: 'path'; operator: string; value: string | string[]; } | { field: 'referral_source'; operator: string; value: string | string[]; } | { field: 'referral_type'; operator: string; value: 'internal' | 'referer' | 'utm' | 'none' | 'internal' | 'referer' | 'utm' | 'none'[]; }[], order_by?: object, organization_id?: string, pagination?: { limit?: number; offset?: number; }): { data: report_result[]; info: report_info; }`\n\n**post** `/v2/reports/referrals`\n\nGet referral traffic report from the hourly aggregated materialized view (UTC-based).\n\nSupports date_interval=\"day\" (default, UTC daily buckets) or \"hour\" (UTC hourly buckets).\n\n### Parameters\n\n- `domain: string`\n  Domain to query logs for.\n\n- `metrics: 'visits' | 'last_visit'[]`\n\n- `start_date: string`\n  Start date for logs. Accepts: YYYY-MM-DD, YYYY-MM-DD HH:MM, YYYY-MM-DD HH:MM:SS, or full ISO timestamp.\n\n- `date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week'`\n  Date interval for the report. (only used with date dimension)\n\n- `dimensions?: 'date' | 'hour' | 'path' | 'referral_source' | 'referral_type'[]`\n  Dimensions to group the report by.\n\n- `end_date?: string`\n  End date in UTC. Accepts same formats as start_date. Defaults to now UTC if omitted.\n\n- `filters?: { field: 'path'; operator: string; value: string | string[]; } | { field: 'referral_source'; operator: string; value: string | string[]; } | { field: 'referral_type'; operator: string; value: 'internal' | 'referer' | 'utm' | 'none' | 'internal' | 'referer' | 'utm' | 'none'[]; }[]`\n  Filters for referrals report.\n\n- `order_by?: object`\n  \nCustom ordering of the report results.\n\nThe order is a record of key-value pairs where:\n- key is the field to order by, which can be a metric or dimension\n- value is the direction of the order, either 'asc' for ascending or 'desc' for descending.\n\nWhen not specified, the default order is the first metric in the query descending.\n        \n\n- `organization_id?: string`\n\n- `pagination?: { limit?: number; offset?: number; }`\n  Pagination settings for the report results.\n  - `limit?: number`\n    Maximum number of results to return. Default is 10,000, maximum is 50,000.\n  - `offset?: number`\n    Offset for the results. Used for pagination.\n\n### Returns\n\n- `{ data: { dimensions: string[]; metrics: number[]; }[]; info: { total_rows: number; query?: object; }; }`\n  Base response model for reports.\n\n  - `data: { dimensions: string[]; metrics: number[]; }[]`\n  - `info: { total_rows: number; query?: object; }`\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst reportResponse = await client.reports.getReferralsReportV2({\n  domain: 'domain',\n  metrics: ['visits'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(reportResponse);\n```",
  },
  {
    name: 'query_fanouts',
    endpoint: '/v1/reports/query-fanouts',
    httpMethod: 'post',
    summary: 'Query Fanouts',
    description: 'Query Fanouts',
    stainlessPath: '(resource) reports > (method) query_fanouts',
    qualified: 'client.reports.queryFanouts',
    params: [
      'category_id: string;',
      'end_date: string;',
      "metrics: 'fanouts_per_execution' | 'total_fanouts' | 'share'[];",
      'start_date: string;',
      "date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week';",
      "dimensions?: 'prompt' | 'query' | 'model' | 'region' | 'date'[];",
      "filters?: { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'prompt_type'; operator: string; value: 'visibility' | 'sentiment' | 'visibility' | 'sentiment'[]; }[];",
      'order_by?: object;',
      'pagination?: { limit?: number; offset?: number; };',
    ],
    response:
      '{ data: { dimensions: string[]; metrics: number[]; }[]; info: { total_rows: number; query?: object; }; }',
    markdown:
      "## query_fanouts\n\n`client.reports.queryFanouts(category_id: string, end_date: string, metrics: 'fanouts_per_execution' | 'total_fanouts' | 'share'[], start_date: string, date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week', dimensions?: 'prompt' | 'query' | 'model' | 'region' | 'date'[], filters?: { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'prompt_type'; operator: string; value: 'visibility' | 'sentiment' | 'visibility' | 'sentiment'[]; }[], order_by?: object, pagination?: { limit?: number; offset?: number; }): { data: report_result[]; info: report_info; }`\n\n**post** `/v1/reports/query-fanouts`\n\nQuery Fanouts\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n  End date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.\n\n- `metrics: 'fanouts_per_execution' | 'total_fanouts' | 'share'[]`\n\n- `start_date: string`\n  Start date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.\n\n- `date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week'`\n  Date interval for the report. (only used with date dimension)\n\n- `dimensions?: 'prompt' | 'query' | 'model' | 'region' | 'date'[]`\n  Dimensions to group the report by.\n\n- `filters?: { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'prompt_type'; operator: string; value: 'visibility' | 'sentiment' | 'visibility' | 'sentiment'[]; }[]`\n  Filters to apply to the query fanout report.\n\n- `order_by?: object`\n  Custom ordering. Keys must be a requested metric or the ``date`` dimension. Values are ``asc`` or ``desc``. Defaults to first metric descending.\n\n- `pagination?: { limit?: number; offset?: number; }`\n  Pagination settings for the report results.\n  - `limit?: number`\n    Maximum number of results to return. Default is 10,000, maximum is 50,000.\n  - `offset?: number`\n    Offset for the results. Used for pagination.\n\n### Returns\n\n- `{ data: { dimensions: string[]; metrics: number[]; }[]; info: { total_rows: number; query?: object; }; }`\n  Base response model for reports.\n\n  - `data: { dimensions: string[]; metrics: number[]; }[]`\n  - `info: { total_rows: number; query?: object; }`\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst reportResponse = await client.reports.queryFanouts({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: '2019-12-27T18:11:19.117Z',\n  metrics: ['fanouts_per_execution'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(reportResponse);\n```",
  },
  {
    name: 'sentiment',
    endpoint: '/v1/reports/sentiment',
    httpMethod: 'post',
    summary: 'Query Sentiment',
    description: 'Get citations for a given category.',
    stainlessPath: '(resource) reports > (method) sentiment',
    qualified: 'client.reports.sentiment',
    params: [
      'category_id: string;',
      'end_date: string;',
      "metrics: 'positive' | 'negative' | 'occurrences'[];",
      'start_date: string;',
      "date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week';",
      'dimensions?: string[];',
      "filters?: { field: 'asset_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'asset_name'; operator: string; value: string | string[]; } | { field: 'theme'; operator: string; value: string | string[]; } | { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_name'; operator: string; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; }[];",
      'order_by?: object;',
      'pagination?: { limit?: number; offset?: number; };',
    ],
    response:
      '{ data: { dimensions: string[]; metrics: number[]; }[]; info: { total_rows: number; query?: object; }; }',
    markdown:
      "## sentiment\n\n`client.reports.sentiment(category_id: string, end_date: string, metrics: 'positive' | 'negative' | 'occurrences'[], start_date: string, date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week', dimensions?: string[], filters?: { field: 'asset_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'asset_name'; operator: string; value: string | string[]; } | { field: 'theme'; operator: string; value: string | string[]; } | { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_name'; operator: string; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; }[], order_by?: object, pagination?: { limit?: number; offset?: number; }): { data: report_result[]; info: report_info; }`\n\n**post** `/v1/reports/sentiment`\n\nGet citations for a given category.\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n  End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.\n\n- `metrics: 'positive' | 'negative' | 'occurrences'[]`\n\n- `start_date: string`\n  Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.\n\n- `date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week'`\n  Date interval for the report. (only used with date dimension)\n\n- `dimensions?: string[]`\n  Dimensions to group the report by.\n\n- `filters?: { field: 'asset_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'asset_name'; operator: string; value: string | string[]; } | { field: 'theme'; operator: string; value: string | string[]; } | { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_name'; operator: string; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; }[]`\n  List of filters to apply to the sentiment report.\n\n- `order_by?: object`\n  \nCustom ordering of the report results.\n\nThe order is a record of key-value pairs where:\n- key is the field to order by, which can be a metric or dimension\n- value is the direction of the order, either 'asc' for ascending or 'desc' for descending.\n\nWhen not specified, the default order is the first metric in the query descending.\n        \n\n- `pagination?: { limit?: number; offset?: number; }`\n  Pagination settings for the report results.\n  - `limit?: number`\n    Maximum number of results to return. Default is 10,000, maximum is 50,000.\n  - `offset?: number`\n    Offset for the results. Used for pagination.\n\n### Returns\n\n- `{ data: { dimensions: string[]; metrics: number[]; }[]; info: { total_rows: number; query?: object; }; }`\n  Base response model for reports.\n\n  - `data: { dimensions: string[]; metrics: number[]; }[]`\n  - `info: { total_rows: number; query?: object; }`\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst reportResponse = await client.reports.sentiment({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: '2019-12-27T18:11:19.117Z',\n  metrics: ['positive'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(reportResponse);\n```",
  },
  {
    name: 'visibility',
    endpoint: '/v1/reports/visibility',
    httpMethod: 'post',
    summary: 'Query Visibility',
    description: 'Query visibility report.',
    stainlessPath: '(resource) reports > (method) visibility',
    qualified: 'client.reports.visibility',
    params: [
      'category_id: string;',
      'end_date: string;',
      "metrics: 'share_of_voice' | 'mentions_count' | 'visibility_score' | 'executions' | 'average_position'[];",
      'start_date: string;',
      "date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week';",
      'dimensions?: string[];',
      "filters?: { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_name'; operator: string; value: string | string[]; } | { field: 'asset_name'; operator: string; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; }[];",
      'order_by?: object;',
      'pagination?: { limit?: number; offset?: number; };',
    ],
    response:
      '{ data: { dimensions: string[]; metrics: number[]; }[]; info: { total_rows: number; query?: object; }; }',
    markdown:
      "## visibility\n\n`client.reports.visibility(category_id: string, end_date: string, metrics: 'share_of_voice' | 'mentions_count' | 'visibility_score' | 'executions' | 'average_position'[], start_date: string, date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week', dimensions?: string[], filters?: { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_name'; operator: string; value: string | string[]; } | { field: 'asset_name'; operator: string; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; }[], order_by?: object, pagination?: { limit?: number; offset?: number; }): { data: report_result[]; info: report_info; }`\n\n**post** `/v1/reports/visibility`\n\nQuery visibility report.\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n  End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.\n\n- `metrics: 'share_of_voice' | 'mentions_count' | 'visibility_score' | 'executions' | 'average_position'[]`\n\n- `start_date: string`\n  Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.\n\n- `date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week'`\n  Date interval for the report. (only used with date dimension)\n\n- `dimensions?: string[]`\n  Dimensions to group the report by.\n\n- `filters?: { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_name'; operator: string; value: string | string[]; } | { field: 'asset_name'; operator: string; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; }[]`\n  List of filters to apply to the visibility report.\n\n- `order_by?: object`\n  \nCustom ordering of the report results.\n\nThe order is a record of key-value pairs where:\n- key is the field to order by, which can be a metric or dimension\n- value is the direction of the order, either 'asc' for ascending or 'desc' for descending.\n\nWhen not specified, the default order is the first metric in the query descending.\n        \n\n- `pagination?: { limit?: number; offset?: number; }`\n  Pagination settings for the report results.\n  - `limit?: number`\n    Maximum number of results to return. Default is 10,000, maximum is 50,000.\n  - `offset?: number`\n    Offset for the results. Used for pagination.\n\n### Returns\n\n- `{ data: { dimensions: string[]; metrics: number[]; }[]; info: { total_rows: number; query?: object; }; }`\n  Base response model for reports.\n\n  - `data: { dimensions: string[]; metrics: number[]; }[]`\n  - `info: { total_rows: number; query?: object; }`\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst reportResponse = await client.reports.visibility({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: '2019-12-27T18:11:19.117Z',\n  metrics: ['share_of_voice'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(reportResponse);\n```",
  },
  {
    name: 'bots',
    endpoint: '/v1/logs/raw/bots',
    httpMethod: 'post',
    summary: 'Get Bots',
    description: 'Get identified bot logs with filters',
    stainlessPath: '(resource) logs.raw > (method) bots',
    qualified: 'client.logs.raw.bots',
    params: [
      'domain: string;',
      "metrics: 'count'[];",
      'start_date: string;',
      "date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week';",
      'dimensions?: string[];',
      'end_date?: string;',
      "filters?: { field: 'bot_name'; operator: string; value: string | string[]; } | { field: 'bot_provider'; operator: string; value: string | string[]; } | { field: 'bot_types'; operator: string; value: 'ai_assistant' | 'ai_training' | 'index' | 'ai_assistant' | 'ai_training' | 'index'[]; } | { field: 'method'; operator: string; value: string | string[]; } | { field: 'path'; operator: string; value: string | string[]; } | { field: 'status_code'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: number | number[]; } | { field: 'ip'; operator: string; value: string | string[]; } | { field: 'user_agent'; operator: string; value: string | string[]; } | { field: 'referer'; operator: string; value: string | string[]; } | { field: 'query_params'; operator: string; value: string | string[]; }[];",
      'order_by?: object;',
      'organization_id?: string;',
      'pagination?: { limit?: number; offset?: number; };',
    ],
    response:
      "{ bot_name: string; bot_provider: string; bot_types: 'ai_assistant' | 'ai_training' | 'index' | 'ai_agent'[]; host: string; ip: string; method: string; org_id: string; path: string; status_code: number; timestamp: string; user_agent: string; bytes_sent?: number; duration_ms?: number; query_params?: object; referer?: string; }[] | { data: object[]; info: object; }",
    markdown:
      "## bots\n\n`client.logs.raw.bots(domain: string, metrics: 'count'[], start_date: string, date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week', dimensions?: string[], end_date?: string, filters?: { field: 'bot_name'; operator: string; value: string | string[]; } | { field: 'bot_provider'; operator: string; value: string | string[]; } | { field: 'bot_types'; operator: string; value: 'ai_assistant' | 'ai_training' | 'index' | 'ai_assistant' | 'ai_training' | 'index'[]; } | { field: 'method'; operator: string; value: string | string[]; } | { field: 'path'; operator: string; value: string | string[]; } | { field: 'status_code'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: number | number[]; } | { field: 'ip'; operator: string; value: string | string[]; } | { field: 'user_agent'; operator: string; value: string | string[]; } | { field: 'referer'; operator: string; value: string | string[]; } | { field: 'query_params'; operator: string; value: string | string[]; }[], order_by?: object, organization_id?: string, pagination?: { limit?: number; offset?: number; }): { bot_name: string; bot_provider: string; bot_types: 'ai_assistant' | 'ai_training' | 'index' | 'ai_agent'[]; host: string; ip: string; method: string; org_id: string; path: string; status_code: number; timestamp: string; user_agent: string; bytes_sent?: number; duration_ms?: number; query_params?: object; referer?: string; }[] | object`\n\n**post** `/v1/logs/raw/bots`\n\nGet identified bot logs with filters\n\n### Parameters\n\n- `domain: string`\n  Domain to query logs for.\n\n- `metrics: 'count'[]`\n\n- `start_date: string`\n  Start date for logs. Accepts: YYYY-MM-DD, YYYY-MM-DD HH:MM, YYYY-MM-DD HH:MM:SS, or full ISO timestamp.\n\n- `date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week'`\n  Date interval for the report. (only used with date dimension)\n\n- `dimensions?: string[]`\n  Dimensions to group the report by.\n\n- `end_date?: string`\n  End date for logs. Accepts same formats as start_date. Defaults to now if omitted.\n\n- `filters?: { field: 'bot_name'; operator: string; value: string | string[]; } | { field: 'bot_provider'; operator: string; value: string | string[]; } | { field: 'bot_types'; operator: string; value: 'ai_assistant' | 'ai_training' | 'index' | 'ai_assistant' | 'ai_training' | 'index'[]; } | { field: 'method'; operator: string; value: string | string[]; } | { field: 'path'; operator: string; value: string | string[]; } | { field: 'status_code'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: number | number[]; } | { field: 'ip'; operator: string; value: string | string[]; } | { field: 'user_agent'; operator: string; value: string | string[]; } | { field: 'referer'; operator: string; value: string | string[]; } | { field: 'query_params'; operator: string; value: string | string[]; }[]`\n  List of filters to apply to the bots logs query.\n\n- `order_by?: object`\n  \nCustom ordering of the report results.\n\nThe order is a record of key-value pairs where:\n- key is the field to order by, which can be a metric or dimension\n- value is the direction of the order, either 'asc' for ascending or 'desc' for descending.\n\nWhen not specified, the default order is the first metric in the query descending.\n        \n\n- `organization_id?: string`\n\n- `pagination?: { limit?: number; offset?: number; }`\n  Pagination settings for the report results.\n  - `limit?: number`\n    Maximum number of results to return. Default is 10,000, maximum is 50,000.\n  - `offset?: number`\n    Offset for the results. Used for pagination.\n\n### Returns\n\n- `{ bot_name: string; bot_provider: string; bot_types: 'ai_assistant' | 'ai_training' | 'index' | 'ai_agent'[]; host: string; ip: string; method: string; org_id: string; path: string; status_code: number; timestamp: string; user_agent: string; bytes_sent?: number; duration_ms?: number; query_params?: object; referer?: string; }[] | { data: object[]; info: object; }`\n  Base response model for reports.\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst response = await client.logs.raw.bots({\n  domain: 'domain',\n  metrics: ['count'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(response);\n```",
  },
  {
    name: 'logs',
    endpoint: '/v1/logs/raw',
    httpMethod: 'post',
    summary: 'Get Logs',
    description: 'Get all logs with filters',
    stainlessPath: '(resource) logs.raw > (method) logs',
    qualified: 'client.logs.raw.logs',
    params: [
      'domain: string;',
      "metrics: 'count'[];",
      'start_date: string;',
      "date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week';",
      'dimensions?: string[];',
      'end_date?: string;',
      "filters?: { field: 'method'; operator: string; value: string | string[]; } | { field: 'host'; operator: string; value: string | string[]; } | { field: 'path'; operator: string; value: string | string[]; } | { field: 'status_code'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: number | number[]; } | { field: 'ip'; operator: string; value: string | string[]; } | { field: 'user_agent'; operator: string; value: string | string[]; } | { field: 'referer'; operator: string; value: string | string[]; } | { field: 'provider'; operator: string; value: string | string[]; } | { field: 'query_params'; operator: string; value: string | string[]; } | { field: 'bytes_sent'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: number | number[]; } | { field: 'duration_ms'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: number | number[]; }[];",
      'order_by?: object;',
      'organization_id?: string;',
      'pagination?: { limit?: number; offset?: number; };',
    ],
    response:
      '{ host: string; ip: string; method: string; org_id: string; path: string; status_code: number; timestamp: string; user_agent: string; bytes_sent?: number; duration_ms?: number; query_params?: object; referer?: string; }[] | { data: object[]; info: object; }',
    markdown:
      "## logs\n\n`client.logs.raw.logs(domain: string, metrics: 'count'[], start_date: string, date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week', dimensions?: string[], end_date?: string, filters?: { field: 'method'; operator: string; value: string | string[]; } | { field: 'host'; operator: string; value: string | string[]; } | { field: 'path'; operator: string; value: string | string[]; } | { field: 'status_code'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: number | number[]; } | { field: 'ip'; operator: string; value: string | string[]; } | { field: 'user_agent'; operator: string; value: string | string[]; } | { field: 'referer'; operator: string; value: string | string[]; } | { field: 'provider'; operator: string; value: string | string[]; } | { field: 'query_params'; operator: string; value: string | string[]; } | { field: 'bytes_sent'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: number | number[]; } | { field: 'duration_ms'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: number | number[]; }[], order_by?: object, organization_id?: string, pagination?: { limit?: number; offset?: number; }): { host: string; ip: string; method: string; org_id: string; path: string; status_code: number; timestamp: string; user_agent: string; bytes_sent?: number; duration_ms?: number; query_params?: object; referer?: string; }[] | object`\n\n**post** `/v1/logs/raw`\n\nGet all logs with filters\n\n### Parameters\n\n- `domain: string`\n  Domain to query logs for.\n\n- `metrics: 'count'[]`\n\n- `start_date: string`\n  Start date for logs. Accepts: YYYY-MM-DD, YYYY-MM-DD HH:MM, YYYY-MM-DD HH:MM:SS, or full ISO timestamp.\n\n- `date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week'`\n  Date interval for the report. (only used with date dimension)\n\n- `dimensions?: string[]`\n  Dimensions to group the report by.\n\n- `end_date?: string`\n  End date for logs. Accepts same formats as start_date. Defaults to now if omitted.\n\n- `filters?: { field: 'method'; operator: string; value: string | string[]; } | { field: 'host'; operator: string; value: string | string[]; } | { field: 'path'; operator: string; value: string | string[]; } | { field: 'status_code'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: number | number[]; } | { field: 'ip'; operator: string; value: string | string[]; } | { field: 'user_agent'; operator: string; value: string | string[]; } | { field: 'referer'; operator: string; value: string | string[]; } | { field: 'provider'; operator: string; value: string | string[]; } | { field: 'query_params'; operator: string; value: string | string[]; } | { field: 'bytes_sent'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: number | number[]; } | { field: 'duration_ms'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: number | number[]; }[]`\n  Filters to apply to the logs query.\n\n- `order_by?: object`\n  \nCustom ordering of the report results.\n\nThe order is a record of key-value pairs where:\n- key is the field to order by, which can be a metric or dimension\n- value is the direction of the order, either 'asc' for ascending or 'desc' for descending.\n\nWhen not specified, the default order is the first metric in the query descending.\n        \n\n- `organization_id?: string`\n\n- `pagination?: { limit?: number; offset?: number; }`\n  Pagination settings for the report results.\n  - `limit?: number`\n    Maximum number of results to return. Default is 10,000, maximum is 50,000.\n  - `offset?: number`\n    Offset for the results. Used for pagination.\n\n### Returns\n\n- `{ host: string; ip: string; method: string; org_id: string; path: string; status_code: number; timestamp: string; user_agent: string; bytes_sent?: number; duration_ms?: number; query_params?: object; referer?: string; }[] | { data: object[]; info: object; }`\n  Base response model for reports.\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst response = await client.logs.raw.logs({\n  domain: 'domain',\n  metrics: ['count'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(response);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v1/content/{asset_id}/optimization/{content_id}',
    httpMethod: 'get',
    summary: 'Optimization Analysis',
    description: 'Optimization Analysis',
    stainlessPath: '(resource) content.optimization > (method) retrieve',
    qualified: 'client.content.optimization.retrieve',
    params: ['asset_id: string;', 'content_id: string;'],
    response:
      "{ data: { aeo_content_score: { target_zone: object; value: number; }; analysis: { breakdown: object[]; }; content: { format: 'markdown' | 'html'; value: string; }; inputs: { prompt: object; top_citations: string[]; topic: object; user: object; }; recommendations: { impact: object; status: 'done' | 'pending'; suggestion: object; title: string; }[]; }; }",
    markdown:
      "## retrieve\n\n`client.content.optimization.retrieve(asset_id: string, content_id: string): { data: object; }`\n\n**get** `/v1/content/{asset_id}/optimization/{content_id}`\n\nOptimization Analysis\n\n### Parameters\n\n- `asset_id: string`\n\n- `content_id: string`\n\n### Returns\n\n- `{ data: { aeo_content_score: { target_zone: object; value: number; }; analysis: { breakdown: object[]; }; content: { format: 'markdown' | 'html'; value: string; }; inputs: { prompt: object; top_citations: string[]; topic: object; user: object; }; recommendations: { impact: object; status: 'done' | 'pending'; suggestion: object; title: string; }[]; }; }`\n\n  - `data: { aeo_content_score: { target_zone: { high: number; low: number; }; value: number; }; analysis: { breakdown: { score: number; title: string; weight: number; }[]; }; content: { format: 'markdown' | 'html'; value: string; }; inputs: { prompt: { id: string; name: string; }; top_citations: string[]; topic: { id: string; name: string; }; user: { metadata: object; type: 'file' | 'text' | 'url'; value: string; }; }; recommendations: { impact: { score: number; section: string; }; status: 'done' | 'pending'; suggestion: { rationale: string; text: string; }; title: string; }[]; }`\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst optimization = await client.content.optimization.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { asset_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(optimization);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/content/{asset_id}/optimization',
    httpMethod: 'get',
    summary: 'Optimization List',
    description: 'Optimization List',
    stainlessPath: '(resource) content.optimization > (method) list',
    qualified: 'client.content.optimization.list',
    params: ['asset_id: string;', 'limit?: number;', 'offset?: number;'],
    response:
      "{ data: { id: string; created_at: string; extracted_input: string; status: string; title: string; type: 'file' | 'text' | 'url'; }[]; info: { query: { asset_id: string; pagination?: pagination; }; total_rows: number; }; }",
    markdown:
      "## list\n\n`client.content.optimization.list(asset_id: string, limit?: number, offset?: number): { data: object[]; info: object; }`\n\n**get** `/v1/content/{asset_id}/optimization`\n\nOptimization List\n\n### Parameters\n\n- `asset_id: string`\n\n- `limit?: number`\n  Maximum number of results to return\n\n- `offset?: number`\n  Offset for pagination\n\n### Returns\n\n- `{ data: { id: string; created_at: string; extracted_input: string; status: string; title: string; type: 'file' | 'text' | 'url'; }[]; info: { query: { asset_id: string; pagination?: pagination; }; total_rows: number; }; }`\n\n  - `data: { id: string; created_at: string; extracted_input: string; status: string; title: string; type: 'file' | 'text' | 'url'; }[]`\n  - `info: { query: { asset_id: string; pagination?: { limit?: number; offset?: number; }; }; total_rows: number; }`\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst optimizations = await client.content.optimization.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(optimizations);\n```",
  },
  {
    name: 'create_volume',
    endpoint: '/v1/prompt-volumes/volume',
    httpMethod: 'post',
    summary: 'Get Volume',
    description: 'Get Volume',
    stainlessPath: '(resource) prompt_volumes > (method) create_volume',
    qualified: 'client.promptVolumes.createVolume',
    params: [
      'end_date: string;',
      "metrics: 'volume' | 'change'[];",
      'start_date: string;',
      "date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week';",
      "dimensions?: 'keyword' | 'date' | 'platform' | 'country_code' | 'matching_type' | 'frequency'[];",
      "filters?: { field: 'country_code'; operator: string; value: string | string[]; } | { field: 'frequency'; operator: string; value: string | string[]; } | { field: 'keyword'; operator: string; value: string | string[]; } | { field: 'matching_type'; operator: string; value: string | string[]; } | { field: 'platform'; operator: string; value: string | string[]; }[];",
      'order_by?: object;',
      'pagination?: { limit?: number; offset?: number; };',
    ],
    response: 'object',
    markdown:
      "## create_volume\n\n`client.promptVolumes.createVolume(end_date: string, metrics: 'volume' | 'change'[], start_date: string, date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week', dimensions?: 'keyword' | 'date' | 'platform' | 'country_code' | 'matching_type' | 'frequency'[], filters?: { field: 'country_code'; operator: string; value: string | string[]; } | { field: 'frequency'; operator: string; value: string | string[]; } | { field: 'keyword'; operator: string; value: string | string[]; } | { field: 'matching_type'; operator: string; value: string | string[]; } | { field: 'platform'; operator: string; value: string | string[]; }[], order_by?: object, pagination?: { limit?: number; offset?: number; }): object`\n\n**post** `/v1/prompt-volumes/volume`\n\nGet Volume\n\n### Parameters\n\n- `end_date: string`\n  End date for the query. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.\n\n- `metrics: 'volume' | 'change'[]`\n\n- `start_date: string`\n  Start date for the query. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.\n\n- `date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week'`\n  Date interval for the report. (only used with date dimension)\n\n- `dimensions?: 'keyword' | 'date' | 'platform' | 'country_code' | 'matching_type' | 'frequency'[]`\n  Dimensions to group the report by.\n\n- `filters?: { field: 'country_code'; operator: string; value: string | string[]; } | { field: 'frequency'; operator: string; value: string | string[]; } | { field: 'keyword'; operator: string; value: string | string[]; } | { field: 'matching_type'; operator: string; value: string | string[]; } | { field: 'platform'; operator: string; value: string | string[]; }[]`\n  Filters to apply to the query\n\n- `order_by?: object`\n  \nCustom ordering of the report results.\n\nThe order is a record of key-value pairs where:\n- key is the field to order by, which can be a metric or dimension\n- value is the direction of the order, either 'asc' for ascending or 'desc' for descending.\n\nWhen not specified, the default order is the first metric in the query descending.\n        \n\n- `pagination?: { limit?: number; offset?: number; }`\n  Pagination settings for the report results.\n  - `limit?: number`\n    Maximum number of results to return. Default is 10,000, maximum is 50,000.\n  - `offset?: number`\n    Offset for the results. Used for pagination.\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst response = await client.promptVolumes.createVolume({\n  end_date: '2019-12-27T18:11:19.117Z',\n  metrics: ['volume'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(response);\n```",
  },
  {
    name: 'list_citation_prompts',
    endpoint: '/v1/prompt-volumes/citation-prompts',
    httpMethod: 'get',
    summary: 'Get Citation Prompts',
    description: 'Get Citation Prompts',
    stainlessPath: '(resource) prompt_volumes > (method) list_citation_prompts',
    qualified: 'client.promptVolumes.listCitationPrompts',
    params: ['input_domain: string;'],
    response: 'object',
    markdown:
      "## list_citation_prompts\n\n`client.promptVolumes.listCitationPrompts(input_domain: string): object`\n\n**get** `/v1/prompt-volumes/citation-prompts`\n\nGet Citation Prompts\n\n### Parameters\n\n- `input_domain: string`\n  Domain to look up (e.g. ramp.com)\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst response = await client.promptVolumes.listCitationPrompts({ input_domain: 'xxx' });\n\nconsole.log(response);\n```",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.2,
    boost: {
      name: 3,
      endpoint: 2,
      summary: 2,
      qualified: 2,
      content: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  // Note: Language is accepted for interface consistency with remote search, but currently has no
  // effect since this local search only supports TypeScript docs.
  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex.search(query).map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          fullResults.push({
            method: m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          this.indexProse(content, file.name);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

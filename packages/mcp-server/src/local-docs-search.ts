// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

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
  perLanguage?: Record<string, PerLanguageData>;
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
    name: 'regions',
    endpoint: '/v1/org/regions',
    httpMethod: 'get',
    summary: 'Get Regions',
    description: 'Get the organization regions.',
    stainlessPath: '(resource) organizations > (method) regions',
    qualified: 'client.organizations.regions',
    params: ['organization_ids?: string[];'],
    response: '{ id: string; name: string; }[]',
    markdown:
      "## regions\n\n`client.organizations.regions(organization_ids?: string[]): object[]`\n\n**get** `/v1/org/regions`\n\nGet the organization regions.\n\n### Parameters\n\n- `organization_ids?: string[]`\n  Restrict results to one or more organizations the caller belongs to. Repeat the parameter to target multiple orgs (e.g. `?organization_ids=<id1>&organization_ids=<id2>`). Omit to return data from every organization the caller has access to.\n\n### Returns\n\n- `{ id: string; name: string; }[]`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst namedResources = await client.organizations.regions();\n\nconsole.log(namedResources);\n```",
    perLanguage: {
      typescript: {
        method: 'client.organizations.regions',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst namedResources = await client.organizations.regions();\n\nconsole.log(namedResources);",
      },
      python: {
        method: 'organizations.regions',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nnamed_resources = client.organizations.regions()\nprint(named_resources)',
      },
      http: {
        example: 'curl https://api.tryprofound.com/v1/org/regions \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
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
      "## models\n\n`client.organizations.models(): object[]`\n\n**get** `/v1/org/models`\n\nGet the organization models.\n\n### Returns\n\n- `{ id: string; name: string; }[]`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst namedResources = await client.organizations.models();\n\nconsole.log(namedResources);\n```",
    perLanguage: {
      typescript: {
        method: 'client.organizations.models',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst namedResources = await client.organizations.models();\n\nconsole.log(namedResources);",
      },
      python: {
        method: 'organizations.models',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nnamed_resources = client.organizations.models()\nprint(named_resources)',
      },
      http: {
        example: 'curl https://api.tryprofound.com/v1/org/models \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
  },
  {
    name: 'domains',
    endpoint: '/v1/org/domains',
    httpMethod: 'get',
    summary: 'Get Domains',
    description: 'Get the organization domains.',
    stainlessPath: '(resource) organizations > (method) domains',
    qualified: 'client.organizations.domains',
    params: ['organization_ids?: string[];'],
    response:
      '{ id: string; created_at: string; name: string; organization: { id: string; name: string; }; }[]',
    markdown:
      "## domains\n\n`client.organizations.domains(organization_ids?: string[]): { id: string; created_at: string; name: string; organization: organization; }[]`\n\n**get** `/v1/org/domains`\n\nGet the organization domains.\n\n### Parameters\n\n- `organization_ids?: string[]`\n  Restrict results to one or more organizations the caller belongs to. Repeat the parameter to target multiple orgs (e.g. `?organization_ids=<id1>&organization_ids=<id2>`). Omit to return data from every organization the caller has access to.\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; organization: { id: string; name: string; }; }[]`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.organizations.domains();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.organizations.domains',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.organizations.domains();\n\nconsole.log(response);",
      },
      python: {
        method: 'organizations.domains',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.organizations.domains()\nprint(response)',
      },
      http: {
        example: 'curl https://api.tryprofound.com/v1/org/domains \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
  },
  {
    name: 'list_assets',
    endpoint: '/v1/org/assets',
    httpMethod: 'get',
    summary: 'Get Assets',
    description:
      "Get the organization assets, one row per (asset, organization) pair.\n\nAn asset's category can belong to multiple organizations; one asset row is\nemitted per owning org so no association is silently dropped.",
    stainlessPath: '(resource) organizations > (method) list_assets',
    qualified: 'client.organizations.listAssets',
    params: ['organization_ids?: string[];'],
    response:
      '{ data: { id: string; category: object; created_at: string; is_owned: boolean; logo_url: string; name: string; organization: object; website: string; alternate_domains?: string[]; }[]; }',
    markdown:
      "## list_assets\n\n`client.organizations.listAssets(organization_ids?: string[]): { data: object[]; }`\n\n**get** `/v1/org/assets`\n\nGet the organization assets, one row per (asset, organization) pair.\n\nAn asset's category can belong to multiple organizations; one asset row is\nemitted per owning org so no association is silently dropped.\n\n### Parameters\n\n- `organization_ids?: string[]`\n  Restrict results to one or more organizations the caller belongs to. Repeat the parameter to target multiple orgs (e.g. `?organization_ids=<id1>&organization_ids=<id2>`). Omit to return data from every organization the caller has access to.\n\n### Returns\n\n- `{ data: { id: string; category: object; created_at: string; is_owned: boolean; logo_url: string; name: string; organization: object; website: string; alternate_domains?: string[]; }[]; }`\n\n  - `data: { id: string; category: { id: string; name: string; internal_name?: string; }; created_at: string; is_owned: boolean; logo_url: string; name: string; organization: { id: string; name: string; }; website: string; alternate_domains?: string[]; }[]`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.organizations.listAssets();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.organizations.listAssets',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.organizations.listAssets();\n\nconsole.log(response.data);",
      },
      python: {
        method: 'organizations.list_assets',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.organizations.list_assets()\nprint(response.data)',
      },
      http: {
        example: 'curl https://api.tryprofound.com/v1/org/assets \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
  },
  {
    name: 'get_personas',
    endpoint: '/v1/org/personas',
    httpMethod: 'get',
    summary: 'Get Personas',
    description:
      "Get the organization personas, one row per (persona, organization) pair.\n\nSame (item, org) fan-out as ``get_assets``: a persona's category can be\nowned by multiple orgs, and each owning org gets its own row so no\nassociation is silently dropped.",
    stainlessPath: '(resource) organizations > (method) get_personas',
    qualified: 'client.organizations.getPersonas',
    params: ['organization_ids?: string[];'],
    response:
      '{ data: { id: string; category: object; name: string; organization: object; persona: object; }[]; }',
    markdown:
      "## get_personas\n\n`client.organizations.getPersonas(organization_ids?: string[]): { data: object[]; }`\n\n**get** `/v1/org/personas`\n\nGet the organization personas, one row per (persona, organization) pair.\n\nSame (item, org) fan-out as ``get_assets``: a persona's category can be\nowned by multiple orgs, and each owning org gets its own row so no\nassociation is silently dropped.\n\n### Parameters\n\n- `organization_ids?: string[]`\n  Restrict results to one or more organizations the caller belongs to. Repeat the parameter to target multiple orgs (e.g. `?organization_ids=<id1>&organization_ids=<id2>`). Omit to return data from every organization the caller has access to.\n\n### Returns\n\n- `{ data: { id: string; category: object; name: string; organization: object; persona: object; }[]; }`\n\n  - `data: { id: string; category: { id: string; name: string; internal_name?: string; }; name: string; organization: { id: string; name: string; }; persona: { behavior: object; demographics: object; employment: object; }; }[]`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.organizations.getPersonas();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.organizations.getPersonas',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.organizations.getPersonas();\n\nconsole.log(response.data);",
      },
      python: {
        method: 'organizations.get_personas',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.organizations.get_personas()\nprint(response.data)',
      },
      http: {
        example: 'curl https://api.tryprofound.com/v1/org/personas \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/org',
    httpMethod: 'get',
    summary: 'List organizations',
    description:
      "Return every organization the caller's API key grants access to. Use this to discover organization IDs before calling endpoints that accept an `organization_id` filter.",
    stainlessPath: '(resource) organizations > (method) list',
    qualified: 'client.organizations.list',
    response: '{ id: string; name: string; }[]',
    markdown:
      "## list\n\n`client.organizations.list(): object[]`\n\n**get** `/v1/org`\n\nReturn every organization the caller's API key grants access to. Use this to discover organization IDs before calling endpoints that accept an `organization_id` filter.\n\n### Returns\n\n- `{ id: string; name: string; }[]`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst organizations = await client.organizations.list();\n\nconsole.log(organizations);\n```",
    perLanguage: {
      typescript: {
        method: 'client.organizations.list',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst organizations = await client.organizations.list();\n\nconsole.log(organizations);",
      },
      python: {
        method: 'organizations.list',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\norganizations = client.organizations.list()\nprint(organizations)',
      },
      http: {
        example: 'curl https://api.tryprofound.com/v1/org \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/org/categories',
    httpMethod: 'get',
    summary: 'Get Categories',
    description: 'Get the organization categories, one row per (category, organization) pair.',
    stainlessPath: '(resource) organizations.categories > (method) list',
    qualified: 'client.organizations.categories.list',
    params: ['organization_ids?: string[];'],
    response:
      '{ id: string; name: string; organization: { id: string; name: string; }; internal_name?: string; }[]',
    markdown:
      "## list\n\n`client.organizations.categories.list(organization_ids?: string[]): { id: string; name: string; organization: organization; internal_name?: string; }[]`\n\n**get** `/v1/org/categories`\n\nGet the organization categories, one row per (category, organization) pair.\n\n### Parameters\n\n- `organization_ids?: string[]`\n  Restrict results to one or more organizations the caller belongs to. Repeat the parameter to target multiple orgs (e.g. `?organization_ids=<id1>&organization_ids=<id2>`). Omit to return data from every organization the caller has access to.\n\n### Returns\n\n- `{ id: string; name: string; organization: { id: string; name: string; }; internal_name?: string; }[]`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst categories = await client.organizations.categories.list();\n\nconsole.log(categories);\n```",
    perLanguage: {
      typescript: {
        method: 'client.organizations.categories.list',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst categories = await client.organizations.categories.list();\n\nconsole.log(categories);",
      },
      python: {
        method: 'organizations.categories.list',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\ncategories = client.organizations.categories.list()\nprint(categories)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/org/categories \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
  },
  {
    name: 'topics',
    endpoint: '/v1/org/categories/{category_id}/topics',
    httpMethod: 'get',
    summary: 'Get Category Topics',
    description: 'Get the topics for a specific category.',
    stainlessPath: '(resource) organizations.categories > (method) topics',
    qualified: 'client.organizations.categories.topics',
    params: ['category_id: string;'],
    response: "{ id: string; name: string; status: 'active' | 'disabled'; }[]",
    markdown:
      "## topics\n\n`client.organizations.categories.topics(category_id: string): { id: string; name: string; status: 'active' | 'disabled'; }[]`\n\n**get** `/v1/org/categories/{category_id}/topics`\n\nGet the topics for a specific category.\n\n### Parameters\n\n- `category_id: string`\n\n### Returns\n\n- `{ id: string; name: string; status: 'active' | 'disabled'; }[]`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.organizations.categories.topics('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.organizations.categories.topics',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.organizations.categories.topics(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(response);",
      },
      python: {
        method: 'organizations.categories.topics',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.organizations.categories.topics(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/org/categories/$CATEGORY_ID/topics \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
  },
  {
    name: 'tags',
    endpoint: '/v1/org/categories/{category_id}/tags',
    httpMethod: 'get',
    summary: 'Get Category Tags',
    description: 'Get the tags for a specific category.',
    stainlessPath: '(resource) organizations.categories > (method) tags',
    qualified: 'client.organizations.categories.tags',
    params: ['category_id: string;'],
    response: '{ id: string; name: string; }[]',
    markdown:
      "## tags\n\n`client.organizations.categories.tags(category_id: string): { id: string; name: string; }[]`\n\n**get** `/v1/org/categories/{category_id}/tags`\n\nGet the tags for a specific category.\n\n### Parameters\n\n- `category_id: string`\n\n### Returns\n\n- `{ id: string; name: string; }[]`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.organizations.categories.tags('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.organizations.categories.tags',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.organizations.categories.tags('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);",
      },
      python: {
        method: 'organizations.categories.tags',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.organizations.categories.tags(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/org/categories/$CATEGORY_ID/tags \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
  },
  {
    name: 'prompts',
    endpoint: '/v1/org/categories/{category_id}/prompts',
    httpMethod: 'get',
    summary: 'List prompts',
    description:
      'Retrieve prompts in a category with optional filtering by type, topic, tag, region, platform, or persona. Supports cursor-based pagination.',
    stainlessPath: '(resource) organizations.categories > (method) prompts',
    qualified: 'client.organizations.categories.prompts',
    params: [
      'category_id: string;',
      "analysis_type?: 'visibility' | 'sentiment' | 'sentiment_v2' | 'accuracy'[];",
      'cursor?: string;',
      'limit?: number;',
      "order_by?: 'created_at' | 'prompt';",
      "order_dir?: 'asc' | 'desc';",
      'persona_id?: string[];',
      'platform_id?: string[];',
      "prompt_type?: 'visibility' | 'sentiment'[];",
      'region_id?: string[];',
      "status?: 'active' | 'disabled'[];",
      'tag_id?: string[];',
      'topic_id?: string[];',
    ],
    response:
      "{ data: { id: string; created_at: string; language: string; platforms: object[]; prompt: string; regions: object[]; status: 'active' | 'disabled'; topic: object; updated_at: string; analysis_types?: 'visibility' | 'sentiment' | 'sentiment_v2' | 'accuracy'[]; personas?: object[]; prompt_type?: string; tags?: object[]; }[]; info: { limit: number; next_cursor: string; total_rows: number; }; }",
    markdown:
      "## prompts\n\n`client.organizations.categories.prompts(category_id: string, analysis_type?: 'visibility' | 'sentiment' | 'sentiment_v2' | 'accuracy'[], cursor?: string, limit?: number, order_by?: 'created_at' | 'prompt', order_dir?: 'asc' | 'desc', persona_id?: string[], platform_id?: string[], prompt_type?: 'visibility' | 'sentiment'[], region_id?: string[], status?: 'active' | 'disabled'[], tag_id?: string[], topic_id?: string[]): { data: object[]; info: object; }`\n\n**get** `/v1/org/categories/{category_id}/prompts`\n\nRetrieve prompts in a category with optional filtering by type, topic, tag, region, platform, or persona. Supports cursor-based pagination.\n\n### Parameters\n\n- `category_id: string`\n\n- `analysis_type?: 'visibility' | 'sentiment' | 'sentiment_v2' | 'accuracy'[]`\n  Filter by analysis type (visibility, sentiment, accuracy).\n\n- `cursor?: string`\n  Pagination cursor from a previous response.\n\n- `limit?: number`\n  Maximum number of prompts to return.\n\n- `order_by?: 'created_at' | 'prompt'`\n  Field used to order prompts.\n\n- `order_dir?: 'asc' | 'desc'`\n  Sort direction for the selected order field.\n\n- `persona_id?: string[]`\n  Filter by persona IDs.\n\n- `platform_id?: string[]`\n  Filter by platform IDs.\n\n- `prompt_type?: 'visibility' | 'sentiment'[]`\n  Deprecated. Use analysis_type instead.\n\n- `region_id?: string[]`\n  Filter by region IDs.\n\n- `status?: 'active' | 'disabled'[]`\n  Filter by prompt status. Defaults to `active` only.\n\n- `tag_id?: string[]`\n  Filter by tag IDs.\n\n- `topic_id?: string[]`\n  Filter by topic IDs.\n\n### Returns\n\n- `{ data: { id: string; created_at: string; language: string; platforms: object[]; prompt: string; regions: object[]; status: 'active' | 'disabled'; topic: object; updated_at: string; analysis_types?: 'visibility' | 'sentiment' | 'sentiment_v2' | 'accuracy'[]; personas?: object[]; prompt_type?: string; tags?: object[]; }[]; info: { limit: number; next_cursor: string; total_rows: number; }; }`\n\n  - `data: { id: string; created_at: string; language: string; platforms: { id: string; name: string; }[]; prompt: string; regions: { id: string; name: string; }[]; status: 'active' | 'disabled'; topic: { id: string; name: string; }; updated_at: string; analysis_types?: 'visibility' | 'sentiment' | 'sentiment_v2' | 'accuracy'[]; personas?: { id: string; name: string; }[]; prompt_type?: string; tags?: { id: string; name: string; }[]; }[]`\n  - `info: { limit: number; next_cursor: string; total_rows: number; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.organizations.categories.prompts('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.organizations.categories.prompts',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.organizations.categories.prompts(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(response.data);",
      },
      python: {
        method: 'organizations.categories.prompts',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.organizations.categories.prompts(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/org/categories/$CATEGORY_ID/prompts \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
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
      "## assets\n\n`client.organizations.categories.assets(category_id: string): { id: string; created_at: string; is_owned: boolean; logo_url: string; name: string; website: string; alternate_domains?: string[]; }[]`\n\n**get** `/v1/org/categories/{category_id}/assets`\n\nGet Category Assets\n\n### Parameters\n\n- `category_id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; is_owned: boolean; logo_url: string; name: string; website: string; alternate_domains?: string[]; }[]`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.organizations.categories.assets('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.organizations.categories.assets',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.organizations.categories.assets(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(response);",
      },
      python: {
        method: 'organizations.categories.assets',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.organizations.categories.assets(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/org/categories/$CATEGORY_ID/assets \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
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
      "## get_category_personas\n\n`client.organizations.categories.getCategoryPersonas(category_id: string): { data: object[]; }`\n\n**get** `/v1/org/categories/{category_id}/personas`\n\nGet Category Personas\n\n### Parameters\n\n- `category_id: string`\n\n### Returns\n\n- `{ data: { id: string; name: string; persona: object; }[]; }`\n\n  - `data: { id: string; name: string; persona: { behavior: object; demographics: object; employment: object; }; }[]`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.organizations.categories.getCategoryPersonas('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.organizations.categories.getCategoryPersonas',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.organizations.categories.getCategoryPersonas(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(response.data);",
      },
      python: {
        method: 'organizations.categories.get_category_personas',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.organizations.categories.get_category_personas(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/org/categories/$CATEGORY_ID/personas \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
  },
  {
    name: 'create_prompts',
    endpoint: '/v1/org/categories/{category_id}/prompts',
    httpMethod: 'post',
    summary: 'Create prompts',
    description:
      'Create one or more prompts in a category. Topics and tags are auto-created if referenced by name and not yet existing. Use dry_run to preview without persisting.',
    stainlessPath: '(resource) organizations.categories > (method) create_prompts',
    qualified: 'client.organizations.categories.createPrompts',
    params: [
      'category_id: string;',
      "prompts: { language: string; platforms: { id?: string; name?: string; }[]; prompt: string; regions: { id?: string; name?: string; }[]; topic: { id?: string; name?: string; }; id?: string; analysis_types?: 'visibility' | 'sentiment' | 'sentiment_v2' | 'accuracy'[]; asset?: { id?: string; name?: string; }; personas?: { id?: string; name?: string; }[]; prompt_type?: string; tags?: { id?: string; name?: string; }[]; }[];",
      'dry_run?: boolean;',
    ],
    response:
      "{ dry_run: boolean; created?: number; prompts?: { id: string; language: string; prompt: string; topic: object; analysis_types?: 'visibility' | 'sentiment' | 'sentiment_v2' | 'accuracy'[]; asset?: object; personas?: object[]; platforms?: object[]; regions?: object[]; tags?: object[]; }[]; tags_created?: number; topics_created?: number; }",
    markdown:
      "## create_prompts\n\n`client.organizations.categories.createPrompts(category_id: string, prompts: { language: string; platforms: object[]; prompt: string; regions: object[]; topic: object; id?: string; analysis_types?: 'visibility' | 'sentiment' | 'sentiment_v2' | 'accuracy'[]; asset?: object; personas?: object[]; prompt_type?: string; tags?: object[]; }[], dry_run?: boolean): { dry_run: boolean; created?: number; prompts?: object[]; tags_created?: number; topics_created?: number; }`\n\n**post** `/v1/org/categories/{category_id}/prompts`\n\nCreate one or more prompts in a category. Topics and tags are auto-created if referenced by name and not yet existing. Use dry_run to preview without persisting.\n\n### Parameters\n\n- `category_id: string`\n\n- `prompts: { language: string; platforms: { id?: string; name?: string; }[]; prompt: string; regions: { id?: string; name?: string; }[]; topic: { id?: string; name?: string; }; id?: string; analysis_types?: 'visibility' | 'sentiment' | 'sentiment_v2' | 'accuracy'[]; asset?: { id?: string; name?: string; }; personas?: { id?: string; name?: string; }[]; prompt_type?: string; tags?: { id?: string; name?: string; }[]; }[]`\n  List of prompts to create.\n\n- `dry_run?: boolean`\n  When true, validate and preview changes without persisting them.\n\n### Returns\n\n- `{ dry_run: boolean; created?: number; prompts?: { id: string; language: string; prompt: string; topic: object; analysis_types?: 'visibility' | 'sentiment' | 'sentiment_v2' | 'accuracy'[]; asset?: object; personas?: object[]; platforms?: object[]; regions?: object[]; tags?: object[]; }[]; tags_created?: number; topics_created?: number; }`\n  Response from creating prompts.\n\n  - `dry_run: boolean`\n  - `created?: number`\n  - `prompts?: { id: string; language: string; prompt: string; topic: { id: string; name: string; }; analysis_types?: 'visibility' | 'sentiment' | 'sentiment_v2' | 'accuracy'[]; asset?: { id: string; name: string; }; personas?: { id: string; name: string; }[]; platforms?: { id: string; name: string; }[]; regions?: { id: string; name: string; }[]; tags?: { id: string; name: string; }[]; }[]`\n  - `tags_created?: number`\n  - `topics_created?: number`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.organizations.categories.createPrompts('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { prompts: [{\n  language: 'language',\n  platforms: [{}],\n  prompt: 'x',\n  regions: [{}],\n  topic: {},\n}] });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.organizations.categories.createPrompts',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.organizations.categories.createPrompts(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  {\n    prompts: [\n      {\n        language: 'language',\n        platforms: [{}],\n        prompt: 'x',\n        regions: [{}],\n        topic: {},\n      },\n    ],\n  },\n);\n\nconsole.log(response.dry_run);",
      },
      python: {
        method: 'organizations.categories.create_prompts',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.organizations.categories.create_prompts(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    prompts=[{\n        "language": "language",\n        "platforms": [{}],\n        "prompt": "x",\n        "regions": [{}],\n        "topic": {},\n    }],\n)\nprint(response.dry_run)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/org/categories/$CATEGORY_ID/prompts \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "prompts": [\n            {\n              "language": "language",\n              "platforms": [\n                {}\n              ],\n              "prompt": "x",\n              "regions": [\n                {}\n              ],\n              "topic": {}\n            }\n          ]\n        }\'',
      },
    },
  },
  {
    name: 'update_prompts',
    endpoint: '/v1/org/categories/{category_id}/prompts',
    httpMethod: 'patch',
    summary: 'Update prompts',
    description:
      'Update one or more existing prompts. Only provided fields are changed. Dimension fields (regions, platforms, personas, tags) replace the full set when provided. Use dry_run to preview without persisting.',
    stainlessPath: '(resource) organizations.categories > (method) update_prompts',
    qualified: 'client.organizations.categories.updatePrompts',
    params: [
      'category_id: string;',
      "prompts: { id: string; analysis_types?: 'visibility' | 'sentiment' | 'sentiment_v2' | 'accuracy'[]; asset?: { id?: string; name?: string; }; language?: string; personas?: { id?: string; name?: string; }[]; platforms?: { id?: string; name?: string; }[]; prompt?: string; prompt_type?: string; regions?: { id?: string; name?: string; }[]; tags?: { id?: string; name?: string; }[]; topic?: { id?: string; name?: string; }; }[];",
      'dry_run?: boolean;',
    ],
    response:
      '{ dry_run: boolean; prompts?: { id: string; analysis_types?: object; asset?: object; language?: object; personas?: object; platforms?: object; prompt?: object; regions?: object; tags?: object; topic?: object; }[]; tags_created?: number; topics_created?: number; updated?: number; }',
    markdown:
      "## update_prompts\n\n`client.organizations.categories.updatePrompts(category_id: string, prompts: { id: string; analysis_types?: 'visibility' | 'sentiment' | 'sentiment_v2' | 'accuracy'[]; asset?: object; language?: string; personas?: object[]; platforms?: object[]; prompt?: string; prompt_type?: string; regions?: object[]; tags?: object[]; topic?: object; }[], dry_run?: boolean): { dry_run: boolean; prompts?: object[]; tags_created?: number; topics_created?: number; updated?: number; }`\n\n**patch** `/v1/org/categories/{category_id}/prompts`\n\nUpdate one or more existing prompts. Only provided fields are changed. Dimension fields (regions, platforms, personas, tags) replace the full set when provided. Use dry_run to preview without persisting.\n\n### Parameters\n\n- `category_id: string`\n\n- `prompts: { id: string; analysis_types?: 'visibility' | 'sentiment' | 'sentiment_v2' | 'accuracy'[]; asset?: { id?: string; name?: string; }; language?: string; personas?: { id?: string; name?: string; }[]; platforms?: { id?: string; name?: string; }[]; prompt?: string; prompt_type?: string; regions?: { id?: string; name?: string; }[]; tags?: { id?: string; name?: string; }[]; topic?: { id?: string; name?: string; }; }[]`\n  List of prompt updates. Each entry must include an `id` and at least one field to change.\n\n- `dry_run?: boolean`\n  When true, validate and preview changes without persisting them.\n\n### Returns\n\n- `{ dry_run: boolean; prompts?: { id: string; analysis_types?: object; asset?: object; language?: object; personas?: object; platforms?: object; prompt?: object; regions?: object; tags?: object; topic?: object; }[]; tags_created?: number; topics_created?: number; updated?: number; }`\n  Response from updating prompts.\n\n  - `dry_run: boolean`\n  - `prompts?: { id: string; analysis_types?: { new?: object; old?: object; }; asset?: { new?: object; old?: object; }; language?: { new?: object; old?: object; }; personas?: { added?: object[]; removed?: object[]; }; platforms?: { added?: object[]; removed?: object[]; }; prompt?: { new?: object; old?: object; }; regions?: { added?: object[]; removed?: object[]; }; tags?: { added?: object[]; removed?: object[]; }; topic?: { new?: object; old?: object; }; }[]`\n  - `tags_created?: number`\n  - `topics_created?: number`\n  - `updated?: number`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.organizations.categories.updatePrompts('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { prompts: [{ id: 'id' }] });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.organizations.categories.updatePrompts',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.organizations.categories.updatePrompts(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { prompts: [{ id: 'id' }] },\n);\n\nconsole.log(response.dry_run);",
      },
      python: {
        method: 'organizations.categories.update_prompts',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.organizations.categories.update_prompts(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    prompts=[{\n        "id": "id"\n    }],\n)\nprint(response.dry_run)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/org/categories/$CATEGORY_ID/prompts \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "prompts": [\n            {\n              "id": "id"\n            }\n          ]\n        }\'',
      },
    },
  },
  {
    name: 'update_prompt_status',
    endpoint: '/v1/org/categories/{category_id}/prompts/status',
    httpMethod: 'patch',
    summary: 'Update prompt status',
    description:
      "Bulk-update the status of one or more prompts. Prompts already in the target status are skipped. Use dry_run to preview without persisting.\n\nStatus options:\n- 'active': Prompts will run daily.\n- 'disabled': Prompts will not run moving forward, but historical data is preserved.\n- 'deleted': Prompts are deleted along with historical data",
    stainlessPath: '(resource) organizations.categories > (method) update_prompt_status',
    qualified: 'client.organizations.categories.updatePromptStatus',
    params: [
      'category_id: string;',
      'prompt_ids: string[];',
      "status: 'active' | 'disabled' | 'deleted';",
      'dry_run?: boolean;',
    ],
    response: '{ dry_run: boolean; updated_prompts?: number; }',
    markdown:
      "## update_prompt_status\n\n`client.organizations.categories.updatePromptStatus(category_id: string, prompt_ids: string[], status: 'active' | 'disabled' | 'deleted', dry_run?: boolean): { dry_run: boolean; updated_prompts?: number; }`\n\n**patch** `/v1/org/categories/{category_id}/prompts/status`\n\nBulk-update the status of one or more prompts. Prompts already in the target status are skipped. Use dry_run to preview without persisting.\n\nStatus options:\n- 'active': Prompts will run daily.\n- 'disabled': Prompts will not run moving forward, but historical data is preserved.\n- 'deleted': Prompts are deleted along with historical data\n\n### Parameters\n\n- `category_id: string`\n\n- `prompt_ids: string[]`\n  IDs of the prompts to update.\n\n- `status: 'active' | 'disabled' | 'deleted'`\n  Target status: 'active', 'disabled', or 'deleted'.\n\n- `dry_run?: boolean`\n  When true, validate and preview changes without persisting them.\n\n### Returns\n\n- `{ dry_run: boolean; updated_prompts?: number; }`\n  Response from updating prompt statuses.\n\n  - `dry_run: boolean`\n  - `updated_prompts?: number`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.organizations.categories.updatePromptStatus('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { prompt_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'], status: 'active' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.organizations.categories.updatePromptStatus',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.organizations.categories.updatePromptStatus(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { prompt_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'], status: 'active' },\n);\n\nconsole.log(response.dry_run);",
      },
      python: {
        method: 'organizations.categories.update_prompt_status',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.organizations.categories.update_prompt_status(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    prompt_ids=["182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"],\n    status="active",\n)\nprint(response.dry_run)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/org/categories/$CATEGORY_ID/prompts/status \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "prompt_ids": [\n            "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n          ],\n          "status": "active"\n        }\'',
      },
    },
  },
  {
    name: 'retrieve_regions',
    endpoint: '/v1/org/categories/{category_id}/regions',
    httpMethod: 'get',
    summary: 'Get Category Regions',
    description: 'Get the regions for a specific category.',
    stainlessPath: '(resource) organizations.categories > (method) retrieve_regions',
    qualified: 'client.organizations.categories.retrieveRegions',
    params: ['category_id: string;'],
    response: '{ id: string; name: string; }[]',
    markdown:
      "## retrieve_regions\n\n`client.organizations.categories.retrieveRegions(category_id: string): object[]`\n\n**get** `/v1/org/categories/{category_id}/regions`\n\nGet the regions for a specific category.\n\n### Parameters\n\n- `category_id: string`\n\n### Returns\n\n- `{ id: string; name: string; }[]`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst namedResources = await client.organizations.categories.retrieveRegions('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(namedResources);\n```",
    perLanguage: {
      typescript: {
        method: 'client.organizations.categories.retrieveRegions',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst namedResources = await client.organizations.categories.retrieveRegions(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(namedResources);",
      },
      python: {
        method: 'organizations.categories.retrieve_regions',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nnamed_resources = client.organizations.categories.retrieve_regions(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(named_resources)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/org/categories/$CATEGORY_ID/regions \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
  },
  {
    name: 'get_citation_categories',
    endpoint: '/v1/org/categories/{category_id}/citation-categories',
    httpMethod: 'get',
    summary: 'Get Category Citation Categories',
    description:
      'Get the citation categories for a category: the built-in buckets plus any custom categories.',
    stainlessPath: '(resource) organizations.categories > (method) get_citation_categories',
    qualified: 'client.organizations.categories.getCitationCategories',
    params: ['category_id: string;'],
    response: '{ data: { name: string; value: string; }[]; }',
    markdown:
      "## get_citation_categories\n\n`client.organizations.categories.getCitationCategories(category_id: string): { data: object[]; }`\n\n**get** `/v1/org/categories/{category_id}/citation-categories`\n\nGet the citation categories for a category: the built-in buckets plus any custom categories.\n\n### Parameters\n\n- `category_id: string`\n\n### Returns\n\n- `{ data: { name: string; value: string; }[]; }`\n\n  - `data: { name: string; value: string; }[]`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.organizations.categories.getCitationCategories('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.organizations.categories.getCitationCategories',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.organizations.categories.getCitationCategories(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(response.data);",
      },
      python: {
        method: 'organizations.categories.get_citation_categories',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.organizations.categories.get_citation_categories(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/org/categories/$CATEGORY_ID/citation-categories \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
  },
  {
    name: 'answers',
    endpoint: '/v1/prompts/answers',
    httpMethod: 'post',
    summary: 'Get Answers',
    description: 'Get Answers',
    stainlessPath: '(resource) prompts > (method) answers',
    qualified: 'client.prompts.answers',
    params: [
      'category_id: string;',
      'end_date: string;',
      'start_date: string;',
      "filters?: { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'region_name'; operator: string; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'analysis_type'; operator: string; value: string; } | { field: 'prompt_type'; operator: string; value: 'visibility' | 'sentiment' | 'visibility' | 'sentiment'[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'asset_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'asset_name'; operator: string; value: string | string[]; }[];",
      'include?: { analysis_types?: boolean; asset?: boolean; asset_id?: boolean; citation_details?: boolean; citations?: boolean; created_at?: boolean; mentions?: boolean; model?: boolean; model_id?: boolean; persona?: boolean; prompt?: boolean; prompt_id?: boolean; prompt_type?: boolean; region?: boolean; response?: boolean; run_id?: boolean; search_queries?: boolean; search_triggered?: boolean; sentiment_themes?: boolean; tags?: boolean; themes?: boolean; topic?: boolean; topic_id?: boolean; web_search_results?: boolean; };',
      'pagination?: { limit?: number; offset?: number; };',
    ],
    response:
      "{ data: { analysis_types?: string[]; asset?: string; asset_id?: string; citation_details?: { clean_url: string; hostname: string; path: string; title: string; url: string; citation_category?: string; first_cited_at?: string; groups?: object[]; positions?: number[]; text?: string; }[]; citations?: string[]; created_at?: string; mentions?: string[]; model?: string; model_id?: string; persona?: string; prompt?: string; prompt_id?: string; prompt_type?: string; region?: string; response?: string; run_id?: string; search_queries?: string[]; search_triggered?: boolean; sentiment_themes?: { name: string; type: 'positive' | 'negative'; }[]; tags?: string[]; themes?: string[]; topic?: string; topic_id?: string; web_search_results?: string[]; }[]; info: { total_rows: number; }; }",
    markdown:
      "## answers\n\n`client.prompts.answers(category_id: string, end_date: string, start_date: string, filters?: { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'region_name'; operator: string; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'analysis_type'; operator: string; value: string; } | { field: 'prompt_type'; operator: string; value: 'visibility' | 'sentiment' | 'visibility' | 'sentiment'[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'asset_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'asset_name'; operator: string; value: string | string[]; }[], include?: { analysis_types?: boolean; asset?: boolean; asset_id?: boolean; citation_details?: boolean; citations?: boolean; created_at?: boolean; mentions?: boolean; model?: boolean; model_id?: boolean; persona?: boolean; prompt?: boolean; prompt_id?: boolean; prompt_type?: boolean; region?: boolean; response?: boolean; run_id?: boolean; search_queries?: boolean; search_triggered?: boolean; sentiment_themes?: boolean; tags?: boolean; themes?: boolean; topic?: boolean; topic_id?: boolean; web_search_results?: boolean; }, pagination?: { limit?: number; offset?: number; }): { data: object[]; info: object; }`\n\n**post** `/v1/prompts/answers`\n\nGet Answers\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n\n- `start_date: string`\n\n- `filters?: { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'region_name'; operator: string; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'analysis_type'; operator: string; value: string; } | { field: 'prompt_type'; operator: string; value: 'visibility' | 'sentiment' | 'visibility' | 'sentiment'[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'asset_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'asset_name'; operator: string; value: string | string[]; }[]`\n  List of filters to apply to the answers report.\n\n- `include?: { analysis_types?: boolean; asset?: boolean; asset_id?: boolean; citation_details?: boolean; citations?: boolean; created_at?: boolean; mentions?: boolean; model?: boolean; model_id?: boolean; persona?: boolean; prompt?: boolean; prompt_id?: boolean; prompt_type?: boolean; region?: boolean; response?: boolean; run_id?: boolean; search_queries?: boolean; search_triggered?: boolean; sentiment_themes?: boolean; tags?: boolean; themes?: boolean; topic?: boolean; topic_id?: boolean; web_search_results?: boolean; }`\n  - `analysis_types?: boolean`\n  - `asset?: boolean`\n  - `asset_id?: boolean`\n  - `citation_details?: boolean`\n  - `citations?: boolean`\n  - `created_at?: boolean`\n  - `mentions?: boolean`\n  - `model?: boolean`\n  - `model_id?: boolean`\n  - `persona?: boolean`\n  - `prompt?: boolean`\n  - `prompt_id?: boolean`\n  - `prompt_type?: boolean`\n  - `region?: boolean`\n  - `response?: boolean`\n  - `run_id?: boolean`\n  - `search_queries?: boolean`\n  - `search_triggered?: boolean`\n  - `sentiment_themes?: boolean`\n    Uses legacy sentiment data.\n  - `tags?: boolean`\n  - `themes?: boolean`\n    Use 'sentiment_themes' instead\n  - `topic?: boolean`\n  - `topic_id?: boolean`\n  - `web_search_results?: boolean`\n\n- `pagination?: { limit?: number; offset?: number; }`\n  Pagination parameters for the results. Default is 10,000 rows with no offset.\n  - `limit?: number`\n    Maximum number of results to return. Default is 10,000, maximum is 50,000.\n  - `offset?: number`\n    Offset for the results. Used for pagination.\n\n### Returns\n\n- `{ data: { analysis_types?: string[]; asset?: string; asset_id?: string; citation_details?: { clean_url: string; hostname: string; path: string; title: string; url: string; citation_category?: string; first_cited_at?: string; groups?: object[]; positions?: number[]; text?: string; }[]; citations?: string[]; created_at?: string; mentions?: string[]; model?: string; model_id?: string; persona?: string; prompt?: string; prompt_id?: string; prompt_type?: string; region?: string; response?: string; run_id?: string; search_queries?: string[]; search_triggered?: boolean; sentiment_themes?: { name: string; type: 'positive' | 'negative'; }[]; tags?: string[]; themes?: string[]; topic?: string; topic_id?: string; web_search_results?: string[]; }[]; info: { total_rows: number; }; }`\n  Response for the answers endpoint.\n\n  - `data: { analysis_types?: string[]; asset?: string; asset_id?: string; citation_details?: { clean_url: string; hostname: string; path: string; title: string; url: string; citation_category?: string; first_cited_at?: string; groups?: { group_id: number; group_position: number; }[]; positions?: number[]; text?: string; }[]; citations?: string[]; created_at?: string; mentions?: string[]; model?: string; model_id?: string; persona?: string; prompt?: string; prompt_id?: string; prompt_type?: string; region?: string; response?: string; run_id?: string; search_queries?: string[]; search_triggered?: boolean; sentiment_themes?: { name: string; type: 'positive' | 'negative'; }[]; tags?: string[]; themes?: string[]; topic?: string; topic_id?: string; web_search_results?: string[]; }[]`\n  - `info: { total_rows: number; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.prompts.answers({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: '2019-12-27T18:11:19.117Z',\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.prompts.answers',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.prompts.answers({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: '2019-12-27T18:11:19.117Z',\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'prompts.answers',
        example:
          'import os\nfrom datetime import datetime\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.prompts.answers(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n    start_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/prompts/answers \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "2019-12-27T18:11:19.117Z",\n          "start_date": "2019-12-27T18:11:19.117Z"\n        }\'',
      },
    },
  },
  {
    name: 'answers_v2',
    endpoint: '/v2/prompts/answers',
    httpMethod: 'post',
    summary: 'Query Answers V2',
    description: 'Query Answers V2',
    stainlessPath: '(resource) prompts > (method) answers_v2',
    qualified: 'client.prompts.answersV2',
    params: [
      'category_id: string;',
      'end_date: string;',
      'start_date: string;',
      'cursor?: string;',
      'filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; };',
      'include?: string[];',
      'limit?: number;',
      'max_results?: number;',
    ],
    response:
      '{ data: { analysis_types?: string[]; citation_details?: { clean_url: string; hostname: string; path: string; title: string; url: string; citation_category?: string; first_cited_at?: string; groups?: object[]; positions?: number[]; text?: string; }[]; citations?: string[]; date?: string; mentions?: string[]; model?: { id?: string; name?: string; }; persona?: string; prompt?: string; prompt_id?: string; region?: string; response?: string; run_id?: string; search_queries?: string[]; sentiment_claims?: object[]; tags?: string[]; topic?: string; topic_id?: string; }[]; info: { count: number; end_date: string; include: string[]; models: string[]; start_date: string; filter?: object; next_cursor?: string; total_results?: number; }; }',
    markdown:
      "## answers_v2\n\n`client.prompts.answersV2(category_id: string, end_date: string, start_date: string, cursor?: string, filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }, include?: string[], limit?: number, max_results?: number): { data: object[]; info: object; }`\n\n**post** `/v2/prompts/answers`\n\nQuery Answers V2\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `start_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `cursor?: string`\n\n- `filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }`\n  A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.\n  - `and?: object[]`\n  - `field?: string`\n  - `not?: object`\n  - `op?: string`\n  - `or?: object[]`\n  - `value?: object`\n\n- `include?: string[]`\n  Which row fields to return: `run_id`, `date`, `model`, `topic`, `topic_id`, `region`, `persona`, `tags`, `prompt`, `prompt_id`, `response`, `mentions`, `citations`, `citation_details`, `search_queries`, `analysis_types`, `sentiment_claims`. Omit for all fields except `citation_details`, which must be requested explicitly because it is expensive.\n\n- `limit?: number`\n  Page size; default 10, max 200.\n\n- `max_results?: number`\n  Stream endpoint only: cap the number of streamed rows (default: all).\n\n### Returns\n\n- `{ data: { analysis_types?: string[]; citation_details?: { clean_url: string; hostname: string; path: string; title: string; url: string; citation_category?: string; first_cited_at?: string; groups?: object[]; positions?: number[]; text?: string; }[]; citations?: string[]; date?: string; mentions?: string[]; model?: { id?: string; name?: string; }; persona?: string; prompt?: string; prompt_id?: string; region?: string; response?: string; run_id?: string; search_queries?: string[]; sentiment_claims?: object[]; tags?: string[]; topic?: string; topic_id?: string; }[]; info: { count: number; end_date: string; include: string[]; models: string[]; start_date: string; filter?: object; next_cursor?: string; total_results?: number; }; }`\n\n  - `data: { analysis_types?: string[]; citation_details?: { clean_url: string; hostname: string; path: string; title: string; url: string; citation_category?: string; first_cited_at?: string; groups?: { group_id: number; group_position: number; }[]; positions?: number[]; text?: string; }[]; citations?: string[]; date?: string; mentions?: string[]; model?: { id?: string; name?: string; }; persona?: string; prompt?: string; prompt_id?: string; region?: string; response?: string; run_id?: string; search_queries?: string[]; sentiment_claims?: object[]; tags?: string[]; topic?: string; topic_id?: string; }[]`\n  - `info: { count: number; end_date: string; include: string[]; models: string[]; start_date: string; filter?: object; next_cursor?: string; total_results?: number; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.prompts.answersV2({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.prompts.answersV2',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.prompts.answersV2({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'prompts.answers_v2',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.prompts.answers_v2(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date="end_date",\n    start_date="start_date",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v2/prompts/answers \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "end_date",\n          "start_date": "start_date"\n        }\'',
      },
    },
  },
  {
    name: 'stream_answers_v2',
    endpoint: '/v2/prompts/answers/stream',
    httpMethod: 'post',
    summary: 'Stream Answers V2',
    description: 'Stream Answers V2',
    stainlessPath: '(resource) prompts > (method) stream_answers_v2',
    qualified: 'client.prompts.streamAnswersV2',
    params: [
      'category_id: string;',
      'end_date: string;',
      'start_date: string;',
      'cursor?: string;',
      'filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; };',
      'include?: string[];',
      'limit?: number;',
      'max_results?: number;',
    ],
    response:
      '{ count: number; end_date: string; include: string[]; models: string[]; start_date: string; filter?: object; next_cursor?: string; total_results?: number; } | { analysis_types?: string[]; citation_details?: { clean_url: string; hostname: string; path: string; title: string; url: string; citation_category?: string; first_cited_at?: string; groups?: { group_id: number; group_position: number; }[]; positions?: number[]; text?: string; }[]; citations?: string[]; date?: string; mentions?: string[]; model?: { id?: string; name?: string; }; persona?: string; prompt?: string; prompt_id?: string; region?: string; response?: string; run_id?: string; search_queries?: string[]; sentiment_claims?: object[]; tags?: string[]; topic?: string; topic_id?: string; }',
    markdown:
      "## stream_answers_v2\n\n`client.prompts.streamAnswersV2(category_id: string, end_date: string, start_date: string, cursor?: string, filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }, include?: string[], limit?: number, max_results?: number): { count: number; end_date: string; include: string[]; models: string[]; start_date: string; filter?: object; next_cursor?: string; total_results?: number; } | { analysis_types?: string[]; citation_details?: object[]; citations?: string[]; date?: string; mentions?: string[]; model?: object; persona?: string; prompt?: string; prompt_id?: string; region?: string; response?: string; run_id?: string; search_queries?: string[]; sentiment_claims?: object[]; tags?: string[]; topic?: string; topic_id?: string; }`\n\n**post** `/v2/prompts/answers/stream`\n\nStream Answers V2\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `start_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `cursor?: string`\n\n- `filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }`\n  A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.\n  - `and?: object[]`\n  - `field?: string`\n  - `not?: object`\n  - `op?: string`\n  - `or?: object[]`\n  - `value?: object`\n\n- `include?: string[]`\n  Which row fields to return: `run_id`, `date`, `model`, `topic`, `topic_id`, `region`, `persona`, `tags`, `prompt`, `prompt_id`, `response`, `mentions`, `citations`, `citation_details`, `search_queries`, `analysis_types`, `sentiment_claims`. Omit for all fields except `citation_details`, which must be requested explicitly because it is expensive.\n\n- `limit?: number`\n  Page size; default 10, max 200.\n\n- `max_results?: number`\n  Stream endpoint only: cap the number of streamed rows (default: all).\n\n### Returns\n\n- `{ count: number; end_date: string; include: string[]; models: string[]; start_date: string; filter?: object; next_cursor?: string; total_results?: number; } | { analysis_types?: string[]; citation_details?: { clean_url: string; hostname: string; path: string; title: string; url: string; citation_category?: string; first_cited_at?: string; groups?: { group_id: number; group_position: number; }[]; positions?: number[]; text?: string; }[]; citations?: string[]; date?: string; mentions?: string[]; model?: { id?: string; name?: string; }; persona?: string; prompt?: string; prompt_id?: string; region?: string; response?: string; run_id?: string; search_queries?: string[]; sentiment_claims?: object[]; tags?: string[]; topic?: string; topic_id?: string; }`\n  `summary` event payload (the report `info` block).\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst stream = await client.prompts.streamAnswersV2({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\nfor await (const promptStreamAnswersV2Response of stream) {\n  console.log(promptStreamAnswersV2Response);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.prompts.streamAnswersV2',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.prompts.streamAnswersV2({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response);",
      },
      python: {
        method: 'prompts.stream_answers_v2',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nfor prompt in client.prompts.stream_answers_v2(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date="end_date",\n    start_date="start_date",\n):\n  print(prompt)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v2/prompts/answers/stream \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "end_date",\n          "start_date": "start_date"\n        }\'',
      },
    },
  },
  {
    name: 'citations',
    endpoint: '/v1/reports/citations',
    httpMethod: 'post',
    summary: 'Query Citations',
    description:
      'Get citations for a given category.\n\nThe ``mentioned`` filter supports ``is true`` and ``is false``. It uses the\nlatest page analysis available at or before ``end_date``; pages without an\nanalysis by then are excluded from both values. ``citation_share`` keeps all\notherwise eligible citations in its denominator when this filter is used.',
    stainlessPath: '(resource) reports > (method) citations',
    qualified: 'client.reports.citations',
    params: [
      'category_id: string;',
      'end_date: string;',
      "metrics: 'count' | 'citation_share' | 'share_of_voice' | 'first_cited_at'[];",
      'start_date: string;',
      "date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';",
      'dimensions?: string[];',
      "filters?: { field: 'hostname'; operator: string; value: string | string[]; } | { field: 'path'; operator: string; value: string | string[]; } | { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'region_name'; operator: string; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_name'; operator: string; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_name'; operator: string; value: string | string[]; } | { field: 'url'; operator: string; value: string | string[]; } | { field: 'root_domain'; operator: string; value: string | string[]; } | { field: 'analysis_type'; operator: string; value: string; } | { field: 'prompt_type'; operator: string; value: 'visibility' | 'sentiment' | 'visibility' | 'sentiment'[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'citation_category'; operator: string; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'mentioned'; operator: 'is'; value: boolean | boolean[]; }[];",
      'order_by?: object;',
      'pagination?: { limit?: number; offset?: number; };',
    ],
    response:
      '{ data: { dimensions: string[]; metrics: number | string[]; }[]; info: { total_rows: number; query?: object; }; }',
    markdown:
      "## citations\n\n`client.reports.citations(category_id: string, end_date: string, metrics: 'count' | 'citation_share' | 'share_of_voice' | 'first_cited_at'[], start_date: string, date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week', dimensions?: string[], filters?: { field: 'hostname'; operator: string; value: string | string[]; } | { field: 'path'; operator: string; value: string | string[]; } | { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'region_name'; operator: string; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_name'; operator: string; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_name'; operator: string; value: string | string[]; } | { field: 'url'; operator: string; value: string | string[]; } | { field: 'root_domain'; operator: string; value: string | string[]; } | { field: 'analysis_type'; operator: string; value: string; } | { field: 'prompt_type'; operator: string; value: 'visibility' | 'sentiment' | 'visibility' | 'sentiment'[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'citation_category'; operator: string; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'mentioned'; operator: 'is'; value: boolean | boolean[]; }[], order_by?: object, pagination?: { limit?: number; offset?: number; }): { data: object[]; info: report_info; }`\n\n**post** `/v1/reports/citations`\n\nGet citations for a given category.\n\nThe ``mentioned`` filter supports ``is true`` and ``is false``. It uses the\nlatest page analysis available at or before ``end_date``; pages without an\nanalysis by then are excluded from both values. ``citation_share`` keeps all\notherwise eligible citations in its denominator when this filter is used.\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n  End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.\n\n- `metrics: 'count' | 'citation_share' | 'share_of_voice' | 'first_cited_at'[]`\n  Metrics to include. `share_of_voice` is deprecated, use `citation_share` instead.\n\n- `start_date: string`\n  Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.\n\n- `date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week'`\n  Date interval for the report. (only used with date dimension)\n\n- `dimensions?: string[]`\n  Dimensions to group the report by.\n\n- `filters?: { field: 'hostname'; operator: string; value: string | string[]; } | { field: 'path'; operator: string; value: string | string[]; } | { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'region_name'; operator: string; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_name'; operator: string; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_name'; operator: string; value: string | string[]; } | { field: 'url'; operator: string; value: string | string[]; } | { field: 'root_domain'; operator: string; value: string | string[]; } | { field: 'analysis_type'; operator: string; value: string; } | { field: 'prompt_type'; operator: string; value: 'visibility' | 'sentiment' | 'visibility' | 'sentiment'[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'citation_category'; operator: string; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'mentioned'; operator: 'is'; value: boolean | boolean[]; }[]`\n  List of filters to apply to the citations report.\n\n- `order_by?: object`\n  \n    Custom ordering of the report results.\n\n    The order is a record of key-value pairs where:\n    - `key` is the field to order by, which can be a metric or dimension\n    - `value` is the direction of the order, either `asc` for ascending or `desc` for descending.\n\n    When not specified, the default order is the first metric in the query descending.\n            \n\n- `pagination?: { limit?: number; offset?: number; }`\n  Pagination settings for the report results.\n  - `limit?: number`\n    Maximum number of results to return. Default is 10,000, maximum is 50,000.\n  - `offset?: number`\n    Offset for the results. Used for pagination.\n\n### Returns\n\n- `{ data: { dimensions: string[]; metrics: number | string[]; }[]; info: { total_rows: number; query?: object; }; }`\n\n  - `data: { dimensions: string[]; metrics: number | string[]; }[]`\n  - `info: { total_rows: number; query?: object; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.reports.citations({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: '2019-12-27T18:11:19.117Z',\n  metrics: ['count'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.citations',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.citations({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: '2019-12-27T18:11:19.117Z',\n  metrics: ['count'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'reports.citations',
        example:
          'import os\nfrom datetime import datetime\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.reports.citations(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n    metrics=["count"],\n    start_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/reports/citations \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "2019-12-27T18:11:19.117Z",\n          "metrics": [\n            "count"\n          ],\n          "start_date": "2019-12-27T18:11:19.117Z",\n          "order_by": {\n            "date": "asc"\n          }\n        }\'',
      },
    },
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
      "date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';",
      'dimensions?: string[];',
      "filters?: { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'region_name'; operator: string; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_name'; operator: string; value: string | string[]; } | { field: 'asset_name'; operator: string; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_name'; operator: string; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; }[];",
      'order_by?: object;',
      'pagination?: { limit?: number; offset?: number; };',
    ],
    response:
      '{ data: { dimensions: string[]; metrics: number | string[]; }[]; info: { total_rows: number; query?: object; }; }',
    markdown:
      "## visibility\n\n`client.reports.visibility(category_id: string, end_date: string, metrics: 'share_of_voice' | 'mentions_count' | 'visibility_score' | 'executions' | 'average_position'[], start_date: string, date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week', dimensions?: string[], filters?: { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'region_name'; operator: string; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_name'; operator: string; value: string | string[]; } | { field: 'asset_name'; operator: string; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_name'; operator: string; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; }[], order_by?: object, pagination?: { limit?: number; offset?: number; }): { data: report_result[]; info: report_info; }`\n\n**post** `/v1/reports/visibility`\n\nQuery visibility report.\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n  End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.\n\n- `metrics: 'share_of_voice' | 'mentions_count' | 'visibility_score' | 'executions' | 'average_position'[]`\n\n- `start_date: string`\n  Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.\n\n- `date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week'`\n  Date interval for the report. (only used with date dimension)\n\n- `dimensions?: string[]`\n  Dimensions to group the report by.\n\n- `filters?: { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'region_name'; operator: string; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_name'; operator: string; value: string | string[]; } | { field: 'asset_name'; operator: string; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_name'; operator: string; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; }[]`\n  List of filters to apply to the visibility report.\n\n- `order_by?: object`\n  \nCustom ordering of the report results.\n\nThe order is a record of key-value pairs where:\n- key is the field to order by, which can be a metric or dimension\n- value is the direction of the order, either 'asc' for ascending or 'desc' for descending.\n\nWhen not specified, the default order is the first metric in the query descending.\n        \n\n- `pagination?: { limit?: number; offset?: number; }`\n  Pagination settings for the report results.\n  - `limit?: number`\n    Maximum number of results to return. Default is 10,000, maximum is 50,000.\n  - `offset?: number`\n    Offset for the results. Used for pagination.\n\n### Returns\n\n- `{ data: { dimensions: string[]; metrics: number | string[]; }[]; info: { total_rows: number; query?: object; }; }`\n  Base response model for reports.\n\n  - `data: { dimensions: string[]; metrics: number | string[]; }[]`\n  - `info: { total_rows: number; query?: object; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst reportResponse = await client.reports.visibility({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: '2019-12-27T18:11:19.117Z',\n  metrics: ['share_of_voice'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(reportResponse);\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.visibility',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst reportResponse = await client.reports.visibility({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: '2019-12-27T18:11:19.117Z',\n  metrics: ['share_of_voice'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(reportResponse.data);",
      },
      python: {
        method: 'reports.visibility',
        example:
          'import os\nfrom datetime import datetime\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nreport_response = client.reports.visibility(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n    metrics=["share_of_voice"],\n    start_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n)\nprint(report_response.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/reports/visibility \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "2019-12-27T18:11:19.117Z",\n          "metrics": [\n            "share_of_voice"\n          ],\n          "start_date": "2019-12-27T18:11:19.117Z",\n          "order_by": {\n            "date": "asc"\n          }\n        }\'',
      },
    },
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
      "date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';",
      'dimensions?: string[];',
      "filters?: { field: 'asset_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'asset_name'; operator: string; value: string | string[]; } | { field: 'theme'; operator: string; value: string | string[]; } | { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'region_name'; operator: string; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_name'; operator: string; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_name'; operator: string; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; }[];",
      'order_by?: object;',
      'pagination?: { limit?: number; offset?: number; };',
    ],
    response:
      '{ data: { dimensions: string[]; metrics: number | string[]; }[]; info: { total_rows: number; query?: object; }; }',
    markdown:
      "## sentiment\n\n`client.reports.sentiment(category_id: string, end_date: string, metrics: 'positive' | 'negative' | 'occurrences'[], start_date: string, date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week', dimensions?: string[], filters?: { field: 'asset_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'asset_name'; operator: string; value: string | string[]; } | { field: 'theme'; operator: string; value: string | string[]; } | { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'region_name'; operator: string; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_name'; operator: string; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_name'; operator: string; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; }[], order_by?: object, pagination?: { limit?: number; offset?: number; }): { data: report_result[]; info: report_info; }`\n\n**post** `/v1/reports/sentiment`\n\nGet citations for a given category.\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n  End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.\n\n- `metrics: 'positive' | 'negative' | 'occurrences'[]`\n\n- `start_date: string`\n  Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.\n\n- `date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week'`\n  Date interval for the report. (only used with date dimension)\n\n- `dimensions?: string[]`\n  Dimensions to group the report by.\n\n- `filters?: { field: 'asset_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'asset_name'; operator: string; value: string | string[]; } | { field: 'theme'; operator: string; value: string | string[]; } | { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'region_name'; operator: string; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_name'; operator: string; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_name'; operator: string; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; }[]`\n  List of filters to apply to the sentiment report.\n\n- `order_by?: object`\n  \nCustom ordering of the report results.\n\nThe order is a record of key-value pairs where:\n- key is the field to order by, which can be a metric or dimension\n- value is the direction of the order, either 'asc' for ascending or 'desc' for descending.\n\nWhen not specified, the default order is the first metric in the query descending.\n        \n\n- `pagination?: { limit?: number; offset?: number; }`\n  Pagination settings for the report results.\n  - `limit?: number`\n    Maximum number of results to return. Default is 10,000, maximum is 50,000.\n  - `offset?: number`\n    Offset for the results. Used for pagination.\n\n### Returns\n\n- `{ data: { dimensions: string[]; metrics: number | string[]; }[]; info: { total_rows: number; query?: object; }; }`\n  Base response model for reports.\n\n  - `data: { dimensions: string[]; metrics: number | string[]; }[]`\n  - `info: { total_rows: number; query?: object; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst reportResponse = await client.reports.sentiment({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: '2019-12-27T18:11:19.117Z',\n  metrics: ['positive'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(reportResponse);\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.sentiment',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst reportResponse = await client.reports.sentiment({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: '2019-12-27T18:11:19.117Z',\n  metrics: ['positive'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(reportResponse.data);",
      },
      python: {
        method: 'reports.sentiment',
        example:
          'import os\nfrom datetime import datetime\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nreport_response = client.reports.sentiment(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n    metrics=["positive"],\n    start_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n)\nprint(report_response.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/reports/sentiment \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "2019-12-27T18:11:19.117Z",\n          "metrics": [\n            "positive"\n          ],\n          "start_date": "2019-12-27T18:11:19.117Z",\n          "order_by": {\n            "date": "asc"\n          }\n        }\'',
      },
    },
  },
  {
    name: 'sentiment_v2',
    endpoint: '/v1/reports/sentiment-v2',
    httpMethod: 'post',
    summary: 'Query Sentiment V2',
    description: 'Query Sentiment V2',
    stainlessPath: '(resource) reports > (method) sentiment_v2',
    qualified: 'client.reports.sentimentV2',
    params: [
      'asset_name: string;',
      'category_id: string;',
      'end_date: string;',
      "metrics: 'sentiment' | 'occurrence'[];",
      'start_date: string;',
      'comparison_end_date?: string;',
      'comparison_start_date?: string;',
      "date_bucket?: 'day' | 'week' | 'month';",
      'dimensions?: string[];',
      "filters?: { field: 'model_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'region_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'run_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'theme'; operator: string; value: string | string[]; } | { field: 'claim'; operator: string; value: string | string[]; } | { field: 'theme_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'claim_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'sentiment'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: 'positive' | 'negative' | 'positive' | 'negative'[]; }[];",
      'order_by?: object;',
      'pagination?: { limit?: number; offset?: number; };',
    ],
    response:
      "{ info: { query: object; total_rows: number; }; data?: { scores: { current?: object; previous?: object; }; cited_website_hrefs?: string[]; date?: string; group_ids?: object; group_metadata?: { asset_name?: string; child_count_matching?: number; child_count_total?: number; child_matches_search?: boolean; claim?: string; created_at?: string; model_id?: string; parent_matches_search?: boolean; persona_id?: string; prompt_id?: string; prompt_text?: string; region_id?: string; run_id?: string; sentiment?: 'positive' | 'negative'; theme?: string; topic_id?: string; }; group_names?: object; prev_date?: string; total_count?: number; }[]; }",
    markdown:
      "## sentiment_v2\n\n`client.reports.sentimentV2(asset_name: string, category_id: string, end_date: string, metrics: 'sentiment' | 'occurrence'[], start_date: string, comparison_end_date?: string, comparison_start_date?: string, date_bucket?: 'day' | 'week' | 'month', dimensions?: string[], filters?: { field: 'model_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'region_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'run_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'theme'; operator: string; value: string | string[]; } | { field: 'claim'; operator: string; value: string | string[]; } | { field: 'theme_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'claim_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'sentiment'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: 'positive' | 'negative' | 'positive' | 'negative'[]; }[], order_by?: object, pagination?: { limit?: number; offset?: number; }): { info: object; data?: object[]; }`\n\n**post** `/v1/reports/sentiment-v2`\n\nQuery Sentiment V2\n\n### Parameters\n\n- `asset_name: string`\n\n- `category_id: string`\n\n- `end_date: string`\n  End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.\n\n- `metrics: 'sentiment' | 'occurrence'[]`\n\n- `start_date: string`\n  Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.\n\n- `comparison_end_date?: string`\n  End of the previous period for delta computation.\n\n- `comparison_start_date?: string`\n  Start of the previous period for delta computation.\n\n- `date_bucket?: 'day' | 'week' | 'month'`\n  Date bucket for the report. Only used when dimensions includes date.\n\n- `dimensions?: string[]`\n  Dimensions to group the report by.\n\n- `filters?: { field: 'model_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'region_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'run_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'theme'; operator: string; value: string | string[]; } | { field: 'claim'; operator: string; value: string | string[]; } | { field: 'theme_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'claim_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'sentiment'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: 'positive' | 'negative' | 'positive' | 'negative'[]; }[]`\n  List of filters to apply to the sentiment-v2 report.\n\n- `order_by?: object`\n  Custom ordering of report results. Dimension keys must also be present in dimensions. The sentiment metric orders by positive_sentiment.\n\n- `pagination?: { limit?: number; offset?: number; }`\n  Pagination settings for the report results.\n  - `limit?: number`\n    Maximum number of results to return. Default is 10,000, maximum is 50,000.\n  - `offset?: number`\n    Offset for the results. Used for pagination.\n\n### Returns\n\n- `{ info: { query: object; total_rows: number; }; data?: { scores: { current?: object; previous?: object; }; cited_website_hrefs?: string[]; date?: string; group_ids?: object; group_metadata?: { asset_name?: string; child_count_matching?: number; child_count_total?: number; child_matches_search?: boolean; claim?: string; created_at?: string; model_id?: string; parent_matches_search?: boolean; persona_id?: string; prompt_id?: string; prompt_text?: string; region_id?: string; run_id?: string; sentiment?: 'positive' | 'negative'; theme?: string; topic_id?: string; }; group_names?: object; prev_date?: string; total_count?: number; }[]; }`\n\n  - `info: { query: object; total_rows: number; }`\n  - `data?: { scores: { current?: { assessment_count: number; negative_sentiment: number; positive_sentiment: number; occurrence?: number; response_count?: number; total_response_count?: number; }; previous?: { assessment_count: number; negative_sentiment: number; positive_sentiment: number; occurrence?: number; response_count?: number; total_response_count?: number; }; }; cited_website_hrefs?: string[]; date?: string; group_ids?: object; group_metadata?: { asset_name?: string; child_count_matching?: number; child_count_total?: number; child_matches_search?: boolean; claim?: string; created_at?: string; model_id?: string; parent_matches_search?: boolean; persona_id?: string; prompt_id?: string; prompt_text?: string; region_id?: string; run_id?: string; sentiment?: 'positive' | 'negative'; theme?: string; topic_id?: string; }; group_names?: object; prev_date?: string; total_count?: number; }[]`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.reports.sentimentV2({\n  asset_name: 'asset_name',\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: '2019-12-27T18:11:19.117Z',\n  metrics: ['sentiment'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.sentimentV2',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.sentimentV2({\n  asset_name: 'asset_name',\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: '2019-12-27T18:11:19.117Z',\n  metrics: ['sentiment'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(response.info);",
      },
      python: {
        method: 'reports.sentiment_v2',
        example:
          'import os\nfrom datetime import datetime\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.reports.sentiment_v2(\n    asset_name="asset_name",\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n    metrics=["sentiment"],\n    start_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n)\nprint(response.info)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/reports/sentiment-v2 \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "asset_name": "asset_name",\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "2019-12-27T18:11:19.117Z",\n          "metrics": [\n            "sentiment"\n          ],\n          "start_date": "2019-12-27T18:11:19.117Z",\n          "order_by": {\n            "occurrence": "desc"\n          }\n        }\'',
      },
    },
  },
  {
    name: 'get_referrals_report',
    endpoint: '/v1/reports/referrals',
    httpMethod: 'post',
    summary: 'Get Referrals Report V1',
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
      "metric_filters?: { field: string; operator: '>' | '>=' | '<' | '<=' | '=' | '==' | '!='; value: number; }[];",
      'order_by?: object;',
      'organization_id?: string;',
      'pagination?: { limit?: number; offset?: number; };',
    ],
    response:
      '{ data: { dimensions: string[]; metrics: number | string[]; }[]; info: { total_rows: number; query?: object; }; }',
    markdown:
      "## get_referrals_report\n\n`client.reports.getReferralsReport(domain: string, metrics: 'visits' | 'last_visit'[], start_date: string, date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week', dimensions?: 'date' | 'path' | 'referral_source'[], end_date?: string, filters?: { field: 'path'; operator: string; value: string | string[]; } | { field: 'referral_source'; operator: string; value: string | string[]; }[], metric_filters?: { field: string; operator: '>' | '>=' | '<' | '<=' | '=' | '==' | '!='; value: number; }[], order_by?: object, organization_id?: string, pagination?: { limit?: number; offset?: number; }): { data: report_result[]; info: report_info; }`\n\n**post** `/v1/reports/referrals`\n\nGet referral traffic report from the daily aggregated materialized view.\n\nThis endpoint queries pre-aggregated daily referral data, making it efficient\nfor large date ranges and high-traffic sites.\n\n### Parameters\n\n- `domain: string`\n  Domain to query logs for.\n\n- `metrics: 'visits' | 'last_visit'[]`\n\n- `start_date: string`\n  Start date for logs. Accepts: YYYY-MM-DD, YYYY-MM-DD HH:MM, YYYY-MM-DD HH:MM:SS, or full ISO timestamp.\n\n- `date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week'`\n  Date interval for the report. (only used with date dimension)\n\n- `dimensions?: 'date' | 'path' | 'referral_source'[]`\n  Dimensions to group the report by.\n\n- `end_date?: string`\n  End date for logs. Accepts same formats as start_date. Defaults to now if omitted.\n\n- `filters?: { field: 'path'; operator: string; value: string | string[]; } | { field: 'referral_source'; operator: string; value: string | string[]; }[]`\n  Filters for referrals report.\n\n- `metric_filters?: { field: string; operator: '>' | '>=' | '<' | '<=' | '=' | '==' | '!='; value: number; }[]`\n  Numeric filters applied after report metrics are calculated.\n\n- `order_by?: object`\n  \nCustom ordering of the report results.\n\nThe order is a record of key-value pairs where:\n- key is the field to order by, which can be a metric or dimension\n- value is the direction of the order, either 'asc' for ascending or 'desc' for descending.\n\nWhen not specified, the default order is the first metric in the query descending.\n        \n\n- `organization_id?: string`\n\n- `pagination?: { limit?: number; offset?: number; }`\n  Pagination settings for the report results.\n  - `limit?: number`\n    Maximum number of results to return. Default is 10,000, maximum is 50,000.\n  - `offset?: number`\n    Offset for the results. Used for pagination.\n\n### Returns\n\n- `{ data: { dimensions: string[]; metrics: number | string[]; }[]; info: { total_rows: number; query?: object; }; }`\n  Base response model for reports.\n\n  - `data: { dimensions: string[]; metrics: number | string[]; }[]`\n  - `info: { total_rows: number; query?: object; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst reportResponse = await client.reports.getReferralsReport({\n  domain: 'domain',\n  metrics: ['visits'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(reportResponse);\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.getReferralsReport',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst reportResponse = await client.reports.getReferralsReport({\n  domain: 'domain',\n  metrics: ['visits'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(reportResponse.data);",
      },
      python: {
        method: 'reports.get_referrals_report',
        example:
          'import os\nfrom datetime import datetime\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nreport_response = client.reports.get_referrals_report(\n    domain="domain",\n    metrics=["visits"],\n    start_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n)\nprint(report_response.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/reports/referrals \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "domain": "domain",\n          "metrics": [\n            "visits"\n          ],\n          "start_date": "2019-12-27T18:11:19.117Z",\n          "order_by": {\n            "date": "asc"\n          }\n        }\'',
      },
    },
  },
  {
    name: 'get_bots_report',
    endpoint: '/v1/reports/bots',
    httpMethod: 'post',
    summary: 'Get Bots Report V1',
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
      "metric_filters?: { field: string; operator: '>' | '>=' | '<' | '<=' | '=' | '==' | '!='; value: number; }[];",
      'order_by?: object;',
      'organization_id?: string;',
      'pagination?: { limit?: number; offset?: number; };',
    ],
    response:
      '{ data: { dimensions: string[]; metrics: number | string[]; }[]; info: { total_rows: number; query?: object; }; }',
    markdown:
      "## get_bots_report\n\n`client.reports.getBotsReport(domain: string, metrics: 'count' | 'citations' | 'indexing' | 'training' | 'last_visit'[], start_date: string, date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week', dimensions?: 'date' | 'path' | 'bot_name' | 'bot_provider'[], end_date?: string, filters?: { field: 'path'; operator: string; value: string | string[]; } | { field: 'bot_name'; operator: string; value: string | string[]; } | { field: 'bot_provider'; operator: string; value: string | string[]; }[], metric_filters?: { field: string; operator: '>' | '>=' | '<' | '<=' | '=' | '==' | '!='; value: number; }[], order_by?: object, organization_id?: string, pagination?: { limit?: number; offset?: number; }): { data: report_result[]; info: report_info; }`\n\n**post** `/v1/reports/bots`\n\nGet bot traffic report from the daily aggregated materialized view.\n\nThis endpoint queries pre-aggregated daily bot data, making it efficient\nfor large date ranges and high-traffic sites.\n\nMetrics:\n- count: unique bot visits\n- citations: unique citation events\n- indexing: unique indexing events\n- training: unique training events\n- last_visit: most recent visit timestamp\n\n### Parameters\n\n- `domain: string`\n  Domain to query logs for.\n\n- `metrics: 'count' | 'citations' | 'indexing' | 'training' | 'last_visit'[]`\n\n- `start_date: string`\n  Start date for logs. Accepts: YYYY-MM-DD, YYYY-MM-DD HH:MM, YYYY-MM-DD HH:MM:SS, or full ISO timestamp.\n\n- `date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week'`\n  Date interval for the report. (only used with date dimension)\n\n- `dimensions?: 'date' | 'path' | 'bot_name' | 'bot_provider'[]`\n  Dimensions to group the report by.\n\n- `end_date?: string`\n  End date for logs. Accepts same formats as start_date. Defaults to now if omitted.\n\n- `filters?: { field: 'path'; operator: string; value: string | string[]; } | { field: 'bot_name'; operator: string; value: string | string[]; } | { field: 'bot_provider'; operator: string; value: string | string[]; }[]`\n  Filters for bots report.\n\n- `metric_filters?: { field: string; operator: '>' | '>=' | '<' | '<=' | '=' | '==' | '!='; value: number; }[]`\n  Numeric filters applied after report metrics are calculated.\n\n- `order_by?: object`\n  \nCustom ordering of the report results.\n\nThe order is a record of key-value pairs where:\n- key is the field to order by, which can be a metric or dimension\n- value is the direction of the order, either 'asc' for ascending or 'desc' for descending.\n\nWhen not specified, the default order is the first metric in the query descending.\n        \n\n- `organization_id?: string`\n\n- `pagination?: { limit?: number; offset?: number; }`\n  Pagination settings for the report results.\n  - `limit?: number`\n    Maximum number of results to return. Default is 10,000, maximum is 50,000.\n  - `offset?: number`\n    Offset for the results. Used for pagination.\n\n### Returns\n\n- `{ data: { dimensions: string[]; metrics: number | string[]; }[]; info: { total_rows: number; query?: object; }; }`\n  Base response model for reports.\n\n  - `data: { dimensions: string[]; metrics: number | string[]; }[]`\n  - `info: { total_rows: number; query?: object; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst reportResponse = await client.reports.getBotsReport({\n  domain: 'domain',\n  metrics: ['count'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(reportResponse);\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.getBotsReport',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst reportResponse = await client.reports.getBotsReport({\n  domain: 'domain',\n  metrics: ['count'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(reportResponse.data);",
      },
      python: {
        method: 'reports.get_bots_report',
        example:
          'import os\nfrom datetime import datetime\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nreport_response = client.reports.get_bots_report(\n    domain="domain",\n    metrics=["count"],\n    start_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n)\nprint(report_response.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/reports/bots \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "domain": "domain",\n          "metrics": [\n            "count"\n          ],\n          "start_date": "2019-12-27T18:11:19.117Z",\n          "order_by": {\n            "date": "asc"\n          }\n        }\'',
      },
    },
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
      "metrics: 'fanouts_per_execution' | 'total_fanouts' | 'share' | 'query_variations'[];",
      'start_date: string;',
      "date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';",
      "dimensions?: 'prompt' | 'query' | 'model' | 'region' | 'date'[];",
      "filters?: { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'region_name'; operator: string; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'analysis_type'; operator: string; value: string; } | { field: 'prompt_type'; operator: string; value: 'visibility' | 'sentiment' | 'visibility' | 'sentiment'[]; }[];",
      'order_by?: object;',
      'pagination?: { limit?: number; offset?: number; };',
    ],
    response:
      '{ data: { dimensions: string[]; metrics: number | string[]; }[]; info: { total_rows: number; query?: object; }; }',
    markdown:
      "## query_fanouts\n\n`client.reports.queryFanouts(category_id: string, end_date: string, metrics: 'fanouts_per_execution' | 'total_fanouts' | 'share' | 'query_variations'[], start_date: string, date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week', dimensions?: 'prompt' | 'query' | 'model' | 'region' | 'date'[], filters?: { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'region_name'; operator: string; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'analysis_type'; operator: string; value: string; } | { field: 'prompt_type'; operator: string; value: 'visibility' | 'sentiment' | 'visibility' | 'sentiment'[]; }[], order_by?: object, pagination?: { limit?: number; offset?: number; }): { data: report_result[]; info: report_info; }`\n\n**post** `/v1/reports/query-fanouts`\n\nQuery Fanouts\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n  End date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.\n\n- `metrics: 'fanouts_per_execution' | 'total_fanouts' | 'share' | 'query_variations'[]`\n  Metrics to return for each row.\n\n- `start_date: string`\n  Start date. Accepts YYYY-MM-DD, YYYY-MM-DD HH:MM, or ISO timestamp.\n\n- `date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week'`\n  Date interval for the report. (only used with date dimension)\n\n- `dimensions?: 'prompt' | 'query' | 'model' | 'region' | 'date'[]`\n  Dimensions to group the report by.\n\n- `filters?: { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'region_name'; operator: string; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'analysis_type'; operator: string; value: string; } | { field: 'prompt_type'; operator: string; value: 'visibility' | 'sentiment' | 'visibility' | 'sentiment'[]; }[]`\n  Filters to apply to the query fanout report.\n\n- `order_by?: object`\n  Custom ordering. Keys must be a requested metric or the ``date`` dimension. Values are ``asc`` or ``desc``. Defaults to first metric descending.\n\n- `pagination?: { limit?: number; offset?: number; }`\n  Pagination settings for the report results.\n  - `limit?: number`\n    Maximum number of results to return. Default is 10,000, maximum is 50,000.\n  - `offset?: number`\n    Offset for the results. Used for pagination.\n\n### Returns\n\n- `{ data: { dimensions: string[]; metrics: number | string[]; }[]; info: { total_rows: number; query?: object; }; }`\n  Base response model for reports.\n\n  - `data: { dimensions: string[]; metrics: number | string[]; }[]`\n  - `info: { total_rows: number; query?: object; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst reportResponse = await client.reports.queryFanouts({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: '2019-12-27T18:11:19.117Z',\n  metrics: ['fanouts_per_execution'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(reportResponse);\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.queryFanouts',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst reportResponse = await client.reports.queryFanouts({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: '2019-12-27T18:11:19.117Z',\n  metrics: ['fanouts_per_execution'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(reportResponse.data);",
      },
      python: {
        method: 'reports.query_fanouts',
        example:
          'import os\nfrom datetime import datetime\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nreport_response = client.reports.query_fanouts(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n    metrics=["fanouts_per_execution"],\n    start_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n)\nprint(report_response.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/reports/query-fanouts \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "2019-12-27T18:11:19.117Z",\n          "metrics": [\n            "fanouts_per_execution"\n          ],\n          "start_date": "2019-12-27T18:11:19.117Z",\n          "order_by": {\n            "fanouts_per_execution": "desc"\n          }\n        }\'',
      },
    },
  },
  {
    name: 'stream_citations',
    endpoint: '/v1/reports/citations/stream',
    httpMethod: 'post',
    summary: 'Stream Citations',
    description: 'Stream citations with the same filter semantics as the non-streaming route.',
    stainlessPath: '(resource) reports > (method) stream_citations',
    qualified: 'client.reports.streamCitations',
    params: [
      'category_id: string;',
      'end_date: string;',
      "metrics: 'count' | 'citation_share' | 'share_of_voice' | 'first_cited_at'[];",
      'start_date: string;',
      "date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';",
      'dimensions?: string[];',
      "filters?: { field: 'hostname'; operator: string; value: string | string[]; } | { field: 'path'; operator: string; value: string | string[]; } | { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'region_name'; operator: string; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_name'; operator: string; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_name'; operator: string; value: string | string[]; } | { field: 'url'; operator: string; value: string | string[]; } | { field: 'root_domain'; operator: string; value: string | string[]; } | { field: 'analysis_type'; operator: string; value: string; } | { field: 'prompt_type'; operator: string; value: 'visibility' | 'sentiment' | 'visibility' | 'sentiment'[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'citation_category'; operator: string; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'mentioned'; operator: 'is'; value: boolean | boolean[]; }[];",
      'order_by?: object;',
      'pagination?: { limit?: number; offset?: number; };',
    ],
    response: '{ query: object; total_rows: number; } | object',
    markdown:
      "## stream_citations\n\n`client.reports.streamCitations(category_id: string, end_date: string, metrics: 'count' | 'citation_share' | 'share_of_voice' | 'first_cited_at'[], start_date: string, date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week', dimensions?: string[], filters?: { field: 'hostname'; operator: string; value: string | string[]; } | { field: 'path'; operator: string; value: string | string[]; } | { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'region_name'; operator: string; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_name'; operator: string; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_name'; operator: string; value: string | string[]; } | { field: 'url'; operator: string; value: string | string[]; } | { field: 'root_domain'; operator: string; value: string | string[]; } | { field: 'analysis_type'; operator: string; value: string; } | { field: 'prompt_type'; operator: string; value: 'visibility' | 'sentiment' | 'visibility' | 'sentiment'[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'citation_category'; operator: string; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'mentioned'; operator: 'is'; value: boolean | boolean[]; }[], order_by?: object, pagination?: { limit?: number; offset?: number; }): { query: object; total_rows: number; } | object`\n\n**post** `/v1/reports/citations/stream`\n\nStream citations with the same filter semantics as the non-streaming route.\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n  End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.\n\n- `metrics: 'count' | 'citation_share' | 'share_of_voice' | 'first_cited_at'[]`\n  Metrics to include. `share_of_voice` is deprecated, use `citation_share` instead.\n\n- `start_date: string`\n  Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.\n\n- `date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week'`\n  Date interval for the report. (only used with date dimension)\n\n- `dimensions?: string[]`\n  Dimensions to group the report by.\n\n- `filters?: { field: 'hostname'; operator: string; value: string | string[]; } | { field: 'path'; operator: string; value: string | string[]; } | { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'region_name'; operator: string; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_name'; operator: string; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_name'; operator: string; value: string | string[]; } | { field: 'url'; operator: string; value: string | string[]; } | { field: 'root_domain'; operator: string; value: string | string[]; } | { field: 'analysis_type'; operator: string; value: string; } | { field: 'prompt_type'; operator: string; value: 'visibility' | 'sentiment' | 'visibility' | 'sentiment'[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'citation_category'; operator: string; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'mentioned'; operator: 'is'; value: boolean | boolean[]; }[]`\n  List of filters to apply to the citations report.\n\n- `order_by?: object`\n  \n    Custom ordering of the report results.\n\n    The order is a record of key-value pairs where:\n    - `key` is the field to order by, which can be a metric or dimension\n    - `value` is the direction of the order, either `asc` for ascending or `desc` for descending.\n\n    When not specified, the default order is the first metric in the query descending.\n            \n\n- `pagination?: { limit?: number; offset?: number; }`\n  Offset-based pagination parameters.\n  - `limit?: number`\n    Maximum number of results to return. Default is 10,000, maximum is 50,000.\n  - `offset?: number`\n    Offset for the results. Used for pagination.\n\n### Returns\n\n- `{ query: object; total_rows: number; } | object`\n  A streamed citations report row payload.\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst stream = await client.reports.streamCitations({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: '2019-12-27T18:11:19.117Z',\n  metrics: ['count'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\nfor await (const reportStreamCitationsResponse of stream) {\n  console.log(reportStreamCitationsResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.streamCitations',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.streamCitations({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: '2019-12-27T18:11:19.117Z',\n  metrics: ['count'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(response);",
      },
      python: {
        method: 'reports.stream_citations',
        example:
          'import os\nfrom datetime import datetime\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nfor report in client.reports.stream_citations(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n    metrics=["count"],\n    start_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n):\n  print(report)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/reports/citations/stream \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "2019-12-27T18:11:19.117Z",\n          "metrics": [\n            "count"\n          ],\n          "start_date": "2019-12-27T18:11:19.117Z",\n          "order_by": {\n            "date": "asc"\n          }\n        }\'',
      },
    },
  },
  {
    name: 'stream_visibility',
    endpoint: '/v1/reports/visibility/stream',
    httpMethod: 'post',
    summary: 'Stream Visibility',
    description: 'Stream Visibility',
    stainlessPath: '(resource) reports > (method) stream_visibility',
    qualified: 'client.reports.streamVisibility',
    params: [
      'category_id: string;',
      'end_date: string;',
      "metrics: 'share_of_voice' | 'mentions_count' | 'visibility_score' | 'executions' | 'average_position'[];",
      'start_date: string;',
      "date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';",
      'dimensions?: string[];',
      "filters?: { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'region_name'; operator: string; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_name'; operator: string; value: string | string[]; } | { field: 'asset_name'; operator: string; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_name'; operator: string; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; }[];",
      'order_by?: object;',
      'pagination?: { limit?: number; offset?: number; };',
    ],
    response: '{ query: object; total_rows: number; } | object',
    markdown:
      "## stream_visibility\n\n`client.reports.streamVisibility(category_id: string, end_date: string, metrics: 'share_of_voice' | 'mentions_count' | 'visibility_score' | 'executions' | 'average_position'[], start_date: string, date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week', dimensions?: string[], filters?: { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'region_name'; operator: string; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_name'; operator: string; value: string | string[]; } | { field: 'asset_name'; operator: string; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_name'; operator: string; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; }[], order_by?: object, pagination?: { limit?: number; offset?: number; }): { query: object; total_rows: number; } | object`\n\n**post** `/v1/reports/visibility/stream`\n\nStream Visibility\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n  End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.\n\n- `metrics: 'share_of_voice' | 'mentions_count' | 'visibility_score' | 'executions' | 'average_position'[]`\n\n- `start_date: string`\n  Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.\n\n- `date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week'`\n  Date interval for the report. (only used with date dimension)\n\n- `dimensions?: string[]`\n  Dimensions to group the report by.\n\n- `filters?: { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'region_name'; operator: string; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_name'; operator: string; value: string | string[]; } | { field: 'asset_name'; operator: string; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_name'; operator: string; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; }[]`\n  List of filters to apply to the visibility report.\n\n- `order_by?: object`\n  \nCustom ordering of the report results.\n\nThe order is a record of key-value pairs where:\n- key is the field to order by, which can be a metric or dimension\n- value is the direction of the order, either 'asc' for ascending or 'desc' for descending.\n\nWhen not specified, the default order is the first metric in the query descending.\n        \n\n- `pagination?: { limit?: number; offset?: number; }`\n  Offset-based pagination parameters.\n  - `limit?: number`\n    Maximum number of results to return. Default is 10,000, maximum is 50,000.\n  - `offset?: number`\n    Offset for the results. Used for pagination.\n\n### Returns\n\n- `{ query: object; total_rows: number; } | object`\n  A streamed visibility report row payload.\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst stream = await client.reports.streamVisibility({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: '2019-12-27T18:11:19.117Z',\n  metrics: ['share_of_voice'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\nfor await (const reportStreamVisibilityResponse of stream) {\n  console.log(reportStreamVisibilityResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.streamVisibility',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.streamVisibility({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: '2019-12-27T18:11:19.117Z',\n  metrics: ['share_of_voice'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(response);",
      },
      python: {
        method: 'reports.stream_visibility',
        example:
          'import os\nfrom datetime import datetime\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nfor report in client.reports.stream_visibility(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n    metrics=["share_of_voice"],\n    start_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n):\n  print(report)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/reports/visibility/stream \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "2019-12-27T18:11:19.117Z",\n          "metrics": [\n            "share_of_voice"\n          ],\n          "start_date": "2019-12-27T18:11:19.117Z",\n          "order_by": {\n            "date": "asc"\n          }\n        }\'',
      },
    },
  },
  {
    name: 'stream_sentiment',
    endpoint: '/v1/reports/sentiment/stream',
    httpMethod: 'post',
    summary: 'Stream Sentiment',
    description: 'Stream Sentiment',
    stainlessPath: '(resource) reports > (method) stream_sentiment',
    qualified: 'client.reports.streamSentiment',
    params: [
      'category_id: string;',
      'end_date: string;',
      "metrics: 'positive' | 'negative' | 'occurrences'[];",
      'start_date: string;',
      "date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';",
      'dimensions?: string[];',
      "filters?: { field: 'asset_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'asset_name'; operator: string; value: string | string[]; } | { field: 'theme'; operator: string; value: string | string[]; } | { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'region_name'; operator: string; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_name'; operator: string; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_name'; operator: string; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; }[];",
      'order_by?: object;',
      'pagination?: { limit?: number; offset?: number; };',
    ],
    response: '{ query: object; total_rows: number; } | object',
    markdown:
      "## stream_sentiment\n\n`client.reports.streamSentiment(category_id: string, end_date: string, metrics: 'positive' | 'negative' | 'occurrences'[], start_date: string, date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week', dimensions?: string[], filters?: { field: 'asset_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'asset_name'; operator: string; value: string | string[]; } | { field: 'theme'; operator: string; value: string | string[]; } | { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'region_name'; operator: string; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_name'; operator: string; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_name'; operator: string; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; }[], order_by?: object, pagination?: { limit?: number; offset?: number; }): { query: object; total_rows: number; } | object`\n\n**post** `/v1/reports/sentiment/stream`\n\nStream Sentiment\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n  End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.\n\n- `metrics: 'positive' | 'negative' | 'occurrences'[]`\n\n- `start_date: string`\n  Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.\n\n- `date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week'`\n  Date interval for the report. (only used with date dimension)\n\n- `dimensions?: string[]`\n  Dimensions to group the report by.\n\n- `filters?: { field: 'asset_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'asset_name'; operator: string; value: string | string[]; } | { field: 'theme'; operator: string; value: string | string[]; } | { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'region_name'; operator: string; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_name'; operator: string; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_name'; operator: string; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; }[]`\n  List of filters to apply to the sentiment report.\n\n- `order_by?: object`\n  \nCustom ordering of the report results.\n\nThe order is a record of key-value pairs where:\n- key is the field to order by, which can be a metric or dimension\n- value is the direction of the order, either 'asc' for ascending or 'desc' for descending.\n\nWhen not specified, the default order is the first metric in the query descending.\n        \n\n- `pagination?: { limit?: number; offset?: number; }`\n  Offset-based pagination parameters.\n  - `limit?: number`\n    Maximum number of results to return. Default is 10,000, maximum is 50,000.\n  - `offset?: number`\n    Offset for the results. Used for pagination.\n\n### Returns\n\n- `{ query: object; total_rows: number; } | object`\n  A streamed sentiment report row payload.\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst stream = await client.reports.streamSentiment({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: '2019-12-27T18:11:19.117Z',\n  metrics: ['positive'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\nfor await (const reportStreamSentimentResponse of stream) {\n  console.log(reportStreamSentimentResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.streamSentiment',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.streamSentiment({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: '2019-12-27T18:11:19.117Z',\n  metrics: ['positive'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(response);",
      },
      python: {
        method: 'reports.stream_sentiment',
        example:
          'import os\nfrom datetime import datetime\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nfor report in client.reports.stream_sentiment(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n    metrics=["positive"],\n    start_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n):\n  print(report)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/reports/sentiment/stream \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "2019-12-27T18:11:19.117Z",\n          "metrics": [\n            "positive"\n          ],\n          "start_date": "2019-12-27T18:11:19.117Z",\n          "order_by": {\n            "date": "asc"\n          }\n        }\'',
      },
    },
  },
  {
    name: 'stream_citations_v2',
    endpoint: '/v2/reports/citations/stream',
    httpMethod: 'post',
    summary: 'Stream Citations V2',
    description: 'Stream Citations V2',
    stainlessPath: '(resource) reports > (method) stream_citations_v2',
    qualified: 'client.reports.streamCitationsV2',
    params: [
      'category_id: string;',
      'end_date: string;',
      'start_date: string;',
      'cursor?: string;',
      "entity?: 'domain' | 'page' | 'citation_category';",
      'filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; };',
      "group_by?: 'page' | 'date' | 'model' | 'topic' | 'region' | 'persona' | 'prompt'[];",
      "interval?: 'day' | 'week' | 'month';",
      'limit?: number;',
      'max_results?: number;',
      "metrics?: 'count' | 'citation_share' | 'rank' | 'first_cited_at'[];",
      "scope?: 'all' | 'owned';",
    ],
    response:
      '{ analysis_types: string[]; count: number; end_date: string; metrics: string[]; models: string[]; scope: string; start_date: string; filter?: object; next_cursor?: string; total_results?: number; } | { citation_share?: number; count?: number; date?: string; domain?: string; first_cited_at?: string; model?: { id?: string; name?: string; }; page?: string; persona?: { id?: string; name?: string; }; prompt?: { id?: string; name?: string; }; rank?: number; region?: { id?: string; name?: string; }; topic?: { id?: string; name?: string; }; }',
    markdown:
      "## stream_citations_v2\n\n`client.reports.streamCitationsV2(category_id: string, end_date: string, start_date: string, cursor?: string, entity?: 'domain' | 'page' | 'citation_category', filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }, group_by?: 'page' | 'date' | 'model' | 'topic' | 'region' | 'persona' | 'prompt'[], interval?: 'day' | 'week' | 'month', limit?: number, max_results?: number, metrics?: 'count' | 'citation_share' | 'rank' | 'first_cited_at'[], scope?: 'all' | 'owned'): { analysis_types: string[]; count: number; end_date: string; metrics: string[]; models: string[]; scope: string; start_date: string; filter?: object; next_cursor?: string; total_results?: number; } | { citation_share?: number; count?: number; date?: string; domain?: string; first_cited_at?: string; model?: object; page?: string; persona?: object; prompt?: object; rank?: number; region?: object; topic?: object; }`\n\n**post** `/v2/reports/citations/stream`\n\nStream Citations V2\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `start_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `cursor?: string`\n\n- `entity?: 'domain' | 'page' | 'citation_category'`\n  What each row represents: `domain` (default), `page`, or `citation_category`. Legacy: `group_by: [\"page\"]` (with `entity` omitted) is still accepted and is equivalent to `entity: \"page\"`. `citation_category` uses the dashboard split view: a citation counts under both its page-level and domain-level category, so category shares can sum to more than 100%.\n\n- `filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }`\n  A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.\n  - `and?: object[]`\n  - `field?: string`\n  - `not?: object`\n  - `op?: string`\n  - `or?: object[]`\n  - `value?: object`\n\n- `group_by?: 'page' | 'date' | 'model' | 'topic' | 'region' | 'persona' | 'prompt'[]`\n\n- `interval?: 'day' | 'week' | 'month'`\n\n- `limit?: number`\n  Page size; default 10, max 50.\n\n- `max_results?: number`\n  Stream endpoint only: cap the number of streamed rows (default: all).\n\n- `metrics?: 'count' | 'citation_share' | 'rank' | 'first_cited_at'[]`\n\n- `scope?: 'all' | 'owned'`\n  `all` (every cited domain) or `owned` (only your owned domains). Applies to `entity=domain`.\n\n### Returns\n\n- `{ analysis_types: string[]; count: number; end_date: string; metrics: string[]; models: string[]; scope: string; start_date: string; filter?: object; next_cursor?: string; total_results?: number; } | { citation_share?: number; count?: number; date?: string; domain?: string; first_cited_at?: string; model?: { id?: string; name?: string; }; page?: string; persona?: { id?: string; name?: string; }; prompt?: { id?: string; name?: string; }; rank?: number; region?: { id?: string; name?: string; }; topic?: { id?: string; name?: string; }; }`\n  `summary` event payload (the report `info` block).\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst stream = await client.reports.streamCitationsV2({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\nfor await (const reportStreamCitationsV2Response of stream) {\n  console.log(reportStreamCitationsV2Response);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.streamCitationsV2',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.streamCitationsV2({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response);",
      },
      python: {
        method: 'reports.stream_citations_v2',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nfor report in client.reports.stream_citations_v2(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date="end_date",\n    start_date="start_date",\n):\n  print(report)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v2/reports/citations/stream \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "end_date",\n          "start_date": "start_date"\n        }\'',
      },
    },
  },
  {
    name: 'stream_visibility_v2',
    endpoint: '/v2/reports/visibility/stream',
    httpMethod: 'post',
    summary: 'Stream Visibility V2',
    description: 'Stream Visibility V2',
    stainlessPath: '(resource) reports > (method) stream_visibility_v2',
    qualified: 'client.reports.streamVisibilityV2',
    params: [
      'category_id: string;',
      'end_date: string;',
      'start_date: string;',
      'assets?: string | string[] | { op: string; value: string | string[]; };',
      'cursor?: string;',
      'filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; };',
      "group_by?: 'date' | 'model' | 'topic' | 'region' | 'prompt' | 'persona'[];",
      "interval?: 'day' | 'week' | 'month';",
      'limit?: number;',
      'max_results?: number;',
      "metrics?: 'visibility_score' | 'share_of_voice' | 'average_position'[];",
      "scope?: 'owned' | 'all';",
      "sort?: { field?: 'visibility_score' | 'share_of_voice' | 'average_position'; };",
    ],
    response:
      '{ count: number; end_date: string; models: string[]; scope: string; start_date: string; asset_filter?: object | string[] | string; filter?: object; next_cursor?: string; total_results?: number; } | { asset?: { name?: string; owned?: boolean; }; average_position?: number; date?: string; model?: { id?: string; name?: string; }; persona?: { id?: string; name?: string; }; prompt?: { id?: string; name?: string; }; rank?: number; region?: { id?: string; name?: string; }; share_of_voice?: number; topic?: { id?: string; name?: string; }; visibility_score?: number; }',
    markdown:
      "## stream_visibility_v2\n\n`client.reports.streamVisibilityV2(category_id: string, end_date: string, start_date: string, assets?: string | string[] | { op: string; value: string | string[]; }, cursor?: string, filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }, group_by?: 'date' | 'model' | 'topic' | 'region' | 'prompt' | 'persona'[], interval?: 'day' | 'week' | 'month', limit?: number, max_results?: number, metrics?: 'visibility_score' | 'share_of_voice' | 'average_position'[], scope?: 'owned' | 'all', sort?: { field?: 'visibility_score' | 'share_of_voice' | 'average_position'; }): { count: number; end_date: string; models: string[]; scope: string; start_date: string; asset_filter?: object | string[] | string; filter?: object; next_cursor?: string; total_results?: number; } | { asset?: object; average_position?: number; date?: string; model?: object; persona?: object; prompt?: object; rank?: number; region?: object; share_of_voice?: number; topic?: object; visibility_score?: number; }`\n\n**post** `/v2/reports/visibility/stream`\n\nStream Visibility V2\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `start_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `assets?: string | string[] | { op: string; value: string | string[]; }`\n  A name (`is`), a list (`in`), or {op,value} with op `is`/`in`/`not_in`.\n\n- `cursor?: string`\n\n- `filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }`\n  A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.\n  - `and?: object[]`\n  - `field?: string`\n  - `not?: object`\n  - `op?: string`\n  - `or?: object[]`\n  - `value?: object`\n\n- `group_by?: 'date' | 'model' | 'topic' | 'region' | 'prompt' | 'persona'[]`\n\n- `interval?: 'day' | 'week' | 'month'`\n\n- `limit?: number`\n  Page size; default 10, max 50.\n\n- `max_results?: number`\n  Stream endpoint only: cap the number of streamed rows (default: all).\n\n- `metrics?: 'visibility_score' | 'share_of_voice' | 'average_position'[]`\n\n- `scope?: 'owned' | 'all'`\n\n- `sort?: { field?: 'visibility_score' | 'share_of_voice' | 'average_position'; }`\n  - `field?: 'visibility_score' | 'share_of_voice' | 'average_position'`\n\n### Returns\n\n- `{ count: number; end_date: string; models: string[]; scope: string; start_date: string; asset_filter?: object | string[] | string; filter?: object; next_cursor?: string; total_results?: number; } | { asset?: { name?: string; owned?: boolean; }; average_position?: number; date?: string; model?: { id?: string; name?: string; }; persona?: { id?: string; name?: string; }; prompt?: { id?: string; name?: string; }; rank?: number; region?: { id?: string; name?: string; }; share_of_voice?: number; topic?: { id?: string; name?: string; }; visibility_score?: number; }`\n  `summary` event payload (the report `info` block).\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst stream = await client.reports.streamVisibilityV2({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\nfor await (const reportStreamVisibilityV2Response of stream) {\n  console.log(reportStreamVisibilityV2Response);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.streamVisibilityV2',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.streamVisibilityV2({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response);",
      },
      python: {
        method: 'reports.stream_visibility_v2',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nfor report in client.reports.stream_visibility_v2(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date="end_date",\n    start_date="start_date",\n):\n  print(report)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v2/reports/visibility/stream \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "end_date",\n          "start_date": "start_date"\n        }\'',
      },
    },
  },
  {
    name: 'stream_sentiment_v2',
    endpoint: '/v2/reports/sentiment/stream',
    httpMethod: 'post',
    summary: 'Stream Sentiment V2',
    description: 'Stream Sentiment V2',
    stainlessPath: '(resource) reports > (method) stream_sentiment_v2',
    qualified: 'client.reports.streamSentimentV2',
    params: [
      'asset: string;',
      'category_id: string;',
      'end_date: string;',
      'start_date: string;',
      'comparison_end_date?: string;',
      'comparison_start_date?: string;',
      'cursor?: string;',
      'filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; };',
      'group_by?: string[];',
      'include_cited_websites?: boolean;',
      "interval?: 'day' | 'week' | 'month';",
      'limit?: number;',
      'max_results?: number;',
      "metrics?: 'positive_sentiment' | 'negative_sentiment' | 'occurrence'[];",
      "sort?: { dir?: 'asc' | 'desc'; field?: 'occurrence' | 'positive_sentiment' | 'negative_sentiment'; };",
    ],
    response:
      '{ asset: string; count: number; end_date: string; metrics: string[]; models: string[]; start_date: string; comparison_end_date?: string; comparison_start_date?: string; filter?: object; next_cursor?: string; total_results?: number; } | { cited_websites?: string[]; claim?: { id?: string; name?: string; }; competitor?: { id?: string; name?: string; }; date?: string; model?: { id?: string; name?: string; }; negative_sentiment?: number; occurrence?: number; persona?: { id?: string; name?: string; }; positive_sentiment?: number; prev_date?: string; previous?: { negative_sentiment?: number; occurrence?: number; positive_sentiment?: number; }; prompt?: { id?: string; name?: string; }; rank?: number; region?: { id?: string; name?: string; }; run?: { id?: string; name?: string; }; tag?: { id?: string; name?: string; }; theme?: { id?: string; name?: string; }; topic?: { id?: string; name?: string; }; }',
    markdown:
      "## stream_sentiment_v2\n\n`client.reports.streamSentimentV2(asset: string, category_id: string, end_date: string, start_date: string, comparison_end_date?: string, comparison_start_date?: string, cursor?: string, filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }, group_by?: string[], include_cited_websites?: boolean, interval?: 'day' | 'week' | 'month', limit?: number, max_results?: number, metrics?: 'positive_sentiment' | 'negative_sentiment' | 'occurrence'[], sort?: { dir?: 'asc' | 'desc'; field?: 'occurrence' | 'positive_sentiment' | 'negative_sentiment'; }): { asset: string; count: number; end_date: string; metrics: string[]; models: string[]; start_date: string; comparison_end_date?: string; comparison_start_date?: string; filter?: object; next_cursor?: string; total_results?: number; } | { cited_websites?: string[]; claim?: object; competitor?: object; date?: string; model?: object; negative_sentiment?: number; occurrence?: number; persona?: object; positive_sentiment?: number; prev_date?: string; previous?: object; prompt?: object; rank?: number; region?: object; run?: object; tag?: object; theme?: object; topic?: object; }`\n\n**post** `/v2/reports/sentiment/stream`\n\nStream Sentiment V2\n\n### Parameters\n\n- `asset: string`\n  The brand name to analyze (sentiment is extracted on name, not id).\n\n- `category_id: string`\n\n- `end_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `start_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `comparison_end_date?: string`\n  YYYY-MM-DD, ET, inclusive (with start).\n\n- `comparison_start_date?: string`\n  YYYY-MM-DD, ET, inclusive (with end).\n\n- `cursor?: string`\n\n- `filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }`\n  A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.\n  - `and?: object[]`\n  - `field?: string`\n  - `not?: object`\n  - `op?: string`\n  - `or?: object[]`\n  - `value?: object`\n\n- `group_by?: string[]`\n\n- `include_cited_websites?: boolean`\n  Return cited websites per row (only when grouping by `theme`/`claim`).\n\n- `interval?: 'day' | 'week' | 'month'`\n\n- `limit?: number`\n  Page size; default 10, max 50.\n\n- `max_results?: number`\n  Stream endpoint only: cap the number of streamed rows (default: all).\n\n- `metrics?: 'positive_sentiment' | 'negative_sentiment' | 'occurrence'[]`\n\n- `sort?: { dir?: 'asc' | 'desc'; field?: 'occurrence' | 'positive_sentiment' | 'negative_sentiment'; }`\n  - `dir?: 'asc' | 'desc'`\n  - `field?: 'occurrence' | 'positive_sentiment' | 'negative_sentiment'`\n\n### Returns\n\n- `{ asset: string; count: number; end_date: string; metrics: string[]; models: string[]; start_date: string; comparison_end_date?: string; comparison_start_date?: string; filter?: object; next_cursor?: string; total_results?: number; } | { cited_websites?: string[]; claim?: { id?: string; name?: string; }; competitor?: { id?: string; name?: string; }; date?: string; model?: { id?: string; name?: string; }; negative_sentiment?: number; occurrence?: number; persona?: { id?: string; name?: string; }; positive_sentiment?: number; prev_date?: string; previous?: { negative_sentiment?: number; occurrence?: number; positive_sentiment?: number; }; prompt?: { id?: string; name?: string; }; rank?: number; region?: { id?: string; name?: string; }; run?: { id?: string; name?: string; }; tag?: { id?: string; name?: string; }; theme?: { id?: string; name?: string; }; topic?: { id?: string; name?: string; }; }`\n  `summary` event payload (the report `info` block).\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst stream = await client.reports.streamSentimentV2({\n  asset: 'asset',\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\nfor await (const reportStreamSentimentV2Response of stream) {\n  console.log(reportStreamSentimentV2Response);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.streamSentimentV2',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.streamSentimentV2({\n  asset: 'asset',\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response);",
      },
      python: {
        method: 'reports.stream_sentiment_v2',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nfor report in client.reports.stream_sentiment_v2(\n    asset="asset",\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date="end_date",\n    start_date="start_date",\n):\n  print(report)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v2/reports/sentiment/stream \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "asset": "asset",\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "end_date",\n          "start_date": "start_date"\n        }\'',
      },
    },
  },
  {
    name: 'stream_query_fanouts',
    endpoint: '/v2/reports/query-fanouts/stream',
    httpMethod: 'post',
    summary: 'Stream Query Fanouts V2',
    description: 'Stream Query Fanouts V2',
    stainlessPath: '(resource) reports > (method) stream_query_fanouts',
    qualified: 'client.reports.streamQueryFanouts',
    params: [
      'category_id: string;',
      'end_date: string;',
      'start_date: string;',
      'cursor?: string;',
      'filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; };',
      "group_by?: 'date' | 'model' | 'region' | 'prompt' | 'query'[];",
      "interval?: 'day' | 'week' | 'month';",
      'limit?: number;',
      'max_results?: number;',
      "metrics?: 'fanouts_per_execution' | 'total_fanouts' | 'share' | 'query_variations'[];",
      "sort?: { field: string; dir?: 'asc' | 'desc'; };",
    ],
    response:
      '{ count: number; coverage_note: string; end_date: string; metrics: string[]; models: string[]; start_date: string; filter?: object; next_cursor?: string; total_results?: number; } | { date?: string; fanouts_per_execution?: number; model?: string; prompt?: string; query?: string; query_variations?: number; rank?: number; region?: string; share?: number; total_fanouts?: number; }',
    markdown:
      "## stream_query_fanouts\n\n`client.reports.streamQueryFanouts(category_id: string, end_date: string, start_date: string, cursor?: string, filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }, group_by?: 'date' | 'model' | 'region' | 'prompt' | 'query'[], interval?: 'day' | 'week' | 'month', limit?: number, max_results?: number, metrics?: 'fanouts_per_execution' | 'total_fanouts' | 'share' | 'query_variations'[], sort?: { field: string; dir?: 'asc' | 'desc'; }): { count: number; coverage_note: string; end_date: string; metrics: string[]; models: string[]; start_date: string; filter?: object; next_cursor?: string; total_results?: number; } | { date?: string; fanouts_per_execution?: number; model?: string; prompt?: string; query?: string; query_variations?: number; rank?: number; region?: string; share?: number; total_fanouts?: number; }`\n\n**post** `/v2/reports/query-fanouts/stream`\n\nStream Query Fanouts V2\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `start_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `cursor?: string`\n\n- `filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }`\n  A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.\n  - `and?: object[]`\n  - `field?: string`\n  - `not?: object`\n  - `op?: string`\n  - `or?: object[]`\n  - `value?: object`\n\n- `group_by?: 'date' | 'model' | 'region' | 'prompt' | 'query'[]`\n\n- `interval?: 'day' | 'week' | 'month'`\n\n- `limit?: number`\n  Page size; default 10, max 50.\n\n- `max_results?: number`\n  Stream endpoint only: cap the number of streamed rows (default: all).\n\n- `metrics?: 'fanouts_per_execution' | 'total_fanouts' | 'share' | 'query_variations'[]`\n\n- `sort?: { field: string; dir?: 'asc' | 'desc'; }`\n  - `field: string`\n  - `dir?: 'asc' | 'desc'`\n\n### Returns\n\n- `{ count: number; coverage_note: string; end_date: string; metrics: string[]; models: string[]; start_date: string; filter?: object; next_cursor?: string; total_results?: number; } | { date?: string; fanouts_per_execution?: number; model?: string; prompt?: string; query?: string; query_variations?: number; rank?: number; region?: string; share?: number; total_fanouts?: number; }`\n  `summary` event payload (the report `info` block).\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst stream = await client.reports.streamQueryFanouts({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\nfor await (const reportStreamQueryFanoutsResponse of stream) {\n  console.log(reportStreamQueryFanoutsResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.streamQueryFanouts',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.streamQueryFanouts({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response);",
      },
      python: {
        method: 'reports.stream_query_fanouts',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nfor report in client.reports.stream_query_fanouts(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date="end_date",\n    start_date="start_date",\n):\n  print(report)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v2/reports/query-fanouts/stream \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "end_date",\n          "start_date": "start_date"\n        }\'',
      },
    },
  },
  {
    name: 'get_referrals_report_v2',
    endpoint: '/v2/reports/referrals',
    httpMethod: 'post',
    summary: 'Get Referrals Report V2',
    description:
      'Get referral traffic report from the hourly aggregated materialized view (UTC-based).\n\nSupports date_interval="hour", calendar intervals through "year", "quarter", and "relative_week".',
    stainlessPath: '(resource) reports > (method) get_referrals_report_v2',
    qualified: 'client.reports.getReferralsReportV2',
    params: [
      'domain: string;',
      "metrics: 'visits' | 'last_visit'[];",
      'start_date: string;',
      "date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';",
      "dimensions?: 'date' | 'hour' | 'path' | 'referral_source' | 'referral_type'[];",
      'end_date?: string;',
      "filters?: { field: 'path'; operator: string; value: string | string[]; } | { field: 'referral_source'; operator: string; value: string | string[]; } | { field: 'referral_type'; operator: string; value: 'internal' | 'referer' | 'utm' | 'none' | 'internal' | 'referer' | 'utm' | 'none'[]; }[];",
      "metric_filters?: { field: string; operator: '>' | '>=' | '<' | '<=' | '=' | '==' | '!='; value: number; }[];",
      'order_by?: object;',
      'organization_id?: string;',
      'pagination?: { limit?: number; offset?: number; };',
      'timezone?: string;',
    ],
    response:
      '{ data: { dimensions: string[]; metrics: number | string[]; }[]; info: { total_rows: number; query?: object; }; }',
    markdown:
      "## get_referrals_report_v2\n\n`client.reports.getReferralsReportV2(domain: string, metrics: 'visits' | 'last_visit'[], start_date: string, date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week', dimensions?: 'date' | 'hour' | 'path' | 'referral_source' | 'referral_type'[], end_date?: string, filters?: { field: 'path'; operator: string; value: string | string[]; } | { field: 'referral_source'; operator: string; value: string | string[]; } | { field: 'referral_type'; operator: string; value: 'internal' | 'referer' | 'utm' | 'none' | 'internal' | 'referer' | 'utm' | 'none'[]; }[], metric_filters?: { field: string; operator: '>' | '>=' | '<' | '<=' | '=' | '==' | '!='; value: number; }[], order_by?: object, organization_id?: string, pagination?: { limit?: number; offset?: number; }, timezone?: string): { data: report_result[]; info: report_info; }`\n\n**post** `/v2/reports/referrals`\n\nGet referral traffic report from the hourly aggregated materialized view (UTC-based).\n\nSupports date_interval=\"hour\", calendar intervals through \"year\", \"quarter\", and \"relative_week\".\n\n### Parameters\n\n- `domain: string`\n  Domain to query logs for.\n\n- `metrics: 'visits' | 'last_visit'[]`\n\n- `start_date: string`\n  Start date for logs. Accepts: YYYY-MM-DD, YYYY-MM-DD HH:MM, YYYY-MM-DD HH:MM:SS, or full ISO timestamp.\n\n- `date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week'`\n  Date interval for the report. (only used with date dimension)\n\n- `dimensions?: 'date' | 'hour' | 'path' | 'referral_source' | 'referral_type'[]`\n  Dimensions to group the report by.\n\n- `end_date?: string`\n  End date in UTC. Accepts same formats as start_date. Defaults to now UTC if omitted.\n\n- `filters?: { field: 'path'; operator: string; value: string | string[]; } | { field: 'referral_source'; operator: string; value: string | string[]; } | { field: 'referral_type'; operator: string; value: 'internal' | 'referer' | 'utm' | 'none' | 'internal' | 'referer' | 'utm' | 'none'[]; }[]`\n  Filters for referrals report.\n\n- `metric_filters?: { field: string; operator: '>' | '>=' | '<' | '<=' | '=' | '==' | '!='; value: number; }[]`\n  Numeric filters applied after report metrics are calculated.\n\n- `order_by?: object`\n  \nCustom ordering of the report results.\n\nThe order is a record of key-value pairs where:\n- key is the field to order by, which can be a metric or dimension\n- value is the direction of the order, either 'asc' for ascending or 'desc' for descending.\n\nWhen not specified, the default order is the first metric in the query descending.\n        \n\n- `organization_id?: string`\n\n- `pagination?: { limit?: number; offset?: number; }`\n  Pagination settings for the report results.\n  - `limit?: number`\n    Maximum number of results to return. Default is 10,000, maximum is 50,000.\n  - `offset?: number`\n    Offset for the results. Used for pagination.\n\n- `timezone?: string`\n  IANA timezone name for date bucketing and filter boundaries.\n\n### Returns\n\n- `{ data: { dimensions: string[]; metrics: number | string[]; }[]; info: { total_rows: number; query?: object; }; }`\n  Base response model for reports.\n\n  - `data: { dimensions: string[]; metrics: number | string[]; }[]`\n  - `info: { total_rows: number; query?: object; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst reportResponse = await client.reports.getReferralsReportV2({\n  domain: 'domain',\n  metrics: ['visits'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(reportResponse);\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.getReferralsReportV2',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst reportResponse = await client.reports.getReferralsReportV2({\n  domain: 'domain',\n  metrics: ['visits'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(reportResponse.data);",
      },
      python: {
        method: 'reports.get_referrals_report_v2',
        example:
          'import os\nfrom datetime import datetime\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nreport_response = client.reports.get_referrals_report_v2(\n    domain="domain",\n    metrics=["visits"],\n    start_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n)\nprint(report_response.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v2/reports/referrals \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "domain": "domain",\n          "metrics": [\n            "visits"\n          ],\n          "start_date": "2019-12-27T18:11:19.117Z",\n          "order_by": {\n            "date": "asc"\n          }\n        }\'',
      },
    },
  },
  {
    name: 'get_bots_report_v2',
    endpoint: '/v2/reports/bots',
    httpMethod: 'post',
    summary: 'Get Bots Report V2',
    description:
      'Get bot traffic report from the hourly aggregated materialized view (UTC-based).\n\nSupports date_interval="hour", calendar intervals through "year", "quarter", and "relative_week".\n\nMetrics:\n- count: unique bot visits\n- citations: unique citation events (ai_assistant bot type)\n- indexing: unique indexing events (index bot type)\n- training: unique training events (ai_training bot type)\n- last_visit: most recent visit timestamp\n\nDimensions:\n- date, path, bot_name, bot_provider, bot_type',
    stainlessPath: '(resource) reports > (method) get_bots_report_v2',
    qualified: 'client.reports.getBotsReportV2',
    params: [
      'domain: string;',
      "metrics: 'count' | 'citations' | 'indexing' | 'training' | 'last_visit' | 'agents'[];",
      'start_date: string;',
      "date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';",
      "dimensions?: 'date' | 'hour' | 'path' | 'bot_name' | 'bot_provider' | 'bot_type'[];",
      'domain_id?: string;',
      'end_date?: string;',
      "filters?: { field: 'path'; operator: string; value: string | string[]; } | { field: 'bot_name'; operator: string; value: string | string[]; } | { field: 'bot_provider'; operator: string; value: string | string[]; } | { field: 'bot_type'; operator: string; value: string; }[];",
      "metric_filters?: { field: string; operator: '>' | '>=' | '<' | '<=' | '=' | '==' | '!='; value: number; }[];",
      'order_by?: object;',
      'organization_id?: string;',
      'pagination?: { limit?: number; offset?: number; };',
      'tags?: string[];',
      'timezone?: string;',
    ],
    response:
      '{ data: { dimensions: string[]; metrics: number | string[]; }[]; info: { total_rows: number; query?: object; }; }',
    markdown:
      "## get_bots_report_v2\n\n`client.reports.getBotsReportV2(domain: string, metrics: 'count' | 'citations' | 'indexing' | 'training' | 'last_visit' | 'agents'[], start_date: string, date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week', dimensions?: 'date' | 'hour' | 'path' | 'bot_name' | 'bot_provider' | 'bot_type'[], domain_id?: string, end_date?: string, filters?: { field: 'path'; operator: string; value: string | string[]; } | { field: 'bot_name'; operator: string; value: string | string[]; } | { field: 'bot_provider'; operator: string; value: string | string[]; } | { field: 'bot_type'; operator: string; value: string; }[], metric_filters?: { field: string; operator: '>' | '>=' | '<' | '<=' | '=' | '==' | '!='; value: number; }[], order_by?: object, organization_id?: string, pagination?: { limit?: number; offset?: number; }, tags?: string[], timezone?: string): { data: report_result[]; info: report_info; }`\n\n**post** `/v2/reports/bots`\n\nGet bot traffic report from the hourly aggregated materialized view (UTC-based).\n\nSupports date_interval=\"hour\", calendar intervals through \"year\", \"quarter\", and \"relative_week\".\n\nMetrics:\n- count: unique bot visits\n- citations: unique citation events (ai_assistant bot type)\n- indexing: unique indexing events (index bot type)\n- training: unique training events (ai_training bot type)\n- last_visit: most recent visit timestamp\n\nDimensions:\n- date, path, bot_name, bot_provider, bot_type\n\n### Parameters\n\n- `domain: string`\n  Domain to query logs for.\n\n- `metrics: 'count' | 'citations' | 'indexing' | 'training' | 'last_visit' | 'agents'[]`\n\n- `start_date: string`\n  Start date for logs. Accepts: YYYY-MM-DD, YYYY-MM-DD HH:MM, YYYY-MM-DD HH:MM:SS, or full ISO timestamp.\n\n- `date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week'`\n  Date interval for the report. (only used with date dimension)\n\n- `dimensions?: 'date' | 'hour' | 'path' | 'bot_name' | 'bot_provider' | 'bot_type'[]`\n  Dimensions to group the report by.\n\n- `domain_id?: string`\n  Domain UUID used for tag lookups.\n\n- `end_date?: string`\n  End date in UTC. Accepts same formats as start_date. Defaults to now UTC if omitted.\n\n- `filters?: { field: 'path'; operator: string; value: string | string[]; } | { field: 'bot_name'; operator: string; value: string | string[]; } | { field: 'bot_provider'; operator: string; value: string | string[]; } | { field: 'bot_type'; operator: string; value: string; }[]`\n  Filters for bots report.\n\n- `metric_filters?: { field: string; operator: '>' | '>=' | '<' | '<=' | '=' | '==' | '!='; value: number; }[]`\n  Numeric filters applied after report metrics are calculated.\n\n- `order_by?: object`\n  \nCustom ordering of the report results.\n\nThe order is a record of key-value pairs where:\n- key is the field to order by, which can be a metric or dimension\n- value is the direction of the order, either 'asc' for ascending or 'desc' for descending.\n\nWhen not specified, the default order is the first metric in the query descending.\n        \n\n- `organization_id?: string`\n\n- `pagination?: { limit?: number; offset?: number; }`\n  Pagination settings for the report results.\n  - `limit?: number`\n    Maximum number of results to return. Default is 10,000, maximum is 50,000.\n  - `offset?: number`\n    Offset for the results. Used for pagination.\n\n- `tags?: string[]`\n\n- `timezone?: string`\n  IANA timezone name for date bucketing and filter boundaries.\n\n### Returns\n\n- `{ data: { dimensions: string[]; metrics: number | string[]; }[]; info: { total_rows: number; query?: object; }; }`\n  Base response model for reports.\n\n  - `data: { dimensions: string[]; metrics: number | string[]; }[]`\n  - `info: { total_rows: number; query?: object; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst reportResponse = await client.reports.getBotsReportV2({\n  domain: 'domain',\n  metrics: ['count'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(reportResponse);\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.getBotsReportV2',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst reportResponse = await client.reports.getBotsReportV2({\n  domain: 'domain',\n  metrics: ['count'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(reportResponse.data);",
      },
      python: {
        method: 'reports.get_bots_report_v2',
        example:
          'import os\nfrom datetime import datetime\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nreport_response = client.reports.get_bots_report_v2(\n    domain="domain",\n    metrics=["count"],\n    start_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n)\nprint(report_response.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v2/reports/bots \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "domain": "domain",\n          "metrics": [\n            "count"\n          ],\n          "start_date": "2019-12-27T18:11:19.117Z",\n          "order_by": {\n            "date": "asc"\n          }\n        }\'',
      },
    },
  },
  {
    name: 'query_visibility',
    endpoint: '/v2/reports/visibility',
    httpMethod: 'post',
    summary: 'Query Visibility V2',
    description: 'Query Visibility V2',
    stainlessPath: '(resource) reports > (method) query_visibility',
    qualified: 'client.reports.queryVisibility',
    params: [
      'category_id: string;',
      'end_date: string;',
      'start_date: string;',
      'assets?: string | string[] | { op: string; value: string | string[]; };',
      'cursor?: string;',
      'filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; };',
      "group_by?: 'date' | 'model' | 'topic' | 'region' | 'prompt' | 'persona'[];",
      "interval?: 'day' | 'week' | 'month';",
      'limit?: number;',
      'max_results?: number;',
      "metrics?: 'visibility_score' | 'share_of_voice' | 'average_position'[];",
      "scope?: 'owned' | 'all';",
      "sort?: { field?: 'visibility_score' | 'share_of_voice' | 'average_position'; };",
    ],
    response:
      '{ data: { asset?: { name?: string; owned?: boolean; }; average_position?: number; date?: string; model?: { id?: string; name?: string; }; persona?: { id?: string; name?: string; }; prompt?: { id?: string; name?: string; }; rank?: number; region?: { id?: string; name?: string; }; share_of_voice?: number; topic?: { id?: string; name?: string; }; visibility_score?: number; }[]; info: { count: number; end_date: string; models: string[]; scope: string; start_date: string; asset_filter?: object | string[] | string; filter?: object; next_cursor?: string; total_results?: number; }; }',
    markdown:
      "## query_visibility\n\n`client.reports.queryVisibility(category_id: string, end_date: string, start_date: string, assets?: string | string[] | { op: string; value: string | string[]; }, cursor?: string, filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }, group_by?: 'date' | 'model' | 'topic' | 'region' | 'prompt' | 'persona'[], interval?: 'day' | 'week' | 'month', limit?: number, max_results?: number, metrics?: 'visibility_score' | 'share_of_voice' | 'average_position'[], scope?: 'owned' | 'all', sort?: { field?: 'visibility_score' | 'share_of_voice' | 'average_position'; }): { data: object[]; info: object; }`\n\n**post** `/v2/reports/visibility`\n\nQuery Visibility V2\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `start_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `assets?: string | string[] | { op: string; value: string | string[]; }`\n  A name (`is`), a list (`in`), or {op,value} with op `is`/`in`/`not_in`.\n\n- `cursor?: string`\n\n- `filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }`\n  A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.\n  - `and?: object[]`\n  - `field?: string`\n  - `not?: object`\n  - `op?: string`\n  - `or?: object[]`\n  - `value?: object`\n\n- `group_by?: 'date' | 'model' | 'topic' | 'region' | 'prompt' | 'persona'[]`\n\n- `interval?: 'day' | 'week' | 'month'`\n\n- `limit?: number`\n  Page size; default 10, max 50.\n\n- `max_results?: number`\n  Stream endpoint only: cap the number of streamed rows (default: all).\n\n- `metrics?: 'visibility_score' | 'share_of_voice' | 'average_position'[]`\n\n- `scope?: 'owned' | 'all'`\n\n- `sort?: { field?: 'visibility_score' | 'share_of_voice' | 'average_position'; }`\n  - `field?: 'visibility_score' | 'share_of_voice' | 'average_position'`\n\n### Returns\n\n- `{ data: { asset?: { name?: string; owned?: boolean; }; average_position?: number; date?: string; model?: { id?: string; name?: string; }; persona?: { id?: string; name?: string; }; prompt?: { id?: string; name?: string; }; rank?: number; region?: { id?: string; name?: string; }; share_of_voice?: number; topic?: { id?: string; name?: string; }; visibility_score?: number; }[]; info: { count: number; end_date: string; models: string[]; scope: string; start_date: string; asset_filter?: object | string[] | string; filter?: object; next_cursor?: string; total_results?: number; }; }`\n\n  - `data: { asset?: { name?: string; owned?: boolean; }; average_position?: number; date?: string; model?: { id?: string; name?: string; }; persona?: { id?: string; name?: string; }; prompt?: { id?: string; name?: string; }; rank?: number; region?: { id?: string; name?: string; }; share_of_voice?: number; topic?: { id?: string; name?: string; }; visibility_score?: number; }[]`\n  - `info: { count: number; end_date: string; models: string[]; scope: string; start_date: string; asset_filter?: object | string[] | string; filter?: object; next_cursor?: string; total_results?: number; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.reports.queryVisibility({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.queryVisibility',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.queryVisibility({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'reports.query_visibility',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.reports.query_visibility(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date="end_date",\n    start_date="start_date",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v2/reports/visibility \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "end_date",\n          "start_date": "start_date"\n        }\'',
      },
    },
  },
  {
    name: 'query_citations',
    endpoint: '/v2/reports/citations',
    httpMethod: 'post',
    summary: 'Query Citations V2',
    description: 'Query Citations V2',
    stainlessPath: '(resource) reports > (method) query_citations',
    qualified: 'client.reports.queryCitations',
    params: [
      'category_id: string;',
      'end_date: string;',
      'start_date: string;',
      'cursor?: string;',
      "entity?: 'domain' | 'page' | 'citation_category';",
      'filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; };',
      "group_by?: 'page' | 'date' | 'model' | 'topic' | 'region' | 'persona' | 'prompt'[];",
      "interval?: 'day' | 'week' | 'month';",
      'limit?: number;',
      'max_results?: number;',
      "metrics?: 'count' | 'citation_share' | 'rank' | 'first_cited_at'[];",
      "scope?: 'all' | 'owned';",
    ],
    response:
      '{ data: { citation_share?: number; count?: number; date?: string; domain?: string; first_cited_at?: string; model?: { id?: string; name?: string; }; page?: string; persona?: { id?: string; name?: string; }; prompt?: { id?: string; name?: string; }; rank?: number; region?: { id?: string; name?: string; }; topic?: { id?: string; name?: string; }; }[]; info: { analysis_types: string[]; count: number; end_date: string; metrics: string[]; models: string[]; scope: string; start_date: string; filter?: object; next_cursor?: string; total_results?: number; }; }',
    markdown:
      "## query_citations\n\n`client.reports.queryCitations(category_id: string, end_date: string, start_date: string, cursor?: string, entity?: 'domain' | 'page' | 'citation_category', filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }, group_by?: 'page' | 'date' | 'model' | 'topic' | 'region' | 'persona' | 'prompt'[], interval?: 'day' | 'week' | 'month', limit?: number, max_results?: number, metrics?: 'count' | 'citation_share' | 'rank' | 'first_cited_at'[], scope?: 'all' | 'owned'): { data: object[]; info: object; }`\n\n**post** `/v2/reports/citations`\n\nQuery Citations V2\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `start_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `cursor?: string`\n\n- `entity?: 'domain' | 'page' | 'citation_category'`\n  What each row represents: `domain` (default), `page`, or `citation_category`. Legacy: `group_by: [\"page\"]` (with `entity` omitted) is still accepted and is equivalent to `entity: \"page\"`. `citation_category` uses the dashboard split view: a citation counts under both its page-level and domain-level category, so category shares can sum to more than 100%.\n\n- `filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }`\n  A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.\n  - `and?: object[]`\n  - `field?: string`\n  - `not?: object`\n  - `op?: string`\n  - `or?: object[]`\n  - `value?: object`\n\n- `group_by?: 'page' | 'date' | 'model' | 'topic' | 'region' | 'persona' | 'prompt'[]`\n\n- `interval?: 'day' | 'week' | 'month'`\n\n- `limit?: number`\n  Page size; default 10, max 50.\n\n- `max_results?: number`\n  Stream endpoint only: cap the number of streamed rows (default: all).\n\n- `metrics?: 'count' | 'citation_share' | 'rank' | 'first_cited_at'[]`\n\n- `scope?: 'all' | 'owned'`\n  `all` (every cited domain) or `owned` (only your owned domains). Applies to `entity=domain`.\n\n### Returns\n\n- `{ data: { citation_share?: number; count?: number; date?: string; domain?: string; first_cited_at?: string; model?: { id?: string; name?: string; }; page?: string; persona?: { id?: string; name?: string; }; prompt?: { id?: string; name?: string; }; rank?: number; region?: { id?: string; name?: string; }; topic?: { id?: string; name?: string; }; }[]; info: { analysis_types: string[]; count: number; end_date: string; metrics: string[]; models: string[]; scope: string; start_date: string; filter?: object; next_cursor?: string; total_results?: number; }; }`\n\n  - `data: { citation_share?: number; count?: number; date?: string; domain?: string; first_cited_at?: string; model?: { id?: string; name?: string; }; page?: string; persona?: { id?: string; name?: string; }; prompt?: { id?: string; name?: string; }; rank?: number; region?: { id?: string; name?: string; }; topic?: { id?: string; name?: string; }; }[]`\n  - `info: { analysis_types: string[]; count: number; end_date: string; metrics: string[]; models: string[]; scope: string; start_date: string; filter?: object; next_cursor?: string; total_results?: number; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.reports.queryCitations({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.queryCitations',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.queryCitations({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'reports.query_citations',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.reports.query_citations(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date="end_date",\n    start_date="start_date",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v2/reports/citations \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "end_date",\n          "start_date": "start_date"\n        }\'',
      },
    },
  },
  {
    name: 'query_sentiment',
    endpoint: '/v2/reports/sentiment',
    httpMethod: 'post',
    summary: 'Query Sentiment V2',
    description: 'Query Sentiment V2',
    stainlessPath: '(resource) reports > (method) query_sentiment',
    qualified: 'client.reports.querySentiment',
    params: [
      'asset: string;',
      'category_id: string;',
      'end_date: string;',
      'start_date: string;',
      'comparison_end_date?: string;',
      'comparison_start_date?: string;',
      'cursor?: string;',
      'filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; };',
      'group_by?: string[];',
      'include_cited_websites?: boolean;',
      "interval?: 'day' | 'week' | 'month';",
      'limit?: number;',
      'max_results?: number;',
      "metrics?: 'positive_sentiment' | 'negative_sentiment' | 'occurrence'[];",
      "sort?: { dir?: 'asc' | 'desc'; field?: 'occurrence' | 'positive_sentiment' | 'negative_sentiment'; };",
    ],
    response:
      '{ data: { cited_websites?: string[]; claim?: { id?: string; name?: string; }; competitor?: { id?: string; name?: string; }; date?: string; model?: { id?: string; name?: string; }; negative_sentiment?: number; occurrence?: number; persona?: { id?: string; name?: string; }; positive_sentiment?: number; prev_date?: string; previous?: { negative_sentiment?: number; occurrence?: number; positive_sentiment?: number; }; prompt?: { id?: string; name?: string; }; rank?: number; region?: { id?: string; name?: string; }; run?: { id?: string; name?: string; }; tag?: { id?: string; name?: string; }; theme?: { id?: string; name?: string; }; topic?: { id?: string; name?: string; }; }[]; info: { asset: string; count: number; end_date: string; metrics: string[]; models: string[]; start_date: string; comparison_end_date?: string; comparison_start_date?: string; filter?: object; next_cursor?: string; total_results?: number; }; }',
    markdown:
      "## query_sentiment\n\n`client.reports.querySentiment(asset: string, category_id: string, end_date: string, start_date: string, comparison_end_date?: string, comparison_start_date?: string, cursor?: string, filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }, group_by?: string[], include_cited_websites?: boolean, interval?: 'day' | 'week' | 'month', limit?: number, max_results?: number, metrics?: 'positive_sentiment' | 'negative_sentiment' | 'occurrence'[], sort?: { dir?: 'asc' | 'desc'; field?: 'occurrence' | 'positive_sentiment' | 'negative_sentiment'; }): { data: object[]; info: object; }`\n\n**post** `/v2/reports/sentiment`\n\nQuery Sentiment V2\n\n### Parameters\n\n- `asset: string`\n  The brand name to analyze (sentiment is extracted on name, not id).\n\n- `category_id: string`\n\n- `end_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `start_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `comparison_end_date?: string`\n  YYYY-MM-DD, ET, inclusive (with start).\n\n- `comparison_start_date?: string`\n  YYYY-MM-DD, ET, inclusive (with end).\n\n- `cursor?: string`\n\n- `filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }`\n  A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.\n  - `and?: object[]`\n  - `field?: string`\n  - `not?: object`\n  - `op?: string`\n  - `or?: object[]`\n  - `value?: object`\n\n- `group_by?: string[]`\n\n- `include_cited_websites?: boolean`\n  Return cited websites per row (only when grouping by `theme`/`claim`).\n\n- `interval?: 'day' | 'week' | 'month'`\n\n- `limit?: number`\n  Page size; default 10, max 50.\n\n- `max_results?: number`\n  Stream endpoint only: cap the number of streamed rows (default: all).\n\n- `metrics?: 'positive_sentiment' | 'negative_sentiment' | 'occurrence'[]`\n\n- `sort?: { dir?: 'asc' | 'desc'; field?: 'occurrence' | 'positive_sentiment' | 'negative_sentiment'; }`\n  - `dir?: 'asc' | 'desc'`\n  - `field?: 'occurrence' | 'positive_sentiment' | 'negative_sentiment'`\n\n### Returns\n\n- `{ data: { cited_websites?: string[]; claim?: { id?: string; name?: string; }; competitor?: { id?: string; name?: string; }; date?: string; model?: { id?: string; name?: string; }; negative_sentiment?: number; occurrence?: number; persona?: { id?: string; name?: string; }; positive_sentiment?: number; prev_date?: string; previous?: { negative_sentiment?: number; occurrence?: number; positive_sentiment?: number; }; prompt?: { id?: string; name?: string; }; rank?: number; region?: { id?: string; name?: string; }; run?: { id?: string; name?: string; }; tag?: { id?: string; name?: string; }; theme?: { id?: string; name?: string; }; topic?: { id?: string; name?: string; }; }[]; info: { asset: string; count: number; end_date: string; metrics: string[]; models: string[]; start_date: string; comparison_end_date?: string; comparison_start_date?: string; filter?: object; next_cursor?: string; total_results?: number; }; }`\n\n  - `data: { cited_websites?: string[]; claim?: { id?: string; name?: string; }; competitor?: { id?: string; name?: string; }; date?: string; model?: { id?: string; name?: string; }; negative_sentiment?: number; occurrence?: number; persona?: { id?: string; name?: string; }; positive_sentiment?: number; prev_date?: string; previous?: { negative_sentiment?: number; occurrence?: number; positive_sentiment?: number; }; prompt?: { id?: string; name?: string; }; rank?: number; region?: { id?: string; name?: string; }; run?: { id?: string; name?: string; }; tag?: { id?: string; name?: string; }; theme?: { id?: string; name?: string; }; topic?: { id?: string; name?: string; }; }[]`\n  - `info: { asset: string; count: number; end_date: string; metrics: string[]; models: string[]; start_date: string; comparison_end_date?: string; comparison_start_date?: string; filter?: object; next_cursor?: string; total_results?: number; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.reports.querySentiment({\n  asset: 'asset',\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.querySentiment',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.querySentiment({\n  asset: 'asset',\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'reports.query_sentiment',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.reports.query_sentiment(\n    asset="asset",\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date="end_date",\n    start_date="start_date",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v2/reports/sentiment \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "asset": "asset",\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "end_date",\n          "start_date": "start_date"\n        }\'',
      },
    },
  },
  {
    name: 'query_query_fanouts',
    endpoint: '/v2/reports/query-fanouts',
    httpMethod: 'post',
    summary: 'Query Fanouts V2',
    description: 'Query Fanouts V2',
    stainlessPath: '(resource) reports > (method) query_query_fanouts',
    qualified: 'client.reports.queryQueryFanouts',
    params: [
      'category_id: string;',
      'end_date: string;',
      'start_date: string;',
      'cursor?: string;',
      'filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; };',
      "group_by?: 'date' | 'model' | 'region' | 'prompt' | 'query'[];",
      "interval?: 'day' | 'week' | 'month';",
      'limit?: number;',
      'max_results?: number;',
      "metrics?: 'fanouts_per_execution' | 'total_fanouts' | 'share' | 'query_variations'[];",
      "sort?: { field: string; dir?: 'asc' | 'desc'; };",
    ],
    response:
      '{ data: { date?: string; fanouts_per_execution?: number; model?: string; prompt?: string; query?: string; query_variations?: number; rank?: number; region?: string; share?: number; total_fanouts?: number; }[]; info: { count: number; coverage_note: string; end_date: string; metrics: string[]; models: string[]; start_date: string; filter?: object; next_cursor?: string; total_results?: number; }; }',
    markdown:
      "## query_query_fanouts\n\n`client.reports.queryQueryFanouts(category_id: string, end_date: string, start_date: string, cursor?: string, filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }, group_by?: 'date' | 'model' | 'region' | 'prompt' | 'query'[], interval?: 'day' | 'week' | 'month', limit?: number, max_results?: number, metrics?: 'fanouts_per_execution' | 'total_fanouts' | 'share' | 'query_variations'[], sort?: { field: string; dir?: 'asc' | 'desc'; }): { data: object[]; info: object; }`\n\n**post** `/v2/reports/query-fanouts`\n\nQuery Fanouts V2\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `start_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `cursor?: string`\n\n- `filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }`\n  A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.\n  - `and?: object[]`\n  - `field?: string`\n  - `not?: object`\n  - `op?: string`\n  - `or?: object[]`\n  - `value?: object`\n\n- `group_by?: 'date' | 'model' | 'region' | 'prompt' | 'query'[]`\n\n- `interval?: 'day' | 'week' | 'month'`\n\n- `limit?: number`\n  Page size; default 10, max 50.\n\n- `max_results?: number`\n  Stream endpoint only: cap the number of streamed rows (default: all).\n\n- `metrics?: 'fanouts_per_execution' | 'total_fanouts' | 'share' | 'query_variations'[]`\n\n- `sort?: { field: string; dir?: 'asc' | 'desc'; }`\n  - `field: string`\n  - `dir?: 'asc' | 'desc'`\n\n### Returns\n\n- `{ data: { date?: string; fanouts_per_execution?: number; model?: string; prompt?: string; query?: string; query_variations?: number; rank?: number; region?: string; share?: number; total_fanouts?: number; }[]; info: { count: number; coverage_note: string; end_date: string; metrics: string[]; models: string[]; start_date: string; filter?: object; next_cursor?: string; total_results?: number; }; }`\n\n  - `data: { date?: string; fanouts_per_execution?: number; model?: string; prompt?: string; query?: string; query_variations?: number; rank?: number; region?: string; share?: number; total_fanouts?: number; }[]`\n  - `info: { count: number; coverage_note: string; end_date: string; metrics: string[]; models: string[]; start_date: string; filter?: object; next_cursor?: string; total_results?: number; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.reports.queryQueryFanouts({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.queryQueryFanouts',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.queryQueryFanouts({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'reports.query_query_fanouts',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.reports.query_query_fanouts(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date="end_date",\n    start_date="start_date",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v2/reports/query-fanouts \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "end_date",\n          "start_date": "start_date"\n        }\'',
      },
    },
  },
  {
    name: 'query',
    endpoint: '/v1/reports/web-search-results',
    httpMethod: 'post',
    summary: 'Query Web Search Results',
    description: 'Get web search results for a given category.',
    stainlessPath: '(resource) reports.web_search_results > (method) query',
    qualified: 'client.reports.webSearchResults.query',
    params: [
      'category_id: string;',
      'end_date: string;',
      "metrics: 'count' | 'search_share'[];",
      'start_date: string;',
      "date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';",
      'dimensions?: string[];',
      "filters?: { field: 'hostname'; operator: string; value: string | string[]; } | { field: 'path'; operator: string; value: string | string[]; } | { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'url'; operator: string; value: string | string[]; } | { field: 'root_domain'; operator: string; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'search_query'; operator: string; value: string | string[]; }[];",
      'order_by?: object;',
      'pagination?: { limit?: number; offset?: number; };',
    ],
    response:
      '{ data: { dimensions: string[]; metrics: number | string[]; }[]; info: { total_rows: number; query?: object; }; }',
    markdown:
      "## query\n\n`client.reports.webSearchResults.query(category_id: string, end_date: string, metrics: 'count' | 'search_share'[], start_date: string, date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week', dimensions?: string[], filters?: { field: 'hostname'; operator: string; value: string | string[]; } | { field: 'path'; operator: string; value: string | string[]; } | { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'url'; operator: string; value: string | string[]; } | { field: 'root_domain'; operator: string; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'search_query'; operator: string; value: string | string[]; }[], order_by?: object, pagination?: { limit?: number; offset?: number; }): { data: object[]; info: report_info; }`\n\n**post** `/v1/reports/web-search-results`\n\nGet web search results for a given category.\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n  End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.\n\n- `metrics: 'count' | 'search_share'[]`\n  Metrics to include. `search_share` is the per-prompt occurrence rate.\n\n- `start_date: string`\n  Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.\n\n- `date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week'`\n  Date interval for the report. (only used with date dimension)\n\n- `dimensions?: string[]`\n  Dimensions to group the report by.\n\n- `filters?: { field: 'hostname'; operator: string; value: string | string[]; } | { field: 'path'; operator: string; value: string | string[]; } | { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'url'; operator: string; value: string | string[]; } | { field: 'root_domain'; operator: string; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'search_query'; operator: string; value: string | string[]; }[]`\n  List of filters to apply to the web search results report.\n\n- `order_by?: object`\n  \n    Custom ordering of the report results.\n\n    The order is a record of key-value pairs where:\n    - `key` is the field to order by, which can be a metric or dimension\n    - `value` is the direction of the order, either `asc` for ascending or `desc` for descending.\n\n    When not specified, the default order is the first metric in the query descending.\n            \n\n- `pagination?: { limit?: number; offset?: number; }`\n  Pagination settings for the report results.\n  - `limit?: number`\n    Maximum number of results to return. Default is 10,000, maximum is 50,000.\n  - `offset?: number`\n    Offset for the results. Used for pagination.\n\n### Returns\n\n- `{ data: { dimensions: string[]; metrics: number | string[]; }[]; info: { total_rows: number; query?: object; }; }`\n\n  - `data: { dimensions: string[]; metrics: number | string[]; }[]`\n  - `info: { total_rows: number; query?: object; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.reports.webSearchResults.query({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: '2019-12-27T18:11:19.117Z',\n  metrics: ['count'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.webSearchResults.query',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.webSearchResults.query({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: '2019-12-27T18:11:19.117Z',\n  metrics: ['count'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'reports.web_search_results.query',
        example:
          'import os\nfrom datetime import datetime\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.reports.web_search_results.query(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n    metrics=["count"],\n    start_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/reports/web-search-results \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "2019-12-27T18:11:19.117Z",\n          "metrics": [\n            "count"\n          ],\n          "start_date": "2019-12-27T18:11:19.117Z",\n          "order_by": {\n            "date": "asc"\n          }\n        }\'',
      },
    },
  },
  {
    name: 'stream',
    endpoint: '/v1/reports/web-search-results/stream',
    httpMethod: 'post',
    summary: 'Stream Web Search Results',
    description: 'Stream Web Search Results',
    stainlessPath: '(resource) reports.web_search_results > (method) stream',
    qualified: 'client.reports.webSearchResults.stream',
    params: [
      'category_id: string;',
      'end_date: string;',
      "metrics: 'count' | 'search_share'[];",
      'start_date: string;',
      "date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week';",
      'dimensions?: string[];',
      "filters?: { field: 'hostname'; operator: string; value: string | string[]; } | { field: 'path'; operator: string; value: string | string[]; } | { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'url'; operator: string; value: string | string[]; } | { field: 'root_domain'; operator: string; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'search_query'; operator: string; value: string | string[]; }[];",
      'order_by?: object;',
      'pagination?: { limit?: number; offset?: number; };',
    ],
    response: '{ query: object; total_rows: number; } | object',
    markdown:
      "## stream\n\n`client.reports.webSearchResults.stream(category_id: string, end_date: string, metrics: 'count' | 'search_share'[], start_date: string, date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week', dimensions?: string[], filters?: { field: 'hostname'; operator: string; value: string | string[]; } | { field: 'path'; operator: string; value: string | string[]; } | { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'url'; operator: string; value: string | string[]; } | { field: 'root_domain'; operator: string; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'search_query'; operator: string; value: string | string[]; }[], order_by?: object, pagination?: { limit?: number; offset?: number; }): { query: object; total_rows: number; } | object`\n\n**post** `/v1/reports/web-search-results/stream`\n\nStream Web Search Results\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n  End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.\n\n- `metrics: 'count' | 'search_share'[]`\n  Metrics to include. `search_share` is the per-prompt occurrence rate.\n\n- `start_date: string`\n  Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.\n\n- `date_interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'relative_week'`\n  Date interval for the report. (only used with date dimension)\n\n- `dimensions?: string[]`\n  Dimensions to group the report by.\n\n- `filters?: { field: 'hostname'; operator: string; value: string | string[]; } | { field: 'path'; operator: string; value: string | string[]; } | { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'url'; operator: string; value: string | string[]; } | { field: 'root_domain'; operator: string; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'search_query'; operator: string; value: string | string[]; }[]`\n  List of filters to apply to the web search results report.\n\n- `order_by?: object`\n  \n    Custom ordering of the report results.\n\n    The order is a record of key-value pairs where:\n    - `key` is the field to order by, which can be a metric or dimension\n    - `value` is the direction of the order, either `asc` for ascending or `desc` for descending.\n\n    When not specified, the default order is the first metric in the query descending.\n            \n\n- `pagination?: { limit?: number; offset?: number; }`\n  Offset-based pagination parameters.\n  - `limit?: number`\n    Maximum number of results to return. Default is 10,000, maximum is 50,000.\n  - `offset?: number`\n    Offset for the results. Used for pagination.\n\n### Returns\n\n- `{ query: object; total_rows: number; } | object`\n  A streamed web-search-results report row payload.\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst stream = await client.reports.webSearchResults.stream({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: '2019-12-27T18:11:19.117Z',\n  metrics: ['count'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\nfor await (const webSearchResultStreamResponse of stream) {\n  console.log(webSearchResultStreamResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.webSearchResults.stream',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.webSearchResults.stream({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: '2019-12-27T18:11:19.117Z',\n  metrics: ['count'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(response);",
      },
      python: {
        method: 'reports.web_search_results.stream',
        example:
          'import os\nfrom datetime import datetime\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nfor web_search_result in client.reports.web_search_results.stream(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n    metrics=["count"],\n    start_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n):\n  print(web_search_result)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/reports/web-search-results/stream \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "2019-12-27T18:11:19.117Z",\n          "metrics": [\n            "count"\n          ],\n          "start_date": "2019-12-27T18:11:19.117Z",\n          "order_by": {\n            "date": "asc"\n          }\n        }\'',
      },
    },
  },
  {
    name: 'brands',
    endpoint: '/v2/reports/shopping/brands',
    httpMethod: 'post',
    summary: 'Query Shopping Brands V2',
    description: 'Query Shopping Brands V2',
    stainlessPath: '(resource) reports.shopping > (method) brands',
    qualified: 'client.reports.shopping.brands',
    params: [
      'category_id: string;',
      'end_date: string;',
      'start_date: string;',
      'assets?: string | string[];',
      'cursor?: string;',
      'filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; };',
      "group_by?: 'date' | 'topic' | 'region' | 'prompt'[];",
      "interval?: 'day' | 'week' | 'month';",
      'limit?: number;',
      'max_results?: number;',
      "metrics?: 'visibility_score' | 'average_position' | 'visibility_rank'[];",
      "scope?: 'owned' | 'all';",
    ],
    response:
      '{ data: { asset?: object; average_position?: number; date?: string; prompt?: { id?: string; name?: string; }; rank?: number; region?: { id?: string; name?: string; }; topic?: { id?: string; name?: string; }; visibility_rank?: number; visibility_score?: number; }[]; info: { count: number; end_date: string; metrics: string[]; models: string[]; scope: string; start_date: string; assets?: string | string[]; filter?: object; next_cursor?: string; total_results?: number; }; }',
    markdown:
      "## brands\n\n`client.reports.shopping.brands(category_id: string, end_date: string, start_date: string, assets?: string | string[], cursor?: string, filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }, group_by?: 'date' | 'topic' | 'region' | 'prompt'[], interval?: 'day' | 'week' | 'month', limit?: number, max_results?: number, metrics?: 'visibility_score' | 'average_position' | 'visibility_rank'[], scope?: 'owned' | 'all'): { data: object[]; info: object; }`\n\n**post** `/v2/reports/shopping/brands`\n\nQuery Shopping Brands V2\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `start_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `assets?: string | string[]`\n  Restrict to these asset names (a name or list). Overrides `scope`.\n\n- `cursor?: string`\n\n- `filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }`\n  A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.\n  - `and?: object[]`\n  - `field?: string`\n  - `not?: object`\n  - `op?: string`\n  - `or?: object[]`\n  - `value?: object`\n\n- `group_by?: 'date' | 'topic' | 'region' | 'prompt'[]`\n\n- `interval?: 'day' | 'week' | 'month'`\n\n- `limit?: number`\n  Page size for scope=all; default 10, max 50.\n\n- `max_results?: number`\n  Stream endpoint only: cap the number of streamed rows (default: all).\n\n- `metrics?: 'visibility_score' | 'average_position' | 'visibility_rank'[]`\n\n- `scope?: 'owned' | 'all'`\n\n### Returns\n\n- `{ data: { asset?: object; average_position?: number; date?: string; prompt?: { id?: string; name?: string; }; rank?: number; region?: { id?: string; name?: string; }; topic?: { id?: string; name?: string; }; visibility_rank?: number; visibility_score?: number; }[]; info: { count: number; end_date: string; metrics: string[]; models: string[]; scope: string; start_date: string; assets?: string | string[]; filter?: object; next_cursor?: string; total_results?: number; }; }`\n\n  - `data: { asset?: object; average_position?: number; date?: string; prompt?: { id?: string; name?: string; }; rank?: number; region?: { id?: string; name?: string; }; topic?: { id?: string; name?: string; }; visibility_rank?: number; visibility_score?: number; }[]`\n  - `info: { count: number; end_date: string; metrics: string[]; models: string[]; scope: string; start_date: string; assets?: string | string[]; filter?: object; next_cursor?: string; total_results?: number; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.reports.shopping.brands({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.shopping.brands',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.shopping.brands({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'reports.shopping.brands',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.reports.shopping.brands(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date="end_date",\n    start_date="start_date",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v2/reports/shopping/brands \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "end_date",\n          "start_date": "start_date"\n        }\'',
      },
    },
  },
  {
    name: 'stream_brands',
    endpoint: '/v2/reports/shopping/brands/stream',
    httpMethod: 'post',
    summary: 'Stream Shopping Brands V2',
    description: 'Stream Shopping Brands V2',
    stainlessPath: '(resource) reports.shopping > (method) stream_brands',
    qualified: 'client.reports.shopping.streamBrands',
    params: [
      'category_id: string;',
      'end_date: string;',
      'start_date: string;',
      'assets?: string | string[];',
      'cursor?: string;',
      'filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; };',
      "group_by?: 'date' | 'topic' | 'region' | 'prompt'[];",
      "interval?: 'day' | 'week' | 'month';",
      'limit?: number;',
      'max_results?: number;',
      "metrics?: 'visibility_score' | 'average_position' | 'visibility_rank'[];",
      "scope?: 'owned' | 'all';",
    ],
    response:
      '{ count: number; end_date: string; metrics: string[]; models: string[]; scope: string; start_date: string; assets?: string | string[]; filter?: object; next_cursor?: string; total_results?: number; } | { asset?: object; average_position?: number; date?: string; prompt?: { id?: string; name?: string; }; rank?: number; region?: { id?: string; name?: string; }; topic?: { id?: string; name?: string; }; visibility_rank?: number; visibility_score?: number; }',
    markdown:
      "## stream_brands\n\n`client.reports.shopping.streamBrands(category_id: string, end_date: string, start_date: string, assets?: string | string[], cursor?: string, filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }, group_by?: 'date' | 'topic' | 'region' | 'prompt'[], interval?: 'day' | 'week' | 'month', limit?: number, max_results?: number, metrics?: 'visibility_score' | 'average_position' | 'visibility_rank'[], scope?: 'owned' | 'all'): { count: number; end_date: string; metrics: string[]; models: string[]; scope: string; start_date: string; assets?: string | string[]; filter?: object; next_cursor?: string; total_results?: number; } | { asset?: object; average_position?: number; date?: string; prompt?: object; rank?: number; region?: object; topic?: object; visibility_rank?: number; visibility_score?: number; }`\n\n**post** `/v2/reports/shopping/brands/stream`\n\nStream Shopping Brands V2\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `start_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `assets?: string | string[]`\n  Restrict to these asset names (a name or list). Overrides `scope`.\n\n- `cursor?: string`\n\n- `filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }`\n  A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.\n  - `and?: object[]`\n  - `field?: string`\n  - `not?: object`\n  - `op?: string`\n  - `or?: object[]`\n  - `value?: object`\n\n- `group_by?: 'date' | 'topic' | 'region' | 'prompt'[]`\n\n- `interval?: 'day' | 'week' | 'month'`\n\n- `limit?: number`\n  Page size for scope=all; default 10, max 50.\n\n- `max_results?: number`\n  Stream endpoint only: cap the number of streamed rows (default: all).\n\n- `metrics?: 'visibility_score' | 'average_position' | 'visibility_rank'[]`\n\n- `scope?: 'owned' | 'all'`\n\n### Returns\n\n- `{ count: number; end_date: string; metrics: string[]; models: string[]; scope: string; start_date: string; assets?: string | string[]; filter?: object; next_cursor?: string; total_results?: number; } | { asset?: object; average_position?: number; date?: string; prompt?: { id?: string; name?: string; }; rank?: number; region?: { id?: string; name?: string; }; topic?: { id?: string; name?: string; }; visibility_rank?: number; visibility_score?: number; }`\n  `summary` event payload (the report `info` block).\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst stream = await client.reports.shopping.streamBrands({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\nfor await (const shoppingStreamBrandsResponse of stream) {\n  console.log(shoppingStreamBrandsResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.shopping.streamBrands',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.shopping.streamBrands({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response);",
      },
      python: {
        method: 'reports.shopping.stream_brands',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nfor shopping in client.reports.shopping.stream_brands(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date="end_date",\n    start_date="start_date",\n):\n  print(shopping)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v2/reports/shopping/brands/stream \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "end_date",\n          "start_date": "start_date"\n        }\'',
      },
    },
  },
  {
    name: 'products',
    endpoint: '/v2/reports/shopping/products',
    httpMethod: 'post',
    summary: 'Query Shopping Products V2',
    description: 'Query Shopping Products V2',
    stainlessPath: '(resource) reports.shopping > (method) products',
    qualified: 'client.reports.shopping.products',
    params: [
      'category_id: string;',
      'end_date: string;',
      'start_date: string;',
      'competitor_limit?: number;',
      'cursor?: string;',
      'filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; };',
      "group_by?: 'date' | 'topic' | 'prompt'[];",
      'include_merchants?: boolean;',
      "interval?: 'day' | 'week' | 'month';",
      'limit?: number;',
      'max_results?: number;',
      'metrics?: string[];',
      'target_product?: string;',
    ],
    response:
      '{ data: { average_position?: number; date?: string; merchants?: object[]; position_above3_percentage?: number; position1_percentage?: number; position2_percentage?: number; position3_percentage?: number; product?: object; product_image_urls?: string[]; product_num_reviews?: number; product_rating?: number; product_url?: string; prompt?: { id?: string; name?: string; }; topic?: { id?: string; name?: string; }; visibility_rank?: number; visibility_score?: number; }[]; info: { count: number; end_date: string; include_merchants: boolean; metrics: string[]; models: string[]; start_date: string; filter?: object; next_cursor?: string; total_results?: number; }; }',
    markdown:
      "## products\n\n`client.reports.shopping.products(category_id: string, end_date: string, start_date: string, competitor_limit?: number, cursor?: string, filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }, group_by?: 'date' | 'topic' | 'prompt'[], include_merchants?: boolean, interval?: 'day' | 'week' | 'month', limit?: number, max_results?: number, metrics?: string[], target_product?: string): { data: object[]; info: object; }`\n\n**post** `/v2/reports/shopping/products`\n\nQuery Shopping Products V2\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `start_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `competitor_limit?: number`\n  Competitors returned when `target_product` is set.\n\n- `cursor?: string`\n\n- `filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }`\n  A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.\n  - `and?: object[]`\n  - `field?: string`\n  - `not?: object`\n  - `op?: string`\n  - `or?: object[]`\n  - `value?: object`\n\n- `group_by?: 'date' | 'topic' | 'prompt'[]`\n\n- `include_merchants?: boolean`\n  Include per-product merchant offers (names, prices, urls, images).\n\n- `interval?: 'day' | 'week' | 'month'`\n\n- `limit?: number`\n  Page size; default 10, max 50.\n\n- `max_results?: number`\n  Stream endpoint only: cap streamed rows.\n\n- `metrics?: string[]`\n\n- `target_product?: string`\n  Return this product plus its top competitors (item view only).\n\n### Returns\n\n- `{ data: { average_position?: number; date?: string; merchants?: object[]; position_above3_percentage?: number; position1_percentage?: number; position2_percentage?: number; position3_percentage?: number; product?: object; product_image_urls?: string[]; product_num_reviews?: number; product_rating?: number; product_url?: string; prompt?: { id?: string; name?: string; }; topic?: { id?: string; name?: string; }; visibility_rank?: number; visibility_score?: number; }[]; info: { count: number; end_date: string; include_merchants: boolean; metrics: string[]; models: string[]; start_date: string; filter?: object; next_cursor?: string; total_results?: number; }; }`\n\n  - `data: { average_position?: number; date?: string; merchants?: object[]; position_above3_percentage?: number; position1_percentage?: number; position2_percentage?: number; position3_percentage?: number; product?: object; product_image_urls?: string[]; product_num_reviews?: number; product_rating?: number; product_url?: string; prompt?: { id?: string; name?: string; }; topic?: { id?: string; name?: string; }; visibility_rank?: number; visibility_score?: number; }[]`\n  - `info: { count: number; end_date: string; include_merchants: boolean; metrics: string[]; models: string[]; start_date: string; filter?: object; next_cursor?: string; total_results?: number; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.reports.shopping.products({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.shopping.products',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.shopping.products({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'reports.shopping.products',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.reports.shopping.products(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date="end_date",\n    start_date="start_date",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v2/reports/shopping/products \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "end_date",\n          "start_date": "start_date"\n        }\'',
      },
    },
  },
  {
    name: 'stream_products',
    endpoint: '/v2/reports/shopping/products/stream',
    httpMethod: 'post',
    summary: 'Stream Shopping Products V2',
    description: 'Stream Shopping Products V2',
    stainlessPath: '(resource) reports.shopping > (method) stream_products',
    qualified: 'client.reports.shopping.streamProducts',
    params: [
      'category_id: string;',
      'end_date: string;',
      'start_date: string;',
      'competitor_limit?: number;',
      'cursor?: string;',
      'filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; };',
      "group_by?: 'date' | 'topic' | 'prompt'[];",
      'include_merchants?: boolean;',
      "interval?: 'day' | 'week' | 'month';",
      'limit?: number;',
      'max_results?: number;',
      'metrics?: string[];',
      'target_product?: string;',
    ],
    response:
      '{ count: number; end_date: string; include_merchants: boolean; metrics: string[]; models: string[]; start_date: string; filter?: object; next_cursor?: string; total_results?: number; } | { average_position?: number; date?: string; merchants?: object[]; position_above3_percentage?: number; position1_percentage?: number; position2_percentage?: number; position3_percentage?: number; product?: object; product_image_urls?: string[]; product_num_reviews?: number; product_rating?: number; product_url?: string; prompt?: { id?: string; name?: string; }; topic?: { id?: string; name?: string; }; visibility_rank?: number; visibility_score?: number; }',
    markdown:
      "## stream_products\n\n`client.reports.shopping.streamProducts(category_id: string, end_date: string, start_date: string, competitor_limit?: number, cursor?: string, filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }, group_by?: 'date' | 'topic' | 'prompt'[], include_merchants?: boolean, interval?: 'day' | 'week' | 'month', limit?: number, max_results?: number, metrics?: string[], target_product?: string): { count: number; end_date: string; include_merchants: boolean; metrics: string[]; models: string[]; start_date: string; filter?: object; next_cursor?: string; total_results?: number; } | { average_position?: number; date?: string; merchants?: object[]; position_above3_percentage?: number; position1_percentage?: number; position2_percentage?: number; position3_percentage?: number; product?: object; product_image_urls?: string[]; product_num_reviews?: number; product_rating?: number; product_url?: string; prompt?: object; topic?: object; visibility_rank?: number; visibility_score?: number; }`\n\n**post** `/v2/reports/shopping/products/stream`\n\nStream Shopping Products V2\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `start_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `competitor_limit?: number`\n  Competitors returned when `target_product` is set.\n\n- `cursor?: string`\n\n- `filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }`\n  A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.\n  - `and?: object[]`\n  - `field?: string`\n  - `not?: object`\n  - `op?: string`\n  - `or?: object[]`\n  - `value?: object`\n\n- `group_by?: 'date' | 'topic' | 'prompt'[]`\n\n- `include_merchants?: boolean`\n  Include per-product merchant offers (names, prices, urls, images).\n\n- `interval?: 'day' | 'week' | 'month'`\n\n- `limit?: number`\n  Page size; default 10, max 50.\n\n- `max_results?: number`\n  Stream endpoint only: cap streamed rows.\n\n- `metrics?: string[]`\n\n- `target_product?: string`\n  Return this product plus its top competitors (item view only).\n\n### Returns\n\n- `{ count: number; end_date: string; include_merchants: boolean; metrics: string[]; models: string[]; start_date: string; filter?: object; next_cursor?: string; total_results?: number; } | { average_position?: number; date?: string; merchants?: object[]; position_above3_percentage?: number; position1_percentage?: number; position2_percentage?: number; position3_percentage?: number; product?: object; product_image_urls?: string[]; product_num_reviews?: number; product_rating?: number; product_url?: string; prompt?: { id?: string; name?: string; }; topic?: { id?: string; name?: string; }; visibility_rank?: number; visibility_score?: number; }`\n  `summary` event payload (the report `info` block).\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst stream = await client.reports.shopping.streamProducts({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\nfor await (const shoppingStreamProductsResponse of stream) {\n  console.log(shoppingStreamProductsResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.shopping.streamProducts',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.shopping.streamProducts({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response);",
      },
      python: {
        method: 'reports.shopping.stream_products',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nfor shopping in client.reports.shopping.stream_products(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date="end_date",\n    start_date="start_date",\n):\n  print(shopping)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v2/reports/shopping/products/stream \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "end_date",\n          "start_date": "start_date"\n        }\'',
      },
    },
  },
  {
    name: 'merchants',
    endpoint: '/v2/reports/shopping/merchants',
    httpMethod: 'post',
    summary: 'Query Shopping Merchants V2',
    description: 'Query Shopping Merchants V2',
    stainlessPath: '(resource) reports.shopping > (method) merchants',
    qualified: 'client.reports.shopping.merchants',
    params: [
      'category_id: string;',
      'end_date: string;',
      'start_date: string;',
      'cursor?: string;',
      'filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; };',
      "group_by?: 'date' | 'brand' | 'product'[];",
      "interval?: 'day' | 'week' | 'month';",
      'limit?: number;',
      'max_results?: number;',
      'metrics?: string[];',
    ],
    response:
      '{ data: { brand_name?: string; brand_share?: number; date?: string; merchant_name?: string; merchant_share?: number; merchant_share_rank?: number; merchant_visibility?: number; merchant_visibility_rank?: number; product?: object; product_rank?: number; product_visibility?: number; visibility_rank?: number; }[]; info: { count: number; end_date: string; metrics: string[]; models: string[]; start_date: string; view: string; filter?: object; next_cursor?: string; total_results?: number; }; }',
    markdown:
      "## merchants\n\n`client.reports.shopping.merchants(category_id: string, end_date: string, start_date: string, cursor?: string, filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }, group_by?: 'date' | 'brand' | 'product'[], interval?: 'day' | 'week' | 'month', limit?: number, max_results?: number, metrics?: string[]): { data: object[]; info: object; }`\n\n**post** `/v2/reports/shopping/merchants`\n\nQuery Shopping Merchants V2\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `start_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `cursor?: string`\n\n- `filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }`\n  A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.\n  - `and?: object[]`\n  - `field?: string`\n  - `not?: object`\n  - `op?: string`\n  - `or?: object[]`\n  - `value?: object`\n\n- `group_by?: 'date' | 'brand' | 'product'[]`\n  `[]` = distribution; `[brand]` = brand share within each merchant; `[product]` = top products per merchant. `date` (distribution only) adds a time series.\n\n- `interval?: 'day' | 'week' | 'month'`\n\n- `limit?: number`\n  Page size; default 10, max 50.\n\n- `max_results?: number`\n  Stream endpoint only: cap streamed rows.\n\n- `metrics?: string[]`\n  Defaults to the chosen view's metrics; must be valid for that view.\n\n### Returns\n\n- `{ data: { brand_name?: string; brand_share?: number; date?: string; merchant_name?: string; merchant_share?: number; merchant_share_rank?: number; merchant_visibility?: number; merchant_visibility_rank?: number; product?: object; product_rank?: number; product_visibility?: number; visibility_rank?: number; }[]; info: { count: number; end_date: string; metrics: string[]; models: string[]; start_date: string; view: string; filter?: object; next_cursor?: string; total_results?: number; }; }`\n\n  - `data: { brand_name?: string; brand_share?: number; date?: string; merchant_name?: string; merchant_share?: number; merchant_share_rank?: number; merchant_visibility?: number; merchant_visibility_rank?: number; product?: object; product_rank?: number; product_visibility?: number; visibility_rank?: number; }[]`\n  - `info: { count: number; end_date: string; metrics: string[]; models: string[]; start_date: string; view: string; filter?: object; next_cursor?: string; total_results?: number; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.reports.shopping.merchants({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.shopping.merchants',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.shopping.merchants({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'reports.shopping.merchants',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.reports.shopping.merchants(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date="end_date",\n    start_date="start_date",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v2/reports/shopping/merchants \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "end_date",\n          "start_date": "start_date"\n        }\'',
      },
    },
  },
  {
    name: 'stream_merchants',
    endpoint: '/v2/reports/shopping/merchants/stream',
    httpMethod: 'post',
    summary: 'Stream Shopping Merchants V2',
    description: 'Stream Shopping Merchants V2',
    stainlessPath: '(resource) reports.shopping > (method) stream_merchants',
    qualified: 'client.reports.shopping.streamMerchants',
    params: [
      'category_id: string;',
      'end_date: string;',
      'start_date: string;',
      'cursor?: string;',
      'filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; };',
      "group_by?: 'date' | 'brand' | 'product'[];",
      "interval?: 'day' | 'week' | 'month';",
      'limit?: number;',
      'max_results?: number;',
      'metrics?: string[];',
    ],
    response:
      '{ count: number; end_date: string; metrics: string[]; models: string[]; start_date: string; view: string; filter?: object; next_cursor?: string; total_results?: number; } | { brand_name?: string; brand_share?: number; date?: string; merchant_name?: string; merchant_share?: number; merchant_share_rank?: number; merchant_visibility?: number; merchant_visibility_rank?: number; product?: object; product_rank?: number; product_visibility?: number; visibility_rank?: number; }',
    markdown:
      "## stream_merchants\n\n`client.reports.shopping.streamMerchants(category_id: string, end_date: string, start_date: string, cursor?: string, filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }, group_by?: 'date' | 'brand' | 'product'[], interval?: 'day' | 'week' | 'month', limit?: number, max_results?: number, metrics?: string[]): { count: number; end_date: string; metrics: string[]; models: string[]; start_date: string; view: string; filter?: object; next_cursor?: string; total_results?: number; } | { brand_name?: string; brand_share?: number; date?: string; merchant_name?: string; merchant_share?: number; merchant_share_rank?: number; merchant_visibility?: number; merchant_visibility_rank?: number; product?: object; product_rank?: number; product_visibility?: number; visibility_rank?: number; }`\n\n**post** `/v2/reports/shopping/merchants/stream`\n\nStream Shopping Merchants V2\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `start_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `cursor?: string`\n\n- `filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }`\n  A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.\n  - `and?: object[]`\n  - `field?: string`\n  - `not?: object`\n  - `op?: string`\n  - `or?: object[]`\n  - `value?: object`\n\n- `group_by?: 'date' | 'brand' | 'product'[]`\n  `[]` = distribution; `[brand]` = brand share within each merchant; `[product]` = top products per merchant. `date` (distribution only) adds a time series.\n\n- `interval?: 'day' | 'week' | 'month'`\n\n- `limit?: number`\n  Page size; default 10, max 50.\n\n- `max_results?: number`\n  Stream endpoint only: cap streamed rows.\n\n- `metrics?: string[]`\n  Defaults to the chosen view's metrics; must be valid for that view.\n\n### Returns\n\n- `{ count: number; end_date: string; metrics: string[]; models: string[]; start_date: string; view: string; filter?: object; next_cursor?: string; total_results?: number; } | { brand_name?: string; brand_share?: number; date?: string; merchant_name?: string; merchant_share?: number; merchant_share_rank?: number; merchant_visibility?: number; merchant_visibility_rank?: number; product?: object; product_rank?: number; product_visibility?: number; visibility_rank?: number; }`\n  `summary` event payload (the report `info` block).\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst stream = await client.reports.shopping.streamMerchants({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\nfor await (const shoppingStreamMerchantsResponse of stream) {\n  console.log(shoppingStreamMerchantsResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.shopping.streamMerchants',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.shopping.streamMerchants({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response);",
      },
      python: {
        method: 'reports.shopping.stream_merchants',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nfor shopping in client.reports.shopping.stream_merchants(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date="end_date",\n    start_date="start_date",\n):\n  print(shopping)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v2/reports/shopping/merchants/stream \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "end_date",\n          "start_date": "start_date"\n        }\'',
      },
    },
  },
  {
    name: 'trigger_rate',
    endpoint: '/v2/reports/shopping/trigger-rate',
    httpMethod: 'post',
    summary: 'Query Shopping Trigger Rate V2',
    description: 'Query Shopping Trigger Rate V2',
    stainlessPath: '(resource) reports.shopping > (method) trigger_rate',
    qualified: 'client.reports.shopping.triggerRate',
    params: [
      'category_id: string;',
      'end_date: string;',
      'start_date: string;',
      'cursor?: string;',
      'filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; };',
      "group_by?: 'date' | 'topic' | 'region' | 'persona' | 'prompt'[];",
      "interval?: 'day' | 'week' | 'month';",
      'limit?: number;',
      'max_results?: number;',
      "metrics?: 'total_runs' | 'shopping_triggered_runs' | 'trigger_rate_percentage'[];",
    ],
    response:
      '{ data: { date?: string; persona?: { id?: string; name?: string; }; prompt?: { id?: string; name?: string; }; region?: { id?: string; name?: string; }; shopping_triggered_runs?: number; topic?: { id?: string; name?: string; }; total_runs?: number; trigger_rate_percentage?: number; }[]; info: { count: number; end_date: string; metrics: string[]; models: string[]; start_date: string; filter?: object; next_cursor?: string; total_results?: number; }; }',
    markdown:
      "## trigger_rate\n\n`client.reports.shopping.triggerRate(category_id: string, end_date: string, start_date: string, cursor?: string, filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }, group_by?: 'date' | 'topic' | 'region' | 'persona' | 'prompt'[], interval?: 'day' | 'week' | 'month', limit?: number, max_results?: number, metrics?: 'total_runs' | 'shopping_triggered_runs' | 'trigger_rate_percentage'[]): { data: object[]; info: object; }`\n\n**post** `/v2/reports/shopping/trigger-rate`\n\nQuery Shopping Trigger Rate V2\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `start_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `cursor?: string`\n\n- `filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }`\n  A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.\n  - `and?: object[]`\n  - `field?: string`\n  - `not?: object`\n  - `op?: string`\n  - `or?: object[]`\n  - `value?: object`\n\n- `group_by?: 'date' | 'topic' | 'region' | 'persona' | 'prompt'[]`\n  Group by `prompt`/`topic` for the per-prompt/-topic trigger rate.\n\n- `interval?: 'day' | 'week' | 'month'`\n\n- `limit?: number`\n  Page size; default 10, max 50.\n\n- `max_results?: number`\n  Stream endpoint only: cap streamed rows.\n\n- `metrics?: 'total_runs' | 'shopping_triggered_runs' | 'trigger_rate_percentage'[]`\n\n### Returns\n\n- `{ data: { date?: string; persona?: { id?: string; name?: string; }; prompt?: { id?: string; name?: string; }; region?: { id?: string; name?: string; }; shopping_triggered_runs?: number; topic?: { id?: string; name?: string; }; total_runs?: number; trigger_rate_percentage?: number; }[]; info: { count: number; end_date: string; metrics: string[]; models: string[]; start_date: string; filter?: object; next_cursor?: string; total_results?: number; }; }`\n\n  - `data: { date?: string; persona?: { id?: string; name?: string; }; prompt?: { id?: string; name?: string; }; region?: { id?: string; name?: string; }; shopping_triggered_runs?: number; topic?: { id?: string; name?: string; }; total_runs?: number; trigger_rate_percentage?: number; }[]`\n  - `info: { count: number; end_date: string; metrics: string[]; models: string[]; start_date: string; filter?: object; next_cursor?: string; total_results?: number; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.reports.shopping.triggerRate({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.shopping.triggerRate',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.shopping.triggerRate({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'reports.shopping.trigger_rate',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.reports.shopping.trigger_rate(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date="end_date",\n    start_date="start_date",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v2/reports/shopping/trigger-rate \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "end_date",\n          "start_date": "start_date"\n        }\'',
      },
    },
  },
  {
    name: 'stream_trigger_rate',
    endpoint: '/v2/reports/shopping/trigger-rate/stream',
    httpMethod: 'post',
    summary: 'Stream Shopping Trigger Rate V2',
    description: 'Stream Shopping Trigger Rate V2',
    stainlessPath: '(resource) reports.shopping > (method) stream_trigger_rate',
    qualified: 'client.reports.shopping.streamTriggerRate',
    params: [
      'category_id: string;',
      'end_date: string;',
      'start_date: string;',
      'cursor?: string;',
      'filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; };',
      "group_by?: 'date' | 'topic' | 'region' | 'persona' | 'prompt'[];",
      "interval?: 'day' | 'week' | 'month';",
      'limit?: number;',
      'max_results?: number;',
      "metrics?: 'total_runs' | 'shopping_triggered_runs' | 'trigger_rate_percentage'[];",
    ],
    response:
      '{ count: number; end_date: string; metrics: string[]; models: string[]; start_date: string; filter?: object; next_cursor?: string; total_results?: number; } | { date?: string; persona?: { id?: string; name?: string; }; prompt?: { id?: string; name?: string; }; region?: { id?: string; name?: string; }; shopping_triggered_runs?: number; topic?: { id?: string; name?: string; }; total_runs?: number; trigger_rate_percentage?: number; }',
    markdown:
      "## stream_trigger_rate\n\n`client.reports.shopping.streamTriggerRate(category_id: string, end_date: string, start_date: string, cursor?: string, filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }, group_by?: 'date' | 'topic' | 'region' | 'persona' | 'prompt'[], interval?: 'day' | 'week' | 'month', limit?: number, max_results?: number, metrics?: 'total_runs' | 'shopping_triggered_runs' | 'trigger_rate_percentage'[]): { count: number; end_date: string; metrics: string[]; models: string[]; start_date: string; filter?: object; next_cursor?: string; total_results?: number; } | { date?: string; persona?: object; prompt?: object; region?: object; shopping_triggered_runs?: number; topic?: object; total_runs?: number; trigger_rate_percentage?: number; }`\n\n**post** `/v2/reports/shopping/trigger-rate/stream`\n\nStream Shopping Trigger Rate V2\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `start_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `cursor?: string`\n\n- `filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }`\n  A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.\n  - `and?: object[]`\n  - `field?: string`\n  - `not?: object`\n  - `op?: string`\n  - `or?: object[]`\n  - `value?: object`\n\n- `group_by?: 'date' | 'topic' | 'region' | 'persona' | 'prompt'[]`\n  Group by `prompt`/`topic` for the per-prompt/-topic trigger rate.\n\n- `interval?: 'day' | 'week' | 'month'`\n\n- `limit?: number`\n  Page size; default 10, max 50.\n\n- `max_results?: number`\n  Stream endpoint only: cap streamed rows.\n\n- `metrics?: 'total_runs' | 'shopping_triggered_runs' | 'trigger_rate_percentage'[]`\n\n### Returns\n\n- `{ count: number; end_date: string; metrics: string[]; models: string[]; start_date: string; filter?: object; next_cursor?: string; total_results?: number; } | { date?: string; persona?: { id?: string; name?: string; }; prompt?: { id?: string; name?: string; }; region?: { id?: string; name?: string; }; shopping_triggered_runs?: number; topic?: { id?: string; name?: string; }; total_runs?: number; trigger_rate_percentage?: number; }`\n  `summary` event payload (the report `info` block).\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst stream = await client.reports.shopping.streamTriggerRate({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\nfor await (const shoppingStreamTriggerRateResponse of stream) {\n  console.log(shoppingStreamTriggerRateResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.shopping.streamTriggerRate',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.shopping.streamTriggerRate({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response);",
      },
      python: {
        method: 'reports.shopping.stream_trigger_rate',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nfor shopping in client.reports.shopping.stream_trigger_rate(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date="end_date",\n    start_date="start_date",\n):\n  print(shopping)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v2/reports/shopping/trigger-rate/stream \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "end_date",\n          "start_date": "start_date"\n        }\'',
      },
    },
  },
  {
    name: 'create_overview',
    endpoint: '/v1/reports/accuracy/overview',
    httpMethod: 'post',
    summary: 'Accuracy Overview',
    description: 'Accuracy Overview',
    stainlessPath: '(resource) reports.accuracy > (method) create_overview',
    qualified: 'client.reports.accuracy.createOverview',
    params: [
      'category_id: string;',
      'end_date: string;',
      'start_date: string;',
      'citation_categories?: string[];',
      'comparison_end_date?: string;',
      'comparison_start_date?: string;',
      'date_bucket?: string;',
      'exclude_topic_ids?: boolean;',
      "group_by?: 'period' | 'theme';",
      'include_no_persona?: boolean;',
      'include_no_tag?: boolean;',
      'persona_ids?: string[];',
      'platform_ids?: string[];',
      'prompt_ids?: string[];',
      'region_ids?: string[];',
      "tag_filter_type?: 'all' | 'any';",
      'tag_ids?: string[];',
      'topic_ids?: string[];',
    ],
    response:
      '{ overallAccuracy: number; scoreBreakdown: { count: number; share: number; status: string; countChange?: number; shareChange?: number; }[]; trendByPeriod: { accurate: number; date: string; ratio: number; total: number; prevPeriodData?: object; verified?: number; }[]; accuracyChange?: number; availableSeries?: { id: string; label: string; total: number; }[]; themeTrend?: { id: string; data: { accurate: number; date: string; ratio: number; total: number; }[]; label: string; }[]; }',
    markdown:
      "## create_overview\n\n`client.reports.accuracy.createOverview(category_id: string, end_date: string, start_date: string, citation_categories?: string[], comparison_end_date?: string, comparison_start_date?: string, date_bucket?: string, exclude_topic_ids?: boolean, group_by?: 'period' | 'theme', include_no_persona?: boolean, include_no_tag?: boolean, persona_ids?: string[], platform_ids?: string[], prompt_ids?: string[], region_ids?: string[], tag_filter_type?: 'all' | 'any', tag_ids?: string[], topic_ids?: string[]): { overallAccuracy: number; scoreBreakdown: object[]; trendByPeriod: object[]; accuracyChange?: number; availableSeries?: object[]; themeTrend?: object[]; }`\n\n**post** `/v1/reports/accuracy/overview`\n\nAccuracy Overview\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n\n- `start_date: string`\n\n- `citation_categories?: string[]`\n\n- `comparison_end_date?: string`\n\n- `comparison_start_date?: string`\n\n- `date_bucket?: string`\n\n- `exclude_topic_ids?: boolean`\n\n- `group_by?: 'period' | 'theme'`\n\n- `include_no_persona?: boolean`\n\n- `include_no_tag?: boolean`\n\n- `persona_ids?: string[]`\n\n- `platform_ids?: string[]`\n\n- `prompt_ids?: string[]`\n\n- `region_ids?: string[]`\n\n- `tag_filter_type?: 'all' | 'any'`\n\n- `tag_ids?: string[]`\n\n- `topic_ids?: string[]`\n\n### Returns\n\n- `{ overallAccuracy: number; scoreBreakdown: { count: number; share: number; status: string; countChange?: number; shareChange?: number; }[]; trendByPeriod: { accurate: number; date: string; ratio: number; total: number; prevPeriodData?: object; verified?: number; }[]; accuracyChange?: number; availableSeries?: { id: string; label: string; total: number; }[]; themeTrend?: { id: string; data: { accurate: number; date: string; ratio: number; total: number; }[]; label: string; }[]; }`\n\n  - `overallAccuracy: number`\n  - `scoreBreakdown: { count: number; share: number; status: string; countChange?: number; shareChange?: number; }[]`\n  - `trendByPeriod: { accurate: number; date: string; ratio: number; total: number; prevPeriodData?: object; verified?: number; }[]`\n  - `accuracyChange?: number`\n  - `availableSeries?: { id: string; label: string; total: number; }[]`\n  - `themeTrend?: { id: string; data: { accurate: number; date: string; ratio: number; total: number; }[]; label: string; }[]`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.reports.accuracy.createOverview({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.accuracy.createOverview',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.accuracy.createOverview({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response.overallAccuracy);",
      },
      python: {
        method: 'reports.accuracy.create_overview',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.reports.accuracy.create_overview(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date="end_date",\n    start_date="start_date",\n)\nprint(response.overall_accuracy)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/reports/accuracy/overview \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "end_date",\n          "start_date": "start_date"\n        }\'',
      },
    },
  },
  {
    name: 'create_breakdown',
    endpoint: '/v1/reports/accuracy/breakdown',
    httpMethod: 'post',
    summary: 'Accuracy Breakdown',
    description: 'Accuracy Breakdown',
    stainlessPath: '(resource) reports.accuracy > (method) create_breakdown',
    qualified: 'client.reports.accuracy.createBreakdown',
    params: [
      'category_id: string;',
      'end_date: string;',
      'start_date: string;',
      "breakdown_by?: 'citation' | 'platform' | 'topic' | 'prompt' | 'tag' | 'region' | 'persona' | 'theme';",
      'citation_categories?: string[];',
      'comparison_end_date?: string;',
      'comparison_start_date?: string;',
      'date_bucket?: string;',
      'exclude_topic_ids?: boolean;',
      "group_by?: 'platform' | 'topic' | 'prompt' | 'tag' | 'region' | 'persona' | 'theme' | 'date'[];",
      'include_no_persona?: boolean;',
      'include_no_tag?: boolean;',
      'limit?: number;',
      'offset?: number;',
      "pagination?: { dimension?: 'group'; direction?: 'asc' | 'desc'; metric?: 'accuracy' | 'inaccurate_claims'; mode?: 'current' | 'delta'; };",
      'persona_ids?: string[];',
      'platform_ids?: string[];',
      'prompt_ids?: string[];',
      'region_ids?: string[];',
      'search_query?: string;',
      "sort_by?: 'citationShare' | 'accuracy';",
      "sort_order?: 'asc' | 'desc';",
      "tag_filter_type?: 'all' | 'any';",
      'tag_ids?: string[];',
      'topic_ids?: string[];',
    ],
    response:
      '{ data: { id: string; inaccurateCount: number; name: string; responseAccuracy: number; share: number; accuracyChange?: number; accurateCount?: number; citationCategory?: string; groupIds?: object; groupNames?: object; hasScore?: boolean; inaccurateCountChange?: number; promptCount?: number; shareChange?: number; }[]; totalCount: number; }',
    markdown:
      "## create_breakdown\n\n`client.reports.accuracy.createBreakdown(category_id: string, end_date: string, start_date: string, breakdown_by?: 'citation' | 'platform' | 'topic' | 'prompt' | 'tag' | 'region' | 'persona' | 'theme', citation_categories?: string[], comparison_end_date?: string, comparison_start_date?: string, date_bucket?: string, exclude_topic_ids?: boolean, group_by?: 'platform' | 'topic' | 'prompt' | 'tag' | 'region' | 'persona' | 'theme' | 'date'[], include_no_persona?: boolean, include_no_tag?: boolean, limit?: number, offset?: number, pagination?: { dimension?: 'group'; direction?: 'asc' | 'desc'; metric?: 'accuracy' | 'inaccurate_claims'; mode?: 'current' | 'delta'; }, persona_ids?: string[], platform_ids?: string[], prompt_ids?: string[], region_ids?: string[], search_query?: string, sort_by?: 'citationShare' | 'accuracy', sort_order?: 'asc' | 'desc', tag_filter_type?: 'all' | 'any', tag_ids?: string[], topic_ids?: string[]): { data: object[]; totalCount: number; }`\n\n**post** `/v1/reports/accuracy/breakdown`\n\nAccuracy Breakdown\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n\n- `start_date: string`\n\n- `breakdown_by?: 'citation' | 'platform' | 'topic' | 'prompt' | 'tag' | 'region' | 'persona' | 'theme'`\n\n- `citation_categories?: string[]`\n\n- `comparison_end_date?: string`\n\n- `comparison_start_date?: string`\n\n- `date_bucket?: string`\n\n- `exclude_topic_ids?: boolean`\n\n- `group_by?: 'platform' | 'topic' | 'prompt' | 'tag' | 'region' | 'persona' | 'theme' | 'date'[]`\n\n- `include_no_persona?: boolean`\n\n- `include_no_tag?: boolean`\n\n- `limit?: number`\n\n- `offset?: number`\n\n- `pagination?: { dimension?: 'group'; direction?: 'asc' | 'desc'; metric?: 'accuracy' | 'inaccurate_claims'; mode?: 'current' | 'delta'; }`\n  Canonical grouped pagination plan for Accuracy Breakdown rows.\n  - `dimension?: 'group'`\n  - `direction?: 'asc' | 'desc'`\n  - `metric?: 'accuracy' | 'inaccurate_claims'`\n  - `mode?: 'current' | 'delta'`\n\n- `persona_ids?: string[]`\n\n- `platform_ids?: string[]`\n\n- `prompt_ids?: string[]`\n\n- `region_ids?: string[]`\n\n- `search_query?: string`\n\n- `sort_by?: 'citationShare' | 'accuracy'`\n\n- `sort_order?: 'asc' | 'desc'`\n\n- `tag_filter_type?: 'all' | 'any'`\n\n- `tag_ids?: string[]`\n\n- `topic_ids?: string[]`\n\n### Returns\n\n- `{ data: { id: string; inaccurateCount: number; name: string; responseAccuracy: number; share: number; accuracyChange?: number; accurateCount?: number; citationCategory?: string; groupIds?: object; groupNames?: object; hasScore?: boolean; inaccurateCountChange?: number; promptCount?: number; shareChange?: number; }[]; totalCount: number; }`\n\n  - `data: { id: string; inaccurateCount: number; name: string; responseAccuracy: number; share: number; accuracyChange?: number; accurateCount?: number; citationCategory?: string; groupIds?: object; groupNames?: object; hasScore?: boolean; inaccurateCountChange?: number; promptCount?: number; shareChange?: number; }[]`\n  - `totalCount: number`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.reports.accuracy.createBreakdown({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.accuracy.createBreakdown',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.accuracy.createBreakdown({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'reports.accuracy.create_breakdown',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.reports.accuracy.create_breakdown(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date="end_date",\n    start_date="start_date",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/reports/accuracy/breakdown \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "end_date",\n          "start_date": "start_date"\n        }\'',
      },
    },
  },
  {
    name: 'create_citation_analysis',
    endpoint: '/v1/reports/accuracy/citation-analysis',
    httpMethod: 'post',
    summary: 'Accuracy Citation Analysis',
    description: 'Accuracy Citation Analysis',
    stainlessPath: '(resource) reports.accuracy > (method) create_citation_analysis',
    qualified: 'client.reports.accuracy.createCitationAnalysis',
    params: ['category_id: string;', 'clean_href: string;', 'end_date: string;', 'start_date: string;'],
    response:
      "{ domain: string; href: string; markdownContent: string; pageTitle: string; claims?: { attribute: string; attributeId: string; claim: string; claimId: string; neutralTheme: string; neutralThemeId: string; snippet: string; evidence?: { kbName?: string; kbPath?: string; kbSnippet?: string; }[]; kbPath?: string; kbSnippet?: string; polarity?: 'positive' | 'negative'; reasoning?: string; }[]; }",
    markdown:
      "## create_citation_analysis\n\n`client.reports.accuracy.createCitationAnalysis(category_id: string, clean_href: string, end_date: string, start_date: string): { domain: string; href: string; markdownContent: string; pageTitle: string; claims?: object[]; }`\n\n**post** `/v1/reports/accuracy/citation-analysis`\n\nAccuracy Citation Analysis\n\n### Parameters\n\n- `category_id: string`\n\n- `clean_href: string`\n\n- `end_date: string`\n\n- `start_date: string`\n\n### Returns\n\n- `{ domain: string; href: string; markdownContent: string; pageTitle: string; claims?: { attribute: string; attributeId: string; claim: string; claimId: string; neutralTheme: string; neutralThemeId: string; snippet: string; evidence?: { kbName?: string; kbPath?: string; kbSnippet?: string; }[]; kbPath?: string; kbSnippet?: string; polarity?: 'positive' | 'negative'; reasoning?: string; }[]; }`\n\n  - `domain: string`\n  - `href: string`\n  - `markdownContent: string`\n  - `pageTitle: string`\n  - `claims?: { attribute: string; attributeId: string; claim: string; claimId: string; neutralTheme: string; neutralThemeId: string; snippet: string; evidence?: { kbName?: string; kbPath?: string; kbSnippet?: string; }[]; kbPath?: string; kbSnippet?: string; polarity?: 'positive' | 'negative'; reasoning?: string; }[]`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.reports.accuracy.createCitationAnalysis({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  clean_href: 'clean_href',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.accuracy.createCitationAnalysis',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.accuracy.createCitationAnalysis({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  clean_href: 'clean_href',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response.domain);",
      },
      python: {
        method: 'reports.accuracy.create_citation_analysis',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.reports.accuracy.create_citation_analysis(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    clean_href="clean_href",\n    end_date="end_date",\n    start_date="start_date",\n)\nprint(response.domain)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/reports/accuracy/citation-analysis \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "clean_href": "clean_href",\n          "end_date": "end_date",\n          "start_date": "start_date"\n        }\'',
      },
    },
  },
  {
    name: 'create_topic_ids',
    endpoint: '/v1/reports/accuracy/topic-ids',
    httpMethod: 'post',
    summary: 'Accuracy Topic Ids',
    description: 'Accuracy Topic Ids',
    stainlessPath: '(resource) reports.accuracy > (method) create_topic_ids',
    qualified: 'client.reports.accuracy.createTopicIDs',
    params: ['category_id: string;', 'end_date: string;', 'start_date: string;'],
    response: 'string[]',
    markdown:
      "## create_topic_ids\n\n`client.reports.accuracy.createTopicIDs(category_id: string, end_date: string, start_date: string): string[]`\n\n**post** `/v1/reports/accuracy/topic-ids`\n\nAccuracy Topic Ids\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n\n- `start_date: string`\n\n### Returns\n\n- `string[]`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.reports.accuracy.createTopicIDs({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.accuracy.createTopicIDs',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.accuracy.createTopicIDs({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response);",
      },
      python: {
        method: 'reports.accuracy.create_topic_ids',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.reports.accuracy.create_topic_ids(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date="end_date",\n    start_date="start_date",\n)\nprint(response)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/reports/accuracy/topic-ids \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "end_date",\n          "start_date": "start_date"\n        }\'',
      },
    },
  },
  {
    name: 'create_inaccurate_themes',
    endpoint: '/v1/reports/accuracy/inaccurate-themes',
    httpMethod: 'post',
    summary: 'Accuracy Inaccurate Themes',
    description: 'Accuracy Inaccurate Themes',
    stainlessPath: '(resource) reports.accuracy > (method) create_inaccurate_themes',
    qualified: 'client.reports.accuracy.createInaccurateThemes',
    params: [
      'category_id: string;',
      'end_date: string;',
      'start_date: string;',
      'citation_categories?: string[];',
      'comparison_end_date?: string;',
      'comparison_start_date?: string;',
      'exclude_topic_ids?: boolean;',
      'include_no_persona?: boolean;',
      'include_no_tag?: boolean;',
      'limit?: number;',
      'offset?: number;',
      'persona_ids?: string[];',
      'platform_ids?: string[];',
      'prompt_ids?: string[];',
      'region_ids?: string[];',
      'search_query?: string;',
      "sort_by?: 'response_share';",
      "sort_order?: 'asc' | 'desc';",
      "tag_filter_type?: 'all' | 'any';",
      'tag_ids?: string[];',
      'topic_ids?: string[];',
    ],
    response:
      '{ data: { inaccurateClaimCount: number; inaccurateClusterCount: number; neutralTheme: string; responseCount: number; responseShare: number; themeId: string; totalClaimCount: number; totalClusterCount: number; totalResponseCount: number; description?: string; responseShareDelta?: number; }[]; totalCount: number; }',
    markdown:
      "## create_inaccurate_themes\n\n`client.reports.accuracy.createInaccurateThemes(category_id: string, end_date: string, start_date: string, citation_categories?: string[], comparison_end_date?: string, comparison_start_date?: string, exclude_topic_ids?: boolean, include_no_persona?: boolean, include_no_tag?: boolean, limit?: number, offset?: number, persona_ids?: string[], platform_ids?: string[], prompt_ids?: string[], region_ids?: string[], search_query?: string, sort_by?: 'response_share', sort_order?: 'asc' | 'desc', tag_filter_type?: 'all' | 'any', tag_ids?: string[], topic_ids?: string[]): { data: object[]; totalCount: number; }`\n\n**post** `/v1/reports/accuracy/inaccurate-themes`\n\nAccuracy Inaccurate Themes\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n\n- `start_date: string`\n\n- `citation_categories?: string[]`\n\n- `comparison_end_date?: string`\n\n- `comparison_start_date?: string`\n\n- `exclude_topic_ids?: boolean`\n\n- `include_no_persona?: boolean`\n\n- `include_no_tag?: boolean`\n\n- `limit?: number`\n\n- `offset?: number`\n\n- `persona_ids?: string[]`\n\n- `platform_ids?: string[]`\n\n- `prompt_ids?: string[]`\n\n- `region_ids?: string[]`\n\n- `search_query?: string`\n\n- `sort_by?: 'response_share'`\n\n- `sort_order?: 'asc' | 'desc'`\n\n- `tag_filter_type?: 'all' | 'any'`\n\n- `tag_ids?: string[]`\n\n- `topic_ids?: string[]`\n\n### Returns\n\n- `{ data: { inaccurateClaimCount: number; inaccurateClusterCount: number; neutralTheme: string; responseCount: number; responseShare: number; themeId: string; totalClaimCount: number; totalClusterCount: number; totalResponseCount: number; description?: string; responseShareDelta?: number; }[]; totalCount: number; }`\n\n  - `data: { inaccurateClaimCount: number; inaccurateClusterCount: number; neutralTheme: string; responseCount: number; responseShare: number; themeId: string; totalClaimCount: number; totalClusterCount: number; totalResponseCount: number; description?: string; responseShareDelta?: number; }[]`\n  - `totalCount: number`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.reports.accuracy.createInaccurateThemes({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.accuracy.createInaccurateThemes',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.accuracy.createInaccurateThemes({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'reports.accuracy.create_inaccurate_themes',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.reports.accuracy.create_inaccurate_themes(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date="end_date",\n    start_date="start_date",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/reports/accuracy/inaccurate-themes \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "end_date",\n          "start_date": "start_date"\n        }\'',
      },
    },
  },
  {
    name: 'create_inaccurate_clusters',
    endpoint: '/v1/reports/accuracy/inaccurate-clusters',
    httpMethod: 'post',
    summary: 'Accuracy Inaccurate Clusters',
    description: 'Accuracy Inaccurate Clusters',
    stainlessPath: '(resource) reports.accuracy > (method) create_inaccurate_clusters',
    qualified: 'client.reports.accuracy.createInaccurateClusters',
    params: [
      'category_id: string;',
      'end_date: string;',
      'start_date: string;',
      'citation_categories?: string[];',
      'comparison_end_date?: string;',
      'comparison_start_date?: string;',
      'exclude_topic_ids?: boolean;',
      'include_models?: boolean;',
      'include_no_persona?: boolean;',
      'include_no_tag?: boolean;',
      'limit?: number;',
      'offset?: number;',
      'persona_ids?: string[];',
      'platform_ids?: string[];',
      'prompt_ids?: string[];',
      'region_ids?: string[];',
      'search_query?: string;',
      "tag_filter_type?: 'all' | 'any';",
      'tag_ids?: string[];',
      'theme_id?: string;',
      'topic_ids?: string[];',
    ],
    response:
      '{ data: { canonicalClaim: string; citationHostnames: string[]; claimCount: number; clusterId: string; kbPath: string; kbSnippet: string; reasoning: string; responseCount: number; responseShare: number; totalResponseCount: number; description?: string; models?: { modelId: string; occurrence: number; }[]; neutralTheme?: string; responseShareDelta?: number; }[]; totalCount: number; }',
    markdown:
      "## create_inaccurate_clusters\n\n`client.reports.accuracy.createInaccurateClusters(category_id: string, end_date: string, start_date: string, citation_categories?: string[], comparison_end_date?: string, comparison_start_date?: string, exclude_topic_ids?: boolean, include_models?: boolean, include_no_persona?: boolean, include_no_tag?: boolean, limit?: number, offset?: number, persona_ids?: string[], platform_ids?: string[], prompt_ids?: string[], region_ids?: string[], search_query?: string, tag_filter_type?: 'all' | 'any', tag_ids?: string[], theme_id?: string, topic_ids?: string[]): { data: object[]; totalCount: number; }`\n\n**post** `/v1/reports/accuracy/inaccurate-clusters`\n\nAccuracy Inaccurate Clusters\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n\n- `start_date: string`\n\n- `citation_categories?: string[]`\n\n- `comparison_end_date?: string`\n\n- `comparison_start_date?: string`\n\n- `exclude_topic_ids?: boolean`\n\n- `include_models?: boolean`\n\n- `include_no_persona?: boolean`\n\n- `include_no_tag?: boolean`\n\n- `limit?: number`\n\n- `offset?: number`\n\n- `persona_ids?: string[]`\n\n- `platform_ids?: string[]`\n\n- `prompt_ids?: string[]`\n\n- `region_ids?: string[]`\n\n- `search_query?: string`\n\n- `tag_filter_type?: 'all' | 'any'`\n\n- `tag_ids?: string[]`\n\n- `theme_id?: string`\n\n- `topic_ids?: string[]`\n\n### Returns\n\n- `{ data: { canonicalClaim: string; citationHostnames: string[]; claimCount: number; clusterId: string; kbPath: string; kbSnippet: string; reasoning: string; responseCount: number; responseShare: number; totalResponseCount: number; description?: string; models?: { modelId: string; occurrence: number; }[]; neutralTheme?: string; responseShareDelta?: number; }[]; totalCount: number; }`\n\n  - `data: { canonicalClaim: string; citationHostnames: string[]; claimCount: number; clusterId: string; kbPath: string; kbSnippet: string; reasoning: string; responseCount: number; responseShare: number; totalResponseCount: number; description?: string; models?: { modelId: string; occurrence: number; }[]; neutralTheme?: string; responseShareDelta?: number; }[]`\n  - `totalCount: number`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.reports.accuracy.createInaccurateClusters({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.accuracy.createInaccurateClusters',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.accuracy.createInaccurateClusters({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'reports.accuracy.create_inaccurate_clusters',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.reports.accuracy.create_inaccurate_clusters(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date="end_date",\n    start_date="start_date",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/reports/accuracy/inaccurate-clusters \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "end_date",\n          "start_date": "start_date"\n        }\'',
      },
    },
  },
  {
    name: 'create_inaccuracy_drivers',
    endpoint: '/v1/reports/accuracy/inaccuracy-drivers',
    httpMethod: 'post',
    summary: 'Accuracy Inaccuracy Drivers',
    description: 'Accuracy Inaccuracy Drivers',
    stainlessPath: '(resource) reports.accuracy > (method) create_inaccuracy_drivers',
    qualified: 'client.reports.accuracy.createInaccuracyDrivers',
    params: [
      'category_id: string;',
      'end_date: string;',
      'start_date: string;',
      'citation_categories?: string[];',
      'comparison_end_date?: string;',
      'comparison_start_date?: string;',
      'exclude_topic_ids?: boolean;',
      'include_no_persona?: boolean;',
      'include_no_tag?: boolean;',
      'limit?: number;',
      'persona_ids?: string[];',
      'platform_ids?: string[];',
      'prompt_ids?: string[];',
      'region_ids?: string[];',
      "tag_filter_type?: 'all' | 'any';",
      'tag_ids?: string[];',
      'topic_ids?: string[];',
    ],
    response:
      '{ data: { canonicalClaim: string; citationCategory: string; citationCount: number; claimOccurrence: number; clusterId: string; domainCategory: string; href: string; rowId: string; snippet: string; snippetClaimId: string; claimOccurrenceDelta?: number; }[]; }',
    markdown:
      "## create_inaccuracy_drivers\n\n`client.reports.accuracy.createInaccuracyDrivers(category_id: string, end_date: string, start_date: string, citation_categories?: string[], comparison_end_date?: string, comparison_start_date?: string, exclude_topic_ids?: boolean, include_no_persona?: boolean, include_no_tag?: boolean, limit?: number, persona_ids?: string[], platform_ids?: string[], prompt_ids?: string[], region_ids?: string[], tag_filter_type?: 'all' | 'any', tag_ids?: string[], topic_ids?: string[]): { data: object[]; }`\n\n**post** `/v1/reports/accuracy/inaccuracy-drivers`\n\nAccuracy Inaccuracy Drivers\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n\n- `start_date: string`\n\n- `citation_categories?: string[]`\n\n- `comparison_end_date?: string`\n\n- `comparison_start_date?: string`\n\n- `exclude_topic_ids?: boolean`\n\n- `include_no_persona?: boolean`\n\n- `include_no_tag?: boolean`\n\n- `limit?: number`\n\n- `persona_ids?: string[]`\n\n- `platform_ids?: string[]`\n\n- `prompt_ids?: string[]`\n\n- `region_ids?: string[]`\n\n- `tag_filter_type?: 'all' | 'any'`\n\n- `tag_ids?: string[]`\n\n- `topic_ids?: string[]`\n\n### Returns\n\n- `{ data: { canonicalClaim: string; citationCategory: string; citationCount: number; claimOccurrence: number; clusterId: string; domainCategory: string; href: string; rowId: string; snippet: string; snippetClaimId: string; claimOccurrenceDelta?: number; }[]; }`\n\n  - `data: { canonicalClaim: string; citationCategory: string; citationCount: number; claimOccurrence: number; clusterId: string; domainCategory: string; href: string; rowId: string; snippet: string; snippetClaimId: string; claimOccurrenceDelta?: number; }[]`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.reports.accuracy.createInaccuracyDrivers({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.accuracy.createInaccuracyDrivers',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.accuracy.createInaccuracyDrivers({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'reports.accuracy.create_inaccuracy_drivers',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.reports.accuracy.create_inaccuracy_drivers(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date="end_date",\n    start_date="start_date",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/reports/accuracy/inaccuracy-drivers \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "end_date",\n          "start_date": "start_date"\n        }\'',
      },
    },
  },
  {
    name: 'create_top_inaccurate_claims',
    endpoint: '/v1/reports/accuracy/top-inaccurate-claims',
    httpMethod: 'post',
    summary: 'Accuracy Top Inaccurate Claims',
    description: 'Accuracy Top Inaccurate Claims',
    stainlessPath: '(resource) reports.accuracy > (method) create_top_inaccurate_claims',
    qualified: 'client.reports.accuracy.createTopInaccurateClaims',
    params: [
      'category_id: string;',
      'end_date: string;',
      'start_date: string;',
      'citation_categories?: string[];',
      'comparison_end_date?: string;',
      'comparison_start_date?: string;',
      'exclude_topic_ids?: boolean;',
      'include_no_persona?: boolean;',
      'include_no_tag?: boolean;',
      'limit?: number;',
      'persona_ids?: string[];',
      'platform_ids?: string[];',
      'prompt_ids?: string[];',
      'region_ids?: string[];',
      "tag_filter_type?: 'all' | 'any';",
      'tag_ids?: string[];',
      'topic_ids?: string[];',
    ],
    response:
      '{ data: { canonicalClaim: string; claimOccurrence: number; clusterId: string; claimOccurrenceDelta?: number; }[]; }',
    markdown:
      "## create_top_inaccurate_claims\n\n`client.reports.accuracy.createTopInaccurateClaims(category_id: string, end_date: string, start_date: string, citation_categories?: string[], comparison_end_date?: string, comparison_start_date?: string, exclude_topic_ids?: boolean, include_no_persona?: boolean, include_no_tag?: boolean, limit?: number, persona_ids?: string[], platform_ids?: string[], prompt_ids?: string[], region_ids?: string[], tag_filter_type?: 'all' | 'any', tag_ids?: string[], topic_ids?: string[]): { data: object[]; }`\n\n**post** `/v1/reports/accuracy/top-inaccurate-claims`\n\nAccuracy Top Inaccurate Claims\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n\n- `start_date: string`\n\n- `citation_categories?: string[]`\n\n- `comparison_end_date?: string`\n\n- `comparison_start_date?: string`\n\n- `exclude_topic_ids?: boolean`\n\n- `include_no_persona?: boolean`\n\n- `include_no_tag?: boolean`\n\n- `limit?: number`\n\n- `persona_ids?: string[]`\n\n- `platform_ids?: string[]`\n\n- `prompt_ids?: string[]`\n\n- `region_ids?: string[]`\n\n- `tag_filter_type?: 'all' | 'any'`\n\n- `tag_ids?: string[]`\n\n- `topic_ids?: string[]`\n\n### Returns\n\n- `{ data: { canonicalClaim: string; claimOccurrence: number; clusterId: string; claimOccurrenceDelta?: number; }[]; }`\n\n  - `data: { canonicalClaim: string; claimOccurrence: number; clusterId: string; claimOccurrenceDelta?: number; }[]`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.reports.accuracy.createTopInaccurateClaims({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.accuracy.createTopInaccurateClaims',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.accuracy.createTopInaccurateClaims({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'reports.accuracy.create_top_inaccurate_claims',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.reports.accuracy.create_top_inaccurate_claims(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date="end_date",\n    start_date="start_date",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/reports/accuracy/top-inaccurate-claims \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "end_date",\n          "start_date": "start_date"\n        }\'',
      },
    },
  },
  {
    name: 'create_claim_breakdown',
    endpoint: '/v1/reports/accuracy/claim-breakdown',
    httpMethod: 'post',
    summary: 'Accuracy Claim Breakdown',
    description: 'Accuracy Claim Breakdown',
    stainlessPath: '(resource) reports.accuracy > (method) create_claim_breakdown',
    qualified: 'client.reports.accuracy.createClaimBreakdown',
    params: [
      'category_id: string;',
      'cluster_id: string;',
      'end_date: string;',
      'start_date: string;',
      'citation_categories?: string[];',
      'comparison_end_date?: string;',
      'comparison_start_date?: string;',
      'exclude_topic_ids?: boolean;',
      'include_no_persona?: boolean;',
      'include_no_tag?: boolean;',
      'persona_ids?: string[];',
      'platform_ids?: string[];',
      'prompt_ids?: string[];',
      'region_ids?: string[];',
      "tag_filter_type?: 'all' | 'any';",
      'tag_ids?: string[];',
      'topic_ids?: string[];',
    ],
    response:
      '{ platform: { id: string; label: string; prevResponseCount: number; prevTotalResponseCount: number; responseCount: number; responseShare: number; totalResponseCount: number; responseShareDelta?: number; }[]; prompt: { id: string; hasCurrent: boolean; label: string; prevResponseCount: number; prevTotalResponseCount: number; promptId: string; promptText: string; responseCount: number; responseShare: number; topicId: string; totalResponseCount: number; responseShareDelta?: number; }[]; }',
    markdown:
      "## create_claim_breakdown\n\n`client.reports.accuracy.createClaimBreakdown(category_id: string, cluster_id: string, end_date: string, start_date: string, citation_categories?: string[], comparison_end_date?: string, comparison_start_date?: string, exclude_topic_ids?: boolean, include_no_persona?: boolean, include_no_tag?: boolean, persona_ids?: string[], platform_ids?: string[], prompt_ids?: string[], region_ids?: string[], tag_filter_type?: 'all' | 'any', tag_ids?: string[], topic_ids?: string[]): { platform: object[]; prompt: object[]; }`\n\n**post** `/v1/reports/accuracy/claim-breakdown`\n\nAccuracy Claim Breakdown\n\n### Parameters\n\n- `category_id: string`\n\n- `cluster_id: string`\n\n- `end_date: string`\n\n- `start_date: string`\n\n- `citation_categories?: string[]`\n\n- `comparison_end_date?: string`\n\n- `comparison_start_date?: string`\n\n- `exclude_topic_ids?: boolean`\n\n- `include_no_persona?: boolean`\n\n- `include_no_tag?: boolean`\n\n- `persona_ids?: string[]`\n\n- `platform_ids?: string[]`\n\n- `prompt_ids?: string[]`\n\n- `region_ids?: string[]`\n\n- `tag_filter_type?: 'all' | 'any'`\n\n- `tag_ids?: string[]`\n\n- `topic_ids?: string[]`\n\n### Returns\n\n- `{ platform: { id: string; label: string; prevResponseCount: number; prevTotalResponseCount: number; responseCount: number; responseShare: number; totalResponseCount: number; responseShareDelta?: number; }[]; prompt: { id: string; hasCurrent: boolean; label: string; prevResponseCount: number; prevTotalResponseCount: number; promptId: string; promptText: string; responseCount: number; responseShare: number; topicId: string; totalResponseCount: number; responseShareDelta?: number; }[]; }`\n\n  - `platform: { id: string; label: string; prevResponseCount: number; prevTotalResponseCount: number; responseCount: number; responseShare: number; totalResponseCount: number; responseShareDelta?: number; }[]`\n  - `prompt: { id: string; hasCurrent: boolean; label: string; prevResponseCount: number; prevTotalResponseCount: number; promptId: string; promptText: string; responseCount: number; responseShare: number; topicId: string; totalResponseCount: number; responseShareDelta?: number; }[]`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.reports.accuracy.createClaimBreakdown({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  cluster_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.accuracy.createClaimBreakdown',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.accuracy.createClaimBreakdown({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  cluster_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response.platform);",
      },
      python: {
        method: 'reports.accuracy.create_claim_breakdown',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.reports.accuracy.create_claim_breakdown(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    cluster_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date="end_date",\n    start_date="start_date",\n)\nprint(response.platform)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/reports/accuracy/claim-breakdown \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "cluster_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "end_date",\n          "start_date": "start_date"\n        }\'',
      },
    },
  },
  {
    name: 'create_claim_citations',
    endpoint: '/v1/reports/accuracy/claim-citations',
    httpMethod: 'post',
    summary: 'Accuracy Claim Citations',
    description: 'Accuracy Claim Citations',
    stainlessPath: '(resource) reports.accuracy > (method) create_claim_citations',
    qualified: 'client.reports.accuracy.createClaimCitations',
    params: [
      'category_id: string;',
      'cluster_id: string;',
      'end_date: string;',
      'start_date: string;',
      'citation_categories?: string[];',
      'comparison_end_date?: string;',
      'comparison_start_date?: string;',
      'exclude_topic_ids?: boolean;',
      'include_no_persona?: boolean;',
      'include_no_tag?: boolean;',
      'limit?: number;',
      'offset?: number;',
      'persona_ids?: string[];',
      'platform_ids?: string[];',
      'prompt_ids?: string[];',
      'region_ids?: string[];',
      'search_query?: string;',
      "sort_order?: 'asc' | 'desc';",
      "tag_filter_type?: 'all' | 'any';",
      'tag_ids?: string[];',
      'topic_ids?: string[];',
    ],
    response:
      '{ data: { citationCategory: string; citationCount: number; citationShare: number; domainCategory: string; hostname: string; href: string; path: string; snippet: string; citationShareDelta?: number; }[]; totalCount: number; }',
    markdown:
      "## create_claim_citations\n\n`client.reports.accuracy.createClaimCitations(category_id: string, cluster_id: string, end_date: string, start_date: string, citation_categories?: string[], comparison_end_date?: string, comparison_start_date?: string, exclude_topic_ids?: boolean, include_no_persona?: boolean, include_no_tag?: boolean, limit?: number, offset?: number, persona_ids?: string[], platform_ids?: string[], prompt_ids?: string[], region_ids?: string[], search_query?: string, sort_order?: 'asc' | 'desc', tag_filter_type?: 'all' | 'any', tag_ids?: string[], topic_ids?: string[]): { data: object[]; totalCount: number; }`\n\n**post** `/v1/reports/accuracy/claim-citations`\n\nAccuracy Claim Citations\n\n### Parameters\n\n- `category_id: string`\n\n- `cluster_id: string`\n\n- `end_date: string`\n\n- `start_date: string`\n\n- `citation_categories?: string[]`\n\n- `comparison_end_date?: string`\n\n- `comparison_start_date?: string`\n\n- `exclude_topic_ids?: boolean`\n\n- `include_no_persona?: boolean`\n\n- `include_no_tag?: boolean`\n\n- `limit?: number`\n\n- `offset?: number`\n\n- `persona_ids?: string[]`\n\n- `platform_ids?: string[]`\n\n- `prompt_ids?: string[]`\n\n- `region_ids?: string[]`\n\n- `search_query?: string`\n\n- `sort_order?: 'asc' | 'desc'`\n\n- `tag_filter_type?: 'all' | 'any'`\n\n- `tag_ids?: string[]`\n\n- `topic_ids?: string[]`\n\n### Returns\n\n- `{ data: { citationCategory: string; citationCount: number; citationShare: number; domainCategory: string; hostname: string; href: string; path: string; snippet: string; citationShareDelta?: number; }[]; totalCount: number; }`\n\n  - `data: { citationCategory: string; citationCount: number; citationShare: number; domainCategory: string; hostname: string; href: string; path: string; snippet: string; citationShareDelta?: number; }[]`\n  - `totalCount: number`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.reports.accuracy.createClaimCitations({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  cluster_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.accuracy.createClaimCitations',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.accuracy.createClaimCitations({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  cluster_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'reports.accuracy.create_claim_citations',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.reports.accuracy.create_claim_citations(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    cluster_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date="end_date",\n    start_date="start_date",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/reports/accuracy/claim-citations \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "cluster_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "end_date",\n          "start_date": "start_date"\n        }\'',
      },
    },
  },
  {
    name: 'create_cluster_example_runs',
    endpoint: '/v1/reports/accuracy/cluster-example-runs',
    httpMethod: 'post',
    summary: 'Accuracy Cluster Example Runs',
    description: 'Accuracy Cluster Example Runs',
    stainlessPath: '(resource) reports.accuracy > (method) create_cluster_example_runs',
    qualified: 'client.reports.accuracy.createClusterExampleRuns',
    params: [
      'category_id: string;',
      'cluster_id: string;',
      'end_date: string;',
      'start_date: string;',
      'citation_categories?: string[];',
      'comparison_end_date?: string;',
      'comparison_start_date?: string;',
      'exclude_topic_ids?: boolean;',
      'include_no_persona?: boolean;',
      'include_no_tag?: boolean;',
      'limit?: number;',
      'offset?: number;',
      'persona_ids?: string[];',
      'platform_ids?: string[];',
      'prompt_ids?: string[];',
      'region_ids?: string[];',
      "tag_filter_type?: 'all' | 'any';",
      'tag_ids?: string[];',
      'topic_ids?: string[];',
    ],
    response:
      '{ data: { claim: string; createdAt: string; modelId: string; regionId: string; responseSnippet: string; runId: string; }[]; totalCount: number; }',
    markdown:
      "## create_cluster_example_runs\n\n`client.reports.accuracy.createClusterExampleRuns(category_id: string, cluster_id: string, end_date: string, start_date: string, citation_categories?: string[], comparison_end_date?: string, comparison_start_date?: string, exclude_topic_ids?: boolean, include_no_persona?: boolean, include_no_tag?: boolean, limit?: number, offset?: number, persona_ids?: string[], platform_ids?: string[], prompt_ids?: string[], region_ids?: string[], tag_filter_type?: 'all' | 'any', tag_ids?: string[], topic_ids?: string[]): { data: object[]; totalCount: number; }`\n\n**post** `/v1/reports/accuracy/cluster-example-runs`\n\nAccuracy Cluster Example Runs\n\n### Parameters\n\n- `category_id: string`\n\n- `cluster_id: string`\n\n- `end_date: string`\n\n- `start_date: string`\n\n- `citation_categories?: string[]`\n\n- `comparison_end_date?: string`\n\n- `comparison_start_date?: string`\n\n- `exclude_topic_ids?: boolean`\n\n- `include_no_persona?: boolean`\n\n- `include_no_tag?: boolean`\n\n- `limit?: number`\n\n- `offset?: number`\n\n- `persona_ids?: string[]`\n\n- `platform_ids?: string[]`\n\n- `prompt_ids?: string[]`\n\n- `region_ids?: string[]`\n\n- `tag_filter_type?: 'all' | 'any'`\n\n- `tag_ids?: string[]`\n\n- `topic_ids?: string[]`\n\n### Returns\n\n- `{ data: { claim: string; createdAt: string; modelId: string; regionId: string; responseSnippet: string; runId: string; }[]; totalCount: number; }`\n\n  - `data: { claim: string; createdAt: string; modelId: string; regionId: string; responseSnippet: string; runId: string; }[]`\n  - `totalCount: number`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.reports.accuracy.createClusterExampleRuns({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  cluster_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.accuracy.createClusterExampleRuns',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.accuracy.createClusterExampleRuns({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  cluster_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'reports.accuracy.create_cluster_example_runs',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.reports.accuracy.create_cluster_example_runs(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    cluster_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date="end_date",\n    start_date="start_date",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/reports/accuracy/cluster-example-runs \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "cluster_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "end_date",\n          "start_date": "start_date"\n        }\'',
      },
    },
  },
  {
    name: 'create_cluster_verification_pairs',
    endpoint: '/v1/reports/accuracy/cluster-verification-pairs',
    httpMethod: 'post',
    summary: 'Accuracy Cluster Verification Pairs',
    description: 'Accuracy Cluster Verification Pairs',
    stainlessPath: '(resource) reports.accuracy > (method) create_cluster_verification_pairs',
    qualified: 'client.reports.accuracy.createClusterVerificationPairs',
    params: ['category_id: string;', 'cluster_id: string;'],
    response:
      '{ data: { kbPath: string; pairId: string; quote: string; reasoning: string; snippetIdx: number; sourceUpdatedAt?: string; }[]; clusterReasoning?: string; }',
    markdown:
      "## create_cluster_verification_pairs\n\n`client.reports.accuracy.createClusterVerificationPairs(category_id: string, cluster_id: string): { data: object[]; clusterReasoning?: string; }`\n\n**post** `/v1/reports/accuracy/cluster-verification-pairs`\n\nAccuracy Cluster Verification Pairs\n\n### Parameters\n\n- `category_id: string`\n\n- `cluster_id: string`\n\n### Returns\n\n- `{ data: { kbPath: string; pairId: string; quote: string; reasoning: string; snippetIdx: number; sourceUpdatedAt?: string; }[]; clusterReasoning?: string; }`\n\n  - `data: { kbPath: string; pairId: string; quote: string; reasoning: string; snippetIdx: number; sourceUpdatedAt?: string; }[]`\n  - `clusterReasoning?: string`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.reports.accuracy.createClusterVerificationPairs({ category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', cluster_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.accuracy.createClusterVerificationPairs',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.accuracy.createClusterVerificationPairs({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  cluster_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'reports.accuracy.create_cluster_verification_pairs',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.reports.accuracy.create_cluster_verification_pairs(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    cluster_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/reports/accuracy/cluster-verification-pairs \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "cluster_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n        }\'',
      },
    },
  },
  {
    name: 'create_factcheck_setup_status',
    endpoint: '/v1/reports/accuracy/factcheck-setup-status',
    httpMethod: 'post',
    summary: 'Accuracy Factcheck Setup Status',
    description: 'Accuracy Factcheck Setup Status',
    stainlessPath: '(resource) reports.accuracy > (method) create_factcheck_setup_status',
    qualified: 'client.reports.accuracy.createFactcheckSetupStatus',
    params: ['category_id: string;'],
    response:
      '{ activeAccuracyPromptCount: number; hasVerificationData: boolean; isSetupComplete: boolean; setupCreatedAt?: string; setupKnowledgeBaseId?: string; }',
    markdown:
      "## create_factcheck_setup_status\n\n`client.reports.accuracy.createFactcheckSetupStatus(category_id: string): { activeAccuracyPromptCount: number; hasVerificationData: boolean; isSetupComplete: boolean; setupCreatedAt?: string; setupKnowledgeBaseId?: string; }`\n\n**post** `/v1/reports/accuracy/factcheck-setup-status`\n\nAccuracy Factcheck Setup Status\n\n### Parameters\n\n- `category_id: string`\n\n### Returns\n\n- `{ activeAccuracyPromptCount: number; hasVerificationData: boolean; isSetupComplete: boolean; setupCreatedAt?: string; setupKnowledgeBaseId?: string; }`\n\n  - `activeAccuracyPromptCount: number`\n  - `hasVerificationData: boolean`\n  - `isSetupComplete: boolean`\n  - `setupCreatedAt?: string`\n  - `setupKnowledgeBaseId?: string`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.reports.accuracy.createFactcheckSetupStatus({ category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.accuracy.createFactcheckSetupStatus',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.accuracy.createFactcheckSetupStatus({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(response.activeAccuracyPromptCount);",
      },
      python: {
        method: 'reports.accuracy.create_factcheck_setup_status',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.reports.accuracy.create_factcheck_setup_status(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.active_accuracy_prompt_count)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/reports/accuracy/factcheck-setup-status \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n        }\'',
      },
    },
  },
  {
    name: 'query_scores',
    endpoint: '/v2/reports/factcheck',
    httpMethod: 'post',
    summary: 'Query Scores',
    description: 'Query Scores',
    stainlessPath: '(resource) reports.factcheck > (method) query_scores',
    qualified: 'client.reports.factcheck.queryScores',
    params: [
      'category_id: string;',
      'end_date: string;',
      'start_date: string;',
      'cursor?: string;',
      'filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; };',
      "group_by?: 'date' | 'model' | 'region' | 'persona' | 'prompt' | 'topic' | 'tag' | 'citation' | 'theme'[];",
      'limit?: number;',
      'max_results?: number;',
    ],
    response:
      '{ data: { accuracy?: number; accurate?: number; citation?: { citation_category?: string; url?: string; }; date?: string; inaccurate?: number; model?: { id?: string; name?: string; }; persona?: { id?: string; name?: string; }; prompt?: { id?: string; name?: string; }; region?: { id?: string; name?: string; }; tag?: { id?: string; name?: string; }; theme?: { id?: string; name?: string; }; topic?: { id?: string; name?: string; }; }[]; info: { count: number; end_date: string; group_by: string[]; models: string[]; start_date: string; filter?: object; next_cursor?: string; total_results?: number; }; }',
    markdown:
      "## query_scores\n\n`client.reports.factcheck.queryScores(category_id: string, end_date: string, start_date: string, cursor?: string, filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }, group_by?: 'date' | 'model' | 'region' | 'persona' | 'prompt' | 'topic' | 'tag' | 'citation' | 'theme'[], limit?: number, max_results?: number): { data: object[]; info: object; }`\n\n**post** `/v2/reports/factcheck`\n\nQuery Scores\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `start_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `cursor?: string`\n\n- `filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }`\n  A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.\n  - `and?: object[]`\n  - `field?: string`\n  - `not?: object`\n  - `op?: string`\n  - `or?: object[]`\n  - `value?: object`\n\n- `group_by?: 'date' | 'model' | 'region' | 'persona' | 'prompt' | 'topic' | 'tag' | 'citation' | 'theme'[]`\n  Up to two dimensions to slice by; empty returns the headline score. `citation` must be alone.\n\n- `limit?: number`\n  Rows per page; default 100.\n\n- `max_results?: number`\n  Stream only: cap rows returned.\n\n### Returns\n\n- `{ data: { accuracy?: number; accurate?: number; citation?: { citation_category?: string; url?: string; }; date?: string; inaccurate?: number; model?: { id?: string; name?: string; }; persona?: { id?: string; name?: string; }; prompt?: { id?: string; name?: string; }; region?: { id?: string; name?: string; }; tag?: { id?: string; name?: string; }; theme?: { id?: string; name?: string; }; topic?: { id?: string; name?: string; }; }[]; info: { count: number; end_date: string; group_by: string[]; models: string[]; start_date: string; filter?: object; next_cursor?: string; total_results?: number; }; }`\n\n  - `data: { accuracy?: number; accurate?: number; citation?: { citation_category?: string; url?: string; }; date?: string; inaccurate?: number; model?: { id?: string; name?: string; }; persona?: { id?: string; name?: string; }; prompt?: { id?: string; name?: string; }; region?: { id?: string; name?: string; }; tag?: { id?: string; name?: string; }; theme?: { id?: string; name?: string; }; topic?: { id?: string; name?: string; }; }[]`\n  - `info: { count: number; end_date: string; group_by: string[]; models: string[]; start_date: string; filter?: object; next_cursor?: string; total_results?: number; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.reports.factcheck.queryScores({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.factcheck.queryScores',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.factcheck.queryScores({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'reports.factcheck.query_scores',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.reports.factcheck.query_scores(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date="end_date",\n    start_date="start_date",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v2/reports/factcheck \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "end_date",\n          "start_date": "start_date"\n        }\'',
      },
    },
  },
  {
    name: 'stream_scores',
    endpoint: '/v2/reports/factcheck/stream',
    httpMethod: 'post',
    summary: 'Stream Scores',
    description: 'Stream Scores',
    stainlessPath: '(resource) reports.factcheck > (method) stream_scores',
    qualified: 'client.reports.factcheck.streamScores',
    params: [
      'category_id: string;',
      'end_date: string;',
      'start_date: string;',
      'cursor?: string;',
      'filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; };',
      "group_by?: 'date' | 'model' | 'region' | 'persona' | 'prompt' | 'topic' | 'tag' | 'citation' | 'theme'[];",
      'limit?: number;',
      'max_results?: number;',
    ],
    response:
      '{ count: number; end_date: string; group_by: string[]; models: string[]; start_date: string; filter?: object; next_cursor?: string; total_results?: number; } | { accuracy?: number; accurate?: number; citation?: { citation_category?: string; url?: string; }; date?: string; inaccurate?: number; model?: { id?: string; name?: string; }; persona?: { id?: string; name?: string; }; prompt?: { id?: string; name?: string; }; region?: { id?: string; name?: string; }; tag?: { id?: string; name?: string; }; theme?: { id?: string; name?: string; }; topic?: { id?: string; name?: string; }; }',
    markdown:
      "## stream_scores\n\n`client.reports.factcheck.streamScores(category_id: string, end_date: string, start_date: string, cursor?: string, filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }, group_by?: 'date' | 'model' | 'region' | 'persona' | 'prompt' | 'topic' | 'tag' | 'citation' | 'theme'[], limit?: number, max_results?: number): { count: number; end_date: string; group_by: string[]; models: string[]; start_date: string; filter?: object; next_cursor?: string; total_results?: number; } | { accuracy?: number; accurate?: number; citation?: object; date?: string; inaccurate?: number; model?: object; persona?: object; prompt?: object; region?: object; tag?: object; theme?: object; topic?: object; }`\n\n**post** `/v2/reports/factcheck/stream`\n\nStream Scores\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `start_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `cursor?: string`\n\n- `filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }`\n  A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.\n  - `and?: object[]`\n  - `field?: string`\n  - `not?: object`\n  - `op?: string`\n  - `or?: object[]`\n  - `value?: object`\n\n- `group_by?: 'date' | 'model' | 'region' | 'persona' | 'prompt' | 'topic' | 'tag' | 'citation' | 'theme'[]`\n  Up to two dimensions to slice by; empty returns the headline score. `citation` must be alone.\n\n- `limit?: number`\n  Rows per page; default 100.\n\n- `max_results?: number`\n  Stream only: cap rows returned.\n\n### Returns\n\n- `{ count: number; end_date: string; group_by: string[]; models: string[]; start_date: string; filter?: object; next_cursor?: string; total_results?: number; } | { accuracy?: number; accurate?: number; citation?: { citation_category?: string; url?: string; }; date?: string; inaccurate?: number; model?: { id?: string; name?: string; }; persona?: { id?: string; name?: string; }; prompt?: { id?: string; name?: string; }; region?: { id?: string; name?: string; }; tag?: { id?: string; name?: string; }; theme?: { id?: string; name?: string; }; topic?: { id?: string; name?: string; }; }`\n  `summary` event payload (the report `info` block).\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst stream = await client.reports.factcheck.streamScores({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\nfor await (const factcheckStreamScoresResponse of stream) {\n  console.log(factcheckStreamScoresResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.factcheck.streamScores',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.factcheck.streamScores({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response);",
      },
      python: {
        method: 'reports.factcheck.stream_scores',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nfor factcheck in client.reports.factcheck.stream_scores(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date="end_date",\n    start_date="start_date",\n):\n  print(factcheck)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v2/reports/factcheck/stream \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "end_date",\n          "start_date": "start_date"\n        }\'',
      },
    },
  },
  {
    name: 'query_claims',
    endpoint: '/v2/reports/factcheck/claims',
    httpMethod: 'post',
    summary: 'Query Claims',
    description: 'Query Claims',
    stainlessPath: '(resource) reports.factcheck.claims > (method) query_claims',
    qualified: 'client.reports.factcheck.claims.queryClaims',
    params: [
      'category_id: string;',
      'end_date: string;',
      'start_date: string;',
      'cursor?: string;',
      'filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; };',
      "group_by?: 'model' | 'region' | 'persona' | 'prompt' | 'topic' | 'tag' | 'theme'[];",
      "include?: 'theme' | 'reasoning' | 'models' | 'evidence' | 'citation_sources'[];",
      'limit?: number;',
      'max_results?: number;',
    ],
    response:
      '{ data: { accuracy?: number; accurate?: number; citation_sources?: { citation_category?: string; citation_share?: number; domain_category?: string; hostname?: string; href?: string; snippet?: string; }[]; claim?: string; claims?: { citation_sources?: object[]; claim?: string; cluster_id?: string; evidence?: object[]; models?: object[]; occurrence?: number; reasoning?: string; theme?: string; }[]; cluster_id?: string; evidence?: { id?: string; kb_path?: string; kb_snippet?: string; source_updated_at?: string; }[]; inaccurate?: number; model?: { id?: string; name?: string; occurrence?: number; }; models?: { id?: string; name?: string; occurrence?: number; }[]; occurrence?: number; persona?: { id?: string; name?: string; }; prompt?: { id?: string; name?: string; }; reasoning?: string; region?: { id?: string; name?: string; }; tag?: { id?: string; name?: string; }; theme?: string | { id?: string; name?: string; }; topic?: { id?: string; name?: string; }; total_claims?: number; }[]; info: { count: number; end_date: string; group_by: string[]; models: string[]; start_date: string; filter?: object; include?: string[]; next_cursor?: string; total_results?: number; }; }',
    markdown:
      "## query_claims\n\n`client.reports.factcheck.claims.queryClaims(category_id: string, end_date: string, start_date: string, cursor?: string, filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }, group_by?: 'model' | 'region' | 'persona' | 'prompt' | 'topic' | 'tag' | 'theme'[], include?: 'theme' | 'reasoning' | 'models' | 'evidence' | 'citation_sources'[], limit?: number, max_results?: number): { data: object[]; info: object; }`\n\n**post** `/v2/reports/factcheck/claims`\n\nQuery Claims\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `start_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `cursor?: string`\n\n- `filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }`\n  A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.\n  - `and?: object[]`\n  - `field?: string`\n  - `not?: object`\n  - `op?: string`\n  - `or?: object[]`\n  - `value?: object`\n\n- `group_by?: 'model' | 'region' | 'persona' | 'prompt' | 'topic' | 'tag' | 'theme'[]`\n  Optional single dim to section the claims (e.g. per model). Empty → one flat claim list.\n\n- `include?: 'theme' | 'reasoning' | 'models' | 'evidence' | 'citation_sources'[]`\n  Optional per-claim detail fields to add to each claim (see options).\n\n- `limit?: number`\n  Claims (or sections) per page; default 25.\n\n- `max_results?: number`\n  Stream only: cap entries returned.\n\n### Returns\n\n- `{ data: { accuracy?: number; accurate?: number; citation_sources?: { citation_category?: string; citation_share?: number; domain_category?: string; hostname?: string; href?: string; snippet?: string; }[]; claim?: string; claims?: { citation_sources?: object[]; claim?: string; cluster_id?: string; evidence?: object[]; models?: object[]; occurrence?: number; reasoning?: string; theme?: string; }[]; cluster_id?: string; evidence?: { id?: string; kb_path?: string; kb_snippet?: string; source_updated_at?: string; }[]; inaccurate?: number; model?: { id?: string; name?: string; occurrence?: number; }; models?: { id?: string; name?: string; occurrence?: number; }[]; occurrence?: number; persona?: { id?: string; name?: string; }; prompt?: { id?: string; name?: string; }; reasoning?: string; region?: { id?: string; name?: string; }; tag?: { id?: string; name?: string; }; theme?: string | { id?: string; name?: string; }; topic?: { id?: string; name?: string; }; total_claims?: number; }[]; info: { count: number; end_date: string; group_by: string[]; models: string[]; start_date: string; filter?: object; include?: string[]; next_cursor?: string; total_results?: number; }; }`\n\n  - `data: { accuracy?: number; accurate?: number; citation_sources?: { citation_category?: string; citation_share?: number; domain_category?: string; hostname?: string; href?: string; snippet?: string; }[]; claim?: string; claims?: { citation_sources?: { citation_category?: string; citation_share?: number; domain_category?: string; hostname?: string; href?: string; snippet?: string; }[]; claim?: string; cluster_id?: string; evidence?: { id?: string; kb_path?: string; kb_snippet?: string; source_updated_at?: string; }[]; models?: { id?: string; name?: string; occurrence?: number; }[]; occurrence?: number; reasoning?: string; theme?: string; }[]; cluster_id?: string; evidence?: { id?: string; kb_path?: string; kb_snippet?: string; source_updated_at?: string; }[]; inaccurate?: number; model?: { id?: string; name?: string; occurrence?: number; }; models?: { id?: string; name?: string; occurrence?: number; }[]; occurrence?: number; persona?: { id?: string; name?: string; }; prompt?: { id?: string; name?: string; }; reasoning?: string; region?: { id?: string; name?: string; }; tag?: { id?: string; name?: string; }; theme?: string | { id?: string; name?: string; }; topic?: { id?: string; name?: string; }; total_claims?: number; }[]`\n  - `info: { count: number; end_date: string; group_by: string[]; models: string[]; start_date: string; filter?: object; include?: string[]; next_cursor?: string; total_results?: number; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.reports.factcheck.claims.queryClaims({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.factcheck.claims.queryClaims',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.factcheck.claims.queryClaims({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'reports.factcheck.claims.query_claims',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.reports.factcheck.claims.query_claims(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date="end_date",\n    start_date="start_date",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v2/reports/factcheck/claims \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "end_date",\n          "start_date": "start_date"\n        }\'',
      },
    },
  },
  {
    name: 'stream_claims',
    endpoint: '/v2/reports/factcheck/claims/stream',
    httpMethod: 'post',
    summary: 'Stream Claims',
    description: 'Stream Claims',
    stainlessPath: '(resource) reports.factcheck.claims > (method) stream_claims',
    qualified: 'client.reports.factcheck.claims.streamClaims',
    params: [
      'category_id: string;',
      'end_date: string;',
      'start_date: string;',
      'cursor?: string;',
      'filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; };',
      "group_by?: 'model' | 'region' | 'persona' | 'prompt' | 'topic' | 'tag' | 'theme'[];",
      "include?: 'theme' | 'reasoning' | 'models' | 'evidence' | 'citation_sources'[];",
      'limit?: number;',
      'max_results?: number;',
    ],
    response:
      '{ count: number; end_date: string; group_by: string[]; models: string[]; start_date: string; filter?: object; include?: string[]; next_cursor?: string; total_results?: number; } | { accuracy?: number; accurate?: number; citation_sources?: { citation_category?: string; citation_share?: number; domain_category?: string; hostname?: string; href?: string; snippet?: string; }[]; claim?: string; claims?: { citation_sources?: object[]; claim?: string; cluster_id?: string; evidence?: object[]; models?: object[]; occurrence?: number; reasoning?: string; theme?: string; }[]; cluster_id?: string; evidence?: { id?: string; kb_path?: string; kb_snippet?: string; source_updated_at?: string; }[]; inaccurate?: number; model?: { id?: string; name?: string; occurrence?: number; }; models?: { id?: string; name?: string; occurrence?: number; }[]; occurrence?: number; persona?: { id?: string; name?: string; }; prompt?: { id?: string; name?: string; }; reasoning?: string; region?: { id?: string; name?: string; }; tag?: { id?: string; name?: string; }; theme?: string | { id?: string; name?: string; }; topic?: { id?: string; name?: string; }; total_claims?: number; }',
    markdown:
      "## stream_claims\n\n`client.reports.factcheck.claims.streamClaims(category_id: string, end_date: string, start_date: string, cursor?: string, filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }, group_by?: 'model' | 'region' | 'persona' | 'prompt' | 'topic' | 'tag' | 'theme'[], include?: 'theme' | 'reasoning' | 'models' | 'evidence' | 'citation_sources'[], limit?: number, max_results?: number): { count: number; end_date: string; group_by: string[]; models: string[]; start_date: string; filter?: object; include?: string[]; next_cursor?: string; total_results?: number; } | { accuracy?: number; accurate?: number; citation_sources?: object[]; claim?: string; claims?: object[]; cluster_id?: string; evidence?: object[]; inaccurate?: number; model?: object; models?: object[]; occurrence?: number; persona?: object; prompt?: object; reasoning?: string; region?: object; tag?: object; theme?: string | object; topic?: object; total_claims?: number; }`\n\n**post** `/v2/reports/factcheck/claims/stream`\n\nStream Claims\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `start_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `cursor?: string`\n\n- `filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }`\n  A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.\n  - `and?: object[]`\n  - `field?: string`\n  - `not?: object`\n  - `op?: string`\n  - `or?: object[]`\n  - `value?: object`\n\n- `group_by?: 'model' | 'region' | 'persona' | 'prompt' | 'topic' | 'tag' | 'theme'[]`\n  Optional single dim to section the claims (e.g. per model). Empty → one flat claim list.\n\n- `include?: 'theme' | 'reasoning' | 'models' | 'evidence' | 'citation_sources'[]`\n  Optional per-claim detail fields to add to each claim (see options).\n\n- `limit?: number`\n  Claims (or sections) per page; default 25.\n\n- `max_results?: number`\n  Stream only: cap entries returned.\n\n### Returns\n\n- `{ count: number; end_date: string; group_by: string[]; models: string[]; start_date: string; filter?: object; include?: string[]; next_cursor?: string; total_results?: number; } | { accuracy?: number; accurate?: number; citation_sources?: { citation_category?: string; citation_share?: number; domain_category?: string; hostname?: string; href?: string; snippet?: string; }[]; claim?: string; claims?: { citation_sources?: { citation_category?: string; citation_share?: number; domain_category?: string; hostname?: string; href?: string; snippet?: string; }[]; claim?: string; cluster_id?: string; evidence?: { id?: string; kb_path?: string; kb_snippet?: string; source_updated_at?: string; }[]; models?: { id?: string; name?: string; occurrence?: number; }[]; occurrence?: number; reasoning?: string; theme?: string; }[]; cluster_id?: string; evidence?: { id?: string; kb_path?: string; kb_snippet?: string; source_updated_at?: string; }[]; inaccurate?: number; model?: { id?: string; name?: string; occurrence?: number; }; models?: { id?: string; name?: string; occurrence?: number; }[]; occurrence?: number; persona?: { id?: string; name?: string; }; prompt?: { id?: string; name?: string; }; reasoning?: string; region?: { id?: string; name?: string; }; tag?: { id?: string; name?: string; }; theme?: string | { id?: string; name?: string; }; topic?: { id?: string; name?: string; }; total_claims?: number; }`\n  `summary` event payload (the report `info` block).\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst stream = await client.reports.factcheck.claims.streamClaims({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\nfor await (const claimStreamClaimsResponse of stream) {\n  console.log(claimStreamClaimsResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.factcheck.claims.streamClaims',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.factcheck.claims.streamClaims({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response);",
      },
      python: {
        method: 'reports.factcheck.claims.stream_claims',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nfor claim in client.reports.factcheck.claims.stream_claims(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date="end_date",\n    start_date="start_date",\n):\n  print(claim)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v2/reports/factcheck/claims/stream \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "end_date",\n          "start_date": "start_date"\n        }\'',
      },
    },
  },
  {
    name: 'get_channels',
    endpoint: '/v2/reports/social/youtube/channels',
    httpMethod: 'post',
    summary: 'Query Youtube Channels',
    description: 'Rank the YouTube channels cited in a category, or the video categories they publish in.',
    stainlessPath: '(resource) reports.social.youtube > (method) get_channels',
    qualified: 'client.reports.social.youtube.getChannels',
    params: [
      'category_id: string;',
      'end_date: string;',
      'start_date: string;',
      'cursor?: string;',
      'filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; };',
      "group_by?: 'channel' | 'video_category' | 'model' | 'source_type'[];",
      "interval?: 'day' | 'week' | 'month';",
      'limit?: number;',
      "source_types?: 'video' | 'short' | 'channel' | 'playlist' | 'other'[];",
    ],
    response:
      "{ data: { citation_share: number; count: number; name: string; rank: number; videos: number; date?: string; handle?: string; model?: { id?: string; name?: string; }; source_type?: 'video' | 'short' | 'channel' | 'playlist' | 'other'; url?: string; video_category?: string; }[]; info: { category_id: string; count: number; end_date: string; group_by: string[]; limit: number; models: string[]; source_types: 'video' | 'short' | 'channel' | 'playlist' | 'other'[]; start_date: string; total_results: number; cursor?: string; filter?: object; interval?: 'day' | 'week' | 'month'; next_cursor?: string; }; }",
    markdown:
      "## get_channels\n\n`client.reports.social.youtube.getChannels(category_id: string, end_date: string, start_date: string, cursor?: string, filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }, group_by?: 'channel' | 'video_category' | 'model' | 'source_type'[], interval?: 'day' | 'week' | 'month', limit?: number, source_types?: 'video' | 'short' | 'channel' | 'playlist' | 'other'[]): { data: object[]; info: object; }`\n\n**post** `/v2/reports/social/youtube/channels`\n\nRank the YouTube channels cited in a category, or the video categories they publish in.\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `start_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `cursor?: string`\n\n- `filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }`\n  A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.\n  - `and?: object[]`\n  - `field?: string`\n  - `not?: object`\n  - `op?: string`\n  - `or?: object[]`\n  - `value?: object`\n\n- `group_by?: 'channel' | 'video_category' | 'model' | 'source_type'[]`\n  What each row represents. Empty or `[\"channel\"]` ranks channels; `[\"video_category\"]` ranks content categories; `[\"source_type\"]` ranks source types; `[\"channel\", \"video_category\"]`, `[\"channel\", \"source_type\"]` and `[\"channel\", \"model\"]` return cross-tabs — a row per channel per category, or per answer engine. `limit` counts leading channels in every case, so ten channels across nine engines is ten channels and ninety rows.\n\n- `interval?: 'day' | 'week' | 'month'`\n  Return a time series instead of window totals: one row per entity per period, each carrying `date`. `citation_share` is then relative to that period, so the series is comparable across periods. Omit for window totals.\n\n- `limit?: number`\n  Page size; default 10, max 50.\n\n- `source_types?: 'video' | 'short' | 'channel' | 'playlist' | 'other'[]`\n  Limit results to YouTube source types: `video`, `short`, `channel`, `playlist`, or `other`. Omit to include `video`, `short`, `channel`, and `playlist`; `other` is excluded because those citations have no channel. Requests containing `other` are rejected.\n\n### Returns\n\n- `{ data: { citation_share: number; count: number; name: string; rank: number; videos: number; date?: string; handle?: string; model?: { id?: string; name?: string; }; source_type?: 'video' | 'short' | 'channel' | 'playlist' | 'other'; url?: string; video_category?: string; }[]; info: { category_id: string; count: number; end_date: string; group_by: string[]; limit: number; models: string[]; source_types: 'video' | 'short' | 'channel' | 'playlist' | 'other'[]; start_date: string; total_results: number; cursor?: string; filter?: object; interval?: 'day' | 'week' | 'month'; next_cursor?: string; }; }`\n\n  - `data: { citation_share: number; count: number; name: string; rank: number; videos: number; date?: string; handle?: string; model?: { id?: string; name?: string; }; source_type?: 'video' | 'short' | 'channel' | 'playlist' | 'other'; url?: string; video_category?: string; }[]`\n  - `info: { category_id: string; count: number; end_date: string; group_by: string[]; limit: number; models: string[]; source_types: 'video' | 'short' | 'channel' | 'playlist' | 'other'[]; start_date: string; total_results: number; cursor?: string; filter?: object; interval?: 'day' | 'week' | 'month'; next_cursor?: string; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.reports.social.youtube.getChannels({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.social.youtube.getChannels',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.social.youtube.getChannels({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'reports.social.youtube.get_channels',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.reports.social.youtube.get_channels(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date="end_date",\n    start_date="start_date",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v2/reports/social/youtube/channels \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "end_date",\n          "start_date": "start_date"\n        }\'',
      },
    },
  },
  {
    name: 'get_videos',
    endpoint: '/v2/reports/social/youtube/videos',
    httpMethod: 'post',
    summary: 'Query Youtube Videos',
    description: 'Rank cited YouTube videos, for one channel or across all of them.',
    stainlessPath: '(resource) reports.social.youtube > (method) get_videos',
    qualified: 'client.reports.social.youtube.getVideos',
    params: [
      'category_id: string;',
      'end_date: string;',
      'start_date: string;',
      "attribution?: 'attributed' | 'unattributed' | 'all';",
      'cursor?: string;',
      'filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; };',
      'limit?: number;',
      "source_types?: 'video' | 'short' | 'channel' | 'playlist' | 'other'[];",
    ],
    response:
      "{ data: { citation_share: number; count: number; rank: number; source_type: 'video' | 'short' | 'channel' | 'playlist' | 'other'; video_id: string; channel_handle?: string; channel_title?: string; channel_url?: string; duration_seconds?: number; published_at?: string; title?: string; url?: string; video_category?: string; }[]; info: { attribution: 'attributed' | 'unattributed' | 'all'; category_id: string; count: number; end_date: string; limit: number; models: string[]; source_types: 'video' | 'short' | 'channel' | 'playlist' | 'other'[]; start_date: string; cursor?: string; filter?: object; next_cursor?: string; total_results?: number; }; }",
    markdown:
      "## get_videos\n\n`client.reports.social.youtube.getVideos(category_id: string, end_date: string, start_date: string, attribution?: 'attributed' | 'unattributed' | 'all', cursor?: string, filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }, limit?: number, source_types?: 'video' | 'short' | 'channel' | 'playlist' | 'other'[]): { data: object[]; info: object; }`\n\n**post** `/v2/reports/social/youtube/videos`\n\nRank cited YouTube videos, for one channel or across all of them.\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `start_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `attribution?: 'attributed' | 'unattributed' | 'all'`\n  Choose attributed citations, unattributed citations, or all citations. An unattributed row has no channel: `source_type` is `other` for a search or feed URL that names no source, and any other type is a source we have no channel for.\n\n- `cursor?: string`\n\n- `filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }`\n  A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.\n  - `and?: object[]`\n  - `field?: string`\n  - `not?: object`\n  - `op?: string`\n  - `or?: object[]`\n  - `value?: object`\n\n- `limit?: number`\n  Page size; default 10, max 50.\n\n- `source_types?: 'video' | 'short' | 'channel' | 'playlist' | 'other'[]`\n  Limit results to YouTube source types: `video`, `short`, `channel`, `playlist`, or `other`. Omit to include `video` and `short` with the default `attribution='attributed'`; `unattributed` and `all` widen the default to all five source types. Requests containing `other` with `attribution='attributed'` are rejected.\n\n### Returns\n\n- `{ data: { citation_share: number; count: number; rank: number; source_type: 'video' | 'short' | 'channel' | 'playlist' | 'other'; video_id: string; channel_handle?: string; channel_title?: string; channel_url?: string; duration_seconds?: number; published_at?: string; title?: string; url?: string; video_category?: string; }[]; info: { attribution: 'attributed' | 'unattributed' | 'all'; category_id: string; count: number; end_date: string; limit: number; models: string[]; source_types: 'video' | 'short' | 'channel' | 'playlist' | 'other'[]; start_date: string; cursor?: string; filter?: object; next_cursor?: string; total_results?: number; }; }`\n\n  - `data: { citation_share: number; count: number; rank: number; source_type: 'video' | 'short' | 'channel' | 'playlist' | 'other'; video_id: string; channel_handle?: string; channel_title?: string; channel_url?: string; duration_seconds?: number; published_at?: string; title?: string; url?: string; video_category?: string; }[]`\n  - `info: { attribution: 'attributed' | 'unattributed' | 'all'; category_id: string; count: number; end_date: string; limit: number; models: string[]; source_types: 'video' | 'short' | 'channel' | 'playlist' | 'other'[]; start_date: string; cursor?: string; filter?: object; next_cursor?: string; total_results?: number; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.reports.social.youtube.getVideos({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.social.youtube.getVideos',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.social.youtube.getVideos({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'reports.social.youtube.get_videos',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.reports.social.youtube.get_videos(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date="end_date",\n    start_date="start_date",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v2/reports/social/youtube/videos \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "end_date",\n          "start_date": "start_date"\n        }\'',
      },
    },
  },
  {
    name: 'get_summary',
    endpoint: '/v2/reports/social/youtube/summary',
    httpMethod: 'post',
    summary: 'Query Youtube Summary',
    description: 'Report how much of youtube.com the channel and video rankings account for.',
    stainlessPath: '(resource) reports.social.youtube > (method) get_summary',
    qualified: 'client.reports.social.youtube.getSummary',
    params: [
      'category_id: string;',
      'end_date: string;',
      'start_date: string;',
      'filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; };',
    ],
    response:
      "{ data: { attributed_citations?: number; citations_channel?: number; citations_other?: number; citations_playlist?: number; citations_short?: number; citations_video?: number; distinct_channels?: number; distinct_shorts?: number; distinct_videos?: number; total_youtube_citations?: number; unattributed_citations?: number; }; info: { category_id: string; count: number; end_date: string; models: string[]; source_types: 'video' | 'short' | 'channel' | 'playlist' | 'other'[]; start_date: string; filter?: object; next_cursor?: string; total_results?: number; }; }",
    markdown:
      "## get_summary\n\n`client.reports.social.youtube.getSummary(category_id: string, end_date: string, start_date: string, filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }): { data: object; info: object; }`\n\n**post** `/v2/reports/social/youtube/summary`\n\nReport how much of youtube.com the channel and video rankings account for.\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `start_date: string`\n  YYYY-MM-DD, ET, inclusive\n\n- `filter?: { and?: object[]; field?: string; not?: object; op?: string; or?: object[]; value?: object; }`\n  A leaf (`field`/`op`/`value`) or an `and`/`or`/`not` group.\n  - `and?: object[]`\n  - `field?: string`\n  - `not?: object`\n  - `op?: string`\n  - `or?: object[]`\n  - `value?: object`\n\n### Returns\n\n- `{ data: { attributed_citations?: number; citations_channel?: number; citations_other?: number; citations_playlist?: number; citations_short?: number; citations_video?: number; distinct_channels?: number; distinct_shorts?: number; distinct_videos?: number; total_youtube_citations?: number; unattributed_citations?: number; }; info: { category_id: string; count: number; end_date: string; models: string[]; source_types: 'video' | 'short' | 'channel' | 'playlist' | 'other'[]; start_date: string; filter?: object; next_cursor?: string; total_results?: number; }; }`\n\n  - `data: { attributed_citations?: number; citations_channel?: number; citations_other?: number; citations_playlist?: number; citations_short?: number; citations_video?: number; distinct_channels?: number; distinct_shorts?: number; distinct_videos?: number; total_youtube_citations?: number; unattributed_citations?: number; }`\n  - `info: { category_id: string; count: number; end_date: string; models: string[]; source_types: 'video' | 'short' | 'channel' | 'playlist' | 'other'[]; start_date: string; filter?: object; next_cursor?: string; total_results?: number; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.reports.social.youtube.getSummary({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.reports.social.youtube.getSummary',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.social.youtube.getSummary({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: 'end_date',\n  start_date: 'start_date',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'reports.social.youtube.get_summary',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.reports.social.youtube.get_summary(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date="end_date",\n    start_date="start_date",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v2/reports/social/youtube/summary \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "end_date",\n          "start_date": "start_date"\n        }\'',
      },
    },
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
      "## list\n\n`client.content.optimization.list(asset_id: string, limit?: number, offset?: number): { data: object[]; info: object; }`\n\n**get** `/v1/content/{asset_id}/optimization`\n\nOptimization List\n\n### Parameters\n\n- `asset_id: string`\n\n- `limit?: number`\n  Maximum number of results to return\n\n- `offset?: number`\n  Offset for pagination\n\n### Returns\n\n- `{ data: { id: string; created_at: string; extracted_input: string; status: string; title: string; type: 'file' | 'text' | 'url'; }[]; info: { query: { asset_id: string; pagination?: pagination; }; total_rows: number; }; }`\n\n  - `data: { id: string; created_at: string; extracted_input: string; status: string; title: string; type: 'file' | 'text' | 'url'; }[]`\n  - `info: { query: { asset_id: string; pagination?: { limit?: number; offset?: number; }; }; total_rows: number; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst optimizations = await client.content.optimization.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(optimizations);\n```",
    perLanguage: {
      typescript: {
        method: 'client.content.optimization.list',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst optimizations = await client.content.optimization.list(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(optimizations.data);",
      },
      python: {
        method: 'content.optimization.list',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\noptimizations = client.content.optimization.list(\n    asset_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(optimizations.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/content/$ASSET_ID/optimization \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
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
      "## retrieve\n\n`client.content.optimization.retrieve(asset_id: string, content_id: string): { data: object; }`\n\n**get** `/v1/content/{asset_id}/optimization/{content_id}`\n\nOptimization Analysis\n\n### Parameters\n\n- `asset_id: string`\n\n- `content_id: string`\n\n### Returns\n\n- `{ data: { aeo_content_score: { target_zone: object; value: number; }; analysis: { breakdown: object[]; }; content: { format: 'markdown' | 'html'; value: string; }; inputs: { prompt: object; top_citations: string[]; topic: object; user: object; }; recommendations: { impact: object; status: 'done' | 'pending'; suggestion: object; title: string; }[]; }; }`\n\n  - `data: { aeo_content_score: { target_zone: { high: number; low: number; }; value: number; }; analysis: { breakdown: { score: number; title: string; weight: number; }[]; }; content: { format: 'markdown' | 'html'; value: string; }; inputs: { prompt: { id: string; name: string; }; top_citations: string[]; topic: { id: string; name: string; }; user: { metadata: object; type: 'file' | 'text' | 'url'; value: string; }; }; recommendations: { impact: { score: number; section: string; }; status: 'done' | 'pending'; suggestion: { rationale: string; text: string; }; title: string; }[]; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst optimization = await client.content.optimization.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { asset_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(optimization);\n```",
    perLanguage: {
      typescript: {
        method: 'client.content.optimization.retrieve',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst optimization = await client.content.optimization.retrieve(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { asset_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },\n);\n\nconsole.log(optimization.data);",
      },
      python: {
        method: 'content.optimization.retrieve',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\noptimization = client.content.optimization.retrieve(\n    content_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    asset_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(optimization.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/content/$ASSET_ID/optimization/$CONTENT_ID \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/agents',
    httpMethod: 'get',
    summary: 'List agents',
    description:
      'List agents available to your organization.\n\nAgent status reflects whether an agent has ever been published. `published`\nagents have a live published version. `draft` agents have not been\npublished yet.',
    stainlessPath: '(resource) agents > (method) list',
    qualified: 'client.agents.list',
    params: ['limit?: number;', 'next_cursor?: string;', "statuses?: 'published' | 'draft'[];"],
    response:
      "{ data: { id: string; created_at: string; name: string; organization_id: string; status: 'draft' | 'published' | 'unknown'; description?: string; }[]; pagination?: { limit?: number; next_cursor?: string; }; }",
    markdown:
      "## list\n\n`client.agents.list(limit?: number, next_cursor?: string, statuses?: 'published' | 'draft'[]): { data: object[]; pagination?: cursor_pagination; }`\n\n**get** `/v1/agents`\n\nList agents available to your organization.\n\nAgent status reflects whether an agent has ever been published. `published`\nagents have a live published version. `draft` agents have not been\npublished yet.\n\n### Parameters\n\n- `limit?: number`\n\n- `next_cursor?: string`\n\n- `statuses?: 'published' | 'draft'[]`\n  Optional status filter. Use `published` to list agents that have a live published version, or `draft` to list agents that have not been published yet. Defaults to `published`.\n\n### Returns\n\n- `{ data: { id: string; created_at: string; name: string; organization_id: string; status: 'draft' | 'published' | 'unknown'; description?: string; }[]; pagination?: { limit?: number; next_cursor?: string; }; }`\n  Paginated list of agents.\n\n  - `data: { id: string; created_at: string; name: string; organization_id: string; status: 'draft' | 'published' | 'unknown'; description?: string; }[]`\n  - `pagination?: { limit?: number; next_cursor?: string; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst agents = await client.agents.list();\n\nconsole.log(agents);\n```",
    perLanguage: {
      typescript: {
        method: 'client.agents.list',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst agents = await client.agents.list();\n\nconsole.log(agents.data);",
      },
      python: {
        method: 'agents.list',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nagents = client.agents.list()\nprint(agents.data)',
      },
      http: {
        example: 'curl https://api.tryprofound.com/v1/agents \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/agents/{agent_id}',
    httpMethod: 'get',
    summary: 'Get an agent',
    description:
      'Retrieve an agent and its schema details.\n\nAgents can have both a live published version and a draft version with newer\nunpublished changes. Use the `version` parameter to choose which state to return.',
    stainlessPath: '(resource) agents > (method) retrieve',
    qualified: 'client.agents.retrieve',
    params: ['agent_id: string;', "version?: 'published' | 'draft';"],
    response:
      "{ id: string; created_at: string; name: string; organization_id: string; status: 'draft' | 'published' | 'unknown'; description?: string; schema?: { input: object; output: object; }; validation?: { valid: boolean; issues?: { code: string; message: string; field?: string; field_title?: string; node_id?: string; node_title?: string; violation?: string; }[]; }; }",
    markdown:
      "## retrieve\n\n`client.agents.retrieve(agent_id: string, version?: 'published' | 'draft'): { id: string; created_at: string; name: string; organization_id: string; status: 'draft' | 'published' | 'unknown'; description?: string; schema?: object; validation?: object; }`\n\n**get** `/v1/agents/{agent_id}`\n\nRetrieve an agent and its schema details.\n\nAgents can have both a live published version and a draft version with newer\nunpublished changes. Use the `version` parameter to choose which state to return.\n\n### Parameters\n\n- `agent_id: string`\n  The ID of the agent to retrieve.\n\n- `version?: 'published' | 'draft'`\n  Version of the agent to retrieve. Use `published` for the live version, or `draft` for the latest unpublished changes for the same agent. Defaults to `published`.\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; organization_id: string; status: 'draft' | 'published' | 'unknown'; description?: string; schema?: { input: object; output: object; }; validation?: { valid: boolean; issues?: { code: string; message: string; field?: string; field_title?: string; node_id?: string; node_title?: string; violation?: string; }[]; }; }`\n  Detailed information for an agent.\n\n  - `id: string`\n  - `created_at: string`\n  - `name: string`\n  - `organization_id: string`\n  - `status: 'draft' | 'published' | 'unknown'`\n  - `description?: string`\n  - `schema?: { input: object; output: object; }`\n  - `validation?: { valid: boolean; issues?: { code: string; message: string; field?: string; field_title?: string; node_id?: string; node_title?: string; violation?: string; }[]; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst agent = await client.agents.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(agent);\n```",
    perLanguage: {
      typescript: {
        method: 'client.agents.retrieve',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst agent = await client.agents.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(agent.id);",
      },
      python: {
        method: 'agents.retrieve',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nagent = client.agents.retrieve(\n    agent_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(agent.id)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/agents/$AGENT_ID \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/agents',
    httpMethod: 'post',
    summary: 'Create an agent',
    description:
      'Create a new draft agent owned by the given organization.\n\n`organization_id` is required and you must be a member of it. The agent is created\nas a `draft`; publish it with `POST /v1/agents/{agent_id}/publish` once its graph\nis ready.',
    stainlessPath: '(resource) agents > (method) create',
    qualified: 'client.agents.create',
    params: ['name: string;', 'organization_id: string;', 'description?: string;', 'graph?: object;'],
    response:
      "{ id: string; created_at: string; name: string; organization_id: string; status: 'draft' | 'published' | 'unknown'; description?: string; }",
    markdown:
      "## create\n\n`client.agents.create(name: string, organization_id: string, description?: string, graph?: object): { id: string; created_at: string; name: string; organization_id: string; status: 'draft' | 'published' | 'unknown'; description?: string; }`\n\n**post** `/v1/agents`\n\nCreate a new draft agent owned by the given organization.\n\n`organization_id` is required and you must be a member of it. The agent is created\nas a `draft`; publish it with `POST /v1/agents/{agent_id}/publish` once its graph\nis ready.\n\n### Parameters\n\n- `name: string`\n  Display name for the agent. Must be non-empty.\n\n- `organization_id: string`\n  ID of the organization that will own the agent. Required — Profound API keys are user-scoped, so the owning organization must be chosen explicitly. The caller must be a member of this organization.\n\n- `description?: string`\n  Short description of the agent.\n\n- `graph?: object`\n  Initial workflow graph for the agent's draft version. Optional — an agent can be created empty and have its graph filled in later.\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; organization_id: string; status: 'draft' | 'published' | 'unknown'; description?: string; }`\n  Summary information for an agent.\n\n  - `id: string`\n  - `created_at: string`\n  - `name: string`\n  - `organization_id: string`\n  - `status: 'draft' | 'published' | 'unknown'`\n  - `description?: string`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst agent = await client.agents.create({ name: 'x', organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(agent);\n```",
    perLanguage: {
      typescript: {
        method: 'client.agents.create',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst agent = await client.agents.create({\n  name: 'x',\n  organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(agent.id);",
      },
      python: {
        method: 'agents.create',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nagent = client.agents.create(\n    name="x",\n    organization_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(agent.id)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/agents \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "name": "x",\n          "organization_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n        }\'',
      },
    },
  },
  {
    name: 'publish',
    endpoint: '/v1/agents/{agent_id}/publish',
    httpMethod: 'post',
    summary: 'Publish an agent',
    description:
      "Publish an agent's latest draft as its live published version.\n\nYou must be a member of the agent's organization. Publishing promotes the current\ndraft graph to a new published version. A draft that cannot produce its declared\ninput/output contract is rejected with `422` and is not published.",
    stainlessPath: '(resource) agents > (method) publish',
    qualified: 'client.agents.publish',
    params: ['agent_id: string;'],
    response:
      "{ id: string; created_at: string; name: string; organization_id: string; status: 'draft' | 'published' | 'unknown'; description?: string; }",
    markdown:
      "## publish\n\n`client.agents.publish(agent_id: string): { id: string; created_at: string; name: string; organization_id: string; status: 'draft' | 'published' | 'unknown'; description?: string; }`\n\n**post** `/v1/agents/{agent_id}/publish`\n\nPublish an agent's latest draft as its live published version.\n\nYou must be a member of the agent's organization. Publishing promotes the current\ndraft graph to a new published version. A draft that cannot produce its declared\ninput/output contract is rejected with `422` and is not published.\n\n### Parameters\n\n- `agent_id: string`\n  The ID of the agent to publish.\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; organization_id: string; status: 'draft' | 'published' | 'unknown'; description?: string; }`\n  Summary information for an agent.\n\n  - `id: string`\n  - `created_at: string`\n  - `name: string`\n  - `organization_id: string`\n  - `status: 'draft' | 'published' | 'unknown'`\n  - `description?: string`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.agents.publish('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.agents.publish',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.agents.publish('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.id);",
      },
      python: {
        method: 'agents.publish',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.agents.publish(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.id)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/agents/$AGENT_ID/publish \\\n    -X POST \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/agents/{agent_id}',
    httpMethod: 'patch',
    summary: 'Update an agent',
    description:
      "Update an agent's draft graph in place.\n\nYou must be a member of the agent's organization. The agent's draft is replaced with the\nsupplied graph and re-validated, so you can iterate one draft — create, then update per\nfix — instead of creating a new agent on every change. The response carries the updated\n`validation`; publish with `POST /v1/agents/{agent_id}/publish` once `validation.valid`.",
    stainlessPath: '(resource) agents > (method) update',
    qualified: 'client.agents.update',
    params: ['agent_id: string;', 'graph: object;'],
    response:
      "{ id: string; created_at: string; name: string; organization_id: string; status: 'draft' | 'published' | 'unknown'; description?: string; schema?: { input: object; output: object; }; validation?: { valid: boolean; issues?: { code: string; message: string; field?: string; field_title?: string; node_id?: string; node_title?: string; violation?: string; }[]; }; }",
    markdown:
      "## update\n\n`client.agents.update(agent_id: string, graph: object): { id: string; created_at: string; name: string; organization_id: string; status: 'draft' | 'published' | 'unknown'; description?: string; schema?: object; validation?: object; }`\n\n**patch** `/v1/agents/{agent_id}`\n\nUpdate an agent's draft graph in place.\n\nYou must be a member of the agent's organization. The agent's draft is replaced with the\nsupplied graph and re-validated, so you can iterate one draft — create, then update per\nfix — instead of creating a new agent on every change. The response carries the updated\n`validation`; publish with `POST /v1/agents/{agent_id}/publish` once `validation.valid`.\n\n### Parameters\n\n- `agent_id: string`\n  The ID of the agent to update.\n\n- `graph: object`\n  New workflow graph for the agent's draft version. Replaces the current draft graph; the agent is iterated in place rather than re-created, so its ID is stable. Required — a null graph is rejected as a 422 here rather than as a relayed upstream error.\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; organization_id: string; status: 'draft' | 'published' | 'unknown'; description?: string; schema?: { input: object; output: object; }; validation?: { valid: boolean; issues?: { code: string; message: string; field?: string; field_title?: string; node_id?: string; node_title?: string; violation?: string; }[]; }; }`\n  Detailed information for an agent.\n\n  - `id: string`\n  - `created_at: string`\n  - `name: string`\n  - `organization_id: string`\n  - `status: 'draft' | 'published' | 'unknown'`\n  - `description?: string`\n  - `schema?: { input: object; output: object; }`\n  - `validation?: { valid: boolean; issues?: { code: string; message: string; field?: string; field_title?: string; node_id?: string; node_title?: string; violation?: string; }[]; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst agent = await client.agents.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { graph: { foo: 'bar' } });\n\nconsole.log(agent);\n```",
    perLanguage: {
      typescript: {
        method: 'client.agents.update',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst agent = await client.agents.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  graph: { foo: 'bar' },\n});\n\nconsole.log(agent.id);",
      },
      python: {
        method: 'agents.update',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nagent = client.agents.update(\n    agent_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    graph={\n        "foo": "bar"\n    },\n)\nprint(agent.id)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/agents/$AGENT_ID \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "graph": {\n            "foo": "bar"\n          }\n        }\'',
      },
    },
  },
  {
    name: 'retrieve_graph',
    endpoint: '/v1/agents/{agent_id}/graph',
    httpMethod: 'get',
    summary: "Get an agent's graph",
    description:
      "Retrieve an agent's full workflow graph (`{nodes, edges}`).\n\nThe graph is returned verbatim in the canonical dialect — the same shape `POST /v1/agents`\nand `PATCH /v1/agents/{agent_id}` accept — so a known-good agent can be read back, copied,\nand edited. Tool-backed nodes appear in their lowered `tool` form rather than the friendly\nv1 node types. A `draft` is visible only to its creator; the `published` version is visible\nacross its organization.",
    stainlessPath: '(resource) agents > (method) retrieve_graph',
    qualified: 'client.agents.retrieveGraph',
    params: ['agent_id: string;', "version?: 'published' | 'draft';"],
    response: "{ agent_id: string; graph: object; version: 'published' | 'draft'; }",
    markdown:
      "## retrieve_graph\n\n`client.agents.retrieveGraph(agent_id: string, version?: 'published' | 'draft'): { agent_id: string; graph: object; version: 'published' | 'draft'; }`\n\n**get** `/v1/agents/{agent_id}/graph`\n\nRetrieve an agent's full workflow graph (`{nodes, edges}`).\n\nThe graph is returned verbatim in the canonical dialect — the same shape `POST /v1/agents`\nand `PATCH /v1/agents/{agent_id}` accept — so a known-good agent can be read back, copied,\nand edited. Tool-backed nodes appear in their lowered `tool` form rather than the friendly\nv1 node types. A `draft` is visible only to its creator; the `published` version is visible\nacross its organization.\n\n### Parameters\n\n- `agent_id: string`\n  The ID of the agent whose graph to retrieve.\n\n- `version?: 'published' | 'draft'`\n  Version of the agent whose graph to retrieve. Use `published` for the live version, or `draft` for the latest unpublished changes. Defaults to `published`.\n\n### Returns\n\n- `{ agent_id: string; graph: object; version: 'published' | 'draft'; }`\n  An agent version's workflow graph in the canonical dialect.\n\n  - `agent_id: string`\n  - `graph: object`\n  - `version: 'published' | 'draft'`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.agents.retrieveGraph('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.agents.retrieveGraph',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.agents.retrieveGraph('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.agent_id);",
      },
      python: {
        method: 'agents.retrieve_graph',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.agents.retrieve_graph(\n    agent_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.agent_id)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/agents/$AGENT_ID/graph \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/agents/{agent_id}/runs',
    httpMethod: 'post',
    summary: 'Run an agent',
    description:
      "Start a new run for an agent.\n\nRuns always execute the agent's live published version, so the agent must be\npublished first with `POST /v1/agents/{agent_id}/publish`. Unpublished drafts\ncannot be run.",
    stainlessPath: '(resource) agents.runs > (method) create',
    qualified: 'client.agents.runs.create',
    params: ['agent_id: string;', 'inputs?: object;'],
    response:
      "{ id: string; agent_id: string; status: 'queued' | 'running' | 'succeeded' | 'failed' | 'cancelled' | 'skipped' | 'unknown'; started_at?: string; }",
    markdown:
      "## create\n\n`client.agents.runs.create(agent_id: string, inputs?: object): { id: string; agent_id: string; status: 'queued' | 'running' | 'succeeded' | 'failed' | 'cancelled' | 'skipped' | 'unknown'; started_at?: string; }`\n\n**post** `/v1/agents/{agent_id}/runs`\n\nStart a new run for an agent.\n\nRuns always execute the agent's live published version, so the agent must be\npublished first with `POST /v1/agents/{agent_id}/publish`. Unpublished drafts\ncannot be run.\n\n### Parameters\n\n- `agent_id: string`\n  The ID of the agent to run.\n\n- `inputs?: object`\n  Input values for the run. Keys should match the property names defined in `schema.input`. Omit the request body when the agent does not require inputs.\n\n### Returns\n\n- `{ id: string; agent_id: string; status: 'queued' | 'running' | 'succeeded' | 'failed' | 'cancelled' | 'skipped' | 'unknown'; started_at?: string; }`\n  Run details returned after a run request is accepted.\n\n  - `id: string`\n  - `agent_id: string`\n  - `status: 'queued' | 'running' | 'succeeded' | 'failed' | 'cancelled' | 'skipped' | 'unknown'`\n  - `started_at?: string`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst run = await client.agents.runs.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(run);\n```",
    perLanguage: {
      typescript: {
        method: 'client.agents.runs.create',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst run = await client.agents.runs.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(run.id);",
      },
      python: {
        method: 'agents.runs.create',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nrun = client.agents.runs.create(\n    agent_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(run.id)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/agents/$AGENT_ID/runs \\\n    -X POST \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/agents/{agent_id}/runs/{run_id}',
    httpMethod: 'get',
    summary: 'Get an agent run',
    description: 'Retrieve the current status and result details for an agent run.',
    stainlessPath: '(resource) agents.runs > (method) retrieve',
    qualified: 'client.agents.runs.retrieve',
    params: ['agent_id: string;', 'run_id: string;', 'verbose?: boolean;'],
    response:
      "{ id: string; agent_id: string; status: 'queued' | 'running' | 'succeeded' | 'failed' | 'cancelled' | 'skipped' | 'unknown'; error?: object; finished_at?: string; outputs?: object; started_at?: string; steps?: { node_id: string; node_type: string; status: string; title: string; elapsed_time?: number; error_message?: string; finished_at?: string; outputs?: object; }[]; }",
    markdown:
      "## retrieve\n\n`client.agents.runs.retrieve(agent_id: string, run_id: string, verbose?: boolean): { id: string; agent_id: string; status: 'queued' | 'running' | 'succeeded' | 'failed' | 'cancelled' | 'skipped' | 'unknown'; error?: object; finished_at?: string; outputs?: object; started_at?: string; steps?: object[]; }`\n\n**get** `/v1/agents/{agent_id}/runs/{run_id}`\n\nRetrieve the current status and result details for an agent run.\n\n### Parameters\n\n- `agent_id: string`\n  The ID of the agent that owns the run.\n\n- `run_id: string`\n  The ID of the run to retrieve.\n\n- `verbose?: boolean`\n  Include each step's raw `outputs` payload in the execution trace.\n\n### Returns\n\n- `{ id: string; agent_id: string; status: 'queued' | 'running' | 'succeeded' | 'failed' | 'cancelled' | 'skipped' | 'unknown'; error?: object; finished_at?: string; outputs?: object; started_at?: string; steps?: { node_id: string; node_type: string; status: string; title: string; elapsed_time?: number; error_message?: string; finished_at?: string; outputs?: object; }[]; }`\n  Status and result details for an agent run.\n\n  - `id: string`\n  - `agent_id: string`\n  - `status: 'queued' | 'running' | 'succeeded' | 'failed' | 'cancelled' | 'skipped' | 'unknown'`\n  - `error?: object`\n  - `finished_at?: string`\n  - `outputs?: object`\n  - `started_at?: string`\n  - `steps?: { node_id: string; node_type: string; status: string; title: string; elapsed_time?: number; error_message?: string; finished_at?: string; outputs?: object; }[]`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst run = await client.agents.runs.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { agent_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(run);\n```",
    perLanguage: {
      typescript: {
        method: 'client.agents.runs.retrieve',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst run = await client.agents.runs.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  agent_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(run.id);",
      },
      python: {
        method: 'agents.runs.retrieve',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nrun = client.agents.runs.retrieve(\n    run_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    agent_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(run.id)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/agents/$AGENT_ID/runs/$RUN_ID \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/agents/node-types',
    httpMethod: 'get',
    summary: 'List node types',
    description:
      'List the node types available for building agents.\n\nThe set is deterministic and does not depend on the caller, so the response\nis safe to cache across sessions. Integration-dependent and dynamic-schema\nnode types are intentionally excluded in v1.',
    stainlessPath: '(resource) agents.node_types > (method) list',
    qualified: 'client.agents.nodeTypes.list',
    response: '{ data: { display_name: string; node_type: string; description?: string; }[]; }',
    markdown:
      "## list\n\n`client.agents.nodeTypes.list(): { data: object[]; }`\n\n**get** `/v1/agents/node-types`\n\nList the node types available for building agents.\n\nThe set is deterministic and does not depend on the caller, so the response\nis safe to cache across sessions. Integration-dependent and dynamic-schema\nnode types are intentionally excluded in v1.\n\n### Returns\n\n- `{ data: { display_name: string; node_type: string; description?: string; }[]; }`\n  List of node types available to v1 agent authors.\n\n  - `data: { display_name: string; node_type: string; description?: string; }[]`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst nodeTypes = await client.agents.nodeTypes.list();\n\nconsole.log(nodeTypes);\n```",
    perLanguage: {
      typescript: {
        method: 'client.agents.nodeTypes.list',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst nodeTypes = await client.agents.nodeTypes.list();\n\nconsole.log(nodeTypes.data);",
      },
      python: {
        method: 'agents.node_types.list',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nnode_types = client.agents.node_types.list()\nprint(node_types.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/agents/node-types \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve_schema',
    endpoint: '/v1/agents/node-types/{node_type}/schema',
    httpMethod: 'get',
    summary: 'Get a node type schema',
    description:
      "Retrieve the JSON schema for a single node type.\n\nThe `schema` field is an opaque JSON Schema for the node's configuration.\nUse `schema_version` as a cache key — it bumps whenever the schema changes.",
    stainlessPath: '(resource) agents.node_types > (method) retrieve_schema',
    qualified: 'client.agents.nodeTypes.retrieveSchema',
    params: ['node_type: string;'],
    response:
      '{ node_type: string; schema: object; schema_version: string; description?: string; docs_version?: string; documentation?: object; examples?: object[]; }',
    markdown:
      "## retrieve_schema\n\n`client.agents.nodeTypes.retrieveSchema(node_type: string): { node_type: string; schema: object; schema_version: string; description?: string; docs_version?: string; documentation?: object; examples?: object[]; }`\n\n**get** `/v1/agents/node-types/{node_type}/schema`\n\nRetrieve the JSON schema for a single node type.\n\nThe `schema` field is an opaque JSON Schema for the node's configuration.\nUse `schema_version` as a cache key — it bumps whenever the schema changes.\n\n### Parameters\n\n- `node_type: string`\n  The node type to fetch the schema for, e.g. `llm`.\n\n### Returns\n\n- `{ node_type: string; schema: object; schema_version: string; description?: string; docs_version?: string; documentation?: object; examples?: object[]; }`\n  JSON schema for a single node type.\n\n  - `node_type: string`\n  - `schema: object`\n  - `schema_version: string`\n  - `description?: string`\n  - `docs_version?: string`\n  - `documentation?: object`\n  - `examples?: object[]`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.agents.nodeTypes.retrieveSchema('node_type');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.agents.nodeTypes.retrieveSchema',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.agents.nodeTypes.retrieveSchema('node_type');\n\nconsole.log(response.node_type);",
      },
      python: {
        method: 'agents.node_types.retrieve_schema',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.agents.node_types.retrieve_schema(\n    "node_type",\n)\nprint(response.node_type)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/agents/node-types/$NODE_TYPE/schema \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/knowledge-bases',
    httpMethod: 'get',
    summary: 'List Knowledge Bases',
    description: 'List knowledge bases accessible to the API key.',
    stainlessPath: '(resource) knowledge_bases > (method) list',
    qualified: 'client.knowledgeBases.list',
    params: ['organization_id?: string;'],
    response:
      '{ data: { id: string; created_at: string; name: string; description?: string; slug?: string; }[]; pagination?: { limit?: number; next_cursor?: string; }; }',
    markdown:
      "## list\n\n`client.knowledgeBases.list(organization_id?: string): { data: object[]; pagination?: cursor_pagination; }`\n\n**get** `/v1/knowledge-bases`\n\nList knowledge bases accessible to the API key.\n\n### Parameters\n\n- `organization_id?: string`\n  Organization scope for API keys that can access multiple organizations.\n\n### Returns\n\n- `{ data: { id: string; created_at: string; name: string; description?: string; slug?: string; }[]; pagination?: { limit?: number; next_cursor?: string; }; }`\n\n  - `data: { id: string; created_at: string; name: string; description?: string; slug?: string; }[]`\n  - `pagination?: { limit?: number; next_cursor?: string; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst knowledgeBases = await client.knowledgeBases.list();\n\nconsole.log(knowledgeBases);\n```",
    perLanguage: {
      typescript: {
        method: 'client.knowledgeBases.list',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst knowledgeBases = await client.knowledgeBases.list();\n\nconsole.log(knowledgeBases.data);",
      },
      python: {
        method: 'knowledge_bases.list',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nknowledge_bases = client.knowledge_bases.list()\nprint(knowledge_bases.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/knowledge-bases \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
  },
  {
    name: 'search',
    endpoint: '/v1/knowledge-bases/{knowledge_base_id}/search',
    httpMethod: 'post',
    summary: 'Search Knowledge Base',
    description: 'Search a knowledge base and return matching snippets or pages.',
    stainlessPath: '(resource) knowledge_bases > (method) search',
    qualified: 'client.knowledgeBases.search',
    params: [
      'knowledge_base_id: string;',
      'query: string;',
      'top_k: number;',
      'organization_id?: string;',
      'filters?: { folders?: string[]; tags?: string[]; };',
      'return_full_page?: boolean;',
    ],
    response:
      '{ data: { id: string; content: string; metadata: object; score: number; }[]; pagination?: { limit?: number; next_cursor?: string; }; }',
    markdown:
      "## search\n\n`client.knowledgeBases.search(knowledge_base_id: string, query: string, top_k: number, organization_id?: string, filters?: { folders?: string[]; tags?: string[]; }, return_full_page?: boolean): { data: object[]; pagination?: cursor_pagination; }`\n\n**post** `/v1/knowledge-bases/{knowledge_base_id}/search`\n\nSearch a knowledge base and return matching snippets or pages.\n\n### Parameters\n\n- `knowledge_base_id: string`\n  Unique knowledge base ID.\n\n- `query: string`\n  Search query.\n\n- `top_k: number`\n  Maximum number of results to return.\n\n- `organization_id?: string`\n  Organization scope for API keys that can access multiple organizations.\n\n- `filters?: { folders?: string[]; tags?: string[]; }`\n  Optional search filters.\n  - `folders?: string[]`\n    Optional folder paths to search within. Currently limited to one folder.\n  - `tags?: string[]`\n    Optional tags to match. Documents with any matching tag are included.\n\n- `return_full_page?: boolean`\n  Return full page content instead of snippets.\n\n### Returns\n\n- `{ data: { id: string; content: string; metadata: object; score: number; }[]; pagination?: { limit?: number; next_cursor?: string; }; }`\n\n  - `data: { id: string; content: string; metadata: object; score: number; }[]`\n  - `pagination?: { limit?: number; next_cursor?: string; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.knowledgeBases.search('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { query: 'x', top_k: 1 });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.knowledgeBases.search',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.knowledgeBases.search('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  query: 'x',\n  top_k: 1,\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'knowledge_bases.search',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.knowledge_bases.search(\n    knowledge_base_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    query="x",\n    top_k=1,\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/knowledge-bases/$KNOWLEDGE_BASE_ID/search \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "query": "x",\n          "top_k": 1\n        }\'',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/knowledge-bases/{knowledge_base_id}/documents',
    httpMethod: 'post',
    summary: 'Add Document',
    description: 'Add a document to a knowledge base using JSON text or multipart file upload.',
    stainlessPath: '(resource) knowledge_bases.documents > (method) create',
    qualified: 'client.knowledgeBases.documents.create',
    params: [
      'knowledge_base_id: string;',
      'name: string;',
      'text: string;',
      'organization_id?: string;',
      'folder?: string;',
    ],
    response: '{ message: string; name: string; path: string; folder?: string; }',
    markdown:
      "## create\n\n`client.knowledgeBases.documents.create(knowledge_base_id: string, name: string, text: string, organization_id?: string, folder?: string): { message: string; name: string; path: string; folder?: string; }`\n\n**post** `/v1/knowledge-bases/{knowledge_base_id}/documents`\n\nAdd a document to a knowledge base using JSON text or multipart file upload.\n\n### Parameters\n\n- `knowledge_base_id: string`\n  Unique knowledge base ID.\n\n- `name: string`\n  Unique document name.\n\n- `text: string`\n  Text content to add to the document.\n\n- `organization_id?: string`\n  Organization scope for API keys that can access multiple organizations.\n\n- `folder?: string`\n  Folder path to add the document under.\n\n### Returns\n\n- `{ message: string; name: string; path: string; folder?: string; }`\n\n  - `message: string`\n  - `name: string`\n  - `path: string`\n  - `folder?: string`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst document = await client.knowledgeBases.documents.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { name: 'x', text: 'x' });\n\nconsole.log(document);\n```",
    perLanguage: {
      typescript: {
        method: 'client.knowledgeBases.documents.create',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst document = await client.knowledgeBases.documents.create(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { name: 'x', text: 'x' },\n);\n\nconsole.log(document.message);",
      },
      python: {
        method: 'knowledge_bases.documents.create',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\ndocument = client.knowledge_bases.documents.create(\n    knowledge_base_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    name="x",\n    text="x",\n)\nprint(document.message)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/knowledge-bases/$KNOWLEDGE_BASE_ID/documents \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "name": "x",\n          "text": "x"\n        }\'',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/knowledge-bases/{knowledge_base_id}/documents',
    httpMethod: 'put',
    summary: 'Update Document',
    description: 'Overwrite a knowledge base document using JSON text or multipart file upload.',
    stainlessPath: '(resource) knowledge_bases.documents > (method) update',
    qualified: 'client.knowledgeBases.documents.update',
    params: [
      'knowledge_base_id: string;',
      'name: string;',
      'text: string;',
      'organization_id?: string;',
      'folder?: string;',
    ],
    response: '{ message: string; name: string; path: string; folder?: string; }',
    markdown:
      "## update\n\n`client.knowledgeBases.documents.update(knowledge_base_id: string, name: string, text: string, organization_id?: string, folder?: string): { message: string; name: string; path: string; folder?: string; }`\n\n**put** `/v1/knowledge-bases/{knowledge_base_id}/documents`\n\nOverwrite a knowledge base document using JSON text or multipart file upload.\n\n### Parameters\n\n- `knowledge_base_id: string`\n  Unique knowledge base ID.\n\n- `name: string`\n  Document name or path to update.\n\n- `text: string`\n  Replacement text content for the document.\n\n- `organization_id?: string`\n  Organization scope for API keys that can access multiple organizations.\n\n- `folder?: string`\n  Folder path containing the document.\n\n### Returns\n\n- `{ message: string; name: string; path: string; folder?: string; }`\n\n  - `message: string`\n  - `name: string`\n  - `path: string`\n  - `folder?: string`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst document = await client.knowledgeBases.documents.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { name: 'x', text: 'x' });\n\nconsole.log(document);\n```",
    perLanguage: {
      typescript: {
        method: 'client.knowledgeBases.documents.update',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst document = await client.knowledgeBases.documents.update(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { name: 'x', text: 'x' },\n);\n\nconsole.log(document.message);",
      },
      python: {
        method: 'knowledge_bases.documents.update',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\ndocument = client.knowledge_bases.documents.update(\n    knowledge_base_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    name="x",\n    text="x",\n)\nprint(document.message)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/knowledge-bases/$KNOWLEDGE_BASE_ID/documents \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "name": "x",\n          "text": "x"\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/knowledge-bases/{knowledge_base_id}/documents',
    httpMethod: 'delete',
    summary: 'Delete Document',
    description: 'Delete an existing document from a knowledge base.',
    stainlessPath: '(resource) knowledge_bases.documents > (method) delete',
    qualified: 'client.knowledgeBases.documents.delete',
    params: ['knowledge_base_id: string;', 'name: string;', 'organization_id?: string;'],
    response: '{ message: string; name: string; path: string; folder?: string; }',
    markdown:
      "## delete\n\n`client.knowledgeBases.documents.delete(knowledge_base_id: string, name: string, organization_id?: string): { message: string; name: string; path: string; folder?: string; }`\n\n**delete** `/v1/knowledge-bases/{knowledge_base_id}/documents`\n\nDelete an existing document from a knowledge base.\n\n### Parameters\n\n- `knowledge_base_id: string`\n  Unique knowledge base ID.\n\n- `name: string`\n  Document path to delete.\n\n- `organization_id?: string`\n  Organization scope for API keys that can access multiple organizations.\n\n### Returns\n\n- `{ message: string; name: string; path: string; folder?: string; }`\n\n  - `message: string`\n  - `name: string`\n  - `path: string`\n  - `folder?: string`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst document = await client.knowledgeBases.documents.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { name: 'x' });\n\nconsole.log(document);\n```",
    perLanguage: {
      typescript: {
        method: 'client.knowledgeBases.documents.delete',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst document = await client.knowledgeBases.documents.delete(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { name: 'x' },\n);\n\nconsole.log(document.message);",
      },
      python: {
        method: 'knowledge_bases.documents.delete',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\ndocument = client.knowledge_bases.documents.delete(\n    knowledge_base_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    name="x",\n)\nprint(document.message)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/knowledge-bases/$KNOWLEDGE_BASE_ID/documents \\\n    -X DELETE \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/knowledge-bases/{knowledge_base_id}/folders',
    httpMethod: 'post',
    summary: 'Add Folder',
    description: 'Create an empty folder at the requested knowledge base path.',
    stainlessPath: '(resource) knowledge_bases.folders > (method) create',
    qualified: 'client.knowledgeBases.folders.create',
    params: ['knowledge_base_id: string;', 'path: string;', 'organization_id?: string;'],
    response: '{ message: string; path: string; }',
    markdown:
      "## create\n\n`client.knowledgeBases.folders.create(knowledge_base_id: string, path: string, organization_id?: string): { message: string; path: string; }`\n\n**post** `/v1/knowledge-bases/{knowledge_base_id}/folders`\n\nCreate an empty folder at the requested knowledge base path.\n\n### Parameters\n\n- `knowledge_base_id: string`\n  Unique knowledge base ID.\n\n- `path: string`\n  Folder path to create.\n\n- `organization_id?: string`\n  Organization scope for API keys that can access multiple organizations.\n\n### Returns\n\n- `{ message: string; path: string; }`\n\n  - `message: string`\n  - `path: string`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst folder = await client.knowledgeBases.folders.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: 'x' });\n\nconsole.log(folder);\n```",
    perLanguage: {
      typescript: {
        method: 'client.knowledgeBases.folders.create',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst folder = await client.knowledgeBases.folders.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  path: 'x',\n});\n\nconsole.log(folder.message);",
      },
      python: {
        method: 'knowledge_bases.folders.create',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nfolder = client.knowledge_bases.folders.create(\n    knowledge_base_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    path="x",\n)\nprint(folder.message)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/knowledge-bases/$KNOWLEDGE_BASE_ID/folders \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "path": "x"\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/knowledge-bases/{knowledge_base_id}/folders',
    httpMethod: 'delete',
    summary: 'Delete Folder',
    description:
      'Delete a folder. With recursive=false, non-empty folders return 409 and no contents are deleted.',
    stainlessPath: '(resource) knowledge_bases.folders > (method) delete',
    qualified: 'client.knowledgeBases.folders.delete',
    params: [
      'knowledge_base_id: string;',
      'path: string;',
      'organization_id?: string;',
      'recursive?: boolean;',
    ],
    response: '{ message: string; path: string; }',
    markdown:
      "## delete\n\n`client.knowledgeBases.folders.delete(knowledge_base_id: string, path: string, organization_id?: string, recursive?: boolean): { message: string; path: string; }`\n\n**delete** `/v1/knowledge-bases/{knowledge_base_id}/folders`\n\nDelete a folder. With recursive=false, non-empty folders return 409 and no contents are deleted.\n\n### Parameters\n\n- `knowledge_base_id: string`\n  Unique knowledge base ID.\n\n- `path: string`\n  Folder path to delete.\n\n- `organization_id?: string`\n  Organization scope for API keys that can access multiple organizations.\n\n- `recursive?: boolean`\n  When false, only empty folders are deleted and non-empty folders return a conflict. When true, the folder and all contents are deleted.\n\n### Returns\n\n- `{ message: string; path: string; }`\n\n  - `message: string`\n  - `path: string`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst folder = await client.knowledgeBases.folders.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: 'x' });\n\nconsole.log(folder);\n```",
    perLanguage: {
      typescript: {
        method: 'client.knowledgeBases.folders.delete',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst folder = await client.knowledgeBases.folders.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  path: 'x',\n});\n\nconsole.log(folder.message);",
      },
      python: {
        method: 'knowledge_bases.folders.delete',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nfolder = client.knowledge_bases.folders.delete(\n    knowledge_base_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    path="x",\n)\nprint(folder.message)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/knowledge-bases/$KNOWLEDGE_BASE_ID/folders \\\n    -X DELETE \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/projects',
    httpMethod: 'get',
    summary: 'List Projects',
    description: 'List Projects',
    stainlessPath: '(resource) projects > (method) list',
    qualified: 'client.projects.list',
    params: ['category_id: string;', 'limit?: number;', 'offset?: number;', 'status?: string;'],
    response:
      "{ data: { category_id: string; project_id: string; title: string; initiated_by_user_id?: string; live_generation?: { run_id: string; status: 'queued' | 'running' | 'completed' | 'failed'; error?: string; finished_at?: string; started_at?: string; }; new_task_count?: number; retired_at?: string; retired_reason?: string; status?: 'suggested' | 'tracked' | 'retired'; summary?: string; task_count?: number; task_types?: string[]; topics?: string[]; updated_at?: string; }[]; pagination?: { limit?: number; offset?: number; }; }",
    markdown:
      "## list\n\n`client.projects.list(category_id: string, limit?: number, offset?: number, status?: string): { data: object[]; pagination?: pagination; }`\n\n**get** `/v1/projects`\n\nList Projects\n\n### Parameters\n\n- `category_id: string`\n  Category that owns the project.\n\n- `limit?: number`\n\n- `offset?: number`\n\n- `status?: string`\n  Comma-separated project statuses: suggested, tracked, retired.\n\n### Returns\n\n- `{ data: { category_id: string; project_id: string; title: string; initiated_by_user_id?: string; live_generation?: { run_id: string; status: 'queued' | 'running' | 'completed' | 'failed'; error?: string; finished_at?: string; started_at?: string; }; new_task_count?: number; retired_at?: string; retired_reason?: string; status?: 'suggested' | 'tracked' | 'retired'; summary?: string; task_count?: number; task_types?: string[]; topics?: string[]; updated_at?: string; }[]; pagination?: { limit?: number; offset?: number; }; }`\n\n  - `data: { category_id: string; project_id: string; title: string; initiated_by_user_id?: string; live_generation?: { run_id: string; status: 'queued' | 'running' | 'completed' | 'failed'; error?: string; finished_at?: string; started_at?: string; }; new_task_count?: number; retired_at?: string; retired_reason?: string; status?: 'suggested' | 'tracked' | 'retired'; summary?: string; task_count?: number; task_types?: string[]; topics?: string[]; updated_at?: string; }[]`\n  - `pagination?: { limit?: number; offset?: number; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst projects = await client.projects.list({ category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(projects);\n```",
    perLanguage: {
      typescript: {
        method: 'client.projects.list',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst projects = await client.projects.list({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(projects.data);",
      },
      python: {
        method: 'projects.list',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nprojects = client.projects.list(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(projects.data)',
      },
      http: {
        example: 'curl https://api.tryprofound.com/v1/projects \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/projects',
    httpMethod: 'post',
    summary: 'Create Project',
    description: 'Create Project',
    stainlessPath: '(resource) projects > (method) create',
    qualified: 'client.projects.create',
    params: [
      'category_id: string;',
      'attachments?: { id: string; data_base64: string; mime_type: string; name: string; size_bytes: number; }[];',
      'focus?: string;',
      "generation_context?: { dateRange?: { label: string; preset: string; endDate?: string; mode?: 'custom' | 'relative'; startDate?: string; }; platforms?: { id: string; name: string; slug?: string; }[]; projectCategories?: 'creative' | 'earned' | 'publish' | 'refresh' | 'social'[]; regions?: { id: string; name: string; slug?: string; }[]; tags?: { id: string; name: string; slug?: string; }[]; };",
      'project_name?: string;',
      'title?: string;',
      'topics?: string[];',
    ],
    response: "{ data: { project_id: string; run_id: string; status?: 'queued' | 'running'; }; }",
    markdown:
      "## create\n\n`client.projects.create(category_id: string, attachments?: { id: string; data_base64: string; mime_type: string; name: string; size_bytes: number; }[], focus?: string, generation_context?: { dateRange?: { label: string; preset: string; endDate?: string; mode?: 'custom' | 'relative'; startDate?: string; }; platforms?: { id: string; name: string; slug?: string; }[]; projectCategories?: 'creative' | 'earned' | 'publish' | 'refresh' | 'social'[]; regions?: { id: string; name: string; slug?: string; }[]; tags?: { id: string; name: string; slug?: string; }[]; }, project_name?: string, title?: string, topics?: string[]): { data: object; }`\n\n**post** `/v1/projects`\n\nCreate Project\n\n### Parameters\n\n- `category_id: string`\n\n- `attachments?: { id: string; data_base64: string; mime_type: string; name: string; size_bytes: number; }[]`\n\n- `focus?: string`\n\n- `generation_context?: { dateRange?: { label: string; preset: string; endDate?: string; mode?: 'custom' | 'relative'; startDate?: string; }; platforms?: { id: string; name: string; slug?: string; }[]; projectCategories?: 'creative' | 'earned' | 'publish' | 'refresh' | 'social'[]; regions?: { id: string; name: string; slug?: string; }[]; tags?: { id: string; name: string; slug?: string; }[]; }`\n  - `dateRange?: { label: string; preset: string; endDate?: string; mode?: 'custom' | 'relative'; startDate?: string; }`\n  - `platforms?: { id: string; name: string; slug?: string; }[]`\n  - `projectCategories?: 'creative' | 'earned' | 'publish' | 'refresh' | 'social'[]`\n  - `regions?: { id: string; name: string; slug?: string; }[]`\n  - `tags?: { id: string; name: string; slug?: string; }[]`\n\n- `project_name?: string`\n\n- `title?: string`\n\n- `topics?: string[]`\n\n### Returns\n\n- `{ data: { project_id: string; run_id: string; status?: 'queued' | 'running'; }; }`\n\n  - `data: { project_id: string; run_id: string; status?: 'queued' | 'running'; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst project = await client.projects.create({ category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(project);\n```",
    perLanguage: {
      typescript: {
        method: 'client.projects.create',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst project = await client.projects.create({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(project.data);",
      },
      python: {
        method: 'projects.create',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nproject = client.projects.create(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(project.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/projects \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/projects/{project_id}',
    httpMethod: 'get',
    summary: 'Get Project',
    description: 'Get Project',
    stainlessPath: '(resource) projects > (method) retrieve',
    qualified: 'client.projects.retrieve',
    params: ['project_id: string;', 'category_id: string;'],
    response:
      "{ data: { category_id: string; project_id: string; title: string; created_at?: string; initiated_by_user_id?: string; latest_version_id?: string; live_generation?: { run_id: string; status: 'queued' | 'running' | 'completed' | 'failed'; error?: string; finished_at?: string; started_at?: string; }; measurement?: object; new_task_count?: number; origin_run_id?: string; prompts?: string[]; retired_at?: string; retired_reason?: string; source_kind?: 'generate' | 'adhoc'; source_prompt?: string; status?: 'suggested' | 'tracked' | 'retired'; summary?: string; task_count?: number; tasks?: { category_id: string; project_id: string; task_id: string; title: string; brief?: string; created_at?: string; impact?: number; is_new?: boolean; reference_label?: string; reference_url?: string; status?: 'not_started' | 'in_progress' | 'done' | 'abandoned'; status_changed_at?: string; summary?: string; topic?: string; type?: string; }[]; topics?: string[]; updated_at?: string; version_count?: number; why?: string; }; }",
    markdown:
      "## retrieve\n\n`client.projects.retrieve(project_id: string, category_id: string): { data: object; }`\n\n**get** `/v1/projects/{project_id}`\n\nGet Project\n\n### Parameters\n\n- `project_id: string`\n  Unique project ID.\n\n- `category_id: string`\n  Category that owns the project.\n\n### Returns\n\n- `{ data: { category_id: string; project_id: string; title: string; created_at?: string; initiated_by_user_id?: string; latest_version_id?: string; live_generation?: { run_id: string; status: 'queued' | 'running' | 'completed' | 'failed'; error?: string; finished_at?: string; started_at?: string; }; measurement?: object; new_task_count?: number; origin_run_id?: string; prompts?: string[]; retired_at?: string; retired_reason?: string; source_kind?: 'generate' | 'adhoc'; source_prompt?: string; status?: 'suggested' | 'tracked' | 'retired'; summary?: string; task_count?: number; tasks?: { category_id: string; project_id: string; task_id: string; title: string; brief?: string; created_at?: string; impact?: number; is_new?: boolean; reference_label?: string; reference_url?: string; status?: 'not_started' | 'in_progress' | 'done' | 'abandoned'; status_changed_at?: string; summary?: string; topic?: string; type?: string; }[]; topics?: string[]; updated_at?: string; version_count?: number; why?: string; }; }`\n\n  - `data: { category_id: string; project_id: string; title: string; created_at?: string; initiated_by_user_id?: string; latest_version_id?: string; live_generation?: { run_id: string; status: 'queued' | 'running' | 'completed' | 'failed'; error?: string; finished_at?: string; started_at?: string; }; measurement?: object; new_task_count?: number; origin_run_id?: string; prompts?: string[]; retired_at?: string; retired_reason?: string; source_kind?: 'generate' | 'adhoc'; source_prompt?: string; status?: 'suggested' | 'tracked' | 'retired'; summary?: string; task_count?: number; tasks?: { category_id: string; project_id: string; task_id: string; title: string; brief?: string; created_at?: string; impact?: number; is_new?: boolean; reference_label?: string; reference_url?: string; status?: 'not_started' | 'in_progress' | 'done' | 'abandoned'; status_changed_at?: string; summary?: string; topic?: string; type?: string; }[]; topics?: string[]; updated_at?: string; version_count?: number; why?: string; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst project = await client.projects.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(project);\n```",
    perLanguage: {
      typescript: {
        method: 'client.projects.retrieve',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst project = await client.projects.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(project.data);",
      },
      python: {
        method: 'projects.retrieve',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nproject = client.projects.retrieve(\n    project_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(project.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/projects/$PROJECT_ID \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/projects/{project_id}',
    httpMethod: 'delete',
    summary: 'Delete Project',
    description: 'Delete Project',
    stainlessPath: '(resource) projects > (method) delete',
    qualified: 'client.projects.delete',
    params: ['project_id: string;', 'category_id: string;'],
    markdown:
      "## delete\n\n`client.projects.delete(project_id: string, category_id: string): void`\n\n**delete** `/v1/projects/{project_id}`\n\nDelete Project\n\n### Parameters\n\n- `project_id: string`\n  Unique project ID.\n\n- `category_id: string`\n  Category that owns the project.\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nawait client.projects.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' })\n```",
    perLanguage: {
      typescript: {
        method: 'client.projects.delete',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.projects.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});",
      },
      python: {
        method: 'projects.delete',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nclient.projects.delete(\n    project_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/projects/$PROJECT_ID \\\n    -X DELETE \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
  },
  {
    name: 'get_status',
    endpoint: '/v1/projects/{project_id}/status',
    httpMethod: 'get',
    summary: 'Get Project Status',
    description: 'Get Project Status',
    stainlessPath: '(resource) projects > (method) get_status',
    qualified: 'client.projects.getStatus',
    params: ['project_id: string;', 'category_id: string;'],
    response:
      "{ data: { category_id: string; project_id: string; status: 'suggested' | 'tracked' | 'retired'; live_generation?: { run_id: string; status: 'queued' | 'running' | 'completed' | 'failed'; error?: string; finished_at?: string; started_at?: string; }; updated_at?: string; }; }",
    markdown:
      "## get_status\n\n`client.projects.getStatus(project_id: string, category_id: string): { data: object; }`\n\n**get** `/v1/projects/{project_id}/status`\n\nGet Project Status\n\n### Parameters\n\n- `project_id: string`\n  Unique project ID.\n\n- `category_id: string`\n  Category that owns the project.\n\n### Returns\n\n- `{ data: { category_id: string; project_id: string; status: 'suggested' | 'tracked' | 'retired'; live_generation?: { run_id: string; status: 'queued' | 'running' | 'completed' | 'failed'; error?: string; finished_at?: string; started_at?: string; }; updated_at?: string; }; }`\n\n  - `data: { category_id: string; project_id: string; status: 'suggested' | 'tracked' | 'retired'; live_generation?: { run_id: string; status: 'queued' | 'running' | 'completed' | 'failed'; error?: string; finished_at?: string; started_at?: string; }; updated_at?: string; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.projects.getStatus('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.projects.getStatus',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.projects.getStatus('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'projects.get_status',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.projects.get_status(\n    project_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/projects/$PROJECT_ID/status \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
  },
  {
    name: 'archive',
    endpoint: '/v1/projects/{project_id}/archive',
    httpMethod: 'post',
    summary: 'Archive Project',
    description: 'Archive Project',
    stainlessPath: '(resource) projects > (method) archive',
    qualified: 'client.projects.archive',
    params: ['project_id: string;', 'category_id: string;', 'reason?: string;'],
    response:
      "{ data: { category_id: string; project_id: string; title: string; created_at?: string; initiated_by_user_id?: string; latest_version_id?: string; live_generation?: { run_id: string; status: 'queued' | 'running' | 'completed' | 'failed'; error?: string; finished_at?: string; started_at?: string; }; measurement?: object; new_task_count?: number; origin_run_id?: string; prompts?: string[]; retired_at?: string; retired_reason?: string; source_kind?: 'generate' | 'adhoc'; source_prompt?: string; status?: 'suggested' | 'tracked' | 'retired'; summary?: string; task_count?: number; topics?: string[]; updated_at?: string; version_count?: number; why?: string; }; }",
    markdown:
      "## archive\n\n`client.projects.archive(project_id: string, category_id: string, reason?: string): { data: object; }`\n\n**post** `/v1/projects/{project_id}/archive`\n\nArchive Project\n\n### Parameters\n\n- `project_id: string`\n  Unique project ID.\n\n- `category_id: string`\n  Category that owns the project.\n\n- `reason?: string`\n\n### Returns\n\n- `{ data: { category_id: string; project_id: string; title: string; created_at?: string; initiated_by_user_id?: string; latest_version_id?: string; live_generation?: { run_id: string; status: 'queued' | 'running' | 'completed' | 'failed'; error?: string; finished_at?: string; started_at?: string; }; measurement?: object; new_task_count?: number; origin_run_id?: string; prompts?: string[]; retired_at?: string; retired_reason?: string; source_kind?: 'generate' | 'adhoc'; source_prompt?: string; status?: 'suggested' | 'tracked' | 'retired'; summary?: string; task_count?: number; topics?: string[]; updated_at?: string; version_count?: number; why?: string; }; }`\n\n  - `data: { category_id: string; project_id: string; title: string; created_at?: string; initiated_by_user_id?: string; latest_version_id?: string; live_generation?: { run_id: string; status: 'queued' | 'running' | 'completed' | 'failed'; error?: string; finished_at?: string; started_at?: string; }; measurement?: object; new_task_count?: number; origin_run_id?: string; prompts?: string[]; retired_at?: string; retired_reason?: string; source_kind?: 'generate' | 'adhoc'; source_prompt?: string; status?: 'suggested' | 'tracked' | 'retired'; summary?: string; task_count?: number; topics?: string[]; updated_at?: string; version_count?: number; why?: string; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.projects.archive('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.projects.archive',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.projects.archive('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'projects.archive',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.projects.archive(\n    project_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          "curl https://api.tryprofound.com/v1/projects/$PROJECT_ID/archive \\\n    -H 'Content-Type: application/json' \\\n    -H \"X-API-Key: $PROFOUND_API_KEY\" \\\n    -d '{}'",
      },
    },
  },
  {
    name: 'unarchive',
    endpoint: '/v1/projects/{project_id}/unarchive',
    httpMethod: 'post',
    summary: 'Unarchive Project',
    description: 'Unarchive Project',
    stainlessPath: '(resource) projects > (method) unarchive',
    qualified: 'client.projects.unarchive',
    params: ['project_id: string;', 'category_id: string;'],
    response:
      "{ data: { category_id: string; project_id: string; title: string; created_at?: string; initiated_by_user_id?: string; latest_version_id?: string; live_generation?: { run_id: string; status: 'queued' | 'running' | 'completed' | 'failed'; error?: string; finished_at?: string; started_at?: string; }; measurement?: object; new_task_count?: number; origin_run_id?: string; prompts?: string[]; retired_at?: string; retired_reason?: string; source_kind?: 'generate' | 'adhoc'; source_prompt?: string; status?: 'suggested' | 'tracked' | 'retired'; summary?: string; task_count?: number; topics?: string[]; updated_at?: string; version_count?: number; why?: string; }; }",
    markdown:
      "## unarchive\n\n`client.projects.unarchive(project_id: string, category_id: string): { data: object; }`\n\n**post** `/v1/projects/{project_id}/unarchive`\n\nUnarchive Project\n\n### Parameters\n\n- `project_id: string`\n  Unique project ID.\n\n- `category_id: string`\n  Category that owns the project.\n\n### Returns\n\n- `{ data: { category_id: string; project_id: string; title: string; created_at?: string; initiated_by_user_id?: string; latest_version_id?: string; live_generation?: { run_id: string; status: 'queued' | 'running' | 'completed' | 'failed'; error?: string; finished_at?: string; started_at?: string; }; measurement?: object; new_task_count?: number; origin_run_id?: string; prompts?: string[]; retired_at?: string; retired_reason?: string; source_kind?: 'generate' | 'adhoc'; source_prompt?: string; status?: 'suggested' | 'tracked' | 'retired'; summary?: string; task_count?: number; topics?: string[]; updated_at?: string; version_count?: number; why?: string; }; }`\n\n  - `data: { category_id: string; project_id: string; title: string; created_at?: string; initiated_by_user_id?: string; latest_version_id?: string; live_generation?: { run_id: string; status: 'queued' | 'running' | 'completed' | 'failed'; error?: string; finished_at?: string; started_at?: string; }; measurement?: object; new_task_count?: number; origin_run_id?: string; prompts?: string[]; retired_at?: string; retired_reason?: string; source_kind?: 'generate' | 'adhoc'; source_prompt?: string; status?: 'suggested' | 'tracked' | 'retired'; summary?: string; task_count?: number; topics?: string[]; updated_at?: string; version_count?: number; why?: string; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.projects.unarchive('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.projects.unarchive',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.projects.unarchive('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'projects.unarchive',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.projects.unarchive(\n    project_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/projects/$PROJECT_ID/unarchive \\\n    -X POST \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/projects/generations',
    httpMethod: 'get',
    summary: 'List Project Generations',
    description: 'List Project Generations',
    stainlessPath: '(resource) projects.generations > (method) list',
    qualified: 'client.projects.generations.list',
    params: ['category_id: string;', 'limit?: number;', 'offset?: number;', 'status?: string;'],
    response:
      "{ data: { category_id: string; mode: 'generate' | 'adhoc'; run_id: string; status: 'queued' | 'running' | 'completed' | 'failed'; error?: string; finished_at?: string; focus_prompt?: string; started_at?: string; }[]; pagination?: { limit?: number; offset?: number; }; }",
    markdown:
      "## list\n\n`client.projects.generations.list(category_id: string, limit?: number, offset?: number, status?: string): { data: object[]; pagination?: pagination; }`\n\n**get** `/v1/projects/generations`\n\nList Project Generations\n\n### Parameters\n\n- `category_id: string`\n  Category that owns the project.\n\n- `limit?: number`\n\n- `offset?: number`\n\n- `status?: string`\n  Comma-separated generation statuses: queued, running, completed, failed.\n\n### Returns\n\n- `{ data: { category_id: string; mode: 'generate' | 'adhoc'; run_id: string; status: 'queued' | 'running' | 'completed' | 'failed'; error?: string; finished_at?: string; focus_prompt?: string; started_at?: string; }[]; pagination?: { limit?: number; offset?: number; }; }`\n\n  - `data: { category_id: string; mode: 'generate' | 'adhoc'; run_id: string; status: 'queued' | 'running' | 'completed' | 'failed'; error?: string; finished_at?: string; focus_prompt?: string; started_at?: string; }[]`\n  - `pagination?: { limit?: number; offset?: number; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst generations = await client.projects.generations.list({ category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(generations);\n```",
    perLanguage: {
      typescript: {
        method: 'client.projects.generations.list',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst generations = await client.projects.generations.list({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(generations.data);",
      },
      python: {
        method: 'projects.generations.list',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\ngenerations = client.projects.generations.list(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(generations.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/projects/generations \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/projects/generations/{run_id}',
    httpMethod: 'get',
    summary: 'Get Project Generation Status',
    description: 'Get Project Generation Status',
    stainlessPath: '(resource) projects.generations > (method) retrieve',
    qualified: 'client.projects.generations.retrieve',
    params: ['run_id: string;', 'category_id: string;'],
    response:
      "{ data: { category_id: string; mode: 'generate' | 'adhoc'; run_id: string; status: 'queued' | 'running' | 'completed' | 'failed'; error?: string; finished_at?: string; focus_prompt?: string; started_at?: string; }; }",
    markdown:
      "## retrieve\n\n`client.projects.generations.retrieve(run_id: string, category_id: string): { data: object; }`\n\n**get** `/v1/projects/generations/{run_id}`\n\nGet Project Generation Status\n\n### Parameters\n\n- `run_id: string`\n  Unique project generation run ID.\n\n- `category_id: string`\n  Category that owns the project.\n\n### Returns\n\n- `{ data: { category_id: string; mode: 'generate' | 'adhoc'; run_id: string; status: 'queued' | 'running' | 'completed' | 'failed'; error?: string; finished_at?: string; focus_prompt?: string; started_at?: string; }; }`\n\n  - `data: { category_id: string; mode: 'generate' | 'adhoc'; run_id: string; status: 'queued' | 'running' | 'completed' | 'failed'; error?: string; finished_at?: string; focus_prompt?: string; started_at?: string; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst generation = await client.projects.generations.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(generation);\n```",
    perLanguage: {
      typescript: {
        method: 'client.projects.generations.retrieve',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst generation = await client.projects.generations.retrieve(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },\n);\n\nconsole.log(generation.data);",
      },
      python: {
        method: 'projects.generations.retrieve',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\ngeneration = client.projects.generations.retrieve(\n    run_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(generation.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/projects/generations/$RUN_ID \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/projects/{project_id}/tasks',
    httpMethod: 'get',
    summary: 'List Project Tasks',
    description: 'List Project Tasks',
    stainlessPath: '(resource) projects.tasks > (method) list',
    qualified: 'client.projects.tasks.list',
    params: ['project_id: string;', 'category_id: string;'],
    response:
      "{ data: { category_id: string; project_id: string; task_id: string; title: string; brief?: string; created_at?: string; impact?: number; is_new?: boolean; reference_label?: string; reference_url?: string; status?: 'not_started' | 'in_progress' | 'done' | 'abandoned'; status_changed_at?: string; summary?: string; topic?: string; type?: string; }[]; pagination?: { limit?: number; offset?: number; }; }",
    markdown:
      "## list\n\n`client.projects.tasks.list(project_id: string, category_id: string): { data: object[]; pagination?: pagination; }`\n\n**get** `/v1/projects/{project_id}/tasks`\n\nList Project Tasks\n\n### Parameters\n\n- `project_id: string`\n  Unique project ID.\n\n- `category_id: string`\n  Category that owns the project.\n\n### Returns\n\n- `{ data: { category_id: string; project_id: string; task_id: string; title: string; brief?: string; created_at?: string; impact?: number; is_new?: boolean; reference_label?: string; reference_url?: string; status?: 'not_started' | 'in_progress' | 'done' | 'abandoned'; status_changed_at?: string; summary?: string; topic?: string; type?: string; }[]; pagination?: { limit?: number; offset?: number; }; }`\n\n  - `data: { category_id: string; project_id: string; task_id: string; title: string; brief?: string; created_at?: string; impact?: number; is_new?: boolean; reference_label?: string; reference_url?: string; status?: 'not_started' | 'in_progress' | 'done' | 'abandoned'; status_changed_at?: string; summary?: string; topic?: string; type?: string; }[]`\n  - `pagination?: { limit?: number; offset?: number; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst tasks = await client.projects.tasks.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(tasks);\n```",
    perLanguage: {
      typescript: {
        method: 'client.projects.tasks.list',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst tasks = await client.projects.tasks.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(tasks.data);",
      },
      python: {
        method: 'projects.tasks.list',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\ntasks = client.projects.tasks.list(\n    project_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(tasks.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/projects/$PROJECT_ID/tasks \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/projects/{project_id}/tasks',
    httpMethod: 'post',
    summary: 'Create Project Task',
    description: 'Create Project Task',
    stainlessPath: '(resource) projects.tasks > (method) create',
    qualified: 'client.projects.tasks.create',
    params: [
      'project_id: string;',
      'category_id: string;',
      'title: string;',
      'brief?: string;',
      'impact?: number;',
      'position?: number;',
      'reference_label?: string;',
      'reference_url?: string;',
      'summary?: string;',
      'topic?: string;',
      'type?: string;',
    ],
    response:
      "{ data: { category_id: string; project_id: string; task_id: string; title: string; brief?: string; created_at?: string; impact?: number; is_new?: boolean; reference_label?: string; reference_url?: string; status?: 'not_started' | 'in_progress' | 'done' | 'abandoned'; status_changed_at?: string; summary?: string; topic?: string; type?: string; }; }",
    markdown:
      "## create\n\n`client.projects.tasks.create(project_id: string, category_id: string, title: string, brief?: string, impact?: number, position?: number, reference_label?: string, reference_url?: string, summary?: string, topic?: string, type?: string): { data: object; }`\n\n**post** `/v1/projects/{project_id}/tasks`\n\nCreate Project Task\n\n### Parameters\n\n- `project_id: string`\n  Unique project ID.\n\n- `category_id: string`\n  Category that owns the project.\n\n- `title: string`\n\n- `brief?: string`\n\n- `impact?: number`\n\n- `position?: number`\n\n- `reference_label?: string`\n\n- `reference_url?: string`\n\n- `summary?: string`\n\n- `topic?: string`\n\n- `type?: string`\n\n### Returns\n\n- `{ data: { category_id: string; project_id: string; task_id: string; title: string; brief?: string; created_at?: string; impact?: number; is_new?: boolean; reference_label?: string; reference_url?: string; status?: 'not_started' | 'in_progress' | 'done' | 'abandoned'; status_changed_at?: string; summary?: string; topic?: string; type?: string; }; }`\n\n  - `data: { category_id: string; project_id: string; task_id: string; title: string; brief?: string; created_at?: string; impact?: number; is_new?: boolean; reference_label?: string; reference_url?: string; status?: 'not_started' | 'in_progress' | 'done' | 'abandoned'; status_changed_at?: string; summary?: string; topic?: string; type?: string; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst task = await client.projects.tasks.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', title: 'x' });\n\nconsole.log(task);\n```",
    perLanguage: {
      typescript: {
        method: 'client.projects.tasks.create',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst task = await client.projects.tasks.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  title: 'x',\n});\n\nconsole.log(task.data);",
      },
      python: {
        method: 'projects.tasks.create',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\ntask = client.projects.tasks.create(\n    project_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    title="x",\n)\nprint(task.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/projects/$PROJECT_ID/tasks \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "title": "x"\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/projects/{project_id}/tasks/{task_id}',
    httpMethod: 'get',
    summary: 'Get Project Task',
    description: 'Get Project Task',
    stainlessPath: '(resource) projects.tasks > (method) retrieve',
    qualified: 'client.projects.tasks.retrieve',
    params: ['project_id: string;', 'task_id: string;', 'category_id: string;'],
    response:
      "{ data: { category_id: string; project_id: string; task_id: string; title: string; brief?: string; created_at?: string; impact?: number; is_new?: boolean; project_title?: string; reference_label?: string; reference_url?: string; status?: 'not_started' | 'in_progress' | 'done' | 'abandoned'; status_changed_at?: string; summary?: string; topic?: string; type?: string; }; }",
    markdown:
      "## retrieve\n\n`client.projects.tasks.retrieve(project_id: string, task_id: string, category_id: string): { data: object; }`\n\n**get** `/v1/projects/{project_id}/tasks/{task_id}`\n\nGet Project Task\n\n### Parameters\n\n- `project_id: string`\n  Unique project ID.\n\n- `task_id: string`\n  Unique project task ID.\n\n- `category_id: string`\n  Category that owns the project.\n\n### Returns\n\n- `{ data: { category_id: string; project_id: string; task_id: string; title: string; brief?: string; created_at?: string; impact?: number; is_new?: boolean; project_title?: string; reference_label?: string; reference_url?: string; status?: 'not_started' | 'in_progress' | 'done' | 'abandoned'; status_changed_at?: string; summary?: string; topic?: string; type?: string; }; }`\n\n  - `data: { category_id: string; project_id: string; task_id: string; title: string; brief?: string; created_at?: string; impact?: number; is_new?: boolean; project_title?: string; reference_label?: string; reference_url?: string; status?: 'not_started' | 'in_progress' | 'done' | 'abandoned'; status_changed_at?: string; summary?: string; topic?: string; type?: string; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst task = await client.projects.tasks.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(task);\n```",
    perLanguage: {
      typescript: {
        method: 'client.projects.tasks.retrieve',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst task = await client.projects.tasks.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(task.data);",
      },
      python: {
        method: 'projects.tasks.retrieve',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\ntask = client.projects.tasks.retrieve(\n    task_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    project_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(task.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/projects/$PROJECT_ID/tasks/$TASK_ID \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/projects/{project_id}/tasks/{task_id}',
    httpMethod: 'patch',
    summary: 'Update Project Task',
    description: 'Update Project Task',
    stainlessPath: '(resource) projects.tasks > (method) update',
    qualified: 'client.projects.tasks.update',
    params: [
      'project_id: string;',
      'task_id: string;',
      'category_id: string;',
      'brief?: string;',
      'impact?: number;',
      'reference_label?: string;',
      'reference_url?: string;',
      'summary?: string;',
      'title?: string;',
      'topic?: string;',
      'type?: string;',
    ],
    response:
      "{ data: { category_id: string; project_id: string; task_id: string; title: string; brief?: string; created_at?: string; impact?: number; is_new?: boolean; reference_label?: string; reference_url?: string; status?: 'not_started' | 'in_progress' | 'done' | 'abandoned'; status_changed_at?: string; summary?: string; topic?: string; type?: string; }; }",
    markdown:
      "## update\n\n`client.projects.tasks.update(project_id: string, task_id: string, category_id: string, brief?: string, impact?: number, reference_label?: string, reference_url?: string, summary?: string, title?: string, topic?: string, type?: string): { data: object; }`\n\n**patch** `/v1/projects/{project_id}/tasks/{task_id}`\n\nUpdate Project Task\n\n### Parameters\n\n- `project_id: string`\n  Unique project ID.\n\n- `task_id: string`\n  Unique project task ID.\n\n- `category_id: string`\n  Category that owns the project.\n\n- `brief?: string`\n\n- `impact?: number`\n\n- `reference_label?: string`\n\n- `reference_url?: string`\n\n- `summary?: string`\n\n- `title?: string`\n\n- `topic?: string`\n\n- `type?: string`\n\n### Returns\n\n- `{ data: { category_id: string; project_id: string; task_id: string; title: string; brief?: string; created_at?: string; impact?: number; is_new?: boolean; reference_label?: string; reference_url?: string; status?: 'not_started' | 'in_progress' | 'done' | 'abandoned'; status_changed_at?: string; summary?: string; topic?: string; type?: string; }; }`\n\n  - `data: { category_id: string; project_id: string; task_id: string; title: string; brief?: string; created_at?: string; impact?: number; is_new?: boolean; reference_label?: string; reference_url?: string; status?: 'not_started' | 'in_progress' | 'done' | 'abandoned'; status_changed_at?: string; summary?: string; topic?: string; type?: string; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst task = await client.projects.tasks.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(task);\n```",
    perLanguage: {
      typescript: {
        method: 'client.projects.tasks.update',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst task = await client.projects.tasks.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(task.data);",
      },
      python: {
        method: 'projects.tasks.update',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\ntask = client.projects.tasks.update(\n    task_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    project_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(task.data)',
      },
      http: {
        example:
          "curl https://api.tryprofound.com/v1/projects/$PROJECT_ID/tasks/$TASK_ID \\\n    -X PATCH \\\n    -H 'Content-Type: application/json' \\\n    -H \"X-API-Key: $PROFOUND_API_KEY\" \\\n    -d '{}'",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/projects/{project_id}/tasks/{task_id}',
    httpMethod: 'delete',
    summary: 'Delete Project Task',
    description: 'Delete Project Task',
    stainlessPath: '(resource) projects.tasks > (method) delete',
    qualified: 'client.projects.tasks.delete',
    params: ['project_id: string;', 'task_id: string;', 'category_id: string;'],
    markdown:
      "## delete\n\n`client.projects.tasks.delete(project_id: string, task_id: string, category_id: string): void`\n\n**delete** `/v1/projects/{project_id}/tasks/{task_id}`\n\nDelete Project Task\n\n### Parameters\n\n- `project_id: string`\n  Unique project ID.\n\n- `task_id: string`\n  Unique project task ID.\n\n- `category_id: string`\n  Category that owns the project.\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nawait client.projects.tasks.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' })\n```",
    perLanguage: {
      typescript: {
        method: 'client.projects.tasks.delete',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.projects.tasks.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});",
      },
      python: {
        method: 'projects.tasks.delete',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nclient.projects.tasks.delete(\n    task_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    project_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/projects/$PROJECT_ID/tasks/$TASK_ID \\\n    -X DELETE \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
  },
  {
    name: 'update_status',
    endpoint: '/v1/projects/{project_id}/tasks/{task_id}/status',
    httpMethod: 'post',
    summary: 'Update Project Task Status',
    description: 'Update Project Task Status',
    stainlessPath: '(resource) projects.tasks > (method) update_status',
    qualified: 'client.projects.tasks.updateStatus',
    params: [
      'project_id: string;',
      'task_id: string;',
      'category_id: string;',
      "status: 'not_started' | 'in_progress' | 'done' | 'abandoned';",
      'note?: string;',
    ],
    response:
      "{ data: { changed_at: string; project_id: string; status: 'not_started' | 'in_progress' | 'done' | 'abandoned'; task_id: string; changed_by?: string; note?: string; }; }",
    markdown:
      "## update_status\n\n`client.projects.tasks.updateStatus(project_id: string, task_id: string, category_id: string, status: 'not_started' | 'in_progress' | 'done' | 'abandoned', note?: string): { data: object; }`\n\n**post** `/v1/projects/{project_id}/tasks/{task_id}/status`\n\nUpdate Project Task Status\n\n### Parameters\n\n- `project_id: string`\n  Unique project ID.\n\n- `task_id: string`\n  Unique project task ID.\n\n- `category_id: string`\n  Category that owns the project.\n\n- `status: 'not_started' | 'in_progress' | 'done' | 'abandoned'`\n\n- `note?: string`\n\n### Returns\n\n- `{ data: { changed_at: string; project_id: string; status: 'not_started' | 'in_progress' | 'done' | 'abandoned'; task_id: string; changed_by?: string; note?: string; }; }`\n\n  - `data: { changed_at: string; project_id: string; status: 'not_started' | 'in_progress' | 'done' | 'abandoned'; task_id: string; changed_by?: string; note?: string; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.projects.tasks.updateStatus('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  status: 'not_started',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.projects.tasks.updateStatus',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.projects.tasks.updateStatus('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  status: 'not_started',\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'projects.tasks.update_status',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.projects.tasks.update_status(\n    task_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    project_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    status="not_started",\n)\nprint(response.data)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/projects/$PROJECT_ID/tasks/$TASK_ID/status \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "status": "not_started"\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/integrations',
    httpMethod: 'get',
    summary: 'List Integrations',
    description:
      "List the organization's connected integrations.\n\nReturns every connected integration by default, each with its lifecycle\n`status`; pass `status_filter` to narrow to one status (e.g. `needs_reauth`).\nEach row's `integration_id` is the value a hub-backed node needs bound to it.",
    stainlessPath: '(resource) integrations > (method) list',
    qualified: 'client.integrations.list',
    params: [
      'organization_id?: string;',
      'provider?: string;',
      "status_filter?: 'active' | 'pending' | 'needs_reauth' | 'revoking' | 'revoked';",
    ],
    response:
      "{ data: { id: string; account: string; label: string; level: 'org' | 'user'; provider: string; status: string; }[]; }",
    markdown:
      "## list\n\n`client.integrations.list(organization_id?: string, provider?: string, status_filter?: 'active' | 'pending' | 'needs_reauth' | 'revoking' | 'revoked'): { data: object[]; }`\n\n**get** `/v1/integrations`\n\nList the organization's connected integrations.\n\nReturns every connected integration by default, each with its lifecycle\n`status`; pass `status_filter` to narrow to one status (e.g. `needs_reauth`).\nEach row's `integration_id` is the value a hub-backed node needs bound to it.\n\n### Parameters\n\n- `organization_id?: string`\n  Organization scope for API keys that can access multiple organizations.\n\n- `provider?: string`\n  Filter to a single connector/provider id, e.g. `google_drive`.\n\n- `status_filter?: 'active' | 'pending' | 'needs_reauth' | 'revoking' | 'revoked'`\n  Filter to one lifecycle status. Omitted returns all statuses.\n\n### Returns\n\n- `{ data: { id: string; account: string; label: string; level: 'org' | 'user'; provider: string; status: string; }[]; }`\n  Connected integrations visible to the caller's org/user context.\n\n  - `data: { id: string; account: string; label: string; level: 'org' | 'user'; provider: string; status: string; }[]`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst integrations = await client.integrations.list();\n\nconsole.log(integrations);\n```",
    perLanguage: {
      typescript: {
        method: 'client.integrations.list',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst integrations = await client.integrations.list();\n\nconsole.log(integrations.data);",
      },
      python: {
        method: 'integrations.list',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nintegrations = client.integrations.list()\nprint(integrations.data)',
      },
      http: {
        example: 'curl https://api.tryprofound.com/v1/integrations \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/documents',
    httpMethod: 'post',
    summary: 'Create a document',
    description:
      "Create a Profound document with markdown content.\n\n`organization_id` is required and you must be a member of it. You choose the\ndocument's `id`, and creation is idempotent on it: repeating the request returns\nthe existing document rather than creating a second one.\n\nNew documents are visible only to their creator; share them from the Profound app,\nor open one with the `url` in the response.\n\nA `201` response does not confirm that a new document was created: it is also\nreturned when `id` already existed, in which case the existing document comes\nback unchanged. Upstream gives no signal to tell the two apart, so this endpoint\ndoes not claim to either — it is safe to retry with the same `id` either way.",
    stainlessPath: '(resource) documents > (method) create',
    qualified: 'client.documents.create',
    params: ['id: string;', 'content_markdown: string;', 'name: string;', 'organization_id: string;'],
    response:
      "{ id: string; app_delegate: string; author_type: 'user' | 'agent'; category_name: string; company_name: string; created_at: string; name: string; owner_email: string; owner_user_id: string; updated_at: string; url: string; version_hash: string; visibility: 'invited_only' | 'organization'; }",
    markdown:
      "## create\n\n`client.documents.create(id: string, content_markdown: string, name: string, organization_id: string): { id: string; app_delegate: string; author_type: 'user' | 'agent'; category_name: string; company_name: string; created_at: string; name: string; owner_email: string; owner_user_id: string; updated_at: string; url: string; version_hash: string; visibility: 'invited_only' | 'organization'; }`\n\n**post** `/v1/documents`\n\nCreate a Profound document with markdown content.\n\n`organization_id` is required and you must be a member of it. You choose the\ndocument's `id`, and creation is idempotent on it: repeating the request returns\nthe existing document rather than creating a second one.\n\nNew documents are visible only to their creator; share them from the Profound app,\nor open one with the `url` in the response.\n\nA `201` response does not confirm that a new document was created: it is also\nreturned when `id` already existed, in which case the existing document comes\nback unchanged. Upstream gives no signal to tell the two apart, so this endpoint\ndoes not claim to either — it is safe to retry with the same `id` either way.\n\n### Parameters\n\n- `id: string`\n  ID for the new document, chosen by you. Creation is idempotent on this ID: repeating a request with the same ID returns the existing document instead of creating a second one, so a retry after a network error is safe.\n\n- `content_markdown: string`\n  Initial document body as markdown. Must be non-empty. Rendered into the collaborative editor, so the result is real editable content, not a stored blob.\n\n- `name: string`\n  Title for the document. Must be non-empty.\n\n- `organization_id: string`\n  ID of the organization that will own the document. Required — Profound API keys are user-scoped, so the owning organization must be chosen explicitly. The caller must be a member of this organization.\n\n### Returns\n\n- `{ id: string; app_delegate: string; author_type: 'user' | 'agent'; category_name: string; company_name: string; created_at: string; name: string; owner_email: string; owner_user_id: string; updated_at: string; url: string; version_hash: string; visibility: 'invited_only' | 'organization'; }`\n  The document that was created, plus the change-detection token minted for this write.\n\n  - `id: string`\n  - `app_delegate: string`\n  - `author_type: 'user' | 'agent'`\n  - `category_name: string`\n  - `company_name: string`\n  - `created_at: string`\n  - `name: string`\n  - `owner_email: string`\n  - `owner_user_id: string`\n  - `updated_at: string`\n  - `url: string`\n  - `version_hash: string`\n  - `visibility: 'invited_only' | 'organization'`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst document = await client.documents.create({\n  id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  content_markdown: 'x',\n  name: 'x',\n  organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(document);\n```",
    perLanguage: {
      typescript: {
        method: 'client.documents.create',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst document = await client.documents.create({\n  id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  content_markdown: 'x',\n  name: 'x',\n  organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(document.id);",
      },
      python: {
        method: 'documents.create',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\ndocument = client.documents.create(\n    id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    content_markdown="x",\n    name="x",\n    organization_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(document.id)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/documents \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "content_markdown": "x",\n          "name": "x",\n          "organization_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/documents',
    httpMethod: 'get',
    summary: 'List documents',
    description:
      "List documents visible to your organization, newest-modified-first.\n\nDocuments are ordered by last-modified time, most recent first, with no other\nsort option. This is a walk over a live, mutable collection: a document created\nor modified while you are paging can shift which page it lands on, so a single\nwalk may show it to you twice or, rarely, skip it.\n\nThis response never includes a total count. Upstream counts totals before\napplying your organization's access filter, so a total, or treating a short\npage as the last one, would misreport what you can actually see. Keep\nfollowing `pagination.next_cursor` until it comes back null — that, and not\na short or even an empty page, is the end of the walk. A page whose rows the\naccess filter removed entirely is empty while later pages still hold\ndocuments, so the last page of a walk may legitimately be an empty one.",
    stainlessPath: '(resource) documents > (method) list',
    qualified: 'client.documents.list',
    params: [
      'organization_id: string;',
      'limit?: number;',
      'next_cursor?: string;',
      'q?: string;',
      'sort?: string;',
    ],
    response:
      "{ data: { id: string; app_delegate: string; author_type: 'user' | 'agent'; category_name: string; company_name: string; created_at: string; name: string; owner_email: string; owner_user_id: string; updated_at: string; url: string; visibility: 'invited_only' | 'organization'; }[]; pagination: { limit?: number; next_cursor?: string; }; }",
    markdown:
      "## list\n\n`client.documents.list(organization_id: string, limit?: number, next_cursor?: string, q?: string, sort?: string): { data: object[]; pagination: cursor_pagination; }`\n\n**get** `/v1/documents`\n\nList documents visible to your organization, newest-modified-first.\n\nDocuments are ordered by last-modified time, most recent first, with no other\nsort option. This is a walk over a live, mutable collection: a document created\nor modified while you are paging can shift which page it lands on, so a single\nwalk may show it to you twice or, rarely, skip it.\n\nThis response never includes a total count. Upstream counts totals before\napplying your organization's access filter, so a total, or treating a short\npage as the last one, would misreport what you can actually see. Keep\nfollowing `pagination.next_cursor` until it comes back null — that, and not\na short or even an empty page, is the end of the walk. A page whose rows the\naccess filter removed entirely is empty while later pages still hold\ndocuments, so the last page of a walk may legitimately be an empty one.\n\n### Parameters\n\n- `organization_id: string`\n  ID of the organization whose documents to list. Required. The caller must be a member of this organization.\n\n- `limit?: number`\n\n- `next_cursor?: string`\n\n- `q?: string`\n  Filter to documents whose name contains this text, case-insensitively. Matches only the document's name, never its content — a query that finds nothing does not mean the topic is unwritten, only that no title mentions it. Blank or omitted returns every document. Ignored when sent alongside `next_cursor`, which carries the filter the walk started with. Matching is name-only as of this release; broader matching may follow if upstream changes how it indexes the name column.\n\n- `sort?: string`\n  Documents are always ordered newest-modified-first (`updated_at DESC`, then `created_at DESC`, then `id DESC`); there is no parameter that changes this. `recency` is the only accepted value, and passing it is a no-op that names the guarantee rather than altering it — any other value is rejected outright rather than silently ignored. Ordering is never re-applied to a returned page either: that would only be consistent within the page, not across a paginated walk.\n\n### Returns\n\n- `{ data: { id: string; app_delegate: string; author_type: 'user' | 'agent'; category_name: string; company_name: string; created_at: string; name: string; owner_email: string; owner_user_id: string; updated_at: string; url: string; visibility: 'invited_only' | 'organization'; }[]; pagination: { limit?: number; next_cursor?: string; }; }`\n  A page of documents.\n\n  - `data: { id: string; app_delegate: string; author_type: 'user' | 'agent'; category_name: string; company_name: string; created_at: string; name: string; owner_email: string; owner_user_id: string; updated_at: string; url: string; visibility: 'invited_only' | 'organization'; }[]`\n  - `pagination: { limit?: number; next_cursor?: string; }`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst documents = await client.documents.list({ organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(documents);\n```",
    perLanguage: {
      typescript: {
        method: 'client.documents.list',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst documents = await client.documents.list({\n  organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(documents.data);",
      },
      python: {
        method: 'documents.list',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\ndocuments = client.documents.list(\n    organization_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(documents.data)',
      },
      http: {
        example: 'curl https://api.tryprofound.com/v1/documents \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/documents/{document_id}',
    httpMethod: 'get',
    summary: 'Read a document',
    description:
      "Read a document: its metadata, its default tab's body, its other tabs, its comments, and its version hash.\n\nYou can read any document you have access to in the Profound app, including ones\ncreated there rather than through this API.\n\nBy default this is a preview: the body is truncated to save your context, and the\nversion hash is withheld so a preview alone can never be used to replace a document\nblindly. Pass `preview=false` when you intend to write.",
    stainlessPath: '(resource) documents > (method) retrieve',
    qualified: 'client.documents.retrieve',
    params: [
      'document_id: string;',
      'organization_id: string;',
      'include_comments?: boolean;',
      'include_tabs?: boolean;',
      'preview?: boolean;',
    ],
    response:
      "{ id: string; app_delegate: string; author_type: 'user' | 'agent'; category_name: string; company_name: string; content_markdown: string; created_at: string; name: string; owner_email: string; owner_user_id: string; updated_at: string; url: string; visibility: 'invited_only' | 'organization'; additional_tabs?: { content_markdown: string; title: string; }[]; comments?: { content: string; context?: string; }[]; content_truncated?: boolean; version_hash?: string; }",
    markdown:
      "## retrieve\n\n`client.documents.retrieve(document_id: string, organization_id: string, include_comments?: boolean, include_tabs?: boolean, preview?: boolean): { id: string; app_delegate: string; author_type: 'user' | 'agent'; category_name: string; company_name: string; content_markdown: string; created_at: string; name: string; owner_email: string; owner_user_id: string; updated_at: string; url: string; visibility: 'invited_only' | 'organization'; additional_tabs?: object[]; comments?: object[]; content_truncated?: boolean; version_hash?: string; }`\n\n**get** `/v1/documents/{document_id}`\n\nRead a document: its metadata, its default tab's body, its other tabs, its comments, and its version hash.\n\nYou can read any document you have access to in the Profound app, including ones\ncreated there rather than through this API.\n\nBy default this is a preview: the body is truncated to save your context, and the\nversion hash is withheld so a preview alone can never be used to replace a document\nblindly. Pass `preview=false` when you intend to write.\n\n### Parameters\n\n- `document_id: string`\n  ID of the document.\n\n- `organization_id: string`\n  ID of the organization that owns the document. Required — Profound API keys are user-scoped, so the owning organization must be named explicitly. The caller must be a member of this organization.\n\n- `include_comments?: boolean`\n  Include the document's review comments, each mapped to `{content, context}`. On by default — a comment is part of the document's review state, not an aside. Turn it off to skip the comment-thread walk upstream; off, `comments` is omitted from the response rather than returned as an empty list.\n\n- `include_tabs?: boolean`\n  Include the document's other tabs. On by default — a tab body is part of the document, not an aside. Off, `additional_tabs` is omitted from the response rather than returned as an empty list.\n\n- `preview?: boolean`\n  Bound every body in the response — `content_markdown` and each tab's — and set `content_truncated` if any was cut. On by default. Upstream has no partial-read of its own — every read is a full round trip through the collaborative editor — so this saves your context, not upstream cost. A preview read also omits `version_hash`, on purpose: a hash returned next to a body you have not fully seen invites replacing content you never read. Pass `preview=false` before you intend to write, to get the whole body, `content_truncated: false`, and the hash.\n\n### Returns\n\n- `{ id: string; app_delegate: string; author_type: 'user' | 'agent'; category_name: string; company_name: string; content_markdown: string; created_at: string; name: string; owner_email: string; owner_user_id: string; updated_at: string; url: string; visibility: 'invited_only' | 'organization'; additional_tabs?: { content_markdown: string; title: string; }[]; comments?: { content: string; context?: string; }[]; content_truncated?: boolean; version_hash?: string; }`\n  A document's metadata, its default tab's body, its other tabs, its comments, and the\nchange-detection token for it.\n\n  - `id: string`\n  - `app_delegate: string`\n  - `author_type: 'user' | 'agent'`\n  - `category_name: string`\n  - `company_name: string`\n  - `content_markdown: string`\n  - `created_at: string`\n  - `name: string`\n  - `owner_email: string`\n  - `owner_user_id: string`\n  - `updated_at: string`\n  - `url: string`\n  - `visibility: 'invited_only' | 'organization'`\n  - `additional_tabs?: { content_markdown: string; title: string; }[]`\n  - `comments?: { content: string; context?: string; }[]`\n  - `content_truncated?: boolean`\n  - `version_hash?: string`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst document = await client.documents.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(document);\n```",
    perLanguage: {
      typescript: {
        method: 'client.documents.retrieve',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst document = await client.documents.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(document.id);",
      },
      python: {
        method: 'documents.retrieve',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\ndocument = client.documents.retrieve(\n    document_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    organization_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(document.id)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/documents/$DOCUMENT_ID \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/documents/{document_id}',
    httpMethod: 'patch',
    summary: 'Rename or reshare a document',
    description:
      'Rename a document, change who can see it, or both in one call.\n\nRenaming sets a permanent lock on the title, and changing visibility can silently\nchange who has access — see the `name` and `visibility` field descriptions for what\neach one does before you use it.\n\nRenaming needs edit access; changing visibility is creator-only, and upstream\nenforces it. You can act on a document this API created, or one you created\nyourself in the Profound app — not one merely shared with you.',
    stainlessPath: '(resource) documents > (method) update',
    qualified: 'client.documents.update',
    params: [
      'document_id: string;',
      'organization_id: string;',
      'name?: string;',
      "visibility?: 'invited_only' | 'organization';",
    ],
    response:
      "{ id: string; app_delegate: string; author_type: 'user' | 'agent'; category_name: string; company_name: string; created_at: string; name: string; owner_email: string; owner_user_id: string; updated_at: string; url: string; visibility: 'invited_only' | 'organization'; }",
    markdown:
      "## update\n\n`client.documents.update(document_id: string, organization_id: string, name?: string, visibility?: 'invited_only' | 'organization'): { id: string; app_delegate: string; author_type: 'user' | 'agent'; category_name: string; company_name: string; created_at: string; name: string; owner_email: string; owner_user_id: string; updated_at: string; url: string; visibility: 'invited_only' | 'organization'; }`\n\n**patch** `/v1/documents/{document_id}`\n\nRename a document, change who can see it, or both in one call.\n\nRenaming sets a permanent lock on the title, and changing visibility can silently\nchange who has access — see the `name` and `visibility` field descriptions for what\neach one does before you use it.\n\nRenaming needs edit access; changing visibility is creator-only, and upstream\nenforces it. You can act on a document this API created, or one you created\nyourself in the Profound app — not one merely shared with you.\n\n### Parameters\n\n- `document_id: string`\n  ID of the document.\n\n- `organization_id: string`\n  ID of the organization that owns the document. Required — Profound API keys are user-scoped, so the owning organization must be named explicitly. The caller must be a member of this organization.\n\n- `name?: string`\n  New title for the document. Renaming sets a permanent lock: once a document is renamed through this route, its title stops following the first heading of its content, for the rest of the document's life, and no route can undo the lock. Omit to leave the title as it is.\n\n- `visibility?: 'invited_only' | 'organization'`\n  New sharing scope: `invited_only` for only the people invited to the document, or `organization` for everyone in the owning organization. Only the document's creator can change this; omit to leave sharing as it is. Three things worth knowing before you set it: `organization` visibility grants view only — there is no value here that grants the organization edit access. Setting `invited_only` removes the organization's access entirely. And re-asserting `organization` on a document whose organization grant is already `edit` silently downgrades the whole organization to view — upstream replays the access sync whenever this field is sent, and that sync always upserts view, even when the value you sent matches the one already stored.\n\n### Returns\n\n- `{ id: string; app_delegate: string; author_type: 'user' | 'agent'; category_name: string; company_name: string; created_at: string; name: string; owner_email: string; owner_user_id: string; updated_at: string; url: string; visibility: 'invited_only' | 'organization'; }`\n  A Profound document.\n\n  - `id: string`\n  - `app_delegate: string`\n  - `author_type: 'user' | 'agent'`\n  - `category_name: string`\n  - `company_name: string`\n  - `created_at: string`\n  - `name: string`\n  - `owner_email: string`\n  - `owner_user_id: string`\n  - `updated_at: string`\n  - `url: string`\n  - `visibility: 'invited_only' | 'organization'`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst document = await client.documents.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(document);\n```",
    perLanguage: {
      typescript: {
        method: 'client.documents.update',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst document = await client.documents.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(document.id);",
      },
      python: {
        method: 'documents.update',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\ndocument = client.documents.update(\n    document_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    organization_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(document.id)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/documents/$DOCUMENT_ID \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "organization_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/documents/{document_id}',
    httpMethod: 'delete',
    summary: 'Delete a document',
    description:
      'Delete a document created through this integration.\n\nOnly documents created through this integration can be deleted here. A document\ncreated in the Profound app can never be deleted through this route, even by the\nperson who owns it — creation provenance is stamped once, at creation, and is never\nbackfilled onto documents made another way.\n\nThe delete is soft: the row is marked deleted at the storage layer rather than\ndestroyed. There is no restore through this API, or any other — treat a delete as\nfinal even though the data itself is not gone.\n\nA 404 means the document is not visible to you at all. It covers three cases the\nresponse does not distinguish, on purpose: the document never existed, it was\nalready deleted by an earlier call to this same route, or it exists but your\ncredential resolves no role on it. Deleting the same document twice returns 404 on\nthe second call, not a second 204.\n\nA 403 means the opposite: the document is visible to you but not deletable here,\nand the message says which rule refused — it was not created through this\nintegration, or you are not its creator. Deleting is creator-only, so edit access\nis not enough to remove a document out from under its owner.',
    stainlessPath: '(resource) documents > (method) delete',
    qualified: 'client.documents.delete',
    params: ['document_id: string;', 'organization_id: string;'],
    markdown:
      "## delete\n\n`client.documents.delete(document_id: string, organization_id: string): void`\n\n**delete** `/v1/documents/{document_id}`\n\nDelete a document created through this integration.\n\nOnly documents created through this integration can be deleted here. A document\ncreated in the Profound app can never be deleted through this route, even by the\nperson who owns it — creation provenance is stamped once, at creation, and is never\nbackfilled onto documents made another way.\n\nThe delete is soft: the row is marked deleted at the storage layer rather than\ndestroyed. There is no restore through this API, or any other — treat a delete as\nfinal even though the data itself is not gone.\n\nA 404 means the document is not visible to you at all. It covers three cases the\nresponse does not distinguish, on purpose: the document never existed, it was\nalready deleted by an earlier call to this same route, or it exists but your\ncredential resolves no role on it. Deleting the same document twice returns 404 on\nthe second call, not a second 204.\n\nA 403 means the opposite: the document is visible to you but not deletable here,\nand the message says which rule refused — it was not created through this\nintegration, or you are not its creator. Deleting is creator-only, so edit access\nis not enough to remove a document out from under its owner.\n\n### Parameters\n\n- `document_id: string`\n  ID of the document.\n\n- `organization_id: string`\n  ID of the organization that owns the document. You must be a member of it.\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nawait client.documents.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' })\n```",
    perLanguage: {
      typescript: {
        method: 'client.documents.delete',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.documents.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});",
      },
      python: {
        method: 'documents.delete',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nclient.documents.delete(\n    document_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    organization_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/documents/$DOCUMENT_ID \\\n    -X DELETE \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
  },
  {
    name: 'replace_content',
    endpoint: '/v1/documents/{document_id}/content',
    httpMethod: 'post',
    summary: "Replace a document's content",
    description:
      "Overwrite a document's entire body with new markdown, replacing what it held before.\n\nThis is a whole-body replace, not a patch: send the complete new text every time. An\nempty `content_markdown` is valid and clears the document.\n\nTwo destructive side effects apply on every call, regardless of what you send:\n\n- The document collapses to its default tab. Every non-default tab is deleted, and\n  the comments map is cleared for **all** tabs, including the default one — a\n  document with a live comment thread on any tab loses it.\n- `skip_title_sync` defaults to `false`, matching the Profound app: the title follows\n  the new content's first heading, so a replace silently renames the document unless\n  the heading matches the current title or `skip_title_sync` is set.\n\nThere is no compare-and-swap: this call does not accept a precondition, and nothing\nstops two concurrent replaces from silently overwriting each other last-writer-wins.\nUpstream's own `version_hash` documentation says as much — the token is \"still a\nchange detector rather than a precondition: a caller must not treat a matching token\nas licence to overwrite blindly, because it names the room at a moment cortex\nobserved and not the moment its own write lands.\" Sending a `working_version_hash`\n(or any spelling of it) is rejected with a `400` naming this rather than accepted\nand silently discarded, which is what happens on the upstream route this wraps.\n\nYou can replace a document this API created, or one you created yourself directly —\nnot merely one shared with you.",
    stainlessPath: '(resource) documents > (method) replace_content',
    qualified: 'client.documents.replaceContent',
    params: [
      'document_id: string;',
      'content_markdown: string;',
      'organization_id: string;',
      'skip_title_sync?: boolean;',
    ],
    response:
      "{ id: string; app_delegate: string; author_type: 'user' | 'agent'; category_name: string; company_name: string; content_chars: number; created_at: string; name: string; owner_email: string; owner_user_id: string; updated_at: string; url: string; version_hash: string; visibility: 'invited_only' | 'organization'; }",
    markdown:
      "## replace_content\n\n`client.documents.replaceContent(document_id: string, content_markdown: string, organization_id: string, skip_title_sync?: boolean): { id: string; app_delegate: string; author_type: 'user' | 'agent'; category_name: string; company_name: string; content_chars: number; created_at: string; name: string; owner_email: string; owner_user_id: string; updated_at: string; url: string; version_hash: string; visibility: 'invited_only' | 'organization'; }`\n\n**post** `/v1/documents/{document_id}/content`\n\nOverwrite a document's entire body with new markdown, replacing what it held before.\n\nThis is a whole-body replace, not a patch: send the complete new text every time. An\nempty `content_markdown` is valid and clears the document.\n\nTwo destructive side effects apply on every call, regardless of what you send:\n\n- The document collapses to its default tab. Every non-default tab is deleted, and\n  the comments map is cleared for **all** tabs, including the default one — a\n  document with a live comment thread on any tab loses it.\n- `skip_title_sync` defaults to `false`, matching the Profound app: the title follows\n  the new content's first heading, so a replace silently renames the document unless\n  the heading matches the current title or `skip_title_sync` is set.\n\nThere is no compare-and-swap: this call does not accept a precondition, and nothing\nstops two concurrent replaces from silently overwriting each other last-writer-wins.\nUpstream's own `version_hash` documentation says as much — the token is \"still a\nchange detector rather than a precondition: a caller must not treat a matching token\nas licence to overwrite blindly, because it names the room at a moment cortex\nobserved and not the moment its own write lands.\" Sending a `working_version_hash`\n(or any spelling of it) is rejected with a `400` naming this rather than accepted\nand silently discarded, which is what happens on the upstream route this wraps.\n\nYou can replace a document this API created, or one you created yourself directly —\nnot merely one shared with you.\n\n### Parameters\n\n- `document_id: string`\n  ID of the document.\n\n- `content_markdown: string`\n  New markdown body for the document, replacing everything it held before. An empty string is valid and clears the document — nothing else warns you before that happens, so treat sending one as deliberate. Whole-body replace only: send the complete new text, not just the part that changed. Capped at 1,000,000 bytes; the upstream router separately caps the entire request at 2 MiB, so a body near this cap can still be refused in transit rather than by this field.\n\n- `organization_id: string`\n  ID of the organization that owns the document. Required — Profound API keys are user-scoped, so the owning organization must be chosen explicitly. The caller must be a member of this organization.\n\n- `skip_title_sync?: boolean`\n  Off by default, matching the Profound app: the document's title follows the new content's first heading, so a replace silently renames the document whenever that heading differs from the current title. Set true to keep the current title regardless of what the new content's first heading says.\n\n### Returns\n\n- `{ id: string; app_delegate: string; author_type: 'user' | 'agent'; category_name: string; company_name: string; content_chars: number; created_at: string; name: string; owner_email: string; owner_user_id: string; updated_at: string; url: string; version_hash: string; visibility: 'invited_only' | 'organization'; }`\n  The document after its content was replaced, plus the change-detection token and how much landed.\n\n  - `id: string`\n  - `app_delegate: string`\n  - `author_type: 'user' | 'agent'`\n  - `category_name: string`\n  - `company_name: string`\n  - `content_chars: number`\n  - `created_at: string`\n  - `name: string`\n  - `owner_email: string`\n  - `owner_user_id: string`\n  - `updated_at: string`\n  - `url: string`\n  - `version_hash: string`\n  - `visibility: 'invited_only' | 'organization'`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.documents.replaceContent('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { content_markdown: 'content_markdown', organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.documents.replaceContent',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.documents.replaceContent('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  content_markdown: 'content_markdown',\n  organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(response.id);",
      },
      python: {
        method: 'documents.replace_content',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.documents.replace_content(\n    document_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    content_markdown="content_markdown",\n    organization_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.id)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/documents/$DOCUMENT_ID/content \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "content_markdown": "content_markdown",\n          "organization_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n        }\'',
      },
    },
  },
  {
    name: 'retrieve_insights',
    endpoint: '/v1/ads/openai-ads/ad-account/insights',
    httpMethod: 'get',
    summary: 'Get Account Insights',
    description:
      "Get ad account insights for the organization's OpenAI Ads partner brand.\n\n`aggregation_level=campaign` returns one row per campaign (with `campaign_id`\n/ `campaign_name` and all metrics), so every campaign's insights come back in\na single call; `time_granularity=daily` gives per-day rows (e.g. daily spend).",
    stainlessPath: '(resource) ads.openai_ads.ad_account > (method) retrieve_insights',
    qualified: 'client.ads.openaiAds.adAccount.retrieveInsights',
    params: [
      'after?: string;',
      "aggregation_level?: 'ad_account' | 'campaign' | 'ad_group' | 'ad';",
      'before?: string;',
      'limit?: number;',
      'organization_id?: string;',
      "time_granularity?: 'hourly' | 'daily' | 'monthly' | 'none';",
      'time_ranges?: string[];',
    ],
    response:
      '{ data: { id: string; ad_group_id?: string; ad_group_name?: string; ad_id?: string; ad_name?: string; campaign_id?: string; campaign_name?: string; clicks?: number; cpc?: number; cpm?: number; ctr?: number; end_time?: number; impressions?: number; readable_time?: string; spend?: number; start_time?: number; timezone?: string; }[]; count?: number; first_id?: string; has_more?: boolean; last_id?: string; }',
    markdown:
      "## retrieve_insights\n\n`client.ads.openaiAds.adAccount.retrieveInsights(after?: string, aggregation_level?: 'ad_account' | 'campaign' | 'ad_group' | 'ad', before?: string, limit?: number, organization_id?: string, time_granularity?: 'hourly' | 'daily' | 'monthly' | 'none', time_ranges?: string[]): { data: object[]; count?: number; first_id?: string; has_more?: boolean; last_id?: string; }`\n\n**get** `/v1/ads/openai-ads/ad-account/insights`\n\nGet ad account insights for the organization's OpenAI Ads partner brand.\n\n`aggregation_level=campaign` returns one row per campaign (with `campaign_id`\n/ `campaign_name` and all metrics), so every campaign's insights come back in\na single call; `time_granularity=daily` gives per-day rows (e.g. daily spend).\n\n### Parameters\n\n- `after?: string`\n  Return items after this ID (forward pagination).\n\n- `aggregation_level?: 'ad_account' | 'campaign' | 'ad_group' | 'ad'`\n  Row entity for the insights breakdown. `campaign` returns one row per campaign.\n\n- `before?: string`\n  Return items before this ID (backward pagination).\n\n- `limit?: number`\n  Maximum rows to return.\n\n- `organization_id?: string`\n  Organization scope for API keys that can access multiple organizations.\n\n- `time_granularity?: 'hourly' | 'daily' | 'monthly' | 'none'`\n  Time bucket for the rows; `none` or omitted returns totals over the whole range.\n\n- `time_ranges?: string[]`\n  Time ranges as JSON objects, e.g. `{\"type\": \"date_range\", \"since\": \"2026-07-01\", \"until\": \"2026-07-18\"}`.\n\n### Returns\n\n- `{ data: { id: string; ad_group_id?: string; ad_group_name?: string; ad_id?: string; ad_name?: string; campaign_id?: string; campaign_name?: string; clicks?: number; cpc?: number; cpm?: number; ctr?: number; end_time?: number; impressions?: number; readable_time?: string; spend?: number; start_time?: number; timezone?: string; }[]; count?: number; first_id?: string; has_more?: boolean; last_id?: string; }`\n  Cursor-paginated insights, mirroring the OpenAI Ads insights envelope.\n\n  - `data: { id: string; ad_group_id?: string; ad_group_name?: string; ad_id?: string; ad_name?: string; campaign_id?: string; campaign_name?: string; clicks?: number; cpc?: number; cpm?: number; ctr?: number; end_time?: number; impressions?: number; readable_time?: string; spend?: number; start_time?: number; timezone?: string; }[]`\n  - `count?: number`\n  - `first_id?: string`\n  - `has_more?: boolean`\n  - `last_id?: string`\n\n### Example\n\n```typescript\nimport Profound from '@profoundai/client';\n\nconst client = new Profound();\n\nconst response = await client.ads.openaiAds.adAccount.retrieveInsights();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.ads.openaiAds.adAccount.retrieveInsights',
        example:
          "import Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.ads.openaiAds.adAccount.retrieveInsights();\n\nconsole.log(response.first_id);",
      },
      python: {
        method: 'ads.openai_ads.ad_account.retrieve_insights',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.ads.openai_ads.ad_account.retrieve_insights()\nprint(response.first_id)',
      },
      http: {
        example:
          'curl https://api.tryprofound.com/v1/ads/openai-ads/ad-account/insights \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'python',
    content:
      '# Profound Python API library\n\n<!-- prettier-ignore -->\n[![PyPI version](https://img.shields.io/pypi/v/profound.svg?label=pypi%20(stable))](https://pypi.org/project/profound/)\n\nThe Profound Python library provides convenient access to the Profound REST API from any Python 3.9+\napplication. The library includes type definitions for all request params and response fields,\nand offers both synchronous and asynchronous clients powered by [httpx](https://github.com/encode/httpx).\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Profound MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40profoundai%2Fmcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBwcm9mb3VuZGFpL21jcCJdLCJlbnYiOnsiUFJPRk9VTkRfQUNDRVNTX1RPS0VOIjoiTXkgQWNjZXNzIFRva2VuIiwiUFJPRk9VTkRfQVBJX0tFWSI6Ik15IEFQSSBLZXkifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40profoundai%2Fmcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40profoundai%2Fmcp%22%5D%2C%22env%22%3A%7B%22PROFOUND_ACCESS_TOKEN%22%3A%22My%20Access%20Token%22%2C%22PROFOUND_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\nThe REST API documentation can be found on [docs.tryprofound.com](https://docs.tryprofound.com). The full API of this library can be found in [api.md](api.md).\n\n## Installation\n\n```sh\n# install from PyPI\npip install profound\n```\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```python\nimport os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n    # defaults to "production".\n    environment="development",\n)\n\ncategories = client.organizations.categories.list()\n```\n\nWhile you can provide a `access_token` keyword argument,\nwe recommend using [python-dotenv](https://pypi.org/project/python-dotenv/)\nto add `PROFOUND_ACCESS_TOKEN="My Access Token"` to your `.env` file\nso that your Access Token is not stored in source control.\n\n## Async usage\n\nSimply import `AsyncProfound` instead of `Profound` and use `await` with each API call:\n\n```python\nimport os\nimport asyncio\nfrom profound import AsyncProfound\n\nclient = AsyncProfound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n    # defaults to "production".\n    environment="development",\n)\n\nasync def main() -> None:\n  categories = await client.organizations.categories.list()\n\nasyncio.run(main())\n```\n\nFunctionality between the synchronous and asynchronous clients is otherwise identical.\n\n### With aiohttp\n\nBy default, the async client uses `httpx` for HTTP requests. However, for improved concurrency performance you may also use `aiohttp` as the HTTP backend.\n\nYou can enable this by installing `aiohttp`:\n\n```sh\n# install from PyPI\npip install profound[aiohttp]\n```\n\nThen you can enable it by instantiating the client with `http_client=DefaultAioHttpClient()`:\n\n```python\nimport os\nimport asyncio\nfrom profound import DefaultAioHttpClient\nfrom profound import AsyncProfound\n\nasync def main() -> None:\n  async with AsyncProfound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n    http_client=DefaultAioHttpClient(),\n) as client:\n    categories = await client.organizations.categories.list()\n\nasyncio.run(main())\n```\n\n\n\n## Using types\n\nNested request parameters are [TypedDicts](https://docs.python.org/3/library/typing.html#typing.TypedDict). Responses are [Pydantic models](https://docs.pydantic.dev) which also provide helper methods for things like:\n\n- Serializing back into JSON, `model.to_json()`\n- Converting to a dictionary, `model.to_dict()`\n\nTyped requests and responses provide autocomplete and documentation within your editor. If you would like to see type errors in VS Code to help catch bugs earlier, set `python.analysis.typeCheckingMode` to `basic`.\n\n\n\nfrom datetime import datetime\n\n## Nested params\n\nNested parameters are dictionaries, typed using `TypedDict`, for example:\n\n```python\nfrom profound import Profound\n\nclient = Profound()\n\nresponse = client.prompts.answers(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n    start_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n    include={},\n)\nprint(response.include)\n```\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API (for example, due to network connection problems or a timeout), a subclass of `profound.APIConnectionError` is raised.\n\nWhen the API returns a non-success status code (that is, 4xx or 5xx\nresponse), a subclass of `profound.APIStatusError` is raised, containing `status_code` and `response` properties.\n\nAll errors inherit from `profound.APIError`.\n\n```python\nimport profound\nfrom profound import Profound\n\nclient = Profound()\n\ntry:\n    client.organizations.categories.list()\nexcept profound.APIConnectionError as e:\n    print("The server could not be reached")\n    print(e.__cause__) # an underlying Exception, likely raised within httpx.\nexcept profound.RateLimitError as e:\n    print("A 429 status code was received; we should back off a bit.")\nexcept profound.APIStatusError as e:\n    print("Another non-200-range status code was received")\n    print(e.status_code)\n    print(e.response)\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors are automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors are all retried by default.\n\nYou can use the `max_retries` option to configure or disable retry settings:\n\n```python\nfrom profound import Profound\n\n# Configure the default for all requests:\nclient = Profound(\n    # default is 2\n    max_retries=0,\n)\n\n# Or, configure per-request:\nclient.with_options(max_retries = 5).organizations.categories.list()\n```\n\n### Timeouts\n\nBy default requests time out after 1 minute. You can configure this with a `timeout` option,\nwhich accepts a float or an [`httpx.Timeout`](https://www.python-httpx.org/advanced/timeouts/#fine-tuning-the-configuration) object:\n\n```python\nfrom profound import Profound\n\n# Configure the default for all requests:\nclient = Profound(\n    # 20 seconds (default is 1 minute)\n    timeout=20.0,\n)\n\n# More granular control:\nclient = Profound(\n    timeout=httpx.Timeout(60.0, read=5.0, write=10.0, connect=2.0),\n)\n\n# Override per-request:\nclient.with_options(timeout = 5.0).organizations.categories.list()\n```\n\nOn timeout, an `APITimeoutError` is thrown.\n\nNote that requests that time out are [retried twice by default](#retries).\n\n\n\n## Advanced\n\n### Logging\n\nWe use the standard library [`logging`](https://docs.python.org/3/library/logging.html) module.\n\nYou can enable logging by setting the environment variable `PROFOUND_LOG` to `info`.\n\n```shell\n$ export PROFOUND_LOG=info\n```\n\nOr to `debug` for more verbose logging.\n\n### How to tell whether `None` means `null` or missing\n\nIn an API response, a field may be explicitly `null`, or missing entirely; in either case, its value is `None` in this library. You can differentiate the two cases with `.model_fields_set`:\n\n```py\nif response.my_field is None:\n  if \'my_field\' not in response.model_fields_set:\n    print(\'Got json like {}, without a "my_field" key present at all.\')\n  else:\n    print(\'Got json like {"my_field": null}.\')\n```\n\n### Accessing raw response data (e.g. headers)\n\nThe "raw" Response object can be accessed by prefixing `.with_raw_response.` to any HTTP method call, e.g.,\n\n```py\nfrom profound import Profound\n\nclient = Profound()\nresponse = client.organizations.categories.with_raw_response.list()\nprint(response.headers.get(\'X-My-Header\'))\n\ncategory = response.parse()  # get the object that `organizations.categories.list()` would have returned\nprint(category)\n```\n\nThese methods return an [`APIResponse`](https://github.com/cooper-square-technologies/profound-python-sdk/tree/main/src/profound/_response.py) object.\n\nThe async client returns an [`AsyncAPIResponse`](https://github.com/cooper-square-technologies/profound-python-sdk/tree/main/src/profound/_response.py) with the same structure, the only difference being `await`able methods for reading the response content.\n\n#### `.with_streaming_response`\n\nThe above interface eagerly reads the full response body when you make the request, which may not always be what you want.\n\nTo stream the response body, use `.with_streaming_response` instead, which requires a context manager and only reads the response body once you call `.read()`, `.text()`, `.json()`, `.iter_bytes()`, `.iter_text()`, `.iter_lines()` or `.parse()`. In the async client, these are async methods.\n\n```python\nwith client.organizations.categories.with_streaming_response.list() as response :\n    print(response.headers.get(\'X-My-Header\'))\n\n    for line in response.iter_lines():\n      print(line)\n```\n\nThe context manager is required so that the response will reliably be closed.\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API.\n\nIf you need to access undocumented endpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can make requests using `client.get`, `client.post`, and other\nhttp verbs. Options on the client will be respected (such as retries) when making this request.\n\n```py\nimport httpx\n\nresponse = client.post(\n    "/foo",\n    cast_to=httpx.Response,\n    body={"my_param": True},\n)\n\nprint(response.headers.get("x-foo"))\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you can access the extra fields like `response.unknown_prop`. You\ncan also get all the extra fields on the Pydantic model as a dict with\n[`response.model_extra`](https://docs.pydantic.dev/latest/api/base_model/#pydantic.BaseModel.model_extra).\n\n### Configuring the HTTP client\n\nYou can directly override the [httpx client](https://www.python-httpx.org/api/#client) to customize it for your use case, including:\n\n- Support for [proxies](https://www.python-httpx.org/advanced/proxies/)\n- Custom [transports](https://www.python-httpx.org/advanced/transports/)\n- Additional [advanced](https://www.python-httpx.org/advanced/clients/) functionality\n\n```python\nimport httpx\nfrom profound import Profound, DefaultHttpxClient\n\nclient = Profound(\n    # Or use the `PROFOUND_BASE_URL` env var\n    base_url="http://my.test.server.example.com:8083",\n    http_client=DefaultHttpxClient(proxy="http://my.test.proxy.example.com", transport=httpx.HTTPTransport(local_address="0.0.0.0")),\n)\n```\n\nYou can also customize the client on a per-request basis by using `with_options()`:\n\n```python\nclient.with_options(http_client=DefaultHttpxClient(...))\n```\n\n### Managing HTTP resources\n\nBy default the library closes underlying HTTP connections whenever the client is [garbage collected](https://docs.python.org/3/reference/datamodel.html#object.__del__). You can manually close the client using the `.close()` method if desired, or with a context manager that closes when exiting.\n\n```py\nfrom profound import Profound\n\nwith Profound() as client:\n  # make requests here\n  ...\n\n# HTTP client is now closed\n```\n\n## Versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/cooper-square-technologies/profound-python-sdk/issues) with questions, bugs, or suggestions.\n\n### Determining the installed version\n\nIf you\'ve upgraded to the latest version but aren\'t seeing any new features you were expecting then your python environment is likely still using an older version.\n\nYou can determine the version that is being used at runtime with:\n\n```py\nimport profound\nprint(profound.__version__)\n```\n\n## Requirements\n\nPython 3.9 or higher.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'typescript',
    content:
      "# Profound TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/@profoundai/client.svg?label=npm%20(stable))](https://npmjs.org/package/@profoundai/client) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@profoundai/client)\n\nThis library provides convenient access to the Profound REST API from server-side TypeScript or JavaScript.\n\n\n\nThe REST API documentation can be found on [docs.tryprofound.com](https://docs.tryprofound.com). The full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Profound MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40profoundai%2Fmcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBwcm9mb3VuZGFpL21jcCJdLCJlbnYiOnsiUFJPRk9VTkRfQUNDRVNTX1RPS0VOIjoiTXkgQWNjZXNzIFRva2VuIiwiUFJPRk9VTkRfQVBJX0tFWSI6Ik15IEFQSSBLZXkifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40profoundai%2Fmcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40profoundai%2Fmcp%22%5D%2C%22env%22%3A%7B%22PROFOUND_ACCESS_TOKEN%22%3A%22My%20Access%20Token%22%2C%22PROFOUND_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install @profoundai/client\n```\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n  environment: 'development', // defaults to 'production'\n});\n\nconst categories = await client.organizations.categories.list();\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport Profound from '@profoundai/client';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n  environment: 'development', // defaults to 'production'\n});\n\nconst categories: Profound.Organizations.CategoryListResponse =\n  await client.organizations.categories.list();\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst categories = await client.organizations.categories.list().catch(async (err) => {\n  if (err instanceof Profound.APIError) {\n    console.log(err.status); // 400\n    console.log(err.name); // BadRequestError\n    console.log(err.headers); // {server: 'nginx', ...}\n  } else {\n    throw err;\n  }\n});\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new Profound({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.organizations.categories.list({\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new Profound({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.organizations.categories.list({\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new Profound();\n\nconst response = await client.organizations.categories.list().asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: categories, response: raw } = await client.organizations.categories\n  .list()\n  .withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(categories);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `PROFOUND_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport Profound from '@profoundai/client';\n\nconst client = new Profound({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport Profound from '@profoundai/client';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new Profound({\n  logger: logger.child({ name: 'Profound' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.organizations.categories.list({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport Profound from '@profoundai/client';\nimport fetch from 'my-fetch';\n\nconst client = new Profound({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport Profound from '@profoundai/client';\n\nconst client = new Profound({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport Profound from '@profoundai/client';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new Profound({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport Profound from '@profoundai/client';\n\nconst client = new Profound({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport Profound from 'npm:@profoundai/client';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new Profound({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/cooper-square-technologies/profound-typescript-sdk/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
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
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
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
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
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
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
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
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
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

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}

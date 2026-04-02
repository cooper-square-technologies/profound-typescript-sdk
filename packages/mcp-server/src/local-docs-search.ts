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
    response: '{ id: string; name: string; }[]',
    markdown:
      "## regions\n\n`client.organizations.regions(): object[]`\n\n**get** `/v1/org/regions`\n\nGet the organization regions.\n\n### Returns\n\n- `{ id: string; name: string; }[]`\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst namedResources = await client.organizations.regions();\n\nconsole.log(namedResources);\n```",
    perLanguage: {
      http: {
        example: 'curl https://api.tryprofound.com/v1/org/regions \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
      python: {
        method: 'organizations.regions',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nnamed_resources = client.organizations.regions()\nprint(named_resources)',
      },
      typescript: {
        method: 'client.organizations.regions',
        example:
          "import Profound from 'profoundai';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst namedResources = await client.organizations.regions();\n\nconsole.log(namedResources);",
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
      "## models\n\n`client.organizations.models(): object[]`\n\n**get** `/v1/org/models`\n\nGet the organization models.\n\n### Returns\n\n- `{ id: string; name: string; }[]`\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst namedResources = await client.organizations.models();\n\nconsole.log(namedResources);\n```",
    perLanguage: {
      http: {
        example: 'curl https://api.tryprofound.com/v1/org/models \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
      python: {
        method: 'organizations.models',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nnamed_resources = client.organizations.models()\nprint(named_resources)',
      },
      typescript: {
        method: 'client.organizations.models',
        example:
          "import Profound from 'profoundai';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst namedResources = await client.organizations.models();\n\nconsole.log(namedResources);",
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
    response: '{ id: string; created_at: string; name: string; }[]',
    markdown:
      "## domains\n\n`client.organizations.domains(): { id: string; created_at: string; name: string; }[]`\n\n**get** `/v1/org/domains`\n\nGet the organization domains.\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; }[]`\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst response = await client.organizations.domains();\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example: 'curl https://api.tryprofound.com/v1/org/domains \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
      python: {
        method: 'organizations.domains',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.organizations.domains()\nprint(response)',
      },
      typescript: {
        method: 'client.organizations.domains',
        example:
          "import Profound from 'profoundai';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.organizations.domains();\n\nconsole.log(response);",
      },
    },
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
    perLanguage: {
      http: {
        example: 'curl https://api.tryprofound.com/v1/org/assets \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
      python: {
        method: 'organizations.list_assets',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.organizations.list_assets()\nprint(response.data)',
      },
      typescript: {
        method: 'client.organizations.listAssets',
        example:
          "import Profound from 'profoundai';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.organizations.listAssets();\n\nconsole.log(response.data);",
      },
    },
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
    perLanguage: {
      http: {
        example: 'curl https://api.tryprofound.com/v1/org/personas \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
      python: {
        method: 'organizations.get_personas',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.organizations.get_personas()\nprint(response.data)',
      },
      typescript: {
        method: 'client.organizations.getPersonas',
        example:
          "import Profound from 'profoundai';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.organizations.getPersonas();\n\nconsole.log(response.data);",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.tryprofound.com/v1/org/categories \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
      python: {
        method: 'organizations.categories.list',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nnamed_resources = client.organizations.categories.list()\nprint(named_resources)',
      },
      typescript: {
        method: 'client.organizations.categories.list',
        example:
          "import Profound from 'profoundai';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst namedResources = await client.organizations.categories.list();\n\nconsole.log(namedResources);",
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
      "## topics\n\n`client.organizations.categories.topics(category_id: string): { id: string; name: string; status: 'active' | 'disabled'; }[]`\n\n**get** `/v1/org/categories/{category_id}/topics`\n\nGet the topics for a specific category.\n\n### Parameters\n\n- `category_id: string`\n\n### Returns\n\n- `{ id: string; name: string; status: 'active' | 'disabled'; }[]`\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst response = await client.organizations.categories.topics('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api.tryprofound.com/v1/org/categories/$CATEGORY_ID/topics \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
      python: {
        method: 'organizations.categories.topics',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.organizations.categories.topics(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response)',
      },
      typescript: {
        method: 'client.organizations.categories.topics',
        example:
          "import Profound from 'profoundai';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.organizations.categories.topics(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(response);",
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
      "## tags\n\n`client.organizations.categories.tags(category_id: string): object[]`\n\n**get** `/v1/org/categories/{category_id}/tags`\n\nGet the tags for a specific category.\n\n### Parameters\n\n- `category_id: string`\n\n### Returns\n\n- `{ id: string; name: string; }[]`\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst namedResources = await client.organizations.categories.tags('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(namedResources);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api.tryprofound.com/v1/org/categories/$CATEGORY_ID/tags \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
      python: {
        method: 'organizations.categories.tags',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nnamed_resources = client.organizations.categories.tags(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(named_resources)',
      },
      typescript: {
        method: 'client.organizations.categories.tags',
        example:
          "import Profound from 'profoundai';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst namedResources = await client.organizations.categories.tags(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(namedResources);",
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
      'cursor?: string;',
      'limit?: number;',
      "order_dir?: 'asc' | 'desc';",
      'persona_id?: string[];',
      'platform_id?: string[];',
      "prompt_type?: 'visibility' | 'sentiment'[];",
      'region_id?: string[];',
      'tag_id?: string[];',
      'topic_id?: string[];',
    ],
    response:
      '{ data: { id: string; created_at: string; language: string; platforms: object[]; prompt: string; prompt_type: string; regions: object[]; topic: object; personas?: object[]; tags?: object[]; }[]; info: { limit: number; next_cursor: string; total_rows: number; }; }',
    markdown:
      "## prompts\n\n`client.organizations.categories.prompts(category_id: string, cursor?: string, limit?: number, order_dir?: 'asc' | 'desc', persona_id?: string[], platform_id?: string[], prompt_type?: 'visibility' | 'sentiment'[], region_id?: string[], tag_id?: string[], topic_id?: string[]): { data: object[]; info: object; }`\n\n**get** `/v1/org/categories/{category_id}/prompts`\n\nRetrieve prompts in a category with optional filtering by type, topic, tag, region, platform, or persona. Supports cursor-based pagination.\n\n### Parameters\n\n- `category_id: string`\n\n- `cursor?: string`\n  Pagination cursor from a previous response.\n\n- `limit?: number`\n  Maximum number of prompts to return.\n\n- `order_dir?: 'asc' | 'desc'`\n  Sort direction by creation date.\n\n- `persona_id?: string[]`\n  Filter by persona IDs.\n\n- `platform_id?: string[]`\n  Filter by platform IDs.\n\n- `prompt_type?: 'visibility' | 'sentiment'[]`\n  Filter by prompt type.\n\n- `region_id?: string[]`\n  Filter by region IDs.\n\n- `tag_id?: string[]`\n  Filter by tag IDs.\n\n- `topic_id?: string[]`\n  Filter by topic IDs.\n\n### Returns\n\n- `{ data: { id: string; created_at: string; language: string; platforms: object[]; prompt: string; prompt_type: string; regions: object[]; topic: object; personas?: object[]; tags?: object[]; }[]; info: { limit: number; next_cursor: string; total_rows: number; }; }`\n\n  - `data: { id: string; created_at: string; language: string; platforms: { id: string; name: string; }[]; prompt: string; prompt_type: string; regions: { id: string; name: string; }[]; topic: { id: string; name: string; }; personas?: { id: string; name: string; }[]; tags?: { id: string; name: string; }[]; }[]`\n  - `info: { limit: number; next_cursor: string; total_rows: number; }`\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst response = await client.organizations.categories.prompts('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api.tryprofound.com/v1/org/categories/$CATEGORY_ID/prompts \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
      python: {
        method: 'organizations.categories.prompts',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.organizations.categories.prompts(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      typescript: {
        method: 'client.organizations.categories.prompts',
        example:
          "import Profound from 'profoundai';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.organizations.categories.prompts(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(response.data);",
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
      "## assets\n\n`client.organizations.categories.assets(category_id: string): { id: string; created_at: string; is_owned: boolean; logo_url: string; name: string; website: string; alternate_domains?: string[]; }[]`\n\n**get** `/v1/org/categories/{category_id}/assets`\n\nGet Category Assets\n\n### Parameters\n\n- `category_id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; is_owned: boolean; logo_url: string; name: string; website: string; alternate_domains?: string[]; }[]`\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst response = await client.organizations.categories.assets('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api.tryprofound.com/v1/org/categories/$CATEGORY_ID/assets \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
      python: {
        method: 'organizations.categories.assets',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.organizations.categories.assets(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response)',
      },
      typescript: {
        method: 'client.organizations.categories.assets',
        example:
          "import Profound from 'profoundai';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.organizations.categories.assets(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(response);",
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
      "## get_category_personas\n\n`client.organizations.categories.getCategoryPersonas(category_id: string): { data: object[]; }`\n\n**get** `/v1/org/categories/{category_id}/personas`\n\nGet Category Personas\n\n### Parameters\n\n- `category_id: string`\n\n### Returns\n\n- `{ data: { id: string; name: string; persona: object; }[]; }`\n\n  - `data: { id: string; name: string; persona: { behavior: object; demographics: object; employment: object; }; }[]`\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst response = await client.organizations.categories.getCategoryPersonas('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api.tryprofound.com/v1/org/categories/$CATEGORY_ID/personas \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
      python: {
        method: 'organizations.categories.get_category_personas',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.organizations.categories.get_category_personas(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      typescript: {
        method: 'client.organizations.categories.getCategoryPersonas',
        example:
          "import Profound from 'profoundai';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.organizations.categories.getCategoryPersonas(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(response.data);",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.tryprofound.com/v1/prompts/answers \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "2019-12-27T18:11:19.117Z",\n          "start_date": "2019-12-27T18:11:19.117Z"\n        }\'',
      },
      python: {
        method: 'prompts.answers',
        example:
          'import os\nfrom datetime import datetime\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.prompts.answers(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n    start_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n)\nprint(response.data)',
      },
      typescript: {
        method: 'client.prompts.answers',
        example:
          "import Profound from 'profoundai';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.prompts.answers({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: '2019-12-27T18:11:19.117Z',\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(response.data);",
      },
    },
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
      "filters?: { field: 'hostname'; operator: string; value: string | string[]; } | { field: 'path'; operator: string; value: string | string[]; } | { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_name'; operator: string; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_name'; operator: string; value: string | string[]; } | { field: 'url'; operator: string; value: string | string[]; } | { field: 'root_domain'; operator: string; value: string | string[]; } | { field: 'prompt_type'; operator: string; value: 'visibility' | 'sentiment' | 'visibility' | 'sentiment'[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'citation_category'; operator: string; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; }[];",
      'order_by?: object;',
      'pagination?: { limit?: number; offset?: number; };',
    ],
    response:
      '{ data: { dimensions: string[]; metrics: number[]; }[]; info: { total_rows: number; query?: object; }; }',
    markdown:
      "## citations\n\n`client.reports.citations(category_id: string, end_date: string, metrics: 'count' | 'citation_share' | 'share_of_voice'[], start_date: string, date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week', dimensions?: string[], filters?: { field: 'hostname'; operator: string; value: string | string[]; } | { field: 'path'; operator: string; value: string | string[]; } | { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_name'; operator: string; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_name'; operator: string; value: string | string[]; } | { field: 'url'; operator: string; value: string | string[]; } | { field: 'root_domain'; operator: string; value: string | string[]; } | { field: 'prompt_type'; operator: string; value: 'visibility' | 'sentiment' | 'visibility' | 'sentiment'[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'citation_category'; operator: string; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; }[], order_by?: object, pagination?: { limit?: number; offset?: number; }): { data: report_result[]; info: report_info; }`\n\n**post** `/v1/reports/citations`\n\nGet citations for a given category.\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n  End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.\n\n- `metrics: 'count' | 'citation_share' | 'share_of_voice'[]`\n  Metrics to include. `share_of_voice` is deprecated, use `citation_share` instead.\n\n- `start_date: string`\n  Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.\n\n- `date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week'`\n  Date interval for the report. (only used with date dimension)\n\n- `dimensions?: string[]`\n  Dimensions to group the report by.\n\n- `filters?: { field: 'hostname'; operator: string; value: string | string[]; } | { field: 'path'; operator: string; value: string | string[]; } | { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_name'; operator: string; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_name'; operator: string; value: string | string[]; } | { field: 'url'; operator: string; value: string | string[]; } | { field: 'root_domain'; operator: string; value: string | string[]; } | { field: 'prompt_type'; operator: string; value: 'visibility' | 'sentiment' | 'visibility' | 'sentiment'[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'citation_category'; operator: string; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; }[]`\n  List of filters to apply to the citations report.\n\n- `order_by?: object`\n  \n    Custom ordering of the report results.\n\n    The order is a record of key-value pairs where:\n    - `key` is the field to order by, which can be a metric and/or `date`, `hostname`, `path` dimensions\n    - `value` is the direction of the order, either `asc` for ascending or `desc` for descending.\n\n    When not specified, the default order is the first metric in the query descending.\n            \n\n- `pagination?: { limit?: number; offset?: number; }`\n  Pagination settings for the report results.\n  - `limit?: number`\n    Maximum number of results to return. Default is 10,000, maximum is 50,000.\n  - `offset?: number`\n    Offset for the results. Used for pagination.\n\n### Returns\n\n- `{ data: { dimensions: string[]; metrics: number[]; }[]; info: { total_rows: number; query?: object; }; }`\n\n  - `data: { dimensions: string[]; metrics: number[]; }[]`\n  - `info: { total_rows: number; query?: object; }`\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst response = await client.reports.citations({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: '2019-12-27T18:11:19.117Z',\n  metrics: ['count'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api.tryprofound.com/v1/reports/citations \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "2019-12-27T18:11:19.117Z",\n          "metrics": [\n            "count"\n          ],\n          "start_date": "2019-12-27T18:11:19.117Z"\n        }\'',
      },
      python: {
        method: 'reports.citations',
        example:
          'import os\nfrom datetime import datetime\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.reports.citations(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n    metrics=["count"],\n    start_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n)\nprint(response.data)',
      },
      typescript: {
        method: 'client.reports.citations',
        example:
          "import Profound from 'profoundai';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.citations({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: '2019-12-27T18:11:19.117Z',\n  metrics: ['count'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(response.data);",
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
      "date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week';",
      'dimensions?: string[];',
      "filters?: { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_name'; operator: string; value: string | string[]; } | { field: 'asset_name'; operator: string; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_name'; operator: string; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; }[];",
      'order_by?: object;',
      'pagination?: { limit?: number; offset?: number; };',
    ],
    response:
      '{ data: { dimensions: string[]; metrics: number[]; }[]; info: { total_rows: number; query?: object; }; }',
    markdown:
      "## visibility\n\n`client.reports.visibility(category_id: string, end_date: string, metrics: 'share_of_voice' | 'mentions_count' | 'visibility_score' | 'executions' | 'average_position'[], start_date: string, date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week', dimensions?: string[], filters?: { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_name'; operator: string; value: string | string[]; } | { field: 'asset_name'; operator: string; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_name'; operator: string; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; }[], order_by?: object, pagination?: { limit?: number; offset?: number; }): { data: report_result[]; info: report_info; }`\n\n**post** `/v1/reports/visibility`\n\nQuery visibility report.\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n  End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.\n\n- `metrics: 'share_of_voice' | 'mentions_count' | 'visibility_score' | 'executions' | 'average_position'[]`\n\n- `start_date: string`\n  Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.\n\n- `date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week'`\n  Date interval for the report. (only used with date dimension)\n\n- `dimensions?: string[]`\n  Dimensions to group the report by.\n\n- `filters?: { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_name'; operator: string; value: string | string[]; } | { field: 'asset_name'; operator: string; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_name'; operator: string; value: string | string[]; } | { field: 'prompt_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; }[]`\n  List of filters to apply to the visibility report.\n\n- `order_by?: object`\n  \nCustom ordering of the report results.\n\nThe order is a record of key-value pairs where:\n- key is the field to order by, which can be a metric or dimension\n- value is the direction of the order, either 'asc' for ascending or 'desc' for descending.\n\nWhen not specified, the default order is the first metric in the query descending.\n        \n\n- `pagination?: { limit?: number; offset?: number; }`\n  Pagination settings for the report results.\n  - `limit?: number`\n    Maximum number of results to return. Default is 10,000, maximum is 50,000.\n  - `offset?: number`\n    Offset for the results. Used for pagination.\n\n### Returns\n\n- `{ data: { dimensions: string[]; metrics: number[]; }[]; info: { total_rows: number; query?: object; }; }`\n  Base response model for reports.\n\n  - `data: { dimensions: string[]; metrics: number[]; }[]`\n  - `info: { total_rows: number; query?: object; }`\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst reportResponse = await client.reports.visibility({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: '2019-12-27T18:11:19.117Z',\n  metrics: ['share_of_voice'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(reportResponse);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api.tryprofound.com/v1/reports/visibility \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "2019-12-27T18:11:19.117Z",\n          "metrics": [\n            "share_of_voice"\n          ],\n          "start_date": "2019-12-27T18:11:19.117Z"\n        }\'',
      },
      python: {
        method: 'reports.visibility',
        example:
          'import os\nfrom datetime import datetime\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nreport_response = client.reports.visibility(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n    metrics=["share_of_voice"],\n    start_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n)\nprint(report_response.data)',
      },
      typescript: {
        method: 'client.reports.visibility',
        example:
          "import Profound from 'profoundai';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst reportResponse = await client.reports.visibility({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: '2019-12-27T18:11:19.117Z',\n  metrics: ['share_of_voice'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(reportResponse.data);",
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
      "date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week';",
      'dimensions?: string[];',
      "filters?: { field: 'asset_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'asset_name'; operator: string; value: string | string[]; } | { field: 'theme'; operator: string; value: string | string[]; } | { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_name'; operator: string; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_name'; operator: string; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; }[];",
      'order_by?: object;',
      'pagination?: { limit?: number; offset?: number; };',
    ],
    response:
      '{ data: { dimensions: string[]; metrics: number[]; }[]; info: { total_rows: number; query?: object; }; }',
    markdown:
      "## sentiment\n\n`client.reports.sentiment(category_id: string, end_date: string, metrics: 'positive' | 'negative' | 'occurrences'[], start_date: string, date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week', dimensions?: string[], filters?: { field: 'asset_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'asset_name'; operator: string; value: string | string[]; } | { field: 'theme'; operator: string; value: string | string[]; } | { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_name'; operator: string; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_name'; operator: string; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; }[], order_by?: object, pagination?: { limit?: number; offset?: number; }): { data: report_result[]; info: report_info; }`\n\n**post** `/v1/reports/sentiment`\n\nGet citations for a given category.\n\n### Parameters\n\n- `category_id: string`\n\n- `end_date: string`\n  End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.\n\n- `metrics: 'positive' | 'negative' | 'occurrences'[]`\n\n- `start_date: string`\n  Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.\n\n- `date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week'`\n  Date interval for the report. (only used with date dimension)\n\n- `dimensions?: string[]`\n  Dimensions to group the report by.\n\n- `filters?: { field: 'asset_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'asset_name'; operator: string; value: string | string[]; } | { field: 'theme'; operator: string; value: string | string[]; } | { field: 'region_id' | 'region'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_id' | 'topic'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'topic_name'; operator: string; value: string | string[]; } | { field: 'model_id' | 'model'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_id' | 'tag'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; } | { field: 'tag_name'; operator: string; value: string | string[]; } | { field: 'prompt'; operator: string; value: string | string[]; } | { field: 'persona_id'; operator: 'is' | 'not_is' | 'in' | 'not_in'; value: string | string[]; }[]`\n  List of filters to apply to the sentiment report.\n\n- `order_by?: object`\n  \nCustom ordering of the report results.\n\nThe order is a record of key-value pairs where:\n- key is the field to order by, which can be a metric or dimension\n- value is the direction of the order, either 'asc' for ascending or 'desc' for descending.\n\nWhen not specified, the default order is the first metric in the query descending.\n        \n\n- `pagination?: { limit?: number; offset?: number; }`\n  Pagination settings for the report results.\n  - `limit?: number`\n    Maximum number of results to return. Default is 10,000, maximum is 50,000.\n  - `offset?: number`\n    Offset for the results. Used for pagination.\n\n### Returns\n\n- `{ data: { dimensions: string[]; metrics: number[]; }[]; info: { total_rows: number; query?: object; }; }`\n  Base response model for reports.\n\n  - `data: { dimensions: string[]; metrics: number[]; }[]`\n  - `info: { total_rows: number; query?: object; }`\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst reportResponse = await client.reports.sentiment({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: '2019-12-27T18:11:19.117Z',\n  metrics: ['positive'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(reportResponse);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api.tryprofound.com/v1/reports/sentiment \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "2019-12-27T18:11:19.117Z",\n          "metrics": [\n            "positive"\n          ],\n          "start_date": "2019-12-27T18:11:19.117Z"\n        }\'',
      },
      python: {
        method: 'reports.sentiment',
        example:
          'import os\nfrom datetime import datetime\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nreport_response = client.reports.sentiment(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n    metrics=["positive"],\n    start_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n)\nprint(report_response.data)',
      },
      typescript: {
        method: 'client.reports.sentiment',
        example:
          "import Profound from 'profoundai';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst reportResponse = await client.reports.sentiment({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: '2019-12-27T18:11:19.117Z',\n  metrics: ['positive'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(reportResponse.data);",
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
      'order_by?: object;',
      'organization_id?: string;',
      'pagination?: { limit?: number; offset?: number; };',
    ],
    response:
      '{ data: { dimensions: string[]; metrics: number[]; }[]; info: { total_rows: number; query?: object; }; }',
    markdown:
      "## get_referrals_report\n\n`client.reports.getReferralsReport(domain: string, metrics: 'visits' | 'last_visit'[], start_date: string, date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week', dimensions?: 'date' | 'path' | 'referral_source'[], end_date?: string, filters?: { field: 'path'; operator: string; value: string | string[]; } | { field: 'referral_source'; operator: string; value: string | string[]; }[], order_by?: object, organization_id?: string, pagination?: { limit?: number; offset?: number; }): { data: report_result[]; info: report_info; }`\n\n**post** `/v1/reports/referrals`\n\nGet referral traffic report from the daily aggregated materialized view.\n\nThis endpoint queries pre-aggregated daily referral data, making it efficient\nfor large date ranges and high-traffic sites.\n\n### Parameters\n\n- `domain: string`\n  Domain to query logs for.\n\n- `metrics: 'visits' | 'last_visit'[]`\n\n- `start_date: string`\n  Start date for logs. Accepts: YYYY-MM-DD, YYYY-MM-DD HH:MM, YYYY-MM-DD HH:MM:SS, or full ISO timestamp.\n\n- `date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week'`\n  Date interval for the report. (only used with date dimension)\n\n- `dimensions?: 'date' | 'path' | 'referral_source'[]`\n  Dimensions to group the report by.\n\n- `end_date?: string`\n  End date for logs. Accepts same formats as start_date. Defaults to now if omitted.\n\n- `filters?: { field: 'path'; operator: string; value: string | string[]; } | { field: 'referral_source'; operator: string; value: string | string[]; }[]`\n  Filters for referrals report.\n\n- `order_by?: object`\n  \nCustom ordering of the report results.\n\nThe order is a record of key-value pairs where:\n- key is the field to order by, which can be a metric or dimension\n- value is the direction of the order, either 'asc' for ascending or 'desc' for descending.\n\nWhen not specified, the default order is the first metric in the query descending.\n        \n\n- `organization_id?: string`\n\n- `pagination?: { limit?: number; offset?: number; }`\n  Pagination settings for the report results.\n  - `limit?: number`\n    Maximum number of results to return. Default is 10,000, maximum is 50,000.\n  - `offset?: number`\n    Offset for the results. Used for pagination.\n\n### Returns\n\n- `{ data: { dimensions: string[]; metrics: number[]; }[]; info: { total_rows: number; query?: object; }; }`\n  Base response model for reports.\n\n  - `data: { dimensions: string[]; metrics: number[]; }[]`\n  - `info: { total_rows: number; query?: object; }`\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst reportResponse = await client.reports.getReferralsReport({\n  domain: 'domain',\n  metrics: ['visits'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(reportResponse);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api.tryprofound.com/v1/reports/referrals \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "domain": "domain",\n          "metrics": [\n            "visits"\n          ],\n          "start_date": "2019-12-27T18:11:19.117Z"\n        }\'',
      },
      python: {
        method: 'reports.get_referrals_report',
        example:
          'import os\nfrom datetime import datetime\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nreport_response = client.reports.get_referrals_report(\n    domain="domain",\n    metrics=["visits"],\n    start_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n)\nprint(report_response.data)',
      },
      typescript: {
        method: 'client.reports.getReferralsReport',
        example:
          "import Profound from 'profoundai';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst reportResponse = await client.reports.getReferralsReport({\n  domain: 'domain',\n  metrics: ['visits'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(reportResponse.data);",
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
      'order_by?: object;',
      'organization_id?: string;',
      'pagination?: { limit?: number; offset?: number; };',
    ],
    response:
      '{ data: { dimensions: string[]; metrics: number[]; }[]; info: { total_rows: number; query?: object; }; }',
    markdown:
      "## get_bots_report\n\n`client.reports.getBotsReport(domain: string, metrics: 'count' | 'citations' | 'indexing' | 'training' | 'last_visit'[], start_date: string, date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week', dimensions?: 'date' | 'path' | 'bot_name' | 'bot_provider'[], end_date?: string, filters?: { field: 'path'; operator: string; value: string | string[]; } | { field: 'bot_name'; operator: string; value: string | string[]; } | { field: 'bot_provider'; operator: string; value: string | string[]; }[], order_by?: object, organization_id?: string, pagination?: { limit?: number; offset?: number; }): { data: report_result[]; info: report_info; }`\n\n**post** `/v1/reports/bots`\n\nGet bot traffic report from the daily aggregated materialized view.\n\nThis endpoint queries pre-aggregated daily bot data, making it efficient\nfor large date ranges and high-traffic sites.\n\nMetrics:\n- count: unique bot visits\n- citations: unique citation events\n- indexing: unique indexing events\n- training: unique training events\n- last_visit: most recent visit timestamp\n\n### Parameters\n\n- `domain: string`\n  Domain to query logs for.\n\n- `metrics: 'count' | 'citations' | 'indexing' | 'training' | 'last_visit'[]`\n\n- `start_date: string`\n  Start date for logs. Accepts: YYYY-MM-DD, YYYY-MM-DD HH:MM, YYYY-MM-DD HH:MM:SS, or full ISO timestamp.\n\n- `date_interval?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'relative_week'`\n  Date interval for the report. (only used with date dimension)\n\n- `dimensions?: 'date' | 'path' | 'bot_name' | 'bot_provider'[]`\n  Dimensions to group the report by.\n\n- `end_date?: string`\n  End date for logs. Accepts same formats as start_date. Defaults to now if omitted.\n\n- `filters?: { field: 'path'; operator: string; value: string | string[]; } | { field: 'bot_name'; operator: string; value: string | string[]; } | { field: 'bot_provider'; operator: string; value: string | string[]; }[]`\n  Filters for bots report.\n\n- `order_by?: object`\n  \nCustom ordering of the report results.\n\nThe order is a record of key-value pairs where:\n- key is the field to order by, which can be a metric or dimension\n- value is the direction of the order, either 'asc' for ascending or 'desc' for descending.\n\nWhen not specified, the default order is the first metric in the query descending.\n        \n\n- `organization_id?: string`\n\n- `pagination?: { limit?: number; offset?: number; }`\n  Pagination settings for the report results.\n  - `limit?: number`\n    Maximum number of results to return. Default is 10,000, maximum is 50,000.\n  - `offset?: number`\n    Offset for the results. Used for pagination.\n\n### Returns\n\n- `{ data: { dimensions: string[]; metrics: number[]; }[]; info: { total_rows: number; query?: object; }; }`\n  Base response model for reports.\n\n  - `data: { dimensions: string[]; metrics: number[]; }[]`\n  - `info: { total_rows: number; query?: object; }`\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst reportResponse = await client.reports.getBotsReport({\n  domain: 'domain',\n  metrics: ['count'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(reportResponse);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api.tryprofound.com/v1/reports/bots \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "domain": "domain",\n          "metrics": [\n            "count"\n          ],\n          "start_date": "2019-12-27T18:11:19.117Z"\n        }\'',
      },
      python: {
        method: 'reports.get_bots_report',
        example:
          'import os\nfrom datetime import datetime\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nreport_response = client.reports.get_bots_report(\n    domain="domain",\n    metrics=["count"],\n    start_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n)\nprint(report_response.data)',
      },
      typescript: {
        method: 'client.reports.getBotsReport',
        example:
          "import Profound from 'profoundai';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst reportResponse = await client.reports.getBotsReport({\n  domain: 'domain',\n  metrics: ['count'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(reportResponse.data);",
      },
    },
  },
  {
    name: 'get_referrals_report_v2',
    endpoint: '/v2/reports/referrals',
    httpMethod: 'post',
    summary: 'Get Referrals Report V2',
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
    perLanguage: {
      http: {
        example:
          'curl https://api.tryprofound.com/v2/reports/referrals \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "domain": "domain",\n          "metrics": [\n            "visits"\n          ],\n          "start_date": "2019-12-27T18:11:19.117Z"\n        }\'',
      },
      python: {
        method: 'reports.get_referrals_report_v2',
        example:
          'import os\nfrom datetime import datetime\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nreport_response = client.reports.get_referrals_report_v2(\n    domain="domain",\n    metrics=["visits"],\n    start_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n)\nprint(report_response.data)',
      },
      typescript: {
        method: 'client.reports.getReferralsReportV2',
        example:
          "import Profound from 'profoundai';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst reportResponse = await client.reports.getReferralsReportV2({\n  domain: 'domain',\n  metrics: ['visits'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(reportResponse.data);",
      },
    },
  },
  {
    name: 'get_bots_report_v2',
    endpoint: '/v2/reports/bots',
    httpMethod: 'post',
    summary: 'Get Bots Report V2',
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
    perLanguage: {
      http: {
        example:
          'curl https://api.tryprofound.com/v2/reports/bots \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "domain": "domain",\n          "metrics": [\n            "count"\n          ],\n          "start_date": "2019-12-27T18:11:19.117Z"\n        }\'',
      },
      python: {
        method: 'reports.get_bots_report_v2',
        example:
          'import os\nfrom datetime import datetime\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nreport_response = client.reports.get_bots_report_v2(\n    domain="domain",\n    metrics=["count"],\n    start_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n)\nprint(report_response.data)',
      },
      typescript: {
        method: 'client.reports.getBotsReportV2',
        example:
          "import Profound from 'profoundai';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst reportResponse = await client.reports.getBotsReportV2({\n  domain: 'domain',\n  metrics: ['count'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(reportResponse.data);",
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
    perLanguage: {
      http: {
        example:
          'curl https://api.tryprofound.com/v1/reports/query-fanouts \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "category_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "end_date": "2019-12-27T18:11:19.117Z",\n          "metrics": [\n            "fanouts_per_execution"\n          ],\n          "start_date": "2019-12-27T18:11:19.117Z"\n        }\'',
      },
      python: {
        method: 'reports.query_fanouts',
        example:
          'import os\nfrom datetime import datetime\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nreport_response = client.reports.query_fanouts(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n    metrics=["fanouts_per_execution"],\n    start_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n)\nprint(report_response.data)',
      },
      typescript: {
        method: 'client.reports.queryFanouts',
        example:
          "import Profound from 'profoundai';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst reportResponse = await client.reports.queryFanouts({\n  category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  end_date: '2019-12-27T18:11:19.117Z',\n  metrics: ['fanouts_per_execution'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(reportResponse.data);",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.tryprofound.com/v1/logs/raw \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "domain": "domain",\n          "metrics": [\n            "count"\n          ],\n          "start_date": "2019-12-27T18:11:19.117Z"\n        }\'',
      },
      python: {
        method: 'logs.raw.logs',
        example:
          'import os\nfrom datetime import datetime\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.logs.raw.logs(\n    domain="domain",\n    metrics=["count"],\n    start_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n)\nprint(response)',
      },
      typescript: {
        method: 'client.logs.raw.logs',
        example:
          "import Profound from 'profoundai';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.logs.raw.logs({\n  domain: 'domain',\n  metrics: ['count'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(response);",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.tryprofound.com/v1/logs/raw/bots \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "domain": "domain",\n          "metrics": [\n            "count"\n          ],\n          "start_date": "2019-12-27T18:11:19.117Z"\n        }\'',
      },
      python: {
        method: 'logs.raw.bots',
        example:
          'import os\nfrom datetime import datetime\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.logs.raw.bots(\n    domain="domain",\n    metrics=["count"],\n    start_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n)\nprint(response)',
      },
      typescript: {
        method: 'client.logs.raw.bots',
        example:
          "import Profound from 'profoundai';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.logs.raw.bots({\n  domain: 'domain',\n  metrics: ['count'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(response);",
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
      "## list\n\n`client.content.optimization.list(asset_id: string, limit?: number, offset?: number): { data: object[]; info: object; }`\n\n**get** `/v1/content/{asset_id}/optimization`\n\nOptimization List\n\n### Parameters\n\n- `asset_id: string`\n\n- `limit?: number`\n  Maximum number of results to return\n\n- `offset?: number`\n  Offset for pagination\n\n### Returns\n\n- `{ data: { id: string; created_at: string; extracted_input: string; status: string; title: string; type: 'file' | 'text' | 'url'; }[]; info: { query: { asset_id: string; pagination?: pagination; }; total_rows: number; }; }`\n\n  - `data: { id: string; created_at: string; extracted_input: string; status: string; title: string; type: 'file' | 'text' | 'url'; }[]`\n  - `info: { query: { asset_id: string; pagination?: { limit?: number; offset?: number; }; }; total_rows: number; }`\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst optimizations = await client.content.optimization.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(optimizations);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api.tryprofound.com/v1/content/$ASSET_ID/optimization \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
      python: {
        method: 'content.optimization.list',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\noptimizations = client.content.optimization.list(\n    asset_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(optimizations.data)',
      },
      typescript: {
        method: 'client.content.optimization.list',
        example:
          "import Profound from 'profoundai';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst optimizations = await client.content.optimization.list(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(optimizations.data);",
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
      "## retrieve\n\n`client.content.optimization.retrieve(asset_id: string, content_id: string): { data: object; }`\n\n**get** `/v1/content/{asset_id}/optimization/{content_id}`\n\nOptimization Analysis\n\n### Parameters\n\n- `asset_id: string`\n\n- `content_id: string`\n\n### Returns\n\n- `{ data: { aeo_content_score: { target_zone: object; value: number; }; analysis: { breakdown: object[]; }; content: { format: 'markdown' | 'html'; value: string; }; inputs: { prompt: object; top_citations: string[]; topic: object; user: object; }; recommendations: { impact: object; status: 'done' | 'pending'; suggestion: object; title: string; }[]; }; }`\n\n  - `data: { aeo_content_score: { target_zone: { high: number; low: number; }; value: number; }; analysis: { breakdown: { score: number; title: string; weight: number; }[]; }; content: { format: 'markdown' | 'html'; value: string; }; inputs: { prompt: { id: string; name: string; }; top_citations: string[]; topic: { id: string; name: string; }; user: { metadata: object; type: 'file' | 'text' | 'url'; value: string; }; }; recommendations: { impact: { score: number; section: string; }; status: 'done' | 'pending'; suggestion: { rationale: string; text: string; }; title: string; }[]; }`\n\n### Example\n\n```typescript\nimport Profound from 'profoundai';\n\nconst client = new Profound();\n\nconst optimization = await client.content.optimization.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { asset_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(optimization);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api.tryprofound.com/v1/content/$ASSET_ID/optimization/$CONTENT_ID \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
      python: {
        method: 'content.optimization.retrieve',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\noptimization = client.content.optimization.retrieve(\n    content_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    asset_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(optimization.data)',
      },
      typescript: {
        method: 'client.content.optimization.retrieve',
        example:
          "import Profound from 'profoundai';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst optimization = await client.content.optimization.retrieve(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { asset_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },\n);\n\nconsole.log(optimization.data);",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.tryprofound.com/v1/prompt-volumes/volume \\\n    -H \'Content-Type: application/json\' \\\n    -H "X-API-Key: $PROFOUND_API_KEY" \\\n    -d \'{\n          "end_date": "2019-12-27T18:11:19.117Z",\n          "metrics": [\n            "volume"\n          ],\n          "start_date": "2019-12-27T18:11:19.117Z"\n        }\'',
      },
      python: {
        method: 'prompt_volumes.create_volume',
        example:
          'import os\nfrom datetime import datetime\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.prompt_volumes.create_volume(\n    end_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n    metrics=["volume"],\n    start_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n)\nprint(response)',
      },
      typescript: {
        method: 'client.promptVolumes.createVolume',
        example:
          "import Profound from 'profoundai';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.promptVolumes.createVolume({\n  end_date: '2019-12-27T18:11:19.117Z',\n  metrics: ['volume'],\n  start_date: '2019-12-27T18:11:19.117Z',\n});\n\nconsole.log(response);",
      },
    },
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
    perLanguage: {
      http: {
        example:
          'curl https://api.tryprofound.com/v1/prompt-volumes/citation-prompts \\\n    -H "X-API-Key: $PROFOUND_API_KEY"',
      },
      python: {
        method: 'prompt_volumes.list_citation_prompts',
        example:
          'import os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.prompt_volumes.list_citation_prompts(\n    input_domain="xxx",\n)\nprint(response)',
      },
      typescript: {
        method: 'client.promptVolumes.listCitationPrompts',
        example:
          "import Profound from 'profoundai';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.promptVolumes.listCitationPrompts({ input_domain: 'xxx' });\n\nconsole.log(response);",
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'python',
    content:
      '# Profound Python API library\n\n<!-- prettier-ignore -->\n[![PyPI version](https://img.shields.io/pypi/v/profound.svg?label=pypi%20(stable))](https://pypi.org/project/profound/)\n\nThe Profound Python library provides convenient access to the Profound REST API from any Python 3.9+\napplication. The library includes type definitions for all request params and response fields,\nand offers both synchronous and asynchronous clients powered by [httpx](https://github.com/encode/httpx).\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Profound MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=profound-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsInByb2ZvdW5kLW1jcCJdLCJlbnYiOnsiUFJPRk9VTkRfQVBJX0tFWSI6Ik15IEFQSSBLZXkifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22profound-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22profound-mcp%22%5D%2C%22env%22%3A%7B%22PROFOUND_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\nThe REST API documentation can be found on [docs.tryprofound.com](https://docs.tryprofound.com). The full API of this library can be found in [api.md](api.md).\n\n## Installation\n\n```sh\n# install from PyPI\npip install profound\n```\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```python\nimport os\nfrom profound import Profound\n\nclient = Profound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\n\nnamed_resources = client.organizations.categories.list()\n```\n\nWhile you can provide an `api_key` keyword argument,\nwe recommend using [python-dotenv](https://pypi.org/project/python-dotenv/)\nto add `PROFOUND_API_KEY="My API Key"` to your `.env` file\nso that your API Key is not stored in source control.\n\n## Async usage\n\nSimply import `AsyncProfound` instead of `Profound` and use `await` with each API call:\n\n```python\nimport os\nimport asyncio\nfrom profound import AsyncProfound\n\nclient = AsyncProfound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n)\n\nasync def main() -> None:\n  named_resources = await client.organizations.categories.list()\n\nasyncio.run(main())\n```\n\nFunctionality between the synchronous and asynchronous clients is otherwise identical.\n\n### With aiohttp\n\nBy default, the async client uses `httpx` for HTTP requests. However, for improved concurrency performance you may also use `aiohttp` as the HTTP backend.\n\nYou can enable this by installing `aiohttp`:\n\n```sh\n# install from PyPI\npip install profound[aiohttp]\n```\n\nThen you can enable it by instantiating the client with `http_client=DefaultAioHttpClient()`:\n\n```python\nimport os\nimport asyncio\nfrom profound import DefaultAioHttpClient\nfrom profound import AsyncProfound\n\nasync def main() -> None:\n  async with AsyncProfound(\n    api_key=os.environ.get("PROFOUND_API_KEY"),  # This is the default and can be omitted\n    http_client=DefaultAioHttpClient(),\n) as client:\n    named_resources = await client.organizations.categories.list()\n\nasyncio.run(main())\n```\n\n\n\n## Using types\n\nNested request parameters are [TypedDicts](https://docs.python.org/3/library/typing.html#typing.TypedDict). Responses are [Pydantic models](https://docs.pydantic.dev) which also provide helper methods for things like:\n\n- Serializing back into JSON, `model.to_json()`\n- Converting to a dictionary, `model.to_dict()`\n\nTyped requests and responses provide autocomplete and documentation within your editor. If you would like to see type errors in VS Code to help catch bugs earlier, set `python.analysis.typeCheckingMode` to `basic`.\n\n\n\nfrom datetime import datetime\n\n## Nested params\n\nNested parameters are dictionaries, typed using `TypedDict`, for example:\n\n```python\nfrom profound import Profound\n\nclient = Profound()\n\nresponse = client.prompts.answers(\n    category_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    end_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n    start_date=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n    include={},\n)\nprint(response.include)\n```\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API (for example, due to network connection problems or a timeout), a subclass of `profound.APIConnectionError` is raised.\n\nWhen the API returns a non-success status code (that is, 4xx or 5xx\nresponse), a subclass of `profound.APIStatusError` is raised, containing `status_code` and `response` properties.\n\nAll errors inherit from `profound.APIError`.\n\n```python\nimport profound\nfrom profound import Profound\n\nclient = Profound()\n\ntry:\n    client.organizations.categories.list()\nexcept profound.APIConnectionError as e:\n    print("The server could not be reached")\n    print(e.__cause__) # an underlying Exception, likely raised within httpx.\nexcept profound.RateLimitError as e:\n    print("A 429 status code was received; we should back off a bit.")\nexcept profound.APIStatusError as e:\n    print("Another non-200-range status code was received")\n    print(e.status_code)\n    print(e.response)\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors are automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors are all retried by default.\n\nYou can use the `max_retries` option to configure or disable retry settings:\n\n```python\nfrom profound import Profound\n\n# Configure the default for all requests:\nclient = Profound(\n    # default is 2\n    max_retries=0,\n)\n\n# Or, configure per-request:\nclient.with_options(max_retries = 5).organizations.categories.list()\n```\n\n### Timeouts\n\nBy default requests time out after 1 minute. You can configure this with a `timeout` option,\nwhich accepts a float or an [`httpx.Timeout`](https://www.python-httpx.org/advanced/timeouts/#fine-tuning-the-configuration) object:\n\n```python\nfrom profound import Profound\n\n# Configure the default for all requests:\nclient = Profound(\n    # 20 seconds (default is 1 minute)\n    timeout=20.0,\n)\n\n# More granular control:\nclient = Profound(\n    timeout=httpx.Timeout(60.0, read=5.0, write=10.0, connect=2.0),\n)\n\n# Override per-request:\nclient.with_options(timeout = 5.0).organizations.categories.list()\n```\n\nOn timeout, an `APITimeoutError` is thrown.\n\nNote that requests that time out are [retried twice by default](#retries).\n\n\n\n## Advanced\n\n### Logging\n\nWe use the standard library [`logging`](https://docs.python.org/3/library/logging.html) module.\n\nYou can enable logging by setting the environment variable `PROFOUND_LOG` to `info`.\n\n```shell\n$ export PROFOUND_LOG=info\n```\n\nOr to `debug` for more verbose logging.\n\n### How to tell whether `None` means `null` or missing\n\nIn an API response, a field may be explicitly `null`, or missing entirely; in either case, its value is `None` in this library. You can differentiate the two cases with `.model_fields_set`:\n\n```py\nif response.my_field is None:\n  if \'my_field\' not in response.model_fields_set:\n    print(\'Got json like {}, without a "my_field" key present at all.\')\n  else:\n    print(\'Got json like {"my_field": null}.\')\n```\n\n### Accessing raw response data (e.g. headers)\n\nThe "raw" Response object can be accessed by prefixing `.with_raw_response.` to any HTTP method call, e.g.,\n\n```py\nfrom profound import Profound\n\nclient = Profound()\nresponse = client.organizations.categories.with_raw_response.list()\nprint(response.headers.get(\'X-My-Header\'))\n\ncategory = response.parse()  # get the object that `organizations.categories.list()` would have returned\nprint(category)\n```\n\nThese methods return an [`APIResponse`](https://github.com/cooper-square-technologies/profound-python-sdk/tree/main/src/profound/_response.py) object.\n\nThe async client returns an [`AsyncAPIResponse`](https://github.com/cooper-square-technologies/profound-python-sdk/tree/main/src/profound/_response.py) with the same structure, the only difference being `await`able methods for reading the response content.\n\n#### `.with_streaming_response`\n\nThe above interface eagerly reads the full response body when you make the request, which may not always be what you want.\n\nTo stream the response body, use `.with_streaming_response` instead, which requires a context manager and only reads the response body once you call `.read()`, `.text()`, `.json()`, `.iter_bytes()`, `.iter_text()`, `.iter_lines()` or `.parse()`. In the async client, these are async methods.\n\n```python\nwith client.organizations.categories.with_streaming_response.list() as response :\n    print(response.headers.get(\'X-My-Header\'))\n\n    for line in response.iter_lines():\n      print(line)\n```\n\nThe context manager is required so that the response will reliably be closed.\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API.\n\nIf you need to access undocumented endpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can make requests using `client.get`, `client.post`, and other\nhttp verbs. Options on the client will be respected (such as retries) when making this request.\n\n```py\nimport httpx\n\nresponse = client.post(\n    "/foo",\n    cast_to=httpx.Response,\n    body={"my_param": True},\n)\n\nprint(response.headers.get("x-foo"))\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you can access the extra fields like `response.unknown_prop`. You\ncan also get all the extra fields on the Pydantic model as a dict with\n[`response.model_extra`](https://docs.pydantic.dev/latest/api/base_model/#pydantic.BaseModel.model_extra).\n\n### Configuring the HTTP client\n\nYou can directly override the [httpx client](https://www.python-httpx.org/api/#client) to customize it for your use case, including:\n\n- Support for [proxies](https://www.python-httpx.org/advanced/proxies/)\n- Custom [transports](https://www.python-httpx.org/advanced/transports/)\n- Additional [advanced](https://www.python-httpx.org/advanced/clients/) functionality\n\n```python\nimport httpx\nfrom profound import Profound, DefaultHttpxClient\n\nclient = Profound(\n    # Or use the `PROFOUND_BASE_URL` env var\n    base_url="http://my.test.server.example.com:8083",\n    http_client=DefaultHttpxClient(proxy="http://my.test.proxy.example.com", transport=httpx.HTTPTransport(local_address="0.0.0.0")),\n)\n```\n\nYou can also customize the client on a per-request basis by using `with_options()`:\n\n```python\nclient.with_options(http_client=DefaultHttpxClient(...))\n```\n\n### Managing HTTP resources\n\nBy default the library closes underlying HTTP connections whenever the client is [garbage collected](https://docs.python.org/3/reference/datamodel.html#object.__del__). You can manually close the client using the `.close()` method if desired, or with a context manager that closes when exiting.\n\n```py\nfrom profound import Profound\n\nwith Profound() as client:\n  # make requests here\n  ...\n\n# HTTP client is now closed\n```\n\n## Versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/cooper-square-technologies/profound-python-sdk/issues) with questions, bugs, or suggestions.\n\n### Determining the installed version\n\nIf you\'ve upgraded to the latest version but aren\'t seeing any new features you were expecting then your python environment is likely still using an older version.\n\nYou can determine the version that is being used at runtime with:\n\n```py\nimport profound\nprint(profound.__version__)\n```\n\n## Requirements\n\nPython 3.9 or higher.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'typescript',
    content:
      "# Profound TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/profoundai.svg?label=npm%20(stable))](https://npmjs.org/package/profoundai) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/profoundai)\n\nThis library provides convenient access to the Profound REST API from server-side TypeScript or JavaScript.\n\n\n\nThe REST API documentation can be found on [docs.tryprofound.com](https://docs.tryprofound.com). The full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Profound MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=profound-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsInByb2ZvdW5kLW1jcCJdLCJlbnYiOnsiUFJPRk9VTkRfQVBJX0tFWSI6Ik15IEFQSSBLZXkifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22profound-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22profound-mcp%22%5D%2C%22env%22%3A%7B%22PROFOUND_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install profoundai\n```\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport Profound from 'profoundai';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst namedResources = await client.organizations.categories.list();\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport Profound from 'profoundai';\n\nconst client = new Profound({\n  apiKey: process.env['PROFOUND_API_KEY'], // This is the default and can be omitted\n});\n\nconst namedResources: Profound.Organizations.CategoryListResponse =\n  await client.organizations.categories.list();\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst namedResources = await client.organizations.categories.list().catch(async (err) => {\n  if (err instanceof Profound.APIError) {\n    console.log(err.status); // 400\n    console.log(err.name); // BadRequestError\n    console.log(err.headers); // {server: 'nginx', ...}\n  } else {\n    throw err;\n  }\n});\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new Profound({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.organizations.categories.list({\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new Profound({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.organizations.categories.list({\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new Profound();\n\nconst response = await client.organizations.categories.list().asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: namedResources, response: raw } = await client.organizations.categories\n  .list()\n  .withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(namedResources);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `PROFOUND_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport Profound from 'profoundai';\n\nconst client = new Profound({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport Profound from 'profoundai';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new Profound({\n  logger: logger.child({ name: 'Profound' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.organizations.categories.list({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport Profound from 'profoundai';\nimport fetch from 'my-fetch';\n\nconst client = new Profound({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport Profound from 'profoundai';\n\nconst client = new Profound({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport Profound from 'profoundai';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new Profound({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport Profound from 'profoundai';\n\nconst client = new Profound({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport Profound from 'npm:profoundai';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new Profound({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/cooper-square-technologies/profound-typescript-sdk/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
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

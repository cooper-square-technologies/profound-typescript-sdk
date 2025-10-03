// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'profound-mcp/filtering';
import { Metadata, asTextContentResult } from 'profound-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Profound from 'profoundai';

export const metadata: Metadata = {
  resource: 'organizations.categories',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/org/categories/{category_id}/prompts',
  operationId: 'get_category_prompts_v1_org_categories__category_id__prompts_get',
};

export const tool: Tool = {
  name: 'prompts_organizations_categories',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Category Prompts\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'CategoryPromptsResponse',\n  properties: {\n    data: {\n      type: 'array',\n      title: 'Data',\n      items: {\n        type: 'object',\n        title: 'Prompt',\n        properties: {\n          id: {\n            type: 'string',\n            title: 'Id'\n          },\n          created_at: {\n            type: 'string',\n            title: 'Created At',\n            format: 'date-time'\n          },\n          platforms: {\n            type: 'array',\n            title: 'Platforms',\n            items: {\n              $ref: '#/$defs/org_item'\n            }\n          },\n          prompt: {\n            type: 'string',\n            title: 'Prompt'\n          },\n          prompt_type: {\n            type: 'string',\n            title: 'Prompt Type'\n          },\n          regions: {\n            type: 'array',\n            title: 'Regions',\n            items: {\n              $ref: '#/$defs/org_item'\n            }\n          },\n          topic: {\n            $ref: '#/$defs/org_item'\n          },\n          tags: {\n            type: 'array',\n            title: 'Tags',\n            items: {\n              $ref: '#/$defs/org_item'\n            }\n          }\n        },\n        required: [          'id',\n          'created_at',\n          'platforms',\n          'prompt',\n          'prompt_type',\n          'regions',\n          'topic'\n        ]\n      }\n    }\n  },\n  required: [    'data'\n  ],\n  $defs: {\n    org_item: {\n      type: 'object',\n      title: 'OrgItem',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        name: {\n          type: 'string',\n          title: 'Name'\n        }\n      },\n      required: [        'id',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      category_id: {
        type: 'string',
        title: 'Category Id',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['category_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Profound, args: Record<string, unknown> | undefined) => {
  const { category_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.organizations.categories.prompts(category_id)),
  );
};

export default { metadata, tool, handler };

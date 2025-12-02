// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'profound-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'profound-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Profound from 'profoundai';

export const metadata: Metadata = {
  resource: 'organizations.categories',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/org/categories/{category_id}/assets',
  operationId: 'get_category_assets_v1_org_categories__category_id__assets_get',
};

export const tool: Tool = {
  name: 'assets_organizations_categories',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Category Assets\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/category_assets_response',\n  $defs: {\n    category_assets_response: {\n      type: 'array',\n      title: 'Response Get Category Assets V1 Org Categories  Category Id  Assets Get',\n      items: {\n        type: 'object',\n        title: 'CategoryAsset',\n        properties: {\n          id: {\n            type: 'string',\n            title: 'Id'\n          },\n          created_at: {\n            type: 'string',\n            title: 'Created At',\n            format: 'date-time'\n          },\n          is_owned: {\n            type: 'boolean',\n            title: 'Is Owned'\n          },\n          name: {\n            type: 'string',\n            title: 'Name'\n          },\n          website: {\n            type: 'string',\n            title: 'Website'\n          },\n          alternate_domains: {\n            type: 'array',\n            title: 'Alternate Domains',\n            items: {\n              type: 'string'\n            }\n          }\n        },\n        required: [          'id',\n          'created_at',\n          'is_owned',\n          'name',\n          'website'\n        ]\n      }\n    }\n  }\n}\n```",
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
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.organizations.categories.assets(category_id)),
    );
  } catch (error) {
    if (error instanceof Profound.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };

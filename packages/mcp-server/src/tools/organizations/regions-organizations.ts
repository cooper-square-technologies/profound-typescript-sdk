// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'profound-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'profound-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Profound from 'profoundai';

export const metadata: Metadata = {
  resource: 'organizations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/org/regions',
  operationId: 'get_regions_v1_org_regions_get',
};

export const tool: Tool = {
  name: 'regions_organizations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet the organization regions.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/organization_regions_response',\n  $defs: {\n    organization_regions_response: {\n      type: 'array',\n      title: 'Response Get Regions V1 Org Regions Get',\n      items: {\n        $ref: '#/$defs/org_item'\n      }\n    },\n    org_item: {\n      type: 'object',\n      title: 'OrgItem',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        name: {\n          type: 'string',\n          title: 'Name'\n        }\n      },\n      required: [        'id',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Profound, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.organizations.regions()));
  } catch (error) {
    if (error instanceof Profound.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };

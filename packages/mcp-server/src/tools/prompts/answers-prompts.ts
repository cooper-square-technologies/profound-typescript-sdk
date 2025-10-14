// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'profound-mcp/filtering';
import { Metadata, asTextContentResult } from 'profound-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Profound from 'profoundai';

export const metadata: Metadata = {
  resource: 'prompts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/prompts/answers',
  operationId: 'get_answers_v1_prompts_answers_post',
};

export const tool: Tool = {
  name: 'answers_prompts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet the answers for the prompts.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/prompt_answers_response',\n  $defs: {\n    prompt_answers_response: {\n      type: 'object',\n      title: 'AnswersResponse',\n      description: 'Response for the answers endpoint.',\n      properties: {\n        data: {\n          type: 'array',\n          title: 'Data',\n          items: {\n            type: 'object',\n            title: 'AnswersRawData',\n            description: 'Raw data for the answers endpoint.',\n            properties: {\n              asset: {\n                type: 'string',\n                title: 'Asset'\n              },\n              citations: {\n                type: 'array',\n                title: 'Citations',\n                items: {\n                  type: 'string'\n                }\n              },\n              created_at: {\n                type: 'string',\n                title: 'Created At',\n                format: 'date-time'\n              },\n              mentions: {\n                type: 'array',\n                title: 'Mentions',\n                items: {\n                  type: 'string'\n                }\n              },\n              model: {\n                type: 'string',\n                title: 'Model'\n              },\n              prompt: {\n                type: 'string',\n                title: 'Prompt'\n              },\n              prompt_id: {\n                type: 'string',\n                title: 'Prompt Id'\n              },\n              prompt_type: {\n                type: 'string',\n                title: 'Prompt Type'\n              },\n              region: {\n                type: 'string',\n                title: 'Region'\n              },\n              response: {\n                type: 'string',\n                title: 'Response'\n              },\n              run_id: {\n                type: 'string',\n                title: 'Run Id'\n              },\n              search_queries: {\n                type: 'array',\n                title: 'Search Queries',\n                items: {\n                  type: 'string'\n                }\n              },\n              tags: {\n                type: 'array',\n                title: 'Tags',\n                items: {\n                  type: 'string'\n                }\n              },\n              themes: {\n                type: 'array',\n                title: 'Themes',\n                items: {\n                  type: 'string'\n                }\n              },\n              topic: {\n                type: 'string',\n                title: 'Topic'\n              }\n            }\n          }\n        },\n        info: {\n          type: 'object',\n          title: 'Info',\n          additionalProperties: true\n        }\n      },\n      required: [        'data',\n        'info'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      category_id: {
        type: 'string',
        title: 'Category Id',
      },
      end_date: {
        type: 'string',
        title: 'End Date',
        format: 'date-time',
      },
      start_date: {
        type: 'string',
        title: 'Start Date',
        format: 'date-time',
      },
      filters: {
        type: 'array',
        title: 'Filters',
        items: {
          type: 'object',
          title: "Filter[Literal['region', 'topic', 'model', 'prompt_type', 'prompt', 'tag']]",
          properties: {
            field: {
              type: 'string',
              title: 'Field',
              enum: ['region', 'topic', 'model', 'prompt_type', 'prompt', 'tag'],
            },
            operator: {
              type: 'string',
              title: 'Operator',
              enum: [
                'is',
                'not_is',
                'in',
                'not_in',
                'contains',
                'not_contains',
                'contains_case_insensitive',
                'not_contains_case_insensitive',
                'matches',
              ],
            },
            value: {
              anyOf: [
                {
                  type: 'string',
                  title: 'FilterStringValue',
                },
                {
                  type: 'array',
                  title: 'FilterStringListValue',
                  items: {
                    type: 'string',
                  },
                },
                {
                  type: 'integer',
                  title: 'FilterIntegerValue',
                },
                {
                  type: 'array',
                  title: 'FilterIntegerListValue',
                  items: {
                    type: 'integer',
                  },
                },
              ],
              title: 'Value',
              description:
                'Value for the filter. Can be a single value or a list of depending on the operator.',
            },
          },
          required: ['field', 'operator', 'value'],
        },
      },
      include: {
        type: 'object',
        title: 'EnabledFieldsResponse',
        properties: {
          asset: {
            type: 'boolean',
            title: 'Asset',
          },
          citations: {
            type: 'boolean',
            title: 'Citations',
          },
          created_at: {
            type: 'boolean',
            title: 'Created At',
          },
          mentions: {
            type: 'boolean',
            title: 'Mentions',
          },
          model: {
            type: 'boolean',
            title: 'Model',
          },
          prompt: {
            type: 'boolean',
            title: 'Prompt',
          },
          prompt_id: {
            type: 'boolean',
            title: 'Prompt Id',
          },
          prompt_type: {
            type: 'boolean',
            title: 'Prompt Type',
          },
          region: {
            type: 'boolean',
            title: 'Region',
          },
          response: {
            type: 'boolean',
            title: 'Response',
          },
          run_id: {
            type: 'boolean',
            title: 'Run Id',
          },
          search_queries: {
            type: 'boolean',
            title: 'Search Queries',
          },
          tags: {
            type: 'boolean',
            title: 'Tags',
          },
          themes: {
            type: 'boolean',
            title: 'Themes',
          },
          topic: {
            type: 'boolean',
            title: 'Topic',
          },
        },
      },
      pagination: {
        $ref: '#/$defs/pagination',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['category_id', 'end_date', 'start_date'],
    $defs: {
      pagination: {
        type: 'object',
        title: 'Pagination',
        description: 'Report pagination model.',
        properties: {
          limit: {
            type: 'integer',
            title: 'Limit',
            description: 'Maximum number of results to return. Default is 10,000, maximum is 50,000.',
          },
          offset: {
            type: 'integer',
            title: 'Offset',
            description: 'Offset for the results. Used for pagination.',
          },
        },
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Profound, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.prompts.answers(body)));
};

export default { metadata, tool, handler };

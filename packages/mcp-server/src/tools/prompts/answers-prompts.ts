// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'profound-mcp/tools/types';

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
  description: 'Get the answers for the prompts.',
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
        description: 'List of filters to apply to the answers report.',
        items: {
          anyOf: [
            {
              type: 'object',
              title: 'RegionIdFilter',
              properties: {
                field: {
                  type: 'string',
                  title: 'Field',
                  description: '- `region` - Deprecated',
                  enum: ['region_id', 'region'],
                },
                operator: {
                  type: 'string',
                  title: 'Operator',
                  enum: ['is', 'not_is', 'in', 'not_in'],
                },
                value: {
                  anyOf: [
                    {
                      type: 'string',
                    },
                    {
                      type: 'array',
                      items: {
                        type: 'string',
                      },
                    },
                  ],
                  title: 'Value',
                },
              },
              required: ['field', 'operator', 'value'],
            },
            {
              type: 'object',
              title: 'ModelIdFilter',
              properties: {
                field: {
                  type: 'string',
                  title: 'Field',
                  description: '- `model` - Deprecated',
                  enum: ['model_id', 'model'],
                },
                operator: {
                  type: 'string',
                  title: 'Operator',
                  enum: ['is', 'not_is', 'in', 'not_in'],
                },
                value: {
                  anyOf: [
                    {
                      type: 'string',
                    },
                    {
                      type: 'array',
                      items: {
                        type: 'string',
                      },
                    },
                  ],
                  title: 'Value',
                },
              },
              required: ['field', 'operator', 'value'],
            },
            {
              type: 'object',
              title: 'TagIdFilter',
              properties: {
                field: {
                  type: 'string',
                  title: 'Field',
                  description: '- `tag` - Deprecated',
                  enum: ['tag_id', 'tag'],
                },
                operator: {
                  type: 'string',
                  title: 'Operator',
                  enum: ['is', 'not_is', 'in', 'not_in'],
                },
                value: {
                  anyOf: [
                    {
                      type: 'string',
                    },
                    {
                      type: 'array',
                      items: {
                        type: 'string',
                      },
                    },
                  ],
                  title: 'Value',
                },
              },
              required: ['field', 'operator', 'value'],
            },
            {
              type: 'object',
              title: 'PromptTypeFilter',
              description: 'Filter by prompt type (visibility or sentiment)',
              properties: {
                field: {
                  type: 'string',
                  title: 'Field',
                  enum: ['prompt_type'],
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
                    'matches',
                    'contains_case_insensitive',
                    'not_contains_case_insensitive',
                  ],
                },
                value: {
                  anyOf: [
                    {
                      type: 'string',
                      enum: ['visibility', 'sentiment'],
                    },
                    {
                      type: 'array',
                      items: {
                        type: 'string',
                        enum: ['visibility', 'sentiment'],
                      },
                    },
                  ],
                  title: 'Value',
                },
              },
              required: ['field', 'operator', 'value'],
            },
            {
              type: 'object',
              title: 'PromptFilter',
              description: 'Filter by prompt text',
              properties: {
                field: {
                  type: 'string',
                  title: 'Field',
                  enum: ['prompt'],
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
                    'matches',
                    'contains_case_insensitive',
                    'not_contains_case_insensitive',
                  ],
                },
                value: {
                  anyOf: [
                    {
                      type: 'string',
                    },
                    {
                      type: 'array',
                      items: {
                        type: 'string',
                      },
                    },
                  ],
                  title: 'Value',
                },
              },
              required: ['field', 'operator', 'value'],
            },
            {
              type: 'object',
              title: 'PersonaIdFilter',
              properties: {
                field: {
                  type: 'string',
                  title: 'Field',
                  enum: ['persona_id'],
                },
                operator: {
                  type: 'string',
                  title: 'Operator',
                  enum: ['is', 'not_is', 'in', 'not_in'],
                },
                value: {
                  anyOf: [
                    {
                      type: 'string',
                    },
                    {
                      type: 'array',
                      items: {
                        type: 'string',
                      },
                    },
                  ],
                  title: 'Value',
                },
              },
              required: ['field', 'operator', 'value'],
            },
          ],
          description: 'Filter by prompt type (visibility or sentiment)',
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
          model_id: {
            type: 'boolean',
            title: 'Model Id',
          },
          persona: {
            type: 'boolean',
            title: 'Persona',
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
  const body = args as any;
  try {
    return asTextContentResult(await client.prompts.answers(body));
  } catch (error) {
    if (error instanceof Profound.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };

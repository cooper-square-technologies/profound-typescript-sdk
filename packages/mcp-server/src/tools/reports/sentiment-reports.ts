// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'profound-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Profound from 'profoundai';

export const metadata: Metadata = {
  resource: 'reports',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/reports/sentiment',
  operationId: 'query_sentiment_v1_reports_sentiment_post',
};

export const tool: Tool = {
  name: 'sentiment_reports',
  description: 'Get citations for a given category.',
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
        description:
          'End date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.',
        format: 'date-time',
      },
      metrics: {
        type: 'array',
        title: 'Metrics',
        items: {
          type: 'string',
          enum: ['positive', 'negative', 'occurrences'],
        },
      },
      start_date: {
        type: 'string',
        title: 'Start Date',
        description:
          'Start date for the report. Accepts formats: YYYY-MM-DD, YYYY-MM-DD HH:MM, or full ISO timestamp.',
        format: 'date-time',
      },
      date_interval: {
        type: 'string',
        title: 'Date Interval',
        description: 'Date interval for the report. (only used with date dimension)',
        enum: ['day', 'week', 'month', 'year'],
      },
      dimensions: {
        type: 'array',
        title: 'Dimensions',
        description: 'Dimensions to group the report by.',
        items: {
          type: 'string',
          enum: [
            'theme',
            'date',
            'region',
            'topic',
            'model',
            'asset_id',
            'asset_name',
            'tag',
            'prompt',
            'sentiment_type',
          ],
        },
      },
      filters: {
        type: 'array',
        title: 'Filters',
        description: 'List of filters to apply to the sentiment report.',
        items: {
          anyOf: [
            {
              type: 'object',
              title: 'AssetNameFilter',
              description: 'Filter by asset name',
              properties: {
                field: {
                  type: 'string',
                  title: 'Field',
                  enum: ['asset_name'],
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
              title: 'ThemeFilter',
              description: 'Filter by theme',
              properties: {
                field: {
                  type: 'string',
                  title: 'Field',
                  enum: ['theme'],
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
              title: 'TopicIdFilter',
              properties: {
                field: {
                  type: 'string',
                  title: 'Field',
                  description: '- `topic` - Deprecated',
                  enum: ['topic_id', 'topic'],
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
          ],
          description: 'Filter by asset name',
        },
      },
      order_by: {
        type: 'object',
        title: 'Order By',
        description:
          "\nCustom ordering of the report results.\n\nThe order is a record of key-value pairs where:\n- key is the field to order by, which can be a metric or dimension\n- value is the direction of the order, either 'asc' for ascending or 'desc' for descending.\n\nWhen not specified, the default order is the first metric in the query descending.\n        ",
        additionalProperties: true,
      },
      pagination: {
        $ref: '#/$defs/pagination',
      },
    },
    required: ['category_id', 'end_date', 'metrics', 'start_date'],
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
    return asTextContentResult(await client.reports.sentiment(body));
  } catch (error) {
    if (error instanceof Profound.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };

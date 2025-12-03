// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'profound-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Profound from 'profoundai';

export const metadata: Metadata = {
  resource: 'logs.raw',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/logs/raw/bots',
  operationId: 'get_bots_v1_logs_raw_bots_post',
};

export const tool: Tool = {
  name: 'bots_logs_raw',
  description: 'Get identified bot logs with filters',
  inputSchema: {
    type: 'object',
    properties: {
      domain: {
        type: 'string',
        title: 'Domain',
        description: 'Domain to query logs for.',
      },
      metrics: {
        type: 'array',
        title: 'Metrics',
        items: {
          type: 'string',
          enum: ['count'],
        },
      },
      start_date: {
        type: 'string',
        title: 'Start Date',
        description:
          'Start date for logs. Accepts: YYYY-MM-DD, YYYY-MM-DD HH:MM, YYYY-MM-DD HH:MM:SS, or full ISO timestamp.',
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
            'method',
            'path',
            'status_code',
            'ip',
            'user_agent',
            'referer',
            'query_params',
            'bot_name',
            'bot_provider',
            'bot_types',
          ],
        },
      },
      end_date: {
        type: 'string',
        title: 'End Date',
        description: 'End date for logs. Accepts same formats as start_date. Defaults to now if omitted.',
        format: 'date-time',
      },
      filters: {
        type: 'array',
        title: 'Filters',
        description: 'List of filters to apply to the bots logs query.',
        items: {
          anyOf: [
            {
              type: 'object',
              title: 'BotNameFilter',
              description: 'Filter by bot name',
              properties: {
                field: {
                  type: 'string',
                  title: 'Field',
                  enum: ['bot_name'],
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
              title: 'BotProviderFilter',
              description: 'Filter by bot provider',
              properties: {
                field: {
                  type: 'string',
                  title: 'Field',
                  enum: ['bot_provider'],
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
              title: 'BotTypesFilter',
              description: 'Filter by bot types (ai_assistant, ai_training, or index)',
              properties: {
                field: {
                  type: 'string',
                  title: 'Field',
                  enum: ['bot_types'],
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
                      enum: ['ai_assistant', 'ai_training', 'index'],
                    },
                    {
                      type: 'array',
                      items: {
                        type: 'string',
                        enum: ['ai_assistant', 'ai_training', 'index'],
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
              title: 'MethodFilter',
              description: 'Filter by HTTP method',
              properties: {
                field: {
                  type: 'string',
                  title: 'Field',
                  enum: ['method'],
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
              title: 'PathFilter',
              description: 'Filter by request path',
              properties: {
                field: {
                  type: 'string',
                  title: 'Field',
                  enum: ['path'],
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
              title: 'StatusCodeFilter',
              description: 'Filter by HTTP status code',
              properties: {
                field: {
                  type: 'string',
                  title: 'Field',
                  enum: ['status_code'],
                },
                operator: {
                  type: 'string',
                  title: 'Operator',
                  enum: ['is', 'not_is', 'in', 'not_in'],
                },
                value: {
                  anyOf: [
                    {
                      type: 'integer',
                    },
                    {
                      type: 'array',
                      items: {
                        type: 'integer',
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
              title: 'IpFilter',
              description: 'Filter by IP address',
              properties: {
                field: {
                  type: 'string',
                  title: 'Field',
                  enum: ['ip'],
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
              title: 'UserAgentFilter',
              description: 'Filter by user agent',
              properties: {
                field: {
                  type: 'string',
                  title: 'Field',
                  enum: ['user_agent'],
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
              title: 'RefererFilter',
              description: 'Filter by referer',
              properties: {
                field: {
                  type: 'string',
                  title: 'Field',
                  enum: ['referer'],
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
              title: 'QueryParamsFilter',
              description: 'Filter by query parameters',
              properties: {
                field: {
                  type: 'string',
                  title: 'Field',
                  enum: ['query_params'],
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
          description: 'Filter by bot name',
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
    required: ['domain', 'metrics', 'start_date'],
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
    return asTextContentResult(await client.logs.raw.bots(body));
  } catch (error) {
    if (error instanceof Profound.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };

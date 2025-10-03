// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'profound-mcp/filtering';
import { Metadata, asTextContentResult } from 'profound-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Profound from 'profoundai';

export const metadata: Metadata = {
  resource: 'logs.raw',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/logs/raw',
  operationId: 'get_logs_v1_logs_raw_post',
};

export const tool: Tool = {
  name: 'logs_logs_raw',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet all logs with filters\n\n# Response Schema\n```json\n{\n  anyOf: [    {\n      type: 'array',\n      title: 'LogVisitList',\n      items: {\n        type: 'object',\n        title: 'LogVisit',\n        description: 'DB Model for a log visit.',\n        properties: {\n          host: {\n            type: 'string',\n            title: 'Host'\n          },\n          ip: {\n            type: 'string',\n            title: 'Ip'\n          },\n          method: {\n            type: 'string',\n            title: 'Method'\n          },\n          org_id: {\n            type: 'string',\n            title: 'Org Id'\n          },\n          path: {\n            type: 'string',\n            title: 'Path'\n          },\n          status_code: {\n            type: 'integer',\n            title: 'Status Code'\n          },\n          timestamp: {\n            type: 'string',\n            title: 'Timestamp',\n            format: 'date-time'\n          },\n          user_agent: {\n            type: 'string',\n            title: 'User Agent'\n          },\n          bytes_sent: {\n            type: 'integer',\n            title: 'Bytes Sent'\n          },\n          duration_ms: {\n            type: 'integer',\n            title: 'Duration Ms'\n          },\n          query_params: {\n            type: 'object',\n            title: 'Query Params',\n            additionalProperties: true\n          },\n          referer: {\n            type: 'string',\n            title: 'Referer'\n          }\n        },\n        required: [          'host',\n          'ip',\n          'method',\n          'org_id',\n          'path',\n          'status_code',\n          'timestamp',\n          'user_agent'\n        ]\n      }\n    },\n    {\n      $ref: '#/$defs/response'\n    }\n  ],\n  title: 'Response Get Logs V1 Logs Raw Post',\n  description: 'Base response model for reports.',\n  $defs: {\n    response: {\n      type: 'object',\n      title: 'Response',\n      description: 'Base response model for reports.',\n      properties: {\n        data: {\n          type: 'array',\n          title: 'Data',\n          items: {\n            $ref: '#/$defs/result'\n          }\n        },\n        info: {\n          $ref: '#/$defs/info'\n        }\n      },\n      required: [        'data',\n        'info'\n      ]\n    },\n    result: {\n      type: 'object',\n      title: 'Result',\n      description: 'Base model for report results.',\n      properties: {\n        dimensions: {\n          type: 'array',\n          title: 'Dimensions',\n          items: {\n            type: 'string'\n          }\n        },\n        metrics: {\n          type: 'array',\n          title: 'Metrics',\n          items: {\n            type: 'number'\n          }\n        }\n      },\n      required: [        'dimensions',\n        'metrics'\n      ]\n    },\n    info: {\n      type: 'object',\n      title: 'Info',\n      description: 'Base model for report information.',\n      properties: {\n        total_rows: {\n          type: 'integer',\n          title: 'Total Rows'\n        },\n        query: {\n          type: 'object',\n          title: 'Query',\n          additionalProperties: true\n        }\n      },\n      required: [        'total_rows'\n      ]\n    }\n  }\n}\n```",
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
            'timestamp',
            'method',
            'host',
            'path',
            'status_code',
            'ip',
            'user_agent',
            'referer',
            'bytes_sent',
            'duration_ms',
            'query_params',
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
        description: 'List of filters to apply to the report. Each filter has an operator, field, and value.',
        items: {
          type: 'object',
          title:
            "Filter[Literal['method', 'path', 'status_code', 'ip', 'user_agent', 'referer', 'query_params']]",
          properties: {
            field: {
              type: 'string',
              title: 'Field',
              enum: ['method', 'path', 'status_code', 'ip', 'user_agent', 'referer', 'query_params'],
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
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
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.logs.raw.logs(body)));
};

export default { metadata, tool, handler };

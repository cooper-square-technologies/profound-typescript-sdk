// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'profound-mcp/filtering';
import { Metadata, asTextContentResult } from 'profound-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Profound from 'profound';

export const metadata: Metadata = {
  resource: 'reports',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/reports/visibility',
  operationId: 'query_visibility_v1_reports_visibility_post',
};

export const tool: Tool = {
  name: 'visibility_reports',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nQuery visibility report.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/response',\n  $defs: {\n    response: {\n      type: 'object',\n      title: 'Response',\n      description: 'Base response model for reports.',\n      properties: {\n        data: {\n          type: 'array',\n          title: 'Data',\n          items: {\n            $ref: '#/$defs/result'\n          }\n        },\n        info: {\n          $ref: '#/$defs/info'\n        }\n      },\n      required: [        'data',\n        'info'\n      ]\n    },\n    result: {\n      type: 'object',\n      title: 'Result',\n      description: 'Base model for report results.',\n      properties: {\n        dimensions: {\n          type: 'array',\n          title: 'Dimensions',\n          items: {\n            type: 'string'\n          }\n        },\n        metrics: {\n          type: 'array',\n          title: 'Metrics',\n          items: {\n            type: 'number'\n          }\n        }\n      },\n      required: [        'dimensions',\n        'metrics'\n      ]\n    },\n    info: {\n      type: 'object',\n      title: 'Info',\n      description: 'Base model for report information.',\n      properties: {\n        total_rows: {\n          type: 'integer',\n          title: 'Total Rows'\n        },\n        query: {\n          type: 'object',\n          title: 'Query',\n          additionalProperties: true\n        }\n      },\n      required: [        'total_rows'\n      ]\n    }\n  }\n}\n```",
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
          enum: ['share_of_voice', 'mentions_count', 'visibility_score'],
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
          enum: ['date', 'region', 'topic', 'model', 'asset_name', 'prompt', 'tag'],
        },
      },
      filters: {
        type: 'array',
        title: 'Filters',
        description: 'List of filters to apply to the report. Each filter has an operator, field, and value.',
        items: {
          type: 'object',
          title: "Filter[Literal['region', 'topic', 'model', 'asset_name', 'prompt', 'tag']]",
          properties: {
            field: {
              type: 'string',
              title: 'Field',
              enum: ['region', 'topic', 'model', 'asset_name', 'prompt', 'tag'],
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
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.reports.visibility(body)));
};

export default { metadata, tool, handler };

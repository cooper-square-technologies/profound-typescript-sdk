---
name: profound-typescript-sdk
description: "TypeScript SDK for profound API. Use when writing TypeScript code that calls profound API with the @profoundai/client package: installing it, constructing and authenticating the client, and calling API operations."
---

# profound TypeScript SDK

Generated TypeScript client for profound API, published as `@profoundai/client`. Use the generated client instead of hand-writing HTTP requests.

## Install

```sh
npm install @profoundai/client
```

## Client setup and authentication

```ts
import Profound from '@profoundai/client';

const client = new Profound({
  apiKey: process.env['PROFOUND_API_KEY'], // defaults to the PROFOUND_API_KEY env var
  environment: 'production',
});
```

Provide credentials using the options below. Environment variables are read automatically when the target runtime supports them:

- `accessToken` (env: `PROFOUND_ACCESS_TOKEN`) — Credential for the BearerAuth scheme.
- `apiKey` (env: `PROFOUND_API_KEY`) — Credential for the APIKeyHeader scheme.

## Calling operations

```ts
import Profound from '@profoundai/client';

const client = new Profound({
  apiKey: process.env['PROFOUND_API_KEY'], // defaults to the PROFOUND_API_KEY env var
  environment: 'production',
});

const category = await client.organizations.categories.list();

console.log(category);
```

Method names, parameter shapes, and response types are generated from the API description — do not guess them. Look up the exact call signature in [api.md](./api.md) before writing a call.

## Streaming

Streaming endpoints return an iterator that yields results as the server emits them.

```ts
const stream = await client.prompts.streamAnswersV2({
  category_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  start_date: '',
  end_date: '',
});

for await (const event of stream) {
  console.log(event);
}
```

## Error handling

Non-success responses throw generated API errors. Error objects expose status, headers, response body, and request metadata where the target runtime supports it.

```ts
import { APIError } from '@profoundai/client';

try {
  const category = await client.organizations.categories.list();
} catch (err) {
  if (err instanceof APIError) {
    console.log(err.status, err.name, err.headers);
  }
  throw err;
}
```

## Requirements

- Node.js 20+, a modern browser, or any runtime with `fetch` support

## Reference files

- [README.md](./README.md) — full feature tour: client options, request options, retries and timeouts, logging.
- [api.md](./api.md) — complete catalogue of every operation with request and response types.

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { ClientOptions } from '@profoundai/client';
import cookieParser from 'cookie-parser';
import express from 'express';
import pino from 'pino';
import pinoHttp from 'pino-http';
import { getStainlessApiKey, parseClientAuthHeaders } from './auth';
import { getLogger } from './logger';
import { McpOptions } from './options';
import { initMcpServer, newMcpServer } from './server';

const newServer = async ({
  clientOptions,
  mcpOptions,
  req,
  res,
}: {
  clientOptions: ClientOptions;
  mcpOptions: McpOptions;
  req: express.Request;
  res: express.Response;
}): Promise<McpServer | null> => {
  const stainlessApiKey = getStainlessApiKey(req, mcpOptions);
  const customInstructionsPath = mcpOptions.customInstructionsPath;
  const server = await newMcpServer({ stainlessApiKey, customInstructionsPath });

  // parseClientAuthHeaders throws if the Authorization header uses an unsupported
  // scheme, or (when the second arg is true) if the header is missing entirely.
  // On error, we return 401 with WWW-Authenticate pointing to the OAuth metadata
  // endpoint so clients know how to authenticate (RFC 9728).
  let authOptions: Partial<ClientOptions>;
  try {
    authOptions = parseClientAuthHeaders(req, true);
  } catch (error) {
    res.set(
      'WWW-Authenticate',
      `Bearer realm="mcp", resource_metadata="${mcpOptions.serverURL}/.well-known/oauth-authorization-resource"`,
    );
    res.status(401).json({
      jsonrpc: '2.0',
      error: {
        code: -32000,
        message: `Unauthorized: ${error instanceof Error ? error.message : error}`,
      },
    });
    return null;
  }

  let upstreamClientEnvs: Record<string, string> | undefined;
  const clientEnvsHeader = req.headers['x-stainless-mcp-client-envs'];
  if (typeof clientEnvsHeader === 'string') {
    try {
      const parsed = JSON.parse(clientEnvsHeader);
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
        upstreamClientEnvs = parsed;
      }
    } catch {
      // Ignore malformed header
    }
  }

  // Parse x-stainless-mcp-client-permissions header to override permission options
  //
  // Note: Permissions are best-effort and intended to prevent clients from doing unexpected things;
  // they're not a hard security boundary, so we allow arbitrary, client-driven overrides.
  //
  // See the Stainless MCP documentation for more details.
  let effectiveMcpOptions = mcpOptions;
  const clientPermissionsHeader = req.headers['x-stainless-mcp-client-permissions'];
  if (typeof clientPermissionsHeader === 'string') {
    try {
      const parsed = JSON.parse(clientPermissionsHeader);
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
        effectiveMcpOptions = {
          ...mcpOptions,
          ...(typeof parsed.allow_http_gets === 'boolean' && { codeAllowHttpGets: parsed.allow_http_gets }),
          ...(Array.isArray(parsed.allowed_methods) && { codeAllowedMethods: parsed.allowed_methods }),
          ...(Array.isArray(parsed.blocked_methods) && { codeBlockedMethods: parsed.blocked_methods }),
        };
        getLogger().info(
          { clientPermissions: parsed },
          'Overriding code execution permissions from x-stainless-mcp-client-permissions header',
        );
      }
    } catch (error) {
      getLogger().warn({ error }, 'Failed to parse x-stainless-mcp-client-permissions header');
    }
  }

  const mcpClientInfo =
    typeof req.body?.params?.clientInfo?.name === 'string' ?
      { name: req.body.params.clientInfo.name, version: String(req.body.params.clientInfo.version ?? '') }
    : undefined;

  await initMcpServer({
    server: server,
    mcpOptions: effectiveMcpOptions,
    clientOptions: {
      ...clientOptions,
      ...authOptions,
    },
    stainlessApiKey: stainlessApiKey,
    upstreamClientEnvs,
    mcpSessionId: (req as any).mcpSessionId,
    mcpClientInfo,
  });

  if (mcpClientInfo) {
    getLogger().info({ mcpSessionId: (req as any).mcpSessionId, mcpClientInfo }, 'MCP client connected');
  }

  return server;
};

const post =
  (options: { clientOptions: ClientOptions; mcpOptions: McpOptions }) =>
  async (req: express.Request, res: express.Response) => {
    const server = await newServer({ ...options, req, res });
    // If we return null, we already set the authorization error.
    if (server === null) return;
    const transport = new StreamableHTTPServerTransport();
    await server.connect(transport as any);
    await transport.handleRequest(req, res, req.body);
  };

const get = async (req: express.Request, res: express.Response) => {
  res.status(405).json({
    jsonrpc: '2.0',
    error: {
      code: -32000,
      message: 'Method not supported',
    },
  });
};

const del = async (req: express.Request, res: express.Response) => {
  res.status(405).json({
    jsonrpc: '2.0',
    error: {
      code: -32000,
      message: 'Method not supported',
    },
  });
};

const isAllowedRedirectUri = (uri: string): boolean => {
  try {
    const parsed = new URL(uri);
    if (parsed.protocol !== 'http:') return false;
    const hostname = parsed.hostname;
    return hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '[::1]';
  } catch {
    return false;
  }
};

const oauthResourceInfo =
  (options: { clientOptions: ClientOptions; mcpOptions: McpOptions }) =>
  async (req: express.Request, res: express.Response) => {
    res.status(200).json({
      resource: options.mcpOptions.serverURL,
      authorization_servers: [options.mcpOptions.serverURL],
      scopes_supported: ['openid', 'profile', 'email', 'offline_access'],
    });
  };

const oauthServerInfo =
  (options: { clientOptions: ClientOptions; mcpOptions: McpOptions }) =>
  async (req: express.Request, res: express.Response) => {
    const respBody = {
      issuer: options.mcpOptions.serverURL,
      authorization_endpoint: options.mcpOptions.serverURL + '/auth',
      token_endpoint: options.mcpOptions.serverURL + '/token',
      registration_endpoint: options.mcpOptions.serverURL + '/register',
      scopes_supported: ['openid', 'profile', 'email', 'offline_access'],
      response_types_supported: ['code'],
      grant_types_supported: ['authorization_code', 'refresh_token'],
      token_endpoint_auth_methods_supported: ['client_secret_post'],
      code_challenge_methods_supported: ['S256'],
    };

    res.status(200).json(respBody);
    return;
  };

const oauthAuthorization =
  (options: { clientOptions: ClientOptions; mcpOptions: McpOptions }) =>
  async (req: express.Request, res: express.Response) => {
    const redirectUri = req.query['redirect_uri'];
    if (typeof redirectUri !== 'string' || !isAllowedRedirectUri(redirectUri)) {
      res.status(400).json({
        error: 'invalid_redirect_uri',
        error_description: 'redirect_uri must use http with localhost, 127.0.0.1, or [::1]',
      });
      return;
    }

    const redirectUrl = new URL('https://auth.tryprofound.com/oauth2/authorize');

    for (const [key, value] of Object.entries(req.query)) {
      if (key !== 'redirect_uri') {
        redirectUrl.searchParams.set(key, value as string);
      }
    }

    // Create new code verifier and challenge for PKCE
    const codeVerifier = (crypto.randomUUID() + crypto.randomUUID()).replace(/-/g, '');
    const codeChallengeBuffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(codeVerifier));
    const codeChallenge = Buffer.from(codeChallengeBuffer).toString('base64url');

    // Set cookie containing request state to verify later
    res.cookie(
      'mcp_oauth_auth_request',
      {
        ...req.query,
        downstream_code_verifier: codeVerifier,
      },
      {
        httpOnly: true,
        secure: options.mcpOptions.serverURL?.startsWith('https://') ?? false,
        sameSite: 'lax',
        signed: true,
        maxAge: 5 * 60 * 1000, // 5 minutes
      },
    );

    // Set new code challenge params and redirect URI
    redirectUrl.searchParams.set('code_challenge', codeChallenge);
    redirectUrl.searchParams.set('code_challenge_method', 'S256');
    redirectUrl.searchParams.set('redirect_uri', options.mcpOptions.serverURL + '/callback');

    // Redirect the user to the upstream OAuth endpoint
    res.redirect(redirectUrl.toString());
    return;
  };

const oauthCallback =
  (options: { clientOptions: ClientOptions; mcpOptions: McpOptions }) =>
  async (req: express.Request, res: express.Response) => {
    if (!req.signedCookies || !req.signedCookies['mcp_oauth_auth_request']) {
      res.status(400).send('Missing or invalid state cookie');
      return;
    }
    const origReqCookie = req.signedCookies['mcp_oauth_auth_request'];

    // Embed original request info
    const embeddedCode = {
      code: req.query['code'],
      origReqCodeChallenge: origReqCookie['code_challenge'],
      downstreamCodeVerifier: origReqCookie['downstream_code_verifier'],
    };
    const embeddedCodeB64 = Buffer.from(JSON.stringify(embeddedCode)).toString('base64url');

    // Redirect user back to original redirect URL with code and state
    const originalRedirectParams = new URLSearchParams({
      state: origReqCookie.state,
      code: embeddedCodeB64,
      scope: req.query['scope'] as string,
    });
    res.redirect(`${origReqCookie['redirect_uri']}?${originalRedirectParams.toString()}`);
    return;
  };

const oauthRegister =
  (options: { clientOptions: ClientOptions; mcpOptions: McpOptions }) =>
  async (req: express.Request, res: express.Response) => {
    const redirectUris: string[] = Array.isArray(req.body['redirect_uris']) ? req.body['redirect_uris'] : [];
    for (const uri of redirectUris) {
      if (!isAllowedRedirectUri(uri)) {
        res.status(400).json({
          error: 'invalid_redirect_uri',
          error_description: 'redirect_uris must use http with localhost, 127.0.0.1, or [::1]',
        });
        return;
      }
    }

    const respBody = {
      redirect_uris: redirectUris,
      token_endpoint_auth_method: req.body['token_endpoint_auth_method'],
      grant_types: req.body['grant_type'],
      response_types: req.body['response_types'],
      scope: 'openid profile email offline_access',
      client_name: req.body['client_name'],
      client_id: options.mcpOptions.oAuthClientId,
      client_id_issued_at: Math.floor(Date.now() / 1000),
    };

    res.status(200).json(respBody);
    return;
  };

const oauthToken =
  (options: { clientOptions: ClientOptions; mcpOptions: McpOptions }) =>
  async (req: express.Request, res: express.Response) => {
    switch (req.body['grant_type']) {
      case 'authorization_code':
        const embeddedCode = JSON.parse(Buffer.from(req.body['code'], 'base64').toString('utf-8'));

        // Verify that code verifier matches the original code challenge
        const codeChallengeBuffer = await crypto.subtle.digest(
          'SHA-256',
          new TextEncoder().encode(req.body['code_verifier']),
        );
        const codeChallenge = Buffer.from(codeChallengeBuffer).toString('base64url');

        if (codeChallenge !== embeddedCode['origReqCodeChallenge']) {
          res.status(400).json({ error: 'invalid code_verifier' });
          return;
        }

        const tokenParams = new URLSearchParams({
          code: embeddedCode['code'],
          code_verifier: embeddedCode['downstreamCodeVerifier'],
          grant_type: 'authorization_code',
          client_id: options.mcpOptions.oAuthClientId,
          client_secret: options.mcpOptions.oAuthClientSecret,
          redirect_uri: options.mcpOptions.serverURL + '/callback',
        });

        const tokenResponse = await fetch('https://auth.tryprofound.com/oauth2/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: tokenParams.toString(),
        });

        if (!tokenResponse.ok) {
          const errorText = await tokenResponse.text();
          res.status(tokenResponse.status).json({
            error: 'upstream_error',
            error_description: errorText,
          });
          return;
        }

        const tokenData = await tokenResponse.json();
        res.status(200).json(tokenData);
        return;
      case 'refresh_token':
        const refreshParams = new URLSearchParams({
          grant_type: 'refresh_token',
          refresh_token: req.body['refresh_token'],
          client_id: options.mcpOptions.oAuthClientId,
          client_secret: options.mcpOptions.oAuthClientSecret,
        });

        const refreshResponse = await fetch('https://auth.tryprofound.com/oauth2/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: refreshParams.toString(),
        });

        if (!refreshResponse.ok) {
          const errorText = await refreshResponse.text();
          res.status(refreshResponse.status).json({
            error: 'upstream_error',
            error_description: errorText,
          });
          return;
        }

        const refreshData = await refreshResponse.json();
        res.status(200).json(refreshData);
        return;
      default:
        res.status(400).json({ error: 'invalid grant_type' });
        return;
    }
  };

const redactHeaders = (headers: Record<string, any>) => {
  const hiddenHeaders = /auth|cookie|key|token|x-stainless-mcp-client-envs/i;
  const filtered = { ...headers };
  Object.keys(filtered).forEach((key) => {
    if (hiddenHeaders.test(key)) {
      filtered[key] = '[REDACTED]';
    }
  });
  return filtered;
};

export const streamableHTTPApp = ({
  clientOptions = {},
  mcpOptions,
}: {
  clientOptions?: ClientOptions;
  mcpOptions: McpOptions;
}): express.Express => {
  const app = express();
  app.set('query parser', 'extended');
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser(mcpOptions.oAuthCookieSecret));
  app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    const existing = req.headers['mcp-session-id'];
    const sessionId = (Array.isArray(existing) ? existing[0] : existing) || crypto.randomUUID();
    (req as any).mcpSessionId = sessionId;
    const origWriteHead = res.writeHead.bind(res);
    res.writeHead = function (statusCode: number, ...rest: any[]) {
      res.setHeader('mcp-session-id', sessionId);
      return origWriteHead(statusCode, ...rest);
    } as typeof res.writeHead;
    next();
  });
  app.use(
    pinoHttp({
      logger: getLogger(),
      customProps: (req) => ({
        mcpSessionId: (req as any).mcpSessionId,
      }),
      customLogLevel: (req, res) => {
        if (res.statusCode >= 500) {
          return 'error';
        } else if (res.statusCode >= 400) {
          return 'warn';
        }
        return 'info';
      },
      customSuccessMessage: function (req, res) {
        return `Request ${req.method} to ${req.url} completed with status ${res.statusCode}`;
      },
      customErrorMessage: function (req, res, err) {
        return `Request ${req.method} to ${req.url} errored with status ${res.statusCode}`;
      },
      serializers: {
        req: pino.stdSerializers.wrapRequestSerializer((req) => {
          return {
            ...req,
            headers: redactHeaders(req.raw.headers),
          };
        }),
        res: pino.stdSerializers.wrapResponseSerializer((res) => {
          return {
            ...res,
            headers: redactHeaders(res.headers),
          };
        }),
      },
    }),
  );

  app.get('/.well-known/oauth-authorization-resource', oauthResourceInfo({ clientOptions, mcpOptions }));
  app.get('/.well-known/oauth-authorization-server', oauthServerInfo({ clientOptions, mcpOptions }));
  app.get('/auth', oauthAuthorization({ clientOptions, mcpOptions }));
  app.get('/callback', oauthCallback({ clientOptions, mcpOptions }));
  app.post('/register', oauthRegister({ clientOptions, mcpOptions }));
  app.post('/token', oauthToken({ clientOptions, mcpOptions }));
  app.get('/health', async (req: express.Request, res: express.Response) => {
    res.status(200).send('OK');
  });
  app.get('/', get);
  app.post('/', post({ clientOptions, mcpOptions }));
  app.delete('/', del);

  return app;
};

export const launchStreamableHTTPServer = async ({
  mcpOptions,
  port,
}: {
  mcpOptions: McpOptions;
  port: number | string | undefined;
}) => {
  const app = streamableHTTPApp({ mcpOptions });
  const server = app.listen(port);
  const address = server.address();

  const logger = getLogger();

  if (typeof address === 'string') {
    logger.info(`MCP Server running on streamable HTTP at ${address}`);
  } else if (address !== null) {
    logger.info(`MCP Server running on streamable HTTP on port ${address.port}`);
  } else {
    logger.info(`MCP Server running on streamable HTTP on port ${port}`);
  }
};

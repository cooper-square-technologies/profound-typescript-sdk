// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Documents extends APIResource {
  /**
   * Create a Profound document with markdown content.
   *
   * `organization_id` is required and you must be a member of it. You choose the
   * document's `id`, and creation is idempotent on it: repeating the request returns
   * the existing document rather than creating a second one.
   *
   * New documents are visible only to their creator; share them from the Profound
   * app, or open one with the `url` in the response.
   */
  create(body: DocumentCreateParams, options?: RequestOptions): APIPromise<DocumentCreateResponse> {
    return this._client.post('/v1/documents', { body, ...options });
  }
}

/**
 * A Profound document.
 */
export interface DocumentCreateResponse {
  /**
   * The document's ID.
   */
  id: string;

  /**
   * When the document was created.
   */
  created_at: string;

  /**
   * The document's title.
   */
  name: string;

  /**
   * When the document was last modified. Seeding the initial content counts, so a
   * freshly created document is normally modified a moment after it was created.
   */
  updated_at: string;

  /**
   * Link to open the document in the Profound app.
   */
  url: string;

  /**
   * General access scope. New documents are `invited_only`.
   */
  visibility: 'invited_only' | 'organization';
}

export interface DocumentCreateParams {
  /**
   * ID for the new document, chosen by you. Creation is idempotent on this ID:
   * repeating a request with the same ID returns the existing document instead of
   * creating a second one, so a retry after a network error is safe.
   */
  id: string;

  /**
   * Initial document body as markdown. Must be non-empty. Rendered into the
   * collaborative editor, so the result is real editable content, not a stored blob.
   */
  content_markdown: string;

  /**
   * Title for the document. Must be non-empty.
   */
  name: string;

  /**
   * ID of the organization that will own the document. Required — Profound API keys
   * are user-scoped, so the owning organization must be chosen explicitly. The
   * caller must be a member of this organization.
   */
  organization_id: string;
}

export declare namespace Documents {
  export {
    type DocumentCreateResponse as DocumentCreateResponse,
    type DocumentCreateParams as DocumentCreateParams,
  };
}

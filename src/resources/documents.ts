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
   *
   * A `201` response does not confirm that a new document was created: it is also
   * returned when `id` already existed, in which case the existing document comes
   * back unchanged. Upstream gives no signal to tell the two apart, so this endpoint
   * does not claim to either — it is safe to retry with the same `id` either way.
   */
  create(body: DocumentCreateParams, options?: RequestOptions): APIPromise<DocumentCreateResponse> {
    return this._client.post('/v1/documents', { body, ...options });
  }
}

/**
 * The document that was created, plus the change-detection token minted for this
 * write.
 */
export interface DocumentCreateResponse {
  /**
   * The document's ID.
   */
  id: string;

  /**
   * Which integration created the document, derived server-side from the credential
   * that authenticated the write. `null` for documents created outside any
   * integration. An open-ended value, not a fixed set — known values today include
   * `external-api` and `context-manager`, and more are added as new integrations
   * ship.
   */
  app_delegate: string | null;

  /**
   * Whether the document's owner is a person (`user`) or an agent (`agent`).
   */
  author_type: 'user' | 'agent';

  /**
   * Name of the brand category set on the document, if any. Paired with
   * `company_name`; writable only on create.
   */
  category_name: string | null;

  /**
   * Name of the brand/company set on the document, if any. Paired with
   * `category_name`; writable only on create.
   */
  company_name: string | null;

  /**
   * When the document was created.
   */
  created_at: string;

  /**
   * The document's title.
   */
  name: string;

  /**
   * Email of the document's owner. `null` when the owning profile has been deleted
   * or could not be resolved.
   */
  owner_email: string | null;

  /**
   * ID of the document's owner.
   */
  owner_user_id: string;

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
   * Opaque token that changes whenever the document's content changes. `null` when
   * this call found an existing document with the same id (idempotent create) rather
   * than creating one, or when the token could not be minted. Bare hex, up to 128
   * characters, with no fixed prefix — treat it as opaque and do not parse it. It
   * detects change; it is not a precondition, and a matching token is not licence to
   * overwrite blindly.
   */
  version_hash: string | null;

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

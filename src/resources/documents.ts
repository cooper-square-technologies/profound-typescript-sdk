// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { path as __scalarPath } from '../internal/utils/path';
import type * as Shared from './shared';

export class Documents extends APIResource {
  /**
   * Create a Profound document with markdown content.
   *
   * `organization_id` is required and you must be a member of it. You choose the
   * document's `id`, and creation is idempotent on it: repeating the request returns
   * the existing document rather than creating a second one.
   *
   * New documents are visible only to their creator; share them from the Profound app,
   * or open one with the `url` in the response.
   *
   * A `201` response does not confirm that a new document was created: it is also
   * returned when `id` already existed, in which case the existing document comes
   * back unchanged. Upstream gives no signal to tell the two apart, so this endpoint
   * does not claim to either — it is safe to retry with the same `id` either way.
   *
   * @param {DocumentCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DocumentCreateResponse>} Successful Response
   *
   * @example
   * ```ts
   * const create = await client.documents.create({
   *   id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   name: 'x',
   *   content_markdown: 'x',
   * });
   * ```
   */
  create(body: DocumentCreateParams, options?: RequestOptions): APIPromise<DocumentCreateResponse> {
    return this._client.post('/v1/documents', { body, ...options });
  }

  /**
   * List documents visible to your organization, newest-modified-first.
   *
   * Documents are ordered by last-modified time, most recent first, with no other
   * sort option. This is a walk over a live, mutable collection: a document created
   * or modified while you are paging can shift which page it lands on, so a single
   * walk may show it to you twice or, rarely, skip it.
   *
   * This response never includes a total count. Upstream counts totals before
   * applying your organization's access filter, so a total, or treating a short
   * page as the last one, would misreport what you can actually see. Keep
   * following `pagination.next_cursor` until it comes back null — that, and not
   * a short or even an empty page, is the end of the walk. A page whose rows the
   * access filter removed entirely is empty while later pages still hold
   * documents, so the last page of a walk may legitimately be an empty one.
   *
   * @param {DocumentListParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DocumentListResponse>} Successful Response
   *
   * @example
   * ```ts
   * const list = await client.documents.list({
   *   organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   limit: 20,
   * });
   * ```
   */
  list(query: DocumentListParams, options?: RequestOptions): APIPromise<DocumentListResponse> {
    return this._client.get('/v1/documents', { query, ...options });
  }

  /**
   * Read a document: its metadata, its default tab's body, its other tabs, its comments, and its version hash.
   *
   * You can read any document you have access to in the Profound app, including ones
   * created there rather than through this API.
   *
   * By default this is a preview: the body is truncated to save your context, and the
   * version hash is withheld so a preview alone can never be used to replace a document
   * blindly. Pass `preview=false` when you intend to write.
   *
   * @param {string} documentID - ID of the document.
   * @param {DocumentRetrieveParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DocumentRetrieveResponse>} Successful Response
   *
   * @example
   * ```ts
   * const retrieve = await client.documents.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   include_tabs: true,
   *   include_comments: true,
   *   preview: true,
   * });
   * ```
   */
  retrieve(
    documentID: string,
    query: DocumentRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<DocumentRetrieveResponse> {
    return this._client.get(__scalarPath`/v1/documents/${documentID}`, { query, ...options });
  }

  /**
   * Rename a document, change who can see it, or both in one call.
   *
   * Renaming sets a permanent lock on the title, and changing visibility can silently
   * change who has access — see the `name` and `visibility` field descriptions for what
   * each one does before you use it.
   *
   * Renaming needs edit access; changing visibility is creator-only, and upstream
   * enforces it. You can act on a document this API created, or one you created
   * yourself in the Profound app — not one merely shared with you.
   *
   * @param {string} documentID - ID of the document.
   * @param {DocumentUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DocumentUpdateResponse>} Successful Response
   *
   * @example
   * ```ts
   * const update = await client.documents.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   */
  update(
    documentID: string,
    body: DocumentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<DocumentUpdateResponse> {
    return this._client.patch(__scalarPath`/v1/documents/${documentID}`, { body, ...options });
  }

  /**
   * Delete a document created through this integration.
   *
   * Only documents created through this integration can be deleted here. A document
   * created in the Profound app can never be deleted through this route, even by the
   * person who owns it — creation provenance is stamped once, at creation, and is never
   * backfilled onto documents made another way.
   *
   * The delete is soft: the row is marked deleted at the storage layer rather than
   * destroyed. There is no restore through this API, or any other — treat a delete as
   * final even though the data itself is not gone.
   *
   * A 404 means the document is not visible to you at all. It covers three cases the
   * response does not distinguish, on purpose: the document never existed, it was
   * already deleted by an earlier call to this same route, or it exists but your
   * credential resolves no role on it. Deleting the same document twice returns 404 on
   * the second call, not a second 204.
   *
   * A 403 means the opposite: the document is visible to you but not deletable here,
   * and the message says which rule refused — it was not created through this
   * integration, or you are not its creator. Deleting is creator-only, so edit access
   * is not enough to remove a document out from under its owner.
   *
   * @param {string} documentID - ID of the document.
   * @param {DocumentDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns Successful Response
   *
   * @example
   * ```ts
   * await client.documents.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   */
  delete(documentID: string, params: DocumentDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { organization_id } = params;
    return this._client.delete(__scalarPath`/v1/documents/${documentID}`, {
      query: { organization_id },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Overwrite a document's entire body with new markdown, replacing what it held before.
   *
   * This is a whole-body replace, not a patch: send the complete new text every time. An
   * empty `content_markdown` is valid and clears the document.
   *
   * Two destructive side effects apply on every call, regardless of what you send:
   *
   * - The document collapses to its default tab. Every non-default tab is deleted, and
   *   the comments map is cleared for **all** tabs, including the default one — a
   *   document with a live comment thread on any tab loses it.
   * - `skip_title_sync` defaults to `false`, matching the Profound app: the title follows
   *   the new content's first heading, so a replace silently renames the document unless
   *   the heading matches the current title or `skip_title_sync` is set.
   *
   * There is no compare-and-swap: this call does not accept a precondition, and nothing
   * stops two concurrent replaces from silently overwriting each other last-writer-wins.
   * Upstream's own `version_hash` documentation says as much — the token is "still a
   * change detector rather than a precondition: a caller must not treat a matching token
   * as licence to overwrite blindly, because it names the room at a moment cortex
   * observed and not the moment its own write lands." Sending a `working_version_hash`
   * (or any spelling of it) is rejected with a `400` naming this rather than accepted
   * and silently discarded, which is what happens on the upstream route this wraps.
   *
   * You can replace a document this API created, or one you created yourself directly —
   * not merely one shared with you.
   *
   * @param {string} documentID - ID of the document.
   * @param {DocumentReplaceContentParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DocumentReplaceContentResponse>} Successful Response
   *
   * @example
   * ```ts
   * const replaceContent = await client.documents.replaceContent('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   content_markdown: '',
   *   skip_title_sync: false,
   * });
   * ```
   */
  replaceContent(
    documentID: string,
    body: DocumentReplaceContentParams,
    options?: RequestOptions,
  ): APIPromise<DocumentReplaceContentResponse> {
    return this._client.post(__scalarPath`/v1/documents/${documentID}/content`, { body, ...options });
  }
}

export interface DocumentCreateParams {
  /**
   * ID for the new document, chosen by you. Creation is idempotent on this ID: repeating a request with the same ID returns the existing document instead of creating a second one, so a retry after a network error is safe.
   * @format uuid
   */
  id: string;
  /**
   * ID of the organization that will own the document. Required — Profound API keys are user-scoped, so the owning organization must be chosen explicitly. The caller must be a member of this organization.
   * @format uuid
   */
  organization_id: string;
  /**
   * Title for the document. Must be non-empty.
   * @minLength 1
   */
  name: string;
  /**
   * Initial document body as markdown. Must be non-empty. Rendered into the collaborative editor, so the result is real editable content, not a stored blob.
   * @minLength 1
   */
  content_markdown: string;
}

export interface DocumentCreateResponse {
  /**
   * The document's ID.
   * @format uuid
   */
  id: string;
  /**
   * The document's title.
   */
  name: string;
  /**
   * Link to open the document in the Profound app.
   */
  url: string;
  /**
   * General access scope. New documents are `invited_only`.
   */
  visibility: 'invited_only' | 'organization';
  /**
   * When the document was created.
   * @format date-time
   */
  created_at: string;
  /**
   * When the document was last modified. Seeding the initial content counts, so a freshly created document is normally modified a moment after it was created.
   * @format date-time
   */
  updated_at: string;
  /**
   * ID of the document's owner.
   * @format uuid
   */
  owner_user_id: string;
  /**
   * Email of the document's owner. `null` when the owning profile has been deleted or could not be resolved.
   */
  owner_email: string | null;
  /**
   * Whether the document's owner is a person (`user`) or an agent (`agent`).
   */
  author_type: 'user' | 'agent';
  /**
   * Which integration created the document, derived server-side from the credential that authenticated the write. `null` for documents created outside any integration. An open-ended value, not a fixed set — known values today include `external-api` and `context-manager`, and more are added as new integrations ship.
   */
  app_delegate: string | null;
  /**
   * Name of the brand category set on the document, if any. Paired with `company_name`; writable only on create.
   */
  category_name: string | null;
  /**
   * Name of the brand/company set on the document, if any. Paired with `category_name`; writable only on create.
   */
  company_name: string | null;
  /**
   * Opaque token that changes whenever the document's content changes. `null` when this call found an existing document with the same id (idempotent create) rather than creating one, or when the token could not be minted. Bare hex, up to 128 characters, with no fixed prefix — treat it as opaque and do not parse it. It detects change; it is not a precondition, and a matching token is not licence to overwrite blindly.
   */
  version_hash: string | null;
}

export interface DocumentListParams {
  /**
   * ID of the organization whose documents to list. Required. The caller must be a member of this organization.
   * @format uuid
   */
  organization_id: string;
  /**
   * Filter to documents whose name contains this text, case-insensitively. Matches only the document's name, never its content — a query that finds nothing does not mean the topic is unwritten, only that no title mentions it. Blank or omitted returns every document. Ignored when sent alongside `next_cursor`, which carries the filter the walk started with. Matching is name-only as of this release; broader matching may follow if upstream changes how it indexes the name column.
   */
  q?: string | null;
  /**
   * Documents are always ordered newest-modified-first (`updated_at DESC`, then `created_at DESC`, then `id DESC`); there is no parameter that changes this. `recency` is the only accepted value, and passing it is a no-op that names the guarantee rather than altering it — any other value is rejected outright rather than silently ignored. Ordering is never re-applied to a returned page either: that would only be consistent within the page, not across a paginated walk.
   */
  sort?: string | null;
  /**
   * @default 20
   * @maximum 50
   */
  limit?: number;
  next_cursor?: string | null;
}

export interface DocumentListResponse {
  /**
   * Documents on this page.
   */
  data: Array<DocumentListResponse.Data>;
  /**
   * Pagination state for fetching the next page.
   */
  pagination: Shared.CursorPagination;
}

export namespace DocumentListResponse {
  export interface Data {
    /**
     * The document's ID.
     * @format uuid
     */
    id: string;
    /**
     * The document's title.
     */
    name: string;
    /**
     * Link to open the document in the Profound app.
     */
    url: string;
    /**
     * General access scope. New documents are `invited_only`.
     */
    visibility: 'invited_only' | 'organization';
    /**
     * When the document was created.
     * @format date-time
     */
    created_at: string;
    /**
     * When the document was last modified. Seeding the initial content counts, so a freshly created document is normally modified a moment after it was created.
     * @format date-time
     */
    updated_at: string;
    /**
     * ID of the document's owner.
     * @format uuid
     */
    owner_user_id: string;
    /**
     * Email of the document's owner. `null` when the owning profile has been deleted or could not be resolved.
     */
    owner_email: string | null;
    /**
     * Whether the document's owner is a person (`user`) or an agent (`agent`).
     */
    author_type: 'user' | 'agent';
    /**
     * Which integration created the document, derived server-side from the credential that authenticated the write. `null` for documents created outside any integration. An open-ended value, not a fixed set — known values today include `external-api` and `context-manager`, and more are added as new integrations ship.
     */
    app_delegate: string | null;
    /**
     * Name of the brand category set on the document, if any. Paired with `company_name`; writable only on create.
     */
    category_name: string | null;
    /**
     * Name of the brand/company set on the document, if any. Paired with `category_name`; writable only on create.
     */
    company_name: string | null;
  }
}

export interface DocumentRetrieveParams {
  /**
   * ID of the organization that owns the document. Required — Profound API keys are user-scoped, so the owning organization must be named explicitly. The caller must be a member of this organization.
   * @format uuid
   */
  organization_id: string;
  /**
   * Include the document's other tabs. On by default — a tab body is part of the document, not an aside. Off, `additional_tabs` is omitted from the response rather than returned as an empty list.
   * @default true
   */
  include_tabs?: boolean;
  /**
   * Include the document's review comments, each mapped to `{content, context}`. On by default — a comment is part of the document's review state, not an aside. Turn it off to skip the comment-thread walk upstream; off, `comments` is omitted from the response rather than returned as an empty list.
   * @default true
   */
  include_comments?: boolean;
  /**
   * Bound every body in the response — `content_markdown` and each tab's — and set `content_truncated` if any was cut. On by default. Upstream has no partial-read of its own — every read is a full round trip through the collaborative editor — so this saves your context, not upstream cost. A preview read also omits `version_hash`, on purpose: a hash returned next to a body you have not fully seen invites replacing content you never read. Pass `preview=false` before you intend to write, to get the whole body, `content_truncated: false`, and the hash.
   * @default true
   */
  preview?: boolean;
}

export interface DocumentRetrieveResponse {
  /**
   * The document's ID.
   * @format uuid
   */
  id: string;
  /**
   * The document's title.
   */
  name: string;
  /**
   * Link to open the document in the Profound app.
   */
  url: string;
  /**
   * General access scope. New documents are `invited_only`.
   */
  visibility: 'invited_only' | 'organization';
  /**
   * When the document was created.
   * @format date-time
   */
  created_at: string;
  /**
   * When the document was last modified. Seeding the initial content counts, so a freshly created document is normally modified a moment after it was created.
   * @format date-time
   */
  updated_at: string;
  /**
   * ID of the document's owner.
   * @format uuid
   */
  owner_user_id: string;
  /**
   * Email of the document's owner. `null` when the owning profile has been deleted or could not be resolved.
   */
  owner_email: string | null;
  /**
   * Whether the document's owner is a person (`user`) or an agent (`agent`).
   */
  author_type: 'user' | 'agent';
  /**
   * Which integration created the document, derived server-side from the credential that authenticated the write. `null` for documents created outside any integration. An open-ended value, not a fixed set — known values today include `external-api` and `context-manager`, and more are added as new integrations ship.
   */
  app_delegate: string | null;
  /**
   * Name of the brand category set on the document, if any. Paired with `company_name`; writable only on create.
   */
  category_name: string | null;
  /**
   * Name of the brand/company set on the document, if any. Paired with `category_name`; writable only on create.
   */
  company_name: string | null;
  /**
   * The default tab's body as markdown. Empty string for a document with no content — never absent, so you can read it without a presence check.
   */
  content_markdown: string;
  /**
   * Every tab beyond the default one, in document order, each as `{title, content_markdown}`. Upstream allows up to twenty. Omitted from the response entirely when `include_tabs=false`; an empty list is a real answer meaning this document has no other tabs, and the two are never confused. Tabs are readable through this API but not writable: create cannot make one, and replacing this document's content does not preserve them.
   */
  additional_tabs?: Array<DocumentRetrieveResponse.AdditionalTab> | null;
  /**
   * Review comments left on the document, each mapped to `{content, context}` — the comment's text and, if any, the text it was left on. Omitted from the response entirely when `include_comments=false`; an empty list is a real answer meaning this document has no comments. Mapped from upstream's own open, unvalidated shape — commenter identity, reply threads and resolution state are dropped, never relayed. A comment whose shape this mapping cannot read is dropped from the list rather than failing the read, so this list can be shorter than the document's real thread count.
   */
  comments?: Array<DocumentRetrieveResponse.Comment> | null;
  /**
   * Opaque token that changes whenever the document's content changes, sampled before this body was read — so it names this body or an older state, never a newer one. `null` when the collaboration service could not be asked for it; the read itself still succeeded, only the token is missing. Bare hex, up to 128 characters, with no fixed prefix — treat it as opaque and do not parse it. It detects change; it is not a precondition, and a matching token is not licence to overwrite blindly. Omitted entirely — not `null` — on a `preview=true` read: a hash next to a body you have not fully seen invites replacing content you never read. Ask for `preview=false` before you intend to write.
   */
  version_hash?: string | null;
  /**
   * Whether any body in this response was cut short — `content_markdown` or any tab's. `true` only on a `preview=true` read where one of them exceeded the preview length; a short document, or a `preview=false` read, always gets `false` and every body whole. It does not say which one was cut. Preview truncation saves your context, not upstream cost — the full round trip through the collaborative editor happens either way.
   * @default false
   */
  content_truncated?: boolean;
}

export namespace DocumentRetrieveResponse {
  export interface AdditionalTab {
    /**
     * The tab's title as authored. Not unique within a document, and a placeholder when the tab was never titled.
     */
    title: string;
    /**
     * This tab's body as markdown.
     */
    content_markdown: string;
  }

  export interface Comment {
    /**
     * The comment's text.
     */
    content: string;
    /**
     * Text the comment was left on. `null` for a comment on no specific text, never an empty string.
     */
    context?: string | null;
  }
}

export interface DocumentUpdateParams {
  /**
   * ID of the organization that owns the document. Required — Profound API keys are user-scoped, so the owning organization must be named explicitly. The caller must be a member of this organization.
   * @format uuid
   */
  organization_id: string;
  /**
   * New title for the document. Renaming sets a permanent lock: once a document is renamed through this route, its title stops following the first heading of its content, for the rest of the document's life, and no route can undo the lock. Omit to leave the title as it is.
   * @minLength 1
   */
  name?: string | null;
  /**
   * New sharing scope: `invited_only` for only the people invited to the document, or `organization` for everyone in the owning organization. Only the document's creator can change this; omit to leave sharing as it is. Three things worth knowing before you set it: `organization` visibility grants view only — there is no value here that grants the organization edit access. Setting `invited_only` removes the organization's access entirely. And re-asserting `organization` on a document whose organization grant is already `edit` silently downgrades the whole organization to view — upstream replays the access sync whenever this field is sent, and that sync always upserts view, even when the value you sent matches the one already stored.
   */
  visibility?: 'invited_only' | 'organization' | null;
}

export interface DocumentUpdateResponse {
  /**
   * The document's ID.
   * @format uuid
   */
  id: string;
  /**
   * The document's title.
   */
  name: string;
  /**
   * Link to open the document in the Profound app.
   */
  url: string;
  /**
   * General access scope. New documents are `invited_only`.
   */
  visibility: 'invited_only' | 'organization';
  /**
   * When the document was created.
   * @format date-time
   */
  created_at: string;
  /**
   * When the document was last modified. Seeding the initial content counts, so a freshly created document is normally modified a moment after it was created.
   * @format date-time
   */
  updated_at: string;
  /**
   * ID of the document's owner.
   * @format uuid
   */
  owner_user_id: string;
  /**
   * Email of the document's owner. `null` when the owning profile has been deleted or could not be resolved.
   */
  owner_email: string | null;
  /**
   * Whether the document's owner is a person (`user`) or an agent (`agent`).
   */
  author_type: 'user' | 'agent';
  /**
   * Which integration created the document, derived server-side from the credential that authenticated the write. `null` for documents created outside any integration. An open-ended value, not a fixed set — known values today include `external-api` and `context-manager`, and more are added as new integrations ship.
   */
  app_delegate: string | null;
  /**
   * Name of the brand category set on the document, if any. Paired with `company_name`; writable only on create.
   */
  category_name: string | null;
  /**
   * Name of the brand/company set on the document, if any. Paired with `category_name`; writable only on create.
   */
  company_name: string | null;
}

export interface DocumentDeleteParams {
  /**
   * ID of the organization that owns the document. You must be a member of it.
   * @format uuid
   */
  organization_id: string;
}

export interface DocumentReplaceContentParams {
  /**
   * ID of the organization that owns the document. Required — Profound API keys are user-scoped, so the owning organization must be chosen explicitly. The caller must be a member of this organization.
   * @format uuid
   */
  organization_id: string;
  /**
   * New markdown body for the document, replacing everything it held before. An empty string is valid and clears the document — nothing else warns you before that happens, so treat sending one as deliberate. Whole-body replace only: send the complete new text, not just the part that changed. Capped at 1,000,000 bytes; the upstream router separately caps the entire request at 2 MiB, so a body near this cap can still be refused in transit rather than by this field.
   */
  content_markdown: string;
  /**
   * Off by default, matching the Profound app: the document's title follows the new content's first heading, so a replace silently renames the document whenever that heading differs from the current title. Set true to keep the current title regardless of what the new content's first heading says.
   * @default false
   */
  skip_title_sync?: boolean;
}

export interface DocumentReplaceContentResponse {
  /**
   * The document's ID.
   * @format uuid
   */
  id: string;
  /**
   * The document's title.
   */
  name: string;
  /**
   * Link to open the document in the Profound app.
   */
  url: string;
  /**
   * General access scope. New documents are `invited_only`.
   */
  visibility: 'invited_only' | 'organization';
  /**
   * When the document was created.
   * @format date-time
   */
  created_at: string;
  /**
   * When the document was last modified. Seeding the initial content counts, so a freshly created document is normally modified a moment after it was created.
   * @format date-time
   */
  updated_at: string;
  /**
   * ID of the document's owner.
   * @format uuid
   */
  owner_user_id: string;
  /**
   * Email of the document's owner. `null` when the owning profile has been deleted or could not be resolved.
   */
  owner_email: string | null;
  /**
   * Whether the document's owner is a person (`user`) or an agent (`agent`).
   */
  author_type: 'user' | 'agent';
  /**
   * Which integration created the document, derived server-side from the credential that authenticated the write. `null` for documents created outside any integration. An open-ended value, not a fixed set — known values today include `external-api` and `context-manager`, and more are added as new integrations ship.
   */
  app_delegate: string | null;
  /**
   * Name of the brand category set on the document, if any. Paired with `company_name`; writable only on create.
   */
  category_name: string | null;
  /**
   * Name of the brand/company set on the document, if any. Paired with `category_name`; writable only on create.
   */
  company_name: string | null;
  /**
   * Opaque token that changes whenever the document's collaborative-editing snapshot changes — a digest over that snapshot, not over the markdown. It moves on a comment reply, because a comment changes the snapshot, and it does not move on a rename, because metadata sits outside the snapshot. Bare hex, up to 128 characters, with no fixed prefix — treat it as opaque and do not parse it. `null` when no token could be minted; never omitted. It is a change detector, not a precondition: a caller must not treat a matching token as licence to overwrite blindly, because it names the room at a moment cortex observed and not the moment its own write lands.
   */
  version_hash: string | null;
  /**
   * Character count of the markdown that landed — 0 when this call cleared the document. The only confirmation of how much was written, on the most destructive operation this surface exposes.
   */
  content_chars: number;
}
export declare namespace Documents {
  export {
    type DocumentCreateResponse as DocumentCreateResponse,
    type DocumentListResponse as DocumentListResponse,
    type DocumentRetrieveResponse as DocumentRetrieveResponse,
    type DocumentUpdateResponse as DocumentUpdateResponse,
    type DocumentReplaceContentResponse as DocumentReplaceContentResponse,
    type DocumentCreateParams as DocumentCreateParams,
    type DocumentListParams as DocumentListParams,
    type DocumentRetrieveParams as DocumentRetrieveParams,
    type DocumentUpdateParams as DocumentUpdateParams,
    type DocumentDeleteParams as DocumentDeleteParams,
    type DocumentReplaceContentParams as DocumentReplaceContentParams,
  };
}

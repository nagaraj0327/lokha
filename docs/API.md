# API Reference

Base URL (dev): `http://localhost:4000`
All endpoints are mounted under `/api`.

## Security features

- **Storage**: submissions are saved to a real embedded SQLite database
  (`backend/data/lokha.sqlite`, via Node's built-in `node:sqlite`). On older
  Node versions where that module doesn't exist, storage transparently falls
  back to JSON files in the same folder — nothing breaks either way.
- **Rate limiting**: both `POST` endpoints below allow 10 submissions per IP
  per 15 minutes.
- **Spam protection**: both forms include a honeypot field (`hp_token`) that's
  invisible to real users. Bots that auto-fill every input trip it — the
  request still returns `201` (so the bot doesn't learn it was caught), but
  nothing is actually saved.
- **Admin auth**: the two `GET` (list) endpoints below require an
  `x-api-key` header matching `ADMIN_API_KEY`. If that env var isn't set,
  the endpoints are disabled entirely (`404`) rather than left open.
- **File uploads**: pitch decks, demo videos, and financial documents are
  validated by MIME type (PDF, PPT/PPTX, XLS/XLSX, MP4/MOV only) and capped
  at 25MB, then stored under `backend/src/uploads/` and served back at
  `/uploads/<filename>`.

## `GET /api/health`

Health check.

```json
{ "ok": true }
```

## `POST /api/apply`

Submits a program application (or the general application form). Accepts
either `application/json` or `multipart/form-data` (use the latter when
attaching a pitch deck, demo video, etc. — the frontend does this
automatically). Body shape varies by which form submitted it — see
`frontend/src/config/forms.config.js` for the exact per-program field list —
but every submission must include:

| field | type | required |
|---|---|---|
| `fullName` *or* `founderName` | string | yes (one of the two) |
| `email` | string (valid email) | yes |

**201 Created**
```json
{ "ok": true, "application": { "...": "...", "pitchDeck": "/uploads/171234-deck.pdf", "receivedAt": "2026-01-01T00:00:00.000Z" } }
```

**400 Bad Request** — missing name, invalid/missing email, or a rejected file
```json
{ "ok": false, "error": "A valid email address is required." }
```

**429 Too Many Requests** — rate limit exceeded
```json
{ "ok": false, "error": "Too many submissions from this device. Please try again later." }
```

## `GET /api/apply`

Lists all stored applications. **Requires** an `x-api-key` header matching
`ADMIN_API_KEY` — returns `404` if that env var is unset, `401` if the key
is wrong.

```json
{ "ok": true, "applications": [ /* ... */ ] }
```

## `POST /api/contact`

Submits the contact form.

| field | type | required |
|---|---|---|
| `name` | string | yes |
| `email` | string (valid email) | yes |
| `phone` | string | no |
| `message` | string | yes |

**201 Created**
```json
{ "ok": true, "message": { "...": "...", "receivedAt": "2026-01-01T00:00:00.000Z" } }
```

## `GET /api/contact`

Lists all stored contact messages. Same auth requirement as `GET /api/apply`.

## Errors

All errors follow the same shape:

```json
{ "ok": false, "error": "human-readable message" }
```

## Optional: email notifications

Set `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, and `NOTIFY_EMAIL` in
`backend/.env` to get an email alert on every new application or message. If
any of those are left blank, notifications are silently skipped — they never
block or fail a real submission.

## Remaining known limitations

- No rate limiting is applied to the `GET` list/admin endpoints themselves
  (only the public `POST` submission endpoints).
- SQLite is accessed from a single Node process; this is fine for a
  low-to-moderate traffic incubator site but isn't built for high-concurrency
  writes across multiple server instances. Migrate to a hosted database
  before scaling horizontally.


# Architecture

Lokha Innovation is a two-part application: a static React frontend and a small
Express API backend. They're deployed independently.

```
LOKHA-INNOVATION-WEBSITE/
├── frontend/    React 18 + Vite + Tailwind CSS + React Router
└── backend/     Express API (applications + contact messages)
```

## Frontend

- **`src/layouts/MainLayout.jsx`** — the shell every page renders inside
  (navbar, footer, scroll-reset). Routed pages render into it via
  `<Outlet />`.
- **`src/routes/AppRoutes.jsx`** — the single source of truth for every URL
  in the app.
- **`src/pages/`** — one component per route.
- **`src/components/`** — shared UI building blocks (Navbar, Footer, cards,
  the video player, the reveal-on-scroll wrapper, etc.).
- **`src/config/`** — static site content (programs, mentors, services,
  FAQs, the per-program application field definitions) plus environment
  config (`env.js`). This is the first place to look when copy needs to
  change — most pages just map over these arrays rather than hardcoding
  content.
- **`src/services/`** — the only place that talks to the backend
  (`fetch` calls live here, not in page components).
- **`src/hooks/`** — small reusable hooks (`useInViewport` powers the
  scroll-reveal animation, `useScrollToTop` resets scroll position on
  navigation).
- **`src/context/`** — `ToastContext` provides a `showToast()` function
  used across the three form pages (Apply, ProgramApply, Contact) to
  surface submit success/failure.
- **`src/seo/Seo.jsx`** — a zero-dependency component that sets
  `document.title` and the meta description per page.

Routing uses `HashRouter` (`/#/programs`, etc.) so the built site can be
deployed to any static host — including ones with no server-side rewrite
rules — without 404s on deep links.

## Backend

Layered the conventional Express way:

```
src/
├── routes/        HTTP routes → controllers
├── controllers/    request/response glue → models
├── models/          JSON-file-backed "tables" (Application, Message)
├── services/         storage.service.js — the actual file read/write
├── validators/         request body validation middleware
├── middleware/           404 + centralized error handler
└── config/                env.js
```

There's no database — submissions are appended to JSON files under
`backend/data/` (git-ignored, created automatically on first write). Swapping
in a real database later only means rewriting `models/*.js` and
`services/storage.service.js`; controllers and routes stay the same.

## Data flow for a form submission

1. A page (e.g. `pages/ProgramApply.jsx`) collects form state and calls
   `services/applicationService.js#submitApplication(payload)`.
2. That service calls the shared `utils/http.js#postJSON` helper, which
   POSTs to `${VITE_API_BASE_URL}/api/apply`.
3. In dev, Vite's proxy (`vite.config.js`) forwards `/api/*` to the backend
   on `localhost:4000` — no CORS config needed locally.
4. The backend validates the body (`validators/apply.validator.js`), saves it
   (`models/Application.model.js`), and returns `{ ok: true, application }`.
5. The page shows a toast (`context/ToastContext.jsx`) and its own inline
   success state.

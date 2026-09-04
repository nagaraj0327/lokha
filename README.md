# Lokha Innovation

A premium startup incubator website — React frontend, Express backend.

```
LOKHA-INNOVATION-WEBSITE/
├── frontend/     React 18 + Vite + Tailwind CSS + React Router
├── backend/      Express API (applications + contact form)
├── docs/         Architecture & API reference
└── .github/      CI workflow
```

See **[docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)** for how the pieces fit
together and **[docs/API.md](docs/API.md)** for the backend API reference.

## Quick start

**1. Backend** (start first, on port 4000):
```bash
cd backend
cp .env.example .env   # defaults are fine for local dev
npm install
npm start
```

By default, submissions save to a real embedded SQLite database
(`backend/data/lokha.sqlite`), rate limiting and spam protection are always
on, and the admin list endpoints (`GET /api/apply`, `GET /api/contact`) are
disabled until you set `ADMIN_API_KEY` in `.env`. Email alerts on new
submissions are opt-in — set the `SMTP_*` and `NOTIFY_EMAIL` vars if you want
them. See [docs/API.md](docs/API.md) for the full reference.

**2. Frontend** (in a second terminal, on port 5173):
```bash
cd frontend
cp .env.example .env   # leave VITE_API_BASE_URL empty for local dev
npm install
npm run dev
```

Open http://localhost:5173 — the dev server proxies `/api/*` to the backend
automatically (see `frontend/vite.config.js`).

## Production build

```bash
cd frontend
npm run build     # outputs static site to frontend/dist
npm run preview   # serve the production build locally
```

Deploy `frontend/dist/` to any static host (Netlify, Vercel, S3 + CloudFront,
GitHub Pages — routing uses `HashRouter`, so no server rewrite rules are
needed). Deploy `backend/` to any Node host (Render, Railway, a VPS), set its
env vars from `backend/.env.example`, and point the frontend's
`VITE_API_BASE_URL` at that host's URL if frontend and backend aren't on the
same domain.

## Testing

```bash
cd backend
npm test   # Node's built-in test runner, hits the Express app in-process
```

## Pages

Home, About, Programs (Idea Validation → Pre-Incubation → Incubation →
Acceleration, each with its own application form), Services, Resources,
Mentors, Investors, Startup Directory, Events, Success Stories, Community,
Careers, Partners, Blog, FAQs, Contact, and the general Apply form — all
linked from the header and footer.

## License

MIT — see [LICENSE](LICENSE).

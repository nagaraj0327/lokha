// In dev, Vite proxies /api/* straight to the backend (see vite.config.js), so
// an empty base works. In production, set VITE_API_BASE_URL to the deployed
// backend's origin (e.g. https://api.lokhainnovation.com) — see .env.example.
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

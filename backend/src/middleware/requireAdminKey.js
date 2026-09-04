import { env } from '../config/env.js';
import { ApiError } from '../utils/ApiError.js';

/**
 * Requires an `x-api-key` header matching ADMIN_API_KEY. If ADMIN_API_KEY
 * isn't set at all, the route is disabled entirely (404) rather than left
 * open — a missing key must never mean "no auth required".
 */
export function requireAdminKey(req, _res, next) {
  if (!env.adminApiKey) {
    return next(new ApiError(404, 'Not found.'));
  }

  const provided = req.get('x-api-key');
  if (provided !== env.adminApiKey) {
    return next(new ApiError(401, 'Missing or invalid API key.'));
  }

  next();
}

import { ApiError } from '../utils/ApiError.js';

export function validateApplication(req, _res, next) {
  const body = req.body || {};

  // The general application form uses `founderName`; per-program forms use
  // `fullName`. Accept either so both frontends can post to this endpoint.
  const hasName = Boolean(body.fullName || body.founderName);
  if (!hasName) {
    return next(new ApiError(400, 'Missing required field: fullName (or founderName).'));
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!body.email || !emailPattern.test(body.email)) {
    return next(new ApiError(400, 'A valid email address is required.'));
  }

  next();
}

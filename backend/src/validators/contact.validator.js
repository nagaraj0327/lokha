import { ApiError } from '../utils/ApiError.js';

export function validateContactMessage(req, _res, next) {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return next(new ApiError(400, 'Missing required field(s): name, email, message.'));
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return next(new ApiError(400, 'A valid email address is required.'));
  }

  next();
}

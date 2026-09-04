import rateLimit from 'express-rate-limit';

/** 10 submissions per IP per 15 minutes on each form endpoint. */
export const submissionLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false, error: 'Too many submissions from this device. Please try again later.' },
});

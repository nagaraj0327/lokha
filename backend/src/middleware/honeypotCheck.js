/**
 * Expects the frontend to include a hidden field named `hp_token` that real
 * users never see or fill in (CSS-hidden, tabIndex -1). Bots that
 * auto-fill every field trip it. We respond 201 as if it worked — never
 * tip off a bot that it was caught — but skip actually saving the record.
 */
export function honeypotCheck(req, res, next) {
  if (req.body?.hp_token) {
    return res.status(201).json({ ok: true });
  }
  next();
}

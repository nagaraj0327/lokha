import 'dotenv/config';

export const env = {
  port: process.env.PORT || 4000,
  nodeEnv: process.env.NODE_ENV || 'development',
  corsOrigin: process.env.CORS_ORIGIN || '*',

  // Protects GET /api/apply and GET /api/contact (submission lists).
  // Leave unset to disable those two endpoints entirely (safest default).
  adminApiKey: process.env.ADMIN_API_KEY || '',

  // Optional email alerts on new submissions. All four must be set for
  // emails to actually send — otherwise notifications silently no-op.
  smtp: {
    host: process.env.SMTP_HOST || '',
    port: Number(process.env.SMTP_PORT) || 587,
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || '',
  },
  notifyEmail: process.env.NOTIFY_EMAIL || '',
};

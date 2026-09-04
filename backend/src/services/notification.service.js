import nodemailer from 'nodemailer';
import { env } from '../config/env.js';

let transporter = null;

function getTransporter() {
  if (!env.smtp.host || !env.smtp.user || !env.smtp.pass || !env.notifyEmail) {
    return null; // Not configured — notifications are opt-in via .env
  }
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: env.smtp.host,
      port: env.smtp.port,
      secure: env.smtp.port === 465,
      auth: { user: env.smtp.user, pass: env.smtp.pass },
    });
  }
  return transporter;
}

async function send(subject, text) {
  const t = getTransporter();
  if (!t) return; // Silently skip — this must never block or fail a request
  await t.sendMail({
    from: env.smtp.user,
    to: env.notifyEmail,
    subject,
    text,
  });
}

export function notifyNewApplication(application) {
  const name = application.fullName || application.founderName || 'Unknown';
  const program = application.program || application.startupStage || 'General';
  return send(
    `New application: ${name} (${program})`,
    JSON.stringify(application, null, 2)
  );
}

export function notifyNewMessage(message) {
  return send(
    `New contact message from ${message.name || 'Unknown'}`,
    JSON.stringify(message, null, 2)
  );
}

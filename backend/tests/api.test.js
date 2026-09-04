import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { createApp } from '../src/app.js';
import { ApplicationModel } from '../src/models/Application.model.js';

let server;
let baseUrl;

before(async () => {
  const app = createApp();
  server = app.listen(0);
  await new Promise((resolve) => server.once('listening', resolve));
  const { port } = server.address();
  baseUrl = `http://localhost:${port}`;
});

after(() => {
  server.close();
});

test('GET /api/health returns ok', async () => {
  const res = await fetch(`${baseUrl}/api/health`);
  assert.equal(res.status, 200);
  const body = await res.json();
  assert.equal(body.ok, true);
});

test('POST /api/apply rejects a submission with no email', async () => {
  const res = await fetch(`${baseUrl}/api/apply`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fullName: 'Ada Lovelace' }),
  });
  assert.equal(res.status, 400);
});

test('POST /api/apply accepts a valid submission', async () => {
  const res = await fetch(`${baseUrl}/api/apply`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fullName: 'Ada Lovelace', email: 'ada@example.com', mobile: '555-0100' }),
  });
  assert.equal(res.status, 201);
  const body = await res.json();
  assert.equal(body.ok, true);
  assert.equal(body.application.fullName, 'Ada Lovelace');
});

test('POST /api/contact rejects an incomplete message', async () => {
  const res = await fetch(`${baseUrl}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Ada' }),
  });
  assert.equal(res.status, 400);
});

test('GET /api/unknown-route returns 404', async () => {
  const res = await fetch(`${baseUrl}/api/unknown-route`);
  assert.equal(res.status, 404);
});

test('GET /api/apply is disabled (404) when ADMIN_API_KEY is unset', async () => {
  const res = await fetch(`${baseUrl}/api/apply`);
  assert.equal(res.status, 404);
});

test('POST /api/apply with the honeypot field filled is silently dropped', async () => {
  const res = await fetch(`${baseUrl}/api/apply`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fullName: 'Bot',
      email: 'bot@example.com',
      hp_token: 'I am a bot',
    }),
  });
  // Responds as if it succeeded (never tips off the bot)...
  assert.equal(res.status, 201);
  // ...but the record was never actually saved.
  const all = await ApplicationModel.findAll();
  assert.equal(all.some((a) => a.email === 'bot@example.com'), false);
});

import { API_BASE_URL } from '../config/env';

export async function postJSON(path, body) {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return handleResponse(res);
}

/**
 * Submits a FormData payload (used whenever the form includes file inputs —
 * fetch sets the multipart boundary header automatically, so don't set
 * Content-Type manually here).
 */
export async function postFormData(path, formData) {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    method: 'POST',
    body: formData,
  });
  return handleResponse(res);
}

async function handleResponse(res) {
  if (!res.ok) {
    let message = `Request failed (${res.status})`;
    try {
      const data = await res.json();
      message = data?.error || message;
    } catch {
      // response wasn't JSON — keep the default message
    }
    throw new Error(message);
  }
  return res.json().catch(() => ({}));
}

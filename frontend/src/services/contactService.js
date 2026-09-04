import { postJSON } from '../utils/http';

/**
 * Submits the contact form to the backend.
 * @param {{name: string, email: string, phone?: string, message: string}} payload
 */
export function submitContactMessage(payload) {
  return postJSON('/api/contact', payload);
}

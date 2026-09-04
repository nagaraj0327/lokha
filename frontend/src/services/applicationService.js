import { postJSON, postFormData } from '../utils/http';

/**
 * Submits a program application (or the general application) to the backend.
 * @param {object} payload - form fields, including a `program` name.
 */
export function submitApplication(payload) {
  return postJSON('/api/apply', payload);
}

/**
 * Same as submitApplication, but for submissions that include files
 * (pitch deck, demo video, etc). Pass a browser FormData instance.
 */
export function submitApplicationWithFiles(formData) {
  return postFormData('/api/apply', formData);
}

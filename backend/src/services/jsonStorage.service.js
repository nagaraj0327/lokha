import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, '..', '..', 'data');

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

function filePath(fileName) {
  return path.join(DATA_DIR, fileName);
}

/** Reads all records from a JSON store file, or [] if it doesn't exist yet. */
export function readAll(fileName) {
  const p = filePath(fileName);
  if (!fs.existsSync(p)) return [];
  return JSON.parse(fs.readFileSync(p, 'utf-8'));
}

/** Appends a single record (with a receivedAt timestamp) to a JSON store file. */
export function appendRecord(fileName, record) {
  const list = readAll(fileName);
  const withTimestamp = { ...record, receivedAt: new Date().toISOString() };
  list.push(withTimestamp);
  fs.writeFileSync(filePath(fileName), JSON.stringify(list, null, 2));
  return withTimestamp;
}

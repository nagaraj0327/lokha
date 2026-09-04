import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, '..', '..', 'data');
const DB_PATH = path.join(DATA_DIR, 'lokha.sqlite');

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

let dbInstance = null;
let attempted = false;

/**
 * Lazily opens the SQLite database using Node's built-in `node:sqlite` module
 * (available from Node 22.5+, no native compilation, no external service).
 * Returns null on older Node versions so callers can fall back to JSON storage
 * — the site keeps working either way, it just gets a real DB when it can.
 */
export async function getDb() {
  if (attempted) return dbInstance;
  attempted = true;

  try {
    const { DatabaseSync } = await import('node:sqlite');
    const db = new DatabaseSync(DB_PATH);

    db.exec(`
      CREATE TABLE IF NOT EXISTS applications (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        payload TEXT NOT NULL,
        received_at TEXT NOT NULL
      );
      CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        payload TEXT NOT NULL,
        received_at TEXT NOT NULL
      );
    `);

    dbInstance = db;
  } catch {
    // node:sqlite isn't available on this Node version — models will fall
    // back to flat-file JSON storage instead. Nothing to do here.
    dbInstance = null;
  }

  return dbInstance;
}

export const isUsingSqlite = () => dbInstance !== null;

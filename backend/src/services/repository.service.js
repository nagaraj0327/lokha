import { getDb } from './db.service.js';
import { readAll, appendRecord } from './jsonStorage.service.js';

/**
 * Creates a record store for a given "table". Tries SQLite first (real DB,
 * safe for concurrent writes); if `node:sqlite` isn't available on this Node
 * version, transparently falls back to the flat-JSON storage. Callers never
 * need to know which one is actually in use.
 */
export function createRepository(tableName, jsonFileName) {
  return {
    async create(record) {
      const db = await getDb();
      const receivedAt = new Date().toISOString();
      const withTimestamp = { ...record, receivedAt };

      if (db) {
        const stmt = db.prepare(
          `INSERT INTO ${tableName} (payload, received_at) VALUES (?, ?)`
        );
        stmt.run(JSON.stringify(withTimestamp), receivedAt);
        return withTimestamp;
      }

      return appendRecord(jsonFileName, record);
    },

    async findAll() {
      const db = await getDb();

      if (db) {
        const rows = db.prepare(`SELECT payload FROM ${tableName} ORDER BY id DESC`).all();
        return rows.map((row) => JSON.parse(row.payload));
      }

      return readAll(jsonFileName);
    },
  };
}

import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const connectionString = process.env.DATABASE_URL;

const adapter = new PrismaPg({
  connectionString,
});

const prisma = new PrismaClient({ adapter });

export function createRepository(tableName) {
  return {
    async create(record) {
      const receivedAt = new Date();

      const data = {
        ...record,
        receivedAt: receivedAt.toISOString(),
      };

      if (tableName === 'applications') {
        const result = await prisma.application.create({
          data: {
            payload: data,
            receivedAt,
          },
        });

        return {
          ...result.payload,
          receivedAt: result.receivedAt.toISOString(),
        };
      }

      if (tableName === 'messages') {
        const result = await prisma.message.create({
          data: {
            payload: data,
            receivedAt,
          },
        });

        return {
          ...result.payload,
          receivedAt: result.receivedAt.toISOString(),
        };
      }

      throw new Error(`Unknown repository table: ${tableName}`);
    },

    async findAll() {
      if (tableName === 'applications') {
        const rows = await prisma.application.findMany({
          orderBy: { id: 'desc' },
        });

        return rows.map((row) => ({
          ...row.payload,
          receivedAt: row.receivedAt.toISOString(),
        }));
      }

      if (tableName === 'messages') {
        const rows = await prisma.message.findMany({
          orderBy: { id: 'desc' },
        });

        return rows.map((row) => ({
          ...row.payload,
          receivedAt: row.receivedAt.toISOString(),
        }));
      }

      throw new Error(`Unknown repository table: ${tableName}`);
    },
  };
}
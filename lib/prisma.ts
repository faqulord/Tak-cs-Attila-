import { PrismaClient } from '@prisma/client';

// Ez a kód gondoskodik róla, hogy csak egy aktív kapcsolatunk legyen az adatbázissal
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
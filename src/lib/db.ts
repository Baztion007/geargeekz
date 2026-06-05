import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

async function createTursoClient() {
  // Dynamic imports — only loaded when actually using Turso
  const { PrismaLibSql } = await import('@prisma/adapter-libsql')
  const { createClient } = await import('@libsql/client')

  const databaseUrl = process.env.DATABASE_URL || 'file:./db/custom.db'
  const libsql = createClient({
    url: databaseUrl,
    authToken: process.env.DATABASE_AUTH_TOKEN,
  })
  const adapter = new PrismaLibSql(libsql)
  return new PrismaClient({ adapter })
}

function createSqliteClient() {
  return new PrismaClient()
}

function createPrismaClient() {
  const databaseUrl = process.env.DATABASE_URL || 'file:./db/custom.db'

  if (databaseUrl.startsWith('libsql://')) {
    // For Turso, we return a promise — caller must await
    // Since PrismaClient constructor is sync, we handle this differently:
    // Create a regular client first, then swap it out once Turso is ready
    const client = createSqliteClient()

    // Async swap to Turso client
    createTursoClient().then((tursoClient) => {
      Object.assign(client, tursoClient)
    }).catch((err) => {
      console.error('Failed to connect to Turso, falling back to SQLite:', err)
    })

    return client
  }

  // Local SQLite
  return createSqliteClient()
}

// Force new client to pick up schema changes in dev mode
// by invalidating the cached instance when it's missing new models
if (process.env.NODE_ENV !== 'production' && globalForPrisma.prisma) {
  try {
    if (
      typeof (globalForPrisma.prisma as Record<string, unknown>).categoryDB === 'undefined' ||
      typeof (globalForPrisma.prisma as Record<string, unknown>).contactMessage === 'undefined'
    ) {
      globalForPrisma.prisma = undefined as unknown as PrismaClient | undefined
    }
  } catch {
    globalForPrisma.prisma = undefined as unknown as PrismaClient | undefined
  }
}

export const db = globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db

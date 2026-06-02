import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function createPrismaClient() {
  return new PrismaClient({
    log: ['query'],
  })
}

// Check if the cached client has all expected models (prevents stale client after schema updates)
function isPrismaClientStale(client: PrismaClient): boolean {
  return typeof (client as any).userReview === 'undefined'
}

export const db = (() => {
  if (globalForPrisma.prisma) {
    if (isPrismaClientStale(globalForPrisma.prisma)) {
      // Client is stale, disconnect and create a new one
      try { globalForPrisma.prisma.$disconnect() } catch {}
      globalForPrisma.prisma = undefined
    }
  }
  const client = globalForPrisma.prisma ?? createPrismaClient()
  if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = client
  return client
})()
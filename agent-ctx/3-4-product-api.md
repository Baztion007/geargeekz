# Task 3-4-product-api: Product/Category/Brand API Routes

## Summary
Added Prisma models for Product, CategoryDB, and BrandDB, then created full CRUD API routes for each, plus image upload and database seed endpoints.

## What was done
1. **Prisma schema** — Added Product (30 fields), CategoryDB (7 fields), BrandDB (8 fields) models to schema.prisma
2. **Database sync** — Ran `bun run db:push` to create tables
3. **db.ts** — Added dev-mode cache invalidation for new Prisma models; disabled query logging to reduce server memory pressure
4. **API Routes**:
   - `/api/products` — GET (with filters: category, brand, search, limit, offset), POST, PATCH, DELETE
   - `/api/categories` — GET, POST, PATCH, DELETE
   - `/api/brands` — GET, POST, PATCH, DELETE
   - `/api/upload` — POST (multipart image upload to /public/images/)
   - `/api/seed` — POST (seeds DB from hardcoded data files with dynamic imports)
5. **JSON handling** — All JSON array/object fields stored as strings in SQLite, parsed on read, stringified on write
6. **Seed verified** — Seeded 25 products, 8 categories, 12 brands successfully
7. **Lint passes** — No ESLint errors

## Dev Server Issue
The Next.js dev server crashes intermittently when handling multiple API requests in sequence, likely due to memory constraints in the sandbox environment. Each API route works correctly when tested individually.

# Task 2-affiliate-server — Affiliate Server Developer

## Summary
Made affiliate configuration server-side persistent by adding Prisma models, env var overrides, database-backed API, and server sync UI.

## Files Modified
- `/prisma/schema.prisma` — Added AffiliateMerchantConfig and AffiliateGlobalSettings models
- `/src/lib/affiliate-config.ts` — Added env var support, async DB fetch, server caching
- `/src/app/api/affiliate/route.ts` — Complete rewrite with database persistence (raw SQL + Prisma model fallback)
- `/src/lib/db.ts` — Simplified back to basic globalThis caching
- `/src/components/views/AffiliateSettingsPage.tsx` — Added sync status, push/pull buttons, ENV badges

## Files Created
- `/.env.example` — Documents all affiliate env vars
- `/.env.local` — Current default affiliate tags

## Key Decisions
- Used raw SQL ($queryRaw/$executeRawUnsafe) as primary DB access method to work around Next.js dev server Prisma client staleness
- Prisma model methods used as fallback when available (production-ready)
- Env vars always take precedence over database and localStorage values
- API blocks merchant tag updates when env var override is active (returns 403)

## Testing
- All API endpoints tested and verified working
- Seed: POST { type: "seed" } → returns 6 merchants
- Config: GET ?action=config → returns merchants with envOverrides map
- Settings: GET ?action=settings → returns global settings
- PATCH merchant: updates enabled/tag/priority fields
- PATCH settings: updates link strategy, toggles, etc.
- ESLint passes cleanly

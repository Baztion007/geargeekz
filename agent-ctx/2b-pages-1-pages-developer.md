# Task 2b-pages-1 - Pages Developer

## Task
Rebuild main pages (HomePage, ProductDetailPage, CategoryPage) for GearScope premium product review publication

## Summary
Complete rewrite of 3 main view components plus supporting component updates to align with the new GearScope data model (no prices, multi-merchant, bestFor arrays, brandSlug, merchant, gallery).

## Files Modified
1. `/src/components/views/HomePage.tsx` — Complete rewrite with 10 sections
2. `/src/components/views/ProductDetailPage.tsx` — Major rewrite with gallery, TOC, share buttons
3. `/src/components/views/CategoryPage.tsx` — Major rewrite with hero, guides, brand filters
4. `/src/components/affiliate/AffiliateLink.tsx` — Updated for merchant-aware API
5. `/src/components/affiliate/ProductCard.tsx` — Removed prices, added bestFor tags
6. `/src/app/page.tsx` — Removed broken imports, updated routes
7. `/src/lib/theme.ts` — Fixed TS error, updated localStorage key
8. `/src/components/views/BestSellersPage.tsx` — Removed prices, updated API
9. `/src/components/views/ComparePage.tsx` — Removed prices, updated API
10. `/src/components/views/DealsPage.tsx` — Rewritten as placeholder
11. `/src/components/views/BuyingGuidePage.tsx` — Updated API
12. `/src/components/views/WishlistPage.tsx` — Updated routes and language

## Key Decisions
- NO prices anywhere — all CTA buttons say "Check Price on {Merchant}" or "View Latest Deal on {Merchant}"
- Multi-merchant affiliate support via `merchant` prop on all affiliate link components
- bestFor displayed as tag chips (string[] array)
- Image Gallery component with multi-image support and thumbnails
- Table of Contents with IntersectionObserver for sticky desktop sidebar
- Social Share buttons for Twitter, Facebook, Copy Link
- Category filters: Brand, Rating, BestFor (NOT price)
- Buying guides shown on category pages via horizontal scroll
- All Coffee icons replaced with Package icon
- Dark mode classes throughout all pages

## Status
Complete — ESLint passes, TypeScript compiles with no src/ errors

# Task 6-seo-infrastructure — SEO Infrastructure Developer

## Summary
Built comprehensive SEO/GEO/AIO infrastructure for GearScope product review site based on Google's 2025 AI search guidance.

## Files Created
- `/src/app/robots.ts` — Dynamic robots.txt (allow /, disallow /api/, sitemap link)
- `/src/app/sitemap.ts` — Dynamic sitemap.xml with 50+ URLs (products, categories, brands, guides, blogs, static pages)
- `/src/lib/seo.ts` — Centralized SEO utilities with 5 meta generators and 5 JSON-LD generators
- `/src/components/affiliate/JsonLdScript.tsx` — Client component for injecting JSON-LD

## Files Updated
- `/src/components/views/ProductDetailPage.tsx` — Added Product + Review + BreadcrumbList JSON-LD
- `/src/components/views/CategoryPage.tsx` — Added CollectionPage + ItemList + BreadcrumbList JSON-LD
- `/src/components/views/BrandPage.tsx` — Added Organization + ItemList + BreadcrumbList JSON-LD
- `/src/components/views/BuyingGuidePage.tsx` — Added Article + FAQPage + BreadcrumbList JSON-LD
- `/src/components/views/BlogPostPage.tsx` — Added BlogPosting + BreadcrumbList JSON-LD

## Key Decisions
- No price field in Product JSON-LD offers (site policy)
- Deterministic hashSlugToCount() for ratingCount instead of Math.random()
- Uses @graph pattern for combining multiple schemas per page
- FAQPage schema on buying guides for rich FAQ snippets
- Clean URLs in sitemap (/product/{slug}, /category/{slug}, etc.)

## Verification
- `bun run lint` passes cleanly
- Dev server compiles without errors

# Task 2c-supporting-pages - Supporting Pages Developer

## Task
Update all supporting pages for GearScope — remove coffee/price references, add new features, rebrand

## Work Log

### 1. GuidesPage.tsx — MAJOR UPDATE
- Removed Coffee icon → Package icon for image fallback
- Removed coffee language → "gear for your needs"
- Added guide type badges with icons: Best Products (Star, amber), Comparison (GitCompare, emerald), Brand Review (Tag, violet), Category Guide (BookOpen, sky)
- Added reading time badge on each guide card (Clock icon, "X min")
- Added guide types section showing all 4 guide type badges
- Updated dark mode classes throughout

### 2. BlogPage.tsx — MAJOR UPDATE
- Changed "BrewHub Blog" → "GearScope Blog"
- Updated from coffee categories to: All, Travel Gear, Home & Office, Electronics, Fitness
- Added reading time display on featured hero and cards
- Replaced Coffee icon → Package icon
- Full dark mode support

### 3. BlogPostPage.tsx — MAJOR UPDATE
- Added SocialShareButtons component (Twitter, Facebook, Copy Link)
- Added TableOfContents component (auto-generates from content)
- Added reading time display (uses post.readingTime)
- Added "Related Products" sidebar with thumbnails, ratings, bestFor, CheckPriceButton
- Changed "BrewHub Blog" → "GearScope Blog"
- Changed newsletter CTA to "gear guides, reviews, and recommendations"

### 4. TrendingPage.tsx — NEW FILE (replaces BestSellersPage)
- Renamed "Best Sellers" → "Trending" (not an e-commerce store)
- Uses getTrending() from products data
- Top 3 spotlight with editorial labels (Most Trending, Rising Star, Editor Pick)
- Category filter tabs
- "Why We Recommend" sections with bestFor display
- Package icon, CheckPriceButton CTAs, no prices

### 5. RoundupsPage.tsx — NEW FILE (replaces DealsPage)
- Changed from "Today's Deals" to "Product Roundups & Collections"
- 6 curated collections: Travel, Remote Work, Fitness, Audio, Everyday Tech, Outdoor
- Each collection: colored header, description, ProductCard grid, related guide CTA
- Buying guides section at bottom
- ZERO price/discount/sale display

### 6. ComparePage.tsx — UPDATED
- Replaced Coffee → Package icon
- Changed CTA from "Browse Best Sellers" → "Browse Products"

### 7. WishlistPage.tsx — UPDATED
- Changed to "Saved Items" in breadcrumb/header
- Package icon, affiliate CTAs, no price references

### 8. BuyingGuidePage.tsx — MAJOR UPDATE
- Added guide type badge (with icon and color)
- Added reading time display
- Added TableOfContents component
- Added SocialShareButtons component
- Updated CTA for multi-merchant
- NO prices in comparison tables

### 9. AuthorPage.tsx — UPDATED
- Full dark mode support
- Author photo with fallback
- No coffee/price references

### 10. AboutPage.tsx — COMPLETE REWRITE
- "About GearScope" (was "About BrewHub Reviews")
- Package icon (was Coffee)
- Multi-merchant affiliate disclosure
- Updated mission, team descriptions, editorial standards
- Full dark mode

### 11. ContactPage.tsx — UPDATED
- hello@gearscope.com email
- Updated FAQ for multi-category coverage
- Full dark mode

### 12. PrivacyPage.tsx — UPDATED
- GearScope branding, gearscope.com
- Multi-merchant affiliate cookies section
- privacy@gearscope.com

### 13. TermsPage.tsx — UPDATED
- GearScope branding, multi-merchant disclosure
- "GearScope does not display product prices" section
- legal@gearscope.com

### 14. EditorialPolicyPage.tsx — UPDATED
- GearScope branding, multi-merchant practices
- Package icon for Value criterion
- "The GearScope Team" quote

### 15. HowWeTestPage.tsx — COMPLETE REWRITE
- Replaced coffee-specific criteria: Temperature Consistency → Battery & Power, Extraction Quality → Build & Dimensions, Grind Consistency → Environmental Resilience
- General product testing language throughout
- Package icon, full dark mode

### 16. Router Updates
- Added 'roundups' route to types.ts, router.ts, page.tsx
- RoundupsPage import and route case added

## Stage Summary
- ALL 15 supporting pages updated for GearScope rebrand
- ZERO Coffee/BrewHub/price references remain
- TrendingPage (new) replaces BestSellersPage
- RoundupsPage (new) replaces DealsPage
- BlogPostPage has TOC, social share, related products
- BuyingGuidePage has guide type badge, reading time, TOC, social share
- Full dark mode on all pages
- Multi-merchant affiliate throughout
- ESLint passes cleanly

# Task 7: Admin API Integration

## Summary
Updated admin panel to fetch all data from API endpoints instead of importing directly from TypeScript data files. Added image upload support, seed database button, and proper form field handling.

## Changes Made

### 1. AdminSubPages.tsx — Complete Rewrite
- **Removed** all direct imports from `@/data/products`, `@/data/categories`, `@/data/brands`
- **Added** TypeScript interfaces: `ProductItem`, `CategoryItem`, `BrandItem` (replacing `typeof products[0]` etc.)
- **ProductsContent**: Added `useState` + `useEffect` to fetch products, categories, and brands from API on mount. Loading skeleton while fetching. `fetchData` callback refreshes after CRUD operations.
- **CategoriesContent**: Added `useState` + `useEffect` to fetch categories from `/api/categories`. Loading skeleton. Refresh after create/update/delete.
- **BrandsContent**: Added `useState` + `useEffect` to fetch brands from `/api/brands`. Loading skeleton. Refresh after CRUD operations.
- **Empty states**: All three tables show "No items found. Seed the database..." when empty.
- **Delete operations**: Fixed to use `{ slug }` in request body (API uses slug as identifier, not id).
- **Category PATCH**: Fixed to use `{ slug: editingCategory.slug, ...form }` instead of `{ id: editingCategory.id, ...form }`.
- **Brand PATCH**: Fixed to use `{ slug: editingBrand.slug, ...payload }` instead of `{ id: editingBrand.id, ...payload }`.

### 2. Image Upload in Product Form
- **Product image upload**: Added `handleImageUpload` that POSTs to `/api/upload` with FormData, gets back `{ url }`, shows preview.
- **Image preview**: Shows 80x80 thumbnail of current product image.
- **Gallery image upload**: Added `handleGalleryUpload` for multiple files, each uploaded to `/api/upload`.
- **Gallery management**: Shows gallery thumbnails with hover-to-reveal delete button.
- **Upload indicators**: Shows "Uploading..." with spinner during uploads.
- **Save button**: Disabled while uploading images.

### 3. Product Form Payload Fix
- All JSON fields (bestFor, pros, cons, tags, features, specifications, gallery, ratingBreakdown, relatedProducts) are now sent as actual arrays/objects — the API's `stringifyProduct` handles JSON.stringify.
- Category and brand names are resolved from their slugs using the fetched data.
- Image URL and gallery URLs are included in the payload.
- PATCH uses `{ slug: product.slug, ...payload }` as the API expects.

### 4. AdminPage.tsx — Complete Rewrite
- **Removed** imports from `@/data/products`, `@/data/categories`, `@/data/brands`
- **Added** `useState` + `useEffect` + `useCallback` to fetch stats from `/api/products`, `/api/categories`, `/api/brands`
- **Stats** computed from API data: product count, category count, brand count, avg rating, verified/updated counts, recent products
- **Loading skeleton**: Shows animated placeholders while fetching
- **Empty state**: Shows "No products yet. Seed the database to get started." in recently updated section
- **Seed Database button**: Added to Quick Actions grid with Database icon, amber-themed styling, loading spinner during seeding, success/error result display
- **Seed result**: Shows green/red inline message after seeding with count of seeded items

### 5. TableSkeleton Component
- Added reusable skeleton loader for table content during API fetches

## API Verification
- GET /api/products → returns `{ products: [...], total, limit, offset }` ✓
- GET /api/categories → returns `{ categories: [...] }` ✓
- GET /api/brands → returns `{ brands: [...] }` ✓
- POST /api/seed → seeds database from TypeScript data files ✓
- POST /api/upload → returns `{ url, filename }` ✓
- PATCH /api/products (with slug) → updates product ✓
- DELETE /api/products (with slug) → deletes product ✓

## Lint Status
- ESLint passes cleanly with no errors
- Dev server compiles successfully

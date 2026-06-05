# GearScope — Deployment Guide (Cloudflare Pages)

## Overview
GearScope can be deployed to Cloudflare Pages for fast, global edge delivery. This guide covers the complete setup.

## Prerequisites
- A Cloudflare account (free tier works)
- A Turso account for the database (free tier: 9GB storage)
- Git repository on GitHub

## Step 1: Set Up Turso Database

Turso provides SQLite over HTTP, perfect for edge deployments.

```bash
# Install Turso CLI
curl -sSfL https://get.tur.so/install.sh | bash

# Login
turso auth login

# Create database
turso db create gearscope

# Get connection URL
turso db show gearscope --url
# Output: libsql://gearscope-your-org.turso.io

# Create auth token
turso db tokens create gearscope
```

## Step 2: Push Schema to Turso

Set the DATABASE_URL to your Turso database and run:
```bash
DATABASE_URL=libsql://gearscope-your-org.turso.io DATABASE_AUTH_TOKEN=your-token bun run db:push
```

## Step 3: Seed Data

Visit your deployed site's `/api/seed` endpoint (POST) to populate the database, or seed locally before deploying.

## Step 4: Deploy to Cloudflare Pages

### Option A: Automatic (GitHub Integration)
1. Push your code to GitHub
2. Go to Cloudflare Dashboard → Pages → Create a project
3. Connect your GitHub repository
4. Set build settings:
   - Framework preset: Next.js
   - Build command: `npx @cloudflare/next-on-pages`
   - Build output directory: `.vercel/output/static`
5. Add environment variables (see below)

### Option B: Manual (CLI)
```bash
npx @cloudflare/next-on-pages
npx wrangler pages deploy .vercel/output/static
```

## Step 5: Set Environment Variables

In Cloudflare Pages dashboard → Settings → Environment variables:

| Variable | Value |
|----------|-------|
| `NEXT_PUBLIC_SITE_URL` | `https://your-domain.com` |
| `NEXT_PUBLIC_AFFILIATE_TAG_AMAZON` | `your-amazon-tag-20` |
| `NEXT_PUBLIC_AFFILIATE_TAG_WALMART` | `your-walmart-tag` |
| `NEXT_PUBLIC_AFFILIATE_TAG_BESTBUY` | `your-bestbuy-tag` |
| `NEXT_PUBLIC_AFFILIATE_TAG_TARGET` | `your-target-tag` |
| `NEXT_PUBLIC_AFFILIATE_TAG_REI` | `your-rei-tag` |
| `NEXT_PUBLIC_AFFILIATE_TAG_BHPHOTO` | `your-bhphoto-tag` |
| `DATABASE_URL` | `libsql://gearscope-your-org.turso.io` |
| `DATABASE_AUTH_TOKEN` | `your-turso-auth-token` |

## Step 6: Custom Domain (Optional)
1. In Cloudflare Pages → Custom domains
2. Add your domain (e.g., gearscope.com)
3. Update DNS records as instructed

## Updating Affiliate Links

### Method 1: Cloudflare Dashboard (Recommended)
1. Go to Cloudflare Pages → Settings → Environment variables
2. Update the `NEXT_PUBLIC_AFFILIATE_TAG_*` values
3. Redeploy (push a commit or manual redeploy)

### Method 2: Admin Panel
1. Visit `https://your-domain.com/#affiliate-settings`
2. Update tags in the UI
3. Changes save to database immediately (no redeployment needed)
4. Note: Env var values always take precedence over database values

### Method 3: Bulk Update via Admin
1. Visit `https://your-domain.com/#affiliate-settings`
2. Use "Bulk Update" section
3. Apply new tag to Amazon only or all merchants at once

## Adding New Products

1. Visit `https://your-domain.com/#admin-products`
2. Click "Add Product"
3. Fill in the product details
4. Upload product image
5. Save — product appears immediately on the site

## Troubleshooting

### Images not loading
- Make sure images are uploaded to Cloudflare R2 or use external image URLs
- The `/public/images/` folder works in development but won't persist on Cloudflare Pages
- For production, use Cloudflare Images or external CDN URLs

### Database connection errors
- Verify DATABASE_URL and DATABASE_AUTH_TOKEN are set correctly
- Turso database must be created and schema pushed before deployment

### Build errors
- Run `npx @cloudflare/next-on-pages` locally to test the build
- Check that all API routes are compatible with edge runtime

Build a complete, production-ready Next.js 14 affiliate website inspired by Amazon’s visual layout and shopping UX, but branded as its own independent affiliate site. Do not copy Amazon’s logo, brand assets, or exact trade dress. Use the App Router, Tailwind CSS, and TypeScript. The site must be static-export compatible, deployable to Cloudflare Pages or Vercel, with no database and no server-only runtime dependencies.

Use MDX for content and a clean content-driven architecture so I can add new product reviews, category pages, and buying guides easily. The code should be organized, reusable, and ready for real content replacement later.

Core affiliate compliance (must appear on every page with affiliate links):
- Show a clear disclosure immediately before the first affiliate link on the page:
  “As an Amazon Associate I earn from qualifying purchases.”
- Use a reusable Disclosure component and place it consistently in layouts, templates, and CTA sections.

Global header
- Amazon-inspired dark navy header background (#131921).
- Full-width layout with three sections:
  - Left: brand/logo area with “ShopName” text and a simple smile-style placeholder mark in a div.
  - Center: a prominent Amazon-like search bar visual style with rounded white input and orange submit button. Search should query the site’s own content, not Amazon.
  - Right: “Hello, Sign in”, “Returns & Orders”, and a cart icon. The cart icon may be decorative or optionally link out with affiliate tag if appropriate.
- Include a secondary navigation bar (#232f3e) with:
  - Today’s Deals
  - Best Sellers
  - Reviews
  - Blog
  - About
- Header must be fully responsive:
  - On mobile, collapse secondary nav into a hamburger menu.
  - Keep search usable on mobile, with good spacing and touch targets.
- Add sticky behavior on scroll if it improves UX.
- Include hover states, keyboard focus states, and accessible labels.

Homepage
- Hero banner with a single primary CTA button: “Shop Now”, linking to a featured best-seller product page using the affiliate tag.
- A “Product Categories” section using card-style blocks similar to Amazon category tiles:
  - image
  - title
  - short description
  - category link
- A “Top Picks for You” section with 4–6 product cards:
  - image
  - title
  - star rating
  - price text
  - brief summary
  - “View on Amazon” button
- Add a “Why trust us” or “How we pick products” block to increase credibility.
- Add a compact email capture or newsletter CTA only if it does not distract from the affiliate flow.
- Footer should include:
  - disclosure
  - About
  - Privacy Policy
  - Contact
  - Terms
  - Sitemap link

Product review page template: /products/[slug]
- MDX-powered product reviews stored in /content/products/.
- Each review page must include:
  - H1 title
  - featured image
  - star rating, manually entered
  - disclosure component before any affiliate CTA
  - short summary / verdict box
  - Amazon product features table with key-value fields
  - prominent “Check Price on Amazon” button
  - full review content
  - pros and cons list
  - key specifications
  - who it is for / who should skip it
  - final CTA
  - related products section
- All Amazon links must use the affiliate tracking ID consistently.
- Use a utility function:
  getAffiliateUrl(asin: string)
  which returns:
  https://www.amazon.com/dp/${asin}?tag=YOUR_TRACKING_ID-20
- Add JSON-LD Product schema on review pages, including rating, brand, image, and offers when available.
- Include breadcrumbs and a “last updated” date.

Buying guide template
- Create a reusable buying guide page/template using the same design system.
- Include:
  - introduction
  - recommended products list
  - comparison table
  - decision guide by use case
  - FAQ section
  - CTA blocks to relevant product pages
- Make it easy to turn this into category hub pages later.

Category pages: /category/[slug]
- Display a grid of product cards for each category.
- Include simple filter UI for price and rating.
- Sorting options:
  - featured
  - highest rated
  - lowest price
  - newest
- Cards should link to individual review pages.
- Support empty states gracefully if a category has no content.

Search page
- Build /search?q=... as a static-export-compatible search experience.
- Since the site is static, use either:
  - a build-time generated search index, or
  - client-side filtering over prebuilt content data.
- Search should look through MDX frontmatter and relevant content fields.
- Display matching results as product cards with title, image, rating, price, and excerpt.
- Include no-results state and search suggestions.

Data source
- Product data must be stored in MDX frontmatter or a local JSON/TypeScript file.
- Use a strongly typed content model for:
  - title
  - slug
  - image
  - excerpt
  - category
  - brand
  - features
  - pros
  - cons
  - price
  - rating
  - affiliate ASIN
  - Amazon URL or generated affiliate URL
  - tags
  - updated date
- Include sample content for a few coffee makers and related kitchen products.
- Ensure content is easy to replace later with real products.

Affiliate link generation
- All Amazon product links must append ?tag=YOUR_TRACKING_ID-20.
- All outbound Amazon links should be generated through a single utility to avoid mistakes.
- Use rel="nofollow sponsored" and target="_blank" on affiliate links.
- Centralize link rendering in a reusable AffiliateLink component.

Styling and visual system
- Use Tailwind CSS to recreate an Amazon-inspired palette:
  - dark headers
  - orange CTA buttons (#febd69 and/or #f90)
  - light gray page backgrounds (#eaeded)
  - white product cards with subtle borders and shadows
- Make the site feel premium, clean, and conversion-focused rather than cluttered.
- Use consistent spacing, rounded corners, accessible contrast, and polished hover effects.
- Add skeleton loaders or shimmer placeholders where relevant.
- Ensure the design is mobile-first and responsive.

Performance and SEO
- Use static export-friendly rendering only.
- Optimize for Core Web Vitals:
  - lazy-load below-the-fold images
  - use next/image where compatible with static export
  - avoid heavy runtime dependencies
  - minimize client-side JavaScript where possible
- Add:
  - metadata per page
  - canonical URLs
  - Open Graph and Twitter card metadata
  - sitemap.xml
  - robots.txt
  - structured data where appropriate
- Include a 404 page and basic error states.

Additional pages
- About page with a disclosure that the site is a participant in the Amazon Associates Program.
- Privacy Policy page with standard affiliate disclosures.
- Contact page.
- Terms page.
- Optional FAQ page.

Content and UX enhancements
- Add breadcrumbs on all inner pages.
- Add related products and related categories sections.
- Include “best for” labels on product cards.
- Add review dates and author blocks.
- Add a sticky CTA on mobile for product review pages.
- Add a back-to-top button on long pages.
- Make the content architecture scalable for dozens or hundreds of products.

Deliverables
- Complete Next.js project code.
- Components, pages, layouts, utilities, and sample MDX content.
- Tailwind config and content schema/types.
- Search implementation.
- Step-by-step instructions to run, edit, and customize the site.
- Keep the code clean, modular, and production-ready.

## Authority, Trust & Editorial Standards (Critical)

The website should feel like a professional product-review publication rather than a simple affiliate website.

### Editorial Policy

Create a dedicated `/editorial-policy` page explaining:

- How products are selected.
- Review methodology.
- Rating criteria.
- How recommendations are made.
- Affiliate disclosure practices.
- Commitment to editorial independence.
- How products are researched and compared.

The page should clearly state that affiliate commissions do not influence rankings or recommendations.

### Product Testing Methodology

Create a dedicated `/how-we-test` page.

Include sections for:

- Research process.
- Product comparison framework.
- Evaluation criteria.
- Performance scoring.
- Value-for-money scoring.
- Durability considerations.
- User experience considerations.

Design this page as a premium trust-building asset.

### Author Profiles

Create an author system.

Each review and buying guide should display:

- Author photo placeholder.
- Author name.
- Short bio.
- Areas of expertise.
- Number of reviews written.
- Last updated date.

Create author pages:

`/authors/[slug]`

with:

- Full biography.
- Expertise.
- Published reviews.
- Buying guides written.

### Editorial Independence Notice

Add a reusable component that may appear near the review summary:

"While we may earn commissions from qualifying purchases, our recommendations are based on research, comparison, and editorial evaluation."

### Trust Signals

Add reusable trust badges throughout the site:

- Researched Products
- Expert Recommendations
- Updated Regularly
- Independent Reviews

Display these in a professional, non-intrusive manner.

### Review Transparency Box

Every product review should contain a transparency section:

#### Review Summary

- Product researched
- Data sources reviewed
- Competitors compared
- Last updated date
- Editorial review status

### Rating Breakdown System

Each product review should include:

- Overall Rating
- Performance Score
- Ease of Use Score
- Value Score
- Build Quality Score
- Features Score

Display as visual rating bars.

### Comparison Methodology

For buying guides and comparison articles:

Include a section explaining:

- Why products were chosen.
- What criteria were evaluated.
- How rankings were determined.

### Content Freshness System

Every article should display:

- Published date
- Last updated date
- Review status

Example:

- Published: January 2026
- Updated: June 2026
- Review Status: Verified & Updated

### Site-Wide Trust Pages

Create the following pages:

- /about
- /contact
- /privacy-policy
- /terms
- /editorial-policy
- /how-we-test

Link all trust pages prominently in the footer.

### E-E-A-T Optimization

Structure content and metadata to align with Google's Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T) principles.

Include:

- Author information
- Organization schema
- Article schema
- Product schema
- Breadcrumb schema
- Review schema where appropriate

### Organization Information

Create reusable organization data:

- Website name
- Organization name
- Logo placeholder
- Contact email
- Social profiles

Implement Organization JSON-LD site-wide.

### Premium Publication Features

Add:

- Breadcrumb navigation.
- Related articles.
- Related buying guides.
- Related products.
- Popular reviews sidebar.
- Recently updated articles section.
- Trending categories section.
- Featured editor's picks section.

### Affiliate Compliance

Every review page must clearly separate:

- Editorial content
- Affiliate calls-to-action

Affiliate buttons should never appear before the disclosure statement.

All affiliate links should use:

- rel="nofollow sponsored"
- target="_blank"

### Professional Content Templates

Create reusable templates for:

- Product Reviews
- Best Product Roundups
- Buying Guides
- Comparisons
- Brand Reviews

All templates should follow consistent editorial standards and trust elements.

## Website Positioning

Build the website as a premium product review and recommendation publication rather than a niche-specific affiliate site.

The site must support unlimited product categories and product types without requiring architectural changes.

The initial sample content should focus on travel products and travel gadgets, but the system should be designed to support any category in the future.

Examples of categories include:

- Travel Gear
- Travel Gadgets
- Electronics
- Smart Home
- Home & Kitchen
- Office & Productivity
- Health & Wellness
- Fitness Equipment
- Outdoor & Camping
- Automotive Accessories
- Pet Products
- Baby Products
- Photography
- Gaming
- Audio Equipment
- Wearables
- Luggage
- Everyday Carry (EDC)
- Fashion Accessories
- Gifts

All categories should be dynamically generated from content data.

---

## Homepage Architecture

The homepage should resemble a premium product discovery platform.

Sections:

### Hero Section

Featured buying guide or featured product collection.

Examples:

- Best Travel Gadgets of 2026
- Best Carry-On Luggage
- Best Noise Cancelling Headphones
- Best Home Office Setups

### Popular Categories

Display category cards dynamically.

Each category includes:

- Image
- Name
- Product Count
- Explore Button

### Editor's Picks

Curated products selected by editors.

### Trending Products

Most popular products across all categories.

### Recently Updated Reviews

Latest reviewed or refreshed content.

### Best Product Roundups

Feature category buying guides.

Examples:

- Best Travel Backpacks
- Best Portable Chargers
- Best Standing Desks
- Best Wireless Earbuds

### Featured Brands

Display brands appearing within reviews.

### Browse by Category

Large category exploration section.

### Newsletter CTA

Optional newsletter signup component.

---

## Dynamic Category System

Create a content-driven category architecture.

Routes:

/category/[slug]

Examples:

/category/travel-gear  
/category/travel-gadgets  
/category/electronics  
/category/home-kitchen  
/category/fitness  
/category/outdoor

Each category page should contain:

- Category hero section
- Category description
- Featured products
- Buying guides
- Latest reviews
- Popular products
- Related categories

---

## Dynamic Brand System

Create brand pages:

/brands/[slug]

Examples:

/brands/anker  
/brands/samsonite  
/brands/apple  
/brands/bose

Each page includes:

- Brand overview
- Products reviewed
- Buying guides mentioning the brand
- Related products

## Product Data Model

Expand product frontmatter to include:
{
  title: string
  slug: string
  category: string
  subcategory: string
  brand: string
  image: string
  gallery: string[]
  rating: number
  price: string
  asin: string
  pros: string[]
  cons: string[]
  features: string[]
  bestFor: string[]
  tags: string[]
  publishedDate: string
  updatedDate: string
}

## Sample Content Requirements

Do NOT use coffee makers.

Use realistic sample products from multiple categories.

Travel Gear:

- Carry-On Luggage
- Travel Backpacks
- Packing Cubes
- Travel Pillows
- RFID Wallets

Travel Gadgets:

- Portable Power Banks
- Universal Travel Adapters
- Bluetooth Trackers
- Portable Wi-Fi Hotspots
- Portable Chargers

Electronics:

- Wireless Earbuds
- Noise Cancelling Headphones
- Portable SSDs
- Mechanical Keyboards

Home & Office:

- Standing Desks
- Office Chairs
- Monitor Arms

Fitness:

- Fitness Trackers
- Massage Guns
- Adjustable Dumbbells

Create enough sample content to demonstrate a scalable architecture.

---

## Buying Guide Templates

Support:

### Best Products

Examples:

- Best Travel Gadgets
- Best Portable Chargers
- Best Carry-On Luggage

### Product Comparisons

Examples:

- Product A vs Product B

### Brand Reviews

Examples:

- Is Brand X Worth It?

### Category Guides

Examples:

- How To Choose A Travel Backpack

---

## Advanced Search

Search should index:

- Products
- Categories
- Brands
- Buying Guides
- Comparisons
- Reviews

Results should be grouped by content type.

---

## Premium UX Features

Add:

- Sticky mobile CTA
- Product image gallery
- Product comparison tables
- Recently viewed products
- Related product recommendations
- Reading progress bar
- Share buttons
- Save for later/bookmark system using local storage
- Breadcrumbs
- Back-to-top button
- Table of contents for long articles
- Estimated reading time

---

## Revenue Optimization

Support multiple affiliate programs in the future.

Do not hardcode Amazon-only architecture.

Create an affiliate abstraction layer:

getAffiliateUrl({
  merchant,
  productId,
  trackingId
})

Supported merchants:

- Amazon
- Walmart
- Best Buy
- Target
- REI
- B&H Photo

Amazon should be the default implementation.

This allows future expansion without rewriting the site.

---

## Long-Term Scalability

The architecture should support:

- 10 categories
- 100+ categories
- 1,000+ reviews
- 10,000+ products

without requiring major refactoring.

All pages, categories, brands, reviews, buying guides, and comparison pages should be generated dynamically from content data and MDX files.

## Pricing & Affiliate Compliance Rules (Critical)

The website is an affiliate content publication and should **not display fixed product prices anywhere on the site**.

### Do Not Display

Avoid showing:

- Product prices
- Sale prices
- Discount percentages
- "Only $XX"
- "Save XX%"
- Historical pricing
- Price comparison charts
- Hardcoded pricing data

Prices change frequently and should be viewed directly on the merchant website.

### Replace Price Areas With Affiliate CTAs

Instead of displaying prices, use action-oriented buttons such as:

- Check Price on Amazon
- View Latest Price
- View on Amazon
- See Current Pricing
- Check Availability
- View Today's Deal
- Learn More on Amazon

### Product Cards

Product cards should display:

- Product image
- Product title
- Product category
- Star rating (editorial)
- Short summary
- Best For label
- Affiliate CTA button

Do not include a price field.

### Product Review Pages

Review pages should focus on:

- Features
- Benefits
- Performance
- Use cases
- Pros and cons
- Comparisons
- Editorial ratings

Do not display static pricing.

Instead include:

- Check Current Price on Amazon
- View Latest Deal on Amazon

CTA buttons.

### Product Schema

When implementing structured data:

- Omit offer price fields unless dynamically provided.
- Prioritize:
    - Product schema
    - Review schema
    - AggregateRating schema
    - Article schema

Avoid hardcoded pricing metadata.

### Data Model Update

Remove:

price: string
from the product schema.

Use:
{
  title: string
  slug: string
  category: string
  subcategory: string
  brand: string
  image: string
  gallery: string[]
  rating: number
  asin: string
  pros: string[]
  cons: string[]
  features: string[]
  bestFor: string[]
  tags: string[]
  publishedDate: string
  updatedDate: string
}

### Homepage

Do not display prices in:

- Trending Products
- Editor's Picks
- Featured Products
- Recently Reviewed Products

Display:

- Product image
- Product name
- Editorial rating
- Best For label
- Affiliate CTA

only.

### Category Pages

Do not provide price filtering.

Replace price filters with:

- Category
- Brand
- Rating
- Best For
- Product Type

### Comparison Tables

Comparison tables should compare:

- Features
- Specifications
- Ratings
- Best Use Cases
- Pros
- Cons

Do not compare prices.

### Editorial Philosophy

The website should position itself as helping users discover the right products, not helping users find the lowest price.

The purchasing decision and current pricing should always be handled on the merchant's website after the user clicks the affiliate link.

"The site should feel closer to a premium editorial publication such as a product review magazine than an e-commerce storefront. The primary focus is expert recommendations, product research, comparisons, buying guides, and reviews—not price shopping."

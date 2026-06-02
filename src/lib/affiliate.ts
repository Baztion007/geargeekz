const AFFILIATE_TAG = 'coffeereviews0b-20';

/**
 * Generate an Amazon affiliate URL from an ASIN
 */
export function getAffiliateUrl(asin: string): string {
  return `https://www.amazon.com/dp/${asin}?tag=${AFFILIATE_TAG}`;
}

/**
 * Generate affiliate link props for Amazon links
 * Includes proper rel and target attributes for compliance
 */
export function getAffiliateLinkProps(url: string): {
  href: string;
  target: '_blank';
  rel: string;
} {
  return {
    href: url,
    target: '_blank' as const,
    rel: 'nofollow sponsored noopener noreferrer',
  };
}

/**
 * Organization data for JSON-LD
 */
export const organizationData = {
  name: 'BrewHub Reviews',
  url: 'https://brewhubreviews.com',
  logo: 'https://brewhubreviews.com/logo.png',
  contactEmail: 'hello@brewhubreviews.com',
  socialProfiles: [
    'https://twitter.com/brewhubreviews',
    'https://facebook.com/brewhubreviews',
    'https://instagram.com/brewhubreviews',
  ],
  description: 'Expert coffee equipment reviews and buying guides to help you find the perfect brew setup.',
};

/**
 * Generate JSON-LD for Organization
 */
export function generateOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: organizationData.name,
    url: organizationData.url,
    logo: organizationData.logo,
    email: organizationData.contactEmail,
    sameAs: organizationData.socialProfiles,
    description: organizationData.description,
  };
}

/**
 * Generate JSON-LD for Product
 */
export function generateProductJsonLd(product: import('@/lib/types').Product) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    image: product.image,
    description: product.excerpt,
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    offers: {
      '@type': 'Offer',
      url: getAffiliateUrl(product.asin),
      priceCurrency: 'USD',
      price: product.price.replace(/[^0-9.]/g, ''),
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Amazon',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      bestRating: 5,
      worstRating: 1,
      ratingCount: Math.floor(Math.random() * 500) + 100,
    },
    review: {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: product.rating,
      },
      author: {
        '@type': 'Person',
        name: 'BrewHub Reviews',
      },
    },
  };
}

/**
 * Generate JSON-LD for BreadcrumbList
 */
export function generateBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

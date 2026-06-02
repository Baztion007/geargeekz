'use client';

import React, { useState, useMemo } from 'react';
import { getBrandBySlug, getBrandsByCategory, brands } from '@/data/brands';
import { getProductsByBrand } from '@/data/products';
import { buyingGuides } from '@/data/buying-guides';
import { useRouterStore } from '@/lib/router';
import { ProductCard } from '@/components/affiliate/ProductCard';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { StarRating } from '@/components/affiliate/RatingBar';
import { Breadcrumbs } from '@/components/affiliate/Breadcrumbs';
import { Disclosure } from '@/components/affiliate/Disclosure';
import { Building2, MapPin, Calendar, ExternalLink, ArrowLeft, Package, Globe, BookOpen, Users } from 'lucide-react';

interface BrandPageProps {
  brandSlug: string;
}

export function BrandPage({ brandSlug }: BrandPageProps) {
  const brand = getBrandBySlug(brandSlug);
  const goToBrand = useRouterStore((s) => s.goToBrand);
  const goToCategory = useRouterStore((s) => s.goToCategory);
  const goHome = useRouterStore((s) => s.goHome);
  const goToBuyingGuide = useRouterStore((s) => s.goToBuyingGuide);

  const brandProducts = useMemo(() => getProductsByBrand(brandSlug), [brandSlug]);

  // Find buying guides that mention products from this brand
  const brandGuides = useMemo(() => {
    if (!brand) return [];
    return buyingGuides.filter((guide) =>
      guide.recommendedProducts.some((slug) =>
        brandProducts.some((p) => p.slug === slug)
      )
    );
  }, [brand, brandProducts]);

  // Find related brands (share categories)
  const relatedBrands = useMemo(() => {
    if (!brand) return [];
    const brandCategorySet = new Set(brand.categories);
    return brands
      .filter((b) => b.slug !== brand.slug && b.categories.some((c) => brandCategorySet.has(c)))
      .slice(0, 6);
  }, [brand]);

  // Sort state for products
  const [sortBy, setSortBy] = useState<'rating' | 'name' | 'updated'>('rating');
  const sortedProducts = useMemo(() => {
    const sorted = [...brandProducts];
    switch (sortBy) {
      case 'rating':
        return sorted.sort((a, b) => b.rating - a.rating);
      case 'name':
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case 'updated':
        return sorted.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
      default:
        return sorted;
    }
  }, [brandProducts, sortBy]);

  // Brand not found state
  if (!brand) {
    return (
      <div className="min-h-screen bg-[#eaeded] dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-12 shadow-sm">
            <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
              <Building2 size={32} className="text-gray-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Brand Not Found</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
              We couldn&apos;t find the brand you&apos;re looking for. Browse our featured brands to discover more.
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={goHome} className="bg-amber-500 hover:bg-amber-400 text-[#0f172a] font-bold">
                <ArrowLeft size={16} className="mr-2" />
                Go Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Average rating across brand products
  const avgRating = brandProducts.length > 0
    ? brandProducts.reduce((sum, p) => sum + p.rating, 0) / brandProducts.length
    : 0;

  return (
    <div className="min-h-screen bg-[#eaeded] dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Home', route: { page: 'home' } },
            { label: brand.name },
          ]}
        />

        {/* Brand Hero */}
        <Card className="mb-6 overflow-hidden border-0 shadow-lg">
          <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] p-6 sm:p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Brand Logo/Icon */}
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0 border border-white/10">
                <Building2 size={48} className="text-[#febd69]" />
              </div>

              {/* Brand Info */}
              <div className="flex-1 min-w-0">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{brand.name}</h1>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 max-w-2xl">{brand.description}</p>

                {/* Meta info row */}
                <div className="flex flex-wrap gap-x-5 gap-y-2 mb-4">
                  {brand.founded && (
                    <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                      <Calendar size={14} className="text-[#febd69]" />
                      <span>Founded {brand.founded}</span>
                    </div>
                  )}
                  {brand.headquarters && (
                    <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                      <MapPin size={14} className="text-[#febd69]" />
                      <span>{brand.headquarters}</span>
                    </div>
                  )}
                  {brand.website && (
                    <a
                      href={brand.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[#5cc7d4] hover:text-[#febd69] text-sm transition-colors"
                    >
                      <Globe size={14} />
                      <span>Official Website</span>
                      <ExternalLink size={10} />
                    </a>
                  )}
                </div>

                {/* Stats row */}
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-[#febd69]/20 text-[#febd69] border-[#febd69]/30 px-3 py-1 text-sm font-semibold">
                    <Package size={14} className="mr-1.5" />
                    {brand.productCount} Product{brand.productCount !== 1 ? 's' : ''} Reviewed
                  </Badge>
                  {avgRating > 0 && (
                    <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 px-3 py-1 text-sm font-semibold">
                      <StarRating rating={avgRating} size="sm" showValue /> Avg. Rating
                    </Badge>
                  )}
                  <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 px-3 py-1 text-sm font-semibold">
                    <Users size={14} className="mr-1.5" />
                    {brand.categories.length} Categor{brand.categories.length !== 1 ? 'ies' : 'y'}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Products by this brand */}
        {brandProducts.length > 0 && (
          <section className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                Products by {brand.name}
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500 dark:text-gray-400">Sort by:</span>
                <div className="flex gap-1">
                  {[
                    { key: 'rating' as const, label: 'Top Rated' },
                    { key: 'name' as const, label: 'Name' },
                    { key: 'updated' as const, label: 'Recently Updated' },
                  ].map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => setSortBy(opt.key)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                        sortBy === opt.key
                          ? 'bg-[#febd69] text-[#131921]'
                          : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-[#febd69]/50'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-4">
              <Disclosure />
            </div>
          </section>
        )}

        {/* Buying Guides mentioning this brand */}
        {brandGuides.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Buying Guides Featuring {brand.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {brandGuides.map((guide) => (
                <Card
                  key={guide.id}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer card-hover-lift hover:border-[#febd69]/30"
                  onClick={() => goToBuyingGuide(guide.slug)}
                >
                  {/* Guide Image */}
                  <div className="relative h-40 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <div className="absolute bottom-3 left-3 z-20">
                      <Badge className="bg-[#febd69] text-[#131921] text-[10px] font-semibold uppercase tracking-wider">
                        {guide.guideType.replace('-', ' ')}
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3 z-20">
                      <Badge variant="secondary" className="bg-white/90 text-gray-700 text-[10px]">
                        <BookOpen size={10} className="mr-1" />
                        {guide.readingTime} min
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2 group-hover:text-[#c7511f] transition-colors line-clamp-2">
                      {guide.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                      {guide.excerpt}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Brand Categories */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {brand.name} Categories
          </h2>
          <div className="flex flex-wrap gap-2">
            {brand.categories.map((catSlug) => {
              const catName = catSlug
                .split('-')
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(' ');
              return (
                <Button
                  key={catSlug}
                  variant="outline"
                  onClick={() => goToCategory(catSlug)}
                  className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-[#febd69] hover:text-[#131921] dark:hover:text-[#febd69]"
                >
                  {catName}
                </Button>
              );
            })}
          </div>
        </section>

        {/* Related Brands */}
        {relatedBrands.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Related Brands
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {relatedBrands.map((rb) => (
                <Card
                  key={rb.slug}
                  className="group cursor-pointer hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-[#febd69]/30 card-hover-lift"
                  onClick={() => goToBrand(rb.slug)}
                >
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center group-hover:from-amber-50 group-hover:to-amber-100 dark:group-hover:from-amber-900/30 dark:group-hover:to-amber-800/30 transition-colors">
                      <Building2 size={20} className="text-gray-500 dark:text-gray-400 group-hover:text-[#febd69] transition-colors" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm group-hover:text-[#c7511f] transition-colors">
                      {rb.name}
                    </h3>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">
                      {rb.productCount} product{rb.productCount !== 1 ? 's' : ''}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

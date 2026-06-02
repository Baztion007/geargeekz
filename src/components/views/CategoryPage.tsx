'use client';

import React, { useState, useMemo } from 'react';
import { products, getProductsByCategory } from '@/data/products';
import { categories, getCategoryBySlug } from '@/data/categories';
import { getBrandsByCategory } from '@/data/brands';
import { getBuyingGuidesByCategory } from '@/data/buying-guides';
import { useRouterStore } from '@/lib/router';
import { Breadcrumbs } from '@/components/affiliate/Breadcrumbs';
import { ProductCard } from '@/components/affiliate/ProductCard';
import { Disclosure } from '@/components/affiliate/Disclosure';
import { CheckPriceButton } from '@/components/affiliate/AffiliateLink';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  SlidersHorizontal,
  PackageOpen,
  X,
  Compass,
  Clock,
  ArrowRight,
  Award,
  Sparkles,
  Package,
} from 'lucide-react';
import type { GuideType } from '@/lib/types';

interface CategoryPageProps {
  categorySlug: string;
}

type RatingFilter = 'all' | '4-plus' | '4.5-plus';
type SortOption = 'featured' | 'highest-rated' | 'newest';
type BestForFilter = 'all' | string;

const RATING_FILTERS: { value: RatingFilter; label: string }[] = [
  { value: 'all', label: 'All Ratings' },
  { value: '4-plus', label: '4+ Stars' },
  { value: '4.5-plus', label: '4.5+ Stars' },
];

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'featured', label: 'Featured' },
  { value: 'highest-rated', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest' },
];

// ─── Guide type badge styling ──────────────────────────────────────────────
function getGuideTypeBadge(type: GuideType) {
  switch (type) {
    case 'best-products':
      return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 text-xs"><Award className="w-3 h-3 mr-1" />Best Products</Badge>;
    case 'comparison':
      return <Badge className="bg-sky-100 text-sky-800 hover:bg-sky-200 text-xs"><Sparkles className="w-3 h-3 mr-1" />Comparison</Badge>;
    case 'brand-review':
      return <Badge className="bg-violet-100 text-violet-800 hover:bg-violet-200 text-xs"><Package className="w-3 h-3 mr-1" />Brand Review</Badge>;
    case 'category-guide':
      return <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 text-xs"><Compass className="w-3 h-3 mr-1" />Category Guide</Badge>;
    default:
      return null;
  }
}

export function CategoryPage({ categorySlug }: CategoryPageProps) {
  const category = getCategoryBySlug(categorySlug);
  const goToCategory = useRouterStore((s) => s.goToCategory);
  const goToBuyingGuide = useRouterStore((s) => s.goToBuyingGuide);
  const goToBrand = useRouterStore((s) => s.goToBrand);

  const [brandFilter, setBrandFilter] = useState<string>('all');
  const [ratingFilter, setRatingFilter] = useState<RatingFilter>('all');
  const [bestForFilter, setBestForFilter] = useState<BestForFilter>('all');
  const [sortOption, setSortOption] = useState<SortOption>('featured');

  const categoryProducts = useMemo(
    () => getProductsByCategory(categorySlug),
    [categorySlug]
  );

  // Get brands for this category
  const categoryBrands = useMemo(
    () => getBrandsByCategory(categorySlug),
    [categorySlug]
  );

  // Get unique bestFor values from products in this category
  const bestForOptions = useMemo(() => {
    const allBestFor = categoryProducts.flatMap((p) => p.bestFor || []);
    return [...new Set(allBestFor)].sort();
  }, [categoryProducts]);

  // Get buying guides for this category
  const categoryGuides = useMemo(
    () => getBuyingGuidesByCategory(categorySlug),
    [categorySlug]
  );

  // Get related categories (share brands or are in the same parent category)
  const relatedCategories = useMemo(() => {
    return categories.filter((c) => c.slug !== categorySlug).slice(0, 6);
  }, [categorySlug]);

  const filteredProducts = useMemo(() => {
    let result = [...categoryProducts];

    // Brand filter
    if (brandFilter !== 'all') {
      result = result.filter((p) => p.brandSlug === brandFilter);
    }

    // Rating filter
    if (ratingFilter !== 'all') {
      result = result.filter((p) => {
        switch (ratingFilter) {
          case '4-plus':
            return p.rating >= 4;
          case '4.5-plus':
            return p.rating >= 4.5;
          default:
            return true;
        }
      });
    }

    // BestFor filter
    if (bestForFilter !== 'all') {
      result = result.filter((p) => p.bestFor?.includes(bestForFilter));
    }

    // Sort
    switch (sortOption) {
      case 'highest-rated':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result.sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
        break;
      case 'featured':
      default:
        break;
    }

    return result;
  }, [categoryProducts, brandFilter, ratingFilter, bestForFilter, sortOption]);

  const hasActiveFilters = brandFilter !== 'all' || ratingFilter !== 'all' || bestForFilter !== 'all';

  const clearFilters = () => {
    setBrandFilter('all');
    setRatingFilter('all');
    setBestForFilter('all');
  };

  // Category not found
  if (!category) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 bg-gray-50 dark:bg-gray-900">
        <PackageOpen size={64} className="text-gray-300 dark:text-gray-600 mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          Category Not Found
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6 text-center">
          The category you&apos;re looking for doesn&apos;t exist.
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <Button
              key={cat.slug}
              variant="outline"
              onClick={() => goToCategory(cat.slug)}
              className="text-sm"
            >
              {cat.name}
            </Button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            {
              label: category.name,
              route: { page: 'category', slug: categorySlug },
            },
          ]}
        />

        {/* Category Hero Section */}
        <div className="relative rounded-xl overflow-hidden mb-6 shadow-lg">
          <div className="aspect-[21/9] sm:aspect-[3/1] relative">
            {category.image ? (
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  if (target.nextElementSibling) (target.nextElementSibling as HTMLElement).style.display = 'flex';
                }}
              />
            ) : null}
            <div
              className="w-full h-full absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] items-center justify-center"
              style={{ display: category.image ? 'none' : 'flex' }}
            >
              <Compass className="w-16 h-16 text-white/30" />
            </div>
            {/* Full-width gradient overlay — more dramatic */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-amber-900/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-6 sm:px-8 max-w-2xl">
                <Badge className="bg-amber-500/20 text-amber-300 border border-amber-500/20 mb-3">
                  {category.productCount} Product{category.productCount !== 1 ? 's' : ''}
                </Badge>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-2">
                  {category.name}
                </h1>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-lg">
                  {category.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Buying Guides for this category */}
        {categoryGuides.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <Compass className="w-5 h-5 text-amber-500" />
              Buying Guides
            </h2>
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {categoryGuides.map((guide) => (
                <Card
                  key={guide.id}
                  className="group cursor-pointer shrink-0 w-72 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 card-hover-lift"
                  onClick={() => goToBuyingGuide(guide.slug)}
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={guide.image}
                      alt={guide.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        if (target.nextElementSibling) (target.nextElementSibling as HTMLElement).style.display = 'flex';
                      }}
                    />
                    <div
                      className="w-full h-full items-center justify-center bg-gradient-to-br from-sky-800 to-teal-700"
                      style={{ display: 'none' }}
                    >
                      <Compass className="w-10 h-10 text-white/30" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute top-2 left-2">
                      {getGuideTypeBadge(guide.guideType)}
                    </div>
                  </div>
                  <CardContent className="p-3">
                    <h3 className="font-semibold text-sm text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 line-clamp-2 mb-1">
                      {guide.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[11px] text-gray-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {guide.readingTime} min
                      </span>
                      <span>{guide.recommendedProducts.length} products</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Filter Bar */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 mb-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <SlidersHorizontal size={16} className="text-amber-500" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Filters & Sort</span>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="ml-auto flex items-center gap-1 text-xs text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-medium"
              >
                <X size={12} />
                Clear all
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-3">
            {/* Brand Select */}
            <Select
              value={brandFilter}
              onValueChange={(v) => setBrandFilter(v)}
            >
              <SelectTrigger className="w-[160px] text-sm rounded-full" size="sm">
                <SelectValue placeholder="Brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Brands</SelectItem>
                {categoryBrands.map((brand) => (
                  <SelectItem key={brand.slug} value={brand.slug}>
                    {brand.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Rating Select */}
            <Select
              value={ratingFilter}
              onValueChange={(v) => setRatingFilter(v as RatingFilter)}
            >
              <SelectTrigger className="w-[150px] text-sm rounded-full" size="sm">
                <SelectValue placeholder="Rating" />
              </SelectTrigger>
              <SelectContent>
                {RATING_FILTERS.map((rf) => (
                  <SelectItem key={rf.value} value={rf.value}>
                    {rf.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* BestFor Select */}
            {bestForOptions.length > 0 && (
              <Select
                value={bestForFilter}
                onValueChange={(v) => setBestForFilter(v)}
              >
                <SelectTrigger className="w-[180px] text-sm rounded-full" size="sm">
                  <SelectValue placeholder="Best For" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Use Cases</SelectItem>
                  {bestForOptions.map((bf) => (
                    <SelectItem key={bf} value={bf}>
                      {bf}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}

            {/* Sort Select */}
            <Select
              value={sortOption}
              onValueChange={(v) => setSortOption(v as SortOption)}
            >
              <SelectTrigger className="w-[160px] text-sm rounded-full" size="sm">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                {SORT_OPTIONS.map((so) => (
                  <SelectItem key={so.value} value={so.value}>
                    {so.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Product Grid or Empty State */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 stagger-children">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-10 mb-6 text-center">
            <PackageOpen size={48} className="text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              No products match your filters
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
              Try adjusting your brand, rating, or use case filter to see more results.
            </p>
            <Button
              onClick={clearFilters}
              className="bg-amber-500 hover:bg-amber-400 text-[#0f172a] font-semibold"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Category Description */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 mb-6">
          <Disclosure />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            About {category.name}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            {category.description}
          </p>
          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
            <p className="text-xs text-gray-400 dark:text-gray-500">
              Browse our full selection of {category.name.toLowerCase()} above. We
              independently review and test every product we recommend.
            </p>
          </div>
        </div>

        {/* Related Categories */}
        {relatedCategories.length > 0 && (
          <div className="mb-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Explore Other Categories
            </h3>
            <div className="flex flex-wrap gap-2">
              {relatedCategories.map((cat) => (
                <Button
                  key={cat.slug}
                  variant="outline"
                  size="sm"
                  onClick={() => goToCategory(cat.slug)}
                  className="text-xs hover:border-amber-500 hover:text-amber-600 dark:hover:border-amber-400 dark:hover:text-amber-400"
                >
                  {cat.name}
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Brands in this category */}
        {categoryBrands.length > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Brands in {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {categoryBrands.map((brand) => (
                <Button
                  key={brand.slug}
                  variant="outline"
                  size="sm"
                  onClick={() => goToBrand(brand.slug)}
                  className="text-xs hover:border-amber-500 hover:text-amber-600 dark:hover:border-amber-400 dark:hover:text-amber-400"
                >
                  {brand.name}
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

'use client';

import React, { useState, useMemo } from 'react';
import { Breadcrumbs } from '@/components/affiliate/Breadcrumbs';
import { Disclosure } from '@/components/affiliate/Disclosure';
import { CheckPriceButton } from '@/components/affiliate/AffiliateLink';
import { StarRating } from '@/components/affiliate/RatingBar';
import { getTrending, getProductsByCategory } from '@/data/products';
import { categories } from '@/data/categories';
import { useRouterStore } from '@/lib/router';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  TrendingUp,
  Star,
  Award,
  Filter,
  Package,
  ArrowRight,
  Clock,
  ThumbsUp,
  Sparkles,
} from 'lucide-react';

export function TrendingPage() {
  const goToProduct = useRouterStore((s) => s.goToProduct);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const trendingProducts = useMemo(() => {
    return getTrending();
  }, []);

  const trendingCategories = useMemo(() => {
    const cats = new Set(trendingProducts.map((p) => p.categorySlug));
    return categories.filter((c) => cats.has(c.slug));
  }, [trendingProducts]);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return trendingProducts;
    return trendingProducts.filter((p) => p.categorySlug === selectedCategory);
  }, [trendingProducts, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#eaeded] dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <Breadcrumbs items={[{ label: 'Trending' }]} />

        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-[#131921] to-[#37475a] p-8 md:p-12 text-white">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-10 h-10 text-[#febd69]" />
              <h1 className="text-3xl md:text-4xl font-bold">Trending Products</h1>
            </div>
            <p className="text-lg text-gray-300 max-w-3xl">
              The gear our editors and readers are most excited about right now. These recently reviewed, highly-rated products represent the best in their categories.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm">
              <span className="flex items-center gap-1.5 text-[#febd69]">
                <TrendingUp size={14} />
                {trendingProducts.length} Trending Products
              </span>
              <span className="flex items-center gap-1.5 text-gray-400">
                <Star size={14} className="fill-current" />
                By Expert Rating
              </span>
              <span className="flex items-center gap-1.5 text-gray-400">
                <Clock size={14} />
                Recently Updated
              </span>
            </div>
          </div>
        </div>

        {/* Top 3 Spotlight */}
        {selectedCategory === 'all' && trendingProducts.length >= 3 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {trendingProducts.slice(0, 3).map((product, index) => {
              const isTop = index === 0;
              return (
                <Card
                  key={product.id}
                  className={`overflow-hidden cursor-pointer hover:shadow-xl transition-all border-2 ${
                    isTop
                      ? 'border-amber-400 md:-mt-4'
                      : index === 1
                      ? 'border-gray-300 dark:border-gray-600'
                      : 'border-amber-700/50 dark:border-amber-700/30'
                  } bg-white dark:bg-gray-800`}
                  onClick={() => goToProduct(product.slug)}
                >
                  {/* Rank header */}
                  <div
                    className={`p-3 flex items-center justify-center gap-2 ${
                      isTop
                        ? 'bg-amber-500'
                        : index === 1
                        ? 'bg-gray-400'
                        : 'bg-amber-700'
                    } text-white`}
                  >
                    <Sparkles className="w-5 h-5" />
                    <span className="font-bold text-lg">
                      {isTop ? 'Most Trending' : index === 1 ? 'Rising Star' : 'Editor Pick'}
                    </span>
                  </div>
                  <CardContent className="p-4 text-center">
                    {/* Image */}
                    <div className="w-full aspect-square bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden mb-3">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-contain p-2"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                          <Package className="w-12 h-12 text-gray-400" />
                        </div>
                      )}
                    </div>
                    <button className="text-[#007185] hover:text-[#c7511f] hover:underline text-xs mb-1">
                      {product.category}
                    </button>
                    <h3 className="font-bold text-gray-900 dark:text-white text-sm leading-tight mb-2 line-clamp-2">
                      {product.title}
                    </h3>
                    <StarRating rating={product.rating} size="sm" showValue />
                    {/* Why We Recommend */}
                    {product.bestFor.length > 0 && (
                      <div className="mt-2">
                        <Badge className="bg-[#febd69]/20 text-[#131921] dark:text-[#febd69] hover:bg-[#febd69]/20 text-[10px] px-1.5">
                          <ThumbsUp size={10} className="mr-1" />
                          {product.bestFor[0]}
                        </Badge>
                      </div>
                    )}
                    <div className="mt-3">
                      <CheckPriceButton merchant={product.merchant} productId={product.asin} size="sm" className="w-full" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* Category Filter Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 mb-6">
          <div className="flex items-center gap-2 flex-wrap">
            <Filter size={16} className="text-gray-500 mr-1" />
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#131921] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              All Categories
            </button>
            {trendingCategories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === cat.slug
                    ? 'bg-[#131921] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Trending List */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 md:p-8 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#c7511f]" />
              {selectedCategory === 'all'
                ? 'All Categories'
                : trendingCategories.find((c) => c.slug === selectedCategory)?.name}{' '}
              Trending
            </h2>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </span>
          </div>

          <div className="space-y-4">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-[#007185]/30 hover:shadow-md transition-all cursor-pointer"
                onClick={() => goToProduct(product.slug)}
              >
                {/* Rank */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#131921] to-[#37475a] flex items-center justify-center font-bold text-[#febd69] text-sm shrink-0">
                  #{index + 1}
                </div>

                {/* Image */}
                <div className="w-20 h-20 shrink-0 bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain p-1"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                      <Package className="w-8 h-8 text-gray-400" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-[#007185]">{product.category}</span>
                    {product.reviewStatus === 'verified' && (
                      <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 hover:bg-emerald-100 text-[10px] px-1.5">
                        ✓ Verified
                      </Badge>
                    )}
                    {product.bestFor && product.bestFor.length > 0 && (
                      <Badge className="bg-[#febd69]/20 text-[#131921] dark:text-[#febd69] hover:bg-[#febd69]/20 text-[10px] px-1.5">
                        <ThumbsUp size={8} className="mr-0.5" />
                        {product.bestFor[0]}
                      </Badge>
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm leading-tight mb-1 line-clamp-1 hover:text-[#c7511f]">
                    {product.title}
                  </h3>
                  <StarRating rating={product.rating} size="sm" />
                  {/* Why We Recommend */}
                  {product.bestFor.length > 1 && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-1">
                      Best for: {product.bestFor.slice(0, 3).join(' · ')}
                    </p>
                  )}
                </div>

                {/* CTA */}
                <div className="shrink-0 text-right hidden sm:block">
                  <CheckPriceButton merchant={product.merchant} productId={product.asin} size="sm" />
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <Package className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500 dark:text-gray-400">No trending products found in this category.</p>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
          <Disclosure />
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            <p>
              Trending products are selected based on our expert review scores, recent updates, and editorial interest.
              These are the products our team is most excited about right now. Individual preferences and needs may vary.
              We encourage you to read our full reviews before making a purchase decision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

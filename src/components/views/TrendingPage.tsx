'use client';

import React, { useState, useMemo } from 'react';
import { Breadcrumbs } from '@/components/affiliate/Breadcrumbs';
import { Disclosure } from '@/components/affiliate/Disclosure';
import { ProductCard } from '@/components/affiliate/ProductCard';
import { getTrending, getBestSellers } from '@/data/products';
import { categories } from '@/data/categories';
import { useRouterStore } from '@/lib/router';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  TrendingUp,
  Star,
  Clock,
  Package,
  ArrowUpDown,
  Sparkles,
  Flame,
} from 'lucide-react';

type SortOption = 'rating' | 'recent' | 'reviewed';

export function TrendingPage() {
  const goToProduct = useRouterStore((s) => s.goToProduct);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<SortOption>('rating');

  // Combine trending + best sellers, deduplicate
  const allProducts = useMemo(() => {
    const trending = getTrending();
    const bestSellers = getBestSellers();
    const seen = new Set(trending.map((p) => p.id));
    const combined = [...trending];
    for (const p of bestSellers) {
      if (!seen.has(p.id)) {
        combined.push(p);
      }
    }
    return combined;
  }, []);

  const trendingCategories = useMemo(() => {
    const cats = new Set(allProducts.map((p) => p.categorySlug));
    return categories.filter((c) => cats.has(c.slug));
  }, [allProducts]);

  const filteredProducts = useMemo(() => {
    let result = selectedCategory === 'all'
      ? [...allProducts]
      : allProducts.filter((p) => p.categorySlug === selectedCategory);

    switch (sortBy) {
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'recent':
        result.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
        break;
      case 'reviewed':
        // Products with 'verified' status first, then by rating
        result.sort((a, b) => {
          if (a.reviewStatus === 'verified' && b.reviewStatus !== 'verified') return -1;
          if (a.reviewStatus !== 'verified' && b.reviewStatus === 'verified') return 1;
          return b.rating - a.rating;
        });
        break;
    }
    return result;
  }, [allProducts, selectedCategory, sortBy]);

  const sortOptions: { key: SortOption; label: string; icon: React.ElementType }[] = [
    { key: 'rating', label: 'Expert Rating', icon: Star },
    { key: 'recent', label: 'Recently Updated', icon: Clock },
    { key: 'reviewed', label: 'Most Reviewed', icon: Flame },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Breadcrumbs items={[{ label: 'Trending' }]} />

        {/* Hero */}
        <div className="relative rounded-xl overflow-hidden mb-6 shadow-lg">
          <div className="bg-gradient-to-r from-[#131921] via-[#1e293b] to-[#0f172a] p-8 md:p-12 text-white">
            {/* Decorative elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-[10%] right-[8%] w-16 h-16 rounded-full bg-amber-500/5 border border-amber-500/10" />
              <div className="absolute bottom-[15%] right-[25%] w-10 h-10 rounded-lg bg-amber-500/5 border border-amber-500/10" />
            </div>

            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Trending on <span className="text-gradient">GearScope</span>
                </h1>
              </div>
              <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
                The gear our editors and readers are most excited about right now. Expert-tested, honestly reviewed.
              </p>
              <div className="flex items-center gap-4 mt-5 text-sm">
                <span className="flex items-center gap-1.5 text-[#febd69]">
                  <Sparkles size={14} />
                  {allProducts.length} Trending Products
                </span>
                <span className="flex items-center gap-1.5 text-gray-400">
                  <Star size={14} className="fill-current" />
                  Curated by Experts
                </span>
                <span className="flex items-center gap-1.5 text-gray-400">
                  <Clock size={14} />
                  Updated Weekly
                </span>
              </div>
            </div>
          </div>
          <div className="h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500" />
        </div>

        {/* Category filter pills + Sort */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Category pills */}
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`filter-pill ${selectedCategory === 'all' ? 'filter-pill-active' : 'filter-pill-inactive'}`}
              >
                All Categories
              </button>
              {trendingCategories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`filter-pill ${selectedCategory === cat.slug ? 'filter-pill-active' : 'filter-pill-inactive'}`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Sort options */}
            <div className="flex items-center gap-2">
              <ArrowUpDown size={14} className="text-gray-400 shrink-0" />
              {sortOptions.map((opt) => {
                const Icon = opt.icon;
                return (
                  <button
                    key={opt.key}
                    onClick={() => setSortBy(opt.key)}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                      sortBy === opt.key
                        ? 'bg-gradient-to-r from-[#febd69] to-[#f3a847] text-[#131921] shadow-sm'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    <Icon size={12} />
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Top 3 Spotlight */}
        {selectedCategory === 'all' && filteredProducts.length >= 3 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {filteredProducts.slice(0, 3).map((product, index) => {
              const isTop = index === 0;
              return (
                <Card
                  key={product.id}
                  className={`overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 border-2 rounded-xl ${
                    isTop
                      ? 'border-amber-400 md:-mt-4 shadow-lg shadow-amber-500/10'
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
                        ? 'bg-gradient-to-r from-amber-500 to-amber-400'
                        : index === 1
                        ? 'bg-gradient-to-r from-gray-400 to-gray-300'
                        : 'bg-gradient-to-r from-amber-700 to-amber-600'
                    } text-white`}
                  >
                    <Sparkles className="w-5 h-5" />
                    <span className="font-bold text-lg">
                      {isTop ? 'Most Trending' : index === 1 ? 'Rising Star' : 'Editor Pick'}
                    </span>
                  </div>
                  <CardContent className="p-4 text-center">
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
                    <div className="flex items-center justify-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={14}
                          className={star <= Math.round(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}
                        />
                      ))}
                      <span className="text-xs text-gray-500 ml-1">{product.rating.toFixed(1)}</span>
                    </div>
                    {product.bestFor.length > 0 && (
                      <div className="mt-2">
                        <Badge className="bg-[#febd69]/20 text-[#131921] dark:text-[#febd69] hover:bg-[#febd69]/20 text-[10px] px-1.5">
                          {product.bestFor[0]}
                        </Badge>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* Product Grid */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-amber-500" />
              {selectedCategory === 'all'
                ? 'All Trending Products'
                : trendingCategories.find((c) => c.slug === selectedCategory)?.name}
            </h2>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </span>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-10 text-center">
              <Package className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500 dark:text-gray-400">No trending products found in this category.</p>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
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

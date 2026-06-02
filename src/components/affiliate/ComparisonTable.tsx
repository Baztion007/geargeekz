'use client';

import React from 'react';
import { products, getProductBySlug } from '@/data/products';
import { StarRating } from '@/components/affiliate/RatingBar';
import { CheckPriceButton } from '@/components/affiliate/AffiliateLink';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Award, CheckCircle, XCircle, Package } from 'lucide-react';
import type { Product } from '@/lib/types';

export function ComparisonTable({ productSlugs }: { productSlugs: string[] }) {
  const prods = productSlugs
    .map((slug) => getProductBySlug(slug))
    .filter((p): p is Product => p !== undefined);

  if (prods.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500 dark:text-gray-400">
        <Package className="w-12 h-12 mx-auto mb-3 opacity-50" />
        <p>No products to compare. Add products using the compare feature.</p>
      </div>
    );
  }

  // Find highest rated
  const maxRating = Math.max(...prods.map((p) => p.rating));

  // Gather all feature keys
  const allFeatureKeys = new Set<string>();
  prods.forEach((p) => {
    Object.keys(p.features).forEach((key) => allFeatureKeys.add(key));
  });
  const featureKeys = Array.from(allFeatureKeys);

  return (
    <Card className="overflow-hidden border border-gray-200 dark:border-gray-700 rounded-xl">
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full min-w-[600px]">
          {/* Product headers */}
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="p-4 text-left text-sm font-semibold text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 sticky left-0 z-10 min-w-[120px]">
                Feature
              </th>
              {prods.map((product) => (
                <th
                  key={product.id}
                  className={`p-4 text-center min-w-[200px] ${
                    product.rating === maxRating
                      ? 'bg-amber-50 dark:bg-amber-900/20'
                      : 'bg-white dark:bg-gray-800'
                  }`}
                >
                  {/* Product image */}
                  <div className="w-24 h-24 mx-auto mb-3 rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-700">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain p-1"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                  <h3 className="font-bold text-sm text-gray-900 dark:text-white mb-1">
                    {product.title}
                  </h3>
                  {product.rating === maxRating && prods.length > 1 && (
                    <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 text-[10px] mb-1">
                      <Award className="w-3 h-3 mr-1" />
                      Top Rated
                    </Badge>
                  )}
                  <StarRating rating={product.rating} size="sm" showValue />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Best For row */}
            <tr className="border-b border-gray-100 dark:border-gray-700/50">
              <td className="p-3 text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50 sticky left-0">
                Best For
              </td>
              {prods.map((product) => (
                <td
                  key={product.id}
                  className={`p-3 text-center ${
                    product.rating === maxRating
                      ? 'bg-amber-50/50 dark:bg-amber-900/10'
                      : ''
                  }`}
                >
                  <div className="flex flex-wrap gap-1 justify-center">
                    {product.bestFor.slice(0, 3).map((bf) => (
                      <Badge
                        key={bf}
                        variant="secondary"
                        className="text-[10px] bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"
                      >
                        {bf}
                      </Badge>
                    ))}
                  </div>
                </td>
              ))}
            </tr>

            {/* Feature rows */}
            {featureKeys.map((key, idx) => (
              <tr
                key={key}
                className={`border-b border-gray-100 dark:border-gray-700/50 ${
                  idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50/50 dark:bg-gray-800/30'
                }`}
              >
                <td className="p-3 text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50 sticky left-0">
                  {key}
                </td>
                {prods.map((product) => (
                  <td
                    key={product.id}
                    className={`p-3 text-sm text-center text-gray-700 dark:text-gray-300 ${
                      product.rating === maxRating
                        ? 'bg-amber-50/30 dark:bg-amber-900/5'
                        : ''
                    }`}
                  >
                    {product.features[key] || '—'}
                  </td>
                ))}
              </tr>
            ))}

            {/* Pros row */}
            <tr className="border-b border-gray-100 dark:border-gray-700/50">
              <td className="p-3 text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50 sticky left-0">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  Pros
                </span>
              </td>
              {prods.map((product) => (
                <td
                  key={product.id}
                  className={`p-3 ${
                    product.rating === maxRating
                      ? 'bg-amber-50/30 dark:bg-amber-900/5'
                      : ''
                  }`}
                >
                  <ul className="space-y-1">
                    {product.pros.slice(0, 3).map((pro) => (
                      <li
                        key={pro}
                        className="text-xs text-emerald-700 dark:text-emerald-400 flex items-start gap-1"
                      >
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0" />
                        <span className="line-clamp-1">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>

            {/* Cons row */}
            <tr className="border-b border-gray-100 dark:border-gray-700/50">
              <td className="p-3 text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50 sticky left-0">
                <span className="flex items-center gap-1">
                  <XCircle className="w-4 h-4 text-red-500" />
                  Cons
                </span>
              </td>
              {prods.map((product) => (
                <td
                  key={product.id}
                  className={`p-3 ${
                    product.rating === maxRating
                      ? 'bg-amber-50/30 dark:bg-amber-900/5'
                      : ''
                  }`}
                >
                  <ul className="space-y-1">
                    {product.cons.slice(0, 3).map((con) => (
                      <li
                        key={con}
                        className="text-xs text-red-700 dark:text-red-400 flex items-start gap-1"
                      >
                        <XCircle className="w-3 h-3 mt-0.5 shrink-0" />
                        <span className="line-clamp-1">{con}</span>
                      </li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>

            {/* CTA row */}
            <tr>
              <td className="p-3 bg-gray-50 dark:bg-gray-800/50 sticky left-0" />
              {prods.map((product) => (
                <td
                  key={product.id}
                  className={`p-3 text-center ${
                    product.rating === maxRating
                      ? 'bg-amber-50/50 dark:bg-amber-900/10'
                      : 'bg-white dark:bg-gray-800'
                  }`}
                >
                  <CheckPriceButton
                    merchant={product.merchant}
                    productId={product.asin}
                  />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  );
}

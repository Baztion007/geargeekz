'use client';

import React, { useMemo } from 'react';
import { Product } from '@/lib/types';
import { useRouterStore } from '@/lib/router';
import { StarRating } from '@/components/affiliate/RatingBar';
import { Badge } from '@/components/ui/badge';
import { Award, BookOpen, Clock, ChevronRight } from 'lucide-react';

interface ProductQuickStatsProps {
  product: Product;
}

function getReviewStatusBadge(status: string) {
  switch (status) {
    case 'verified':
      return (
        <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 text-[10px] font-semibold px-1.5 py-0">
          <Award size={10} className="mr-0.5" />
          Verified
        </Badge>
      );
    case 'updated':
      return (
        <Badge className="bg-sky-100 text-sky-700 hover:bg-sky-200 dark:bg-sky-900/30 dark:text-sky-300 text-[10px] font-semibold px-1.5 py-0">
          <Clock size={10} className="mr-0.5" />
          Updated
        </Badge>
      );
    case 'new':
      return (
        <Badge className="bg-violet-100 text-violet-700 hover:bg-violet-200 dark:bg-violet-900/30 dark:text-violet-300 text-[10px] font-semibold px-1.5 py-0">
          <BookOpen size={10} className="mr-0.5" />
          New
        </Badge>
      );
    default:
      return null;
  }
}

export function ProductQuickStats({ product }: ProductQuickStatsProps) {
  const goToCategory = useRouterStore((s) => s.goToCategory);

  const readingTime = useMemo(() => {
    const wordCount = product.fullReview.split(/\s+/).length;
    return Math.max(1, Math.ceil(wordCount / 200));
  }, [product.fullReview]);

  const formattedDate = useMemo(() => {
    try {
      return new Date(product.updatedAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
    } catch {
      return product.updatedAt;
    }
  }, [product.updatedAt]);

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm overflow-hidden">
      <div className="flex items-center gap-2 sm:gap-4 px-3 sm:px-4 py-2.5 overflow-x-auto custom-scrollbar">
        {/* Star rating */}
        <div className="flex items-center gap-1.5 shrink-0">
          <StarRating rating={product.rating} size="sm" />
        </div>

        <div className="w-px h-5 bg-gray-200 dark:bg-gray-700 shrink-0" />

        {/* Review status */}
        {getReviewStatusBadge(product.reviewStatus)}

        <div className="w-px h-5 bg-gray-200 dark:bg-gray-700 shrink-0" />

        {/* Reading time */}
        <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 shrink-0">
          <BookOpen size={12} />
          <span className="hidden sm:inline">{readingTime} min read</span>
          <span className="sm:hidden">{readingTime}m</span>
        </span>

        <div className="w-px h-5 bg-gray-200 dark:bg-gray-700 shrink-0" />

        {/* Last updated */}
        <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 shrink-0">
          <Clock size={12} />
          <span className="hidden sm:inline">Updated {formattedDate}</span>
          <span className="sm:hidden">{formattedDate}</span>
        </span>

        <div className="w-px h-5 bg-gray-200 dark:bg-gray-700 shrink-0" />

        {/* Category link */}
        <button
          onClick={() => goToCategory(product.categorySlug)}
          className="flex items-center gap-1 text-xs text-[#007185] dark:text-[#5cc7d4] hover:underline shrink-0 font-medium"
        >
          {product.category}
          <ChevronRight size={12} />
        </button>
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import { useBookmarkStore } from '@/lib/bookmarks';
import { getProductBySlug } from '@/data/products';
import { ProductCard } from '@/components/affiliate/ProductCard';
import { useRouterStore } from '@/lib/router';
import { Bookmark, Trash2, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Breadcrumbs } from '@/components/affiliate/Breadcrumbs';
import type { Product } from '@/lib/types';

export function BookmarksPage() {
  const bookmarks = useBookmarkStore((s) => s.bookmarks);
  const removeBookmark = useBookmarkStore((s) => s.removeBookmark);
  const clearBookmarks = useBookmarkStore((s) => s.clearBookmarks);

  const prods = bookmarks
    .map((slug) => getProductBySlug(slug))
    .filter((p): p is Product => p !== undefined);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs
        items={[
          { label: 'Bookmarks' },
        ]}
      />

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Bookmark className="w-7 h-7 text-amber-500" />
            My Bookmarks
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
            {prods.length} saved product{prods.length !== 1 ? 's' : ''}
          </p>
        </div>
        {prods.length > 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={clearBookmarks}
            className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 border-red-200 dark:border-red-800"
          >
            <Trash2 className="w-4 h-4 mr-1" />
            Clear All
          </Button>
        )}
      </div>

      {prods.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
            <Bookmark className="w-10 h-10 text-gray-300 dark:text-gray-500" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            No Bookmarks Yet
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-6">
            Save products you&apos;re interested in by clicking the bookmark icon on any product card. They&apos;ll appear here for easy access.
          </p>
          <Button
            onClick={() => useRouterStore.getState().goHome()}
            className="bg-amber-500 hover:bg-amber-400 text-[#0f172a] font-bold"
          >
            Browse Products
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 stagger-children">
          {prods.map((product) => (
            <div key={product.id} className="relative group">
              <ProductCard product={product} />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeBookmark(product.slug);
                }}
                className="absolute top-2 right-2 z-10 w-8 h-8 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50 dark:hover:bg-red-900/30"
                title="Remove bookmark"
              >
                <X className="w-4 h-4 text-red-500" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function X({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

'use client';

import React from 'react';
import { Breadcrumbs } from '@/components/affiliate/Breadcrumbs';
import { useRouterStore } from '@/lib/router';
import { Button } from '@/components/ui/button';
import { Package, ArrowRight } from 'lucide-react';

export function DealsPage() {
  const goHome = useRouterStore((s) => s.goHome);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <Breadcrumbs items={[{ label: 'Deals' }]} />

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-12 text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-amber-50 dark:bg-amber-900/20 rounded-full flex items-center justify-center">
            <Package className="w-10 h-10 text-amber-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Check Prices on GearScope</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto mb-6">
            GearScope doesn&apos;t display prices directly — we link you to the retailer for the most up-to-date pricing. 
            Click &quot;Check Price&quot; on any product to see the latest deal.
          </p>
          <Button
            onClick={goHome}
            className="bg-amber-500 hover:bg-amber-400 text-[#0f172a] font-bold px-8 py-3 h-auto"
          >
            Browse Reviews
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}

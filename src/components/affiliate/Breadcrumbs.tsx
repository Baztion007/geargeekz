'use client';

import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { useRouterStore } from '@/lib/router';
import { RoutePath } from '@/lib/types';

interface BreadcrumbItem {
  label: string;
  route?: RoutePath;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const goHome = useRouterStore((s) => s.goHome);
  const navigate = useRouterStore((s) => s.navigate);

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
      <ol className="flex items-center flex-wrap gap-1">
        <li className="flex items-center">
          <button
            onClick={goHome}
            className="hover:text-[#c7511f] hover:underline flex items-center gap-1"
          >
            <Home size={14} />
            Home
          </button>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight size={14} className="text-gray-400 mx-1" />
            {item.route ? (
              <button
                onClick={() => navigate(item.route!)}
                className="hover:text-[#c7511f] hover:underline"
              >
                {item.label}
              </button>
            ) : (
              <span className="text-gray-700 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

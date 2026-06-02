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

export function BackToTop() {
  const [visible, setVisible] = React.useState(false);
  const [scrollPercent, setScrollPercent] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setVisible(scrollY > 300);
      if (docHeight > 0) {
        setScrollPercent(Math.round((scrollY / docHeight) * 100));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-amber-500 to-orange-500 text-white w-12 h-12 rounded-full shadow-xl hover:shadow-2xl hover:shadow-amber-500/30 transition-all flex items-center justify-center hover:scale-110 animate-in fade-in duration-300"
      aria-label={`Back to top (${scrollPercent}% scrolled)`}
    >
      <div className="flex flex-col items-center leading-none">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M18 15l-6-6-6 6" />
        </svg>
        <span className="text-[8px] font-bold mt-0.5">{scrollPercent}%</span>
      </div>
    </button>
  );
}

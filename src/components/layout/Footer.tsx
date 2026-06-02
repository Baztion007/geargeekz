'use client';

import React from 'react';
import { useRouterStore } from '@/lib/router';
import { Shield, Award, RefreshCw, Search, Compass } from 'lucide-react';

export function Footer() {
  const goHome = useRouterStore((s) => s.goHome);
  const goToPage = useRouterStore((s) => s.goToPage);
  const goToWishlist = useRouterStore((s) => s.goToWishlist);
  const navigate = useRouterStore((s) => s.navigate);

  const footerLinks = {
    'Get to Know Us': [
      { label: 'About GearScope', action: () => goToPage('about') },
      { label: 'Wishlist', action: () => goToWishlist() },
      { label: 'Editorial Policy', action: () => goToPage('editorial-policy') },
      { label: 'How We Test', action: () => goToPage('how-we-test') },
      { label: 'Contact Us', action: () => goToPage('contact') },
    ],
    'Categories': [
      { label: 'Travel Gear', action: () => navigate({ page: 'category', slug: 'travel-gear' }) },
      { label: 'Travel Gadgets', action: () => navigate({ page: 'category', slug: 'travel-gadgets' }) },
      { label: 'Electronics', action: () => navigate({ page: 'category', slug: 'electronics' }) },
      { label: 'Home & Office', action: () => navigate({ page: 'category', slug: 'home-office' }) },
      { label: 'Fitness', action: () => navigate({ page: 'category', slug: 'fitness' }) },
    ],
    'Legal': [
      { label: 'Privacy Policy', action: () => goToPage('privacy') },
      { label: 'Terms of Service', action: () => goToPage('terms') },
      { label: 'Affiliate Disclosure', action: () => goToPage('about') },
    ],
  };

  return (
    <footer className="bg-[#232f3e] text-gray-300 relative">
      {/* Top gradient border — warm amber accent */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#febd69] to-transparent" />

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-full bg-[#37475a] hover:bg-[#485769] text-white text-sm py-3.5 transition-all duration-200 hover:shadow-inner"
      >
        Back to top
      </button>

      {/* Trust badges */}
      <div className="bg-[#37475a] py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Compass, label: 'Expert-Tested Gear', desc: 'Real-world product testing' },
              { icon: Award, label: 'Unbiased Reviews', desc: 'Independent editorial process' },
              { icon: RefreshCw, label: 'Updated Regularly', desc: 'Reviews kept current' },
              { icon: Shield, label: 'Multi-Retailer', desc: 'Amazon, Walmart, Best Buy & more' },
            ].map((badge, index) => (
              <div
                key={badge.label}
                className="flex flex-col items-center gap-2 group cursor-default"
              >
                <div className="w-12 h-12 rounded-full bg-[#232f3e]/60 flex items-center justify-center group-hover:bg-[#232f3e] transition-colors duration-300 group-hover:scale-110 transform">
                  <badge.icon className="text-[#febd69] transition-transform duration-300" size={22} />
                </div>
                <span className="text-white text-sm font-semibold group-hover:text-[#febd69] transition-colors duration-200">{badge.label}</span>
                <span className="text-gray-400 text-xs">{badge.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-500/30 to-transparent" />

      {/* Footer links */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Object.entries(footerLinks).map(([title, links], idx) => (
            <div key={title}>
              <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">{title}</h3>
              <div className="h-0.5 w-8 bg-gradient-to-r from-[#febd69] to-transparent mb-4 rounded-full" />
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={link.action}
                      className="text-gray-400 hover:text-[#febd69] text-sm transition-colors duration-200 amazon-link py-0.5"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-500/30 to-transparent" />

      {/* Newsletter section with gradient background */}
      <div className="bg-gradient-to-r from-[#131921] via-[#1a2332] to-[#131921] py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#febd69]/20 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#febd69" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Get the GearScope Newsletter</h3>
                <p className="text-gray-400 text-xs">Weekly reviews, guides, and recommendations</p>
              </div>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 sm:w-64 px-4 py-2 rounded-lg bg-[#232f3e] border border-gray-600 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-[#febd69] focus:ring-1 focus:ring-[#febd69]/30 transition-all"
              />
              <button
                onClick={() => {
                  const el = document.querySelector('input[type="email"]') as HTMLInputElement;
                  if (el?.value) {
                    fetch('/api/newsletter', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ email: el.value.trim() }),
                    }).then(() => { el.value = ''; });
                  }
                }}
                className="px-5 py-2 bg-gradient-to-r from-[#febd69] to-[#f3a847] text-[#131921] font-semibold text-sm rounded-lg hover:shadow-md hover:shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Affiliate disclosure */}
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#131921] rounded-xl p-5 text-center border border-gray-700/30">
            <p className="text-xs text-gray-400 leading-relaxed">
              <strong className="text-gray-300">Affiliate Disclosure:</strong> GearScope earns commissions from qualifying purchases through affiliate links on this site.
              We participate in affiliate programs with Amazon, Walmart, Best Buy, and other retailers. Our recommendations are based on research,
              comparison, and editorial evaluation. Affiliate commissions do not influence our rankings or recommendations.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#131921] py-5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button onClick={goHome} className="text-white font-bold text-lg hover:opacity-90 transition-opacity">
            Gear<span className="gradient-text">Scope</span>
          </button>
          <p className="text-gray-500 text-xs text-center">
            © {new Date().getFullYear()} GearScope. All rights reserved.
            All product names, logos, and brands are property of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}

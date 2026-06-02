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
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#febd69] to-transparent" />
      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-full bg-[#37475a] hover:bg-[#485769] text-white text-sm py-3 transition-colors"
      >
        Back to top
      </button>

      {/* Trust badges */}
      <div className="bg-[#37475a] py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { icon: Compass, label: 'Expert-Tested Gear', desc: 'Real-world product testing' },
              { icon: Award, label: 'Unbiased Reviews', desc: 'Independent editorial process' },
              { icon: RefreshCw, label: 'Updated Regularly', desc: 'Reviews kept current' },
              { icon: Shield, label: 'Multi-Retailer', desc: 'Amazon, Walmart, Best Buy & more' },
            ].map((badge, index) => (
              <div key={badge.label} className="flex flex-col items-center gap-1 gentle-float" style={{ animationDelay: `${index * 0.2}s` }}>
                <badge.icon className="text-[#febd69]" size={24} />
                <span className="text-white text-sm font-semibold">{badge.label}</span>
                <span className="text-gray-400 text-xs">{badge.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-bold mb-3 text-sm">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={link.action}
                      className="text-gray-400 hover:text-white text-sm transition-colors amazon-link"
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

      {/* Affiliate disclosure */}
      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="bg-[#131921] rounded-lg p-4 text-center">
            <p className="text-xs text-gray-400 leading-relaxed">
              <strong className="text-gray-300">Affiliate Disclosure:</strong> GearScope earns commissions from qualifying purchases through affiliate links on this site.
              We participate in affiliate programs with Amazon, Walmart, Best Buy, and other retailers. Our recommendations are based on research,
              comparison, and editorial evaluation. Affiliate commissions do not influence our rankings or recommendations.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#131921] py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <button onClick={goHome} className="text-white font-bold text-lg">
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

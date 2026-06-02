'use client';

import React from 'react';
import { getAffiliateUrl, getAffiliateLinkProps } from '@/lib/affiliate';
import { ExternalLink } from 'lucide-react';

interface AffiliateLinkProps {
  asin: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'button' | 'link';
}

export function AffiliateLink({ asin, children, className = '', variant = 'link' }: AffiliateLinkProps) {
  const url = getAffiliateUrl(asin);
  const linkProps = getAffiliateLinkProps(url);

  if (variant === 'button') {
    return (
      <a
        {...linkProps}
        className={`inline-flex items-center justify-center gap-2 bg-[#febd69] hover:bg-[#f3a847] text-[#131921] font-bold px-6 py-3 rounded-lg transition-all hover:shadow-lg active:scale-[0.98] ${className}`}
      >
        {children}
        <ExternalLink size={16} />
      </a>
    );
  }

  return (
    <a
      {...linkProps}
      className={`text-[#007185] hover:text-[#c7511f] hover:underline inline-flex items-center gap-1 ${className}`}
    >
      {children}
      <ExternalLink size={12} className="shrink-0" />
    </a>
  );
}

interface CheckPriceButtonProps {
  asin: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function CheckPriceButton({ asin, className = '', size = 'md' }: CheckPriceButtonProps) {
  const url = getAffiliateUrl(asin);
  const linkProps = getAffiliateLinkProps(url);

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <a
      {...linkProps}
      className={`inline-flex items-center justify-center gap-2 bg-[#febd69] hover:bg-[#f3a847] text-[#131921] font-bold rounded-lg transition-all hover:shadow-lg active:scale-[0.98] ${sizeClasses[size]} ${className}`}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
      </svg>
      Check Price on Amazon
      <ExternalLink size={size === 'sm' ? 14 : 16} />
    </a>
  );
}

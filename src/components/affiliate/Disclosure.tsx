'use client';

import React from 'react';
import { Info } from 'lucide-react';

export function Disclosure({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <p className="text-xs text-gray-500 italic">
        As an Amazon Associate I earn from qualifying purchases.
      </p>
    );
  }

  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-start gap-2 my-4">
      <Info className="text-amber-600 shrink-0 mt-0.5" size={16} />
      <p className="text-sm text-amber-800">
        <strong>Affiliate Disclosure:</strong> As an Amazon Associate I earn from qualifying purchases. 
        This does not affect our editorial independence — our recommendations are based on research, 
        comparison, and expert evaluation.
      </p>
    </div>
  );
}

export function EditorialIndependence() {
  return (
    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 flex items-start gap-2 my-4">
      <Info className="text-emerald-600 shrink-0 mt-0.5" size={16} />
      <p className="text-sm text-emerald-800">
        <strong>Editorial Independence:</strong> While we may earn commissions from qualifying purchases, 
        our recommendations are based on research, comparison, and editorial evaluation. Affiliate commissions 
        do not influence our rankings or recommendations.
      </p>
    </div>
  );
}

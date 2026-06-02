'use client';

import React, { useState } from 'react';
import { Bell, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { toast } from '@/hooks/use-toast';

interface PriceAlertButtonProps {
  productSlug: string;
}

export function PriceAlertButton({ productSlug }: PriceAlertButtonProps) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [targetPrice, setTargetPrice] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) return;

    setLoading(true);
    try {
      const response = await fetch('/api/price-alert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          productSlug,
          targetPrice: targetPrice ? `$${targetPrice}` : undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 409) {
          toast({
            title: 'Alert already exists',
            description: data.error || 'You already have a price alert for this product.',
            variant: 'destructive',
          });
        } else {
          toast({
            title: 'Error',
            description: data.error || 'Failed to create price alert.',
            variant: 'destructive',
          });
        }
        return;
      }

      setSuccess(true);
      toast({
        title: 'Alert set!',
        description: "We'll notify you when the price drops!",
      });
    } catch {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (newOpen) {
      // Reset form when opening
      setSuccess(false);
      setEmail('');
      setTargetPrice('');
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-1.5 text-gray-600 border-gray-300 hover:border-[#007185] hover:text-[#007185]">
          <Bell className="w-4 h-4" />
          Get Notified
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        {success ? (
          <div className="py-4 text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-3">
              <Bell className="w-6 h-6 text-emerald-600" />
            </div>
            <DialogHeader>
              <DialogTitle className="text-center">You&apos;re Notified!</DialogTitle>
              <DialogDescription className="text-center">
                We&apos;ll notify you at <span className="font-medium text-foreground">{email}</span> when the price drops
                {targetPrice ? <span> below <span className="font-medium text-foreground">${targetPrice}</span></span> : ''}.
              </DialogDescription>
            </DialogHeader>
            <Button
              onClick={() => setOpen(false)}
              className="mt-4 bg-[#febd69] hover:bg-[#f3a847] text-[#131921] font-semibold"
            >
              Got it
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Get Notified When Price Drops</DialogTitle>
              <DialogDescription>
                We&apos;ll email you when this product&apos;s price drops{targetPrice ? ` to your target or below` : ' significantly'}.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div className="space-y-2">
                <label htmlFor="alert-email" className="text-sm font-medium text-gray-700">
                  Email address
                </label>
                <Input
                  id="alert-email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-10"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="alert-price" className="text-sm font-medium text-gray-700">
                  Target price (USD, optional)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
                  <Input
                    id="alert-price"
                    type="number"
                    step="0.01"
                    min="0.01"
                    placeholder="Any price drop"
                    value={targetPrice}
                    onChange={(e) => setTargetPrice(e.target.value)}
                    className="h-10 pl-7"
                  />
                </div>
                <p className="text-xs text-gray-400">
                  Leave blank to get notified of any significant price drop.
                </p>
              </div>
              <Button
                type="submit"
                disabled={loading || !email.trim()}
                className="w-full bg-[#febd69] hover:bg-[#f3a847] text-[#131921] font-semibold h-10"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Setting alert...
                  </>
                ) : (
                  <>
                    <Bell className="w-4 h-4 mr-2" />
                    Get Notified
                  </>
                )}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

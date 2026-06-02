'use client';

import React from 'react';
import { Breadcrumbs } from '@/components/affiliate/Breadcrumbs';
import { Disclosure } from '@/components/affiliate/Disclosure';
import { ProductCard } from '@/components/affiliate/ProductCard';
import { getAuthorBySlug } from '@/data/authors';
import { products } from '@/data/products';
import { useRouterStore } from '@/lib/router';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  User,
  BookOpen,
  Star,
  Twitter,
  Linkedin,
  ExternalLink,
  Mail,
  Award,
  Package,
} from 'lucide-react';

interface AuthorPageProps {
  authorSlug: string;
}

export function AuthorPage({ authorSlug }: AuthorPageProps) {
  const navigate = useRouterStore((s) => s.navigate);

  const author = getAuthorBySlug(authorSlug);

  if (!author) {
    return (
      <div className="min-h-screen bg-[#eaeded] dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Author Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">The author you&apos;re looking for doesn&apos;t exist.</p>
          <Button onClick={() => navigate({ page: 'home' } as any)} className="bg-[#febd69] hover:bg-[#f3a847] text-[#131921]">
            Go Home
          </Button>
        </div>
      </div>
    );
  }

  const authorProducts = products.filter((p) => p.authorSlug === authorSlug);
  const avgRating =
    authorProducts.length > 0
      ? authorProducts.reduce((sum, p) => sum + p.rating, 0) / authorProducts.length
      : 0;

  return (
    <div className="min-h-screen bg-[#eaeded] dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <Breadcrumbs items={[{ label: author.name }]} />

        {/* Author Hero */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-[#131921] to-[#37475a] p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Author photo placeholder */}
              <div className="w-28 h-28 shrink-0 rounded-full bg-white/10 border-4 border-[#febd69] flex items-center justify-center text-white text-4xl font-bold overflow-hidden">
                {author.photo ? (
                  <img src={author.photo} alt={author.name} className="w-full h-full object-cover" />
                ) : (
                  author.name.split(' ').map((n) => n[0]).join('')
                )}
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{author.name}</h1>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4">
                  <Badge className="bg-[#febd69] text-[#131921] hover:bg-[#f3a847]">
                    <BookOpen size={12} className="mr-1" />
                    {author.reviewCount} Reviews
                  </Badge>
                  <Badge className="bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30">
                    <Star size={12} className="mr-1 fill-current" />
                    {avgRating.toFixed(1)} Avg Rating
                  </Badge>
                  <Badge className="bg-white/10 text-white hover:bg-white/20">
                    <Award size={12} className="mr-1" />
                    Verified Reviewer
                  </Badge>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  {author.socialLinks?.twitter && (
                    <a
                      href={author.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#1da1f2] transition-colors flex items-center gap-1 text-sm"
                    >
                      <Twitter size={16} />
                      Twitter
                    </a>
                  )}
                  {author.socialLinks?.linkedin && (
                    <a
                      href={author.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#0077b5] transition-colors flex items-center gap-1 text-sm"
                    >
                      <Linkedin size={16} />
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Full Biography */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <User className="w-6 h-6 text-[#c7511f]" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">About {author.name.split(' ')[0]}</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{author.bio}</p>
              <Disclosure />
            </div>

            {/* Published Reviews */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-[#c7511f]" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Published Reviews ({authorProducts.length})
                </h2>
              </div>
              {authorProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {authorProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 dark:text-gray-400 text-center py-8">
                  No published reviews yet.
                </p>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Expertise */}
            <Card className="border border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#007185]" />
                  Areas of Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {author.expertise.map((exp) => (
                    <Badge
                      key={exp}
                      className="bg-[#007185]/10 text-[#007185] hover:bg-[#007185]/20 border border-[#007185]/20"
                    >
                      {exp}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <Card className="border border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">Review Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Total Reviews</span>
                    <span className="font-bold text-gray-900 dark:text-white">{author.reviewCount}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Average Rating</span>
                    <span className="font-bold text-amber-600">{avgRating.toFixed(1)} ★</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Categories</span>
                    <span className="font-bold text-gray-900 dark:text-white">
                      {new Set(authorProducts.map((p) => p.category)).size}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Verified Reviews</span>
                    <span className="font-bold text-emerald-600">
                      {authorProducts.filter((p) => p.reviewStatus === 'verified').length}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Categories Reviewed */}
            <Card className="border border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">Categories Reviewed</h3>
                <div className="space-y-2">
                  {Array.from(new Set(authorProducts.map((p) => p.category))).map((category) => {
                    const catProduct = authorProducts.find((p) => p.category === category);
                    return (
                      <button
                        key={category}
                        onClick={() => catProduct && navigate({ page: 'category', slug: catProduct.categorySlug } as any)}
                        className="w-full text-left flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
                      >
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-[#c7511f]">{category}</span>
                        <span className="text-xs text-gray-400">
                          {authorProducts.filter((p) => p.category === category).length} review{authorProducts.filter((p) => p.category === category).length !== 1 ? 's' : ''}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Contact CTA */}
            <Card className="border border-gray-200 bg-gradient-to-br from-[#131921] to-[#37475a]">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 text-[#febd69] mx-auto mb-3" />
                <h3 className="font-bold text-white mb-2">Get in Touch</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Have a question for {author.name.split(' ')[0]}?
                </p>
                <Button
                  onClick={() => navigate({ page: 'contact' } as any)}
                  className="bg-[#febd69] hover:bg-[#f3a847] text-[#131921] font-bold w-full"
                >
                  Contact Us
                  <ExternalLink size={14} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import { Breadcrumbs } from '@/components/affiliate/Breadcrumbs';
import { Disclosure } from '@/components/affiliate/Disclosure';
import { ProductCard } from '@/components/affiliate/ProductCard';
import { CheckPriceButton } from '@/components/affiliate/AffiliateLink';
import { StarRating } from '@/components/affiliate/RatingBar';
import { getBuyingGuideBySlug } from '@/data/buying-guides';
import { getProductBySlug, products } from '@/data/products';
import { getAuthorBySlug } from '@/data/authors';
import { useRouterStore } from '@/lib/router';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  BookOpen,
  GitCompare,
  Compass,
  HelpCircle,
  ShoppingCart,
  ArrowRight,
  User,
  Calendar,
  ExternalLink,
} from 'lucide-react';

interface BuyingGuidePageProps {
  guideSlug: string;
}

export function BuyingGuidePage({ guideSlug }: BuyingGuidePageProps) {
  const navigate = useRouterStore((s) => s.navigate);
  const goToAuthor = useRouterStore((s) => s.goToAuthor);
  const goToCategory = useRouterStore((s) => s.goToCategory);

  const guide = getBuyingGuideBySlug(guideSlug);

  if (!guide) {
    return (
      <div className="min-h-screen bg-[#eaeded] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Guide Not Found</h1>
          <p className="text-gray-600 mb-4">The buying guide you&apos;re looking for doesn&apos;t exist.</p>
          <Button onClick={() => navigate({ page: 'home' } as any)} className="bg-[#febd69] hover:bg-[#f3a847] text-[#131921]">
            Go Home
          </Button>
        </div>
      </div>
    );
  }

  const author = getAuthorBySlug(guide.authorSlug);
  const recommendedProducts = guide.recommendedProducts
    .map((slug) => getProductBySlug(slug))
    .filter(Boolean) as typeof products;

  return (
    <div className="min-h-screen bg-[#eaeded]">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <Breadcrumbs
          items={[
            { label: guide.category, route: { page: 'category', slug: guide.categorySlug } as any },
            { label: guide.title },
          ]}
        />

        {/* Hero */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-[#131921] to-[#37475a] p-8 md:p-12 text-white">
            <Badge className="bg-[#febd69] text-[#131921] hover:bg-[#f3a847] mb-3">
              Buying Guide
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{guide.title}</h1>
            <p className="text-lg text-gray-300 max-w-3xl mb-4">{guide.excerpt}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              {author && (
                <button
                  onClick={() => goToAuthor(author.slug)}
                  className="flex items-center gap-1.5 hover:text-[#febd69] transition-colors"
                >
                  <User size={14} />
                  {author.name}
                </button>
              )}
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                Updated {new Date(guide.updatedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-[#c7511f]" />
            <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
          </div>
          <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
            {guide.introduction}
          </div>
          <Disclosure />
        </div>

        {/* Recommended Products */}
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <ShoppingCart className="w-6 h-6 text-[#c7511f]" />
            <h2 className="text-2xl font-bold text-gray-900">Our Top Picks</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {recommendedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        {guide.comparisonData.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <GitCompare className="w-6 h-6 text-[#c7511f]" />
              <h2 className="text-2xl font-bold text-gray-900">Comparison</h2>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="font-bold text-gray-900 min-w-[120px]">Feature</TableHead>
                    {Object.keys(guide.comparisonData[0].values).map((product) => (
                      <TableHead key={product} className="font-bold text-gray-900 min-w-[130px]">
                        {product}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {guide.comparisonData.map((row, index) => (
                    <TableRow key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                      <TableCell className="font-medium text-gray-900">{row.feature}</TableCell>
                      {Object.values(row.values).map((value, vIndex) => (
                        <TableCell key={vIndex} className="text-gray-700">
                          {value}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}

        {/* Decision Guide */}
        {guide.decisionGuide.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <Compass className="w-6 h-6 text-[#c7511f]" />
              <h2 className="text-2xl font-bold text-gray-900">Which One Is Right for You?</h2>
            </div>
            <div className="space-y-4">
              {guide.decisionGuide.map((item, index) => (
                <Card key={index} className="border border-gray-200 overflow-hidden">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 shrink-0 rounded-full bg-[#131921] text-[#febd69] flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          &quot;{item.useCase}&quot;
                        </h3>
                        <div className="flex items-center gap-2 mb-2">
                          <ArrowRight size={14} className="text-[#c7511f]" />
                          <span className="font-semibold text-[#c7511f]">{item.recommendation}</span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.reason}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* FAQ */}
        {guide.faq.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="w-6 h-6 text-[#c7511f]" />
              <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {guide.faq.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="border border-gray-200 rounded-lg px-4 data-[state=open]:bg-gray-50"
                >
                  <AccordionTrigger className="text-left text-sm font-semibold text-gray-900 hover:text-[#c7511f] hover:no-underline py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-gray-600 leading-relaxed pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}

        {/* CTA Block */}
        <div className="bg-gradient-to-r from-[#131921] to-[#37475a] rounded-lg p-8 text-center text-white mb-6">
          <h2 className="text-2xl font-bold mb-3">Ready to Make Your Choice?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Check the latest prices on Amazon and find the best deal for your perfect coffee
            equipment.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {recommendedProducts.slice(0, 3).map((product) => (
              <CheckPriceButton key={product.id} asin={product.asin} size="md" />
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">
            As an Amazon Associate, we earn from qualifying purchases. Prices last checked on{' '}
            {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}.
          </p>
        </div>

        {/* Author Card */}
        {author && (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 shrink-0 rounded-full bg-gradient-to-br from-[#131921] to-[#37475a] flex items-center justify-center text-white text-xl font-bold cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => goToAuthor(author.slug)}
              >
                {author.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Written by</p>
                <button
                  onClick={() => goToAuthor(author.slug)}
                  className="font-bold text-gray-900 hover:text-[#c7511f] transition-colors"
                >
                  {author.name}
                </button>
                <p className="text-sm text-gray-600 line-clamp-2 mt-1">{author.bio.substring(0, 120)}...</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

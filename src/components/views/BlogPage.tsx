'use client';

import React, { useState, useMemo } from 'react';
import { Breadcrumbs } from '@/components/affiliate/Breadcrumbs';
import { Disclosure } from '@/components/affiliate/Disclosure';
import { blogPosts } from '@/data/blog-posts';
import { authors, getAuthorBySlug } from '@/data/authors';
import { useRouterStore } from '@/lib/router';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  BookOpen,
  Search,
  Calendar,
  User,
  ArrowRight,
  Coffee,
  Tag,
} from 'lucide-react';

const CATEGORIES = ['All', 'Guides', 'Comparisons', 'Science', 'Tips', 'Reviews'];

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const goToBlogPost = useRouterStore((s) => s.goToBlogPost);

  const filteredPosts = useMemo(() => {
    let posts = blogPosts;

    // Filter by category
    if (selectedCategory !== 'All') {
      posts = posts.filter((p) => p.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    return posts;
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#eaeded]">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Breadcrumbs items={[{ label: 'Blog' }]} />

        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-[#131921] to-[#37475a] p-8 md:p-12 text-white">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-10 h-10 text-[#febd69]" />
              <h1 className="text-3xl md:text-4xl font-bold">BrewHub Blog</h1>
            </div>
            <p className="text-lg text-gray-300 max-w-3xl">
              Expert guides, comparisons, and tips for coffee enthusiasts
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm">
              <span className="flex items-center gap-1.5 text-[#febd69]">
                <BookOpen size={14} />
                {blogPosts.length} Articles
              </span>
              <span className="flex items-center gap-1.5 text-gray-400">
                <Tag size={14} />
                {CATEGORIES.length - 1} Categories
              </span>
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {/* Category Tabs */}
            <div className="flex items-center gap-2 flex-wrap flex-1">
              <span className="text-sm font-semibold text-gray-700 mr-1 shrink-0">Category:</span>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[#131921] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full sm:w-64 shrink-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 h-9 bg-gray-50 border-gray-200 focus-visible:ring-[#febd69]"
                aria-label="Search blog posts"
              />
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {filteredPosts.map((post) => {
              const author = getAuthorBySlug(post.authorSlug);
              return (
                <BlogCard key={post.id} post={post} author={author} onReadMore={() => goToBlogPost(post.slug)} />
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-lg shadow-sm p-12 text-center mb-6">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">No Articles Found</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              We couldn&apos;t find any articles matching your search. Try adjusting your filters or search terms.
            </p>
            <Button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="bg-[#131921] hover:bg-[#37475a] text-white"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Affiliate Disclosure */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <Disclosure />
        </div>
      </div>
    </div>
  );
}

interface BlogCardProps {
  post: typeof blogPosts[number];
  author: ReturnType<typeof getAuthorBySlug>;
  onReadMore: () => void;
}

function BlogCard({ post, author, onReadMore }: BlogCardProps) {
  const [imgError, setImgError] = useState(false);
  const goToAuthor = useRouterStore((s) => s.goToAuthor);

  const categoryColors: Record<string, string> = {
    Guides: 'bg-emerald-600',
    Comparisons: 'bg-blue-600',
    Science: 'bg-purple-600',
    Tips: 'bg-amber-600',
    Reviews: 'bg-rose-600',
  };

  return (
    <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col">
      {/* Image */}
      <div
        className="relative cursor-pointer overflow-hidden aspect-[16/9] bg-gray-100"
        onClick={onReadMore}
      >
        {post.image && !imgError ? (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#131921] to-[#37475a] flex items-center justify-center">
            <Coffee className="w-16 h-16 text-[#febd69]/50" />
          </div>
        )}

        {/* Category Badge */}
        <Badge
          className={`absolute top-3 left-3 text-white text-xs font-semibold ${categoryColors[post.category] || 'bg-gray-600'}`}
        >
          {post.category}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Title */}
        <h2
          className="font-bold text-gray-900 text-lg leading-snug mb-2 cursor-pointer hover:text-[#c7511f] transition-colors line-clamp-2"
          onClick={onReadMore}
        >
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-1">{post.excerpt}</p>

        {/* Author & Date */}
        <div className="flex items-center gap-3 mb-4 text-xs text-gray-500">
          {author && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToAuthor(author.slug);
              }}
              className="flex items-center gap-1.5 hover:text-[#c7511f] transition-colors"
            >
              <User size={12} />
              <span className="font-medium">{author.name}</span>
            </button>
          )}
          <span className="flex items-center gap-1.5">
            <Calendar size={12} />
            {formatDate(post.publishedAt)}
          </span>
        </div>

        {/* Tags */}
        <div className="flex items-center gap-1.5 flex-wrap mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-[10px] px-2 py-0 text-gray-500 border-gray-200">
              {tag}
            </Badge>
          ))}
          {post.tags.length > 3 && (
            <span className="text-[10px] text-gray-400">+{post.tags.length - 3} more</span>
          )}
        </div>

        {/* Read More */}
        <button
          onClick={onReadMore}
          className="flex items-center gap-1.5 text-sm font-semibold text-[#007185] hover:text-[#c7511f] transition-colors group/btn"
        >
          Read More
          <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </article>
  );
}

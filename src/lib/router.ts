import { create } from 'zustand';
import { RoutePath } from '@/lib/types';

interface RouterState {
  route: RoutePath;
  navigate: (route: RoutePath) => void;
  goHome: () => void;
  goToProduct: (slug: string) => void;
  goToCategory: (slug: string) => void;
  goToSearch: (query: string) => void;
  goToBuyingGuide: (slug: string) => void;
  goToAuthor: (slug: string) => void;
  goToPage: (page: RoutePath['page']) => void;
}

export const useRouterStore = create<RouterState>((set) => ({
  route: { page: 'home' },

  navigate: (route: RoutePath) => {
    set({ route });
    // Update hash for back button support
    const hash = routeToHash(route);
    if (typeof window !== 'undefined') {
      window.history.pushState({ route }, '', `#${hash}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  goHome: () => set((state) => {
    const route: RoutePath = { page: 'home' };
    if (typeof window !== 'undefined') {
      window.history.pushState({ route }, '', '#');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return { route };
  }),

  goToProduct: (slug: string) => set((state) => {
    const route: RoutePath = { page: 'product', slug };
    if (typeof window !== 'undefined') {
      window.history.pushState({ route }, '', `#product/${slug}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return { route };
  }),

  goToCategory: (slug: string) => set((state) => {
    const route: RoutePath = { page: 'category', slug };
    if (typeof window !== 'undefined') {
      window.history.pushState({ route }, '', `#category/${slug}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return { route };
  }),

  goToSearch: (query: string) => set((state) => {
    const route: RoutePath = { page: 'search', query };
    if (typeof window !== 'undefined') {
      window.history.pushState({ route }, '', `#search/${encodeURIComponent(query)}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return { route };
  }),

  goToBuyingGuide: (slug: string) => set((state) => {
    const route: RoutePath = { page: 'buying-guide', slug };
    if (typeof window !== 'undefined') {
      window.history.pushState({ route }, '', `#guide/${slug}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return { route };
  }),

  goToAuthor: (slug: string) => set((state) => {
    const route: RoutePath = { page: 'author', slug };
    if (typeof window !== 'undefined') {
      window.history.pushState({ route }, '', `#author/${slug}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return { route };
  }),

  goToPage: (page: RoutePath['page']) => set((state) => {
    const route: RoutePath = { page } as RoutePath;
    if (typeof window !== 'undefined') {
      window.history.pushState({ route }, '', `#${page}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return { route };
  }),
}));

function routeToHash(route: RoutePath): string {
  switch (route.page) {
    case 'home': return '';
    case 'product': return `product/${route.slug}`;
    case 'category': return `category/${route.slug}`;
    case 'search': return `search/${encodeURIComponent(route.query)}`;
    case 'buying-guide': return `guide/${route.slug}`;
    case 'author': return `author/${route.slug}`;
    default: return route.page;
  }
}

export function hashToRoute(hash: string): RoutePath {
  const clean = hash.replace(/^#\/?/, '');
  if (!clean) return { page: 'home' };

  const parts = clean.split('/');
  const [type, ...rest] = parts;

  switch (type) {
    case 'product':
      return { page: 'product', slug: rest.join('/') };
    case 'category':
      return { page: 'category', slug: rest.join('/') };
    case 'search':
      return { page: 'search', query: decodeURIComponent(rest.join('/')) };
    case 'guide':
      return { page: 'buying-guide', slug: rest.join('/') };
    case 'author':
      return { page: 'author', slug: rest.join('/') };
    default:
      if (['about', 'contact', 'privacy', 'terms', 'editorial-policy', 'how-we-test', 'deals', 'best-sellers', 'reviews', 'blog', 'not-found'].includes(type)) {
        return { page: type as RoutePath['page'] } as RoutePath;
      }
      return { page: 'not-found' };
  }
}

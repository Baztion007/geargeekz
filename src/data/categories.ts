import { Category } from '@/lib/types';

export const categories: Category[] = [
  {
    id: '1',
    slug: 'travel-gear',
    name: 'Travel Gear',
    description: 'Luggage, backpacks, packing organizers, and travel accessories for every trip',
    image: '/images/category-travel-gear.jpg',
    productCount: 5,
    featured: true,
  },
  {
    id: '2',
    slug: 'travel-gadgets',
    name: 'Travel Gadgets',
    description: 'Portable chargers, adapters, trackers, and tech essentials for travelers',
    image: '/images/category-travel-gadgets.jpg',
    productCount: 5,
    featured: true,
  },
  {
    id: '3',
    slug: 'electronics',
    name: 'Electronics',
    description: 'Earbuds, headphones, SSDs, keyboards, and everyday tech',
    image: '/images/category-electronics.jpg',
    productCount: 4,
    featured: true,
  },
  {
    id: '4',
    slug: 'home-office',
    name: 'Home & Office',
    description: 'Standing desks, ergonomic chairs, monitor arms, and workspace accessories',
    image: '/images/category-home-office.jpg',
    productCount: 3,
    featured: true,
  },
  {
    id: '5',
    slug: 'fitness',
    name: 'Fitness',
    description: 'Fitness trackers, massage guns, adjustable weights, and recovery gear',
    image: '/images/category-fitness.jpg',
    productCount: 3,
    featured: false,
  },
  {
    id: '6',
    slug: 'outdoor',
    name: 'Outdoor & Camping',
    description: 'Camp stoves, water filters, survival gear, and adventure essentials',
    image: '/images/category-outdoor.jpg',
    productCount: 2,
    featured: false,
  },
  {
    id: '7',
    slug: 'audio',
    name: 'Audio Equipment',
    description: 'Speakers, headphones, microphones, and sound systems',
    image: '/images/category-audio.jpg',
    productCount: 2,
    featured: false,
  },
  {
    id: '8',
    slug: 'luggage',
    name: 'Luggage',
    description: 'Carry-ons, checked bags, garment bags, and travel sets',
    image: '/images/category-luggage.jpg',
    productCount: 1,
    featured: false,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getFeaturedCategories(): Category[] {
  return categories.filter((c) => c.featured);
}

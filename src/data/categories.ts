import { Category } from '@/lib/types';

export const categories: Category[] = [
  {
    id: '1',
    slug: 'espresso-machines',
    name: 'Espresso Machines',
    description: 'From semi-automatic to manual, find the perfect espresso machine for your home setup.',
    image: '/images/category-espresso.jpg',
    productCount: 4,
  },
  {
    id: '2',
    slug: 'coffee-grinders',
    name: 'Coffee Grinders',
    description: 'Consistent grinding is the foundation of great coffee. Compare the best burr grinders for every budget.',
    image: '/images/category-grinders.jpg',
    productCount: 3,
  },
  {
    id: '3',
    slug: 'pour-over-drip',
    name: 'Pour-Over & Drip',
    description: 'Master the art of pour-over brewing with our curated selection of drippers and carafes.',
    image: '/images/category-pourover.jpg',
    productCount: 2,
  },
  {
    id: '4',
    slug: 'kettles',
    name: 'Kettles',
    description: 'Temperature control matters. Find the right kettle for your brewing method.',
    image: '/images/category-kettles.jpg',
    productCount: 2,
  },
  {
    id: '5',
    slug: 'french-press',
    name: 'French Press',
    description: 'Rich, full-bodied coffee with simple immersion brewing.',
    image: '/images/category-french-press.jpg',
    productCount: 1,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}

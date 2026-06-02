import { Author, Product } from '@/lib/types';
import { products } from './products';

export const authors: Author[] = [
  {
    slug: 'sarah-mitchell',
    name: 'Sarah Mitchell',
    photo: '/images/author-sarah.jpg',
    bio: 'Sarah is a certified Q Grader and former specialty coffee shop owner with over 12 years of experience in the coffee industry. She has tested hundreds of espresso machines, grinders, and brewing devices, and her reviews are known for their thoroughness and honesty. When she\'s not testing coffee gear, you\'ll find her competing in regional barista championships.',
    expertise: ['Espresso Machines', 'Coffee Grinders', 'Milk Frothing', 'Brewing Techniques'],
    reviewCount: 47,
    socialLinks: {
      twitter: 'https://twitter.com/sarahcoffee',
      linkedin: 'https://linkedin.com/in/sarahmitchell',
    },
  },
  {
    slug: 'james-carter',
    name: 'James Carter',
    photo: '/images/author-james.jpg',
    bio: 'James is a coffee writer and educator who has been covering the home brewing space since 2018. With a background in mechanical engineering, he brings a unique technical perspective to his product reviews. He specializes in manual brewing methods and has a particular fondness for pour-over coffee. His work has been featured in several coffee publications.',
    expertise: ['Pour-Over Brewing', 'Manual Coffee Makers', 'Kettles', 'Coffee Science'],
    reviewCount: 35,
    socialLinks: {
      twitter: 'https://twitter.com/jamesbrews',
      linkedin: 'https://linkedin.com/in/jamescarter',
    },
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find(a => a.slug === slug);
}

export function getAuthorProducts(authorSlug: string): Product[] {
  return products.filter((p) => p.authorSlug === authorSlug);
}

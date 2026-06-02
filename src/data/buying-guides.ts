import { BuyingGuide } from '@/lib/types';

export const buyingGuides: BuyingGuide[] = [
  {
    id: '1',
    slug: 'best-espresso-machine',
    title: 'Best Espresso Machine for 2026: Our Top Picks',
    excerpt: 'Our comprehensive guide to finding the perfect espresso machine for your home, budget, and brewing style.',
    image: '/images/guide-espresso.jpg',
    category: 'Espresso Machines',
    categorySlug: 'espresso-machines',
    introduction: `Choosing the right espresso machine can feel overwhelming with the sheer number of options available. Whether you're a complete beginner looking for your first machine or an experienced home barista ready to upgrade, this guide will help you find the perfect match.

We've spent hundreds of hours testing espresso machines across every price range and skill level. Our recommendations are based on real-world performance, not just specs on paper. Every machine on this list has been used daily for at least two weeks before we form our final opinion.`,
    recommendedProducts: ['breville-barista-express', 'delonghi-la-specialista', 'breville-barista-touch', 'nicos-presso'],
    comparisonData: [
      { feature: 'Price', values: { 'Barista Express': '$699', 'La Specialista': '$600', 'Barista Touch': '$999', "Nico's Presso": '$150' } },
      { feature: 'Built-in Grinder', values: { 'Barista Express': 'Yes', 'La Specialista': 'Yes', 'Barista Touch': 'Yes', "Nico's Presso": 'No' } },
      { feature: 'Milk Frothing', values: { 'Barista Express': 'Manual', 'La Specialista': 'Manual', 'Barista Touch': 'Automatic', "Nico's Presso": 'None' } },
      { feature: 'Ease of Use', values: { 'Barista Express': 'Medium', 'La Specialista': 'Easy', 'Barista Touch': 'Very Easy', "Nico's Presso": 'Hard' } },
      { feature: 'Counter Space', values: { 'Barista Express': 'Large', 'La Specialista': 'Medium', 'Barista Touch': 'Large', "Nico's Presso": 'Small' } },
      { feature: 'Best For', values: { 'Barista Express': 'All-around', 'La Specialista': 'Beginners', 'Barista Touch': 'Convenience', "Nico's Presso": 'Travel' } },
    ],
    decisionGuide: [
      {
        useCase: 'First espresso machine, want to learn',
        recommendation: 'Breville Barista Express',
        reason: 'The built-in grinder and clear controls make it the best learning platform. You can grow into it.',
      },
      {
        useCase: 'Want great espresso with minimal effort',
        recommendation: 'Breville Barista Touch',
        reason: 'Touchscreen and automatic milk frothing mean café-quality drinks with almost no learning curve.',
      },
      {
        useCase: 'On a tight budget',
        recommendation: "Nico's Presso + Baratza Encore",
        reason: 'Manual espresso maker paired with a reliable entry-level grinder gives you great shots for under $300.',
      },
      {
        useCase: 'Small kitchen or limited counter space',
        recommendation: "De'Longhi La Specialista",
        reason: 'More compact than the Breville options with smart tamping that reduces the skill needed.',
      },
      {
        useCase: 'Travel or camping',
        recommendation: "Nico's Presso",
        reason: 'No electricity needed, compact, and produces surprisingly good espresso on the go.',
      },
    ],
    faq: [
      {
        question: 'Do I need a built-in grinder?',
        answer: "A built-in grinder is convenient and saves counter space, but separate grinders often deliver better consistency. If budget allows, a dedicated grinder like the Fellow Ode or Baratza Encore paired with a machine without a grinder can produce superior results.",
      },
      {
        question: "What's the difference between semi-automatic and automatic?",
        answer: 'Semi-automatic machines require you to start and stop the extraction, giving you more control. Automatic machines stop the shot at a preset volume. Super-automatic machines handle everything from grinding to brewing at the push of a button.',
      },
      {
        question: 'How much should I spend on my first espresso machine?',
        answer: "We recommend spending at least $300-500 for a quality entry-level machine. Cheaper machines often produce inconsistent results and can be frustrating. If you're serious about espresso, the $500-1000 range offers the best balance of quality and value.",
      },
      {
        question: 'Can I make latte art with these machines?',
        answer: 'Yes, all the machines in this guide except the Nico\'s Presso have steam wands capable of producing microfoam for latte art. The Barista Touch makes it easiest with automatic milk texturing.',
      },
    ],
    updatedAt: '2026-02-01',
    authorSlug: 'sarah-mitchell',
  },
  {
    id: '2',
    slug: 'best-coffee-grinder',
    title: 'Best Coffee Grinder for 2026: Burr Grinders Ranked',
    excerpt: 'A great grinder is the most important investment in your coffee setup. Here are our top picks for every budget.',
    image: '/images/guide-grinders.jpg',
    category: 'Coffee Grinders',
    categorySlug: 'coffee-grinders',
    introduction: `If there's one piece of coffee equipment worth investing in, it's your grinder. A good grinder has more impact on cup quality than any other single piece of equipment — even the coffee maker itself.

The difference between pre-ground coffee and freshly ground beans is night and day. And within fresh grinding, the consistency of your grind determines how evenly your coffee extracts, which directly affects flavor.

We've tested over 20 grinders across every price range to find the best options for every type of coffee drinker.`,
    recommendedProducts: ['fellow-ode-grinder', 'baratza-encore', 'breville-smart-grinder'],
    comparisonData: [
      { feature: 'Price', values: { 'Fellow Ode Gen 2': '$299', 'Baratza Encore': '$149', 'Smart Grinder Pro': '$200' } },
      { feature: 'Burr Type', values: { 'Fellow Ode Gen 2': '64mm Flat (SSP)', 'Baratza Encore': '40mm Conical', 'Smart Grinder Pro': '40mm Conical' } },
      { feature: 'Grind Settings', values: { 'Fellow Ode Gen 2': '31+', 'Baratza Encore': '40', 'Smart Grinder Pro': '60' } },
      { feature: 'Espresso Capable', values: { 'Fellow Ode Gen 2': 'No', 'Baratza Encore': 'Partial', 'Smart Grinder Pro': 'Yes' } },
      { feature: 'Anti-Static', values: { 'Fellow Ode Gen 2': 'Yes', 'Baratza Encore': 'No', 'Smart Grinder Pro': 'No' } },
      { feature: 'Best For', values: { 'Fellow Ode Gen 2': 'Pour-over/Brew', 'Baratza Encore': 'Entry-level', 'Smart Grinder Pro': 'All-around' } },
    ],
    decisionGuide: [
      {
        useCase: 'Only brew pour-over or drip',
        recommendation: 'Fellow Ode Gen 2',
        reason: 'The best brew-only grinder in its class with 64mm SSP burrs and anti-static technology.',
      },
      {
        useCase: 'First burr grinder on a budget',
        recommendation: 'Baratza Encore',
        reason: 'Proven reliability and consistent grinds at the most accessible price point.',
      },
      {
        useCase: 'Use multiple brew methods including espresso',
        recommendation: 'Breville Smart Grinder Pro',
        reason: '60 settings from espresso to French press with digital dosing.',
      },
    ],
    faq: [
      {
        question: 'Why are burr grinders better than blade grinders?',
        answer: 'Burr grinders crush beans between two surfaces for consistent particle size, while blade grinders chop beans randomly, creating uneven particles that extract at different rates. This uneven extraction leads to bitter, sour, or muddy-tasting coffee.',
      },
      {
        question: 'Do I need an espresso-grade grinder?',
        answer: "Only if you make espresso. Espresso requires very fine, very consistent grounds. If you primarily brew pour-over, drip, or French press, a brew-focused grinder like the Fellow Ode will serve you better at a lower price.",
      },
      {
        question: 'How often should I clean my grinder?',
        answer: 'Light cleaning (brushing out retained grounds) should be done weekly. Deep cleaning with grinder cleaning pellets or disassembly should be done every 1-3 months depending on usage.',
      },
    ],
    updatedAt: '2026-01-25',
    authorSlug: 'sarah-mitchell',
  },
];

export function getBuyingGuideBySlug(slug: string): BuyingGuide | undefined {
  return buyingGuides.find(g => g.slug === slug);
}

export function getBuyingGuidesByCategory(categorySlug: string): BuyingGuide[] {
  return buyingGuides.filter(g => g.categorySlug === categorySlug);
}

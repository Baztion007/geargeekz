import { Product } from '@/lib/types';

export const products: Product[] = [
  {
    id: '1',
    slug: 'breville-barista-express',
    title: 'Breville BES870XL Barista Express Espresso Machine',
    image: '/images/breville-barista-express.jpg',
    gallery: [
      '/images/breville-barista-express.jpg',
      '/images/breville-barista-express-2.jpg',
      '/images/breville-barista-express-3.jpg',
    ],
    excerpt: 'The Breville Barista Express delivers third-wave specialty coffee at home, from bean to espresso in under a minute.',
    category: 'Espresso Machines',
    categorySlug: 'espresso-machines',
    brand: 'Breville',
    features: {
      'Grind Size': 'Adjustable',
      'Boiler': 'Stainless Steel Thermocoil',
      'Pressure': '15 bar Italian pump',
      'Water Tank': '67 oz / 2L',
      'Bean Hopper': '0.5 lb / 250g',
      'Dimensions': '13.1" x 12.5" x 15.8"',
      'Weight': '23 lbs',
    },
    pros: [
      'Built-in conical burr grinder for fresh grounds',
      'Precise espresso extraction with digital temperature control',
      'Powerful steam wand for microfoam milk texturing',
      'Easy to clean with removable drip tray',
      'Great value for the features offered',
    ],
    cons: [
      'Takes practice to master the grind and dose settings',
      'Relatively large footprint on the counter',
      'Steam wand could be more flexible',
      'Grinder can be noisy early in the morning',
    ],
    price: '$699.95',
    originalPrice: '$799.95',
    rating: 4.6,
    ratingBreakdown: {
      overall: 4.6,
      performance: 4.7,
      easeOfUse: 4.3,
      value: 4.5,
      buildQuality: 4.7,
      features: 4.8,
    },
    asin: 'B00CH9QWOU',
    tags: ['espresso', 'breville', 'built-in grinder', 'semi-automatic'],
    updatedAt: '2026-01-15',
    publishedAt: '2025-06-01',
    authorSlug: 'sarah-mitchell',
    reviewStatus: 'verified',
    bestFor: 'Home baristas who want fresh-ground espresso',
    summary: 'The Breville Barista Express is our top pick for home baristas who want the freshest possible espresso without the complexity of a fully manual setup. Its integrated grinder means you go from whole beans to perfect espresso in under a minute, making it one of the best values in its class.',
    fullReview: `The Breville Barista Express has been a staple in the home espresso market for years, and for good reason. It strikes an excellent balance between convenience and control, giving you the tools to pull café-quality shots without requiring barista-level expertise.

Starting with the built-in grinder — this is arguably the machine's biggest selling point. The conical burr grinder delivers consistent grounds with adjustable grind size and dose, so you can fine-tune your espresso to your exact preferences. Freshly ground beans make a noticeable difference in the cup, and having the grinder integrated saves counter space and money compared to buying a separate unit.

The thermocoil heating system with digital temperature control (PID) ensures consistent water temperature for extraction, which is critical for great espresso. The 15-bar Italian pump provides the pressure needed for a rich, crema-topped shot. We found that once dialed in, the Barista Express consistently produces well-extracted espresso with good body and flavor.

Milk frothing is handled by the steam wand, which produces good microfoam once you get the hang of it. The wand isn't as flexible as some competitors, but it gets the job done for lattes, cappuccinos, and flat whites.

Build quality is solid with stainless steel construction that feels premium. The machine is relatively easy to clean, with removable parts and a cleaning cycle for the grinder.`,
    whoIsItFor: 'Coffee enthusiasts who want fresh-ground espresso at home and are willing to learn the basics of dialing in their shots. Perfect for anyone transitioning from capsule machines to real espresso.',
    whoShouldSkip: 'If you want fully automatic one-touch operation, or if you have very limited counter space, this may not be the best fit. Also, professional baristas might prefer more manual control.',
    specifications: {
      'Brand': 'Breville',
      'Model': 'BES870XL',
      'Wattage': '1600W',
      'Pressure': '15 bar',
      'Material': 'Stainless Steel',
      'Color': 'Brushed Stainless',
      'Warranty': '1 Year Limited',
    },
    relatedProducts: ['delonghi-la-specialista', 'breville-barista-touch', 'nicos-presso'],
  },
  {
    id: '2',
    slug: 'delonghi-la-specialista',
    title: "De'Longhi La Specialista Arte Evo Espresso Machine",
    image: '/images/delonghi-la-specialista.jpg',
    gallery: [
      '/images/delonghi-la-specialista.jpg',
    ],
    excerpt: "The De'Longhi La Specialista Arte Evo brings Italian craftsmanship to your kitchen with smart tamping and consistent extraction.",
    category: 'Espresso Machines',
    categorySlug: 'espresso-machines',
    brand: "De'Longhi",
    features: {
      'Grind Size': '8 Settings',
      'Boiler': 'Thermoblock',
      'Pressure': '15 bar',
      'Water Tank': '56 oz / 1.65L',
      'Bean Hopper': '8.8 oz / 250g',
      'Dimensions': '12.2" x 14.8" x 16.9"',
      'Weight': '20.7 lbs',
    },
    pros: [
      'Smart tamping station for consistent results',
      'Active temperature control with Thermoblock',
      'Articulating steam wand for easy milk frothing',
      'Compact design compared to competitors',
      'Great tasting espresso with minimal effort',
    ],
    cons: [
      'Grinder can produce clumps in fine settings',
      'Drip tray fills up quickly',
      'No programmable shot volume',
      'Learning curve for optimal grind settings',
    ],
    price: '$599.99',
    originalPrice: '$749.99',
    rating: 4.4,
    ratingBreakdown: {
      overall: 4.4,
      performance: 4.5,
      easeOfUse: 4.5,
      value: 4.3,
      buildQuality: 4.4,
      features: 4.3,
    },
    asin: 'B09R3XMKFJ',
    tags: ['espresso', 'delonghi', 'built-in grinder', 'smart tamping'],
    updatedAt: '2026-01-10',
    publishedAt: '2025-07-15',
    authorSlug: 'sarah-mitchell',
    reviewStatus: 'updated',
    bestFor: 'Beginners who want consistent espresso with less guesswork',
    summary: "The De'Longhi La Specialista Arte Evo is an excellent entry-to-mid-level espresso machine that takes the guesswork out of tamping and temperature control. It's ideal for those who want reliable, repeatable results without spending a fortune.",
    fullReview: `De'Longhi's La Specialista Arte Evo is designed to make great espresso more accessible. The standout feature is the Smart Tamping Station, which applies consistent pressure every time, eliminating one of the most variable steps in espresso preparation.

The built-in grinder with 8 settings gives you enough range to find the right grind for your beans, though serious enthusiasts might want more granularity. The Thermoblock heating system heats up quickly and maintains stable brewing temperatures.

One of our favorite features is the articulating steam wand, which is more flexible than the Breville's and makes creating latte art noticeably easier. The machine also has a hot water spout for Americanos and tea.

Build quality is good with a mix of stainless steel and plastic. It's slightly more compact than the Breville Barista Express, which is a plus for smaller kitchens.`,
    whoIsItFor: 'Espresso beginners who want a machine that helps them get consistent results. The smart tamping feature makes it especially good for those who are just learning.',
    whoShouldSkip: 'Experienced baristas who want full manual control over every variable. Also, those who brew large batches may find the water tank a bit small.',
    specifications: {
      'Brand': "De'Longhi",
      'Model': 'EC9155MB',
      'Wattage': '1450W',
      'Pressure': '15 bar',
      'Material': 'Stainless Steel / Plastic',
      'Color': 'Matte Black',
      'Warranty': '2 Year Limited',
    },
    relatedProducts: ['breville-barista-express', 'breville-barista-touch', 'nicos-presso'],
  },
  {
    id: '3',
    slug: 'breville-barista-touch',
    title: 'Breville BES880BSS Barista Touch Espresso Machine',
    image: '/images/breville-barista-touch.jpg',
    gallery: [
      '/images/breville-barista-touch.jpg',
    ],
    excerpt: 'Touchscreen convenience meets barista-quality espresso with automatic milk texturing in a premium package.',
    category: 'Espresso Machines',
    categorySlug: 'espresso-machines',
    brand: 'Breville',
    features: {
      'Grind Size': '30 Settings',
      'Boiler': 'Thermocoil + PID',
      'Pressure': '15 bar',
      'Water Tank': '67 oz / 2L',
      'Bean Hopper': '0.5 lb / 250g',
      'Dimensions': '12.7" x 13.1" x 15.4"',
      'Weight': '22.3 lbs',
    },
    pros: [
      'Intuitive touchscreen interface',
      'Automatic milk texturing with adjustable temperature',
      'Built-in grinder with 30 settings',
      'Saves up to 8 personalized drinks',
      'Fast heat-up time (3 seconds)',
    ],
    cons: [
      'Premium price point',
      'Touchscreen can be finicky with wet hands',
      'Auto milk frother needs regular cleaning',
      'Larger footprint than some competitors',
    ],
    price: '$999.95',
    originalPrice: '$1,099.95',
    rating: 4.7,
    ratingBreakdown: {
      overall: 4.7,
      performance: 4.8,
      easeOfUse: 4.9,
      value: 4.2,
      buildQuality: 4.7,
      features: 4.9,
    },
    asin: 'B07GKS387R',
    tags: ['espresso', 'breville', 'touchscreen', 'automatic milk frother'],
    updatedAt: '2026-02-01',
    publishedAt: '2025-05-20',
    authorSlug: 'james-carter',
    reviewStatus: 'verified',
    bestFor: 'Those who want cafe-quality drinks at the touch of a button',
    summary: 'The Breville Barista Touch is the premium choice for those who want personalized, café-quality drinks without the learning curve. Its touchscreen interface and automatic milk texturing make it incredibly easy to use.',
    fullReview: `The Barista Touch takes everything great about the Barista Express and adds a layer of convenience that makes café-quality drinks accessible to everyone. The touchscreen is the star of the show — it guides you through each drink with clear visuals and lets you customize and save up to 8 personalized drinks.

The automatic milk frother is a game-changer for anyone who struggles with manual steaming. It textures milk to your preferred temperature and consistency, and works with any type of milk including oat, almond, and soy.

With 30 grind settings, you have much more control over your grind compared to the Barista Express. The 3-second heat-up time means you don't have to wait around in the morning, and the PID temperature control ensures consistent extraction every time.

Build quality is excellent with brushed stainless steel throughout. The machine feels solid and well-engineered, as you'd expect at this price point.`,
    whoIsItFor: 'Busy professionals and families who want premium espresso drinks without the learning curve. Also great for anyone who drinks a variety of milk-based espresso drinks.',
    whoShouldSkip: "Budget-conscious buyers, manual espresso purists, and anyone who doesn't drink milk-based drinks regularly won't get the most value from this machine.",
    specifications: {
      'Brand': 'Breville',
      'Model': 'BES880BSS',
      'Wattage': '1680W',
      'Pressure': '15 bar',
      'Material': 'Brushed Stainless Steel',
      'Color': 'Stainless Steel',
      'Warranty': '2 Year Limited',
    },
    relatedProducts: ['breville-barista-express', 'delonghi-la-specialista', 'nicos-presso'],
  },
  {
    id: '4',
    slug: 'nicos-presso',
    title: "Nico's Presso Manual Espresso Maker",
    image: '/images/nicos-presso.jpg',
    gallery: [
      '/images/nicos-presso.jpg',
    ],
    excerpt: 'A beautifully crafted manual espresso maker that puts you in complete control of every shot, perfect for purists.',
    category: 'Espresso Machines',
    categorySlug: 'espresso-machines',
    brand: "Nico's",
    features: {
      'Grind Size': 'N/A (Use Separate Grinder)',
      'Boiler': 'None - Manual',
      'Pressure': 'Up to 10 bar (Manual)',
      'Water Tank': '2.7 oz / 80ml (Per Shot)',
      'Dimensions': '9.5" x 3.5" x 6.5"',
      'Weight': '4.4 lbs',
    },
    pros: [
      'Beautiful minimalist design',
      'Complete control over extraction',
      'No electricity needed — great for travel',
      'Durable stainless steel construction',
      'Compact and portable',
    ],
    cons: [
      'Requires separate grinder',
      'Manual operation takes practice',
      'Only makes one shot at a time',
      'No milk frothing capability',
    ],
    price: '$149.99',
    rating: 4.2,
    ratingBreakdown: {
      overall: 4.2,
      performance: 4.0,
      easeOfUse: 3.5,
      value: 4.5,
      buildQuality: 4.8,
      features: 3.2,
    },
    asin: 'B0EXAMPLE1',
    tags: ['espresso', 'manual', 'portable', 'travel'],
    updatedAt: '2025-12-20',
    publishedAt: '2025-09-01',
    authorSlug: 'james-carter',
    reviewStatus: 'verified',
    bestFor: 'Travelers and purists who want full manual control',
    summary: "The Nico's Presso is a stunning manual espresso maker that gives you complete control over every variable. It's perfect for coffee purists and travelers, though it requires a good grinder and some patience to master.",
    fullReview: `The Nico's Presso is a love letter to the art of espresso making. This manual lever espresso machine gives you complete control over pressure, pre-infusion, and flow rate — everything that matters for pulling the perfect shot.

The build quality is exceptional. Made from food-grade stainless steel, it feels solid and premium in hand. The lever action is smooth and satisfying, and the 58mm portafilter is compatible with standard accessories.

Without any electrical components, the Presso is incredibly portable. It works with hot water from any source, making it perfect for camping, hotel rooms, or offices without a kitchen.

The learning curve is steeper than electric machines, but the reward is a deeper understanding of espresso extraction. Once you develop your technique, you can pull shots that rival much more expensive machines.`,
    whoIsItFor: 'Espresso purists, travelers, campers, and anyone who appreciates the ritual of manual coffee making.',
    whoShouldSkip: 'Anyone who wants quick, convenient espresso without a learning curve. Also not suitable if you primarily drink milk-based drinks.',
    specifications: {
      'Brand': "Nico's",
      'Model': 'Presso V2',
      'Wattage': 'N/A',
      'Pressure': 'Up to 10 bar (Manual)',
      'Material': 'Stainless Steel',
      'Color': 'Silver / Black',
      'Warranty': '3 Year',
    },
    relatedProducts: ['breville-barista-express', 'delonghi-la-specialista', 'fellow-ode-grinder'],
  },
  {
    id: '5',
    slug: 'fellow-ode-grinder',
    title: 'Fellow Ode Brew Grinder Gen 2',
    image: '/images/fellow-ode-grinder.jpg',
    gallery: [
      '/images/fellow-ode-grinder.jpg',
    ],
    excerpt: 'The Fellow Ode Gen 2 delivers professional-grade grinding for pour-over, drip, and French press at a home-friendly price.',
    category: 'Coffee Grinders',
    categorySlug: 'coffee-grinders',
    brand: 'Fellow',
    features: {
      'Burr Type': '64mm Flat Burr (SSP)',
      'Grind Settings': '31 Steps + Micro',
      'Bean Hopper': '80g',
      'Grounds Bin': '110g',
      'Dimensions': '9.25" x 4.75" x 13.5"',
      'Weight': '10.8 lbs',
    },
    pros: [
      'Excellent grind consistency for the price',
      '64mm SSP burrs produce uniform grounds',
      'Anti-static technology reduces mess',
      'Beautiful minimal design that looks great on any counter',
      'Quiet operation compared to competitors',
    ],
    cons: [
      'Not suitable for espresso grinding',
      'Bean hopper is relatively small',
      'Premium price for a brew grinder',
      'No built-in scale',
    ],
    price: '$299.00',
    originalPrice: '$349.00',
    rating: 4.5,
    ratingBreakdown: {
      overall: 4.5,
      performance: 4.7,
      easeOfUse: 4.6,
      value: 4.2,
      buildQuality: 4.8,
      features: 4.3,
    },
    asin: 'B0CJ2X5YQR',
    tags: ['grinder', 'fellow', 'pour-over', 'brew'],
    updatedAt: '2026-01-25',
    publishedAt: '2025-08-10',
    authorSlug: 'sarah-mitchell',
    reviewStatus: 'updated',
    bestFor: 'Pour-over and drip coffee enthusiasts who want consistent grounds',
    summary: 'The Fellow Ode Gen 2 is arguably the best brew grinder in its price class. With 64mm SSP burrs and anti-static technology, it delivers professional-grade consistency for pour-over, drip, and French press brewing.',
    fullReview: `Fellow knocked it out of the park with the Ode Gen 2. The upgrade to 64mm SSP burrs is a game-changer — the grind consistency is remarkably uniform, which translates directly to better-tasting coffee.

The anti-static technology (which Fellow calls the "Ion Antistatic Generator") is a subtle but important improvement. Grounds flow cleanly into the catch bin without clinging to the chute or creating a mess on your counter.

The 31-step grind adjustment with a micro-adjustment between steps gives you plenty of control for dialing in your pour-over, AeroPress, or French press. Note that this grinder is explicitly designed for brew methods — it doesn't grind fine enough for espresso.

The design is quintessential Fellow: clean lines, matte finish, and premium materials. It looks stunning on any counter and takes up less space than you'd expect given the burr size.`,
    whoIsItFor: 'Pour-over, AeroPress, and French press enthusiasts who want professional-grade grind consistency. Also great for anyone upgrading from a blade grinder or entry-level burr grinder.',
    whoShouldSkip: 'Espresso drinkers — the Ode Gen 2 is not designed for espresso grinding. Also, those on a tight budget might find better value in less expensive options.',
    specifications: {
      'Brand': 'Fellow',
      'Model': 'ODE2BG',
      'Wattage': '140W',
      'Burr Size': '64mm',
      'Material': 'Aluminum / Stainless Steel',
      'Color': 'Matte Black / White',
      'Warranty': '2 Year',
    },
    relatedProducts: ['baratza-encore', 'breville-smart-grinder', 'nicos-presso'],
  },
  {
    id: '6',
    slug: 'baratza-encore',
    title: 'Baratza Encore Conical Burr Coffee Grinder',
    image: '/images/baratza-encore.jpg',
    gallery: [
      '/images/baratza-encore.jpg',
    ],
    excerpt: 'The Baratza Encore is the gold standard entry-level burr grinder, delivering consistent results for all brew methods.',
    category: 'Coffee Grinders',
    categorySlug: 'coffee-grinders',
    brand: 'Baratza',
    features: {
      'Burr Type': '40mm Conical Burr',
      'Grind Settings': '40 Steps',
      'Bean Hopper': '8 oz / 227g',
      'Grounds Bin': '5 oz / 142g',
      'Dimensions': '5.0" x 6.3" x 14.0"',
      'Weight': '7.0 lbs',
    },
    pros: [
      'Excellent grind consistency at entry-level price',
      '40 grind settings cover all brew methods',
      'Reliable and durable construction',
      'Easy to clean and maintain',
      'Great customer support from Baratza',
    ],
    cons: [
      'Plastic housing feels less premium',
      'Some retention in the grind chute',
      'Not ideal for espresso (better for brew)',
      'Loud during operation',
    ],
    price: '$149.00',
    rating: 4.3,
    ratingBreakdown: {
      overall: 4.3,
      performance: 4.2,
      easeOfUse: 4.5,
      value: 4.8,
      buildQuality: 4.0,
      features: 4.0,
    },
    asin: 'B07J3BGPFV',
    tags: ['grinder', 'baratza', 'entry-level', 'conical burr'],
    updatedAt: '2025-12-15',
    publishedAt: '2025-04-20',
    authorSlug: 'james-carter',
    reviewStatus: 'verified',
    bestFor: 'First-time burr grinder buyers and budget-conscious coffee lovers',
    summary: 'The Baratza Encore has been the go-to entry-level burr grinder for years, and for good reason. It delivers consistent grinds across all brew methods at a price that makes the upgrade from blade grinders accessible.',
    fullReview: `The Baratza Encore needs little introduction — it's been the recommended entry-level burr grinder in coffee communities for over a decade. The 40mm conical burrs produce consistent grounds across 40 settings, from coarse French press to fine espresso (though it excels more in the medium-to-coarse range).

What makes the Encore special is its reliability. This is a grinder you buy once and it keeps working for years. The 40mm conical burrs are durable, and Baratza's excellent customer support means you can get replacement parts easily if anything does go wrong.

At $149, it represents outstanding value. No other grinder at this price point delivers the same level of consistency and reliability.`,
    whoIsItFor: 'Coffee lovers upgrading from a blade grinder or pre-ground coffee. Anyone who wants a reliable, no-fuss grinder for daily brewing.',
    whoShouldSkip: 'Serious espresso enthusiasts should look at dedicated espresso grinders. Those who want a premium-feeling machine might prefer the Fellow Ode.',
    specifications: {
      'Brand': 'Baratza',
      'Model': '585',
      'Wattage': '130W',
      'Burr Size': '40mm',
      'Material': 'Plastic / Steel',
      'Color': 'Black',
      'Warranty': '1 Year',
    },
    relatedProducts: ['fellow-ode-grinder', 'breville-smart-grinder', 'nicos-presso'],
  },
  {
    id: '7',
    slug: 'breville-smart-grinder',
    title: 'Breville BCG820BSS Smart Grinder Pro',
    image: '/images/breville-smart-grinder.jpg',
    gallery: [
      '/images/breville-smart-grinder.jpg',
    ],
    excerpt: 'Versatile and precise, the Breville Smart Grinder Pro handles everything from espresso to French press with digital dosing.',
    category: 'Coffee Grinders',
    categorySlug: 'coffee-grinders',
    brand: 'Breville',
    features: {
      'Burr Type': '40mm Conical Burr (Stainless Steel)',
      'Grind Settings': '60 Steps (Fine + Coarse)',
      'Bean Hopper': '1 lb / 450g',
      'Grounds Bin': 'N/A (Doserless)',
      'Dimensions': '6.5" x 7.5" x 12.0"',
      'Weight': '8.8 lbs',
    },
    pros: [
      '60 grind settings from espresso to French press',
      'Digital dosing by time or shots',
      'Large bean hopper capacity',
      'Stainless steel conical burrs',
      'Good value for the feature set',
    ],
    cons: [
      'Some grind retention in the chute',
      'Can be messy when removing the portafilter',
      'Not as consistent as dedicated espresso grinders',
      'Display is small and can be hard to read',
    ],
    price: '$199.95',
    originalPrice: '$249.95',
    rating: 4.4,
    ratingBreakdown: {
      overall: 4.4,
      performance: 4.3,
      easeOfUse: 4.5,
      value: 4.6,
      buildQuality: 4.3,
      features: 4.5,
    },
    asin: 'B00OUHXQT2',
    tags: ['grinder', 'breville', 'digital dosing', 'versatile'],
    updatedAt: '2025-11-30',
    publishedAt: '2025-03-15',
    authorSlug: 'sarah-mitchell',
    reviewStatus: 'updated',
    bestFor: 'All-around coffee drinkers who want one grinder for all methods',
    summary: 'The Breville Smart Grinder Pro is one of the most versatile grinders in its price range. With 60 grind settings and digital dosing, it handles everything from espresso to French press.',
    fullReview: `The Smart Grinder Pro lives up to its name with intelligent features that make grinding easier and more precise. The digital display lets you dose by time or by number of shots, and the 60 grind settings cover the full spectrum from fine espresso to coarse French press.

The 40mm stainless steel conical burrs produce consistent grounds across most settings, though espresso enthusiasts may notice slightly less uniformity compared to dedicated espresso grinders.

The large 1-pound bean hopper means you don't have to refill frequently, and the airtight lid keeps beans fresh. The grind-direct system sends grounds straight into your portafilter or grounds bin, minimizing mess.

At $199, it's a solid mid-range option for anyone who uses multiple brew methods.`,
    whoIsItFor: 'Coffee drinkers who use multiple brew methods and want one grinder to handle everything. Great for families or shared kitchens.',
    whoShouldSkip: 'Espresso purists who want maximum consistency for fine grinds. Those who only brew pour-over might prefer the Fellow Ode.',
    specifications: {
      'Brand': 'Breville',
      'Model': 'BCG820BSS',
      'Wattage': '165W',
      'Burr Size': '40mm',
      'Material': 'Stainless Steel',
      'Color': 'Brushed Stainless',
      'Warranty': '1 Year Limited',
    },
    relatedProducts: ['fellow-ode-grinder', 'baratza-encore', 'breville-barista-express'],
  },
  {
    id: '8',
    slug: 'chemex-classic',
    title: 'Chemex Classic Series Pour-Over Coffee Maker',
    image: '/images/chemex-classic.jpg',
    gallery: [
      '/images/chemex-classic.jpg',
    ],
    excerpt: 'An iconic pour-over coffee maker that produces clean, bright cups and doubles as a beautiful serving carafe.',
    category: 'Pour-Over & Drip',
    categorySlug: 'pour-over-drip',
    brand: 'Chemex',
    features: {
      'Capacity': '8 Cups / 40 oz',
      'Filter Type': 'Chemex Bonded Filters',
      'Material': 'Borosilicate Glass',
      'Dimensions': '8.5" x 6.0" x 9.0"',
      'Weight': '1.5 lbs',
    },
    pros: [
      'Produces exceptionally clean, bright coffee',
      'Beautiful design that doubles as a serving piece',
      'Simple and easy to use',
      "Borosilicate glass won't absorb flavors",
      'No plastic parts — fully glass and wood',
    ],
    cons: [
      'Requires special Chemex filters',
      'Glass body is fragile',
      'Wood collar requires hand washing',
      'Pour technique takes practice',
    ],
    price: '$49.99',
    rating: 4.6,
    ratingBreakdown: {
      overall: 4.6,
      performance: 4.8,
      easeOfUse: 4.0,
      value: 4.8,
      buildQuality: 4.5,
      features: 3.5,
    },
    asin: 'B00B1OV7EA',
    tags: ['pour-over', 'chemex', 'glass', 'manual brewing'],
    updatedAt: '2025-11-20',
    publishedAt: '2025-02-10',
    authorSlug: 'james-carter',
    reviewStatus: 'verified',
    bestFor: 'Coffee lovers who appreciate clean, nuanced flavors',
    summary: "The Chemex Classic is more than a coffee maker — it's a design icon that produces some of the cleanest, most nuanced pour-over coffee possible.",
    fullReview: `The Chemex has been brewing coffee since 1941, and its design is so iconic it sits in the Museum of Modern Art's permanent collection. But it's not just a pretty face — the Chemex produces some of the cleanest-tasting coffee you can make at home.

The secret is the proprietary Chemex bonded filters, which are 20-30% heavier than standard filters. They remove most of the coffee oils and micro-grounds that can make coffee taste muddy, resulting in a bright, clean cup.

Brewing with the Chemex is straightforward: heat water, grind coffee, place the filter, add coffee, and slowly pour in a circular motion. The entire process takes about 4-5 minutes for a full carafe.

The borosilicate glass body is heat-resistant and won't absorb flavors, so your coffee tastes the same brew after brew.`,
    whoIsItFor: 'Coffee lovers who enjoy the ritual of manual brewing and appreciate clean, nuanced flavors. Great for those who brew for 2-4 people regularly.',
    whoShouldSkip: 'Those who want quick, convenient coffee with minimal effort. Also not ideal for households with young children (fragile glass).',
    specifications: {
      'Brand': 'Chemex',
      'Model': 'CM-8A',
      'Capacity': '40 oz / 8 cups',
      'Material': 'Borosilicate Glass / Wood',
      'Filter': 'Chemex FP-2 or FP-1',
      'Dishwasher Safe': 'Body only (remove collar)',
      'Warranty': '1 Year',
    },
    relatedProducts: ['hario-v60', 'fellow-ode-grinder', 'baratza-encore'],
  },
  {
    id: '9',
    slug: 'hario-v60',
    title: 'Hario V60 Ceramic Coffee Dripper',
    image: '/images/hario-v60.jpg',
    gallery: [
      '/images/hario-v60.jpg',
    ],
    excerpt: "The world's most popular pour-over dripper, favored by competition baristas for its precision and versatility.",
    category: 'Pour-Over & Drip',
    categorySlug: 'pour-over-drip',
    brand: 'Hario',
    features: {
      'Capacity': '1-4 Cups',
      'Filter Type': 'V60 Paper Filters',
      'Material': 'Ceramic',
      'Dimensions': '5.4" x 4.2" x 4.7"',
      'Weight': '0.9 lbs',
    },
    pros: [
      'Exceptional brew control and versatility',
      'Used by world championship baristas',
      'Affordable entry into pour-over brewing',
      'Ceramic retains heat well',
      'Compact and easy to store',
    ],
    cons: [
      'Requires more technique than other methods',
      'Only brews one cup at a time efficiently',
      'Needs a gooseneck kettle for best results',
      'Filters are a recurring cost',
    ],
    price: '$22.99',
    rating: 4.5,
    ratingBreakdown: {
      overall: 4.5,
      performance: 4.8,
      easeOfUse: 3.8,
      value: 4.9,
      buildQuality: 4.5,
      features: 4.0,
    },
    asin: 'B002VUC0EM',
    tags: ['pour-over', 'hario', 'ceramic', 'single cup'],
    updatedAt: '2025-10-15',
    publishedAt: '2025-01-25',
    authorSlug: 'james-carter',
    reviewStatus: 'verified',
    bestFor: 'Single-cup coffee lovers who want the ultimate brewing control',
    summary: "The Hario V60 is the gold standard for pour-over enthusiasts. At under $25, it offers unmatched brewing control and produces some of the best single cups of coffee possible — if you're willing to master the technique.",
    fullReview: `The V60 gets its name from its V-shaped cone and 60-degree angle, a design that has been refined over decades to optimize coffee extraction. The spiral ridges on the interior help prevent the filter from sticking to the walls, allowing air to flow and water to channel evenly through the coffee bed.

What makes the V60 special is the level of control it gives you. You can adjust grind size, water temperature, pour speed, and brew time to bring out different flavor profiles from the same coffee.

The ceramic version retains heat beautifully, maintaining water temperature throughout the brew. At $23, the V60 is perhaps the best value in all of coffee brewing.`,
    whoIsItFor: 'Coffee enthusiasts who enjoy the craft of brewing and want the ultimate control over their cup.',
    whoShouldSkip: 'Those who want to push a button and get coffee. The V60 rewards skill and patience.',
    specifications: {
      'Brand': 'Hario',
      'Model': 'VD02T',
      'Capacity': '1-4 cups',
      'Material': 'Ceramic',
      'Filter': 'Hario V60-02',
      'Dishwasher Safe': 'Yes',
      'Made In': 'Japan',
    },
    relatedProducts: ['chemex-classic', 'fellow-ode-grinder', 'baratza-encore'],
  },
  {
    id: '10',
    slug: 'fellow-stagg-ekettle',
    title: 'Fellow Stagg EKG Electric Pour-Over Kettle',
    image: '/images/fellow-stagg-kettle.jpg',
    gallery: [
      '/images/fellow-stagg-kettle.jpg',
    ],
    excerpt: 'Precision temperature control and a stunning gooseneck design make the Fellow Stagg EKG the ultimate pour-over kettle.',
    category: 'Kettles',
    categorySlug: 'kettles',
    brand: 'Fellow',
    features: {
      'Capacity': '0.9L / 30 oz',
      'Temperature Range': '135°F - 212°F',
      'Hold Time': '60 minutes',
      'Wattage': '1200W',
      'Material': '304 Stainless Steel',
      'Dimensions': '11.5" x 6.0" x 8.0"',
    },
    pros: [
      'Precise temperature control to the degree',
      'Beautiful gooseneck spout for controlled pouring',
      'Hold mode maintains temperature for 60 minutes',
      'LCD display shows real-time temperature',
      'Minimalist matte black design looks stunning',
    ],
    cons: [
      'Premium price for a kettle',
      '0.9L capacity is smaller than some competitors',
      'No audible alert when temperature is reached',
      'Base is separate from the kettle',
    ],
    price: '$195.00',
    rating: 4.7,
    ratingBreakdown: {
      overall: 4.7,
      performance: 4.8,
      easeOfUse: 4.6,
      value: 4.2,
      buildQuality: 4.9,
      features: 4.7,
    },
    asin: 'B07FKQ5Y1W',
    tags: ['kettle', 'fellow', 'gooseneck', 'temperature control'],
    updatedAt: '2026-02-05',
    publishedAt: '2025-06-10',
    authorSlug: 'sarah-mitchell',
    reviewStatus: 'updated',
    bestFor: 'Pour-over enthusiasts who need precise temperature control',
    summary: 'The Fellow Stagg EKG is the pour-over kettle against which all others are measured. Its precise temperature control, gorgeous design, and excellent pour control make it worth every penny for serious coffee brewers.',
    fullReview: `The Stagg EKG is more than a kettle — it's a precision brewing instrument. The variable temperature control lets you set your water to the exact degree, which is crucial for getting the best extraction from different coffees.

The gooseneck spout provides exceptional pour control, allowing you to maintain a slow, steady stream for even extraction. The counterbalanced handle shifts the center of mass back toward your hand, making pouring feel effortless.

The hold mode maintains your set temperature for up to 60 minutes. The matte black finish and minimalist aesthetic are quintessential Fellow — it looks more like a design object than an appliance.`,
    whoIsItFor: 'Pour-over and AeroPress brewers who want precise temperature control. Also great for tea enthusiasts who brew at specific temperatures.',
    whoShouldSkip: "Those who just need to boil water quickly. If you don't care about temperature precision, a standard electric kettle will serve you just as well for much less money.",
    specifications: {
      'Brand': 'Fellow',
      'Model': 'SEG190BK',
      'Wattage': '1200W',
      'Capacity': '0.9L / 30 oz',
      'Material': '304 Stainless Steel',
      'Color': 'Matte Black / Copper / Stainless',
      'Warranty': '2 Year',
    },
    relatedProducts: ['hario-v60', 'chemex-classic', 'fellow-ode-grinder'],
  },
  {
    id: '11',
    slug: 'cuisinart-cpkm17',
    title: 'Cuisinart CPK-17 PerfecTemp Digital Kettle',
    image: '/images/cuisinart-kettle.jpg',
    gallery: [
      '/images/cuisinart-kettle.jpg',
    ],
    excerpt: 'A budget-friendly variable temperature kettle with 6 preset temperatures for all your brewing needs.',
    category: 'Kettles',
    categorySlug: 'kettles',
    brand: 'Cuisinart',
    features: {
      'Capacity': '1.7L / 57 oz',
      'Temperature Presets': '6 (160°F - 212°F)',
      'Wattage': '1500W',
      'Material': 'Stainless Steel',
      'Dimensions': '8.7" x 6.1" x 9.8"',
      'Weight': '2.9 lbs',
    },
    pros: [
      'Large 1.7L capacity',
      '6 preset temperature buttons',
      'Fast 1500W heating',
      'Affordable price point',
      '2-minute keep-warm function',
    ],
    cons: [
      'No precise degree-by-degree control',
      'Preset temperatures may not suit all coffees',
      'Spout is not a gooseneck design',
      'Blue LED lights can be annoying at night',
    ],
    price: '$99.95',
    rating: 4.3,
    ratingBreakdown: {
      overall: 4.3,
      performance: 4.2,
      easeOfUse: 4.5,
      value: 4.6,
      buildQuality: 4.1,
      features: 4.0,
    },
    asin: 'B00CUKT0MO',
    tags: ['kettle', 'cuisinart', 'variable temperature', 'budget'],
    updatedAt: '2025-10-01',
    publishedAt: '2025-01-10',
    authorSlug: 'james-carter',
    reviewStatus: 'verified',
    bestFor: 'Budget-conscious brewers who need basic temperature control',
    summary: 'The Cuisinart CPK-17 offers variable temperature control at a fraction of the price of premium kettles. While it lacks the precision of the Fellow Stagg, its 6 presets cover most brewing needs.',
    fullReview: `The Cuisinart PerfecTemp is one of the most popular variable-temperature kettles on the market. For under $100, you get 6 temperature presets that cover the most common brewing temperatures.

The 1.7L capacity is generous and the 1500W heating element brings water to boil quickly. The stainless steel body is durable and looks professional.

At $99, the CPK-17 represents excellent value. It's not perfect, but it's the best variable-temperature kettle you'll find at this price point.`,
    whoIsItFor: 'Budget-conscious coffee and tea drinkers who want basic temperature control without spending $200+ on a gooseneck kettle.',
    whoShouldSkip: "Pour-over enthusiasts who need precise pour control. The standard spout doesn't offer the flow rate control needed for pour-over brewing.",
    specifications: {
      'Brand': 'Cuisinart',
      'Model': 'CPK-17',
      'Wattage': '1500W',
      'Capacity': '1.7L / 57 oz',
      'Material': 'Stainless Steel',
      'Color': 'Stainless Steel',
      'Warranty': '3 Year Limited',
    },
    relatedProducts: ['fellow-stagg-ekettle', 'chemex-classic', 'baratza-encore'],
  },
  {
    id: '12',
    slug: 'french-press-bodum',
    title: 'Bodum Chambord French Press Coffee Maker',
    image: '/images/bodum-french-press.jpg',
    gallery: [
      '/images/bodum-french-press.jpg',
    ],
    excerpt: "The classic French press that's been brewing rich, full-bodied coffee for decades. Simple, elegant, and timeless.",
    category: 'French Press',
    categorySlug: 'french-press',
    brand: 'Bodum',
    features: {
      'Capacity': '34 oz / 1L (8 cups)',
      'Filter': '3-Part Stainless Steel',
      'Material': 'Borosilicate Glass / Steel',
      'Dimensions': '6.0" x 4.5" x 9.0"',
      'Weight': '1.5 lbs',
    },
    pros: [
      'Rich, full-bodied coffee with natural oils',
      'Simple operation — no electricity needed',
      'Beautiful classic design',
      'Affordable and durable',
      'Easy to clean and maintain',
    ],
    cons: [
      'Some sediment in the cup',
      'Glass beaker is fragile',
      'Coffee cools faster than insulated models',
      'Not ideal for light roasts',
    ],
    price: '$34.99',
    rating: 4.4,
    ratingBreakdown: {
      overall: 4.4,
      performance: 4.5,
      easeOfUse: 4.8,
      value: 4.8,
      buildQuality: 4.2,
      features: 3.8,
    },
    asin: 'B00005LM0S',
    tags: ['french press', 'bodum', 'manual', 'glass'],
    updatedAt: '2025-09-30',
    publishedAt: '2025-01-05',
    authorSlug: 'james-carter',
    reviewStatus: 'verified',
    bestFor: 'Fans of rich, full-bodied coffee who want a simple brewing method',
    summary: "The Bodum Chambord is the quintessential French press. It produces rich, full-bodied coffee with minimal effort, and its classic design has stood the test of time. At $35, it's one of the best values in coffee brewing.",
    fullReview: `The Bodum Chambord French Press has been a kitchen staple since the 1950s, and its design hasn't changed much — because it didn't need to. The simple combination of a borosilicate glass beaker, stainless steel frame, and 3-part mesh filter produces coffee that's rich, full-bodied, and full of the natural oils that paper filters absorb.

Brewing is straightforward: add coarsely ground coffee, pour in hot water, stir, wait 4 minutes, and press. The result is a cup with more body and mouthfeel than any pour-over can produce.

The 3-part filter does a decent job of keeping grounds out of your cup, though some fine sediment will always make it through — that's just part of the French press experience.`,
    whoIsItFor: 'Coffee drinkers who prefer rich, full-bodied cups and appreciate simple, no-fuss brewing.',
    whoShouldSkip: 'Those who prefer bright, clean cups should look at pour-over methods. Also not ideal for those who are accident-prone (glass beaker).',
    specifications: {
      'Brand': 'Bodum',
      'Model': '1928-16',
      'Capacity': '34 oz / 1L',
      'Material': 'Borosilicate Glass / Stainless Steel',
      'Filter': '3-Part Stainless Steel',
      'Dishwasher Safe': 'Yes',
      'Made In': 'Portugal',
    },
    relatedProducts: ['chemex-classic', 'fellow-ode-grinder', 'cuisinart-cpkm17'],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter(p => p.categorySlug === categorySlug);
}

export function getRelatedProducts(slugs: string[]): Product[] {
  return products.filter(p => slugs.includes(p.slug));
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return products.filter(p =>
    p.title.toLowerCase().includes(q) ||
    p.excerpt.toLowerCase().includes(q) ||
    p.brand.toLowerCase().includes(q) ||
    p.tags.some(t => t.toLowerCase().includes(q)) ||
    p.category.toLowerCase().includes(q) ||
    p.bestFor.toLowerCase().includes(q)
  );
}

export function getBestSellers(): Product[] {
  return [...products].sort((a, b) => b.rating - a.rating).slice(0, 6);
}

export function getDeals(): Product[] {
  return products.filter(p => p.originalPrice);
}

export function getRecentlyUpdated(): Product[] {
  return [...products].sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()).slice(0, 6);
}

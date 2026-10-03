export type Status = 'operational' | 'seasonal' | 'soon' | 'closed';

export const statusMeta: Record<Status, { label: string; className: string }> = {
  operational: { label: 'Operational', className: 'bg-emerald-100 text-emerald-800' },
  seasonal: { label: 'Operational in summers only', className: 'bg-amber-100 text-amber-800' },
  soon: { label: 'Opening soon', className: 'bg-sky-100 text-sky-800' },
  closed: { label: 'Not operational', className: 'bg-gray-200 text-gray-600' },
};

/* ─── BIG-FUNCTION VENUES (weddings, receptions, engagements) ─── */
export const bigVenues = [
  {
    id: 'indoor',
    title: 'Indoor Banquet Hall',
    tag: 'Big functions',
    description:
      'A fully decorated, covered banquet hall for weddings, receptions and engagements — comfortable in any weather, with stage, lighting and sound.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80',
  },
  {
    id: 'outdoor',
    title: 'Outdoor Lawn',
    tag: 'Big functions',
    description:
      'Our open-air lawns on the 5-acre grounds — a grand setting for the ceremony, phera, reception and open-sky dance floor.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80',
  },
] as const;

export const partyHall = {
  id: 'party-hall',
  title: 'Small Party Hall',
  tag: 'Small gatherings',
  description:
    'A cosy hall for birthdays, ring ceremonies, anniversaries and kitty parties — a set party menu and a setting that suits a smaller guest list.',
  image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1200&q=80',
};

/* ─── 3 PACKAGES — same tiers for Indoor and Outdoor ─── */
// Counts are derived from the Navdeep Resorts catering menu categories.
// Placeholder tiers — adjust counts/names here and every page updates.
export interface Tier {
  id: string;
  name: string;
  tagline: string;
  featured?: boolean;
  headline: { label: string; value: string }[];
  items: { category: string; choose: string }[];
  extras: string[];
}

export const tiers: Tier[] = [
  {
    id: 'classic',
    name: 'Classic',
    tagline: 'A complete, generous wedding menu',
    headline: [
      { label: 'Stalls', value: '4' },
      { label: 'Live snacks', value: '6' },
      { label: 'Main dishes', value: '7' },
      { label: 'Desserts', value: '2' },
    ],
    items: [
      { category: 'Welcome drinks (Beverages)', choose: 'Any 2' },
      { category: 'Stall Section', choose: 'Any 4' },
      { category: 'Live Snacks — Veg', choose: 'Any 4' },
      { category: 'Live Snacks — Non-Veg', choose: 'Any 2' },
      { category: 'Salad Bar', choose: 'Any 3' },
      { category: 'Main Course Veg — Dal', choose: 'Any 1' },
      { category: 'Main Course Veg — Paneer', choose: 'Any 2' },
      { category: 'Main Course Veg — Vegetables', choose: 'Any 2' },
      { category: 'Main Course Non-Veg — Chicken', choose: 'Any 1' },
      { category: 'Main Course Non-Veg — Mutton', choose: 'Any 1' },
      { category: 'Raita Section', choose: 'Any 1' },
      { category: 'Rice & Biryani', choose: 'Any 1' },
      { category: 'Bread Basket', choose: 'Any 3' },
      { category: 'Dessert Section', choose: 'Any 2' },
      { category: 'Ice Cream', choose: 'Any 1' },
    ],
    extras: [],
  },
  {
    id: 'royal',
    name: 'Royal',
    tagline: 'More stalls, more choice, more counters',
    featured: true,
    headline: [
      { label: 'Stalls', value: '8' },
      { label: 'Live snacks', value: '9' },
      { label: 'Main dishes', value: '14' },
      { label: 'Desserts', value: '4' },
    ],
    items: [
      { category: 'Welcome drinks (Beverages)', choose: 'Any 3' },
      { category: 'Welcome to Barat', choose: 'Dry fruit + Barfi' },
      { category: 'Soup', choose: 'Any 1' },
      { category: 'Stall Section', choose: 'Any 8' },
      { category: 'Mocktail Counter', choose: 'Any 4' },
      { category: 'Shake & Smoothie Counter', choose: 'Any 4' },
      { category: 'Live Snacks — Veg', choose: 'Any 6' },
      { category: 'Live Snacks — Non-Veg', choose: 'Any 3' },
      { category: 'Salad Bar', choose: 'Any 5' },
      { category: 'Main Course Veg — Dal', choose: 'Any 2' },
      { category: 'Main Course Veg — Paneer', choose: 'Any 3' },
      { category: 'Main Course Veg — Vegetables', choose: 'Any 3' },
      { category: 'Main Course Veg — Mushroom & Kofta', choose: 'Any 2' },
      { category: 'Main Course Non-Veg — Chicken', choose: 'Any 2' },
      { category: 'Main Course Non-Veg — Mutton', choose: 'Any 1' },
      { category: 'Main Course Non-Veg — Fish', choose: 'Any 1' },
      { category: 'Raita Section', choose: 'Any 2' },
      { category: 'Rice & Biryani', choose: 'Any 2' },
      { category: 'Bread Basket', choose: 'Any 5' },
      { category: 'Dessert Section', choose: 'Any 4' },
      { category: 'Ice Cream', choose: 'Any 2' },
    ],
    extras: ['Paan Counter', 'Tandoori Tea Counter'],
  },
  {
    id: 'maharaja',
    name: 'Maharaja',
    tagline: 'The full grand spread — every counter',
    headline: [
      { label: 'Stalls', value: '12' },
      { label: 'Live snacks', value: '12' },
      { label: 'Main dishes', value: '23' },
      { label: 'Desserts', value: '6' },
    ],
    items: [
      { category: 'Welcome drinks (Beverages)', choose: 'Any 4' },
      { category: 'Welcome to Barat', choose: 'Dry fruit, Barfi, Mocktail & Shakes' },
      { category: 'Soup', choose: 'Any 2' },
      { category: 'Stall Section', choose: 'Any 12' },
      { category: 'Mocktail Counter', choose: 'Any 6' },
      { category: 'Shake & Smoothie Counter', choose: 'Any 6' },
      { category: 'Fresh Fruit Counter', choose: 'Any 8' },
      { category: 'Bakery Counter', choose: 'Any 4' },
      { category: 'Punjabi Dhaba Counter', choose: 'Any 5' },
      { category: 'Live Snacks — Veg', choose: 'Any 8' },
      { category: 'Live Snacks — Non-Veg', choose: 'Any 4' },
      { category: 'Salad Bar', choose: 'Any 8' },
      { category: 'Main Course Veg — Dal', choose: 'Any 2' },
      { category: 'Main Course Veg — Paneer', choose: 'Any 4' },
      { category: 'Main Course Veg — Vegetables', choose: 'Any 4' },
      { category: 'Main Course Veg — Mushroom, Kofta & Channa', choose: 'Any 4' },
      { category: 'Punjabi Rasoi', choose: 'Any 2' },
      { category: 'Main Course Non-Veg — Chicken', choose: 'Any 3' },
      { category: 'Main Course Non-Veg — Mutton', choose: 'Any 2' },
      { category: 'Main Course Non-Veg — Fish & Prawn', choose: 'Any 2' },
      { category: 'Raita Section', choose: 'Any 3' },
      { category: 'Rice & Biryani', choose: 'Any 3' },
      { category: 'Bread Basket', choose: 'Any 8' },
      { category: 'Dessert Section', choose: 'Any 6' },
      { category: 'Ice Cream', choose: 'Any 3' },
    ],
    extras: [
      'Paan Counter',
      'Huka Counter',
      'Kashmiri Kahwa',
      'Rajasthani Tea',
      'Tandoori Tea',
      'Kids Play Area',
      'Mascot Cartoon Characters',
    ],
  },
];

/* ─── SMALL PARTY HALL — Navdeep Restaurant party menu ─── */
export const partyMenu = [
  {
    category: 'Breakfast',
    choose: 'Any 6',
    items: ['Burfi', 'Gulab Jamun', 'Chamcham', 'Rasgulla', 'Pastries', 'Paneer Pakoda', 'Palak Pakoda', 'Mix Pakoda', 'Bread Pakora', 'Bread Omelette', 'Pot Kaleji'],
  },
  { category: 'Stall', choose: 'Any 2', items: ['Aloo Tikki', 'Bhalla Chatt Papri', 'Dosa', 'Veg. Momos'] },
  {
    category: 'Snacks Veg.',
    choose: 'Any 4',
    items: ['Cheese Chilly', 'Paneer Tikka', 'French Fries', 'Honey Chilly Cauliflower', 'Hara Bhara Kabab', 'Veg. Cheese Kabab', 'Honey Chilly Potatoes', 'Soya Malai Champ', 'Mushroom Tikka', 'Veg. Manchurian', 'Veg. Spring Roll', 'Mushroom Duplex'],
  },
  {
    category: 'Snacks Non-Veg.',
    choose: 'Any 2',
    items: ['Tandoori Chicken', 'Chicken Tikka', 'Chicken Malai Tikka', 'Chilly Chicken', 'Chicken Fry', 'Fish Tikka', 'Fish Amritsari', 'Fish Fry'],
  },
  { category: 'Salad', choose: 'Any 1', items: ['Indian Green Salad', 'Kachumber Salad', 'Channa Chat'] },
  { category: 'Raita', choose: 'Any 1', items: ['Dahi Bhalla', 'Mix Veg. Raita', 'Boondi Raita', 'Pineapple Raita', 'Plain Raita'] },
  {
    category: 'Main Course Veg.',
    choose: 'Any 4',
    items: ['Dal Makhni', 'Dal Tadka (Yellow)', 'Mix. Vegetable', 'Vegetable Korma', 'Kadhai Paneer', 'Paneer Butter Masala', 'Palak Paneer', 'Shahi Paneer', 'Mutter Paneer', 'Mushroom Masala', 'Mushroom Do Pyaza', 'Palak Corn', 'Channa Masala', 'Malai Kofta'],
  },
  {
    category: 'Main Course Non-Veg.',
    choose: 'Any 2',
    items: ['Butter Chicken', 'Kadahi Chicken', 'Rarha Chicken', 'Chicken Curry Home Style', 'Mutton Curry', 'Mutton Rogan Josh', 'Mutton Korma', 'Mutton Saagwala'],
  },
  { category: 'Choice of Rice', choose: 'Any 1', items: ['Plain Rice', 'Jeera Rice', 'Mutter Pulao', 'Veg. Pulao', 'Fried Rice'] },
  { category: 'Bread Basket', choose: 'Included', items: ['Plain Roti', 'Butter Roti', 'Butter Naan', 'Missi Roti'] },
  {
    category: 'Sweets Counter',
    choose: 'Any 2',
    items: ['Hot Gulab Jamun', 'Gajar Ka Halwa (Seasonal)', 'Ice Cream (Butter Scotch)', 'Ice Cream (Vanilla & Strawberry)'],
  },
];

export const partyOccasions = ['Birthday Party', 'Ring Ceremony', 'Anniversary Party', 'Kitty Party'];

/* ─── TERMS (from the catering menu) ─── */
export const terms = [
  'We are not responsible for any loss or theft of your belongings.',
  'Hard drinks & whisky permit to be arranged by the guest.',
  'Timing should be clear for food & snacks.',
  'No booking without advance payment & 50% payment advance.',
  'In case of cancellation, advance will not be refundable.',
  'Balance payment should be made clear one week before the function.',
  'Any damage to the property during the function shall be recovered from the host.',
  'Taxes as applicable.',
  'Every extra plate will be chargeable.',
];

/* ─── PROPERTIES (home page overview) ─── */
export const properties: { id: string; title: string; status: Status; href: string; blurb: string }[] = [
  { id: 'resort', title: 'The Resort', status: 'operational', href: '/packages', blurb: 'Weddings, functions and celebrations — indoor, outdoor and party hall.' },
  { id: 'pool', title: 'Swimming Pool', status: 'seasonal', href: '/pool', blurb: 'Open in summers only.' },
  { id: 'restaurant', title: 'Navdeep Restaurant', status: 'soon', href: '/restaurant', blurb: 'Our restaurant is opening soon.' },
  { id: 'bar', title: 'Bar', status: 'closed', href: '/bar', blurb: 'Not operational at this time.' },
];

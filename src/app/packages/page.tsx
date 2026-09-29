import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Packages',
  description:
    'Explore resort packages at Navdeep Resort, Mukerian — family retreats, weddings and banquets, corporate retreats, birthdays, day picnics, overnight stays, sangeet and anniversary dinners. Custom pricing available. Enquire on WhatsApp: +91 85670 98852.',
  keywords: [
    'resort packages Mukerian',
    'wedding packages Punjab',
    'banquet packages Mukerian',
    'corporate retreat packages',
    'family retreat packages',
    'birthday party packages Punjab',
    'overnight stay packages Mukerian',
    'day picnic packages Punjab',
    'sangeet venue Mukerian',
  ],
  alternates: { canonical: '/packages' },
  openGraph: {
    title: 'Packages | Navdeep Resort, Mukerian',
    description:
      'Family retreats, weddings, corporate retreats, birthdays, day picnics, overnight stays and more. Custom packages available on WhatsApp.',
    url: 'https://navdeepresort.com/packages',
  },
};

const packages = [
  {
    id: 'family-retreat',
    title: 'Family Retreat',
    subtitle: 'Weekend getaway for families',
    description:
      'Leave the city behind. Our Family Retreat package gives you full access to our 5-acre resort grounds, a sparkling pool, and activity-packed evenings perfect for all ages. Meals are freshly prepared by our kitchen team, and the evening bonfire is a moment your family will talk about long after.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&q=80',
    features: [
      'Full resort grounds access',
      'Swimming pool access',
      'Bonfire & evening activities',
      'Kids play area & outdoor games',
      'Breakfast & dinner included',
      'Parking for all vehicles',
    ],
    highlight: 'Best for weekend family trips',
    tag: 'Family',
  },
  {
    id: 'wedding-banquet',
    title: 'Wedding & Banquet',
    subtitle: 'Your perfect celebration venue',
    description:
      'From the shagun ceremony to the final vidaai — every moment of your wedding deserves the perfect backdrop. Our wedding package includes a fully decorated indoor banquet hall, an open-air ceremony lawn, expert catering, and a dedicated events team to coordinate every detail.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1000&q=80',
    features: [
      'Indoor decorated banquet hall',
      'Outdoor ceremony lawn',
      'Custom floral & lighting décor',
      'Full-service catering (veg/non-veg)',
      'Sound system & DJ coordination',
      'Guest accommodation (on request)',
    ],
    highlight: 'Capacity up to 1000 guests',
    tag: 'Wedding',
  },
  {
    id: 'corporate-retreat',
    title: 'Corporate Retreat',
    subtitle: 'Productive days, restorative evenings',
    description:
      'The best team decisions happen away from the office. Our corporate retreat package provides a calm, green setting with fully equipped meeting facilities, curated team-building activities, and three meals a day so your team stays energized and focused.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1000&q=80',
    features: [
      'Air-conditioned conference room',
      'Projector & AV equipment',
      'High-speed Wi-Fi throughout',
      'Facilitated team activities',
      'All meals & refreshments',
      'Overnight stay options',
    ],
    highlight: 'Ideal for 10–100 team members',
    tag: 'Corporate',
  },
  {
    id: 'day-picnic',
    title: 'Day Picnic',
    subtitle: 'A full day in the greens',
    description:
      'No planning needed — just bring good company. Our day picnic package includes full resort access from morning to evening, a hearty buffet lunch, pool time, and a selection of outdoor games. Perfect for friend groups, family outings, or college trips.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1000&q=80',
    features: [
      'Full resort access (9am – 7pm)',
      'Buffet lunch included',
      'Swimming pool access',
      'Cricket, badminton & outdoor games',
      'Comfortable rest area',
      'Ample parking',
    ],
    highlight: 'Great for groups & college trips',
    tag: 'Day Out',
  },
  {
    id: 'birthday-party',
    title: 'Birthday Celebrations',
    subtitle: 'Mark the moment right',
    description:
      'We take care of everything so you can be fully present. Balloons, banners, custom cake arrangement, party snacks, music — your celebration is set up before you arrive. Available for all ages, children and adults alike.',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1000&q=80',
    features: [
      'Custom themed decoration',
      'Birthday cake arrangement',
      'Party snacks & full meal',
      'Dedicated area or lawn',
      'Music & games coordination',
      'Photography backdrop setup',
    ],
    highlight: 'Surprise party setup available',
    tag: 'Birthday',
  },
  {
    id: 'overnight-stay',
    title: 'Overnight Stay',
    subtitle: 'Stay in, slow down',
    description:
      'Sometimes the best thing you can do is just stay. Our overnight package gives you a comfortable room, a peaceful evening with bonfire and dinner, and a morning that begins with birds, fresh air, and a warm breakfast. The city can wait.',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1000&q=80',
    features: [
      'Comfortable air-conditioned room',
      'Dinner & breakfast included',
      'Evening bonfire',
      'Morning nature walk',
      'Full resort access',
      'Late checkout on request',
    ],
    highlight: 'Perfect for couples & solo travelers',
    tag: 'Stay',
  },
  {
    id: 'engagement',
    title: 'Engagement & Sangeet',
    subtitle: 'Ring the moment in style',
    description:
      'The ring exchange, the sangeet, the mehendi — each deserves its own evening. We set up an open-air dance floor under the lights, arrange live music or a DJ, and keep the food flowing until the last song.',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1000&q=80',
    features: [
      'Open sky dance floor',
      'Live music & DJ setup',
      'Fancy themed décor',
      'Full catering included',
      'Changing & prep rooms',
      'Photography backdrop',
    ],
    highlight: 'Evening events, up to 500 guests',
    tag: 'Wedding',
  },
  {
    id: 'anniversary',
    title: 'Anniversary Dinner',
    subtitle: 'Celebrate your years together',
    description:
      'An intimate candlelit table on the lawn, a menu built around what you both like, and an evening quiet enough to actually talk. Available as an open-air dinner or with a private room.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1000&q=80',
    features: [
      'Private table setting',
      'Candlelight on the lawn',
      'Custom tailored menu',
      'Photography corner',
      'Quiet garden setting',
      'Complimentary dessert & cake',
    ],
    highlight: 'Intimate settings for 2–20 guests',
    tag: 'Romance',
  },
];

export default function PackagesPage() {
  return (
    <div>
      {/* Page Hero */}
      <section className="bg-wine pt-36 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-gold text-sm font-medium mb-3">What we offer</p>
          <h1 className="font-display text-ivory text-5xl md:text-6xl font-semibold leading-tight max-w-2xl">
            Packages for every occasion
          </h1>
          <p className="font-body text-ivory/60 text-base mt-6 max-w-lg leading-relaxed">
            All packages are customisable. No prices listed — we believe every group deserves a conversation and a proposal that fits them.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-ivory py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          {packages.map((pkg, index) => (
            <article
              key={pkg.id}
              id={pkg.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image — alternates sides */}
              <div className={`relative h-80 lg:h-[480px] rounded-2xl overflow-hidden reveal ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <span className="absolute top-5 left-5 bg-wine/90 text-ivory text-xs font-body font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
                  {pkg.tag}
                </span>
              </div>

              {/* Content */}
              <div className={`reveal ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <p className="font-body text-gold text-xs font-medium mb-2 tracking-wide">{pkg.subtitle}</p>
                <h2 className="font-display text-4xl md:text-5xl text-wine font-semibold leading-tight mb-4">
                  {pkg.title}
                </h2>
                <p className="font-body text-gray-600 text-sm leading-relaxed mb-7 max-w-prose">{pkg.description}</p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 font-body text-sm text-gray-700">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <circle cx="8" cy="8" r="8" fill="#5C1A2B" fillOpacity="0.08" />
                        <path d="M5 8l2 2 4-4" stroke="#5C1A2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={`https://wa.me/918567098852?text=${encodeURIComponent(`Hello! I'd like to enquire about the ${pkg.title} package at Navdeep Resort.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm font-medium bg-wine text-ivory px-7 py-3.5 rounded-full hover:bg-wine/90 transition-colors"
                  >
                    Enquire on WhatsApp
                  </a>
                  <span className="font-body text-xs text-gray-400 italic">{pkg.highlight}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Custom Package CTA */}
      <section className="bg-blush py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-4xl text-wine font-semibold mb-4">
            Have something else in mind?
          </h2>
          <p className="font-body text-gray-600 text-sm leading-relaxed mb-8">
            We build custom packages for anniversaries, kitty parties, religious gatherings, school trips, and more. Tell us what you're planning and we'll put something together.
          </p>
          <a
            href={`https://wa.me/918567098852?text=${encodeURIComponent("Hello! I have a custom event in mind and would like to discuss a package.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-body text-sm font-medium bg-wine text-ivory px-8 py-4 rounded-full hover:bg-wine/90 transition-colors"
          >
            Discuss a custom package
          </a>
        </div>
      </section>
    </div>
  );
}

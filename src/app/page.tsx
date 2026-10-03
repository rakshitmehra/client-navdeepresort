'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import TiltCard from '@/components/TiltCard';
import StatusBadge from '@/components/StatusBadge';
import { whatsappLink } from '@/lib/whatsapp';
import { bigVenues, partyHall, properties } from '@/lib/venues';

const venueCards = [
  ...bigVenues.map((v) => ({ ...v, href: `/packages#${v.id}` })),
  { ...partyHall, href: '/packages#party-hall' },
];

/* ─── PACKAGES ──────────────────────────────────────────────── */
const packages = [
  {
    id: 'family-retreat',
    title: 'Family Retreat',
    subtitle: 'Weekend getaway for families',
    description: 'Lush lawns, a pool in summers, and activities for all ages. Everything your family needs to unwind.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    features: ['Lawn & Pool (Summers)', 'Bonfire Evenings', 'Kids Play Area', 'Breakfast Included'],
    tag: 'Family',
  },
  {
    id: 'wedding-banquet',
    title: 'Wedding & Banquet',
    subtitle: 'Your perfect celebration venue',
    description: 'From intimate ceremonies to grand receptions — our sprawling grounds make your day unforgettable.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    features: ['Decorated Banquet Hall', 'Outdoor Ceremony Lawn', 'Custom Catering', 'Décor & Lighting'],
    tag: 'Wedding',
  },
  {
    id: 'corporate-retreat',
    title: 'Corporate Retreat',
    subtitle: 'Productive days, restorative evenings',
    description: 'A calm, green setting away from city noise. Meeting rooms, team activities, and meals handled.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80',
    features: ['Conference Facilities', 'Team Activities', 'All Meals Included', 'High-Speed Wi-Fi'],
    tag: 'Corporate',
  },
  {
    id: 'day-picnic',
    title: 'Day Picnic',
    subtitle: 'A day out in the greens',
    description: 'Pack nothing but good company. Full resort access, a hearty meal, and a day surrounded by nature.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
    features: ['Full Resort Access', 'Buffet Lunch', 'Pool (Summers only)', 'Outdoor Games'],
    tag: 'Day Out',
  },
  {
    id: 'birthday-party',
    title: 'Birthday Celebrations',
    subtitle: 'Mark the moment right',
    description: 'Let us handle the decorations, cake, and catering. You just show up and celebrate.',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80',
    features: ['Custom Decoration', 'Birthday Cake', 'Party Snacks & Meals', 'Games & Music'],
    tag: 'Birthday',
  },
  {
    id: 'overnight-stay',
    title: 'Overnight Stay',
    subtitle: 'Stay in, slow down',
    description: 'Wake up to birdsong and fresh Punjab mornings. Truly step away from the rush.',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
    features: ['Comfortable Rooms', 'Dinner & Breakfast', 'Evening Bonfire', 'Morning Nature Walk'],
    tag: 'Stay',
  },
  {
    id: 'engagement',
    title: 'Engagement & Sangeet',
    subtitle: 'Ring the moment in style',
    description: 'Ring exchange, sangeet, and mehendi evenings with live music, vibrant décor, and a dance floor under the stars.',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80',
    features: ['Open Sky Dance Floor', 'Live Music & DJ', 'Fancy Décor', 'Full Catering'],
    tag: 'Wedding',
  },
  {
    id: 'anniversary',
    title: 'Anniversary Dinner',
    subtitle: 'Celebrate your years together',
    description: 'An intimate candlelit dinner on the lawn, a private table, and a quiet evening designed just for two — or your closest people.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    features: ['Private Table Setting', 'Candlelight Lawn', 'Custom Menu', 'Photography Corner'],
    tag: 'Romance',
  },
];

type Package = (typeof packages)[number];

/* ─── TESTIMONIALS ──────────────────────────────────────────── */
const testimonials = [
  {
    name: 'Harpreet Singh',
    location: 'Hoshiarpur',
    review: 'We hosted our daughter\'s wedding here and it was beyond our expectations. The lawns were beautifully decorated, the food was excellent, and the staff was incredibly helpful throughout.',
    stars: 5,
  },
  {
    name: 'Rajneet Kaur',
    location: 'Jalandhar',
    review: 'Took the family for a day picnic and everyone had a wonderful time. The pool is clean, the food is fresh and tasty. We\'ll definitely be coming back for an overnight stay.',
    stars: 5,
  },
  {
    name: 'Vikram Sharma',
    location: 'Mukerian',
    review: 'Our office retreat at Navdeep was a great experience. Spacious grounds, good food, and the bonfire in the evening made for a memorable team-building trip.',
    stars: 5,
  },
  {
    name: 'Amandeep Gill',
    location: 'Dasuya',
    review: 'We booked the resort for my sister\'s sangeet and it exceeded every expectation. The open dance floor under the lights was the highlight of the night.',
    stars: 5,
  },
  {
    name: 'Manpreet Sidhu',
    location: 'Phillaur',
    review: 'Came for an anniversary dinner and ended up staying the night. The staff remembered our names by the next morning. Genuinely warm hospitality.',
    stars: 5,
  },
  {
    name: 'Gurpreet Bains',
    location: 'Jalandhar',
    review: 'The conference facilities are solid and the high-speed wifi never dropped once. Ideal for a full-day team offsite followed by a relaxed evening.',
    stars: 5,
  },
  {
    name: 'Simranjit Kaur',
    location: 'Tanda Road',
    review: 'What sold me was the open grounds. Forty of us for a family day out had room to move, and the kids were still talking about the pool a week later.',
    stars: 5,
  },
  {
    name: 'Rakesh Kumar',
    location: 'Mukerian',
    review: 'We have hosted multiple events here now and the consistency never drops. The catering in particular is always fresh and generous.',
    stars: 5,
  },
];

/* ─── PACKAGE CARD ──────────────────────────────────────────── */
function PackageCard({ pkg }: { pkg: Package }) {
  const waHref = whatsappLink(`Hello Navdeep Resort! I'd like to enquire about the ${pkg.title} package.`, `/packages#${pkg.id}`);
  return (
    <TiltCard className="reveal bg-white rounded-2xl overflow-hidden flex flex-col group">
      <div className="relative h-56 overflow-hidden img-zoom">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wine/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="absolute top-4 left-4 glass text-ivory text-xs font-body font-medium px-3 py-1.5 rounded-full">
          {pkg.tag}
        </span>
      </div>
      <div className="p-7 flex flex-col flex-1">
        <p className="font-body text-xs text-gold font-medium mb-1">{pkg.subtitle}</p>
        <h3 className="font-display text-2xl text-wine font-bold mb-3 leading-snug">{pkg.title}</h3>
        <p className="font-body text-sm text-gray-600 leading-relaxed mb-5">{pkg.description}</p>
        <ul className="grid grid-cols-2 gap-2 mb-6 flex-1">
          {pkg.features.map((f) => (
            <li key={f} className="flex items-center gap-2 font-body text-xs text-gray-700">
              <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto w-full text-center font-body text-sm font-semibold bg-wine text-ivory px-6 py-3 rounded-full hover:bg-gold hover:text-wine transition-all duration-300 group-hover:shadow-lg group-hover:shadow-wine/20"
        >
          Enquire on WhatsApp
        </a>
      </div>
    </TiltCard>
  );
}

/* ─── TESTIMONIAL CARD ──────────────────────────────────────── */
function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <div className="w-[380px] shrink-0 bg-white rounded-2xl p-8 shadow-sm border border-wine/5 hover:shadow-xl hover:shadow-wine/10 transition-shadow duration-300">
      <div className="flex gap-0.5 mb-5">
        {Array.from({ length: t.stars }).map((_, i) => (
          <span key={i} className="text-gold text-lg">★</span>
        ))}
      </div>
      <p className="font-body text-sm text-gray-700 leading-relaxed mb-6 italic">
        &ldquo;{t.review}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-blush flex items-center justify-center font-display text-wine text-lg font-bold">
          {t.name[0]}
        </div>
        <div>
          <span className="font-body font-semibold text-wine text-sm block">{t.name}</span>
          <span className="font-body text-xs text-gray-400">{t.location}</span>
        </div>
      </div>
    </div>
  );
}

/* ─── HERO ──────────────────────────────────────────────────── */
function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return;
      bgRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const waHref = whatsappLink("Hello Navdeep Resort! I'd like to know more about the resort.", '/');

  return (
    <section className="relative min-h-screen flex items-end pb-20 pt-24 overflow-hidden noise-overlay">
      <div ref={bgRef} className="absolute inset-0 scale-110" style={{ willChange: 'transform' }}>
        <Image
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1800&q=90"
          alt="Navdeep Resort grounds"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-wine/70 via-wine/30 to-wine/5" />
      <div className="absolute inset-0 bg-gradient-to-r from-wine/30 to-transparent" />

      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gold/10 blur-3xl float-anim pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-gold/[0.07] blur-3xl float-anim-delay pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 reveal">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="font-body text-ivory/90 text-xs tracking-widest uppercase">GT Road · Mukerian, Punjab</span>
          </div>

          <h1
            className="font-display text-ivory leading-none mb-6 reveal"
            style={{ fontSize: 'clamp(3rem, 9vw, 6.5rem)', fontWeight: 700, letterSpacing: '-0.035em', transitionDelay: '0.1s' }}
          >
            Where Punjab<br />
            <span className="text-gradient-gold italic">breathes</span><br />
            <span className="text-ivory/90">freely</span>
          </h1>

          <p
            className="font-body text-ivory/75 text-lg leading-relaxed mb-10 max-w-lg reveal"
            style={{ transitionDelay: '0.2s' }}
          >
            A resort on the GT Road — open grounds, warm hospitality, and every occasion made memorable.
          </p>

          <div className="flex flex-wrap gap-4 reveal" style={{ transitionDelay: '0.3s' }}>
            <Link
              href="/packages"
              className="font-body text-sm font-semibold bg-gold text-wine px-8 py-4 rounded-full hover:bg-gold/90 hover:scale-105 active:scale-95 transition-all duration-200 shadow-xl shadow-gold/30"
            >
              Venues &amp; Packages
            </Link>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm font-semibold glass text-ivory px-8 py-4 rounded-full hover:bg-white/15 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 reveal opacity-60" style={{ transitionDelay: '0.6s' }}>
          <span className="font-body text-ivory/50 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-ivory/50 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}

/* ─── INSTAGRAM BANNER ──────────────────────────────────────── */
function InstagramBanner() {
  const posts = [
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80',
    'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&q=80',
  ];

  return (
    <section className="bg-ivory py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-wine to-[#8E4A5C] rounded-3xl p-10 md:p-16 relative overflow-hidden reveal">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gold/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-gold/[0.08] blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-body text-gold text-sm font-medium mb-4 tracking-widest uppercase">Follow along</p>
              <h2 className="font-display text-4xl md:text-5xl text-ivory font-bold leading-tight mb-4">
                Follow us on<br />Instagram
              </h2>
              <p className="font-body text-ivory/65 leading-relaxed mb-8 max-w-md">
                See what\'s happening at the resort — weddings, celebrations, and everyday moments from our grounds, as they happen.
              </p>
              <div className="flex items-center gap-5 flex-wrap">
                <a
                  href="https://www.instagram.com/navdeepresorts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-body text-sm font-semibold bg-gradient-to-r from-[#F9CE34] via-[#EE2A7B] to-[#6228D7] text-white px-8 py-4 rounded-full hover:scale-105 active:scale-95 transition-all duration-200 shadow-2xl shadow-pink-500/20"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  @navdeepresorts
                </a>
                <span className="font-body text-ivory/40 text-sm">Tap the button to follow</span>
              </div>
            </div>

            {/* Post preview strip */}
            <div className="grid grid-cols-2 gap-3">
              {posts.map((src, i) => (
                <a
                  key={i}
                  href="https://www.instagram.com/navdeepresorts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-square rounded-xl overflow-hidden group"
                  style={{ transform: `rotate(${(i - 1.5) * 2.5}deg)` }}
                >
                  <Image
                    src={src}
                    alt={`Instagram post ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-wine/0 group-hover:bg-wine/40 transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────── */
export default function HomePage() {
  const waHref = whatsappLink("Hello Navdeep Resort! I'd like to plan a visit. Please help me with details.", '/');
  const marqueeItems = [
    'Family Retreats', 'Grand Weddings', 'Corporate Retreats', 'Birthday Parties',
    'Day Picnics', 'Overnight Stays', 'Sangeet Nights', 'Anniversary Dinners',
    'Family Retreats', 'Grand Weddings', 'Corporate Retreats', 'Birthday Parties',
    'Day Picnics', 'Overnight Stays', 'Sangeet Nights', 'Anniversary Dinners',
  ];

  const stats = [
    { value: '5 Acres', label: 'of open resort grounds with manicured lawns and natural greenery' },
    { value: 'All Occasions', label: 'Weddings, birthdays, corporate retreats, picnics — we handle it all' },
    { value: 'GT Road', label: 'Easily reachable from Mukerian, Hoshiarpur, Dasuya and Jalandhar' },
  ];

  const galleryHighlights = [
    { src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80', span: 'col-span-2 row-span-2' },
    { src: 'https://images.unsplash.com/photo-1586611292717-f828b167408c?w=700&q=80', span: '' },
    { src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=700&q=80', span: '' },
    { src: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=700&q=80', span: '' },
    { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=700&q=80', span: '' },
  ];

  return (
    <div>
      <HeroSection />

      {/* MARQUEE */}
      <div className="bg-gold overflow-hidden py-4">
        <div className="marquee-track">
          {marqueeItems.map((item, i) => (
            <span key={i} className="font-display text-wine text-lg font-semibold mx-8 whitespace-nowrap flex items-center gap-4">
              {item}
              <span className="text-wine/40 text-sm">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* STATS */}
      <section className="bg-blush py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 divide-y md:divide-y-0 md:divide-x divide-wine/10">
          {stats.map((s) => (
            <div key={s.value} className="reveal text-center md:text-left px-6 py-2">
              <div className="font-display text-5xl text-wine font-bold mb-1 tracking-tight">{s.value}</div>
              <p className="font-body text-sm text-gray-600 leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VENUES */}
      <section className="bg-ivory pt-28 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 reveal">
            <p className="font-body text-gold text-sm font-medium mb-3 tracking-wide uppercase">Our venues</p>
            <h2 className="font-display text-5xl md:text-6xl text-wine font-bold leading-tight mb-4 tracking-tight">
              Three places to<br />celebrate
            </h2>
            <p className="font-body text-gray-600 text-base max-w-xl leading-relaxed">
              Indoor and Outdoor for marriages and big functions. The Small Party Hall for birthdays, ring ceremonies and other small gatherings.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger">
            {venueCards.map((v) => (
              <TiltCard key={v.id} className="reveal bg-white rounded-2xl overflow-hidden flex flex-col group">
                <div className="relative h-56 overflow-hidden img-zoom">
                  <Image src={v.image} alt={v.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  <span className="absolute top-4 left-4 glass text-ivory text-xs font-body font-medium px-3 py-1.5 rounded-full">
                    {v.tag}
                  </span>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="font-display text-2xl text-wine font-bold mb-3 leading-snug">{v.title}</h3>
                  <p className="font-body text-sm text-gray-600 leading-relaxed mb-6 flex-1">{v.description}</p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={v.href}
                      className="font-body text-sm font-semibold bg-wine text-ivory px-6 py-3 rounded-full hover:bg-gold hover:text-wine transition-colors duration-300"
                    >
                      View packages
                    </Link>
                    <a
                      href={whatsappLink(`Hello Navdeep Resort! I'd like to enquire about the ${v.title} (${v.tag.toLowerCase()}).`, v.href)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm font-semibold border border-wine/30 text-wine px-6 py-3 rounded-full hover:border-wine transition-colors duration-300"
                    >
                      Inquire
                    </a>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="bg-ivory py-28 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 reveal">
            <p className="font-body text-gold text-sm font-medium mb-3 tracking-wide uppercase">What we offer</p>
            <h2 className="font-display text-5xl md:text-6xl text-wine font-bold leading-tight mb-4 tracking-tight">
              Plans for every<br />occasion
            </h2>
            <p className="font-body text-gray-600 text-base max-w-xl leading-relaxed">
              Choose a package — or let us build something custom. All packages include our signature hospitality and full grounds access.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
          <div className="mt-14 text-center reveal">
            <Link
              href="/packages"
              className="inline-block font-body text-sm font-semibold border-2 border-wine text-wine px-10 py-4 rounded-full hover:bg-wine hover:text-ivory transition-all duration-300 hover:shadow-xl hover:shadow-wine/20 hover:scale-105"
            >
              See Full Package Details
            </Link>
          </div>
        </div>
      </section>

      {/* POOL */}
      <section className="bg-blush py-28 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal-left relative h-80 lg:h-[440px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80"
              alt="Swimming pool at Navdeep Resort"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="reveal-right">
            <StatusBadge status="seasonal" className="mb-5" />
            <h2 className="font-display text-5xl md:text-6xl text-wine font-bold leading-tight mb-4 tracking-tight">
              The Pool
            </h2>
            <p className="font-body text-gray-600 text-base leading-relaxed mb-8 max-w-md">
              Cool off in summers — pool parties for 50 to 100 guests, family outings and day picnics. The pool is operational in the summer season only.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/pool"
                className="font-body text-sm font-semibold bg-wine text-ivory px-8 py-4 rounded-full hover:bg-gold hover:text-wine transition-colors duration-300"
              >
                Explore the pool
              </Link>
              <a
                href={whatsappLink("Hello Navdeep Resort! I'd like to enquire about the swimming pool / a pool party.", '/pool')}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm font-semibold border-2 border-wine text-wine px-8 py-4 rounded-full hover:bg-wine hover:text-ivory transition-colors duration-300"
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTIES STATUS */}
      <section className="bg-ivory py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 reveal">
            <p className="font-body text-gold text-sm font-medium mb-3 tracking-wide uppercase">At a glance</p>
            <h2 className="font-display text-4xl md:text-5xl text-wine font-bold tracking-tight">What is open</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger">
            {properties.map((p) => (
              <Link
                key={p.id}
                href={p.href}
                className="reveal bg-white rounded-2xl p-7 border border-wine/10 hover:border-gold hover:shadow-xl hover:shadow-wine/10 transition-all duration-300 flex flex-col gap-4"
              >
                <StatusBadge status={p.status} className="self-start" />
                <h3 className="font-display text-2xl text-wine font-bold leading-snug">{p.title}</h3>
                <p className="font-body text-sm text-gray-600 leading-relaxed">{p.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="bg-wine py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,#CFA044,transparent_60%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="reveal-left">
              <p className="font-body text-gold text-sm font-medium mb-3 tracking-wide uppercase">Gallery</p>
              <h2 className="font-display text-5xl md:text-6xl text-ivory font-bold leading-tight tracking-tight">
                A glimpse of<br />the resort
              </h2>
            </div>
            <Link
              href="/gallery"
              className="reveal-right font-body text-sm font-medium text-gold hover:text-ivory border border-gold/40 hover:border-ivory px-6 py-3 rounded-full transition-all duration-300 self-start md:self-auto hover:scale-105"
            >
              Full gallery →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-3" style={{ gridTemplateRows: '260px 200px' }}>
            {galleryHighlights.map((img, i) => (
              <div
                key={i}
                className={`reveal-scale relative overflow-hidden rounded-2xl img-zoom ${img.span}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <Image src={img.src} alt={`Navdeep Resort — gallery ${i + 1}`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-wine/0 hover:bg-wine/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — INFINITE MARQUEE */}
      <section className="bg-ivory py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-14">
          <div className="text-center reveal">
            <p className="font-body text-gold text-sm font-medium mb-3 tracking-wide uppercase">Guest stories</p>
            <h2 className="font-display text-5xl text-wine font-bold tracking-tight">What guests say</h2>
            <p className="font-body text-sm text-gray-500 mt-3">Hover to pause</p>
          </div>
        </div>

        <div className="relative">
          {/* Edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-ivory to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-ivory to-transparent z-10" />

          <div className="testi-track px-6">
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </div>
      </section>

      <InstagramBanner />

      {/* CTA */}
      <section className="relative py-14 px-6 overflow-hidden bg-gradient-to-br from-[#CFA044] via-[#E8C87A] to-[#A67C2E]">
        <div className="absolute top-0 left-0 w-[380px] h-[380px] rounded-full bg-[#E8C87A]/25 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#8A6420]/20 blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="reveal">
            <h2 className="font-display text-ivory text-2xl md:text-3xl font-bold leading-tight mb-3 tracking-tight">
              Plan your visit today
            </h2>
            <p className="font-body text-ivory/80 text-sm mb-6 leading-relaxed max-w-md mx-auto">
              Whether you know exactly what you want or need help planning — just say hello on WhatsApp.
            </p>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 font-body text-sm font-semibold bg-ivory text-[#7A5A18] px-7 py-3 rounded-full hover:bg-white hover:scale-105 active:scale-95 transition-all duration-200 shadow-xl shadow-[#7A5A18]/25"
            >
              <svg width="17" height="17" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M24 4C12.954 4 4 12.954 4 24c0 3.54.924 6.863 2.546 9.74L4 44l10.52-2.508A19.914 19.914 0 0 0 24 44c11.046 0 20-8.954 20-20S35.046 4 24 4z" fill="#7A5A18"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M24 7.5C14.835 7.5 7.5 14.835 7.5 24c0 3.163.876 6.12 2.402 8.64L8 40l7.574-1.873A16.45 16.45 0 0 0 24 40.5c9.113 0 16.5-7.387 16.5-16.5S33.113 7.5 24 7.5z" fill="#25D366"/>
                <path d="M32.013 27.527c-.44-.22-2.604-1.284-3.007-1.43-.402-.146-.695-.22-.987.22-.292.44-1.133 1.43-1.388 1.723-.256.293-.512.329-.951.11-.44-.22-1.857-.684-3.538-2.183-1.308-1.165-2.191-2.604-2.447-3.044-.256-.44-.027-.677.192-.896.196-.196.44-.512.659-.768.22-.256.293-.44.44-.732.146-.293.073-.55-.037-.769-.11-.22-.987-2.377-1.353-3.254-.354-.854-.717-.739-1.004-.752a18.5 18.5 0 0 0-.859-.016c-.293 0-.769.11-1.172.55-.402.44-1.535 1.5-1.535 3.657 0 2.157 1.572 4.24 1.79 4.534.22.293 3.094 4.725 7.5 6.625 1.048.452 1.866.722 2.504.924 1.052.334 2.011.287 2.769.174.845-.125 2.604-1.065 2.973-2.094.37-1.028.37-1.91.26-2.094-.11-.183-.402-.293-.843-.513z" fill="white"/>
              </svg>
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

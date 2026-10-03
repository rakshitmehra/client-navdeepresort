import Image from 'next/image';
import type { Metadata } from 'next';
import { whatsappLink } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Navdeep Resort — our story, values, and facilities. A 5-acre resort on GT Road, Mukerian, Punjab offering hospitality rooted in Punjabi warmth since day one.',
  keywords: [
    'about Navdeep Resort',
    'resort in Mukerian Punjab',
    'best resort GT Road',
    'farmhouse Mukerian',
    'resort facilities Punjab',
    '5 acre resort Punjab',
  ],
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Us | Navdeep Resort, Mukerian',
    description: 'Our story, values and facilities at Navdeep Resort, GT Road, Mukerian.',
    url: 'https://navdeepresort.com/about',
  },
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-36 pb-0 overflow-hidden min-h-[70vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=85"
            alt="Navdeep Resort grounds"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-wine via-wine/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
          <p className="font-body text-gold text-sm font-medium mb-3">Our story</p>
          <h1 className="font-display text-ivory text-5xl md:text-6xl font-semibold leading-tight max-w-2xl">
            Built for this land,<br />built for these people
          </h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-ivory py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <h2 className="font-display text-4xl text-wine font-semibold mb-6 leading-snug">
              A resort rooted in Punjab's warmth
            </h2>
            <div className="space-y-4 font-body text-sm text-gray-700 leading-relaxed">
              <p>
                Navdeep Resort was born from a simple belief: that the people of Punjab deserve a place to truly rest — not hours away, but right here on the GT Road. A place where families can gather, couples can celebrate, and teams can reconnect with what matters.
              </p>
              <p>
                Set across 5 lush acres on the outskirts of Mukerian — opposite the Sugar Mill, Chak Alla Baksh — Navdeep Resort brings together open spaces, thoughtful hospitality, and an environment that invites you to slow down.
              </p>
              <p>
                We started with a vision to create a destination that feels both special and genuinely ours — a resort that reflects the generosity and greenery of this region. Over the years, we've hosted hundreds of weddings, family gatherings, corporate retreats, and intimate celebrations, and our commitment has stayed the same: make every visit feel like it was planned just for you.
              </p>
              <p>
                What started as a handful of weekend bookings has grown into a place people return to year after year. Families who came for a day picnic now book the whole lawn for a wedding. Teams who met here once plan their next offsite before the current one ends. That kind of repeat trust is the only metric we've ever cared about.
              </p>
              <p>
                We are a Punjab family, and that shapes everything — from the food we cook to the way we treat a guest who arrives late. There is no template here. Every package is adjusted around how many people you have, how long you're staying, and what the occasion actually means to you.
              </p>
            </div>
          </div>
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden reveal-right">
            <Image
              src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=900&q=80"
              alt="Navdeep Resort outdoor area"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-blush py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl text-wine font-semibold mb-14 text-center">
            What we stand for
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5C1A2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                ),
                title: 'Warm hospitality',
                body: 'Every guest is welcomed like family. From the moment you arrive to the moment you leave, our team is here to make things easy and enjoyable.',
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5C1A2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
                title: 'Safe & clean',
                body: 'Cleanliness isn\'t an afterthought here. Our grounds, rooms, pool, and dining areas are maintained to the highest standards, every day.',
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5C1A2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12s1 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                ),
                title: 'Good food, always',
                body: 'Our kitchen is stocked with fresh, local ingredients. Whether it\'s a family buffet or a wedding feast, we take the food seriously.',
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5C1A2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                title: 'Made for groups',
                body: 'Families, friend circles, offices, wedding parties — our spaces are designed for people coming together, not individuals in isolation.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8">
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-display text-xl text-wine font-semibold mb-3">{item.title}</h3>
                <p className="font-body text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resort Highlights */}
      <section className="bg-ivory py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-xl overflow-hidden" style={{ height: '260px' }}>
              <Image
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=700&q=80"
                alt="Resort pool area"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden mt-8" style={{ height: '260px' }}>
              <Image
                src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=700&q=80"
                alt="Resort greenery"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>
          <div>
            <h2 className="font-display text-4xl text-wine font-semibold mb-6 leading-snug">
              What makes Navdeep<br />different
            </h2>
            <div className="space-y-5">
              {[
                { title: '5 acres of open grounds', desc: 'Plenty of space to breathe, play, celebrate, and relax — no crowding, no rush.' },
                { title: 'GT Road access', desc: 'Easily reachable from Mukerian, Hoshiarpur, Dasuya, and Jalandhar with ample parking.' },
                { title: 'Full-service event support', desc: 'From décor to catering to sound systems — we manage every element of your event.' },
                { title: 'Year-round operations', desc: 'Open all year, with arrangements for every season and every kind of occasion.' },
              ].map((point) => (
                <div key={point.title} className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-body font-medium text-wine text-sm block mb-1">{point.title}</span>
                    <span className="font-body text-sm text-gray-600 leading-relaxed">{point.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="bg-ivory py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 reveal">
            <p className="font-body text-gold text-sm font-medium mb-3 tracking-widest uppercase">On the grounds</p>
            <h2 className="font-display text-4xl md:text-5xl text-wine font-bold tracking-tight">
              What we have
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 stagger">
            {[
              { icon: 'M4 16h16M6 16V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8M8 20v2M16 20v2', label: 'Swimming Pool', desc: 'Clean, maintained daily' },
              { icon: 'M3 10h18M5 10v10h14V10M9 20v-6h6v6', label: 'Banquet Hall', desc: 'Seats up to 1,000 guests' },
              { icon: 'M12 2v20M2 12h20', label: 'Open Lawn', desc: '5 acres of manicured green' },
              { icon: 'M3 21h18M5 21V8l7-5 7 5v13', label: 'Guest Rooms', desc: 'Comfortable overnight stays' },
              { icon: 'M17 8a5 5 0 1 0-10 0c0 4-2 5-2 7h14c0-2-2-3-2-7z', label: 'Bonfire Lawn', desc: 'Evenings under the stars' },
              { icon: 'M4 4h16v12H4zM8 20h8M12 16v4', label: 'Conference Room', desc: 'AV & projector included' },
              { icon: 'M6 4v16M18 4v16M3 8h18M3 16h18', label: 'Kids Play Area', desc: 'Safe and supervised' },
              { icon: 'M4 18h16M6 18V8h12v10M9 8V5h6v3', label: 'Multi-Cuisine Kitchen', desc: 'Fresh, locally sourced' },
            ].map((f) => (
              <div key={f.label} className="reveal bg-blush rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#5C1A2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={f.icon} />
                </svg>
                <h3 className="font-display text-base text-wine font-bold mt-4 mb-1">{f.label}</h3>
                <p className="font-body text-xs text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#CFA044] via-[#E8C87A] to-[#A67C2E] py-20 px-6 text-center">
        <div className="absolute top-0 left-0 w-[380px] h-[380px] rounded-full bg-[#E8C87A]/25 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="relative max-w-xl mx-auto">
          <h2 className="font-display text-4xl text-wine font-semibold mb-4">
            Come see it for yourself
          </h2>
          <p className="font-body text-wine/75 text-sm mb-8 leading-relaxed">
            The best way to understand Navdeep Resort is to visit. Reach out and we'll arrange a tour.
          </p>
          <a
            href={whatsappLink("Hello Navdeep Resort! I'd like to schedule a visit.", '/about')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-body text-sm font-medium bg-wine text-ivory px-8 py-4 rounded-full hover:bg-wine/90 hover:scale-105 transition-all duration-200 shadow-xl shadow-wine/25"
          >
            Schedule a visit
          </a>
        </div>
      </section>
    </div>
  );
}

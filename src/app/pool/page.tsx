import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import StatusBadge from '@/components/StatusBadge';
import { whatsappLink } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Swimming Pool',
  description:
    'The swimming pool at Navdeep Resort, Mukerian is operational in summers only. Pool parties for 50 to 100 guests, day picnics and family outings. Enquire on WhatsApp: +91 85670 98852.',
  keywords: [
    'swimming pool Mukerian',
    'pool party Mukerian',
    'resort with pool Punjab',
    'pool party venue Hoshiarpur',
    'day picnic with pool Punjab',
  ],
  alternates: { canonical: '/pool' },
  openGraph: {
    title: 'Swimming Pool | Navdeep Resort, Mukerian',
    description: 'Operational in summers only. Pool parties, day picnics and family outings.',
    url: 'https://navdeepresort.com/pool',
  },
};

const highlights = [
  { title: 'Summers only', body: 'The pool is operational in the summer season only. Message us to confirm it is open before you plan your visit.' },
  { title: 'Pool parties', body: 'Birthday and pool parties for 50 to 100 guests, with our party menu served poolside.' },
  { title: 'Family & picnic days', body: 'Combine pool time with the lawns, outdoor games and a full meal on a day picnic.' },
];

export default function PoolPage() {
  return (
    <div>
      <section className="relative min-h-[70vh] flex items-end pb-16 pt-36 px-6 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1800&q=85"
          alt="Swimming pool at Navdeep Resort"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wine/85 via-wine/40 to-wine/10" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <StatusBadge status="seasonal" className="mb-6" />
          <h1 className="font-display text-ivory text-5xl md:text-7xl font-bold leading-none tracking-tight mb-5">
            The Pool
          </h1>
          <p className="font-body text-ivory/80 text-lg max-w-xl leading-relaxed">
            Cool off at Navdeep Resort — open in summers only.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((h) => (
            <div key={h.title} className="reveal bg-white rounded-2xl p-8 border border-wine/10">
              <h2 className="font-display text-2xl text-wine font-bold mb-3">{h.title}</h2>
              <p className="font-body text-sm text-gray-600 leading-relaxed">{h.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blush py-20 px-6">
        <div className="max-w-2xl mx-auto text-center reveal">
          <h2 className="font-display text-4xl text-wine font-semibold mb-4">Planning a pool day?</h2>
          <p className="font-body text-gray-600 text-sm leading-relaxed mb-8">
            Tell us the date and group size and we will confirm availability for the season.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={whatsappLink(
                "Hello Navdeep Resort! I'd like to enquire about the swimming pool / a pool party. Is the pool open for the season, and what dates are available?",
                '/pool'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm font-semibold bg-wine text-ivory px-8 py-4 rounded-full hover:bg-gold hover:text-wine transition-colors duration-300"
            >
              Inquire on WhatsApp
            </a>
            <Link
              href="/packages#party-hall"
              className="font-body text-sm font-semibold border-2 border-wine text-wine px-8 py-4 rounded-full hover:bg-wine hover:text-ivory transition-colors duration-300"
            >
              See party menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

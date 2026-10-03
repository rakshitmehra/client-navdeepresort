import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import StatusBadge from '@/components/StatusBadge';
import { whatsappLink } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Navdeep Restaurant — Opening Soon',
  description:
    'Navdeep Restaurant at Navdeep Resort, GT Road, Mukerian is opening soon. Message us on WhatsApp to be told when the doors open.',
  keywords: ['restaurant in Mukerian', 'Navdeep Restaurant', 'restaurant GT Road Mukerian', 'family restaurant Mukerian'],
  alternates: { canonical: '/restaurant' },
  openGraph: {
    title: 'Navdeep Restaurant | Opening Soon',
    description: 'Our restaurant on GT Road, Mukerian is opening soon.',
    url: 'https://navdeepresort.com/restaurant',
  },
};

export default function RestaurantPage() {
  return (
    <div>
      <section className="relative min-h-[70vh] flex items-end pb-16 pt-36 px-6 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=85"
          alt="Navdeep Restaurant"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wine/90 via-wine/50 to-wine/20" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <StatusBadge status="soon" className="mb-6" />
          <h1 className="font-display text-ivory text-5xl md:text-7xl font-bold leading-none tracking-tight mb-5">
            Navdeep Restaurant
          </h1>
          <p className="font-body text-ivory/80 text-lg max-w-xl leading-relaxed">
            Food, service and style on GT Road — opening soon.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-20 px-6">
        <div className="max-w-3xl mx-auto text-center reveal">
          <h2 className="font-display text-4xl text-wine font-bold tracking-tight mb-4">We are getting ready</h2>
          <p className="font-body text-gray-600 text-sm leading-relaxed mb-8">
            The restaurant is not open to walk-in guests yet. Send us a message and we will let you know as soon as it opens. In the meantime, our resort is operational for weddings and functions, and our party hall is available for small gatherings.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={whatsappLink(
                "Hello Navdeep Resort! I'd like to know when Navdeep Restaurant will open. Please keep me updated.",
                '/restaurant'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm font-semibold bg-wine text-ivory px-8 py-4 rounded-full hover:bg-gold hover:text-wine transition-colors duration-300"
            >
              Ask about opening on WhatsApp
            </a>
            <Link
              href="/packages#party-hall"
              className="font-body text-sm font-semibold border-2 border-wine text-wine px-8 py-4 rounded-full hover:bg-wine hover:text-ivory transition-colors duration-300"
            >
              See the party hall
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

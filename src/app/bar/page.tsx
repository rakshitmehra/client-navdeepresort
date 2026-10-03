import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import StatusBadge from '@/components/StatusBadge';
import { whatsappLink } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Bar',
  description: 'The bar at Navdeep Resort, Mukerian is not operational at this time.',
  alternates: { canonical: '/bar' },
  openGraph: {
    title: 'Bar | Navdeep Resort, Mukerian',
    description: 'The bar is not operational at this time.',
    url: 'https://navdeepresort.com/bar',
  },
};

export default function BarPage() {
  return (
    <div>
      <section className="relative min-h-[70vh] flex items-end pb-16 pt-36 px-6 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=1800&q=85"
          alt="Bar counter"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wine/90 via-wine/55 to-wine/30" />
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <StatusBadge status="closed" className="mb-6" />
          <h1 className="font-display text-ivory text-5xl md:text-7xl font-bold leading-none tracking-tight mb-5">
            The Bar
          </h1>
          <p className="font-body text-ivory/70 text-lg max-w-xl leading-relaxed">
            Our bar is not operational at this time.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-20 px-6">
        <div className="max-w-3xl mx-auto text-center reveal">
          <h2 className="font-display text-4xl text-wine font-bold tracking-tight mb-4">Hosting a function?</h2>
          <p className="font-body text-gray-600 text-sm leading-relaxed mb-8">
            Only the resort is operational for weddings and functions. For events, hard drinks and whisky permits are arranged by the host, as per our terms.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/packages"
              className="font-body text-sm font-semibold bg-wine text-ivory px-8 py-4 rounded-full hover:bg-gold hover:text-wine transition-colors duration-300"
            >
              View packages
            </Link>
            <a
              href={whatsappLink("Hello Navdeep Resort! I'd like to ask about the bar and drinks arrangements for an event.", '/bar')}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm font-semibold border-2 border-wine text-wine px-8 py-4 rounded-full hover:bg-wine hover:text-ivory transition-colors duration-300"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

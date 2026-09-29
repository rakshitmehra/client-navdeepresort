import type { Metadata } from 'next';
import GalleryGrid from '@/components/GalleryGrid';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Photo gallery of Navdeep Resort, Mukerian — resort grounds, swimming pool, wedding lawns, banquet hall, guest rooms, dining and celebrations. See the resort in full colour.',
  keywords: [
    'Navdeep Resort photos',
    'resort gallery Mukerian',
    'wedding venue photos Punjab',
    'banquet hall images Mukerian',
    'resort pool photos Punjab',
    'farmhouse pictures Mukerian',
  ],
  alternates: { canonical: '/gallery' },
  openGraph: {
    title: 'Gallery | Navdeep Resort, Mukerian',
    description: 'Photo gallery of Navdeep Resort grounds, events, rooms and dining.',
    url: 'https://navdeepresort.com/gallery',
  },
};

export default function GalleryPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-wine pt-36 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="font-body text-gold text-sm font-medium mb-3 tracking-widest uppercase">Gallery</p>
          <h1 className="font-display text-ivory text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            See the resort<br />in full colour
          </h1>
          <p className="font-body text-ivory/60 text-base mt-6 max-w-lg leading-relaxed">
            Browse through our grounds, events, rooms, and moments captured at Navdeep Resort.
          </p>
        </div>
      </section>

      <GalleryGrid />

      {/* CTA */}
      <section className="bg-blush py-20 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-wine font-bold mb-3 tracking-tight">
            Ready to make your own memories?
          </h2>
          <p className="font-body text-gray-600 text-sm mb-8 leading-relaxed">
            Reach out and we&apos;ll help plan the perfect visit.
          </p>
          <a
            href="https://wa.me/918567098852?text=Hello%21%20I%27d%20like%20to%20plan%20a%20visit%20to%20Navdeep%20Resort."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-body text-sm font-semibold bg-wine text-ivory px-8 py-3.5 rounded-full hover:bg-gold hover:text-wine transition-all duration-300 hover:scale-105"
          >
            Plan your visit
          </a>
        </div>
      </section>
    </div>
  );
}

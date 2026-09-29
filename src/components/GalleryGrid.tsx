'use client';

import Image from 'next/image';
import { useState } from 'react';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1000&q=80', alt: 'Resort pool area with lush surroundings', size: 'lg' },
  { src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=700&q=80', alt: 'Resort swimming pool at dusk', size: 'sm' },
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1000&q=80', alt: 'Wedding ceremony setup on resort lawn', size: 'lg' },
  { src: 'https://images.unsplash.com/photo-1586611292717-f828b167408c?w=600&q=80', alt: 'Poolside view on a sunny day', size: 'sm' },
  { src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=700&q=80', alt: 'Resort outdoor relaxation area', size: 'sm' },
  { src: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1000&q=80', alt: 'Luxury resort architecture and gardens', size: 'lg' },
  { src: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=600&q=80', alt: 'Nature and greenery surrounding the resort', size: 'sm' },
  { src: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=700&q=80', alt: 'Birthday party decoration at resort', size: 'sm' },
  { src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1000&q=80', alt: 'Comfortable resort room with garden view', size: 'lg' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', alt: 'Fresh food prepared by resort kitchen', size: 'sm' },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700&q=80', alt: 'Buffet spread at the resort', size: 'sm' },
  { src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1000&q=80', alt: 'Resort hotel building exterior', size: 'lg' },
  { src: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=600&q=80', alt: 'Banquet hall decorated for a celebration', size: 'sm' },
  { src: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=700&q=80', alt: 'Resort outdoor seating at sunset', size: 'sm' },
  { src: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=1000&q=80', alt: 'Sunrise over resort grounds', size: 'lg' },
  { src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=80', alt: 'Corporate meeting setup with green views', size: 'sm' },
  { src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=700&q=80', alt: 'Celebration with warm lighting', size: 'sm' },
  { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1000&q=80', alt: 'Lush green path on resort grounds', size: 'lg' },
];

export default function GalleryGrid() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      {/* Floating 3D gallery — no filters */}
      <section className="bg-ivory py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-start">
            {galleryImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightbox(img)}
                aria-label={`View: ${img.alt}`}
                className={`float-card group relative w-full overflow-hidden rounded-2xl bg-blush shadow-lg hover:shadow-2xl cursor-pointer text-left ${
                  img.size === 'lg' ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                style={{
                  // Staggered float so they drift independently
                  ['--dur' as string]: `${8 + (i % 5) * 1.6}s`,
                  ['--delay' as string]: `${(i % 7) * 0.9}s`,
                  aspectRatio: img.size === 'lg' ? '1 / 1' : '3 / 4',
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wine/80 via-wine/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <p className="font-body text-ivory text-xs leading-snug">{img.alt}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white text-4xl font-light leading-none z-10"
            onClick={() => setLightbox(null)}
            aria-label="Close image viewer"
          >
            &times;
          </button>
          <div
            className="relative max-w-5xl w-full max-h-[85vh] rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={1200}
              height={800}
              className="object-contain w-full h-auto max-h-[85vh]"
            />
          </div>
          <p className="absolute bottom-8 left-0 right-0 text-center font-body text-white/60 text-sm px-4">
            {lightbox.alt}
          </p>
        </div>
      )}
    </>
  );
}

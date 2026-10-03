import Link from 'next/link';
import { whatsappLink } from '@/lib/whatsapp';

const destinations = [
  { label: 'Home', href: '/' },
  { label: 'Packages', href: '/packages' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #5C1A2B 0%, #8E4A5C 50%, #3F0E1A 100%)',
        }}
      />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold/10 blur-3xl float-anim pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-gold/[0.07] blur-3xl float-anim-delay pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 py-24 text-center">
        <p className="font-display text-[7rem] md:text-[10rem] font-bold leading-none text-gold/90 tracking-tightest">
          404
        </p>

        <h1 className="font-display text-ivory text-3xl md:text-4xl font-bold leading-tight mt-2 mb-4 tracking-tight">
          This page took a day trip
        </h1>

        <p className="font-body text-ivory/65 text-base leading-relaxed max-w-md mx-auto mb-9">
          The page you&apos;re looking for isn&apos;t here — but there&apos;s plenty to see back at the resort.
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {destinations.map((d) => (
            <Link
              key={d.href}
              href={d.href}
              className="font-body text-sm text-ivory/80 glass hover:bg-white/15 hover:text-ivory px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105"
            >
              {d.label}
            </Link>
          ))}
        </div>

        <a
          href={whatsappLink("Hello Navdeep Resort! I couldn't find what I was looking for on your website.", '/')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 font-body text-sm font-semibold bg-gold text-wine px-7 py-3 rounded-full hover:bg-gold/90 hover:scale-105 active:scale-95 transition-all duration-200 shadow-xl shadow-gold/25"
        >
          Ask on WhatsApp
        </a>
      </div>
    </div>
  );
}

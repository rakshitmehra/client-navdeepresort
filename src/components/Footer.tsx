import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-wine text-ivory">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="font-display text-2xl font-bold block leading-none text-gradient-gold tracking-tight">Navdeep Resort</span>
              <span className="font-body text-ivory/40 text-xs tracking-widest uppercase font-medium mt-2 block">Mukerian · Punjab</span>
            </div>
            <p className="font-body text-ivory/50 text-xs leading-relaxed max-w-xs">
              A sanctuary on GT Road where Punjab's greens, warm hospitality, and cherished memories come together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-ivory/40 text-xs tracking-widest uppercase mb-5">Explore</h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'Packages', href: '/packages' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-ivory/70 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-ivory/40 text-xs tracking-widest uppercase mb-5">Find Us</h4>
            <address className="not-italic font-body text-sm text-ivory/70 leading-relaxed mb-5">
              GT Road, Opposite Sugar Mill,<br />
              Chak Alla Baksh, Mukerian,<br />
              Punjab 144211
            </address>
            <a
              href="tel:+918567098852"
              className="font-body text-sm text-ivory/70 hover:text-gold transition-colors block mb-2"
            >
              +91 85670 98852
            </a>
            <a
              href="https://www.instagram.com/navdeepresorts"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-ivory/70 hover:text-gold transition-colors inline-flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @navdeepresorts
            </a>
            <div className="mt-6">
              <a
                href="https://maps.google.com/maps/place//data=!4m2!3m1!1s0x391b99b611177e01:0xff3b7f3242a8c0dd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm text-gold hover:text-gold/80 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Oversized brand wordmark */}
        <div className="border-t border-white/10 mt-10 pt-8 overflow-hidden">
          <p
            className="font-display text-ivory/[0.06] font-semibold leading-none tracking-tightest select-none"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 8rem)' }}
            aria-hidden="true"
          >
            Navdeep Resort
          </p>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-ivory/30">
            © {new Date().getFullYear()} Navdeep Resort. All rights reserved.
          </p>
          <p className="font-body text-xs text-ivory/30">
            Mukerian, Hoshiarpur, Punjab
          </p>
        </div>
      </div>
    </footer>
  );
}

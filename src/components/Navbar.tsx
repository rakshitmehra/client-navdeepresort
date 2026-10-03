'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { whatsappLink } from '@/lib/whatsapp';
import { statusMeta, type Status } from '@/lib/venues';

const mainLinks = [
  { label: 'Home', href: '/' },
  { label: 'Packages', href: '/packages' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const exploreLinks: { label: string; href: string; note: string; status: Status }[] = [
  { label: 'Swimming Pool', href: '/pool', note: 'Summers only', status: 'seasonal' },
  { label: 'Restaurant', href: '/restaurant', note: 'Opening soon', status: 'soon' },
  { label: 'Bar', href: '/bar', note: 'Not operational', status: 'closed' },
];

const dotColor: Record<Status, string> = {
  operational: 'bg-emerald-400',
  seasonal: 'bg-amber-400',
  soon: 'bg-sky-400',
  closed: 'bg-gray-400',
};

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} className="group flex flex-col items-center leading-none shrink-0" aria-label="Navdeep Resort — home">
      <svg width="22" height="12" viewBox="0 0 22 12" fill="none" aria-hidden="true" className="mb-1 text-gold transition-transform duration-500 group-hover:-translate-y-0.5">
        <path d="M1 11L3 3l4.5 4L11 1l3.5 6L19 3l2 8H1z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" fill="currentColor" fillOpacity="0.2" />
      </svg>
      <span className="font-display text-ivory text-[22px] font-bold uppercase tracking-[0.18em] transition-colors duration-300 group-hover:text-gold">
        Navdeep
      </span>
      <span className="mt-1.5 flex w-full items-center gap-2">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/70" />
        <span className="font-body text-[9px] font-medium uppercase tracking-[0.5em] text-gold -mr-[0.5em]">Resort</span>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/70" />
      </span>
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const WHATSAPP_HREF = whatsappLink("Hello Navdeep Resort! I'd like to enquire about your packages.", pathname);
  const [menuOpen, setMenuOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const exploreRef = useRef<HTMLDivElement>(null);

  const exploreActive = exploreLinks.some((l) => pathname === l.href);

  // Close menus on route change — otherwise they stay open over the new page.
  useEffect(() => {
    setMenuOpen(false);
    setExploreOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the dropdown on outside click / Escape.
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (exploreRef.current && !exploreRef.current.contains(e.target as Node)) setExploreOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setExploreOpen(false);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const linkClass = (active: boolean) =>
    `group relative font-body text-[13px] tracking-wide px-3.5 py-2 rounded-full transition-colors duration-300 ${
      active ? 'text-gold bg-white/[0.07]' : 'text-ivory/75 hover:text-ivory hover:bg-white/[0.06]'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled || menuOpen
          ? 'bg-wine/90 backdrop-blur-xl shadow-[0_1px_0_0_rgba(207,160,68,0.25),0_18px_40px_-24px_rgba(92,26,43,0.9)]'
          : 'bg-gradient-to-b from-wine/70 to-transparent'
      }`}
    >
      <div
        className={`h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent transition-opacity duration-500 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div
        className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'py-2.5' : 'py-4'
        }`}
      >
        <Logo onClick={() => setMenuOpen(false)} />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {mainLinks.slice(0, 2).map((link) => (
            <Link key={link.href} href={link.href} aria-current={pathname === link.href ? 'page' : undefined} className={linkClass(pathname === link.href)}>
              {link.label}
            </Link>
          ))}

          {/* Explore dropdown */}
          <div
            ref={exploreRef}
            className="relative"
            onMouseEnter={() => setExploreOpen(true)}
            onMouseLeave={() => setExploreOpen(false)}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={exploreOpen}
              onClick={() => setExploreOpen(true)}
              className={`${linkClass(exploreActive || exploreOpen)} inline-flex items-center gap-1.5`}
            >
              Explore
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" className={`transition-transform duration-300 ${exploreOpen ? 'rotate-180' : ''}`}>
                <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div
              role="menu"
              className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 transition-all duration-300 ${
                exploreOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'
              }`}
            >
              <div className="w-64 rounded-2xl bg-wine/95 backdrop-blur-xl border border-gold/20 shadow-2xl shadow-black/30 p-2">
                {exploreLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    role="menuitem"
                    className={`flex items-center justify-between gap-4 rounded-xl px-4 py-3 transition-colors duration-200 hover:bg-white/[0.08] ${
                      pathname === l.href ? 'bg-white/[0.06]' : ''
                    }`}
                  >
                    <span className="font-display text-[15px] text-ivory">{l.label}</span>
                    <span className="flex items-center gap-2 font-body text-[11px] text-ivory/55" title={statusMeta[l.status].label}>
                      <span className={`w-1.5 h-1.5 rounded-full ${dotColor[l.status]}`} />
                      {l.note}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {mainLinks.slice(2).map((link) => (
            <Link key={link.href} href={link.href} aria-current={pathname === link.href ? 'page' : undefined} className={linkClass(pathname === link.href)}>
              {link.label}
            </Link>
          ))}

          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 font-body text-[13px] font-semibold bg-gold text-wine px-5 py-2.5 rounded-full hover:bg-ivory hover:shadow-[0_10px_30px_-10px_rgba(207,160,68,0.8)] active:scale-95 transition-all duration-300"
          >
            Ask on WhatsApp
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden relative w-10 h-10 grid place-items-center rounded-full border border-ivory/20 hover:border-gold/50 transition-colors duration-300"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className="flex flex-col gap-[5px]">
            <span className={`block h-px w-5 bg-ivory transition-all duration-300 ${menuOpen ? 'translate-y-[3px] rotate-45 bg-gold' : ''}`} />
            <span className={`block h-px w-5 bg-ivory transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px w-5 bg-ivory transition-all duration-300 ${menuOpen ? '-translate-y-[3px] -rotate-45 bg-gold' : ''}`} />
          </span>
        </button>
      </div>

      {/* Mobile Sheet */}
      <div
        className={`lg:hidden overflow-y-auto transition-all duration-500 ease-out ${
          menuOpen ? 'max-h-[calc(100vh-72px)] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-wine/95 backdrop-blur-xl border-t border-gold/15 px-6 pb-8 pt-5">
          <nav className="flex flex-col">
            {[...mainLinks.slice(0, 2)].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-display text-xl py-3 border-b border-ivory/[0.07] ${pathname === link.href ? 'text-gold' : 'text-ivory/80'}`}
              >
                {link.label}
              </Link>
            ))}

            <p className="font-body text-[11px] uppercase tracking-[0.25em] text-gold/80 pt-5 pb-1">Explore</p>
            {exploreLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center justify-between font-display text-lg py-3 pl-4 border-b border-ivory/[0.07] ${pathname === l.href ? 'text-gold' : 'text-ivory/80'}`}
              >
                {l.label}
                <span className="flex items-center gap-2 font-body text-[11px] text-ivory/50">
                  <span className={`w-1.5 h-1.5 rounded-full ${dotColor[l.status]}`} />
                  {l.note}
                </span>
              </Link>
            ))}

            <div className="h-5" />
            {mainLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-display text-xl py-3 border-b border-ivory/[0.07] ${pathname === link.href ? 'text-gold' : 'text-ivory/80'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-6 block font-body text-sm font-semibold bg-gold text-wine px-6 py-3.5 rounded-full text-center hover:bg-ivory transition-colors duration-300"
          >
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

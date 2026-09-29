'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Packages', href: '/packages' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const WHATSAPP_HREF =
  'https://wa.me/918567098852?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20your%20packages.';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close the mobile menu on route change — otherwise it stays open over the new page.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled || menuOpen
            ? 'bg-wine/90 backdrop-blur-xl shadow-[0_1px_0_0_rgba(207,160,68,0.25),0_18px_40px_-24px_rgba(92,26,43,0.9)]'
            : 'bg-gradient-to-b from-wine/70 to-transparent'
        }`}
      >
        {/* Gold hairline — only once the bar has condensed */}
        <div
          className={`h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent transition-opacity duration-500 ${
            scrolled ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div
          className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ${
            scrolled ? 'py-3' : 'py-5'
          }`}
        >
          {/* Wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-3 shrink-0"
            onClick={() => setMenuOpen(false)}
          >
            <span className="grid place-items-center w-9 h-9 rounded-full border border-gold/40 bg-wine/40 font-display text-sm font-bold text-gold transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-wine">
              N
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-ivory text-lg font-semibold tracking-tight transition-colors duration-300 group-hover:text-gold">
                Navdeep Resort
              </span>
              <span className="font-body text-ivory/45 text-[10px] tracking-[0.2em] uppercase mt-1">
                GT Road · Mukerian
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`group relative font-body text-[13px] tracking-wide transition-colors duration-300 ${
                    active ? 'text-gold' : 'text-ivory/75 hover:text-ivory'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-400 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[13px] font-semibold bg-gold text-wine px-5 py-2.5 rounded-full hover:bg-ivory hover:shadow-[0_10px_30px_-10px_rgba(207,160,68,0.8)] active:scale-95 transition-all duration-300"
            >
              Ask on WhatsApp
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-9 h-9 grid place-items-center rounded-full border border-ivory/20 hover:border-gold/50 transition-colors duration-300"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
            <span className="flex flex-col gap-[5px]">
              <span
                className={`block h-px w-5 bg-ivory transition-all duration-300 ${
                  menuOpen ? 'translate-y-[3px] rotate-45 bg-gold' : ''
                }`}
              />
              <span
                className={`block h-px w-5 bg-ivory transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-px w-5 bg-ivory transition-all duration-300 ${
                  menuOpen ? '-translate-y-[3px] -rotate-45 bg-gold' : ''
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile Sheet */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-wine/95 backdrop-blur-xl border-t border-gold/15 px-6 pb-8 pt-5">
            <nav className="flex flex-col">
              {navLinks.map((link, i) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`font-display text-xl py-3 border-b border-ivory/[0.07] transition-colors duration-300 ${
                      active ? 'text-gold' : 'text-ivory/80'
                    }`}
                    style={{ transitionDelay: `${i * 40}ms` }}
                  >
                    {link.label}
                  </Link>
                );
              })}
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
    </>
  );
}

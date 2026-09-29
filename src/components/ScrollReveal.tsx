'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const SELECTOR = '.reveal, .reveal-left, .reveal-right, .reveal-scale';

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // The hero sits above the fold on first paint, so reveal it immediately
    // rather than waiting for an intersection callback that may never fire.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    );

    const attach = () => {
      document.querySelectorAll(SELECTOR).forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Already on screen? Show it now, otherwise let the observer watch it.
        if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
          el.classList.add('visible');
        } else {
          observer.observe(el);
        }
      });
    };

    // Re-run on every route change — new pages mount new .reveal nodes.
    attach();
    const id = window.setTimeout(attach, 60);

    return () => {
      window.clearTimeout(id);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}

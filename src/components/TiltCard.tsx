'use client';

import { useEffect, useRef } from 'react';

export default function TiltCard({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const tiltX = ((y - cy) / cy) * -8;
      const tiltY = ((x - cx) / cx) * 8;
      el.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(6px)`;
    };

    const handleMouseLeave = () => {
      el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={ref} className={`card-3d ${className}`} style={{ transition: 'transform 0.35s cubic-bezier(.34,1.56,.64,1)' }}>
      {children}
    </div>
  );
}

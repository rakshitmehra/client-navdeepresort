import { whatsappLink } from '@/lib/whatsapp';
import type { Tier } from '@/lib/venues';

export default function TierCard({ venueId, venueTitle, tier }: { venueId: string; venueTitle: string; tier: Tier }) {
  const anchor = `${venueId}-${tier.id}`;
  const link = whatsappLink(
    `Hello Navdeep Resort! I'd like to enquire about the ${tier.name} package for the ${venueTitle} (big function — wedding / reception). Please share availability and details.`,
    `/packages#${anchor}`
  );

  return (
    <article
      id={anchor}
      className={`reveal scroll-mt-28 flex flex-col rounded-2xl p-7 bg-white border ${
        tier.featured ? 'border-gold shadow-xl shadow-gold/20' : 'border-wine/10'
      }`}
    >
      <div className="flex items-start justify-between gap-3 mb-1">
        <h4 className="font-display text-3xl text-wine font-bold tracking-tight">{tier.name}</h4>
        {tier.featured && (
          <span className="font-body text-[11px] font-semibold bg-gold text-wine px-3 py-1 rounded-full">Most popular</span>
        )}
      </div>
      <p className="font-body text-sm text-gray-600 mb-6">{tier.tagline}</p>

      <dl className="grid grid-cols-4 gap-2 mb-6 text-center">
        {tier.headline.map((h) => (
          <div key={h.label} className="bg-blush rounded-xl py-3">
            <dt className="font-body text-[10px] uppercase tracking-wide text-gray-500">{h.label}</dt>
            <dd className="font-display text-2xl text-wine font-bold leading-tight">{h.value}</dd>
          </div>
        ))}
      </dl>

      <ul className="space-y-2 mb-5">
        {tier.items.map((it) => (
          <li key={it.category} className="flex items-baseline justify-between gap-4 font-body text-sm border-b border-wine/5 pb-2">
            <span className="text-gray-700">{it.category}</span>
            <span className="text-wine font-semibold text-right shrink-0">{it.choose}</span>
          </li>
        ))}
      </ul>

      {tier.extras.length > 0 && (
        <div className="mb-6">
          <p className="font-body text-xs text-gold font-medium mb-2 uppercase tracking-wide">Plus special counters</p>
          <div className="flex flex-wrap gap-2">
            {tier.extras.map((e) => (
              <span key={e} className="font-body text-xs bg-wine/5 text-wine px-3 py-1.5 rounded-full">
                {e}
              </span>
            ))}
          </div>
        </div>
      )}

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto text-center font-body text-sm font-semibold bg-wine text-ivory px-6 py-3.5 rounded-full hover:bg-gold hover:text-wine transition-colors duration-300"
      >
        Inquire on WhatsApp
      </a>
    </article>
  );
}

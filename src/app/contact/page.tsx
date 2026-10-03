import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { whatsappLink } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Navdeep Resort — GT Road, opposite Sugar Mill, Chak Alla Baksh, Mukerian, Punjab 144211. Call or WhatsApp +91 85670 98852 for packages, directions and bookings.',
  keywords: [
    'Navdeep Resort contact',
    'Navdeep Resort phone number',
    'resort address Mukerian',
    'Navdeep Resort Mukerian map',
    'resort near Mukerian contact',
    'GT Road Mukerian resort contact',
  ],
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact | Navdeep Resort, Mukerian',
    description:
      'GT Road, opposite Sugar Mill, Chak Alla Baksh, Mukerian, Punjab 144211. WhatsApp +91 85670 98852.',
    url: 'https://navdeepresort.com/contact',
  },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Resort',
  name: 'Navdeep Resort',
  description:
    'A 5-acre resort on GT Road in Mukerian, Punjab offering weddings, family retreats, corporate retreats, birthdays and day picnics.',
  url: 'https://navdeepresort.com',
  telephone: '+91-85670-98852',
  image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80',
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'GT Road, Opposite Sugar Mill, Chak Alla Baksh',
    addressLocality: 'Mukerian',
    addressRegion: 'Punjab',
    postalCode: '144211',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 31.945,
    longitude: 75.965,
  },
  hasMap: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x391b99b611177e01:0xff3b7f3242a8c0dd',
  sameAs: ['https://www.instagram.com/navdeepresorts'],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday', 'Tuesday', 'Wednesday', 'Thursday',
      'Friday', 'Saturday', 'Sunday',
    ],
    opens: '09:00',
    closes: '19:00',
  },
};

export default function ContactPage() {
  const waGeneral = whatsappLink("Hello Navdeep Resort! I'd like to get in touch.", '/contact');
  const waPackage = whatsappLink("Hello Navdeep Resort! I'd like to enquire about your venues and packages.", '/packages');
  const waDirection = whatsappLink("Hello Navdeep Resort! I'd like directions to reach the resort.", '/contact');

  return (
    <div>
      <JsonLd data={localBusinessJsonLd} />
      {/* Header */}
      <section className="bg-wine pt-36 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-gold text-sm font-medium mb-3">Get in touch</p>
          <h1 className="font-display text-ivory text-5xl md:text-6xl font-semibold leading-tight max-w-2xl">
            We'd love to hear<br />from you
          </h1>
          <p className="font-body text-ivory/60 text-base mt-6 max-w-lg leading-relaxed">
            Whether you're planning an event, curious about our packages, or just want to visit — reach out and we'll respond promptly.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-ivory py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div className="reveal-left">
            <h2 className="font-display text-3xl text-wine font-bold tracking-tight mb-8">Find us</h2>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blush flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5C1A2B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <span className="font-body font-medium text-wine text-sm block mb-1">Address</span>
                  <address className="not-italic font-body text-sm text-gray-600 leading-relaxed">
                    GT Road, Opposite Sugar Mill,<br />
                    Chak Alla Baksh, Mukerian,<br />
                    Punjab 144211
                  </address>
                  <a
                    href="https://maps.google.com/maps/place//data=!4m2!3m1!1s0x391b99b611177e01:0xff3b7f3242a8c0dd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 font-body text-xs text-gold hover:text-gold/80 underline underline-offset-4 transition-colors"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blush flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5C1A2B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 9.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 5.61 5.61l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <span className="font-body font-medium text-wine text-sm block mb-1">Phone</span>
                  <a
                    href="tel:+918567098852"
                    className="font-body text-sm text-gray-600 hover:text-wine transition-colors"
                  >
                    +91 85670 98852
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blush flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                    <path d="M16 2C8.268 2 2 8.268 2 16c0 2.491.665 4.83 1.826 6.845L2 30l7.38-1.797A13.924 13.924 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2z" fill="#25D366"/>
                    <path d="M22.28 19.28c-.32-.16-1.89-.93-2.18-1.04-.29-.1-.5-.16-.71.16-.21.32-.82 1.04-.1 1.27.19.07 1.27.49 2.42 1.49.88.77 1.47 1.73 1.64 2.02.17.29.02.45-.13.6-.13.13-.29.34-.43.51-.14.17-.19.29-.29.48-.1.19-.05.36.02.52.07.16.71 1.71 1.37 2.09 0 0-2.74.52-5.19-1.34a10.8 10.8 0 0 1-2.33-2.39c-.54-.81-.85-1.55-.94-2.02-.1-.47-.01-.72.24-.96.23-.23.5-.59.75-.89.25-.3.33-.51.5-.85.17-.34.08-.64-.02-.89-.1-.25-.71-1.71-1.0-2.34-.27-.6-.55-.52-.76-.53-.19-.01-.41-.01-.63-.01-.22 0-.58.08-.88.4-.3.32-1.15 1.12-1.15 2.74 0 1.62 1.18 3.19 1.34 3.41.16.22 2.32 3.54 5.62 4.97.79.34 1.4.54 1.88.69.79.25 1.51.22 2.08.13.63-.1 1.95-.8 2.22-1.57.28-.77.28-1.43.2-1.57-.08-.14-.3-.22-.63-.38z" fill="white"/>
                  </svg>
                </div>
                <div>
                  <span className="font-body font-medium text-wine text-sm block mb-1">WhatsApp</span>
                  <a
                    href={waGeneral}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-gray-600 hover:text-wine transition-colors"
                  >
                    +91 85670 98852
                  </a>
                  <p className="font-body text-xs text-gray-400 mt-0.5">Typically responds within a few hours</p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blush flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#5C1A2B" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <span className="font-body font-medium text-wine text-sm block mb-1">Instagram</span>
                  <a
                    href="https://www.instagram.com/navdeepresorts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-gray-600 hover:text-wine transition-colors"
                  >
                    @navdeepresorts
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Quick Actions + Map */}
          <div className="space-y-6 reveal-right">
            <h2 className="font-display text-3xl text-wine font-semibold mb-8">Quick enquiries</h2>

            <div className="space-y-4">
              {[
                { label: 'Ask about a package', desc: 'Get details on any of our packages or request a custom one', url: waPackage },
                { label: 'Get directions', desc: 'We\'ll help you find the quickest route from your location', url: waDirection },
                { label: 'General enquiry', desc: 'Any other question — just say hello and we\'ll take it from there', url: waGeneral },
              ].map((action) => (
                <a
                  key={action.label}
                  href={action.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-100 hover:border-wine/30 hover:shadow-sm transition-all duration-200 group"
                >
                  <div>
                    <span className="font-body font-medium text-wine text-sm block mb-1">{action.label}</span>
                    <span className="font-body text-xs text-gray-500">{action.desc}</span>
                  </div>
                  <span className="text-wine/30 group-hover:text-wine transition-colors text-2xl font-light ml-4">→</span>
                </a>
              ))}
            </div>

            {/* Embedded Map */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-gray-100" style={{ height: '320px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.1!2d75.965!3d31.945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b99b611177e01%3A0xff3b7f3242a8c0dd!2sNavdeep%20Resort!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Navdeep Resort location on Google Maps"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="bg-blush py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { title: 'Day Visit Hours', detail: '9:00 AM – 7:00 PM', note: 'All days of the week' },
            { title: 'Overnight Check-in', detail: 'From 2:00 PM', note: 'Checkout by 11:00 AM' },
            { title: 'Event Bookings', detail: 'By appointment', note: 'Contact us to schedule' },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-2xl p-8 reveal-scale hover:shadow-xl hover:shadow-wine/10 hover:-translate-y-1 transition-all duration-300">
              <span className="font-body text-xs text-gold font-medium block mb-2">{item.title}</span>
              <span className="font-display text-2xl text-wine font-semibold block mb-1">{item.detail}</span>
              <span className="font-body text-xs text-gray-500">{item.note}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

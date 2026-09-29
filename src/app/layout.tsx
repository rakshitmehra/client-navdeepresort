import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import WhatsAppFAB from '@/components/WhatsAppFAB';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const BASE_URL = 'https://navdeepresort.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: 'Navdeep Resort — Best Resort in Mukerian, Punjab | GT Road',
    template: '%s | Navdeep Resort',
  },

  description:
    'Navdeep Resort is a 5-acre wedding and family resort on GT Road, opposite Sugar Mill, Chak Alla Baksh, Mukerian, Punjab 144211. Packages for weddings, corporate retreats, birthdays, day picnics and overnight stays. Enquire on WhatsApp: +91 85670 98852.',

  keywords: [
    'Navdeep Resort',
    'resort in Mukerian',
    'Mukerian resort',
    'GT Road resort Punjab',
    'wedding venue Mukerian',
    'banquet hall Mukerian',
    'farmhouse in Mukerian',
    'resort in Hoshiarpur',
    'resort in Dasuya',
    'resort in Jalandhar',
    'best resort in Punjab',
    'corporate retreat Punjab',
    'family resort Punjab',
    'overnight stay Mukerian',
    'day picnic Mukerian',
    'birthday party venue Punjab',
    'marriage garden Mukerian',
    'Navdeep Resorts',
    'Navdeep Mukerian',
    'resort near Mukerian',
    'party lawn Mukerian',
    'pool side resort Punjab',
  ],

  authors: [{ name: 'Navdeep Resort' }],
  creator: 'Navdeep Resort',
  publisher: 'Navdeep Resort',

  applicationName: 'Navdeep Resort',
  category: 'Travel & Hospitality',
  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: BASE_URL,
    siteName: 'Navdeep Resort',
    title: 'Navdeep Resort — Best Resort in Mukerian, Punjab | GT Road',
    description:
      'A 5-acre resort on GT Road, Mukerian. Weddings, family retreats, corporate retreats, birthdays and day picnics. Enquire on WhatsApp: +91 85670 98852.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'Navdeep Resort — grounds on GT Road, Mukerian, Punjab',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Navdeep Resort — Best Resort in Mukerian, Punjab',
    description:
      'A 5-acre resort on GT Road, Mukerian. Weddings, family getaways, corporate retreats. Enquire on WhatsApp: +91 85670 98852.',
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&h=630&q=80',
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  other: {
    'geo.region': 'IN-PB',
    'geo.placename': 'Mukerian, Hoshiarpur, Punjab',
    'geo.position': '31.945;75.965',
    'ICBM': '31.945, 75.965',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB />
        <ScrollReveal />
      </body>
    </html>
  );
}

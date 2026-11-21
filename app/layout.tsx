import type { Metadata } from 'next';
import { Noto_Sans_Bengali, Plus_Jakarta_Sans } from 'next/font/google';
import { COMPANY_INFO, INITIAL_VENTURES } from '@/lib/holysun-data';
import './globals.css';

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ['bengali', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-bengali',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const siteBaseUrl = (process.env.APP_URL || 'https://holysun.com.bd').replace(/\/$/, '');

export const metadata: Metadata = {
  metadataBase: new URL(siteBaseUrl),
  title: {
    default: 'HOLYSUN OPC LIMITED — Together for a Better Tomorrow',
    template: '%s | HOLYSUN OPC LIMITED',
  },
  description:
    'একটি উদ্যোগ, অসংখ্য সম্ভাবনা, সবার জন্য একটি সুন্দর ভবিষ্যৎ। মানুষ, উদ্যোগ, কর্মসংস্থান ও মানবকল্যাণের সমন্বয়ে একটি অন্তর্ভুক্তিমূলক ভবিষ্যৎ গড়ে তোলার প্রত্যয়ে HOLYSUN OPC LIMITED।',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'HOLYSUN OPC LIMITED — Together for a Better Tomorrow',
    description:
      'একটি উদ্যোগ, অসংখ্য সম্ভাবনা, সবার জন্য একটি সুন্দর ভবিষ্যৎ। মানুষ, উদ্যোগ, কর্মসংস্থান ও মানবকল্যাণের সমন্বয়ে একটি অন্তর্ভুক্তিমূলক ভবিষ্যৎ গড়ে তোলার প্রত্যয়ে HOLYSUN OPC LIMITED।',
    url: siteBaseUrl,
    siteName: 'HOLYSUN OPC LIMITED',
    locale: 'bn_BD',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HOLYSUN OPC LIMITED — Together for a Better Tomorrow',
    description:
      'একটি উদ্যোগ, অসংখ্য সম্ভাবনা, সবার জন্য একটি সুন্দর ভবিষ্যৎ। মানুষ, উদ্যোগ, কর্মসংস্থান ও মানবকল্যাণের সমন্বয়ে একটি অন্তর্ভুক্তিমূলক ভবিষ্যৎ গড়ে তোলার প্রত্যয়ে HOLYSUN OPC LIMITED।',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_INFO.name,
    slogan: COMPANY_INFO.tagline,
    description: COMPANY_INFO.brandConceptBn,
    url: siteBaseUrl,
    telephone: '+880-1613-239133',
    founder: {
      '@type': 'Person',
      name: COMPANY_INFO.chairman,
      jobTitle: 'Chairman',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'House 21/A, Road 2, Block A, Aftabnagar',
      addressLocality: 'Dhaka',
      postalCode: '1212',
      addressCountry: 'BD',
    },
    department: INITIAL_VENTURES.map((v) => ({
      '@type': 'Organization',
      name: v.name,
      description: v.shortDescriptionBn,
      url: `${siteBaseUrl}/ventures/${v.slug}`,
    })),
  };

  return (
    <html lang="bn" className={`${notoSansBengali.variable} ${plusJakarta.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="bg-white text-slate-900 antialiased selection:bg-[#FFC94A]/30 selection:text-slate-900"
        style={{ fontFamily: 'var(--font-noto-bengali), var(--font-plus-jakarta), sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}

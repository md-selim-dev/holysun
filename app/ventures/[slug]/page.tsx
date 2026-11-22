import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Phone,
  MapPin,
  Layers,
  Users,
  Compass,
} from 'lucide-react';
import { INITIAL_VENTURES, COMPANY_INFO, GENERATED_ASSETS } from '@/lib/holysun-data';
import { EditorialImage, HolysunEmblem } from '@/components/HolysunMedia';

export function generateStaticParams() {
  return INITIAL_VENTURES.map((venture) => ({
    slug: venture.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const venture = INITIAL_VENTURES.find((v) => v.slug === slug);

  if (!venture) {
    return {
      title: `পরিকল্পিত উদ্যোগ | ${COMPANY_INFO.name}`,
      description:
        'HOLYSUN OPC LIMITED-এর সম্প্রসারণশীল ইকোসিস্টেমের আওতায় একটি পরিকল্পিত নতুন উদ্যোগ।',
    };
  }

  const pageTitle = `${venture.name} — ${venture.tagline} | ${COMPANY_INFO.name}`;
  const pageDescription = `${venture.shortDescriptionBn} (${venture.sectorBn} • ${COMPANY_INFO.name})`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: `/ventures/${venture.slug}`,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `/ventures/${venture.slug}`,
      siteName: COMPANY_INFO.name,
      locale: 'bn_BD',
      type: 'article',
      images: [
        {
          url: venture.imageUrl,
          alt: venture.imageAltBn,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [venture.imageUrl],
    },
  };
}

export default async function VentureDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const currentIndex = INITIAL_VENTURES.findIndex((v) => v.slug === slug);
  const venture =
    currentIndex !== -1
      ? INITIAL_VENTURES[currentIndex]
      : {
          id: slug,
          indexNumber: '14+',
          slug,
          name: slug
            .split('-')
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(' '),
          tagline: 'Planned HOLYSUN Ecosystem Venture',
          sectorBn: 'পরিকল্পিত নতুন খাত',
          filterKey: 'commerce' as const,
          shortDescriptionBn:
            'HOLYSUN OPC LIMITED-এর সম্প্রসারণশীল ইকোসিস্টেমের আওতায় একটি পরিকল্পিত নতুন উদ্যোগ।',
          detailedOverviewBn:
            'HOLYSUN-এর ১৩টি প্রাথমিক চিহ্নিত উদ্যোগ কোনো চূড়ান্ত বা সীমাবদ্ধ তালিকা নয়। মানুষের প্রয়োজন, নতুন সম্ভাবনা ও উদ্যোক্তাদের প্রস্তাবনার ভিত্তিতে ভবিষ্যতে নতুন নতুন খাতে উদ্যোগ সম্প্রসারণের সুযোগ রয়েছে।',
          plannedActivitiesBn: [
            'সম্ভাব্যতা যাচাই ও খাতভিত্তিক কর্মপরিকল্পনা প্রণয়ন',
            'উদ্যোক্তা ও পেশাজীবীদের সমন্বয়ে টেকসই পরিচালনা কাঠামো গঠন',
            'নতুন কর্মসংস্থান ও মানবকল্যাণমূলক সংযোগ তৈরি',
          ],
          ecosystemRoleBn:
            'HOLYSUN-এর বহুমুখী ইকোসিস্টেমের ভবিষ্যৎ সম্প্রসারণ ও নতুন সম্ভাবনার অংশ।',
          participationScopeBn: [
            'উদ্যোক্তা হিসেবে ব্যবসায়িক ধারণা বা প্রস্তাবনা উপস্থাপন',
            'দক্ষ কর্মী বা পরামর্শক হিসেবে যুক্ত হওয়ার সুযোগ',
          ],
          statusLabelBn: 'পরিকল্পিত উদ্যোগ • ভবিষ্যৎ সম্প্রসারণ তালিকা',
          imageUrl: GENERATED_ASSETS.heroEcosystem,
          imageAltBn: 'পরিকল্পিত নতুন উদ্যোগ',
          imageCreditNote: '',
          accentTone: 'sunshine' as const,
        };

  const prevVenture =
    currentIndex > 0
      ? INITIAL_VENTURES[currentIndex - 1]
      : INITIAL_VENTURES[INITIAL_VENTURES.length - 1];
  const nextVenture =
    currentIndex !== -1 && currentIndex < INITIAL_VENTURES.length - 1
      ? INITIAL_VENTURES[currentIndex + 1]
      : INITIAL_VENTURES[0];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:text-white"
      >
        মূল কনটেন্টে যান
      </a>

      {/* Top Bar Contract (Sticky / Fixed at Top) */}
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between gap-8 border-b border-slate-200/80 bg-white/95 px-6 py-3 backdrop-blur-md shadow-2xs">
        <Link
          href="/"
          className="flex items-center gap-2 whitespace-nowrap shrink-0"
          aria-label={COMPANY_INFO.name}
        >
          <HolysunEmblem className="h-10 sm:h-11 w-auto" variant="emblem" />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link
            href="/#about"
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
          >
            আমাদের পরিচিতি
          </Link>
          <Link
            href="/#philosophy"
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
          >
            আমাদের দর্শন
          </Link>
          <Link
            href="/#ventures"
            className="text-slate-900 font-semibold transition-colors whitespace-nowrap shrink-0"
          >
            আমাদের উদ্যোগসমূহ
          </Link>
          <Link
            href="/#membership"
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
          >
            সদস্যপদ
          </Link>
          <Link
            href="/#opportunities"
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
          >
            সম্ভাবনার সুযোগ
          </Link>
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/#contact"
            className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-medium text-white hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0"
          >
            যোগাযোগ করুন
          </Link>
        </div>
      </header>

      {/* Spacer for Fixed Top Header */}
      <div className="h-[69px]" aria-hidden="true" />

      {/* Morning Sunshine Ambient Hero Banner */}
      <section
        className="relative border-b border-slate-200/70 py-12 sm:py-16"
        style={{
          background:
            'radial-gradient(circle at 15% 20%, #FFF4D6 0%, rgba(255, 244, 214, 0.35) 38%, #FFFFFF 75%), linear-gradient(135deg, #FFFFFF 0%, #EAF7FF 100%)',
        }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/#ventures"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>সব উদ্যোগের তালিকায় ফিরে যান</span>
            </Link>

            <div className="flex items-center gap-3 text-xs font-medium text-slate-600">
              <Link
                href={`/ventures/${prevVenture.slug}`}
                className="hover:text-[#0284C7] transition-colors"
              >
                ← পূর্ববর্তী: {prevVenture.name}
              </Link>
              <span aria-hidden="true">·</span>
              <Link
                href={`/ventures/${nextVenture.slug}`}
                className="hover:text-[#0284C7] transition-colors"
              >
                পরবর্তী: {nextVenture.name} →
              </Link>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
                <span className="font-mono font-semibold text-slate-900">
                  উদ্যোগ ক্রম: {venture.indexNumber} / ১৩
                </span>
                <span aria-hidden="true">·</span>
                <span>{venture.sectorBn}</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#0284C7]">{venture.statusLabelBn}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
                {venture.name}
              </h1>

              <p className="text-base sm:text-lg font-semibold text-[#0284C7]">
                {venture.tagline}
              </p>

              <p className="text-base leading-relaxed text-slate-700 max-w-2xl">
                {venture.detailedOverviewBn}
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  href="/#contact"
                  className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0"
                >
                  যোগাযোগের তথ্য দেখুন
                </Link>
                <Link
                  href="/#opportunities"
                  className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800 hover:bg-slate-50 transition-colors whitespace-nowrap shrink-0"
                >
                  উদ্যোক্তা ও কর্মী হওয়ার সুযোগ জানুন
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <EditorialImage
                  src={venture.imageUrl}
                  alt={venture.imageAltBn}
                  ventureSlug={venture.slug}
                  aspectClass="aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details Content */}
      <main id="main-content" className="mx-auto max-w-6xl px-6 py-14 space-y-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-2.5 text-base font-bold text-slate-900">
              <Layers className="h-5 w-5 text-[#0284C7]" />
              <h2>পরিকল্পিত কার্যক্রম ও ভবিষ্যৎ রূপরেখা</h2>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              {venture.name}-এর অধীনে নিচের মূল কার্যক্রমগুলো পর্যায়ক্রমে পরিকল্পনা ও বাস্তবায়নের লক্ষ্য নির্ধারণ করা হয়েছে:
            </p>
            <ul className="mt-5 space-y-3.5">
              {venture.plannedActivitiesBn.map((activity, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm sm:text-base leading-relaxed text-slate-700"
                >
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#F59E0B]" />
                  <span>{activity}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-[#FFF4D6]/40 p-6">
              <div className="flex items-center gap-2 text-base font-bold text-slate-900">
                <Compass className="h-5 w-5 text-amber-600" />
                <h2>ইকোসিস্টেমের সাথে সংযোগ</h2>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-700">
                {venture.ecosystemRoleBn}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#EAF7FF]/50 p-6">
              <div className="flex items-center gap-2 text-base font-bold text-slate-900">
                <Users className="h-5 w-5 text-[#0284C7]" />
                <h2>কীভাবে অংশগ্রহণ করতে পারবেন?</h2>
              </div>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-700">
                {venture.participationScopeBn.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Direct Corporate Contact Strip */}
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-[#FFF4D6]/50 via-white to-[#EAF7FF]/50 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <p className="text-xs font-semibold text-[#0284C7]">যোগাযোগের তথ্য (Contact Information)</p>
            <h3 className="text-lg font-bold text-slate-900">
              {venture.name} বিষয়ে বিস্তারিত জানতে যোগাযোগ করুন
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              {COMPANY_INFO.address} · ফোন: <span className="font-mono font-semibold text-slate-900">{COMPANY_INFO.phone}</span>
            </p>
          </div>
          <a
            href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-xs sm:text-sm font-medium text-white hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0"
          >
            <Phone className="h-4 w-4 text-[#FFC94A]" />
            <span>কল করুন: {COMPANY_INFO.phone}</span>
          </a>
        </div>

        {/* Accuracy Disclosure Box */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h3 className="text-sm font-bold text-slate-900">
            গুরুত্বপূর্ণ তথ্য ও স্বচ্ছতা নীতিমালা
          </h3>
          <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-600">
            HOLYSUN OPC LIMITED-এর অধীনে চিহ্নিত উদ্যোগসমূহ বর্তমানে পরিকল্পিত ও পর্যায়ক্রমিক উন্নয়ন প্রক্রিয়ায় রয়েছে। অনুমোদিত নীতিমালা ও বাস্তবায়ন ধাপ অনুযায়ী প্রতিটি উদ্যোগের আনুষ্ঠানিক কার্যক্রম ঘোষণা করা হবে।
          </p>
        </div>

        {/* Complete 13 Ventures Directory for Seamless Navigation Across All 13 Pages */}
        <section className="space-y-6 pt-6 border-t border-slate-200">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium text-[#0284C7]">HOLYSUN Ecosystem Directory</p>
              <h2 className="mt-1 text-2xl font-bold text-slate-900">
                সকল ১৩টি পরিকল্পিত উদ্যোগসমূহ (All 13 Venture Pages)
              </h2>
            </div>
            <Link
              href="/#ventures"
              className="text-xs font-semibold text-slate-700 hover:text-slate-900 underline underline-offset-4"
            >
              হোমপেজ গ্রিডে ফিরে যান
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INITIAL_VENTURES.map((item) => {
              const isCurrent = item.slug === venture.slug;
              return (
                <Link
                  key={item.id}
                  href={`/ventures/${item.slug}`}
                  className={`group flex flex-col justify-between rounded-xl border p-4 transition-colors ${
                    isCurrent
                      ? 'border-[#0284C7] bg-[#EAF7FF]/40'
                      : 'border-slate-200 bg-white hover:border-[#39A9E8]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="font-mono font-bold text-slate-900">
                        {item.indexNumber}.
                      </span>
                      <span>{item.sectorBn}</span>
                    </div>
                    <h3 className="mt-1.5 text-base font-bold text-slate-900 group-hover:text-[#0284C7] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs font-medium text-[#0284C7]">{item.tagline}</p>
                  </div>
                  <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2.5 text-xs font-semibold">
                    <span className={isCurrent ? 'text-[#0284C7]' : 'text-slate-700 group-hover:text-[#0284C7]'}>
                      {isCurrent ? 'বর্তমান পাতা' : 'বিস্তারিত পাতা দেখুন'}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-[#0284C7]" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      {/* Quiet Corporate Dark Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-10 text-slate-300">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center overflow-hidden rounded-2xl border border-slate-800 bg-[#05070B] shadow-md"
              aria-label={COMPANY_INFO.name}
            >
              <HolysunEmblem className="h-12 sm:h-14 w-auto" variant="obsidian" />
            </Link>
            <div className="space-y-0.5">
              <p className="text-sm font-bold text-white">{COMPANY_INFO.name}</p>
              <p className="text-xs text-slate-400">{COMPANY_INFO.tagline}</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-[#39A9E8]" />
              {COMPANY_INFO.address}
            </span>
            <span aria-hidden="true">·</span>
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center gap-1.5 font-mono tabular-nums text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-[#FFC94A]" />
              {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

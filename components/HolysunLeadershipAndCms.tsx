'use client';

import React from 'react';
import Image from 'next/image';
import { Network, Layers } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/holysun-data';

export function ChairmanMessageSection() {
  const writtenSummaryBn =
    'HOLYSUN OPC LIMITED-এর মূল ভাবনা হলো বিভিন্ন শ্রেণি-পেশার মানুষকে একটি মানবিক ও সমন্বিত প্ল্যাটফর্মে একত্রিত করা। আমাদের লক্ষ্য নতুন উদ্যোক্তা তৈরি, যোগ্যতা ও দক্ষতা অনুযায়ী কর্মসংস্থানের সুযোগ সৃষ্টি এবং কৃষি, স্বাস্থ্য, শিক্ষা, প্রযুক্তি ও বাণিজ্যসহ বিভিন্ন খাতে টেকসই উন্নয়নে অবদান রাখা। ব্যবসার পাশাপাশি কারিগরি দক্ষতা উন্নয়ন ও মানবকল্যাণমূলক উদ্যোগের মাধ্যমে আগামী প্রজন্মের জন্য একটি সুন্দর ও সম্ভাবনাময় ভবিষ্যৎ গড়ে তোলাই এই উদ্যোগের মূল প্রত্যয়।';

  const chairmanCoreThemes = [
    'মানুষকে একত্রিত করার স্বপ্ন ও অন্তর্ভুক্তিমূলক প্ল্যাটফর্ম',
    'নতুন উদ্যোক্তা তৈরির প্রত্যয় ও ব্যবসায়িক সহযোগিতা',
    'দক্ষতা ও অভিজ্ঞতা অনুযায়ী কর্মসংস্থানের সুযোগ সৃষ্টি',
    'কৃষি, শিক্ষা, স্বাস্থ্য, প্রযুক্তি ও বাণিজ্যে বহুমুখী অবদান',
    'শিক্ষা, কারিগরি দক্ষতা ও মানবকল্যাণে সর্বোচ্চ গুরুত্ব',
    'আগামী প্রজন্মের জন্য সম্ভাবনাময় ও নিরাপদ ভবিষ্যৎ তৈরি',
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-[#FFF4D6]/45 via-white to-[#EAF7FF]/45 p-6 sm:p-10">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
        {/* Left: Chairman Official Profile Card */}
        <div className="lg:col-span-5 space-y-4">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-5">
            <div className="space-y-4">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-[#FFC94A]/50 bg-slate-100">
                <Image
                  src="/assets/aistudio/Chairman-Abdul-Mannan-Milon_56162e2b.png"
                  alt={`${COMPANY_INFO.chairman} — ${COMPANY_INFO.chairmanRole}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  referrerPolicy="no-referrer"
                  className="object-cover object-top"
                />
              </div>

              <div className="pt-1">
                <p className="text-base font-bold text-slate-900">
                  {COMPANY_INFO.chairman}
                </p>
                <p className="text-xs font-semibold text-[#0284C7]">
                  {COMPANY_INFO.chairmanRole}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Written Message & Core Themes */}
        <div className="lg:col-span-7 space-y-5">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <span className="font-semibold text-[#0284C7]">চেয়ারম্যানের বক্তব্য</span>
            <span aria-hidden="true">·</span>
            <span>Chairman’s Vision & Perspective</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            একটি সুন্দর আগামীর স্বপ্ন, সবাইকে সঙ্গে নিয়ে।
          </h2>

          <div className="rounded-xl border border-slate-200/80 bg-white/90 p-5">
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              {writtenSummaryBn}
            </p>
          </div>

          {/* 6 Core Message Points */}
          <div>
            <p className="text-xs font-semibold text-slate-900">
              চেয়ারম্যানের বার্তার মূল প্রতিপাদ্য বিষয়সমূহ:
            </p>
            <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {chairmanCoreThemes.map((theme, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-xs sm:text-sm font-medium text-slate-800"
                >
                  <span className="font-mono text-xs font-bold text-[#0284C7] mr-2">
                    0{idx + 1}.
                  </span>
                  {theme}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ExecutiveBodyIllustration() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 space-y-8">
      <div className="max-w-3xl space-y-3">
        <div className="flex items-center gap-2 text-xs text-slate-600">
          <span className="font-semibold text-[#0284C7]">Executive Body & Management</span>
          <span aria-hidden="true">·</span>
          <span>পরিকল্পিত সাংগঠনিক কাঠামো</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
          দায়িত্বশীল নেতৃত্ব, সম্মিলিত অগ্রযাত্রা।
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-700">
          HOLYSUN-এর সামগ্রিক কার্যক্রম পরিচালনা, সমন্বয় এবং উন্নয়নের জন্য সর্বোচ্চ{' '}
          <strong className="font-semibold text-slate-900">১০৫ জনের একটি Executive Body</strong>{' '}
          গঠনের পরিকল্পনা রয়েছে। এই পরিকল্পিত সাংগঠনিক কাঠামো প্রতিষ্ঠানের বহুমুখী উদ্যোগগুলোর মধ্যে সুশৃঙ্খল সমন্বয় ও জবাবদিহিতা নিশ্চিত করবে।
        </p>
      </div>

      {/* Elegant Organizational Illustration (No fabricated ranks/names) */}
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-[#FFF4D6]/35 via-white to-[#EAF7FF]/40 p-6 sm:p-8">
        <div className="flex flex-col items-center text-center">
          {/* Top Node */}
          <div className="rounded-xl border border-[#FFC94A] bg-white px-6 py-4 shadow-xs max-w-md w-full">
            <p className="text-xs font-semibold text-amber-700">কেন্দ্রীয় অভিভাবকত্ব ও দিকনির্দেশনা</p>
            <p className="mt-1 text-base font-bold text-slate-900">
              HOLYSUN OPC LIMITED — কেন্দ্রীয় পরিচালনা পর্ষদ
            </p>
            <p className="mt-0.5 text-xs text-slate-600">
              Chairman: {COMPANY_INFO.chairman}
            </p>
          </div>

          {/* Connector Line */}
          <div className="h-8 w-px bg-slate-300" />

          {/* Middle Node: Planned 105-Member Executive Body */}
          <div className="rounded-2xl border border-[#39A9E8]/60 bg-white px-6 py-5 shadow-xs max-w-2xl w-full">
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#0284C7]">
              <Network className="h-4 w-4" />
              <span>পরিকল্পিত নির্বাহী পরিষদ (Planned Executive Body)</span>
            </div>
            <p className="mt-1 text-xl font-bold text-slate-900">
              সর্বোচ্চ <span className="font-mono tabular-nums text-[#0284C7]">১০৫</span> সদস্যবিশিষ্ট Executive Body
            </p>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
              সামগ্রিক কার্যক্রম পরিচালনা, নীতিগত সমন্বয় ও Venture-সমূহের তদারকির জন্য পরিকল্পিত নির্বাহী কাঠামো।
            </p>
          </div>

          {/* Connector Line */}
          <div className="h-8 w-px bg-slate-300" />

          {/* Bottom Cluster: Ecosystem Functional Coordination */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 w-full max-w-4xl">
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-left">
              <p className="text-xs font-mono font-semibold text-[#0284C7]">সমন্বয় ক্ষেত্র ০১</p>
              <h3 className="mt-1 text-sm font-bold text-slate-900">
                ব্যবসায়িক Venture ও উদ্যোক্তা সমন্বয়
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                চিহ্নিত ১৩টি ও ভবিষ্যতের নতুন Venture-সমূহের পরিকল্পনা, মূল্যায়ন এবং কার্যক্রম সমন্বয়।
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 text-left">
              <p className="text-xs font-mono font-semibold text-amber-600">সমন্বয় ক্ষেত্র ০২</p>
              <h3 className="mt-1 text-sm font-bold text-slate-900">
                মানবসম্পদ, শিক্ষা ও দক্ষতা উন্নয়ন
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                উদ্যোক্তা ও কর্মীদের প্রশিক্ষণ, কর্মসংস্থান এবং পাঁচটি পরিকল্পিত শ্রেণিবিন্যাস ব্যবস্থাপনা।
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 text-left">
              <p className="text-xs font-mono font-semibold text-emerald-700">সমন্বয় ক্ষেত্র ০৩</p>
              <h3 className="mt-1 text-sm font-bold text-slate-900">
                সদস্যসেবা ও মানবকল্যাণ কার্যক্রম
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                Lifetime Membership নীতিমালা বাস্তবায়ন এবং Trust & Welfare Foundation-এর মানবিক উদ্যোগ পরিচালনা।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FiveTierClassificationSection() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-[#FFF4D6]/40 via-white to-[#EAF7FF]/40 p-6 sm:p-8 space-y-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-center">
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <Layers className="h-4 w-4 text-[#0284C7]" />
            <span className="font-semibold text-slate-900">পাঁচটি পরিকল্পিত শ্রেণিবিন্যাস কাঠামো</span>
            <span aria-hidden="true">·</span>
            <span>মানবিক মর্যাদা ও দক্ষতার সমন্বয়</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            যোগ্যতা, অভিজ্ঞতা ও দক্ষতার ভিত্তিতে ৫টি শ্রেণিতে অন্তর্ভুক্তির পরিকল্পনা
          </h3>

          <p className="text-sm leading-relaxed text-slate-700">
            উদ্যোক্তা ও কর্মীদের শিক্ষাগত যোগ্যতা, বাস্তব অভিজ্ঞতা, কারিগরি দক্ষতা এবং বিশেষজ্ঞতার ভিত্তিতে পাঁচটি শ্রেণিতে অন্তর্ভুক্ত করার একটি সুশৃঙ্খল পরিকল্পনা রয়েছে—যাতে প্রত্যেকে নিজের সামর্থ্য অনুযায়ী সঠিক ভূমিকা ও সহযোগিতা পেতে পারেন।
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-xl border border-[#FFC94A]/70 bg-white p-5 space-y-2.5">
            <p className="text-xs sm:text-sm font-semibold text-slate-900">
              মানবিক মূল্যায়নের মূলনীতি:
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              “মানুষের শিক্ষাগত যোগ্যতা কম বা বেশি হওয়া তার মানবিক মূল্য নির্ধারণ করে না।” — HOLYSUN-এ প্রতিটি মানুষের শ্রম, সততা, বাস্তব অভিজ্ঞতা ও মানবিক মর্যাদাকে সমান সম্মানের সাথে মূল্যায়ন করা হয়।
            </p>
            <p className="pt-1 text-xs text-slate-500">
              প্রতিষ্ঠানের অনুমোদিত নীতিমালা অনুযায়ী পাঁচটি শ্রেণির আনুষ্ঠানিক কাঠামো ও মানদণ্ড কার্যকর হবে।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

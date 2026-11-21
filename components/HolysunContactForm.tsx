'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, MapPin, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, VentureItem } from '@/lib/holysun-data';

interface HolysunContactFormProps {
  ventures: VentureItem[];
  preselectedVentureSlug?: string;
  preselectedInquiryType?: string;
}

export function HolysunContactForm({
  ventures,
  preselectedVentureSlug = '',
  preselectedInquiryType = 'ব্যবসায়িক উদ্যোগ ও প্রস্তাবনা (Business Proposal)',
}: HolysunContactFormProps) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState(preselectedInquiryType);
  const [ventureSlug, setVentureSlug] = useState(preselectedVentureSlug);
  const [participationRole, setParticipationRole] = useState('উদ্যোক্তা হিসেবে');
  const [message, setMessage] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState(''); // Honeypot

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submissionResult, setSubmissionResult] = useState<{
    referenceId: string;
    messageBn: string;
    summary: {
      fullName: string;
      phone: string;
      inquiryType: string;
      ventureSlug: string;
      participationRole: string;
    };
  } | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          phone,
          email,
          inquiryType,
          ventureSlug,
          participationRole,
          message,
          websiteUrl,
        }),
      });

      const data = await response.json();
      if (!response.ok || !data.ok) {
        setErrorMessage(
          data.errorBn || 'ফর্ম জমা দেওয়ার সময় একটি সমস্যা হয়েছে। অনুগ্রহ করে তথ্য যাচাই করুন।'
        );
      } else {
        setSubmissionResult({
          referenceId: data.referenceId,
          messageBn: data.messageBn,
          summary: data.summary,
        });
        setFullName('');
        setPhone('');
        setEmail('');
        setMessage('');
      }
    } catch {
      setErrorMessage('নেটওয়ার্ক সংযোগে ত্রুটি হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।');
    } finally {
      setIsSubmitting(false);
    }
  }

  const inquiryCategories = [
    'ব্যবসায়িক উদ্যোগ ও প্রস্তাবনা (Business Proposal)',
    'উদ্যোক্তা ও কর্মী হিসেবে যুক্ত হওয়ার আগ্রহ',
    'HOLYSUN Lifetime Membership তথ্য অনুসন্ধান',
    'শিক্ষা ও কারিগরি প্রশিক্ষণ বিষয়ে জিজ্ঞাসা',
    'সাধারণ যোগাযোগ ও কর্পোরেট তথ্য',
  ];

  const roleOptions = [
    'উদ্যোক্তা হিসেবে',
    'কর্মী হিসেবে',
    'উদ্যোক্তা ও কর্মী উভয় হিসেবে',
    'আজীবন সদস্যপদ আগ্রহী',
    'সাধারণ তথ্য অনুসন্ধানকারী',
  ];

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
      {/* Left column: Official Corporate Address & Direct Contact */}
      <div className="lg:col-span-5 space-y-6">
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-[#FFF4D6]/60 via-white to-[#EAF7FF]/60 p-6 sm:p-8 space-y-6">
          <div>
            <p className="text-xs font-semibold text-[#0284C7]">প্রধান কার্যালয় ও যোগাযোগ</p>
            <h3 className="mt-1 text-xl font-bold text-slate-900">{COMPANY_INFO.name}</h3>
            <p className="text-xs font-medium text-slate-600">{COMPANY_INFO.tagline}</p>
          </div>

          <div className="space-y-4 border-t border-slate-200/80 pt-5">
            <div className="flex items-start gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-slate-200 text-[#0284C7]">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-900">যোগাযোগের ঠিকানা (Official Address)</p>
                <p className="mt-0.5 text-sm font-medium text-slate-800">{COMPANY_INFO.address}</p>
                <p className="mt-0.5 text-xs text-slate-600">{COMPANY_INFO.addressBn}</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-slate-200 text-amber-600">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-900">প্রধান যোগাযোগ নম্বর</p>
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                  className="mt-0.5 inline-block font-mono text-base font-bold tabular-nums text-slate-900 hover:text-[#0284C7] transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
                <p className="text-xs text-slate-600">
                  দাপ্তরিক সময়ে সরাসরি ফোনে অথবা পাশের ফর্মের মাধ্যমে যোগাযোগ করতে পারেন।
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200/80 bg-white/90 p-4 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-900">
              <ShieldCheck className="h-4 w-4 text-[#0284C7]" />
              <span>নিরাপদ তথ্য ও প্রস্তাবনা সুরক্ষা</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-600">
              আপনার প্রেরিত ব্যবসায়িক ধারণা, ব্যক্তিগত তথ্য এবং যোগাযোগের বিবরণ সম্পূর্ণ গোপনীয়তার সাথে HOLYSUN ম্যানেজমেন্ট কর্তৃক যাচাই ও সংরক্ষণ করা হয়।
            </p>
          </div>
        </div>
      </div>

      {/* Right column: Interactive Inquiry & Business Proposal Form */}
      <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
        {submissionResult ? (
          <div className="space-y-5 py-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-mono font-semibold text-emerald-700">
                রেফারেন্স আইডি: {submissionResult.referenceId}
              </p>
              <h3 className="mt-1 text-xl font-bold text-slate-900">
                আপনার বার্তা সফলভাবে গৃহীত হয়েছে
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                {submissionResult.messageBn}
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs space-y-1.5 text-slate-700">
              <p>
                <strong className="text-slate-900">নাম:</strong> {submissionResult.summary.fullName}
              </p>
              <p>
                <strong className="text-slate-900">ফোন নম্বর:</strong>{' '}
                <span className="font-mono tabular-nums">{submissionResult.summary.phone}</span>
              </p>
              <p>
                <strong className="text-slate-900">বিষয়:</strong>{' '}
                {submissionResult.summary.inquiryType}
              </p>
              <p>
                <strong className="text-slate-900">সংশ্লিষ্ট উদ্যোগ:</strong>{' '}
                {submissionResult.summary.ventureSlug}
              </p>
              <p>
                <strong className="text-slate-900">অংশগ্রহণের ধরন:</strong>{' '}
                {submissionResult.summary.participationRole}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setSubmissionResult(null)}
              className="rounded-lg bg-slate-900 px-5 py-2.5 text-xs font-medium text-white hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0"
            >
              নতুন আরেকটি বার্তা বা প্রস্তাবনা পাঠান
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Inquiry & Business Proposal Form
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                আপনার ব্যবসায়িক ধারণা, উদ্যোক্তা বা কর্মী হিসেবে যুক্ত হওয়ার আগ্রহ কিংবা যেকোনো জিজ্ঞাসা নিচের ফর্মের মাধ্যমে পাঠাতে পারেন।
              </p>
            </div>

            {/* Honeypot field hidden from screen readers and human users */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website-url-hp">Website</label>
              <input
                id="website-url-hp"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
              />
            </div>

            {errorMessage && (
              <div
                role="alert"
                className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 p-3.5 text-xs font-medium text-red-800"
              >
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="inquiry-full-name"
                  className="block text-xs font-semibold text-slate-800"
                >
                  আপনার নাম (Full Name) *
                </label>
                <input
                  id="inquiry-full-name"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="যেমন: মো. রাশেদুল ইসলাম"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#0284C7] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="inquiry-phone"
                  className="block text-xs font-semibold text-slate-800"
                >
                  মোবাইল / ফোন নম্বর (Phone) *
                </label>
                <input
                  id="inquiry-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="যেমন: 017XXXXXXXX"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-mono tabular-nums text-slate-900 focus:border-[#0284C7] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="inquiry-email"
                  className="block text-xs font-semibold text-slate-800"
                >
                  ইমেইল ঠিকানা (ঐচ্ছিক)
                </label>
                <input
                  id="inquiry-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#0284C7] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="inquiry-category"
                  className="block text-xs font-semibold text-slate-800"
                >
                  যোগাযোগের বিষয় (Inquiry Type)
                </label>
                <select
                  id="inquiry-category"
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#0284C7] focus:outline-none"
                >
                  {inquiryCategories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="inquiry-venture"
                  className="block text-xs font-semibold text-slate-800"
                >
                  সংশ্লিষ্ট উদ্যোগ (Target Venture)
                </label>
                <select
                  id="inquiry-venture"
                  value={ventureSlug}
                  onChange={(e) => setVentureSlug(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#0284C7] focus:outline-none"
                >
                  <option value="">সামগ্রিক HOLYSUN ইকোসিস্টেম / নতুন প্রস্তাবিত খাত</option>
                  {ventures.map((v) => (
                    <option key={v.id} value={v.name}>
                      {v.indexNumber}. {v.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="inquiry-role"
                  className="block text-xs font-semibold text-slate-800"
                >
                  সম্ভাব্য অংশগ্রহণের ভূমিকা
                </label>
                <select
                  id="inquiry-role"
                  value={participationRole}
                  onChange={(e) => setParticipationRole(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#0284C7] focus:outline-none"
                >
                  {roleOptions.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="inquiry-message"
                className="block text-xs font-semibold text-slate-800"
              >
                আপনার প্রস্তাবনা, দক্ষতা বা বার্তার বিবরণ *
              </label>
              <textarea
                id="inquiry-message"
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="আপনার ব্যবসায়িক ধারণা, অভিজ্ঞতা, আগ্রহ বা প্রশ্নের বিস্তারিত এখানে লিখুন..."
                className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#0284C7] focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
              <p className="text-[11px] text-slate-500">
                * চিহ্নিত ঘরগুলো পূরণ করা আবশ্যক। কোনো পেমেন্ট বা ফি প্রযোজ্য নয়।
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 text-xs sm:text-sm font-medium text-white hover:bg-slate-800 disabled:opacity-60 transition-colors whitespace-nowrap shrink-0"
              >
                <Send className="h-4 w-4" />
                <span>{isSubmitting ? 'পাঠানো হচ্ছে...' : 'প্রস্তাবনা ও বার্তা পাঠান'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

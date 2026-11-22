'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowUpRight, CheckCircle2, Layers, Users, Compass } from 'lucide-react';
import { VentureItem } from '@/lib/holysun-data';
import { EditorialImage } from './HolysunMedia';

interface VentureDetailModalProps {
  venture: VentureItem | null;
  onClose: () => void;
  onInquireVenture: (venture: VentureItem) => void;
}

export function VentureDetailModal({
  venture,
  onClose,
  onInquireVenture,
}: VentureDetailModalProps) {
  useEffect(() => {
    if (!venture) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [venture, onClose]);

  if (!venture) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 p-4 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="venture-modal-title"
      onClick={onClose}
    >
      <div
        className="relative my-8 w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-[#FFF4D6]/60 via-white to-[#EAF7FF]/60 px-6 py-4">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <span className="font-mono font-semibold text-slate-900">
              {venture.indexNumber}.
            </span>
            <span aria-hidden="true">·</span>
            <span>{venture.sectorBn}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#0284C7]">{venture.statusLabelBn}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="বন্ধ করুন"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Content body */}
        <div className="max-h-[80vh] overflow-y-auto p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12 items-start">
            <div className="md:col-span-5 overflow-hidden rounded-xl border border-slate-200">
              <EditorialImage
                src={venture.imageUrl}
                alt={venture.imageAltBn}
                ventureSlug={venture.slug}
                aspectClass="aspect-[4/3]"
              />
            </div>

            <div className="md:col-span-7 space-y-3">
              <h2
                id="venture-modal-title"
                className="text-2xl font-bold tracking-tight text-slate-900"
              >
                {venture.indexNumber}. {venture.name}
              </h2>
              <p className="text-sm font-semibold text-[#0284C7]">{venture.tagline}</p>
              <p className="text-sm leading-relaxed text-slate-700">
                {venture.detailedOverviewBn}
              </p>
            </div>
          </div>

          {/* Planned Activities */}
          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <Layers className="h-4 w-4 text-[#0284C7]" />
              <h3>পরিকল্পিত কার্যক্রম ও উদ্দেশ্যসমূহ</h3>
            </div>
            <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {venture.plannedActivitiesBn.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#F59E0B]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecosystem Role & Participation */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-[#FFF4D6]/35 p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <Compass className="h-4 w-4 text-amber-600" />
                <h3>HOLYSUN ইকোসিস্টেমে ভূমিকা</h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                {venture.ecosystemRoleBn}
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-[#EAF7FF]/45 p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <Users className="h-4 w-4 text-[#0284C7]" />
                <h3>সম্ভাব্য অংশগ্রহণের সুযোগ</h3>
              </div>
              <ul className="mt-2 space-y-1.5 text-sm text-slate-700">
                {venture.participationScopeBn.map((role, idx) => (
                  <li key={idx} className="leading-relaxed">
                    • {role}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Accuracy & Transparency Notice */}
          <div className="rounded-xl border border-slate-200 bg-white p-4 text-xs leading-relaxed text-slate-600">
            <strong className="font-semibold text-slate-800">তথ্যগত স্বচ্ছতা নোট:</strong> এই উদ্যোগটি বর্তমানে HOLYSUN OPC LIMITED-এর পরিকল্পিত ইকোসিস্টেমের অংশ হিসেবে উপস্থাপিত। পর্যায়ক্রমে অনুমোদিত কর্মপরিকল্পনা অনুযায়ী কার্যক্রম বাস্তবায়িত হবে।
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 bg-slate-50 px-6 py-4">
          <Link
            href={`/ventures/${venture.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0284C7] hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
          >
            <span>পৃথক Venture Details Page খুলুন</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors whitespace-nowrap shrink-0"
            >
              বন্ধ করুন
            </button>
            <button
              type="button"
              onClick={() => {
                onInquireVenture(venture);
                onClose();
              }}
              className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-medium text-white hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0"
            >
              এই উদ্যোগে যুক্ত হতে প্রস্তাবনা পাঠান
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

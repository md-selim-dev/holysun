'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  HeartHandshake,
  GraduationCap,
  Briefcase,
  ShieldCheck,
  Phone,
  MapPin,
  Sparkles,
} from 'lucide-react';
import {
  COMPANY_INFO,
  CORE_PHILOSOPHIES,
  INITIAL_VENTURES,
  PLANNED_MEMBERSHIP_BENEFITS,
  PARTICIPATION_ROLES,
  EDUCATION_SKILL_PILLARS,
  WELFARE_ACTIVITIES,
  GENERATED_ASSETS,
  VentureItem,
} from '@/lib/holysun-data';
import {
  HolysunEmblem,
  EditorialImage,
} from './HolysunMedia';
import { VentureDetailModal } from './VentureDetailModal';
import { HolysunContactForm } from './HolysunContactForm';
import {
  ChairmanMessageSection,
  ExecutiveBodyIllustration,
  FiveTierClassificationSection,
} from './HolysunLeadershipAndCms';

type ActiveSubpage =
  | 'home'
  | 'about'
  | 'philosophy'
  | 'ventures'
  | 'membership'
  | 'opportunities'
  | 'welfare'
  | 'contact';

export function HolysunCorporatePortal() {
  const ventures = INITIAL_VENTURES;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedVenture, setSelectedVenture] = useState<VentureItem | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubpage, setActiveSubpage] = useState<ActiveSubpage>('home');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(
    null
  );

  // Pre-selected inquiry form state when user clicks "এই উদ্যোগে যুক্ত হতে প্রস্তাবনা পাঠান"
  const [preselectedVentureName, setPreselectedVentureName] = useState<string>('');
  const [preselectedInquiryType, setPreselectedInquiryType] = useState<string>(
    'ব্যবসায়িক উদ্যোগ ও প্রস্তাবনা (Business Proposal)'
  );

  // Subtle desktop cursor sunshine glow
  const [cursorPos, setCursorPos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth >= 1024) {
        setCursorPos({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLegalModalType(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredVentures =
    selectedCategory === 'all'
      ? ventures
      : ventures.filter((v) => v.filterKey === selectedCategory);

  function navigateToSection(subpage: ActiveSubpage, elementId?: string) {
    setActiveSubpage(subpage);
    setMobileMenuOpen(false);
    if (subpage === 'home' && elementId) {
      setTimeout(() => {
        const el = document.getElementById(elementId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function handleInquireForVenture(venture: VentureItem) {
    setPreselectedVentureName(venture.name);
    setPreselectedInquiryType('ব্যবসায়িক উদ্যোগ ও প্রস্তাবনা (Business Proposal)');
    setActiveSubpage('home');
    setTimeout(() => {
      const contactEl = document.getElementById('contact');
      if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
    }, 80);
  }

  const filterButtons = [
    { key: 'all', label: `সব উদ্যোগ (${ventures.length})` },
    { key: 'commerce', label: 'বাণিজ্য ও রিটেইল' },
    { key: 'agro', label: 'কৃষি ও শিল্প' },
    { key: 'service', label: 'সেবা ও আবাসন' },
    { key: 'education', label: 'শিক্ষা ও প্রশিক্ষণ' },
    { key: 'tech', label: 'প্রযুক্তি ও মিডিয়া' },
    { key: 'social', label: 'স্বাস্থ্য ও মানবকল্যাণ' },
  ];

  const showSection = (sectionKey: ActiveSubpage) =>
    activeSubpage === 'home' || activeSubpage === sectionKey;

  return (
    <div className="relative min-h-screen bg-white text-slate-900">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:text-white"
      >
        মূল কনটেন্টে যান
      </a>

      {/* Subtle Cursor-Following Morning Sunshine Effect (Desktop Only) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 hidden lg:block transition-opacity duration-300"
        style={{
          background: `radial-gradient(550px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(255, 201, 74, 0.08), rgba(57, 169, 232, 0.03) 45%, transparent 80%)`,
        }}
      />

      {/* 1-Row 3-Zone Top Bar Contract (Sticky / Fixed at Top) */}
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between gap-8 border-b border-slate-200/80 bg-white/95 px-6 py-3 backdrop-blur-md shadow-2xs">
        {/* Zone 1: Official Brand Logo */}
        <button
          type="button"
          onClick={() => navigateToSection('home')}
          className="flex items-center gap-2.5 text-left whitespace-nowrap shrink-0"
          aria-label={COMPANY_INFO.name}
        >
          <HolysunEmblem className="h-10 sm:h-11 w-auto" variant="emblem" />
        </button>

        {/* Zone 2: 5 concise single-line text navigation links */}
        <nav
          aria-label="প্রধান নেভিগেশন"
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600"
        >
          <button
            type="button"
            onClick={() => navigateToSection('about')}
            className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${
              activeSubpage === 'about'
                ? 'text-slate-900 font-semibold underline decoration-[#FFC94A] decoration-2 underline-offset-8'
                : ''
            }`}
          >
            আমাদের পরিচিতি
          </button>
          <button
            type="button"
            onClick={() => navigateToSection('philosophy')}
            className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${
              activeSubpage === 'philosophy'
                ? 'text-slate-900 font-semibold underline decoration-[#FFC94A] decoration-2 underline-offset-8'
                : ''
            }`}
          >
            আমাদের দর্শন
          </button>
          <button
            type="button"
            onClick={() => navigateToSection('ventures')}
            className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${
              activeSubpage === 'ventures'
                ? 'text-slate-900 font-semibold underline decoration-[#FFC94A] decoration-2 underline-offset-8'
                : ''
            }`}
          >
            আমাদের উদ্যোগসমূহ
          </button>
          <button
            type="button"
            onClick={() => navigateToSection('membership')}
            className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${
              activeSubpage === 'membership'
                ? 'text-slate-900 font-semibold underline decoration-[#FFC94A] decoration-2 underline-offset-8'
                : ''
            }`}
          >
            সদস্যপদ
          </button>
          <button
            type="button"
            onClick={() => navigateToSection('opportunities')}
            className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${
              activeSubpage === 'opportunities'
                ? 'text-slate-900 font-semibold underline decoration-[#FFC94A] decoration-2 underline-offset-8'
                : ''
            }`}
          >
            সম্ভাবনার সুযোগ
          </button>
        </nav>

        {/* Zone 3: 1 primary action (+ mobile menu trigger on mobile) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => navigateToSection('contact')}
            className="rounded-lg bg-slate-900 px-4 py-2 text-xs sm:text-sm font-medium text-white hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0"
          >
            যোগাযোগ করুন
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'মোবাইল মেনু বন্ধ করুন' : 'মোবাইল মেনু খুলুন'}
            aria-expanded={mobileMenuOpen}
            className="flex lg:hidden h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Spacer for Fixed Top Header */}
      <div className="h-[69px]" aria-hidden="true" />

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed top-[69px] inset-x-0 z-40 lg:hidden border-b border-slate-200 bg-white px-6 py-5 space-y-3 shadow-md">
          <div className="grid grid-cols-1 gap-2">
            <button
              type="button"
              onClick={() => navigateToSection('home')}
              className="rounded-lg px-3 py-2.5 text-left text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              হোম (সম্পূর্ণ ওভারভিউ)
            </button>
            <button
              type="button"
              onClick={() => navigateToSection('about')}
              className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              আমাদের পরিচিতি
            </button>
            <button
              type="button"
              onClick={() => navigateToSection('philosophy')}
              className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              আমাদের দর্শন
            </button>
            <button
              type="button"
              onClick={() => navigateToSection('ventures')}
              className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              আমাদের উদ্যোগসমূহ (১৩+ Ventures)
            </button>
            <button
              type="button"
              onClick={() => navigateToSection('membership')}
              className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              সদস্যপদ (Lifetime Membership)
            </button>
            <button
              type="button"
              onClick={() => navigateToSection('opportunities')}
              className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              সম্ভাবনার সুযোগ (উদ্যোক্তা ও কর্মী)
            </button>
            <button
              type="button"
              onClick={() => navigateToSection('welfare')}
              className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              মানবকল্যাণ ও সামাজিক দায়বদ্ধতা
            </button>
            <button
              type="button"
              onClick={() => navigateToSection('contact')}
              className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-[#0284C7] hover:bg-slate-50"
            >
              যোগাযোগের তথ্য
            </button>
          </div>
        </div>
      )}

      {/* Subpage Active Breadcrumb Banner when viewing a dedicated subpage */}
      {activeSubpage !== 'home' && (
        <div className="border-b border-slate-200 bg-gradient-to-r from-[#FFF4D6]/60 via-white to-[#EAF7FF]/60 px-6 py-3.5">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <button
                type="button"
                onClick={() => navigateToSection('home')}
                className="font-semibold text-slate-900 hover:text-[#0284C7]"
              >
                হোম
              </button>
              <span aria-hidden="true">/</span>
              <span className="font-semibold text-[#0284C7]">
                {activeSubpage === 'about' && 'আমাদের পরিচিতি'}
                {activeSubpage === 'philosophy' && 'আমাদের দর্শন ও লক্ষ্য'}
                {activeSubpage === 'ventures' && 'আমাদের উদ্যোগসমূহ (১৩টি Venture)'}
                {activeSubpage === 'membership' && 'সদস্যপদ (HOLYSUN Lifetime Membership)'}
                {activeSubpage === 'opportunities' && 'সম্ভাবনার সুযোগ'}
                {activeSubpage === 'welfare' && 'মানবকল্যাণ ও সামাজিক দায়বদ্ধতা'}
                {activeSubpage === 'contact' && 'যোগাযোগের তথ্য'}
              </span>
            </div>
            <button
              type="button"
              onClick={() => navigateToSection('home')}
              className="text-xs font-semibold text-slate-700 hover:text-slate-900 underline underline-offset-4 whitespace-nowrap shrink-0"
            >
              সম্পূর্ণ হোমপেজ ভিউতে ফিরে যান
            </button>
          </div>
        </div>
      )}

      <main id="main-content">
      {/* ===================================================================== */}
      {/* SECTION 01 — HERO SECTION (Only on Home View)                         */}
      {/* ===================================================================== */}
      {activeSubpage === 'home' && (
        <section
          className="relative border-b border-slate-200/70 py-14 sm:py-20 lg:py-24"
          style={{
            background:
              'radial-gradient(circle at 14% 18%, #FFF4D6 0%, rgba(255, 201, 74, 0.14) 30%, rgba(255, 255, 255, 0) 62%), radial-gradient(circle at 86% 24%, #EAF7FF 0%, rgba(57, 169, 232, 0.12) 38%, rgba(255, 255, 255, 0) 70%), #FFFFFF',
          }}
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-stretch">
              {/* Left Column: Brand Lockup, Headline, Supporting Text & Primary CTAs */}
              <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
                {/* Original HOLYSUN Tagline Lockup */}
                <div className="inline-flex w-fit self-start flex-wrap items-center gap-2 rounded-full border border-[#FCD34D] bg-[#FFF4D6]/85 px-3.5 py-1.5 text-xs text-slate-600">
                  <Sparkles className="h-3.5 w-3.5 shrink-0 text-[#D97706]" />
                  <span className="font-bold tracking-wide text-slate-900">
                    {COMPANY_INFO.name}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="font-medium text-[#0284C7]">{COMPANY_INFO.tagline}</span>
                </div>

                {/* Main Hero Headline */}
                <h1
                  className="font-bold tracking-tight text-slate-900 leading-[1.2]"
                  style={{
                    fontSize: 'clamp(2.25rem, 4vw, 3.65rem)',
                    textWrap: 'balance',
                  }}
                >
                  সম্ভাবনার দুয়ার খুলে, এগিয়ে যাই একসাথে।
                </h1>

                {/* Supporting Text */}
                <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-slate-700">
                  মানুষ, উদ্যোগ, কর্মসংস্থান ও মানবকল্যাণের সমন্বয়ে একটি অন্তর্ভুক্তিমূলক ভবিষ্যৎ গড়ে তোলার প্রত্যয়ে{' '}
                  <strong className="font-semibold text-slate-900">HOLYSUN OPC LIMITED</strong>।
                </p>

                {/* Primary & Secondary CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() => navigateToSection('home', 'ventures')}
                    className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-medium text-white hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>আমাদের উদ্যোগসমূহ দেখুন</span>
                    <ArrowRight className="h-4 w-4 text-[#FFC94A]" />
                  </button>

                  <button
                    type="button"
                    onClick={() => navigateToSection('about')}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-medium text-slate-800 hover:border-[#39A9E8] hover:bg-slate-50 transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>আমাদের সম্পর্কে জানুন</span>
                  </button>
                </div>

                {/* Quiet Unboxed Ecosystem Overview Line */}
                <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-600">
                  <span>চেয়ারম্যান: {COMPANY_INFO.chairman}</span>
                  <span aria-hidden="true">·</span>
                  <span>১৩+ পরিকল্পিত বহুমুখী উদ্যোগ</span>
                  <span aria-hidden="true">·</span>
                  <span>আফতাবনগর, ঢাকা-১২১২</span>
                </div>
              </div>

              {/* Right Column: Hero Editorial Visual Carrier */}
              <div className="lg:col-span-5 flex">
                <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between">
                  <EditorialImage
                    src={GENERATED_ASSETS.heroEcosystem}
                    alt="HOLYSUN OPC LIMITED মানবকেন্দ্রিক ব্যবসায়িক ও উদ্যোক্তা ইকোসিস্টেম"
                    aspectClass="aspect-[16/11] lg:h-full"
                  />
                  <div className="border-t border-slate-100 bg-gradient-to-r from-[#FFF4D6]/60 via-white to-[#EAF7FF]/60 px-5 py-3.5 flex items-center justify-between gap-4">
                    <p className="text-xs font-medium text-slate-800">
                      “একটি উদ্যোগ, অসংখ্য সম্ভাবনা, সবার জন্য একটি সুন্দর ভবিষ্যৎ।”
                    </p>
                    <span className="text-[11px] font-semibold text-[#0284C7] whitespace-nowrap shrink-0">
                      Inclusive Ecosystem
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===================================================================== */}
      {/* SECTION 02 — আমাদের সম্পর্কে (ABOUT HOLYSUN)                           */}
      {/* ===================================================================== */}
      {showSection('about') && (
        <section id="about" className="py-16 sm:py-20 border-b border-slate-200/70">
          <div className="mx-auto max-w-7xl px-6 space-y-12">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <span className="font-semibold text-[#0284C7]">আমাদের পরিচিতি</span>
                  <span aria-hidden="true">·</span>
                  <span>About HOLYSUN OPC LIMITED</span>
                </div>

                <h2
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900"
                  style={{ textWrap: 'balance' }}
                >
                  শুধু একটি প্রতিষ্ঠান নয়, সবার জন্য সম্ভাবনা তৈরির একটি উদ্যোগ।
                </h2>

                <p className="text-base leading-relaxed text-slate-700">
                  <strong className="font-semibold text-slate-900">HOLYSUN OPC LIMITED</strong> নিজে কোনো একক বা নির্দিষ্ট সীমাবদ্ধ ব্যবসা নয়। এটি একটি বৃহত্তর মানবকেন্দ্রিক উদ্যোগ, যার অধীনে বিভিন্ন খাতে ব্যবসায়িক Venture পরিচালনা, নতুন উদ্যোক্তা তৈরি, কর্মসংস্থান সৃষ্টি, কারিগরি ও প্রযুক্তিগত দক্ষতা উন্নয়ন এবং মানবকল্যাণমূলক কার্যক্রম পরিচালনার সুদূরপ্রসারী পরিকল্পনা রয়েছে।
                </p>

                <p className="text-base leading-relaxed text-slate-700">
                  আমরা বিশ্বাস করি, মানুষের সম্মিলিত প্রচেষ্টা, দক্ষতা এবং পারস্পরিক সহযোগিতার মাধ্যমে একটি সমৃদ্ধ ও অন্তর্ভুক্তিমূলক সমাজ গড়ে তোলা সম্ভব—যেখানে মানুষ নিজের যোগ্যতা, অভিজ্ঞতা, দক্ষতা ও আগ্রহ অনুযায়ী উদ্যোক্তা, কর্মী অথবা উভয় ভূমিকায় অংশগ্রহণ করতে পারবেন।
                </p>

                {activeSubpage === 'home' && (
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => navigateToSection('about')}
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 hover:border-[#39A9E8] hover:bg-slate-50 transition-colors whitespace-nowrap shrink-0"
                    >
                      <span>আমাদের সম্পর্কে বিস্তারিত পাতা দেখুন</span>
                      <ArrowRight className="h-4 w-4 text-[#0284C7]" />
                    </button>
                  </div>
                )}
              </div>

              {/* Right Column: Purpose & Core Objectives Grid */}
              <div className="lg:col-span-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-[#FFF4D6]/35 p-6 space-y-2">
                  <p className="text-xs font-mono font-bold text-amber-700">01. প্রতিষ্ঠার মূল উদ্দেশ্য</p>
                  <h3 className="text-base font-bold text-slate-900">
                    সমন্বিত মানবিক ইকোসিস্টেম
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                    বিভিন্ন শ্রেণি-পেশার মানুষকে একটি সমন্বিত কাঠামোর আওতায় নিয়ে আসা, যাতে কেউ একা না থেকে সম্মিলিত শক্তিতে এগিয়ে যেতে পারেন।
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-[#EAF7FF]/45 p-6 space-y-2">
                  <p className="text-xs font-mono font-bold text-[#0284C7]">02. উদ্যোক্তা ও কর্মসংস্থান</p>
                  <h3 className="text-base font-bold text-slate-900">
                    বহুমুখী অংশগ্রহণের সুযোগ
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                    নিজস্ব ব্যবসায়িক ধারণা নিয়ে উদ্যোক্তা হিসেবে, দক্ষ কর্মী হিসেবে অথবা একই সঙ্গে উদ্যোক্তা ও কর্মী উভয় ভূমিকায় কাজের সুযোগ।
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-2">
                  <p className="text-xs font-mono font-bold text-slate-700">03. শিক্ষা ও দক্ষতা উন্নয়ন</p>
                  <h3 className="text-base font-bold text-slate-900">
                    কর্মমুখী ও আধুনিক প্রশিক্ষণ
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                    সাধারণ শিক্ষার পাশাপাশি কারিগরি প্রশিক্ষণ ও তথ্যপ্রযুক্তিগত দক্ষতা উন্নয়নের মাধ্যমে তরুণ প্রজন্মকে আত্মনির্ভরশীল করে গড়ে তোলা।
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-2">
                  <p className="text-xs font-mono font-bold text-emerald-700">04. সার্বজনীন মানবিক মূল্যবোধ</p>
                  <h3 className="text-base font-bold text-slate-900">
                    মানুষ হিসেবে সর্বোচ্চ মূল্যায়ন
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                    ধর্ম, বর্ণ, পেশা, শিক্ষাগত স্তর বা সামাজিক অবস্থান নির্বিশেষে প্রতিটি মানুষকে মানুষ হিসেবে সম্মান ও মূল্যায়ন করা।
                  </p>
                </div>
              </div>
            </div>

            {/* When user is on the dedicated "আমাদের পরিচিতি" subpage, show Chairman Message & Executive Body directly here too */}
            {activeSubpage === 'about' && (
              <div className="space-y-12 pt-6 border-t border-slate-200">
                <ChairmanMessageSection />
                <ExecutiveBodyIllustration />
              </div>
            )}
          </div>
        </section>
      )}

      {/* ===================================================================== */}
      {/* SECTION 03 — আমাদের দর্শন (OUR PHILOSOPHY)                             */}
      {/* ===================================================================== */}
      {showSection('philosophy') && (
        <section
          id="philosophy"
          className="py-16 sm:py-20 border-b border-slate-200/70"
          style={{
            background:
              'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 244, 214, 0.28) 50%, #FFFFFF 100%)',
          }}
        >
          <div className="mx-auto max-w-7xl px-6 space-y-10">
            <div className="max-w-3xl space-y-3">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <span className="font-semibold text-[#0284C7]">আমাদের দর্শন</span>
                <span aria-hidden="true">·</span>
                <span>Core Philosophy & Human Values</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
                উন্নয়নের পথে, সবাইকে সঙ্গে নিয়ে।
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                HOLYSUN-এর প্রতিটি পরিকল্পিত উদ্যোগ ও কার্যক্রমের মূলে রয়েছে তিনটি মৌলিক মানবিক দর্শন:
              </p>
            </div>

            {/* 3 Core Philosophies */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {CORE_PHILOSOPHIES.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 transition-colors hover:border-[#39A9E8]"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="font-mono text-sm font-bold text-amber-600">
                        {item.number}.
                      </span>
                      <span>{item.subtitleEn}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{item.titleBn}</h3>
                    <p className="text-sm leading-relaxed text-slate-700">
                      {item.descriptionBn}
                    </p>
                  </div>
                  <div className="mt-6 border-t border-slate-100 pt-3 text-xs font-medium text-slate-500">
                    HOLYSUN মৌলিক নীতিমালা স্তম্ভ
                  </div>
                </div>
              ))}
            </div>

            {/* Vision & Mission Block */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-[#FFC94A]/70 bg-[#FFF4D6]/35 p-6 sm:p-8 space-y-3">
                <p className="text-xs font-semibold text-amber-700">আমাদের রূপকল্প (Our Vision)</p>
                <h3 className="text-xl font-bold text-slate-900">
                  অন্তর্ভুক্তিমূলক ও মানবিক ভবিষ্যতের ইকোসিস্টেম
                </h3>
                <p className="text-sm leading-relaxed text-slate-700">
                  বিভিন্ন শ্রেণি-পেশার মানুষকে একটি মানবিক ও সমন্বিত প্ল্যাটফর্মে যুক্ত করে উদ্যোক্তা উন্নয়ন, সম্মানজনক কর্মসংস্থান, মানসম্মত শিক্ষা, স্বাস্থ্যসেবা ও সমাজকল্যাণের মাধ্যমে সবার জন্য একটি সুন্দর ভবিষ্যৎ গড়ে তোলা।
                </p>
              </div>

              <div className="rounded-2xl border border-[#39A9E8]/60 bg-[#EAF7FF]/45 p-6 sm:p-8 space-y-3">
                <p className="text-xs font-semibold text-[#0284C7]">আমাদের লক্ষ্য (Our Mission)</p>
                <h3 className="text-xl font-bold text-slate-900">
                  বহুমুখী উদ্যোগ, দক্ষতা ও সম্মিলিত অগ্রগতি
                </h3>
                <p className="text-sm leading-relaxed text-slate-700">
                  পরিকল্পিত ব্যবসায়িক Venture-সমূহের মাধ্যমে নতুন উদ্যোক্তাদের সহযোগিতা করা, কারিগরি ও প্রযুক্তিগত প্রশিক্ষণের মাধ্যমে দক্ষ মানবসম্পদ তৈরি করা এবং ধর্ম, বর্ণ ও পেশা নির্বিশেষে প্রতিটি মানুষকে মানুষ হিসেবে মূল্যায়ন করে মানবকল্যাণে অবদান রাখা।
                </p>
              </div>
            </div>

            {/* Seven Guiding Principles Summary List */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                HOLYSUN-এর সপ্তমুখী আদর্শিক অঙ্গীকার
              </h3>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  '০১. মানুষের জন্য নতুন ও বাস্তবসম্মত সুযোগ সৃষ্টি।',
                  '০২. নতুন উদ্যোক্তা তৈরি ও ব্যবসায়িক উদ্যোগে সহযোগিতা।',
                  '০৩. যোগ্যতা ও দক্ষতা অনুযায়ী কর্মসংস্থানের সুযোগ বৃদ্ধি।',
                  '০৪. মানসম্মত শিক্ষা ও কর্মমুখী কারিগরি দক্ষতা উন্নয়ন।',
                  '০৫. কৃষি, স্বাস্থ্য, প্রযুক্তি ও বাণিজ্যে বহুমুখী অবদান।',
                  '০৬. মানবকল্যাণ ও অন্তর্ভুক্তিমূলক সামাজিক উন্নয়ন।',
                  '০৭. ধর্ম, বর্ণ, পেশা ও অবস্থান নির্বিশেষে সবাইকে মানুষ হিসেবে মূল্যায়ন।',
                ].map((commitment, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-200/70 bg-slate-50/70 px-4 py-3 text-xs sm:text-sm font-medium text-slate-800"
                  >
                    {commitment}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===================================================================== */}
      {/* SECTION 04 — আমাদের সমন্বিত উদ্যোগ (13+ IDENTIFIED VENTURES)           */}
      {/* ===================================================================== */}
      {showSection('ventures') && (
        <section id="ventures" className="py-16 sm:py-20 border-b border-slate-200/70">
          <div className="mx-auto max-w-7xl px-6 space-y-10">
            <div className="max-w-3xl space-y-3">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <span className="font-semibold text-[#0284C7]">আমাদের সমন্বিত উদ্যোগ</span>
                <span aria-hidden="true">·</span>
                <span>বর্তমানে চিহ্নিত {ventures.length}টি পরিকল্পিত Venture</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
                একটি লক্ষ্য, বিভিন্ন খাতে সম্ভাবনার বিস্তার।
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                বিভিন্ন খাতে নতুন উদ্যোগ, ব্যবসায়িক কার্যক্রম ও কর্মসংস্থানের সুযোগ তৈরির মাধ্যমে একটি সমন্বিত Ecosystem গড়ে তোলাই আমাদের লক্ষ্য। এই তালিকা চূড়ান্ত বা সীমাবদ্ধ নয়—ভবিষ্যতে নতুন সম্ভাবনাময় Venture যুক্ত করার পথ সবসময় উন্মুক্ত।
              </p>
            </div>

            {/* Interactive Sector Filter Bar (Functional Segmented Buttons) */}
            <div className="flex flex-wrap items-center gap-1.5 rounded-xl bg-slate-100 p-1.5">
              {filterButtons.map((btn) => (
                <button
                  key={btn.key}
                  type="button"
                  onClick={() => setSelectedCategory(btn.key)}
                  className={`rounded-lg px-3.5 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                    selectedCategory === btn.key
                      ? 'bg-white text-slate-900 shadow-xs font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>

            {/* Ventures Grid — Equal importance, consistent ratio & typography */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredVentures.map((venture) => (
                <article
                  key={venture.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-200 hover:border-[#39A9E8] hover:shadow-md"
                >
                  {/* Representative Image with Aspect Ratio 4:3 */}
                  <div
                    onClick={() => setSelectedVenture(venture)}
                    className="cursor-pointer"
                  >
                    <EditorialImage
                      src={venture.imageUrl}
                      alt={venture.imageAltBn}
                      ventureSlug={venture.slug}
                      aspectClass="aspect-[4/3]"
                    />
                  </div>

                  {/* Card Body */}
                  <div className="flex flex-1 flex-col justify-between p-6 space-y-5">
                    <div className="space-y-2.5">
                      {/* Clean Unboxed Metadata with Typographic Separators */}
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                        <span className="font-mono font-bold text-slate-900">
                          {venture.indexNumber}.
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{venture.sectorBn}</span>
                      </div>

                      <h3 className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-[#0284C7] transition-colors">
                        {venture.name}
                      </h3>

                      <p className="text-xs font-semibold text-[#0284C7]">
                        {venture.tagline}
                      </p>

                      <p className="text-sm leading-relaxed text-slate-700 line-clamp-3">
                        {venture.shortDescriptionBn}
                      </p>
                    </div>

                    {/* Card Footer Action Row */}
                    <div className="flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
                      <button
                        type="button"
                        onClick={() => setSelectedVenture(venture)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-[#0284C7] transition-colors whitespace-nowrap shrink-0"
                      >
                        <span>বিস্তারিত দেখুন</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>

                      <Link
                        href={`/ventures/${venture.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
                      >
                        <span>পৃথক পাতা</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Future Expansion Open-Ended Note */}
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-[#FFF4D6]/45 via-white to-[#EAF7FF]/45 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-sm font-bold text-slate-900">
                  ১৩টি Venture চূড়ান্ত বা সীমাবদ্ধ তালিকা নয় — আপনার নতুন ব্যবসায়িক ধারণাও যুক্ত হতে পারে
                </p>
                <p className="text-xs sm:text-sm text-slate-600">
                  Holysun E-Mart ও সামগ্রিক ইকোসিস্টেমের আওতায় সম্ভাবনাময় নতুন ব্যবসায়িক প্রস্তাবনা যাচাই-বাছাই সাপেক্ষে অন্তর্ভুক্ত করার পরিকল্পনা রয়েছে।
                </p>
              </div>
              <button
                type="button"
                onClick={() => navigateToSection('contact')}
                className="rounded-lg bg-slate-900 px-4 py-2.5 text-xs font-medium text-white hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0"
              >
                যোগাযোগের তথ্য দেখুন
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ===================================================================== */}
      {/* SECTION 05 — HOLYSUN LIFETIME MEMBERSHIP                              */}
      {/* ===================================================================== */}
      {showSection('membership') && (
        <section
          id="membership"
          className="py-16 sm:py-20 border-b border-slate-200/70"
          style={{
            background:
              'radial-gradient(circle at 85% 20%, #FFF4D6 0%, rgba(255, 244, 214, 0.25) 35%, #FFFFFF 75%)',
          }}
        >
          <div className="mx-auto max-w-7xl px-6 space-y-12">
            <div className="max-w-3xl space-y-3">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <span className="font-semibold text-[#0284C7]">HOLYSUN Lifetime Membership</span>
                <span aria-hidden="true">·</span>
                <span>পরিকল্পিত সদস্য সংখ্যা: সর্বোচ্চ ১০,০০০ জন</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
                একটি সদস্যপদ, সম্ভাবনার বৃহত্তর পরিসরে যুক্ত হওয়ার সুযোগ।
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                HOLYSUN-এর বৃহত্তর উদ্যোগের সঙ্গে মানুষকে যুক্ত করা এবং বিভিন্ন Venture-এর বিশেষ সুযোগ-সুবিধা পৌঁছে দেওয়ার উদ্দেশ্যে Lifetime Membership ব্যবস্থা গড়ে তোলার পরিকল্পনা রয়েছে।
              </p>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {PLANNED_MEMBERSHIP_BENEFITS.map((benefit, index) => (
                  <div
                    key={benefit.id}
                    className="rounded-2xl border border-slate-200 bg-white p-6 space-y-2.5"
                  >
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="font-mono font-bold text-amber-600">
                        0{index + 1}.
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>পরিকল্পিত সদস্যসুবিধা</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      {benefit.titleBn}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                      {benefit.descriptionBn}
                    </p>
                  </div>
                ))}
              </div>

              {/* Mandatory Policy & Accuracy Disclaimer */}
              <div className="rounded-2xl border border-[#FFC94A]/70 bg-[#FFF4D6]/40 p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-2 max-w-3xl">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <ShieldCheck className="h-4 w-4 text-amber-700" />
                    <span>সদস্যপদের নীতিমালা ও বাস্তবায়ন শর্তাবলি</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                    উপরে উল্লেখিত সুবিধাসমূহ HOLYSUN Lifetime Membership-এর <strong className="font-semibold">পরিকল্পিত সদস্যসুবিধা</strong>। সংশ্লিষ্ট Venture-এর কার্যক্রম শুরু হওয়া, অনুমোদিত Membership Policy এবং প্রযোজ্য শর্তাবলি অনুযায়ী পর্যায়ক্রমে সুবিধাগুলো বাস্তবায়িত হবে।
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => navigateToSection('contact')}
                  className="rounded-xl bg-slate-900 px-5 py-3 text-xs sm:text-sm font-medium text-white hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0"
                >
                  সদস্যপদ বিষয়ে তথ্য জানতে যোগাযোগ করুন
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===================================================================== */}
      {/* SECTION 06 — উদ্যোক্তা ও কর্মসংস্থানের সুযোগ (OPPORTUNITIES)            */}
      {/* ===================================================================== */}
      {showSection('opportunities') && (
        <section id="opportunities" className="py-16 sm:py-20 border-b border-slate-200/70">
          <div className="mx-auto max-w-7xl px-6 space-y-12">
            <div className="max-w-3xl space-y-3">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <span className="font-semibold text-[#0284C7]">সম্ভাবনার সুযোগ</span>
                <span aria-hidden="true">·</span>
                <span>উদ্যোক্তা, কর্মী ও উভয় ভূমিকায় অংশগ্রহণ</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
                নিজের সম্ভাবনাকে কাজে লাগান, তৈরি করুন নতুন সুযোগ।
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                HOLYSUN-এর অধীনে পরিচালিত ও পরিকল্পিত বিভিন্ন Venture-এ মানুষ নিজের যোগ্যতা, অভিজ্ঞতা, দক্ষতা ও আগ্রহ অনুযায়ী তিনভাবে অংশগ্রহণ করতে পারবেন:
              </p>
            </div>

            {/* 3 Participation Modes */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {PARTICIPATION_ROLES.map((role, index) => (
                <div
                  key={role.id}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-6"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="font-mono font-bold text-[#0284C7]">
                        0{index + 1}.
                      </span>
                      <span>{role.subtitleEn}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{role.titleBn}</h3>
                    <p className="text-sm leading-relaxed text-slate-700">
                      {role.descriptionBn}
                    </p>
                    <ul className="space-y-2 pt-2">
                      {role.highlightsBn.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-slate-700"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#F59E0B]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() => navigateToSection('contact')}
                    className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2.5 text-xs font-semibold text-slate-900 hover:border-[#39A9E8] hover:bg-white transition-colors whitespace-nowrap shrink-0"
                  >
                    যোগাযোগের তথ্য দেখুন →
                  </button>
                </div>
              ))}
            </div>

            {/* Five-Tier Classification Structure (Honoring Human Dignity, No Fabricated Tier Names) */}
            <FiveTierClassificationSection />
          </div>
        </section>
      )}

      {/* ===================================================================== */}
      {/* SECTION 07 — EXECUTIVE BODY & MANAGEMENT (Home View)                  */}
      {/* ===================================================================== */}
      {activeSubpage === 'home' && (
        <section className="py-16 sm:py-20 border-b border-slate-200/70 bg-slate-50/40">
          <div className="mx-auto max-w-7xl px-6">
            <ExecutiveBodyIllustration />
          </div>
        </section>
      )}

      {/* ===================================================================== */}
      {/* SECTION 08 — শিক্ষা ও দক্ষতা উন্নয়ন (EDUCATION & SKILL DEVELOPMENT)    */}
      {/* ===================================================================== */}
      {(activeSubpage === 'home' || activeSubpage === 'opportunities') && (
        <section className="py-16 sm:py-20 border-b border-slate-200/70">
          <div className="mx-auto max-w-7xl px-6 space-y-10">
            <div className="max-w-3xl space-y-3">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <GraduationCap className="h-4 w-4 text-[#0284C7]" />
                <span className="font-semibold text-[#0284C7]">শিক্ষা ও দক্ষতা উন্নয়ন</span>
                <span aria-hidden="true">·</span>
                <span>মানবসম্পদ উন্নয়নের সমন্বিত উদ্যোগ</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
                দক্ষতা বাড়ুক, সম্ভাবনা তৈরি হোক।
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                HOLYSUN-এর বিভিন্ন উদ্যোগের মাধ্যমে প্রাতিষ্ঠানিক শিক্ষা, কারিগরি প্রশিক্ষণ এবং বাস্তবভিত্তিক প্রযুক্তিগত দক্ষতা উন্নয়নে দীর্ঘমেয়াদি অবদান রাখার পরিকল্পনা রয়েছে।
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {EDUCATION_SKILL_PILLARS.map((pillar, idx) => (
                <div
                  key={pillar.id}
                  className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-[#EAF7FF]/30 p-6 sm:p-8 space-y-3"
                >
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="font-mono font-bold text-[#0284C7]">0{idx + 1}.</span>
                    <span aria-hidden="true">·</span>
                    <span>{pillar.focusBn}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{pillar.name}</h3>
                  <p className="text-sm leading-relaxed text-slate-700">
                    {pillar.descriptionBn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===================================================================== */}
      {/* SECTION 09 — মানবকল্যাণ ও সামাজিক দায়বদ্ধতা (HUMAN WELFARE)           */}
      {/* ===================================================================== */}
      {(activeSubpage === 'home' ||
        activeSubpage === 'philosophy' ||
        activeSubpage === 'welfare') && (
        <section
          className="py-16 sm:py-20 border-b border-slate-200/70"
          style={{
            background:
              'linear-gradient(135deg, rgba(255, 244, 214, 0.35) 0%, #FFFFFF 55%, rgba(234, 247, 255, 0.4) 100%)',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="mx-auto max-w-7xl px-6 space-y-10"
          >
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <HeartHandshake className="h-4 w-4 text-amber-600" />
                  <span className="font-semibold text-amber-700">
                    মানবকল্যাণ ও সামাজিক দায়বদ্ধতা
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>Holysun Trust & Welfare Foundation</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
                  মানুষের পাশে, মানবতার বন্ধনে।
                </h2>

                <p className="text-base leading-relaxed text-slate-700">
                  HOLYSUN বিশ্বাস করে, মানুষকে তার ধর্ম, বর্ণ, সামাজিক অবস্থান বা পেশা দিয়ে নয়—মানুষ হিসেবে মূল্যায়ন করা উচিত। এই দর্শনের ভিত্তিতে{' '}
                  <strong className="font-semibold text-slate-900">
                    Holysun Trust & Welfare Foundation
                  </strong>
                  -এর মাধ্যমে মানবকল্যাণমূলক কার্যক্রম পরিচালনার পরিকল্পনা রয়েছে।
                </p>

                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  <EditorialImage
                    src={GENERATED_ASSETS.agroGreen}
                    alt="মানবকল্যাণ ও সামাজিক উন্নয়ন"
                    ventureSlug="holysun-trust-welfare-foundation"
                    aspectClass="aspect-[16/9]"
                  />
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <p className="text-xs font-semibold text-slate-700">
                  Holysun Trust & Welfare Foundation-এর সম্ভাব্য ও পরিকল্পিত কার্যক্রম:
                </p>
                <div className="space-y-3">
                  {WELFARE_ACTIVITIES.map((act, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5"
                    >
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span className="font-mono font-bold text-amber-600">
                          0{idx + 1}.
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>পরিকল্পিত মানবিক উদ্যোগ</span>
                      </div>
                      <h3 className="mt-1 text-base font-bold text-slate-900">
                        {act.titleBn}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-600">
                        {act.descriptionBn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* ===================================================================== */}
      {/* SECTION 11 — যোগাযোগ ও প্রস্তাবনা ফর্ম (CONTACT & INQUIRY)            */}
      {/* ===================================================================== */}
      {showSection('contact') && (
        <section id="contact" className="py-16 sm:py-20 border-b border-slate-200/70">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="mx-auto max-w-7xl px-6 space-y-10"
          >
            <div className="max-w-3xl space-y-3">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <Briefcase className="h-4 w-4 text-[#0284C7]" />
                <span className="font-semibold text-[#0284C7]">যোগাযোগ ও প্রস্তাবনা</span>
                <span aria-hidden="true">·</span>
                <span>Inquiry & Business Proposal Submission</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
                আপনার ধারণা, দক্ষতা বা জিজ্ঞাসা আমাদের জানান।
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                নতুন ব্যবসায়িক উদ্যোগের প্রস্তাবনা, উদ্যোক্তা বা কর্মী হিসেবে যুক্ত হওয়ার আগ্রহ কিংবা সদস্যপদ বিষয়ক তথ্যের জন্য সরাসরি যোগাযোগ করুন।
              </p>
            </div>

            <HolysunContactForm
              key={`${preselectedVentureName}-${preselectedInquiryType}`}
              ventures={ventures}
              preselectedVentureSlug={preselectedVentureName}
              preselectedInquiryType={preselectedInquiryType}
            />
          </motion.div>
        </section>
      )}

      {/* ===================================================================== */}
      {/* SECTION 12 — FINAL CALL TO ACTION                                     */}
      {/* ===================================================================== */}
      <section
        className="py-16 sm:py-20 border-b border-slate-200/70"
        style={{
          background:
            'radial-gradient(circle at 20% 50%, #FFF4D6 0%, rgba(255, 201, 74, 0.18) 35%, #FFFFFF 75%), linear-gradient(90deg, #FFFFFF 0%, #EAF7FF 100%)',
        }}
      >
        <div className="mx-auto max-w-5xl px-6 text-center space-y-6">
          <div className="mx-auto inline-flex items-center justify-center overflow-hidden rounded-2xl border border-[#FFC94A]/80 bg-white shadow-sm">
            <HolysunEmblem className="h-16 sm:h-20 w-auto" variant="daylight" />
          </div>

          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900"
            style={{ textWrap: 'balance' }}
          >
            একটি সুন্দর আগামীর পথে, আমাদের সঙ্গে এগিয়ে চলুন।
          </h2>

          <p className="mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-slate-700">
            আপনার স্বপ্ন, দক্ষতা কিংবা নতুন কোনো উদ্যোগ নিয়ে যুক্ত হতে পারেন HOLYSUN-এর বৃহত্তর সম্ভাবনার সঙ্গে।
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => navigateToSection('ventures')}
              className="rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-medium text-white hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0"
            >
              আমাদের উদ্যোগসমূহ দেখুন
            </button>

            <button
              type="button"
              onClick={() => navigateToSection('membership')}
              className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-medium text-slate-900 hover:border-[#39A9E8] hover:bg-slate-50 transition-colors whitespace-nowrap shrink-0"
            >
              সদস্যপদ সম্পর্কে জানুন
            </button>

            <button
              type="button"
              onClick={() => navigateToSection('contact')}
              className="rounded-xl border border-[#FFC94A] bg-[#FFF4D6]/70 px-6 py-3.5 text-sm font-semibold text-slate-900 hover:bg-[#FFF4D6] transition-colors whitespace-nowrap shrink-0"
            >
              যোগাযোগ করুন
            </button>
          </div>
        </div>
      </section>
      </main>

      {/* ===================================================================== */}
      {/* SECTION 13 — QUIET CORPORATE FOOTER                                   */}
      {/* ===================================================================== */}
      <footer className="bg-slate-950 text-slate-300 py-14">
        <div className="mx-auto max-w-7xl px-6 space-y-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            {/* Brand & Concept Statement */}
            <div className="md:col-span-5 space-y-4">
              <div className="inline-flex items-center overflow-hidden rounded-2xl border border-slate-800 bg-[#05070B] shadow-md">
                <HolysunEmblem className="h-14 sm:h-16 w-auto" variant="obsidian" />
              </div>

              <p className="text-sm leading-relaxed text-slate-300 max-w-md">
                {COMPANY_INFO.brandConceptBn}
              </p>

              <div className="space-y-1.5 text-xs text-slate-400 pt-1">
                <p className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#39A9E8]" />
                  <span>{COMPANY_INFO.address}</span>
                </p>
                <p className="flex items-center gap-2 font-mono tabular-nums">
                  <Phone className="h-4 w-4 shrink-0 text-[#FFC94A]" />
                  <a
                    href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                    className="hover:text-white transition-colors"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-4 space-y-3">
              <p className="text-xs font-semibold tracking-wide text-white">
                প্রয়োজনীয় লিংক (Quick Links)
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                <li>
                  <button
                    type="button"
                    onClick={() => navigateToSection('about')}
                    className="hover:text-white transition-colors"
                  >
                    আমাদের পরিচিতি
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => navigateToSection('philosophy')}
                    className="hover:text-white transition-colors"
                  >
                    আমাদের দর্শন
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => navigateToSection('ventures')}
                    className="hover:text-white transition-colors"
                  >
                    আমাদের উদ্যোগসমূহ (১৩+ Ventures)
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => navigateToSection('membership')}
                    className="hover:text-white transition-colors"
                  >
                    সদস্যপদ (Lifetime Membership)
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => navigateToSection('opportunities')}
                    className="hover:text-white transition-colors"
                  >
                    সম্ভাবনার সুযোগ
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => navigateToSection('welfare')}
                    className="hover:text-white transition-colors"
                  >
                    মানবকল্যাণ ও সামাজিক দায়বদ্ধতা
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => navigateToSection('contact')}
                    className="hover:text-white transition-colors"
                  >
                    যোগাযোগের তথ্য
                  </button>
                </li>
              </ul>
            </div>

            {/* Legal & Transparency Links */}
            <div className="md:col-span-3 space-y-3">
              <p className="text-xs font-semibold tracking-wide text-white">
                নীতিমালা ও স্বচ্ছতা (Legal Links)
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                <li>
                  <button
                    type="button"
                    onClick={() => setLegalModalType('privacy')}
                    className="hover:text-white transition-colors"
                  >
                    গোপনীয়তা নীতি (Privacy Policy)
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setLegalModalType('terms')}
                    className="hover:text-white transition-colors"
                  >
                    ব্যবহারের শর্তাবলি (Terms of Use)
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
            <p>
              © {new Date().getFullYear()} {COMPANY_INFO.name}. সর্বস্বত্ব সংরক্ষিত।
            </p>
            <p>
              Chairman: {COMPANY_INFO.chairman} · Together for a Better Tomorrow.
            </p>
          </div>
        </div>
      </footer>

      {/* Venture Details Modal */}
      <VentureDetailModal
        venture={selectedVenture}
        onClose={() => setSelectedVenture(null)}
        onInquireVenture={handleInquireForVenture}
      />

      {/* Legal & Asset Reference Modal */}
      {legalModalType && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
          onClick={() => setLegalModalType(null)}
        >
          <div
            className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl space-y-5 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <h3 id="legal-modal-title" className="text-lg font-bold text-slate-900">
                {legalModalType === 'privacy' && 'গোপনীয়তা নীতি (Privacy Policy)'}
                {legalModalType === 'terms' && 'ব্যবহারের শর্তাবলি (Terms of Use)'}
              </h3>
              <button
                type="button"
                onClick={() => setLegalModalType(null)}
                aria-label="বন্ধ করুন"
                className="rounded-lg border border-slate-200 p-2 text-slate-500 hover:bg-slate-50"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {legalModalType === 'privacy' && (
              <div className="space-y-3 text-sm leading-relaxed text-slate-700">
                <p>
                  HOLYSUN OPC LIMITED দর্শনার্থী, উদ্যোক্তা, কর্মী ও সদস্যপদ আগ্রহীদের ব্যক্তিগত তথ্যের গোপনীয়তা রক্ষায় প্রতিশ্রুতিবদ্ধ।
                </p>
                <p>
                  ১. দাপ্তরিক যোগাযোগের মাধ্যমে প্রদত্ত নাম, ফোন নম্বর এবং ব্যবসায়িক প্রস্তাবনা শুধুমাত্র প্রাতিষ্ঠানিক পর্যালোচনা ও যোগাযোগের উদ্দেশ্যে সংরক্ষিত থাকে।
                </p>
                <p>
                  ২. প্রেরিত কোনো ব্যবসায়িক ধারণা বা ব্যক্তিগত তথ্য সংশ্লিষ্ট ব্যক্তির অনুমতি ছাড়া তৃতীয় পক্ষের কাছে হস্তান্তর করা হয় না।
                </p>
              </div>
            )}

            {legalModalType === 'terms' && (
              <div className="space-y-3 text-sm leading-relaxed text-slate-700">
                <p>
                  ১. এই ওয়েবসাইটে উপস্থাপিত Venture-সমূহ এবং সদস্যপদের সুবিধাবলি HOLYSUN OPC LIMITED-এর পরিকল্পিত ইকোসিস্টেম রূপরেখার অংশ।
                </p>
                <p>
                  ২. ওয়েবসাইটে কোনো নিশ্চিত বিনিয়োগ মুনাফা, কাল্পনিক পরিসংখ্যান বা অনলাইন পেমেন্ট দাবি করা হয়নি। প্রতিটি উদ্যোগের বাস্তবায়ন ও সদস্য সুবিধা প্রতিষ্ঠানের অনুমোদিত নীতিমালা ও প্রযোজ্য শর্তাবলি অনুযায়ী পরিচালিত হবে।
                </p>
              </div>
            )}

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => setLegalModalType(null)}
                className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-medium text-white hover:bg-slate-800"
              >
                বন্ধ করুন
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

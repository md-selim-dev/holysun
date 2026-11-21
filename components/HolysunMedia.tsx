'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Sun,
  Building2,
  Sprout,
  Briefcase,
  HeartPulse,
  HeartHandshake,
  Tv,
  Utensils,
  GraduationCap,
  Home,
  Globe,
  Compass,
  Wrench,
  Cpu,
} from 'lucide-react';

export const OFFICIAL_LOGOS = {
  emblemTransparent:
    '/assets/aistudio/holysun-opc-limited-v3-horizon-valley-daylight-cobalt-emblem-transparent-2048px_d97c517c.png',
  emblemDaylightSvg:
    '/assets/aistudio/holysun-opc-limited-v3-horizon-valley-daylight-cobalt-emblem_84013af1.svg',
  emblemObsidianSvg:
    '/assets/aistudio/holysun-opc-limited-v3-horizon-valley-obsidian-electric-blue-emblem_8da36439.svg',
};

export function HolysunEmblem({
  className = 'h-10 w-auto',
  variant = 'emblem',
}: {
  className?: string;
  variant?: 'emblem' | 'daylight' | 'obsidian' | 'full';
}) {
  const src =
    variant === 'obsidian'
      ? OFFICIAL_LOGOS.emblemObsidianSvg
      : variant === 'daylight' || variant === 'full'
        ? OFFICIAL_LOGOS.emblemDaylightSvg
        : OFFICIAL_LOGOS.emblemTransparent;

  return (
    <Image
      src={src}
      alt="HOLYSUN OPC LIMITED Official Logo"
      width={760}
      height={320}
      referrerPolicy="no-referrer"
      style={{ aspectRatio: '760 / 320' }}
      className={`block object-contain ${className}`}
      priority
    />
  );
}

export function VentureIcon({
  slug,
  className = 'h-6 w-6',
}: {
  slug: string;
  className?: string;
}) {
  switch (slug) {
    case 'holysun-e-mart':
      return <Building2 className={className} />;
    case 'holysun-agro-industries':
      return <Sprout className={className} />;
    case 'holysun-consultancy-firm':
      return <Briefcase className={className} />;
    case 'holysun-family-care-hospital':
      return <HeartPulse className={className} />;
    case 'holysun-trust-welfare-foundation':
      return <HeartHandshake className={className} />;
    case 'holysun-tv':
      return <Tv className={className} />;
    case 'holysun-cafe-halal-bazar':
      return <Utensils className={className} />;
    case 'holysun-school-college':
      return <GraduationCap className={className} />;
    case 'holysun-housing-builders':
      return <Home className={className} />;
    case 'holysun-export-import':
      return <Globe className={className} />;
    case 'holysun-tourism':
      return <Compass className={className} />;
    case 'holysun-technical-training-institute':
      return <Wrench className={className} />;
    case 'hsl-it-digital-solutions':
      return <Cpu className={className} />;
    default:
      return <Sun className={className} />;
  }
}

interface EditorialImageProps {
  src: string;
  alt: string;
  ventureSlug?: string;
  aspectClass?: string;
  captionNote?: string;
  priorityOverlay?: boolean;
}

export function EditorialImage({
  src,
  alt,
  ventureSlug = '',
  aspectClass = 'aspect-[4/3]',
  captionNote = 'প্রতীকী আলোকচিত্র • পরিকল্পিত উদ্যোগ',
  priorityOverlay = false,
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative w-full overflow-hidden bg-gradient-to-br from-[#FFF4D6] via-white to-[#EAF7FF] ${aspectClass}`}
    >
      {!hasError && src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 text-[#0284C7] shadow-xs">
            <VentureIcon slug={ventureSlug} className="h-6 w-6" />
          </div>
          <p className="text-sm font-semibold text-slate-800">{alt}</p>
          <p className="mt-1 text-xs text-slate-500">{captionNote}</p>
        </div>
      )}

      {priorityOverlay && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/15 to-transparent" />
      )}

      {captionNote && (
        <div className="pointer-events-none absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/75 via-slate-950/35 to-transparent px-4 pt-6 pb-2.5">
          <p className="text-[11px] font-medium tracking-normal text-white/90">{captionNote}</p>
        </div>
      )}
    </div>
  );
}

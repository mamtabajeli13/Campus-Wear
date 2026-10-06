import React, { useState } from 'react';
import { ArrowRight, MessageCircle, SlidersHorizontal, Sparkles } from 'lucide-react';
import {
  CAMPUS_SEGMENTS,
  DEFAULT_WHATSAPP_MESSAGE,
  IMAGES,
  buildWhatsAppUrl,
} from '../data/campusWearData';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onSelectMockupPreset: (merchType: string, customNote: string) => void;
}

const PREVIEW_PRESETS = [
  {
    id: 'duo-showcase',
    label: 'Hoodie & Tee Lookbook Duo',
    garment: 'Custom Hoodies & T-Shirts',
    spec: '380 GSM Heavyweight Hoodie + 240 GSM Drop-Shoulder Tee',
    placement: 'Varsity Crest & High-Density Fest Graphic',
    badge: 'Most Popular for Campus Drops',
    image: IMAGES.hero,
  },
  {
    id: 'hoodie-focus',
    label: 'Custom Heavyweight Hoodie',
    garment: 'Custom Hoodies',
    spec: '380 GSM Fleece · Dark Charcoal · Puff & 3D Embroidery',
    placement: 'Embroidered Chest Crest + Custom Ribbed Cuffs',
    badge: 'Winter & Society Inductions',
    image: IMAGES.hoodie,
  },
  {
    id: 'tshirt-focus',
    label: 'Custom Drop-Shoulder Tee',
    garment: 'Custom T-Shirts',
    spec: '240 GSM Combed Cotton · Deep Navy · Screen & DTF Print',
    placement: 'Tech Fest Front Emblem + Sleeve Team Roster',
    badge: 'Fests & Club Kits',
    image: IMAGES.tshirt,
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onSelectMockupPreset }) => {
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const currentPreset = PREVIEW_PRESETS[activePresetIndex];

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 border-b border-slate-800"
    >
      {/* Background radial gradient mesh */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:28px_28px] opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-[#FF5500]/10 blur-[120px]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Headline, Subheadline & Direct CTAs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-semibold text-[#FF5500]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>India’s Premium College Merchandise Studio</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
              Gear Up Your Campus.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              Custom T-shirts, hoodies &amp; merchandise made for your college club, fest or team.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm sm:text-base font-bold text-white bg-[#FF5500] hover:bg-[#E04800] active:translate-y-[1px] rounded-xl transition-all duration-150 shadow-sm whitespace-nowrap shrink-0"
              >
                <span>Get a Free Mockup</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm sm:text-base font-semibold text-white bg-[#131927] hover:bg-slate-800 border border-slate-700 rounded-xl transition-all duration-150 whitespace-nowrap shrink-0"
              >
                <span>Explore Merchandise</span>
              </a>
            </div>

            {/* Direct WhatsApp Quick-Chat */}
            <div className="pt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm text-slate-400">
              <span>Have your club vector or sketch ready?</span>
              <span aria-hidden="true">·</span>
              <a
                href={buildWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-white underline decoration-[#FF5500] decoration-2 underline-offset-4 hover:text-[#FF5500] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp for instant mockup</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-Quality Realistic Mockup Showcase */}
          <div className="lg:col-span-6">
            <div className="bg-[#111726] rounded-2xl p-4 sm:p-6 border border-slate-800 shadow-2xl relative">
              {/* Studio Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <SlidersHorizontal className="w-4 h-4 text-[#FF5500]" />
                  <span>Digital Mockup Studio · High-Fidelity Preview</span>
                </div>
                <span className="text-xs font-mono-num text-[#FF5500] bg-[#FF5500]/10 px-2 py-0.5 rounded border border-[#FF5500]/20">
                  {currentPreset.badge}
                </span>
              </div>

              {/* Realistic Mockup Image Frame */}
              <div className="relative rounded-xl overflow-hidden bg-[#0A0D14] aspect-[16/10] mb-4 border border-slate-800/80 group">
                <ResilientImage
                  src={currentPreset.image}
                  alt={currentPreset.label}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-end justify-between gap-2">
                  <div className="max-w-[70%]">
                    <p className="text-xs text-slate-300">{currentPreset.spec}</p>
                    <p className="text-sm sm:text-base font-display font-bold text-white">
                      {currentPreset.label}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      onSelectMockupPreset(
                        currentPreset.garment,
                        `Interested in ${currentPreset.label} (${currentPreset.placement})`
                      )
                    }
                    className="px-3.5 py-2 text-xs font-bold bg-[#FF5500] hover:bg-[#E04800] text-white rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
                  >
                    Select This Style
                  </button>
                </div>
              </div>

              {/* Garment Selector Tabs */}
              <div
                role="tablist"
                aria-label="Realistic mockup presets"
                className="grid grid-cols-3 gap-2 p-1.5 bg-[#090D16] rounded-xl border border-slate-800"
              >
                {PREVIEW_PRESETS.map((preset, index) => {
                  const isActive = index === activePresetIndex;
                  return (
                    <button
                      key={preset.id}
                      role="tab"
                      aria-selected={isActive}
                      type="button"
                      onClick={() => setActivePresetIndex(index)}
                      className={`py-2 px-2 rounded-lg text-xs font-semibold transition-all duration-150 truncate cursor-pointer ${
                        isActive
                          ? 'bg-[#FF5500] text-white shadow-xs'
                          : 'text-slate-400 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      {preset.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Below Hero: "Designed for Campus Life" Value Section */}
        <div className="mt-14 pt-10 border-t border-slate-800">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-2">
            <h2 className="font-display text-lg sm:text-xl font-bold text-white">
              Designed for Campus Life
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Engineered for student clubs, fests, societies and university teams
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CAMPUS_SEGMENTS.map((segment, index) => (
              <div
                key={segment.title}
                className="p-5 rounded-xl bg-[#111726] border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="text-xs font-mono-num font-semibold text-[#FF5500] mb-2">
                  0{index + 1}.
                </div>
                <h3 className="font-display text-base font-bold text-white mb-1">
                  {segment.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {segment.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

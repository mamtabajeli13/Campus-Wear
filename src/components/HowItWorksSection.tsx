import React from 'react';
import { Upload, Eye, CheckCircle2, ArrowRight } from 'lucide-react';
import {
  DEFAULT_WHATSAPP_MESSAGE,
  HOW_IT_WORKS_STEPS,
  buildWhatsAppUrl,
} from '../data/campusWearData';

const STEP_ICONS = [Upload, Eye, CheckCircle2];

export const HowItWorksSection: React.FC = () => {
  return (
    <section
      id="how-it-works"
      className="py-16 md:py-24 bg-[#0B0F19] text-white border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold text-[#FF5500] mb-2 tracking-wide">
              How It Works
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-balance">
              From Club Concept to Campus Gear in Three Simple Steps.
            </h2>
          </div>
          <a
            href={buildWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold bg-[#FF5500] hover:bg-[#E04800] text-white rounded-xl transition-colors whitespace-nowrap shrink-0 self-start md:self-auto"
          >
            <span>Start Step 01 on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Desktop connecting guide */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-12 left-[18%] right-[18%] h-[1px] bg-gradient-to-r from-[#FF5500]/60 via-slate-700 to-[#FF5500]/60"
          />

          {HOW_IT_WORKS_STEPS.map((step, index) => {
            const IconComponent = STEP_ICONS[index] || Upload;
            return (
              <div
                key={step.number}
                className="relative bg-[#111726] border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#FF5500]/15 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-mono-num text-xs font-semibold text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                      Step {step.number}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-2.5">
                    {step.number} — {step.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <p className="pt-4 border-t border-slate-800 text-xs text-slate-400">
                  {step.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

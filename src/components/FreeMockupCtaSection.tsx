import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { DEFAULT_WHATSAPP_MESSAGE, buildWhatsAppUrl } from '../data/campusWearData';

export const FreeMockupCtaSection: React.FC = () => {
  return (
    <section className="py-14 md:py-20 bg-[#0B0F19] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#111726] via-[#0D1322] to-[#070A11] text-white p-8 sm:p-12 lg:p-16 overflow-hidden border border-slate-800 shadow-2xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#FF5500]/20 blur-3xl"
          />

          <div className="relative z-10 max-w-3xl">
            <p className="text-xs sm:text-sm font-semibold text-[#FF5500] mb-3 tracking-wide">
              Zero Upfront Cost · Digital Visualization
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 text-balance">
              Have a Design in Mind?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Send us your idea and get a FREE digital mockup before ordering.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={buildWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 text-sm sm:text-base font-bold bg-[#FF5500] hover:bg-[#E04800] text-white rounded-xl transition-all duration-150 shadow-sm whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>Request Free Mockup → WhatsApp</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm sm:text-base font-semibold text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors whitespace-nowrap shrink-0"
              >
                <span>Or Fill Mockup Brief Form</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Instagram, MessageCircle, ArrowUpRight } from 'lucide-react';
import {
  DEFAULT_WHATSAPP_MESSAGE,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  buildWhatsAppUrl,
} from '../data/campusWearData';

const INSTAGRAM_HIGHLIGHTS = [
  'Custom hoodie designs & varsity graphics',
  'Drop-shoulder t-shirt designs & puff prints',
  'Finished merchandise lookbooks',
  'Behind-the-scenes mockups & digital previews',
  'Student groups wearing CampusWear merchandise',
];

const WHATSAPP_WORKFLOWS = [
  'Receiving logo/design files directly in chat',
  'Sharing high-res digital mockups with your team',
  'Answering questions regarding fabrics and timelines',
  'Confirming orders and batch deliveries',
];

export const SocialJourneySection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#070A11] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs sm:text-sm font-semibold text-[#FF5500] mb-2 tracking-wide">
            Instagram + WhatsApp
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Built Around How Students Discover and Order.
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Discover fresh drop inspiration on Instagram, then connect directly with our studio on
            WhatsApp for rapid design mockups.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: Discover on Instagram */}
          <div className="bg-[#111726] rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 pb-5 mb-6 border-b border-slate-800">
                <div>
                  <p className="text-xs text-slate-400 mb-1">Step 1 · Visual Inspiration</p>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Discover on Instagram
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-white border border-slate-700">
                  <Instagram className="w-6 h-6" />
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 mb-5">
                Browse our feed ({INSTAGRAM_HANDLE}) for recent drops, fabric textures, and campus
                style references:
              </p>

              <ul className="space-y-3 mb-8">
                {INSTAGRAM_HIGHLIGHTS.map((item, idx) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-3 text-sm sm:text-base text-slate-200"
                  >
                    <span className="font-mono-num text-xs font-bold text-[#FF5500] shrink-0">
                      0{idx + 1}.
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-sm font-bold text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors whitespace-nowrap shrink-0 border border-slate-700"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow Us on Instagram</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 2: Order Through WhatsApp */}
          <div className="bg-[#111726] rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 pb-5 mb-6 border-b border-slate-800">
                <div>
                  <p className="text-xs text-slate-400 mb-1">Step 2 · Direct Collaboration</p>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Order Through WhatsApp
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 border border-[#25D366]/40 flex items-center justify-center text-[#25D366]">
                  <MessageCircle className="w-6 h-6" />
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 mb-5">
                Work directly with our team on WhatsApp with zero red tape:
              </p>

              <ul className="space-y-3 mb-8">
                {WHATSAPP_WORKFLOWS.map((item, idx) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-3 text-sm sm:text-base text-slate-200"
                  >
                    <span className="font-mono-num text-xs font-bold text-[#25D366] shrink-0">
                      0{idx + 1}.
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={buildWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-sm font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-xl transition-colors whitespace-nowrap shrink-0 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

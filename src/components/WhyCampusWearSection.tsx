import React from 'react';
import { WHY_CAMPUSWEAR_BENEFITS } from '../data/campusWearData';

export const WhyCampusWearSection: React.FC = () => {
  return (
    <section
      id="why-campuswear"
      className="py-16 md:py-24 bg-[#070A11] border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs sm:text-sm font-semibold text-[#FF5500] mb-2 tracking-wide">
            Why CampusWear?
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Why Students Choose CampusWear
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Transparent communication, free digital previews, and flexible event coordination built
            specifically for universities and student bodies.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {WHY_CAMPUSWEAR_BENEFITS.map((benefit, idx) => {
            const colSpanClass = idx < 2 ? 'md:col-span-3' : 'md:col-span-2';
            return (
              <div
                key={benefit.title}
                className={`${colSpanClass} bg-[#111726] rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors`}
              >
                <div>
                  <div className="text-xs font-mono-num font-semibold text-[#FF5500] mb-3">
                    {benefit.index}.
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2.5">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
                    {benefit.description}
                  </p>
                </div>
                <p className="text-xs text-slate-400 pt-4 border-t border-slate-800">
                  {benefit.context}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

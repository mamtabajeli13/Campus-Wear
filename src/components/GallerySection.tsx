import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/campusWearData';
import { ResilientImage } from './ResilientImage';

const CATEGORIES: Array<'All' | GalleryItem['category']> = [
  'All',
  'Custom T-shirts',
  'Hoodies',
  'College clubs',
  'Fest merchandise',
  'Product mockups',
  'Student groups',
];

interface GallerySectionProps {
  onSelectGalleryMockup: (item: GalleryItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectGalleryMockup }) => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | GalleryItem['category']>('All');

  const filteredItems =
    selectedCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-[#0B0F19] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold text-[#FF5500] mb-2 tracking-wide">
              Design &amp; Concept Gallery
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
              Explore Campus Merchandise Mockups &amp; Concepts.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              Sample studio mockups illustrating custom placements for college T-shirts, hoodies,
              club editions, and fest kits.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter gallery by category"
            className="flex items-center gap-1.5 p-1.5 bg-[#111726] rounded-xl border border-slate-800 overflow-x-auto max-w-full"
          >
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  aria-selected={active}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-[#FF5500] text-white shadow-xs'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-[#111726] rounded-2xl border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="relative aspect-[4/3] bg-[#0A0D14] overflow-hidden border-b border-slate-800">
                  <ResilientImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-1.5">
                    <span className="text-[#FF5500] font-semibold">{item.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.specDetail}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400">{item.subtitle}</p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-1">
                <button
                  type="button"
                  onClick={() => onSelectGalleryMockup(item)}
                  className="w-full py-2.5 px-4 text-xs font-bold text-white bg-slate-800 hover:bg-[#FF5500] rounded-xl transition-colors duration-150 whitespace-nowrap cursor-pointer border border-slate-700 hover:border-[#FF5500]"
                >
                  Request Similar Mockup
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

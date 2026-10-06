import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { PRODUCTS, ProductItem, buildWhatsAppUrl } from '../data/campusWearData';
import { ResilientImage } from './ResilientImage';

interface ProductsSectionProps {
  onRequestProductMockup: (product: ProductItem) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onRequestProductMockup }) => {
  return (
    <section id="products" className="py-16 md:py-24 bg-[#070A11] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs sm:text-sm font-semibold text-[#FF5500] mb-2 tracking-wide">
            Our Products
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Custom Merchandise Built for Your Campus Identity.
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Every product is custom made with premium streetwear-grade fabrics. Get a free digital
            mockup featuring your club crest before ordering.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PRODUCTS.map((product) => (
            <article
              key={product.id}
              className="group bg-[#111726] rounded-2xl border border-slate-800 overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-slate-700 hover:shadow-xl"
            >
              <div>
                {/* Product Image */}
                <div className="relative aspect-[4/3] bg-[#0A0D14] overflow-hidden border-b border-slate-800">
                  <ResilientImage
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-mono-num text-slate-300">
                    {product.category}
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6 sm:p-7">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                    {product.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
                    {product.description}
                  </p>

                  <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-1.5">
                    <p className="font-medium text-slate-200">{product.specs}</p>
                    <p>{product.customOptions.join(' · ')}</p>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={() => onRequestProductMockup(product)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-white bg-[#FF5500] hover:bg-[#E04800] rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
                >
                  <span>Get Custom Mockup</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href={buildWhatsAppUrl(product.defaultMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Request ${product.title} mockup on WhatsApp`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-[#1A2234] hover:bg-slate-700 rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 border border-slate-700/80"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

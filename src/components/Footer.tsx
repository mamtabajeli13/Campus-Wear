import React from 'react';
import {
  DEFAULT_WHATSAPP_MESSAGE,
  INSTAGRAM_URL,
  buildWhatsAppUrl,
} from '../data/campusWearData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05070D] text-white py-12 md:py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-slate-800">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-3">
            <a
              href="#home"
              className="font-display text-2xl font-extrabold tracking-tight text-white inline-block hover:text-[#FF5500] transition-colors"
            >
              CampusWear
            </a>
            <p className="text-sm sm:text-base text-slate-400 max-w-md leading-relaxed">
              Customized College Merchandise — making campus gear personal and easy to order.
            </p>
          </div>

          {/* Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold text-slate-300 tracking-wide">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold text-slate-300 tracking-wide">
              Social
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 CampusWear. All rights reserved.</p>
          <p>Custom T-Shirts · Custom Hoodies · Custom Mugs · Event Merchandise</p>
        </div>
      </div>
    </footer>
  );
};

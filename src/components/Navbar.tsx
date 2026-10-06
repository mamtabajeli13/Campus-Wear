import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenMockupModal: () => void;
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why CampusWear', href: '#why-campuswear' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenMockupModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 h-20 bg-[#0B0F19]/90 backdrop-blur-md border-b border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark per Top Bar Contract */}
        <a
          href="#home"
          className="font-display text-2xl font-extrabold tracking-tight text-white whitespace-nowrap shrink-0 hover:text-[#FF5500] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF5500]"
        >
          CampusWear
        </a>

        {/* Zone 2: Navigation Links (properly spaced, responsive across tablet/desktop) */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-300"
        >
          {NAV_LINKS.map((item, idx) => (
            <a
              key={item.href}
              href={item.href}
              className={`${
                idx >= 5 ? 'hidden xl:inline-block' : ''
              } hover:text-white py-1 transition-colors duration-150 whitespace-nowrap shrink-0 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#FF5500] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-150 after:origin-left`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 Primary Actions + Mobile Menu Button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenMockupModal}
            className="px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#FF5500] hover:bg-[#E04800] active:translate-y-[1px] rounded-xl transition-all duration-150 whitespace-nowrap shrink-0 shadow-sm cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5500]"
          >
            Get Free Mockup
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D1322] border-b border-slate-800 px-4 pt-4 pb-6 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="px-3.5 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/80 transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={() => {
                handleNavClick();
                onOpenMockupModal();
              }}
              className="w-full py-3.5 px-4 text-center text-sm font-bold text-white bg-[#FF5500] hover:bg-[#E04800] rounded-xl transition-colors cursor-pointer"
            >
              Request Free Digital Mockup
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

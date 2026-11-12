import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cleaningData';

interface HeaderProps {
  onOpenQuote: (type?: 'residential' | 'commercial', serviceId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Residential vs Commercial', href: '#pathways' },
    { label: 'Checklist', href: '#checklist' },
    { label: 'Service Areas', href: '#areas' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner Notice: Agency Redesign Transparency */}
      <div className="bg-[#101C35] text-slate-300 text-xs py-1.5 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#438CEB] shrink-0" />
            <span>Independent agency redesign concept by S.Mideros Agency for Thunder Cleaning Services OKC</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a 
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="flex items-center gap-1.5 text-white hover:text-[#438CEB] transition-colors font-medium"
            >
              <Phone className="w-3 h-3 text-[#438CEB]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-300">Oklahoma City Metro</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3' 
            : 'bg-white border-b border-slate-200/50 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            
            {/* Zone 1: Brand Wordmark */}
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2.5 group shrink-0"
              aria-label="Thunder Cleaning Services OKC Homepage"
            >
              <div className="w-9 h-9 rounded-lg bg-[#101C35] flex items-center justify-center text-white shadow-sm group-hover:bg-[#438CEB] transition-colors">
                {/* Refined clean vector lightning mark */}
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor" fillOpacity="0.15" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold tracking-tight text-[#101C35] font-display leading-tight">
                  Thunder Cleaning
                </span>
                <span className="text-[11px] font-semibold text-[#438CEB] uppercase tracking-wider leading-none">
                  Services OKC
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-medium text-slate-600">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-[#101C35] transition-colors whitespace-nowrap shrink-0 relative py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Actions */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="hidden md:flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-[#438CEB] px-3 py-2 rounded-lg border border-slate-200 transition-colors"
                title="Call Thunder Cleaning Services"
              >
                <Phone className="w-3.5 h-3.5 text-[#438CEB]" />
                <span>(405) 972-8473</span>
              </a>

              <button
                type="button"
                onClick={() => onOpenQuote('residential')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#101C35] text-white text-xs sm:text-sm font-semibold hover:bg-[#438CEB] transition-all duration-200 shadow-sm shadow-[#101C35]/10 whitespace-nowrap"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-700 hover:text-[#101C35] hover:bg-slate-100 rounded-lg transition-colors"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-4 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2.5 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-[#101C35] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-slate-300 text-sm font-semibold text-slate-800"
              >
                <Phone className="w-4 h-4 text-[#438CEB]" />
                <span>Call (405) 972-8473</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote('residential');
                  }}
                  className="w-full py-2.5 px-3 rounded-lg bg-[#101C35] text-white text-xs font-semibold text-center"
                >
                  Residential Quote
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote('commercial');
                  }}
                  className="w-full py-2.5 px-3 rounded-lg bg-[#E9EFF6] text-[#101C35] text-xs font-semibold text-center border border-slate-300"
                >
                  Commercial Inquiry
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

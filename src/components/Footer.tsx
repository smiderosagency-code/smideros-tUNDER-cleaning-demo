import React from 'react';
import { Phone, Mail, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cleaningData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#101C35] text-slate-400 text-xs border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 text-left">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#438CEB] flex items-center justify-center text-white">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor" fillOpacity="0.2" />
                </svg>
              </div>
              <span className="text-base font-bold text-white tracking-tight font-display">
                Thunder Cleaning Services OKC
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              &ldquo;Powerful Cleaning. Peaceful Living.&rdquo; Professional residential and commercial cleaning services tailored across the Oklahoma City metropolitan area.
            </p>

            <div className="pt-1 text-[11px] text-slate-400 space-y-1">
              <div><strong>Base of Operations:</strong> {BUSINESS_INFO.address}</div>
              <div><strong>Dispatch Contact:</strong> {BUSINESS_INFO.phone}</div>
              <div><strong>Email:</strong> {BUSINESS_INFO.email}</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#pathways" className="hover:text-white transition-colors">Residential vs Commercial</a></li>
              <li><a href="#checklist" className="hover:text-white transition-colors">Cleaning Checklist</a></li>
              <li><a href="#quote-builder" className="hover:text-white transition-colors">Quote Estimator</a></li>
              <li><a href="#areas" className="hover:text-white transition-colors">Service Areas</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Client Reviews</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Cleaning Solutions
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#quote-builder" className="hover:text-white transition-colors">Standard House Cleaning</a></li>
              <li><a href="#quote-builder" className="hover:text-white transition-colors">Deep House Cleaning</a></li>
              <li><a href="#quote-builder" className="hover:text-white transition-colors">Move-In / Move-Out Clean</a></li>
              <li><a href="#quote-builder" className="hover:text-white transition-colors">Recurring Cleaning Memberships</a></li>
              <li><a href="#quote-builder" className="hover:text-white transition-colors">Apartment &amp; Condo Cleaning</a></li>
              <li><a href="#quote-builder" className="hover:text-white transition-colors">Commercial &amp; Office Janitorial</a></li>
            </ul>
          </div>

          {/* Service Areas & Verification */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Coverage &amp; Verification
            </div>
            <p className="text-xs text-slate-300">
              Serving Oklahoma City, Edmond, Moore, Norman, Yukon, Mustang, Nichols Hills, The Village, Midwest City, Del City, and Bethany.
            </p>
            <div className="pt-2">
              <a
                href={BUSINESS_INFO.originalWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#438CEB] hover:text-white transition-colors"
              >
                <span>Original Company Site</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="pt-1">
              <a
                href={BUSINESS_INFO.originalBookingPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors"
              >
                <span>Existing Customer Login Portal</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Mandatory Agency Disclosure */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} Thunder Cleaning Services OKC. All rights reserved.
          </div>

          {/* Mandatory Agency Credit */}
          <div className="text-slate-300 font-medium flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#438CEB]" />
            <span>Independent website redesign concept by S.Mideros Agency.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

import React from 'react';
import { ShieldCheck, HeartHandshake, Award, Sparkles, MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cleaningData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#F8FAFD] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Composition */}
          <div className="lg:col-span-5 relative space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
              <img
                src="/images/service-deep-clean.jpg"
                alt="Thunder Cleaning Services OKC detail-oriented cleaning standard"
                className="w-full h-80 sm:h-96 object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101C35]/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white p-4 backdrop-blur-md bg-[#101C35]/80 rounded-xl border border-white/10">
                <div className="flex items-center gap-2 text-xs font-bold text-[#438CEB]">
                  <MapPin className="w-4 h-4" />
                  <span>Oklahoma City Headquarters</span>
                </div>
                <div className="text-sm font-semibold text-white mt-1">
                  {BUSINESS_INFO.address}
                </div>
              </div>
            </div>

            {/* Local Trust Micro-card */}
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#438CEB] flex items-center justify-center font-bold">
                  OKC
                </div>
                <div>
                  <div className="text-xs font-bold text-[#101C35]">Locally Owned &amp; Operated</div>
                  <div className="text-[11px] text-slate-500">Committed to Oklahoma communities</div>
                </div>
              </div>
              <a 
                href={`tel:${BUSINESS_INFO.phoneClean}`} 
                className="text-xs font-semibold text-[#438CEB] hover:underline whitespace-nowrap"
              >
                (405) 972-8473
              </a>
            </div>
          </div>

          {/* Right Column: Story & Principles */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="text-xs font-semibold text-[#438CEB] uppercase tracking-wider">
              About Thunder Cleaning Services OKC
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101C35] font-display leading-tight text-balance">
              More Than Just Clean Surfaces. <br />
              Giving Oklahoma Time Back to What Matters.
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Between busy careers, active children, and weekend commitments, keeping a house immaculate often feels like a full-time second job. <strong>Thunder Cleaning Services OKC</strong> was built to solve that burden with reliable, honest, and high-caliber home and commercial cleaning.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We operate right here in Oklahoma City. We don&apos;t cut corners, skip baseboards, or leave you guessing about who is entering your home. Every cleaning specialist is thoroughly vetted, background-screened, and trained to respect your privacy and space.
            </p>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#101C35] text-[#438CEB] flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#101C35] font-display">Vetted Staff</h4>
                <p className="text-xs text-slate-500 leading-normal">
                  Comprehensive background checks and comprehensive liability insurance.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#101C35] text-[#438CEB] flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#101C35] font-display">100% Guarantee</h4>
                <p className="text-xs text-slate-500 leading-normal">
                  If an item is missed on your checklist, we re-clean within 48h at no cost.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#101C35] text-[#438CEB] flex items-center justify-center">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#101C35] font-display">Oklahoma Pride</h4>
                <p className="text-xs text-slate-500 leading-normal">
                  Friendly communication and genuine midwestern service on every visit.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

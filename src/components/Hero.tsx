import React from 'react';
import { ShieldCheck, Star, Sparkles, Building2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cleaningData';

interface HeroProps {
  onOpenQuote: (type?: 'residential' | 'commercial', serviceId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFD] via-[#F8FAFD] to-[#E9EFF6]/50 pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Subtle Oklahoma Sky Decorative Blur */}
      <div 
        className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-[#438CEB]/10 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-[#101C35]/5 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Quiet Unboxed Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[#101C35] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#438CEB]" />
              <span>Oklahoma City&apos;s Trusted Residential &amp; Commercial Cleaners</span>
            </div>

            {/* Hero Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#101C35] tracking-tight font-display leading-[1.08] text-balance">
              Powerful Cleaning. <br />
              <span className="text-[#438CEB]">More Peace of Mind.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl text-balance">
              Professional home cleaning services designed to make life easier across Oklahoma City. From recurring weekly visits to meticulous deep cleans, come home to a fresh start.
            </p>

            {/* Key Assurance Bullet Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 pb-2">
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#438CEB] shrink-0" />
                <span>100% Satisfaction Re-Clean Guarantee</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#438CEB] shrink-0" />
                <span>Fully Insured &amp; Background-Checked Staff</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#438CEB] shrink-0" />
                <span>All Professional Supplies &amp; Equipment Included</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#438CEB] shrink-0" />
                <span>Transparent Quotes &amp; Zero Hidden Fees</span>
              </div>
            </div>

            {/* CTA Action Block */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => onOpenQuote('residential')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#101C35] text-white text-base font-semibold hover:bg-[#438CEB] transition-all duration-200 shadow-md shadow-[#101C35]/15 hover:shadow-lg hover:shadow-[#438CEB]/25 group"
              >
                <span>Get a Home Cleaning Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-white text-[#101C35] text-base font-semibold hover:bg-slate-50 transition-colors border border-slate-300/80 shadow-sm"
              >
                Explore Our Services
              </a>
            </div>

            {/* Explicit Commercial Pathway Bridge */}
            <div className="pt-3 border-t border-slate-200/80">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Building2 className="w-4 h-4 text-[#101C35] shrink-0" />
                <span>Managing a commercial office or clinic?</span>
                <button
                  type="button"
                  onClick={() => onOpenQuote('commercial')}
                  className="font-semibold text-[#438CEB] hover:text-[#101C35] hover:underline underline-offset-4 transition-colors"
                >
                  Start Commercial Inquiry &rarr;
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white">
              
              {/* Local Reliable Image */}
              <img
                src="/images/hero-home.jpg"
                alt="Immaculately cleaned and sunlit residential home living room in Oklahoma City"
                className="w-full h-[400px] sm:h-[480px] lg:h-[500px] object-cover object-center transform hover:scale-[1.01] transition-transform duration-700"
                loading="eager"
                referrerPolicy="no-referrer"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#101C35]/85 via-transparent to-transparent pointer-events-none" />

              {/* In-Image Trust Badge Container */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="backdrop-blur-md bg-[#101C35]/80 p-4 rounded-xl border border-white/15">
                  <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                        <span className="ml-1 text-xs font-bold text-white">5.0 Star Rating</span>
                      </div>
                      <p className="text-xs text-slate-200">
                        Published by verified Oklahoma City clients
                      </p>
                    </div>

                    <div className="text-right border-l border-white/20 pl-4 shrink-0">
                      <span className="block text-lg font-bold font-display text-white">500+</span>
                      <span className="block text-[11px] text-slate-300">Homes Cleaned</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4-Item Proof KPI Strip */}
        <div className="mt-14 pt-8 border-t border-slate-200/90 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[#101C35]">
              <ShieldCheck className="w-5 h-5 text-[#438CEB]" />
              <span className="font-bold text-base font-display">100% Guarantee</span>
            </div>
            <p className="text-xs text-slate-500 leading-normal">
              Free re-clean within 48h if any checklist item is missed
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[#101C35]">
              <Sparkles className="w-5 h-5 text-[#438CEB]" />
              <span className="font-bold text-base font-display">Vetted &amp; Insured</span>
            </div>
            <p className="text-xs text-slate-500 leading-normal">
              Comprehensive background checks &amp; liability coverage
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[#101C35]">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              <span className="font-bold text-base font-display">5.0 Star Reviews</span>
            </div>
            <p className="text-xs text-slate-500 leading-normal">
              Consistently top-rated across OKC residential communities
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[#101C35]">
              <Building2 className="w-5 h-5 text-[#438CEB]" />
              <span className="font-bold text-base font-display">OKC Metro Wide</span>
            </div>
            <p className="text-xs text-slate-500 leading-normal">
              Edmond, Moore, Norman, Yukon, Nichols Hills &amp; surrounding areas
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

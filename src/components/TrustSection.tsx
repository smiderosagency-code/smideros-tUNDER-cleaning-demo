import React from 'react';
import { ShieldCheck, CheckCircle2, Award, Lock, ExternalLink, RefreshCw } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cleaningData';

export const TrustSection: React.FC = () => {
  return (
    <section className="py-16 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="text-xs font-semibold text-[#438CEB] uppercase tracking-wider">
            Verified Standards &amp; Accountability
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101C35] font-display">
            Built on Oklahoma Trust, Backed by Real Guarantees
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Inviting someone into your home or commercial facility requires absolute confidence. We maintain rigorous standards across background checks, liability insurance, and detailed cleaning checklists.
          </p>
        </div>

        {/* 4 Trust Columns */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: 100% Satisfaction Guarantee */}
          <div className="p-6 rounded-xl bg-[#F8FAFD] border border-slate-200/70 space-y-3 hover:border-[#438CEB]/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#101C35] text-white flex items-center justify-center">
              <RefreshCw className="w-5 h-5 text-[#438CEB]" />
            </div>
            <h3 className="text-base font-bold text-[#101C35] font-display">
              100% Re-Clean Guarantee
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              If any item from our agreed cleaning checklist is overlooked, report it within 48 hours. Our team will return and re-clean that specific area promptly at zero cost.
            </p>
            <div className="pt-2 text-[11px] font-semibold text-[#438CEB] flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Company-Published Guarantee</span>
            </div>
          </div>

          {/* Card 2: Insured & Bonded */}
          <div className="p-6 rounded-xl bg-[#F8FAFD] border border-slate-200/70 space-y-3 hover:border-[#438CEB]/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#101C35] text-white flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-[#438CEB]" />
            </div>
            <h3 className="text-base font-bold text-[#101C35] font-display">
              Full Liability Insurance
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every clean is protected by comprehensive general liability insurance. Your property, delicate home finishes, and corporate assets are safeguarded from start to finish.
            </p>
            <div className="pt-2 text-[11px] font-semibold text-[#438CEB] flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Full Policy Protection</span>
            </div>
          </div>

          {/* Card 3: Background Checked Specialists */}
          <div className="p-6 rounded-xl bg-[#F8FAFD] border border-slate-200/70 space-y-3 hover:border-[#438CEB]/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#101C35] text-white flex items-center justify-center">
              <Lock className="w-5 h-5 text-[#438CEB]" />
            </div>
            <h3 className="text-base font-bold text-[#101C35] font-display">
              Background-Checked Team
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We never subcontract to anonymous cleaners. Each specialist undergoes strict identity verification, in-person training, and criminal background screening before dispatch.
            </p>
            <div className="pt-2 text-[11px] font-semibold text-[#438CEB] flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Vetted Cleaning Professionals</span>
            </div>
          </div>

          {/* Card 4: Verified Local Reputation */}
          <div className="p-6 rounded-xl bg-[#F8FAFD] border border-slate-200/70 space-y-3 hover:border-[#438CEB]/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#101C35] text-white flex items-center justify-center">
              <Award className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="text-base font-bold text-[#101C35] font-display">
              5-Star Local Reputation
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Over 500+ happy clients served across Oklahoma City, Edmond, Moore, and Norman. We prioritize long-term relationships, reliable scheduling, and personal service.
            </p>
            <a 
              href="https://www.google.com/search?q=Thunder+Cleaning+Services+OKC" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="pt-2 text-[11px] font-semibold text-[#438CEB] hover:text-[#101C35] flex items-center gap-1 transition-colors"
            >
              <span>View Google Business Profile</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

        {/* Factual Disclaimer Banner */}
        <div className="mt-8 p-3.5 rounded-lg bg-[#E9EFF6]/60 border border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <span>
            <strong>Authenticity note:</strong> All guarantees, licensing, and client satisfaction claims reflect the published business policies of Thunder Cleaning Services OKC.
          </span>
          <a
            href={BUSINESS_INFO.originalWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#438CEB] hover:underline font-medium whitespace-nowrap inline-flex items-center gap-1"
          >
            <span>Original Business Website</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </section>
  );
};

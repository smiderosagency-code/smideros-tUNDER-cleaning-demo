import React, { useState } from 'react';
import { Home, Building2, Check, ArrowRight, Sparkles, Clock, CalendarCheck, Shield } from 'lucide-react';

interface PathwaysSectionProps {
  onOpenQuote: (type: 'residential' | 'commercial', serviceId?: string) => void;
}

export const PathwaysSection: React.FC<PathwaysSectionProps> = ({ onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState<'residential' | 'commercial'>('residential');

  return (
    <section id="pathways" className="py-20 bg-[#F8FAFD] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="text-xs font-semibold text-[#438CEB] uppercase tracking-wider">
            Clear Customer Journeys
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101C35] font-display">
            Two Distinct Pathways. Tailored For Your Space.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-balance">
            Residential homes and commercial workspaces require completely different standards, security protocols, and scheduling flexibility. Choose the pathway built for your needs.
          </p>

          {/* Interactive Pathway Segmented Selector */}
          <div className="pt-2 flex justify-center">
            <div className="inline-flex p-1.5 rounded-xl bg-slate-200/80 border border-slate-300/80">
              <button
                type="button"
                onClick={() => setActiveTab('residential')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeTab === 'residential'
                    ? 'bg-[#101C35] text-white shadow-sm'
                    : 'text-slate-700 hover:text-[#101C35]'
                }`}
              >
                <Home className="w-4 h-4" />
                <span>Residential Homeowners &amp; Renters</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('commercial')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeTab === 'commercial'
                    ? 'bg-[#101C35] text-white shadow-sm'
                    : 'text-slate-700 hover:text-[#101C35]'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Commercial &amp; Facility Managers</span>
              </button>
            </div>
          </div>
        </div>

        {/* Side-by-Side Dual Pathway Cards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Pathway 1: Residential */}
          <div 
            className={`rounded-2xl p-8 sm:p-10 transition-all duration-300 flex flex-col justify-between border ${
              activeTab === 'residential'
                ? 'bg-white border-[#438CEB] shadow-xl ring-2 ring-[#438CEB]/20'
                : 'bg-white/70 border-slate-200 opacity-90'
            }`}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#101C35] text-[#438CEB] flex items-center justify-center shadow-sm">
                  <Home className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-[#438CEB] border border-blue-100">
                  Houses, Apartments &amp; Condos
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#101C35] font-display">
                  Residential Cleaning
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Tailored specifically for families, professionals, and property renters across Oklahoma City. Transparent flat-rate estimates calculated by bedroom and bathroom count, with optional customized deep details.
                </p>
              </div>

              {/* Service Features Included */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                  What This Pathway Includes:
                </span>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#438CEB] shrink-0 mt-0.5" />
                    <span><strong>Standard Routine Cleaning:</strong> Everyday dust, kitchen &amp; bath sanitation, surface vacuuming &amp; mopping.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#438CEB] shrink-0 mt-0.5" />
                    <span><strong>Deep House Cleaning:</strong> Hand-washed baseboards, tile grout detailing, hood degreasing, and scale removal.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#438CEB] shrink-0 mt-0.5" />
                    <span><strong>Move-In / Move-Out Clean:</strong> Full empty-home handover sanitization for lease turn-in or new home arrivals.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#438CEB] shrink-0 mt-0.5" />
                    <span><strong>Recurring Memberships:</strong> Up to 20% off with weekly, bi-weekly, or monthly automated service.</span>
                  </li>
                </ul>
              </div>

              {/* Benefits highlight */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3 text-xs text-slate-600">
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Instant estimate calculation with customizable add-ons (inside fridge, oven, windows).</span>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-slate-100">
              <button
                type="button"
                onClick={() => onOpenQuote('residential')}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#101C35] text-white text-sm font-semibold hover:bg-[#438CEB] transition-colors shadow-sm"
              >
                <span>Calculate Residential Home Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Pathway 2: Commercial */}
          <div 
            className={`rounded-2xl p-8 sm:p-10 transition-all duration-300 flex flex-col justify-between border ${
              activeTab === 'commercial'
                ? 'bg-white border-[#438CEB] shadow-xl ring-2 ring-[#438CEB]/20'
                : 'bg-white/70 border-slate-200 opacity-90'
            }`}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#101C35] text-[#438CEB] flex items-center justify-center shadow-sm">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-[#101C35] border border-slate-200">
                  Offices, Clinics &amp; Commercial Spaces
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#101C35] font-display">
                  Commercial Cleaning
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Dedicated business janitorial services for offices, law firms, healthcare clinics, and retail storefronts. Never forced into residential room formulas—configured by facility type, square footage, and timing.
                </p>
              </div>

              {/* Service Features Included */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                  What This Pathway Includes:
                </span>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#438CEB] shrink-0 mt-0.5" />
                    <span><strong>Tailored Facility Assessment:</strong> Inquiries based on commercial sq footage, restroom count, and traffic.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#438CEB] shrink-0 mt-0.5" />
                    <span><strong>Flexible Scheduling:</strong> After-hours, early morning, weekend, or daytime porter shifts so business is uninterrupted.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#438CEB] shrink-0 mt-0.5" />
                    <span><strong>Comprehensive Sanitation:</strong> Commercial restrooms, breakrooms, conference hubs, touch points &amp; trash consolidation.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#438CEB] shrink-0 mt-0.5" />
                    <span><strong>Corporate Invoicing &amp; Keyholding:</strong> Reliable point of contact, insured keyholding, and net-terms invoicing.</span>
                  </li>
                </ul>
              </div>

              {/* Benefits highlight */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3 text-xs text-slate-600">
                <Shield className="w-4 h-4 text-[#438CEB] shrink-0" />
                <span>Dedicated commercial walk-through estimate with operations manager before service starts.</span>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-slate-100">
              <button
                type="button"
                onClick={() => onOpenQuote('commercial')}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#438CEB] text-white text-sm font-semibold hover:bg-[#3275CF] transition-colors shadow-sm"
              >
                <span>Request Commercial Facility Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

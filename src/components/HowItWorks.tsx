import React from 'react';
import { Sparkles, Calendar, CheckSquare, ArrowRight, ShieldAlert } from 'lucide-react';

interface HowItWorksProps {
  onOpenQuote: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenQuote }) => {
  const steps = [
    {
      step: '01',
      title: 'Choose Your Cleaning Service',
      description: 'Select between our residential pathway (standard, deep, move-out, recurring) or dedicated commercial facility care. Pick the exact scope tailored to your space.',
      icon: Sparkles,
    },
    {
      step: '02',
      title: 'Share Your Space & Schedule',
      description: 'Specify your room count, square footage, address or Oklahoma City ZIP code, and preferred arrival window. Add any custom items like ovens or windows.',
      icon: Calendar,
    },
    {
      step: '03',
      title: 'Coordinate & Confirm',
      description: 'Review your transparent estimate. Our local Oklahoma City coordination team confirms appointment specifics with you directly before arrival. Zero surprise charges.',
      icon: CheckSquare,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="text-xs font-semibold text-[#438CEB] uppercase tracking-wider">
            Simple 3-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101C35] font-display">
            How Thunder Cleaning Works
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-balance">
            We removed the friction and guesswork from scheduling residential and commercial cleaning across Oklahoma City.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative rounded-2xl p-8 bg-[#F8FAFD] border border-slate-200/80 space-y-4 hover:border-[#438CEB]/40 hover:shadow-md transition-all text-left"
              >
                {/* Step Number */}
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold font-display text-[#101C35]/25">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#438CEB] shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#101C35] font-display">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

        {/* Transparency Callout */}
        <div className="mt-10 p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 max-w-2xl mx-auto flex items-start sm:items-center gap-3.5 text-xs text-amber-900 text-left">
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5 sm:mt-0" />
          <div>
            <strong>Transparent coordination note:</strong> Submitting an online quote inquiry does not charge your card or finalize a booking automatically. Our local OKC dispatch office confirms availability and locks in your appointment with you first.
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#101C35] text-white text-sm font-semibold hover:bg-[#438CEB] transition-colors shadow-sm"
          >
            <span>Start Your Personalized Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

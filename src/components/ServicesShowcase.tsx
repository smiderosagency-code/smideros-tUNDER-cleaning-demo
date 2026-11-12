import React from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/cleaningData';
import { ServiceDetail } from '../types';

interface ServicesShowcaseProps {
  onSelectService: (service: ServiceDetail) => void;
}

export const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="text-xs font-semibold text-[#438CEB] uppercase tracking-wider">
              Comprehensive Cleaning Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101C35] font-display">
              Tailored Services. Uncompromising Standards.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every service is delivered with professional-grade supplies, strict checklist accountability, and our 100% satisfaction re-clean guarantee.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-500 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span>Accepting Residential &amp; Commercial Bookings Across OKC</span>
          </div>
        </div>

        {/* Services Bento Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group rounded-2xl bg-[#F8FAFD] border border-slate-200/90 overflow-hidden flex flex-col justify-between hover:border-[#438CEB]/50 hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* Image Container with Reliable Local Path */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101C35]/70 via-transparent to-transparent" />
                  
                  {/* Service Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-md text-xs font-semibold bg-white/95 text-[#101C35] backdrop-blur-sm shadow-sm">
                      {service.id === 'commercial' ? 'Business Inquiry' : 'Residential Service'}
                    </span>
                  </div>

                  {/* Pricing Indicator */}
                  <div className="absolute bottom-3 right-4">
                    <span className="text-xs font-bold text-white bg-[#101C35]/80 px-2.5 py-1 rounded backdrop-blur-sm">
                      {service.startingPrice}
                    </span>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6 space-y-4 text-left">
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold text-[#101C35] font-display group-hover:text-[#438CEB] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Best For Tagline */}
                  <div className="p-2.5 rounded-lg bg-white border border-slate-200/70 text-xs text-slate-700">
                    <span className="font-semibold text-[#101C35]">Best For: </span>
                    <span>{service.bestFor}</span>
                  </div>

                  {/* Checklist Highlights */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Checklist Highlights:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {service.checklistHighlights.slice(0, 4).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#438CEB] shrink-0 mt-0.5" />
                          <span className="leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => onSelectService(service)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm font-semibold text-[#101C35] hover:bg-[#101C35] hover:text-white hover:border-[#101C35] transition-all duration-200 shadow-sm"
                >
                  <span>{service.id === 'commercial' ? 'Request Commercial Estimate' : 'Get Quote for This Service'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

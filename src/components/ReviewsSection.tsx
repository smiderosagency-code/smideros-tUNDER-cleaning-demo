import React from 'react';
import { Star, ExternalLink, Quote, ShieldCheck } from 'lucide-react';
import { VERIFIED_REVIEWS, BUSINESS_INFO } from '../data/cleaningData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="text-xs font-semibold text-[#438CEB] uppercase tracking-wider">
              Client Testimonials &amp; Feedback
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101C35] font-display">
              Trusted by 500+ Oklahoma Homes &amp; Workplaces
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Read authentic feedback from homeowners, renters, and commercial facility managers across the Oklahoma City metropolitan area.
            </p>
          </div>

          {/* Google Review Badge */}
          <div className="p-4 rounded-xl bg-[#F8FAFD] border border-slate-200 flex items-center gap-4 shrink-0">
            <div>
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs font-bold text-[#101C35] mt-1">5.0 Star Rating</div>
              <div className="text-[11px] text-slate-500">Google Verified Client Reviews</div>
            </div>

            <a
              href="https://www.google.com/search?q=Thunder+Cleaning+Services+OKC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#438CEB] hover:text-[#101C35] flex items-center gap-1 border-l border-slate-200 pl-4 transition-colors"
            >
              <span>View Reviews</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {VERIFIED_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-8 rounded-2xl bg-[#F8FAFD] border border-slate-200/90 flex flex-col justify-between space-y-6 text-left hover:border-[#438CEB]/40 hover:shadow-sm transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-medium text-slate-400">
                    {rev.serviceType}
                  </span>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-[#101C35] block">{rev.name}</span>
                  <span className="text-slate-500">{rev.location}</span>
                </div>
                <div className="flex items-center gap-1 text-emerald-700 font-semibold text-[11px]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{rev.source}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

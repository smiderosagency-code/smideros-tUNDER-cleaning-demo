import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { FAQS, BUSINESS_INFO } from '../data/cleaningData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-[#F8FAFD] border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="text-xs font-semibold text-[#438CEB] uppercase tracking-wider">
            Clear Answers
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101C35] font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-balance">
            Everything you need to know about our Oklahoma City residential and commercial cleaning services.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-12 space-y-3 text-left">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#101C35] hover:text-[#438CEB] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-display">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#438CEB]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Questions Card */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3">
          <h4 className="text-base font-bold text-[#101C35] font-display">
            Have a specific requirement or question?
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
            Our local OKC team is here to help. Call us directly or reach out by email.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#101C35] hover:text-[#438CEB] px-4 py-2 rounded-lg bg-slate-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#438CEB]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="text-xs font-semibold text-[#438CEB] hover:underline"
            >
              {BUSINESS_INFO.email}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

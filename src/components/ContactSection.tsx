import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cleaningData';

interface ContactSectionProps {
  onOpenQuote: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenQuote }) => {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSent(true);
  };

  return (
    <>
      {/* Conversion Final CTA Section */}
      <section className="py-20 bg-[#101C35] text-white relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div 
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#438CEB]/20 blur-3xl pointer-events-none" 
          aria-hidden="true" 
        />
        <div 
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#438CEB]/10 blur-3xl pointer-events-none" 
          aria-hidden="true" 
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#438CEB] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#438CEB]" />
            <span>Oklahoma City&apos;s High-Caliber Cleaning Service</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight text-balance">
            Come Home to a Fresh Start.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed text-balance">
            Tell us what your space needs, and let&apos;s find the right cleaning service for you. Fully insured, strictly vetted, and backed by our 100% satisfaction guarantee.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#438CEB] text-white text-base font-semibold hover:bg-[#3275CF] transition-colors shadow-lg shadow-[#438CEB]/25"
            >
              <span>Request Your Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 text-white text-base font-semibold hover:bg-white/15 transition-colors border border-white/20"
            >
              <Phone className="w-4 h-4 text-[#438CEB]" />
              <span>Call (405) 972-8473</span>
            </a>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span>✓ No instant credit card charge</span>
            <span>✓ 100% Free re-clean guarantee</span>
            <span>✓ Serving Greater OKC Metro</span>
          </div>
        </div>
      </section>

      {/* Verified Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-semibold text-[#438CEB] uppercase tracking-wider">
                  Direct Inquiries &amp; Support
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#101C35] font-display">
                  Get in Touch with Our OKC Office
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Have questions about custom commercial janitorial schedules or special cleaning needs? Reach our Oklahoma City team directly.
                </p>
              </div>

              {/* Verified Contact Cards */}
              <div className="space-y-4 pt-2">
                
                {/* Phone */}
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="p-4 rounded-xl bg-[#F8FAFD] border border-slate-200/80 flex items-start gap-3.5 hover:border-[#438CEB]/50 transition-colors group block"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#101C35] text-[#438CEB] flex items-center justify-center shrink-0 group-hover:bg-[#438CEB] group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Telephone
                    </span>
                    <div className="text-sm font-bold text-[#101C35] font-display">
                      {BUSINESS_INFO.phone}
                    </div>
                    <div className="text-xs text-slate-500">
                      Direct line for scheduling and quote assistance
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="p-4 rounded-xl bg-[#F8FAFD] border border-slate-200/80 flex items-start gap-3.5 hover:border-[#438CEB]/50 transition-colors group block"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#101C35] text-[#438CEB] flex items-center justify-center shrink-0 group-hover:bg-[#438CEB] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Public Contact Email
                    </span>
                    <div className="text-sm font-bold text-[#101C35] font-display">
                      {BUSINESS_INFO.email}
                    </div>
                    <div className="text-xs text-slate-500">
                      Inquiries, commercial RFPs, and customer support
                    </div>
                  </div>
                </a>

                {/* Address */}
                <div className="p-4 rounded-xl bg-[#F8FAFD] border border-slate-200/80 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#101C35] text-[#438CEB] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Physical Base of Operations
                    </span>
                    <div className="text-sm font-bold text-[#101C35] font-display">
                      {BUSINESS_INFO.address}
                    </div>
                    <div className="text-xs text-slate-500">
                      Dispatched across Greater Oklahoma City
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Contact Form Column */}
            <div className="lg:col-span-7">
              <div className="p-8 rounded-2xl bg-[#F8FAFD] border border-slate-200/90 shadow-sm">
                {sent ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="text-xl font-bold text-[#101C35] font-display">
                      Message Sent Successfully
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                      Thank you for contacting Thunder Cleaning Services OKC. Our office team will review your message and reply promptly.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSent(false);
                        setFormData({ name: '', email: '', phone: '', message: '' });
                      }}
                      className="text-xs font-semibold text-[#438CEB] hover:underline pt-2 inline-block"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-[#101C35] font-display">
                        Send a Direct Message
                      </h4>
                      <p className="text-xs text-slate-500">
                        Ask a question, request commercial details, or leave feedback.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Your full name"
                          className="w-full p-3 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#438CEB]"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="name@example.com"
                          className="w-full p-3 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#438CEB]"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Phone (Optional)</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="(405) 555-0100"
                        className="w-full p-3 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#438CEB]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Message / Request Details *</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        placeholder="Tell us about your home, business facility, or question..."
                        className="w-full p-3 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#438CEB]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#101C35] text-white text-xs sm:text-sm font-semibold hover:bg-[#438CEB] transition-colors shadow-sm"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Direct Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

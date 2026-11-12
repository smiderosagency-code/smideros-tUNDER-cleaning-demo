import React, { useState, useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { PathwaysSection } from './components/PathwaysSection';
import { ServicesShowcase } from './components/ServicesShowcase';
import { ChecklistMatrix } from './components/ChecklistMatrix';
import { HowItWorks } from './components/HowItWorks';
import { QuoteBuilder } from './components/QuoteBuilder';
import { ServiceAreas } from './components/ServiceAreas';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CustomerType, ResidentialServiceType, ServiceDetail } from './types';
import { Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from './data/cleaningData';

export default function App() {
  const [selectedType, setSelectedType] = useState<CustomerType>('residential');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('standard');
  const [quoteKey, setQuoteKey] = useState<number>(0);

  const quoteRef = useRef<HTMLDivElement>(null);

  const scrollToQuote = (type: CustomerType = 'residential', serviceId: string = 'standard') => {
    setSelectedType(type);
    setSelectedServiceId(serviceId);
    setQuoteKey(prev => prev + 1); // trigger state sync in QuoteBuilder
    
    // Smooth scroll to the quote builder
    const element = document.getElementById('quote-builder');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceDetail) => {
    if (service.id === 'commercial') {
      scrollToQuote('commercial', 'commercial');
    } else {
      scrollToQuote('residential', service.id);
    }
  };

  const handleSelectServiceTypeFromMatrix = (type: ResidentialServiceType) => {
    scrollToQuote('residential', type);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFD] text-[#1F2937] selection:bg-[#438CEB]/20 selection:text-[#101C35]">
      {/* Header */}
      <Header onOpenQuote={(type) => scrollToQuote(type || 'residential')} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Cinematic Hero */}
        <Hero onOpenQuote={(type) => scrollToQuote(type || 'residential')} />

        {/* Factual Trust & Verification */}
        <TrustSection />

        {/* Differentiated Residential vs Commercial Pathways */}
        <PathwaysSection onOpenQuote={(type) => scrollToQuote(type)} />

        {/* Services Showcase with Verified Photography */}
        <ServicesShowcase onSelectService={handleSelectService} />

        {/* Room-by-Room Checklist Matrix */}
        <ChecklistMatrix onSelectServiceType={handleSelectServiceTypeFromMatrix} />

        {/* How It Works (3 Steps) */}
        <HowItWorks onOpenQuote={() => scrollToQuote('residential')} />

        {/* Interactive Quote & Booking Estimator */}
        <div ref={quoteRef}>
          <QuoteBuilder 
            key={quoteKey}
            initialType={selectedType}
            initialServiceId={selectedServiceId}
          />
        </div>

        {/* Service Areas & Live ZIP Checker */}
        <ServiceAreas onOpenQuote={() => scrollToQuote('residential')} />

        {/* About Thunder Cleaning Services OKC */}
        <AboutSection />

        {/* Verified Reviews & Feedback */}
        <ReviewsSection />

        {/* FAQ Accordion */}
        <FAQSection />

        {/* Final CTA & Contact Section */}
        <ContactSection onOpenQuote={() => scrollToQuote('residential')} />
      </main>

      {/* Footer with Mandatory Agency Disclosure */}
      <Footer />

      {/* Mobile Floating Quick-Action Bar (Sticky Bottom Cap < 15% viewport) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200/90 py-2.5 px-4 flex items-center justify-between gap-3 shadow-lg">
        <a
          href={`tel:${BUSINESS_INFO.phoneClean}`}
          className="flex-1 py-2 px-3 rounded-lg border border-slate-300 text-slate-800 text-xs font-semibold flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-[#438CEB]" />
          <span>Call Office</span>
        </a>

        <button
          type="button"
          onClick={() => scrollToQuote('residential')}
          className="flex-1 py-2 px-3 rounded-lg bg-[#101C35] text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm"
        >
          <Calendar className="w-3.5 h-3.5 text-[#438CEB]" />
          <span>Get Quote</span>
        </button>
      </div>
    </div>
  );
}

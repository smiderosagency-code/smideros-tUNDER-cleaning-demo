import React, { useState, useMemo } from 'react';
import { 
  Home, 
  Building2, 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Calendar, 
  Clock, 
  DollarSign, 
  Sparkles, 
  Copy, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink,
  ShieldCheck,
  RefreshCw,
  Printer
} from 'lucide-react';
import { 
  CustomerType, 
  ResidentialServiceType, 
  CommercialFacilityType, 
  CleaningFrequency,
  QuoteState 
} from '../types';
import { BUSINESS_INFO, ADD_ONS, SERVICE_AREAS_OKC } from '../data/cleaningData';

interface QuoteBuilderProps {
  initialType?: CustomerType;
  initialServiceId?: string;
}

export const QuoteBuilder: React.FC<QuoteBuilderProps> = ({ 
  initialType = 'residential',
  initialServiceId = 'standard' 
}) => {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [inquiryRef, setInquiryRef] = useState<string>('');

  const [form, setForm] = useState<QuoteState>({
    customerType: initialType,
    residentialService: (initialServiceId as ResidentialServiceType) || 'standard',
    bedrooms: 2,
    bathrooms: 2,
    squareFeetResidential: '1,500 - 2,200 sq ft',
    frequency: 'one_time',
    selectedAddOns: [],
    // Commercial
    facilityType: 'office',
    squareFeetCommercial: '1,500 - 3,500 sq ft',
    commercialFrequency: 'Weekly (1x / week)',
    preferredSchedule: 'Evening (After 5:30 PM)',
    commercialRequirements: ['Restroom sanitization', 'Trash consolidation & relining', 'Surface disinfection'],
    // Contact
    fullName: '',
    email: '',
    phone: '',
    streetAddress: '',
    city: 'Oklahoma City',
    zipCode: '73162',
    preferredDate: '',
    preferredTime: 'Morning (8:00 AM - 12:00 PM)',
    specialNotes: '',
    hasPets: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Calculate live estimate for Residential
  const pricingEstimate = useMemo(() => {
    let base = 135;
    if (form.residentialService === 'deep') base = 210;
    if (form.residentialService === 'move_in_out') base = 260;
    if (form.residentialService === 'recurring') base = 130;
    if (form.residentialService === 'apartment') base = 110;

    const bedAdd = Math.max(0, form.bedrooms - 1) * 25;
    const bathAdd = Math.max(0, form.bathrooms - 1) * 25;
    
    // Addons
    const addOnsTotal = form.selectedAddOns.reduce((sum, addOnId) => {
      const found = ADD_ONS.find(a => a.id === addOnId);
      return sum + (found ? found.price : 0);
    }, 0);

    let subtotal = base + bedAdd + bathAdd + addOnsTotal;

    // Recurring Discounts
    let discountPercent = 0;
    if (form.frequency === 'weekly') discountPercent = 0.20;
    if (form.frequency === 'bi_weekly') discountPercent = 0.15;
    if (form.frequency === 'monthly') discountPercent = 0.10;

    const discountAmount = Math.round(subtotal * discountPercent);
    const finalTotal = subtotal - discountAmount;

    return {
      subtotal,
      discountPercent,
      discountAmount,
      finalTotal,
    };
  }, [form.residentialService, form.bedrooms, form.bathrooms, form.selectedAddOns, form.frequency]);

  // ZIP Code Validation Check
  const zipValidation = useMemo(() => {
    if (!form.zipCode || form.zipCode.length < 5) return null;
    const allZips = SERVICE_AREAS_OKC.flatMap(area => area.zips);
    const isDirectCovered = allZips.includes(form.zipCode.trim());
    return {
      covered: isDirectCovered,
      message: isDirectCovered
        ? 'Direct Service Area: Confirmed within OKC Metro coverage with zero travel surcharge.'
        : 'Outside standard automated zone: Our OKC dispatch team will confirm coverage and travel feasibility upon inquiry.',
    };
  }, [form.zipCode]);

  const toggleAddOn = (id: string) => {
    setForm(prev => ({
      ...prev,
      selectedAddOns: prev.selectedAddOns.includes(id)
        ? prev.selectedAddOns.filter(item => item !== id)
        : [...prev.selectedAddOns, id]
    }));
  };

  const toggleCommercialReq = (req: string) => {
    setForm(prev => ({
      ...prev,
      commercialRequirements: prev.commercialRequirements.includes(req)
        ? prev.commercialRequirements.filter(r => r !== req)
        : [...prev.commercialRequirements, req]
    }));
  };

  const validateStep3 = () => {
    const errs: Record<string, string> = {};
    if (!form.fullName.trim()) errs.fullName = 'Full name is required.';
    if (!form.email.trim() || !form.email.includes('@')) errs.email = 'Valid email is required.';
    if (!form.phone.trim() || form.phone.length < 10) errs.phone = 'Valid 10-digit phone number is required.';
    if (!form.streetAddress.trim()) errs.streetAddress = 'Street address is required.';
    if (!form.zipCode.trim() || form.zipCode.length < 5) errs.zipCode = 'Valid 5-digit ZIP code is required.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;

    // Generate inquiry reference number
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const prefix = form.customerType === 'residential' ? 'TH-RES' : 'TH-COM';
    const refNum = `${prefix}-${randomCode}`;
    setInquiryRef(refNum);
    setSubmitted(true);
  };

  const copySummaryToClipboard = () => {
    const summaryText = `Thunder Cleaning Services OKC - Quote Inquiry Reference: ${inquiryRef}
Customer: ${form.fullName} (${form.email}, ${form.phone})
Address: ${form.streetAddress}, ${form.city}, OK ${form.zipCode}
Type: ${form.customerType.toUpperCase()}
${form.customerType === 'residential' 
  ? `Service: ${form.residentialService.toUpperCase()}
Bedrooms: ${form.bedrooms} | Bathrooms: ${form.bathrooms}
Frequency: ${form.frequency}
Add-ons: ${form.selectedAddOns.join(', ') || 'None'}
Estimated Total: $${pricingEstimate.finalTotal}`
  : `Facility: ${form.facilityType.toUpperCase()}
Approx Size: ${form.squareFeetCommercial}
Frequency: ${form.commercialFrequency}
Schedule: ${form.preferredSchedule}
Requirements: ${form.commercialRequirements.join(', ')}`
}
Preferred Timing: ${form.preferredDate || 'Earliest Available'} (${form.preferredTime})
Notes: ${form.specialNotes || 'None'}
Website Concept: S.Mideros Agency`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const resetForm = () => {
    setSubmitted(false);
    setStep(1);
    setErrors({});
  };

  return (
    <section id="quote-builder" className="py-20 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-semibold text-[#438CEB] uppercase tracking-wider">
            Intuitive Multi-Step Estimator
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101C35] font-display">
            Request Your Personalized OKC Quote
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-balance">
            Real-time residential estimates and tailored commercial facility scopes. No hidden charges or automatic billing.
          </p>
        </div>

        {/* Multi-Step Progress Tracker */}
        {!submitted && (
          <div className="mt-10 mb-8 max-w-xl mx-auto">
            <div className="flex items-center justify-between text-xs font-semibold">
              
              {/* Step 1 Indicator */}
              <div 
                className={`flex items-center gap-2 ${step >= 1 ? 'text-[#101C35]' : 'text-slate-400'}`}
              >
                <span className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${
                  step > 1 ? 'bg-emerald-600 text-white' : step === 1 ? 'bg-[#101C35] text-white' : 'bg-slate-200 text-slate-500'
                }`}>
                  {step > 1 ? <Check className="w-3.5 h-3.5" /> : '1'}
                </span>
                <span>Customer Type</span>
              </div>

              <div className={`h-0.5 w-12 sm:w-16 ${step >= 2 ? 'bg-[#101C35]' : 'bg-slate-200'}`} />

              {/* Step 2 Indicator */}
              <div 
                className={`flex items-center gap-2 ${step >= 2 ? 'text-[#101C35]' : 'text-slate-400'}`}
              >
                <span className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${
                  step > 2 ? 'bg-emerald-600 text-white' : step === 2 ? 'bg-[#101C35] text-white' : 'bg-slate-200 text-slate-500'
                }`}>
                  {step > 2 ? <Check className="w-3.5 h-3.5" /> : '2'}
                </span>
                <span>Cleaning Details</span>
              </div>

              <div className={`h-0.5 w-12 sm:w-16 ${step >= 3 ? 'bg-[#101C35]' : 'bg-slate-200'}`} />

              {/* Step 3 Indicator */}
              <div 
                className={`flex items-center gap-2 ${step >= 3 ? 'text-[#101C35]' : 'text-slate-400'}`}
              >
                <span className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${
                  step === 3 ? 'bg-[#101C35] text-white' : 'bg-slate-200 text-slate-500'
                }`}>
                  3
                </span>
                <span>Location &amp; Contact</span>
              </div>

            </div>
          </div>
        )}

        {/* Main Card Container */}
        <div className="rounded-2xl border border-slate-200/90 bg-[#F8FAFD] shadow-xl overflow-hidden">
          
          {/* Submission Success Screen */}
          {submitted ? (
            <div className="p-8 sm:p-12 text-center space-y-6">
              
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2 max-w-lg mx-auto">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block">
                  Quote Summary Generated
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#101C35] font-display">
                  Inquiry Reference: {inquiryRef}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Thank you, <strong>{form.fullName}</strong>! Your customized estimate summary has been compiled for your property at <strong>{form.streetAddress}, {form.city}, OK {form.zipCode}</strong>.
                </p>
              </div>

              {/* Itemized Estimate Review Box */}
              <div className="p-6 rounded-xl bg-white border border-slate-200/90 max-w-xl mx-auto text-left space-y-4 shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <span className="text-xs text-slate-400 uppercase font-semibold">Service Selection</span>
                    <h4 className="text-base font-bold text-[#101C35] capitalize">
                      {form.customerType === 'residential' 
                        ? `${form.residentialService.replace('_', ' ')} Cleaning` 
                        : `${form.facilityType} Commercial Care`}
                    </h4>
                  </div>
                  {form.customerType === 'residential' && (
                    <div className="text-right">
                      <span className="text-xs text-slate-400 uppercase font-semibold">Estimated Total</span>
                      <div className="text-2xl font-black text-[#101C35] font-display">
                        ${pricingEstimate.finalTotal}
                      </div>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs text-slate-600">
                  <div>
                    <span className="font-semibold text-slate-800">Timing:</span> {form.preferredDate || 'Earliest Available'}
                  </div>
                  <div>
                    <span className="font-semibold text-slate-800">Time Window:</span> {form.preferredTime}
                  </div>
                  <div>
                    <span className="font-semibold text-slate-800">Phone:</span> {form.phone}
                  </div>
                  <div>
                    <span className="font-semibold text-slate-800">Email:</span> {form.email}
                  </div>
                </div>

                {form.customerType === 'residential' && form.selectedAddOns.length > 0 && (
                  <div className="pt-2 border-t border-slate-100 text-xs">
                    <span className="font-semibold text-slate-800">Selected Add-Ons: </span>
                    <span className="text-slate-600">
                      {form.selectedAddOns.map(id => ADD_ONS.find(a => a.id === id)?.name).join(', ')}
                    </span>
                  </div>
                )}

                {form.customerType === 'commercial' && (
                  <div className="pt-2 border-t border-slate-100 text-xs space-y-1">
                    <div>
                      <span className="font-semibold text-slate-800">Facility Size: </span>
                      <span className="text-slate-600">{form.squareFeetCommercial}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-800">Schedule: </span>
                      <span className="text-slate-600">{form.preferredSchedule}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-800">Scope: </span>
                      <span className="text-slate-600">{form.commercialRequirements.join(', ')}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Demonstration Transparency Notice */}
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/80 max-w-xl mx-auto text-xs text-blue-900 text-left space-y-2">
                <div className="flex items-center gap-2 font-bold text-[#101C35]">
                  <ShieldCheck className="w-4 h-4 text-[#438CEB]" />
                  <span>Demonstration &amp; Redesign Notice</span>
                </div>
                <p>
                  This is a front-end demonstration interface created by <strong>S.Mideros Agency</strong>. In an active production integration, this form automatically synchronizes with dispatch APIs or email webhooks. You can copy this generated quote or contact Thunder Cleaning Services OKC directly using the verified links below.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={copySummaryToClipboard}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#101C35] text-white text-xs sm:text-sm font-semibold hover:bg-[#438CEB] transition-colors"
                >
                  <Copy className="w-4 h-4" />
                  <span>{copied ? 'Summary Copied to Clipboard!' : 'Copy Quote Summary'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white border border-slate-300 text-[#101C35] text-xs sm:text-sm font-semibold hover:bg-slate-50 transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Summary</span>
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 text-white text-xs sm:text-sm font-semibold hover:bg-emerald-700 transition-colors"
                >
                  <span>Call to Schedule: {BUSINESS_INFO.phone}</span>
                </a>

                <button
                  type="button"
                  onClick={resetForm}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 py-2 px-3"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Quote Another Space</span>
                </button>
              </div>

            </div>
          ) : (
            <div className="p-6 sm:p-10">
              
              {/* STEP 1: Customer Type Selection */}
              {step === 1 && (
                <div className="space-y-8 animate-in fade-in duration-200 text-left">
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#101C35] font-display">
                      Step 1: What type of property needs cleaning?
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      We separate residential and commercial requests to ensure accurate pricing and appropriate cleaning specialists.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    {/* Residential Option */}
                    <div
                      onClick={() => setForm(prev => ({ ...prev, customerType: 'residential' }))}
                      className={`cursor-pointer rounded-2xl p-6 sm:p-8 border-2 transition-all duration-200 space-y-4 ${
                        form.customerType === 'residential'
                          ? 'border-[#438CEB] bg-white shadow-md'
                          : 'border-slate-200 bg-white/70 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          form.customerType === 'residential' ? 'bg-[#101C35] text-[#438CEB]' : 'bg-slate-100 text-slate-600'
                        }`}>
                          <Home className="w-6 h-6" />
                        </div>
                        <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                          form.customerType === 'residential' ? 'border-[#438CEB] bg-[#438CEB] text-white' : 'border-slate-300'
                        }`}>
                          {form.customerType === 'residential' && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-[#101C35] font-display">
                          Residential Cleaning
                        </h4>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          For single-family homes, townhouses, lofts, and apartments. Choose standard, deep, or move-out cleans.
                        </p>
                      </div>

                      <div className="text-xs text-[#438CEB] font-semibold pt-2">
                        Instant flat-rate pricing &rarr;
                      </div>
                    </div>

                    {/* Commercial Option */}
                    <div
                      onClick={() => setForm(prev => ({ ...prev, customerType: 'commercial' }))}
                      className={`cursor-pointer rounded-2xl p-6 sm:p-8 border-2 transition-all duration-200 space-y-4 ${
                        form.customerType === 'commercial'
                          ? 'border-[#438CEB] bg-white shadow-md'
                          : 'border-slate-200 bg-white/70 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          form.customerType === 'commercial' ? 'bg-[#101C35] text-[#438CEB]' : 'bg-slate-100 text-slate-600'
                        }`}>
                          <Building2 className="w-6 h-6" />
                        </div>
                        <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                          form.customerType === 'commercial' ? 'border-[#438CEB] bg-[#438CEB] text-white' : 'border-slate-300'
                        }`}>
                          {form.customerType === 'commercial' && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-[#101C35] font-display">
                          Commercial Cleaning
                        </h4>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          For offices, medical suites, law firms, boutique retail, and community centers. Flexible after-hours shifts.
                        </p>
                      </div>

                      <div className="text-xs text-[#438CEB] font-semibold pt-2">
                        Custom facility assessment &rarr;
                      </div>
                    </div>

                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#101C35] text-white text-sm font-semibold hover:bg-[#438CEB] transition-colors shadow-sm"
                    >
                      <span>Continue to Cleaning Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Cleaning Details (Residential vs Commercial) */}
              {step === 2 && (
                <div className="space-y-8 animate-in fade-in duration-200 text-left">
                  
                  {form.customerType === 'residential' ? (
                    /* Residential Form */
                    <div className="space-y-8">
                      <div className="space-y-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#101C35] font-display">
                          Step 2: Customize Your Home Cleaning
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600">
                          Select your desired service level, bedroom and bathroom counts, and any specialized add-ons.
                        </p>
                      </div>

                      {/* Service Type Selection */}
                      <div className="space-y-3">
                        <label className="text-xs font-bold text-[#101C35] uppercase tracking-wider block">
                          Select Service Category:
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                          {[
                            { id: 'standard', name: 'Standard Clean', note: 'Everyday upkeep' },
                            { id: 'deep', name: 'Deep Clean', note: 'Baseboards & grout' },
                            { id: 'move_in_out', name: 'Move-In/Out', note: 'Empty home turn' },
                            { id: 'recurring', name: 'Recurring', note: 'Weekly/bi-weekly' },
                            { id: 'apartment', name: 'Apartment', note: 'Under 1,200 sq ft' },
                          ].map((srv) => (
                            <button
                              key={srv.id}
                              type="button"
                              onClick={() => setForm(prev => ({ ...prev, residentialService: srv.id as ResidentialServiceType }))}
                              className={`p-3 rounded-xl border text-left transition-all ${
                                form.residentialService === srv.id
                                  ? 'bg-[#101C35] text-white border-[#101C35] shadow-sm'
                                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              <div className="font-bold text-xs sm:text-sm leading-tight">{srv.name}</div>
                              <div className={`text-[10px] mt-1 ${form.residentialService === srv.id ? 'text-slate-300' : 'text-slate-400'}`}>
                                {srv.note}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Home Size: Bedrooms & Bathrooms */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-5 rounded-xl bg-white border border-slate-200">
                        {/* Bedrooms */}
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-[#101C35] uppercase tracking-wider block">
                            Bedrooms:
                          </label>
                          <div className="flex items-center gap-2">
                            {[1, 2, 3, 4, 5].map((num) => (
                              <button
                                key={num}
                                type="button"
                                onClick={() => setForm(prev => ({ ...prev, bedrooms: num }))}
                                className={`w-10 h-10 rounded-lg text-sm font-bold transition-all ${
                                  form.bedrooms === num
                                    ? 'bg-[#101C35] text-white shadow-sm'
                                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                }`}
                              >
                                {num === 5 ? '5+' : num}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Bathrooms */}
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-[#101C35] uppercase tracking-wider block">
                            Bathrooms:
                          </label>
                          <div className="flex items-center gap-2">
                            {[1, 2, 3, 4].map((num) => (
                              <button
                                key={num}
                                type="button"
                                onClick={() => setForm(prev => ({ ...prev, bathrooms: num }))}
                                className={`w-10 h-10 rounded-lg text-sm font-bold transition-all ${
                                  form.bathrooms === num
                                    ? 'bg-[#101C35] text-white shadow-sm'
                                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                }`}
                              >
                                {num === 4 ? '4+' : num}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Cleaning Frequency (With Savings Discounts) */}
                      <div className="space-y-3">
                        <label className="text-xs font-bold text-[#101C35] uppercase tracking-wider block">
                          Desired Frequency &amp; Discounts:
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {[
                            { id: 'one_time', label: 'One-Time Clean', discount: 'Regular price' },
                            { id: 'weekly', label: 'Weekly Service', discount: 'Save 20%' },
                            { id: 'bi_weekly', label: 'Bi-Weekly Service', discount: 'Save 15% (Most Popular)' },
                            { id: 'monthly', label: 'Monthly Reset', discount: 'Save 10%' },
                          ].map((freq) => (
                            <button
                              key={freq.id}
                              type="button"
                              onClick={() => setForm(prev => ({ ...prev, frequency: freq.id as CleaningFrequency }))}
                              className={`p-3 rounded-xl border text-left transition-all ${
                                form.frequency === freq.id
                                  ? 'bg-[#438CEB] text-white border-[#438CEB] shadow-sm'
                                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              <div className="font-bold text-xs leading-tight">{freq.label}</div>
                              <div className={`text-[11px] font-semibold mt-1 ${form.frequency === freq.id ? 'text-white' : 'text-emerald-600'}`}>
                                {freq.discount}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Optional Add-Ons */}
                      <div className="space-y-3">
                        <label className="text-xs font-bold text-[#101C35] uppercase tracking-wider block">
                          Optional Detailed Add-Ons:
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {ADD_ONS.map((addOn) => {
                            const isSelected = form.selectedAddOns.includes(addOn.id);
                            return (
                              <button
                                key={addOn.id}
                                type="button"
                                onClick={() => toggleAddOn(addOn.id)}
                                className={`p-3 rounded-xl border text-left flex items-start justify-between gap-2 transition-all ${
                                  isSelected
                                    ? 'bg-blue-50/80 border-[#438CEB] text-[#101C35]'
                                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                                }`}
                              >
                                <div className="space-y-0.5">
                                  <div className="text-xs font-bold">{addOn.name}</div>
                                  <div className="text-[11px] text-slate-500 leading-tight">{addOn.description}</div>
                                </div>
                                <span className="text-xs font-bold text-[#438CEB] shrink-0">
                                  +${addOn.price}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Dynamic Live Price Summary Banner */}
                      <div className="p-5 rounded-2xl bg-[#101C35] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md">
                        <div className="space-y-1">
                          <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                            Live Transparent Estimate:
                          </span>
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-extrabold font-display">${pricingEstimate.finalTotal}</span>
                            {pricingEstimate.discountAmount > 0 && (
                              <span className="text-xs text-emerald-400 line-through">
                                ${pricingEstimate.subtotal}
                              </span>
                            )}
                            <span className="text-xs text-slate-300">
                              / {form.frequency === 'one_time' ? 'clean' : 'visit'}
                            </span>
                          </div>
                          {pricingEstimate.discountAmount > 0 && (
                            <p className="text-xs text-emerald-400">
                              Includes {pricingEstimate.discountPercent * 100}% recurring member discount (Save ${pricingEstimate.discountAmount})
                            </p>
                          )}
                        </div>

                        <div className="text-xs text-slate-400 space-y-0.5 sm:text-right">
                          <div>Includes all cleaning supplies &amp; equipment</div>
                          <div>Backed by 100% Satisfaction Re-Clean Guarantee</div>
                        </div>
                      </div>

                    </div>
                  ) : (
                    /* Commercial Form */
                    <div className="space-y-8">
                      <div className="space-y-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#101C35] font-display">
                          Step 2: Facility &amp; Janitorial Specifications
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600">
                          Configure your commercial environment for an accurate proposal and operational walk-through.
                        </p>
                      </div>

                      {/* Facility Type */}
                      <div className="space-y-3">
                        <label className="text-xs font-bold text-[#101C35] uppercase tracking-wider block">
                          Type of Business / Facility:
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {[
                            { id: 'office', name: 'Corporate & Tech Office' },
                            { id: 'medical', name: 'Medical & Dental Clinic' },
                            { id: 'retail', name: 'Retail Storefront & Boutique' },
                            { id: 'education', name: 'School & Daycare Center' },
                            { id: 'fitness', name: 'Fitness, Yoga & Gym Studio' },
                            { id: 'warehouse', name: 'Warehouse / Light Industrial' },
                          ].map((fac) => (
                            <button
                              key={fac.id}
                              type="button"
                              onClick={() => setForm(prev => ({ ...prev, facilityType: fac.id as CommercialFacilityType }))}
                              className={`p-3 rounded-xl border text-left transition-all ${
                                form.facilityType === fac.id
                                  ? 'bg-[#101C35] text-white border-[#101C35] shadow-sm'
                                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              <div className="font-bold text-xs leading-tight">{fac.name}</div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Approximate Square Footage */}
                      <div className="space-y-3">
                        <label className="text-xs font-bold text-[#101C35] uppercase tracking-wider block">
                          Approximate Square Footage:
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {[
                            'Under 1,500 sq ft',
                            '1,500 - 3,500 sq ft',
                            '3,500 - 7,000 sq ft',
                            '7,000+ sq ft',
                          ].map((sqft) => (
                            <button
                              key={sqft}
                              type="button"
                              onClick={() => setForm(prev => ({ ...prev, squareFeetCommercial: sqft }))}
                              className={`p-3 rounded-xl border text-center text-xs font-bold transition-all ${
                                form.squareFeetCommercial === sqft
                                  ? 'bg-[#438CEB] text-white border-[#438CEB] shadow-sm'
                                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              {sqft}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Preferred Cleaning Frequency */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-[#101C35] uppercase tracking-wider block">
                            Cleaning Frequency:
                          </label>
                          <select
                            value={form.commercialFrequency}
                            onChange={(e) => setForm(prev => ({ ...prev, commercialFrequency: e.target.value }))}
                            className="w-full p-3 rounded-xl border border-slate-300 bg-white text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#438CEB]"
                          >
                            <option value="Daily (5x / week)">Daily (5x / week - Mon to Fri)</option>
                            <option value="3x / week">3x / week (e.g. Mon, Wed, Fri)</option>
                            <option value="Weekly (1x / week)">Weekly (1x / week)</option>
                            <option value="Bi-Weekly (2x / month)">Bi-Weekly (2x / month)</option>
                            <option value="One-Time Deep Commercial Reset">One-Time Deep Commercial Reset</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-bold text-[#101C35] uppercase tracking-wider block">
                            Preferred Schedule Window:
                          </label>
                          <select
                            value={form.preferredSchedule}
                            onChange={(e) => setForm(prev => ({ ...prev, preferredSchedule: e.target.value }))}
                            className="w-full p-3 rounded-xl border border-slate-300 bg-white text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#438CEB]"
                          >
                            <option value="Evening (After 5:30 PM)">Evening (After 5:30 PM - After Hours)</option>
                            <option value="Early Morning (Before 8:00 AM)">Early Morning (Before 8:00 AM)</option>
                            <option value="Daytime Porter Shift">Daytime Porter (During Business Hours)</option>
                            <option value="Weekend Cleaning">Weekend Only (Saturday / Sunday)</option>
                          </select>
                        </div>
                      </div>

                      {/* Required Scope Checklist */}
                      <div className="space-y-3">
                        <label className="text-xs font-bold text-[#101C35] uppercase tracking-wider block">
                          Key Janitorial Priorities:
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {[
                            'Restroom sanitization',
                            'Trash consolidation & relining',
                            'Surface disinfection',
                            'Breakroom & microwave deep clean',
                            'Conference room glass & table polish',
                            'Carpet vacuuming & hard floor buffing',
                          ].map((req) => {
                            const isChecked = form.commercialRequirements.includes(req);
                            return (
                              <button
                                key={req}
                                type="button"
                                onClick={() => toggleCommercialReq(req)}
                                className={`p-2.5 rounded-lg border text-left text-xs font-medium flex items-center gap-2 transition-all ${
                                  isChecked
                                    ? 'bg-blue-50 border-[#438CEB] text-[#101C35]'
                                    : 'bg-white border-slate-200 text-slate-600'
                                }`}
                              >
                                <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                                  isChecked ? 'bg-[#438CEB] border-[#438CEB] text-white' : 'border-slate-300'
                                }`}>
                                  {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                                </div>
                                <span>{req}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                    </div>
                  )}

                  {/* Step 2 Actions */}
                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-100 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#101C35] text-white text-sm font-semibold hover:bg-[#438CEB] transition-colors shadow-sm"
                    >
                      <span>Continue to Contact &amp; Location</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              )}

              {/* STEP 3: Contact & Location */}
              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in duration-200 text-left">
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#101C35] font-display">
                      Step 3: Where &amp; when should we clean?
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Enter your Oklahoma City location and contact info to review your estimate and coordinate dispatch.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.fullName}
                        onChange={(e) => setForm(prev => ({ ...prev, fullName: e.target.value }))}
                        placeholder="e.g. Rachel Miller"
                        className="w-full p-3 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#438CEB]"
                      />
                      {errors.fullName && <p className="text-[11px] text-red-600">{errors.fullName}</p>}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="rachel@example.com"
                        className="w-full p-3 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#438CEB]"
                      />
                      {errors.email && <p className="text-[11px] text-red-600">{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="(405) 555-0199"
                        className="w-full p-3 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#438CEB]"
                      />
                      {errors.phone && <p className="text-[11px] text-red-600">{errors.phone}</p>}
                    </div>

                    {/* City */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800">
                        City / Metro Area <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={form.city}
                        onChange={(e) => setForm(prev => ({ ...prev, city: e.target.value }))}
                        className="w-full p-3 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#438CEB]"
                      >
                        <option value="Oklahoma City">Oklahoma City</option>
                        <option value="Edmond">Edmond</option>
                        <option value="Moore">Moore</option>
                        <option value="Norman">Norman</option>
                        <option value="Yukon">Yukon</option>
                        <option value="Mustang">Mustang</option>
                        <option value="Nichols Hills">Nichols Hills</option>
                        <option value="The Village">The Village</option>
                        <option value="Midwest City">Midwest City</option>
                        <option value="Del City">Del City</option>
                        <option value="Bethany">Bethany</option>
                      </select>
                    </div>

                    {/* Street Address */}
                    <div className="space-y-1.5 sm:col-span-2">
                      <label className="text-xs font-bold text-slate-800">
                        Street Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.streetAddress}
                        onChange={(e) => setForm(prev => ({ ...prev, streetAddress: e.target.value }))}
                        placeholder="1234 N Robinson Ave, Apt / Suite 4B"
                        className="w-full p-3 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#438CEB]"
                      />
                      {errors.streetAddress && <p className="text-[11px] text-red-600">{errors.streetAddress}</p>}
                    </div>

                    {/* ZIP Code */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800">
                        ZIP Code <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        maxLength={5}
                        value={form.zipCode}
                        onChange={(e) => setForm(prev => ({ ...prev, zipCode: e.target.value }))}
                        placeholder="73162"
                        className="w-full p-3 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#438CEB]"
                      />
                      {errors.zipCode && <p className="text-[11px] text-red-600">{errors.zipCode}</p>}
                      {zipValidation && (
                        <p className={`text-[11px] ${zipValidation.covered ? 'text-emerald-700' : 'text-amber-700'}`}>
                          {zipValidation.message}
                        </p>
                      )}
                    </div>

                    {/* Preferred Date */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800">
                        Preferred Date (Optional)
                      </label>
                      <input
                        type="date"
                        value={form.preferredDate}
                        onChange={(e) => setForm(prev => ({ ...prev, preferredDate: e.target.value }))}
                        className="w-full p-3 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#438CEB]"
                      />
                    </div>

                    {/* Preferred Time Window */}
                    <div className="space-y-1.5 sm:col-span-2">
                      <label className="text-xs font-bold text-slate-800">
                        Preferred Arrival Window
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {[
                          'Morning (8:00 AM - 12:00 PM)',
                          'Afternoon (12:00 PM - 4:00 PM)',
                          'Flexible / First Available',
                        ].map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setForm(prev => ({ ...prev, preferredTime: time }))}
                            className={`p-2.5 rounded-lg border text-xs font-medium transition-all ${
                              form.preferredTime === time
                                ? 'bg-[#101C35] text-white border-[#101C35]'
                                : 'bg-white text-slate-700 border-slate-200'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Special Notes */}
                    <div className="space-y-1.5 sm:col-span-2">
                      <label className="text-xs font-bold text-slate-800">
                        Special Instructions or Focus Areas (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={form.specialNotes}
                        onChange={(e) => setForm(prev => ({ ...prev, specialNotes: e.target.value }))}
                        placeholder="Mention pets, gate codes, parking instructions, or delicate surfaces..."
                        className="w-full p-3 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#438CEB]"
                      />
                    </div>

                  </div>

                  {/* Trust assurance banner before submit */}
                  <div className="p-4 rounded-xl bg-slate-100/90 text-xs text-slate-600 flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#438CEB] shrink-0 mt-0.5" />
                    <span>
                      <strong>Transparent Coordination:</strong> Submitting this request generates your formal quote estimate and connects you with our OKC operations desk. No payments are charged now.
                    </span>
                  </div>

                  {/* Step 3 Actions */}
                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-100 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#101C35] text-white text-sm font-semibold hover:bg-[#438CEB] transition-colors shadow-md"
                    >
                      <span>Review &amp; Generate Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </form>
              )}

            </div>
          )}

        </div>

      </div>
    </section>
  );
};

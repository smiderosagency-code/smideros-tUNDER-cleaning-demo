import React, { useState } from 'react';
import { MapPin, Search, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import { SERVICE_AREAS_OKC, BUSINESS_INFO } from '../data/cleaningData';

interface ServiceAreasProps {
  onOpenQuote: () => void;
}

export const ServiceAreas: React.FC<ServiceAreasProps> = ({ onOpenQuote }) => {
  const [zipInput, setZipInput] = useState('');
  const [searchResult, setSearchResult] = useState<{
    status: 'idle' | 'covered' | 'unconfirmed';
    city?: string;
    message?: string;
  }>({ status: 'idle' });

  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanZip = zipInput.trim();
    if (cleanZip.length < 5) return;

    const matchedArea = SERVICE_AREAS_OKC.find(area => area.zips.includes(cleanZip));
    if (matchedArea) {
      setSearchResult({
        status: 'covered',
        city: matchedArea.city,
        message: `Excellent news! ZIP ${cleanZip} (${matchedArea.city}) is in our primary daily service route. Zero travel fees apply.`,
      });
    } else {
      setSearchResult({
        status: 'unconfirmed',
        message: `ZIP ${cleanZip} is outside our daily automated routes. Our Oklahoma dispatch desk confirms coverage on a case-by-case basis.`,
      });
    }
  };

  return (
    <section id="areas" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="text-xs font-semibold text-[#438CEB] uppercase tracking-wider">
            Local Coverage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101C35] font-display">
            Proudly Serving Greater Oklahoma City
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-balance">
            Based at <strong>{BUSINESS_INFO.address}</strong>, our teams serve residential neighborhoods and commercial districts across the OKC metro.
          </p>
        </div>

        {/* Real ZIP Code Checker Tool */}
        <div className="mt-10 max-w-xl mx-auto">
          <form onSubmit={handleZipCheck} className="p-4 rounded-2xl bg-[#F8FAFD] border border-slate-200 shadow-sm space-y-3">
            <div className="text-xs font-bold text-[#101C35] uppercase tracking-wider text-left">
              Check Your ZIP Code Coverage:
            </div>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  maxLength={5}
                  value={zipInput}
                  onChange={(e) => {
                    setZipInput(e.target.value);
                    if (searchResult.status !== 'idle') setSearchResult({ status: 'idle' });
                  }}
                  placeholder="Enter 5-digit ZIP code (e.g. 73162, 73013, 73069)"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#438CEB]"
                />
              </div>
              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-[#101C35] text-white text-xs sm:text-sm font-semibold hover:bg-[#438CEB] transition-colors shrink-0 flex items-center gap-1.5"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Verify</span>
              </button>
            </div>

            {/* Validation Feedback */}
            {searchResult.status === 'covered' && (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 text-left flex items-start gap-2 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-semibold">{searchResult.message}</p>
                  <button
                    type="button"
                    onClick={onOpenQuote}
                    className="text-emerald-700 font-bold underline hover:text-emerald-900 inline-block"
                  >
                    Proceed to Quote for {searchResult.city} &rarr;
                  </button>
                </div>
              </div>
            )}

            {searchResult.status === 'unconfirmed' && (
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800 text-left flex items-start gap-2 animate-in fade-in">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">{searchResult.message}</p>
                  <p className="mt-1 text-slate-600">
                    Submit an inquiry or call our office at <strong>{BUSINESS_INFO.phone}</strong> to confirm technician availability for your location.
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Confirmed Cities Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {SERVICE_AREAS_OKC.map((area) => (
            <div
              key={area.city}
              className="p-4 rounded-xl bg-[#F8FAFD] border border-slate-200/80 space-y-1 text-left hover:border-[#438CEB]/40 transition-colors"
            >
              <div className="flex items-center gap-1.5 text-[#101C35]">
                <MapPin className="w-4 h-4 text-[#438CEB] shrink-0" />
                <h3 className="font-bold text-sm font-display">{area.city}</h3>
              </div>
              <div className="text-[11px] text-slate-500">
                {area.status} · {area.time}
              </div>
              <div className="text-[10px] text-slate-400 truncate">
                ZIPs: {area.zips.slice(0, 4).join(', ')}{area.zips.length > 4 ? '...' : ''}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Check, Minus, Sparkles, Filter } from 'lucide-react';
import { CHECKLIST_MATRIX } from '../data/cleaningData';
import { ResidentialServiceType } from '../types';

interface ChecklistMatrixProps {
  onSelectServiceType: (type: ResidentialServiceType) => void;
}

export const ChecklistMatrix: React.FC<ChecklistMatrixProps> = ({ onSelectServiceType }) => {
  const [activeArea, setActiveArea] = useState<string>('All');

  const areas = ['All', 'Kitchen', 'Bathrooms', 'Living & Bedrooms'];

  const filteredItems = activeArea === 'All' 
    ? CHECKLIST_MATRIX 
    : CHECKLIST_MATRIX.filter(item => item.area === activeArea);

  return (
    <section id="checklist" className="py-20 bg-[#F8FAFD] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="text-xs font-semibold text-[#438CEB] uppercase tracking-wider">
            Total Transparency
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101C35] font-display">
            The Thunder Cleaning Checklist Matrix
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-balance">
            Compare our service tiers side by side so you know exactly what tasks will be completed before our team arrives.
          </p>

          {/* Area Filter Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-xl bg-slate-200/70 max-w-md mx-auto">
            {areas.map((area) => (
              <button
                key={area}
                type="button"
                onClick={() => setActiveArea(area)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeArea === area
                    ? 'bg-white text-[#101C35] shadow-sm'
                    : 'text-slate-600 hover:text-[#101C35]'
                }`}
              >
                {area}
              </button>
            ))}
          </div>
        </div>

        {/* Matrix Table */}
        <div className="mt-10 overflow-x-auto rounded-2xl bg-white border border-slate-200 shadow-sm">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80 text-xs font-bold text-[#101C35] uppercase tracking-wider">
                <th className="py-4 px-6 w-2/5">Task &amp; Cleaning Area</th>
                <th className="py-4 px-4 text-center w-1/5">
                  <div className="flex flex-col items-center gap-1">
                    <span>Standard Clean</span>
                    <button
                      type="button"
                      onClick={() => onSelectServiceType('standard')}
                      className="text-[10px] font-semibold text-[#438CEB] hover:underline uppercase"
                    >
                      Select
                    </button>
                  </div>
                </th>
                <th className="py-4 px-4 text-center w-1/5 bg-blue-50/50">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[#438CEB] flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Deep Clean</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => onSelectServiceType('deep')}
                      className="text-[10px] font-semibold text-[#438CEB] hover:underline uppercase"
                    >
                      Select
                    </button>
                  </div>
                </th>
                <th className="py-4 px-4 text-center w-1/5">
                  <div className="flex flex-col items-center gap-1">
                    <span>Move-In / Out</span>
                    <button
                      type="button"
                      onClick={() => onSelectServiceType('move_in_out')}
                      className="text-[10px] font-semibold text-[#438CEB] hover:underline uppercase"
                    >
                      Select
                    </button>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {filteredItems.map((item, index) => (
                <tr key={index} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-6">
                    <div className="flex flex-col">
                      <span className="font-medium text-slate-800 text-xs sm:text-sm">{item.task}</span>
                      <span className="text-[10px] text-slate-500 uppercase tracking-wide">{item.area}</span>
                    </div>
                  </td>
                  
                  {/* Standard Clean */}
                  <td className="py-3.5 px-4 text-center">
                    {item.standard ? (
                      <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-50 text-emerald-600">
                        <Check className="w-4 h-4 stroke-[2.5]" />
                      </div>
                    ) : (
                      <Minus className="w-4 h-4 text-slate-300 mx-auto" />
                    )}
                  </td>

                  {/* Deep Clean */}
                  <td className="py-3.5 px-4 text-center bg-blue-50/30">
                    {item.deep ? (
                      <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#438CEB]/15 text-[#438CEB]">
                        <Check className="w-4 h-4 stroke-[2.5]" />
                      </div>
                    ) : (
                      <Minus className="w-4 h-4 text-slate-300 mx-auto" />
                    )}
                  </td>

                  {/* Move In/Out Clean */}
                  <td className="py-3.5 px-4 text-center">
                    {item.moveInOut ? (
                      <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-50 text-emerald-600">
                        <Check className="w-4 h-4 stroke-[2.5]" />
                      </div>
                    ) : (
                      <Minus className="w-4 h-4 text-slate-300 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Note on Customization */}
        <div className="mt-6 text-center text-xs text-slate-500">
          Need custom extras like inside oven, refrigerator, or interior windows? You can select any add-on during the quote calculation.
        </div>

      </div>
    </section>
  );
};

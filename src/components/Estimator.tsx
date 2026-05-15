import React, { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';

export const Estimator: React.FC = () => {
  const [propertySize, setPropertySize] = useState<'small' | 'medium' | 'large' | 'estate'>('medium');
  const [serviceType, setServiceType] = useState<'maintenance' | 'tropical' | 'hardscape' | 'irrigation'>('tropical');
  const [frequency, setFrequency] = useState<'weekly' | 'biweekly' | 'one-time'>('weekly');

  const pricingMap = {
    maintenance: { small: 140, medium: 195, large: 285, estate: 450 },
    tropical: { small: 850, medium: 1600, large: 3200, estate: 6500 },
    hardscape: { small: 1800, medium: 3500, large: 7500, estate: 14000 },
    irrigation: { small: 350, medium: 650, large: 1200, estate: 2200 },
  };

  const basePrice = pricingMap[serviceType][propertySize];
  const multiplier = frequency === 'weekly' ? 1 : frequency === 'biweekly' ? 0.75 : 1.2;
  const estimatedTotal = Math.round(basePrice * multiplier);

  const handleWhatsAppQuote = () => {
    const text = `Hi Core Landscaping, I used your quick online estimator for my Miami property. Size: ${propertySize}, Service: ${serviceType}, Frequency: ${frequency}. Estimated total: $${estimatedTotal}. Do you have availability for an on-site consultation?`;
    const url = `https://wa.me/447946123123?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 rounded-3xl overflow-hidden shadow-2xl p-8 lg:p-12 relative text-white">
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Info */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold tracking-wide uppercase mb-4 border border-emerald-500/30">
                <Calculator className="w-3.5 h-3.5" />
                <span>Instant Project Estimator</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-4 leading-tight">
                Calculate Your Miami Property Estimate
              </h2>
              <p className="text-slate-300 text-base mb-6 leading-relaxed">
                Select your property size and desired landscaping scope. Get an instant preliminary estimate and schedule your on-site walkthrough with one tap.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">✓</div>
                  <span>Transparent, fair South Florida pricing</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">✓</div>
                  <span>Customized for hurricane & salt tolerance</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">✓</div>
                  <span>100% Guaranteed Satisfaction</span>
                </div>
              </div>
            </div>

            {/* Right Estimator Controls */}
            <div className="lg:col-span-7 bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-xl">
              
              {/* Step 1: Property Size */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  1. Property Size
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: 'small', label: 'Small / Patio', desc: '< 1/4 Acre' },
                    { id: 'medium', label: 'Medium Villa', desc: '1/4 - 1/2 Acre' },
                    { id: 'large', label: 'Large Estate', desc: '1/2 - 1 Acre' },
                    { id: 'estate', label: 'Luxury Compound', desc: '1+ Acres' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setPropertySize(item.id as any)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        propertySize === item.id
                          ? 'border-emerald-600 bg-emerald-50/50 shadow-sm ring-1 ring-emerald-600'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="font-bold text-sm text-slate-900">{item.label}</div>
                      <div className="text-[11px] text-slate-500">{item.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Service Type */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  2. Landscaping Scope
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { id: 'tropical', label: '🌴 Tropical Palm & Garden Redesign' },
                    { id: 'maintenance', label: '🌱 Premium Lawn Care & Edging' },
                    { id: 'hardscape', label: '🪨 Hardscaping & Outdoor Living' },
                    { id: 'irrigation', label: '💧 Smart Irrigation & Drainage' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setServiceType(item.id as any)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        serviceType === item.id
                          ? 'border-emerald-600 bg-emerald-50/50 shadow-sm ring-1 ring-emerald-600 font-bold'
                          : 'border-slate-200 hover:border-slate-300 bg-white font-medium text-slate-700'
                      }`}
                    >
                      <span className="text-sm">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Frequency */}
              <div className="mb-8">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  3. Service Frequency
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: 'weekly', label: 'Weekly' },
                    { id: 'biweekly', label: 'Bi-Weekly' },
                    { id: 'one-time', label: 'One-Time Project' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setFrequency(item.id as any)}
                      className={`py-2 px-3 rounded-xl border text-center transition-all text-xs font-bold ${
                        frequency === item.id
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'border-slate-200 text-slate-600 hover:border-slate-300 bg-slate-50'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Output Estimate & CTA */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Estimated Cost</div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading font-extrabold text-3xl text-slate-900">${estimatedTotal}</span>
                    <span className="text-xs text-slate-500 font-medium">
                      {frequency === 'one-time' ? 'total estimate' : `/ ${frequency}`}
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Subject to on-site property evaluation</div>
                </div>

                <button
                  onClick={handleWhatsAppQuote}
                  className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba5c] text-white font-bold text-sm py-3 px-6 rounded-xl transition-all shadow-lg shadow-[#25D366]/20 flex items-center justify-center gap-2 group"
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                    alt="WhatsApp" 
                    className="w-4 h-4 object-contain" 
                  />
                  <span>Send Estimate via WhatsApp</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

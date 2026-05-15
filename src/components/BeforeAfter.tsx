import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

export const BeforeAfter: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 to 100

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section id="transformations" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Image Slider</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6">
            Witness the <span className="text-emerald-400">Core Transformation</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
            Drag the slider below to compare the overgrown, weathered lawn before Core Care against the stunning tropical resort after our expert redesign.
          </p>
          <div className="flex items-center justify-center gap-6 text-xs font-bold uppercase tracking-wider text-slate-400">
            <span className="flex items-center gap-1 text-amber-400">
              <span className="w-2 h-2 rounded-full bg-amber-500" /> Before
            </span>
            <span>← Slide to compare →</span>
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500" /> After
            </span>
          </div>
        </div>

        {/* Transformation Showcase */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-800/80 backdrop-blur-md rounded-3xl p-4 sm:p-8 border border-slate-700/80 shadow-2xl relative">
            
            {/* Image Frame Container */}
            <div className="relative aspect-[16/10] sm:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700 bg-slate-950 select-none">
              
              {/* AFTER Layer (Clipped to the right of sliderPosition) */}
              <div 
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
              >
                <img
                  src="https://images.unsplash.com/photo-1558293842-c0fd3db86157?auto=format&fit=crop&w=1200&q=80"
                  alt="After Landscaping"
                  className="absolute inset-0 w-full h-full object-cover filter saturate-110 pointer-events-none"
                />
                <div className="absolute top-4 right-4 bg-emerald-500 text-slate-950 font-extrabold text-xs px-3 py-1.5 rounded-lg shadow-md uppercase tracking-wider flex items-center gap-1 z-10 whitespace-nowrap">
                  <Sparkles className="w-3.5 h-3.5 fill-current" />
                  <span>After Core Care</span>
                </div>
                <div className="absolute bottom-4 right-4 bg-slate-900/90 backdrop-blur-sm p-3 rounded-xl text-emerald-300 text-xs border border-slate-700 max-w-xs z-10 hidden sm:block">
                  ✅ <strong>Installed:</strong> Zoysia sod, smart drip irrigation, stone pavers & royal palms.
                </div>
              </div>

              {/* BEFORE Layer (Clipped to the left of sliderPosition) */}
              <div 
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
              >
                <img
                  src="https://images.unsplash.com/photo-1557429287-b2e26467fc2b?auto=format&fit=crop&w=1200&q=80"
                  alt="Before Landscaping"
                  className="absolute inset-0 w-full h-full object-cover filter saturate-50 contrast-125 pointer-events-none"
                />
                <div className="absolute top-4 left-4 bg-amber-500 text-slate-950 font-extrabold text-xs px-3 py-1.5 rounded-lg shadow-md uppercase tracking-wider z-10 whitespace-nowrap">
                  Before Core Care
                </div>
                <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-sm p-3 rounded-xl text-slate-300 text-xs border border-slate-700 max-w-xs z-10 hidden sm:block">
                  ⚠️ <strong>Issues:</strong> Uneven patch turf, nutrient depletion & unpruned palms.
                </div>
              </div>

              {/* Slider Handle Divider Line */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.8)] z-20 pointer-events-none transform -translate-x-1/2"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-slate-900 shadow-xl border-2 border-slate-900 flex items-center justify-center font-bold text-xs">
                  <svg className="w-5 h-5 text-slate-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M8 18L2 12L8 6M16 6L22 12L16 18" />
                  </svg>
                </div>
              </div>

              {/* Range Input for dragging */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                aria-label="Drag to compare before and after landscaping"
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              />

            </div>

            {/* Slider Instructions for mobile */}
            <div className="text-center mt-6 text-xs text-slate-400 block sm:hidden">
              💡 Touch and drag left or right across the image to see the comparison.
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

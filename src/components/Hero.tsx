import React from 'react';
import { ShieldCheck, Star, MapPin, ArrowRight } from 'lucide-react';

interface HeroProps {
  onWhatsAppClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onWhatsAppClick }) => {
  return (
    <section className="relative pt-28 lg:pt-36 pb-20 lg:pb-32 overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -mr-32" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-teal-500/5 rounded-full blur-3xl pointer-events-none -ml-32" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold tracking-wide uppercase mb-6 shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              <span>Miami's Premium Tropical & Modern Landscaping Experts</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.1] mb-6">
              Transforming Miami Properties into <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Tropical Masterpieces</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed font-normal">
              Bespoke landscape design, pristine lawn maintenance, luxury hardscaping, and smart irrigation tailored perfectly to South Florida’s vibrant climate.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12">
              <a
                href="#contact"
                className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-base shadow-lg shadow-emerald-600/25 transition-all text-center flex items-center justify-center gap-2 group"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onWhatsAppClick}
                className="px-8 py-4 bg-[#25D366] hover:bg-[#20ba5c] text-white rounded-xl font-bold text-base shadow-lg shadow-[#25D366]/20 transition-all flex items-center justify-center gap-3"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                  alt="WhatsApp" 
                  className="w-5 h-5 object-contain" 
                />
                <span>WhatsApp Inquiry</span>
              </button>
            </div>

            {/* Trust Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-200 w-full">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 font-bold">
                  15+
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Years Exp.</div>
                  <div className="text-xs text-slate-500">In South Florida</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">250+ Reviews</div>
                  <div className="text-xs text-slate-500">5-Star Rating</div>
                </div>
              </div>

              <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">100% Insured</div>
                  <div className="text-xs text-slate-500">Licensed & Bonded</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Image / Graphic Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1558293842-c0fd3db86157?auto=format&fit=crop&w=1200&q=80"
                  alt="Luxury Miami Landscaping and Garden Patio"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                
                {/* Floating caption */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-0.5">Featured Project</span>
                      <span className="font-bold text-slate-900 text-sm">Star Island Luxury Estate</span>
                    </div>
                    <span className="bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2.5 py-1 rounded-md">Completed</span>
                  </div>
                </div>
              </div>

              {/* Overlapping Secondary Image */}
              <div className="absolute -bottom-8 -left-8 w-1/2 aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1557429287-b2e26467fc2b?auto=format&fit=crop&w=600&q=80"
                  alt="Pristine Miami Lawn Care"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Satisfied Client Badge */}
              <div className="absolute -top-6 right-0 sm:-right-6 bg-white py-3 px-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce duration-1000">
                <div className="flex -space-x-2">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Client" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Client" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&q=80" alt="Client" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <div className="text-[11px] font-bold text-slate-700">Top-Rated Miami Service</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

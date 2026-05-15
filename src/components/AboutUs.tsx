import React from 'react';
import { Award, Users, ShieldCheck, HeartHandshake } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5 text-emerald-600" />
              <span>Building Miami Trust Since 2011</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-6">
              Rooted in Miami. Dedicated to <span className="text-emerald-600">Horticultural Excellence.</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              Core Landscaping began with a simple mission: to elevate South Florida outdoor living spaces with uncompromising attention to detail, agronomic science, and stellar customer service. We don't just mow grass; we cultivate luxury resort atmospheres.
            </p>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 font-normal">
              Our crew comprises licensed horticulturists, certified irrigation technicians, and experienced hardscape artisans who understand the unique challenges of Miami’s intense heat, salt air, and summer storm seasons.
            </p>

            {/* Trust Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-200">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white text-emerald-600 flex items-center justify-center flex-shrink-0 shadow-md border border-slate-100">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">Licensed & Fully Insured</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    $2M general liability insurance. We protect your property investment every step of the way.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white text-teal-600 flex items-center justify-center flex-shrink-0 shadow-md border border-slate-100">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">Vetted Expert Crew</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Background-checked, uniform-wearing professionals committed to absolute punctuality.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white text-amber-600 flex items-center justify-center flex-shrink-0 shadow-md border border-slate-100">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">Certified Horticulturists</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Deep expertise in native South Florida soil chemistry, palm biology, and turf management.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white text-blue-600 flex items-center justify-center flex-shrink-0 shadow-md border border-slate-100">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">100% Satisfaction Guarantee</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    We do not rest until your outdoor living space perfectly reflects your highest vision.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Imagery Column - Replaced with confirmed luxury tropical landscaping estate photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-slate-200">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                alt="Core Landscaping Expert Crew in Miami"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-extrabold text-xl shadow-md">
                    15
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Years of Miami Excellence</h4>
                    <p className="text-slate-500 text-xs">Serving residential & luxury commercial clients.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

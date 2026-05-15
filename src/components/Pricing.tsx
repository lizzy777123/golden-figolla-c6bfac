import React from 'react';
import { Check, Star } from 'lucide-react';

interface PricingProps {
  onWhatsAppClick: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onWhatsAppClick }) => {
  const packages = [
    {
      name: 'Starter Lawn Care',
      price: '$140',
      period: 'per week',
      desc: 'Perfect for standard Miami residential lots needing reliable, pristine weekly upkeep.',
      features: [
        'Weekly precision mowing & edging',
        'Line trimming around trees & fences',
        'Hard surface debris blowing',
        'Weed control spot treatment',
        'Monthly irrigation head inspection',
      ],
      popular: false,
    },
    {
      name: 'Premium Estate Care',
      price: '$285',
      period: 'per week',
      desc: 'Our most popular comprehensive plan for medium to large South Florida villas.',
      features: [
        'Everything in Starter Lawn Care',
        'Bi-weekly hedge & shrub shaping',
        'Palm frond trimming (up to 15 ft)',
        'Bi-monthly organic fertilization',
        'Seasonal mulch & soil turning',
        'Priority hurricane storm cleanup prep',
      ],
      popular: true,
    },
    {
      name: 'Elite Oasis Concierge',
      price: '$550',
      period: 'per week',
      desc: 'VIP full-groundskeeping service for luxury waterfront estates & compounds.',
      features: [
        'Everything in Premium Estate Care',
        'Dedicated master horticulturist',
        'Unlimited palm trimming & canopy care',
        'Complete smart irrigation management',
        'Architectural lighting maintenance',
        'Same-day emergency response',
        'Complimentary seasonal color rotation',
      ],
      popular: false,
    },
  ];

  return (
    <section id="packages" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 text-emerald-600 fill-current" />
            <span>Transparent Pricing</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-6">
            Miami Groundskeeping & <span className="text-emerald-600">Maintenance Plans</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            No hidden fees, no unreliable contractors. Just meticulous, scheduled care that keeps your South Florida property immaculate year-round.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 lg:p-10 flex flex-col justify-between transition-all duration-300 relative bg-white ${
                pkg.popular
                  ? 'border-2 border-emerald-600 shadow-2xl shadow-emerald-600/10 scale-100 lg:scale-105 z-10'
                  : 'border border-slate-200 shadow-lg shadow-slate-200/50'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white font-extrabold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="font-heading font-bold text-2xl text-slate-900 mb-2">
                  {pkg.name}
                </h3>
                <p className="text-slate-600 text-sm mb-6 min-h-[40px]">
                  {pkg.desc}
                </p>

                <div className="flex items-baseline gap-1 mb-8 pb-8 border-b border-slate-100">
                  <span className="font-heading font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight">
                    {pkg.price}
                  </span>
                  <span className="text-slate-500 font-medium text-sm">
                    {pkg.period}
                  </span>
                </div>

                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        pkg.popular ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-600'
                      }`}>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-slate-700 text-sm font-medium leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onWhatsAppClick}
                className={`w-full py-4 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 ${
                  pkg.popular
                    ? 'bg-[#25D366] hover:bg-[#20ba5c] text-white shadow-[#25D366]/20'
                    : 'bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/20'
                }`}
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                  alt="WhatsApp" 
                  className="w-4 h-4 object-contain" 
                />
                <span>Inquire via WhatsApp</span>
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

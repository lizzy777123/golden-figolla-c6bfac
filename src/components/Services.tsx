import React from 'react';
import { Palmtree, Shovel, Droplets, Sun, Wind, Sparkles } from 'lucide-react';

export const Services: React.FC = () => {
  const servicesList = [
    {
      icon: Palmtree,
      title: 'Tropical Palm & Garden Design',
      desc: 'Expert selection and installation of Royal Palms, Areca, Bismarck, and native tropical flora perfectly adapted to South Florida’s heat and humidity.',
      badge: 'Most Popular',
    },
    {
      icon: Shovel,
      title: 'Luxury Hardscaping & Patios',
      desc: 'Bespoke travertine pavers, pool coping, custom pergolas, outdoor kitchens, and modern stone pathways that elevate your outdoor living space.',
      badge: 'Premium',
    },
    {
      icon: Sparkles,
      title: 'Pristine Lawn Care & Sodding',
      desc: 'Flawless St. Augustine and Zoysia turf management. Includes precise mowing, deep edging, core aeration, and custom organic fertilization.',
      badge: 'Weekly Care',
    },
    {
      icon: Droplets,
      title: 'Smart Irrigation & Drainage',
      desc: 'Automated weather-sensing drip systems, sprinkler head calibration, and French drainage to prevent pooling during heavy Miami summer rainstorms.',
      badge: 'Eco-Smart',
    },
    {
      icon: Sun,
      title: 'Architectural Lighting',
      desc: 'Low-voltage LED landscape lighting that illuminates architectural features, palm canopies, and pathways for dramatic nighttime curb appeal.',
      badge: 'Aesthetic',
    },
    {
      icon: Wind,
      title: 'Hurricane Prep & Tree Pruning',
      desc: 'Strategic palm frond thinning and structural pruning to protect your property during hurricane season while maintaining lush tree canopies.',
      badge: 'Safety First',
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Miami's Comprehensive Landscaping Scope</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-6">
            Elite Outdoor Services Designed for <span className="text-emerald-600">South Florida Living</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            From modern luxury estate redesigns in Star Island to dependable weekly groundskeeping in Coral Gables, we bring unmatched precision to every inch of your soil.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-sm font-bold text-emerald-600 hover:text-emerald-700 group-hover:underline"
                >
                  <span>Request Service Scope</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

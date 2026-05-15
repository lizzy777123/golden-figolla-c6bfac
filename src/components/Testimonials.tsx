import React from 'react';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Alejandro Gomez',
      location: 'Key Biscayne',
      quote: 'Core Landscaping completely transformed our backyard before our summer party. The new travertine deck and royal palms make it feel like a 5-star resort in South Beach. Absolute professionals!',
      stars: 5,
      date: '2 weeks ago',
    },
    {
      name: 'Samantha & David Vance',
      location: 'Coral Gables',
      quote: 'Finding a reliable landscaping company in Miami was tough until we met Core. Their weekly lawn maintenance is flawless, and they fixed our irrigation system so no more flooded grass during afternoon rain.',
      stars: 5,
      date: '1 month ago',
    },
    {
      name: 'Marcus Sterling',
      location: 'Star Island, Miami Beach',
      quote: 'We hired Core Landscaping for our waterfront property redesign. Their knowledge of salt-tolerant plants and architectural lighting blew us away. Highest recommendation possible.',
      stars: 5,
      date: '2 months ago',
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Quote className="w-3.5 h-3.5 text-emerald-600" />
            <span>Client Success Stories</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-6">
            Loved by Miami Homeowners
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Read why property managers and luxury villa owners trust Core Landscaping for their South Florida estates.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-lg shadow-slate-100 flex flex-col justify-between relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-200 pointer-events-none" />

              <div>
                <div className="flex items-center gap-1 mb-4 text-amber-500">
                  {Array.from({ length: rev.stars }).map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-slate-700 text-base leading-relaxed italic mb-8 relative z-10 font-medium">
                  "{rev.quote}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                <div>
                  <div className="font-heading font-bold text-slate-900 text-base">
                    {rev.name}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {rev.location}
                  </div>
                </div>
                <span className="text-[11px] font-bold text-emerald-600 bg-emerald-100/50 px-2.5 py-1 rounded-md">
                  Verified Client
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

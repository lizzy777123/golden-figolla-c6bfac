import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do you offer free on-site estimates in Miami?',
      a: 'Yes! We provide complimentary on-site walkthroughs across Greater Miami, Coral Gables, Key Biscayne, and Miami Beach. We evaluate your soil, sunlight exposure, and drainage before providing a transparent quote.',
    },
    {
      q: 'How do you handle Miami summer storms and hurricane prep?',
      a: 'We specialize in South Florida storm prep. We perform structural pruning and palm frond thinning to minimize wind resistance, and we clear heavy debris immediately following severe weather events.',
    },
    {
      q: 'What makes your lawn care different from other contractors?',
      a: 'Unlike standard mow-and-blow crews, Core Landscaping provides complete agronomic management. We test soil pH, apply custom organic fertilization, calibrate sprinkler heads, and use razor-sharp blades to prevent turf disease.',
    },
    {
      q: 'Can I book service instantly through WhatsApp?',
      a: 'Absolutely! Our dedicated WhatsApp line (+447946123123) is monitored by our dispatch team 7 days a week. Click the chat widget at the bottom right anytime to ask questions or secure your service slot.',
    },
    {
      q: 'Are you fully licensed and insured?',
      a: 'Yes, Core Landscaping is fully licensed, bonded, and insured up to $2,000,000 for commercial and residential properties across the state of Florida.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all duration-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="font-heading font-bold text-lg text-slate-900">
                  {faq.q}
                </span>
                <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 flex-shrink-0 ${
                  openIndex === index ? 'transform rotate-180 text-emerald-600' : ''
                }`} />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 pt-0 animate-in fade-in duration-200">
                  <p className="text-slate-600 text-base leading-relaxed border-t border-slate-100 pt-4 font-normal">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Phone, MapPin, Clock, Calendar, CheckCircle } from 'lucide-react';

interface ContactProps {
  onWhatsAppClick: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onWhatsAppClick }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: 'Full Lawn Care & Maintenance',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
              <Calendar className="w-3.5 h-3.5 text-emerald-600" />
              <span>Free Estimate Consultation</span>
            </div>
            
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-6">
              Let's Build Your Miami Tropical Oasis
            </h2>
            
            <p className="text-slate-600 text-base leading-relaxed mb-10 font-normal">
              Fill out the quick request form to schedule your complimentary on-site evaluation. Or, tap our WhatsApp button to connect directly with our dispatch team.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 font-bold shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">Miami Headquarters</h4>
                  <p className="text-slate-600 text-sm">1420 Brickell Ave, Suite 400<br />Miami, FL 33131</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0 font-bold shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">Direct Call Line</h4>
                  <p className="text-slate-600 text-sm">(305) 555-CORE (2673)</p>
                  <p className="text-xs text-slate-400 mt-0.5">Mon-Sat: 7:00 AM - 7:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 font-bold shadow-sm">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">Same-Week Scheduling</h4>
                  <p className="text-slate-600 text-sm">Guaranteed response within 2 hours during normal business hours.</p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="mt-10 p-6 rounded-2xl bg-gradient-to-tr from-emerald-900 to-slate-900 text-white shadow-xl relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
              <h4 className="font-bold text-lg mb-2">Need an answer right now?</h4>
              <p className="text-slate-300 text-xs mb-4 leading-relaxed">
                Skip the form and chat with our landscaping supervisor instantly on WhatsApp.
              </p>
              <button
                onClick={onWhatsAppClick}
                className="w-full bg-[#25D366] hover:bg-[#20ba5c] text-white font-bold text-sm py-3 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                  alt="WhatsApp" 
                  className="w-4 h-4 object-contain" 
                />
                <span>Open WhatsApp Chat</span>
              </button>
            </div>

          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl">
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-heading font-bold text-2xl text-slate-900 mb-6">
                  Request Free Property Walkthrough
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Michael Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none text-slate-900 font-medium text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(305) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none text-slate-900 font-medium text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="michael@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none text-slate-900 font-medium text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Miami Property Address *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 100 Star Island Dr"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none text-slate-900 font-medium text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Primary Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none text-slate-900 font-medium text-sm transition-all"
                  >
                    <option>Full Lawn Care & Maintenance</option>
                    <option>Tropical Palm Installation & Redesign</option>
                    <option>Luxury Hardscaping & Patios</option>
                    <option>Smart Irrigation & Drainage</option>
                    <option>Architectural LED Lighting</option>
                    <option>Hurricane Prep & Pruning</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Project Notes or Special Instructions
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your property goals or any specific challenges (e.g. salt exposure, poor drainage)..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none text-slate-900 font-medium text-sm transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-600/25 transition-all text-base"
                >
                  Schedule Free Walkthrough Quote
                </button>
              </form>
            ) : (
              <div className="py-12 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-heading font-extrabold text-3xl text-slate-900 mb-4">
                  Estimate Request Received!
                </h3>
                <p className="text-slate-600 text-base max-w-md mx-auto mb-8 leading-relaxed font-normal">
                  Thank you, <strong>{formData.name}</strong>. Our Miami dispatch manager will review your property at <strong>{formData.address}</strong> and call you within 2 hours.
                </p>
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200/80 max-w-md mx-auto mb-8 text-left">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">Next Steps:</div>
                  <ul className="text-xs text-slate-700 space-y-2">
                    <li>• We will conduct a satellite property review prior to calling.</li>
                    <li>• We'll confirm your preferred walkthrough date and time.</li>
                    <li>• You will receive a fully itemized written proposal.</li>
                  </ul>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-emerald-600 hover:text-emerald-700 text-sm font-bold underline"
                >
                  Submit another request
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

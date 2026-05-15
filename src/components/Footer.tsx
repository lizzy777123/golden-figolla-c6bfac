import React from 'react';
import { Sprout } from 'lucide-react';

interface FooterProps {
  onWhatsAppClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onWhatsAppClick }) => {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-24 lg:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-6 group inline-flex">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
                <Sprout className="w-6 h-6" />
              </div>
              <div>
                <span className="font-heading font-bold text-2xl text-white tracking-tight block leading-none">
                  CORE <span className="text-emerald-500 font-extrabold">LANDSCAPING</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block mt-0.5">
                  Miami, Florida
                </span>
              </div>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm font-normal">
              Bespoke landscape architecture, premium turf management, luxury hardscaping, and smart irrigation tailored specifically to South Florida’s tropical climate.
            </p>
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-emerald-600 text-slate-400 hover:text-white flex items-center justify-center transition-all shadow-sm border border-slate-800"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2c2.717 0 3.056.01 4.122.059 1.05.048 1.77.215 2.401.46.645.25 1.193.586 1.741 1.134.548.548.884 1.096 1.134 1.742.245.63.412 1.35.46 2.4.048 1.067.058 1.406.058 4.122 0 2.717-.01 3.056-.058 4.122-.048 1.05-.215 1.77-.46 2.401-.25.645-.586 1.193-1.134 1.741-.548.548-1.096.884-1.742 1.134-.63.245-1.35.412-2.4.46-1.067.048-1.406.058-4.122.058-2.717 0-3.056-.01-4.122-.058-1.05-.048-1.77-.215-2.401-.46-.645-.25-1.193-.586-1.741-1.134-.548-.548-.884-1.096-1.134-1.742-.245-.63-.412-1.35-.46-2.4-.048-1.067-.058-1.406-.058-4.122 0-2.717.01-3.056.058-4.122.048-1.05.215-1.77.46-2.401.25-.645.586-1.193 1.134-1.741.548-.548 1.096-.884 1.742-1.134.63-.245 1.35-.412 2.4-.46C8.944 2.01 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.058-.975.045-1.505.207-1.858.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.883-.344 1.857-.048 1.055-.058 1.37-.058 4.04 0 2.67.01 2.986.058 4.04.045.975.207 1.505.344 1.858.182.467.398.8.748 1.15.35.35.683.566 1.15.748.353.137.883.3 1.857.344 1.055.048 1.37.058 4.04.058 2.67 0 2.986-.01 4.04-.058.975-.045 1.505-.207 1.858-.344.467-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.883.344-1.857.048-1.055.058-1.37.058-4.04 0-2.67-.01-2.986-.058-4.04-.045-.975-.207-1.505-.344-1.858-.182-.467-.398-.8-.748-1.15-.35-.35-.566-.683-.748-1.15-.353-.137-.883-.3-1.857-.344-1.055-.048-1.37-.058-4.04-.058zM12 6.865A5.135 5.135 0 1 0 12 17.135 5.135 5.135 0 0 0 12 6.865zm0 8.468A3.333 3.333 0 1 1 12 8.667a3.333 3.333 0 0 1 0 6.666zm5.338-7.854a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="#"
                aria-label="TikTok"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-emerald-600 text-slate-400 hover:text-white flex items-center justify-center transition-all shadow-sm border border-slate-800"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.77 1.526V6.79a4.831 4.831 0 0 1-1-.104z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-emerald-600 text-slate-400 hover:text-white flex items-center justify-center transition-all shadow-sm border border-slate-800"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-emerald-600 text-slate-400 hover:text-white flex items-center justify-center transition-all shadow-sm border border-slate-800"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-base text-white mb-6 uppercase tracking-wider text-xs">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-slate-400 font-medium">
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Miami Scope</a></li>
              <li><a href="#portfolio" className="hover:text-emerald-400 transition-colors">Portfolio</a></li>
              <li><a href="#transformations" className="hover:text-emerald-400 transition-colors">Before & After</a></li>
              <li><a href="#packages" className="hover:text-emerald-400 transition-colors">Pricing Plans</a></li>
              <li><a href="#reviews" className="hover:text-emerald-400 transition-colors">Client Reviews</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-heading font-bold text-base text-white mb-6 uppercase tracking-wider text-xs">
              Miami Coverage
            </h4>
            <ul className="space-y-3 text-sm text-slate-400 font-medium">
              <li>Star Island & Palm Island</li>
              <li>Coral Gables & Coconut Grove</li>
              <li>Key Biscayne & Virginia Key</li>
              <li>Miami Beach & Bal Harbour</li>
              <li>Brickell & Downtown Miami</li>
              <li>Pinecrest & Palmetto Bay</li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-heading font-bold text-base text-white mb-6 uppercase tracking-wider text-xs">
              Connect With Core
            </h4>
            <p className="text-slate-400 text-xs mb-4 leading-relaxed font-normal">
              1420 Brickell Ave, Suite 400<br />Miami, FL 33131
            </p>
            <p className="text-slate-300 font-bold text-sm mb-6">
              (305) 555-CORE (2673)
            </p>
            <button
              onClick={onWhatsAppClick}
              className="w-full bg-[#25D366] hover:bg-[#20ba5c] text-white font-bold py-3 px-4 rounded-xl text-xs transition-all flex items-center justify-center gap-2 shadow-md shadow-[#25D366]/20"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                alt="WhatsApp" 
                className="w-4 h-4 object-contain" 
              />
              <span>Instant WhatsApp Help</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Core Landscaping Miami. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Licensing & Bonds</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

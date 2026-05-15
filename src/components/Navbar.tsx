import React, { useState, useEffect } from 'react';
import { Sprout, Menu, X, Sun } from 'lucide-react';

interface NavbarProps {
  onWhatsAppClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onWhatsAppClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Transformations', href: '#transformations' },
    { name: 'Packages', href: '#packages' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white/80 backdrop-blur-sm py-5'
    }`}>
      {/* Top bar announcement */}
      <div className="absolute -top-8 left-0 right-0 bg-emerald-900 text-emerald-100 text-xs py-1.5 px-4 hidden md:block text-center font-medium">
        <span className="inline-flex items-center gap-1.5">
          <Sun className="w-3.5 h-3.5 text-amber-400" /> Serving Greater Miami, Coral Gables, Key Biscayne & Miami Beach | ⚡ Same-Week Consultations Available
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Sprout className="w-6 h-6" />
            </div>
            <div>
              <span className="font-heading font-bold text-xl sm:text-2xl text-slate-900 tracking-tight block leading-none">
                CORE <span className="text-emerald-600 font-extrabold">LANDSCAPING</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 block mt-0.5">
                Miami, Florida
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-emerald-600 transition-colors text-sm font-semibold whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
            <a
              href="#contact"
              className="px-3.5 py-2 rounded-xl border border-slate-200 hover:border-emerald-500 text-slate-700 hover:text-emerald-600 font-semibold text-xs xl:text-sm transition-all whitespace-nowrap"
            >
              Get Free Estimate
            </a>
            <button
              onClick={onWhatsAppClick}
              className="bg-[#25D366] hover:bg-[#20ba5c] text-white px-3.5 py-2 rounded-xl font-semibold text-xs xl:text-sm transition-all shadow-md shadow-[#25D366]/20 flex items-center gap-2 flex-shrink-0"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                alt="WhatsApp" 
                className="w-4 h-4 object-contain" 
              />
              <span>WhatsApp Chat</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl py-6 px-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-700 hover:text-emerald-600 py-2 border-b border-slate-50"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl border border-slate-200 text-center text-slate-700 font-semibold text-sm"
            >
              Get Free Estimate
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onWhatsAppClick();
              }}
              className="w-full bg-[#25D366] text-white py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-md shadow-[#25D366]/20"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                alt="WhatsApp" 
                className="w-4 h-4 object-contain" 
              />
              <span>WhatsApp Chat</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

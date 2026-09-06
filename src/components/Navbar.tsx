import React, { useState, useEffect } from 'react';
import { Gamepad2, Menu, X, Phone, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gamingData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
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
    { name: 'Home', href: '#hero' },
    { name: 'Games', href: '#games' },
    { name: 'Experience', href: '#experience' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#location' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0F0F12]/95 backdrop-blur-md border-b border-white/5 shadow-2xl shadow-black/60'
          : 'bg-gradient-to-b from-[#0A0A0B]/95 via-[#0A0A0B]/70 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a
            id="brand-logo-link"
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-600/30 group-hover:scale-105 transition-transform">
              <Gamepad2 className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold leading-none tracking-tight text-white uppercase flex items-center gap-1.5">
                THE GAME ZONE
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              </h1>
              <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest mt-1">
                ANKLESHWAR
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-gray-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="nav-call-link"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-gray-300 hover:text-white border border-white/10 hover:border-white/20 rounded-full transition-colors bg-white/5"
              title="Direct call to Gaming Zone"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <button
              id="nav-book-btn"
              onClick={onOpenBooking}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-full transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] flex items-center gap-2"
            >
              <Gamepad2 className="w-4 h-4" />
              <span>BOOK YOUR SESSION</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/5 text-gray-300 hover:text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-dropdown-menu"
          className="lg:hidden bg-[#0F0F12] border-b border-white/5 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200"
        >
          <div className="grid grid-cols-2 gap-2 pb-3 mb-2 border-b border-white/5">
            <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 text-xs text-gray-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Open until 10 PM</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 text-xs text-yellow-400 flex items-center gap-1.5 font-medium">
              <span>★ 5.0 Rating (13)</span>
            </div>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-wider text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-3 space-y-2.5">
            <button
              id="mobile-menu-book-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.4)]"
            >
              <Gamepad2 className="w-4 h-4" />
              <span>BOOK YOUR SESSION</span>
            </button>

            <a
              id="mobile-menu-directions-btn"
              href={BUSINESS_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full text-xs font-semibold text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10"
            >
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>Get Directions (Gadkhol Patiya)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

import React from 'react';
import { Gamepad2, Phone, MessageCircle, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gamingData';

interface BookingCTAProps {
  onOpenBooking: () => void;
}

export const BookingCTA: React.FC<BookingCTAProps> = ({ onOpenBooking }) => {
  return (
    <section id="book-cta" className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-br from-[#0A0A0B] to-[#0F0F12]">
      {/* Subtle atmospheric glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Glow Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/5 text-blue-400 border border-white/10 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
          <span className="uppercase tracking-widest text-[11px] font-bold">Instant Call-in Bookings</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6 uppercase">
          YOUR NEXT MATCH <span className="text-blue-500">STARTS HERE.</span>
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          Bring your squad. Pick your game. Let the battle begin.
        </p>

        {/* Main CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-10">
          <button
            id="cta-book-session-btn"
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all"
          >
            <Gamepad2 className="w-5 h-5" />
            <span>BOOK YOUR GAMING SESSION</span>
          </button>

          <a
            id="cta-call-secondary-btn"
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full text-xs font-semibold uppercase tracking-wider text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:text-white"
          >
            <Phone className="w-4 h-4 text-blue-400" />
            <span>Call {BUSINESS_INFO.phone}</span>
          </a>
        </div>

        {/* Transparency note respecting prompt instructions */}
        <p className="text-xs text-gray-500 max-w-lg mx-auto">
          We accept walk-ins and phone call reservations at Gadkhol Patiya, Ankleshwar. No credit card or pre-payment needed.
        </p>
      </div>
    </section>
  );
};

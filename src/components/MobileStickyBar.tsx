import React from 'react';
import { Gamepad2, Phone, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gamingData';

interface MobileStickyBarProps {
  onOpenBooking: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenBooking }) => {
  return (
    <div
      id="mobile-sticky-bottom-bar"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A0A0B]/95 backdrop-blur-md border-t border-white/10 p-3 shadow-2xl shadow-black"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Quick Call icon button */}
        <a
          id="sticky-phone-btn"
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex flex-col items-center justify-center w-14 h-12 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white shrink-0 active:bg-white/10 transition-colors"
          aria-label="Call The Game Zone"
        >
          <Phone className="w-4 h-4 text-blue-400" />
          <span className="text-[9px] font-bold text-gray-400 mt-0.5 uppercase tracking-wider">Call</span>
        </a>

        {/* Quick Directions icon button */}
        <a
          id="sticky-maps-btn"
          href={BUSINESS_INFO.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center w-14 h-12 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white shrink-0 active:bg-white/10 transition-colors"
          aria-label="Google Maps directions"
        >
          <MapPin className="w-4 h-4 text-blue-400" />
          <span className="text-[9px] font-bold text-gray-400 mt-0.5 uppercase tracking-wider">Map</span>
        </a>

        {/* Primary Booking Session Button */}
        <button
          id="sticky-book-session-btn"
          onClick={onOpenBooking}
          className="flex-1 h-12 flex items-center justify-center gap-2 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.4)]"
        >
          <Gamepad2 className="w-4 h-4" />
          <span>BOOK SESSION</span>
        </button>
      </div>
    </div>
  );
};

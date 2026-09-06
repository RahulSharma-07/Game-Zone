import React from 'react';
import { X, Phone, MessageCircle, MapPin, Clock, ShieldCheck, Gamepad2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gamingData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#0F0F12] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/80 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow Accent */}
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]">
            <Gamepad2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-black text-white uppercase tracking-tight">
              RESERVE YOUR SESSION
            </h3>
            <p className="text-[10px] text-blue-500 font-bold uppercase tracking-widest">
              {BUSINESS_INFO.fullName}
            </p>
          </div>
        </div>

        {/* Informative Note */}
        <div className="bg-white/5 border border-white/5 rounded-xl p-4 mb-6 text-xs text-gray-300 leading-relaxed">
          <p className="font-medium">
            To guarantee console & controller availability for you and your squad, reservations are confirmed directly by phone or WhatsApp with our desk.
          </p>
          <div className="mt-2 flex items-center gap-4 text-[11px] text-gray-400 pt-2 border-t border-white/5">
            <span className="flex items-center gap-1 text-green-400 font-semibold">
              <Clock className="w-3 h-3" />
              Open until 10 PM
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-blue-400" />
              Instant Confirmation
            </span>
          </div>
        </div>

        {/* Direct Action Buttons */}
        <div className="space-y-3 mb-6">
          {/* Call Front Desk */}
          <a
            id="modal-call-btn"
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all text-center"
          >
            <Phone className="w-4 h-4" />
            <span>CALL {BUSINESS_INFO.phone}</span>
          </a>

          {/* WhatsApp Inquire */}
          <a
            id="modal-whatsapp-btn"
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2.5 py-3 px-6 rounded-full text-xs font-bold uppercase tracking-wider text-green-400 bg-white/5 hover:bg-white/10 border border-green-500/20 transition-colors text-center"
          >
            <MessageCircle className="w-4 h-4 text-green-400" />
            <span>Message on WhatsApp</span>
          </a>

          {/* Directions */}
          <a
            id="modal-directions-btn"
            href={BUSINESS_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-center"
          >
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            <span>View on Google Maps (Gadkhol Patiya)</span>
          </a>
        </div>

        {/* Address footer */}
        <div className="text-center text-[11px] text-gray-500 border-t border-white/5 pt-4">
          📍 5/9, Mahendra Nagar Rd, Gadkhol Patiya, Ankleshwar, Gujarat 393001
        </div>
      </div>
    </div>
  );
};

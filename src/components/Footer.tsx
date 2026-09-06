import React from 'react';
import { Gamepad2, MapPin, Phone, Clock, ArrowUp, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gamingData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Games', href: '#games' },
    { name: 'Experience', href: '#experience' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#location' },
  ];

  return (
    <footer id="main-footer" className="bg-[#0A0A0B] border-t border-white/5 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Col */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tight text-white leading-tight uppercase">
                  THE GAME ZONE
                </span>
                <span className="text-[10px] tracking-widest font-bold text-blue-500 uppercase">
                  ANKLESHWAR
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-300 font-medium italic mb-4">
              &ldquo;Gaming. Competition. Good Times.&rdquo;
            </p>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm mb-6">
              Ankleshwar&apos;s local gaming lounge and video game destination at Gadkhol Patiya. Powered by PlayStation console setups and exciting multiplayer battles.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-green-400">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              <span>⭐ Rated 5.0/5 on Google Reviews</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Contact & Location
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  5/9, Mahendra Nagar Rd, Gadkhol Patiya, Ankleshwar, Gujarat 393001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-white hover:text-blue-400 font-bold transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-green-400 shrink-0" />
                <span>Open until 10 PM</span>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-green-400 flex items-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-blue-400 flex items-center gap-1.5 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-gray-500">
            &copy; 2026 The Game Zone Ankleshwar. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-gray-500">
            <span>Video Game Store & Gaming Zone</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

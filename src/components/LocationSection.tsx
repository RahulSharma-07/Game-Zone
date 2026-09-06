import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, Copy, Check, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gamingData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-20 lg:py-28 bg-[#0A0A0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Business Details & Action Buttons */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-blue-400 border border-white/10 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              <span className="uppercase tracking-widest text-[11px] font-bold">Find Us in Ankleshwar</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-6 uppercase">
              READY TO <span className="text-blue-500">PLAY?</span>
            </h2>

            <p className="text-base text-gray-400 leading-relaxed mb-8">
              We are conveniently located at Gadkhol Patiya, Ankleshwar. Drop in with your squad or call ahead to lock in your controllers.
            </p>

            {/* Sophisticated Dark Location & Contact Card */}
            <div className="p-6 bg-blue-600/5 border border-blue-600/20 rounded-2xl space-y-5 mb-8">
              {/* Address Row */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-tight">Location</p>
                    <p className="text-[11px] text-gray-400 mt-0.5">{BUSINESS_INFO.address}</p>
                    <p className="text-[10px] text-blue-400 font-semibold mt-0.5">Gadkhol Patiya, Ankleshwar</p>
                  </div>
                </div>

                <button
                  onClick={handleCopyAddress}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors shrink-0"
                  title="Copy full address"
                  aria-label="Copy address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Contact Row */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-tight">Contact Us</p>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="text-[11px] text-gray-400 hover:text-blue-400 font-bold block mt-0.5"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Hours Row */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center text-green-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-tight">Hours</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">{BUSINESS_INFO.hoursText}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                id="location-directions-btn"
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all text-xs uppercase tracking-wider shadow-md text-center"
              >
                <span>📍</span>
                <span>GET DIRECTIONS</span>
              </a>

              <a
                id="location-call-btn"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all text-xs uppercase tracking-wider text-center"
              >
                <Phone className="w-4 h-4" />
                <span>CALL 081419 74723</span>
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Google Map */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden bg-[#0F0F12] border border-white/10 shadow-2xl">
              {/* Map header bar */}
              <div className="p-4 bg-[#0F0F12] border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                  <span className="text-xs text-gray-400 ml-1 font-medium">
                    Gadkhol Patiya, Ankleshwar
                  </span>
                </div>

                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Interactive Map Iframe */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full">
                <iframe
                  title="The Game Zone Ankleshwar Map Location"
                  src="https://maps.google.com/maps?q=5/9,%20Mahendra%20Nagar%20Rd,%20Gadkhol%20Patiya,%20Ankleshwar,%20Gujarat%20393001&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-[105%]"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              {/* Map Footer status */}
              <div className="p-4 bg-[#0F0F12] border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                <span>Near Mahendra Nagar Rd</span>
                <span className="text-green-400 font-semibold">● Open Today until 10 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

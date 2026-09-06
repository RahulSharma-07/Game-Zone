import React from 'react';
import { Gamepad2, MapPin, Star, Clock, Flame, ShieldCheck, Trophy, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gamingData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden bg-gradient-to-br from-[#0A0A0B] via-[#0A0A0B] to-[#14141A]"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Hero Content (7 cols on lg) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Rating & Status Line from Sophisticated Dark theme */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6">
              <div className="flex text-yellow-400 text-base">
                <span>★★★★★</span>
              </div>
              <span className="text-sm font-medium text-gray-400">5.0 Google Rating</span>
              <span className="mx-2 h-4 w-[1px] bg-white/20 hidden sm:inline"></span>
              <span className="text-sm font-medium text-green-400">Open Until 10 PM</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black leading-[1.08] mb-6 tracking-tight text-white uppercase font-gaming">
              PLAY. COMPETE.<br />
              <span className="text-blue-500">HAVE FUN.</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-400 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed font-normal">
              Level up your free time with an immersive gaming experience. Grab your controller,
              challenge your friends and enjoy the latest titles at Ankleshwar&apos;s premium gaming destination.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <button
                id="hero-book-btn"
                onClick={onOpenBooking}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all shadow-md text-sm uppercase tracking-wider"
              >
                <span>🎮</span>
                <span>Book a Gaming Session</span>
              </button>

              <a
                id="hero-directions-btn"
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all text-sm uppercase tracking-wider"
              >
                <span>📍</span>
                <span>Get Directions</span>
              </a>
            </div>

            {/* Sophisticated Dark Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">
                  PlayStation Zone
                </h4>
                <p className="text-xs text-gray-400">
                  Smooth gameplay, PS4 setup, and immersive graphics.
                </p>
              </div>

              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">
                  Multiplayer Battles
                </h4>
                <p className="text-xs text-gray-400">
                  Challenge your squad in head-to-head local co-op.
                </p>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Card (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer clean border container */}
              <div className="relative rounded-2xl overflow-hidden bg-[#0F0F12] border border-white/10 shadow-2xl">
                {/* Hero Gaming Image */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=900&auto=format&fit=crop"
                    alt="PlayStation controller and gaming console setup at The Game Zone Ankleshwar"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F12] via-transparent to-black/30" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 bg-[#0A0A0B]/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span className="text-[11px] font-bold text-gray-200 uppercase tracking-wider">PlayStation Gaming</span>
                  </div>

                  {/* Location Pin overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#0A0A0B]/90 backdrop-blur-md p-3.5 rounded-xl border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">
                        Gadkhol Patiya, Ankleshwar
                      </div>
                      <div className="text-xs font-bold text-white mt-0.5">5/9, Mahendra Nagar Rd</div>
                    </div>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="p-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                      title="Call The Game Zone"
                    >
                      <Gamepad2 className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

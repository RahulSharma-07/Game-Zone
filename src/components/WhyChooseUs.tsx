import React from 'react';
import { Tv, Users, MapPin, Star, ArrowRight, ShieldCheck, Gamepad2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gamingData';

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  const points = [
    {
      id: 'point-1',
      icon: Tv,
      title: 'Great Gaming Setup',
      description: 'Enjoy a dedicated gaming environment.',
      accent: 'text-blue-400 bg-blue-500/10 border-blue-500/20'
    },
    {
      id: 'point-2',
      icon: Users,
      title: 'Play With Friends',
      description: 'Turn ordinary free time into a competitive gaming session.',
      accent: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20'
    },
    {
      id: 'point-3',
      icon: MapPin,
      title: 'Easy Location',
      description: 'Conveniently located at Gadkhol Patiya, Ankleshwar.',
      accent: 'text-orange-400 bg-orange-500/10 border-orange-500/20'
    },
    {
      id: 'point-4',
      icon: Star,
      title: 'Highly Rated',
      description: 'Rated 5.0/5 on Google based on 13 reviews.',
      accent: 'text-amber-400 bg-amber-500/10 border-amber-500/20'
    }
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-gradient-to-br from-[#0A0A0B] to-[#0F0F12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large authentic gaming setup visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden bg-[#0F0F12] border border-white/10 shadow-2xl group">
              <div className="aspect-[4/3] sm:aspect-[16/12] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=900&auto=format&fit=crop"
                  alt="High performance gaming lounge setup at The Game Zone Ankleshwar"
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent opacity-80" />

              {/* Floating Verified Badge */}
              <div className="absolute top-4 right-4 bg-[#0A0A0B]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span className="text-[11px] font-bold text-white uppercase tracking-wider">Ankleshwar Gamers Hub</span>
              </div>

              {/* Bottom Quote / Experience Banner */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#0A0A0B]/90 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Gamepad2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">
                      Smooth Gameplay
                    </div>
                    <div className="text-xs font-bold text-white mt-0.5">
                      Top controllers, high-res screen, zero lag
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Points */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-blue-400 border border-white/10 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              <span className="uppercase tracking-widest text-[11px] font-bold">Local Gaming Community</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-6 uppercase">
              WHY GAMERS <span className="text-blue-500">CHOOSE US</span>
            </h2>

            <div className="space-y-4 mb-8">
              {points.map((pt) => {
                const Icon = pt.icon;
                return (
                  <div
                    key={pt.id}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white uppercase tracking-tight">
                        {pt.title}
                      </h3>
                      <p className="text-xs text-gray-400 font-normal leading-relaxed mt-0.5">
                        {pt.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Requested CTA */}
            <div>
              <button
                id="why-us-cta-btn"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all"
              >
                <span>COME PLAY WITH US</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

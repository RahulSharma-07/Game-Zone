import React from 'react';
import { Gamepad2, Users2, Tv2, Flame, ArrowRight } from 'lucide-react';

interface ExperienceProps {
  onOpenBooking: () => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onOpenBooking }) => {
  const experiences = [
    {
      id: 'exp-playstation',
      icon: Gamepad2,
      tag: 'CONSOLE GAMING',
      title: 'PlayStation Gaming',
      description: 'Enjoy smooth gameplay and immersive graphics on PlayStation.',
      badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/25',
      glowBorder: 'group-hover:border-blue-500/40',
      iconBg: 'bg-blue-600/20 text-blue-400'
    },
    {
      id: 'exp-multiplayer',
      icon: Users2,
      tag: 'VERSUS & SQUAD',
      title: 'Multiplayer Battles',
      description: 'Challenge your friends and find out who really owns the controller.',
      badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/25',
      glowBorder: 'group-hover:border-cyan-500/40',
      iconBg: 'bg-cyan-600/20 text-cyan-400'
    },
    {
      id: 'exp-setup',
      icon: Tv2,
      tag: 'IMMERSIVE SETUP',
      title: 'Premium Gaming Setup',
      description: 'Experience gaming on a comfortable and dedicated setup.',
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
      glowBorder: 'group-hover:border-emerald-500/40',
      iconBg: 'bg-emerald-600/20 text-emerald-400'
    },
    {
      id: 'exp-students',
      icon: Flame,
      tag: 'HANGOUT VIBE',
      title: 'Student-Friendly Fun',
      description: 'A perfect place to hang out, compete and spend your free time.',
      badgeColor: 'text-orange-400 bg-orange-500/10 border-orange-500/25',
      glowBorder: 'group-hover:border-orange-500/40',
      iconBg: 'bg-orange-600/20 text-orange-400'
    }
  ];

  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#0A0A0B] relative overflow-hidden">
      {/* Subtle backdrop lights */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-blue-400 border border-white/10 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            <span className="uppercase tracking-widest text-[11px] font-bold">The Gaming Experience</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4 uppercase">
            YOUR GAME. <span className="text-blue-500">YOUR BATTLE.</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            Whether you&apos;re here for a quick match or a full gaming session, enjoy a smooth and exciting gaming experience with your friends.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative bg-[#0F0F12] border border-white/5 hover:border-blue-600/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-600/20 text-blue-400 flex items-center justify-center transition-transform group-hover:scale-105">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-md border border-white/10 bg-white/5 text-gray-300 uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors uppercase tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs font-semibold text-gray-400 group-hover:text-white transition-colors">
                  <span className="uppercase tracking-wider text-[10px]">Battle Ready</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform text-blue-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick action bar */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>Ready to jump into the action? Call to reserve your setup</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

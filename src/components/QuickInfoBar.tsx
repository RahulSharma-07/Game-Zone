import React from 'react';
import { Gamepad2, Star, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gamingData';

export const QuickInfoBar: React.FC = () => {
  const infoCards = [
    {
      id: 'info-gaming',
      icon: Gamepad2,
      iconColor: 'text-blue-400 bg-blue-600/10 border-blue-600/20',
      title: 'Gaming Zone',
      subtitle: 'Play your favorite games',
      detail: 'PS4 & Multi-title lineup'
    },
    {
      id: 'info-rating',
      icon: Star,
      iconColor: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
      title: '5.0 Rating',
      subtitle: '13 Google Reviews',
      detail: '100% 5-Star feedback'
    },
    {
      id: 'info-location',
      icon: MapPin,
      iconColor: 'text-blue-400 bg-blue-600/10 border-blue-600/20',
      title: 'Ankleshwar',
      subtitle: 'Gadkhol Patiya',
      detail: '5/9, Mahendra Nagar Rd'
    },
    {
      id: 'info-hours',
      icon: Clock,
      iconColor: 'text-green-400 bg-green-400/10 border-green-400/20',
      title: 'Open Today',
      subtitle: 'Until 10:00 PM',
      detail: 'Evening & student hangout'
    }
  ];

  return (
    <section id="quick-info" className="relative z-20 -mt-8 sm:-mt-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {infoCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              className="bg-[#0F0F12] border border-white/5 hover:border-white/10 rounded-2xl p-5 shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${card.iconColor}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-white font-bold uppercase tracking-tight text-base group-hover:text-blue-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs font-semibold text-gray-300 leading-snug mt-0.5">
                    {card.subtitle}
                  </p>
                  <p className="text-[11px] text-gray-500 mt-1 truncate">
                    {card.detail}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

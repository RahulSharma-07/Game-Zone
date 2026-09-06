import React, { useState } from 'react';
import { Users, Info, Sparkles, MessageCircle, Phone } from 'lucide-react';
import { FEATURED_GAMES, BUSINESS_INFO } from '../data/gamingData';
import { GameItem } from '../types';

interface GamesGridProps {
  onOpenBooking: () => void;
}

export const GamesGrid: React.FC<GamesGridProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Games' },
    { id: 'sports', label: 'Sports & Football' },
    { id: 'fighting', label: 'Fighting & Versus' },
    { id: 'action', label: 'Action & Shooter' },
    { id: 'racing', label: 'Racing' },
  ];

  const filteredGames = activeCategory === 'all'
    ? FEATURED_GAMES
    : FEATURED_GAMES.filter((game) => game.category === activeCategory);

  return (
    <section id="games" className="py-20 lg:py-28 bg-[#0A0A0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-blue-400 border border-white/10 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            <span className="uppercase tracking-widest text-[11px] font-bold">Featured Titles</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4 uppercase">
            WHAT DO YOU WANT <span className="text-blue-500">TO PLAY?</span>
          </h2>

          {/* Mandatory Disclaimer from prompt */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-400">
            <Info className="w-4 h-4 text-blue-400 shrink-0" />
            <span className="italic">Game availability may vary. Ask us about your favorite title.</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Game Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredGames.map((game) => (
            <div
              key={game.id}
              className="group relative bg-[#0F0F12] border border-white/5 hover:border-white/15 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Game Poster Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-900">
                <img
                  src={game.image}
                  alt={`${game.title} at The Game Zone Ankleshwar`}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F12] via-transparent to-black/30" />

                {/* Multiplayer Tag Badge */}
                <div className="absolute bottom-3 left-3 bg-[#0A0A0B]/85 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 flex items-center gap-1.5 text-xs font-semibold text-gray-200">
                  <Users className="w-3.5 h-3.5 text-blue-400" />
                  <span>{game.players}</span>
                </div>

                <div className="absolute top-3 right-3 bg-blue-600/90 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold text-white uppercase tracking-wider">
                  {game.genre.split('/')[0]}
                </div>
              </div>

              {/* Game Info Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1">
                    {game.genre}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2 uppercase tracking-tight">
                    {game.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                    {game.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-gray-500">Playable on Console</span>
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-blue-400 hover:text-blue-300"
                  >
                    <span>Play this title</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Game Request Banner */}
        <div className="mt-14 bg-[#0F0F12] border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold text-white mb-1 uppercase tracking-tight">
              HAVE A SPECIFIC GAME IN MIND?
            </h4>
            <p className="text-xs text-gray-400">
              Give us a quick call to check title availability or request a game installation for your group.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call 081419 74723</span>
            </a>

            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-xs font-semibold text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Star, CheckCircle2, MessageSquare, ExternalLink, Quote } from 'lucide-react';
import { AUTHENTIC_REVIEWS, BUSINESS_INFO } from '../data/gamingData';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#0A0A0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-yellow-400 border border-white/10 mb-4">
            <Star className="w-3.5 h-3.5 fill-yellow-400" />
            <span className="uppercase tracking-widest text-[11px] font-bold">Real Local Experiences</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4 uppercase">
            WHAT GAMERS <span className="text-blue-500">SAY</span>
          </h2>

          {/* Rating Snapshot Banner */}
          <div className="inline-flex flex-wrap items-center justify-center gap-4 px-6 py-3 rounded-2xl bg-[#0F0F12] border border-white/5">
            <div className="flex items-center gap-1.5">
              <span className="text-2xl font-extrabold text-white">5.0</span>
              <div className="flex items-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400" />
                ))}
              </div>
            </div>
            <span className="text-gray-600 hidden sm:inline">|</span>
            <div className="text-xs font-semibold text-gray-300">
              Based on <span className="text-white font-bold">{BUSINESS_INFO.reviewCount} Google Reviews</span>
            </div>
            <div className="inline-flex items-center gap-1 text-xs text-green-400 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>100% Recommended</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid (Strictly authentic reviews from user request) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {AUTHENTIC_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#0F0F12] border border-white/5 hover:border-white/15 rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative shadow-xl group hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Quote icon & stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-gray-700" />
                </div>

                {/* Review body */}
                <p className="text-sm text-gray-200 leading-relaxed italic mb-6 font-normal">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Reviewer info */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5 uppercase tracking-wide">
                    <span>{review.author}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" title="Google Verified Local Gamer" />
                  </div>
                  <div className="text-[11px] text-gray-500 mt-0.5">
                    {review.dateText}
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center text-xs font-bold border border-blue-600/30">
                  {review.author.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Google Reviews */}
        <div className="text-center">
          <a
            id="google-reviews-btn"
            href={BUSINESS_INFO.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-semibold text-xs uppercase tracking-wider text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:text-white transition-all"
          >
            <MessageSquare className="w-4 h-4 text-blue-400" />
            <span>Read More Reviews on Google</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1 text-gray-500" />
          </a>
        </div>
      </div>
    </section>
  );
};

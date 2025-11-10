import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const AwardBadge: React.FC = () => {
  return (
    <Link
      to="/best-paper-awards"
      className="group relative flex items-center justify-center cursor-pointer py-2 pb-10 sm:py-0 sm:pb-0"
    >
      {/* Pulsing Glow Rings - Responsive sizes for mobile */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-yellow-400 rounded-full opacity-15 sm:opacity-20 blur-lg sm:blur-xl animate-pulse-slow" />
        <div className="absolute w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-yellow-300 rounded-full opacity-20 sm:opacity-30 blur-md sm:blur-lg animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Rotating Sparkles - Responsive sizes, hidden on very small screens for performance */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Sparkles 
          className="absolute w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 text-yellow-400 opacity-15 sm:opacity-25 hidden sm:block"
          style={{
            animation: 'rotate 10s linear infinite',
          }}
        />
        <Sparkles 
          className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 text-yellow-300 opacity-20 sm:opacity-30 hidden sm:block"
          style={{
            animation: 'rotate 8s linear infinite reverse',
            animationDelay: '1s',
          }}
        />
      </div>

      {/* Badge Container with Animation */}
      <div className="relative z-10 transform transition-all duration-700 active:scale-105 sm:group-hover:scale-110 sm:group-hover:rotate-6">
        {/* Glow Effect on Hover - Desktop only */}
        <div className="absolute inset-0 bg-yellow-400 rounded-full blur-2xl opacity-0 sm:group-hover:opacity-60 transition-opacity duration-700" />
        
        {/* Badge Image */}
        <div className="relative">
          <img
            src="/documents/award_badge.png"
            alt="Best Paper Award IEEE-iSSSC 2025"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 object-contain drop-shadow-xl sm:drop-shadow-2xl filter sm:group-hover:brightness-110 transition-all duration-700 animate-float-mobile sm:animate-float"
            loading="lazy"
          />
          
          {/* Shine Effect on Hover - Desktop only */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 sm:group-hover:opacity-100 transform -skew-x-12 transition-opacity duration-1000 hidden sm:block"
            style={{
              animation: 'shine-sweep 2s ease-in-out infinite',
            }}
          />
        </div>

        {/* Text Label - Responsive positioning and sizing */}
        <div className="absolute -bottom-8 sm:-bottom-9 md:-bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full shadow-lg sm:shadow-xl font-bold text-[11px] sm:text-xs md:text-sm lg:text-base transition-all duration-300 active:scale-105 sm:group-hover:scale-110 sm:group-hover:shadow-2xl border border-yellow-300 sm:border-2">
            Best Paper Awards
          </div>
        </div>
      </div>

      <style>{`
        /* Mobile-optimized float animation - reduced movement for better performance */
        @keyframes float-mobile {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        
        /* Desktop float animation with rotation */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-8px) rotate(1deg);
          }
          75% {
            transform: translateY(-12px) rotate(-1deg);
          }
        }
        
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.1);
          }
        }
        
        @keyframes shine-sweep {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          50% {
            transform: translateX(200%) skewX(-12deg);
          }
          100% {
            transform: translateX(-100%) skewX(-12deg);
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-float-mobile {
          animation: float-mobile 5s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        /* Respect user's motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .animate-float-mobile,
          .animate-float,
          .animate-pulse-slow {
            animation: none;
          }
        }
        
        /* Performance optimization: reduce animations on mobile */
        @media (max-width: 640px) {
          .animate-pulse-slow {
            animation-duration: 4s;
          }
        }
      `}</style>
    </Link>
  );
};

export default AwardBadge;


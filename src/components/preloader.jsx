import React, { useEffect, useState } from 'react';
import logo from '../assets/edciitd.svg';

const Preloader = ({ isLoading }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      // Start fade a little before unmount so the transition is smooth
      setFadeOut(true);
    }
  }, [isLoading]);

  if (!isLoading && fadeOut) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0D0B2E]"
      style={{
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.6s ease-out',
        pointerEvents: fadeOut ? 'none' : 'auto',
      }}
    >
      {/* eDC Logo */}
      <img
        src={logo}
        alt="eDC IIT Delhi"
        className="h-16 md:h-20 w-auto object-contain mb-10 opacity-90"
      />

      {/* Animated dots */}
      <div className="flex items-center gap-2">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            style={{
              animationDelay: `${i * 0.15}s`,
              animationDuration: '1.1s',
            }}
            className="block w-2.5 h-2.5 rounded-full bg-accent-cyan animate-[preloaderBounce_1.1s_ease-in-out_infinite]"
          />
        ))}
      </div>

      {/* Thin progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/5 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-cyan animate-[preloaderBar_4.8s_ease-in-out_forwards]" />
      </div>
    </div>
  );
};

export default Preloader;

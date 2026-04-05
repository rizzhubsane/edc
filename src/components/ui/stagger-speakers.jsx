"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Speakers } from '../../utility/speaker';

const SQRT_5000 = Math.sqrt(5000);

const SpeakerCard = ({ 
  position, 
  speaker, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 transition-all duration-500 ease-in-out overflow-hidden flex flex-col justify-end",
        isCenter 
          ? "z-10 border-accent-cyan" 
          : "z-0 border-neutral-200 hover:border-accent-cyan/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.1) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px rgba(56,189,248,0.3)" : "0px 0px 0px 0px transparent"
      }}
    >
      {/* Full-card Image Background */}
      <img
        src={speaker.image}
        alt={speaker.name}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/90 via-primary-deep/30 to-transparent" />

      {/* Top-right Fold Effect */}
      <span
        className={cn(
          "absolute block origin-top-right rotate-45",
          isCenter ? "bg-accent-cyan" : "bg-neutral-200"
        )}
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />

      {/* Text Content at Bottom */}
      <div className="relative z-10 p-6 w-full text-left">
        <h3 className={cn(
          "text-lg sm:text-xl font-heading font-bold mb-1",
          isCenter ? "text-white" : "text-white/90"
        )}>
          {speaker.name}
        </h3>
        <p className={cn(
          "text-sm font-body",
          isCenter ? "text-accent-cyan" : "text-neutral-300"
        )}>
          {speaker.position || "Speaker"}
        </p>
      </div>
    </div>
  );
};

export const StaggerSpeakers = () => {
  const [cardSize, setCardSize] = useState(320);
  
  // Add tempId to speakers for React keys
  const initialSpeakers = Speakers.slice(0, 15).map((s, i) => ({ ...s, tempId: i }));
  const [speakersList, setSpeakersList] = useState(initialSpeakers);

  const handleMove = (steps) => {
    const newList = [...speakersList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setSpeakersList(newList);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleMove(1);
    }, 3000); // Rotate every 3 seconds

    return () => clearInterval(interval);
  }, [speakersList]);

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 320 : 260);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-neutral-white"
      style={{ height: 500 }}
    >
      {/* Container to stretch across the screen */}
      <div className="absolute inset-0 w-full h-full">
        {speakersList.map((speaker, index) => {
          const position = speakersList.length % 2
            ? index - (speakersList.length - 1) / 2
            : index - speakersList.length / 2;
          return (
            <SpeakerCard
              key={speaker.tempId}
              speaker={speaker}
              handleMove={handleMove}
              position={position}
              cardSize={cardSize}
            />
          );
        })}
      </div>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-4 z-20">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-12 w-12 items-center justify-center text-xl transition-all rounded-full",
            "bg-white border-2 border-neutral-200 text-primary-dark hover:bg-primary-dark hover:text-white hover:border-primary-dark shadow-sm",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
          )}
          aria-label="Previous speaker"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-12 w-12 items-center justify-center text-xl transition-all rounded-full",
            "bg-white border-2 border-neutral-200 text-primary-dark hover:bg-primary-dark hover:text-white hover:border-primary-dark shadow-sm",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
          )}
          aria-label="Next speaker"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

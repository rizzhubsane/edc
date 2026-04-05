import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./InteractiveSelector.css";

/**
 * Expanding panels pattern from footer.md (interactive-selector), adapted for Vite + Tailwind.
 */
export function InteractiveSelector({
  heading,
  subheading,
  options = [],
  className = "",
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState([]);

  const handleOptionClick = (index) => {
    if (index !== activeIndex) setActiveIndex(index);
  };

  useEffect(() => {
    const timers = options.map((_, i) =>
      setTimeout(() => {
        setAnimatedOptions((prev) => (prev.includes(i) ? prev : [...prev, i]));
      }, 180 * i)
    );
    return () => timers.forEach(clearTimeout);
  }, [options.length]);

  if (!options.length) return null;

  return (
    <div
      className={`relative flex w-full flex-col items-center justify-center font-body text-white ${className}`}
    >
      {(heading || subheading) && (
        <div className="mb-10 w-full max-w-3xl px-4 text-center md:mb-14">
          {heading && (
            <div className="inline-flex flex-col items-center gap-4">
              <h2 className="initiatives-interactive__title-animate font-heading text-[clamp(3rem,6vw,4.5rem)] font-extrabold tracking-tight text-text-primary drop-shadow-md">
                {heading}
              </h2>
              <div
                className="h-1 w-10 rounded-full bg-accent-cyan"
                aria-hidden
              />
            </div>
          )}
          {subheading && (
            <p className="initiatives-interactive__subtitle-animate mt-4 text-base font-medium text-text-body md:text-xl">
              {subheading}
            </p>
          )}
        </div>
      )}

      <div className="flex h-auto min-h-[min(52vh,520px)] w-full max-w-[min(96vw,1320px)] flex-col gap-2 px-3 sm:px-4 md:h-[min(62vh,620px)] md:min-h-[520px] md:flex-row md:gap-0 md:overflow-hidden md:rounded-2xl md:border-2 md:border-white/[0.18] md:px-0 md:ring-2 md:ring-white/[0.07] lg:max-w-[min(94vw,1440px)] lg:h-[min(65vh,680px)]">
        {options.map((option, index) => {
          const active = activeIndex === index;
          const visible = animatedOptions.includes(index);
          const src =
            typeof option.image === "string"
              ? option.image
              : option.image?.src ?? "";

          return (
            <div
              key={option.id ?? index}
              role="button"
              tabIndex={0}
              aria-expanded={active}
              aria-label={option.title}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleOptionClick(index);
                }
              }}
              className="option relative flex min-h-[120px] cursor-pointer flex-col justify-end overflow-hidden rounded-xl border-2 transition-all duration-700 ease-in-out md:min-h-0 md:rounded-none md:border-y-0 md:border-l-0 md:first:rounded-l-2xl md:last:rounded-r-2xl"
              style={{
                backgroundImage: `url('${src}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backfaceVisibility: "hidden",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-24px)",
                minWidth: 0,
                borderColor: active ? "rgba(56, 189, 248, 0.95)" : "rgba(255,255,255,0.12)",
                backgroundColor: "#18181b",
                boxShadow: active
                  ? "0 24px 72px rgba(0,0,0,0.5)"
                  : "0 12px 36px rgba(0,0,0,0.28)",
                flex: active ? "9 1 0%" : "1 1 0%",
                zIndex: active ? 10 : 1,
                willChange: "flex-grow, box-shadow, background-size",
              }}
              onClick={() => handleOptionClick(index)}
            >
              <div
                className={`initiatives-panel__scrim pointer-events-none absolute inset-x-0 bottom-0 z-[2] transition-[height,opacity] duration-700 ease-in-out ${
                  active ? "initiatives-panel__scrim--active" : ""
                }`}
                aria-hidden
              />

              <div className="label pointer-events-none absolute bottom-6 left-0 right-0 z-10 flex w-full flex-col items-stretch px-5 pb-1 md:bottom-8 md:px-7">
                <div className="info relative min-w-0 text-left text-white">
                  <div
                    className="main font-heading font-bold transition-all duration-700 ease-in-out text-base md:text-2xl lg:text-3xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]"
                    style={{
                      opacity: active ? 1 : 0,
                      transform: active ? "translateX(0)" : "translateX(20px)",
                    }}
                  >
                    {option.title}
                  </div>
                  <div
                    className="sub mt-1 max-w-[52ch] text-sm leading-relaxed text-text-body transition-all duration-700 ease-in-out md:text-base lg:text-lg drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]"
                    style={{
                      opacity: active ? 1 : 0,
                      transform: active ? "translateX(0)" : "translateX(20px)",
                    }}
                  >
                    {option.description}
                  </div>
                  {active && option.link ? (
                    <Link
                      to={option.link}
                      onClick={(e) => e.stopPropagation()}
                      className="pointer-events-auto mt-4 inline-flex items-center text-base font-semibold text-accent-cyan underline-offset-4 hover:underline"
                    >
                      Learn more <span className="ml-1">→</span>
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default InteractiveSelector;

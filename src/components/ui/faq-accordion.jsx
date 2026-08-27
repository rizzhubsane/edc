import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { faqItems } from '../../utility/faq.jsx'

const EASE = [0.22, 0.61, 0.36, 1]

export function FaqAccordion({ items = faqItems }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? null)
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <div className="w-full">
      {items.map((item) => {
        const isActive = activeId === item.id
        const isHovered = hoveredId === item.id

        return (
          <div key={item.id} className="relative">
            <motion.button
              type="button"
              onClick={() => setActiveId(isActive ? null : item.id)}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative w-full"
              initial={false}
              aria-expanded={isActive}
            >
              <div className="flex items-start gap-4 px-1 py-5 sm:gap-6">
                <div className="relative mt-0.5 flex size-10 shrink-0 items-center justify-center">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-ink"
                    initial={false}
                    animate={{
                      scale: isActive ? 1 : isHovered ? 0.85 : 0,
                      opacity: isActive ? 1 : isHovered ? 0.08 : 0,
                    }}
                    transition={{ duration: 0.45, ease: EASE }}
                  />
                  <motion.span
                    className="relative z-10 text-[13px] font-medium tracking-wide"
                    animate={{ color: isActive ? '#ffffff' : '#5c5470' }}
                    transition={{ duration: 0.35, ease: EASE }}
                  >
                    {item.number}
                  </motion.span>
                </div>

                <motion.h3
                  className="flex-1 text-left text-[17px] font-semibold leading-snug tracking-[-0.02em] sm:text-[20px] md:text-[22px]"
                  animate={{
                    x: isActive || isHovered ? 4 : 0,
                    color: isActive || isHovered ? '#0d0b2e' : '#5c5470',
                  }}
                  transition={{ duration: 0.45, ease: EASE }}
                >
                  {item.title}
                </motion.h3>

                <motion.div
                  className="ml-auto grid size-8 shrink-0 place-items-center text-ink"
                  animate={{ rotate: isActive ? 45 : 0 }}
                  transition={{ duration: 0.45, ease: EASE }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M8 1V15M1 8H15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.div>
              </div>

              <span className="absolute inset-x-0 bottom-0 h-px bg-hairline" />
              <motion.span
                className="absolute bottom-0 left-0 h-px origin-left bg-ink"
                initial={false}
                animate={{ scaleX: isActive ? 1 : isHovered ? 0.28 : 0 }}
                transition={{ duration: 0.5, ease: EASE }}
              />
            </motion.button>

            <AnimatePresence initial={false}>
              {isActive ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.55, ease: EASE }}
                  className="overflow-hidden"
                >
                  <div className="pt-8 pb-7 pl-4 pr-4 text-left text-[16px] leading-relaxed text-muted sm:pl-16 sm:pr-12">
                    {item.content}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

export default FaqAccordion

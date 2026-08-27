import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import gear1 from '../assets/gears/gear1.avif'
import gear2 from '../assets/gears/gear2.avif'
import gear3 from '../assets/gears/gear3.avif'
import gear4 from '../assets/gears/gear4.avif'

const EASE = [0.22, 0.61, 0.36, 1]
const SPRING = { stiffness: 38, damping: 22, mass: 1.15 }

const Hero = () => {
  const navigate = useNavigate()
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const yRightRaw = useTransform(scrollYProgress, [0, 1], [0, 42])
  const yLeftRaw = useTransform(scrollYProgress, [0, 1], [0, -22])
  const yFloatRaw = useTransform(scrollYProgress, [0, 1], [0, 28])
  const yBottomRaw = useTransform(scrollYProgress, [0, 1], [0, -32])
  const yRight = useSpring(yRightRaw, SPRING)
  const yLeft = useSpring(yLeftRaw, SPRING)
  const yFloat = useSpring(yFloatRaw, SPRING)
  const yBottom = useSpring(yBottomRaw, SPRING)

  return (
    <section
      ref={ref}
      className="hero-mesh relative flex flex-col items-center justify-center px-[var(--page-gutter)] text-center"
    >
      <div className="hero-gears" aria-hidden="true">
        <motion.div
          className="absolute -right-20 top-[68%] md:-right-20 md:top-[30%] lg:-right-24"
          style={reduce ? undefined : { y: yRight }}
        >
          <div className="hero-gear-spin relative h-[120px] w-[120px] md:h-[220px] md:w-[220px] lg:h-[300px] lg:w-[300px] xl:h-[340px] xl:w-[340px]">
            <img src={gear1} alt="" className="hero-gear__img" />
          </div>
        </motion.div>
        <motion.div
          className="absolute -left-16 top-[6%] md:-left-16 md:top-[12%] lg:-left-20"
          style={reduce ? undefined : { y: yLeft }}
        >
          <div className="hero-gear-spin-rev relative h-[110px] w-[110px] md:h-[200px] md:w-[200px] lg:h-[260px] lg:w-[260px] xl:h-[300px] xl:w-[300px]">
            <img src={gear2} alt="" className="hero-gear__img" />
          </div>
        </motion.div>
        <motion.div
          className="hero-gear-float absolute top-24 right-16 hidden opacity-80 md:top-28 md:right-36 md:block lg:top-32 lg:right-48 xl:right-60"
          style={reduce ? undefined : { y: yFloat }}
        >
          <div className="relative h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 xl:h-20 xl:w-20">
            <img src={gear4} alt="" className="hero-gear__img" />
          </div>
        </motion.div>
        <motion.div
          className="absolute -left-20 bottom-[2%] md:-left-20 md:bottom-[6%] lg:-left-24 lg:bottom-[8%]"
          style={reduce ? undefined : { y: yBottom }}
        >
          <div className="hero-gear-spin-rev relative h-[100px] w-[100px] md:h-[180px] md:w-[180px] lg:h-[220px] lg:w-[220px] xl:h-[250px] xl:w-[250px]">
            <img src={gear3} alt="" className="hero-gear__img" />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="relative z-[2] max-w-[820px] mx-auto"
        initial={reduce ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.25, ease: EASE, delay: 0.12 }}
      >
        <span className="hero-rule" aria-hidden="true" />
        <h1 className="text-hero font-heading font-semibold text-ink leading-[1.08] tracking-[-0.038em] text-balance">
          Entrepreneurship Development Cell
        </h1>
        <p className="mt-5 text-[18px] md:text-[20px] leading-relaxed text-muted max-w-[600px] mx-auto">
          India&apos;s largest student-driven entrepreneurship cell, fostering innovation at IIT Delhi.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button type="button" className="pill pill-fill h-11 px-5" onClick={() => navigate('/initial')}>
            Explore Initiatives
          </button>
          <button type="button" className="pill pill-ghost h-11 px-5" onClick={() => navigate('/contact')}>
            Join eDC
          </button>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

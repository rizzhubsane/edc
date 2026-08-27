import { motion, useReducedMotion } from 'framer-motion'

const EASE = [0.22, 0.61, 0.36, 1]

export function Reveal({ children, className, delay = 0, y = 16 }) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18, margin: '0px 0px -4% 0px' }}
      transition={{ duration: 1.15, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

export const staggerParent = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, ease: EASE },
  },
}

export function Stagger({ children, className }) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={staggerParent}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  )
}

export default Reveal

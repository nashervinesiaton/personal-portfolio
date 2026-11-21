import { motion, useReducedMotion } from 'motion/react'
import { fadeUp, viewport } from '../../lib/motion'

/** Fades children up when scrolled into view. */
export default function Reveal({ as = 'div', delay = 0, className, children }) {
  const Tag = motion[as]
  const reducedMotion = useReducedMotion()
  return (
    <Tag
      className={className}
      variants={fadeUp}
      initial={reducedMotion ? false : 'hidden'}
      whileInView={reducedMotion ? undefined : 'show'}
      viewport={viewport}
      transition={reducedMotion ? { duration: 0 } : { delay }}
    >
      {children}
    </Tag>
  )
}

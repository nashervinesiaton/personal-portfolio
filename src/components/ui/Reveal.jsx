import { motion } from 'motion/react'
import { fadeUp, viewport } from '../../lib/motion'

/** Fades children up when scrolled into view. */
export default function Reveal({ as = 'div', delay = 0, className, children }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      transition={{ delay }}
    >
      {children}
    </Tag>
  )
}

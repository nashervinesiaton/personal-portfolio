import { motion } from 'motion/react'
import { ease } from '../../lib/motion'

export default function PageHeader({ label, title, children }) {
  return (
    <header className="grain grid-lines relative overflow-hidden border-b border-line pb-14 pt-32 md:pb-20 md:pt-44">
      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-mute"
        >
          <span className="size-2 bg-accent" />
          {label}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="max-w-5xl font-display text-[clamp(2.5rem,8vw,6.5rem)] font-bold leading-[0.95] tracking-tighter"
        >
          {title}
        </motion.h1>
        {children && <div className="mt-8 max-w-2xl text-base leading-relaxed text-mute md:text-lg">{children}</div>}
      </div>
    </header>
  )
}

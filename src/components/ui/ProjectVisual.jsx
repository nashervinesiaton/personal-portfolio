import { motion } from 'motion/react'
import { cx } from '../../lib/utils'

/**
 * Clearly labelled interface placeholder, shown until real screenshots are supplied.
 * Pass `image` to render an actual screenshot instead.
 */
export default function ProjectVisual({ project, image, className, aspect = 'aspect-[16/10]' }) {
  return (
    <div className={cx('relative overflow-hidden border border-line bg-surface', aspect, className)}>
      <motion.div
        className="absolute inset-0"
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {image ? (
          <img src={image} alt={`${project.name} screenshot`} className="size-full object-cover" loading="lazy" />
        ) : (
          <div className="grid-lines grain relative size-full">
            {/* Wireframe window */}
            <div className="absolute inset-[8%] flex flex-col border border-line bg-ink/80">
              <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
                <span className="size-2 rounded-full bg-line" />
                <span className="size-2 rounded-full bg-line" />
                <span className="size-2 rounded-full bg-accent/70" />
              </div>
              <div className="grid flex-1 grid-cols-[22%_1fr] gap-3 p-3">
                <div className="space-y-2">
                  <div className="h-2 w-3/4 bg-line" />
                  <div className="h-2 w-1/2 bg-line/70" />
                  <div className="h-2 w-2/3 bg-line/70" />
                </div>
                <div className="space-y-3">
                  <div className="h-3 w-1/3 bg-paper/20" />
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-10 bg-line/60" />
                    <div className="h-10 bg-line/60" />
                    <div className="h-10 border border-accent/50 bg-accent/10" />
                  </div>
                  <div className="h-16 bg-line/40" />
                </div>
              </div>
            </div>
            <p className="absolute bottom-3 left-4 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-mute">
              Interface placeholder — screenshot to be added
            </p>
          </div>
        )}
      </motion.div>
    </div>
  )
}

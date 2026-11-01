import { motion } from 'motion/react'
import { cx } from '../../lib/utils'

/**
 * Clearly labelled interface placeholder, shown until real screenshots are supplied.
 * Pass `screenshot` ({ src, ratio, alt }) to render an actual screenshot at its natural proportions,
 * or `fill` to zoom into the top-left of it inside the given `aspect`, so grid cards stay uniform and text stays legible.
 */
export default function ProjectVisual({ screenshot, className, aspect = 'aspect-[16/10]', fill = false }) {
  if (screenshot) {
    // Framed like a browser window so light screenshots read as layered, not flat on the dark page.
    return (
      <div className={cx('relative', fill && aspect, className)}>
        <div className="absolute -bottom-3 -right-3 size-full border border-accent/70" aria-hidden />
        <div
          className={cx(
            'relative border border-paper/25 bg-surface shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)]',
            fill && 'flex h-full flex-col',
          )}
        >
          <div className="flex items-center gap-1.5 border-b border-paper/15 bg-surface px-3 py-2.5" aria-hidden>
            <span className="size-2.5 rounded-full bg-line" />
            <span className="size-2.5 rounded-full bg-line" />
            <span className="size-2.5 rounded-full bg-accent" />
          </div>
          <div
            className={cx('overflow-hidden', fill && 'relative min-h-0 flex-1')}
            style={fill ? undefined : { aspectRatio: screenshot.ratio }}
          >
            <motion.img
              src={screenshot.src}
              alt={screenshot.alt}
              className={cx(fill ? 'absolute left-0 top-0 h-auto w-[150%] max-w-none' : 'size-full object-cover')}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={cx('relative overflow-hidden border border-line bg-surface', aspect, className)}>
      <motion.div
        className="absolute inset-0"
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
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
      </motion.div>
    </div>
  )
}

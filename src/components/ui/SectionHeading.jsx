import Reveal from './Reveal'
import { cx } from '../../lib/utils'

export default function SectionHeading({ number, label, title, className }) {
  return (
    <Reveal className={cx('mb-12 md:mb-16', className)}>
      <p className="mb-4 flex items-center gap-3 font-sans text-xs font-medium uppercase tracking-[0.2em] text-mute">
        {number && <span className="text-accent">{number}</span>}
        <span className="h-px w-8 bg-line" />
        {label}
      </p>
      <h2 className="max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">{title}</h2>
    </Reveal>
  )
}

import { cx, isPlaceholder } from '../../lib/utils'

export default function Tag({ children, className }) {
  return (
    <span
      className={cx(
        'inline-block border px-3 py-1 font-sans text-xs font-medium tracking-wide',
        isPlaceholder(children) ? 'border-dashed border-line text-mute' : 'border-line text-paper',
        className,
      )}
    >
      {children}
    </span>
  )
}

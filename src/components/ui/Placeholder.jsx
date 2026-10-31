import { isPlaceholder } from '../../lib/utils'

/** Renders text; unconfirmed [BRACKETED] content is visibly styled as a placeholder. */
export default function Placeholder({ children, as: Tag = 'span', className = '' }) {
  if (isPlaceholder(children)) {
    return <Tag className={`border-b border-dashed border-mute/60 text-mute italic ${className}`}>{children}</Tag>
  }
  return <Tag className={className}>{children}</Tag>
}

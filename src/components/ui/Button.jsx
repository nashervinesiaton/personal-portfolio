import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { cx, isExternal } from '../../lib/utils'

const base =
  'group inline-flex min-h-12 items-center justify-center gap-2 px-6 font-sans text-sm font-semibold tracking-wide transition-colors duration-200'

const variants = {
  primary: 'bg-accent text-ink hover:bg-paper',
  secondary: 'border border-line text-paper hover:border-accent hover:text-accent',
  ghost: 'text-paper hover:text-accent px-0',
}

/** Renders a router Link, external anchor, or button depending on props. */
export default function Button({ to, href, variant = 'primary', icon = true, className, children, ...rest }) {
  const cls = cx(base, variants[variant], className)
  const arrow = icon && (
    <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
  )

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
        {arrow}
      </Link>
    )
  }
  if (href) {
    const ext = isExternal(href)
    return (
      <a href={href} className={cls} {...(ext && { target: '_blank', rel: 'noreferrer noopener' })} {...rest}>
        {children}
        {arrow}
      </a>
    )
  }
  return (
    <button className={cls} {...rest}>
      {children}
      {arrow}
    </button>
  )
}

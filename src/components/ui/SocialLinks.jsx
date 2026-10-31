import { Mail } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'
import { profile } from '../../data/profile'

/** Only links with a real URL are rendered as anchors; the rest show as disabled placeholders. */
export default function SocialLinks({ className = '' }) {
  const links = [
    { label: 'GitHub', href: profile.github, Icon: Github },
    { label: 'LinkedIn', href: profile.linkedin, Icon: Linkedin },
    { label: 'Email', href: profile.email && `mailto:${profile.email}`, Icon: Mail },
  ]

  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {links.map(({ label, href, Icon }) => (
        <li key={label}>
          {href ? (
            <a
              href={href}
              aria-label={label}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer noopener"
              className="grid size-11 place-items-center border border-line text-paper transition-colors hover:border-accent hover:text-accent"
            >
              <Icon size={18} />
            </a>
          ) : (
            <span
              title={`${label} — to be added`}
              aria-label={`${label} (to be added)`}
              className="grid size-11 cursor-not-allowed place-items-center border border-dashed border-line text-mute/60"
            >
              <Icon size={18} />
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}

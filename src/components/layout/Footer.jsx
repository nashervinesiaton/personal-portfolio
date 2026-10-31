import { Link } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'
import { navItems, profile } from '../../data/profile'
import { Wordmark } from '../navigation/Navbar'
import SocialLinks from '../ui/SocialLinks'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink-2">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-10">
        <div>
          <Wordmark className="text-2xl" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-mute">{profile.title} · West Visayas State University</p>
        </div>

        <nav aria-label="Footer">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-mute">Navigate</p>
          <ul className="space-y-2">
            {navItems.map(({ label, to }) => (
              <li key={to}>
                <Link to={to} className="text-sm text-paper transition-colors hover:text-accent">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-mute">Elsewhere</p>
          <SocialLinks />
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-6 md:px-10">
          <p className="text-xs text-mute">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group inline-flex min-h-11 items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-paper transition-colors hover:text-accent"
          >
            Back to top
            <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}

import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { navItems } from '../../data/profile'
import { useScrolled } from '../../hooks/useScrolled'
import { cx } from '../../lib/utils'

export function Wordmark({ className }) {
  return (
    <span className={cx('font-display text-lg font-bold tracking-tight', className)}>
      nash<span className="text-accent">.</span>siaton
    </span>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()
  const { pathname } = useLocation()

  // Lock page scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const isActive = (to) => (to === '/' ? pathname === '/' : pathname.startsWith(to))

  return (
    <>
    <header
      className={cx(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || open ? 'border-b border-line bg-ink/90 backdrop-blur-md' : 'border-b border-transparent',
      )}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-10">
        <Link to="/" aria-label="Home" className="relative z-10" onClick={() => setOpen(false)}>
          <Wordmark />
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {navItems.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={cx(
                  'relative py-2 text-sm font-medium tracking-wide transition-colors',
                  isActive(to) ? 'text-paper' : 'text-mute hover:text-paper',
                )}
              >
                {label}
                {isActive(to) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-accent"
                    transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                  />
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="relative z-10 grid size-11 place-items-center border border-line md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

    </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 bottom-0 top-16 z-40 h-[calc(100dvh-4rem)] overflow-y-auto bg-ink md:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } } }}
              className="flex min-h-full flex-col justify-center gap-2 px-5 py-8"
            >
              {navItems.map(({ label, to }, i) => (
                <motion.li
                  key={to}
                  variants={{ hidden: { opacity: 0, x: -16 }, show: { opacity: 1, x: 0 } }}
                  className="border-b border-line"
                >
                  <Link
                    to={to}
                    onClick={() => setOpen(false)}
                    className={cx(
                      'flex items-baseline gap-4 py-4 font-display text-4xl font-bold',
                      isActive(to) ? 'text-accent' : 'text-paper',
                    )}
                  >
                    <span className="text-xs font-medium text-mute">0{i + 1}</span>
                    {label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

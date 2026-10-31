import { motion } from 'motion/react'
import { User } from 'lucide-react'
import { profile } from '../../data/profile'
import { ease } from '../../lib/motion'
import Button from '../ui/Button'
import CvButton from '../ui/CvButton'
import SocialLinks from '../ui/SocialLinks'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }

export default function Hero() {
  return (
    <section className="grain grid-lines relative overflow-hidden pt-28 md:pt-36">
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-16 md:px-10 md:pb-24 lg:grid-cols-12">
        <motion.div variants={container} initial="hidden" animate="show" className="lg:col-span-8">
          <motion.p
            variants={item}
            className="mb-8 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-mute"
          >
            <span className="size-2 bg-accent" />
            Portfolio — {new Date().getFullYear()}
          </motion.p>

          <h1 className="font-display font-bold leading-[0.88] tracking-tighter">
            <motion.span variants={item} className="block text-[clamp(3.5rem,13vw,10rem)]">
              Nash
            </motion.span>
            <motion.span variants={item} className="outline-text block text-[clamp(3.5rem,13vw,10rem)] lg:ml-[0.6em]">
              Ervine
            </motion.span>
            <motion.span variants={item} className="block text-[clamp(3.5rem,13vw,10rem)]">
              Siaton<span className="text-accent">.</span>
            </motion.span>
          </h1>

          <motion.p variants={item} className="mt-10 font-display text-xl font-medium text-accent md:text-2xl">
            {profile.title}
          </motion.p>
          <motion.p variants={item} className="mt-4 max-w-xl text-base leading-relaxed text-mute md:text-lg">
            {profile.intro}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
            <Button to="/projects">View Projects</Button>
            <CvButton />
          </motion.div>

          <motion.div variants={item} className="mt-8">
            <SocialLinks />
          </motion.div>
        </motion.div>

        {/* Portrait — offset and layered for an asymmetrical composition */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease }}
          className="relative mx-auto w-full max-w-xs self-end sm:max-w-sm lg:col-span-4 lg:mx-0 lg:mb-4 lg:translate-y-10"
        >
          <div className="absolute -bottom-4 -left-4 size-full border border-accent" aria-hidden />
          <div className="relative aspect-[4/5] overflow-hidden border border-line bg-surface">
            {profile.portrait ? (
              <img src={profile.portrait} alt={`Portrait of ${profile.name}`} className="size-full object-cover" />
            ) : (
              <div className="grid size-full place-items-center">
                <div className="text-center text-mute">
                  <User size={64} strokeWidth={1} className="mx-auto" />
                  <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.2em]">Portrait placeholder</p>
                </div>
              </div>
            )}
          </div>
          <p className="absolute -right-2 top-6 origin-top-right translate-x-full rotate-90 whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.25em] text-mute max-lg:hidden">
            BSIS · WVSU
          </p>
        </motion.div>
      </div>

      <div className="border-y border-line bg-ink-2/60">
        <p className="mx-auto max-w-7xl px-5 py-5 font-display text-lg font-medium md:px-10 md:text-xl">
          “{profile.headline}”
        </p>
      </div>
    </section>
  )
}

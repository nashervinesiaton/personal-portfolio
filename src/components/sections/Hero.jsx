import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react'
import { User } from 'lucide-react'
import { profile } from '../../data/profile'
import { ease } from '../../lib/motion'
import Button from '../ui/Button'
import CvButton from '../ui/CvButton'
import SocialLinks from '../ui/SocialLinks'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }

export default function Hero() {
  const reducedMotion = useReducedMotion()
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springRotateX = useSpring(rotateX, { stiffness: 180, damping: 22 })
  const springRotateY = useSpring(rotateY, { stiffness: 180, damping: 22 })

  const handlePortraitMove = (event) => {
    if (reducedMotion || event.pointerType === 'touch') return

    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5

    rotateX.set(y * -8)
    rotateY.set(x * 8)
  }

  const resetPortrait = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <section className="grain grid-lines relative overflow-hidden pt-24 md:pt-28">
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-12 md:px-10 md:pb-16 lg:grid-cols-12">
        <motion.div
          variants={container}
          initial={reducedMotion ? false : 'hidden'}
          animate="show"
          className="lg:col-span-8"
        >
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
          initial={reducedMotion ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.9, delay: 0.4, ease }}
          onPointerMove={handlePortraitMove}
          onPointerLeave={resetPortrait}
          style={{ rotateX: springRotateX, rotateY: springRotateY, transformPerspective: 900 }}
          className="relative mx-auto w-full max-w-[17rem] sm:max-w-[19rem] lg:col-span-4 lg:mx-0 lg:mt-10 lg:self-start lg:max-w-[20rem]"
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

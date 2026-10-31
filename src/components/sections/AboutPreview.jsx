import { aboutSummary } from '../../data/profile'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function AboutPreview() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <SectionHeading number="01" label="About" title="Software that serves the people behind the process." />

      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="space-y-5 text-base leading-relaxed text-mute md:text-lg lg:col-span-6">
          {aboutSummary.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <div className="pt-4">
            <Button to="/about" variant="secondary">
              More about me
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="space-y-10 lg:col-span-5 lg:col-start-8">
          <blockquote className="border-l-2 border-accent pl-5 font-display text-xl font-medium leading-snug md:text-2xl">
            {aboutSummary.philosophy}
          </blockquote>
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-mute">Areas of interest</p>
            <ul className="divide-y divide-line border-y border-line">
              {aboutSummary.interests.map((interest, i) => (
                <li key={interest} className="flex items-baseline gap-4 py-3 font-display text-lg">
                  <span className="text-xs text-accent">0{i + 1}</span>
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

import { achievements, education } from '../../data/profile'
import Placeholder from '../ui/Placeholder'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function EducationAchievements() {
  return (
    <section className="bg-ink-2 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeading number="04" label="Education & activities" title="Where I study, and what I take part in." />

        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-mute">Education</p>
            {education.map((e) => (
              <Reveal key={e.school} className="border-l-2 border-accent pl-6">
                <h3 className="font-display text-2xl font-bold md:text-3xl">{e.school}</h3>
                <p className="mt-3 text-paper">{e.degree}</p>
                <p className="mt-1 text-mute">{e.focus}</p>
                <p className="mt-4 text-sm">
                  <Placeholder>{e.period}</Placeholder>
                </p>
              </Reveal>
            ))}
          </div>

          <div className="lg:col-span-7">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-mute">Achievements & activities</p>
            <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
              {achievements.map(({ group, items }, i) => (
                <Reveal key={group} delay={i * 0.05} className="bg-ink-2 p-6">
                  <h3 className="font-display text-lg font-semibold">{group}</h3>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed">
                    {items.map((item) => (
                      <li key={item}>
                        <Placeholder>{item}</Placeholder>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

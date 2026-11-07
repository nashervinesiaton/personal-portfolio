import { skills } from '../../data/profile'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

function Technology({ name, slug }) {
  return (
    <li className="skills-tech group flex items-center gap-3 border-b border-line/70 py-3 last:border-b-0">
      <span className="skills-icon flex size-9 shrink-0 items-center justify-center border border-line bg-ink-2 p-2 text-accent transition-transform duration-300 group-hover:scale-110">
        <img
          src={`https://cdn.simpleicons.org/${slug}/66B538`}
          alt=""
          className="size-full object-contain"
          loading="lazy"
        />
      </span>
      <span className="font-display text-sm font-medium text-mute transition-colors duration-300 group-hover:text-paper">
        {name}
      </span>
    </li>
  )
}

function SkillPanel({ category, items, index }) {
  return (
    <Reveal
      delay={index * 0.06}
      className="skills-panel group relative overflow-hidden border border-line bg-surface p-5 transition-colors duration-300 hover:border-accent/60 hover:bg-ink-2 md:p-6"
    >
      <div className="skills-panel-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative flex h-full flex-col">
        <div className="mb-7 flex items-start justify-between gap-3">
          <div>
            <p className="mb-3 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
              {String(index + 1).padStart(2, '0')} / 04
            </p>
            <h3 className="max-w-[11rem] font-display text-xl font-semibold leading-tight tracking-tight text-paper md:text-2xl">
              {category}
            </h3>
          </div>
          <span className="font-display text-6xl font-bold leading-none text-paper/[0.07]" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <ul className="mt-auto">
          {items.map((item) => (
            <Technology key={item.name} {...item} />
          ))}
        </ul>
      </div>
    </Reveal>
  )
}

export default function Skills({ number = '03' }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <SectionHeading number={number} label="Technical skills" title="The tools I work with." />

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillPanel key={skill.category} {...skill} index={index} />
        ))}
      </div>
    </section>
  )
}

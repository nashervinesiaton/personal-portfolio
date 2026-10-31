import { skills } from '../../data/profile'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import Tag from '../ui/Tag'

export default function Skills({ number = '03' }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <SectionHeading number={number} label="Technical skills" title="The tools I work with." />

      <dl className="border-t border-line">
        {skills.map(({ category, items }, i) => (
          <Reveal key={category} delay={i * 0.04} className="grid gap-4 border-b border-line py-7 md:grid-cols-12 md:items-baseline">
            <dt className="font-display text-xl font-semibold md:col-span-4 md:text-2xl">{category}</dt>
            <dd className="md:col-span-8">
              <ul className="flex flex-wrap gap-2">
                {items.map(({ name }) => (
                  <li key={name}>
                    <Tag>{name}</Tag>
                  </li>
                ))}
              </ul>
            </dd>
          </Reveal>
        ))}
      </dl>
    </section>
  )
}

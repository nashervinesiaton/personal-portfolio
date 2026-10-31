import { achievements, education, profile, skills } from '../data/profile'
import { projects } from '../data/projects'
import CvButton from '../components/ui/CvButton'
import PageHeader from '../components/ui/PageHeader'
import Placeholder from '../components/ui/Placeholder'

function Section({ title, children }) {
  return (
    <section className="grid gap-4 border-t border-line py-8 md:grid-cols-12 md:gap-10">
      <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent md:col-span-3">{title}</h2>
      <div className="md:col-span-9">{children}</div>
    </section>
  )
}

export default function Resume() {
  return (
    <>
      <PageHeader label="Resume" title="Curriculum vitae.">
        <div className="space-y-6">
          <p>A one-page summary of my education, skills, and work. A printable PDF will be linked once the final content is supplied.</p>
          <CvButton />
        </div>
      </PageHeader>

      {/* Single-column, print-friendly layout intended to map to a one-page PDF */}
      <article className="mx-auto max-w-4xl px-5 py-16 md:px-10 md:py-24">
        <header className="mb-10">
          <h2 className="font-display text-3xl font-bold md:text-4xl">{profile.name}</h2>
          <p className="mt-1 text-accent">{profile.title}</p>
        </header>

        <Section title="Summary">
          <p className="leading-relaxed text-mute">{profile.intro}</p>
        </Section>

        <Section title="Education">
          {education.map((e) => (
            <div key={e.school}>
              <p className="font-display text-xl font-semibold">{e.school}</p>
              <p className="text-mute">{e.degree}</p>
              <p className="text-mute">{e.focus}</p>
              <p className="mt-2 text-sm"><Placeholder>{e.period}</Placeholder></p>
            </div>
          ))}
        </Section>

        <Section title="Technical skills">
          <dl className="space-y-3">
            {skills.map(({ category, items }) => (
              <div key={category} className="grid gap-1 sm:grid-cols-[12rem_1fr]">
                <dt className="font-semibold">{category}</dt>
                <dd className="text-mute">
                  {items.map((it, i) => (
                    <span key={it.name}>
                      {i > 0 && ', '}
                      <Placeholder>{it.name}</Placeholder>
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section title="Projects">
          <ul className="space-y-5">
            {projects.map((p) => (
              <li key={p.slug}>
                <p className="font-display text-lg font-semibold">{p.name}</p>
                <p className="text-sm text-mute"><Placeholder>{p.type}</Placeholder> · {p.tech.join(', ')}</p>
                <p className="mt-1 text-mute"><Placeholder>{p.summary}</Placeholder></p>
              </li>
            ))}
          </ul>
        </Section>

        {achievements.map(({ group, items }) => (
          <Section key={group} title={group}>
            <ul className="space-y-1 text-mute">
              {items.map((i) => (
                <li key={i}><Placeholder>{i}</Placeholder></li>
              ))}
            </ul>
          </Section>
        ))}

        <Section title="Contact">
          <ul className="space-y-1 text-mute">
            <li>Email: {profile.email || <Placeholder>[EMAIL TO ADD]</Placeholder>}</li>
            <li>GitHub: <a className="text-paper hover:text-accent" href={profile.github}>{profile.github}</a></li>
            <li>LinkedIn: {profile.linkedin || <Placeholder>[LINKEDIN URL TO ADD]</Placeholder>}</li>
          </ul>
        </Section>
      </article>
    </>
  )
}

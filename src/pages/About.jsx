import { aboutSummary, profile } from '../data/profile'
import EducationAchievements from '../components/sections/EducationAchievements'
import Skills from '../components/sections/Skills'
import Button from '../components/ui/Button'
import PageHeader from '../components/ui/PageHeader'
import Placeholder from '../components/ui/Placeholder'
import Reveal from '../components/ui/Reveal'

export default function About() {
  return (
    <>
      <PageHeader label="About" title="An aspiring developer with an eye for practical problems." />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-12">
        <Reveal className="space-y-5 text-base leading-relaxed text-mute md:text-lg lg:col-span-6">
          {aboutSummary.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p>
            <Placeholder>[PERSONAL STORY / WHAT GOT YOU INTO PROGRAMMING — TO BE WRITTEN]</Placeholder>
          </p>
          <Button href={profile.github} variant="secondary">
            See my GitHub
          </Button>
        </Reveal>
        <Reveal delay={0.1} className="space-y-8 lg:col-span-5 lg:col-start-8">
          <blockquote className="border-l-2 border-accent pl-5 font-display text-2xl font-medium leading-snug">
            {aboutSummary.philosophy}
          </blockquote>
          <ul className="divide-y divide-line border-y border-line">
            {aboutSummary.interests.map((i) => (
              <li key={i} className="py-3 font-display text-lg">
                {i}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <Skills number="01" />
      <EducationAchievements />
    </>
  )
}

import { projects } from '../../data/projects'
import { cx } from '../../lib/utils'
import Button from '../ui/Button'
import ProjectFeature from '../ui/ProjectFeature'
import SectionHeading from '../ui/SectionHeading'

/** TTMPC leads as the hero project; the rest follow in a staggered grid. */
export default function FeaturedProjects({ showAllLink = true }) {
  const [primary, ...others] = projects

  return (
    <section className="bg-ink-2 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeading number="02" label="Selected work" title="Projects built to solve real problems." />

        <ProjectFeature project={primary} variant="hero" />

        <div className="mt-24 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((p, i) => (
            <div key={p.slug} className={cx(i % 2 === 1 && 'lg:translate-y-16')}>
              <ProjectFeature project={p} variant="compact" />
            </div>
          ))}
        </div>

        {showAllLink && (
          <div className="mt-24 flex justify-center lg:mt-36">
            <Button to="/projects" variant="secondary">
              All projects
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

import { homeProjectSlugs, projects } from '../../data/projects'
import Button from '../ui/Button'
import ProjectFeature from '../ui/ProjectFeature'
import SectionHeading from '../ui/SectionHeading'

/**
 * TTMPC leads as the hero project; the rest follow in a uniform two-column grid.
 * By default only the home-page selection is shown; pass `all` to list every project.
 */
export default function FeaturedProjects({ all = false, showAllLink = !all }) {
  const list = all ? projects : homeProjectSlugs.map((slug) => projects.find((p) => p.slug === slug))
  const [primary, ...others] = list

  return (
    <section className="bg-ink-2 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeading number="02" label="Selected work" title="Projects built to solve real problems." />

        <ProjectFeature project={primary} index="01" variant="hero" />

        <div className="mt-24 grid gap-x-12 gap-y-20 md:grid-cols-2">
          {others.map((p, i) => (
            <ProjectFeature key={p.slug} project={p} index={String(i + 2).padStart(2, '0')} variant="compact" />
          ))}
        </div>

        {showAllLink && (
          <div className="mt-24 flex justify-center">
            <Button to="/projects" variant="secondary">
              All projects
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

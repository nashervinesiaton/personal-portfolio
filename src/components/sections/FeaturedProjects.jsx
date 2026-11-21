import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { homeProjectSlugs, projects } from '../../data/projects'
import ProjectFeature from '../ui/ProjectFeature'
import Reveal from '../ui/Reveal'

export default function FeaturedProjects({ all = false, showAllLink = !all }) {
  const list = all
    ? ['ttmpc', 'nahum-stock', ...projects.map((project) => project.slug).filter((slug) => !['ttmpc', 'nahum-stock'].includes(slug))].map(
        (slug) => projects.find((project) => project.slug === slug),
      )
    : homeProjectSlugs.map((slug) => projects.find((project) => project.slug === slug))
  const [primary, secondary] = list
  const featuredSlugs = [primary?.slug, secondary?.slug].filter(Boolean)
  const directory = projects.filter((project) => !featuredSlugs.includes(project.slug))

  return (
    <section className="bg-ink-2 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="mb-14 max-w-3xl md:mb-16">
          <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-mute">
            <span className="text-accent">02</span>
            <span className="h-px w-8 bg-line" />
            Selected work
          </p>
          <h2 className="font-display text-5xl font-bold leading-[0.95] tracking-tighter md:text-7xl">
            Projects built around real problems.
          </h2>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-mute md:text-base">
            Projects from coursework and independent practice, including a cooperative finance platform, a pet adoption record system, and an inventory tool for a café.
          </p>
          {showAllLink && (
            <Link to="/projects" className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-paper transition-colors hover:text-accent">
              View all projects
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          )}
        </Reveal>

        {primary && <ProjectFeature project={primary} index="01" variant="hero" />}

        {secondary && (
          <div className="mt-20 border-t border-line pt-10 md:mt-24 md:pt-14">
            <ProjectFeature project={secondary} index="02" variant="secondary" />
          </div>
        )}

        {directory.length > 0 && (
          <div className="mt-20 md:mt-24">
            <div className="mb-8 flex items-end justify-between border-b border-line pb-4">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-mute">More work</p>
              <span className="text-xs text-accent">{String(directory.length).padStart(2, '0')} projects</span>
            </div>
            <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {directory.map((project) => (
                <ProjectFeature
                  key={project.slug}
                  project={project}
                  index={project.index}
                  variant="directory"
                />
              ))}
            </ul>
          </div>
        )}

        {showAllLink && (
          <div className="mt-14 border-t border-line pt-6">
            <Link to="/projects" className="group inline-flex items-center gap-2 text-sm font-semibold text-mute transition-colors hover:text-accent">
              Browse the complete project index
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

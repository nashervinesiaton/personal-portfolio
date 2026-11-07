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
  const [primary, secondary, ...directory] = list

  return (
    <section className="bg-ink-2 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="mb-20 max-w-3xl md:mb-24">
          <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-mute">
            <span className="text-accent">02</span>
            <span className="h-px w-8 bg-line" />
            Selected work
          </p>
          <h2 className="font-display text-5xl font-bold leading-[0.95] tracking-tighter md:text-7xl">
            Projects built around real problems.
          </h2>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-mute md:text-base">
            A selection of academic and personal projects focused on building practical digital solutions through development, experimentation, and problem-solving.
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
          <div className="mt-28 border-t border-line pt-14 md:mt-40 md:pt-20">
            <ProjectFeature project={secondary} index="02" variant="secondary" />
          </div>
        )}

        {directory.length > 0 && (
          <div className="mt-28 md:mt-40">
            <div className="mb-8 flex items-end justify-between border-b border-line pb-4">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-mute">More work</p>
              <span className="text-xs text-accent">{String(directory.length).padStart(2, '0')} projects</span>
            </div>
            <ul>
              {directory.map((project, i) => (
                <ProjectFeature
                  key={project.slug}
                  project={project}
                  index={String(i + (all ? 3 : 3)).padStart(2, '0')}
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

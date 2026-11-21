import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Placeholder from './Placeholder'
import ProjectVisual from './ProjectVisual'
import Reveal from './Reveal'
import { cx, isPlaceholder } from '../../lib/utils'

function ProjectLink({ project, children = 'View Project Details' }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group inline-flex min-h-11 w-fit items-center gap-2 border-b border-accent pb-1 text-sm font-semibold transition-colors hover:text-accent"
    >
      {children}
      <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  )
}

function TechList({ project, limit = 5 }) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium uppercase tracking-[0.12em] text-mute">
      {project.tech.slice(0, limit).map((technology) => (
        <li key={technology} className={isPlaceholder(technology) ? 'text-mute/70' : undefined}>
          {isPlaceholder(technology) ? <Placeholder>To verify</Placeholder> : technology}
        </li>
      ))}
    </ul>
  )
}

function ProjectMeta({ project, index }) {
  return (
    <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-mute">
      <span className="text-accent">{index}</span>
      <span className="h-px w-8 bg-line" />
      {isPlaceholder(project.category) ? 'Coming soon' : project.category}
    </p>
  )
}

export default function ProjectFeature({ project, index = project.index, variant = 'hero' }) {
  if (variant === 'directory') {
    return (
      <Reveal as="li" className="group h-full">
        <Link
          to={`/projects/${project.slug}`}
          className="relative flex h-full min-h-64 flex-col overflow-hidden border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_20px_50px_-30px_rgba(102,181,56,0.35)]"
        >
          <div className="mb-8 flex items-start justify-between gap-4">
            <span className="font-display text-4xl font-bold leading-none text-accent/70">{index}</span>
            <ArrowUpRight
              size={20}
              className="text-mute transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
            />
          </div>
          <div className="relative z-10 mt-auto">
            <h3 className="font-display text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-accent md:text-3xl">
              {project.name}
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-mute">
              {isPlaceholder(project.summary) ? <Placeholder>Details to be added.</Placeholder> : project.summary}
            </p>
            <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.15em] text-accent">{project.status}</p>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
              {project.tech.slice(0, 3).map((technology) => (
                <li
                  key={technology}
                  className="border border-line px-2 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-mute transition-colors duration-300 group-hover:border-accent/50 group-hover:text-paper"
                >
                  {isPlaceholder(technology) ? 'To verify' : technology}
                </li>
              ))}
            </ul>
          </div>
        </Link>
      </Reveal>
    )
  }

  const isSecondary = variant === 'secondary'
  const role = project.caseStudy?.role

  return (
    <Reveal className="relative">
      <article
        className={cx(
          'grid items-center gap-8 border border-line bg-surface p-5 shadow-[0_30px_70px_-45px_rgba(0,0,0,0.9)] md:p-8',
          isSecondary ? 'md:grid-cols-12' : 'md:grid-cols-12',
        )}
      >
        <Link
          to={`/projects/${project.slug}`}
          aria-label={`${project.name} project details`}
          className={cx(
            'group block',
            isSecondary ? 'md:order-2 md:col-span-7' : 'md:col-span-7',
          )}
        >
          <ProjectVisual
            screenshot={project.screenshots?.[0]}
            aspect={isSecondary ? 'aspect-[4/3]' : 'aspect-[16/10]'}
          />
        </Link>

        <div
          className={cx(
            'flex flex-col gap-5',
            isSecondary ? 'md:order-1 md:col-span-5 md:pr-4' : 'md:col-span-5',
          )}
        >
          <ProjectMeta project={project} index={index} />
          <h3 className={cx('font-display font-bold leading-[0.98] tracking-tight', isSecondary ? 'text-4xl md:text-5xl' : 'text-4xl md:text-6xl')}>
            {project.name}
          </h3>
          {project.fullTitle && (
            <p className="font-display text-base font-medium italic leading-snug text-paper/80">
              {project.fullTitle}
            </p>
          )}
          <p className="text-sm leading-relaxed text-mute md:text-base">
            {isPlaceholder(project.summary) ? <Placeholder>Details to be added.</Placeholder> : project.summary}
          </p>
          {role && (
            <p className="border-l border-accent pl-4 text-sm leading-relaxed text-paper/80">
              {isPlaceholder(role) ? <Placeholder>Role to be confirmed.</Placeholder> : role}
            </p>
          )}
          {!isSecondary && project.innovations && (
            <ul className="space-y-3 border-t border-line pt-5 text-sm text-paper/85">
              {project.innovations.map((innovation) => (
                <li key={innovation} className="flex gap-3">
                  <span className="mt-1.5 size-1.5 shrink-0 bg-accent" />
                  {innovation}
                </li>
              ))}
            </ul>
          )}
          <TechList project={project} />
          <ProjectLink project={project} />
        </div>
      </article>
    </Reveal>
  )
}

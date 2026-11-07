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
      <Reveal as="li" className="group border-t border-line py-6 last:border-b md:py-7">
        <Link to={`/projects/${project.slug}`} className="grid gap-4 md:grid-cols-12 md:items-center md:gap-6">
          <span className="text-xs font-medium text-accent md:col-span-1">{index}</span>
          <h3 className="font-display text-2xl font-bold tracking-tight transition-colors group-hover:text-accent md:col-span-4 md:text-3xl">
            {project.name}
          </h3>
          <p className="text-sm leading-relaxed text-mute md:col-span-5">
            {isPlaceholder(project.summary) ? <Placeholder>Details to be added.</Placeholder> : project.summary}
          </p>
          <ArrowUpRight
            size={20}
            className="hidden justify-self-end text-mute transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent md:col-span-2 md:block"
          />
        </Link>
      </Reveal>
    )
  }

  const isSecondary = variant === 'secondary'
  const role = project.caseStudy?.role

  return (
    <Reveal className={cx('relative', isSecondary && 'md:ml-[8%]')}>
      <article
        className={cx(
          'grid items-center gap-8 md:gap-12',
          isSecondary ? 'md:grid-cols-12' : 'lg:grid-cols-12',
        )}
      >
        <Link
          to={`/projects/${project.slug}`}
          aria-label={`${project.name} project details`}
          className={cx(
            'group block',
            isSecondary ? 'md:order-2 md:col-span-7' : 'lg:col-span-8',
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
            isSecondary ? 'md:order-1 md:col-span-5 md:pr-4' : 'lg:col-span-4 lg:pl-2',
          )}
        >
          <ProjectMeta project={project} index={index} />
          <h3 className={cx('font-display font-bold leading-[0.98] tracking-tight', isSecondary ? 'text-4xl md:text-5xl' : 'text-4xl md:text-6xl')}>
            {project.name}
          </h3>
          {project.fullTitle && (
            <p className="font-display text-base font-medium leading-snug text-paper/80">
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

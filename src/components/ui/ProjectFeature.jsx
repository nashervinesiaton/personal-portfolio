import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Placeholder from './Placeholder'
import ProjectVisual from './ProjectVisual'
import Reveal from './Reveal'
import Tag from './Tag'
import { cx, isPlaceholder } from '../../lib/utils'

/**
 * Project presentation with variants so the list does not feel repetitive:
 *  - hero:    full-bleed 2-column showcase (primary project)
 *  - wide:    visual left, copy right
 *  - flip:    copy left, visual right
 *  - compact: uniform card for a grid (visual on top, copy below)
 */
const visualProps = {
  hero: { aspect: 'aspect-[16/10]' },
  wide: { aspect: 'aspect-[16/10]' },
  flip: { aspect: 'aspect-[4/3]' },
  compact: { aspect: 'aspect-[16/10]', fill: true },
}

export default function ProjectFeature({ project, index = project.index, variant = 'wide' }) {
  const isHero = variant === 'hero'
  const flip = variant === 'flip'
  const compact = variant === 'compact'

  const copy = (
    <div className={cx('flex flex-col', compact ? 'h-full gap-4' : 'justify-center', isHero ? 'gap-6' : 'gap-4')}>
      <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-mute">
        <span className="text-accent">{index}</span>
        <span className="h-px w-6 bg-line" />
        {isPlaceholder(project.category) ? 'Coming soon' : project.category}
      </p>
      <h3
        className={cx(
          'font-display font-bold leading-[1.05] tracking-tight',
          isHero ? 'text-4xl md:text-6xl' : compact ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl',
        )}
      >
        {project.name}
      </h3>
      <p className="text-sm leading-relaxed text-mute md:text-base">
        {isPlaceholder(project.summary) ? <Placeholder>Details to be added.</Placeholder> : project.summary}
      </p>

      {isHero && project.innovations && (
        <ul className="space-y-2 border-t border-line pt-5">
          {project.innovations.map((n) => (
            <li key={n} className="flex gap-3 text-sm font-medium">
              <span className="mt-1.5 size-2 shrink-0 bg-accent" />
              {n}
            </li>
          ))}
        </ul>
      )}

      <ul className="flex flex-wrap gap-2">
        {project.tech.filter((t) => !isPlaceholder(t)).map((t) => (
          <li key={t}>
            <Tag>{t}</Tag>
          </li>
        ))}
      </ul>

      <Link
        to={`/projects/${project.slug}`}
        className={cx(
          'group inline-flex min-h-11 w-fit items-center gap-2 border-b border-accent pb-1 text-sm font-semibold transition-colors hover:text-accent',
          compact && 'mt-auto',
        )}
      >
        View project details
        <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Link>
    </div>
  )

  const visual = (
    <Link to={`/projects/${project.slug}`} aria-label={`${project.name} project details`} className="block">
      <ProjectVisual screenshot={project.screenshots?.[0]} {...visualProps[variant]} />
    </Link>
  )

  return (
    <Reveal className={compact ? 'h-full' : undefined}>
      <article
        className={cx(
          compact ? 'flex h-full flex-col gap-6' : 'grid gap-8 md:gap-12',
          isHero && 'lg:grid-cols-12',
          variant === 'wide' && 'md:grid-cols-12',
          flip && 'md:grid-cols-12',
        )}
      >
        <div
          className={cx(
            isHero && 'lg:col-span-7 lg:self-center',
            variant === 'wide' && 'md:col-span-7',
            flip && 'md:order-2 md:col-span-6 md:col-start-7',
          )}
        >
          {visual}
        </div>
        <div
          className={cx(
            compact && 'flex-1',
            isHero && 'lg:col-span-5',
            variant === 'wide' && 'md:col-span-5',
            flip && 'md:order-1 md:col-span-5',
          )}
        >
          {copy}
        </div>
      </article>
    </Reveal>
  )
}

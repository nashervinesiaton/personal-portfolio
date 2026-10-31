import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Github } from '../components/ui/BrandIcons'
import { getProject, projects } from '../data/projects'
import Button from '../components/ui/Button'
import PageHeader from '../components/ui/PageHeader'
import Placeholder from '../components/ui/Placeholder'
import ProjectVisual from '../components/ui/ProjectVisual'
import Reveal from '../components/ui/Reveal'
import Tag from '../components/ui/Tag'

function Block({ number, title, children }) {
  return (
    <Reveal className="grid gap-4 border-t border-line py-10 md:grid-cols-12 md:gap-10 md:py-14">
      <h2 className="md:col-span-4">
        <span className="mb-2 block text-xs font-medium text-accent">{number}</span>
        <span className="font-display text-2xl font-bold md:text-3xl">{title}</span>
      </h2>
      <div className="text-base leading-relaxed text-mute md:col-span-8 md:text-lg">{children}</div>
    </Reveal>
  )
}

const List = ({ items }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item} className="flex gap-3">
        <span className="mt-2.5 size-1.5 shrink-0 bg-accent" />
        <Placeholder>{item}</Placeholder>
      </li>
    ))}
  </ul>
)

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)
  if (!project) return <Navigate to="/projects" replace />

  const { caseStudy: c } = project
  const next = projects[(projects.indexOf(project) + 1) % projects.length]

  return (
    <>
      <PageHeader label={`Case study ${project.index} · ${project.type}`} title={project.name}>
        {project.fullTitle && <p className="text-sm italic">{project.fullTitle}</p>}
      </PageHeader>

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Link to="/projects" className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm text-mute hover:text-accent">
          <ArrowLeft size={16} /> All projects
        </Link>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.repo ? (
            <Button href={project.repo} variant="secondary" icon={false}>
              <Github size={16} /> GitHub repository
            </Button>
          ) : (
            <Placeholder className="py-3">[REPOSITORY TO ADD]</Placeholder>
          )}
          {project.live && (
            <Button href={project.live} icon={false}>
              <ExternalLink size={16} /> Live demonstration
            </Button>
          )}
        </div>

        <div className="mt-12">
          <ProjectVisual project={project} aspect="aspect-[16/9]" />
        </div>

        <div className="mt-16">
          <Block number="01" title="Overview">
            <p>
              <Placeholder>{c.overview}</Placeholder>
            </p>
            {project.innovations && (
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.innovations.map((n) => (
                  <li key={n}>
                    <Tag className="border-accent text-accent">{n}</Tag>
                  </li>
                ))}
              </ul>
            )}
          </Block>
          <Block number="02" title="Background & problem">
            <p><Placeholder>{c.problem}</Placeholder></p>
          </Block>
          <Block number="03" title="Objectives">
            <List items={c.objectives} />
          </Block>
          <Block number="04" title="Proposed solution">
            <p><Placeholder>{c.solution}</Placeholder></p>
          </Block>
          <Block number="05" title="My role & contributions">
            <p><Placeholder>{c.role}</Placeholder></p>
          </Block>
          <Block number="06" title="Technologies used">
            <ul className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li key={t}><Tag>{t}</Tag></li>
              ))}
            </ul>
          </Block>
          <Block number="07" title="Key features">
            <List items={c.features} />
          </Block>
          <Block number="08" title="System architecture">
            {c.architecture.length ? (
              <ol className="space-y-px border border-line bg-line">
                {c.architecture.map(({ layer, detail }) => (
                  <li key={layer} className="grid gap-1 bg-ink p-4 sm:grid-cols-[10rem_1fr]">
                    <span className="font-display font-semibold text-paper">{layer}</span>
                    <span className="text-base">{detail}</span>
                  </li>
                ))}
              </ol>
            ) : (
              <Placeholder>[ARCHITECTURE DIAGRAM / DESCRIPTION TO BE ADDED]</Placeholder>
            )}
          </Block>
          <Block number="09" title="Screenshots & demonstrations">
            <div className="grid gap-4 sm:grid-cols-2">
              <ProjectVisual project={project} aspect="aspect-[4/3]" />
              <ProjectVisual project={project} aspect="aspect-[4/3]" />
            </div>
          </Block>
          <Block number="10" title="Development challenges">
            <p><Placeholder>{c.challenges}</Placeholder></p>
          </Block>
          <Block number="11" title="Lessons learned">
            <p><Placeholder>{c.lessons}</Placeholder></p>
          </Block>
        </div>
      </div>

      <Link to={`/projects/${next.slug}`} className="group mt-16 block border-t border-line bg-ink-2 py-14">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-mute">Next project</p>
          <p className="mt-3 font-display text-3xl font-bold transition-colors group-hover:text-accent md:text-5xl">{next.name} →</p>
        </div>
      </Link>
    </>
  )
}

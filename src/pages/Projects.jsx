import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'
import FeaturedProjects from '../components/sections/FeaturedProjects'
import PageHeader from '../components/ui/PageHeader'
import Placeholder from '../components/ui/Placeholder'

export default function Projects() {
  return (
    <>
      <PageHeader label="Projects" title="Selected work.">
        <p>A growing collection of software projects. Details marked as placeholders will be completed once verified.</p>
      </PageHeader>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20" aria-label="Project index">
        <ul className="border-t border-line">
          {projects.map((p) => (
            <li key={p.slug} className="border-b border-line">
              <Link
                to={`/projects/${p.slug}`}
                className="group grid items-baseline gap-2 py-6 transition-colors hover:bg-ink-2 md:grid-cols-12 md:gap-6 md:px-4"
              >
                <span className="text-xs text-accent md:col-span-1">{p.index}</span>
                <span className="font-display text-2xl font-bold md:col-span-6 md:text-3xl">{p.name}</span>
                <span className="text-sm text-mute md:col-span-4">
                  <Placeholder>{p.type}</Placeholder>
                </span>
                <ArrowUpRight
                  size={20}
                  className="hidden justify-self-end text-mute transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent md:block"
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <FeaturedProjects all />
    </>
  )
}

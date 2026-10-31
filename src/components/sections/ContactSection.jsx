import { profile } from '../../data/profile'
import ContactForm from '../ui/ContactForm'
import Placeholder from '../ui/Placeholder'
import Reveal from '../ui/Reveal'
import SocialLinks from '../ui/SocialLinks'

export default function ContactSection() {
  return (
    <section className="grain relative overflow-hidden border-t border-line bg-ink py-24 md:py-36">
      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 md:px-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-mute">
            <span className="text-accent">05</span>
            <span className="h-px w-8 bg-line" />
            Contact
          </p>
          <h2 className="font-display text-[clamp(2.75rem,9vw,7rem)] font-bold leading-[0.92] tracking-tighter">
            Let’s build
            <br />
            <span className="outline-text">something</span>
            <br />
            useful<span className="text-accent">.</span>
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-mute md:text-lg">
            I’m open to internship opportunities and conversations about application development. Say hello.
          </p>

          <dl className="mt-10 space-y-3 text-sm">
            <div className="flex gap-4">
              <dt className="w-20 text-mute">Email</dt>
              <dd>
                {profile.email ? (
                  <a href={`mailto:${profile.email}`} className="hover:text-accent">
                    {profile.email}
                  </a>
                ) : (
                  <Placeholder>[EMAIL TO ADD]</Placeholder>
                )}
              </dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-20 text-mute">GitHub</dt>
              <dd>
                <a href={profile.github} target="_blank" rel="noreferrer noopener" className="hover:text-accent">
                  github.com/nashervinesiaton
                </a>
              </dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-20 text-mute">LinkedIn</dt>
              <dd>
                {profile.linkedin ? (
                  <a href={profile.linkedin} target="_blank" rel="noreferrer noopener" className="hover:text-accent">
                    linkedin.com/in/nash-ervine-siaton
                  </a>
                ) : (
                  <Placeholder>[LINKEDIN URL TO ADD]</Placeholder>
                )}
              </dd>
            </div>
          </dl>
          <SocialLinks className="mt-8" />
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-5">
          <div className="border border-line bg-ink-2 p-6 md:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

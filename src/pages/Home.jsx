import AboutPreview from '../components/sections/AboutPreview'
import ContactSection from '../components/sections/ContactSection'
import EducationAchievements from '../components/sections/EducationAchievements'
import FeaturedProjects from '../components/sections/FeaturedProjects'
import Hero from '../components/sections/Hero'
import Skills from '../components/sections/Skills'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <FeaturedProjects />
      <Skills />
      <EducationAchievements />
      <ContactSection />
    </>
  )
}

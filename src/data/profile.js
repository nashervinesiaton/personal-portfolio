// Drop a file named "portrait.jpg" (or .jpeg/.png/.webp) into src/assets and it is picked up automatically.
const portraits = import.meta.glob('../assets/portrait.{jpg,jpeg,png,webp}', { eager: true, import: 'default' })

export const profile = {
  name: 'Nash Ervine Siaton',
  shortName: 'Nash Siaton',
  title: 'Aspiring Frontend Developer',
  headline: 'Building meaningful digital solutions through code, creativity, and problem-solving.',
  intro:
    'BSIS student at West Visayas State University, specializing in Business Application Development. I enjoy turning real organizational problems into practical, working software.',
  email: 'nashervinesiaton@gmail.com',
  location: '', // e.g. 'Iloilo, Philippines'
  github: 'https://github.com/nashervinesiaton',
  linkedin: 'https://www.linkedin.com/in/nash-ervine-siaton-252826446/',
  cvUrl: '', // e.g. '/Nash-Siaton-CV.pdf' once the PDF is placed in /public
  portrait: Object.values(portraits)[0] ?? '',
}

export const aboutSummary = {
  paragraphs: [
    'I am a Bachelor of Science in Information Systems student at West Visayas State University with a specialization in Business Application Development.',
    'I am interested in building practical applications that help organizations run better — from data-driven management systems to everyday tools.',
  ],
  philosophy:
    'Good software starts with understanding the people and processes it serves. I aim to build things that are clear, useful, and maintainable.',
  interests: ['Application development', 'Business information systems', 'Data analysis & forecasting', 'Web technologies'],
}

export const education = [
  {
    school: 'West Visayas State University',
    degree: 'Bachelor of Science in Information Systems (BSIS)',
    focus: 'Specialization: Business Application Development',
    period: '[YEAR START] — [YEAR END / EXPECTED]',
  },
]

export const skills = [
  { category: 'Programming Languages', items: [{ name: 'JavaScript' }, { name: 'Python' }, { name: '[TO VERIFY]', pending: true }] },
  { category: 'Frontend Development', items: [{ name: 'React' }, { name: 'Tailwind CSS' }, { name: '[TO VERIFY]', pending: true }] },
  { category: 'Backend Development', items: [{ name: 'FastAPI' }, { name: 'Supabase' }, { name: '[TO VERIFY]', pending: true }] },
  { category: 'Database Management', items: [{ name: 'PostgreSQL (via Supabase)' }, { name: '[TO VERIFY]', pending: true }] },
  { category: 'Development Tools', items: [{ name: 'Git & GitHub' }, { name: 'Vercel' }, { name: 'Vite' }] },
]

export const achievements = [
  { group: 'Academic Achievements', items: ['[ACHIEVEMENT TO ADD — e.g. award, semester]'] },
  { group: 'Certifications', items: ['[CERTIFICATION TO ADD — issuer, year]'] },
  { group: 'Seminars & Webinars', items: ['[SEMINAR / WEBINAR TO ADD — title, date]'] },
  { group: 'Extracurricular Activities', items: ['[ORGANIZATION / ACTIVITY TO ADD — role, year]'] },
]

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Resume', to: '/resume' },
  { label: 'Contact', to: '/contact' },
]

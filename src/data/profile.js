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
  location: 'Iloilo, Philippines',
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
    period: '2023 — 2027',
  },
]

export const skills = [
  {
    category: 'Frontend Development',
    items: [
      { name: 'React', slug: 'react' },
      { name: 'HTML', slug: 'html5' },
      { name: 'CSS', slug: 'css' },
      { name: 'Tailwind CSS', slug: 'tailwindcss' },
      { name: 'JavaScript', slug: 'javascript' },
    ],
  },
  {
    category: 'Backend Development',
    items: [
      { name: 'PHP', slug: 'php' },
      { name: 'Python', slug: 'python' },
      { name: 'FastAPI', slug: 'fastapi' },
    ],
  },
  {
    category: 'Database Management',
    items: [
      { name: 'MySQL', slug: 'mysql' },
      { name: 'PostgreSQL', slug: 'postgresql' },
      { name: 'Supabase', slug: 'supabase' },
    ],
  },
  {
    category: 'Development Tools',
    items: [
      { name: 'Git', slug: 'git' },
      { name: 'GitHub', slug: 'github' },
      { name: 'Vercel', slug: 'vercel' },
      { name: 'Vite', slug: 'vite' },
    ],
  },
]

export const achievements = [
  { group: 'Academic Achievements', items: ['Bronze Medalist — Second Year, School Year 2024–2025'] },
  { group: 'Certifications', items: ['[CERTIFICATION TO ADD — issuer, year]'] },
  { group: 'Seminars & Webinars', items: ['[SEMINAR / WEBINAR TO ADD — title, date]'] },
  { group: 'Extracurricular Activities', items: ['Board Member for Programs — Axis, School Year 2025–2026'] },
]

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Resume', to: '/resume' },
  { label: 'Contact', to: '/contact' },
]

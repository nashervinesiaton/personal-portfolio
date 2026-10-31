const TBA = '[TO BE COMPLETED]'

const placeholderProject = (name, i) => ({
  slug: name.toLowerCase().replace(/\s+/g, '-'),
  featured: false,
  index: String(i + 2).padStart(2, '0'),
  name,
  type: '[PROJECT TYPE TO ADD]',
  category: '[CATEGORY TO ADD]',
  summary: TBA,
  tech: ['[TO VERIFY]'],
  repo: '',
  live: '',
  caseStudy: {
    overview: TBA,
    problem: TBA,
    objectives: [TBA],
    solution: TBA,
    role: '[PERSONAL ROLE & CONTRIBUTIONS TO BE CONFIRMED]',
    features: [TBA],
    architecture: [],
    challenges: TBA,
    lessons: TBA,
  },
})

export const projects = [
  {
    slug: 'ttmpc',
    featured: true,
    index: '01',
    name: 'TTMPC Integrated Management & Finance System',
    type: 'Academic Thesis Project',
    category: 'Web Application · Finance',
    fullTitle:
      'Integrated Management and Finance System for TTMPC with Parallel Risk Prediction Debt Capacity Framework and Loan Demand Forecasting Using Time Series Analysis',
    summary:
      'An integrated management and financial system for Tubungan Teachers Multi-Purpose Cooperative (TTMPC), digitizing cooperative operations while adding analytics for loan risk, debt capacity, and loan demand forecasting.',
    innovations: ['Parallel Risk Prediction Debt Capacity Framework', 'Loan Demand Forecasting using Time Series Analysis'],
    tech: ['React', 'Tailwind CSS', 'Supabase', 'Python', 'FastAPI'],
    repo: 'https://github.com/Gtabs2004/TTMPC-THESIS',
    live: 'https://ttmpc-thesis-xi.vercel.app/',
    caseStudy: {
      overview:
        'A thesis project that digitizes the management and financial operations of Tubungan Teachers Multi-Purpose Cooperative and layers analytical capabilities on top.',
      problem: '[BACKGROUND & PROBLEM TO BE COMPLETED — describe the cooperative’s existing process and its pain points.]',
      objectives: [
        'Digitize cooperative management and financial operations.',
        'Support loan risk assessment and debt capacity evaluation.',
        'Forecast loan demand using time series analysis.',
      ],
      solution:
        'An integrated system combining a React front end, a Supabase data layer, and a Python/FastAPI service for analytics, featuring a Parallel Risk Prediction Debt Capacity Framework and loan demand forecasting.',
      role: '[PERSONAL ROLE & CONTRIBUTIONS TO BE CONFIRMED]',
      features: [
        'Cooperative management and finance modules',
        'Parallel Risk Prediction Debt Capacity Framework',
        'Loan demand forecasting with time series analysis',
        '[ADDITIONAL VERIFIED FEATURES TO ADD]',
      ],
      architecture: [
        { layer: 'Client', detail: 'React + Tailwind CSS, deployed on Vercel' },
        { layer: 'Data', detail: 'Supabase' },
        { layer: 'Analytics API', detail: 'Python + FastAPI (risk prediction & forecasting)' },
      ],
      challenges: '[DEVELOPMENT CHALLENGES TO BE COMPLETED]',
      lessons: '[LESSONS LEARNED TO BE COMPLETED]',
    },
  },
  ...['TrackIT', 'FurEverHome', 'Nahum Stock', 'KonektaDose'].map(placeholderProject),
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)

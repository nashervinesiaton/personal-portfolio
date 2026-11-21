import ttmpcReports from '../assets/ttmpc-assets/Interface-TTMPC.png'
import fureverhomeAllPets from '../assets/fureverhome/furever.webp'
import nahumStockDashboard from '../assets/nahum-stock-dashboard.png'

const TBA = '[TO BE COMPLETED]'

const placeholderProject = (name, i, overrides = {}) => ({
  slug: name.toLowerCase().replace(/\s+/g, '-'),
  featured: false,
  index: String(i + 2).padStart(2, '0'),
  name,
  status: 'Details pending',
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
  },
  ...overrides,
})

export const projects = [
  {
    slug: 'ttmpc',
    featured: true,
    index: '01',
    name: 'TTMPC Integrated Management & Finance System',
    status: 'Academic thesis project',
    type: 'Academic Thesis Project',
    category: 'Web Application · Finance',
    fullTitle:
      'Integrated Management and Finance System for TTMPC with Parallel Risk Prediction Debt Capacity Framework and Loan Demand Forecasting Using Time Series Analysis',
    summary:
      'An integrated management and financial system for Tubungan Teachers Multi-Purpose Cooperative (TTMPC), digitizing cooperative operations while adding analytics for loan risk, debt capacity, and loan demand forecasting.',
    innovations: ['Parallel Risk Prediction Debt Capacity Framework', 'Loan Demand Forecasting using Time Series Analysis'],
    tech: ['React', 'Tailwind CSS', 'Supabase', 'Python', 'FastAPI'],
    screenshots: [{ src: ttmpcReports, ratio: '1917 / 867', alt: 'TTMPC bookkeeper portal — Reports page with loan portfolio, share capital, savings, and monthly collections' }],
    repo: 'https://github.com/Gtabs2004/TTMPC-THESIS',
    live: 'https://ttmpc-thesis-xi.vercel.app/',
    caseStudy: {
      overview:
        'A thesis project that digitizes the management and financial operations of Tubungan Teachers Multi-Purpose Cooperative and layers analytical capabilities on top.',
      problem:
        'Tubungan Teachers Multi-Purpose Cooperative (TTMPC) relied on fragmented, manual operations to manage its members, loans, savings, and share capital. Records spread across separate processes are hard to keep consistent, and decisions about lending were made without predictive support. The cooperative needed a centralized platform that could manage its day-to-day operations and also help its officers anticipate loan demand and the risk of default, so that lending and liquidity could be planned proactively instead of reactively.',
      objectives: [
        'Digitize cooperative management and financial operations.',
        'Support loan risk assessment and debt capacity evaluation.',
        'Forecast loan demand using time series analysis.',
      ],
      solution:
        'An integrated system combining a React front end, a Supabase data layer, and a Python/FastAPI service for analytics, featuring a Parallel Risk Prediction Debt Capacity Framework and loan demand forecasting.',
      role: 'Frontend Developer. I built the user interface of the system using React and Tailwind CSS.',
      features: [
        'Cooperative management and finance modules',
        'Parallel Risk Prediction Debt Capacity Framework',
        'Loan demand forecasting with time series analysis',
        '[ADDITIONAL VERIFIED FEATURES TO ADD]',
      ],
    },
  },
  {
    slug: 'trackit',
    featured: false,
    index: '02',
    name: 'TrackIT',
    status: 'Academic group project',
    type: 'Academic Group Project',
    category: 'Web Application · Task Collaboration',
    fullTitle: 'TrackIT: Task Recording and Collaboration Keeper',
    summary:
      'A task recording and collaboration system for managing workspaces, coordinating tasks, and keeping teams aligned.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    screenshots: [],
    repo: '',
    live: '',
    caseStudy: {
      overview:
        'TrackIT is a web application for workspace management, task coordination, and team collaboration.',
      problem:
        'Teams need a shared place to organize work and track tasks instead of relying on scattered updates and manual follow-ups.',
      objectives: [
        'Give teams a shared workspace for organizing tasks.',
        'Make task coordination easier to follow.',
        'Support collaboration through a clear user-facing interface.',
      ],
      solution:
        'I developed the user-facing interfaces and contributed to the UI/UX, testing, and debugging of the system using HTML, CSS, JavaScript, PHP, and MySQL.',
      role: 'Primary Frontend Developer. I built the user-facing interfaces and contributed to UI/UX design, testing, and debugging.',
      features: [
        'Workspace management',
        'Task recording and coordination',
        'Team collaboration interface',
      ],
    },
  },
  placeholderProject('FurEverHome', 1, {
    name: 'FurEverHome',
    status: 'Academic group project',
    type: 'School Project',
    category: 'Web Application · Pet Adoption',
    fullTitle: 'FurEverHome: Pet Adoption Record System',
    summary:
      'A web-based record system for animal shelters that brings pet records, medical and behavioral logs, the adoption pipeline, and foster placement into one admin interface.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    screenshots: [{ src: fureverhomeAllPets, ratio: '1897 / 867', alt: 'FurEverHome admin All Pets page showing pet cards with availability status' }],
    repo: 'https://github.com/nashervinesiaton/Pet-Adoption-Management-System',
    live: 'https://pet-adoption-management-system-nu.vercel.app',
    caseStudy: {
      overview:
        'FurEverHome gives animal shelters one place to manage pets, medical records, foster placements, and adoption applications.',
      problem:
        'Shelters that track pets, medical care, adopters, and foster homes in simple lists struggle to see the whole picture: who is available, who needs medical attention, and where each adoption application stands. FurEverHome was built to bring these records together.',
      objectives: [
        'Keep pet, medical, and behavioral records in one place.',
        'Move adoption applications through clear stages from inquiry to finalization.',
        'Track foster home capacity and communication with adopters and foster parents.',
      ],
      solution:
        'A multi-page web application with an admin dashboard for occupancy, adoption rates, and medical alerts, backed by Firebase for authentication and data storage.',
      role: 'Frontend Developer. I built the user interface of the system using HTML, CSS, and JavaScript.',
      features: [
        'Command center dashboard with real-time metric cards for occupancy, adoption rates, and medical alerts',
        'Pet profile view combining medical history, behavioral analysis, and personality bio',
        'Adoption pipeline as a drag-and-drop Kanban board across five stages',
        'Medical bay and behavioral logs for vaccinations, surgeries, and social assessments',
        'Unified inbox and foster network with capacity tracking',
        'Notification center with color-coded alerts',
      ],
    },
  }),
  {
    slug: 'nahum-stock',
    featured: false,
    index: '04',
    name: 'Nahum Stock',
    status: 'Academic group project',
    type: 'Academic / Group Project · Fully Functional',
    category: 'Web Application · Inventory Management',
    fullTitle: 'An Integrated Inventory Management System for Café Nahum',
    summary:
      'An integrated inventory management system for Café Nahum that centralizes stock monitoring, inventory records, supplier information, expiration tracking, and inventory transactions.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    screenshots: [{ src: nahumStockDashboard, ratio: '1024 / 582', alt: 'Nahum Stock inventory management dashboard showing stock levels, inventory status, quick actions, and recent transactions' }],
    repo: '',
    live: '',
    caseStudy: {
      overview:
        'Nahum Stock replaces Café Nahum’s spreadsheets with one system for stock levels, transactions, suppliers, expiry dates, and reports.',
      problem:
        'Café Nahum relied on manual records and spreadsheets, making inventory updates error-prone and inconsistent with actual stock. Low-stock items, products nearing expiration, supplier information, and inventory reports all required additional manual effort without a centralized management platform.',
      objectives: [
        'Automate inventory monitoring and stock-level tracking.',
        'Record stock-in and stock-out transactions.',
        'Monitor product expiration dates and minimize inventory waste.',
        'Generate low-stock alerts for timely restocking.',
        'Centralize supplier information and procurement records.',
        'Provide inventory reports for operational monitoring and decision-making.',
        'Improve inventory accuracy and controlled access to information.',
      ],
      solution:
        'Authorized staff can manage supplies, record stock movements, review low-stock and expiry alerts, and keep supplier records in one place.',
      role: 'Backend Developer. I developed the application logic, database operations, authentication, and server-side functionality supporting the inventory management processes.',
      features: [
        'Centralized inventory records and stock quantity management',
        'Stock-in and stock-out transaction tracking',
        'Low-stock monitoring and replenishment support',
        'Product expiration monitoring',
        'Supplier and procurement record management',
        'Inventory, stock movement, usage, and replenishment reports',
        'Audit logging for inventory modifications and user activity',
        'User authentication and access control',
      ],
    },
  },
  placeholderProject('KonektaDose', 3, {
    status: 'Academic group project',
    type: 'Academic Group Project',
    category: 'UI/UX Design · Health Technology',
    fullTitle: 'KonektaDose: Smart IoT Pill Container Ecosystem',
    summary:
      'A smart pill-container concept that connects GSM-enabled sensors to a health worker dashboard for monitoring community medication adherence.',
    tech: ['Figma'],
    caseStudy: {
      overview:
        'KonektaDose combines a smart pill container with a web dashboard that helps health workers monitor missed medication doses.',
      problem:
        'Health workers need a clear way to see which community members may have missed a dose without checking each person manually.',
      objectives: [
        'Design a dashboard for reviewing community medication data.',
        'Make missed doses easy to identify and follow up.',
        'Map how sensor data moves into a centralized database.',
      ],
      solution:
        'I designed the Health Worker Dashboard in Figma and contributed to the system architecture, including the data flow from GSM-enabled sensors to a centralized database.',
      role: 'UI/UX Designer. I designed the Health Worker Dashboard and helped map the system data flow.',
      features: [
        'Health worker dashboard for community medication data',
        'Missed-dose flags for follow-up',
        'GSM sensor to database data-flow mapping',
      ],
    },
  }),
]

/** Projects shown on the home page, in order; the rest live on the Projects page. */
export const homeProjectSlugs = ['ttmpc', 'nahum-stock', 'fureverhome']

export const getProject = (slug) => projects.find((p) => p.slug === slug)

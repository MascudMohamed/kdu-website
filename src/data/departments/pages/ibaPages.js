const related = (slug, links) =>
  links.map(({ label, path }) => ({ label, path: `/academics/undergraduate/${slug}/${path}` }));

const base = 'international-business-administration';

export default {
  programme: {
    type: 'editorial',
    title: 'Programme Overview',
    eyebrow: 'International Business Administration',
    lead: 'A Bachelor of Business Administration designed for students who aspire to lead in multinational corporations, global trade, and entrepreneurial ventures.',
    sections: [
      {
        title: 'Degree structure',
        list: ['Bachelor of Business Administration', '4 years full-time', 'English medium instruction', 'Case-based and experiential pedagogy'],
      },
      {
        title: 'Learning outcomes',
        list: [
          'Analyse global markets and formulate international strategy',
          'Lead multicultural teams with cultural intelligence',
          'Apply financial and marketing principles across borders',
          'Evaluate trade policy and supply chain risk',
          'Demonstrate ethical leadership in business decisions',
        ],
      },
    ],
    related: related(base, [
      { label: 'Global curriculum', path: 'curriculum' },
      { label: 'Exchange programme', path: 'exchange' },
      { label: 'Career outcomes', path: 'careers' },
    ]),
  },

  curriculum: { type: 'curriculum' },

  'international-trade': {
    type: 'pathway',
    title: 'International Trade',
    eyebrow: 'Specialization',
    lead: 'Understand global commerce, trade agreements, logistics, and market entry strategies for multinational operations.',
    focus: ['Trade policy', 'Import/export operations', 'Global logistics', 'Market entry strategy'],
    careers: ['Trade Specialist', 'Export Manager', 'Customs Analyst', 'International Business Developer'],
    courses: ['International Trade Theory', 'Global Logistics', 'Trade Finance', 'Regional Market Analysis'],
    related: related(base, [
      { label: 'Supply chain', path: 'supply-chain' },
      { label: 'Exchange', path: 'exchange' },
      { label: 'Research', path: 'research' },
    ]),
  },

  marketing: {
    type: 'pathway',
    title: 'Global Marketing',
    eyebrow: 'Specialization',
    lead: 'Develop brand strategies for international markets using consumer insight, digital analytics, and cross-cultural communication.',
    focus: ['Global branding', 'Digital marketing', 'Consumer behaviour', 'Market research'],
    careers: ['Marketing Manager', 'Brand Strategist', 'Digital Marketing Lead', 'Market Research Analyst'],
    courses: ['International Marketing', 'Brand Management', 'Digital Marketing Analytics', 'Consumer Behaviour'],
    related: related(base, [
      { label: 'Consulting projects', path: 'consulting' },
      { label: 'Competitions', path: 'competitions' },
      { label: 'Careers', path: 'careers' },
    ]),
  },

  entrepreneurship: {
    type: 'pathway',
    title: 'Entrepreneurship',
    eyebrow: 'Specialization',
    lead: 'Launch and scale ventures with incubator support, investor mentorship, and practical startup methodology.',
    focus: ['Business model design', 'Venture funding', 'Startup operations', 'Innovation management'],
    careers: ['Founder', 'Venture Analyst', 'Business Development Manager', 'Innovation Consultant'],
    courses: ['Entrepreneurship & Innovation', 'Venture Capital', 'New Venture Creation', 'Social Entrepreneurship'],
    related: related(base, [
      { label: 'Alumni stories', path: 'alumni' },
      { label: 'Competitions', path: 'competitions' },
      { label: 'Partnerships', path: 'partnerships' },
    ]),
  },

  finance: {
    type: 'pathway',
    title: 'International Finance',
    eyebrow: 'Specialization',
    lead: 'Master financial analysis, investment decisions, and risk management in multinational corporate contexts.',
    focus: ['Corporate finance', 'Investment analysis', 'Foreign exchange', 'Financial risk'],
    careers: ['Financial Analyst', 'Investment Associate', 'Risk Manager', 'Corporate Treasurer'],
    courses: ['International Finance', 'Financial Markets', 'Risk Management', 'Corporate Valuation'],
    related: related(base, [
      { label: 'International trade', path: 'international-trade' },
      { label: 'Internships', path: 'internships' },
      { label: 'Careers', path: 'careers' },
    ]),
  },

  'supply-chain': {
    type: 'pathway',
    title: 'Supply Chain Management',
    eyebrow: 'Specialization',
    lead: 'Optimize end-to-end supply chains across borders with emphasis on sustainability, resilience, and digital transformation.',
    focus: ['Operations management', 'Procurement', 'Sustainability', 'Supply chain analytics'],
    careers: ['Supply Chain Analyst', 'Operations Manager', 'Procurement Specialist', 'Logistics Coordinator'],
    courses: ['Operations Management', 'Global Supply Chain', 'Procurement Strategy', 'Sustainable Operations'],
    related: related(base, [
      { label: 'International trade', path: 'international-trade' },
      { label: 'Partnerships', path: 'partnerships' },
      { label: 'Curriculum', path: 'curriculum' },
    ]),
  },

  exchange: {
    type: 'editorial',
    title: 'International Exchange',
    eyebrow: 'Global Experience',
    lead: 'Study abroad at partner universities across Asia-Pacific, Europe, and the Americas — typically in year three.',
    sections: [
      {
        title: 'Exchange benefits',
        list: [
          'Immerse in a new business culture',
          'Earn credit toward your BBA',
          'Build an international peer network',
          'Strengthen language and adaptability skills',
        ],
      },
      {
        title: 'Partner regions',
        list: ['East & Southeast Asia', 'Europe', 'North America', 'Oceania'],
      },
    ],
    related: related(base, [
      { label: 'Internships', path: 'internships' },
      { label: 'Curriculum', path: 'curriculum' },
      { label: 'Admissions', path: 'admissions' },
    ]),
  },

  internships: {
    type: 'editorial',
    title: 'Internship Programme',
    eyebrow: 'Global Experience',
    lead: 'Corporate internships place IBA students inside multinational firms, consulting practices, and trading companies.',
    sections: [
      {
        title: 'Programme structure',
        content: 'A supervised 10–12 week placement in year three or four, with reflective assessment and employer evaluation.',
        list: ['Career services placement support', 'Pre-internship professional skills workshop', 'Faculty reflection seminars', 'Employer feedback integration'],
      },
    ],
    related: related(base, [
      { label: 'Corporate partnerships', path: 'partnerships' },
      { label: 'Career outcomes', path: 'careers' },
      { label: 'Consulting projects', path: 'consulting' },
    ]),
  },

  partnerships: {
    type: 'editorial',
    title: 'Corporate Partnerships',
    eyebrow: 'Industry Network',
    lead: 'IBA maintains active relationships with multinational corporations, consulting firms, and trade organizations.',
    sections: [
      {
        title: 'Collaboration types',
        list: [
          'Live consulting engagements',
          'Executive guest lectures',
          'Internship and graduate recruitment',
          'Case competition sponsorship',
          'Curriculum advisory boards',
        ],
      },
    ],
    related: related(base, [
      { label: 'Consulting projects', path: 'consulting' },
      { label: 'Internships', path: 'internships' },
      { label: 'Alumni', path: 'alumni' },
    ]),
  },

  consulting: {
    type: 'editorial',
    title: 'Student Consulting Projects',
    eyebrow: 'Applied Learning',
    lead: 'Teams of IBA students deliver real consulting deliverables for corporate clients — from market analysis to strategic recommendations.',
    sections: [
      {
        title: 'How projects work',
        content: 'Client partners present a business challenge. Student teams research, analyse, and present findings to executive stakeholders under faculty supervision.',
        list: ['Market entry studies', 'Operational efficiency reviews', 'Brand repositioning analysis', 'Sustainability strategy proposals'],
      },
    ],
    related: related(base, [
      { label: 'Partnerships', path: 'partnerships' },
      { label: 'Competitions', path: 'competitions' },
      { label: 'Faculty', path: 'faculty' },
    ]),
  },

  competitions: {
    type: 'editorial',
    title: 'Business Competitions',
    eyebrow: 'Applied Learning',
    lead: 'IBA students compete in case competitions, pitch contests, and international business challenges.',
    sections: [
      {
        title: 'Competition calendar',
        list: [
          'KDU Global Business Case Competition',
          'International Trade Simulation',
          'Startup Pitch Championship',
          'Regional CFA Research Challenge (affiliate)',
        ],
      },
    ],
    related: related(base, [
      { label: 'Entrepreneurship', path: 'entrepreneurship' },
      { label: 'Alumni', path: 'alumni' },
      { label: 'Consulting', path: 'consulting' },
    ]),
  },

  research: {
    type: 'editorial',
    title: 'Research Areas',
    eyebrow: 'Faculty Research',
    lead: 'IBA faculty conduct research on global strategy, international trade, cross-cultural management, and digital business transformation.',
    sections: [
      {
        title: 'Research themes',
        list: [
          'Multinational corporate strategy',
          'International trade policy',
          'Cross-cultural negotiation',
          'Digital business model innovation',
        ],
      },
    ],
    related: related(base, [
      { label: 'Faculty directory', path: 'faculty' },
      { label: 'International trade', path: 'international-trade' },
      { label: 'Marketing', path: 'marketing' },
    ]),
  },

  careers: { type: 'stats', title: 'Career Outcomes', eyebrow: 'Graduate Outcomes', lead: 'IBA graduates pursue leadership roles across the global business landscape.', useCareerOutcomes: true },

  alumni: { type: 'stories', title: 'Alumni Success Stories', eyebrow: 'Alumni' },

  scholarships: {
    type: 'editorial',
    title: 'Scholarships',
    eyebrow: 'Financial Support',
    lead: 'International business scholarships recognize academic excellence and leadership potential.',
    sections: [
      {
        title: 'Available awards',
        list: [
          'Global Business Excellence Scholarship — up to 50% tuition',
          'International Leadership Award',
          'Exchange Travel Grant',
          'Entrepreneurship Seed Fund (competitive)',
        ],
      },
    ],
    related: related(base, [{ label: 'Admissions', path: 'admissions' }]),
  },

  admissions: { type: 'admissions', title: 'Admissions', eyebrow: 'Apply', lead: 'Begin your journey toward a global business career at KDU Global.' },

  faq: { type: 'faq' },
};

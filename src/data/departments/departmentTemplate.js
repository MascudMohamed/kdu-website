/**
 * Copy this file to `{slug}.js` and fill in content.
 * Register the slug in index.js, navigation.js, programs.js, and pages/{slug}Pages.js
 */
export default {
  slug: 'your-programme-slug',
  title: 'Full Programme Title',
  shortTitle: 'Short Name',
  description: 'One paragraph for the hero — who this programme is for and what it offers.',
  bannerImage: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80',
  cardImage: 'https://images.unsplash.com/photo-1562774053-701939374585?w=900&q=80',
  cardDescription: 'Short text for the Academics landing card.',
  duration: '4 Years',
  language: 'English',
  intake: 'Fall (September)',

  overview: {
    philosophy: 'Why this programme exists and how it is taught.',
    outcomes: ['Learning outcome 1', 'Learning outcome 2'],
  },

  curriculum: [],

  faculty: [
    {
      id: 'example-1',
      name: 'Dr. Example Faculty',
      position: 'Programme Director',
      rank: 'Professors',
      photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
      specialization: 'Area of expertise',
      researchInterests: 'Research themes',
      biography: 'Academic biography (full version on profile page).',
      email: 'example@kduglobal.edu',
    },
  ],

  admissions: {
    tuition: { amount: '$4,000 per semester', note: 'Scholarships may be available.' },
    timeline: [
      { date: 'October 1', event: 'Applications open' },
      { date: 'May 30', event: 'Final deadline' },
    ],
    documents: ['Application form', 'Transcripts', 'Passport copy'],
  },

  news: [],
  events: [],
  testimonials: [],
  careers: [],
  researchAreas: [],

  contact: {
    address: 'Department name, Building, KDU Global Campus',
    phone: '+1 (555) 000-0000',
    email: 'dept@kduglobal.edu',
    hours: 'Monday – Friday, 9:00 AM – 5:00 PM',
  },
};

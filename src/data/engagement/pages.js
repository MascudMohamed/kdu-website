/** Edit engagement copy here — hub overview and each spoke page. */

const IMG = {
  community: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80',
  industry: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80',
  alumni: 'https://images.unsplash.com/photo-1541339907192-e08756dedf3f?w=1200&q=80',
  events: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80',
  global: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80',
  hub: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=80',
};

export const ENGAGEMENT_NAV = [
  { label: 'Community Engagement', path: 'community-engagement' },
  { label: 'Industry Partnerships', path: 'industry-partnerships' },
  { label: 'Alumni Relations', path: 'alumni-relations' },
  { label: 'Public Events', path: 'public-events' },
  { label: 'Global Collaboration', path: 'global-collaboration' },
];

export const ENGAGEMENT_HUB = {
  eyebrow: 'Kyungdong University Global Campus',
  title: 'Engagement & Impact',
  lead:
    'KDU Global connects learning with society — through community service, industry partnerships, alumni networks, public events, and international collaboration that extend our mission beyond the classroom.',
  image: IMG.hub,
  pillars: [
    {
      title: 'Community at our core',
      description: 'Service learning and outreach that strengthen local communities and develop civic leadership.',
    },
    {
      title: 'Industry-connected education',
      description: 'Partnerships with employers and innovators that shape curriculum, internships, and graduate outcomes.',
    },
    {
      title: 'A global alumni network',
      description: 'Lifelong connections, mentoring, and professional communities across continents.',
    },
  ],
  cta: {
    title: 'Partner with KDU Global',
    description: 'Whether you represent a community organisation, corporation, or alumni chapter — we welcome collaboration.',
    primaryLabel: 'Contact our team',
    primaryPath: '/contact',
    secondaryLabel: 'View public events',
    secondaryPath: '/engagement/public-events',
  },
};

const related = (exclude) =>
  ENGAGEMENT_NAV.filter((n) => n.path !== exclude).slice(0, 3).map((n) => ({
    label: n.label,
    path: `/engagement/${n.path}`,
  }));

export const ENGAGEMENT_PAGES = {
  'community-engagement': {
    slug: 'community-engagement',
    title: 'Community Engagement',
    eyebrow: 'Engagement',
    lead:
      'Through service learning, volunteer programmes, and local partnerships, KDU Global students and faculty contribute to the communities we serve while developing leadership, empathy, and civic responsibility.',
    image: IMG.community,
    stats: [
      { value: '12+', label: 'Annual outreach programmes' },
      { value: '2,000+', label: 'Volunteer hours contributed' },
      { value: '15', label: 'Community partner organisations' },
    ],
    sections: [
      {
        title: 'Our commitment',
        content:
          'Community engagement is integral to the KDU Global experience. We believe universities have a responsibility to listen, contribute, and collaborate with the communities around them — creating mutual benefit for students and society.',
      },
      {
        title: 'Focus areas',
        list: [
          'Service learning integrated with academic programmes',
          'Volunteer initiatives led by student organisations',
          'Outreach to schools and youth development programmes',
          'Environmental stewardship and sustainability projects',
          'Support for underserved and multicultural communities',
        ],
      },
    ],
    initiatives: [
      {
        icon: '🤝',
        title: 'Service Learning',
        description: 'Credit-bearing courses that connect classroom knowledge with structured community projects.',
      },
      {
        icon: '🌱',
        title: 'Sustainability Action',
        description: 'Campus-led initiatives promoting environmental awareness and local conservation efforts.',
      },
      {
        icon: '📚',
        title: 'Youth Outreach',
        description: 'Mentoring, tutoring, and campus visits for local schools and young learners.',
      },
      {
        icon: '🏘️',
        title: 'Local Partnerships',
        description: 'Collaborations with NGOs, municipalities, and community groups across Gangwon Province.',
      },
    ],
    spotlight: {
      title: 'Making a difference together',
      content:
        'Each semester, student teams partner with community organisations on projects ranging from digital literacy workshops to business consulting for local enterprises. Outcomes are shared at an annual Community Impact Showcase.',
      image: IMG.community,
    },
    cta: {
      title: 'Propose a community partnership',
      description: 'Community organisations interested in collaborating with KDU Global are invited to contact our engagement office.',
      buttonLabel: 'Get in touch',
      buttonPath: '/contact',
    },
    related: related('community-engagement'),
  },

  'industry-partnerships': {
    slug: 'industry-partnerships',
    title: 'Industry Partnerships',
    eyebrow: 'Engagement',
    lead:
      'KDU Global works with leading companies and organisations to align education with industry needs — through internships, guest lectures, collaborative projects, and recruitment pathways for our graduates.',
    image: IMG.industry,
    stats: [
      { value: '30+', label: 'Industry partners' },
      { value: '85%', label: 'Students with internship exposure' },
      { value: '50+', label: 'Annual industry events' },
    ],
    sections: [
      {
        title: 'Partnership philosophy',
        content:
          'Our industry partnerships are built on reciprocity. Employers gain access to talented, globally minded graduates; students gain real-world experience; and the university ensures its programmes remain relevant to evolving professional demands.',
      },
      {
        title: 'Ways to partner',
        list: [
          'Internship and work-integrated learning placements',
          'Industry advisory boards for academic programmes',
          'Guest lectures, masterclasses, and executive mentoring',
          'Capstone and consulting projects with corporate clients',
          'Scholarships and sponsored research initiatives',
          'Graduate recruitment and career fair participation',
        ],
      },
    ],
    initiatives: [
      {
        icon: '💼',
        title: 'Internship Programme',
        description: 'Structured placements with technology, business, and hospitality partners in Korea and abroad.',
      },
      {
        icon: '🎯',
        title: 'Advisory Councils',
        description: 'Industry leaders guide curriculum design for Smart Computing, IBA, and emerging programmes.',
      },
      {
        icon: '🔬',
        title: 'Applied Research',
        description: 'Joint projects addressing digital transformation, sustainability, and global business challenges.',
      },
      {
        icon: '🎤',
        title: 'Executive Engagement',
        description: 'Regular forums bringing practitioners into the classroom and onto campus.',
      },
    ],
    partners: [
      { name: 'Technology & Innovation Partners', note: 'Computing, AI, and digital services firms' },
      { name: 'Global Business Consortium', note: 'Multinational corporations and consulting groups' },
      { name: 'Hospitality & Tourism Alliance', note: 'Hotels, resorts, and experience brands' },
      { name: 'Startup & Venture Network', note: 'Accelerators and entrepreneurship ecosystems' },
    ],
    spotlight: {
      title: 'From classroom to boardroom',
      content:
        'Industry partners host annual recruitment days, sponsor student competitions, and co-design project briefs that mirror real business challenges — ensuring graduates are career-ready from day one.',
      image: IMG.industry,
    },
    cta: {
      title: 'Become an industry partner',
      description: 'Corporations and organisations interested in recruiting, mentoring, or collaborating with KDU Global are welcome to reach out.',
      buttonLabel: 'Partner with us',
      buttonPath: '/contact',
    },
    related: related('industry-partnerships'),
  },

  'alumni-relations': {
    slug: 'alumni-relations',
    title: 'Alumni Relations',
    eyebrow: 'Engagement',
    lead:
      'Our alumni community spans industries and continents. KDU Global fosters lifelong connections through networking events, mentoring programmes, professional development, and opportunities to give back to the next generation of students.',
    image: IMG.alumni,
    stats: [
      { value: '5,000+', label: 'Alumni worldwide' },
      { value: '30+', label: 'Countries represented' },
      { value: '4', label: 'Regional alumni chapters' },
    ],
    sections: [
      {
        title: 'Stay connected',
        content:
          'Graduation is the beginning of a lifelong relationship with KDU Global. Alumni receive invitations to campus events, access to career resources, and opportunities to mentor current students and share their professional journeys.',
      },
      {
        title: 'Alumni benefits',
        list: [
          'Global alumni directory and networking platform',
          'Regional chapter events and reunions',
          'Career services and job board access',
          'Continuing education and professional workshops',
          'Mentoring and guest speaker opportunities',
          'Campus facility access during visits',
        ],
      },
    ],
    initiatives: [
      {
        icon: '🌐',
        title: 'Global Chapters',
        description: 'Active alumni communities in Asia-Pacific, Europe, North America, and the Middle East.',
      },
      {
        icon: '🎓',
        title: 'Mentor Programme',
        description: 'Experienced graduates guide students on careers, internships, and international opportunities.',
      },
      {
        icon: '🏆',
        title: 'Alumni Awards',
        description: 'Annual recognition of outstanding graduates for professional achievement and community impact.',
      },
      {
        icon: '💬',
        title: 'Alumni Speaker Series',
        description: 'Graduates return to campus to share insights with current students and faculty.',
      },
    ],
    stories: [
      {
        name: 'Alexandra Nguyen',
        role: 'Software Engineer · Class of 2024',
        quote: 'KDU Global gave me the foundation and network to launch my career internationally. I now mentor computing students through the alumni programme.',
      },
      {
        name: 'Yuki Nakamura',
        role: 'Marketing Manager · Class of 2024',
        quote: 'The cross-cultural skills I developed at KDU Global continue to shape how I lead global teams. Staying connected with alumni has opened doors I never expected.',
      },
    ],
    spotlight: {
      title: 'Alumni networking events',
      content:
        'Each year, KDU Global hosts regional networking receptions, an on-campus alumni homecoming, and sector-specific meetups for technology, business, and hospitality graduates.',
      image: IMG.alumni,
    },
    cta: {
      title: 'Update your alumni profile',
      description: 'Alumni are encouraged to keep their contact and career information current so we can connect you with opportunities and your peers.',
      buttonLabel: 'Contact alumni relations',
      buttonPath: '/contact',
    },
    related: related('alumni-relations'),
  },

  'public-events': {
    slug: 'public-events',
    title: 'Public Events',
    eyebrow: 'Engagement',
    lead:
      'KDU Global opens its campus to the public through open days, lectures, cultural festivals, conferences, and community celebrations — welcoming prospective students, families, partners, and neighbours.',
    image: IMG.events,
    stats: [
      { value: '40+', label: 'Public events per year' },
      { value: '10,000+', label: 'Annual visitors' },
      { value: '12', label: 'Flagship annual programmes' },
    ],
    sections: [
      {
        title: 'Events for everyone',
        content:
          'From university open days to research symposia, our public events reflect the diversity and dynamism of campus life. Many events are free and open to all; others welcome registered guests from industry, government, and education.',
      },
      {
        title: 'Event categories',
        list: [
          'University Open Day and campus tours',
          'Public lectures and thought-leadership forums',
          'Research symposia and academic conferences',
          'Cultural festivals and international days',
          'Career fairs and employer showcases',
          'Sports, arts, and student-led performances',
        ],
      },
    ],
    initiatives: [
      {
        icon: '🏫',
        title: 'Open Day',
        description: 'Explore programmes, meet faculty, and experience campus life at our flagship admissions event.',
      },
      {
        icon: '🎤',
        title: 'Public Lectures',
        description: 'Distinguished speakers address topics in technology, business, sustainability, and global affairs.',
      },
      {
        icon: '🎭',
        title: 'Cultural Festivals',
        description: 'Celebrate the diversity of our international community through food, music, and performance.',
      },
      {
        icon: '🔬',
        title: 'Research Symposium',
        description: 'Faculty and students present findings to peers, industry, and the wider public.',
      },
    ],
    events: [
      { date: 'July 15, 2026', title: 'Annual University Open Day', venue: 'Main Campus', type: 'Open Day' },
      { date: 'August 8, 2026', title: 'Global Alumni Networking Event', venue: 'Alumni Hall', type: 'Networking' },
      { date: 'September 20, 2026', title: 'International Research Symposium', venue: 'Conference Center', type: 'Conference' },
      { date: 'October 5, 2026', title: 'International Culture Festival', venue: 'Campus Green', type: 'Festival' },
    ],
    spotlight: {
      title: 'Join us on campus',
      content:
        'Public events are listed on our News & Events page and promoted through our social channels. Schools and community groups are welcome to arrange group visits by appointment.',
      image: IMG.events,
    },
    cta: {
      title: 'Plan your visit',
      description: 'For group bookings, media enquiries, or event sponsorship opportunities, contact our events team.',
      buttonLabel: 'View all news & events',
      buttonPath: '/news-events',
    },
    related: related('public-events'),
  },

  'global-collaboration': {
    slug: 'global-collaboration',
    title: 'Global Collaboration',
    eyebrow: 'Engagement',
    lead:
      'International partnerships are central to KDU Global\'s identity. Through exchange programmes, joint research, dual degrees, and institutional agreements, we connect students and faculty to the world.',
    image: IMG.global,
    stats: [
      { value: '50+', label: 'Partner institutions' },
      { value: '30+', label: 'Countries represented on campus' },
      { value: '200+', label: 'Exchange students annually' },
    ],
    sections: [
      {
        title: 'A globally connected campus',
        content:
          'KDU Global cultivates relationships with universities, research institutes, and organisations worldwide. These partnerships enrich teaching, expand research horizons, and give students transformative international experiences.',
      },
      {
        title: 'Collaboration models',
        list: [
          'Student exchange and study-abroad programmes',
          'Faculty exchange and joint research projects',
          'Dual-degree and articulation agreements',
          'International summer schools and short programmes',
          'Global conferences and academic networks',
          'Development partnerships in emerging regions',
        ],
      },
    ],
    initiatives: [
      {
        icon: '✈️',
        title: 'Student Exchange',
        description: 'Semester and year-long exchanges at partner universities across Asia, Europe, and the Americas.',
      },
      {
        icon: '🔬',
        title: 'Joint Research',
        description: 'Collaborative projects in computing, business, sustainability, and health sciences.',
      },
      {
        icon: '🤝',
        title: 'Institutional MoUs',
        description: 'Formal agreements enabling credit transfer, co-supervision, and shared resources.',
      },
      {
        icon: '🌍',
        title: 'Global Mobility Camps',
        description: 'Short-term international programmes combining study, culture, and professional networking.',
      },
    ],
    partners: [
      { name: 'University of Melbourne', country: 'Australia', description: 'Academic exchange and joint research programmes' },
      { name: 'Seoul National University', country: 'South Korea', description: 'Student exchange and cultural collaboration' },
      { name: 'London School of Economics', country: 'United Kingdom', description: 'Business and economics research partnership' },
      { name: 'National University of Singapore', country: 'Singapore', description: 'Technology and innovation collaboration' },
    ],
    spotlight: {
      title: 'International Office',
      content:
        'The International Office coordinates global partnerships, student mobility, and visa support. Visit the International Office page for services, exchange destinations, and application guidance.',
      image: IMG.global,
      link: '/international-office',
      linkLabel: 'Visit International Office',
    },
    cta: {
      title: 'Explore global opportunities',
      description: 'Students interested in exchange or international programmes should speak with the International Office.',
      buttonLabel: 'International Office',
      buttonPath: '/international-office',
    },
    related: related('global-collaboration'),
  },
};

/** Hub cards — derived from spoke pages for consistent editing */
export const ENGAGEMENT_AREAS = ENGAGEMENT_NAV.map((item) => {
  const page = ENGAGEMENT_PAGES[item.path];
  return {
    slug: item.path,
    title: page.title,
    shortTitle: item.label,
    description: page.lead,
    image: page.image,
    path: `/engagement/${item.path}`,
  };
});

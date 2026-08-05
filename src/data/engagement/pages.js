/** Edit engagement copy here — hub overview and each spoke page. */

const IMG = {
  community: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80',
  industry: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80',
  alumni: 'https://images.unsplash.com/photo-1541339907192-e08756dedf3f?w=1200&q=80',
  events: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80',
  global: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80',
  clubs: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80',
  cdc: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80',
  hub: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=80',
};

export const CDC_WEBSITE_URL = 'https://smzuqlarnain.github.io/cdc-website/index.html#';

export const ENGAGEMENT_NAV = [
  { label: 'Academic Collaboration', path: 'academic-collaboration' },
  { label: 'Industry Partnership', path: 'industry-partnerships' },
  { label: 'Research Centre', path: 'research-centre' },
  { label: 'Career Development Centre', path: 'cdc', externalUrl: CDC_WEBSITE_URL },
  { label: 'Community Engagement', path: 'community-engagement' },
  { label: 'Alumni Relations', path: 'alumni-relations' },
  { label: 'Student Clubs', path: 'clubs' },
];

export const ENGAGEMENT_HUB = {
  eyebrow: 'Kyungdong University Global Campus',
  title: 'Engagement & Impact',
  lead:
    'KDU Global connects learning with society — through academic collaboration, industry partnerships, research, career development, community service, and a global alumni network that extends our mission beyond the classroom.',
  image: IMG.hub,
  pillars: [
    {
      title: 'Academic collaboration',
      description: 'Partnerships with universities worldwide for joint programmes, faculty exchange, and shared scholarship.',
    },
    {
      title: 'Industry-connected education',
      description: 'Partnerships with employers and innovators that shape curriculum, internships, and graduate outcomes.',
    },
    {
      title: 'Research with purpose',
      description: 'Centres and collaborations that advance knowledge and solve real-world challenges.',
    },
    {
      title: 'Career-ready graduates',
      description: 'Internships, job fairs, and employability workshops through the Career Development Centre.',
    },
    {
      title: 'Community & alumni',
      description: 'Service learning, outreach, and lifelong connections across continents.',
    },
  ],
  cta: {
    title: 'Partner with KDU Global',
    description: 'Whether you represent a university, community organisation, corporation, or alumni chapter — we welcome collaboration.',
    primaryLabel: 'Contact our team',
    primaryPath: '/contact',
    secondaryLabel: 'Public events',
    secondaryPath: '/international-office#public-events',
  },
};

const related = (exclude) =>
  ENGAGEMENT_NAV.filter((n) => n.path !== exclude).slice(0, 3).map((n) => ({
    label: n.label,
    path: `/engagement/${n.path}`,
  }));

export const ENGAGEMENT_PAGES = {
  'academic-collaboration': {
    slug: 'academic-collaboration',
    title: 'Academic Collaboration',
    eyebrow: 'Engagement',
    lead:
      'KDU Global builds lasting academic partnerships with universities and institutions worldwide — joint programmes, faculty collaboration, credit articulation, and shared research that strengthen international higher education.',
    image: IMG.global,
    stats: [
      { value: '50+', label: 'Partner institutions' },
      { value: '30+', label: 'Countries in our network' },
      { value: 'Dual', label: 'Degree & articulation pathways' },
    ],
    sections: [
      {
        title: 'Partnership for excellence',
        content:
          'Academic collaboration is central to our international mission. We work with peer universities to expand learning opportunities, enrich curriculum, and create pathways for students and faculty to engage globally while maintaining the highest academic standards.',
      },
      {
        title: 'Forms of collaboration',
        list: [
          'Memoranda of understanding with partner universities',
          'Joint and dual-degree programme development',
          'Faculty visiting appointments and co-teaching',
          'Credit transfer and articulation agreements',
          'Shared research seminars and academic conferences',
          'Curriculum benchmarking and quality enhancement',
        ],
      },
    ],
    initiatives: [
      {
        icon: '🏛️',
        title: 'University partnerships',
        description: 'Formal relationships with institutions across Asia, Europe, North America, and beyond.',
      },
      {
        icon: '📘',
        title: 'Joint academic programmes',
        description: 'Collaborative degree pathways and specialised short programmes with partner schools.',
      },
      {
        icon: '👨‍🏫',
        title: 'Faculty collaboration',
        description: 'Visiting scholars, guest lectures, and co-supervision that elevate teaching and research.',
      },
      {
        icon: '🌐',
        title: 'Global academic network',
        description: 'Active participation in international higher-education alliances and forums.',
      },
    ],
    spotlight: {
      title: 'International Office support',
      content:
        'Institutional partnership enquiries and mobility coordination are supported by the International Office, ensuring agreements are well managed from first conversation to delivery.',
      image: IMG.global,
      link: '/international-office',
      linkLabel: 'Visit International Office',
    },
    cta: {
      title: 'Explore academic partnership',
      description: 'Universities interested in collaborating with KDU Global are invited to contact our international and academic affairs teams.',
      buttonLabel: 'Contact us',
      buttonPath: '/contact',
    },
    related: related('academic-collaboration'),
  },

  'research-centre': {
    slug: 'research-centre',
    title: 'Research Centre',
    eyebrow: 'Engagement',
    lead:
      'Research at KDU Global advances knowledge across technology, business, hospitality, and language education — connecting faculty expertise with industry and community partners.',
    image: IMG.industry,
    stats: [
      { value: 'Applied', label: 'Research focus' },
      { value: 'Cross-field', label: 'Faculty collaboration' },
      { value: 'Global', label: 'Partner engagement' },
    ],
    sections: [
      {
        title: 'Our research identity',
        content:
          'The Research Centre coordinates scholarly activity that supports teaching excellence and real-world impact. Faculty and students contribute to projects spanning artificial intelligence, digital business, hospitality innovation, and international education.',
      },
      {
        title: 'What we foster',
        list: [
          'Faculty-led research groups and thematic clusters',
          'Student participation in applied research and capstones',
          'Industry and community research partnerships',
          'Seminars, colloquia, and publication support',
          'International research collaboration with partner universities',
        ],
      },
    ],
    initiatives: [
      {
        icon: '🔬',
        title: 'Thematic research',
        description: 'Priority themes aligned with Global Campus strengths in AI, business, and hospitality.',
      },
      {
        icon: '🤝',
        title: 'Partner projects',
        description: 'Collaborative studies with industry, government, and academic partners.',
      },
      {
        icon: '📄',
        title: 'Knowledge sharing',
        description: 'Publications, conferences, and campus research showcases.',
      },
      {
        icon: '🎓',
        title: 'Student research',
        description: 'Mentored projects that build inquiry skills and career readiness.',
      },
    ],
    spotlight: {
      title: 'Explore the research hub',
      content:
        'Visit the full Research section for areas of focus, innovation partnerships, and publications from KDU Global.',
      image: IMG.industry,
      link: '/research',
      linkLabel: 'Open Research hub',
    },
    cta: {
      title: 'Collaborate on research',
      description: 'Organisations and scholars interested in joint research with KDU Global are welcome to get in touch.',
      buttonLabel: 'Contact us',
      buttonPath: '/contact',
    },
    related: related('research-centre'),
  },

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

  'exchange-programs': {
    slug: 'exchange-programs',
    title: 'Exchange Programs',
    eyebrow: 'Engagement',
    lead:
      'Study abroad opportunities with KDU partner universities around the world — semester exchanges, summer programmes, and short-term mobility that broaden academic horizons and cultural understanding.',
    image: IMG.global,
    stats: [
      { value: '50+', label: 'Partner institutions' },
      { value: '30+', label: 'Countries represented on campus' },
      { value: '200+', label: 'Exchange students annually' },
    ],
    sections: [
      {
        title: 'Global learning pathways',
        content:
          'KDU Global connects students to partner universities worldwide through structured exchange programmes. Whether for a full semester abroad or a focused summer experience, students gain international perspective while earning credit toward their degree.',
      },
      {
        title: 'Programme types',
        list: [
          'Semester-long student exchange at partner universities',
          'Summer international programmes in language, culture, and innovation',
          'Faculty exchange and joint research collaborations',
          'Dual-degree and articulation agreements',
          'Short-term global mobility camps',
        ],
      },
    ],
    initiatives: [
      {
        icon: '🎓',
        title: 'Partner Universities',
        description: 'Study abroad opportunities with KDU partner universities around the world.',
      },
      {
        icon: '✈️',
        title: 'Student Exchange',
        description: 'Semester-long exchange programmes providing international academic experience.',
      },
      {
        icon: '☀️',
        title: 'Summer Programs',
        description: 'Short-term international programmes focusing on language, culture, and innovation.',
      },
      {
        icon: '🤝',
        title: 'Institutional Partnerships',
        description: 'Formal agreements enabling credit transfer, co-supervision, and shared resources.',
      },
    ],
    partners: [
      { name: 'University of Melbourne', country: 'Australia', description: 'Academic exchange and joint research programmes' },
      { name: 'Seoul National University', country: 'South Korea', description: 'Student exchange and cultural collaboration' },
      { name: 'London School of Economics', country: 'United Kingdom', description: 'Business and economics research partnership' },
      { name: 'National University of Singapore', country: 'Singapore', description: 'Technology and innovation collaboration' },
    ],
    spotlight: {
      title: 'International Office support',
      content:
        'The International Office helps with visa guidance, pre-departure orientation, and on-campus support for exchange students. Visit the International Office for services and application guidance.',
      image: IMG.global,
      link: '/international-office',
      linkLabel: 'Visit International Office',
    },
    cta: {
      title: 'Start your exchange journey',
      description: 'Interested in studying abroad? Speak with the International Office about eligibility, destinations, and application deadlines.',
      buttonLabel: 'Contact International Office',
      buttonPath: '/international-office',
    },
    related: related('exchange-programs'),
  },

  clubs: {
    slug: 'clubs',
    type: 'clubs',
    title: 'Student Clubs',
    eyebrow: 'Engagement',
    lead:
      'From academic societies to cultural collectives and sports teams — KDU Global\'s student clubs build leadership, friendship, and a truly international campus experience. Club listings will soon be managed directly by student leaders through the campus portal.',
    image: IMG.clubs,
    stats: [
      { value: '40+', label: 'Active student clubs' },
      { value: '1,200+', label: 'Student members' },
      { value: '6', label: 'Club categories' },
    ],
    sections: [
      {
        title: 'Student-led campus life',
        content:
          'Clubs are the heartbeat of student life at KDU Global. They connect classmates across programmes, nationalities, and interests — creating communities where ideas are shared, skills are practised, and lifelong friendships begin.',
      },
      {
        title: 'Coming soon: Club leader accounts',
        list: [
          'Club presidents will register and manage their society online',
          'Update meeting times, descriptions, and membership information in real time',
          'Published clubs appear automatically on this directory',
          'Student Affairs reviews new registrations for quality and safety',
        ],
      },
    ],
    cta: {
      title: 'Start a new club',
      description: 'Have an idea for a society? Contact Student Affairs to learn about registration and support for new student organisations.',
      buttonLabel: 'Contact Student Affairs',
      buttonPath: '/contact',
    },
    related: related('clubs'),
  },
};

/** Hub cards — derived from spoke pages for consistent editing */
export const ENGAGEMENT_AREAS = ENGAGEMENT_NAV.map((item) => {
  if (item.externalUrl) {
    return {
      slug: item.path,
      title: item.label,
      shortTitle: 'CDC',
      description:
        'Internships, job fairs, career workshops, and employability support for KDU Global students — powered by the Career Development Center.',
      image: IMG.cdc,
      externalUrl: item.externalUrl,
    };
  }
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

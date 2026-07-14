export const sitemapData = [
  {
    id: 'introduction',
    title: 'Introduction',
    icon: '🏛️',
    path: '/introduction',
    children: [
      {
        id: 'about-kdu',
        title: 'About KDU',
        path: '/introduction/about-kdu',
        children: [
          { id: 'kdu-at-glance', title: 'KDU at a Glance', path: '/introduction/about-kdu/glance' },
          { id: 'vision-mission', title: 'Vision and Mission', path: '/introduction/about-kdu/vision-mission' },
          { id: 'history', title: 'History', path: '/introduction/about-kdu/history' }
        ]
      },
      {
        id: 'president',
        title: 'President',
        path: '/introduction/president',
        children: [
          { id: 'president-kdu', title: 'Kyungdong University', path: '/introduction/president/kdu' },
          { id: 'president-global', title: 'Kyungdong University (Global)', path: '/introduction/president/global' }
        ]
      },
      {
        id: 'why-kdu-global',
        title: 'Why KDU Global',
        path: '/introduction/why-kdu-global'
      },
      {
        id: 'faculty-staff',
        title: 'Faculty and Staff',
        path: '/introduction/faculty-staff',
        children: [
          { id: 'international-faculty', title: 'International Faculty', path: '/introduction/faculty-staff/international' },
          { id: 'international-office', title: 'International Office', path: '/introduction/faculty-staff/office' },
          { id: 'faculty-recruitment', title: 'Faculty Recruitment', path: '/introduction/faculty-staff/recruitment' }
        ]
      },
      {
        id: 'kdu-symbol',
        title: 'KDU Symbol',
        path: '/introduction/kdu-symbol'
      }
    ]
  },
  {
    id: 'admissions',
    title: 'Admissions',
    icon: '📝',
    path: '/admissions',
    children: [
      {
        id: 'general-guidelines',
        title: 'General Guidelines',
        path: '/admissions/general-guidelines'
      },
      {
        id: 'application-process',
        title: 'Application Process',
        path: '/admissions/application-process'
      },
      {
        id: 'documents-required',
        title: 'Documents Required',
        path: '/admissions/documents-required'
      },
      {
        id: 'scholarships-fees',
        title: 'Scholarships and Fees',
        path: '/admissions/scholarships-fees'
      }
    ]
  },
  {
    id: 'academics',
    title: 'Academics',
    icon: '📚',
    path: '/academics',
    children: [
      {
        id: 'undergraduate',
        title: 'Undergraduate Programs',
        path: '/academics/undergraduate',
        children: [
          { id: 'ug-business', title: 'Business Administration', path: '/academics/undergraduate/business' },
          { id: 'ug-computer-science', title: 'Computer Science', path: '/academics/undergraduate/computer-science' },
          { id: 'ug-hospitality', title: 'Hospitality Management', path: '/academics/undergraduate/hospitality' },
          { id: 'ug-english', title: 'English Language & Literature', path: '/academics/undergraduate/english' },
          { id: 'ug-korean', title: 'Korean Language & Literature', path: '/academics/undergraduate/korean' },
          { id: 'ug-education', title: 'Education', path: '/academics/undergraduate/education' }
        ]
      },
      {
        id: 'graduate',
        title: 'Graduate Programs',
        path: '/academics/graduate',
        children: [
          { id: 'g-business', title: 'MBA', path: '/academics/graduate/mba' },
          { id: 'g-education', title: 'Master of Education', path: '/academics/graduate/education' },
          { id: 'g-phd', title: 'PhD Programs', path: '/academics/graduate/phd' }
        ]
      },
      {
        id: 'language-training',
        title: 'Language Training',
        path: '/academics/language-training',
        children: [
          { id: 'korean-academic', title: 'Korean for Academic Purposes', path: '/academics/language-training/korean' },
          { id: 'english-academic', title: 'English for Academic Purposes', path: '/academics/language-training/english' }
        ]
      },
      {
        id: 'vocational-short-courses',
        title: 'Vocational and Short Courses',
        path: '/academics/vocational-short-courses'
      }
    ]
  },
  {
    id: 'collaboration',
    title: 'Collaboration',
    icon: '🤝',
    path: '/collaboration',
    children: [
      {
        id: 'global-student-mobility',
        title: 'Global Student Mobility',
        path: '/collaboration/global-student-mobility'
      },
      {
        id: 'partner-institutions',
        title: 'Partner Institutions',
        path: '/collaboration/partner-institutions'
      },
      {
        id: 'agency-partnerships',
        title: 'Agency Partnerships',
        path: '/collaboration/agency-partnerships'
      },
      {
        id: 'official-agents',
        title: 'Official Agents',
        path: '/collaboration/official-agents'
      }
    ]
  },
  {
    id: 'campus-life',
    title: 'Campus Life',
    icon: '🎓',
    path: '/campus-life',
    children: [
      {
        id: 'notice-board',
        title: 'Notice Board',
        path: '/campus-life/notice-board'
      },
      {
        id: 'student-events',
        title: 'Student Events',
        path: '/campus-life/student-events'
      },
      {
        id: 'student-clubs',
        title: 'Student Clubs and Labs',
        path: '/campus-life/student-clubs',
        children: [
          { id: 'programming-club', title: 'Programming Club', path: '/campus-life/student-clubs/programming' },
          { id: 'football-club', title: 'Football Club', path: '/campus-life/student-clubs/football' },
          { id: 'music-club', title: 'Music Club', path: '/campus-life/student-clubs/music' },
          { id: 'cricket-club', title: 'Cricket Club', path: '/campus-life/student-clubs/cricket' },
          { id: 'environment-club', title: 'Environment Club', path: '/campus-life/student-clubs/environment' }
        ]
      },
      {
        id: 'student-housing',
        title: 'Student Housing',
        path: '/campus-life/student-housing'
      },
      {
        id: 'campus-facilities',
        title: 'Campus Facilities',
        path: '/campus-life/campus-facilities',
        children: [
          { id: 'global-campus', title: 'Global Campus', path: '/campus-life/campus-facilities/global-campus' },
          { id: 'medical-campus', title: 'Medical Campus', path: '/campus-life/campus-facilities/medical-campus' },
          { id: 'metropol-campus', title: 'Metropol Campus', path: '/campus-life/campus-facilities/metropol-campus' }
        ]
      }
    ]
  },
  {
    id: 'student-services',
    title: 'Student Services',
    icon: '🛠️',
    path: '/student-services',
    children: [
      {
        id: 'services-center',
        title: 'Student Services Center',
        path: '/student-services/services-center'
      },
      {
        id: 'part-time-job',
        title: 'Part-time Job Support',
        path: '/student-services/part-time-job'
      },
      {
        id: 'career-development',
        title: 'Career Development Center',
        path: '/student-services/career-development'
      },
      {
        id: 'counselling-center',
        title: 'Counselling and Human Rights Center',
        path: '/student-services/counselling-center'
      }
    ]
  },
  {
    id: 'downloads',
    title: 'Downloads',
    icon: '📥',
    path: '/downloads',
    children: [
      {
        id: 'videos',
        title: 'Videos',
        path: '/downloads/videos'
      },
      {
        id: 'brochures',
        title: 'Brochures & Flyers',
        path: '/downloads/brochures'
      },
      {
        id: 'forms',
        title: 'Forms',
        path: '/downloads/forms'
      }
    ]
  }
];

// Quick links for footer or sidebar
export const quickLinks = [
  { title: 'Apply Now', path: 'https://forms.office.com/r/5MpsNXAunb', external: true },
  { title: 'Prospectus', path: '/downloads/prospectus' },
  { title: 'Contact Us', path: '/contact' },
  { title: 'FAQ', path: '/faq' }
];
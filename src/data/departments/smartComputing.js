const IMG = {
  campus: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80',
  computing: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80',
  lab: 'https://images.unsplash.com/photo-1531489875309-2e8c4b3e3c3f?w=1200&q=80',
  ai: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
  portrait: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
  student: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80',
  event: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
  research: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80',
};

export default {
  slug: 'bachelor-of-smart-computing',
  title: 'Bachelor of Smart Computing',
  shortTitle: 'Smart Computing',
  duration: '4 Years',
  language: 'English (100%)',
  description:
    'Empowering intelligence to nurture today\'s and tomorrow\'s technologies! A four-year, English-medium program developing in-depth understanding of the emerging technologies driving industrial and social advancement.',
  bannerImage: IMG.computing,
  cardImage: IMG.computing,
  cardDescription:
    'Five integrated specializations—Data Science, AI and Robotics; Cybersecurity and Privacy; Internet of Things; Games and Virtual Reality; and Software Development—preparing graduates for the digital era.',

  breadcrumbs: [
    { label: 'Home', path: '/' },
    { label: 'Academics', path: '/academics' },
    { label: 'Bachelor of Smart Computing' },
  ],

  chair: {
    title: 'the Department Chair',
    name: 'Prof. Dr. James Chen',
    position: 'Chair, Department of Smart Computing',
    photo: IMG.portrait,
    message: [
      'The Smart Computing program at KDU Global is designed to nurture students with in-depth understanding of the emerging technologies driving today\'s industrial and social advancements.',
      'The program offers five concurrent and rapidly evolving specializations: Data Science, AI and Robotics; Cybersecurity and Privacy; Internet of Things; Games and Virtual Reality; and Software Development.',
      'By leveraging comprehensive knowledge and hands-on experience, our graduates secure roles in diverse industries such as high-tech, healthcare, education, manufacturing, and entertainment—contributing significantly to innovation and development in the digital era.',
    ],
    mission:
      'To develop computing professionals with deep knowledge of emerging technologies and the practical experience to innovate across industries in the digital era.',
    objectives: [
      'Build in-depth understanding of emerging computing and digital technologies',
      'Deliver integrated study across data science, AI, cybersecurity, IoT, games, and software development',
      'Prepare graduates for professional roles across technology-driven industries',
      'Support continued academic advancement in specialized computing and engineering fields',
    ],
  },

  overview: {
    philosophy:
      'Smart Computing combines theoretical foundations with hands-on experience across five rapidly evolving specializations. Students develop the knowledge and skills needed to contribute to innovation in high-tech, healthcare, education, manufacturing, entertainment, and beyond.',
    outcomes: [
      'Apply computing knowledge across diverse technology sectors',
      'Work in high-tech, healthcare, education, manufacturing, and entertainment industries',
      'Contribute to community and national development in the digital era',
      'Pursue advanced academic study in specialized fields of computing and engineering',
      'Secure professional roles as engineers, developers, analysts, and technology specialists upon graduation',
    ],
    pathways: [
      'Data Science, AI and Robotics',
      'Cybersecurity and Privacy',
      'Internet of Things (IoT)',
      'Games and Virtual Reality',
      'Software Development',
    ],
  },

  curriculumHighlights: [
    {
      year: 1,
      title: 'Games and Virtual Reality',
      summary: 'C++ Programming, Python Programming, Computer Vision, Computer Graphics, Game Programming, Computer Animation and Modeling, and Virtual and Augmented Reality.',
    },
    {
      year: 2,
      title: 'Data Science, AI and Robotics',
      summary: 'Introduction to AI and Robotics, Database Management Systems, System Analysis and Design, Data Mining and Analytics, Artificial Intelligence and Deep Learning, Robotics Systems Design, Data Science, and Drones and Autonomous Systems.',
    },
    {
      year: 3,
      title: 'Cybersecurity and Privacy',
      summary: 'Engineering Mathematics, Information Security, Cryptography and Cyber Security Operating Systems, Digital Forensics, Blockchain and Cryptocurrency, and Ethical Hacking.',
    },
    {
      year: 4,
      title: 'Internet of Things (IoT) & Software Development',
      summary: 'Discrete Mathematics, Data Communication and Telecommunication Systems, Network Infrastructure and Management, Cloud Computing, Linux Operating Systems and Networking, Internet of Things (IoT), Smart Computing Project, and Seminar on IT Practices. Along with  Computer Architecture and Digital Systems, Data Structures and Algorithms, Java Programming, Embedded Systems, Web Applications Development, Mobile Programming, and Advanced Web Technology.',
    },
    


  ],

  whyChoose: [
    { title: 'Fully English-medium instruction', description: 'The entire program is delivered in English, preparing graduates for global technology careers.' },
    { title: 'Five integrated specializations', description: 'Data science, AI and robotics, cybersecurity, IoT, games and VR, and software development within one degree.' },
    { title: 'Hands-on learning', description: 'Broad theoretical knowledge combined with practical experience across emerging digital technologies.' },
    { title: 'Employment and further study', description: 'Pathways to industry roles across the digital economy and to postgraduate study in computing and engineering.' },
  ],

  admissions: {
    eligibility: [
      'High school diploma or equivalent with strong mathematics background',
      'Minimum GPA of 2.5 on a 4.0 scale (or equivalent)',
      'Demonstrated interest in technology through coursework or projects',
      'Transfer students must have completed prerequisite mathematics courses',
    ],
    language: [
      'IELTS 6.0 or TOEFL iBT 80 (for non-native English speakers)',
      'KDU Global English Placement Test alternative available',
      'Technical English proficiency assessed during orientation',
    ],
    documents: [
      'Completed application form',
      'Official academic transcripts',
      'Copy of passport or national ID',
      'Personal statement (500 words)',
      'Two letters of recommendation',
      'Portfolio of programming projects (recommended)',
    ],
    tuition: {
      amount: '$4,000 per semester',
      note: 'Merit-based scholarships available for outstanding applicants. Financial aid packages can cover up to 50% of tuition.',
    },
    timeline: [
      { date: 'October 1', event: 'Application opens for Fall semester' },
      { date: 'March 15', event: 'Priority deadline for scholarship consideration' },
      { date: 'May 30', event: 'Final application deadline' },
      { date: 'August 15', event: 'Orientation and program commencement' },
    ],
  },

  curriculum: [
    {
      year: 1,
      semesters: [
        {
          name: 'Semester 1',
          majorCourses: [
            { code: 'CSC101', name: 'Introduction to Programming', credits: 3 },
            { code: 'CSC102', name: 'Computer Systems Fundamentals', credits: 3 },
            { code: 'MAT101', name: 'Discrete Mathematics', credits: 3 },
            { code: 'ENG101', name: 'Academic English I', credits: 3 },
          ],
          electives: [
            { code: 'GEN101', name: 'Introduction to University Life', credits: 1 },
          ],
        },
        {
          name: 'Semester 2',
          majorCourses: [
            { code: 'CSC201', name: 'Data Structures & Algorithms', credits: 3 },
            { code: 'CSC202', name: 'Web Development Fundamentals', credits: 3 },
            { code: 'MAT201', name: 'Linear Algebra', credits: 3 },
            { code: 'ENG102', name: 'Academic English II', credits: 3 },
          ],
          electives: [
            { code: 'ART101', name: 'Digital Design Principles', credits: 2 },
          ],
        },
      ],
    },
    {
      year: 2,
      semesters: [
        {
          name: 'Semester 1',
          majorCourses: [
            { code: 'CSC301', name: 'Database Management Systems', credits: 3 },
            { code: 'CSC302', name: 'Object-Oriented Programming', credits: 3 },
            { code: 'CSC303', name: 'Computer Networks', credits: 3 },
            { code: 'STA201', name: 'Probability & Statistics', credits: 3 },
          ],
          electives: [],
        },
        {
          name: 'Semester 2',
          majorCourses: [
            { code: 'CSC401', name: 'Software Engineering', credits: 3 },
            { code: 'CSC402', name: 'Operating Systems', credits: 3 },
            { code: 'CSC403', name: 'Introduction to AI', credits: 3 },
            { code: 'CSC404', name: 'Mobile App Development', credits: 3 },
          ],
          electives: [
            { code: 'CSC410', name: 'Game Development', credits: 2 },
          ],
        },
      ],
    },
    {
      year: 3,
      semesters: [
        {
          name: 'Semester 1',
          majorCourses: [
            { code: 'CSC501', name: 'Machine Learning', credits: 3 },
            { code: 'CSC502', name: 'Cloud Computing', credits: 3 },
            { code: 'CSC503', name: 'Cybersecurity Fundamentals', credits: 3 },
            { code: 'CSC504', name: 'Data Mining', credits: 3 },
          ],
          electives: [],
        },
        {
          name: 'Semester 2',
          majorCourses: [
            { code: 'CSC601', name: 'Deep Learning', credits: 3 },
            { code: 'CSC602', name: 'DevOps & CI/CD', credits: 3 },
            { code: 'CSC603', name: 'Internet of Things', credits: 3 },
            { code: 'CSC604', name: 'Industry Internship', credits: 6 },
          ],
          electives: [
            { code: 'CSC610', name: 'Blockchain Technology', credits: 2 },
          ],
        },
      ],
    },
    {
      year: 4,
      semesters: [
        {
          name: 'Semester 1',
          majorCourses: [
            { code: 'CSC701', name: 'Advanced Software Architecture', credits: 3 },
            { code: 'CSC702', name: 'Big Data Analytics', credits: 3 },
            { code: 'CSC703', name: 'Capstone Project I', credits: 3 },
            { code: 'CSC704', name: 'Research Methodology', credits: 3 },
          ],
          electives: [],
        },
        {
          name: 'Semester 2',
          majorCourses: [
            { code: 'CSC801', name: 'Capstone Project II', credits: 6 },
            { code: 'CSC802', name: 'Technology Entrepreneurship', credits: 3 },
            { code: 'CSC803', name: 'Professional Ethics in Computing', credits: 3 },
          ],
          electives: [
            { code: 'CSC810', name: 'Natural Language Processing', credits: 3 },
            { code: 'CSC811', name: 'Computer Vision', credits: 3 },
          ],
        },
      ],
    },
  ],

  faculty: [
    
    
  ],

  researchAreas: [
  
    
  ],

  news: [
    {
      id: 'sc-n1',
      image: IMG.research,
      date: 'June 10, 2026',
      category: 'Research',
      title: 'Smart Computing Lab Receives International Research Grant',
      summary: 'The department secured a $2M grant for advancing AI-driven smart city solutions in collaboration with partners across three continents.',
      link: '#',
    },
    {
      id: 'sc-n2',
      image: IMG.event,
      date: 'May 28, 2026',
      category: 'Achievement',
      title: 'Students Win First Place at Global Hackathon',
      summary: 'A team of Smart Computing students developed an award-winning accessibility app at the International CodeFest 2026.',
      link: '#',
    },
    {
      id: 'sc-n3',
      image: IMG.lab,
      date: 'May 15, 2026',
      category: 'Partnership',
      title: 'New Industry Partnership with Leading Tech Firm',
      summary: 'KDU Global partners with a global technology leader to provide internship opportunities and co-developed curriculum modules.',
      link: '#',
    },
    {
      id: 'sc-n4',
      image: IMG.computing,
      date: 'April 22, 2026',
      category: 'Faculty',
      title: 'Prof. Chen Publishes Breakthrough AI Research',
      summary: 'Department chair\'s latest paper on neural architecture optimization accepted at a top-tier international conference.',
      link: '#',
    },
  ],

  events: [
    {
      banner: IMG.event,
      title: 'Annual Tech Innovation Summit',
      date: 'September 15, 2026',
      venue: 'Main Auditorium, Building A',
      description: 'Join industry leaders and researchers for a day of keynote speeches, panel discussions, and technology demonstrations.',
      type: 'Conference',
    },
    {
      banner: IMG.lab,
      title: 'AI & Machine Learning Workshop',
      date: 'July 20, 2026',
      venue: 'Smart Computing Lab, Room 401',
      description: 'Hands-on workshop covering the latest developments in deep learning frameworks and practical model deployment.',
      type: 'Workshop',
    },
    {
      banner: IMG.computing,
      title: 'Cybersecurity Capture the Flag',
      date: 'August 5, 2026',
      venue: 'Computer Lab, Building A',
      description: 'Competitive cybersecurity challenge open to all computing students. Prizes for top performers.',
      type: 'Competition',
    },
    {
      banner: IMG.research,
      title: 'Research Seminar: Future of Cloud Computing',
      date: 'June 30, 2026',
      venue: 'Seminar Room B201',
      description: 'Guest lecture by a leading cloud architect on emerging trends in serverless and edge computing.',
      type: 'Seminar',
    },
  ],

  testimonials: [
    {
      photo: IMG.student,
      name: 'Alexandra Nguyen',
      role: 'Software Engineer at TechCorp',
      program: 'BSc Smart Computing, Class of 2024',
      quote: 'The hands-on projects and industry internships at KDU Global gave me a significant advantage when entering the job market. I was offered three positions before graduation.',
    },
    {
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
      name: 'Mohammed Al-Rashid',
      role: 'AI Research Scientist',
      program: 'BSc Smart Computing, Class of 2023',
      quote: 'The research opportunities and mentorship from world-class faculty inspired me to pursue graduate studies. KDU Global truly prepared me for a career at the cutting edge of AI.',
    },
  ],

  careers: [
    { title: 'AI Engineer', description: 'Design and deploy intelligent systems using artificial intelligence and machine learning.' },
    { title: 'Robotics Engineer', description: 'Develop and integrate robotic and autonomous systems for industrial and research applications.' },
    { title: 'Data Scientist', description: 'Analyze complex data to support decision-making and innovation across sectors.' },
    { title: 'IoT Developer', description: 'Build connected devices and smart systems for networked environments.' },
    { title: 'Software Developer', description: 'Create applications across web, mobile, and enterprise platforms.' },
    { title: 'Mobile Application Developer', description: 'Design and build software for smartphones and mobile devices.' },
    { title: 'Cybersecurity Analyst', description: 'Protect systems and data from digital threats and security vulnerabilities.' },
    { title: 'Information Security Manager', description: 'Lead organizational strategies for information security and risk management.' },
    { title: 'Game Developer', description: 'Create interactive games and immersive digital entertainment experiences.' },
    { title: 'VR/AR Developer', description: 'Build virtual and augmented reality applications and experiences.' },
  ],

  contact: {
    address: 'Department of Smart Computing, Building A, Floor 3, KDU Global Campus, 123 University Avenue',
    phone: '+1 (555) 100-2000',
    email: 'smartcomputing@kduglobal.edu',
    hours: 'Monday – Friday, 9:00 AM – 5:00 PM',
  },
};
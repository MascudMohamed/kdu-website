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
  description:
    'A cutting-edge program integrating software engineering, artificial intelligence, and cloud technologies to prepare the next generation of technology innovators.',
  bannerImage: IMG.computing,
  cardImage: IMG.computing,
  cardDescription:
    'Master the technologies shaping tomorrow — from AI and data science to cybersecurity and cloud computing.',

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
      'Welcome to the Department of Smart Computing at KDU Global. In an era defined by rapid technological transformation, our program stands at the forefront of innovation, equipping students with the skills and mindset needed to thrive in the global digital economy.',
      'Our curriculum is designed in close collaboration with industry leaders, ensuring that every graduate emerges not only with theoretical knowledge but with practical, job-ready competencies. From artificial intelligence to cybersecurity, our students engage with real-world challenges from day one.',
      'I invite you to explore our program and discover how KDU Global can launch your career in one of the most dynamic and rewarding fields of our time.',
    ],
    mission:
      'To cultivate globally competitive computing professionals through innovative education, cutting-edge research, and industry partnerships that address real-world technological challenges.',
    objectives: [
      'Deliver industry-aligned curriculum with hands-on project experience',
      'Foster research excellence in AI, data science, and cybersecurity',
      'Build strong partnerships with global technology companies',
      'Prepare graduates for leadership roles in the digital economy',
    ],
  },

  overview: {
    philosophy:
      'Our educational philosophy centers on experiential learning, where students build real applications, participate in hackathons, and collaborate on research projects. We believe the best technologists are those who learn by doing, supported by rigorous theoretical foundations.',
    outcomes: [
      'Design and develop scalable software systems using modern frameworks',
      'Apply machine learning and AI techniques to solve complex problems',
      'Implement secure and resilient cloud-based architectures',
      'Analyze and interpret large datasets for data-driven decision making',
      'Communicate technical concepts effectively to diverse stakeholders',
      'Demonstrate ethical practices in technology development and deployment',
    ],
    pathways: [
      'Software Engineering & Development',
      'Artificial Intelligence & Machine Learning',
      'Data Science & Analytics',
      'Cybersecurity & Network Security',
      'Cloud Computing & DevOps',
      'Graduate Studies & Research',
    ],
  },

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
    {
      id: 'sc-1',
      name: 'Prof. Dr. James Chen',
      position: 'Department Chair',
      rank: 'Professors',
      photo: IMG.portrait,
      specialization: 'Artificial Intelligence & Machine Learning',
      researchInterests: 'Deep learning, neural architecture search, computer vision',
      biography: 'Prof. Chen has over 20 years of experience in AI research and has published over 80 peer-reviewed papers. He previously led research teams at leading technology companies before joining KDU Global.',
      email: 'j.chen@kduglobal.edu',
      phone: '+1 (555) 100-2001',
      office: 'Building A, Room 301',
      linkedin: '#',
      scholar: '#',
      researchgate: '#',
    },
    {
      id: 'sc-2',
      name: 'Dr. Sarah Mitchell',
      position: 'Associate Professor',
      rank: 'Associate Professors',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      specialization: 'Cybersecurity & Network Security',
      researchInterests: 'Network intrusion detection, cryptography, secure cloud systems',
      biography: 'Dr. Mitchell is a certified ethical hacker and leads the university\'s cybersecurity research lab. She has consulted for government agencies and Fortune 500 companies.',
      email: 's.mitchell@kduglobal.edu',
      phone: '+1 (555) 100-2002',
      office: 'Building A, Room 305',
      linkedin: '#',
      website: '#',
    },
    {
      id: 'sc-3',
      name: 'Dr. Ahmed Hassan',
      position: 'Assistant Professor',
      rank: 'Assistant Professors',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      specialization: 'Data Science & Big Data Analytics',
      researchInterests: 'Predictive analytics, data visualization, business intelligence',
      biography: 'Dr. Hassan brings industry experience from leading data analytics firms. His research focuses on applying machine learning to solve real-world business problems.',
      email: 'a.hassan@kduglobal.edu',
      phone: '+1 (555) 100-2003',
      office: 'Building A, Room 308',
      linkedin: '#',
      scholar: '#',
    },
    {
      id: 'sc-4',
      name: 'Ms. Emily Park',
      position: 'Senior Lecturer',
      rank: 'Lecturers',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
      specialization: 'Software Engineering & Web Development',
      researchInterests: 'Full-stack development, agile methodologies, UX design',
      biography: 'Ms. Park is a full-stack developer with 10 years of industry experience. She mentors student startup projects and leads the annual hackathon.',
      email: 'e.park@kduglobal.edu',
      phone: '+1 (555) 100-2004',
      office: 'Building A, Room 210',
      linkedin: '#',
      website: '#',
    },
    {
      id: 'sc-5',
      name: 'Mr. David Kim',
      position: 'Lecturer',
      rank: 'Lecturers',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      specialization: 'Cloud Computing & DevOps',
      researchInterests: 'Container orchestration, serverless architecture, infrastructure automation',
      biography: 'Mr. Kim is an AWS-certified solutions architect who transitioned from industry to academia. He manages the department\'s cloud computing lab.',
      email: 'd.kim@kduglobal.edu',
      phone: '+1 (555) 100-2005',
      office: 'Building A, Room 212',
      linkedin: '#',
    },
    {
      id: 'sc-6',
      name: 'Prof. Dr. Maria Santos',
      position: 'Professor',
      rank: 'Professors',
      photo: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80',
      specialization: 'Internet of Things & Embedded Systems',
      researchInterests: 'Smart cities, sensor networks, edge computing',
      biography: 'Prof. Santos leads the IoT research center and has secured multiple international research grants. Her work has been adopted by smart city initiatives across Asia.',
      email: 'm.santos@kduglobal.edu',
      phone: '+1 (555) 100-2006',
      office: 'Building B, Room 101',
      linkedin: '#',
      researchgate: '#',
      scholar: '#',
    },
  ],

  researchAreas: [
    {
      title: 'Artificial Intelligence',
      description: 'Developing intelligent systems that can perceive, learn, reason, and act autonomously in complex environments.',
      faculty: ['Prof. Dr. James Chen', 'Dr. Ahmed Hassan'],
    },
    {
      title: 'Data Science',
      description: 'Extracting actionable insights from large-scale datasets using statistical methods and machine learning techniques.',
      faculty: ['Dr. Ahmed Hassan', 'Prof. Dr. Maria Santos'],
    },
    {
      title: 'Machine Learning',
      description: 'Advancing algorithms and models that enable computers to improve performance through experience and data.',
      faculty: ['Prof. Dr. James Chen'],
    },
    {
      title: 'Cybersecurity',
      description: 'Protecting digital infrastructure through advanced threat detection, cryptography, and secure system design.',
      faculty: ['Dr. Sarah Mitchell'],
    },
    {
      title: 'Software Engineering',
      description: 'Building reliable, scalable, and maintainable software systems using modern development practices and architectures.',
      faculty: ['Ms. Emily Park', 'Mr. David Kim'],
    },
    {
      title: 'Cloud Computing',
      description: 'Designing and deploying distributed systems on cloud platforms for scalability, reliability, and cost efficiency.',
      faculty: ['Mr. David Kim'],
    },
    {
      title: 'Internet of Things',
      description: 'Connecting physical devices to digital networks to create smart environments and automated systems.',
      faculty: ['Prof. Dr. Maria Santos'],
    },
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
    { title: 'Software Engineer', description: 'Design and build applications across web, mobile, and enterprise platforms.', icon: '💻' },
    { title: 'AI Engineer', description: 'Develop intelligent systems using machine learning and deep learning technologies.', icon: '🤖' },
    { title: 'Data Scientist', description: 'Analyze complex datasets to drive business insights and strategic decisions.', icon: '📊' },
    { title: 'Systems Analyst', description: 'Bridge business needs with technology solutions through analysis and design.', icon: '🔧' },
    { title: 'Cybersecurity Specialist', description: 'Protect organizations from digital threats and ensure information security.', icon: '🔒' },
  ],

  contact: {
    address: 'Department of Smart Computing, Building A, Floor 3, KDU Global Campus, 123 University Avenue',
    phone: '+1 (555) 100-2000',
    email: 'smartcomputing@kduglobal.edu',
    hours: 'Monday – Friday, 9:00 AM – 5:00 PM',
  },
};

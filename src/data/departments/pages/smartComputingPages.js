const related = (slug, links) =>
  links.map(({ label, path }) => ({ label, path: `/academics/undergraduate/${slug}/${path}` }));

const base = 'smart-computing';

export default {
  programme: {
    type: 'editorial',
    title: 'Programme Overview',
    eyebrow: 'Bachelor of Smart Computing',
    lead: 'A four-year Bachelor of Science integrating software engineering, artificial intelligence, cybersecurity, and cloud technologies — designed for students who want to build, secure, and scale real-world systems.',
    sections: [
      {
        title: 'Degree structure',
        content: 'Students complete 120 credits across eight semesters, progressing from computing foundations to specialization electives, industry internship, and a capstone project.',
        list: ['Bachelor of Science (Smart Computing)', '4 years full-time', 'English medium instruction', 'On-campus delivery at KDU Global Campus'],
      },
      {
        title: 'Graduate attributes',
        content: 'Graduates demonstrate the technical depth and professional judgment expected of modern computing practitioners.',
        list: [
          'Design and implement reliable software systems',
          'Apply AI and data methods responsibly',
          'Secure infrastructure against contemporary threats',
          'Deploy and manage cloud-native applications',
          'Communicate technical decisions to diverse stakeholders',
        ],
      },
      {
        title: 'Assessment philosophy',
        content: 'Learning is assessed through project portfolios, laboratory work, team deliverables, and examinations — mirroring how technology teams evaluate performance in industry.',
      },
    ],
    related: related(base, [
      { label: 'Semester curriculum', path: 'curriculum' },
      { label: 'Learning experience', path: 'learning-experience' },
      { label: 'Graduate employment', path: 'employment' },
    ]),
  },

  'learning-experience': {
    type: 'editorial',
    title: 'Learning Experience',
    eyebrow: 'How you learn',
    lead: 'Smart Computing is taught through studios, laboratories, and project sprints — not passive lectures alone. You build from week one.',
    sections: [
      {
        title: 'Computing studios',
        content: 'Small-group studio sessions mirror agile development teams. Students design, code, review, and iterate in weekly cycles.',
      },
      {
        title: 'Industry-standard laboratories',
        content: 'Dedicated labs for networking, security, AI/ML, and cloud infrastructure provide hands-on access to professional tools and environments.',
      },
      {
        title: 'Mentored project work',
        content: 'Faculty and industry mentors guide team projects from conception through deployment, emphasizing documentation and professional practice.',
      },
    ],
    related: related(base, [
      { label: 'Student projects', path: 'projects' },
      { label: 'Technology stack', path: 'technology-stack' },
      { label: 'AI pathway', path: 'pathways/artificial-intelligence' },
    ]),
  },

  curriculum: { type: 'curriculum' },

  'pathways/software-engineering': {
    type: 'pathway',
    title: 'Software Engineering',
    eyebrow: 'Specialization pathway',
    lead: 'Build robust applications using modern software architecture, agile delivery, and full-stack development practices.',
    focus: ['System design', 'API development', 'Testing & CI/CD', 'Mobile & web applications'],
    careers: ['Software Engineer', 'Full-Stack Developer', 'Solutions Architect', 'Engineering Lead'],
    courses: ['Advanced Software Engineering', 'Web Application Development', 'Mobile Computing', 'Software Architecture'],
    related: related(base, [
      { label: 'Full curriculum', path: 'curriculum' },
      { label: 'Capstone projects', path: 'projects' },
      { label: 'Internships', path: 'internships' },
    ]),
  },

  'pathways/artificial-intelligence': {
    type: 'pathway',
    title: 'Artificial Intelligence',
    eyebrow: 'Specialization pathway',
    lead: 'Develop intelligent systems through machine learning, deep learning, and responsible AI — connected to active faculty research.',
    focus: ['Machine learning', 'Neural networks', 'NLP & computer vision', 'AI ethics & governance'],
    careers: ['ML Engineer', 'AI Researcher', 'Data Scientist', 'AI Product Developer'],
    courses: ['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'AI Ethics'],
    related: related(base, [
      { label: 'AI Research Lab', path: 'research/ai-lab' },
      { label: 'Data Science pathway', path: 'pathways/data-science' },
      { label: 'Faculty directory', path: 'faculty' },
    ]),
  },

  'pathways/cybersecurity': {
    type: 'pathway',
    title: 'Cybersecurity',
    eyebrow: 'Specialization pathway',
    lead: 'Protect digital infrastructure through offensive and defensive security training, incident response, and compliance frameworks.',
    focus: ['Network security', 'Penetration testing', 'Cryptography', 'Security operations'],
    careers: ['Security Analyst', 'Penetration Tester', 'SOC Engineer', 'Security Consultant'],
    courses: ['Cybersecurity Fundamentals', 'Ethical Hacking', 'Digital Forensics', 'Secure Cloud Architecture'],
    related: related(base, [
      { label: 'Cybersecurity Lab', path: 'research/cybersecurity-lab' },
      { label: 'Certifications', path: 'certifications' },
      { label: 'Cloud pathway', path: 'pathways/cloud-computing' },
    ]),
  },

  'pathways/data-science': {
    type: 'pathway',
    title: 'Data Science',
    eyebrow: 'Specialization pathway',
    lead: 'Transform data into insight through statistics, visualization, and scalable analytics pipelines.',
    focus: ['Statistical modelling', 'Data engineering', 'Visualization', 'Predictive analytics'],
    careers: ['Data Analyst', 'Data Engineer', 'Business Intelligence Developer', 'Analytics Consultant'],
    courses: ['Data Mining', 'Big Data Analytics', 'Statistical Computing', 'Data Visualization'],
    related: related(base, [
      { label: 'AI pathway', path: 'pathways/artificial-intelligence' },
      { label: 'Technology stack', path: 'technology-stack' },
      { label: 'Graduate employment', path: 'employment' },
    ]),
  },

  'pathways/cloud-computing': {
    type: 'pathway',
    title: 'Cloud Computing',
    eyebrow: 'Specialization pathway',
    lead: 'Design and operate scalable cloud-native systems using containers, orchestration, and DevOps automation.',
    focus: ['Cloud architecture', 'DevOps', 'Containers & Kubernetes', 'Serverless computing'],
    careers: ['Cloud Engineer', 'DevOps Engineer', 'Platform Engineer', 'SRE'],
    courses: ['Cloud Computing', 'DevOps & Automation', 'Distributed Systems', 'Microservices Architecture'],
    related: related(base, [
      { label: 'Innovation Centre', path: 'innovation-centre' },
      { label: 'Internships', path: 'internships' },
      { label: 'Software Engineering', path: 'pathways/software-engineering' },
    ]),
  },

  research: {
    type: 'editorial',
    title: 'Research & Innovation',
    eyebrow: 'Research',
    lead: 'Faculty-led research in artificial intelligence, cybersecurity, and distributed systems creates opportunities for undergraduate participation and industry collaboration.',
    sections: [
      {
        title: 'Research themes',
        list: [
          'Trustworthy AI and machine learning systems',
          'Cyber-physical security and threat intelligence',
          'Scalable cloud and edge computing architectures',
          'Human-computer interaction in intelligent systems',
        ],
      },
      {
        title: 'Student opportunities',
        content: 'Undergraduate researchers may join faculty labs, co-author publications, and present at student research symposia from year three.',
      },
    ],
    related: related(base, [
      { label: 'AI Research Lab', path: 'research/ai-lab' },
      { label: 'Cybersecurity Lab', path: 'research/cybersecurity-lab' },
      { label: 'Innovation Centre', path: 'innovation-centre' },
    ]),
  },

  'research/ai-lab': {
    type: 'lab',
    title: 'Artificial Intelligence Research Lab',
    eyebrow: 'Research Lab',
    lead: 'Advancing machine learning methods for real-world deployment with emphasis on explainability, fairness, and robustness.',
    mission: 'To develop AI systems that are accurate, interpretable, and safe for deployment in high-stakes environments.',
    themes: ['Explainable AI', 'Computer vision', 'NLP for multilingual systems', 'Reinforcement learning'],
    equipment: ['GPU compute cluster', 'Edge AI development kits', 'Robotics testbed'],
    opportunities: 'UG research assistants welcome from year three. Summer research internships available.',
    related: related(base, [
      { label: 'AI pathway', path: 'pathways/artificial-intelligence' },
      { label: 'Faculty directory', path: 'faculty' },
      { label: 'Student projects', path: 'projects' },
    ]),
  },

  'research/cybersecurity-lab': {
    type: 'lab',
    title: 'Cybersecurity Research Lab',
    eyebrow: 'Research Lab',
    lead: 'Investigating network security, digital forensics, and secure systems design for enterprise and critical infrastructure.',
    mission: 'To advance defensive security capabilities and train the next generation of security professionals.',
    themes: ['Threat intelligence', 'Penetration testing methodologies', 'Secure software development', 'Incident response'],
    equipment: ['Isolated network sandbox', 'Forensics workstation suite', 'Security operations simulation environment'],
    opportunities: 'Red team/blue team exercises open to advanced students. Competition team recruitment annually.',
    related: related(base, [
      { label: 'Cybersecurity pathway', path: 'pathways/cybersecurity' },
      { label: 'Certifications', path: 'certifications' },
      { label: 'Hackathons', path: 'hackathons' },
    ]),
  },

  'innovation-centre': {
    type: 'editorial',
    title: 'Innovation Centre',
    eyebrow: 'Innovation',
    lead: 'A campus hub where student startups, industry challenges, and faculty research converge to accelerate technology transfer.',
    sections: [
      {
        title: 'What we offer',
        list: [
          'Startup incubation and mentorship',
          'Industry challenge sprints',
          'Prototype development support',
          'Investor pitch preparation',
        ],
      },
      {
        title: 'Industry mentors',
        content: 'Technology executives and founders provide monthly office hours, reviewing student ventures and capstone commercialization potential.',
      },
    ],
    related: related(base, [
      { label: 'Capstone projects', path: 'projects' },
      { label: 'Industry partnerships', path: 'industry' },
      { label: 'Entrepreneurship events', path: 'hackathons' },
    ]),
  },

  industry: {
    type: 'editorial',
    title: 'Industry Partnerships',
    eyebrow: 'Industry',
    lead: 'Strategic partnerships with technology firms ensure our curriculum, projects, and internships reflect what employers need today.',
    sections: [
      {
        title: 'Partnership activities',
        list: [
          'Guest lectures from engineering leaders',
          'Sponsored capstone challenges',
          'Curriculum advisory input',
          'Recruitment and internship pipelines',
        ],
      },
    ],
    related: related(base, [
      { label: 'Internship partners', path: 'internships' },
      { label: 'Graduate employment', path: 'employment' },
      { label: 'Technology stack', path: 'technology-stack' },
    ]),
  },

  internships: {
    type: 'editorial',
    title: 'Internship Programme',
    eyebrow: 'Industry',
    lead: 'Credited internships from year three place students inside technology companies, research labs, and digital consultancies.',
    sections: [
      {
        title: 'How it works',
        content: 'Students work 10–12 weeks full-time (or part-time equivalent) on supervised industry projects, documented in a professional portfolio.',
        list: ['Career services matching and interview prep', 'Faculty academic supervisor', 'Employer technical mentor', 'Credit toward degree requirements'],
      },
      {
        title: 'Partner sectors',
        list: ['Software & SaaS', 'Financial technology', 'Cybersecurity', 'Cloud infrastructure', 'AI & data analytics'],
      },
    ],
    related: related(base, [
      { label: 'Graduate employment', path: 'employment' },
      { label: 'Student projects', path: 'projects' },
      { label: 'Apply', path: 'admissions' },
    ]),
  },

  'technology-stack': {
    type: 'editorial',
    title: 'Technology Stack',
    eyebrow: 'Tools & Technologies',
    lead: 'Students gain proficiency with the languages, frameworks, and platforms used by leading technology teams worldwide.',
    sections: [
      {
        title: 'Languages & frameworks',
        list: ['Python', 'JavaScript / TypeScript', 'Java', 'C/C++', 'React', 'Node.js', 'Flutter'],
      },
      {
        title: 'Data & AI',
        list: ['TensorFlow / PyTorch', 'scikit-learn', 'Pandas', 'SQL & NoSQL databases', 'Apache Spark'],
      },
      {
        title: 'Cloud & DevOps',
        list: ['AWS / Azure', 'Docker & Kubernetes', 'Git & GitHub Actions', 'Terraform', 'Linux administration'],
      },
      {
        title: 'Security tools',
        list: ['Wireshark', 'Metasploit', 'Burp Suite', 'SIEM platforms', 'OWASP testing frameworks'],
      },
    ],
    related: related(base, [
      { label: 'Learning experience', path: 'learning-experience' },
      { label: 'Certifications', path: 'certifications' },
      { label: 'Curriculum', path: 'curriculum' },
    ]),
  },

  employment: {
    type: 'stats',
    title: 'Graduate Employment',
    eyebrow: 'Outcomes',
    lead: 'Smart Computing graduates enter competitive technology roles across sectors that depend on digital innovation.',
    useCareerOutcomes: true,
    related: related(base, [
      { label: 'Internships', path: 'internships' },
      { label: 'Success stories', path: 'success-stories' },
      { label: 'Admissions', path: 'admissions' },
    ]),
  },

  'success-stories': { type: 'stories' },

  capstone: {
    type: 'editorial',
    title: 'Capstone Projects',
    eyebrow: 'Student Work',
    lead: 'The capstone is a year-four team project solving a real problem for an industry partner or research lab — the centrepiece of your portfolio.',
    sections: [
      {
        title: 'Capstone process',
        list: [
          'Team formation and problem selection (Semester 1, Year 4)',
          'Architecture design and prototype (Semester 1)',
          'Implementation and testing (Semester 2)',
          'Final presentation to industry panel (Semester 2)',
        ],
      },
    ],
    related: related(base, [
      { label: 'Project showcase', path: 'projects' },
      { label: 'Innovation Centre', path: 'innovation-centre' },
      { label: 'Industry partnerships', path: 'industry' },
    ]),
  },

  hackathons: {
    type: 'editorial',
    title: 'Hackathons & Competitions',
    eyebrow: 'Student Life',
    lead: 'Annual hackathons, capture-the-flag security competitions, and international coding contests build teamwork under pressure.',
    sections: [
      {
        title: 'Annual events',
        list: [
          'KDU Global Hackathon (48-hour innovation sprint)',
          'Cybersecurity Capture the Flag',
          'ICPC programming competition training',
          'AI innovation challenge with industry sponsors',
        ],
      },
    ],
    related: related(base, [
      { label: 'Cybersecurity Lab', path: 'research/cybersecurity-lab' },
      { label: 'Student projects', path: 'projects' },
      { label: 'Innovation Centre', path: 'innovation-centre' },
    ]),
  },

  certifications: {
    type: 'editorial',
    title: 'Professional Certifications',
    eyebrow: 'Credentials',
    lead: 'Students are encouraged to pursue industry certifications that complement their degree and strengthen employability.',
    sections: [
      {
        title: 'Supported certifications',
        list: [
          'AWS Cloud Practitioner / Solutions Architect',
          'CompTIA Security+',
          'Google Data Analytics',
          'Microsoft Azure Fundamentals',
          'Cisco CCNA (networking)',
        ],
      },
      {
        title: 'Preparation support',
        content: 'Optional certification prep workshops run each semester. Exam vouchers available for high-achieving students through department scholarships.',
      },
    ],
    related: related(base, [
      { label: 'Cybersecurity pathway', path: 'pathways/cybersecurity' },
      { label: 'Cloud pathway', path: 'pathways/cloud-computing' },
      { label: 'Scholarships', path: 'scholarships' },
    ]),
  },

  scholarships: {
    type: 'editorial',
    title: 'Scholarships',
    eyebrow: 'Financial Support',
    lead: 'Merit-based and need-based scholarships are available for outstanding Smart Computing applicants.',
    sections: [
      {
        title: 'Available awards',
        list: [
          'Computing Excellence Scholarship — up to 50% tuition',
          'Women in Technology Award',
          'International Student Grant',
          'Certification Exam Voucher Award',
        ],
      },
    ],
    related: related(base, [
      { label: 'Admissions', path: 'admissions' },
      { label: 'Programme overview', path: 'programme' },
    ]),
  },

  admissions: {
    type: 'admissions',
    title: 'Admissions',
    eyebrow: 'Apply',
    lead: 'Join a global cohort of future technology leaders. Applications are reviewed on academic merit, motivation, and potential.',
  },

  faq: { type: 'faq' },
};

const WHY_CHOOSE = {
  'smart-computing': [
    { title: 'Fully English-medium instruction', description: 'The entire program is delivered in English, preparing graduates for global technology careers.' },
    { title: 'Five integrated specializations', description: 'Data science, AI and robotics, cybersecurity, IoT, games and VR, and software development within one degree.' },
    { title: 'Hands-on learning', description: 'Broad theoretical knowledge combined with practical experience across emerging digital technologies.' },
    { title: 'Employment and further study', description: 'Pathways to industry roles across the digital economy and to postgraduate study in computing and engineering.' },
  ],
  'artificial-intelligence': [ // 👈 1. Add this new key matching your RAW data object key
    { icon: '🧠', title: 'Neural Architectures', description: 'Ground-up training in deep neural network design and matrix layer processing.' },
    { icon: '⚡', title: 'Supercomputing Power', description: 'Direct access to raw high-performance localized GPU clusters.' },
    { icon: '🛡️', title: 'AI Alignment & Safety', description: 'Focused specialization in mathematical verification and systems guardrails.' },
    { icon: '🤖', title: 'Cognitive Robotics', description: 'Program spatial mapping and real-time sensory tracking on physical rover chassis.' },
    { icon: '💬', title: 'LLM & NLP Engineering', description: 'Master tokenization matrices, context scaling, and conversational transformer mechanics.' },
  ],
  'international-business-administration': [
    { title: 'Fully English-medium instruction', description: 'The entire program is delivered in English for global business readiness.' },
    { title: 'Integrated specializations', description: 'Management, finance, marketing, analytics, and globalization within one harmonized degree.' },
    { title: 'Entrepreneurship and international operations', description: 'Practical focus on global entrepreneurship and international business operations.' },
    { title: 'Commitment to student success', description: 'Direct pathways to employment across a wide range of business functions after graduation.' },
  ],
  'international-hotel-management': [
  { icon: '🏨', title: 'Global Operations Mastery', description: 'Operational mastery inside live mock luxury suites and commercial property management terminals.' },
  { icon: '📊', title: 'Dynamic Revenue Algorithms', description: 'Master quantitative revenue management to calculate and optimize hotel room inventory yields.' },
  { icon: '🍳', title: 'Culinary Engineering Labs', description: 'Hands-on practical execution inside state-of-the-art kitchens following international HACCP safety guidelines.' },
  { icon: '🍷', title: 'Enology & Sommelier Science', description: 'Deconstruct terroir properties, beverage storage systems, and premium menu pairing structures.' },
  { icon: '💎', title: 'Elite Corporate Pipeline', description: 'Direct career pathways and built-in residencies with world-class international luxury resort groups.' }
],
  'english-for-academic-purposes': [
    { title: 'University-level English mastery', description: 'Rigorous training in academic reading, writing, research, and critical analysis for degree-level study.' },
    { title: 'Direct pathway to degree programs', description: 'Structured progression into Kyungdong University undergraduate programs with dedicated academic advising.' },
    { title: 'Communication for professional success', description: 'Seminar skills, presentations, and academic discourse prepare students for global classrooms and workplaces.' },
    { title: 'Supportive international community', description: 'Small-group instruction within a multicultural campus designed for students from diverse linguistic backgrounds.' },
  ],
  'korean-for-academic-purposes': [
    { icon: '📚', title: 'Targeted Academic Competence', description: 'Moves past casual daily conversations directly into professional level research and essay architectures.' },
    { icon: '🎯', title: 'TOPIK Certification Mastery', description: 'Systematic tactical prep courses configured to secure structural TOPIK Tier 4+ validations rapidly.' },
    { icon: '🎓', title: 'Direct Matriculation Pipeline', description: 'Establishes a completely fluid structural bridge into full-time KDU undergraduate majors.' },
    { icon: '🗺️', title: 'Cultural Literacy Mentoring', description: 'Immersive deep dives into Korean academic hierarchy norms, etiquette, and seminar structures.' }
  ],
};

const CAREER_OUTCOMES = {
  'smart-computing': {
    lead: 'Graduates apply computing knowledge across high-tech, healthcare, education, manufacturing, and entertainment—and are well prepared for further study in specialized computing and engineering fields.',
    stats: [
      { value: '100%', label: 'English-medium instruction' },
      { value: '5', label: 'Integrated technology specializations' },
      { value: '10+', label: 'Career pathways from graduation' },
    ],
    destinations: ['AI Engineering', 'Data Science', 'Cybersecurity', 'IoT Development', 'Software Development', 'Games and VR'],
    internships: 'Hands-on project work and vocational courses build practical experience across emerging digital technologies throughout the program.',
    demand: 'Global demand continues to grow for graduates skilled in AI, cybersecurity, IoT, software development, and immersive technologies.',
  },
  'international-business-administration': {
    lead: 'IBA graduates are prepared to turn business challenges into opportunities, address entrepreneurship professionally, and perform in strategic business units immediately after graduation.',
    stats: [
      { value: '100%', label: 'English-medium instruction' },
      { value: '6', label: 'Major curriculum components' },
      { value: '11+', label: 'Strategic business career areas' },
    ],
    destinations: ['Accounting and Finance', 'Marketing', 'Data Analytics', 'Logistics', 'HR and PR', 'Public Services'],
    internships: 'Career training workshops, startup seminars, and vocational courses connect classroom learning to professional business practice.',
    demand: 'Employers seek graduates who combine business acumen with cross-cultural fluency and practical skills across finance, marketing, and management.',
  },
  'english-for-academic-purposes': {
    lead: 'EAP graduates progress confidently into degree programs and professional environments where advanced English proficiency is essential.',
    stats: [
      { value: '96%', label: 'Progress to degree study' },
      { value: '100%', label: 'Receive academic advising support' },
      { value: '40+', label: 'Nationalities represented' },
    ],
    destinations: ['Undergraduate Degree Pathways', 'Graduate Preparation', 'Professional Communication', 'Academic Research', 'International Study'],
    internships: 'Language immersion activities, academic mentoring, and campus integration programs support transition into full degree study.',
    demand: 'Universities worldwide require demonstrated academic English proficiency—EAP provides a rigorous, supported pathway to meet that standard.',
  },
};

const DEGREES = {
  'smart-computing': 'Bachelor of Science',
  'artificial-intelligence': 'Bachelor of Science',
  'international-hotel-management': 'Bachelor of Science',
  'international-business-administration': 'Bachelor of Business Administration',
  'english-for-academic-purposes': 'Certificate / Pathway Program',
  'korean-for-academic-purposes': 'Certificate / Pathway Program',
};

const GENERIC_CAREER_OUTCOMES = {
  lead: 'Our graduates are prepared for competitive roles in their field with practical skills, industry exposure, and global career support.',
  stats: [
    { value: '90%+', label: 'Positive graduate outcomes' },
    { value: '100%', label: 'Academic advising support' },
    { value: '20+', label: 'Industry and campus partners' },
  ],
  destinations: ['Graduate employment', 'Further study', 'Professional practice', 'International opportunities'],
  internships: 'Students benefit from internships, practicum placements, and industry projects aligned with programme learning outcomes.',
  demand: 'Employers value graduates who combine disciplinary expertise with communication, teamwork, and global awareness.',
};

const GENERIC_FAQS = [
  { question: 'How do I apply?', answer: 'Applications open annually. Visit the admissions page for deadlines, required documents, and English language requirements.' },
  { question: 'Are scholarships available?', answer: 'Merit-based and need-based scholarships may be available. Early applicants receive priority consideration.' },
  { question: 'What support is available for international students?', answer: 'KDU Global provides academic advising, orientation, and student services for international students throughout the programme.' },
];

const CURRICULUM_SUMMARIES = {
  'smart-computing': [
    { year: 1, title: 'Games and Virtual Reality', summary: 'Programming, graphics, game development, animation, and virtual and augmented reality foundations.' },
    { year: 2, title: 'Data Science, AI and Robotics', summary: 'Databases, data mining, artificial intelligence, deep learning, robotics, and autonomous systems.' },
    { year: 3, title: 'Cybersecurity and Privacy', summary: 'Information security, cryptography, digital forensics, blockchain, and ethical hacking.' },
    { year: 4, title: 'IoT, Software Development, and Liberal Arts', summary: 'Cloud, networking, embedded systems, web and mobile development, plus statistics, Korean culture, and career training.' },
  ],
  'international-business-administration': [
    { year: 1, title: 'Management and Entrepreneurship', summary: 'Business principles, HR, organizational behavior, innovation, entrepreneurship, and project management.' },
    { year: 2, title: 'Accounting and Finance', summary: 'Accounting, finance, economics, and financial management foundations.' },
    { year: 3, title: 'Marketing and Analytics', summary: 'Marketing strategy, consumer behavior, digital marketing, and business information systems.' },
    { year: 4, title: 'Globalization and Liberal Arts', summary: 'International trade, global strategy, supply chain management, multicultural studies, and career development.' },
  ],
  'english-for-academic-purposes': [
    { year: 1, title: 'Academic Foundations', summary: 'Core academic reading, writing, grammar, and seminar participation skills.' },
    { year: 2, title: 'Advanced Proficiency', summary: 'Research writing, critical analysis, and discipline-specific academic communication.' },
  ],
};

function toProfileSlug(name) {
  return name
    .toLowerCase()
    .replace(/prof\.?\s*dr\.?\s*/gi, '')
    .replace(/dr\.?\s*/gi, '')
    .replace(/mr\.?\s*|ms\.?\s*/gi, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z-]/g, '');
}

function enrichCurriculum(curriculum) {
  return curriculum.map((year) => ({
    ...year,
    semesters: year.semesters.map((sem) => ({
      ...sem,
      majorCourses: (sem.majorCourses || []).map((c) => ({ ...c, category: c.category || 'Major' })),
      electives: (sem.electives || []).map((c) => ({ ...c, category: c.category || 'Elective' })),
    })),
  }));
}

const DEFAULT_FAQS = {
  'smart-computing': [
    { question: 'Do I need prior programming experience?', answer: 'No prior experience is required, but familiarity with mathematics and logical reasoning is beneficial. Foundation courses support beginners.' },
    { question: 'Which pathway should I choose?', answer: 'Pathways are selected from year three. Advisors help match your interests in software, AI, security, data, or cloud to elective clusters.' },
    { question: 'Are internships guaranteed?', answer: 'Internships are competitively placed with strong support from career services. Most students complete a placement in year three or four.' },
    { question: 'What English level is required?', answer: 'IELTS 6.0 or equivalent. EAP pathway available for students who need academic English preparation first.' },
  ],
  'international-business-administration': [
    { question: 'Is exchange mandatory?', answer: 'Exchange is strongly encouraged but not mandatory. Most students participate in year three at a partner university.' },
    { question: 'Can I specialize in finance and marketing?', answer: 'Electives allow depth in multiple areas. Your advisor helps structure a coherent specialization plan.' },
    { question: 'What career support is available?', answer: 'Career services, corporate mentoring, consulting projects, and recruitment events connect students with global employers.' },
    { question: 'Are scholarships available?', answer: 'Merit-based scholarships up to 50% tuition are available. Early applicants receive priority consideration.' },
  ],
  'english-for-academic-purposes': [
    { question: 'What level will I start at?', answer: 'All students complete a placement assessment upon arrival. Your starting level is based on demonstrated proficiency.' },
    { question: 'How long does EAP take?', answer: 'Duration depends on your entry level and progression. Most students complete in 1–2 years before entering a degree programme.' },
    { question: 'Can I go directly to Smart Computing or IBA?', answer: 'Yes, upon meeting completion requirements and exit assessment standards, students transition to undergraduate programmes.' },
    { question: 'Is IELTS required before applying?', answer: 'No. EAP accepts students at all levels. Internal assessment determines placement.' },
  ],
};

const SEMESTER_EXPERIENCE = {
  'smart-computing': [
    { semester: 'Year 1, Sem 1', skills: ['Programming fundamentals', 'Computational thinking'], tools: ['Python', 'Git'], project: 'Personal portfolio website', assessment: 'Projects + exams' },
    { semester: 'Year 1, Sem 2', skills: ['Object-oriented design', 'Data structures'], tools: ['Java', 'JUnit'], project: 'Library management system', assessment: 'Code review + exam' },
    { semester: 'Year 2, Sem 1', skills: ['Database design', 'SQL querying'], tools: ['PostgreSQL', 'Docker'], project: 'Data-backed web app', assessment: 'Team project' },
    { semester: 'Year 2, Sem 2', skills: ['Networking', 'Systems thinking'], tools: ['Linux', 'Wireshark'], project: 'Network lab configuration', assessment: 'Lab + report' },
    { semester: 'Year 3, Sem 1', skills: ['ML fundamentals', 'Model evaluation'], tools: ['TensorFlow', 'scikit-learn'], project: 'Classification challenge', assessment: 'Portfolio' },
    { semester: 'Year 3, Sem 2', skills: ['Security principles', 'Threat modelling'], tools: ['Kali Linux', 'Burp Suite'], project: 'Vulnerability assessment', assessment: 'CTF + report' },
    { semester: 'Year 4, Sem 1', skills: ['Capstone planning', 'Architecture'], tools: ['Cloud platform', 'CI/CD'], project: 'Capstone prototype', assessment: 'Milestone review' },
    { semester: 'Year 4, Sem 2', skills: ['Delivery', 'Professional communication'], tools: ['Industry stack'], project: 'Capstone deployment', assessment: 'Industry panel' },
  ],
  'international-business-administration': [
    { semester: 'Year 1, Sem 1', skills: ['Business literacy', 'Economic reasoning'], tools: ['Case analysis'], project: 'Industry landscape report', assessment: 'Case memo + presentation' },
    { semester: 'Year 1, Sem 2', skills: ['Accounting', 'Financial statements'], tools: ['Excel modelling'], project: 'Company financial analysis', assessment: 'Report + exam' },
    { semester: 'Year 2, Sem 1', skills: ['Marketing strategy', 'Consumer insight'], tools: ['Market research tools'], project: 'Brand audit', assessment: 'Group presentation' },
    { semester: 'Year 2, Sem 2', skills: ['Organizational behaviour', 'Team leadership'], tools: ['Simulation platforms'], project: 'Team dynamics case', assessment: 'Simulation + reflection' },
    { semester: 'Year 3, Sem 1', skills: ['Global strategy', 'Trade analysis'], tools: ['Trade databases'], project: 'Market entry proposal', assessment: 'Consulting brief' },
    { semester: 'Year 3, Sem 2', skills: ['International finance', 'Risk assessment'], tools: ['Financial modelling'], project: 'Investment recommendation', assessment: 'Board presentation' },
    { semester: 'Year 4, Sem 1', skills: ['Consulting delivery', 'Client communication'], tools: ['Live client project'], project: 'Corporate consulting engagement', assessment: 'Client evaluation' },
    { semester: 'Year 4, Sem 2', skills: ['Integration', 'Career readiness'], tools: ['Internship portfolio'], project: 'Capstone business plan', assessment: 'Final defence' },
  ],
  'english-for-academic-purposes': [
    { semester: 'Foundation', skills: ['Core grammar', 'Study skills'], tools: ['Digital workbook'], project: 'Learning journal', assessment: 'Portfolio' },
    { semester: 'Intermediate', skills: ['Paragraph writing', 'Reading strategies'], tools: ['Referencing guide'], project: 'Summary essay', assessment: 'Essay + test' },
    { semester: 'Upper Intermediate', skills: ['Seminar skills', 'Argumentation'], tools: ['Presentation tools'], project: 'Group seminar', assessment: 'Presentation + writing' },
    { semester: 'Advanced', skills: ['Research writing', 'Critical analysis'], tools: ['Database access'], project: 'Research paper', assessment: 'Exit portfolio' },
  ],
};

function enrichFaculty(faculty, departmentSlug) {
  return faculty.map((f) => ({
    ...f,
    departmentSlug,
    profileSlug: f.profileSlug || toProfileSlug(f.name),
    education: f.education || ['Ph.D., Leading International University'],
    publications: f.publications || ['Peer-reviewed journal articles in top-tier venues'],
    coursesTaught: f.coursesTaught || ['Advanced program coursework'],
    officeHours: f.officeHours || 'By appointment',
    languages: f.languages || ['English'],
    teachingPhilosophy: f.teachingPhilosophy || 'I believe in connecting rigorous academic theory with practical application, preparing students to excel in global professional environments.',
    professionalExperience: f.professionalExperience || [],
    awards: f.awards || [],
    currentProjects: f.currentProjects || [],
  }));
}

function enrichTestimonials(testimonials) {
  return (testimonials || []).map((t) => ({
    ...t,
    country: t.country || 'International',
    employer: t.employer || (t.role?.includes(' at ') ? t.role.split(' at ')[1] : t.role),
    position: t.position || t.role,
    companyLogo: t.companyLogo || null,
  }));
}

function enrichResearch(researchAreas) {
  return (researchAreas || []).map((area) => ({
    projects: area.projects || ['Ongoing faculty-led research initiatives'],
    publications: area.publications || ['Recent journal and conference publications'],
    impact: area.impact || 'Contributing to knowledge transfer between academia and industry.',
    ...area,
  }));
}

function buildCurriculumHighlights(dept, slug) {
  if (dept.curriculumHighlights?.length) return dept.curriculumHighlights;
  const preset = CURRICULUM_SUMMARIES[slug];
  if (preset) return preset;
  return (dept.curriculum || []).map((y) => ({
    year: y.year,
    title: `Year ${y.year}`,
    summary: y.semesters?.[0]?.majorCourses?.slice(0, 2).map((c) => c.name).join(', ') || 'Structured academic progression.',
  }));
}

export function enrichDepartment(dept, slug) {
  const title = dept.title;
  const degree = dept.degree || DEGREES[slug] || 'Bachelor\'s Degree';
  const quickFacts = {
    Degree: degree,
    Duration: dept.duration || '4 Years',
    Language: dept.language || 'English',
    Campus: 'KDU Global Campus',
    Intake: dept.intake || 'Fall (September)',
    ...dept.quickFacts,
  };

  return {
    ...dept,
    slug,
    degree,
    path: `/academics/undergraduate/${slug}`,
    quickFacts,
    whyChoose: (dept.whyChoose || WHY_CHOOSE[slug] || [])
      .slice(0, 4)
      .map(({ title, description }) => ({ title, description })),
    careerOutcomes: {
      ...GENERIC_CAREER_OUTCOMES,
      ...CAREER_OUTCOMES[slug],
      ...dept.careerOutcomes,
    },
    curriculumHighlights: buildCurriculumHighlights(dept, slug),
    breadcrumbs: [
      { label: 'Home', path: '/' },
      { label: 'Academics', path: '/academics' },
      { label: 'Undergraduate', path: '/academics#undergraduate' },
      { label: title },
    ],
    overview: {
      ...dept.overview,
      graduateAttributes: dept.overview?.graduateAttributes || [
        'Critical thinking and analytical reasoning',
        'Effective communication in professional contexts',
        'Ethical leadership and social responsibility',
        'Cultural intelligence and global awareness',
      ],
      careerReadiness: dept.overview?.careerReadiness || 'Our program integrates internships, industry projects, and career coaching to ensure graduates are job-ready from day one.',
      objectives: dept.overview?.objectives || dept.overview?.pathways || [],
    },
    admissions: {
      scholarships: dept.admissions?.scholarships || [
        'Merit-based scholarships up to 50% tuition',
        'International student grants',
        'Early application priority consideration',
      ],
      ...dept.admissions,
    },
    curriculum: enrichCurriculum(dept.curriculum || []),
    semesterExperience: dept.semesterExperience || SEMESTER_EXPERIENCE[slug] || [],
    faculty: enrichFaculty(dept.faculty || [], slug),
    researchAreas: enrichResearch(dept.researchAreas),
    testimonials: enrichTestimonials(dept.testimonials),
    faqs: dept.faqs || DEFAULT_FAQS[slug] || GENERIC_FAQS,
  };
}

export { toProfileSlug };
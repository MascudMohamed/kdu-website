const WHY_CHOOSE = {
  'smart-computing': [
    { title: 'Industry-aligned computing education', description: 'A curriculum shaped with technology leaders to reflect how modern software, data, and security teams operate globally.' },
    { title: 'Research-led teaching', description: 'Students learn from faculty actively publishing in artificial intelligence, cybersecurity, and distributed systems.' },
    { title: 'Global graduate outcomes', description: 'Graduates pursue roles in software engineering, data science, cloud architecture, and technology consulting worldwide.' },
    { title: 'Professional practice from year one', description: 'Project studios, hackathons, and internship pathways build portfolio-ready experience before graduation.' },
  ],
  'international-business-administration': [
    { title: 'Global business perspective', description: 'Case-based learning grounded in international trade, finance, and cross-border management across diverse markets.' },
    { title: 'Leadership for multicultural teams', description: 'Develop negotiation, communication, and strategic decision-making skills for international organizations.' },
    { title: 'Industry-connected learning', description: 'Live consulting projects and executive mentorship connect classroom theory to real corporate challenges.' },
    { title: 'Pathways to global careers', description: 'Graduates enter consulting, finance, marketing, entrepreneurship, and trade roles with multinational employers.' },
  ],
  'english-for-academic-purposes': [
    { title: 'University-level English mastery', description: 'Rigorous training in academic reading, writing, research, and critical analysis for degree-level study.' },
    { title: 'Direct pathway to degree programs', description: 'Structured progression into Kyungdong University undergraduate programs with dedicated academic advising.' },
    { title: 'Communication for professional success', description: 'Seminar skills, presentations, and academic discourse prepare students for global classrooms and workplaces.' },
    { title: 'Supportive international community', description: 'Small-group instruction within a multicultural campus designed for students from diverse linguistic backgrounds.' },
  ],
};

const CAREER_OUTCOMES = {
  'smart-computing': {
    lead: 'Our graduates are equipped for high-demand technology roles across industries that depend on secure, intelligent, and scalable digital systems.',
    stats: [
      { value: '94%', label: 'Graduate employment within six months' },
      { value: '85%', label: 'Complete an industry internship' },
      { value: '30+', label: 'Technology employer partners' },
    ],
    destinations: ['Software Engineering', 'Data Science', 'Cybersecurity', 'Cloud Architecture', 'AI & Machine Learning', 'Technology Consulting'],
    internships: 'Students undertake credited internships with technology firms, research labs, and digital innovation teams from year three.',
    demand: 'Global demand for computing graduates continues to outpace supply, with particularly strong growth in AI, cybersecurity, and cloud infrastructure.',
  },
  'international-business-administration': {
    lead: 'IBA graduates enter competitive global markets with the analytical tools, cultural intelligence, and professional networks required to lead internationally.',
    stats: [
      { value: '91%', label: 'Graduate employment within six months' },
      { value: '78%', label: 'International internship placement' },
      { value: '25+', label: 'Corporate and trade partners' },
    ],
    destinations: ['Management Consulting', 'Global Marketing', 'International Finance', 'Trade & Logistics', 'Entrepreneurship', 'Corporate Strategy'],
    internships: 'Students complete consulting projects and corporate internships with multinational firms across Asia-Pacific, Europe, and the Americas.',
    demand: 'Employers seek graduates who combine business acumen with cross-cultural fluency—a core strength of the IBA program.',
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
  'international-business-administration': 'Bachelor of Business Administration',
  'english-for-academic-purposes': 'Certificate / Pathway Program',
};

const CURRICULUM_SUMMARIES = {
  'smart-computing': [
    { year: 1, title: 'Foundations of Computing', summary: 'Programming, mathematics, and computing fundamentals establish core technical literacy.' },
    { year: 2, title: 'Systems & Data', summary: 'Databases, networks, and software engineering principles deepen applied technical skill.' },
    { year: 3, title: 'Specialization', summary: 'Advanced study in AI, cybersecurity, cloud computing, and industry project work.' },
    { year: 4, title: 'Capstone & Career', summary: 'Research projects, internships, and capstone development prepare graduates for industry.' },
  ],
  'international-business-administration': [
    { year: 1, title: 'Business Foundations', summary: 'Economics, accounting, and introductory management build analytical business literacy.' },
    { year: 2, title: 'Functional Core', summary: 'Marketing, finance, and organizational behavior develop professional business competency.' },
    { year: 3, title: 'International Focus', summary: 'Global strategy, trade, and cross-cultural management anchor the international curriculum.' },
    { year: 4, title: 'Integration & Practice', summary: 'Capstone consulting, electives, and internship experience consolidate professional readiness.' },
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
    whyChoose: (dept.whyChoose || WHY_CHOOSE[slug] || []).slice(0, 4),
    careerOutcomes: { ...CAREER_OUTCOMES[slug], ...dept.careerOutcomes },
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
    faqs: dept.faqs || DEFAULT_FAQS[slug] || [],
  };
}

export { toProfileSlug };

const WHY_CHOOSE = {
  'smart-computing': [
    { icon: '🤖', title: 'Artificial Intelligence', description: 'Cutting-edge AI and machine learning integrated across the curriculum.' },
    { icon: '🔒', title: 'Cybersecurity', description: 'Hands-on training in protecting digital infrastructure and data.' },
    { icon: '☁️', title: 'Cloud Computing', description: 'Modern cloud architectures, DevOps, and scalable system design.' },
    { icon: '🤝', title: 'Industry Partnerships', description: 'Collaborations with global technology firms for internships and projects.' },
    { icon: '🔬', title: 'Hands-on Laboratories', description: 'State-of-the-art computing labs with industry-standard tools.' },
    { icon: '🌍', title: 'Global Career Opportunities', description: 'Graduates employed by leading companies worldwide.' },
  ],
  'international-business-administration': [
    { icon: '🌐', title: 'Global Business Perspective', description: 'Curriculum rooted in international trade and cross-border commerce.' },
    { icon: '👔', title: 'Leadership Skills', description: 'Develop the competencies to lead diverse, multicultural teams.' },
    { icon: '📦', title: 'International Trade', description: 'Deep understanding of global supply chains and trade policy.' },
    { icon: '💡', title: 'Entrepreneurship', description: 'Incubator support and startup mentorship for aspiring founders.' },
    { icon: '🤝', title: 'Industry Collaboration', description: 'Live consulting projects with multinational corporations.' },
  ],
  'english-for-academic-purposes': [
    { icon: '📚', title: 'Academic English Excellence', description: 'Rigorous training in university-level reading, writing, and research.' },
    { icon: '🗣️', title: 'Communication Skills', description: 'Presentation, seminar, and professional communication development.' },
    { icon: '🎓', title: 'Preparation for Degree Studies', description: 'Direct pathway into Kyungdong University degree programs.' },
    { icon: '🌏', title: 'Global Learning Environment', description: 'Multicultural classrooms with students from around the world.' },
  ],
};

const DEFAULT_FAQS = [
  { category: 'Admissions', question: 'When can I apply?', answer: 'Applications open annually in October with a final deadline of May 30 for the Fall intake.' },
  { category: 'Program Duration', question: 'How long is the program?', answer: 'Most undergraduate programs are four years full-time. EAP pathway duration varies by placement level.' },
  { category: 'Language', question: 'What English level is required?', answer: 'IELTS 6.0 or equivalent is required for degree programs. EAP accepts students at all proficiency levels.' },
  { category: 'Careers', question: 'What career support is available?', answer: 'Career services include internship placement, resume workshops, and connections with global employers.' },
  { category: 'Scholarships', question: 'Are scholarships available?', answer: 'Merit-based scholarships covering up to 50% of tuition are available for outstanding applicants.' },
];

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

function enrichFaculty(faculty) {
  return faculty.map((f) => ({
    ...f,
    profileSlug: f.profileSlug || toProfileSlug(f.name),
    education: f.education || ['Ph.D., Leading International University'],
    publications: f.publications || ['Peer-reviewed journal articles in top-tier venues'],
    coursesTaught: f.coursesTaught || ['Advanced program coursework'],
    officeHours: f.officeHours || 'By appointment',
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
    ...area,
  }));
}

export function enrichDepartment(dept, slug) {
  const title = dept.title;
  const quickFacts = dept.quickFacts || {
    'Degree Awarded': dept.degree || 'Bachelor\'s Degree',
    Duration: dept.duration || '4 Years',
    Language: dept.language || 'English',
    Campus: 'KDU Global Campus',
    'Delivery Mode': 'On-Campus',
  };

  return {
    ...dept,
    slug,
    path: `/academics/undergraduate/${slug}`,
    quickFacts,
    whyChoose: dept.whyChoose || WHY_CHOOSE[slug] || [],
    breadcrumbs: [
      { label: 'Home', path: '/' },
      { label: 'Academics', path: '/academics' },
      { label: 'Undergraduate', path: '/academics#undergraduate' },
      { label: title },
    ],
    chair: {
      vision: 'To be a globally recognized center of excellence in education and research.',
      ...dept.chair,
    },
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
    faculty: enrichFaculty(dept.faculty || []),
    researchAreas: enrichResearch(dept.researchAreas),
    testimonials: enrichTestimonials(dept.testimonials),
    faqs: dept.faqs || DEFAULT_FAQS,
  };
}

export { toProfileSlug };

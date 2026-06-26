/**
 * Department Configuration: Korean for Academic Purposes (KAP)
 * Location: src/data/departments/kap.js
 */

const kapData = {
  title: "Korean for Academic Purposes (KAP)",
  degree: "Language Pathway Program",
  duration: "1 - 2 Years (Variable)",
  language: "Korean",
  chair: {
    name: "Prof. Sun-Young Kim",
    title: "Program Director, KAP",
    message: "Welcome to the Korean for Academic Purposes program. Our mission is to empower international students with the precise linguistic, analytical, and cultural competence required to thrive in undergraduate and graduate settings at Korean universities.",
    avatar: "/assets/images/faculty/kim-sunyoung.jpg",
    vision: "To bridge linguistic gaps and foster elite global scholars fluent in professional and academic Korean.",
  },
  overview: {
    description: "The KAP program is an intensive, immersive pathway designed specifically for international students, scholars, and professionals. Unlike conversational language tracks, KAP concentrates heavily on advanced reading comprehension, research methodology, academic essay composition, and presentation formats required across university majors.",
    graduateAttributes: [
      "Proficiency at TOPIK Level 4, 5, or 6",
      "Advanced academic text syntax reconstruction",
      "Formal debate and semantic argumentation capabilities",
      "Fluency in academic research ethics and documentation style guides"
    ],
    careerReadiness: "Graduates are directly fast-tracked into English-KDU or Korean-taught bachelor degree choices, critical graduate school placements, or language localization job roles.",
  },
  admissions: {
    requirements: [
      "High School Diploma or equivalent standard global credentials",
      "Basic interest or baseline foundation in Korean characters (Hangul) preferred but not mandatory",
      "Copy of valid passport for student visa processing support"
    ],
    scholarships: [
      "Outstanding TOPIK entry award grants",
      "KDU Global language immersion funding access",
      "Sister-institution student discount provisions"
    ]
  },
  curriculum: [
    {
      year: "Year 1: Academic Foundation & Intermediate Flux",
      semesters: [
        {
          semester: "Semester 1 (Level 1-2 Focus)",
          majorCourses: [
            { code: "KAP101", title: "Basic Academic Korean Reading & Syntax", credits: 3 },
            { code: "KAP102", title: "Introduction to Academic Writing Structures", credits: 3 },
            { code: "KAP103", title: "Phonetics & Professional Classroom Listening", credits: 2 }
          ],
          electives: [
            { code: "KAP104X", title: "Korean Society & Modern Campus Norms", credits: 2 }
          ]
        },
        {
          semester: "Semester 2 (Level 3-4 Focus)",
          majorCourses: [
            { code: "KAP201", title: "Intermediate Discourse Text Analysis", credits: 3 },
            { code: "KAP202", title: "Paragraph to Essay Composition Metrics", credits: 3 },
            { code: "KAP203", title: "Formal Media Presentation Skills", credits: 2 }
          ],
          electives: [
            { code: "KAP204X", title: "TOPIK II Intermediate Examination Drilling", credits: 2 }
          ]
        }
      ]
    },
    {
      year: "Year 2: Advanced Analytical Research & Mastery Track",
      semesters: [
        {
          semester: "Semester 1 (Level 5-6 Mastery)",
          majorCourses: [
            { code: "KAP301", title: "Advanced Interdisciplinary Reading Seminar", credits: 3 },
            { code: "KAP302", title: "Thesis Research Methodology Frameworks", credits: 3 },
            { code: "KAP303", title: "Formal Academic Argumentation & Debate", credits: 2 }
          ],
          electives: [
            { code: "KAP304X", title: "High-Tier TOPIK Strategy Analytics", credits: 2 }
          ]
        }
      ]
    }
  ],
  faculty: [
    {
      name: "Prof. Sun-Young Kim",
      role: "Professor / Program Director",
      specialty: "Applied Linguistics, Korean Language Pedagogy",
      email: "sykim@kdu.ac.kr",
      education: ["Ph.D. in Applied Linguistics, Seoul National University"],
      publications: ["A Study on Academic Writing Error Patterns for Global Undergraduates (2024)"],
      coursesTaught: ["Thesis Research Methodology", "Advanced Interdisciplinary Reading"]
    },
    {
      name: "Dr. Min-Ho Park",
      role: "Associate Professor",
      specialty: "Academic Assessment, Korean Evaluation Standard Metrics",
      email: "mhpark@kdu.ac.kr",
      education: ["Ph.D. in Korean Language Education, Yonsei University"],
      publications: ["Constructive Validity Factors in TOPIK Expression Assays (2025)"],
      coursesTaught: ["Paragraph to Essay Composition", "TOPIK II Examination Drilling"]
    }
  ],
  researchAreas: [
    {
      title: "Linguistic Integration Bottlenecks",
      description: "Analyzing phonological and semantic adaptation speed spikes among multi-national students transitioning into mainstream Korean engineering and business programs.",
      projects: ["Cross-border cognitive grammar mapping data pools"],
      publications: ["Recent Korean Immersion Efficiency Indexes"]
    }
  ],
  testimonials: [
    {
      quote: "KAP took me from barely being able to read signage to confidently defending my business project slides in front of my senior professors without hesitation.",
      author: "Elena Petrova",
      role: "Senior Student at KDU International Business",
      country: "Kazakhstan",
      employer: "KDU",
      position: "Student Liaison",
      companyLogo: null
    }
  ],
  faqs: [
    { 
      category: "TOPIK", 
      question: "Can I bypass the first semester if I have a baseline score?", 
      answer: "Yes. An internal language placement interview allows qualified students to jump straight into Advanced Level 3 classes immediately." 
    }
  ]
};

export default kapData;
const IMG = {
  aiBanner: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80',
  robotics: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80',
  brainNetwork: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=1200&q=80',
  gpuCluster: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=1200&q=80',
  portrait: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
  student: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&q=80',
  event: 'https://images.unsplash.com/photo-1591115765373-5209768a7f41?w=800&q=80',
  research: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
};

export default {
  slug: 'bachelor-of-artificial-intelligence',
  title: 'Bachelor of Artificial Intelligence',
  shortTitle: 'Artificial Intelligence',
  description:
    'An elite, specialized degree focusing on computational intelligence, neural networks, automation, and advanced mathematical modeling to engineer the next frontier of smart systems.',
  bannerImage: IMG.aiBanner,
  cardImage: IMG.aiBanner,
  cardDescription:
    'Pioneer the next evolutionary leap in computing — master natural language processing, deep neural networks, cognitive robotics, and autonomous agent systems.',

  breadcrumbs: [
    { label: 'Home', path: '/' },
    { label: 'Academics', path: '/academics' },
    { label: 'Bachelor of Artificial Intelligence' },
  ],

  chair: {
    title: 'the Department Chair',
    name: 'Prof. Dr. Elena Rostova',
    position: 'Chair, Department of Artificial Intelligence',
    photo: IMG.portrait,
    message: [
      'Welcome to the Department of Artificial Intelligence at KDU Global. We are living through an unprecedented epoch where intelligence itself is being redefined, shifting from human brains to synthetic architectures.',
      'Our dedicated program is not simply an extension of regular computer science; it is a ground-up paradigm shift. We delve directly into cognitive architectures, evolutionary systems, and statistical learning matrices to address the profound computational problems facing our global community.',
      'If you are motivated by the challenge of teaching machines how to perceive, reason, map contexts, and decide autonomously, our labs are waiting for your vision.',
    ],
    mission:
      'To discover mathematical and computational breakthroughs in machine intelligence while training world-class engineers to architect ethical, transformative synthetic systems.',
    objectives: [
      'Deliver an advanced mathematical and computational curriculum focused entirely on neural structures',
      'Incubate high-impact research in computer vision, generative intelligence, and sensory robotics',
      'Provide students with high-performance supercomputing infrastructure and raw tensor-cluster access',
      'Establish ethical protocols and alignment frameworks within all levels of automated system engineering',
    ],
  },

  overview: {
    philosophy:
      'Artificial intelligence cannot be mastered purely from textbooks. Our students operate inside experimental matrix labs, writing complex tokenizers, custom optimization scripts, and sensory drivers. We fuse deep linear mathematical abstractions directly with hardware execution.',
    outcomes: [
      'Synthesize, optimize, and deploy multi-layer deep neural network models from scratch',
      'Architect robust Natural Language Processing transformers and generation loops',
      'Program sensory-feedback tracking algorithms for cognitive automation and robotics',
      'Optimize edge-computing models for real-time low-latency decision processing frameworks',
      'Formulate mathematical alignment matrices to guarantee system compliance and ethical safety',
      'Evaluate hardware execution workloads across standard distributed CPU/GPU architectures',
    ],
    pathways: [
      'Deep Learning & Neural Architectures',
      'Natural Language Processing & LLM Mechanics',
      'Computer Vision & Cognitive Graphics',
      'Autonomous Agents & Robotics Engineering',
      'AI Safety, Ethics, & Alignment Policy',
      'Advanced Theoretical Research (PhD Track)',
    ],
  },

  admissions: {
    eligibility: [
      'High school diploma with exceptional grades in Advanced Calculus or Statistics',
      'Minimum GPA of 2.75 on a 4.0 scale (highly competitive tracking)',
      'Algorithmic foundations demonstrated via a basic prerequisite coding challenge',
      'Transfer students subject to comprehensive mathematical matrix review',
    ],
    language: [
      'IELTS 6.5 or TOEFL iBT 85 (standard minimum for advanced technical discourse)',
      'Academic technical communication review mandatory during onboarding week',
      'Proficiency in logical symbolic syntax preferred over spoken multilingual skills',
    ],
    documents: [
      'Completed online admissions application',
      'Official secondary school math and engineering transcripts',
      'Copy of passport biographical identity view',
      'Technical personal statement focusing on automated systems or philosophy (750 words)',
      'Two letters of recommendation from mathematical or scientific supervisors',
      'GitHub repository profile or verified computing project matrix archive (mandatory)',
    ],
    tuition: {
      amount: '$4,200 per semester',
      note: 'Supercomputing matrix access fee included. Specialized AI Lab research fellowships available for top-tier analytical applications.',
    },
    timeline: [
      { date: 'September 15', event: 'Application tracking pipeline opens' },
      { date: 'January 10', event: 'Early merit scholarship priority review' },
      { date: 'May 1', event: 'Final programmatic application lock' },
      { date: 'August 10', event: 'Matrix Cluster onboarding and code sync' },
    ],
  },

  curriculum: [
    {
      year: 1,
      semesters: [
        {
          name: 'Semester 1 — Structural Logic',
          majorCourses: [
            { code: 'ART101', name: 'Foundations of Algorithmic Logic', credits: 3 },
            { code: 'MAT111', name: 'Multivariate Calculus for AI', credits: 4 },
            { code: 'CSC105', name: 'Python Core & Data Engineering', credits: 3 },
            { code: 'ENG101', name: 'Academic English I', credits: 3 },
          ],
          electives: [
            { code: 'PHI102', name: 'Philosophy of Minds and Machines', credits: 2 },
          ],
        },
        {
          name: 'Semester 2 — Matrix Foundations',
          majorCourses: [
            { code: 'ART102', name: 'Linear Systems and Tensors', credits: 4 },
            { code: 'ART103', name: 'Probability and Stochastic Vectors', credits: 3 },
            { code: 'CSC205', name: 'Advanced Algorithms and Complexities', credits: 3 },
            { code: 'ENG102', name: 'Academic English II', credits: 3 },
          ],
          electives: [
            { code: 'GEN104', name: 'Ethics of Emerging Automation Technology', credits: 2 },
          ],
        },
      ],
    },
    {
      year: 2,
      semesters: [
        {
          name: 'Semester 1 — Statistical Learning',
          majorCourses: [
            { code: 'ART201', name: 'Classical Machine Learning Models', credits: 3 },
            { code: 'ART202', name: 'Optimization Formulations & Matrix Loss', credits: 3 },
            { code: 'ART203', name: 'Data Pipeline Engineering at Scale', credits: 3 },
            { code: 'MAT302', name: 'Discrete Math and Graph Formulations', credits: 3 },
          ],
          electives: [],
        },
        {
          name: 'Semester 2 — Neural Evolution',
          majorCourses: [
            { code: 'ART204', name: 'Introduction to Artificial Neural Networks', credits: 4 },
            { code: 'ART205', name: 'Computer Vision Architectures', credits: 3 },
            { code: 'ART206', name: 'Signal Processing & Sound Emulators', credits: 3 },
            { code: 'CSC402', name: 'Distributed Operating Kernels', credits: 3 },
          ],
          electives: [
            { code: 'ART220', name: 'Introduction to Simulation Engines', credits: 2 },
          ],
        },
      ],
    },
    {
      year: 3,
      semesters: [
        {
          name: 'Semester 1 — Cognitive Systems',
          majorCourses: [
            { code: 'ART301', name: 'Deep Sequence Networks & Transformers', credits: 4 },
            { code: 'ART302', name: 'Reinforcement Learning & Policy Gradients', credits: 3 },
            { code: 'ART303', name: 'Cognitive Robotics and Spatial Mapping', credits: 3 },
            { code: 'ART304', name: 'High-Performance Tensor Computing', credits: 3 },
          ],
          electives: [],
        },
        {
          name: 'Semester 2 — Advanced Generative Models',
          majorCourses: [
            { code: 'ART305', name: 'Generative AI and Diffusion Engineering', credits: 4 },
            { code: 'ART306', name: 'MLOps: Production Deployment Matrices', credits: 3 },
            { code: 'ART307', name: 'Autonomous Agent Systems', credits: 3 },
            { code: 'ART308', name: 'Neural Research Internship Framework', credits: 6 },
          ],
          electives: [
            { code: 'ART315', name: 'Neuromorphic Hardware Systems', credits: 2 },
          ],
        },
      ],
    },
    {
      year: 4,
      semesters: [
        {
          name: 'Semester 1 — Alignment & Scale',
          majorCourses: [
            { code: 'ART401', name: 'Large Language Model Engineering', credits: 4 },
            { code: 'ART402', name: 'AI Safety and Alignment Verification', credits: 3 },
            { code: 'ART403', name: 'Neural Thesis Capstone I', credits: 3 },
            { code: 'RES401', name: 'Advanced Academic Research Strategies', credits: 3 },
          ],
          electives: [],
        },
        {
          name: 'Semester 2 — Autonomous Convergence',
          majorCourses: [
            { code: 'ART404', name: 'Neural Thesis Capstone II', credits: 6 },
            { code: 'ART405', name: 'AI Startup & Tech Commercialization', credits: 3 },
            { code: 'ART406', name: 'Multi-Agent Cooperative Systems', credits: 3 },
          ],
          electives: [
            { code: 'ART412', name: 'Bio-Inspired Computing Algorithms', credits: 3 },
            { code: 'ART414', name: 'Quantum Machine Learning Foundations', credits: 3 },
          ],
        },
      ],
    },
  ],

  faculty: [
    {
      id: 'ai-1',
      name: 'Prof. Dr. Elena Rostova',
      position: 'Department Chair',
      rank: 'Professors',
      photo: IMG.portrait,
      specialization: 'Deep Neural Architectures & Alignment Physics',
      researchInterests: 'Transformer efficiency optimizations, neural alignment verifications, synthetic sensory loops',
      biography: 'Prof. Rostova completed her doctoral work at ETH Zürich and managed foundational generative transformer teams at leading global technology operations before taking her seat at KDU Global.',
      email: 'e.rostova@kduglobal.edu',
      phone: '+1 (555) 150-3001',
      office: 'Building E, Quantum Wing 402',
      linkedin: '#',
      scholar: '#',
      researchgate: '#',
    },
    {
      id: 'ai-2',
      name: 'Dr. Marcus Vance',
      position: 'Associate Professor',
      rank: 'Associate Professors',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      specialization: 'Natural Language Processing & Semantics',
      researchInterests: 'Large Language Model optimization context windows, multi-modal alignment engines',
      biography: 'Dr. Vance holds three foundational patents regarding token-processing algorithms and has led corporate text-parsing development cycles across Silicon Valley labs.',
      email: 'm.vance@kduglobal.edu',
      phone: '+1 (555) 150-3002',
      office: 'Building E, Quantum Wing 405',
      linkedin: '#',
    },
    {
      id: 'ai-3',
      name: 'Dr. Jun-Ho Choi',
      position: 'Assistant Professor',
      rank: 'Assistant Professors',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      specialization: 'Cognitive Robotics & Vision Mechanics',
      researchInterests: 'Real-time spatial reinforcement algorithms, vector-based navigation processing',
      biography: 'Dr. Choi brings foundational research credentials from his post-doctoral work at Tokyo Institute of Technology, specializing in humanoid kinetic navigation platforms.',
      email: 'jh.choi@kduglobal.edu',
      phone: '+1 (555) 150-3003',
      office: 'Building E, Core Wing 114',
      linkedin: '#',
      scholar: '#',
    },
  ],

  researchAreas: [
    {
      title: 'Transformer Mechanics & Efficiency',
      description: 'Compressing parameter footprints and attention layers to run multi-billion token configurations on consumer-tier edge systems.',
      faculty: ['Prof. Dr. Elena Rostova', 'Dr. Marcus Vance'],
    },
    {
      title: 'Autonomous Real-Time Kinetic Navigation',
      description: 'Designing reinforcement loops to process raw visual lidar telemetry into instant balancing adjustments for automated mechanics.',
      faculty: ['Dr. Jun-Ho Choi'],
    },
    {
      title: 'Synthesized Matrix Safety Metrics',
      description: 'Building mathematical boundaries that permanently contain synthetic neural logic path generations within pre-aligned safe guardrails.',
      faculty: ['Prof. Dr. Elena Rostova'],
    },
  ],

  news: [
    {
      id: 'ai-n1',
      image: IMG.gpuCluster,
      date: 'June 18, 2026',
      category: 'Infrastructure',
      title: 'KDU Unveils Advanced H100 Supercomputing Matrix',
      summary: 'The Artificial Intelligence department has successfully activated a local cluster layer, enabling deep student model compiles without external cloud fees.',
      link: '#',
    },
    {
      id: 'ai-n2',
      image: IMG.research,
      date: 'May 30, 2026',
      category: 'Research',
      title: 'AI Lab Breakthrough in Sub-Token Learning Efficiency',
      summary: 'Dr. Marcus Vance\'s research group has discovered a technique that reduces neural transformer computational weight by up to 34% without losing context consistency.',
      link: '#',
    },
  ],

  events: [
    {
      banner: IMG.event,
      title: 'Global Generative Model Symposia 2026',
      date: 'November 12, 2026',
      venue: 'Auditorium Cluster E',
      description: 'A global convention hosted by KDU where researchers display advanced fine-tuning methodologies and algorithmic alignments.',
      type: 'Conference',
    },
    {
      banner: IMG.robotics,
      title: 'Kinetic Robotics Hackathon',
      date: 'August 22, 2026',
      venue: 'Robotics Assembly Suite 104',
      description: 'A 48-hour race where teams program vision-tracking modules onto physical rover chassis units to negotiate complex balance mazes.',
      type: 'Competition',
    },
  ],

  testimonials: [
    {
      photo: IMG.student,
      name: 'Julian Vance',
      role: 'Principal AI Engineer at Neuromorphic Labs',
      program: 'BAI Alumnus, Class of 2025',
      quote: 'The depth of mathematics in this program is intense. Instead of just importing libraries, we coded deep learning layer vectors entirely by hand. That profound layer comprehension is why I was hired instantly.',
    },
  ],

  careers: [
    { title: 'Neural Network Architect', description: 'Design custom deep learning topologies and raw hidden layer matrices for targeted business tasks.', icon: '🧠' },
    { title: 'NLP Research Engineer', description: 'Build, train, and structurally configure foundational language models and multi-modal vector embeddings.', icon: '💬' },
    { title: 'Autonomous Systems Engineer', description: 'Program spatial mapping and sensory reinforcement feedback systems for smart vehicular platforms.', icon: '🤖' },
    { title: 'AI Alignment & Safety Analyst', description: 'Formulate algorithmic verification metrics to certify that machine behaviors match exact safety protocol configurations.', icon: '🛡️' },
  ],

  contact: {
    address: 'Department of Artificial Intelligence, Building E, Floor 4, KDU Global Campus, 123 University Avenue',
    phone: '+1 (555) 150-3000',
    email: 'ai@kduglobal.edu',
    hours: 'Monday – Friday, 9:00 AM – 5:00 PM',
  },
};
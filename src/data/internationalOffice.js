// src/data/internationalOffice.js

export const OFFICE_HERO = {
  title: "Student Services Centre",
  subtitle:
    "Supporting international students throughout their academic journey at Kyungdong University — counselling, visas, housing, part-time jobs, and more.",
  buttonText: "Explore Services",
  buttonLink: "#services",
};

export const OFFICE_NAV = [
  {
    id: "services",
    label: "Services",
  },
  {
    id: "visa",
    label: "Visa & Immigration",
  },
  {
    id: "staff",
    label: "Staff",
  },
  {
    id: "public-events",
    label: "Public Events",
  },
  {
    id: "news",
    label: "Student News",
  },
];

export { SERVICES, STUDENT_SERVICES } from './studentServices';

export const VISA_INFORMATION = [
  {
    title: "Before Arrival",
    items: [
      "Receive Certificate of Admission",
      "Apply for D-2 Student Visa",
      "Prepare required immigration documents",
    ],
  },
  {
    title: "After Arrival",
    items: [
      "Alien Registration Card (ARC)",
      "Health Insurance Registration",
      "Residence Reporting",
    ],
  },
];

// Staff Information - matches your image data
export const STAFF_INFORMATION = [
  {
    id: 1,
    name: '이상수 (David Lee)',
    position: 'Director of External Cooperation',
    phone: '+82.33.639.0310',
    email: 'sangsoolee@kduniv.ac.kr',
    isActive: true,
    role: 'admin'
  },
  {
    id: 2,
    name: '김용석 (James)',
    position: 'Manager',
    phone: '+82.33.639.0189',
    email: 'ysk202kr@kduniv.ac.kr',
    isActive: true,
    role: 'manager'
  },
  {
    id: 3,
    name: '공설지 (Leslie)',
    position: 'Manager',
    phone: '+82.33.639.0168',
    email: 'sj0907@kduniv.ac.kr',
    isActive: true,
    role: 'manager'
  },
  {
    id: 4,
    name: '장민혁 (Tommy)',
    position: 'Manager',
    phone: '+82.33.639.0164',
    email: 'jmh@kduniv.ac.kr',
    isActive: true,
    role: 'manager'
  },
  {
    id: 5,
    name: '김민수 (Murray)',
    position: 'Manager',
    phone: '+82.33.639.0187',
    email: 'bat9764256411@kduniv.ac.kr',
    isActive: true,
    role: 'manager'
  },
  {
    id: 6,
    name: '최수연 (Judy)',
    position: 'Assistant Manager',
    phone: '+82.33.639.0184',
    email: 'mini2625@kduniv.ac.kr',
    isActive: true,
    role: 'staff'
  }
];

export const PUBLIC_EVENTS = {
  title: "Public Events",
  lead:
    "KDU Global opens its campus to the public through open days, lectures, cultural festivals, conferences, and community celebrations — welcoming prospective students, families, partners, and neighbours.",
  stats: [
    { value: "40+", label: "Public events per year" },
    { value: "10,000+", label: "Annual visitors" },
    { value: "12", label: "Flagship annual programmes" },
  ],
  categories: [
    "University Open Day and campus tours",
    "Public lectures and thought-leadership forums",
    "Research symposia and academic conferences",
    "Cultural festivals and international days",
    "Career fairs and employer showcases",
    "Sports, arts, and student-led performances",
  ],
  highlights: [
    {
      icon: "🏫",
      title: "Open Day",
      description:
        "Explore programmes, meet faculty, and experience campus life at our flagship admissions event.",
    },
    {
      icon: "🎤",
      title: "Public Lectures",
      description:
        "Distinguished speakers address topics in technology, business, sustainability, and global affairs.",
    },
    {
      icon: "🎭",
      title: "Cultural Festivals",
      description:
        "Celebrate the diversity of our international community through food, music, and performance.",
    },
    {
      icon: "🔬",
      title: "Research Symposium",
      description:
        "Faculty and students present findings to peers, industry, and the wider public.",
    },
  ],
  events: [
    { date: "July 15, 2026", title: "Annual University Open Day", venue: "Main Campus", type: "Open Day" },
    { date: "August 8, 2026", title: "Global Alumni Networking Event", venue: "Alumni Hall", type: "Networking" },
    { date: "September 20, 2026", title: "International Research Symposium", venue: "Conference Center", type: "Conference" },
    { date: "October 5, 2026", title: "International Culture Festival", venue: "Campus Green", type: "Festival" },
  ],
};

export const STUDENT_NEWS = [
  {
    title: "International Student Orientation 2026",
    date: "August 2026",
    description:
      "Welcome program introducing new students to campus facilities and university services.",
  },
  {
    title: "Korean Culture Festival",
    date: "September 2026",
    description:
      "Join cultural performances, food experiences, and student activities.",
  },
  {
    title: "Visa Renewal Workshop",
    date: "October 2026",
    description:
      "Guidance session covering visa extension procedures and immigration regulations.",
  },
];
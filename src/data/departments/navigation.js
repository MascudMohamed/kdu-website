export const DEPT_BASE = '/academics/undergraduate';

export function deptPath(slug, subPath = '') {
  const base = `${DEPT_BASE}/${slug}`;
  return subPath ? `${base}/${subPath}` : base;
}

export const DEPARTMENT_NAV = {
  'smart-computing': [
    { label: 'Overview', path: '' },
    { label: 'Programme', path: 'programme' },
    { label: 'Learning', path: 'learning-experience' },
    { label: 'Curriculum', path: 'curriculum' },
    {
      label: 'Pathways',
      path: 'pathways',
      children: [
        { label: 'Software Engineering', path: 'pathways/software-engineering' },
        { label: 'Artificial Intelligence', path: 'pathways/artificial-intelligence' },
        { label: 'Cybersecurity', path: 'pathways/cybersecurity' },
        { label: 'Data Science', path: 'pathways/data-science' },
        { label: 'Cloud Computing', path: 'pathways/cloud-computing' },
      ],
    },
    { label: 'Projects', path: 'projects' },
    {
      label: 'Research',
      path: 'research',
      children: [
        { label: 'Research Overview', path: 'research' },
        { label: 'AI Research Lab', path: 'research/ai-lab' },
        { label: 'Cybersecurity Lab', path: 'research/cybersecurity-lab' },
        { label: 'Innovation Centre', path: 'innovation-centre' },
      ],
    },
    {
      label: 'Industry',
      path: 'industry',
      children: [
        { label: 'Partnerships', path: 'industry' },
        { label: 'Internships', path: 'internships' },
        { label: 'Technology Stack', path: 'technology-stack' },
        { label: 'Graduate Employment', path: 'employment' },
      ],
    },
    { label: 'People', path: 'faculty' },
    { label: 'Admissions', path: 'admissions' },
  ],
  'international-business-administration': [
    { label: 'Overview', path: '' },
    { label: 'Programme', path: 'programme' },
    { label: 'Curriculum', path: 'curriculum' },
    {
      label: 'Specializations',
      path: 'international-trade',
      children: [
        { label: 'International Trade', path: 'international-trade' },
        { label: 'Marketing', path: 'marketing' },
        { label: 'Entrepreneurship', path: 'entrepreneurship' },
        { label: 'Finance', path: 'finance' },
        { label: 'Supply Chain', path: 'supply-chain' },
      ],
    },
    {
      label: 'Global Experience',
      path: 'exchange',
      children: [
        { label: 'Exchange', path: 'exchange' },
        { label: 'Internships', path: 'internships' },
        { label: 'Partnerships', path: 'partnerships' },
      ],
    },
    {
      label: 'Applied Learning',
      path: 'consulting',
      children: [
        { label: 'Consulting Projects', path: 'consulting' },
        { label: 'Competitions', path: 'competitions' },
      ],
    },
    { label: 'Research', path: 'research' },
    { label: 'Careers', path: 'careers' },
    { label: 'Alumni', path: 'alumni' },
    { label: 'People', path: 'faculty' },
    { label: 'Admissions', path: 'admissions' },
  ],
  'english-for-academic-purposes': [
    { label: 'About EAP', path: '' },
    { label: 'Levels', path: 'levels' },
    { label: 'Placement', path: 'placement' },
    {
      label: 'Skills',
      path: 'academic-writing',
      children: [
        { label: 'Academic Writing', path: 'academic-writing' },
        { label: 'Academic Speaking', path: 'academic-speaking' },
        { label: 'Listening', path: 'listening' },
        { label: 'Reading', path: 'reading' },
      ],
    },
    {
      label: 'Preparation',
      path: 'university-preparation',
      children: [
        { label: 'University Preparation', path: 'university-preparation' },
        { label: 'Korean University Life', path: 'korean-university-life' },
        { label: 'Completion Requirements', path: 'completion' },
      ],
    },
    { label: 'Support', path: 'student-support' },
    { label: 'Resources', path: 'resources' },
    { label: 'Pathways', path: 'pathways' },
    { label: 'People', path: 'faculty' },
    { label: 'Admissions', path: 'admissions' },
  ],
};

export function getDepartmentNav(slug) {
  return DEPARTMENT_NAV[slug] || [];
}

export function flattenNavItems(nav) {
  const items = [];
  nav.forEach((item) => {
    if (item.path !== undefined) items.push({ label: item.label, path: item.path });
    if (item.children) items.push(...item.children);
  });
  return items;
}

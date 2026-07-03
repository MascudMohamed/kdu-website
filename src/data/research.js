// src/data/research.js — edit research content here (frontend for now)

export const navigation = [
  { id: 'areas', label: 'Research Areas' },
  { id: 'centers', label: 'Research Institutes & Centres' },
  { id: 'publications', label: 'Research Publications' },
  { id: 'innovation', label: 'Innovation & Partnerships' },
  { id: 'news', label: 'Research News' },
];

const heroData = {
  eyebrow: 'Kyungdong University',
  title: 'Driving Innovation Through Research Excellence',
  description:
    'Kyungdong University advances knowledge through interdisciplinary research, innovation, and global collaboration. This page serves as a central hub where future research content can be managed directly from the backend.',
  image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1800&q=80',
  primaryPath: '/research/areas',
  primaryLabel: 'Explore Research',
  secondaryPath: '/research/publications',
  secondaryLabel: 'Latest Publications',
};

const areaCards = [
  {
    title: 'Artificial Intelligence',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80',
    description:
      'AI laboratories, faculty members, research grants, publications and industrial collaborations.',
  },
  {
    title: 'Healthcare & Biomedical',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80',
    description:
      'Digital healthcare, medical AI, biomedical engineering and health informatics research.',
  },
  {
    title: 'Smart Computing',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80',
    description:
      'Cloud computing, IoT, cybersecurity, robotics and software engineering.',
  },
  {
    title: 'Environmental Sustainability',
    image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=900&q=80',
    description:
      'Renewable energy, climate science, smart cities and sustainable development.',
  },
  {
    title: 'Business & Innovation',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=900&q=80',
    description:
      'Entrepreneurship, economics, management science and industrial innovation.',
  },
  {
    title: 'Humanities & Society',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80',
    description:
      'Education, tourism, language studies, hospitality and international relations.',
  },
];

const centerCards = [
  {
    title: 'Artificial Intelligence Research Centre',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80',
    description:
      'Laboratories, faculty members, grants, publications and ongoing projects in artificial intelligence.',
  },
  {
    title: 'Healthcare Innovation Centre',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80',
    description:
      'Interdisciplinary healthcare, biomedical engineering and digital medicine initiatives.',
  },
  {
    title: 'Smart Computing Laboratory',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80',
    description:
      'Cybersecurity, networking, cloud computing, embedded systems and robotics.',
  },
  {
    title: 'Sustainability Research Institute',
    image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=900&q=80',
    description:
      'Environmental science, renewable energy and smart city research.',
  },
];

const publicationCards = [
  {
    title: 'Research Publication Repository',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=900&q=80',
    description:
      'Journals, conference papers, books, patents and indexed publications.',
  },
  {
    title: 'Faculty Publications',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900&q=80',
    description:
      'Faculty publication database integrated with the university CMS.',
  },
  {
    title: 'Student Research',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=80',
    description:
      'Graduate and undergraduate student publications, theses and dissertations.',
  },
];

const innovationCards = [
  {
    title: 'Industry Collaboration',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80',
    description:
      'Collaborations between Kyungdong University and industry partners.',
  },
  {
    title: 'Technology Transfer',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80',
    description:
      'Commercialization, patents, licensing and intellectual property.',
  },
  {
    title: 'Research Grants',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80',
    description:
      'Externally funded research projects and grant opportunities.',
  },
];

const newsCards = [
  {
    title: 'Research News',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900&q=80',
    description:
      'Latest discoveries, conferences, grants and research achievements.',
  },
  {
    title: 'Faculty Research Spotlight',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=900&q=80',
    description:
      'Featured faculty members and ongoing interdisciplinary research projects.',
  },
  {
    title: 'Student Research',
    image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=900&q=80',
    description:
      'Undergraduate and graduate student research highlights.',
  },
];

const pagesPreview = {
  areas: 'Explore interdisciplinary research domains across science, technology, business and society.',
  centers: 'Dedicated institutes and laboratories advancing specialised fields of inquiry.',
  publications: 'Access journals, conference papers, theses and faculty publication records.',
  innovation: 'Industry partnerships, technology transfer and funded research initiatives.',
  news: 'Latest research news, faculty spotlights and student achievements.',
};

const pageImages = {
  areas: areaCards[0].image,
  centers: centerCards[0].image,
  publications: publicationCards[0].image,
  innovation: innovationCards[0].image,
  news: newsCards[0].image,
};

export const hub = {
  hero: heroData,
  navigation,
  featured: {
    eyebrow: 'Research at KDU Global',
    title: 'Where Ideas Become Impact',
    lead:
      'Faculty and students work across disciplines on research that addresses real challenges — from sustainable technology to global business strategy.',
    image: 'https://images.unsplash.com/photo-1532094349883-543bc11b234d?w=1200&q=80',
  },
  explore: navigation.map((item) => ({
    slug: item.id,
    title: item.label,
    description: pagesPreview[item.id],
    image: pageImages[item.id],
  })),
};

export const pages = {
  areas: {
    eyebrow: 'Research',
    title: 'Research Areas',
    description:
      'Kyungdong University supports research across six major domains, connecting faculty, students and industry partners.',
    cards: areaCards,
  },
  centers: {
    eyebrow: 'Research',
    title: 'Research Institutes & Centres',
    description:
      'Specialised centres provide infrastructure, funding pathways and collaborative environments for advanced study.',
    cards: centerCards,
  },
  publications: {
    eyebrow: 'Research',
    title: 'Research Publications',
    description:
      'A growing repository of scholarly output from faculty and students across the university.',
    cards: publicationCards,
  },
  innovation: {
    eyebrow: 'Research',
    title: 'Innovation & Partnerships',
    description:
      'Translating research into real-world impact through industry collaboration and commercialisation.',
    cards: innovationCards,
  },
  news: {
    eyebrow: 'Research',
    title: 'Research News',
    description:
      'Stay informed about discoveries, conferences, grants and achievements from the KDU research community.',
    cards: newsCards,
  },
};

// Legacy exports (kept for any older components)
export const RESEARCH_HERO = {
  eyebrow: heroData.eyebrow,
  title: heroData.title,
  description: heroData.description,
  background: heroData.image,
  primaryButton: { text: heroData.primaryLabel, link: heroData.primaryPath },
  secondaryButton: { text: heroData.secondaryLabel, link: heroData.secondaryPath },
};

export const RESEARCH_NAV = navigation.map(({ id, label }) => ({ id, label }));

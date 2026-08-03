/**
 * Kyungdong University campuses — mirrors official undergraduate campus links
 * https://global.kduniv.ac.kr/global/index.php?pCode=1466580676
 */
export const KDU_CAMPUSES = [
  {
    id: 'global',
    name: 'Kyungdong University – Global Campus',
    shortName: 'Global Campus',
    location: 'Goseong, Gangwon',
    medium: 'English Medium',
    description: 'International programmes taught in English for a global student community.',
    address: '46 Bongpo 4-gil, Goseong-gun, Gangwon-do 24764',
    href: '/',
    external: false,
    current: true,
  },
  {
    id: 'medical',
    name: 'Kyungdong University – Medical Campus',
    shortName: 'Medical Campus',
    location: 'Wonju (Munmak)',
    medium: 'Korean Medium',
    description: 'Healthcare and medical programmes at the Munmak campus in Wonju.',
    address: '815 Gyeonhwon-ro, Munmak-eup, Wonju-si, Gangwon-do 26495',
    href: 'https://kduniv.ac.kr/kor/CMS/Contents/Contents.do?mCode=MN232',
    external: true,
    current: false,
  },
  {
    id: 'metropol',
    name: 'Kyungdong University – Metropol Campus',
    shortName: 'Metropol Campus',
    location: 'Yangju, Gyeonggi-do',
    medium: 'Korean Medium',
    description: 'Industry-focused programmes at the Metropol Campus in Yangju.',
    address: '27 Kyungdong University-ro, Yangju-si, Gyeonggi-do 11458',
    href: 'https://kduniv.ac.kr/kor/CMS/CampusMgr/list.do?mCode=MN193',
    external: true,
    current: false,
  },
];

/** Main Korean-language university portal (Metropol & Medical programmes). */
export const KDU_KOREAN_PORTAL_URL = 'https://kduniv.ac.kr/kor/Main.do';

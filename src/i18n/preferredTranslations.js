/** Preferred short labels for university UI — overrides machine translation. */

export const PREFERRED_TRANSLATIONS = {
  ko: {
    HOME: '홈',
    Home: '홈',
    ACADEMICS: '학사',
    Academics: '학사',
    'STUDENT SERVICES': '학생 서비스',
    'Student Services': '학생 서비스',
    ADMISSIONS: '입학',
    Admissions: '입학',
    ENGAGEMENT: '교류협력',
    Engagement: '교류협력',
    'ABOUT US': '대학소개',
    'About Us': '대학소개',
    'NEWS & EVENTS': '뉴스·행사',
    'News & Events': '뉴스·행사',
    'Apply now': '지원하기',
    'Apply Now': '지원하기',
  },
  fr: {
    HOME: 'Accueil',
    Home: 'Accueil',
    ACADEMICS: 'Formations',
    Academics: 'Formations',
    'STUDENT SERVICES': 'Vie étudiante',
    'Student Services': 'Vie étudiante',
    ADMISSIONS: 'Admissions',
    Admissions: 'Admissions',
    ENGAGEMENT: 'Partenariats',
    Engagement: 'Partenariats',
    'ABOUT US': 'À propos',
    'About Us': 'À propos',
    'NEWS & EVENTS': 'Actualités',
    'News & Events': 'Actualités',
    'Apply now': 'Postuler',
    'Apply Now': 'Postuler',
  },
  es: {
    HOME: 'Inicio',
    Home: 'Inicio',
    ACADEMICS: 'Académico',
    Academics: 'Académico',
    'STUDENT SERVICES': 'Servicios',
    'Student Services': 'Servicios',
    ADMISSIONS: 'Admisiones',
    Admissions: 'Admisiones',
    ENGAGEMENT: 'Vinculación',
    Engagement: 'Vinculación',
    'ABOUT US': 'Nosotros',
    'About Us': 'Nosotros',
    'NEWS & EVENTS': 'Noticias',
    'News & Events': 'Noticias',
    'Apply now': 'Solicitar',
    'Apply Now': 'Solicitar',
  },
  pt: {
    HOME: 'Início',
    Home: 'Início',
    ACADEMICS: 'Académico',
    Academics: 'Académico',
    'STUDENT SERVICES': 'Serviços',
    'Student Services': 'Serviços',
    ADMISSIONS: 'Admissões',
    Admissions: 'Admissões',
    ENGAGEMENT: 'Parcerias',
    Engagement: 'Parcerias',
    'ABOUT US': 'Sobre nós',
    'About Us': 'Sobre nós',
    'NEWS & EVENTS': 'Notícias',
    'News & Events': 'Notícias',
    'Apply now': 'Candidatar',
    'Apply Now': 'Candidatar',
  },
};

export function preferredTranslation(lang, englishText) {
  const dict = PREFERRED_TRANSLATIONS[lang];
  if (!dict || typeof englishText !== 'string') return null;

  if (Object.prototype.hasOwnProperty.call(dict, englishText)) {
    return dict[englishText];
  }

  const trimmed = englishText.trim();
  if (Object.prototype.hasOwnProperty.call(dict, trimmed)) {
    return dict[trimmed];
  }

  const upper = trimmed.toUpperCase();
  if (Object.prototype.hasOwnProperty.call(dict, upper)) {
    return dict[upper];
  }

  const entry = Object.entries(dict).find(
    ([key]) => key.trim().toUpperCase() === upper,
  );
  return entry ? entry[1] : null;
}

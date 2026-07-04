import { API_BASE } from '../config.js';

export function resolveMediaUrl(path) {
  if (!path) return null;
  if (/^https?:\/\//i.test(path)) return path;
  const clean = path.replace(/^\/+/, '');
  return API_BASE ? `${API_BASE}/${clean}` : `/${clean}`;
}

/** Strip HTML tags for plain-text fallbacks */
export function plainText(html) {
  if (!html || typeof html !== 'string') return '';
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

export function cmsHeroSlides(cms, staticSlides) {
  const heroImage = resolveMediaUrl(cms?.heroImage);
  if (heroImage) {
    return [{ image: heroImage, alt: cms.headline || 'KDU Global' }, ...staticSlides.slice(1)];
  }
  return staticSlides;
}

export function cmsFaqs(cmsItems, staticFaqs) {
  if (!cmsItems?.length) return staticFaqs;
  return cmsItems.map((item, i) => ({
    q: item.question || item.title || staticFaqs[i]?.q || 'Question',
    a: item.answer || item.text || staticFaqs[i]?.a || '',
  }));
}

export function mergeDepartmentCms(staticDept, contentMap) {
  if (!contentMap || !staticDept) return staticDept;

  const hero = contentMap.hero || {};
  const intro = contentMap.introduction || {};
  const vision = contentMap.vision || {};
  const mission = contentMap.mission || {};

  return {
    ...staticDept,
    bannerImage: resolveMediaUrl(hero.heroImage || hero.image) || staticDept.bannerImage,
    cardImage: resolveMediaUrl(hero.heroImage || hero.image) || staticDept.cardImage,
    description: plainText(intro.body || intro.intro || intro.headline) || staticDept.description,
    overview: intro.body ? plainText(intro.body) : staticDept.overview,
    vision: vision.text || vision.body || vision.headline || staticDept.vision,
    mission: mission.text || mission.body || mission.headline || staticDept.mission,
    _cmsContent: contentMap,
  };
}

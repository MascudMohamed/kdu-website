import { API_BASE } from '../config.js';

/** Normalize CMS / backend media paths so Vite and production can load them. */
export function normalizeMediaPath(path) {
  if (!path || typeof path !== 'string') return null;

  let value = path.trim();
  if (!value) return null;

  if (/^https?:\/\//i.test(value)) {
    try {
      const { pathname } = new URL(value);
      value = pathname;
    } catch {
      return value;
    }
  }

  value = value.replace(/^\/+/, '');

  // XAMPP path stored by CMS uploader: kdu-backend/public/media/...
  value = value.replace(/^kdu-backend\/public\/media\//i, 'media/');
  value = value.replace(/^kdu-backend\/public\//i, '');

  if (value.startsWith('uploads/')) {
    value = `media/${value.slice('uploads/'.length)}`;
  }

  return value;
}

export function resolveMediaUrl(path) {
  const normalized = normalizeMediaPath(path);
  if (!normalized) return null;
  if (/^https?:\/\//i.test(normalized)) return normalized;
  return API_BASE ? `${API_BASE.replace(/\/$/, '')}/${normalized}` : `/${normalized}`;
}

/** Strip HTML tags for plain-text fallbacks */
export function plainText(html) {
  if (!html || typeof html !== 'string') return '';
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function mapRepeaterItems(items, mapper) {
  if (!Array.isArray(items) || !items.length) return null;
  return items.map(mapper).filter(Boolean);
}

function mergeOverview(staticOverview, intro, whyProgram) {
  const base =
    typeof staticOverview === 'object' && staticOverview !== null
      ? { ...staticOverview }
      : { philosophy: typeof staticOverview === 'string' ? staticOverview : '' };

  const philosophy =
    intro.philosophy || whyProgram.philosophy || intro.body || intro.intro || intro.headline;

  if (philosophy) {
    base.philosophy = plainText(philosophy);
  }

  return base;
}

export function cmsHeroSlides(cms, staticSlides) {
  const heroImage = cms?.heroImage ? resolveMediaUrl(cms.heroImage) : null;
  if (heroImage) {
    return [
      { image: heroImage, alt: cms.headline || staticSlides[0]?.alt || 'KDU Global' },
      ...staticSlides.slice(1),
    ];
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
  const whyProgram = contentMap['why-program'] || {};
  const curriculum = contentMap.curriculum || {};
  const programme = contentMap.programme || {};
  const careerOutcomes = contentMap['career-outcomes'] || {};
  const admissions = contentMap['dept-admissions'] || {};
  const research = contentMap['dept-research'] || {};
  const contact = contentMap['dept-contact'] || {};
  const objectives = contentMap.objectives || {};
  const vision = contentMap.vision || {};
  const mission = contentMap.mission || {};

  const whyChoose = mapRepeaterItems(whyProgram.items, (item) => ({
    title: item.title,
    description: item.description,
  })) ?? (objectives.items?.length
    ? mapRepeaterItems(objectives.items, (item) => ({
        title: item.title,
        description: item.description,
      }))
    : null);

  const curriculumHighlights = mapRepeaterItems(curriculum.items, (item) => ({
    year: item.year,
    title: item.title,
    summary: item.summary,
  }));

  const researchAreas = mapRepeaterItems(research.areas, (item) => ({
    title: item.title,
    description: item.description,
  }));

  const quickFacts = { ...(staticDept.quickFacts || {}) };
  if (hero.duration) quickFacts.Duration = hero.duration;
  if (hero.language) quickFacts.Language = hero.language;
  if (hero.intake) quickFacts.Intake = hero.intake;

  const mergedAdmissions = admissions.headline || admissions.body || admissions.tuition
    ? {
        ...staticDept.admissions,
        headline: admissions.headline || staticDept.admissions?.headline,
        message: plainText(admissions.body) || staticDept.admissions?.message,
        tuition: admissions.tuition || staticDept.admissions?.tuition,
        ctaText: admissions.ctaText || staticDept.admissions?.ctaText,
      }
    : staticDept.admissions;

  const mergedContact = contact.email || contact.phone || contact.office
    ? {
        ...staticDept.contact,
        email: contact.email || staticDept.contact?.email,
        phone: contact.phone || staticDept.contact?.phone,
        office: contact.office || staticDept.contact?.office,
        hours: contact.hours || staticDept.contact?.hours,
      }
    : staticDept.contact;

  const mergedCareerOutcomes = careerOutcomes.lead || careerOutcomes.stats?.length
    ? {
        ...staticDept.careerOutcomes,
        lead: careerOutcomes.lead || staticDept.careerOutcomes?.lead,
        demand: careerOutcomes.demand || staticDept.careerOutcomes?.demand,
        stats: careerOutcomes.stats?.length
          ? careerOutcomes.stats.map((s) => ({ value: s.value, label: s.label }))
          : staticDept.careerOutcomes?.stats,
      }
    : staticDept.careerOutcomes;

  return {
    ...staticDept,
    title: hero.headline || staticDept.title,
    degree: hero.subheadline || staticDept.degree,
    bannerImage: resolveMediaUrl(hero.heroImage || hero.image) || staticDept.bannerImage,
    cardImage: resolveMediaUrl(hero.heroImage || hero.image) || staticDept.cardImage,
    description:
      plainText(hero.body || intro.body || intro.intro || intro.headline) || staticDept.description,
    overview: mergeOverview(staticDept.overview, intro, whyProgram),
    whyChoose: whyChoose ?? staticDept.whyChoose,
    curriculumHighlights: curriculumHighlights ?? staticDept.curriculumHighlights,
    researchAreas: researchAreas ?? staticDept.researchAreas,
    careerOutcomes: mergedCareerOutcomes,
    admissions: mergedAdmissions,
    contact: mergedContact,
    programmeContent: programme.body
      ? { headline: programme.headline, body: programme.body, image: resolveMediaUrl(programme.image) }
      : staticDept.programmeContent,
    vision: vision.text || vision.body || vision.headline || staticDept.vision,
    mission: mission.text || mission.body || mission.headline || staticDept.mission,
    _cmsContent: contentMap,
    _cmsPowered: Object.keys(contentMap).length > 0,
  };
}

import smartComputingPages from './smartComputingPages';
import ibaPages from './ibaPages';
import eapPages from './eapPages';
import { createDefaultPages } from './defaultPages';

const REGISTRY = {
  'smart-computing': smartComputingPages,
  'international-business-administration': ibaPages,
  'english-for-academic-purposes': eapPages,
};

export function getDepartmentPage(deptSlug, pagePath, deptTitle) {
  const specific = REGISTRY[deptSlug]?.[pagePath];
  if (specific) return specific;

  if (!deptTitle) return null;

  const defaults = createDefaultPages(deptSlug, deptTitle);
  return defaults[pagePath] || null;
}

export function getAllDepartmentPagePaths(deptSlug) {
  const keys = new Set(Object.keys(REGISTRY[deptSlug] || {}));
  Object.keys(createDefaultPages(deptSlug, 'Programme')).forEach((k) => keys.add(k));
  return [...keys];
}

export { REGISTRY as DEPARTMENT_PAGES };

import smartComputingPages from './smartComputingPages';
import ibaPages from './ibaPages';
import eapPages from './eapPages';

const REGISTRY = {
  'smart-computing': smartComputingPages,
  'international-business-administration': ibaPages,
  'english-for-academic-purposes': eapPages,
};

export function getDepartmentPage(deptSlug, pagePath) {
  const pages = REGISTRY[deptSlug];
  if (!pages) return null;
  return pages[pagePath] || null;
}

export function getAllDepartmentPagePaths(deptSlug) {
  return Object.keys(REGISTRY[deptSlug] || {});
}

export { REGISTRY as DEPARTMENT_PAGES };

export const DEPT_BASE = '/academics/undergraduate';

export function deptPath(slug, subPath = '') {
  const base = `${DEPT_BASE}/${slug}`;
  return subPath ? `${base}/${subPath}` : base;
}

/** Shared sub-nav for all undergraduate departments */
export const SIMPLIFIED_DEPARTMENT_NAV = [
  { label: 'Overview', path: '' },
  { label: 'Curriculum', path: 'curriculum' },
  { label: 'Faculty', path: 'faculty' },
  { label: 'News & Events', path: '', hash: '#news' },
  { label: 'Admissions', path: 'admissions' },
];

const SIMPLIFIED_SLUGS = [
  'smart-computing',
  'international-business-administration',
  'english-for-academic-purposes',
  'artificial-intelligence',
  'international-hotel-management',
  'korean-for-academic-purposes',
];

export const DEPARTMENT_NAV = Object.fromEntries(
  SIMPLIFIED_SLUGS.map((slug) => [slug, SIMPLIFIED_DEPARTMENT_NAV]),
);

/** @deprecated use SIMPLIFIED_DEPARTMENT_NAV */
export const DEFAULT_DEPARTMENT_NAV = SIMPLIFIED_DEPARTMENT_NAV;

const SKIP_EXPLORE = new Set(['', 'faculty', 'admissions']);
const ACADEMIC_PATHS = new Set(['programme', 'curriculum', 'learning-experience', 'levels', 'placement']);

export function getDepartmentNav(slug) {
  return DEPARTMENT_NAV[slug] || SIMPLIFIED_DEPARTMENT_NAV;
}

export function getHubExploreSections(slug) {
  const nav = getDepartmentNav(slug);
  const base = deptPath(slug);
  const sections = [];

  const academic = nav.filter(
    (item) => !item.children && item.path && ACADEMIC_PATHS.has(item.path),
  );
  if (academic.length > 0) {
    sections.push({
      title: 'Academic programme',
      links: academic.map((item) => ({
        label: item.label,
        path: item.path ? `${base}/${item.path}` : base,
      })),
    });
  }

  nav.forEach((item) => {
    if (item.children?.length) {
      sections.push({
        title: item.label,
        links: item.children.map((child) => ({
          label: child.label,
          path: `${base}/${child.path}`,
        })),
      });
    }
  });

  const childPaths = new Set(
    nav.flatMap((item) => (item.children || []).map((c) => c.path)),
  );
  const standalone = nav.filter(
    (item) =>
      !item.children
      && item.path
      && !item.hash
      && !SKIP_EXPLORE.has(item.path)
      && !ACADEMIC_PATHS.has(item.path),
  );
  if (standalone.length > 0) {
    sections.push({
      title: 'Explore further',
      links: standalone.map((item) => ({
        label: item.label,
        path: `${base}/${item.path}`,
      })),
    });
  }

  return sections;
}

export function flattenNavItems(nav) {
  const items = [];
  nav.forEach((item) => {
    if (item.path !== undefined) items.push({ label: item.label, path: item.path });
    if (item.children) items.push(...item.children);
  });
  return items;
}

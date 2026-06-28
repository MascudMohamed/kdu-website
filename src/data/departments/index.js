import smartComputing from './smartComputing';
import iba from './iba';
import eap from './eap';
import { enrichDepartment } from './enrich';
import { getDepartmentPage } from './pages';
import { getProject, getProjects } from './projects';

const RAW = {
  'smart-computing': smartComputing,
  'international-business-administration': iba,
  'english-for-academic-purposes': eap,
};

export const LEGACY_SLUG_REDIRECTS = {
  'bachelor-of-smart-computing': 'smart-computing',
};

export const DEPARTMENTS = Object.fromEntries(
  Object.entries(RAW).map(([slug, data]) => [slug, enrichDepartment({ ...data, slug }, slug)])
);

export const UNDERGRADUATE_DEPARTMENTS = Object.values(DEPARTMENTS);

export function getDepartmentBySlug(slug) {
  const resolved = LEGACY_SLUG_REDIRECTS[slug] || slug;
  return DEPARTMENTS[resolved] || null;
}

export function getAllFaculty() {
  return UNDERGRADUATE_DEPARTMENTS.flatMap((d) => d.faculty);
}

export function getFacultyBySlug(profileSlug, departmentSlug) {
  const all = getAllFaculty();
  if (departmentSlug) {
    return all.find((f) => f.profileSlug === profileSlug && f.departmentSlug === departmentSlug) || null;
  }
  return all.find((f) => f.profileSlug === profileSlug) || null;
}

export function getDepartmentList() {
  return UNDERGRADUATE_DEPARTMENTS;
}

export function getDepartmentPageContent(deptSlug, pagePath) {
  return getDepartmentPage(deptSlug, pagePath);
}

export function getDepartmentProjects(deptSlug) {
  return getProjects(deptSlug);
}

export function getDepartmentProject(deptSlug, projectSlug) {
  return getProject(deptSlug, projectSlug);
}

export { getDepartmentPage };

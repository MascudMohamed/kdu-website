import smartComputing from './smartComputing';
import iba from './iba';
import eap from './eap';
import { enrichDepartment } from './enrich';

const RAW = {
  'smart-computing': smartComputing,
  'international-business-administration': iba,
  'english-for-academic-purposes': eap,
  
};

/** @deprecated old slugs → redirect targets */
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

export function getFacultyBySlug(profileSlug) {
  return getAllFaculty().find((f) => f.profileSlug === profileSlug) || null;
}

export function getDepartmentList() {
  return UNDERGRADUATE_DEPARTMENTS;
}

/**
 * Departments wired to kdu_backend (PHP + MySQL).
 * Frontend slug → API path segment.
 */
export const API_DEPARTMENTS = {
  'smart-computing': 'smart-computing',
  'international-business-administration': 'iba',
  'english-for-academic-purposes': 'eap',
};

export function isApiDepartment(slug) {
  return Object.prototype.hasOwnProperty.call(API_DEPARTMENTS, slug);
}

export function getApiCode(slug) {
  return API_DEPARTMENTS[slug] ?? null;
}

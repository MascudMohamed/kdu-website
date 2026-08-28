import { getJson } from '../http.js';

export function fetchInternationalFaculty() {
  return getJson('/api/international/faculty');
}

export function fetchInternationalFacultyProfile(profileSlug) {
  return getJson(`/api/international/faculty/${encodeURIComponent(profileSlug)}`);
}

import { getJson } from '../http.js';

export function fetchGraduateFaculty() {
  return getJson('/api/graduate/faculty');
}

export function fetchGraduateFacultyProfile(profileSlug) {
  return getJson(`/api/graduate/faculty/${encodeURIComponent(profileSlug)}`);
}

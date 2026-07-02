import { API_BASE } from '../config.js';

async function getJson(path) {
  const res = await fetch(`${API_BASE}${path}`, {
    credentials: 'include',
    headers: { Accept: 'application/json' },
  });

  if (!res.ok) {
    throw new Error(`API ${res.status}: ${path}`);
  }

  return res.json();
}

export function fetchDepartmentFaculty(apiCode) {
  return getJson(`/api/${apiCode}/faculty`);
}

export function fetchDepartmentFacultyProfile(apiCode, profileSlug) {
  return getJson(`/api/${apiCode}/faculty/${encodeURIComponent(profileSlug)}`);
}

export function fetchDepartmentNews(apiCode) {
  return getJson(`/api/${apiCode}/news`);
}

export function fetchDepartmentEvents(apiCode) {
  return getJson(`/api/${apiCode}/events`);
}

export async function fetchDepartmentLiveBundle(apiCode) {
  const [faculty, news, events] = await Promise.all([
    fetchDepartmentFaculty(apiCode),
    fetchDepartmentNews(apiCode),
    fetchDepartmentEvents(apiCode),
  ]);

  return { faculty, news, events };
}

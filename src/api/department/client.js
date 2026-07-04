import { getJson } from '../http.js';

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

export function fetchDepartmentContent(apiCode) {
  return getJson(`/api/${apiCode}/content`);
}

async function safeGetJson(path) {
  try {
    return await getJson(path);
  } catch {
    return { data: [] };
  }
}

export async function fetchDepartmentLiveBundle(apiCode) {
  const [faculty, news, events, content] = await Promise.all([
    safeGetJson(`/api/${apiCode}/faculty`),
    safeGetJson(`/api/${apiCode}/news`),
    safeGetJson(`/api/${apiCode}/events`),
    safeGetJson(`/api/${apiCode}/content`).catch(() => ({ data: {} })),
  ]);

  return { faculty, news, events, content };
}

import { getJson } from '../http.js';

/** @returns {Promise<object[]>} */
export async function fetchClubs() {
  const res = await getJson('/api/clubs');
  return res.data ?? [];
}

/** @returns {Promise<object|null>} */
export async function fetchClubBySlug(slug) {
  try {
    const res = await getJson(`/api/clubs/${encodeURIComponent(slug)}`);
    return res.data ?? null;
  } catch {
    return null;
  }
}

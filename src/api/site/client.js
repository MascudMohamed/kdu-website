import { getJson } from '../http.js';

/** @returns {Promise<Record<string, object>>} */
export async function fetchSiteContentBundle() {
  const res = await getJson('/api/site/content');
  return res.data ?? {};
}

/** @returns {Promise<Record<string, object>>} */
export async function fetchDepartmentContent(apiCode) {
  const res = await getJson(`/api/${apiCode}/content`);
  return res.data ?? {};
}

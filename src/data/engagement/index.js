import { ENGAGEMENT_HUB, ENGAGEMENT_PAGES, ENGAGEMENT_NAV, CDC_WEBSITE_URL } from './pages';
export { CLUBS, CLUB_CATEGORIES, getClubs, getFeaturedClubs, getClubBySlug } from './clubs';

export { ENGAGEMENT_HUB, ENGAGEMENT_PAGES, ENGAGEMENT_NAV, CDC_WEBSITE_URL };

export const ENGAGEMENT_BASE = '/engagement';

export function engagementPath(slug = '') {
  if (!slug) return ENGAGEMENT_BASE;
  return `${ENGAGEMENT_BASE}/${slug}`;
}

export function getEngagementPage(slug) {
  return ENGAGEMENT_PAGES[slug] || null;
}

export function getEngagementNav() {
  return ENGAGEMENT_NAV;
}

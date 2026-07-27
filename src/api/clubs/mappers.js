import { resolveMediaUrl } from '../site/mappers.js';

/**
 * Map API club row to frontend club shape used by Engagement components.
 */
export function mapApiClub(row, fallback = null) {
  if (!row) return fallback;

  const committee = Array.isArray(row.committee) ? row.committee : [];
  const leaderRow = committee[0];

  return {
    id: row.id != null ? `club-${row.id}` : fallback?.id,
    slug: row.slug || fallback?.slug,
    name: row.name || fallback?.name,
    category: row.category || fallback?.category || 'Community & Service',
    tagline: row.tagline || fallback?.tagline || '',
    description: row.description || fallback?.description || '',
    image: resolveMediaUrl(row.hero_image || row.image) || fallback?.image || '',
    members: Number(row.member_count ?? row.members ?? fallback?.members ?? 0),
    meetingDay: row.meeting_day || fallback?.meetingDay || '',
    meetingTime: row.meeting_time || fallback?.meetingTime || '',
    meetingVenue: row.meeting_venue || fallback?.meetingVenue || '',
    openToJoin: row.open_to_join != null
      ? Boolean(Number(row.open_to_join))
      : (fallback?.openToJoin ?? true),
    featured: row.is_featured != null
      ? Boolean(Number(row.is_featured))
      : (fallback?.featured ?? false),
    languages: fallback?.languages || ['English'],
    leader: leaderRow
      ? {
          name: leaderRow.name,
          role: leaderRow.role_title || leaderRow.role || 'Leader',
          program: leaderRow.program || '',
        }
      : fallback?.leader || null,
    activities: fallback?.activities || [],
    committee: committee.map((m) => ({
      name: m.name,
      role: m.role_title || m.role,
      program: m.program,
    })),
    contactEmail: row.contact_email || fallback?.contactEmail,
    _fromApi: true,
  };
}

export function mergeClubsWithApi(apiClubs, staticClubs = []) {
  if (!apiClubs?.length) return staticClubs;

  const mapped = apiClubs.map((row) => {
    const fallback = staticClubs.find((c) => c.slug === row.slug);
    return mapApiClub(row, fallback);
  });

  const apiSlugs = new Set(mapped.map((c) => c.slug));
  const staticOnly = staticClubs.filter((c) => !apiSlugs.has(c.slug));

  return [...mapped, ...staticOnly];
}

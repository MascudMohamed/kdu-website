import { API_BASE } from '../config.js';

export function resolveMediaUrl(path) {
  if (!path) return null;
  if (/^https?:\/\//i.test(path)) return path;
  const clean = path.replace(/^\/+/, '');
  return API_BASE ? `${API_BASE}/${clean}` : `/${clean}`;
}

export function mapApiFacultyList(items, departmentSlug, staticFaculty = []) {
  if (!items?.length) return null;

  return items.map((row) => {
    const staticMatch = staticFaculty.find(
      (f) => f.profileSlug === row.profile_slug || f.id === row.legacy_id
    );

    return {
      id: row.id ?? staticMatch?.id ?? `api-${row.profile_slug}`,
      name: row.name,
      position: row.position,
      rank: row.rank ?? staticMatch?.rank,
      photo: resolveMediaUrl(row.photo) || staticMatch?.photo,
      specialization: row.specialization ?? staticMatch?.specialization,
      researchInterests: row.research_interests ?? staticMatch?.researchInterests,
      email: row.email ?? staticMatch?.email,
      profileSlug: row.profile_slug,
      departmentSlug,
    };
  });
}

/** Published CMS faculty first; keep static placeholders that are not overridden by slug. */
export function mergeFacultyLists(apiFaculty, staticFaculty = []) {
  if (!apiFaculty?.length) return staticFaculty;

  const apiSlugs = new Set(apiFaculty.map((f) => f.profileSlug).filter(Boolean));
  const staticOnly = staticFaculty.filter(
    (f) => !f.profileSlug || !apiSlugs.has(f.profileSlug)
  );

  return [...apiFaculty, ...staticOnly];
}

export function mapApiFacultyProfile(data, departmentSlug, staticFaculty = null) {
  if (!data) return null;

  const awards = (data.awards ?? []).map((a) =>
    typeof a === 'string' ? a : [a.title, a.award_year].filter(Boolean).join(' — ')
  );

  return {
    id: data.id ?? staticFaculty?.id,
    name: data.name,
    position: data.position,
    rank: data.rank ?? staticFaculty?.rank,
    photo: resolveMediaUrl(data.photo) || staticFaculty?.photo,
    specialization: data.specialization ?? staticFaculty?.specialization,
    researchInterests: data.research_interests ?? staticFaculty?.researchInterests,
    biography: data.biography ?? staticFaculty?.biography,
    teachingPhilosophy: data.teaching_philosophy ?? staticFaculty?.teachingPhilosophy,
    email: data.email ?? staticFaculty?.email,
    phone: data.phone ?? staticFaculty?.phone,
    office: data.office ?? staticFaculty?.office,
    officeHours: data.office_hours ?? staticFaculty?.officeHours,
    languages: data.languages?.length ? data.languages : staticFaculty?.languages,
    education: data.education?.length ? data.education : staticFaculty?.education ?? [],
    professionalExperience: data.professional_experience?.length
      ? data.professional_experience
      : staticFaculty?.professionalExperience ?? [],
    publications: data.publications?.length ? data.publications : staticFaculty?.publications ?? [],
    awards: awards.length ? awards : staticFaculty?.awards ?? [],
    coursesTaught: data.courses_taught?.length ? data.courses_taught : staticFaculty?.coursesTaught ?? [],
    currentProjects: data.current_projects?.length
      ? data.current_projects
      : staticFaculty?.currentProjects ?? [],
    profileSlug: data.profile_slug,
    departmentSlug,
    linkedin: data.linkedin ?? staticFaculty?.linkedin,
    scholar: data.scholar ?? staticFaculty?.scholar,
    researchgate: data.researchgate ?? staticFaculty?.researchgate,
    website: data.website ?? staticFaculty?.website,
  };
}

export function mapApiNewsList(items, departmentSlug) {
  if (!items?.length) return null;

  return items.map((row) => ({
    id: row.id ?? row.slug,
    title: row.title,
    summary: row.summary,
    category: row.category,
    date: formatDisplayDate(row.date),
    image: resolveMediaUrl(row.image),
    link: row.link || `/academics/undergraduate/${departmentSlug}#news`,
  }));
}

export function mapApiEventsList(items) {
  if (!items?.length) return null;

  return items.map((row) => ({
    title: row.title,
    date: formatDisplayDate(row.date),
    venue: row.venue,
    description: row.description,
    type: row.type,
    banner: resolveMediaUrl(row.banner),
  }));
}

function formatDisplayDate(value) {
  if (!value) return '';
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return String(value);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function mergeDepartmentWithApi(staticDepartment, bundle) {
  if (!staticDepartment || !bundle) return staticDepartment;

  const apiFaculty = mapApiFacultyList(
    bundle.faculty?.data,
    staticDepartment.slug,
    staticDepartment.faculty
  );
  const faculty = mergeFacultyLists(apiFaculty, staticDepartment.faculty);
  const news = mapApiNewsList(bundle.news?.data, staticDepartment.slug);
  const events = mapApiEventsList(bundle.events?.data);

  return {
    ...staticDepartment,
    faculty,
    news: news ?? staticDepartment.news,
    events: events ?? staticDepartment.events,
    _apiPowered: Boolean(apiFaculty?.length || news?.length || events?.length),
  };
}

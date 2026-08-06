import { UNDERGRADUATE_DEPARTMENTS } from './departments';
import { newsItems as homeNews } from './home';

function parseLooseDate(value) {
  const t = Date.parse(value);
  return Number.isNaN(t) ? 0 : t;
}

/**
 * Aggregate university + departmental news for the global News & Events page.
 */
export function getAggregatedNews() {
  const departmentNews = UNDERGRADUATE_DEPARTMENTS.flatMap((dept) =>
    (dept.news || []).map((item) => ({
      ...item,
      id: item.id || `${dept.slug}-${item.title}`,
      category: item.category || 'Departmental',
      department: dept.shortTitle || dept.title,
      departmentSlug: dept.slug,
      link: item.link && item.link !== '#' ? item.link : `/academics/undergraduate/${dept.slug}#news`,
      image:
        item.image
        || dept.cardImage
        || dept.bannerImage
        || 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
    })),
  );

  const campusNews = (homeNews || []).map((item) => ({
    ...item,
    department: item.department || 'KDU Global',
  }));

  return [...campusNews, ...departmentNews].sort(
    (a, b) => parseLooseDate(b.date) - parseLooseDate(a.date),
  );
}

/**
 * Aggregate university + departmental events.
 */
export function getAggregatedEvents() {
  const campusEvents = [
    {
      banner: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
      title: 'Annual University Open Day',
      date: 'July 15, 2026',
      venue: 'Main Campus',
      description: 'Tour our campus, meet faculty, and learn about programs and scholarships.',
      type: 'Open Day',
      department: 'KDU Global',
    },
    {
      banner: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
      title: 'International Research Symposium',
      date: 'September 20, 2026',
      venue: 'Conference Center',
      description: 'Showcasing cutting-edge research from across all departments and partner institutions.',
      type: 'Conference',
      department: 'KDU Global',
    },
  ];

  const departmentEvents = UNDERGRADUATE_DEPARTMENTS.flatMap((dept) =>
    (dept.events || []).map((event) => ({
      ...event,
      department: dept.shortTitle || dept.title,
      departmentSlug: dept.slug,
      banner:
        event.banner
        || dept.cardImage
        || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    })),
  );

  return [...campusEvents, ...departmentEvents].sort(
    (a, b) => parseLooseDate(a.date) - parseLooseDate(b.date),
  );
}

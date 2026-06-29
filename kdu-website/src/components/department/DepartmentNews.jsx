import { useState, useMemo } from 'react';
import SectionTitle from '../common/SectionTitle';
import NewsCard from '../common/NewsCard';
import '../../styles/components/DepartmentNews.css';

const ITEMS_PER_PAGE = 3;

export default function DepartmentNews({ news, showTitle = true }) {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const query = search.toLowerCase();
    return news.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.summary.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
    );
  }, [news, search]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  return (
    <section className="section department-news" id="news">
      <div className="container">
        {showTitle && (
          <SectionTitle
            subtitle="Latest Updates"
            title="Department News"
            description="Stay informed about the latest developments, achievements, and announcements."
          />
        )}

        <div className="department-news__search">
          <label htmlFor="news-search" className="sr-only">Search news</label>
          <input
            id="news-search"
            type="search"
            placeholder="Search news by title, category, or keyword..."
            value={search}
            onChange={handleSearch}
          />
        </div>

        <div className="grid grid--3">
          {paginated.map((item) => (
            <NewsCard key={item.id} {...item} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="department-news__empty">No news articles found matching your search.</p>
        )}

        {totalPages > 1 && (
          <nav className="department-news__pagination" aria-label="News pagination">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              aria-label="Previous page"
            >
              Previous
            </button>
            <span>Page {page} of {totalPages}</span>
            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              aria-label="Next page"
            >
              Next
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}

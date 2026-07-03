import { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import '../../styles/components/DeptNewsHighlights.css';

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80';

function buildSlides(news = [], events = []) {
  const newsSlides = (news || []).slice(0, 5).map((item) => ({
    id: item.id || item.title,
    kind: 'news',
    image: item.image || FALLBACK_IMAGE,
    category: item.category || 'News',
    date: item.date,
    title: item.title,
    summary: item.summary,
    link: item.link || '/news-events',
  }));

  const eventSlides = (events || []).slice(0, 2).map((item) => ({
    id: `event-${item.title}`,
    kind: 'event',
    image: item.banner || FALLBACK_IMAGE,
    category: item.type || 'Event',
    date: item.date,
    title: item.title,
    summary: item.description || `${item.venue}${item.type ? ` · ${item.type}` : ''}`,
    link: '/news-events',
  }));

  return [...newsSlides, ...eventSlides].slice(0, 6);
}

export default function DeptNewsHighlights({ news, events }) {
  const slides = useMemo(() => buildSlides(news, events), [news, events]);
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prev = () => {
    setCurrent((p) => (p - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    setCurrent(0);
  }, [slides.length]);

  useEffect(() => {
    if (slides.length <= 1) return undefined;
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next, slides.length]);

  if (!slides.length) {
    return (
      <aside className="dept-why-highlights" aria-label="Latest news and highlights">
        <header className="dept-why-highlights__header">
          <span className="dept-why-highlights__eyebrow">Department updates</span>
          <h3 className="dept-why-highlights__title">Latest News &amp; Highlights</h3>
        </header>
        <div className="dept-why-highlights__empty">
          <p>News and highlights for this programme will appear here as they are published.</p>
          <Link to="/news-events" className="dept-link-arrow">View university news</Link>
        </div>
      </aside>
    );
  }

  const slide = slides[current];

  return (
    <aside className="dept-why-highlights" aria-label="Latest news and highlights">
      <header className="dept-why-highlights__header">
        <span className="dept-why-highlights__eyebrow">Department updates</span>
        <h3 className="dept-why-highlights__title">Latest News &amp; Highlights</h3>
      </header>

      <div
        className="dept-why-highlights__slider"
        role="region"
        aria-roledescription="carousel"
        aria-label="News and highlights slideshow"
      >
        <AnimatePresence mode="wait">
          <motion.article
            key={slide.id}
            className="dept-why-highlights__slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55 }}
          >
            <img src={slide.image} alt="" className="dept-why-highlights__image" loading="lazy" />
            <div className="dept-why-highlights__overlay" />
            <div className="dept-why-highlights__content">
              <span className="dept-why-highlights__meta">
                {slide.category}
                {slide.date ? ` · ${slide.date}` : ''}
              </span>
              <h4>{slide.title}</h4>
              {slide.summary && <p>{slide.summary}</p>}
              <Link to={slide.link} className="dept-why-highlights__link">
                {slide.kind === 'event' ? 'View events' : 'Read article'}
              </Link>
            </div>
          </motion.article>
        </AnimatePresence>

        {slides.length > 1 && (
          <>
            <button
              type="button"
              className="dept-why-highlights__arrow dept-why-highlights__arrow--prev"
              onClick={prev}
              aria-label="Previous highlight"
            >
              &#8249;
            </button>
            <button
              type="button"
              className="dept-why-highlights__arrow dept-why-highlights__arrow--next"
              onClick={next}
              aria-label="Next highlight"
            >
              &#8250;
            </button>
            <div className="dept-why-highlights__dots" role="tablist" aria-label="Highlight slides">
              {slides.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={index === current}
                  aria-label={`Highlight ${index + 1}: ${item.title}`}
                  className={`dept-why-highlights__dot ${index === current ? 'dept-why-highlights__dot--active' : ''}`}
                  onClick={() => setCurrent(index)}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <footer className="dept-why-highlights__footer">
        <Link to="/news-events" className="dept-link-arrow">View all news &amp; events</Link>
      </footer>
    </aside>
  );
}

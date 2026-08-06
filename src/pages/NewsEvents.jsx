import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import NewsCard from '../components/common/NewsCard';
import EventCard from '../components/department/EventCard';
import { getAggregatedEvents, getAggregatedNews } from '../data/aggregateNewsEvents';
import '../styles/pages/NewsEvents.css';

export default function NewsEvents() {
  const news = getAggregatedNews();
  const events = getAggregatedEvents();

  return (
    <>
      <header className="page-header">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1>News & Events</h1>
            <p>
              Campus headlines and departmental news from across KDU Global — Smart Computing,
              AI, Business, Hotel Management, EAP, KAP, and more.
            </p>
          </motion.div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <SectionTitle
            subtitle="Campus & departments"
            title="Latest news"
            description="Updates from the university and every academic department."
          />
          <div className="news-events__grid grid grid--3">
            {news.map((item) => (
              <NewsCard
                key={item.id || item.title}
                image={item.image}
                date={item.date}
                category={
                  item.department
                    ? `${item.department}${item.category ? ` · ${item.category}` : ''}`
                    : item.category
                }
                title={item.title}
                summary={item.summary}
                link={item.link || '/news-events'}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionTitle
            subtitle="Calendar"
            title="Upcoming events"
            description="Open days, workshops, conferences, and departmental gatherings."
          />
          <div className="news-events__events grid grid--2">
            {events.map((event) => (
              <EventCard key={`${event.department}-${event.title}`} event={event} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import NewsCard from '../components/common/NewsCard';
import EventCard from '../components/department/EventCard';
import { newsItems } from '../data/home';
import '../styles/pages/NewsEvents.css';

const events = [
  {
    banner: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    title: 'Annual University Open Day',
    date: 'July 15, 2026',
    venue: 'Main Campus',
    description: 'Tour our campus, meet faculty, and learn about programs and scholarships.',
    type: 'Open Day',
  },
  {
    banner: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
    title: 'International Research Symposium',
    date: 'September 20, 2026',
    venue: 'Conference Center',
    description: 'Showcasing cutting-edge research from across all departments and partner institutions.',
    type: 'Conference',
  },
  {
    banner: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
    title: 'Global Alumni Networking Event',
    date: 'August 8, 2026',
    venue: 'Alumni Hall',
    description: 'Connect with KDU Global alumni working in leading organizations worldwide.',
    type: 'Networking',
  },
  {
    banner: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    title: 'Student Innovation Challenge',
    date: 'October 5, 2026',
    venue: 'Innovation Lab',
    description: 'Interdisciplinary competition challenging students to solve real-world problems.',
    type: 'Competition',
  },
];

const extendedNews = [
  ...newsItems,
  {
    id: 'n4',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80',
    date: 'May 10, 2026',
    category: 'Partnership',
    title: 'New Exchange Agreement with European University',
    summary: 'Students can now study abroad at our newest partner institution in Germany.',
    link: '#',
  },
  {
    id: 'n5',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80',
    date: 'April 28, 2026',
    category: 'Faculty',
    title: 'Distinguished Professor Joins Smart Computing Faculty',
    summary: 'Renowned AI researcher brings decades of industry and academic experience to KDU Global.',
    link: '#',
  },
  {
    id: 'n6',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
    date: 'April 15, 2026',
    category: 'Community',
    title: 'Spring Cultural Festival Celebrates Diversity',
    summary: 'Students showcased traditions, cuisines, and performances from over 20 countries.',
    link: '#',
  },
];

export default function NewsEvents() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1>News & Events</h1>
            <p>
              Stay up to date with the latest news, events, and achievements from
              the KDU Global community.
            </p>
          </motion.div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <SectionTitle subtitle="Latest" title="University News" />
          <div className="grid grid--3">
            {extendedNews.map((item) => (
              <NewsCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionTitle subtitle="Calendar" title="Upcoming Events" />
          <div className="grid grid--2">
            {events.map((event) => (
              <EventCard key={event.title} {...event} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

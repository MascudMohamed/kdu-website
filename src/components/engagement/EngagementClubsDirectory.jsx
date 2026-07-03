import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CLUB_CATEGORIES, getClubs, getFeaturedClubs } from '../../data/engagement/clubs';
import '../../styles/components/EngagementClubs.css';

function ClubCard({ club, index = 0 }) {
  return (
    <motion.article
      className="engagement-club-card"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-24px' }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
    >
      <Link to={`/engagement/clubs/${club.slug}`} className="engagement-club-card__image-wrap">
        <img src={club.image} alt="" loading="lazy" />
        <span className="engagement-club-card__category">{club.category}</span>
      </Link>
      <div className="engagement-club-card__body">
        <h3>
          <Link to={`/engagement/clubs/${club.slug}`}>{club.name}</Link>
        </h3>
        <p className="engagement-club-card__tagline">{club.tagline}</p>
        <p className="engagement-club-card__desc">{club.description}</p>
        <ul className="engagement-club-card__meta">
          <li><strong>{club.members}</strong> members</li>
          <li>{club.meetingDay} · {club.meetingTime}</li>
        </ul>
        {club.openToJoin && (
          <span className="engagement-club-card__badge">Open to join</span>
        )}
      </div>
    </motion.article>
  );
}

export default function EngagementClubsDirectory() {
  const [category, setCategory] = useState('All');
  const featured = useMemo(() => getFeaturedClubs(), []);
  const clubs = useMemo(() => getClubs(category), [category]);

  return (
    <div className="engagement-clubs">
      <div className="engagement-clubs__notice" role="status">
        <strong>Campus portal coming soon.</strong>
        {' '}Club leaders will manage their societies online — updates will appear here automatically once published.
      </div>

      {featured.length > 0 && category === 'All' && (
        <section className="engagement-clubs__featured" aria-labelledby="featured-clubs-title">
          <h2 id="featured-clubs-title">Featured societies</h2>
          <div className="engagement-clubs__featured-grid">
            {featured.map((club, i) => (
              <ClubCard key={club.id} club={club} index={i} />
            ))}
          </div>
        </section>
      )}

      <section className="engagement-clubs__directory" aria-labelledby="all-clubs-title">
        <div className="engagement-clubs__directory-header">
          <h2 id="all-clubs-title">All clubs</h2>
          <div className="engagement-clubs__filters" role="tablist" aria-label="Filter clubs by category">
            {CLUB_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={category === cat}
                className={`engagement-clubs__filter ${category === cat ? 'engagement-clubs__filter--active' : ''}`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {clubs.length > 0 ? (
          <div className="engagement-clubs__grid">
            {clubs.map((club, i) => (
              <ClubCard key={club.id} club={club} index={i} />
            ))}
          </div>
        ) : (
          <p className="engagement-clubs__empty">No clubs in this category yet.</p>
        )}
      </section>
    </div>
  );
}

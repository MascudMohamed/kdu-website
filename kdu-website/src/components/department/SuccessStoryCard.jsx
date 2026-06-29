import { motion } from 'framer-motion';
import '../../styles/components/SuccessStoryCard.css';

export default function SuccessStoryCard({ story }) {
  return (
    <motion.article
      className="success-story"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="success-story__header">
        <img src={story.photo} alt={story.name} className="success-story__photo" loading="lazy" />
        <div>
          <h3>{story.name}</h3>
          <span className="success-story__country">{story.country}</span>
          <span className="success-story__role">{story.position} · {story.employer}</span>
        </div>
      </div>
      <blockquote className="success-story__quote">&ldquo;{story.quote}&rdquo;</blockquote>
      {story.companyLogo && (
        <div className="success-story__logo">
          <img src={story.companyLogo} alt={`${story.employer} logo`} loading="lazy" />
        </div>
      )}
    </motion.article>
  );
}

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import '../../styles/components/ProgramCard.css';

export default function ProgramCard({ program, index = 0 }) {
  return (
    <motion.article
      className="program-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
    >
      <Link to={program.path} className="program-card__image-wrap">
        <img src={program.image} alt="" loading="lazy" />
        <span className="program-card__degree">{program.degree}</span>
      </Link>
      <div className="program-card__body">
        <h3 className="program-card__title">
          <Link to={program.path}>{program.title}</Link>
        </h3>
        <ul className="program-card__meta">
          <li><strong>Duration:</strong> {program.duration}</li>
          <li><strong>Language:</strong> {program.language}</li>
        </ul>
        <p className="program-card__desc">{program.description}</p>
        <Button to={program.path} variant="outline" size="sm">
          Learn More
        </Button>
      </div>
    </motion.article>
  );
}

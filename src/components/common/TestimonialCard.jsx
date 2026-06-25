import { motion } from 'framer-motion';
import '../../styles/components/TestimonialCard.css';

export default function TestimonialCard({ photo, name, role, program, quote }) {
  return (
    <motion.blockquote
      className="testimonial-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="testimonial-card__quote">&ldquo;{quote}&rdquo;</p>
      <footer className="testimonial-card__footer">
        <img src={photo} alt={name} className="testimonial-card__photo" loading="lazy" />
        <div>
          <cite className="testimonial-card__name">{name}</cite>
          <span className="testimonial-card__role">{role}</span>
          {program && <span className="testimonial-card__program">{program}</span>}
        </div>
      </footer>
    </motion.blockquote>
  );
}

import { motion } from 'framer-motion';
import ImageSlider from '../common/ImageSlider';
import Button from '../common/Button';
import { APPLICATION_FORM_URL } from '../../constants/links';
import '../../styles/components/HeroSection.css';

export default function HeroSection({ slides, headline, subtitle, description }) {
  return (
    <section className="hero" aria-label="Hero">
      <ImageSlider slides={slides} />
      <div className="hero__content">
        <div className="container">
          <motion.div
            className="hero__text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {subtitle && <span className="hero__subtitle">{subtitle}</span>}
            <h1 className="hero__headline">{headline}</h1>
            {description && <p className="hero__description">{description}</p>}
            <div className="hero__actions">
              <Button href={APPLICATION_FORM_URL} variant="primary" size="lg">
                Apply Now
              </Button>
              <Button to="/academics" variant="white" size="lg">
                Explore Programs
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

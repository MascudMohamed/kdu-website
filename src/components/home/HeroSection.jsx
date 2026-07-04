import { motion } from 'framer-motion';
import ImageSlider from '../common/ImageSlider';
import Button from '../common/Button';
import { APPLICATION_FORM_URL } from '../../constants/links';
import '../../styles/components/HeroSection.css';

export default function HeroSection({
  slides,
  headline,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
}) {
  const primary = primaryCta ?? { label: 'Apply Now', href: APPLICATION_FORM_URL };
  const secondary = secondaryCta ?? { label: 'Explore Programs', to: '/academics' };

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
              {primary.href ? (
                <Button href={primary.href} variant="primary" size="lg">
                  {primary.label}
                </Button>
              ) : (
                <Button to={primary.to} variant="primary" size="lg">
                  {primary.label}
                </Button>
              )}
              {secondary && (
                secondary.href ? (
                  <Button href={secondary.href} variant="white" size="lg">
                    {secondary.label}
                  </Button>
                ) : (
                  <Button to={secondary.to} variant="white" size="lg">
                    {secondary.label}
                  </Button>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

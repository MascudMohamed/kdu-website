import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import CampusLinks from '../components/common/CampusLinks';
import ProgramCard from '../components/academics/ProgramCard';
import SectionTitle from '../components/common/SectionTitle';
import {
  UNDERGRADUATE_COURSES,
  EDUCATION_CENTRE_PROGRAMMES,
} from '../data/academics/programs';
import '../styles/pages/Academics.css';

export default function Academics() {
  return (
    <div className="academics-page">
      <section className="academics-hero">
        <div className="academics-hero__bg" />
        <div className="container academics-hero__content">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="academics-hero__eyebrow">Kyungdong University Global Campus</span>
            <h1>Academics</h1>
            <p>
              Undergraduate courses, graduate study, and the K-Global Education Centre —
              a complete academic pathway for international learners.
            </p>
            <div className="academics-hero__actions">
              <Button to="/academics#undergraduate" variant="primary" size="lg">
                Undergraduate Courses
              </Button>
              <Button to="/academics/graduate" variant="white" size="lg">
                Graduate
              </Button>
              <Button to="/academics/education-centre" variant="white" size="lg">
                Education Centre
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section" id="undergraduate">
        <div className="container">
          <SectionTitle
            subtitle="Undergraduate Courses"
            title="Bachelor’s degree programmes"
            description="Industry-aligned undergraduate degrees taught in English at KDU Global Campus."
          />
          <div className="academics-programs__grid">
            {UNDERGRADUATE_COURSES.map((program, i) => (
              <ProgramCard key={program.slug} program={program} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt academics-graduate-teaser" id="graduate">
        <div className="container">
          <div className="academics-graduate-teaser__inner">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionTitle
                subtitle="Graduate"
                title="Graduate Courses"
                description="K-Global Graduate School of Business and Technology Convergence — master’s programmes in Artificial Intelligence & Data Science, International Business, and Hospitality & Tourism."
                align="left"
              />
              <Button to="/academics/graduate" variant="secondary" size="lg">
                Explore Graduate Courses
              </Button>
            </motion.div>
            <motion.div
              className="academics-graduate-teaser__visual"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              aria-hidden="true"
            >
              <div className="academics-graduate-teaser__icon">🎓</div>
              <p>Research · Leadership · Innovation</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section" id="education-centre">
        <div className="container">
          <SectionTitle
            subtitle="K-Global Education Centre"
            title="Language pathways & specialised training"
            description="English and Korean for Academic Purposes, plus AI Training, K-Beauty, and Golf Training — preparing learners for study and professional growth."
          />
          <div className="academics-programs__grid">
            {EDUCATION_CENTRE_PROGRAMMES.map((program, i) => (
              <ProgramCard key={program.slug} program={program} index={i} />
            ))}
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <Link to="/academics/education-centre" className="academics-cta__link">
              Education Centre overview →
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="campuses">
        <div className="container">
          <CampusLinks
            subtitle="Kyungdong University"
            title="Our Campuses"
            lead="Global Campus is this website. Medical and Metropol campuses are available through the official Korean university portal."
          />
        </div>
      </section>

      <section className="section academics-cta">
        <div className="container">
          <div className="academics-cta__box">
            <h2>Need guidance choosing a programme?</h2>
            <p>Our academic advisors help you find the right pathway for your goals and background.</p>
            <div className="academics-cta__links">
              <Button to="/contact" variant="primary" size="lg">Speak with an Advisor</Button>
              <Link to="/admissions" className="academics-cta__link">View admission requirements →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

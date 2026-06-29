import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import ProgramCard from '../components/academics/ProgramCard';
import SectionTitle from '../components/common/SectionTitle';
import { UNDERGRADUATE_PROGRAMS } from '../data/academics/programs';
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
            <h1>Academic Excellence for Global Leaders</h1>
            <p>
              Explore world-class undergraduate and graduate programs designed to prepare
              students for successful careers and lifelong learning.
            </p>
            <div className="academics-hero__actions">
              <Button to="/academics#undergraduate" variant="primary" size="lg">
                Explore Undergraduate Programs
              </Button>
              <Button to="/academics/graduate" variant="white" size="lg">
                Explore Graduate Programs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section" id="undergraduate">
        <div className="container">
          <SectionTitle
            subtitle="Undergraduate"
            title="Undergraduate Programs"
            description="Rigorous, industry-aligned bachelor's and pathway programs taught in English for a global cohort of students."
          />
          <div className="academics-programs__grid">
            {UNDERGRADUATE_PROGRAMS.map((program, i) => (
              <ProgramCard key={program.slug} program={program} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt academics-graduate-teaser">
        <div className="container">
          <div className="academics-graduate-teaser__inner">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionTitle
                subtitle="Graduate"
                title="Graduate Programs"
                description="Advanced master's and doctoral pathways are being developed in partnership with international institutions. Be among the first to know when applications open."
                align="left"
              />
              <Button to="/academics/graduate" variant="secondary" size="lg">
                Explore Graduate Programs
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

      <section className="section academics-cta">
        <div className="container">
          <div className="academics-cta__box">
            <h2>Need guidance choosing a program?</h2>
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

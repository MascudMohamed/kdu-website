import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Breadcrumb from '../components/common/Breadcrumb';
import Button from '../components/common/Button';
import SectionTitle from '../components/common/SectionTitle';
import ProgramCard from '../components/academics/ProgramCard';
import {
  EDUCATION_CENTRE_OVERVIEW,
  EDUCATION_CENTRE_PROGRAMMES,
  getEducationCentreProgramme,
} from '../data/academics/programs';
import '../styles/pages/Academics.css';
import '../styles/pages/EducationCentre.css';

export function EducationCentreHub() {
  return (
    <div className="education-centre-page">
      <header className="education-centre-hero">
        <div className="container">
          <Breadcrumb
            items={[
              { label: 'Home', path: '/' },
              { label: 'Academics', path: '/academics' },
              { label: 'K-Global Education Centre' },
            ]}
          />
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <p className="education-centre-hero__eyebrow">K-Global Education Centre</p>
            <h1>{EDUCATION_CENTRE_OVERVIEW.title}</h1>
            <p className="education-centre-hero__lead">{EDUCATION_CENTRE_OVERVIEW.description}</p>
          </motion.div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <SectionTitle
            subtitle="Programmes"
            title="What we offer"
            description="Language pathways for academic readiness and specialised training programmes that reflect Korea’s strengths in technology, beauty, and sport."
          />
          <div className="academics-programs__grid">
            {EDUCATION_CENTRE_PROGRAMMES.map((program, i) => (
              <ProgramCard key={program.slug} program={program} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container education-centre-cta">
          <h2>Ready to begin?</h2>
          <p>Speak with admissions about language pathways and specialised training options.</p>
          <div className="education-centre-cta__actions">
            <Button to="/admissions" variant="primary" size="lg">Admissions</Button>
            <Button to="/contact" variant="secondary" size="lg">Contact us</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

const TRAINING_HIGHLIGHTS = {
  'ai-training': [
    'Foundations of machine learning and applied AI tools',
    'Hands-on projects with real datasets and use cases',
    'Suitable for students and working professionals',
    'Pathways toward further study in computing and AI',
  ],
  'k-beauty': [
    'Korean beauty culture, trends, and industry landscape',
    'Product knowledge and guest-experience fundamentals',
    'Applied workshops with international cohort learning',
    'Gateway to hospitality, wellness, and lifestyle careers',
  ],
  'golf-training': [
    'Technique development with professional coaching focus',
    'Fitness, performance, and course management awareness',
    'Learning in Korea’s established golf education environment',
    'Options for recreational excellence and sport pathways',
  ],
};

export function EducationCentreProgramme() {
  const { slug } = useParams();
  const programme = getEducationCentreProgramme(slug);

  if (!programme) {
    return <Navigate to="/academics/education-centre" replace />;
  }

  // EAP / KAP keep full department hubs
  if (
    programme.slug === 'english-for-academic-purposes'
    || programme.slug === 'korean-for-academic-purposes'
  ) {
    return <Navigate to={programme.path} replace />;
  }

  const highlights = TRAINING_HIGHLIGHTS[programme.slug] || [];

  return (
    <div className="education-centre-page">
      <header className="education-centre-hero education-centre-hero--programme">
        <div className="container">
          <Breadcrumb
            items={[
              { label: 'Home', path: '/' },
              { label: 'Academics', path: '/academics' },
              { label: 'Education Centre', path: '/academics/education-centre' },
              { label: programme.shortTitle },
            ]}
          />
          <div className="education-centre-programme">
            <div>
              <p className="education-centre-hero__eyebrow">{programme.category}</p>
              <h1>{programme.title}</h1>
              <p className="education-centre-hero__lead">{programme.description}</p>
              <ul className="education-centre-meta">
                <li><strong>Duration</strong> {programme.duration}</li>
                <li><strong>Language</strong> {programme.language}</li>
              </ul>
              <div className="education-centre-cta__actions">
                <Button to="/admissions" variant="primary" size="lg">Apply / Enquire</Button>
                <Button to="/academics/education-centre" variant="secondary" size="lg">
                  All Education Centre programmes
                </Button>
              </div>
            </div>
            <img src={programme.image} alt="" className="education-centre-programme__image" />
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <SectionTitle subtitle="Programme focus" title="What you will gain" align="left" />
          <ul className="education-centre-highlights">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="education-centre-note">
            Detailed schedules and intake dates are confirmed with Admissions. Contact us for the latest cohort information.
          </p>
          <Link to="/contact" className="academics-cta__link">Contact Admissions →</Link>
        </div>
      </section>
    </div>
  );
}

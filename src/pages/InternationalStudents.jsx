import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import '../styles/pages/InternationalStudents.css';

const services = [
  { icon: '🛂', title: 'Visa & Immigration', description: 'Comprehensive support for student visa applications, renewals, and compliance guidance.' },
  { icon: '🏠', title: 'Housing & Accommodation', description: 'On-campus residence halls and assistance finding off-campus housing options.' },
  { icon: '🌐', title: 'Orientation Programs', description: 'Multi-day orientation covering campus life, academic expectations, and cultural adaptation.' },
  { icon: '📚', title: 'Academic Support', description: 'Tutoring, writing centers, and language support services for international students.' },
  { icon: '💼', title: 'Career Services', description: 'Work authorization guidance, internship placement, and career counseling.' },
  { icon: '🤝', title: 'Student Organizations', description: 'International student associations, cultural clubs, and mentorship programs.' },
];

export default function InternationalStudents() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1>International Students</h1>
            <p>
              Welcome to KDU Global. We are committed to making your transition to university
              life as smooth and enriching as possible.
            </p>
          </motion.div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="intl-hero__grid">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <SectionTitle
                subtitle="Welcome"
                title="Your Home Away From Home"
                align="left"
              />
              <p>
                With students from over 30 countries, KDU Global is a vibrant multicultural
                community. Our International Student Services office provides end-to-end support
                from your first inquiry through graduation and beyond.
              </p>
              <p>
                Whether you need help with visa documentation, finding accommodation, or
                adapting to a new academic culture, our dedicated team is here for you every
                step of the way.
              </p>
            </motion.div>
            <motion.div
              className="intl-hero__image"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
                alt="International students"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionTitle
            subtitle="Support"
            title="International Student Services"
            description="Comprehensive support designed to help you thrive academically, socially, and personally."
          />
          <div className="grid grid--3">
            {services.map((service) => (
              <motion.div
                key={service.title}
                className="intl-service"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="intl-service__icon" aria-hidden="true">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle subtitle="Steps" title="How to Apply as an International Student" />
          <div className="intl-steps">
            {[
              'Submit your online application with required documents',
              'Receive admission decision and acceptance letter',
              'Apply for student visa with our guidance',
              'Arrange housing and travel plans',
              'Attend international student orientation',
              'Begin your academic journey at KDU Global',
            ].map((step, index) => (
              <div key={index} className="intl-steps__item">
                <span className="intl-steps__number">{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
            <Button to="/admissions" variant="primary" size="lg">
              Start Application
            </Button>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionTitle
            subtitle="Community"
            title="A Global Family"
            description="Join a diverse community where every culture is celebrated and every voice matters."
            light
          />
          <div className="grid grid--4 intl-stats">
            {[
              { value: '30+', label: 'Countries' },
              { value: '2,000+', label: 'International Students' },
              { value: '50+', label: 'Student Nationalities' },
              { value: '95%', label: 'Satisfaction Rate' },
            ].map((stat) => (
              <div key={stat.label} className="intl-stats__item">
                <span className="intl-stats__value">{stat.value}</span>
                <span className="intl-stats__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import '../styles/pages/GraduatePrograms.css';

export default function GraduatePrograms() {
  return (
    <div className="graduate-page">
      <section className="graduate-hero">
        <div className="container">
          <motion.div
            className="graduate-hero__content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <nav className="graduate-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/academics">Academics</Link>
              <span>/</span>
              <span aria-current="page">Graduate Programs</span>
            </nav>
            <h1>Graduate Programs</h1>
            <p>
              Kyungdong University Global Campus is developing advanced graduate pathways
              in partnership with leading international institutions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section graduate-coming">
        <div className="container">
          <motion.div
            className="graduate-coming__card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="graduate-coming__illustration" aria-hidden="true">
              <div className="graduate-coming__orb graduate-coming__orb--1" />
              <div className="graduate-coming__orb graduate-coming__orb--2" />
              <div className="graduate-coming__icon">🎓</div>
            </div>
            <h2>Graduate programs will be announced soon</h2>
            <p>
              We are preparing master's and doctoral programs that combine rigorous research,
              global industry engagement, and the academic excellence Kyungdong University is
              known for. Register your interest to receive updates when applications open.
            </p>
            <div className="graduate-coming__actions">
              <Button to="/contact" variant="primary" size="lg">
                Register Your Interest
              </Button>
              <Button to="/academics" variant="outline" size="lg">
                Explore Undergraduate Programs
              </Button>
            </div>
          </motion.div>

          <div className="graduate-features">
            {[
              { icon: '🔬', title: 'Research Excellence', desc: 'Cutting-edge labs and international research partnerships' },
              { icon: '🌍', title: 'Global Network', desc: 'Collaborations with universities across Asia, Europe, and the Americas' },
              { icon: '💼', title: 'Career Advancement', desc: 'Programs designed for leadership in academia and industry' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="graduate-feature"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="graduate-feature__icon" aria-hidden="true">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

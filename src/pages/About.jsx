import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import PartnerCard from '../components/common/PartnerCard';
import { partners } from '../data/home';
import '../styles/pages/About.css';

const coreValues = [
  { title: 'Excellence', description: 'Pursuing the highest standards in teaching, research, and student outcomes.' },
  { title: 'Innovation', description: 'Embracing new ideas, technologies, and approaches to education and research.' },
  { title: 'Integrity', description: 'Acting with honesty, transparency, and ethical responsibility in all endeavors.' },
  { title: 'Diversity', description: 'Celebrating and leveraging the richness of our multicultural community.' },
  { title: 'Global Citizenship', description: 'Preparing students to contribute positively to an interconnected world.' },
  { title: 'Collaboration', description: 'Building partnerships that amplify our impact and extend our reach.' },
];

export default function About() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1>About KDU Global</h1>
            <p>
              Discover our mission, values, and commitment to shaping the next generation
              of global leaders through world-class education.
            </p>
          </motion.div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="about-welcome__grid">
            <motion.div
              className="about-welcome__portrait"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
                alt="University President"
                loading="lazy"
              />
              <div>
                <strong>Dr. Michael Anderson</strong>
                <span>President, KDU Global University</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionTitle subtitle="Welcome" title="President's Message" align="left" />
              <div className="about-welcome__message">
                <p>
                  It is my great privilege to welcome you to KDU Global University. Our institution
                  was founded on the belief that education has the power to transform lives and
                  bridge cultures across the globe.
                </p>
                <p>
                  In an era of unprecedented change, we remain steadfast in our commitment to
                  academic excellence, innovation, and the development of ethical leaders who will
                  shape the future of our interconnected world.
                </p>
                <p>
                  I invite you to explore what makes KDU Global a truly exceptional place to learn,
                  grow, and discover your potential.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="about-vision-mission">
            <motion.div
              className="about-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2>Our Vision</h2>
              <p>
                To be a globally recognized leader in international higher education, renowned for
                academic excellence, innovative research, and the development of ethical leaders
                who drive positive change worldwide.
              </p>
            </motion.div>
            <motion.div
              className="about-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2>Our Mission</h2>
              <p>
                To provide transformative education that combines rigorous academics with practical
                experience, fostering critical thinking, cultural intelligence, and the skills
                needed to succeed in a global economy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle subtitle="Principles" title="Core Values" />
          <div className="grid grid--3">
            {coreValues.map((value) => (
              <motion.div
                key={value.title}
                className="about-value"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionTitle subtitle="Heritage" title="Our History" align="left" />
          <div className="about-history">
            {[
              { year: '1998', event: 'KDU Global founded with a vision for international education excellence.' },
              { year: '2005', event: 'First international partnerships established with universities in Asia and Europe.' },
              { year: '2012', event: 'Smart Computing program launched, pioneering technology education in the region.' },
              { year: '2018', event: 'Campus expansion with state-of-the-art research and learning facilities.' },
              { year: '2024', event: 'Recognized among top international universities for student satisfaction and outcomes.' },
            ].map((item) => (
              <motion.div
                key={item.year}
                className="about-history__item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="about-history__year">{item.year}</span>
                <p>{item.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-campus__grid">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <SectionTitle subtitle="Campus" title="Campus Information" align="left" />
              <p>
                Our modern campus spans 50 acres and features cutting-edge laboratories, collaborative
                learning spaces, a comprehensive library, sports facilities, and student accommodation.
              </p>
              <ul className="about-campus__list">
                <li>Smart classrooms with advanced technology integration</li>
                <li>Research laboratories and innovation centers</li>
                <li>International student residence halls</li>
                <li>Sports complex and recreation facilities</li>
                <li>Multi-faith prayer rooms and cultural centers</li>
              </ul>
            </motion.div>
            <motion.div
              className="about-campus__image"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80"
                alt="KDU Global campus"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionTitle subtitle="Quality" title="Accreditation" />
          <div className="about-accreditation">
            <p>
              KDU Global is accredited by leading international education bodies and maintains
              memberships with global university associations, ensuring our programs meet the
              highest standards of academic quality and recognition.
            </p>
            <div className="about-accreditation__badges">
              {['International Education Standards Board', 'Global University Alliance', 'Technology Education Council', 'Business School Accreditation Network'].map((badge) => (
                <span key={badge} className="about-accreditation__badge">{badge}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle subtitle="Collaboration" title="International Partnerships" />
          <div className="grid grid--4">
            {partners.map((partner) => (
              <PartnerCard key={partner.name} {...partner} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import PartnerCard from '../components/common/PartnerCard';
import CampusLinks from '../components/common/CampusLinks';
import CmsHtml from '../components/common/CmsHtml';
import PresidentMessage from '../components/about/PresidentMessage';
import { useCmsModule } from '../context/CmsContentContext';
import { plainText, resolveMediaUrl } from '../api/site/mappers';
import { partners } from '../data/home';
import '../styles/pages/About.css';

const coreValues = [
  { title: 'Excellence', description: 'Pursuing the highest standards in teaching, research, and student outcomes.' },
  { title: 'Innovation', description: 'Embracing new ideas, technologies, and approaches to education and research.' },
  { title: 'Integrity', description: 'Acting with honesty, transparency, and ethical responsibility in all endeavours.' },
  { title: 'Diversity', description: 'Celebrating and leveraging the richness of our multicultural community.' },
  { title: 'Global Citizenship', description: 'Preparing students to contribute positively to an interconnected world.' },
  { title: 'Collaboration', description: 'Building partnerships that amplify our impact and extend our reach.' },
];

const identityPillars = [
  {
    title: 'Global Campus character',
    description:
      'An English-medium international campus within Kyungdong University — connecting students from many nations in Goseong, Gangwon.',
  },
  {
    title: 'Academic distinction',
    description:
      'Undergraduate degrees, graduate study, and the K-Global Education Centre form a coherent pathway from language preparation to advanced learning.',
  },
  {
    title: 'One university, three campuses',
    description:
      'Global Campus stands alongside Medical Campus (Wonju) and Metropol Campus (Yangju) as part of one Kyungdong University family.',
  },
];

export default function About() {
  const location = useLocation();
  const { module: cms } = useCmsModule('about');
  const pageTitle = cms?.headline || 'About KDU Global';
  const pageIntro = cms?.intro
    ? plainText(cms.intro)
    : 'Discover our mission, values, and commitment to shaping the next generation of global leaders through world-class education.';
  const vision = cms?.vision || 'To be a globally recognized leader in international higher education, renowned for academic excellence, innovative research, and the development of ethical leaders who drive positive change worldwide.';
  const mission = cms?.mission || 'To provide transformative education that combines rigorous academics with practical experience, fostering critical thinking, cultural intelligence, and the skills needed to succeed in a global economy.';
  const featuredImage = resolveMediaUrl(cms?.image) || 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80';

  useEffect(() => {
    const id = location.hash?.replace('#', '');
    if (!id) return undefined;
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
    return () => window.clearTimeout(timer);
  }, [location.hash]);

  return (
    <>
      <header className="page-header" id="about-kdu-global">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="page-header__eyebrow">About Us</p>
            <h1>{pageTitle}</h1>
            <p>{pageIntro}</p>
          </motion.div>
        </div>
      </header>

      {cms?.intro && (
        <section className="section section--alt">
          <div className="container">
            <CmsHtml html={cms.intro} />
          </div>
        </section>
      )}

      <div id="president">
        <PresidentMessage subtitle="Welcome" showLeadershipHeading />
      </div>

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
              <p>{vision}</p>
            </motion.div>
            <motion.div
              className="about-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2>Our Mission</h2>
              <p>{mission}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section" id="identity">
        <div className="container">
          <SectionTitle
            subtitle="University Identity"
            title="Who we are"
            description="KDU Global’s identity is defined by academic excellence, international community, and belonging to Kyungdong University."
          />
          <div className="grid grid--3">
            {identityPillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                className="about-value"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </motion.div>
            ))}
          </div>
          <div style={{ marginTop: '2.5rem' }}>
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
        </div>
      </section>

      <section className="section section--alt" id="history">
        <div className="container">
          <SectionTitle subtitle="Heritage" title="Our History" align="left" />
          <div className="about-history">
            {[
              { year: '1998', event: 'KDU Global founded with a vision for international education excellence.' },
              { year: '2005', event: 'First international partnerships established with universities in Asia and Europe.' },
              { year: '2012', event: 'Smart Computing programme launched, pioneering technology education in the region.' },
              { year: '2018', event: 'Campus expansion with state-of-the-art research and learning facilities.' },
              { year: '2024', event: 'Recognized among leading international campuses for student experience and outcomes.' },
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
              <SectionTitle subtitle="Campus" title="Global Campus Information" align="left" />
              <p>
                KDU Global Campus in Goseong offers English-medium international programmes with
                laboratories, collaborative learning spaces, library, sports facilities, and student accommodation.
              </p>
              <ul className="about-campus__list">
                <li>Smart classrooms with advanced technology integration</li>
                <li>Research laboratories and innovation centres</li>
                <li>International student residence halls</li>
                <li>Sports complex and recreation facilities</li>
                <li>Multi-faith prayer rooms and cultural centres</li>
              </ul>
            </motion.div>
            <motion.div
              className="about-campus__image"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src={featuredImage} alt="KDU Global campus" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="campuses">
        <div className="container">
          <CampusLinks />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle subtitle="Quality" title="Accreditation" />
          <div className="about-accreditation">
            <p>
              KDU Global is accredited by leading international education bodies and maintains
              memberships with global university associations, ensuring our programmes meet the
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

      <section className="section section--alt">
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

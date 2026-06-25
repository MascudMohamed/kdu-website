import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '../components/home/HeroSection';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import NewsCard from '../components/common/NewsCard';
import TestimonialCard from '../components/common/TestimonialCard';
import StatisticsCard from '../components/home/StatisticsCard';
import PartnerCard from '../components/common/PartnerCard';
import {
  heroSlides,
  featuredPrograms,
  statistics,
  newsItems,
  testimonials,
  partners,
} from '../data/home';
import '../styles/pages/Home.css';

export default function Home() {
  return (
    <>
      <HeroSection
        slides={heroSlides}
        subtitle="Kyungdong University"
        headline="Shaping Global Leaders Through Excellence"
        description="Join a community of innovators, thinkers, and leaders at one of the world's premier international universities."
      />

      <section className="section home-intro">
        <div className="container">
          <div className="home-intro__grid">
            <motion.div
              className="home-intro__image"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80"
                alt="Students on KDU Global campus"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              className="home-intro__content"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionTitle
                subtitle="About KDU Global"
                title="A World-Class International University"
                align="left"
              />
              <p>
                KDU Global stands at the intersection of academic rigor and global innovation.
                Our diverse community of students and faculty from over 30 countries creates a
                vibrant learning environment where ideas flourish and boundaries dissolve.
              </p>
              <p>
                With cutting-edge programs in technology, business, and language studies, we prepare
                graduates who are ready to lead in an increasingly interconnected world.
              </p>
              <Button to="/about" variant="outline">
                Discover Our Story
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionTitle
            subtitle="Academics"
            title="Featured Programs"
            description="Explore our flagship programs designed for the demands of the global economy."
          />
          <div className="grid grid--3">
            {featuredPrograms.map((program) => (
              <motion.article
                key={program.slug}
                className="program-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Link to={`/academics/undergraduate/${program.slug}`} className="program-card__image">
                  <img src={program.image} alt={program.title} loading="lazy" />
                </Link>
                <div className="program-card__body">
                  <h3>
                    <Link to={`/academics/undergraduate/${program.slug}`}>{program.title}</Link>
                  </h3>
                  <p>{program.description}</p>
                  <Link to={`/academics/undergraduate/${program.slug}`} className="program-card__link">
                    Learn More &rarr;
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="home-cta-center">
            <Button to="/academics" variant="secondary">
              View All Programs
            </Button>
          </div>
        </div>
      </section>

      <section className="section home-admissions-cta">
        <div className="container">
          <motion.div
            className="home-admissions-cta__inner"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Begin Your Journey at KDU Global</h2>
            <p>
              Applications are now open for the upcoming academic year. Join thousands of
              students who have chosen excellence.
            </p>
            <div className="home-admissions-cta__actions">
              <Button to="/admissions" variant="primary" size="lg">
                Apply Now
              </Button>
              <Button to="/admissions" variant="white" size="lg">
                View Requirements
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            subtitle="News & Events"
            title="Latest from Campus"
            description="Stay connected with the latest news, events, and achievements from KDU Global."
          />
          <div className="grid grid--3">
            {newsItems.map((item) => (
              <NewsCard key={item.id} {...item} />
            ))}
          </div>
          <div className="home-cta-center">
            <Button to="/news-events" variant="outline">
              View All News
            </Button>
          </div>
        </div>
      </section>

      <section className="section section--alt home-intl">
        <div className="container">
          <div className="home-intl__grid">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionTitle
                subtitle="Global Community"
                title="International Students"
                align="left"
              />
              <p>
                With students from over 30 countries, KDU Global is a truly international
                community. Our dedicated international student services provide comprehensive
                support from arrival through graduation.
              </p>
              <ul className="home-intl__features">
                <li>Visa and immigration assistance</li>
                <li>Cultural orientation programs</li>
                <li>Academic and language support</li>
                <li>Global alumni network</li>
              </ul>
              <Button to="/international-students" variant="primary">
                International Student Guide
              </Button>
            </motion.div>
            <motion.div
              className="home-intl__image"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
                alt="International students group"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section home-life">
        <div className="container">
          <SectionTitle
            subtitle="Campus Life"
            title="Student Life at KDU Global"
            description="Experience a vibrant campus community with clubs, sports, cultural events, and modern facilities."
          />
          <div className="grid grid--4 home-life__grid">
            {[
              { icon: '🏛️', title: 'Modern Campus', desc: 'State-of-the-art facilities and learning spaces' },
              { icon: '🎭', title: 'Cultural Events', desc: 'Festivals, performances, and international celebrations' },
              { icon: '⚽', title: 'Sports & Recreation', desc: 'Athletics, fitness centers, and outdoor activities' },
              { icon: '🤝', title: 'Student Clubs', desc: '50+ organizations covering diverse interests' },
            ].map((item) => (
              <motion.div
                key={item.title}
                className="home-life__card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="home-life__icon" aria-hidden="true">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionTitle
            subtitle="Voices"
            title="What Our Students Say"
          />
          <div className="grid grid--3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionTitle
            subtitle="By the Numbers"
            title="KDU Global at a Glance"
            light
          />
          <div className="grid grid--4">
            {statistics.map((stat) => (
              <StatisticsCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            subtitle="Partnerships"
            title="Global Partnerships"
            description="Collaborating with leading institutions worldwide to deliver exceptional education."
          />
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

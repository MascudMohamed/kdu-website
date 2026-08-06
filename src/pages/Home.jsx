import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '../components/home/HeroSection';
import Button from '../components/common/Button';
import { useCmsModule } from '../context/CmsContentContext';
import { cmsHeroSlides, plainText } from '../api/site/mappers';
import {
  heroSlides,
  featuredPrograms,
  statistics,
  campusBanner,
} from '../data/home';
import { getAggregatedNews } from '../data/aggregateNewsEvents';
import { PRESIDENT } from '../data/president';
import { APPLICATION_FORM_URL } from '../constants/links';
import '../styles/pages/Home.css';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.45 },
};

export default function Home() {
  const { module: cms } = useCmsModule('home');
  const programmes = featuredPrograms.slice(0, 3);
  const news = getAggregatedNews().slice(0, 3);

  const headline = cms?.headline?.trim() || 'Kyungdong University Global';
  const subtitle = cms?.subheadline?.trim() || 'Global Campus';
  const description =
    plainText(cms?.intro) ||
    'English-taught degrees. International community. Pathways to the world.';
  const slides = cmsHeroSlides(cms, heroSlides);
  const primaryCta = cms?.ctaText?.trim()
    ? {
        label: cms.ctaText.trim(),
        ...(cms.ctaLink?.startsWith('http')
          ? { href: cms.ctaLink.trim() }
          : { to: cms.ctaLink?.trim() || '/academics' }),
      }
    : { label: 'Apply Now', href: APPLICATION_FORM_URL };

  return (
    <>
      <HeroSection
        slides={slides}
        subtitle={subtitle}
        headline={headline}
        description={description}
        primaryCta={primaryCta}
        secondaryCta={{ label: 'Explore programmes', to: '/academics' }}
      />

      <section className="home-glance" aria-label="KDU Global at a glance">
        <div className="container home-glance__row">
          {statistics.map((stat) => (
            <div key={stat.label} className="home-glance__item">
              <strong>
                {stat.value}
                {stat.suffix || ''}
              </strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="home-study section" aria-labelledby="home-study-title">
        <div className="container">
          <motion.header className="home-simple-head" {...fadeUp}>
            <p className="home-eyebrow">Academics</p>
            <h2 id="home-study-title">Study with us</h2>
            <p>English-medium programmes designed for international careers.</p>
          </motion.header>

          <div className="home-study__grid">
            {programmes.map((program, i) => (
              <motion.div key={program.slug} {...fadeUp} transition={{ duration: 0.45, delay: i * 0.05 }}>
                <Link
                  to={`/academics/undergraduate/${program.slug}`}
                  className="home-study__item"
                >
                  <img src={program.image} alt="" loading="lazy" />
                  <div>
                    <h3>{program.title}</h3>
                    <span>Explore programme</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="home-simple-foot">
            <Button to="/academics" variant="outline">
              All programmes
            </Button>
          </div>
        </div>
      </section>

      <section className="home-leaders section section--alt" aria-labelledby="home-leaders-title">
        <div className="container home-leaders__grid">
          <motion.div className="home-leaders__media" {...fadeUp}>
            <img src={PRESIDENT.image} alt={PRESIDENT.imageAlt} loading="lazy" />
          </motion.div>
          <motion.div className="home-leaders__content" {...fadeUp}>
            <p className="home-eyebrow">Leadership</p>
            <h2 id="home-leaders-title">{PRESIDENT.quote}</h2>
            <p className="home-leaders__attr">
              {PRESIDENT.name}
              <span>{PRESIDENT.title}</span>
            </p>
            <Button to="/about" variant="outline">
              Read the president&apos;s message
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="home-stories section" aria-labelledby="home-stories-title">
        <div className="container">
          <motion.header className="home-simple-head home-simple-head--row" {...fadeUp}>
            <div>
              <p className="home-eyebrow">News & Events</p>
              <h2 id="home-stories-title">Latest from KDU Global</h2>
            </div>
            <Link to="/news-events" className="home-link-arrow">
              View all
            </Link>
          </motion.header>

          <div className="home-stories__grid">
            {news.map((item, i) => (
              <motion.article key={item.id || item.title} {...fadeUp} transition={{ duration: 0.45, delay: i * 0.05 }}>
                <Link to={item.link || '/news-events'} className="home-stories__item">
                  <img src={item.image} alt="" loading="lazy" />
                  <div>
                    <time>{item.date}</time>
                    <h3>{item.title}</h3>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-life" aria-labelledby="home-life-title">
        <img src={campusBanner.image} alt={campusBanner.alt} loading="lazy" />
        <div className="home-life__content">
          <div className="container">
            <motion.div {...fadeUp}>
              <p className="home-eyebrow home-eyebrow--light">Campus life</p>
              <h2 id="home-life-title">A global community on one campus</h2>
              <p>
                Learn, connect, and grow with students from around the world.
              </p>
              <div className="home-life__actions">
                <Button to="/international-students" variant="white">
                  International students
                </Button>
                <Button to="/international-office" variant="outline-light">
                  Student services
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="home-cta section" aria-labelledby="home-cta-title">
        <div className="container home-cta__inner">
          <div>
            <h2 id="home-cta-title">Ready to join KDU Global?</h2>
            <p>Applications are open for the upcoming academic year.</p>
          </div>
          <div className="home-cta__actions">
            <Button href={APPLICATION_FORM_URL} variant="primary" size="lg">
              Start application
            </Button>
            <Button to="/admissions" variant="white" size="lg">
              Admissions guide
            </Button>
          </div>
        </div>
      </section>

      <div className="container" style={{ textAlign: 'center', padding: '2rem 0' }}>
        <Link to="/sitemap" className="home-link-arrow">
          Sitemap
        </Link>
      </div>
    </>
  );
}

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '../components/home/HeroSection';
import Button from '../components/common/Button';
import StatisticsCard from '../components/home/StatisticsCard';
import SectionTitle from "../components/common/SectionTitle";
import {
  heroSlides,
  featuredPrograms,
  statistics,
  newsItems,
  testimonials,
  partners,
  whyChoosePillars,
  researchSpotlight,
  upcomingEvents,
  admissionSteps,
  scholarshipHighlights,
  campusFeatures,
} from '../data/home';
import { APPLICATION_FORM_URL } from '../constants/links';
import '../styles/pages/Home.css';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
};

export default function Home() {
  const [featuredProgram, ...otherPrograms] = featuredPrograms;
  const [featuredNews, ...moreNews] = newsItems;
  const [featuredVoice, ...otherVoices] = testimonials;

  return (
    <>
      <HeroSection
        slides={heroSlides}
        subtitle="Kyungdong University"
        headline="Shaping Global Leaders Through Excellence"
        description="Join a community of innovators, thinkers, and leaders at one of the world's premier international universities."
      />
{/* President's Message */}
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
        <SectionTitle
          
          title="President's Message"
          align="left"
        />

        <div className="about-welcome__message">
          <p>
            It is my great privilege to welcome you to KDU Global University.
            Our institution was founded on the belief that education has the
            power to transform lives and bridge cultures across the globe.
          </p>

          <p>
            In an era of unprecedented change, we remain steadfast in our
            commitment to academic excellence, innovation, and the development
            of ethical leaders who will shape the future of our interconnected
            world.
          </p>

          <p>
            I invite you to explore what makes KDU Global a truly exceptional
            place to learn, grow, and discover your potential.
          </p>
        </div>
      </motion.div>
    </div>
  </div>
</section>
      {/* Why Choose */}
      <section className="home-why section" aria-labelledby="home-why-title">
        <div className="container">
          <div className="home-why__layout">
            <motion.div className="home-why__intro" {...fadeUp}>
              <span className="home-eyebrow">Why KDU Global</span>
              <h2 id="home-why-title" className="home-why__title">
                An education built for a connected world
              </h2>
              <p className="home-lead">
                At Kyungdong University Global Campus, rigorous academics meet international
                experience. We prepare graduates who are confident, capable, and ready to lead.
              </p>
              <Button to="/about" variant="outline">
                Our story
              </Button>
            </motion.div>
            <div className="home-why__pillars">
              {whyChoosePillars.map((item, i) => (
                <motion.article
                  key={item.title}
                  className="home-why__pillar"
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  <span className="home-why__pillar-num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academic Excellence */}
      <section className="home-programs section section--alt" aria-labelledby="home-programs-title">
        <div className="container">
          <div className="home-section-head">
            <span className="home-eyebrow">Academic Excellence</span>
            <h2 id="home-programs-title">Programmes that open global pathways</h2>
            <p>
              Rigorous, English-taught degrees in technology, business, and language studies —
              designed with employers and graduate schools in mind.
            </p>
          </div>

          <div className="home-programs__showcase">
            <motion.article className="home-programs__featured" {...fadeUp}>
              <Link
                to={`/academics/undergraduate/${featuredProgram.slug}`}
                className="home-programs__image"
              >
                <img src={featuredProgram.image} alt="" loading="lazy" />
              </Link>
              <div className="home-programs__body">
                <span className="home-programs__tag">Flagship programme</span>
                <h3>
                  <Link to={`/academics/undergraduate/${featuredProgram.slug}`}>
                    {featuredProgram.title}
                  </Link>
                </h3>
                <p>{featuredProgram.description}</p>
                <Link
                  to={`/academics/undergraduate/${featuredProgram.slug}`}
                  className="home-link-arrow"
                >
                  Explore programme
                </Link>
              </div>
            </motion.article>

            <div className="home-programs__stack">
              {otherPrograms.map((program) => (
                <motion.article key={program.slug} className="home-programs__card" {...fadeUp}>
                  <Link
                    to={`/academics/undergraduate/${program.slug}`}
                    className="home-programs__card-image"
                  >
                    <img src={program.image} alt="" loading="lazy" />
                  </Link>
                  <div>
                    <h3>
                      <Link to={`/academics/undergraduate/${program.slug}`}>
                        {program.title}
                      </Link>
                    </h3>
                    <p>{program.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="home-section-foot">
            <Button to="/academics" variant="secondary">
              View all programmes
            </Button>
          </div>
        </div>
      </section>

      {/* Student Success */}
      <section className="home-voices section" aria-labelledby="home-voices-title">
        <div className="container">
          <div className="home-section-head home-section-head--left">
            <span className="home-eyebrow">Student Success</span>
            <h2 id="home-voices-title">Graduates making an impact worldwide</h2>
          </div>

          <div className="home-voices__layout">
            <motion.blockquote className="home-voices__featured" {...fadeUp}>
              <p>&ldquo;{featuredVoice.quote}&rdquo;</p>
              <footer>
                <img src={featuredVoice.photo} alt="" loading="lazy" />
                <div>
                  <cite>{featuredVoice.name}</cite>
                  <span>{featuredVoice.role}</span>
                  <span className="home-voices__program">{featuredVoice.program}</span>
                </div>
              </footer>
            </motion.blockquote>

            <div className="home-voices__list">
              {otherVoices.map((voice) => (
                <motion.blockquote key={voice.name} className="home-voices__item" {...fadeUp}>
                  <p>&ldquo;{voice.quote}&rdquo;</p>
                  <footer>
                    <img src={voice.photo} alt="" loading="lazy" />
                    <div>
                      <cite>{voice.name}</cite>
                      <span>{voice.program}</span>
                    </div>
                  </footer>
                </motion.blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="home-research section section--alt" aria-labelledby="home-research-title">
        <div className="container home-research__grid">
          <motion.div className="home-research__media" {...fadeUp}>
            <img src={researchSpotlight.image} alt="" loading="lazy" />
          </motion.div>
          <motion.div className="home-research__content" {...fadeUp}>
            <span className="home-eyebrow">{researchSpotlight.eyebrow}</span>
            <h2 id="home-research-title">{researchSpotlight.title}</h2>
            <p className="home-lead">{researchSpotlight.lead}</p>
            <ul className="home-checklist">
              {researchSpotlight.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link to={researchSpotlight.link} className="home-link-arrow">
              {researchSpotlight.linkLabel}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="home-stats section section--dark" aria-labelledby="home-stats-title">
        <div className="container">
          <div className="home-stats__head">
            <span className="home-eyebrow home-eyebrow--light">By the Numbers</span>
            <h2 id="home-stats-title">KDU Global at a glance</h2>
          </div>
          <div className="home-stats__grid">
            {statistics.map((stat) => (
              <StatisticsCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="home-partners section" aria-labelledby="home-partners-title">
        <div className="container">
          <div className="home-section-head">
            <span className="home-eyebrow">Global Partnerships</span>
            <h2 id="home-partners-title">Connected to universities worldwide</h2>
            <p>
              Exchange programmes, joint research, and dual-degree pathways with leading
              institutions across four continents.
            </p>
          </div>
          <ul className="home-partners__list">
            {partners.map((partner) => (
              <li key={partner.name} className="home-partners__item">
                <span className="home-partners__region">{partner.country}</span>
                <strong>{partner.name}</strong>
                <p>{partner.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Campus Experience */}
      <section className="home-campus" aria-labelledby="home-campus-title">
        <div className="home-campus__banner">
          <img
            src="https://images.unsplash.com/photo-1541339907192-e08756dedf3f?w=1600&q=80"
            alt=""
            loading="lazy"
          />
          <div className="home-campus__banner-overlay">
            <div className="container">
              <span className="home-eyebrow home-eyebrow--light">Campus Experience</span>
              <h2 id="home-campus-title">Life beyond the classroom</h2>
              <p>
                A welcoming campus where learning, culture, and community come together every day.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="home-campus__features">
            {campusFeatures.map((feature, i) => (
              <motion.article
                key={feature.title}
                className={`home-campus__feature ${i % 2 === 1 ? 'home-campus__feature--reverse' : ''}`}
                {...fadeUp}
              >
                <img src={feature.image} alt="" loading="lazy" />
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* International Students */}
      <section className="home-intl section section--alt" aria-labelledby="home-intl-title">
        <div className="container home-intl__grid">
          <motion.div {...fadeUp}>
            <span className="home-eyebrow">International Students</span>
            <h2 id="home-intl-title">Your home away from home</h2>
            <p className="home-lead">
              From visa guidance to cultural orientation, our international student services team
              supports you from arrival through graduation.
            </p>
            <ul className="home-checklist">
              <li>Visa and immigration assistance</li>
              <li>Academic and language support</li>
              <li>Housing and campus integration</li>
              <li>Global alumni network</li>
            </ul>
            <Button to="/international-students" variant="primary">
              International student guide
            </Button>
          </motion.div>
          <motion.div className="home-intl__image" {...fadeUp}>
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80"
              alt="International students on campus"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* News — editorial */}
      <section className="home-news section" aria-labelledby="home-news-title">
        <div className="container">
          <div className="home-section-head home-section-head--left">
            <span className="home-eyebrow">Latest News</span>
            <h2 id="home-news-title">Stories from our community</h2>
          </div>
          <div className="home-news__layout">
            <motion.article className="home-news__featured" {...fadeUp}>
              <Link to={featuredNews.link} className="home-news__image">
                <img src={featuredNews.image} alt="" loading="lazy" />
              </Link>
              <div className="home-news__body">
                <span className="home-news__meta">
                  {featuredNews.category} · {featuredNews.date}
                </span>
                <h3>
                  <Link to={featuredNews.link}>{featuredNews.title}</Link>
                </h3>
                <p>{featuredNews.summary}</p>
                <Link to={featuredNews.link} className="home-link-arrow">
                  Read article
                </Link>
              </div>
            </motion.article>
            <ul className="home-news__list">
              {moreNews.map((item) => (
                <li key={item.id}>
                  <span className="home-news__meta">{item.date}</span>
                  <h3>
                    <Link to={item.link}>{item.title}</Link>
                  </h3>
                  <p>{item.summary}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="home-section-foot home-section-foot--left">
            <Button to="/news-events" variant="outline">
              All news & events
            </Button>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="home-events section section--alt" aria-labelledby="home-events-title">
        <div className="container">
          <div className="home-events__head">
            <div>
              <span className="home-eyebrow">Upcoming Events</span>
              <h2 id="home-events-title">Join us on campus</h2>
            </div>
            <Link to="/news-events" className="home-link-arrow home-events__all">
              View calendar
            </Link>
          </div>
          <div className="home-events__track">
            {upcomingEvents.map((event) => (
              <article key={event.title} className="home-events__card">
                <time dateTime={event.date}>{event.date}</time>
                <span className="home-events__type">{event.type}</span>
                <h3>{event.title}</h3>
                <p>{event.venue}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions Journey */}
      <section className="home-path section" aria-labelledby="home-path-title">
        <div className="container">
          <div className="home-section-head">
            <span className="home-eyebrow">Your Admissions Journey</span>
            <h2 id="home-path-title">Four steps to joining KDU Global</h2>
            <p>Our admissions team guides you through every stage of the application process.</p>
          </div>
          <ol className="home-path__steps">
            {admissionSteps.map((step) => (
              <li key={step.step} className="home-path__step">
                <span className="home-path__num" aria-hidden="true">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
          <div className="home-section-foot">
            <Button to="/admissions" variant="outline">
              Full admissions guide
            </Button>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="home-scholarships section section--alt" aria-labelledby="home-scholarships-title">
        <div className="container">
          <div className="home-section-head">
            <span className="home-eyebrow">Scholarships & Aid</span>
            <h2 id="home-scholarships-title">Investing in your future</h2>
            <p>Merit-based and need-based support is available for qualifying international students.</p>
          </div>
          <div className="home-scholarships__grid">
            {scholarshipHighlights.map((item) => (
              <article key={item.title} className="home-scholarships__card">
                <span className="home-scholarships__value">{item.value}</span>
                <h3>{item.title}</h3>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="home-cta section" aria-labelledby="home-cta-title">
        <div className="container home-cta__inner">
          <div>
            <span className="home-eyebrow home-eyebrow--light">Apply Now</span>
            <h2 id="home-cta-title">Begin your journey at KDU Global</h2>
            <p>
              Applications are open for the upcoming academic year. Take the next step toward
              a world-class international education.
            </p>
          </div>
          <div className="home-cta__actions">
            <Button href={APPLICATION_FORM_URL} variant="primary" size="lg">
              Start application
            </Button>
            <Button to="/contact" variant="white" size="lg">
              Speak with admissions
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

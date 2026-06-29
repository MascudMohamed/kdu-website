import Breadcrumb from '../common/Breadcrumb';
import Button from '../common/Button';
import { APPLICATION_FORM_URL } from '../../constants/links';
import '../../styles/components/DeptHeroV2.css';

export default function DeptHeroV2({ department }) {
  const { title, description, bannerImage, breadcrumbs, quickFacts, degree } = department;

  return (
    <section className="dept-hero-v2" aria-labelledby="dept-hero-title">
      <img src={bannerImage} alt="" className="dept-hero-v2__bg" />
      <div className="dept-hero-v2__overlay" />
      <div className="container dept-hero-v2__content">
        <Breadcrumb items={breadcrumbs} />
        {degree && <p className="dept-hero-v2__degree">{degree}</p>}
        <h1 id="dept-hero-title">{title}</h1>
        <p className="dept-hero-v2__desc">{description}</p>

        {quickFacts && (
          <dl className="dept-hero-v2__meta">
            {Object.entries(quickFacts).map(([key, value]) => (
              <div key={key} className="dept-hero-v2__meta-item">
                <dt>{key}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        )}

        <div className="dept-hero-v2__actions">
          <Button href={APPLICATION_FORM_URL} variant="primary" size="lg">Apply Now</Button>
          <Button href="#" variant="white" size="lg">Download Brochure</Button>
        </div>
      </div>
    </section>
  );
}

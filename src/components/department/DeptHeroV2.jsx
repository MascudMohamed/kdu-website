import Breadcrumb from '../common/Breadcrumb';
import Button from '../common/Button';
import '../../styles/components/DeptHeroV2.css';

export default function DeptHeroV2({ department }) {
  const { title, description, bannerImage, breadcrumbs, quickFacts } = department;

  return (
    <section className="dept-hero-v2">
      <img src={bannerImage} alt="" className="dept-hero-v2__bg" />
      <div className="dept-hero-v2__overlay" />
      <div className="container dept-hero-v2__content">
        <Breadcrumb items={breadcrumbs} />
        <h1>{title}</h1>
        <p className="dept-hero-v2__desc">{description}</p>

        {quickFacts && (
          <div className="dept-hero-v2__facts">
            {Object.entries(quickFacts).map(([key, value]) => (
              <div key={key} className="dept-hero-v2__fact">
                <span className="dept-hero-v2__fact-label">{key}</span>
                <span className="dept-hero-v2__fact-value">{value}</span>
              </div>
            ))}
          </div>
        )}

        <div className="dept-hero-v2__actions">
          <Button to="/admissions" variant="primary" size="lg">Apply Now</Button>
          <Button href="#" variant="white" size="lg">Download Brochure</Button>
          <Button to="/contact" variant="outline" size="lg" className="dept-hero-v2__btn-outline">
            Request Information
          </Button>
        </div>
      </div>
    </section>
  );
}

import Button from '../common/Button';
import { APPLICATION_FORM_URL } from '../../constants/links';
import '../../styles/components/DeptAdmissionsCTA.css';

export default function DeptAdmissionsCTA({ admissions, programTitle }) {
  return (
    <section className="dept-admissions-cta" id="admissions" aria-labelledby="dept-admissions-title">
      <div className="container dept-admissions-cta__inner">
        <div className="dept-admissions-cta__content">
          <span className="dept-admissions-cta__eyebrow">Admissions</span>
          <h2 id="dept-admissions-title">Ready to join {programTitle}?</h2>
          <p>
            Applications are open for international students. Our admissions team can guide you
            through requirements, scholarships, and the application process.
          </p>
          {admissions?.tuition && (
            <p className="dept-admissions-cta__tuition">
              Tuition: <strong>{admissions.tuition.amount}</strong>
              {admissions.tuition.note && <span> — {admissions.tuition.note}</span>}
            </p>
          )}
        </div>
        <div className="dept-admissions-cta__actions">
          <Button href={APPLICATION_FORM_URL} variant="primary" size="lg">Apply Now</Button>
          <Button to="/contact" variant="white" size="lg">Request Information</Button>
          <Button to="/admissions" variant="outline" size="lg" className="dept-admissions-cta__outline">
            Contact Admissions
          </Button>
        </div>
      </div>
    </section>
  );
}

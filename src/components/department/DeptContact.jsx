import Button from '../common/Button';
import '../../styles/components/DeptContact.css';

export default function DeptContact({ contact, programTitle }) {
  if (!contact) return null;

  return (
    <section className="dept-section dept-contact" id="contact">
      <div className="container dept-contact__inner">
        <div>
          <span className="dept-contact__eyebrow">Department Contact</span>
          <h2>{programTitle}</h2>
          <p className="dept-contact__lead">
            For program-specific enquiries, our departmental team is available during office hours.
          </p>
        </div>
        <address className="dept-contact__details">
          <p>{contact.address}</p>
          <p>
            <a href={`tel:${contact.phone}`}>{contact.phone}</a>
          </p>
          <p>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          {contact.hours && <p>{contact.hours}</p>}
        </address>
        <Button to="/contact" variant="outline" size="md">
          General Enquiries
        </Button>
      </div>
    </section>
  );
}

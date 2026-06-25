import { motion } from 'framer-motion';
import ContactSection from '../components/department/ContactSection';
import '../styles/pages/Contact.css';

const universityContact = {
  address: 'KDU Global University, 123 University Avenue, Global City, GC 10001',
  phone: '+1 (555) 000-1000',
  email: 'info@kduglobal.edu',
  hours: 'Monday – Friday, 8:30 AM – 5:30 PM',
};

export default function Contact() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1>Contact Us</h1>
            <p>
              We would love to hear from you. Reach out to our team for admissions inquiries,
              program information, or general questions.
            </p>
          </motion.div>
        </div>
      </header>

      <ContactSection contact={universityContact} />

      <section className="section">
        <div className="container">
          <div className="contact-departments">
            <h2>Department Contacts</h2>
            <div className="grid grid--3">
              {[
                { name: 'Smart Computing', email: 'smartcomputing@kduglobal.edu', phone: '+1 (555) 100-2000' },
                { name: 'Business Administration', email: 'iba@kduglobal.edu', phone: '+1 (555) 200-1000' },
                { name: 'English for Academic Purposes', email: 'eap@kduglobal.edu', phone: '+1 (555) 300-1000' },
              ].map((dept) => (
                <div key={dept.name} className="contact-dept">
                  <h3>{dept.name}</h3>
                  <p><a href={`mailto:${dept.email}`}>{dept.email}</a></p>
                  <p>{dept.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

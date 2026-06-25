import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import '../../styles/components/ContactSection.css';

export default function ContactSection({ contact }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section section--alt contact-section" id="contact">
      <div className="container">
        <SectionTitle
          subtitle="Get in Touch"
          title="Contact Us"
          description="Have questions about our program? Our team is here to help."
        />

        <div className="contact-section__grid">
          <motion.div
            className="contact-section__info"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="contact-section__detail">
              <h3>Office Address</h3>
              <p>{contact.address}</p>
            </div>
            <div className="contact-section__detail">
              <h3>Phone</h3>
              <p><a href={`tel:${contact.phone}`}>{contact.phone}</a></p>
            </div>
            <div className="contact-section__detail">
              <h3>Email</h3>
              <p><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
            </div>
            <div className="contact-section__detail">
              <h3>Office Hours</h3>
              <p>{contact.hours}</p>
            </div>
            <div className="contact-section__map" id="map">
              <div className="contact-section__map-placeholder" role="img" aria-label="Map placeholder">
                <span>Google Maps</span>
                <small>Interactive map integration coming soon</small>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-section__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="contact-section__success">
                <h3>Thank you!</h3>
                <p>Your message has been received. We will get back to you shortly.</p>
              </div>
            ) : (
              <>
                <div className="contact-section__field">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
                </div>
                <div className="contact-section__field">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
                </div>
                <div className="contact-section__field">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" required value={formData.subject} onChange={handleChange} />
                </div>
                <div className="contact-section__field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" required value={formData.message} onChange={handleChange} />
                </div>
                <Button type="submit" variant="primary" size="lg">
                  Send Message
                </Button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

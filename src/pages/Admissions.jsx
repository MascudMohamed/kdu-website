import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import '../styles/pages/Admissions.css';

const processSteps = [
  { step: '01', title: 'Submit Application', description: 'Complete the online application form with your personal and academic information.' },
  { step: '02', title: 'Upload Documents', description: 'Provide transcripts, identification, personal statement, and recommendation letters.' },
  { step: '03', title: 'Application Review', description: 'Our admissions committee reviews your application and supporting materials.' },
  { step: '04', title: 'Interview (if required)', description: 'Some programs may require an interview as part of the selection process.' },
  { step: '05', title: 'Receive Decision', description: 'Admission decisions are communicated via email within 4-6 weeks of submission.' },
  { step: '06', title: 'Enroll & Orient', description: 'Accept your offer, complete enrollment, and attend orientation week.' },
];

const faqs = [
  { q: 'What are the application deadlines?', a: 'Applications for the Fall semester open October 1, with a priority deadline of March 15 and final deadline of May 30. Spring intake deadlines are October 30.' },
  { q: 'Are scholarships available for international students?', a: 'Yes, KDU Global offers merit-based scholarships covering 25-50% of tuition, as well as need-based financial aid packages for qualifying students.' },
  { q: 'What English proficiency is required?', a: 'Most programs require IELTS 6.0 or TOEFL iBT 80. Our EAP program provides pathway options for students who need additional language preparation.' },
  { q: 'Can I transfer credits from another institution?', a: 'Yes, transfer students may receive credit for previously completed coursework. A formal credit evaluation is conducted during the application process.' },
  { q: 'Is on-campus housing available?', a: 'Yes, we offer modern residence halls for international and domestic students. Housing applications are submitted after admission acceptance.' },
];

export default function Admissions() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1>Admissions</h1>
            <p>
              Take the first step toward your future. Learn about our application process,
              requirements, and financial support options.
            </p>
          </motion.div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <SectionTitle
            subtitle="Overview"
            title="Join KDU Global"
            description="We welcome applications from motivated students around the world who are ready to embrace academic challenge and global opportunity."
          />
          <div className="admissions-overview">
            <p>
              KDU Global seeks students who demonstrate academic potential, intellectual curiosity,
              and a commitment to contributing positively to our diverse community. Our holistic
              admissions process considers your academic record, personal statement, recommendations,
              and extracurricular achievements.
            </p>
            <Button to="/contact" variant="primary" size="lg">
              Contact Admissions
            </Button>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionTitle subtitle="Process" title="Application Process" />
          <div className="admissions-process">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                className="admissions-step"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <span className="admissions-step__number">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle subtitle="Documents" title="Required Documents" />
          <div className="grid grid--2">
            <div className="admissions-docs">
              <h3>For All Applicants</h3>
              <ul>
                <li>Completed online application form</li>
                <li>Official academic transcripts</li>
                <li>Copy of passport or national ID</li>
                <li>Personal statement (500 words)</li>
                <li>Two letters of recommendation</li>
                <li>English proficiency test scores (if applicable)</li>
              </ul>
            </div>
            <div className="admissions-docs">
              <h3>Additional for International Students</h3>
              <ul>
                <li>Financial support documentation</li>
                <li>Visa application support materials</li>
                <li>Health insurance confirmation</li>
                <li>Credential evaluation (if required)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionTitle subtitle="Timeline" title="Admission Timeline" />
          <div className="admissions-timeline">
            {[
              { date: 'October 1', event: 'Application portal opens' },
              { date: 'March 15', event: 'Priority deadline (scholarship consideration)' },
              { date: 'May 30', event: 'Final application deadline' },
              { date: 'June-July', event: 'Admission decisions released' },
              { date: 'August 15', event: 'Orientation week begins' },
              { date: 'September 1', event: 'Fall semester commences' },
            ].map((item) => (
              <div key={item.date} className="admissions-timeline__item">
                <span className="admissions-timeline__date">{item.date}</span>
                <span className="admissions-timeline__event">{item.event}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle subtitle="Investment" title="Tuition & Scholarships" />
          <div className="grid grid--3">
            {[
              { program: 'Smart Computing', tuition: '$4,000/semester', scholarship: 'Up to 50% merit scholarships' },
              { program: 'Business Administration', tuition: '$4,000/semester', scholarship: 'International business grants available' },
              { program: 'English for Academic Purposes', tuition: '$4,000/semester', scholarship: 'Pathway program discounts' },
            ].map((item) => (
              <div key={item.program} className="admissions-tuition">
                <h3>{item.program}</h3>
                <p className="admissions-tuition__amount">{item.tuition}</p>
                <p>{item.scholarship}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionTitle subtitle="Questions" title="Frequently Asked Questions" />
          <div className="admissions-faq">
            {faqs.map((faq) => (
              <details key={faq.q} className="admissions-faq__item">
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section admissions-contact">
        <div className="container">
          <div className="admissions-contact__inner">
            <h2>Ready to Apply?</h2>
            <p>Our admissions team is here to guide you through every step of the process.</p>
            <div className="admissions-contact__info">
              <div>
                <strong>Email</strong>
                <p>admissions@kduglobal.edu</p>
              </div>
              <div>
                <strong>Phone</strong>
                <p>+1 (555) 000-1000</p>
              </div>
              <div>
                <strong>Office Hours</strong>
                <p>Mon – Fri, 9:00 AM – 5:00 PM</p>
              </div>
            </div>
            <Button to="/contact" variant="primary" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

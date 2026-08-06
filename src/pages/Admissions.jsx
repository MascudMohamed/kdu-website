import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import CmsHtml from '../components/common/CmsHtml';
import { useCmsModule } from '../context/CmsContentContext';
import { cmsFaqs, plainText } from '../api/site/mappers';
import { APPLICATION_FORM_URL } from '../constants/links';
import '../styles/pages/Admissions.css';

const guidelineTracks = [
  {
    title: 'Undergraduate — English-medium degrees',
    subtitle: 'AI · International Business Administration · International Hotel Management · Smart Computing · Korean Business–AI',
    items: [
      'Completion of high school or equivalent.',
      'No longer than three years of gap after graduating from the most recent formal educational institution.',
      'Minimum English proficiency: IELTS 5.5, TOEFL 530 (CBT 197 / iBT 71 / iBT new 3.5), CEFR B2, or TEPS 601 (New TEPS 327)*.',
      'Excellent academic performance record.',
    ],
    note: '* Minimum language requirements may vary for applicants from specific countries.',
  },
  {
    title: 'Undergraduate — Korean-medium courses',
    items: [
      'Completion of high school or equivalent.',
      'No longer than three years of study gap after the most recent formal education.',
      'Minimum TOPIK Level 3 (or equivalent Korean proficiency).',
      'Excellent academic performance record.',
    ],
  },
  {
    title: 'Graduate — Master’s (English medium)',
    subtitle: 'International Business Administration · Artificial Intelligence and Data Science · International Hospitality and Tourism Management',
    items: [
      'Completion of an undergraduate degree.',
      'Minimum English proficiency: IELTS 5.5, TOEFL 530 (CBT 197 / iBT 71 / iBT new 3.5), CEFR B2, or TEPS 601 (New TEPS 327)*.',
      'Excellent academic performance record.',
    ],
  },
  {
    title: 'EAP — English for Academic Purposes',
    items: [
      'Completion of high school or equivalent.',
      'No longer than three years of study gap.',
      'IELTS 4.5 or equivalent English proficiency.',
      'Pass KDU Global assessment, including oral interview.',
      'Excellent academic performance record.',
    ],
  },
  {
    title: 'KAP — Korean for Academic Purposes',
    items: [
      'Completion of high school or equivalent.',
      'No longer than three years of study gap.',
      'Pass KDU Global assessment, including Korean proficiency test and oral interview.',
      'Excellent academic performance record.',
    ],
  },
];

const processSteps = [
  { step: '01', title: 'Submit application', description: 'Email your completed application to info@kduniv.ac.kr.' },
  { step: '02', title: 'Submit required documents', description: 'Send supporting documents as specified for your programme track (undergraduate, graduate, or language).' },
  { step: '03', title: 'Document screening', description: 'Admissions assesses eligibility and completeness of your file.' },
  { step: '04', title: 'Interview', description: 'Online or offline interview as required for your programme.' },
  { step: '05', title: 'Offer letter', description: 'Successful applicants receive an official offer of admission.' },
  { step: '06', title: 'Tuition payment', description: 'Pay tuition according to the instructions in your offer letter.' },
  { step: '07', title: 'Certificate of Admission', description: 'Receive your Certificate of Admission for visa processing.' },
  { step: '08', title: 'Visa application', description: 'Apply for a student visa with your Certificate of Admission and supporting documents.' },
  { step: '09', title: 'Enrollment', description: 'Complete enrollment and prepare for orientation on campus.' },
];

const documentRows = [
  { doc: 'Application Form', ug: true, grad: true, lang: true },
  { doc: 'High School Diploma & Transcripts', ug: true, grad: false, lang: true },
  { doc: 'Undergraduate Diploma & Transcripts', ug: false, grad: true, lang: false },
  { doc: 'Certificate of Language Proficiency', ug: true, grad: true, lang: false },
  { doc: 'Passport Copy', ug: true, grad: true, lang: true },
  { doc: 'Passport-size Photo (3.5 × 4.5 cm)', ug: true, grad: true, lang: true },
  { doc: 'Certificate of Financial Capability / Bank Statement', ug: true, grad: true, lang: true },
  { doc: 'Medical Check-up Report', ug: true, grad: true, lang: true },
  { doc: 'Student Code of Conduct', ug: true, grad: true, lang: true },
  { doc: 'Study Plan', ug: false, grad: true, lang: false },
];

const scholarshipHighlights = [
  {
    title: 'Scholarships at Admission',
    body: 'Up to 100% tuition for the first semester, based on language proficiency (IELTS / iBT / CEFR / New TEPS) or prior academic performance. TOPIK Level 3+ can unlock 100% for eligible English-medium applicants.',
  },
  {
    title: 'Academic Excellence',
    body: 'Renewed each semester for strong grade averages — undergraduate awards from 30% to 100%; graduate awards from 50% to 70%.',
  },
  {
    title: 'Pathway & partnership awards',
    body: 'K-Global Education Center scholarships for EAP/KAP progressers; GACC awards for partner-institution transfers; IUCEA and Global Citizen scholarships for selected students.',
  },
  {
    title: 'Additional support',
    body: 'Part-time job assistance through the Student Services Centre and Teaching Assistant scholarships for eligible graduate students.',
  },
];

const tuitionFees = [
  { program: 'Bachelor’s degrees (English medium)', fee: '$4,000', note: 'Per semester · before scholarships' },
  { program: 'Master’s degrees (English medium)', fee: '$5,000', note: 'Per semester · before scholarships' },
  { program: 'EAP — English for Academic Purposes', fee: '$2,400', note: 'Per semester' },
  { program: 'KAP — Korean for Academic Purposes', fee: '$1,200', note: 'Per semester' },
];

const livingCosts = [
  { item: 'On-campus dormitory (2 students/room)', cost: '$1,100 / semester' },
  { item: 'Off-campus studio (estimate)', cost: '$2,250 / semester' },
  { item: 'Cafeteria meal plan (first 2 months, mandatory for dorm)', cost: '$424' },
  { item: 'National Health Insurance (estimate)', cost: '$300 / semester' },
  { item: 'Books & stationery (estimate)', cost: '$240 / semester' },
];

const faqs = [
  {
    q: 'Where do I send my application?',
    a: 'Application forms and required documents should be emailed to info@kduniv.ac.kr. For initial assessment, undergraduate applicants typically send items (1), (2), (4), and (5); graduate applicants send (1), (3), (4), and (5); language applicants send (1), (2), and (5) — in one PDF where possible.',
  },
  {
    q: 'What English level is required for undergraduate degrees?',
    a: 'IELTS 5.5 (or TOEFL / CEFR / TEPS equivalents listed in the guidelines). Requirements may vary by country. EAP is available if you need a language pathway first.',
  },
  {
    q: 'Are scholarships available for international students?',
    a: 'Yes. Admission scholarships can cover up to 100% of tuition for the first semester based on language scores or academic records, with further awards for excellence, pathways, and partnerships.',
  },
  {
    q: 'Can I transfer or join as an exchange student?',
    a: 'Transfer, double-degree, and exchange applicants should contact the Admissions Office for programme-specific requirements and partnership pathways.',
  },
  {
    q: 'Is on-campus housing available?',
    a: 'Yes. On-campus dormitory fees are published with living-cost estimates. Housing applications follow admission acceptance.',
  },
];

function Mark({ on }) {
  return <span className={on ? 'admissions-mark admissions-mark--yes' : 'admissions-mark'}>{on ? '●' : '—'}</span>;
}

export default function Admissions() {
  const { module: cms } = useCmsModule('admissions');
  const { module: faqCms } = useCmsModule('faq');

  const pageTitle = cms?.headline || 'Admissions';
  const pageIntro = cms?.intro
    ? plainText(cms.intro)
    : 'Join an English-taught international campus in Korea. Review eligibility, complete the application process, prepare your documents, and explore scholarships and fees.';

  const displayFaqs = cmsFaqs(faqCms?.items, faqs);
  const admissionsEmail = cms?.contactEmail || 'info@kduniv.ac.kr';

  return (
    <>
      <header className="page-header">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1>{pageTitle}</h1>
            <p>{pageIntro}</p>
            <div className="admissions-header-actions">
              <Button href={APPLICATION_FORM_URL} variant="primary" size="lg">
                Apply now
              </Button>
              <Button href={`mailto:${admissionsEmail}`} variant="outline" size="lg">
                Email Admissions
              </Button>
            </div>
          </motion.div>
        </div>
      </header>

      <nav className="admissions-jump container" aria-label="Admissions sections">
        <a href="#guidelines">Guidelines</a>
        <a href="#process">Application process</a>
        <a href="#documents">Documents</a>
        <a href="#scholarships">Scholarships & fees</a>
        <a href="#faq">FAQ</a>
      </nav>

      <section id="guidelines" className="section">
        <div className="container">
          <SectionTitle
            subtitle="Eligibility"
            title="Admission guidelines"
            description="All applicants must meet the general requirements for their chosen track before applying to KDU Global."
          />

          {cms?.intro ? (
            <div className="admissions-overview">
              <CmsHtml html={cms.intro} />
            </div>
          ) : null}

          <div className="admissions-tracks">
            {guidelineTracks.map((track) => (
              <article key={track.title} className="admissions-track">
                <h3>{track.title}</h3>
                {track.subtitle && <p className="admissions-track__sub">{track.subtitle}</p>}
                <ul>
                  {track.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {track.note && <p className="admissions-track__note">{track.note}</p>}
              </article>
            ))}
          </div>

          <p className="admissions-footnote">
            Transfer, double-degree, and exchange applicants should contact Admissions for specific conditions.
            All inquiries: <a href={`mailto:${admissionsEmail}`}>{admissionsEmail}</a>
          </p>
        </div>
      </section>

      <section id="process" className="section section--alt">
        <div className="container">
          <SectionTitle
            subtitle="How to apply"
            title="Application process"
            description="A clear nine-step pathway from first submission to enrollment."
          />

          {(cms?.requirements || cms?.howToApply) && (
            <div className="admissions-cms-block">
              {cms?.requirements && (
                <>
                  <h3>Entry requirements</h3>
                  <CmsHtml html={cms.requirements} />
                </>
              )}
              {cms?.howToApply && (
                <>
                  <h3>How to apply</h3>
                  <CmsHtml html={cms.howToApply} />
                </>
              )}
            </div>
          )}

          <div className="admissions-process admissions-process--dense">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                className="admissions-step"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
              >
                <span className="admissions-step__number">{item.step}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="admissions-footnote">
            Application and required documents must be emailed to{' '}
            <a href={`mailto:${admissionsEmail}`}>{admissionsEmail}</a>.
          </p>
        </div>
      </section>

      <section id="documents" className="section">
        <div className="container">
          <SectionTitle
            subtitle="Checklist"
            title="Documents required"
            description="Submit the full set for final admission. For initial assessment, email a consolidated PDF with the core items for your track."
          />

          <div className="admissions-table-wrap">
            <table className="admissions-table">
              <thead>
                <tr>
                  <th>Document</th>
                  <th>Undergraduate</th>
                  <th>Graduate</th>
                  <th>Language</th>
                </tr>
              </thead>
              <tbody>
                {documentRows.map((row) => (
                  <tr key={row.doc}>
                    <td>{row.doc}</td>
                    <td><Mark on={row.ug} /></td>
                    <td><Mark on={row.grad} /></td>
                    <td><Mark on={row.lang} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="admissions-docs-grid">
            <div className="admissions-docs">
              <h3>Initial assessment (email PDF)</h3>
              <ul>
                <li><strong>Undergraduate:</strong> Application, high school diploma & transcripts, language certificate, passport copy</li>
                <li><strong>Graduate:</strong> Application, undergraduate diploma & transcripts, language certificate, passport copy</li>
                <li><strong>Language programmes:</strong> Application, high school diploma & transcripts, passport copy</li>
              </ul>
            </div>
            <div className="admissions-docs">
              <h3>Translation & authenticity</h3>
              <ul>
                <li>Documents not issued in English must be officially translated into English.</li>
                <li>Final admission requires the complete document set listed above.</li>
                <li>Keep scanned copies clear and complete before submitting.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="scholarships" className="section section--alt">
        <div className="container">
          <SectionTitle
            subtitle="Investment"
            title="Scholarships and fees"
            description="Extensive scholarship pathways and transparent tuition for international students (2026–2027 reference)."
          />

          <div className="admissions-scholarship-grid">
            {scholarshipHighlights.map((item) => (
              <article key={item.title} className="admissions-scholarship-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>

          <h3 className="admissions-subhead">Tuition fees</h3>
          <div className="admissions-table-wrap">
            <table className="admissions-table">
              <thead>
                <tr>
                  <th>Programme</th>
                  <th>Tuition</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {tuitionFees.map((row) => (
                  <tr key={row.program}>
                    <td>{row.program}</td>
                    <td><strong>{row.fee}</strong></td>
                    <td>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="admissions-subhead">Estimated living costs (Goseong / Sokcho)</h3>
          <ul className="admissions-living">
            {livingCosts.map((row) => (
              <li key={row.item}>
                <span>{row.item}</span>
                <strong>{row.cost}</strong>
              </li>
            ))}
          </ul>

          <p className="admissions-footnote">
            Scholarships, fees, and living estimates are subject to revision by KDU Global. Confirm current figures with Admissions when you apply.
          </p>
        </div>
      </section>

      <section id="faq" className="section">
        <div className="container">
          <SectionTitle subtitle="Questions" title="Frequently asked questions" />
          <div className="admissions-faq">
            {displayFaqs.map((faq) => (
              <details key={faq.q} className="admissions-faq__item">
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container admissions-cta-band">
          <div>
            <h2>Ready to begin?</h2>
            <p>Start your application or write to Admissions with your questions.</p>
          </div>
          <div className="admissions-cta-band__actions">
            <Button href={APPLICATION_FORM_URL} variant="primary" size="lg">
              Apply now
            </Button>
            <Button href={`mailto:${admissionsEmail}`} variant="outline" size="lg">
              {admissionsEmail}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

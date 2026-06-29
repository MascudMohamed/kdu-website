import SectionTitle from '../common/SectionTitle';
import '../../styles/components/DepartmentFAQ.css';

export default function DepartmentFAQ({ faqs }) {
  return (
    <section className="section section--alt department-faq" id="faq">
      <div className="container">
        <SectionTitle
          subtitle="FAQ"
          title="Frequently Asked Questions"
          description="Find answers to common questions about admissions, program structure, and career outcomes."
        />
        <div className="department-faq__list">
          {faqs.map((faq) => (
            <details key={faq.question} className="department-faq__item">
              <summary>
                <span className="department-faq__category">{faq.category}</span>
                {faq.question}
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import DeptSectionHeader from './DeptSectionHeader';
import CurriculumAccordion from './CurriculumAccordion';
import '../../styles/components/dept-editorial.css';
import '../../styles/components/DeptCurriculumHighlights.css';

export default function DeptCurriculumHighlights({ highlights, curriculum }) {
  const [showFull, setShowFull] = useState(false);

  if (!highlights?.length) return null;

  return (
    <section className="dept-section dept-curriculum" id="curriculum">
      <div className="container">
        <DeptSectionHeader
          eyebrow="Academic Structure"
          title="Curriculum highlights"
          lead="A structured progression from foundational knowledge to advanced specialization, designed for clarity and professional readiness."
        />

        <ol className="dept-curriculum__timeline">
          {highlights.map((item) => (
            <li key={item.year} className="dept-curriculum__step">
              <div className="dept-curriculum__marker">
                <span>Year {item.year}</span>
              </div>
              <div className="dept-curriculum__content">
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="dept-curriculum__toggle">
          <button
            type="button"
            className="dept-curriculum__toggle-btn"
            onClick={() => setShowFull((v) => !v)}
            aria-expanded={showFull}
          >
            {showFull ? 'Hide full curriculum' : 'View full curriculum'}
            <span aria-hidden="true">{showFull ? '−' : '+'}</span>
          </button>
        </div>

        {showFull && curriculum?.length > 0 && (
          <div className="dept-curriculum__full">
            <CurriculumAccordion curriculum={curriculum} embedded />
          </div>
        )}
      </div>
    </section>
  );
}

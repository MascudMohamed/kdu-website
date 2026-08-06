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
          lead="Specialisations that build from core foundations to advanced professional practice."
        />

        <ol className="dept-curriculum__timeline">
          {highlights.map((item) => (
            <li key={item.title || item.year} className="dept-curriculum__step">
              <div className="dept-curriculum__marker">
                <span>Specialization</span>
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
            className="dept-curriculum__view-details"
            onClick={() => setShowFull((v) => !v)}
            aria-expanded={showFull}
          >
            {showFull ? 'Hide details' : 'View details'}
          </button>
        </div>

        {showFull && curriculum?.length > 0 && (
          <div className="dept-curriculum__full">
            <CurriculumAccordion
              curriculum={curriculum}
              highlights={highlights}
              embedded
            />
          </div>
        )}
      </div>
    </section>
  );
}

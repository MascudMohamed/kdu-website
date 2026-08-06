import { useEffect, useId, useRef, useState } from 'react';
import { STUDENT_SERVICES } from '../../data/studentServices';
import '../../styles/components/StudentServicesCatalogue.css';

export default function ServicesSection() {
  const [activeId, setActiveId] = useState(null);
  const dialogRef = useRef(null);
  const titleId = useId();
  const active = STUDENT_SERVICES.find((s) => s.id === activeId) || null;

  useEffect(() => {
    if (!active) return undefined;

    const previouslyFocused = document.activeElement;
    const node = dialogRef.current;
    node?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActiveId(null);
    };

    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [active]);

  return (
    <section id="services" className="office-section student-services-catalogue">
      <h2>Student Services Centre</h2>
      <p className="student-services-catalogue__intro">
        Explore 25 support services for international students — from part-time job placement
        and visa help to counselling, career development, and campus life. Select a service
        to see how to use it.
      </p>

      <div className="student-services-catalogue__grid">
        {STUDENT_SERVICES.map((service) => (
          <article key={service.id} className="student-services-catalogue__card">
            <h3>{service.title}</h3>
            <p>{service.summary}</p>
            <button
              type="button"
              className="student-services-catalogue__btn"
              onClick={() => setActiveId(service.id)}
              aria-haspopup="dialog"
            >
              How to use
            </button>
          </article>
        ))}
      </div>

      {active && (
        <div
          className="student-services-catalogue__overlay"
          onClick={() => setActiveId(null)}
          role="presentation"
        >
          <div
            ref={dialogRef}
            className="student-services-catalogue__modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="student-services-catalogue__modal-head">
              <h3 id={titleId}>{active.title}</h3>
              <button
                type="button"
                className="student-services-catalogue__modal-close"
                onClick={() => setActiveId(null)}
              >
                Close
              </button>
            </div>

            <p className="student-services-catalogue__modal-summary">{active.summary}</p>

            <h4>How to use this service</h4>
            <ol>
              {active.howToUse.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>

            {active.eligibility?.length > 0 && (
              <>
                <h4>Eligibility & rules</h4>
                <ul>
                  {active.eligibility.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {active.note && (
              <p className="student-services-catalogue__note">{active.note}</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

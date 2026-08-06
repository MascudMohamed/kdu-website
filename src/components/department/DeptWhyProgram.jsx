import DeptSectionHeader from './DeptSectionHeader';
import DeptEventsSlider from './DeptEventsSlider';

import '../../styles/components/dept-editorial.css';
import '../../styles/components/DeptWhyProgram.css';

export default function DeptWhyProgram({
  items,
  philosophy,
  events = [],
  departmentName,
}) {
  if (!items?.length) return null;

  const title = departmentName
    ? `Why ${departmentName} at Kyungdong University`
    : 'Why this programme at Kyungdong University';

  return (
    <section className="dept-section dept-why" id="why-program">
      <div className="container">

        <DeptSectionHeader
          eyebrow="The Programme"
          title={title}
          lead={philosophy}
        />

        <div className="dept-why__layout">

          <div className="dept-why__list">

            {items.map((item, i) => (
              <article
                key={item.title}
                className="dept-why__item"
              >
                <span
                  className="dept-why__index"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}

          </div>

          <DeptEventsSlider events={events} />

        </div>

      </div>
    </section>
  );
}

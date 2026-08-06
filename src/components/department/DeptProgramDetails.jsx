import DeptSectionHeader from './DeptSectionHeader';
import '../../styles/components/dept-editorial.css';
import '../../styles/components/DeptProgramDetails.css';

export default function DeptProgramDetails({
  courseOutline,
  competencies,
  careers,
  careerOutcomes,
}) {
  const hasOutline = courseOutline?.length > 0;
  const hasCompetencies = competencies?.length > 0;
  const careerList = careers?.length
    ? careers
    : (careerOutcomes?.destinations || []).map((title) => ({
        title,
        description: careerOutcomes?.lead || '',
      }));
  const hasCareers = careerList.length > 0;

  if (!hasOutline && !hasCompetencies && !hasCareers) return null;

  return (
    <section className="dept-section dept-program-details" id="program-details">
      <div className="container">
        {hasOutline && (
          <div className="dept-program-details__block">
            <DeptSectionHeader
              eyebrow="Structure"
              title="Course outline"
              lead="How the programme is organised across specialisations and learning stages."
            />
            <ol className="dept-program-details__outline">
              {courseOutline.map((item) => (
                <li key={item.title || item.year}>
                  <span className="dept-program-details__label">
                    {item.label || item.title}
                  </span>
                  <p>{item.summary || item.description}</p>
                </li>
              ))}
            </ol>
          </div>
        )}

        {hasCompetencies && (
          <div className="dept-program-details__block">
            <DeptSectionHeader
              eyebrow="Outcomes"
              title="Competencies"
              lead="Capabilities you develop through coursework, projects, and professional practice."
            />
            <ul className="dept-program-details__competencies">
              {competencies.map((item) => (
                <li key={typeof item === 'string' ? item : item.title}>
                  {typeof item === 'string' ? (
                    <p>{item}</p>
                  ) : (
                    <>
                      <h3>{item.title}</h3>
                      {item.description && <p>{item.description}</p>}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {hasCareers && (
          <div className="dept-program-details__block">
            <DeptSectionHeader
              eyebrow="After graduation"
              title="Career opportunities"
              lead={careerOutcomes?.lead || 'Pathways open to graduates of this programme.'}
            />
            <div className="dept-program-details__careers">
              {careerList.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  {item.description && <p>{item.description}</p>}
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

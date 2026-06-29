import DeptSectionHeader from './DeptSectionHeader';
import '../../styles/components/dept-editorial.css';
import '../../styles/components/DeptResearch.css';

export default function DeptResearch({ areas }) {
  if (!areas?.length) return null;

  const [featured, ...supporting] = areas;

  return (
    <section className="dept-section dept-research" id="research">
      <div className="container">
        <DeptSectionHeader
          eyebrow="Research & Innovation"
          title="Advancing knowledge with impact"
          lead="Faculty-led research addressing real-world challenges through collaboration with industry and international partners."
        />

        <article className="dept-research__featured">
          <div className="dept-research__featured-content">
            <h3>{featured.title}</h3>
            <p className="dept-prose">{featured.description}</p>
            {featured.impact && (
              <p className="dept-research__impact"><strong>Impact:</strong> {featured.impact}</p>
            )}
            {featured.faculty?.length > 0 && (
              <p className="dept-research__faculty">
                <strong>Faculty:</strong> {featured.faculty.join(', ')}
              </p>
            )}
          </div>
        </article>

        {supporting.length > 0 && (
          <div className="dept-research__supporting">
            {supporting.map((area) => (
              <article key={area.title} className="dept-research__item">
                <h4>{area.title}</h4>
                <p>{area.description}</p>
                {area.faculty?.length > 0 && (
                  <span className="dept-research__item-faculty">{area.faculty.join(' · ')}</span>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

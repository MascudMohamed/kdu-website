import DeptSectionHeader from './DeptSectionHeader';
import '../../styles/components/dept-editorial.css';
import '../../styles/components/DeptCareerOutcomes.css';

export default function DeptCareerOutcomes({ outcomes, careers }) {
  if (!outcomes) return null;

  return (
    <section className="dept-section dept-section--alt dept-careers" id="careers">
      <div className="container">
        <DeptSectionHeader
          eyebrow="Graduate Outcomes"
          title="Career outcomes"
          lead={outcomes.lead}
        />

        {outcomes.stats?.length > 0 && (
          <div className="dept-careers__stats" role="list">
            {outcomes.stats.map((stat) => (
              <div key={stat.label} className="dept-careers__stat" role="listitem">
                <span className="dept-careers__stat-value">{stat.value}</span>
                <span className="dept-careers__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        )}

        <div className="dept-careers__grid">
          {outcomes.destinations?.length > 0 && (
            <div className="dept-careers__block">
              <h3>Graduate destinations</h3>
              <ul className="dept-careers__destinations">
                {outcomes.destinations.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="dept-careers__block">
            {outcomes.internships && (
              <>
                <h3>Internship opportunities</h3>
                <p className="dept-prose">{outcomes.internships}</p>
              </>
            )}
            {outcomes.demand && (
              <>
                <h3 className="dept-careers__subhead">Industry demand</h3>
                <p className="dept-prose">{outcomes.demand}</p>
              </>
            )}
          </div>
        </div>

        {careers?.length > 0 && (
          <div className="dept-careers__roles">
            <h3>Representative roles</h3>
            <ul className="dept-careers__roles-list">
              {careers.map((c) => (
                <li key={c.title}>
                  <strong>{c.title}</strong>
                  <span>{c.description}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

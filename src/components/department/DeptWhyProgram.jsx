import DeptSectionHeader from './DeptSectionHeader';
import '../../styles/components/dept-editorial.css';
import '../../styles/components/DeptWhyProgram.css';

export default function DeptWhyProgram({ items, philosophy }) {
  if (!items?.length) return null;

  return (
    <section className="dept-section dept-why" id="why-program">
      <div className="container">
        <DeptSectionHeader
          eyebrow="The Program"
          title="Why this program"
          lead={philosophy}
        />
        <div className="dept-why__list">
          {items.map((item, i) => (
            <article key={item.title} className="dept-why__item">
              <span className="dept-why__index" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

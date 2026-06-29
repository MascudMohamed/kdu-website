export default function DeptSectionHeader({ eyebrow, title, lead, id, align = 'left' }) {
  return (
    <header
      className={`dept-section-header dept-section-header--${align}`}
      id={id}
    >
      {eyebrow && <span className="dept-section-header__eyebrow">{eyebrow}</span>}
      <h2 className="dept-section-header__title">{title}</h2>
      {lead && <p className="dept-section-header__lead">{lead}</p>}
    </header>
  );
}

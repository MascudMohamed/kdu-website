import '../../styles/components/SectionBadge.css';

/** Non-emoji section marker — first letter of title or optional index number. */
export default function SectionBadge({ title, index, className = '' }) {
  const label = typeof index === 'number'
    ? String(index + 1).padStart(2, '0')
    : (title?.trim()[0]?.toUpperCase() || 'K');

  return (
    <span className={`section-badge ${className}`.trim()} aria-hidden="true">
      {label}
    </span>
  );
}

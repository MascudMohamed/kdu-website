import { useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import FacultyCard from './FacultyCard';
import { FACULTY_FILTERS } from '../../constants/navigation';
import '../../styles/components/FacultyGrid.css';

export default function FacultyGrid({ faculty }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? faculty
      : faculty.filter((f) => f.rank === activeFilter);

  return (
    <section className="section faculty-section" id="faculty">
      <div className="container">
        <SectionTitle
          subtitle="Our Team"
          title="Faculty & Staff"
          description="Meet the distinguished educators and researchers shaping the future of our program."
        />

        <div className="faculty-grid__filters" role="group" aria-label="Filter faculty by rank">
          {FACULTY_FILTERS.map((filter) => (
            <button
              key={filter}
              className={`faculty-grid__filter ${activeFilter === filter ? 'faculty-grid__filter--active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="faculty-grid__list grid grid--3">
          {filtered.map((member) => (
            <FacultyCard key={member.id} faculty={member} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="faculty-grid__empty">No faculty members found for this filter.</p>
        )}
      </div>
    </section>
  );
}

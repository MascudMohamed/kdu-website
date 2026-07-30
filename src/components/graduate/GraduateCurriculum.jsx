import { useState } from 'react';
import { motion } from 'framer-motion';
import '../../styles/components/graduate/GraduateCurriculum.css';

export default function GraduateCurriculum({ curriculum }) {
  const majors = curriculum?.majors || {};
  const keys = Object.keys(majors);
  const [selected, setSelected] = useState(keys[0] || 'ai');

  if (!curriculum || !keys.length) return null;

  const active = majors[selected];

  return (
    <section className="graduate-curriculum section" id="curriculum" aria-labelledby="curriculum-title">
      <div className="container">
        <div className="graduate-section-heading">
          <span>Curriculum</span>
          <h2 id="curriculum-title">Curriculum Components</h2>
          <p>
            Every graduate student completes a common foundation before specialising in their chosen discipline and
            selecting interdisciplinary convergence electives.
          </p>
        </div>

        <div className="curriculum-tabs">
          {keys.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setSelected(key)}
              className={selected === key ? 'active' : ''}
            >
              {majors[key].title}
            </button>
          ))}
        </div>

        <motion.div
          key={selected}
          className="curriculum-grid"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="curriculum-card">
            <h3>Core Courses (9 credits)</h3>
            <ul>
              {curriculum.core.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </div>

          <div className="curriculum-card">
            <h3>Major Electives — {active.title}</h3>
            <ul>
              {active.courses.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </div>

          <div className="curriculum-card">
            <h3>Convergence Electives (9 credits)</h3>
            <ul>
              {curriculum.convergence.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        <p className="curriculum-note">※ Course offerings are subject to revisions and changes.</p>
      </div>
    </section>
  );
}

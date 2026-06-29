import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import '../../styles/components/CurriculumSection.css';

export default function CurriculumSection({ curriculum }) {
  const [activeYear, setActiveYear] = useState(0);

  return (
    <section className="section section--alt curriculum" id="curriculum">
      <div className="container">
        <SectionTitle
          subtitle="Curriculum"
          title="Program Structure"
          description="A comprehensive four-year curriculum designed for academic and professional excellence."
        />

        <div className="curriculum__tabs" role="tablist">
          {curriculum.map((year, index) => (
            <button
              key={year.year}
              role="tab"
              aria-selected={activeYear === index}
              className={`curriculum__tab ${activeYear === index ? 'curriculum__tab--active' : ''}`}
              onClick={() => setActiveYear(index)}
            >
              Year {year.year}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeYear}
            className="curriculum__content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            role="tabpanel"
          >
            {curriculum[activeYear].semesters.map((semester) => (
              <div key={semester.name} className="curriculum__semester">
                <h3>{semester.name}</h3>
                <div className="curriculum__courses">
                  <div className="curriculum__course-group">
                    <h4>Major Courses</h4>
                    <ul>
                      {semester.majorCourses.map((course, i) => (
                        <li key={i}>
                          <span className="curriculum__course-code">{course.code}</span>
                          <span className="curriculum__course-name">{course.name}</span>
                          <span className="curriculum__course-credits">{course.credits} cr</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {semester.electives?.length > 0 && (
                    <div className="curriculum__course-group">
                      <h4>Electives</h4>
                      <ul>
                        {semester.electives.map((course, i) => (
                          <li key={i}>
                            <span className="curriculum__course-code">{course.code}</span>
                            <span className="curriculum__course-name">{course.name}</span>
                            <span className="curriculum__course-credits">{course.credits} cr</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

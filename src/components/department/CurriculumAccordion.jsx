import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import '../../styles/components/CurriculumAccordion.css';

function normalizeCategory(raw) {
  const value = String(raw || '').toLowerCase();
  if (value.includes('general')) return 'General Elective';
  return 'Major Elective';
}

function categoryClass(label) {
  return label === 'General Elective' ? 'general' : 'major';
}

function specializationLabel(yearBlock, yearIdx, highlights) {
  const fromHighlight = highlights?.[yearIdx]?.title;
  if (fromHighlight) return fromHighlight;
  if (yearBlock.specialization) return yearBlock.specialization;
  if (yearBlock.title && !/^year\s*\d+/i.test(yearBlock.title)) return yearBlock.title;
  return `Specialization ${yearIdx + 1}`;
}

export default function CurriculumAccordion({
  curriculum,
  highlights = [],
  embedded = false,
}) {
  const [openYear, setOpenYear] = useState(0);
  const [openSemester, setOpenSemester] = useState('0-0');

  const toggleSemester = (yearIdx, semIdx) => {
    const key = `${yearIdx}-${semIdx}`;
    setOpenYear(yearIdx);
    setOpenSemester(openSemester === key ? '' : key);
  };

  const years = (
        <div className="curriculum-acc__years">
          {curriculum.map((year, yearIdx) => {
            const label = specializationLabel(year, yearIdx, highlights);
            return (
            <div key={year.year ?? label} className="curriculum-acc__year">
              <button
                type="button"
                className={`curriculum-acc__year-btn ${openYear === yearIdx ? 'curriculum-acc__year-btn--open' : ''}`}
                onClick={() => setOpenYear(openYear === yearIdx ? -1 : yearIdx)}
                aria-expanded={openYear === yearIdx}
              >
                {label}
                <span className="curriculum-acc__chevron" aria-hidden="true">▾</span>
              </button>

              <AnimatePresence>
                {openYear === yearIdx && (
                  <motion.div
                    className="curriculum-acc__year-content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {year.semesters.map((semester, semIdx) => {
                      const key = `${yearIdx}-${semIdx}`;
                      const isOpen = openSemester === key;
                      const courses = [
                        ...(semester.majorCourses || []),
                        ...(semester.electives || []),
                      ].map((course) => ({
                        ...course,
                        category: normalizeCategory(course.category),
                      }));
                      return (
                        <div key={semester.name} className="curriculum-acc__semester">
                          <button
                            type="button"
                            className={`curriculum-acc__sem-btn ${isOpen ? 'curriculum-acc__sem-btn--open' : ''}`}
                            onClick={() => toggleSemester(yearIdx, semIdx)}
                            aria-expanded={isOpen}
                          >
                            {semester.name}
                            <span aria-hidden="true">▾</span>
                          </button>
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                className="curriculum-acc__courses"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                              >
                                <table className="curriculum-acc__table">
                                  <thead>
                                    <tr>
                                      <th>Code</th>
                                      <th>Course Title</th>
                                      <th>Credits</th>
                                      <th>Category</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {courses.map((course) => (
                                      <tr key={course.code}>
                                        <td data-label="Code">{course.code}</td>
                                        <td data-label="Course">{course.name}</td>
                                        <td data-label="Credits">{course.credits}</td>
                                        <td data-label="Category">
                                          <span className={`curriculum-acc__cat curriculum-acc__cat--${categoryClass(course.category)}`}>
                                            {course.category}
                                          </span>
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            );
          })}
        </div>
  );

  if (embedded) {
    return <div className="curriculum-acc curriculum-acc--embedded">{years}</div>;
  }

  return (
    <section className="section section--alt curriculum-acc" id="curriculum">
      <div className="container">
        <SectionTitle
          subtitle="Curriculum"
          title="Program Structure"
          description="Explore specialisations and elective pathways within the programme."
        />
        {years}
      </div>
    </section>
  );
}

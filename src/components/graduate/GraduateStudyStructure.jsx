import { motion } from 'framer-motion';
import '../../styles/components/graduate/GraduateStudyStructure.css';

export default function GraduateStudyStructure({ courseOutline }) {
  if (!courseOutline) return null;

  const { duration, graduationRequirements, classroomLoading } = courseOutline;

  return (
    <section className="graduate-study section section--alt" id="course-outline" aria-labelledby="course-outline-title">
      <div className="container">
        <motion.div
          className="graduate-section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>Course Outline</span>
          <h2 id="course-outline-title">Duration, credits & classroom loading</h2>
          <p>
            Research Track (4 semesters) or Coursework Track (5 semesters). Graduation requires 30 credits across
            Core, Major Elective, and Convergence Elective courses.
          </p>
        </motion.div>

        <div className="study-overview-grid">
          {duration?.map((item, index) => (
            <motion.div
              key={item.label}
              className="study-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <h3>{item.label}</h3>
              <h2>{item.value}</h2>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="graduate-requirements"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3>Graduation Requirements</h3>
          <p className="graduate-requirements__lead">
            Graduation Credit Requirement: 30 credits (10 courses × 3 credits). Students must accumulate credits
            from designated Core, Major Elective, and Convergence Elective courses.
          </p>
          <div className="graduate-table-wrap">
            <table className="graduate-table">
              <thead>
                <tr>
                  <th>Programme</th>
                  <th>Core</th>
                  <th>Major Elective</th>
                  <th>Convergence Elective</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {graduationRequirements?.map((row) => (
                  <tr key={row.programme}>
                    <td>{row.programme}</td>
                    <td>{row.core}</td>
                    <td>{row.major}</td>
                    <td>{row.convergence}</td>
                    <td>{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          className="credit-distribution"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3>Classroom Loading</h3>
          <div className="credit-grid">
            {classroomLoading?.map((item) => (
              <div className="credit-card" key={item.label}>
                <h4>{item.label}</h4>
                <h2>{item.value}</h2>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

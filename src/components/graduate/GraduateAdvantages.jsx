import "../../styles/components/graduate/GraduateAdvantages.css";

export default function GraduateAdvantages() {
  return (
    <section className="graduate-advantages section">
      <div className="container">
        <h2>Why Choose KDU Graduate School?</h2>

        <div className="graduate-advantages-grid">
          <div className="advantage-card">
            <h3>100% English Programs</h3>
            <p>
              Graduate programs are delivered entirely in English for
              international students.
            </p>
          </div>

          <div className="advantage-card">
            <h3>Industry-Oriented Curriculum</h3>
            <p>
              Courses are designed around real-world projects and industry
              needs.
            </p>
          </div>

          <div className="advantage-card">
            <h3>Global Opportunities</h3>
            <p>
              Exchange programs, research collaboration, and international
              partnerships.
            </p>
          </div>

          <div className="advantage-card">
            <h3>Scholarship Support</h3>
            <p>
              International students can receive generous tuition scholarships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
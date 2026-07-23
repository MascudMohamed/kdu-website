import { useState } from "react";
import { motion } from "framer-motion";
import "../../styles/components/graduate/GraduateCurriculum.css";

const curriculum = {
  ai: {
    title: "Artificial Intelligence & Data Science",
    icon: "🤖",
    courses: [
      "Neural Networks",
      "Machine Learning",
      "Deep Learning",
      "Database Management Systems",
      "Data Science",
      "Data Mining",
      "Seminar in AI Practices",
      "Seminar in Data Science Practices",
    ],
  },

  business: {
    title: "International Business Administration",
    icon: "📈",
    courses: [
      "International Business Strategy",
      "Digital Business Applications",
      "Innovations & Entrepreneurship",
      "International Economics & Finance",
      "Data Analytics",
      "Seminar in Business & Technology Practices",
    ],
  },

  hospitality: {
    title: "International Hospitality & Tourism",
    icon: "🏨",
    courses: [
      "Strategic Management in Tourism",
      "Global Trends in Food Service",
      "Project Management",
      "Applied Human Resource Management",
      "Global Dynamics in Hospitality",
      "New Ventures Formulation",
      "Seminar in Hospitality Practices",
    ],
  },
};

const convergence = [
  "Advanced Computer Vision",
  "AI in Healthcare",
  "Natural Language Processing",
  "Reinforcement Learning",
  "Big Data Analytics",
  "Internet of Things (IoT)",
  "Project Management",
  "Business Intelligence",
  "SNS & Media Communications",
  "Special Topics in Business & Technology",
  "Innovative Marketing",
  "Venue Operations & Management",
  "Hospitality Supply Chain",
  "Transformational Leadership",
  "Lifestyle & Wellness Management",
  "Professional Seminar",
  "Research Project I",
  "Research Project II",
];

const core = [
  "Introduction to Business & Technology Convergence",
  "Probability & Statistics",
  "Applied Research Methodology",
  "Programming",
];

export default function GraduateCurriculum() {

  const [selected, setSelected] = useState("ai");

  return (

    <section className="graduate-curriculum section">

      <div className="container">

        <div className="graduate-section-heading">

          <span>Curriculum</span>

          <h2>Curriculum Components</h2>

          <p>
            Every graduate student completes a common foundation before
            specializing in their chosen discipline and selecting
            interdisciplinary convergence electives.
          </p>

        </div>

        <div className="curriculum-tabs">

          {Object.entries(curriculum).map(([key, program]) => (

            <button
              key={key}
              onClick={() => setSelected(key)}
              className={selected === key ? "active" : ""}
            >
              {program.icon} {program.title}
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

            <h3>Core Courses</h3>

            <ul>
              {core.map(course => (
                <li key={course}>{course}</li>
              ))}
            </ul>

          </div>

          <div className="curriculum-card">

            <h3>{curriculum[selected].title}</h3>

            <ul>
              {curriculum[selected].courses.map(course => (
                <li key={course}>{course}</li>
              ))}
            </ul>

          </div>

          <div className="curriculum-card">

            <h3>Convergence Electives</h3>

            <ul>
              {convergence.map(course => (
                <li key={course}>{course}</li>
              ))}
            </ul>

          </div>

        </motion.div>

        <p className="curriculum-note">
          * Course offerings are subject to revision and periodic curriculum
          updates.
        </p>

      </div>

    </section>

  );
}
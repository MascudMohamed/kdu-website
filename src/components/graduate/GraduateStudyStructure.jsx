import { motion } from "framer-motion";
import "../../styles/components/graduate/GraduateStudyStructure.css";

const overview = [
  {
    title: "Duration",
    value: "2 – 2.5 Years",
    description: "Research Track (4 semesters) or Coursework Track (5 semesters)",
  },
  {
    title: "Language",
    value: "100% English",
    description: "All lectures and assessments are conducted in English.",
  },
  {
    title: "Graduation Credits",
    value: "30 Credits",
    description: "10 Courses × 3 Credits",
  },
  {
    title: "Class Schedule",
    value: "1 Day / Week",
    description: "2 Courses • 6 Hours Weekly • 15 Weeks/Semester",
  },
];

const creditDistribution = [
  {
    title: "Core Courses",
    credits: "9 Credits",
    courses: "3 Courses",
    color: "#005BAC",
  },
  {
    title: "Major Electives",
    credits: "12 Credits",
    courses: "4 Courses",
    color: "#009879",
  },
  {
    title: "Convergence Electives",
    credits: "9 Credits",
    courses: "3 Courses",
    color: "#F39C12",
  },
];

export default function GraduateStudyStructure() {
  return (
    <section className="graduate-study section">
      <div className="container">

        <motion.div
          className="graduate-section-heading"
          initial={{ opacity:0,y:25 }}
          whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }}
        >
          <span>Academic Structure</span>

          <h2>Study Structure</h2>

          <p>
            Graduate programs are designed to balance research,
            practical learning, and interdisciplinary education through
            flexible study tracks and a structured curriculum.
          </p>

        </motion.div>

        <div className="study-overview-grid">

          {overview.map((item,index)=>(
            <motion.div
              key={item.title}
              className="study-card"
              initial={{opacity:0,y:25}}
              whileInView={{opacity:1,y:0}}
              transition={{delay:index*.1}}
              viewport={{once:true}}
            >
              <h3>{item.title}</h3>
              <h2>{item.value}</h2>
              <p>{item.description}</p>
            </motion.div>
          ))}

        </div>

        <div className="graduate-track-wrapper">

          <motion.div
            className="graduate-track-card"
            initial={{opacity:0,x:-40}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
          >

            <h3>Research Track</h3>

            <div className="track-duration">
              4 Semesters
            </div>

            <p>
              Students complete coursework while conducting supervised
              research leading to advanced academic and research careers.
            </p>

          </motion.div>

          <motion.div
            className="graduate-track-card"
            initial={{opacity:0,x:40}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
          >

            <h3>Coursework Track</h3>

            <div className="track-duration">
              5 Semesters
            </div>

            <p>
              Designed for professionals seeking industry-focused
              knowledge with extensive project-based learning.
            </p>

          </motion.div>

        </div>

        <motion.div
          className="credit-distribution"
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
        >

          <h3>Credit Distribution</h3>

          <div className="credit-grid">

            {creditDistribution.map((item)=>(
              <div className="credit-card" key={item.title}>

                <div
                  className="credit-line"
                  style={{background:item.color}}
                />

                <h4>{item.title}</h4>

                <h2>{item.credits}</h2>

                <p>{item.courses}</p>

              </div>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}
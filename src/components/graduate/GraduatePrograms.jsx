import { motion } from "framer-motion";
import Button from "../common/Button";
import "../../styles/components/graduate/GraduatePrograms.css";

export default function GraduatePrograms({ programs }) {
  if (!programs?.length) return null;

  return (
    <section className="graduate-programs section">
      <div className="container">

        <motion.div
          className="graduate-programs__header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="graduate-programs__eyebrow">
            Graduate Degrees
          </span>

          <h2>Explore Our Graduate Programs</h2>

          <p>
            Advance your expertise through interdisciplinary graduate
            education combining research excellence, practical learning,
            and international collaboration.
          </p>
        </motion.div>

        <div className="graduate-programs__grid">

          {programs.map((program, index) => (

            <motion.article
              key={program.title}
              className="graduate-program"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >

              <div className="graduate-program__image">
                <img
                  src={program.image}
                  alt={program.title}
                />
              </div>

              <div className="graduate-program__body">

                <span className="graduate-program__degree">
                  {program.degree}
                </span>

                <h3>{program.title}</h3>

                <p>{program.description}</p>

                <div className="graduate-program__meta">

                  <span>{program.duration}</span>

                  <span>{program.language}</span>

                </div>

                <ul>

                  {program.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}

                </ul>

                <Button
                  to={program.link}
                  variant="outline"
                >
                  Learn More
                </Button>

              </div>

            </motion.article>

          ))}

        </div>

      </div>
    </section>
  );
}
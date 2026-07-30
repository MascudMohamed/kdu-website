import { motion } from 'framer-motion';
import '../../styles/components/graduate/GraduatePrograms.css';

export default function GraduatePrograms({ programs }) {
  if (!programs?.length) return null;

  return (
    <section className="graduate-programs section" id="programmes" aria-labelledby="graduate-programmes-title">
      <div className="container">
        <motion.div
          className="graduate-programs__header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="graduate-programs__eyebrow">Graduate Degrees</span>
          <h2 id="graduate-programmes-title">Graduate degree programmes</h2>
          <p>
            K-Global GSBTC offers three interdisciplinary master’s programmes designed for international and
            domestic students.
          </p>
        </motion.div>

        <div className="graduate-programs__grid">
          {programs.map((program, index) => (
            <motion.article
              key={program.id || program.title}
              className="graduate-program"
              id={program.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="graduate-program__image">
                <img src={program.image} alt="" loading="lazy" />
              </div>

              <div className="graduate-program__body">
                <span className="graduate-program__degree">{program.degree}</span>
                <h3>{program.title}</h3>
                <p>{program.description}</p>

                <div className="graduate-program__meta">
                  <span>{program.duration}</span>
                  <span>{program.language}</span>
                </div>

                {program.highlights?.length > 0 && (
                  <ul>
                    {program.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

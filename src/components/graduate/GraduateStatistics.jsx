import { motion } from "framer-motion";
import "../../styles/components/graduate/GraduateStatistics.css";

export default function GraduateStatistics({ statistics }) {
  if (!statistics?.length) return null;

  return (
    <section className="graduate-statistics section">
      <div className="container">

        <motion.div
          className="graduate-statistics__header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="graduate-statistics__eyebrow">
            Graduate School
          </span>

          <h2>Graduate at a Glance</h2>

          <p>
            A flexible, research-driven graduate education designed for
            professionals, innovators, and future leaders.
          </p>
        </motion.div>

        <div className="graduate-statistics__grid">

          {statistics.map((item, index) => (

            <motion.div
              key={item.label}
              className="graduate-statistics__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >

              <h3>{item.value}</h3>

              <h4>{item.label}</h4>

              <p>{item.description}</p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}
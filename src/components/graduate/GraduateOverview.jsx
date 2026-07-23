import { motion } from "framer-motion";
import "./../../styles/components/graduate/GraduateOverview.css";

export default function GraduateOverview({ overview }) {
  if (!overview) return null;

  return (
    <section className="graduate-overview section">
      <div className="container">

        <motion.div
          className="graduate-overview__heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="graduate-overview__eyebrow">
            Graduate Education
          </span>

          <h2>
            K-Global Graduate School of Business and Technology Convergence
          </h2>

          <p>
            Our graduate programs combine advanced academic research,
            interdisciplinary learning, and real-world industry collaboration
            to prepare future leaders in technology, business, and hospitality.
          </p>
        </motion.div>

        <div className="graduate-overview__grid">

          <motion.div
            className="graduate-overview__image"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={overview.image}
              alt="Graduate School"
            />
          </motion.div>

          <motion.div
            className="graduate-overview__content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>{overview.title}</h3>

            <p>{overview.description}</p>

            <div className="graduate-overview__features">

              {overview.features.map((item) => (

                <div
                  className="graduate-overview__feature"
                  key={item.title}
                >
                  <div className="graduate-overview__icon">
                    {item.icon}
                  </div>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>

                </div>

              ))}

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
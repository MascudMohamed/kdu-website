import { motion } from "framer-motion";
import "../../styles/components/LeadershipMessage.css";

export default function LeadershipMessage({
  title = "Leadership Message",
  leader,
}) {
  if (!leader) return null;

  return (
    <section className="leadership-message section">
      <div className="container">

        <motion.div
          className="leadership-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">{title}</span>

          <h2>{leader.name}</h2>

          <p className="leader-position">
            {leader.position}
          </p>
        </motion.div>

        <div className="leadership-content">

          <motion.div
            className="leader-image"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={leader.image}
              alt={leader.name}
            />
          </motion.div>

          <motion.div
            className="leader-message"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="quote-icon">
              "
            </div>

            {leader.message
              .trim()
              .split("\n")
              .filter(Boolean)
              .map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}

            <div className="leader-signature">

              <h4>{leader.name}</h4>

              <span>{leader.position}</span>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
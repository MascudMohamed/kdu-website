import { motion } from "framer-motion";
import "../../styles/components/LeadershipMessage.css";

export default function LeadershipMessage({ title, leader }) {
  if (!leader) return null;

  return (
    <section className="leadership-message section">
      <div className="container">
        <motion.div
          className="leadership-message__wrapper"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="leadership-message__image">
            <img src={leader.photo} alt={leader.name} />
          </div>

          <div className="leadership-message__content">
            <span className="leadership-message__eyebrow">
              {title || leader.title}
            </span>

            <h2>{leader.name}</h2>

            <p className="leadership-message__position">
              {leader.position}
            </p>

            <blockquote>
              {leader.message}
            </blockquote>

            {leader.signature && (
              <img
                src={leader.signature}
                alt={`${leader.name} signature`}
                className="leadership-message__signature"
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
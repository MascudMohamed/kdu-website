import { motion } from "framer-motion";
import "../../styles/components/graduate/GraduateScholarships.css";

const benefits = [
  {
    icon: "🎓",
    title: "Scholarships up to 100%",
    description:
      "International students may receive scholarships covering up to 100% of tuition upon admission and throughout their studies, subject to university policies.",
  },
  {
    icon: "💼",
    title: "Part-Time Job Support",
    description:
      "The International Office assists students with part-time employment opportunities while studying in Korea.",
  },
  {
    icon: "🚀",
    title: "Career Placement",
    description:
      "Graduate students receive professional career guidance and employment support upon successful completion of their degree.",
  },
  {
    icon: "🌍",
    title: "Global Opportunities",
    description:
      "Exchange, study abroad, research collaboration, and dual-degree opportunities with partner universities worldwide.",
  },
];

export default function GraduateScholarships() {
  return (
    <section className="graduate-scholarships section">

      <div className="container">

        <motion.div
          className="graduate-section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>Student Benefits</span>

          <h2>Scholarships & Student Support</h2>

          <p>
            KDU Global provides financial assistance, academic support,
            international services, and career development to help students
            succeed throughout their graduate studies.
          </p>

        </motion.div>

        <div className="graduate-benefits-grid">

          {benefits.map((item, index) => (

            <motion.div
              key={item.title}
              className="benefit-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >

              <div className="benefit-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
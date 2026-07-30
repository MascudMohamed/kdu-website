import { motion } from "framer-motion";
import "../../styles/components/graduate/GraduateStudyStructure.css";

const steps = [
  {
    number: "01",
    title: "Submit Online Application",
    description:
      "Complete the graduate application form and select your preferred graduate program.",
  },
  {
    number: "02",
    title: "Upload Required Documents",
    description:
      "Submit academic transcripts, passport copy, English proficiency documents, and any additional supporting materials.",
  },
  {
    number: "03",
    title: "Admission Review",
    description:
      "Applications are reviewed by the Graduate School for academic qualifications and eligibility.",
  },
  {
    number: "04",
    title: "Scholarship Evaluation",
    description:
      "Eligible applicants are automatically considered for available scholarship opportunities.",
  },
  {
    number: "05",
    title: "Receive Admission Offer",
    description:
      "Successful applicants receive an admission letter together with enrollment instructions.",
  },
  {
    number: "06",
    title: "Visa & Enrollment",
    description:
      "Prepare your visa, complete registration, and begin your graduate studies at KDU Global.",
  },
];

export default function GraduateApplicationProcess() {
  return (
    <section className="graduate-application section" id="admissions" aria-labelledby="admissions-title">

      <div className="container">

        <motion.div
          className="graduate-section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>Admissions</span>

          <h2 id="admissions-title">Application Journey</h2>

          <p>
            Applying to KDU Global Graduate School is a straightforward
            process. Follow the steps below to begin your academic journey.
          </p>

        </motion.div>

        <div className="application-timeline">

          {steps.map((step, index) => (

            <motion.div
              key={step.number}
              className="timeline-item"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
            >

              <div className="timeline-number">
                {step.number}
              </div>

              <div className="timeline-content">

                <h3>{step.title}</h3>

                <p>{step.description}</p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
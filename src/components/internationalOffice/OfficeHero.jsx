import { motion } from "framer-motion";
import { OFFICE_HERO } from "../../data/internationalOffice";

export default function OfficeHero() {
  return (
    <section className="office-hero">

      <motion.div
        className="office-hero__content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
      >

        <span className="office-hero__label">
          Kyungdong University
        </span>

        <h1>{OFFICE_HERO.title}</h1>

        <p>
          {OFFICE_HERO.subtitle}
        </p>

        <a
          href={OFFICE_HERO.buttonLink}
          className="office-btn"
        >
          {OFFICE_HERO.buttonText}
        </a>

      </motion.div>

    </section>
  );
}
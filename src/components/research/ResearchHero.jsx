import { motion } from "framer-motion";
import { RESEARCH_HERO } from "../../data/research";

export default function ResearchHero() {
  return (
    <section className="research-hero">

      <motion.div
        className="research-hero__content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
      >

        <span className="research-hero__label">
          Kyungdong University
        </span>

        <h1>
          {RESEARCH_HERO.title}
        </h1>

        <p>
          {RESEARCH_HERO.subtitle}
        </p>

        <a
          href={RESEARCH_HERO.buttonLink}
          className="research-btn"
        >
          {RESEARCH_HERO.buttonText}
        </a>

      </motion.div>

    </section>
  );
}
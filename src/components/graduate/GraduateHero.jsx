import { motion } from "framer-motion";
import Breadcrumb from "../common/Breadcrumb";
import Button from "../common/Button";
import { APPLICATION_FORM_URL } from "../../constants/links";
import "../../styles/components/graduate/GraduateHero.css";

export default function GraduateHero({ hero }) {
  if (!hero) return null;

  return (
    <section className="graduate-hero" aria-labelledby="graduate-hero-title">
      <img src={hero.image} alt="" className="graduate-hero__bg" />
      <div className="graduate-hero__overlay" />
      <div className="container graduate-hero__content">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Breadcrumb items={hero.breadcrumbs} />
          
          {hero.subtitle && (
            <p className="graduate-hero__subtitle">{hero.subtitle}</p>
          )}
          
          <h1 id="graduate-hero-title">{hero.title}</h1>
          
          <p className="graduate-hero__desc">{hero.description}</p>

          {hero.quickFacts && (
            <dl className="graduate-hero__meta">
              {Object.entries(hero.quickFacts).map(([key, value]) => (
                <div key={key} className="graduate-hero__meta-item">
                  <dt>{key}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          )}

          <div className="graduate-hero__actions">
            {hero.buttons?.map((button) => (
              <Button
                key={button.label}
                href={button.link}
                variant={button.variant || "primary"}
                size="lg"
              >
                {button.label}
              </Button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
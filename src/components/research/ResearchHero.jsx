import { Link } from "react-router-dom";

const ResearchHero = ({ hero }) => {
  return (
    <section className="research-hero">
      <div
        className="research-hero__bg"
        style={{
          backgroundImage: `
            linear-gradient(135deg,rgba(0,114,188,.90),rgba(11,45,91,.88)),
            url(${hero.image})
          `,
        }}
      />

      <div className="container">
        <div className="research-hero__content">

          <span className="research-hero__eyebrow">
            {hero.eyebrow}
          </span>

          <h1>{hero.title}</h1>

          <p>{hero.description}</p>

          <div className="research-hero__actions">

            <a href={hero.primaryPath} className="btn btn--primary">
              {hero.primaryLabel}
            </a>

            <a href={hero.secondaryPath} className="btn btn--outline-light">
              {hero.secondaryLabel}
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ResearchHero;
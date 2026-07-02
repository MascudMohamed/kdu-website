import { Link } from "react-router-dom";

import { hub } from "../../data/research";

import ResearchPageShell from "../../components/research/ResearchPageShell";

import "../../styles/pages/Research.css";

export default function ResearchHub() {
  return (
    <ResearchPageShell
      hero={hub.hero}
      navigation={hub.navigation}
    >
      <section className="research-featured section">
        <div className="container">

          <span className="research-featured__eyebrow">
            {hub.featured.eyebrow}
          </span>

          <div className="research-featured__inner">

            <img
              src={hub.featured.image}
              alt={hub.featured.title}
            />

            <div>

              <h2>{hub.featured.title}</h2>

              <p>{hub.featured.lead}</p>

            </div>

          </div>

        </div>
      </section>

      <section className="research-explore section">

        <div className="container">

          <header className="research-explore__header">

            <h2>Explore Research</h2>

            <p>
              Browse every research domain managed by the
              university.
            </p>

          </header>

          <div className="research-explore__grid">

            {hub.explore.map((item) => (

              <Link

                key={item.slug}

                to={`/research/${item.slug}`}

                className="research-card"

              >

                <div className="research-card__image">

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                </div>

                <div className="research-card__body">

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>
    </ResearchPageShell>
  );
}
import ResearchCard from "./ResearchCard";

export default function ResearchSpokeRenderer({

  page,

}) {

  if (!page) return null;

  return (

    <section className="research-section">

      <div className="container">

        <div className="research-section__header">

          <span>{page.eyebrow}</span>

          <h2>{page.title}</h2>

          <p>{page.description}</p>

        </div>

        {page.cards && (

          <div className="research-grid">

            {page.cards.map((card) => (

              <ResearchCard

                key={card.title}

                {...card}

              />

            ))}

          </div>

        )}

      </div>

    </section>

  );

}
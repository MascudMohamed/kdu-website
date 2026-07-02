import "./../../styles/components/ResearchCard.css";

export default function ResearchCard({
  title,
  description,
  image,
  link,
}) {
  return (
    <article className="research-card">
      {image && (
        <div className="research-card__image">
          <img src={image} alt={title} />
        </div>
      )}

      <div className="research-card__body">
        <h3>{title}</h3>

        <p>{description}</p>

        {link && (
          <a
            href={link}
            className="research-card__link"
          >
            Learn More →
          </a>
        )}
      </div>
    </article>
  );
}
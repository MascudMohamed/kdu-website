import { EXCHANGE_PROGRAMS } from "../../data/internationalOffice";

export default function ExchangePrograms() {
  return (
    <section id="exchange" className="office-section">

      <h2>Exchange Programs</h2>

      <div className="office-grid">

        {EXCHANGE_PROGRAMS.map((program) => (

          <div
            key={program.university}
            className="office-card"
          >

            <h3>{program.university}</h3>

            <p>{program.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
}
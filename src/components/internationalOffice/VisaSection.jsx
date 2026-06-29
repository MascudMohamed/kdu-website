import { VISA_INFORMATION } from "../../data/internationalOffice";

export default function VisaSection() {
  return (
    <section id="visa" className="office-section">

      <h2>Visa & Immigration</h2>

      <div className="visa-grid">

        {VISA_INFORMATION.map((group) => (

          <div
            className="visa-card"
            key={group.title}
          >

            <h3>{group.title}</h3>

            <ul>

              {group.items.map((item) => (

                <li key={item}>
                  {item}
                </li>

              ))}

            </ul>

          </div>

        ))}

      </div>

    </section>
  );
}
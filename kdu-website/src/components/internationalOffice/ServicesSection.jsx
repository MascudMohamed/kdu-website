import { SERVICES } from "../../data/internationalOffice";

export default function ServicesSection() {
  return (
    <section id="services" className="office-section">

      <h2>Services</h2>

      <div className="office-grid">

        {SERVICES.map((service) => (

          <div
            key={service.title}
            className="office-card"
          >

            <div className="office-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
}
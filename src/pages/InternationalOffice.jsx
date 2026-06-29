import OfficeHero from "../components/internationalOffice/OfficeHero";
import OfficeSubNav from "../components/internationalOffice/OfficeSubNav";

import ServicesSection from "../components/internationalOffice/ServicesSection";
import VisaSection from "../components/internationalOffice/VisaSection";
import ExchangePrograms from "../components/internationalOffice/ExchangePrograms";
import StudentNewsSection from "../components/internationalOffice/StudentNewsSection";

import "../styles/pages/InternationalOffice.css";

export default function InternationalOffice() {
  return (
    <>

      <OfficeHero />

      <OfficeSubNav />

      <main className="office-page">

        <ServicesSection />

        <VisaSection />

        <ExchangePrograms />

        <StudentNewsSection />

      </main>

    </>
  );
}
import ResearchHero from "../components/research/ResearchHero";
import ResearchSubNav from "../components/research/ResearchSubNav";

import ResearchAreas from "../components/research/ResearchAreas";
import ResearchCenters from "../components/research/ResearchCenters";
import PublicationsSection from "../components/research/PublicationsSection";
import InnovationSection from "../components/research/InnovationSection";
import ResearchNews from "../components/research/ResearchNews";
import ResearchHub from "./research/ResearchHub";


import "../styles/pages/Research.css";

export default function Research() {
  return (
    <>
      <ResearchHero />

      <ResearchSubNav />

      <main className="research-page">

        <ResearchAreas />

        <ResearchCenters />

        <PublicationsSection />

        <InnovationSection />

        <ResearchNews />

      </main>
    </>
  );
}
export default ResearchHub;
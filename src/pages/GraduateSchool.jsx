import GraduateHero from "../components/graduate/GraduateHero";
import LeadershipMessage from "../components/common/LeadershipMessage";
import GraduateOverview from "../components/graduate/GraduateOverview";

import graduateData from "../data/academics/graduateData";
import GraduateStatistics from "../components/graduate/GraduateStatistics";
import GraduatePrograms from "../components/graduate/GraduatePrograms";
import GraduateAdvantages from "../components/graduate/GraduateAdvantages";
import GraduateStudyStructure from "../components/graduate/GraduateStudyStructure";
import GraduateCurriculum from "../components/graduate/GraduateCurriculum";
import GraduateScholarships from "../components/graduate/GraduateScholarships";
import GraduateApplicationProcess from "../components/graduate/GraduateApplicationProcess";

import "../styles/pages/GraduateSchool.css";

export default function GraduateSchool() {
  return (
    <div className="graduate-page">

      <GraduateHero hero={graduateData.hero} />

      <LeadershipMessage
        title={graduateData.dean.title}
        name={graduateData.dean.name}
        position={graduateData.dean.position}
        image={graduateData.dean.image}
        message={graduateData.dean.message}
      />
      <GraduateOverview overview={graduateData.overview} />
      <GraduateStatistics statistics={graduateData.statistics} />
      <GraduatePrograms programs={graduateData.programs} />
      <GraduateAdvantages advantages={graduateData.advantages} />
      <GraduateStudyStructure />
      <GraduateCurriculum />
      <GraduateScholarships />
      <GraduateApplicationProcess />
    </div>
  );
}
import graduateData from "../data/academics/graduateData";
import GraduateHero from "../components/graduate/GraduateHero";
import LeadershipMessage from "../components/common/LeadershipMessage";

export default function GraduatePrograms() {
  return (
    <>
      <GraduateHero hero={graduateData.hero} />

      <LeadershipMessage
        title={graduateData.leadership.title}
        leader={graduateData.leadership}
      />
    </>
  );
}
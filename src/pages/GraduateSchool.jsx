import GraduateHero from '../components/graduate/GraduateHero';
import LeadershipMessage from '../components/common/LeadershipMessage';
import GraduateOverview from '../components/graduate/GraduateOverview';
import GraduateStatistics from '../components/graduate/GraduateStatistics';
import GraduatePrograms from '../components/graduate/GraduatePrograms';
import GraduateStudyStructure from '../components/graduate/GraduateStudyStructure';
import GraduateCurriculum from '../components/graduate/GraduateCurriculum';
import GraduateCareers from '../components/graduate/GraduateCareers';
import GraduateFaculty from '../components/graduate/GraduateFaculty';
import GraduateScholarships from '../components/graduate/GraduateScholarships';
import GraduateApplicationProcess from '../components/graduate/GraduateApplicationProcess';
import graduateData from '../data/academics/graduateData';
import '../styles/pages/GraduateSchool.css';

export default function GraduateSchool() {
  return (
    <div className="graduate-page">
      <GraduateHero hero={graduateData.hero} />

      <LeadershipMessage
        title={graduateData.dean.title}
        leader={graduateData.dean}
      />

      <GraduateOverview overview={graduateData.overview} />
      <GraduateStatistics statistics={graduateData.statistics} />
      <GraduatePrograms programs={graduateData.programs} />
      <GraduateStudyStructure courseOutline={graduateData.courseOutline} />
      <GraduateCurriculum curriculum={graduateData.curriculum} />
      <GraduateCareers careers={graduateData.careers} />
      <GraduateFaculty faculty={graduateData.faculty} />
      <GraduateScholarships scholarships={graduateData.scholarships} />
      <GraduateApplicationProcess />
    </div>
  );
}

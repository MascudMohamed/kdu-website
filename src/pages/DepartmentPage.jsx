import DeptHeroV2 from '../components/department/DeptHeroV2';
import DeptWhyProgram from '../components/department/DeptWhyProgram';
import DeptCareerOutcomes from '../components/department/DeptCareerOutcomes';
import DeptCurriculumHighlights from '../components/department/DeptCurriculumHighlights';
import DeptFacultyList from '../components/department/DeptFacultyList';
import DeptResearch from '../components/department/DeptResearch';
import DeptSuccessStories from '../components/department/DeptSuccessStories';
import DeptNewsEditorial from '../components/department/DeptNewsEditorial';
import DeptAdmissionsCTA from '../components/department/DeptAdmissionsCTA';
import DeptContact from '../components/department/DeptContact';
import '../styles/pages/DepartmentPage.css';

export default function DepartmentPage({ department }) {
  return (
    <div className="department-page">
      <DeptHeroV2 department={department} />
      <DeptWhyProgram
        items={department.whyChoose}
        philosophy={department.overview?.philosophy}
        events={department.events}
      />
      <DeptCareerOutcomes
        outcomes={department.careerOutcomes}
        careers={department.careers}
      />
      <DeptCurriculumHighlights
        highlights={department.curriculumHighlights}
        curriculum={department.curriculum}
      />
      <DeptFacultyList faculty={department.faculty} departmentSlug={department.slug} />
      <DeptResearch areas={department.researchAreas} />
      <DeptSuccessStories stories={department.testimonials} />
      <DeptNewsEditorial news={department.news} events={department.events} />
      <DeptAdmissionsCTA
        admissions={department.admissions}
        programTitle={department.title}
      />
      <DeptContact contact={department.contact} programTitle={department.title} />
    </div>
  );
}

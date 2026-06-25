import DeptHeroV2 from '../components/department/DeptHeroV2';
import ChairMessage from '../components/department/ChairMessage';
import WhyChoose from '../components/department/WhyChoose';
import ProgramOverviewV2 from '../components/department/ProgramOverviewV2';
import CurriculumAccordion from '../components/department/CurriculumAccordion';
import FacultyGridPremium from '../components/department/FacultyGridPremium';
import ResearchAreaCardV2 from '../components/department/ResearchAreaCardV2';
import AdmissionIconCards from '../components/department/AdmissionIconCards';
import SuccessStoryCard from '../components/department/SuccessStoryCard';
import CareerCard from '../components/department/CareerCard';
import DepartmentNews from '../components/department/DepartmentNews';
import EventCard from '../components/department/EventCard';
import DepartmentFAQ from '../components/department/DepartmentFAQ';
import ContactSection from '../components/department/ContactSection';
import SectionTitle from '../components/common/SectionTitle';
import NewsCard from '../components/common/NewsCard';
import '../styles/pages/DepartmentPage.css';

function DeptSection({ id, alt, children }) {
  return (
    <section id={id} className={`section ${alt ? 'section--alt' : ''}`}>
      <div className="container">{children}</div>
    </section>
  );
}

export default function DepartmentPage({ department }) {
  const featured = department.news?.[0];

  return (
    <div className="department-page">
      <DeptHeroV2 department={department} />
      <ChairMessage chair={department.chair} />
      <WhyChoose items={department.whyChoose} />
      <ProgramOverviewV2 overview={department.overview} />
      <CurriculumAccordion curriculum={department.curriculum} />
      <FacultyGridPremium faculty={department.faculty} />

      {department.researchAreas?.length > 0 && (
        <DeptSection id="research" alt>
          <SectionTitle subtitle="Research" title="Research Areas" />
          <div className="dept-grid-3">
            {department.researchAreas.map((area) => (
              <ResearchAreaCardV2 key={area.title} area={area} />
            ))}
          </div>
        </DeptSection>
      )}

      <AdmissionIconCards requirements={department.admissions} />

      {department.testimonials?.length > 0 && (
        <DeptSection id="testimonials" alt>
          <SectionTitle subtitle="Alumni" title="Student Success Stories" />
          <div className="dept-grid-2">
            {department.testimonials.map((s) => (
              <SuccessStoryCard key={s.name} story={s} />
            ))}
          </div>
        </DeptSection>
      )}

      {department.careers?.length > 0 && (
        <DeptSection id="careers">
          <SectionTitle subtitle="Careers" title="Career Opportunities" />
          <div className="dept-grid-3">
            {department.careers.map((c) => (
              <CareerCard key={c.title} {...c} />
            ))}
          </div>
        </DeptSection>
      )}

      <DeptSection id="news" alt>
        <SectionTitle subtitle="News" title="News & Events" />
        {featured && (
          <div className="dept-featured-news">
            <NewsCard {...featured} />
          </div>
        )}
        <DepartmentNews news={department.news?.slice(1) || []} showTitle={false} />
        {department.events?.length > 0 && (
          <div className="dept-events">
            <h3 className="dept-events__title">Upcoming Events</h3>
            <div className="dept-grid-2">
              {department.events.map((e) => (
                <EventCard key={e.title} {...e} />
              ))}
            </div>
          </div>
        )}
      </DeptSection>

      <DepartmentFAQ faqs={department.faqs} />
      <ContactSection contact={department.contact} />
    </div>
  );
}

import { Link } from 'react-router-dom';
import DeptPageShell from './DeptPageShell';
import DeptCareerOutcomes from './DeptCareerOutcomes';
import DeptCurriculumHighlights from './DeptCurriculumHighlights';
import DeptSuccessStories from './DeptSuccessStories';
import DeptAdmissionsCTA from './DeptAdmissionsCTA';
import CurriculumAccordion from './CurriculumAccordion';
import Button from '../common/Button';
import { deptPath } from '../../data/departments/navigation';
import '../../styles/components/dept-editorial.css';
import '../../styles/components/DeptSpokeRenderer.css';

function EditorialSections({ sections }) {
  return sections.map((section) => (
    <div key={section.title} className="dept-editorial-section">
      <h3>{section.title}</h3>
      {section.content && <p>{section.content}</p>}
      {section.list && (
        <ul>
          {section.list.map((item) => <li key={item}>{item}</li>)}
        </ul>
      )}
    </div>
  ));
}

function PathwayContent({ page, department }) {
  return (
    <>
      <div className="dept-pathway__intro">
        <p className="dept-prose">{page.lead}</p>
      </div>
      {page.focus && (
        <div className="dept-pathway__block">
          <h3>Focus areas</h3>
          <ul className="dept-pathway__tags">
            {page.focus.map((f) => <li key={f}>{f}</li>)}
          </ul>
        </div>
      )}
      {page.courses && (
        <div className="dept-pathway__block">
          <h3>Key courses</h3>
          <ul>
            {page.courses.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
      )}
      {page.careers?.length > 0 && (
        <div className="dept-pathway__block">
          <h3>Career directions</h3>
          <ul>
            {page.careers.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
      )}
    </>
  );
}

function LabContent({ page }) {
  return (
    <>
      <p className="dept-prose">{page.lead}</p>
      {page.mission && (
        <div className="dept-editorial-section">
          <h3>Mission</h3>
          <p>{page.mission}</p>
        </div>
      )}
      {page.themes && (
        <div className="dept-editorial-section">
          <h3>Research themes</h3>
          <ul>{page.themes.map((t) => <li key={t}>{t}</li>)}</ul>
        </div>
      )}
      {page.equipment && (
        <div className="dept-editorial-section">
          <h3>Facilities & equipment</h3>
          <ul>{page.equipment.map((e) => <li key={e}>{e}</li>)}</ul>
        </div>
      )}
      {page.opportunities && (
        <div className="dept-editorial-section">
          <h3>Student opportunities</h3>
          <p>{page.opportunities}</p>
        </div>
      )}
    </>
  );
}

function CurriculumExperience({ department }) {
  const { semesterExperience, curriculum, curriculumHighlights } = department;

  return (
    <>
      <DeptCurriculumHighlights
        highlights={curriculumHighlights}
        curriculum={curriculum}
      />
      {semesterExperience?.length > 0 && (
        <section className="dept-semester-exp">
          <h2 className="dept-semester-exp__title">Semester learning progression</h2>
          <div className="dept-semester-exp__list">
            {semesterExperience.map((sem) => (
              <article key={sem.semester} className="dept-semester-exp__item">
                <h3>{sem.semester}</h3>
                <dl>
                  <div><dt>Skills</dt><dd>{sem.skills.join(' · ')}</dd></div>
                  <div><dt>Tools</dt><dd>{sem.tools.join(' · ')}</dd></div>
                  <div><dt>Project</dt><dd>{sem.project}</dd></div>
                  <div><dt>Assessment</dt><dd>{sem.assessment}</dd></div>
                </dl>
              </article>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default function DeptSpokeRenderer({ department, page }) {
  const slug = department.slug;

  if (page.type === 'curriculum') {
    return (
      <div className="dept-spoke dept-spoke--curriculum">
        <DeptPageShell
          department={department}
          pageTitle="Curriculum"
          eyebrow={department.title}
          lead="A structured semester-by-semester progression from foundations to specialization, capstone, and career readiness."
          related={[
            { label: 'Programme overview', path: deptPath(slug, 'programme') },
            { label: 'Learning experience', path: deptPath(slug, slug === 'smart-computing' ? 'learning-experience' : 'curriculum') },
            { label: 'Admissions', path: deptPath(slug, 'admissions') },
          ]}
        >
          <CurriculumExperience department={department} />
        </DeptPageShell>
      </div>
    );
  }

  if (page.type === 'stats') {
    return (
      <div className="dept-spoke">
        <DeptPageShell
          department={department}
          pageTitle={page.title}
          eyebrow={page.eyebrow}
          lead={page.lead}
          related={page.related || []}
        >
          <DeptCareerOutcomes
            outcomes={department.careerOutcomes}
            careers={department.careers}
          />
        </DeptPageShell>
      </div>
    );
  }

  if (page.type === 'stories') {
    return (
      <div className="dept-spoke">
        <DeptPageShell
          department={department}
          pageTitle={page.title || 'Student Success Stories'}
          eyebrow={page.eyebrow || 'Alumni'}
          lead="Graduates and students whose journeys reflect the outcomes of our programme."
          related={page.related || [
            { label: 'Career outcomes', path: deptPath(slug, slug === 'english-for-academic-purposes' ? 'pathways' : 'careers') },
            { label: 'Admissions', path: deptPath(slug, 'admissions') },
          ]}
        >
          <DeptSuccessStories stories={department.testimonials} />
        </DeptPageShell>
      </div>
    );
  }

  if (page.type === 'admissions') {
    return (
      <div className="dept-spoke">
        <DeptPageShell
          department={department}
          pageTitle={page.title}
          eyebrow={page.eyebrow}
          lead={page.lead}
          related={[
            { label: 'Scholarships', path: deptPath(slug, 'scholarships') },
            { label: 'FAQ', path: deptPath(slug, 'faq') },
            { label: 'University admissions', path: '/admissions' },
          ]}
        >
          <div className="dept-admissions-info">
            {department.admissions?.timeline && (
              <div className="dept-editorial-section">
                <h3>Key dates</h3>
                <ul>
                  {department.admissions.timeline.map((t) => (
                    <li key={t.event}><strong>{t.date}</strong> — {t.event}</li>
                  ))}
                </ul>
              </div>
            )}
            {department.admissions?.documents && (
              <div className="dept-editorial-section">
                <h3>Required documents</h3>
                <ul>{department.admissions.documents.map((d) => <li key={d}>{d}</li>)}</ul>
              </div>
            )}
          </div>
          <DeptAdmissionsCTA admissions={department.admissions} programTitle={department.title} />
        </DeptPageShell>
      </div>
    );
  }

  if (page.type === 'faq') {
    return (
      <div className="dept-spoke">
        <DeptPageShell
          department={department}
          pageTitle="Frequently Asked Questions"
          eyebrow={department.shortTitle || department.title}
          lead="Answers to common questions from prospective students and families."
          related={[
            { label: 'Admissions', path: deptPath(slug, 'admissions') },
            { label: 'Contact', path: '/contact' },
          ]}
        >
          <dl className="dept-faq-list">
            {department.faqs.map((faq) => (
              <div key={faq.question} className="dept-faq-list__item">
                <dt>{faq.question}</dt>
                <dd>{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </DeptPageShell>
      </div>
    );
  }

  return (
    <div className="dept-spoke">
      <DeptPageShell
        department={department}
        pageTitle={page.title}
        eyebrow={page.eyebrow}
        lead={page.lead}
        related={page.related || []}
      >
        {page.type === 'pathway' && <PathwayContent page={page} department={department} />}
        {page.type === 'lab' && <LabContent page={page} />}
        {page.type === 'editorial' && page.sections && <EditorialSections sections={page.sections} />}
      </DeptPageShell>
    </div>
  );
}

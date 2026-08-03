import Breadcrumb from '../components/common/Breadcrumb';
import GraduateFaculty from '../components/graduate/GraduateFaculty';
import graduateData from '../data/academics/graduateData';
import { useGraduateFaculty } from '../hooks/useGraduateFaculty';
import '../styles/pages/GraduateSchool.css';

export default function GraduateFacultyDirectory() {
  const { faculty } = useGraduateFaculty(graduateData.faculty);

  const crumbs = [
    { label: 'Home', path: '/' },
    { label: 'Academics', path: '/academics' },
    { label: 'Graduate', path: '/academics/graduate' },
    { label: 'Faculty' },
  ];

  return (
    <div className="graduate-faculty-page">
      <header className="graduate-faculty-page__hero">
        <div className="container">
          <Breadcrumb items={crumbs} />
          <p className="graduate-faculty-page__eyebrow">Our People</p>
          <h1>Graduate Faculty Directory</h1>
          <p className="graduate-faculty-page__lead">
            Faculty of the K-Global Graduate School of Business and Technology Convergence —
            AI &amp; Data Science, International Business, and Hospitality &amp; Tourism.
            Professors create one CMS profile and tick “Also list under Graduate School” to appear here.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <GraduateFaculty faculty={faculty} embedded />
        </div>
      </section>
    </div>
  );
}

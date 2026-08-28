import { useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import FacultyProfileDetail from '../components/faculty/FacultyProfileDetail';
import {
  getInternationalFacultyBySlug,
  mapStaticInternationalFaculty,
} from '../data/internationalFaculty';
import { useInternationalFacultyProfile } from '../hooks/useInternationalFacultyProfile';

export default function InternationalFacultyProfile() {
  const { profileSlug } = useParams();
  const staticFaculty = useMemo(
    () => mapStaticInternationalFaculty(getInternationalFacultyBySlug(profileSlug)),
    [profileSlug],
  );
  const { faculty, loading } = useInternationalFacultyProfile(profileSlug, staticFaculty);

  if (loading && !faculty) {
    return (
      <div className="faculty-profile">
        <div className="container" style={{ padding: '3rem 0' }}>
          <p>Loading profile…</p>
        </div>
      </div>
    );
  }

  if (!faculty) {
    return <Navigate to="/academics/faculty" replace />;
  }

  return (
    <FacultyProfileDetail
      faculty={faculty}
      breadcrumbs={[
        { label: 'Home', path: '/' },
        { label: 'Academics', path: '/academics' },
        { label: 'International Faculty', path: '/academics/faculty' },
        { label: faculty.name },
      ]}
      backLink={{
        label: 'Back to international faculty',
        path: '/academics/faculty',
      }}
    />
  );
}

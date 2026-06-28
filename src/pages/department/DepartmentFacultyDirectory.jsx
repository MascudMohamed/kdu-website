import { useOutletContext } from 'react-router-dom';
import DeptPageShell from '../../components/department/DeptPageShell';
import DeptFacultyList from '../../components/department/DeptFacultyList';
import { deptPath } from '../../data/departments/navigation';

export default function DepartmentFacultyDirectory() {
  const { department } = useOutletContext();

  return (
    <DeptPageShell
      department={department}
      pageTitle="Faculty Directory"
      eyebrow="Our People"
      lead="Distinguished educators and researchers. View full academic profiles for biography, publications, courses, and contact information."
      related={[
        { label: 'Programme overview', path: deptPath(department.slug, 'programme') },
        { label: department.slug === 'smart-computing' ? 'Research' : 'Research areas', path: deptPath(department.slug, 'research') },
        { label: 'Admissions', path: deptPath(department.slug, 'admissions') },
      ]}
    >
      <DeptFacultyList faculty={department.faculty} departmentSlug={department.slug} embedded />
    </DeptPageShell>
  );
}

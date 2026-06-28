import { Navigate, useOutletContext, useParams } from 'react-router-dom';
import { getDepartmentPageContent } from '../../data/departments';
import DeptSpokeRenderer from '../../components/department/DeptSpokeRenderer';

export default function DepartmentSpoke() {
  const { department } = useOutletContext();
  const { '*': pagePath } = useParams();
  const page = getDepartmentPageContent(department.slug, pagePath || '');

  if (!page) {
    return <Navigate to={department.path} replace />;
  }

  return <DeptSpokeRenderer department={department} page={page} />;
}

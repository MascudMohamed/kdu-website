import { Navigate, useParams } from 'react-router-dom';
import { getEngagementPage } from '../../data/engagement';
import EngagementSpokeRenderer from '../../components/engagement/EngagementSpokeRenderer';

export default function EngagementSpoke() {
  const { pageSlug } = useParams();
  const page = getEngagementPage(pageSlug);

  if (!page) {
    return <Navigate to="/engagement" replace />;
  }

  return <EngagementSpokeRenderer page={page} />;
}

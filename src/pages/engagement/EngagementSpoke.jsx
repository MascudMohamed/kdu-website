import { Navigate, useParams } from 'react-router-dom';
import { CDC_WEBSITE_URL, getEngagementPage } from '../../data/engagement';
import EngagementSpokeRenderer from '../../components/engagement/EngagementSpokeRenderer';

export default function EngagementSpoke() {
  const { pageSlug } = useParams();

  if (pageSlug === 'cdc') {
    window.location.replace(CDC_WEBSITE_URL);
    return null;
  }

  if (pageSlug === 'public-events') {
    window.location.replace('/international-office#public-events');
    return null;
  }

  if (pageSlug === 'global-collaboration' || pageSlug === 'exchange-programs') {
    return <Navigate to="/engagement/academic-collaboration" replace />;
  }

  const page = getEngagementPage(pageSlug);

  if (!page) {
    return <Navigate to="/engagement" replace />;
  }

  return <EngagementSpokeRenderer page={page} />;
}

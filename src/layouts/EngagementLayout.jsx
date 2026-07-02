import { Outlet } from 'react-router-dom';
import EngagementSubNav from '../components/engagement/EngagementSubNav';
import '../styles/layouts/EngagementLayout.css';

export default function EngagementLayout() {
  return (
    <div className="engagement-layout">
      <EngagementSubNav />
      <Outlet />
    </div>
  );
}

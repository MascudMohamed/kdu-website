import { Link, Navigate, useParams } from 'react-router-dom';
import Breadcrumb from '../common/Breadcrumb';
import Button from '../common/Button';
import { useClub } from '../../hooks/useClubs';
import '../../styles/components/EngagementClubs.css';

export default function EngagementClubDetail() {
  const { clubSlug } = useParams();
  const { club, status } = useClub(clubSlug);

  if (!club && status !== 'loading') {
    return <Navigate to="/engagement/clubs" replace />;
  }

  if (!club) {
    return (
      <div className="container" style={{ padding: '4rem 0' }}>
        <p>Loading club…</p>
      </div>
    );
  }

  const crumbs = [
    { label: 'Home', path: '/' },
    { label: 'Engagement', path: '/engagement' },
    { label: 'Student Clubs', path: '/engagement/clubs' },
    { label: club.name },
  ];

  return (
    <div className="engagement-club-detail">
      <header className="engagement-club-detail__hero">
        {club.image && (
          <img src={club.image} alt="" className="engagement-club-detail__hero-bg" />
        )}
        <div className="engagement-club-detail__hero-overlay" />
        <div className="container engagement-club-detail__hero-content">
          <Breadcrumb items={crumbs} />
          <span className="engagement-club-detail__category">{club.category}</span>
          <h1>{club.name}</h1>
          <p className="engagement-club-detail__tagline">{club.tagline}</p>
          {club.openToJoin && <span className="engagement-club-detail__open">Open to join</span>}
        </div>
      </header>

      <div className="container engagement-club-detail__body">
        <div className="engagement-club-detail__grid">
          <div className="engagement-club-detail__main">
            <h2>About this club</h2>
            <p>{club.description}</p>

            {club.activities?.length > 0 && (
              <div className="engagement-club-detail__block">
                <h3>What we do</h3>
                <ul>
                  {club.activities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {club.committee?.length > 1 && (
              <div className="engagement-club-detail__block">
                <h3>Committee</h3>
                <ul>
                  {club.committee.map((member) => (
                    <li key={`${member.name}-${member.role}`}>
                      <strong>{member.name}</strong>
                      {' — '}
                      {member.role}
                      {member.program ? ` · ${member.program}` : ''}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <aside className="engagement-club-detail__sidebar">
            <div className="engagement-club-detail__panel">
              <h3>Meeting details</h3>
              <dl>
                <div>
                  <dt>When</dt>
                  <dd>
                    {club.meetingDay} · {club.meetingTime}
                  </dd>
                </div>
                <div>
                  <dt>Where</dt>
                  <dd>{club.meetingVenue}</dd>
                </div>
                <div>
                  <dt>Members</dt>
                  <dd>{club.members} students</dd>
                </div>
                {club.languages?.length > 0 && (
                  <div>
                    <dt>Languages</dt>
                    <dd>{club.languages.join(', ')}</dd>
                  </div>
                )}
              </dl>
            </div>

            {club.leader && (
              <div className="engagement-club-detail__panel">
                <h3>Club leadership</h3>
                <p className="engagement-club-detail__leader-name">{club.leader.name}</p>
                <p className="engagement-club-detail__leader-role">
                  {club.leader.role}
                  {club.leader.program ? ` · ${club.leader.program}` : ''}
                </p>
              </div>
            )}

            <Button to="/contact" variant="primary" size="lg">
              Express interest
            </Button>
            <Link to="/engagement/clubs" className="dept-link-arrow engagement-club-detail__back">
              Back to all clubs
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}

import EngagementPageShell, {
  EngagementStats,
  EngagementInitiatives,
  EngagementSpotlight,
  EngagementCta,
} from './EngagementPageShell';
import '../../styles/components/dept-editorial.css';
import '../../styles/components/EngagementSpoke.css';

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

function PartnerList({ partners }) {
  if (!partners?.length) return null;
  return (
    <div className="engagement-partners">
      <h2 className="engagement-partners__title">Partners & collaborators</h2>
      <div className="engagement-partners__grid">
        {partners.map((p) => (
          <article key={p.name} className="engagement-partners__card">
            <h3>{p.name}</h3>
            {p.country && <p className="engagement-partners__meta">{p.country}</p>}
            <p>{p.description || p.note}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function EventList({ events }) {
  if (!events?.length) return null;
  return (
    <div className="engagement-events">
      <h2 className="engagement-events__title">Upcoming highlights</h2>
      <ul className="engagement-events__list">
        {events.map((event) => (
          <li key={event.title} className="engagement-events__item">
            <span className="engagement-events__type">{event.type}</span>
            <div>
              <h3>{event.title}</h3>
              <p>{event.date} · {event.venue}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StoryList({ stories }) {
  if (!stories?.length) return null;
  return (
    <div className="engagement-stories">
      <h2 className="engagement-stories__title">Alumni voices</h2>
      <div className="engagement-stories__grid">
        {stories.map((story) => (
          <blockquote key={story.name} className="engagement-stories__quote">
            <p>&ldquo;{story.quote}&rdquo;</p>
            <footer>
              <strong>{story.name}</strong>
              <span>{story.role}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  );
}

export default function EngagementSpokeRenderer({ page }) {
  return (
    <EngagementPageShell
      pageTitle={page.title}
      eyebrow={page.eyebrow}
      lead={page.lead}
      related={page.related}
    >
      <EngagementStats stats={page.stats} />
      <EditorialSections sections={page.sections} />
      <EngagementInitiatives initiatives={page.initiatives} />
      <PartnerList partners={page.partners} />
      <EventList events={page.events} />
      <StoryList stories={page.stories} />
      <EngagementSpotlight spotlight={page.spotlight} />
      <EngagementCta cta={page.cta} />
    </EngagementPageShell>
  );
}

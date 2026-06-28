import DeptSectionHeader from './DeptSectionHeader';
import '../../styles/components/dept-editorial.css';
import '../../styles/components/DeptSuccessStories.css';

export default function DeptSuccessStories({ stories }) {
  if (!stories?.length) return null;

  return (
    <section className="dept-section dept-section--alt dept-stories" id="success">
      <div className="container">
        <DeptSectionHeader
          eyebrow="Alumni & Students"
          title="Student success stories"
          lead="Graduates who exemplify the professional outcomes and global reach of our program."
        />
        <div className="dept-stories__list">
          {stories.map((story, i) => (
            <blockquote key={story.name} className="dept-stories__item">
              <p className="dept-stories__quote">&ldquo;{story.quote}&rdquo;</p>
              <footer className="dept-stories__author">
                <img src={story.photo} alt="" loading="lazy" width="64" height="64" />
                <div>
                  <cite>{story.name}</cite>
                  <span>{story.position || story.role}</span>
                  {story.program && <span className="dept-stories__program">{story.program}</span>}
                </div>
              </footer>
              {i < stories.length - 1 && <hr className="dept-stories__divider" aria-hidden="true" />}
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

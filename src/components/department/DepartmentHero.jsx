import Breadcrumb from '../common/Breadcrumb';
import '../../styles/components/DepartmentHero.css';

export default function DepartmentHero({ title, description, bannerImage, breadcrumbs }) {
  return (
    <section className="dept-hero" aria-label={`${title} department`}>
      <img src={bannerImage} alt="" className="dept-hero__bg" />
      <div className="dept-hero__overlay" />
      <div className="container dept-hero__content">
        <Breadcrumb items={breadcrumbs} />
        <h1 className="dept-hero__title">{title}</h1>
        <p className="dept-hero__description">{description}</p>
      </div>
    </section>
  );
}

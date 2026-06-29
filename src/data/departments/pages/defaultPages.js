/** Minimum spoke pages every department inherits (same layout, swap content per slug). */
export function createDefaultPages(slug, title) {
  const base = `/academics/undergraduate/${slug}`;
  const related = (links) => links.map(({ label, path }) => ({ label, path: `${base}/${path}` }));

  return {
    programme: {
      type: 'editorial',
      title: 'Programme Overview',
      eyebrow: title,
      lead: `Learn about the structure, outcomes, and academic identity of ${title} at KDU Global Campus.`,
      sections: [
        {
          title: 'Programme structure',
          content: 'Contact the department to publish the official programme structure, credit requirements, and accreditation details.',
        },
        {
          title: 'Graduate outcomes',
          content: 'Graduate attributes and learning outcomes will be published here as they are finalized by the academic team.',
        },
      ],
      related: related([
        { label: 'Curriculum', path: 'curriculum' },
        { label: 'Faculty directory', path: 'faculty' },
        { label: 'Admissions', path: 'admissions' },
      ]),
    },
    curriculum: { type: 'curriculum' },
    admissions: {
      type: 'admissions',
      title: 'Admissions',
      eyebrow: 'Apply',
      lead: `Apply to ${title}. Our admissions team supports international applicants through every step.`,
    },
    scholarships: {
      type: 'editorial',
      title: 'Scholarships',
      eyebrow: 'Financial Support',
      lead: 'Merit-based and need-based scholarships may be available for qualified applicants.',
      sections: [
        {
          title: 'Scholarship information',
          content: 'Scholarship details for this programme will be published here. See the central admissions page for current university-wide awards.',
        },
      ],
      related: related([{ label: 'Admissions', path: 'admissions' }]),
    },
    faq: { type: 'faq' },
  };
}

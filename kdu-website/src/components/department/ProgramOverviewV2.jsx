import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import '../../styles/components/ProgramOverviewV2.css';

export default function ProgramOverviewV2({ overview }) {
  const blocks = [
    { title: 'Educational Philosophy', content: overview.philosophy, type: 'text' },
    { title: 'Learning Outcomes', content: overview.outcomes, type: 'list' },
    { title: 'Graduate Attributes', content: overview.graduateAttributes, type: 'list' },
    { title: 'Career Readiness', content: overview.careerReadiness, type: 'text' },
    { title: 'Program Objectives', content: overview.objectives, type: 'list' },
  ].filter((b) => b.content && (Array.isArray(b.content) ? b.content.length : true));

  return (
    <section className="section program-overview-v2" id="overview">
      <div className="container">
        <SectionTitle
          subtitle="Program"
          title="Program Overview"
          description="A comprehensive foundation for academic achievement and professional success."
        />
        <div className="program-overview-v2__grid">
          {blocks.map((block, i) => (
            <motion.div
              key={block.title}
              className="program-overview-v2__card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <h3>{block.title}</h3>
              {block.type === 'text' ? (
                <p>{block.content}</p>
              ) : (
                <ul>
                  {block.content.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

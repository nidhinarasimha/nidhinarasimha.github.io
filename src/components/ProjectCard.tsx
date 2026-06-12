import { motion } from 'framer-motion';
import { Project } from '../data/portfolio';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import Tilt from 'react-parallax-tilt';

export default function ProjectCard({ project, tone = 'dark' }: { project: Project; tone?: 'dark' | 'light' }) {
  const { isDark } = useTheme();
  const accent = isDark ? '#7dd3fc' : '#38bdf8';

  const cardStyle = isDark && tone === 'dark'
    ? { background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.08)' }
    : undefined;

  const cardBase = isDark && tone === 'dark'
    ? 'rounded-3xl shadow-2xl shadow-black/60'
    : 'rounded-3xl border border-sky-200 bg-white shadow-xl shadow-sky-100/60';

  const pillStyle = isDark && tone === 'dark'
    ? { background: 'rgba(125,211,252,0.1)', border: '1px solid rgba(125,211,252,0.2)' }
    : undefined;
  const pillBase = isDark && tone === 'dark'
    ? 'rounded-full px-3 py-1 text-xs text-white'
    : 'rounded-full px-3 py-1 text-xs bg-[#e0f2fe] text-[#0369a1]';

  const textPrimary = isDark && tone === 'dark' ? 'text-white' : 'text-[#0c1a2e]';
  const textMeta = isDark && tone === 'dark' ? 'text-white/55' : 'text-[#4a6480]';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
    >
      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        perspective={1000}
        transitionSpeed={1500}
        scale={1.02}
        gyroscope={true}
        glareEnable={true}
        glareMaxOpacity={0.15}
        glareColor={isDark ? "white" : "lightblue"}
        glarePosition="all"
        className={`group p-6 transition-colors duration-300 ${cardBase}`}
        style={cardStyle}
      >
        <article
          onMouseEnter={e => {
            if (isDark && tone === 'dark') e.currentTarget.parentElement!.style.borderColor = 'rgba(125,211,252,0.3)';
            else e.currentTarget.parentElement!.style.borderColor = accent;
          }}
          onMouseLeave={e => {
            if (isDark && tone === 'dark') e.currentTarget.parentElement!.style.borderColor = 'rgba(255,255,255,0.08)';
            else e.currentTarget.parentElement!.style.borderColor = '';
          }}
        >
          <div className="mb-4">
            <h3 className={`text-xl font-semibold ${textPrimary}`}>{project.title}</h3>
            {project.status && (
              <p className="mt-1 text-xs uppercase tracking-[0.24em] text-gradient">{project.status}</p>
            )}
            <p className={`mt-1 text-sm ${textMeta}`}>{project.summary}</p>
          </div>
          <div className="mb-5 flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <span key={tech} className={pillBase} style={pillStyle}>{tech}</span>
            ))}
          </div>
          <Link
            to={`/projects/${project.slug}`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80 text-gradient"
          >
            View details →
          </Link>
        </article>
      </Tilt>
    </motion.div>
  );
}

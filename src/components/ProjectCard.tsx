import { motion } from 'framer-motion';
import { Project } from '../data/portfolio';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

export default function ProjectCard({ project, tone = 'dark' }: { project: Project; tone?: 'dark' | 'light' }) {
  const { isDark } = useTheme();
  const accent = isDark ? '#c084fc' : '#f472b6';

  const cardStyle = isDark && tone === 'dark'
    ? { background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.08)' }
    : undefined;

  const cardBase = isDark && tone === 'dark'
    ? 'rounded-3xl shadow-2xl shadow-black/60'
    : 'rounded-3xl border border-pink-100 bg-white shadow-xl shadow-pink-100/60';

  const pillStyle = isDark && tone === 'dark'
    ? { background: 'rgba(192,132,252,0.1)', border: '1px solid rgba(192,132,252,0.2)' }
    : undefined;
  const pillBase = isDark && tone === 'dark'
    ? 'rounded-full px-3 py-1 text-xs text-white'
    : 'rounded-full px-3 py-1 text-xs bg-[#fce7f3] text-[#9d174d]';

  const textPrimary = isDark && tone === 'dark' ? 'text-white' : 'text-[#1c0a14]';
  const textMeta = isDark && tone === 'dark' ? 'text-white/55' : 'text-[#6b3a51]';

  return (
    <motion.article
      className={`group p-6 transition hover:-translate-y-1 ${cardBase}`}
      style={cardStyle}
      onMouseEnter={e => {
        if (isDark && tone === 'dark') e.currentTarget.style.borderColor = 'rgba(192,132,252,0.3)';
        else e.currentTarget.style.borderColor = accent;
      }}
      onMouseLeave={e => {
        if (isDark && tone === 'dark') e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
        else e.currentTarget.style.borderColor = '';
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
    >
      <div className="mb-4">
        <h3 className={`text-xl font-semibold ${textPrimary}`}>{project.title}</h3>
        {project.status && (
          <p className="mt-1 text-xs uppercase tracking-[0.24em]" style={{ color: accent }}>{project.status}</p>
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
        className="text-sm font-medium transition hover:opacity-75"
        style={{ color: accent }}
      >
        View details →
      </Link>
    </motion.article>
  );
}

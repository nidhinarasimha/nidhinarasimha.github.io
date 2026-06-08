import { motion } from 'framer-motion';
import { Project } from '../data/portfolio';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project, tone = 'dark' }: { project: Project; tone?: 'dark' | 'light' }) {
  const cardTone = tone === 'light'
    ? 'border-slate-200 bg-white/95 text-[#0a192f] shadow-slate-200/70 hover:border-[#64ffda]'
    : 'border-white/10 bg-[#112240]/80 text-white shadow-black/20 hover:border-[#64ffda]';
  const textTone = tone === 'light' ? 'text-[#0a192f]' : 'text-white';
  const metaTone = tone === 'light' ? 'text-slate-700' : 'text-slate-300';
  const pillTone = tone === 'light' ? 'bg-[#edf4ff] text-[#1e293b]' : 'bg-white/5 text-slate-200';
  const linkTone = tone === 'light' ? 'text-[#0f766e] hover:text-[#0b5a53]' : 'text-[#64ffda] hover:text-white';

  return (
    <motion.article
      className={`group rounded-3xl border p-6 shadow-xl transition hover:-translate-y-1 ${cardTone}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h3 className={`text-xl font-semibold ${textTone}`}>{project.title}</h3>
          {project.status && (
            <p className="mt-1 text-xs uppercase tracking-[0.24em] text-[#64ffda]">{project.status}</p>
          )}
          <p className={`mt-1 text-sm ${metaTone}`}>{project.summary}</p>
        </div>
      </div>
      <div className="mb-5 flex flex-wrap gap-2">
        {project.techStack.slice(0, 4).map((tech) => (
          <span key={tech} className={`rounded-full px-3 py-1 text-xs ${pillTone}`}>
            {tech}
          </span>
        ))}
      </div>
      <Link
        to={`/projects/${project.slug}`}
        className={`text-sm font-medium transition ${linkTone}`}
      >
        View details →
      </Link>
    </motion.article>
  );
}

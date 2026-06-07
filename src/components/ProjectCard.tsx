import { motion } from 'framer-motion';
import { Project } from '../data/portfolio';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      className="group rounded-3xl border border-white/10 bg-[#112240]/80 p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-[#64ffda]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          {project.status && (
            <p className="mt-1 text-xs uppercase tracking-[0.24em] text-[#64ffda]">{project.status}</p>
          )}
          <p className="mt-1 text-sm text-slate-300">{project.summary}</p>
        </div>
      </div>
      <div className="mb-5 flex flex-wrap gap-2">
        {project.techStack.slice(0, 4).map((tech) => (
          <span key={tech} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-200">
            {tech}
          </span>
        ))}
      </div>
      <Link
        to={`/projects/${project.slug}`}
        className="text-sm font-medium text-[#64ffda] transition hover:text-white"
      >
        View details →
      </Link>
    </motion.article>
  );
}

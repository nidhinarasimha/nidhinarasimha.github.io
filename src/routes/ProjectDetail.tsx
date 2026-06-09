import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolio';
import SectionHeading from '../components/SectionHeading';
import { useTheme } from '../contexts/ThemeContext';

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const d = isDark;

  const project = useMemo(
    () => projects.find((entry) => entry.slug === slug),
    [slug]
  );

  const accentColor = d ? '#64ffda' : '#0066cc';
  const accentHover = d ? '#52e0bf' : '#0055bb';
  const pageBg = d ? 'bg-[#0a192f] text-slate-100' : 'bg-[#f8faff] text-[#0f172a]';
  const backBtn = d
    ? 'border-white/10 bg-white/5 text-white hover:border-[#64ffda] hover:text-[#64ffda]'
    : 'border-slate-200 bg-white text-[#0f172a] hover:border-[#0066cc] hover:text-[#0066cc]';
  const outerCard = d ? 'border-white/10 bg-[#112240]/95' : 'border-slate-200 bg-white';
  const leftPanel = d ? 'border-white/10 bg-[#0a192f]' : 'border-slate-200 bg-[#f0f8ff]';
  const rightPanel = d ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-[#edf4ff]';
  const textPrimary = d ? 'text-white' : 'text-[#0f172a]';
  const textSec = d ? 'text-slate-300' : 'text-slate-600';
  const techPill = d ? 'bg-[#0a192f] text-slate-100' : 'bg-[#dbeafe] text-[#1e3a5f]';

  if (!project) {
    return (
      <div className={`mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center px-6 py-24 text-center sm:px-8 ${pageBg}`}>
        <h2 className={`text-3xl font-semibold ${textPrimary}`}>Project not found</h2>
        <p className={`mt-4 ${textSec}`}>Please return to the portfolio and select a valid project.</p>
        <button
          onClick={() => navigate('/')}
          className="mt-8 rounded-full px-6 py-3 text-sm font-semibold transition"
          style={{ background: accentColor, color: '#0a192f' }}
          onMouseEnter={e => (e.currentTarget.style.background = accentHover)}
          onMouseLeave={e => (e.currentTarget.style.background = accentColor)}
        >
          Back to portfolio
        </button>
      </div>
    );
  }

  return (
    <motion.section
      className={`min-h-screen px-6 py-24 sm:px-8 transition-colors duration-300 ${pageBg}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <button
          onClick={() => navigate('/')}
          className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm transition ${backBtn}`}
        >
          ← Back to portfolio
        </button>

        <div className={`rounded-[2rem] border p-10 shadow-xl ${outerCard}`}>
          <SectionHeading title="Project Detail" subtitle={project.title} />
          {project.status && (
            <p className="mt-2 text-sm uppercase tracking-[0.24em]" style={{ color: accentColor }}>{project.status}</p>
          )}
          <p className={`max-w-3xl ${textSec}`}>{project.description}</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className={`space-y-6 rounded-3xl border p-8 ${leftPanel}`}>
              <div>
                <h3 className={`text-lg font-semibold ${textPrimary}`}>Problem solved</h3>
                <p className={`mt-3 ${textSec}`}>{project.problem}</p>
              </div>
              <div>
                <h3 className={`text-lg font-semibold ${textPrimary}`}>Features</h3>
                <ul className={`mt-4 space-y-3 ${textSec}`}>
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full" style={{ background: accentColor }}></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={`rounded-3xl border p-8 ${rightPanel}`}>
              <div>
                <h3 className={`text-lg font-semibold ${textPrimary}`}>Tech stack</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {project.techStack.map((tech) => (
                    <span key={tech} className={`rounded-full px-4 py-2 text-sm ${techPill}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition"
                style={{ background: accentColor, color: '#0a192f' }}
                onMouseEnter={e => (e.currentTarget.style.background = accentHover)}
                onMouseLeave={e => (e.currentTarget.style.background = accentColor)}
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

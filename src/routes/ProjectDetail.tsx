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

  const project = useMemo(() => projects.find((entry) => entry.slug === slug), [slug]);

  const accent = d ? '#7dd3fc' : '#38bdf8';
  const accentHover = d ? '#38bdf8' : '#0ea5e9';

  const glass = d
    ? { background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.08)' }
    : undefined;
  const glassStrong = d
    ? { background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(28px)', WebkitBackdropFilter: 'blur(28px)', border: '1px solid rgba(255,255,255,0.1)' }
    : undefined;

  const textPrimary = d ? 'text-white' : 'text-[#0c1a2e]';
  const textSec = d ? 'text-white/60' : 'text-[#4a6480]';

  const backBtnStyle = d
    ? { border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(8px)' }
    : { border: '1px solid #bae6fd', background: '#ffffff', color: '#0c1a2e' };

  const techPillStyle = d
    ? { background: 'rgba(125,211,252,0.1)', border: '1px solid rgba(125,211,252,0.2)' }
    : undefined;
  const techPillBase = d ? 'rounded-full px-4 py-2 text-sm text-white' : 'rounded-full px-4 py-2 text-sm bg-[#e0f2fe] text-[#0369a1]';

  if (!project) {
    return (
      <div className={`mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center px-6 py-12 md:py-20 text-center sm:px-8 ${d ? '' : 'bg-[#f0f9ff]'}`}>
        <h2 className={`text-3xl font-semibold ${textPrimary}`}>Project not found</h2>
        <p className={`mt-4 ${textSec}`}>Please return to the portfolio and select a valid project.</p>
        <button
          onClick={() => navigate('/')}
          className="mt-8 rounded-full px-6 py-3 text-sm font-semibold transition"
          style={{ background: accent, color: '#000000', boxShadow: `0 0 24px ${accent}44` }}
          onMouseEnter={e => (e.currentTarget.style.background = accentHover)}
          onMouseLeave={e => (e.currentTarget.style.background = accent)}
        >
          Back to portfolio
        </button>
      </div>
    );
  }

  return (
    <motion.section
      className={`px-6 pt-12 pb-20 md:pt-16 md:pb-28 sm:px-8 min-h-[80vh] ${d ? '' : 'bg-[#f0f9ff] text-[#0c1a2e]'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <button
          onClick={() => navigate('/')}
          className="inline-flex w-fit items-center gap-2 rounded-full px-5 py-3 text-sm transition hover:opacity-80"
          style={backBtnStyle}
          onMouseEnter={e => d && (e.currentTarget.style.borderColor = `${accent}44`)}
          onMouseLeave={e => d && (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
        >
          ← Back to portfolio
        </button>

        <div
          className="rounded-[2rem] p-10 shadow-2xl"
          style={d ? { ...glassStrong, boxShadow: `0 25px 60px rgba(0,0,0,0.6), 0 0 80px rgba(125,211,252,0.06)` } : { background: '#ffffff', border: '1px solid #bae6fd', boxShadow: '0 20px 40px rgba(56,189,248,0.08)' }}
        >
          <SectionHeading title="Project Detail" subtitle={project.title} />
          {project.status && (
            <p className="mt-2 text-sm uppercase tracking-[0.24em] text-gradient">{project.status}</p>
          )}
          <p className={`max-w-3xl ${textSec}`}>{project.description}</p>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div
              className="space-y-6 rounded-3xl p-8"
              style={d ? glass : { background: '#f0f9ff', border: '1px solid #bae6fd' }}
            >
              <div>
                <h3 className={`text-lg font-semibold ${textPrimary}`}>Problem solved</h3>
                <p className={`mt-3 ${textSec}`}>{project.problem}</p>
              </div>
              <div>
                <h3 className={`text-lg font-semibold ${textPrimary}`}>Features</h3>
                <ul className={`mt-4 space-y-3 ${textSec}`}>
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full" style={{ background: accent }}></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className="rounded-3xl p-8"
              style={d ? glass : { background: '#e0f2fe', border: '1px solid #bae6fd' }}
            >
              <h3 className={`text-lg font-semibold ${textPrimary}`}>Tech stack</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span key={tech} className={techPillBase} style={techPillStyle}>{tech}</span>
                ))}
              </div>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition"
                style={{ background: accent, color: '#000000', boxShadow: d ? `0 0 24px ${accent}44` : `0 4px 20px ${accent}44` }}
                onMouseEnter={e => (e.currentTarget.style.background = accentHover)}
                onMouseLeave={e => (e.currentTarget.style.background = accent)}
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

import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolio';
import SectionHeading from '../components/SectionHeading';

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = useMemo(
    () => projects.find((entry) => entry.slug === slug),
    [slug]
  );

  if (!project) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center px-6 py-24 text-center sm:px-8">
        <h2 className="text-3xl font-semibold text-white">Project not found</h2>
        <p className="mt-4 text-slate-300">Please return to the portfolio and select a valid project.</p>
        <button
          onClick={() => navigate('/')}
          className="mt-8 rounded-full bg-[#64ffda] px-6 py-3 text-sm font-semibold text-[#0a192f] transition hover:bg-[#52e0bf]"
        >
          Back to portfolio
        </button>
      </div>
    );
  }

  return (
    <motion.section
      className="min-h-screen bg-[#0a192f] px-6 py-24 text-slate-100 sm:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white transition hover:border-[#64ffda] hover:text-[#64ffda]"
        >
          ← Back to portfolio
        </button>

        <div className="rounded-[2rem] border border-white/10 bg-[#112240]/95 p-10 shadow-xl shadow-black/20">
          <SectionHeading title="Project Detail" subtitle={project.title} />
          {project.status && (
            <p className="mt-2 text-sm uppercase tracking-[0.24em] text-[#64ffda]">{project.status}</p>
          )}
          <p className="max-w-3xl text-slate-300">{project.description}</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="space-y-6 rounded-3xl border border-white/10 bg-[#0a192f] p-8">
              <div>
                <h3 className="text-lg font-semibold text-white">Problem solved</h3>
                <p className="mt-3 text-slate-300">{project.problem}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Features</h3>
                <ul className="mt-4 space-y-3 text-slate-300">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#64ffda]"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div>
                <h3 className="text-lg font-semibold text-white">Tech stack</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="rounded-full bg-[#0a192f] px-4 py-2 text-sm text-slate-100">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#64ffda] px-6 py-3 text-sm font-semibold text-[#0a192f] transition hover:bg-[#52e0bf]"
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
